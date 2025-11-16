// GTM E-commerce Tracking Utility
// Add this file to your src/utils/ directory

// Extend the Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if it doesn't exist
window.dataLayer = window.dataLayer || [];

export interface Product {
  id: string;
  name: string;
  price: number;
  category?: string;
  quantity: number;
  image?: string;
}

export interface PurchaseData {
  transactionId: string;
  total: number;
  tax?: number;
  shipping?: number;
  currency?: string;
  products: Product[];
}

/**
 * Track Add to Cart event
 * Call this when user clicks "Add to Cart"
 */
export const trackAddToCart = (product: Product) => {
  window.dataLayer.push({
    event: 'add_to_cart',
    ecommerce: {
      currency: 'NZD',
      value: product.price * product.quantity,
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity: product.quantity,
        item_category: product.category || 'Wooden Toys',
      }]
    }
  });
  
  console.log('GTM: Add to Cart tracked', product);
};

/**
 * Track Purchase/Checkout Complete event
 * Call this after successful Stripe payment
 */
export const trackPurchase = (purchaseData: PurchaseData) => {
  window.dataLayer.push({
    event: 'purchase',
    ecommerce: {
      transaction_id: purchaseData.transactionId,
      value: purchaseData.total,
      tax: purchaseData.tax || 0,
      shipping: purchaseData.shipping || 0,
      currency: purchaseData.currency || 'NZD',
      items: purchaseData.products.map(product => ({
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity: product.quantity,
        item_category: product.category || 'Wooden Toys',
      }))
    }
  });
  
  console.log('GTM: Purchase tracked', purchaseData);
};

/**
 * Track View Item event
 * Call this when user views a product detail page
 */
export const trackViewItem = (product: Product) => {
  window.dataLayer.push({
    event: 'view_item',
    ecommerce: {
      currency: 'NZD',
      value: product.price,
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        item_category: product.category || 'Wooden Toys',
      }]
    }
  });
  
  console.log('GTM: View Item tracked', product);
};

/**
 * Track Begin Checkout event
 * Call this when user starts the checkout process
 */
export const trackBeginCheckout = (products: Product[], total: number) => {
  window.dataLayer.push({
    event: 'begin_checkout',
    ecommerce: {
      currency: 'NZD',
      value: total,
      items: products.map(product => ({
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity: product.quantity,
        item_category: product.category || 'Wooden Toys',
      }))
    }
  });
  
  console.log('GTM: Begin Checkout tracked', products);
};
