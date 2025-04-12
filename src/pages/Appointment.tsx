
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppointmentForm from '../components/AppointmentForm';
import SEOHead from '../components/SEOHead';

const Appointment = () => {
  return (
    <div className="min-h-screen bg-pawbeige/20">
      <SEOHead 
        title="Book an Appointment | PawHaven"
        description="Schedule a pet care appointment with PawHaven. We offer grooming, veterinary services, daycare, and training for your beloved companions."
        keywords="pet appointment, pet grooming, veterinary services, pet daycare, pet training, pet care"
      />
      <Navbar />
      <main className="pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-pawblue mb-2 font-display">Book an Appointment</h1>
            <p className="text-lg text-gray-600 mb-8">Fill out the form below to schedule a visit for your pet.</p>
            <AppointmentForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;
