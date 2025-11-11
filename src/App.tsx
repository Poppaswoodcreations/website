import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';
import { categories } from './data/products';
import { Product } from './types';

// Lazy load heavy components
const CategoryGrid = lazy(() => import('./components/CategoryGrid'));
const ProductGrid = lazy(() => import('./components/ProductGrid'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const ShippingInfo = lazy(() => import('./components/ShippingInfo'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const ReviewsSection = lazy(() => import('./components/Reviews/ReviewsSection'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const AdminDashboard = lazy(() => import('./components/Admin/AdminDashboard'));

// Lazy load Blog Components
const BlogList = lazy(() => import('./pages/blog/BlogList').then(m => ({ default: m.BlogList })));
const BenefitsOfWoodenToys = lazy(() => import('./pages/blog/BenefitsOfWoodenToys').then(m => ({ default: m.BenefitsOfWoodenToys })));
const BestWoodenToysByAge = lazy(() => import('./pages/blog/BestWoodenToysByAge').then(m => ({ default: m.BestWoodenToysByAge })));
const SensoryToysForBabies = lazy(() => import('./pages/blog/SensoryToysForBabies').then(m => ({ default: m.SensoryToysForBabies })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 mt-4">Loading...</p>
    </div>
  </div>
);

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
    : products.filter(p => p.category === currentView);

  const renderContent = () => {
    // ✅ NEVER block the page - products start with static data
    // They update in background from cache/API without blocking render
    
    const path = location.pathname;
    
    // Check for specific blog post URLs first
    if (path === '/blog/benefits-of-wooden-toys') {
      return (
        <Suspense fallback={<PageLoader />}>
          <BenefitsOfWoodenToys />
        </Suspense>
      );
    }
    
    if (path === '/blog/best-wooden-toys-by-age') {
      return (
        <Suspense fallback={<PageLoader />}>
          <BestWoodenToysByAge />
        </Suspense>
      );
    }

    if (path === '/blog/sensory-toys-for-babies') {
      return (
        <Suspense fallback={<PageLoader />}>
          <SensoryToysForBabies />
        </Suspense>
      );
    }

    // Use currentView state for other pages
    switch (currentView) {
      case 'home':
        return (
          <Suspense fallback={<PageLoader />}>
            <Hero onCategorySelect={handleCategorySelect} products={products} />
            <CategoryGrid categories={categories} onCategorySelect={handleCategorySelect} />
            <ProductGrid 
              products={filteredProducts} 
              onProductSelect={handleProductSelect}
              onAddToCart={handleAddToCart}
            />
          </Suspense>
        );
      case 'blog':
        return (
          <Suspense fallback={<PageLoader />}>
            <BlogList />
          </Suspense>
        );
      case 'about':
        return (
          <Suspense fallback={<PageLoader />}>
            <AboutSection />
          </Suspense>
        );
      case 'contact':
        return (
          <Suspense fallback={<PageLoader />}>
            <ContactForm />
          </Suspense>
        );
      case 'shipping':
        return (
          <Suspense fallback={<PageLoader />}>
            <ShippingInfo />
          </Suspense>
        );
      case 'privacy':
        return (
          <Suspense fallback={<PageLoader />}>
            <PrivacyPolicy />
          </Suspense>
        );
      case 'terms':
        return (
          <Suspense fallback={<PageLoader />}>
            <TermsOfService />
          </Suspense>
        );
      case 'reviews':
        return (
          <Suspense fallback={<PageLoader />}>
            <ReviewsSection />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={<PageLoader />}>
            <ProductGrid 
              products={filteredProducts} 
              onProductSelect={handleProductSelect}
              onAddToCart={handleAddToCart}
              category={currentView}
            />
          </Suspense>
        );
    }
  };

  return (
    <ErrorBoundary>
      <SEO currentPage={location.pathname} key={location.pathname} />
      <div className="min-h-screen bg-gray-50">
        <Header 
          onCategorySelect={handleCategorySelect}
          onShowAdmin={() => setShowAdmin(true)}
          onShowCart={() => setShowCart(true)}
          cartItemCount={getCartItemCount()}
        />
        
        {/* Optional: Subtle error indicator if needed (doesn't cause layout shift) */}
        {error && products.length > 0 && (
          <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
              <span className="text-yellow-800">
                ℹ️ Showing cached products. 
                <button 
                  onClick={() => loadProducts()} 
                  className="ml-2 underline font-medium hover:text-yellow-900"
                >
                  Refresh
                </button>
              </span>
            </div>
          </div>
        )}
        
        <main>
          {renderContent()}
        </main>
        
        <Footer />
        
        {/* Cart Modal */}
        {showCart && (
          <Suspense fallback={null}>
            <Cart
              items={cart}
              onClose={() => setShowCart(false)}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
            />
          </Suspense>
        )}
        
        {/* Admin Dashboard Modal */}
        {showAdmin && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50" style={{ zIndex: 9999 }}>
            <Suspense fallback={<PageLoader />}>
              <AdminDashboard
                products={products}
                onProductsUpdate={async () => {
                  await loadProducts();
                }}
                onClose={() => setShowAdmin(false)}
              />
            </Suspense>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
