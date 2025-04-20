
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    location: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your appointment.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      location: '',
      message: ''
    });
  };

  return (
    <section id="book-now" className="py-20 bg-gradient-to-b from-charcoal to-charcoal/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">Book Your Appointment</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Reserve your slot for a personalized mehandi or nail art session. We'll get back to you to confirm your booking.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rosegold transition-all"
                  placeholder="Your full name"
                />
              </div>
              
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rosegold transition-all"
                  placeholder="Your email address"
                />
              </div>
              
              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rosegold transition-all"
                  placeholder="Your phone number"
                />
              </div>
              
              {/* Service */}
              <div className="form-group">
                <label htmlFor="service" className="block text-white mb-2">Service Type</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rosegold transition-all appearance-none"
                  style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg>')", 
                           backgroundRepeat: 'no-repeat', 
                           backgroundPosition: 'right 1rem center' }}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="bridal">Bridal Mehandi</option>
                  <option value="party">Party Mehandi</option>
                  <option value="extensions">Nail Extensions</option>
                  <option value="gel">Gel Nails</option>
                </select>
              </div>
              
              {/* Date */}
              <div className="form-group">
                <label htmlFor="date" className="block text-white mb-2">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rosegold transition-all"
                />
              </div>
              
              {/* Time */}
              <div className="form-group">
                <label htmlFor="time" className="block text-white mb-2">Preferred Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rosegold transition-all"
                />
              </div>
              
              {/* Location */}
              <div className="form-group md:col-span-2">
                <label htmlFor="location" className="block text-white mb-2">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rosegold transition-all"
                  placeholder="Your address or preferred location"
                />
              </div>
              
              {/* Message */}
              <div className="form-group md:col-span-2">
                <label htmlFor="message" className="block text-white mb-2">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rosegold transition-all resize-none"
                  placeholder="Tell us about your requirements, special design requests, or any other details..."
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button type="submit" className="button-glow px-10 py-4">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
