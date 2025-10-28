import React, { useState, useEffect } from 'react';
import { RefreshCw, Mail, Check, XCircle, Trash2 } from 'lucide-react';

interface Order {
  orderNumber: string;
  customer: {
    name: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  items: Array<{
    product: {
      id: string;
      name: string;
      price: number;
    };
    quantity: number;
  }>;
  orderTotal: number;
  paymentMethod: string;
  timestamp: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  notified: boolean;
}

export default function OrderManager() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [adminEmail, setAdminEmail] = useState('adrianbarber8@gmail.com');
  const [loading, setLoading] = useState(false);

  // Load orders from localStorage
  useEffect(() => {
    loadOrders();
    loadEmailSettings();
  }, []);

  const loadOrders = () => {
    try {
      const savedOrders = localStorage.getItem('pending-orders');
      if (savedOrders) {
        const parsedOrders = JSON.parse(savedOrders);
        setOrders(parsedOrders);
        console.log(`📦 Loaded ${parsedOrders.length} orders from storage`);
      }
    } catch (error) {
      console.error('Failed to load orders:', error);
    }
  };

  const loadEmailSettings = () => {
    try {
      const savedSettings = localStorage.getItem('poppas-email-settings');
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        if (settings.adminEmail) {
          setAdminEmail(settings.adminEmail);
        }
      }
    } catch (error) {
      console.warn('Could not load email settings');
    }
  };

  const refreshOrders = () => {
    setLoading(true);
    setTimeout(() => {
      loadOrders();
      setLoading(false);
    }, 500);
  };

  const updateOrderStatus = (orderNumber: string, newStatus: Order['status']) => {
    const updatedOrders = orders.map(order =>
      order.orderNumber === orderNumber
        ? { ...order, status: newStatus }
        : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('pending-orders', JSON.stringify(updatedOrders));
  };

  const deleteOrder = (orderNumber: string) => {
    if (confirm('Are you sure you want to delete this order?')) {
      const updatedOrders = orders.filter(order => order.orderNumber !== orderNumber);
      setOrders(updatedOrders);
      localStorage.setItem('pending-orders', JSON.stringify(updatedOrders));
    }
  };

  const sendCustomerEmail = (order: Order) => {
    const subject = `Order Confirmation - #${order.orderNumber}`;
    const body = `Hi ${order.customer.name},

Thank you for your order!

Order #${order.orderNumber}
Total: $${order.orderTotal.toFixed(2)} NZD

Items:
${order.items.map(item => `• ${item.product.name} x${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)} NZD`).join('\n')}

Shipping Address:
${order.customer.address}
${order.customer.city}, ${order.customer.postalCode}
${order.customer.country}

We'll be in touch soon with shipping details.

Best regards,
Poppa's Wooden Creations`;

    window.open(`mailto:${order.customer.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const pendingOrders = orders.filter(o => o.status === 'pending');
  const totalRevenue = orders.reduce((sum, order) => sum + order.orderTotal, 0);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
          <button
            onClick={refreshOrders}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh Orders
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Pending Orders</p>
                <p className="text-3xl font-bold text-yellow-900">{pendingOrders.length}</p>
              </div>
              {pendingOrders.length > 0 && (
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              )}
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div>
              <p className="text-blue-600 text-sm font-medium">Total Orders</p>
              <p className="text-3xl font-bold text-blue-900">{orders.length}</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div>
              <p className="text-green-600 text-sm font-medium">Total Revenue</p>
              <p className="text-3xl font-bold text-green-900">${totalRevenue.toFixed(2)} NZD</p>
            </div>
          </div>
        </div>

        {/* Email Setup Info */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">📧 Order Notification Setup</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <p className="font-semibold text-green-700">✅ Email Notifications ACTIVE!</p>
            <p><strong>Admin Email:</strong> {adminEmail}</p>
            <div className="mt-3 space-y-1 text-xs">
              <p className="font-semibold">How it works:</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Customer places order → Automatic email sent to {adminEmail}</li>
                <li>Order stored in Admin Dashboard for tracking</li>
                <li>Browser notification shown (if enabled)</li>
                <li>Backup mailto link opens if email service fails</li>
              </ol>
              <p className="mt-2 font-semibold">📱 Multiple backup methods ensure you never miss an order!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <XCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">No orders yet</p>
            <p className="text-sm mt-2">Orders will appear here when customers make purchases</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.orderNumber} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {!order.notified && (
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">#{order.orderNumber}</div>
                          <div className="text-xs text-gray-500">{order.paymentMethod}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{order.customer.address}</div>
                      <div className="text-sm text-gray-900 font-medium">{order.customer.name}</div>
                      <div className="text-xs text-gray-500">{order.customer.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">${order.orderTotal.toFixed(2)} NZD</div>
                      <div className="text-xs text-gray-500">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.orderNumber, e.target.value as Order['status'])}
                        className={`text-xs font-semibold px-3 py-1 rounded-full border-2 ${
                          order.status === 'pending' ? 'bg-yellow-100 border-yellow-300 text-yellow-800' :
                          order.status === 'processing' ? 'bg-blue-100 border-blue-300 text-blue-800' :
                          order.status === 'completed' ? 'bg-green-100 border-green-300 text-green-800' :
                          'bg-red-100 border-red-300 text-red-800'
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.timestamp).toLocaleString('en-NZ', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => sendCustomerEmail(order)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Email Customer"
                        >
                          <Mail className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => updateOrderStatus(order.orderNumber, 'completed')}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Mark Complete"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteOrder(order.orderNumber)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Order"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Help Section */}
      <div className="mt-8 bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">📋 How Order Notifications Work</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>Current Setup:</strong> Orders are stored in your browser's local storage</li>
          <li><strong>Red dot:</strong> Indicates new/unnotified orders</li>
          <li><strong>Email Customer:</strong> Opens your email client with pre-filled order confirmation</li>
          <li><strong>Status Updates:</strong> Track order progress from pending to completed</li>
          <li><strong>Refresh Orders:</strong> Check for new orders manually</li>
        </ul>
      </div>
    </div>
  );
}
