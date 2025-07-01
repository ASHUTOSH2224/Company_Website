import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Dynamic color themes for different pages
  const pageThemes = {
    home: {
      background: 'bg-gradient-to-br from-slate-50 via-white to-blue-50',
      accent: 'from-blue-600 to-indigo-600',
      secondary: 'from-blue-100 to-indigo-100'
    },
    services: {
      background: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50',
      accent: 'from-emerald-600 to-teal-600',
      secondary: 'from-emerald-100 to-teal-100'
    },
    about: {
      background: 'bg-gradient-to-br from-purple-50 via-white to-indigo-50',
      accent: 'from-purple-600 to-indigo-600',
      secondary: 'from-purple-100 to-indigo-100'
    },
    contact: {
      background: 'bg-gradient-to-br from-orange-50 via-white to-red-50',
      accent: 'from-orange-600 to-red-600',
      secondary: 'from-orange-100 to-red-100'
    }
  };

  const currentTheme = pageThemes[currentPage as keyof typeof pageThemes] || pageThemes.home;

  const handlePageChange = (newPage: string) => {
    if (newPage === currentPage) return;
    
    setIsTransitioning(true);
    
    // Add a smooth transition delay
    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 200);
  };

  useEffect(() => {
    // Add CSS custom properties for dynamic theming
    const root = document.documentElement;
    const theme = currentTheme;
    
    // Update CSS custom properties based on current theme
    if (currentPage === 'home') {
      root.style.setProperty('--theme-primary', '#3b82f6');
      root.style.setProperty('--theme-secondary', '#6366f1');
    } else if (currentPage === 'services') {
      root.style.setProperty('--theme-primary', '#059669');
      root.style.setProperty('--theme-secondary', '#0d9488');
    } else if (currentPage === 'about') {
      root.style.setProperty('--theme-primary', '#7c3aed');
      root.style.setProperty('--theme-secondary', '#6366f1');
    } else if (currentPage === 'contact') {
      root.style.setProperty('--theme-primary', '#ea580c');
      root.style.setProperty('--theme-secondary', '#dc2626');
    }
  }, [currentPage, currentTheme]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'services':
        return (
          <div className="pt-20">
            <Services />
            <WhyChooseUs />
            <Process />
            <CTA />
          </div>
        );
      default:
        return (
          <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Process />
            <CTA />
          </main>
        );
    }
  };

  return (
    <div className={`min-h-screen ${currentTheme.background} text-slate-800 overflow-x-hidden transition-all duration-700 ease-in-out`}>
      {/* Page transition overlay */}
      <div className={`fixed inset-0 bg-white z-50 transition-opacity duration-300 pointer-events-none ${
        isTransitioning ? 'opacity-30' : 'opacity-0'
      }`}></div>
      
      {/* Dynamic floating elements based on theme */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-gradient-to-r from-current/10 to-current/5 rounded-full blur-3xl animate-float opacity-60 pointer-events-none"></div>
      <div className="fixed top-40 right-32 w-24 h-24 bg-gradient-to-r from-current/15 to-current/10 rounded-full blur-2xl animate-float opacity-40 pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-current/8 to-current/4 rounded-full blur-3xl animate-float opacity-50 pointer-events-none" style={{ animationDelay: '4s' }}></div>

      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
      
      {/* Page content with smooth transitions */}
      <div className={`transition-all duration-500 ease-in-out ${
        isTransitioning ? 'opacity-80 transform scale-98' : 'opacity-100 transform scale-100'
      }`}>
        {renderPage()}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;