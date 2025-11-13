import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'why-poppas-wooden-creations-are-best',
    title: 'Handcrafted in Whangārei: Why Poppa\'s Wooden Creations Are the Best Sustainable Toys for Your Toddler',
    excerpt: 'Discover why Poppa\'s Wooden Creations in Whangārei crafts the best sustainable wooden toys using NZ native timbers like Kauri and Rimu.',
    date: '2025-11-13',
    readTime: '12 min read',
    category: 'Local Craftsmanship',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=60&auto=format&fit=crop'
  },
  {
    slug: 'personalised-handmade-keepsakes',
    title: 'Custom Wooden Toys NZ: Personalised Handmade Keepsakes',
    excerpt: 'Discover custom wooden toys in NZ – safe, eco-friendly, handmade keepsakes perfect for children and unique baby gifts.',
    date: '2025-11-10',
    readTime: '10 min read',
    category: 'Gift Guide',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=60&auto=format&fit=crop'
  },
  {
    slug: 'sensory-toys-for-babies',
    title: 'Sensory Toys for Babies: Why Tactile Wooden Toys Are Perfect',
    excerpt: 'Discover how sensory toys for babies, especially tactile wooden toys handmade in NZ, support early development while being safe, durable, and eco-friendly.',
    date: '2025-11-07',
    readTime: '8 min read',
    category: 'Baby Development',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=60&auto=format&fit=crop'
  },
  {
    slug: 'benefits-of-wooden-toys',
    title: '5 Benefits of Wooden Toys for Child Development',
    excerpt: 'Discover why wooden toys are better for your child\'s development, from motor skills to creativity and environmental responsibility.',
    date: '2025-11-01',
    readTime: '8 min read',
    category: 'Child Development',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=60&auto=format&fit=crop'
  },
  {
    slug: 'best-wooden-toys-by-age',
    title: 'Best Wooden Toys for Different Ages: 0-5 Years Guide',
    excerpt: 'A complete guide to choosing age-appropriate wooden toys that support your child\'s developmental milestones.',
    date: '2025-11-15',
    readTime: '10 min read',
    category: 'Buying Guide',
    image: 'https://images.unsplash.com/photo-1587070163926-eb9c93d2b3c4?w=400&q=60&auto=format&fit=crop'
  }
];

export function BlogList() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wooden Toy Tips & Parent Guides
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Expert advice on choosing, using, and caring for wooden toys. 
            Plus insights on child development and sustainable parenting.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Link to={`/blog/${post.slug}`}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-NZ', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-600">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-amber-600 font-semibold hover:text-amber-700 inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get Parenting Tips in Your Inbox
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to receive our latest articles on wooden toys and child development.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="your.email@example.com"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
