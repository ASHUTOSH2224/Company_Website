import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Cog, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Sparkles,
  Brain,
  Target,
  Rocket
} from 'lucide-react';

interface ServicesProps {
  onContactClick?: () => void;
  currentPage?: string;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick, currentPage = 'home' }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('services');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

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

  const services = [
    {
      id: 'ai-development',
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs, from machine learning models to neural networks.',
      features: ['Custom ML Models', 'Neural Networks', 'AI Consulting', '24/7 Support'],
      gradient: themeColors.primary,
      bgGradient: themeColors.background,
      price: 'Starting at $5,000',
      popular: false
    },
    {
      id: 'automation',
      icon: Cog,
      title: 'Process Automation',
      description: 'Streamline your workflows with intelligent automation that reduces manual work by up to 80%.',
      features: ['Workflow Automation', 'RPA Solutions', 'Integration Services', 'Performance Analytics'],
      gradient: themeColors.primary,
      bgGradient: themeColors.background,
      price: 'Starting at $3,000',
      popular: true
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Visualization', 'Business Intelligence'],
      gradient: themeColors.primary,
      bgGradient: themeColors.background,
      price: 'Starting at $4,000',
      popular: false
    },
    {
      id: 'security',
      icon: Shield,
      title: 'AI Security',
      description: 'Protect your business with AI-powered security solutions and threat detection systems.',
      features: ['Threat Detection', 'Security Monitoring', 'Risk Assessment', 'Compliance Support'],
      gradient: themeColors.primary,
      bgGradient: themeColors.background,
      price: 'Starting at $6,000',
      popular: false
    },
    {
      id: 'chatbots',
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Enhance customer experience with intelligent chatbots that understand and respond naturally.',
      features: ['Natural Language Processing', 'Multi-platform Support', 'Custom Training', 'Analytics Dashboard'],
      gradient: themeColors.primary,
      bgGradient: themeColors.background,
      price: 'Starting at $2,500',
      popular: false
    },
    {
      id: 'consulting',
      icon: Target,
      title: 'AI Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and implement the right solutions.',
      features: ['Strategy Development', 'Technology Assessment', 'Implementation Planning', 'ROI Analysis'],
      gradient: themeColors.primary,
      bgGradient: themeColors.background,
      price: 'Starting at $1,500',
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served', color: themeColors.accent },
    { icon: Rocket, value: '98%', label: 'Success Rate', color: themeColors.accent },
    { icon: Zap, value: '80%', label: 'Efficiency Boost', color: themeColors.accent },
    { icon: Sparkles, value: '24/7', label: 'Support Available', color: themeColors.accent }
  ];

  return (
    <section id="services" className={`section-padding ${themeColors.background} relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-20 left-20 w-72 h-72 bg-gradient-to-r ${themeColors.secondary.replace('to', 'to-').replace('from', 'from-')}/40 rounded-full blur-3xl animate-float`}></div>
        <div className={`absolute top-40 right-32 w-64 h-64 bg-gradient-to-r ${themeColors.secondary.replace('to', 'to-').replace('from', 'from-')}/30 rounded-full blur-2xl animate-float`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-r ${themeColors.secondary.replace('to', 'to-').replace('from', 'from-')}/35 rounded-full blur-3xl animate-float`} style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${themeColors.badge} text-sm font-semibold mb-6 animate-bounce-in`}>
            <Sparkles size={18} className="animate-pulse" />
            <span>Our AI Solutions</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="block">Transform Your Business</span>
            <span className={`bg-gradient-to-r ${themeColors.primary} bg-clip-text text-transparent`}>
              with AI Innovation
            </span>
          </h2>
          
          <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered solutions designed to streamline operations, 
            boost productivity, and drive measurable growth for your organization.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                  <Icon size={24} className={stat.color} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === service.id;
            
            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transform transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } hover:scale-105`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.bgGradient} border border-white/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 p-8 h-full`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-white to-transparent rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    
                    {/* Title and Description */}
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-700">
                          <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                    </div>
                    
                    {/* CTA Button */}
                    <button
                      onClick={onContactClick}
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden`}
                    >
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className={`bg-gradient-to-r ${themeColors.primary} rounded-3xl p-12 shadow-2xl relative overflow-hidden`}>
            {/* Background Effects */}
            <div className={`absolute inset-0 bg-gradient-to-r ${themeColors.primary.replace('from', 'from-').replace('to', 'to-')}/90`}></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-8 right-8 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-white rounded-full blur-xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join 500+ companies that have already revolutionized their operations with our AI solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onContactClick}
                  className={`bg-white ${themeColors.accent} px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 group`}
                >
                  <span>Start Your AI Journey</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                <button className="text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                  <span>View Case Studies</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};