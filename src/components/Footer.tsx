import React from 'react';
import { Linkedin, Mail, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="font-display text-4xl font-bold text-gradient-animated mb-4">
                Upstraiq
              </div>
              <p className="font-body text-slate-400 text-lg italic">
                Elevating Intelligence. Building Your Future.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="font-body text-slate-300 text-sm">
                Founded by <span className="text-cyan-400 font-medium">Ashutosh Singh</span>, <span className="text-cyan-400 font-medium">Harsh Singh</span>, and <span className="text-cyan-400 font-medium">Nitish Singh</span>
              </p>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                <span className="font-body text-sm">India</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="font-body text-slate-400 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform">
                Home
              </a>
              <a href="#services" className="font-body text-slate-400 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform">
                Services
              </a>
              <a href="#about" className="font-body text-slate-400 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform">
                About
              </a>
              <a href="#contact" className="font-body text-slate-400 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 transform">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-white">Let's Connect</h3>
            <div className="space-y-4">
              <a 
                href="mailto:hello@upstraiq.com" 
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1 transform group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="font-body">hello@upstraiq.com</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1 transform group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="font-body">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-slate-500 text-sm">
              © 2025 Upstraiq. All Rights Reserved.
            </p>
            <p className="font-body text-slate-500 text-sm flex items-center gap-2">
              Crafted with <Heart size={16} className="text-red-500 animate-pulse" /> and innovation in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};