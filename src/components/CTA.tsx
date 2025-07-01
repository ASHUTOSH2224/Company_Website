import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield,
  Calendar,
  Clock,
  Star,
  CheckCircle
} from 'lucide-react';

interface CTAProps {
  onContactClick?: () => void;
  currentPage?: string;
}

export const CTA: React.FC<CTAProps> = ({ onContactClick, currentPage = 'home' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  // Dynamic theming based on current page
  const getThemeColors = () => {
    switch (currentPage) {
      case 'services':
        return {
          primary: 'from-emerald-600 to-teal-600',
          secondary: 'from-emerald-100 to-teal-100',
          background: 'bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900',
          accent: 'text-emerald-400',
          badge: 'from-emerald-500/20 to-teal-500/20 text-emerald-300'
        };
      case 'about':
        return {
          primary: 'from-purple-600 to-indigo-600',
          secondary: 'from-purple-100 to-indigo-100',
          background: 'bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900',
          accent: 'text-purple-400',
          badge: 'from-purple-500/20 to-indigo-500/20 text-purple-300'
        };
      case 'contact':
        return {
          primary: 'from-orange-600 to-red-600',
          secondary: 'from-orange-100 to-red-100',
          background: 'bg-gradient-to-br from-orange-900 via-red-900 to-pink-900',
          accent: 'text-orange-400',
          badge: 'from-orange-500/20 to-red-500/20 text-orange-300'
        };
      default: // home
        return {
          primary: 'from-blue-500 to-indigo-600',
          secondary: 'from-blue-100 to-indigo-100',
          background: 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900',
          accent: 'text-blue-400',
          badge: 'from-blue-500/20 to-indigo-500/20 text-blue-300'
        };
    }
  };

  const themeColors = getThemeColors();

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
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Get up and running in weeks, not months',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '24/7 support from AI specialists',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Average 300% ROI in first year',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const stats = [
    { value: '500+', label: 'Successful Projects' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Expert Support' },
    { value: '15+', label: 'Industries Served' }
  ];

  const urgencyFeatures = [
    'Limited spots available for Q1 2024',
    'Free consultation and project scoping',
    'No upfront costs - pay only after delivery',
    '30-day money-back guarantee'
  ];

  return (
    <section id="cta" className={`section-padding ${themeColors.background} relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${themeColors.badge} border border-white/30 text-sm font-semibold mb-8 animate-bounce-in backdrop-blur-sm`}>
            <Sparkles size={18} className="animate-pulse" />
            <span>Limited Time Offer</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="block">Ready to Transform</span>
            <span className={`bg-gradient-to-r ${themeColors.primary.replace('600', '400')} bg-clip-text text-transparent animate-gradient`}>
              Your Business with AI?
            </span>
          </h2>
          
          <p className="font-body text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Join 500+ companies that have already revolutionized their operations with our AI solutions. 
            Start your transformation journey today with a free consultation.
          </p>
          
          {/* Urgency Indicators */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-8">
            <Clock size={16} className="animate-pulse" />
            <span>Special pricing ends in 7 days</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
          </div>

        {/* Main CTA Section */}
        <div className={`bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Main CTA */}
            <div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
                Get Started Today with a 
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Free Consultation</span>
              </h3>
              
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Our AI experts will analyze your business needs and create a customized roadmap 
                for your AI transformation - completely free, no strings attached.
              </p>

              <div className="space-y-4 mb-8">
                {urgencyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle size={20} className="text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onContactClick}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <span className="relative z-10">Schedule Free Consultation</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                
                <button className="text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                  <Calendar size={20} />
                  <span>Book a Demo</span>
                </button>
              </div>

              <div className="mt-6 text-blue-200 text-sm">
                💡 <strong>Free consultation includes:</strong> Business analysis, AI readiness assessment, and custom roadmap
              </div>
            </div>
            
            {/* Right: Benefits */}
            <div className="space-y-4">
              <h4 className="font-display text-2xl font-bold text-white mb-6">Why Choose Us?</h4>
              
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isHovered = hoveredBenefit === index;
                
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered 
                        ? 'bg-white/20 border-white/40 shadow-xl scale-105' 
                        : 'bg-white/10 border-white/20 hover:bg-white/15'
                    }`}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isHovered ? 'scale-110 rotate-6' : ''
                      }`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      
                      <div>
                        <h5 className="font-display text-lg font-bold text-white mb-2">
                          {benefit.title}
                        </h5>
                        <p className="text-blue-200 leading-relaxed">
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
            <div className="flex items-center gap-2 text-blue-200">
              <Star className="text-yellow-400" size={20} />
              <span className="font-semibold">4.9/5 Client Rating</span>
            </div>
            
            <div className="flex items-center gap-2 text-blue-200">
              <Shield className="text-emerald-400" size={20} />
              <span className="font-semibold">SOC 2 Certified</span>
            </div>
            
            <div className="flex items-center gap-2 text-blue-200">
              <Users className="text-blue-400" size={20} />
              <span className="font-semibold">500+ Happy Clients</span>
            </div>
          </div>

          <p className="text-blue-300 text-sm">
            🔒 Your information is secure and will never be shared. We respect your privacy.
          </p>
        </div>

        {/* Final Urgency Push */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold animate-pulse">
            <Zap size={16} />
            <span>Don't miss out - Limited spots available for immediate implementation</span>
          </div>
        </div>
      </div>
    </section>
  );
};