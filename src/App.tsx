import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

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

  return (
    <div className="min-h-screen bg-black text-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;