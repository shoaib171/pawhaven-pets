
import React from 'react';
import { Scissors, Stethoscope, Calendar, Dog } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageUrl, delay }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group opacity-0 animate-fade-in ${delay}`}>
      <div className="h-44 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-pawblue/10 flex items-center justify-center mb-4 text-pawblue">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Pet Grooming",
      description: "Professional grooming services to keep your pet looking and feeling their best.",
      icon: <Scissors className="h-6 w-6" />,
      imageUrl: "/lovable-uploads/a3c2afdd-974d-4586-8bbb-aa1dcb9d892d.png",
      delay: "animate-delay-100"
    },
    {
      title: "Veterinary Care",
      description: "Comprehensive medical care from routine check-ups to specialized treatments.",
      icon: <Stethoscope className="h-6 w-6" />,
      imageUrl: "/lovable-uploads/c79677c7-6685-4889-9ffd-3c1bc7270a8f.png",
      delay: "animate-delay-200"
    },
    {
      title: "Pet Daycare",
      description: "A fun and safe environment for your pet to socialize and stay active while you're away.",
      icon: <Calendar className="h-6 w-6" />,
      imageUrl: "/lovable-uploads/31318597-db50-43d2-8e03-fdd9fab2965a.png",
      delay: "animate-delay-300"
    },
    {
      title: "Training Programs",
      description: "Behavior training programs tailored to your pet's unique personality and needs.",
      icon: <Dog className="h-6 w-6" />,
      imageUrl: "/lovable-uploads/492e9dc5-61cd-41a8-9b78-d1aa2582a9f0.png",
      delay: "animate-delay-400"
    }
  ];

  return (
    <section id="services" className="section-padding bg-pawbeige/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Our Services</h2>
          <p className="text-gray-600">Comprehensive care services designed with your pet's health and happiness in mind.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
