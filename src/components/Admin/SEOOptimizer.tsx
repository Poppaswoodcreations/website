import React, { useState } from 'react';
import { Download, Copy, Eye } from 'lucide-react';

const SEOOptimizer: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [pageUrl, setPageUrl] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [codeFormat, setCodeFormat] = useState<'html' | 'tsx'>('html');

  const templates = {
    'wooden-toys': {
      titleFormats: [
        '{product} | Handcrafted in New Zealand | Poppa\'s Wooden Creations',
        '{product} - Premium Kiwi Wood Toys | Safe & Eco-Friendly',
        'NZ Made {product} | Sustainable Wooden Toys for Kids'
      ],
      descFormats: [
        'Shop our handcrafted {product} made from premium New Zealand timber. Safe, eco-friendly, and built to last. Free NZ shipping over $50.',
        'Discover beautiful {product} crafted from native NZ wood. Perfect for toddlers & young children. Sustainable, non-toxic, heirloom quality.',
        'Premium {product} handmade in Whangārei. Made from Kauri, Rimu & Macrocarpa. Supporting Kiwi craftsmanship.'
      ],
      keywords: ['wooden toys NZ', 'handcrafted toys', 'eco-friendly toys', 'New Zealand timber', 'sustainable toys', 'Whangārei', 'heirloom toys']
    },
    'wooden-kitchenware': {
      titleFormats: [
        '{product} | Handcrafted NZ Timber | Poppa\'s Creations',
        'Premium {product} - New Zealand Native Wood Kitchen Items',
        '{product} Made from Sustainable NZ Timber | Eco-Friendly'
      ],
      descFormats: [
        'Beautiful {product} handcrafted from premium NZ timber. Food-safe finish, sustainable materials. Perfect for your kitchen. Made in Whangārei.',
        'Handmade {product} using Kauri, Rimu & Macrocarpa. Functional art for your home. Eco-friendly & built to last generations.',
        'Shop our {product} crafted from native NZ wood. Each piece is unique. Supporting local craftspeople. Free shipping NZ wide.'
      ],
      keywords: ['wooden kitchenware NZ', 'handcrafted kitchen items', 'NZ timber', 'eco-friendly kitchen', 'sustainable wood products', 'Kauri kitchenware']
    },
    'default': {
      titleFormats: [
        '{product} | Handcrafted by Poppa\'s Wooden Creations',
        'Premium {product} - Made in New Zealand from Native Timber',
        '{product} | Sustainable NZ Woodwork | Whangārei Made'
      ],
      descFormats: [
        'Handcrafted {product} made from premium New Zealand timber. Each piece is unique and built to last. Made with love in Whangārei.',
        'Discover our beautiful {product} crafted from native NZ wood. Sustainable, eco-friendly, and supporting local craftsmanship.',
        'Shop {product} handmade in New Zealand. Quality timber products that tell a story. Free NZ shipping available.'
      ],
      keywords: ['handcrafted NZ', 'wooden products', 'New Zealand timber', 'sustainable wood', 'Whangārei craftsman', 'eco-friendly']
    }
  };

  const generateSmartContent = () => {
    if (!productName) {
      alert('Please enter a product name');
      return;
    }

    const template = templates[category as keyof typeof templates] || templates['default'];
    
    // Generate title
    const titleFormat = template.titleFormats[Math.floor(Math.random() * template.titleFormats.length)];
    let title = titleFormat.replace('{product}', productName);
    
    if (title.length > 60) {
      title = productName + ' | Poppa\'s Wooden Creations';
      if (title.length > 60) {
        title = productName.substring(0, 40) + ' | Poppa\'s';
      }
    }

    // Generate description
    const descFormat = template.descFormats[Math.floor(Math.random() * template.descFormats.length)];
    let description = descFormat.replace('{product}', productName);
    
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';
    }

    // Generate keywords
    const keywordList = [productName.toLowerCase(), ...template.keywords].join(', ');

    setMetaTitle(title);
    setMetaDescription(description);
    setKeywords(keywordList);
    
    if (uploadedImage) {
      setImageAlt(`${productName} - handcrafted from New Zealand timber`);
    }

    setShowPreview(true);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        if (productName) {
          setImageAlt(`${productName} - handcrafted from New Zealand timber`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generateCode = (format: 'html' | 'tsx') => {
    if (!metaTitle || !metaDescription) {
      alert('Please enter at least a title and description');
      return;
    }

    let code = '';

    if (format === 'tsx') {
      const imageMetaTags = uploadedImage && imageAlt ? `
      {/* Product Image */}
      <meta property="og:image" content="/images/product-image.jpg" />
      <meta property="og:image:alt" content="${imageAlt}" />
      <meta property="twitter:image" content="/images/product-image.jpg" />
      <meta property="twitter:image:alt" content="${imageAlt}" />` : '';

      code = `import Head from 'next/head';

export default function SEOHead() {
  return (
    <Head>
      {/* SEO Meta Tags */}
      <title>${metaTitle}</title>
      <meta name="description" content="${metaDescription}" />
${keywords ? `      <meta name="keywords" content="${keywords}" />` : ''}
${pageUrl ? `      <link rel="canonical" href="${pageUrl}" />` : ''}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
${pageUrl ? `      <meta property="og:url" content="${pageUrl}" />` : ''}
      <meta property="og:title" content="${metaTitle}" />
      <meta property="og:description" content="${metaDescription}" />${imageMetaTags}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
${pageUrl ? `      <meta property="twitter:url" content="${pageUrl}" />` : ''}
      <meta property="twitter:title" content="${metaTitle}" />
      <meta property="twitter:description" content="${metaDescription}" />
    </Head>
  );
}`;
    } else {
      const imageMetaTags = uploadedImage && imageAlt ? `
<!-- Product Image -->
<meta property="og:image" content="/images/product-image.jpg">
<meta property="og:image:alt" content="${imageAlt}">
<meta property="twitter:image" content="/images/product-image.jpg">
<meta property="twitter:image:alt" content="${imageAlt}">` : '';

      code = `<!-- SEO Meta Tags -->
<title>${metaTitle}</title>
<meta name="description" content="${metaDescription}">
${keywords ? `<meta name="keywords" content="${keywords}">` : ''}
${pageUrl ? `<link rel="canonical" href="${pageUrl}">` : ''}

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
${pageUrl ? `<meta property="og:url" content="${pageUrl}">` : ''}
<meta property="og:title" content="${metaTitle}">
<meta property="og:description" content="${metaDescription}">${imageMetaTags}

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
${pageUrl ? `<meta property="twitter:url" content="${pageUrl}">` : ''}
<meta property="twitter:title" content="${metaTitle}">
<meta property="twitter:description" content="${metaDescription}">`;
    }

    setGeneratedCode(code);
    setCodeFormat(format);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('✅ Code copied to clipboard!');
  };

  const getTitleStatus = () => {
    const len = metaTitle.length;
    if (len === 0) return '';
    if (len > 70) return 'text-red-600';
    if (len >= 50 && len <= 70) return 'text-green-600';
    return 'text-yellow-600';
  };

  const getDescStatus = () => {
    const len = metaDescription.length;
    if (len === 0) return '';
    if (len > 170) return 'text-red-600';
    if (len >= 140 && len <= 170) return 'text-green-600';
    return 'text-yellow-600';
  };

  return (
    <div className="space-y-6">
      {/* Smart Generator */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-4">✨ Smart Content Generator</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g., Handcrafted Wooden Toy Train for Toddlers"
              className="w-full px-4 py-2 rounded-lg text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-gray-900"
            >
              <option value="">-- Select Category --</option>
              <option value="wooden-toys">Wooden Toys</option>
              <option value="wooden-kitchenware">Wooden Kitchenware</option>
              <option value="default">Other</option>
            </select>
          </div>

          <button
            onClick={generateSmartContent}
            className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            ⚡ Generate SEO Content
          </button>
        </div>
      </div>

      {/* Manual Inputs */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-bold text-gray-900">SEO Settings</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Page URL</label>
          <input
            type="url"
            value={pageUrl}
            onChange={(e) => setPageUrl(e.target.value)}
            placeholder="https://poppaswoodencreations.co.nz/products/..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          {uploadedImage && (
            <img src={uploadedImage} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-lg" />
          )}
        </div>

        {uploadedImage && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image Alt Text</label>
            <input
              type="text"
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
              placeholder="Describe your product image"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SEO Title</label>
          <input
            type="text"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            maxLength={70}
            placeholder="Enter your page title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <div className={`text-sm mt-1 ${getTitleStatus()}`}>
            {metaTitle.length}/60 characters (recommended)
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SEO Description</label>
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            maxLength={160}
            rows={3}
            placeholder="Enter your page description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <div className={`text-sm mt-1 ${getDescStatus()}`}>
            {metaDescription.length}/160 characters (recommended)
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SEO Keywords</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g., wooden toys, handcrafted, eco-friendly"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Eye size={16} />
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
          <button
            onClick={() => generateCode('html')}
            className="flex-1 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Generate HTML
          </button>
          <button
            onClick={() => generateCode('tsx')}
            className="flex-1 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Generate TSX
          </button>
        </div>
      </div>

      {/* Preview */}
      {showPreview && metaTitle && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🔍 Google Search Preview</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">poppaswoodencreations.co.nz</div>
            <div className="text-xl text-blue-600 hover:underline cursor-pointer mb-1">{metaTitle}</div>
            <div className="text-sm text-gray-700">{metaDescription}</div>
          </div>

          {uploadedImage && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Social Media Preview</h4>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img src={uploadedImage} alt="" className="w-full h-48 object-cover" />
                <div className="p-3 bg-gray-100">
                  <div className="text-xs text-gray-500 uppercase mb-1">POPPASWOODENCREATIONS.CO.NZ</div>
                  <div className="font-semibold text-gray-900">{metaTitle}</div>
                  <div className="text-sm text-gray-600">{metaDescription}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Generated Code */}
      {generatedCode && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">
              {codeFormat === 'tsx' ? '⚛️ Generated TSX/React Code' : '💾 Generated HTML Code'}
            </h3>
            <button
              onClick={copyCode}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Copy size={16} />
              Copy Code
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {generatedCode}
          </pre>
        </div>
      )}
    </div>
  );
};

export default SEOOptimizer;
