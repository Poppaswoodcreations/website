
import React, { useEffect, useState } from 'react';
import { CheckCircle, Package, Mail, Phone } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { trackPurchase } from '../utils/gtmTracking';
import { sendOrderNotification } from '../utils/orderNotifications';
import { supabase } from '../lib/supabase';

const StripeSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const processOrder = async () => {
      if (!sessionId) {
        setError('No session ID found');
        setLoading(false);
        return;
      }

      try {
        // Get order data from localStorage
        const orderDataStr = localStorage.getItem('stripe-order-data');
        if (!orderDataStr) {
          console.error('No order data found in localStorage');
          setLoading(false);
          return;
        }

        const orderData = JSON.parse(orderDataStr);
        
        // Track purchase in GTM
        trackPurchase({
          transactionId: sessionId,
          total: orderData.total || 0,
          currency: 'NZD',
          products: orderData.items.map((item: any) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            category: item.category || 'Wooden Toys',
          }))
        });
        
        console.log('✅ Stripe purchase tracked in GTM:', sessionId);

        // Save order to Supabase
        try {
          const { data: orderRecord, error: dbError } = await supabase
            .from('orders')
            .insert({
              order_number: sessionId,
              customer_email: orderData.customerEmail || 'unknown@example.com',
              total_amount: orderData.total || 0,
              payment_method: 'Stripe',
              payment_status: 'completed',
              order_status: 'pending',
              items: orderData.items,
              created_at: new Date().toISOString()
            })
            .select()
            .single();

          if (dbError) {
            console.error('Error saving order to database:', dbError);
          } else {
            console.log('✅ Order saved to database:', orderRecord);
          }
        } catch (dbErr) {
          console.error('Database error:', dbErr);
        }

        // Send order notification email
        try {
          await sendOrderNotification({
            orderTotal: orderData.total || 0,
            items: orderData.items.map((item: any) => ({
              product: {
                id: item.id,
                name: item.name,
                price: item.price,
                images: [],
                description: '',
                category: item.category || 'wooden-toys',
                featured: false,
                stockQuantity: 0,
                slug: ''
              },
              quantity: item.quantity,
              id: item.id
            })),
            customer: {
              email: orderData.customerEmail || 'unknown@example.com',
              name: 'Stripe Customer',
              address: '',
              city: '',
              postalCode: '',
              country: 'NZ',
              deliveryMethod: 'shipping',
              cardNumber: '',
              expiryDate: '',
              cvv: ''
            },
            paymentMethod: 'Stripe (Credit Card)',
            orderNumber: sessionId
          });
          
          console.log('✅ Order notification email sent');
        } catch (emailErr) {
          console.error('Email notification error:', emailErr);
        }
        
        // Clear the stored data
        localStorage.removeItem('stripe-order-data');
        
        setLoading(false);
      } catch (err) {
        console.error('Error processing order:', err);
        setError('Error processing order');
        setLoading(false);
      }
    };

    processOrder();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 mt-4">Processing your order...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
          <div className="text-red-500 mb-4">
            <Package size={80} className="mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {error}
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
        <CheckCircle className="mx-auto text-green-500 mb-6" size={80} />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🎉 Payment Successful!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your order! Your payment has been processed successfully.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center justify-center">
            <Package className="mr-2" size={20} />
            What Happens Next?
          </h3>
          <div className="text-sm text-blue-800 space-y-2 text-left">
            <p>✅ <strong>Order Confirmed:</strong> Your order has been received and is being processed</p>
            <p>📧 <strong>Email Notification:</strong> You'll receive a confirmation email shortly at your registered email</p>
            <p>📦 <strong>Processing:</strong> We'll prepare your handcrafted wooden toys with care</p>
            <p>🚚 <strong>Shipping:</strong> Tracking information will be sent when your order ships</p>
            <p>🎯 <strong>Delivery:</strong> Your beautiful wooden toys will arrive as estimated</p>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors font-medium"
          >
            Continue Shopping
          </button>
          
          <div className="text-sm text-gray-600">
            <p className="mb-2">Questions about your order?</p>
            <div className="flex justify-center space-x-6">
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>poppas.wooden.creations@gmail.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+64 21 022 8166</span>
              </div>
            </div>
          </div>
        </div>

        {sessionId && (
          <div className="mt-6 pt-6 border-t text-xs text-gray-500">
            Order Reference: {sessionId}
          </div>
        )}
      </div>
    </div>
  );
};

export default StripeSuccess;
