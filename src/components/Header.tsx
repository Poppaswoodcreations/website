import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';

interface HeaderProps {
  onCategorySelect: (category: string) => void;
  onShowAdmin: () => void;
  onShowCart: () => void;
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ onCategorySelect, onShowAdmin, onShowCart, cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // Check if Supabase is connected
  const { isSupabaseConnected } = useProducts();

  const productCategories = [
    { slug: 'wooden-trains', name: 'Trains' },
    { slug: 'wooden-baby-toys', name: 'Baby Toys' },
    { slug: 'wooden-trucks', name: 'Trucks' },
    { slug: 'wooden-cars', name: 'Cars' },
    { slug: 'wooden-planes-helicopters', name: 'Planes' },
    { slug: 'wooden-kitchenware', name: 'Kitchen' },
    { slug: 'wooden-tractors-boats', name: 'Tractors & Boats' },
    { slug: 'wooden-other-toys', name: 'Other' }
  ];

  const handleAdminClick = () => {
    setShowPasswordPrompt(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validPasswords = ['Adrianbar1?', 'admin', 'poppa', 'password', 'poppas'];
    if (validPasswords.includes(password.trim())) {
      console.log('✅ Admin access granted with password:', password.trim());
      onShowAdmin();
      setShowPasswordPrompt(false);
      setPassword('');
      setIsMenuOpen(false);
    } else {
      console.log('❌ Invalid password attempt:', password.trim());
      alert('❌ Incorrect password!\n\n✅ Valid passwords:\n• Adrianbar1? (your main password)\n• admin\n• poppa\n• password\n• poppas\n\nTry: Adrianbar1?');
      setPassword('');
    }
  };

  const handleCategoryClick = (categorySlug: string) => {
    console.log('🔄 Header: Navigating to category:', categorySlug);
    navigate(`/${categorySlug}`);
    onCategorySelect(categorySlug);
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
    onCategorySelect('home');
    setIsMenuOpen(false);
  };

  const handlePageClick = (page: string) => {
    navigate(`/${page}`);
    onCategorySelect(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={handleHomeClick}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-gray-900">Poppa's Wooden Creations</h1>
              <p className="text-xs text-gray-600">Handcrafted in New Zealand</p>
            </div>
          </div>

          {/* Desktop Navigation - Simple Buttons */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button
              onClick={handleHomeClick}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base"
            >
              Home
            </button>
            
            {/* Product Category Buttons */}
            {productCategories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryClick(category.slug)}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-xs xl:text-sm whitespace-nowrap"
              >
                {category.name}
              </button>
            ))}
            
            <button
              onClick={() => handlePageClick('about')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base"
            >
              About
            </button>
            <button
              onClick={() => handlePageClick('contact')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base"
            >
              Contact
            </button>
            <button
              onClick={() => handlePageClick('reviews')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base"
            >
              Reviews
            </button>
            <button
              onClick={() => handlePageClick('shipping')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base"
            >
              Shipping
            </button>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-amber-600 transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={onShowCart}
              className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rou
