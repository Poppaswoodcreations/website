export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
  stock: number;
}

export const categories = [
  {
    id: 'trains',
    name: 'Wooden Trains',
    description: 'Handcrafted wooden train sets and railway accessories',
    image: 'https://i.ibb.co/4nz2C3nq/image.jpg',
    slug: 'wooden-trains'
  },
  {
    id: 'baby-toys',
    name: 'Wooden Baby Toys',
    description: 'Safe, natural wooden toys for babies and toddlers',
    image: 'https://i.ibb.co/x82psRdL/image.jpg',
    slug: 'wooden-baby-toys'
  },
  {
    id: 'trucks',
    name: 'Wooden Trucks',
    description: 'Heavy-duty wooden trucks for construction play',
    image: 'https://i.ibb.co/dw8bprxd/166834389-1003153473424487-7993501529931213173-n-1-optimized.webp',
    slug: 'wooden-trucks'
  },
  {
    id: 'cars',
    name: 'Wooden Cars',
    description: 'Fast and fun wooden cars for racing adventures',
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    slug: 'wooden-cars'
  },
  {
    id: 'planes',
    name: 'Wooden Planes & Helicopters',
    description: 'Take flight with wooden aircraft and helicopters',
    image: 'https://i.ibb.co/yc5YffjH/received-649542706226495-2-optimized.webp',
    slug: 'wooden-planes-helicopters'
  },
  {
    id: 'kitchen',
    name: 'Wooden Kitchenware',
    description: 'Beautiful and functional wooden kitchen tools',
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    slug: 'wooden-kitchenware'
  },
  {
    id: 'tractors-boats',
    name: 'Wooden Tractors & Boats',
    description: 'Farm tractors and sailing boats for adventure play',
    image: 'https://i.ibb.co/FkkjBShk/image.jpg',
    slug: 'wooden-tractors-boats'
  }
];

