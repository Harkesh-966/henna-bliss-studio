
import React, { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    image: 'https://source.unsplash.com/random/100x100/?woman,portrait1',
    stars: 5,
    text: 'The bridal mehandi exceeded my expectations! The designs were intricate and beautiful, and the artist was professional and friendly. Everyone at my wedding was complimenting my hands!'
  },
  {
    id: 2,
    name: 'Emily Chen',
    role: 'Regular Client',
    image: 'https://source.unsplash.com/random/100x100/?woman,portrait2',
    stars: 5,
    text: 'I\'ve been getting my nails done here for over a year now and I\'m always impressed by the creativity and attention to detail. The gel nails last for weeks without chipping!'
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Event Organizer',
    image: 'https://source.unsplash.com/random/100x100/?woman,portrait3',
    stars: 5,
    text: 'We hired Henna Bliss for a corporate event and they were amazing! They handled a large group efficiently, and everyone loved their mehandi. Highly recommended for events!'
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-charcoal/90 to-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">Client Testimonials</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience with our services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-10">
                    <div className="flex flex-col items-center text-center">
                      {/* Avatar */}
                      <div className="mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-rosegold p-1">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                      
                      {/* Stars */}
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} size={20} className="text-golden fill-golden animate-glow-pulse" />
                        ))}
                      </div>
                      
                      {/* Text */}
                      <blockquote className="text-lg md:text-xl text-white/90 italic mb-6">
                        "{testimonial.text}"
                      </blockquote>
                      
                      {/* Author */}
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-rosegold text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:text-rosegold transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:text-rosegold transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-rosegold w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
