import React, { useState, useEffect, createContext, useContext } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Theme Context
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleContactClick = () => {
    setCurrentPage('contact');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About currentPage={currentPage} onContactClick={handleContactClick} />;
      case 'contact':
        return <Contact currentPage={currentPage} />;
      case 'services':
        return (
          <div>
            <Services onContactClick={handleContactClick} />
            <WhyChooseUs onContactClick={handleContactClick} />
          </div>
        );
      default:
        return (
          <>
            <Hero onContactClick={handleContactClick} />
            <Services onContactClick={handleContactClick} />
            <WhyChooseUs onContactClick={handleContactClick} />
          </>
        );
    }
  };

  const themeValue = {
    isDarkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black text-white' 
          : 'bg-gray-50 text-gray-900'
      }`}>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="pt-20">
          {renderPage()}
        </main>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;