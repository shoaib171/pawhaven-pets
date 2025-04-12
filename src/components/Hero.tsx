
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <img 
            src="/lovable-uploads/e27ad4a4-e925-4d3c-a276-8c4a1f1b8c91.png" 
            alt="Happy dog and cat with owner" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display leading-tight">
            Because They Deserve the Best Care
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
            From grooming to health and daycare — we've got your pet covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/appointment">
              <Button className="bg-paworange hover:bg-paworange-dark text-white px-8 py-6 text-lg rounded-lg">
                Book an Appointment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg rounded-lg">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
