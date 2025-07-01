import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowRight,
  Clock,
  Globe,
  Award,
  Users,
  Zap,
  Shield,
  Star,
  CheckCircle
} from 'lucide-react';

interface FooterProps {
  onContactClick?: () => void;
  onPageChange?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick, onPageChange }) => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleNavClick = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const companyInfo = {
    description: "Leading AI transformation partner for forward-thinking businesses. We combine cutting-edge technology with deep industry expertise to deliver solutions that drive measurable growth and operational excellence.",
    mission: "Empowering businesses to harness the full potential of artificial intelligence through innovative, scalable, and secure solutions."
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@upstraiq.com',
      href: 'mailto:hello@upstraiq.com',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'San Francisco, CA',
      href: '#',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM PST',
      href: '#',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const quickLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Contact', page: 'contact' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' }
  ];

  const services = [
    { name: 'AI Development', href: '#services' },
    { name: 'Process Automation', href: '#services' },
    { name: 'Data Analytics', href: '#services' },
    { name: 'Machine Learning', href: '#services' },
    { name: 'AI Consulting', href: '#services' },
    { name: 'Custom Solutions', href: '#services' }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/upstraiq',
      gradient: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:bg-blue-50'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/upstraiq',
      gradient: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:bg-blue-50'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/upstraiq',
      gradient: 'from-slate-600 to-slate-800',
      hoverColor: 'hover:bg-slate-50'
    }
  ];

  const trustIndicators = [
    { icon: Users, text: '500+ Happy Clients' },
    { icon: Award, text: 'Industry Leader' },
    { icon: Shield, text: 'SOC 2 Certified' },
    { icon: Star, text: '4.9/5 Rating' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 border-t border-slate-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/15 to-pink-200/15 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Logo and Description */}
              <div>
                <div className="font-display text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  Upstraiq
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  {companyInfo.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-medium">
                  <Zap size={16} className="animate-pulse" />
                  <span>Transforming Business Since 2019</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 font-medium">{contact.label}</div>
                        <div className="text-slate-700 font-semibold">{contact.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                {trustIndicators.map((indicator, index) => {
                  const Icon = indicator.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 text-slate-600 bg-white/60 px-3 py-2 rounded-lg border border-slate-200/50">
                      <Icon size={16} className="text-blue-600" />
                      <span className="text-sm font-medium">{indicator.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.page ? (
                      <button
                        onClick={() => handleNavClick(link.page)}
                        className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium group flex items-center gap-2"
                      >
                        <span>{link.name}</span>
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium group flex items-center gap-2"
                      >
                        <span>{link.name}</span>
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <div className="mt-8">
                <button
                  onClick={onContactClick}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Our Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-slate-600 hover:text-indigo-600 transition-colors duration-300 hover:translate-x-2 transform inline-block font-medium group flex items-center gap-2"
                    >
                      <CheckCircle size={14} className="text-emerald-500" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                <h4 className="font-bold text-slate-900 mb-2">Stay Updated</h4>
                <p className="text-sm text-slate-600 mb-4">Get the latest AI insights and industry news.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
                  />
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-200 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-slate-600 text-sm font-medium">Connect with us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  const isHovered = hoveredSocial === social.name;
                  
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl border-2 border-slate-200 ${social.hoverColor} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-slate-300 group`}
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <Icon 
                        size={20} 
                        className={`transition-all duration-300 ${
                          isHovered 
                            ? `text-white bg-gradient-to-r ${social.gradient} bg-clip-text` 
                            : 'text-slate-600 group-hover:text-slate-800'
                        }`}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Copyright and Legal */}
            <div className="text-slate-500 text-sm text-center lg:text-right">
              <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
                <p>&copy; 2024 Upstraiq. All rights reserved.</p>
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-slate-700 transition-colors duration-300">Privacy Policy</a>
                  <span className="text-slate-300">•</span>
                  <a href="#" className="hover:text-slate-700 transition-colors duration-300">Terms of Service</a>
                  <span className="text-slate-300">•</span>
                  <a href="#" className="hover:text-slate-700 transition-colors duration-300">Cookies</a>
                </div>
              </div>
              
              <div className="mt-2 flex items-center justify-center lg:justify-end gap-2 text-xs">
                <Globe size={14} />
                <span>Made with ❤️ in San Francisco</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};