
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Bridal Mehandi',
    description: 'Intricate, traditional designs for the bride\'s special day featuring detailed patterns and cultural motifs.',
    price: 'From $150',
    image: 'https://source.unsplash.com/random/600x800/?bridal,henna'
  },
  {
    id: 2,
    title: 'Party Mehandi',
    description: 'Elegant and trendy designs for parties and special occasions, perfect for adding a touch of glamour.',
    price: 'From $50',
    image: 'https://source.unsplash.com/random/600x800/?party,henna'
  },
  {
    id: 3,
    title: 'Nail Extensions',
    description: 'Beautiful, durable nail extensions in various shapes and designs to enhance your natural nails.',
    price: 'From $75',
    image: 'https://source.unsplash.com/random/600x800/?nail,extension'
  },
  {
    id: 4,
    title: 'Gel Nails',
    description: 'Long-lasting gel nail polish application with a variety of colors and design options.',
    price: 'From $45',
    image: 'https://source.unsplash.com/random/600x800/?gel,nails'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-charcoal to-charcoal/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">Our Services</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our range of premium mehandi and nail art services designed to make you look and feel exceptional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card group h-96"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <div className="service-card-content group-hover:translate-y-0 transform translate-y-8 transition-transform duration-500">
                <h3 className="font-serif text-2xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-rosegold font-semibold">{service.price}</span>
                  <button className="button-outline text-sm py-2">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
