import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import CalendlyModal from './CalendlyModal';
import CalendlyModalCompact from './CalendlyModalCompact';

interface CalendlyButtonProps {
  url?: string;
  className?: string;
  buttonText?: string;
  showIcon?: boolean;
  variant?: 'default' | 'compact';
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({
  url = 'https://calendly.com/2224ashutosh/30min',
  className = '',
  buttonText = 'Schedule Your Call',
  showIcon = true,
  variant = 'default'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCalendly = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openCalendly}
        className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${className}`}
      >
        {showIcon && <Calendar className="w-4 h-4" />}
        <span>{buttonText}</span>
      </button>

      {variant === 'compact' ? (
        <CalendlyModalCompact 
          isOpen={isModalOpen}
          onClose={closeModal}
          url={url}
        />
      ) : (
        <CalendlyModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          url={url}
        />
      )}
    </>
  );
};

export default CalendlyButton; 