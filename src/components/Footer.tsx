import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FooterLink {
  id: string;
  title: string;
  url: string;
  category: 'quick-links' | 'categories' | 'legal';
}

interface SocialMedia {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

interface FooterData {
  companyName: string;
  tagline: string;
  description: string;
  links: FooterLink[];
  socialMedia: SocialMedia;
  contactInfo: ContactInfo;
  copyrightText: string;
}

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);

  // Load footer data from Supabase
  useEffect(() => {
    const loadFooterData = async () => {
      try {
        // Check if Supabase is configured
        if (!supabase) {
          console.log('📦 Supabase not configured, using default footer');
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from('site_settings')
          .select('setting_value')
          .eq('setting_key', 'footer')
          .single();

        if (error) {
          console.error('Error loading footer data:', error);
          setLoading(false);
          return;
        }

        if (data?.setting_value) {
          setFooterData(data.setting_value as FooterData);
          console.log('📄 Footer loaded from Supabase');
        }
      } catch (error) {
        console.error('Error loading footer:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFooterData();
  }, []);

  // Default values (used if Supabase data not available)
  const defaults = {
    companyName: "Poppa's Wooden Creations",
    tagline: "Handcrafted in New Zealand",
    description: "Creating beautiful, safe wooden toys with love and attention to detail since 2015.",
    contactInfo: {
      phone: "+64 21 022 8166",
      email: "poppas.wooden.creations@gmail.com",
      address: "102 Kiripaka Rd\nWhangarei, Northland 0110\nNew Zealand",
      hours: "Mon-Fri: 9AM-3PM NZST\nSaturday: Closed\nSunday: Closed"
    },
    socialMedia: {
      facebook: "https://facebook.com/poppaswooden",
      instagram: "https://instagram.com/poppaswooden",
      twitter: ""
    },
    copyrightText: "© 2024 Poppa's Wooden Creations. Made with ❤️ in New Zealand"
  };

  // Use Supabase data if available, otherwise use defaults
  const companyName = footerData?.companyName || defaults.companyName;
  const tagline = footerData?.tagline || defaults.tagline;
  const description = footerData?.description || defaults.description;
  const phone = footerData?.contactInfo?.phone || defaults.contactInfo.phone;
  const email = footerData?.contactInfo?.email || defaults.contactInfo.email;
  const addressLines = (footerData?.contactInfo?.address || defaults.contactInfo.address).split('\n');
  const hoursLines = (footerData?.contactInfo?.hours || defaults.contactInfo.hours).split('\n');
  const facebook = footerData?.socialMedia?.facebook || defaults.socialMedia.facebook;
  const instagram = footerData?.socialMedia?.instagram || defaults.socialMedia.instagram;

  // Get links by category
  const getLinks = (category: string) => {
    if (!footerData?.links) return [];
    return footerData.links.filter(link => link.category === category);
  };

  const quickLinks = getLinks('quick-links');
  const categoryLinks = getLinks('categories');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold" aria-label="Poppa's Wooden Creations Logo">P</span>
              </div>
              <div>
                <h2 className="font-bold text-lg">{companyName}</h2>
                <p className="text-sm text-gray-300">{tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{description}</p>
            <div className="flex space-x-4">
              {facebook && (
                <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors" aria-label="Visit our Facebook page">
                  <Facebook size={20} />
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors" aria-label="Visit our Instagram page">
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.length > 0 ? (
                quickLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} className="text-gray-300 hover:text-white transition-colors">
                      {link.title}
                    </a>
                  </li>
                ))
              ) : (
                <>
                  <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">All Products</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping & Returns</a></li>
                </>
              )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categoryLinks.length > 0 ? (
                categoryLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} className="text-gray-300 hover:text-white transition-colors">
                      {link.title}
                    </a>
                  </li>
                ))
              ) : (
                <>
                  <li><a href="/wooden-trains" className="text-gray-300 hover:text-white transition-colors">Wooden Trains</a></li>
                  <li><a href="/wooden-baby-toys" className="text-gray-300 hover:text-white transition-colors">Baby Toys</a></li>
                  <li><a href="/wooden-trucks" className="text-gray-300 hover:text-white transition-colors">Trucks</a></li>
                  <li><a href="/wooden-cars" className="text-gray-300 hover:text-white transition-colors">Cars</a></li>
                  <li><a href="/wooden-kitchenware" className="text-gray-300 hover:text-white transition-colors">Kitchenware</a></li>
                </>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-amber-400 mt-0.5" />
                <div className="text-gray-300">
                  {addressLines.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-400" />
                <a href={`tel:${phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-400" />
                <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors">
                  {email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-amber-400 rounded-full mt-1"></div>
                <div className="text-gray-300 text-sm">
                  {hoursLines.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                  <div className="text-sm text-gray-400 mt-1">Established 2015 • NZ Registered Business</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="space-y-3">
            <p className="text-gray-300 text-sm flex items-center justify-center space-x-1">
              <span>{footerData?.copyrightText || defaults.copyrightText}</span>
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Secure SSL Encrypted • GDPR Compliant • Privacy Protected</p>
              <p>Registered Business • Established 2015 • New Zealand Made</p>
              <p>Workshop: {addressLines[0]}, {addressLines[1]}</p>
              <p>Phone: {phone} • Email: {email}</p>
              <p>30-Day Return Policy • Free Shipping Over $1000 NZD • 4.9★ Rating (150+ Reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
