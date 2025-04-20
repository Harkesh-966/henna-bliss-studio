
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-charcoal py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Tag */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-gradient-gold">Henna Bliss</h3>
            <p className="text-white/70 mt-2">Exquisite Mehandi & Nail Art Services</p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {['Home', 'Services', 'About', 'Gallery', 'Testimonials', 'Book Now'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white/70 hover:text-rosegold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-rosegold hover:border-rosegold transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-rosegold hover:border-rosegold transition-colors"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Henna Bliss. All rights reserved.
          </p>
          <p className="mt-2">
            <span className="shimmer-text text-sm">Made with ❤️ by Lovable</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
