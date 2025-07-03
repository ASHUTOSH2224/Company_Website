import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User } from 'lucide-react';

interface CalendlyModalCompactProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
}

const CalendlyModalCompact: React.FC<CalendlyModalCompactProps> = ({
  isOpen,
  onClose,
  url = 'https://calendly.com/2224ashutosh/30min'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setIframeLoaded(false);
      // Store original overflow style
      const originalOverflow = document.body.style.overflow;
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore original overflow style
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIsLoading(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-2 md:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl h-[95vh] sm:h-[90vh] md:h-[85vh] bg-black border-2 border-[#333] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col my-auto">
        {/* Compact Header */}
        <div className="flex items-center justify-between p-2 sm:p-3 md:p-4 border-b border-[#333] bg-gradient-to-r from-[#0070f3]/10 to-[#50e3c2]/10 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-lg flex items-center justify-center">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-xs sm:text-base md:text-lg font-semibold text-white truncate">Schedule Call</h2>
              <p className="text-[#888] text-xs hidden sm:block">30-min consultation</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1 sm:p-1.5 text-[#888] hover:text-white hover:bg-[#333] rounded-lg transition-all duration-200 flex-shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-white text-xs sm:text-sm font-medium">Loading...</p>
            </div>
          </div>
        )}

        {/* Calendly Iframe */}
        <div className="flex-1 relative min-h-0">
          <iframe
            src={url}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a Call"
            onLoad={handleIframeLoad}
            className={`w-full h-full transition-opacity duration-300 ${
              iframeLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'transparent',
              colorScheme: 'dark'
            }}
          />
        </div>

        {/* Compact Footer */}
        <div className="p-1.5 sm:p-2 md:p-3 border-t border-[#333] bg-gradient-to-r from-[#0070f3]/5 to-[#50e3c2]/5 flex-shrink-0">
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs text-[#888]">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#0070f3]" />
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-3 h-3 text-[#50e3c2]" />
              <span>1-on-1</span>
            </div>
            <div className="text-[#0070f3] font-medium">UPSTRAIQ</div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0070f3] to-[#50e3c2]"></div>
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#0070f3]/20 to-[#50e3c2]/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-tr from-[#50e3c2]/20 to-[#0070f3]/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default CalendlyModalCompact; 