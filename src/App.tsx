import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

// ⭐ NEW: Import Blog Components
import { BlogList } from './pages/blog/BlogList';
import { BenefitsOfWoodenToys } from './pages/blog/BenefitsOfWoodenToys';
import { BestWoodenToysByAge } from './pages/blog/BestWoodenToysByAge';

const App: React.FC = () => {
  const location = useLocation();
  const [currentView, setCurrentView] = useState(() => {
    const path = location.pathname.slice(1) || 'home';
    return path.split('/')[0] || 'home';
  });
  const [showCart, setShowCart] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  
  const { products, loading, error, loadProducts } = useProducts();
  const { cart, addToCart, updateQuantity, removeFromCart, getCartItemCount } = useCart();

  // Update currentView when location changes
  useEffect(() => {
    const path = location.pathname.slice(1) || 'home';
    setCurrentView(path.split('/')[0] || 'home');
  }, [location.pathname]);

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
    : products.filter(p
