import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Award, Truck, Shield, Star, Users, Edit, MapPin, Phone, Mail, Building, Calendar, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [showImageEditor, setShowImageEditor] = useState(false);
  const [aboutImage, setAboutImage] = useState('');

  // Load saved about image
  useEffect(() => {
    try {
      const savedAboutImage = localStorage.getItem('poppas-about-image');
      if (savedAboutImage) {
        console.log('🖼️ ABOUT: Found saved about image');
        setAboutImage(savedAboutImage);
      } else {
        console.log('🖼️ ABOUT: No saved image, using default');
        setAboutImage('https://i.ibb.co/ynRTChbF/image.jpg');
      }
    } catch (error) {
      console.error('Error loading about image:', error);
      setAboutImage('https://i.ibb.co/ynRTChbF/image.jpg');
    }
  }, []);

  const handleSaveAboutImage = () => {
    try {
      console.log('💾 ABOUT: Saving about image:', aboutImage.substring(0, 100) + '...');
      
      localStorage.setItem('poppas-about-image', aboutImage);
      setAboutImage(aboutImage);
      
      const verification = localStorage.getItem('poppas-about-image');
      if (verification === aboutImage) {
        console.log('✅ ABOUT: Image saved successfully');
        setShowImageEditor(false);
        alert('About page image updated successfully!');
      } else {
        throw new Error('Save verification failed');
      }
    } catch (error) {
      console.error('❌ ABOUT: Failed to save about image:', error);
      alert('Failed to save about image. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us - Handcrafted Wooden Toys | Poppa's Wooden Creations</title>
        <meta name="description" content="Learn about Poppa's Wooden Creations - A family business creating beautiful, safe, and sustainable wooden toys in New Zealand since 2015." />
        <meta name="keywords" content="about us, wooden toy maker, New Zealand craftsman, handcrafted toys, family business" />
        <link rel="canonical" href="https://poppaswoodencreations.co.nz/about" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Us | Poppa's Wooden Creations" />
        <meta property="og:description" content="A family business creating beautiful wooden toys in New Zealand since 2015." />
        <meta property="og:url" content="https://poppaswoodencreations.co.nz/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Poppa's Wooden Creations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A family business creating beautiful, safe, and sustainable wooden toys 
              in the heart of New Zealand since 2015.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Story Content */}
            <div className="space-y-8">
              {/* Business Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Building className="text-blue-600 mr-3" size={24} />
                  Business Information
                </h2>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <Building className="text-blue-600 mt-1" size={16} />
                    <div>
                      <p className="font-semibold">Registered Business Name:</p>
                      <p>Poppa's Wooden Creations</p>
                      <p className="text-sm text-gray-600">Established 2015 - Family Business</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1" size={16} />
                    <div>
                      <p className="font-semibold">Physical Address:</p>
                      <p>102 Kiripaka Rd</p>
                      <p>Whangarei, Northland 0110</p>
                      <p>New Zealand</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="text-blue-600 mt-1" size={16} />
                    <div>
                      <p className="font-semibold">Phone:</p>
                      <p>+64 21 022 8166</p>
                      <p className="text-sm text-gray-600">Monday-Friday 9AM-3PM NZST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="text-blue-600 mt-1" size={16} />
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p>poppas.wooden.creations@gmail.com</p>
                      <p className="text-sm text-gray-600">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-blue-600 mt-1" size={16} />
                    <div>
                      <p className="font-semibold">Established:</p>
                      <p>2015 - Registered NZ Business - 10+ years experience</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="text-red-500 mr-3" size={32} />
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Poppa's Wooden Creations began in 2015 when our founder, a passionate craftsman and grandfather, 
                    started making wooden toys for his grandchildren in his Whangarei workshop. What started as a 
                    labor of love quickly grew into something special when friends and family saw the quality and 
                    beauty of his handcrafted creations.
                  </p>
                  <p>
                    Today, we're proud to be one of New Zealand's premier wooden toy makers, creating heirloom-quality 
                    toys that inspire imagination, encourage learning, and provide endless hours of screen-free fun. 
                    Every piece is still handcrafted with the same love and attention to detail that started it all.
                  </p>
                  <p>
                    Our workshop in Whangarei is where the magic happens. Using traditional woodworking techniques 
                    combined with modern safety standards, we create toys that are not just beautiful, but built 
                    to last for generations. Each toy tells a story of New Zealand craftsmanship and our commitment 
                    to sustainable, eco-friendly play.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Award className="text-amber-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Craftsmanship</h4>
                      <p className="text-gray-600">Every toy is hand-sanded to perfection and finished with care.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Child Safety First</h4>
                      <p className="text-gray-600">All our toys meet strict safety standards with non-toxic finishes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="text-red-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Sustainable Materials</h4>
                      <p className="text-gray-600">We use responsibly sourced New Zealand timber including Kauri, Rimu, and Macrocarpa.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <button
                onClick={() => setShowImageEditor(true)}
                className="absolute top-4 right-4 bg-white text-gray-700 px-3 py-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors flex items-center space-x-2 z-10"
              >
                <Edit size={16} />
                <span className="text-sm">Edit Image</span>
              </button>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Poppa's workshop and handcrafted wooden toys"
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/FB_IMG_1640827671355.jpg';
                  }}
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <Users className="text-amber-600 mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
                  <div className="text-gray-600">Happy Families</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <Star className="text-yellow-400 mx-auto mb-3 fill-current" size={32} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">4.9★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <CheckCircle className="mr-2" size={20} />
                  Quality Guarantee
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• 100% handcrafted in New Zealand</li>
                  <li>• Premium native timber</li>
                  <li>• Non-toxic, child-safe finishes</li>
                  <li>• Built to last generations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <CheckCircle className="mr-2" size={20} />
                  Fast Shipping
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Free pickup in Whangarei</li>
                  <li>• Worldwide shipping available</li>
                  <li>• Free shipping over $1000 NZD</li>
                  <li>• Tracking provided for all orders</li>
                  <li>• Secure eco-friendly packaging</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <CheckCircle className="mr-2" size={20} />
                  Privacy & Security
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• SSL encrypted checkout</li>
                  <li>• No data shared with third parties</li>
                  <li>• Secure payment processing</li>
                  <li>• GDPR compliant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Materials Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Premium New Zealand Timber</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kauri</h3>
                <p className="text-gray-600">
                  Ancient New Zealand timber known for its beautiful grain and durability. 
                  Perfect for heirloom pieces that last generations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rimu</h3>
                <p className="text-gray-600">
                  Native New Zealand softwood with distinctive red-brown heartwood. 
                  Lightweight yet strong, ideal for children's toys.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Macrocarpa</h3>
                <p className="text-gray-600">
                  Sustainable cypress timber with natural resistance to decay. 
                  Smooth texture perfect for safe, child-friendly toys.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Unique Designs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Every toy we create is backed by our promise of quality, safety, and sustainability. 
              We're not just making toys – we're creating memories that will last a lifetime.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2">
                <Truck size={20} />
                <span>Free shipping over $150</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield size={20} />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={20} />
                <span>Lifetime craftsmanship guarantee</span>
              </div>
            </div>
          </div>

          {/* Image Editor Modal */}
          {showImageEditor && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl max-w-md w-full p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Edit About Page Image</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image URL or Data URL
                    </label>
                    <p className="text-sm text-gray-600">Monday-Friday 9AM-3PM NZST • Established 2015</p>
                    <textarea
                      rows={4}
                      value={aboutImage}
                      onChange={(e) => setAboutImage(e.target.value)}
                      placeholder="Paste your truck image URL or data URL here..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    />
                  </div>
                  
                  {aboutImage && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preview</label>
                      <img
                        src={aboutImage}
                        alt="About page preview"
                        className="w-full h-32 object-cover rounded border"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/FB_IMG_1640827671355.jpg';
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="bg-blue-50 p-3 rounded text-xs text-blue-800">
                    <p><strong>How to add your truck:</strong></p>
                    <p>1. Go to Admin Dashboard → Images → Upload your truck photo</p>
                    <p>2. Copy the data URL from the uploaded image</p>
                    <p>3. Paste it in the field above</p>
                    <p>4. Click "Save Image"</p>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={handleSaveAboutImage}
                    className="flex-1 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Save Image
                  </button>
                  <button
                    onClick={() => setShowImageEditor(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutSection;
