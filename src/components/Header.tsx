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
    { id: 'services', label: 'Projects', icon: Briefcase },
    { id: 'about', label: 'Experience', icon: User },
    { id: 'contact', label: 'Achievements', icon: Mail }
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
            
            {/* Logo Section */}
            <div 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-[#0070f3] group-hover:to-[#50e3c2] transition-all duration-300">
                Upstraiq
              </span>
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
              {/* CTA Button */}
              <button 
                onClick={() => setCurrentPage('contact')}
                className="relative px-6 py-2.5 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-xl text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
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
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
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