
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-pawblue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">Give Your Pet the Care They Deserve Today</h2>
          <p className="text-xl mb-8 text-white/90">Experience the PawHaven difference for your beloved companions.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/appointment">
              <Button className="bg-white text-pawblue hover:bg-gray-100 px-8 py-6 text-lg">
                Book an Appointment
              </Button>
            </Link>
            <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
