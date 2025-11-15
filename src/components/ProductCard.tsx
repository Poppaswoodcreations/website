import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden">
        {product.featured && (
          <div className="absolute top-2 left-2 bg-amber-700 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
            Featured
          </div>
        )}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => onSelect(product)}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://i.ibb.co/FkkjBShk/image.jpg';
          }}
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)} NZD
          </span>
          <span className="text-green-600 text-xs font-medium">
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          disabled={!product.inStock}
          className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
