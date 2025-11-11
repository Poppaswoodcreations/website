<div className="aspect-square bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden w-full">
  <img
    src={heroImage || 'https://i.ibb.co/dw3x0Kmm/image.jpg'}
    alt="Handcrafted wooden truck toys - Premium quality wooden toys from Poppa's Wooden Creations made in New Zealand"
    className="w-full h-full object-cover product-image"
    loading="eager"
    fetchpriority="high"
    decoding="async"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      console.log('❌ HERO: Image failed to load, using fallback');
      target.src = 'https://i.ibb.co/dw3x0Kmm/image.jpg';
    }}
    onLoad={() => {
      console.log('✅ HERO: Image loaded successfully');
    }}
  />
</div>
