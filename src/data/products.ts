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
  },
  {
    id: 'other-toys',
    name: 'Other Wooden Toys',
    description: 'Unique wooden toys and educational games',
    image: 'https://i.ibb.co/VcvfnLgb/FB-IMG-1641578276716-optimized.webp',
    slug: 'wooden-other-toys'
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
    description: 'Classic New Zealand pine ute (utility vehicle)',
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

  // PLANES
  {
    id: 'helicopter-rimu',
    name: 'HELICOPTER - Rimu',
    category: 'planes',
    price: 30.00,
    image: 'https://i.ibb.co/tM2rrMsC/image.jpg',
    description: 'Beau
