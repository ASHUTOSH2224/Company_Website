import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatWeBuild } from './components/WhatWeBuild';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import ChatBot from './components/ChatBot';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import OurWork from './pages/OurWork';
import Company from './pages/Company';
import ServiceDetails from './pages/ServiceDetails';
import CaseStudies from './pages/CaseStudies';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleContactClick = () => {
    setCurrentPage('contact');
  };

  const handleServiceLearnMore = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('service-details');
  };

  const handleBackToServices = () => {
    setCurrentPage('services');
  };

  const handleViewCaseStudies = () => {
    setCurrentPage('case-studies');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleBackToFooter = () => {
    setCurrentPage('home');
  };

  const handleServicesClick = () => {
    setCurrentPage('services');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About currentPage={currentPage} onContactClick={handleContactClick} />;
      case 'contact':
        return <Contact currentPage={currentPage} />;
      case 'ourwork':
        return <OurWork currentPage={currentPage} onContactClick={handleContactClick} />;
      case 'company':
        return <Company currentPage={currentPage} onContactClick={handleContactClick} />;
      case 'services':
        return (
          <div>
            <Services onContactClick={handleContactClick} onServiceLearnMore={handleServiceLearnMore} onViewCaseStudies={handleViewCaseStudies} />
            <WhyChooseUs onContactClick={handleContactClick} />
          </div>
        );
      case 'service-details':
        return (
          <ServiceDetails 
            currentPage={currentPage}
            serviceId={selectedServiceId}
            onContactClick={handleContactClick}
            onBack={handleBackToServices}
          />
        );
      case 'case-studies':
        return (
          <CaseStudies 
            currentPage={currentPage}
            onContactClick={handleContactClick}
            onBack={handleBackToHome}
          />
        );
      case 'privacy-policy':
        return (
          <PrivacyPolicy 
            currentPage={currentPage}
            onBack={handleBackToFooter}
          />
        );
      case 'terms-of-service':
        return (
          <TermsOfService 
            currentPage={currentPage}
            onBack={handleBackToFooter}
          />
        );
      case 'cookie-policy':
        return (
          <CookiePolicy 
            currentPage={currentPage}
            onBack={handleBackToFooter}
          />
        );
      default:
        return (
          <>
            <Hero onContactClick={handleContactClick} onServicesClick={handleServicesClick} />
            <WhatWeBuild onContactClick={handleContactClick} />
            <Services onContactClick={handleContactClick} onServiceLearnMore={handleServiceLearnMore} onViewCaseStudies={handleViewCaseStudies} />
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
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} onServiceLearnMore={handleServiceLearnMore} />
      <ChatBot onContactClick={handleContactClick} />
    </div>
  );
}

export default App;