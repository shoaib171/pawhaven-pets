
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import BlogPreview from '../components/BlogPreview';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  // Update metadata for SEO
  useEffect(() => {
    document.title = "PawHaven - Premium Pet Care Services";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'PawHaven offers premium pet care services including grooming, veterinary care, daycare, and training. Because your pets deserve the best care.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'PawHaven offers premium pet care services including grooming, veterinary care, daycare, and training. Because your pets deserve the best care.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
        <BlogPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
