import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-dark border-b border-slate-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="font-display text-3xl font-bold text-gradient-animated">
              Upstraiq
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-body text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#services" className="font-body text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="font-body text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="font-body text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button className="btn-primary text-white px-8 py-3 rounded-full hover-lift font-medium">
              Get Started
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white transition-colors duration-200 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 glass-dark border-b border-slate-800/50 animate-fade-in-down">
            <nav className="px-4 py-6 space-y-4">
              <a href="#home" className="block font-body text-slate-300 hover:text-white transition-colors duration-200 py-2">Home</a>
              <a href="#services" className="block font-body text-slate-300 hover:text-white transition-colors duration-200 py-2">Services</a>
              <a href="#about" className="block font-body text-slate-300 hover:text-white transition-colors duration-200 py-2">About</a>
              <a href="#contact" className="block font-body text-slate-300 hover:text-white transition-colors duration-200 py-2">Contact</a>
              <button className="w-full btn-primary text-white px-6 py-3 rounded-full mt-4">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};