import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, Zap, Users, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic theme colors based on current page
  const getThemeClasses = () => {
    switch (currentPage) {
      case 'services':
        return {
          primary: 'from-emerald-600 to-teal-600',
          secondary: 'from-emerald-100 to-teal-100',
          accent: 'emerald-600',
          hover: 'hover:bg-emerald-50'
        };
      case 'about':
        return {
          primary: 'from-purple-600 to-indigo-600',
          secondary: 'from-purple-100 to-indigo-100',
          accent: 'purple-600',
          hover: 'hover:bg-purple-50'
        };
      case 'contact':
        return {
          primary: 'from-orange-600 to-red-600',
          secondary: 'from-orange-100 to-red-100',
          accent: 'orange-600',
          hover: 'hover:bg-orange-50'
        };
      default:
        return {
          primary: 'from-blue-600 to-indigo-600',
          secondary: 'from-blue-100 to-indigo-100',
          accent: 'blue-600',
          hover: 'hover:bg-blue-50'
        };
    }
  };

  const theme = getThemeClasses();

  const navItems = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: Sparkles, 
      description: 'Back to homepage' 
    },
    { 
      id: 'services', 
      label: 'Services', 
      icon: Zap, 
      description: 'Our AI solutions' 
    },
    { 
      id: 'about', 
      label: 'About', 
      icon: Users, 
      description: 'Learn about us' 
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: MessageCircle, 
      description: 'Get in touch' 
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200/50' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Enhanced Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group transition-all duration-300 hover:scale-105"
            onClick={() => setCurrentPage('home')}
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${theme.primary} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3`}>
              <Sparkles size={24} className="text-white" />
            </div>
            <div className="font-display">
              <h1 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                Upstraiq
              </h1>
              <p className="text-xs text-slate-500 -mt-1 font-medium">AI Innovation</p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    onMouseLeave={() => setHoveredNav(null)}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 group ${
                      isActive
                        ? `bg-gradient-to-r ${theme.primary} text-white shadow-lg`
                        : `text-slate-700 ${theme.hover} hover:text-slate-900 hover:shadow-md`
                    }`}
                  >
                    <Icon 
                      size={18} 
                      className={`transition-all duration-300 ${
                        isActive 
                          ? 'text-white' 
                          : `text-${theme.accent} group-hover:scale-110`
                      }`} 
                    />
                    <span className="relative">
                      {item.label}
                      {isActive && (
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/30 rounded-full animate-scale-in"></div>
                      )}
                    </span>
                    
                    {/* Enhanced hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/60 rounded-2xl transition-all duration-300 -z-10"></div>
                    )}
                    
                    {/* Active page indicator */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                    )}
                  </button>
                  
                  {/* Enhanced tooltip */}
                  {hoveredNav === item.id && !isActive && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 animate-fade-in-up pointer-events-none whitespace-nowrap">
                      {item.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`group bg-gradient-to-r ${theme.primary} text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                Get Started Free
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-12 h-12 rounded-2xl bg-gradient-to-r ${theme.primary} flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                    isMenuOpen ? 'top-3 rotate-45' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'top-2.5'
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                    isMenuOpen ? 'top-3 -rotate-45' : 'top-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform ${
                    isActive
                      ? `bg-gradient-to-r ${theme.primary} text-white shadow-lg scale-105`
                      : `text-slate-700 ${theme.hover} hover:text-slate-900 hover:shadow-md hover:scale-102`
                  } animate-slide-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon 
                    size={20} 
                    className={`${
                      isActive 
                        ? 'text-white' 
                        : `text-${theme.accent}`
                    }`} 
                  />
                  <div className="flex-1 text-left">
                    <div className="text-base">{item.label}</div>
                    <div className={`text-xs ${
                      isActive ? 'text-white/70' : 'text-slate-500'
                    }`}>
                      {item.description}
                    </div>
                  </div>
                  {isActive && (
                    <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
            
            {/* Mobile CTA */}
            <button 
              onClick={() => {
                setCurrentPage('contact');
                setIsMenuOpen(false);
              }}
              className={`w-full bg-gradient-to-r ${theme.primary} text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 mt-4 animate-bounce-in`}
              style={{ animationDelay: '400ms' }}
            >
              <MessageCircle size={20} />
              Get Started Free
            </button>
          </div>
        </div>
      </div>

      {/* Page transition indicator */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${theme.primary} transition-all duration-700 ease-in-out`} 
           style={{ width: currentPage === 'home' ? '25%' : currentPage === 'services' ? '50%' : currentPage === 'about' ? '75%' : '100%' }}>
      </div>
    </header>
  );
};