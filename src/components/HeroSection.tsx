
import React, { useState, useEffect } from 'react';

const images = [
  '/mehandi-1.jpg',
  '/mehandi-2.jpg',
  '/mehandi-3.jpg',
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out
                      ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(34, 31, 38, 0.3), rgba(34, 31, 38, 0.7)), 
                              url('https://source.unsplash.com/random/1920x1080/?henna,mehandi${index + 1}')`,
              transform: `scale(${currentImage === index ? '1.05' : '1'})`,
              transition: 'transform 6s ease-out, opacity 1s ease-in-out',
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="animate-fade-in font-serif font-bold text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight">
          <span className="block">Book Stunning Mehandi &</span>
          <span className="text-gradient-gold">Nail Art at Your Doorstep</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-0 animate-[fade-in_0.5s_ease-out_0.3s_forwards]">
          Experience the artistry of traditional and contemporary designs for your special occasions
        </p>
        
        <div className="mt-10 opacity-0 animate-[fade-in_0.5s_ease-out_0.6s_forwards]">
          <button className="button-glow group">
            <span>Talk to our AI Artist</span>
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
