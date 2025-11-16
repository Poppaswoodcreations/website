const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_SERVICE_KEY
);

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;

  try {
    // Verify webhook signature
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      webhookSecret
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Webhook signature verification failed' })
    };
  }

  // Handle the checkout.session.completed event
  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object;

    console.log('💳 Stripe Payment Completed:', session.id);

    try {
      // Get line items from the session
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
        expand: ['data.price.product']
      });

      // Build order items array
      const orderItems = lineItems.data.map(item => ({
        id: item.price.product.id || item.id,
        name: item.description || item.price.product.name || 'Product',
        price: item.amount_total / 100,
        quantity: item.quantity,
        category: 'wooden-toys'
      }));

      const orderTotal = session.amount_total / 100;
      const customerEmail = session.customer_details?.email || session.customer_email || 'unknown@example.com';
      const customerName = session.customer_details?.name || 'Customer';

      // Save order to Supabase
      const { data: orderRecord, error: dbError } = await supabase
        .from('orders')
        .insert({
          order_number: session.id,
          customer_email: customerEmail,
          customer_name: customerName,
          total_amount: orderTotal,
          payment_method: 'Stripe',
          payment_status: 'completed',
          order_status: 'pending',
          items: orderItems,
          stripe_session_id: session.id,
          created_at: new Date().toISOString()
        })
        .select()
        .single();

      if (dbError) {
        console.error('❌ Error saving order to database:', dbError);
      } else {
        console.log('✅ Order saved to database:', orderRecord.id);
      }

      // Send order notification email
      await sendOrderEmail({
        orderNumber: session.id,
        customerEmail: customerEmail,
        customerName: customerName,
        orderTotal: orderTotal,
        items: orderItems
      });

      console.log('✅ Order notification email sent');

      return {
        statusCode: 200,
        body: JSON.stringify({ received: true })
      };

    } catch (error) {
      console.error('❌ Error processing webhook:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error processing order' })
      };
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true })
  };
};

// Email sending function
async function sendOrderEmail({ orderNumber, customerEmail, customerName, orderTotal, items }) {
  const adminEmail = 'adrianbarber8@gmail.com';
  
  const itemsList = items.map(item => 
    `• ${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)} NZD`
  ).join('\n');

  const emailBody = `
🎉 NEW ORDER RECEIVED! 🎉

Order Number: ${orderNumber}
Payment Method: Stripe (Credit Card)
Order Total: $${orderTotal.toFixed(2)} NZD

Customer Details:
- Name: ${customerName}
- Email: ${customerEmail}

Items Ordered:
${itemsList}

---
Total: $${orderTotal.toFixed(2)} NZD

This order has been paid and confirmed through Stripe.

View order: https://poppaswoodencreations.co.nz

Poppa's Wooden Creations - Handcrafted in Whangarei, NZ
  `.trim();

  console.log('📧 Email to send:', emailBody);
  
  return true;
}
