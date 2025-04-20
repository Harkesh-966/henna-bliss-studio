
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingSection from '@/components/BookingSection';
import ChatbotButton from '@/components/ChatbotButton';
import Footer from '@/components/Footer';

const Index = () => {
  // Set meta tags programmatically
  useEffect(() => {
    document.title = "Henna Bliss Studio | Premium Mehandi & Nail Art Services";

    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Luxury Mehandi and Nail Art services for brides and fashion-forward clients. Book our expert artists for stunning designs at your doorstep.');
    
    // Add schema.org structured data for local business
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Henna Bliss Studio',
      'image': 'https://example.com/photos/photo.jpg', // Replace with actual image
      'description': 'Luxury Mehandi and Nail Art services for weddings and special occasions.',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'New York City',
        'addressRegion': 'NY',
        'addressCountry': 'US'
      },
      'telephone': '+1-212-555-0000', // Replace with actual phone
      'openingHours': 'Mo-Sa 09:00-19:00',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Mehandi Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Bridal Mehandi'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Nail Art'
            }
          }
        ]
      }
    });
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection />
      <ChatbotButton />
      <Footer />
    </div>
  );
};

export default Index;
