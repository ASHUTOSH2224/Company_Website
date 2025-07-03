import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, User, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'ourwork', label: 'OUR WORK', icon: User },
    { id: 'company', label: 'Company', icon: User }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Navigation Container */}
        <div className={`relative backdrop-blur-lg rounded-2xl shadow-2xl transition-all duration-300 border bg-black/80 border-gray-800/50 ${
          isScrolled ? 'shadow-xl' : 'shadow-2xl'
        }`}>
          <div className="flex items-center justify-between px-6 py-3">
            
            {/* Enhanced UPSTRAIQ Logo */}
            <div 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-4 cursor-pointer group"
            >
              {/* Logo Icon with Modern Design */}
              <div className="relative">
                {/* Main Logo Container */}
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#0070f3] via-[#1e40af] to-[#50e3c2] p-0.5 group-hover:scale-110 transition-all duration-300">
                  <div className="w-full h-full rounded-[10px] bg-black/90 flex items-center justify-center relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/20 via-transparent to-[#50e3c2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Letter U with Modern Typography */}
                    <div className="relative z-10 text-white font-bold text-xl leading-none">
                      <span className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent group-hover:from-[#0070f3] group-hover:to-[#50e3c2] transition-all duration-300">
                        U
                      </span>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#50e3c2] opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-1 left-1 w-0.5 h-0.5 rounded-full bg-[#0070f3] opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#0070f3] to-[#50e3c2] opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md -z-10"></div>
              </div>
              
              {/* Company Name with Enhanced Typography */}
              <div className="flex flex-col">
                {/* Main Brand Name */}
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent group-hover:from-[#0070f3] group-hover:via-blue-300 group-hover:to-[#50e3c2] transition-all duration-500">
                    UPSTRAIQ
                  </span>
                  {/* AI Indicator */}
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0070f3] to-[#50e3c2] opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 ml-1 mt-1"></div>
                </div>
                
                {/* Tagline */}
                <span className="text-xs text-gray-400 tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  AI Solutions
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center backdrop-blur-sm rounded-2xl p-2 border transition-all duration-300 bg-gray-900/30 border-gray-700/30">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentPage(item.id)}
                      className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gray-800/60 text-white shadow-lg' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/40'
                      }`}
                    >
                      <Icon 
                        size={18} 
                        className={`transition-all duration-300 ${
                          isActive ? 'text-[#0070f3]' : 'group-hover:text-[#0070f3]'
                        }`} 
                      />
                      <span className="font-medium text-sm">{item.label}</span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0070f3]/20 to-[#50e3c2]/20 rounded-xl"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Contact Us Button */}
              <button 
                onClick={() => setCurrentPage('contact')}
                className="relative px-6 py-2.5 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-xl text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden flex items-center gap-2"
              >
                <Mail size={16} className="relative z-10" />
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#50e3c2] to-[#0070f3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl border transition-all duration-300 bg-gray-900/40 border-gray-700/40 hover:bg-gray-800/60"
            >
              {isMenuOpen ? (
                <X size={20} className="text-white" />
              ) : (
                <Menu size={20} className="text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t p-4 transition-all duration-300 border-gray-700/30">
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gray-800/60 text-white' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/40'
                      }`}
                    >
                      <Icon size={18} className={isActive ? 'text-[#0070f3]' : ''} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
                
                <div className="pt-4">
                  <button 
                    onClick={() => {
                      setCurrentPage('contact');
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail size={16} />
                    Contact Us
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};