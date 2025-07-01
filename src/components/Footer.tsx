import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="font-display text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              Upstraiq
            </div>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
              Empowering businesses through AI innovation. We deliver cutting-edge solutions that transform operations and drive sustainable growth.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span>hello@upstraiq.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  AI Development
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-slate-300 text-sm">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Github size={18} />
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-slate-400 text-sm text-center md:text-right">
              <p>&copy; 2024 Upstraiq. All rights reserved.</p>
              <p className="mt-1">
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
                <span className="mx-2">•</span>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};