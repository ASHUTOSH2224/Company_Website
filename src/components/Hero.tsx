import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, TrendingUp, Sparkles, Zap, Rocket, Brain, Code, Terminal } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
  onServicesClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onServicesClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [textComplete, setTextComplete] = useState(false);

  const rotatingWords = ['AI Revolution', 'Smart Solutions', 'Future Tech', 'Innovation'];

  useEffect(() => {
    setIsVisible(true);
    
    // Complete text animation after delay
    setTimeout(() => setTextComplete(true), 1500);

    // Rotate words every 3 seconds
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#0070f3] rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#50e3c2] rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#0070f3] rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-[#50e3c2] rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0070f3] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#50e3c2] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      </div>
      
      <div className="container-custom relative z-10 max-w-6xl mx-auto">
        <div className="text-center space-y-12">
          {/* Main heading with elegant text reveal animation */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight font-space">
              <div className="flex flex-col items-center gap-2 lg:gap-4">
                <div className="overflow-hidden">
                  <span className={`block text-white drop-shadow-2xl transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    Automating Your
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className={`block text-white drop-shadow-2xl transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    Future with
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className={`block bg-gradient-to-r from-[#0070f3] via-[#50e3c2] to-[#0070f3] bg-clip-text text-transparent font-black drop-shadow-xl animate-gradient bg-size-300 transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-95'}`}>
                    UPSTRAIQ
                  </span>
                </div>
              </div>
            </h1>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <p className={`text-xl lg:text-2xl xl:text-3xl text-[#ccc] leading-relaxed font-medium drop-shadow-lg transition-all duration-1000 ease-out delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  We deliver <span className="text-[#50e3c2] font-bold">next-generation</span> web, mobile, and AI solutions—from 
                  <span className="text-[#0070f3] font-bold"> smart e-commerce platforms</span> to 
                  <span className="text-[#50e3c2] font-bold"> intelligent CRMs</span> that transform how your business operates and scales.
                </p>
              </div>
              {/* Decorative animated lines */}
              <div className={`absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#0070f3] opacity-60 transition-all duration-1000 delay-1200 ${textComplete ? 'scale-100 opacity-60' : 'scale-0 opacity-0'}`}></div>
              <div className={`absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#50e3c2] opacity-60 transition-all duration-1000 delay-1400 ${textComplete ? 'scale-100 opacity-60' : 'scale-0 opacity-0'}`}></div>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons with staggered animation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
            <div className="overflow-hidden">
              <button 
                onClick={onContactClick}
                className={`group relative bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg font-bold shadow-2xl hover:shadow-[#0070f3]/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: '1200ms' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
            <div className="overflow-hidden">
              <button 
                onClick={onServicesClick}
                className={`group relative border-2 border-[#333] bg-black/80 backdrop-blur-lg text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg font-bold hover:border-[#0070f3] hover:bg-[#0070f3]/10 transition-all duration-500 hover:scale-105 hover:-translate-y-1 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: '1400ms' }}
              >
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                    <Brain className="w-3 h-3 text-white" />
                  </div>
                  Explore Our Services
                  <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Animated Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 mt-12 lg:mt-16">
            {[
              { icon: Sparkles, text: '✨ Free consultation', delay: '1600ms', color: 'bg-[#50e3c2]' },
              { icon: Code, text: '🎯 Custom solutions', delay: '1800ms', color: 'bg-[#0070f3]' },
              { icon: TrendingUp, text: '📈 Proven results', delay: '2000ms', color: 'bg-[#50e3c2]' }
            ].map((item, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 text-[#888] text-base lg:text-lg transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: item.delay }}
              >
                <div className={`w-3 h-3 ${item.color} rounded-full animate-pulse`} style={{ animationDelay: `${index * 0.5}s` }}></div>
                <span className="font-medium group-hover:text-white transition-colors duration-300 cursor-default">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Elegant scroll indicator */}
          
        </div>
      </div>
    </section>
  );
};