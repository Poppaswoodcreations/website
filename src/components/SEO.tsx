import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  currentPage?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Poppa's Wooden Creations - Handcrafted Wooden Toys NZ",
  description = "Discover premium handcrafted wooden toys and kitchenware made with love in New Zealand. Safe, sustainable, and built to last. Free shipping over $150 NZD.",
  keywords = "wooden toys, handcrafted toys, New Zealand made, sustainable toys, children toys, wooden kitchenware, safe toys, eco-friendly toys",
  currentPage
}) => {
  const getCanonicalUrl = () => {
    // Use currentPage prop if provided, otherwise use window.location
    let pathname = currentPage || window.location.pathname;
    
    // Remove trailing slash except for homepage
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    
    // Return the canonical URL
    return `https://poppaswoodencreations.co.nz${pathname}`;
  };
  
  const canonicalUrl = getCanonicalUrl();

  // Force update when currentPage changes
  useEffect(() => {
    // Remove existing canonical tags
    const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
    existingCanonicals.forEach(tag => tag.remove());
    
    // Add new canonical tag
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalUrl;
    document.head.appendChild(link);

    console.log('📍 SEO: Updated canonical to:', canonicalUrl);
  }, [canonicalUrl]);
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://poppaswoodencreations.co.nz/images/image copy copy copy copy copy copy.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Handcrafted wooden toys by Poppa's Wooden Creations" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://poppaswoodencreations.co.nz/images/image copy copy copy copy copy copy.png" />
      <meta name="twitter:image:alt" content="Handcrafted wooden toys by Poppa's Wooden Creations" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Poppa's Wooden Creations",
          "description": "Premium handcrafted wooden toys and kitchenware made in New Zealand",
          "url": "https://poppaswoodencreations.co.nz",
          "logo": "https://poppaswoodencreations.co.nz/images/image copy copy copy copy copy copy.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+64-21-022-8166",
            "contactType": "customer service",
            "email": "poppas.wooden.creations@gmail.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "102 Kiripaka Rd",
            "addressLocality": "Whangarei",
            "addressRegion": "Northland",
            "postalCode": "0110",
            "addressCountry": "NZ"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "New Zealand"
            },
            {
              "@type": "Country", 
              "name": "Australia"
            },
            {
              "@type": "Country",
              "name": "United States"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
