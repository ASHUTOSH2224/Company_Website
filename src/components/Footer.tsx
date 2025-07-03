import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const navigationLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'ourwork', label: 'Our Work' },
    { id: 'company', label: 'Company' }
  ];

  const services = [
    'AI Marketing Automation',
    'E-commerce Development',
    'Mobile App Development',
    'Custom AI Solutions',
    'Web3 & Blockchain',
    'Machine Learning'
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="border-t border-[#333] bg-black">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-xl font-bold gradient-text">Upstraiq</span>
            </div>
            <p className="text-body-sm max-w-xs">
              Transforming businesses with AI-powered solutions. From intelligent automation 
              to cutting-edge applications, we build the future today.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-[#333] rounded-lg flex items-center justify-center hover:border-[#0070f3] hover:bg-[#0070f3] transition-all duration-300 group"
                  >
                    <Icon size={18} className="text-[#888] group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Navigation</h3>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`block text-left nav-link ${currentPage === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
            <div className="space-y-4">
            <h3 className="text-white font-semibold">Services</h3>
            <nav className="space-y-3">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage('services')}
                  className="block text-left nav-link"
                >
                  {service}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#333] rounded-lg flex items-center justify-center">
                  <Mail size={16} className="text-[#888]" />
                </div>
                <span className="text-body-sm">hello@upstraiq.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#333] rounded-lg flex items-center justify-center">
                  <Phone size={16} className="text-[#888]" />
                </div>
                <span className="text-body-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#333] rounded-lg flex items-center justify-center">
                  <MapPin size={16} className="text-[#888]" />
                </div>
                <span className="text-body-sm">San Francisco, CA</span>
              </div>
            </div>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="btn-accent w-full"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm">
            © 2025 Upstraiq. All rights reserved.
            </p>
          <div className="flex items-center gap-6">
            <button className="nav-link">Privacy Policy</button>
            <button className="nav-link">Terms of Service</button>
            <button className="nav-link">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};