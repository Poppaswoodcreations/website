import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';
import { Product } from './types';

// ✅ FIXED: Updated categories with local image paths
const categories = [
  {
    id: '1',
    name: 'Wooden Trains',
    slug: 'wooden-trains',
    description: 'Handcrafted wooden train sets and railway accessories',
    image: '/images/products/Messenger-creation-E64-B78-CE-A95-C-4-F83-A4-D1-41-B252-B2-B28-F-1-optimized.webp',
    productCount: 2
  },
  {
    id: '2',
    name: 'Wooden Baby Toys',
    slug: 'wooden-baby-toys',
    description: 'Safe, natural wooden toys for babies and toddlers',
    image: '/images/products/20201218-105144-optimized.webp',
    productCount: 2
  },
  {
    id: '3',
    name: 'Wooden Trucks',
    slug: 'wooden-trucks',
    description: 'Heavy-duty wooden trucks for construction play',
    image: '/images/products/166834389-1003153473424487-7993501529931213173-n-1-optimized-1.webp',
    productCount: 8
  },
  {
    id: '4',
    name: 'Wooden Cars',
    slug: 'wooden-cars',
    description: 'Fast and fun wooden cars for racing adventures',
    image: '/images/products/received-693989208677015-2-optimized.webp',
    productCount: 25
  },
  {
    id: '5',
    name: 'Wooden Planes & Helicopters',
    slug: 'wooden-planes-helicopters',
    description: 'Take flight with wooden aircraft and helicopters',
    image: '/images/products/received-649542706226495-2-optimized.webp',
    productCount: 4
  },
  {
    id: '6',
    name: 'Wooden Kitchenware',
    slug: 'wooden-kitchenware',
    description: 'Beautiful and functional wooden kitchen tools',
    image: '/images/products/Messenger-creation-EDD2-DF53-8-E6-B-4-F23-89-DB-12-C030-D74-C43-1-optimized.webp',
    productCount: 12
  },
  {
    id: '7',
    name: 'Wooden Tractors & Boats',
    slug: 'wooden-tractors-boats',
    description: 'Farm tractors and sailing boats for adventure play',
    image: '/images/products/Messenger-creation-278-DDA3-E-23-C9-4-CBF-9-A96-6-FCB56-F987-CD-2-Copy-optimized-1.webp',
    productCount: 4
  },
  {
    id: '8',
    name: 'Other Wooden Toys',
    slug: 'wooden-other-toys',
    description: 'Unique wooden toys and educational games',
    image: '/images/products/FB-IMG-1641578276716-optimized.webp',
    productCount: 6
  }
];

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
const WhyPoppasWoodenCreationsAreBest = lazy(() => import('./pages/blog/WhyPoppasWoodenCreationsAreBest').then(m => ({ default: m.WhyPoppasWoodenCreationsAreBest })));
const HappyGoLuckTrain = lazy(() => import('./pages/blog/HappyGoLuckTrain').then(m => ({ default: m.HappyGoLuckTrain })));

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

  // ✅ FIXED: Categories in database already have "wooden-" prefix
  const filteredProducts = currentView === 'home' 
    ? products.filter(p => p.featured).slice(0, 8)
    : products.filter(p => {
        // Database categories already have the full slug with "wooden-" prefix
        // So we match directly without conversion
        console.log('🔍 Filtering:', { currentView, productCategory: p.category, productName: p.name });
        return p.category === currentView;
      });

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

    if (path === '/blog/happy-go-luck-train') {
      return (
        <Suspense fallback={<PageLoader />}>
          <HappyGoLuckTrain />
        </Suspense>
      );
    }
    
    if (path === '/blog/why-poppas-wooden-creations-are-best') {
      return (
        <Suspense fallback={<PageLoader />}>
          <WhyPoppasWoodenCreationsAreBest />
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
