import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { trackAddToCart } from '../utils/gtmTracking';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onAddToCart }) => {
  // Get the first image from the product's images array
  const getProductImage = () => {
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      const firstImage = product.images[0];
      if (firstImage && firstImage.trim() !== '') {
        console.log(`🖼️ ProductCard: Using image for ${product.name}:`, firstImage);
        return firstImage;
      }
    }
    
    console.log(`❌ ProductCard: No valid image for ${product.name}, using fallback`);
    return 'https://i.ibb.co/dw3x0Kmm/image.jpg';
  };

  const productImage = getProductImage();

  // ✅ GTM TRACKING: Handle Add to Cart with tracking
  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Add to cart
    onAddToCart(product);
    
    // Track in GTM
    trackAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      category: product.category,
    });
  };

  const handleProductClick = () => {
    onAddToCart(product);
    
    // Track in GTM
    trackAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      category: product.category,
    });
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
      onClick={handleProductClick}
    >
      <div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden">
        <img
          src={productImage}
          alt={`${product.name} - Handcrafted wooden toy by Poppa's Wooden Creations`}
          className="w-full h-48 object-cover"
          loading="lazy"
          onLoad={() => console.log(`✅ Image loaded for ${product.name}:`, productImage)}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // ✅ SILENT FALLBACK: Use inline SVG to prevent console errors
            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f59e0b" width="400" height="300"/%3E%3Ctext x="50%25" y="45%25" font-size="20" text-anchor="middle" fill="white" font-weight="bold"%3EPoppa%27s%3C/text%3E%3Ctext x="50%25" y="55%25" font-size="16" text-anchor="middle" fill="white"%3EWooden Creations%3C/text%3E%3C/svg%3E';
            target.onerror = null; // Prevent infinite loop
          }}
        />
        
        {product.featured && (
          <div className="absolute top-2 left-2 bg-amber-700 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            Featured
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            Out of Stock
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-3 text-sm line-clamp-2">
          {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-amber-600">
            ${product.price.toFixed(2)} NZD
          </span>
          <div className="text-right">
            {product.inStock ? (
              <div>
                <span className="text-green-700 text-xs font-bold">In Stock</span>
                {product.stockQuantity && (
                  <div className="text-gray-600 text-xs font-medium">
                    {product.stockQuantity} available
                  </div>
                )}
              </div>
            ) : (
              <span className="text-red-700 text-xs font-bold">Out of Stock</span>
            )}
          </div>
        </div>
        
        <button
          onClick={handleAddToCartClick}
          disabled={!product.inStock}
          className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-bold shadow-md"
        >
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
