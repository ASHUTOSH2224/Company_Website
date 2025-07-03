import React, { useEffect, useState } from 'react';
import CalendlyButton from './CalendlyButton';

const CalendlyTest: React.FC = () => {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  useEffect(() => {
    const checkCalendly = () => {
      if ((window as any).Calendly) {
        console.log('Calendly is available:', (window as any).Calendly);
        setIsCalendlyReady(true);
      } else {
        console.log('Calendly not yet available');
      }
    };

    // Check immediately
    checkCalendly();

    // Check periodically
    const interval = setInterval(checkCalendly, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  const testDirectCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ 
        url: 'https://calendly.com/2224ashutosh/30min' 
      });
    } else {
      alert('Calendly not available');
    }
  };

  const testNewTab = () => {
    window.open('https://calendly.com/2224ashutosh/30min', '_blank');
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Calendly Integration Test</h3>
      
      <div className="space-y-4">
        <div>
          <p>Calendly Status: {isCalendlyReady ? '✅ Ready' : '❌ Not Ready'}</p>
        </div>

        <div className="space-y-2">
          <CalendlyButton 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            buttonText="Test CalendlyButton Component"
          />
          
          <button 
            onClick={testDirectCalendly}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 block"
          >
            Test Direct Calendly Popup
          </button>
          
          <button 
            onClick={testNewTab}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 block"
          >
            Test New Tab (Fallback)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendlyTest; 