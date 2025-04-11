
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've successfully subscribed to our newsletter.",
      });
    }, 1000);
  };

  return (
    <section className="py-12 bg-pawbeige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-md">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-pawblue/10 flex items-center justify-center text-pawblue">
                <Mail className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2 font-display">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600">Stay updated with pet care tips, special offers, and PawHaven news.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              className="bg-paworange hover:bg-paworange-dark text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            By subscribing, you agree to receive email communications from PawHaven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
