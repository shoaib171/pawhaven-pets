
import React from 'react';
import { Award, Heart, Clock } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`flex flex-col items-center text-center opacity-0 animate-fade-in ${delay}`}>
      <div className="w-16 h-16 rounded-full bg-pawblue flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certified Vets",
      description: "Our team consists of fully certified and experienced veterinarians and pet care specialists.",
      delay: "animate-delay-100"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Home-Like Daycare",
      description: "Our facilities are designed to feel like home, providing comfort and familiarity for your pets.",
      delay: "animate-delay-200"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "We're always here for you and your pets, offering round-the-clock emergency services.",
      delay: "animate-delay-300"
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Why Choose Us</h2>
          <p className="text-gray-600">Discover what makes PawHaven the preferred choice for pet care services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
