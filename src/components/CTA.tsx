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
    { value: '150+', label: 'Projects Delivered' },
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
            Join 150+ companies that have already revolutionized their operations with our AI solutions. 
            Start your transformation journey today with a free consultation.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="card p-6">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-[#888] text-sm font-medium">{stat.label}</div>
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
                
                <button className="btn-secondary">
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
                    className={`p-6 rounded-lg border border-[#333] transition-all duration-300 cursor-pointer hover:border-[#666] ${
                      isHovered ? 'border-[#0070f3]' : ''
                    }`}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">
                          {benefit.title}
                        </h5>
                        <p className="text-[#888] text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
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