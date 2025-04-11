
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold font-display tracking-tight">
            <span className="text-pawblue">Paw</span>
            <span className="text-paworange">Haven</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/90 hover:text-paworange transition-colors">Services</a>
            <a href="#why-us" className="text-foreground/90 hover:text-paworange transition-colors">Why Us</a>
            <a href="#testimonials" className="text-foreground/90 hover:text-paworange transition-colors">Testimonials</a>
            <a href="#blog" className="text-foreground/90 hover:text-paworange transition-colors">Blog</a>
            <Button className="bg-paworange hover:bg-paworange-dark text-white">Book an Appointment</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground/90 hover:text-paworange transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#why-us" className="text-foreground/90 hover:text-paworange transition-colors" onClick={toggleMenu}>Why Us</a>
              <a href="#testimonials" className="text-foreground/90 hover:text-paworange transition-colors" onClick={toggleMenu}>Testimonials</a>
              <a href="#blog" className="text-foreground/90 hover:text-paworange transition-colors" onClick={toggleMenu}>Blog</a>
              <Button className="bg-paworange hover:bg-paworange-dark text-white w-full">Book an Appointment</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
