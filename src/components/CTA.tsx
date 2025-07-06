import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Star, 
  Shield, 
  Users, 
  Clock, 
  Calendar,
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';

interface CTAProps {
  onContactClick?: () => void;
  currentPage?: string;
}

export const CTA: React.FC<CTAProps> = ({ onContactClick, currentPage = 'home' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('cta');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our clients see an average 300% ROI within the first year of implementation.',
      gradient: 'from-[#0070f3] to-[#50e3c2]'
    },
    {
      icon: Clock,
      title: 'Fast Implementation',
      description: 'Get your AI solution up and running in weeks, not months.',
      gradient: 'from-[#0070f3] to-[#50e3c2]'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: '5+ years of experience in AI development and deployment.',
      gradient: 'from-[#0070f3] to-[#50e3c2]'
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Tailored AI solutions designed specifically for your business needs.',
      gradient: 'from-[#0070f3] to-[#50e3c2]'
    }
  ];

  const stats = [
    { value: '5+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Expert Support' },
    { value: '15+', label: 'Industries Served' }
  ];

  const urgencyFeatures = [
    'Free consultation and project analysis',
    'Custom AI roadmap for your business',
    'No upfront costs - results-based pricing',
    '30-day satisfaction guarantee'
  ];

  return (
    <section id="cta" className="section-padding relative">
      <div className="container-custom">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="heading-lg mb-6">
            <span className="block text-white">Ready to Transform</span>
            <span className="gradient-text-accent">Your Business with AI?</span>
          </h2>
          
          <p className="text-body max-w-3xl mx-auto mb-8">
            Join 3+ companies that have already revolutionized their operations with our AI solutions. 
            Start your transformation journey today with a free consultation.
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card p-6 relative overflow-hidden group-hover:transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-[#50e3c2]">
                    {stat.value}
                  </div>
                  
                  {/* Underline animation */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] mx-auto group-hover:w-full transition-all duration-500 mb-2"></div>
                  
                  <div className="text-[#888] text-sm font-medium group-hover:text-[#aaa] transition-colors duration-300">{stat.label}</div>
                </div>
                
                {/* Hover particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                  <div className="absolute top-4 right-3 w-1 h-1 bg-[#50e3c2] rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                  <div className="absolute bottom-3 left-4 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                </div>
              </div>
            </div>
          ))}
          </div>

        {/* Main CTA Section */}
        <div className={`card p-12 mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Main CTA */}
            <div>
              <h3 className="heading-md text-white mb-6">
                Get Started Today with a 
                <span className="gradient-text-accent"> Free Consultation</span>
              </h3>
              
              <p className="text-[#888] text-lg leading-relaxed mb-8">
                Our AI experts will analyze your business needs and create a customized roadmap 
                for your AI transformation - completely free, no strings attached.
              </p>

              <div className="space-y-3 mb-8">
                {urgencyFeatures.map((feature, index) => (
                  <div key={index} className="text-[#888]">
                    • {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onContactClick}
                  className="btn-primary group"
                >
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={onContactClick}
                  className="btn-secondary"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Demo</span>
                </button>
              </div>

              <div className="mt-6 text-[#666] text-sm">
                💡 <strong>Free consultation includes:</strong> Business analysis, AI readiness assessment, and custom roadmap
              </div>
            </div>
            
            {/* Right: Benefits */}
            <div className="space-y-4">
              <h4 className="heading-sm text-white mb-6">Why Choose Us?</h4>
              
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isHovered = hoveredBenefit === index;
                
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-lg border border-[#333] group relative overflow-hidden transition-all duration-500 cursor-pointer hover:border-[#666] hover:transform hover:-translate-y-2 hover:scale-105 ${
                      isHovered ? 'border-[#0070f3] scale-105 shadow-2xl shadow-[#0070f3]/20' : ''
                    }`}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    {/* Animated border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg animate-gradient-shift bg-size-300`}></div>
                    
                    {/* Active benefit pulse animation */}
                    {isHovered && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 animate-pulse rounded-lg"></div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        {/* Enhanced benefit icon */}
                        <div className="relative flex-shrink-0">
                          {/* Pulsing background effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-20 rounded-lg group-hover:opacity-40 transition-opacity duration-500 animate-pulse w-12 h-12`}></div>
                          
                          {/* Main icon container */}
                          <div className={`relative w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-[#0070f3]/25 ${
                            isHovered ? 'animate-bounce' : ''
                          }`}>
                            <Icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                          </div>
                          
                          {/* Floating ring effect */}
                          <div className="absolute inset-0 border-2 border-[#0070f3] rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-ping w-12 h-12"></div>
                        </div>
                        
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-2 group-hover:text-[#50e3c2] transition-colors duration-300 group-hover:scale-105 transform-gpu">
                            {benefit.title}
                          </h5>
                          <p className="text-[#888] text-sm leading-relaxed group-hover:text-[#aaa] transition-colors duration-300">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover particles */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-4 left-4 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                      <div className="absolute top-8 right-6 w-1 h-1 bg-[#50e3c2] rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                      <div className="absolute bottom-6 left-8 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-[#888]">
              <Star className="text-[#0070f3]" size={20} />
              <span className="font-semibold">4.9/5 Client Rating</span>
            </div>
            
            <div className="flex items-center gap-2 text-[#888]">
              <Shield className="text-[#50e3c2]" size={20} />
              <span className="font-semibold">SOC 2 Certified</span>
            </div>
            
            <div className="flex items-center gap-2 text-[#888]">
              <Users className="text-[#0070f3]" size={20} />
              <span className="font-semibold">150+ Happy Clients</span>
            </div>
          </div>

          <p className="text-[#666] text-sm">
            🔒 Your information is secure and will never be shared. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};