export const products: Product[] = [
  // TRAINS
  {
    id: 'happy-go-luck-train',
    name: 'HAPPY-GO-LUCK-TRAIN',
    category: 'trains',
    price: 30.00,
    image: 'https://i.ibb.co/4nz2C3nq/image.jpg',
    description: 'Cheerful wooden train engine for railway adventures',
    featured: true,
    stock: 4
  },
  {
    id: 'block-train',
    name: 'BLOCK TRAIN',
    category: 'trains',
    price: 100.00,
    image: 'https://i.ibb.co/RpRG1166/image.jpg',
    description: 'Wooden block train set perfect for building play',
    stock: 1
  },

  // BABY TOYS
  {
    id: 'baby-rattle',
    name: 'Baby Rattle',
    category: 'baby-toys',
    price: 20.00,
    image: 'https://i.ibb.co/x82psRdL/image.jpg',
    description: 'Safe wooden baby rattle with smooth finish',
    stock: 9
  },
  {
    id: 'teething-ring',
    name: 'TEETHING RING',
    category: 'baby-toys',
    price: 20.00,
    image: 'https://i.ibb.co/x82psRdL/image.jpg',
    description: 'Natural wooden teething ring perfect for baby comfort',
    stock: 8
  },
  {
    id: 'noise-maker',
    name: 'NOISE MAKER',
    category: 'baby-toys',
    price: 40.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Wooden noise maker toy perfect for musical play',
    stock: 10
  },
  {
    id: 'floor-noise-maker',
    name: 'FLOOR NOISE MAKER',
    category: 'baby-toys',
    price: 30.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Large floor wooden noise maker for musical play',
    stock: 2
  },
  {
    id: 'pine-kiwi',
    name: 'pine kiwi',
    category: 'baby-toys',
    price: 25.00,
    image: 'https://i.ibb.co/tM2rrMsC/image.jpg',
    description: 'Pine wooden kiwi bird representing New Zealand',
    featured: true,
    stock: 3
  },
  {
    id: 'hammer-set',
    name: 'hammer set',
    category: 'baby-toys',
    price: 40.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Wooden hammer tool set perfect for construction play',
    stock: 2
  },

  // TRUCKS
  {
    id: 'small-pine-truck',
    name: 'small pine truck',
    category: 'trucks',
    price: 5.00,
    image: 'https://i.ibb.co/dw8bprxd/166834389-1003153473424487-7993501529931213173-n-1-optimized.webp',
    description: 'Compact pine truck perfect for construction play',
    stock: 9
  },
  {
    id: 'car-carrier',
    name: 'CAR CARRIER',
    category: 'trucks',
    price: 65.00,
    image: 'https://i.ibb.co/xK5GJTdM/image.jpg',
    description: 'Multi-level wooden car carrier truck with loading ramp',
    featured: true,
    stock: 3
  },
  {
    id: 'logging-truck',
    name: 'Logging Truck',
    category: 'trucks',
    price: 100.00,
    image: 'https://i.ibb.co/dw8bprxd/166834389-1003153473424487-7993501529931213173-n-1-optimized.webp',
    description: 'Heavy-duty wooden logging truck for forestry operations',
    stock: 2
  },
  {
    id: 'truck-trailer-load',
    name: 'TRUCK,TRAILER AND LOAD',
    category: 'trucks',
    price: 400.00,
    image: 'https://i.ibb.co/dw8bprxd/166834389-1003153473424487-7993501529931213173-n-1-optimized.webp',
    description: 'Complete wooden truck and trailer set with cargo load',
    featured: true,
    stock: 1
  },
  {
    id: 'dump-truck',
    name: 'DUMP TRUCK',
    category: 'trucks',
    price: 30.00,
    image: 'https://i.ibb.co/dw8bprxd/166834389-1003153473424487-7993501529931213173-n-1-optimized.webp',
    description: 'Heavy-duty wooden dump truck with tilting bed',
    stock: 2
  },
  {
    id: 'trolley-blocks',
    name: 'TROLLEY AND BLOCKS',
    category: 'trucks',
    price: 75.00,
    image: 'https://i.ibb.co/dw8bprxd/166834389-1003153473424487-7993501529931213173-n-1-optimized.webp',
    description: 'Wooden trolley with building blocks for construction fun',
    stock: 1
  },
  {
    id: 'rubbish-truck',
    name: 'RUBBISH TRUCK',
    category: 'trucks',
    price: 100.00,
    image: 'https://i.ibb.co/dw8bprxd/166834389-1003153473424487-7993501529931213173-n-1-optimized.webp',
    description: 'Large wooden garbage truck with working mechanisms',
    featured: true,
    stock: 1
  },
  {
    id: '2-by-4-tow-truck',
    name: '2 by 4 pine tow truck',
    category: 'trucks',
    price: 12.00,
    image: 'https://i.ibb.co/dw8bprxd/166834389-1003153473424487-7993501529931213173-n-1-optimized.webp',
    description: 'Traditional 2x4 pine tow truck for rescue operations',
    stock: 6
  },
  {
    id: 'big-tow-truck',
    name: 'BIG TOW TRUCK',
    category: 'trucks',
    price: 100.00,
    image: 'https://i.ibb.co/dw8bprxd/166834389-1003153473424487-7993501529931213173-n-1-optimized.webp',
    description: 'Large wooden tow truck for heavy vehicle recovery',
    stock: 1
  },

  // CARS
  {
    id: 'pine-bat-car',
    name: 'pine bat car',
    category: 'cars',
    price: 5.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Sleek pine wooden car with unique bat-inspired design',
    featured: true,
    stock: 10
  },
  {
    id: 'small-pine-bus',
    name: 'small pine bus',
    category: 'cars',
    price: 5.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Compact pine wooden bus perfect for transporting passengers',
    stock: 8
  },
  {
    id: 'small-pine-ute',
    name: 'small pine ute',
    category: 'cars',
    price: 5.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Classic New Zealand pine ute utility vehicle',
    stock: 6
  },
  {
    id: 'small-pine-car',
    name: 'small pine car',
    category: 'cars',
    price: 5.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Small pine wooden car perfect for young children',
    featured: true,
    stock: 7
  },
  {
    id: '2-by-4-set-5',
    name: '2 BY 4 SET 5',
    category: 'cars',
    price: 40.00,
    image: 'https://i.ibb.co/RpRG1166/image.jpg',
    description: 'Complete set of 5 cars from the 2x4 series',
    featured: true,
    stock: 1
  },
  {
    id: '2-by-4-pine-car',
    name: '2 by 4 pine car',
    category: 'cars',
    price: 10.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Traditional 2x4 pine car with classic design',
    stock: 5
  },
  {
    id: '2-by-4-pine-ute',
    name: '2 by 4 pine ute',
    category: 'cars',
    price: 10.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Traditional 2x4 pine utility vehicle',
    stock: 5
  },
  {
    id: 'car-carrier-4-cars',
    name: 'CAR CARRIER AND 4 CARS',
    category: 'cars',
    price: 120.00,
    image: 'https://i.ibb.co/xK5GJTdM/image.jpg',
    description: 'Complete car carrier set with 4 wooden cars',
    featured: true,
    stock: 1
  },
  {
    id: 'small-rimu-car',
    name: 'SMALL RIMU CAR',
    category: 'cars',
    price: 12.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Premium small car crafted from New Zealand Rimu',
    stock: 1
  },
  {
    id: 'small-kauri-car',
    name: 'SMALL KAURI CAR',
    category: 'cars',
    price: 15.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Premium small car crafted from New Zealand Kauri',
    stock: 1
  },
  {
    id: 'small-mac-car',
    name: 'SMALL MAC CAR',
    category: 'cars',
    price: 12.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Small car crafted from Macrocarpa timber',
    stock: 1
  },
  {
    id: 'large-rimu-car',
    name: 'LARGE RIMU CAR',
    category: 'cars',
    price: 22.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Large premium car crafted from New Zealand Rimu',
    stock: 1
  },
  {
    id: 'large-kauri-car',
    name: 'LARGE KAURI CAR',
    category: 'cars',
    price: 25.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Large premium car crafted from New Zealand Kauri',
    stock: 1
  },
  {
    id: 'large-mac-car',
    name: 'LARGE MAC CAR',
    category: 'cars',
    price: 22.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Large car crafted from Macrocarpa timber',
    stock: 1
  },
  {
    id: 'large-pine-car',
    name: 'LARGE PINE CAR',
    category: 'cars',
    price: 20.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Large wooden car crafted from pine',
    stock: 1
  },
  {
    id: 'large-rimu-ute',
    name: 'LARGE RIMU UTE',
    category: 'cars',
    price: 22.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Large premium ute crafted from New Zealand Rimu',
    stock: 1
  },
  {
    id: 'large-kauri-ute',
    name: 'LARGE KAURI UTE',
    category: 'cars',
    price: 25.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Large premium ute crafted from New Zealand Kauri',
    stock: 1
  },
  {
    id: 'large-mac-ute',
    name: 'LARGE MAC UTE',
    category: 'cars',
    price: 22.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Large ute crafted from Macrocarpa timber',
    stock: 1
  },
  {
    id: 'large-pine-ute',
    name: 'LARGE PINE UTE',
    category: 'cars',
    price: 20.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Large wooden ute crafted from pine',
    stock: 1
  },
  {
    id: 'formula-one-car',
    name: 'FORMULA ONE CAR',
    category: 'cars',
    price: 35.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Sleek wooden Formula One racing car',
    stock: 1
  },
  {
    id: 'racing-car',
    name: 'RACING CAR',
    category: 'cars',
    price: 30.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Streamlined wooden racing car for speed',
    stock: 1
  },
  {
    id: 'ferrari',
    name: 'FERRARI',
    category: 'cars',
    price: 35.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Wooden Ferrari-inspired sports car',
    stock: 1
  },
  {
    id: 'sports-car',
    name: 'SPORTS CAR',
    category: 'cars',
    price: 30.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Sleek wooden sports car design',
    stock: 1
  },
  {
    id: 'tude-dude-coaster',
    name: 'TUDE DUDE COASTER',
    category: 'cars',
    price: 15.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Tude Dude themed wooden coaster',
    stock: 1
  },
  {
    id: 'power-pony-coaster',
    name: 'POWER PONY COASTER',
    category: 'cars',
    price: 15.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Power Pony themed wooden coaster',
    stock: 1
  },
  {
    id: 'freaky-ford-coaster',
    name: 'FREAKY FORD COASTER',
    category: 'cars',
    price: 15.00,
    image: 'https://i.ibb.co/1GbsQ0F8/image.jpg',
    description: 'Freaky Ford themed wooden coaster',
    stock: 1
  },

  // PLANES
  {
    id: 'helicopter-rimu',
    name: 'HELICOPTER - Rimu',
    category: 'planes',
    price: 30.00,
    image: 'https://i.ibb.co/tM2rrMsC/image.jpg',
    description: 'Beautiful wooden helicopter made from premium rimu',
    featured: true,
    stock: 5
  },
  {
    id: 'bi-plane',
    name: 'bi plane',
    category: 'planes',
    price: 20.00,
    image: 'https://i.ibb.co/yc5YffjH/received-649542706226495-2-optimized.webp',
    description: 'Classic wooden biplane with authentic aviation details',
    stock: 3
  },
  {
    id: 'pine-plan',
    name: 'pine plan',
    category: 'planes',
    price: 20.00,
    image: 'https://i.ibb.co/yc5YffjH/received-649542706226495-2-optimized.webp',
    description: 'Simple pine wooden airplane perfect for young aviators',
    stock: 4
  },
  {
    id: 'wooden-pine-helicopter',
    name: 'wooden pine helicopter',
    category: 'planes',
    price: 20.00,
    image: 'https://i.ibb.co/tM2rrMsC/image.jpg',
    description: 'Pine wooden helicopter perfect for aviation adventures',
    stock: 9
  },

  // KITCHEN
  {
    id: 'big-spatuler-flat',
    name: 'BIG SPATULER FLAT',
    category: 'kitchen',
    price: 20.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Large flat wooden spatula perfect for cooking',
    stock: 3
  },
  {
    id: 'wooden-spoon',
    name: 'wooden SPOON',
    category: 'kitchen',
    price: 12.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Handcrafted wooden spoon perfect for cooking',
    stock: 5
  },
  {
    id: 'toaster-tongs',
    name: 'TOASTER-TONGS',
    category: 'kitchen',
    price: 30.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Wooden toaster tongs for safe bread handling',
    stock: 2
  },
  {
    id: 'rolling-pin',
    name: 'ROLLING PIN',
    category: 'kitchen',
    price: 40.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Traditional wooden rolling pin perfect for baking',
    stock: 1
  },
  {
    id: 'egg-cup',
    name: 'egg cup',
    category: 'kitchen',
    price: 10.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Wooden egg cup perfect for breakfast',
    stock: 3
  },
  {
    id: 'small-spatuler-curve',
    name: 'SMALL SPATULER CURVE',
    category: 'kitchen',
    price: 12.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Small curved wooden spatula perfect for cooking',
    stock: 2
  },
  {
    id: 'small-spatuler-flat',
    name: 'SMALL SPATULER FLAT',
    category: 'kitchen',
    price: 12.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Small flat wooden spatula perfect for cooking',
    stock: 3
  },
  {
    id: 'spreader',
    name: 'SPREADER',
    category: 'kitchen',
    price: 10.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Wooden spreader for butter and spreads',
    stock: 5
  },
  {
    id: 'small-spoon',
    name: 'SMALL SPOON',
    category: 'kitchen',
    price: 8.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Small wooden spoon for stirring',
    stock: 4
  },
  {
    id: 'porridge-spurtle',
    name: 'PORRIDGE SPURTLE',
    category: 'kitchen',
    price: 15.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Traditional Scottish wooden spurtle for stirring porridge',
    stock: 2
  },
  {
    id: 'pot-scraper',
    name: 'POT SCRAPER',
    category: 'kitchen',
    price: 8.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Wooden pot scraper for cooking',
    stock: 3
  },
  {
    id: 'salad-hands',
    name: 'SALAD HANDS',
    category: 'kitchen',
    price: 50.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Wooden salad hands for serving',
    stock: 1
  },
  {
    id: 'key-holder',
    name: 'KEY HOLDER',
    category: 'kitchen',
    price: 25.00,
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    description: 'Functional wooden key holder for organizing keys',
    stock: 3
  },

  // TRACTORS & BOATS
  {
    id: 'police-boat',
    name: 'police boat',
    category: 'tractors-boats',
    price: 100.00,
    image: 'https://i.ibb.co/FkkjBShk/image.jpg',
    description: 'Wooden police patrol boat for law enforcement missions',
    stock: 2
  },
  {
    id: 'pine-boat',
    name: 'pine boat',
    category: 'tractors-boats',
    price: 20.00,
    image: 'https://i.ibb.co/FkkjBShk/image.jpg',
    description: 'Simple pine wooden boat perfect for water adventures',
    stock: 3
  },
  {
    id: 'tractor-exquisite',
    name: 'Tractor Exquisite',
    category: 'tractors-boats',
    price: 80.00,
    image: 'https://i.ibb.co/FkkjBShk/image.jpg',
    description: 'Premium wooden tractor with exquisite craftsmanship',
    featured: true,
    stock: 2
  },
  {
    id: 'fishing-boat',
    name: 'FISHING BOAT',
    category: 'tractors-boats',
    price: 100.00,
    image: 'https://i.ibb.co/FkkjBShk/image.jpg',
    description: 'Wooden fishing boat perfect for marine adventures',
    stock: 1
  }
];
