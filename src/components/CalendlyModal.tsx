import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Mail, Phone } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-[98vh] sm:h-[95vh] md:h-[90vh] bg-black border-2 border-[#333] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden mx-auto flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-[#333] bg-gradient-to-r from-[#0070f3]/10 to-[#50e3c2]/10 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-lg flex items-center justify-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-white truncate">Schedule Your Call</h2>
              <p className="text-[#888] text-xs sm:text-xs md:text-sm hidden sm:block">Book a free 30-minute consultation with our AI experts</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-[#888] hover:text-white hover:bg-[#333] rounded-lg transition-all duration-200 flex-shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-white text-sm sm:text-lg font-medium">Loading Calendar...</p>
              <p className="text-[#888] text-xs sm:text-sm mt-1 sm:mt-2 hidden sm:block">Preparing your scheduling experience</p>
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

        {/* Footer */}
        <div className="p-2 sm:p-3 md:p-4 border-t border-[#333] bg-gradient-to-r from-[#0070f3]/5 to-[#50e3c2]/5 flex-shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-0 text-xs sm:text-xs md:text-sm">
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 md:gap-6 text-[#888]">
              <div className="flex items-center gap-1 sm:gap-2">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#0070f3]" />
                <span>30 minutes</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <User className="w-3 h-3 md:w-4 md:h-4 text-[#50e3c2]" />
                <span className="hidden sm:inline">1-on-1 consultation</span>
                <span className="sm:hidden">1-on-1</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-[#0070f3]" />
                <span className="hidden sm:inline">Follow-up included</span>
                <span className="sm:hidden">Follow-up</span>
              </div>
            </div>
            
            <div className="text-[#888] text-center sm:text-right">
              <span className="text-[#0070f3] font-medium">UPSTRAIQ</span>
              <span className="hidden sm:inline"> • AI Transformation Experts</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0070f3] to-[#50e3c2]"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#0070f3]/20 to-[#50e3c2]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-[#50e3c2]/20 to-[#0070f3]/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default CalendlyModal; 