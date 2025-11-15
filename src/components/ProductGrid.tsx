import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  category?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductSelect, onAddToCart, category }) => {
  // Add SEO for category pages
  const getCategoryTitle = (cat: string) => {
    const categoryNames: { [key: string]: string } = {
      'wooden-trains': 'Wooden Train Sets & Railway Toys',
      'wooden-baby-toys': 'Safe Wooden Baby Toys',
      'wooden-trucks': 'Wooden Truck Toys',
      'wooden-cars': 'Wooden Car Toys',
      'wooden-planes-helicopters': 'Wooden Airplane & Helicopter Toys',
      'wooden-kitchenware': 'Wooden Kitchen Toys & Utensils',
      'wooden-tractors-boats': 'Wooden Tractor & Boat Toys',
      'wooden-other-toys': 'Educational Wooden Toys'
    };
    return categoryNames[cat] || 'Wooden Toys';
  };

  const getCategoryDescription = (cat: string) => {
    const descriptions: { [key: string]: string } = {
      'wooden-trains': 'Shop handcrafted wooden train sets made in Whangārei, NZ. Premium Kauri & Rimu timber trains. Safe, durable railway toys for kids.',
      'wooden-baby-toys': 'Natural wooden baby toys handcrafted in NZ. Safe teething rings, rattles & sensory toys. Non-toxic finish, smooth sanded.',
      'wooden-trucks': 'Handcrafted wooden truck toys made in NZ. Dump trucks, car carriers & logging trucks. Premium timber construction toys for kids.',
      'wooden-cars': 'Premium wooden car toys handcrafted in Whangārei. Racing cars, vintage designs & unique styles. Safe NZ-made toys for children.',
      'wooden-planes-helicopters': 'Wooden airplane & helicopter toys made in NZ. Handcrafted aviation toys from premium timber. Safe for kids, built to last.',
      'wooden-kitchenware': 'Natural wooden kitchen utensils & play toys. Handcrafted in NZ from sustainable timber. Functional spatulas, spoons & more.',
      'wooden-tractors-boats': 'Wooden tractor & boat toys handcrafted in NZ. Farm vehicles & sailing boats. Premium timber toys for adventure play.',
      'wooden-other-toys': 'Unique educational wooden toys made in Whangārei. Handcrafted puzzles, games & creative toys. Safe, sustainable NZ timber.'
    };
    return descriptions[cat] || 'Browse our collection of handcrafted wooden toys made in New Zealand. Safe, sustainable toys for children.';
  };

  // Generate structured data for the product list
  const generateProductListSchema = () => {
    if (!products || products.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "image": product.images[0],
          "description": product.description,
          "brand": {
            "@type": "Brand",
            "name": "Poppa's Wooden Creations"
          },
          "offers": {
            "@type": "Offer",
            "price": product.price.toFixed(2),
            "priceCurrency": "NZD",
            "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "url": `https://poppaswoodencreations.co.nz/${category || 'products'}`,
            "seller": {
              "@type": "Organization",
              "name": "Poppa's Wooden Creations"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          },
          "material": "Wood",
          "itemCondition": "https://schema.org/NewCondition"
        }
      }))
    };
  };

  // Generate breadcrumb schema for category pages
  const generateBreadcrumbSchema = () => {
    if (!category) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://poppaswoodencreations.co.nz"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": getCategoryTitle(category),
          "item": `https://poppaswoodencreations.co.nz/${category}`
        }
      ]
    };
  };

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🪵</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h2>
          <p className="text-gray-500 mb-4">No products in this category yet</p>
        </div>
      </div>
    );
  }

  const productListSchema = generateProductListSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      {category && (
        <Helmet>
          <title>{getCategoryTitle(category)} | Handcrafted in New Zealand | Poppa's Wooden Creations</title>
          <meta name="description" content={getCategoryDescription(category)} />
          <link rel="canonical" href={`https://poppaswoodencreations.co.nz/${category}`} />
          
          {/* Product List Structured Data */}
          {productListSchema && (
            <script type="application/ld+json">
              {JSON.stringify(productListSchema)}
            </script>
          )}
          
          {/* Breadcrumb Structured Data */}
          {breadcrumbSchema && (
            <script type="application/ld+json">
              {JSON.stringify(breadcrumbSchema)}
            </script>
          )}
        </Helmet>
      )}
      
      <div className="container mx-auto px-4 bg-white min-h-screen w-full">
        {category && (
          <div className="mb-8 pt-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {getCategoryTitle(category)}
            </h1>
            <p className="text-gray-600">
              Showing {products.length} product{products.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        )}
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pb-8 w-full">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onProductSelect}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
