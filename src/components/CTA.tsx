import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-blue-500/10 animate-gradient-shift"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-16 w-4 h-4 bg-blue-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          ref={contentRef}
          className="scroll-animate glass-dark rounded-3xl p-12 lg:p-16 border border-slate-700/50 shadow-2xl hover-glow transition-all duration-500"
        >
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8 animate-pulse-glow">
            <Sparkles size={16} className="animate-pulse" />
            <span>Ready to Transform Your Business?</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-gradient-animated">
              Ready to Build Your Future?
            </span>
          </h2>
          
          <p className="font-body text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Let's discuss how Upstraiq can elevate your business with a tailored AI solution 
            that drives growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group btn-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover-lift flex items-center gap-3 shadow-2xl">
              <Mail size={22} />
              <span>Get in Touch</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="text-slate-400 text-lg">
              <span>Or email us directly at </span>
              <a 
                href="mailto:hello@upstraiq.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 underline decoration-cyan-400/50 hover:decoration-cyan-300 underline-offset-4 font-medium"
              >
                hello@upstraiq.com
              </a>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Global Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};