
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, imageUrl, rating }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img src={imageUrl} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-paworange text-paworange" />
        ))}
      </div>
      <p className="text-gray-600 italic flex-grow">{quote}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "The groomers at PawHaven are amazing! My golden retriever not only looks fantastic but actually enjoys his grooming sessions now.",
      author: "Emily Johnson",
      role: "Dog Parent",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100",
      rating: 5
    },
    {
      quote: "The veterinary care at PawHaven is exceptional. The staff is knowledgeable, compassionate, and always goes the extra mile for my pets.",
      author: "Michael Rodriguez",
      role: "Multi-pet Owner",
      imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100",
      rating: 5
    },
    {
      quote: "I feel completely at ease leaving my cat at PawHaven's daycare. The facility is clean, and the staff truly cares about each animal's wellbeing.",
      author: "Sarah Kim",
      role: "Cat Parent",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
      rating: 5
    },
    {
      quote: "The training program transformed my hyperactive puppy into a well-behaved dog. The trainers are patient, skilled, and effective.",
      author: "James Wilson",
      role: "Puppy Parent",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-pawblue/10">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">What Pet Parents Say</h2>
          <p className="text-gray-600">Hear from our satisfied customers about their experience with PawHaven.</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 p-4">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-pawblue" />
          </button>
          <button 
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-pawblue" />
          </button>
          
          {/* Mobile version (card grid) */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
