import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import ShippingInfo from './components/ShippingInfo';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ReviewsSection from './components/Reviews/ReviewsSection';
import Cart from './components/Cart/Cart';
import AdminDashboard from './components/Admin/AdminDashboard';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';
import { categories } from './data/products';
import { Product } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState(() => {
    const path = window.location.pathname.slice(1) || 'home';
    return path.split('/')[0] || 'home';
  });
  const [showCart, setShowCart] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  const { products, loading, error, loadProducts } = useProducts();
  const { cart, addToCart, updateQuantity, removeFromCart, getCartItemCount } = useCart();

  // Update currentPath when URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      const path = window.location.pathname.slice(1) || 'home';
      setCurrentView(path.split('/')[0] || 'home');
    };
    
    // Listen for popstate (back/forward buttons)
    window.addEventListener('popstate', handleLocationChange);
    
    // Also check on interval as a fallback for client-side routing
    const interval = setInterval(handleLocationChange, 100);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      clearInterval(interval);
    };
  }, []);

  const handleCategorySelect = (category: string) => {
    setCurrentView(category);
  };

  const handleProductSelect = (product: Product) => {
    addToCart(product);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const filteredProducts = currentView === 'home' 
    ? products.filter(p => p.featured).slice(0, 8)
    : products.filter(p => p.category === currentView);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-6">🪵</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Poppa's Wooden Creations</h1>
            <p className="text-xl text-gray-600 mb-8">Handcrafted in New Zealand</p>
            <div className="inline-block w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 mt-4">Loading website...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="min-h-scree
