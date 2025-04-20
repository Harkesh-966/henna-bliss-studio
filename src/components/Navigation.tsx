
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-charcoal/90 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-serif font-bold text-gradient-gold">
            Henna Bliss
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Gallery', 'Testimonials', 'Book Now'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="relative text-white text-sm tracking-wider uppercase hover:text-rosegold transition-colors
                after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 
                after:bg-rosegold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-charcoal/95 backdrop-blur-lg shadow-xl px-4 py-5 transition-all duration-300 ease-in-out",
            isMenuOpen ? "top-full opacity-100" : "top-[-400px] opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col space-y-4">
            {['Home', 'Services', 'About', 'Gallery', 'Testimonials', 'Book Now'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white py-2 text-center hover:text-rosegold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
