
import React from 'react';
import { MapPin } from 'lucide-react';

const AboutSection = () => {
  const areas = ['New York City', 'Brooklyn', 'Queens', 'Long Island'];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-charcoal/90 to-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(https://source.unsplash.com/random/800x1200/?henna,artist)`,
                  filter: 'brightness(0.8) contrast(1.1)'
                }}
              >
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 hidden lg:block">
              <div className="bg-gradient-to-tr from-rosegold/20 to-rosegold/5 backdrop-blur-sm border border-rosegold/10 p-6 rounded-lg">
                <p className="font-serif italic text-lg text-white/80">
                  "Art is how I express my soul, and with each design, I create a piece of magic."
                </p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
              About the Artist
            </h2>
            
            <div className="space-y-4 text-white/80">
              <p>
                With over 10 years of experience in the art of Mehandi and Nail design, Amira brings passion, creativity, and precision to every project. Trained in both traditional techniques and modern trends, her work has adorned hundreds of brides and fashion enthusiasts.
              </p>
              <p>
                Amira's journey began in her hometown, where she learned the ancient art from her grandmother. After perfecting her craft through years of practice and formal education in cosmetology, she established Henna Bliss to bring her unique artistic vision to clients.
              </p>
              <p>
                Her work has been featured in several bridal magazines and has earned recognition for its intricate details and innovative designs that blend cultural motifs with contemporary style.
              </p>
            </div>
            
            {/* Areas served */}
            <div className="mt-8">
              <h3 className="text-xl font-serif font-medium text-white mb-4">Areas Served</h3>
              <div className="flex flex-wrap gap-4">
                {areas.map((area) => (
                  <div 
                    key={area} 
                    className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                  >
                    <MapPin size={16} className="text-rosegold animate-pulse" />
                    <span className="text-white/90">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="button-glow mt-8">
              Learn More About My Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
