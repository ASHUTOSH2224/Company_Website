import React, { useState, useEffect } from 'react';
import { 
  Award,
  Clock,
  Shield,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Lightbulb,
  Target,
  Globe
} from 'lucide-react';

interface WhyChooseUsProps {
  onContactClick?: () => void;
  currentPage?: string;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onContactClick, currentPage = 'home' }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Dynamic theming based on current page
  const getThemeColors = () => {
    switch (currentPage) {
      case 'services':
        return {
          primary: 'from-emerald-600 to-teal-600',
          secondary: 'from-emerald-100 to-teal-100',
          background: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50',
          accent: 'text-emerald-600',
          badge: 'from-emerald-100 to-teal-100 text-emerald-700'
        };
      case 'about':
        return {
          primary: 'from-purple-600 to-indigo-600',
          secondary: 'from-purple-100 to-indigo-100',
          background: 'bg-gradient-to-br from-purple-50 via-white to-indigo-50',
          accent: 'text-purple-600',
          badge: 'from-purple-100 to-indigo-100 text-purple-700'
        };
      case 'contact':
        return {
          primary: 'from-orange-600 to-red-600',
          secondary: 'from-orange-100 to-red-100',
          background: 'bg-gradient-to-br from-orange-50 via-white to-red-50',
          accent: 'text-orange-600',
          badge: 'from-orange-100 to-red-100 text-orange-700'
        };
      default: // home
        return {
          primary: 'from-blue-600 to-indigo-600',
          secondary: 'from-blue-100 to-indigo-100',
          background: 'bg-gradient-to-br from-slate-50 via-white to-blue-50',
          accent: 'text-blue-600',
          badge: 'from-blue-100 to-indigo-100 text-blue-700'
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

    const section = document.getElementById('why-choose-us');
    if (section) observer.observe(section);

    // Auto-rotate through features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Over 5+ years of experience delivering AI solutions across various industries.',
      details: 'Our team of experts has successfully implemented AI solutions for healthcare, finance, retail, and manufacturing sectors.',
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Get your AI solutions up and running in weeks, not months.',
      details: 'Our streamlined process and pre-built components enable us to deliver production-ready solutions faster than traditional approaches.',
      gradient: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance to industry standards.',
      details: 'SOC 2 Type II certified with GDPR compliance, end-to-end encryption, and comprehensive audit trails.',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI within the first year of implementation.',
      details: 'Our clients see measurable improvements in efficiency, cost reduction, and revenue growth through intelligent automation.',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Businesses transformed with AI',
      color: 'text-blue-600'
    },
    {
      icon: Star,
      number: '98%',
      label: 'Success Rate',
      description: 'Projects delivered successfully',
      color: 'text-emerald-600'
    },
    {
      icon: Zap,
      number: '80%',
      label: 'Efficiency Gain',
      description: 'Average productivity increase',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries',
      description: 'Global reach and impact',
      color: 'text-orange-600'
    }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of the curve with cutting-edge AI technologies and methodologies.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every solution is designed with measurable outcomes and clear KPIs in mind.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 expert support to ensure your AI solutions run smoothly and efficiently.'
    }
  ];

  return (
    <section id="why-choose-us" className={`section-padding ${themeColors.background} relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-32 left-16 w-96 h-96 bg-gradient-to-r ${themeColors.secondary.replace('to', 'to-').replace('from', 'from-')}/40 rounded-full blur-3xl animate-float`}></div>
        <div className={`absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-r ${themeColors.secondary.replace('to', 'to-').replace('from', 'from-')}/30 rounded-full blur-2xl animate-float`} style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${themeColors.badge} text-sm font-semibold mb-6 animate-bounce-in`}>
            <Award size={18} className="animate-pulse" />
            <span>Why Choose Upstraiq</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="block">The AI Partner You Can</span>
            <span className={`bg-gradient-to-r ${themeColors.primary} bg-clip-text text-transparent`}>
              Trust & Rely On
            </span>
          </h2>
          
          <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We combine deep technical expertise with a commitment to delivering results that matter. 
            Here's why leading companies choose us as their AI transformation partner.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 backdrop-blur-sm">
                  <div className={`w-16 h-16 bg-gradient-to-r ${themeColors.primary} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-slate-700 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-500">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Features Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Feature Navigation */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <h3 className="font-display text-3xl font-bold text-slate-900 mb-8">
              What Sets Us Apart
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;
                
                return (
                  <div
                    key={index}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                                         <div className={`rounded-2xl p-6 border-2 transition-all duration-300 ${
                       isActive 
                         ? `border-${themeColors.accent.split('-')[1]}-200 ${feature.bgColor} shadow-xl` 
                         : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg'
                     }`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isActive ? 'scale-110' : ''
                        }`}>
                          <Icon size={20} className="text-white" />
                        </div>
                        
                        <div className="flex-1">
                                                     <h4 className={`font-display text-xl font-bold mb-2 transition-colors duration-300 ${
                             isActive ? themeColors.accent : 'text-slate-900'
                           }`}>
                             {feature.title}
                           </h4>
                          <p className="text-slate-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        
                                                 <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                           isActive 
                             ? `border-${themeColors.accent.split('-')[1]}-500 bg-${themeColors.accent.split('-')[1]}-500` 
                             : 'border-slate-300'
                         }`}>
                          {isActive && (
                            <CheckCircle size={14} className="text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right: Feature Details */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="sticky top-8">
              <div className={`bg-gradient-to-br ${features[activeFeature].bgColor} rounded-3xl p-8 shadow-2xl border border-white/50 backdrop-blur-sm transition-all duration-500`}>
                <div className={`w-20 h-20 bg-gradient-to-r ${features[activeFeature].gradient} rounded-2xl flex items-center justify-center mb-6 animate-bounce-in`}>
                  {React.createElement(features[activeFeature].icon, { size: 32, className: "text-white" })}
                </div>
                
                <h4 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  {features[activeFeature].title}
                </h4>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  {features[activeFeature].details}
                </p>
                
                                 <button
                   onClick={onContactClick}
                   className={`bg-gradient-to-r ${themeColors.primary} text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group hover:scale-105`}
                 >
                  <span>Learn More</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className={`font-display text-xl font-bold text-slate-900 mb-4 group-hover:${themeColors.accent} transition-colors duration-300`}>
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className={`bg-gradient-to-r ${themeColors.primary} rounded-3xl p-12 shadow-2xl relative overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${themeColors.primary.replace('from', 'from-').replace('to', 'to-')}/90`}></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-8 right-8 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-white rounded-full blur-xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Experience the Difference?
              </h3>
                               <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                   Join hundreds of satisfied clients who have transformed their business with our AI solutions.
                 </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                 <button
                   onClick={onContactClick}
                   className={`bg-white ${themeColors.accent} px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 group`}
                 >
                   <span>Get Started Today</span>
                   <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                 </button>
                
                <button className="text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                  <span>Schedule a Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};