import React, { useEffect, useState } from 'react';
import { Calendar, X } from 'lucide-react';

// Calendly widget type declarations
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget?: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

interface CalendlyWidgetProps {
  mode?: 'popup' | 'inline';
  url?: string;
  className?: string;
  buttonText?: string;
  showIcon?: boolean;
  onClose?: () => void;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  mode = 'popup',
  url = 'https://calendly.com/2224ashutosh/30min',
  className = '',
  buttonText = 'Schedule Your Call',
  showIcon = true,
  onClose
}) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isInlineOpen, setIsInlineOpen] = useState(false);

  useEffect(() => {
    // Load Calendly script
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      console.log('Loading Calendly script...');
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        console.log('Calendly script loaded successfully');
        setIsScriptLoaded(true);
      };
      script.onerror = () => {
        console.error('Failed to load Calendly script');
      };
      document.head.appendChild(script);
    } else {
      console.log('Calendly script already exists');
      setIsScriptLoaded(true);
    }

    // Check if Calendly is already available
    if (window.Calendly) {
      console.log('Calendly already available on window');
      setIsScriptLoaded(true);
    }

    // Cleanup function
    return () => {
      // Don't remove script on unmount as it might be used by other components
    };
  }, []);

  const openCalendlyPopup = () => {
    console.log('Opening Calendly popup...', { 
      hasCalendly: !!window.Calendly, 
      isScriptLoaded, 
      url 
    });
    
    if (window.Calendly && window.Calendly.initPopupWidget && isScriptLoaded) {
      try {
        window.Calendly.initPopupWidget({ url });
        console.log('Calendly popup initiated successfully');
      } catch (error) {
        console.error('Error opening Calendly popup:', error);
        window.open(url, '_blank');
      }
    } else {
      console.log('Calendly not ready, opening in new tab');
      // Fallback if Calendly script hasn't loaded yet
      window.open(url, '_blank');
    }
  };

  const openInlineWidget = () => {
    setIsInlineOpen(true);
  };

  const closeInlineWidget = () => {
    setIsInlineOpen(false);
    onClose?.();
  };

  const handleClick = () => {
    if (mode === 'popup') {
      openCalendlyPopup();
    } else {
      openInlineWidget();
    }
  };

  if (mode === 'inline' && isInlineOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] relative overflow-hidden">
          {/* Close button */}
          <button
            onClick={closeInlineWidget}
            className="absolute top-4 right-4 z-10 bg-black/10 hover:bg-black/20 text-gray-600 hover:text-gray-800 p-2 rounded-full transition-all duration-200"
          >
            <X size={20} />
          </button>
          
          {/* Calendly iframe */}
          <div 
            className="w-full h-full"
            dangerouslySetInnerHTML={{
              __html: `
                <div 
                  class="calendly-inline-widget" 
                  data-url="${url}"
                  style="min-width:320px;height:100%;"
                ></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              `
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${className}`}
      disabled={!isScriptLoaded}
    >
      {showIcon && <Calendar className="w-4 h-4" />}
      <span>{buttonText}</span>
      {!isScriptLoaded && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
    </button>
  );
};

export default CalendlyWidget; 