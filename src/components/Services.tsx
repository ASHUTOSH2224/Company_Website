import React, { useState, useEffect } from 'react';
import { Brain, Zap, Cog, BarChart3, Users, Shield, Clock, Star, ChevronRight, Check, Rocket, Sparkles, Code, Database, ArrowRight } from 'lucide-react';

interface ServicesProps {
  currentPage: string;
  onContactClick?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ currentPage, onContactClick }) => {
  const [selectedService, setSelectedService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getThemeColors = () => {
    switch (currentPage) {
      case 'services':
        return {
          gradient: 'from-emerald-600 to-teal-600',
          bg: 'from-emerald-50 to-teal-50',
          accent: 'emerald-600',
          light: 'emerald-100',
          badge: 'from-emerald-500 to-teal-500'
        };
      case 'about':
        return {
          gradient: 'from-purple-600 to-indigo-600',
          bg: 'from-purple-50 to-indigo-50',
          accent: 'purple-600',
          light: 'purple-100',
          badge: 'from-purple-500 to-indigo-500'
        };
      case 'contact':
        return {
          gradient: 'from-orange-600 to-red-600',
          bg: 'from-orange-50 to-red-50',
          accent: 'orange-600',
          light: 'orange-100',
          badge: 'from-orange-500 to-red-500'
        };
      default:
        return {
          gradient: 'from-blue-600 to-indigo-600',
          bg: 'from-blue-50 to-indigo-50',
          accent: 'blue-600',
          light: 'blue-100',
          badge: 'from-blue-500 to-indigo-500'
        };
    }
  };

  const themeColors = getThemeColors();

  const startupServices = [
  {
    icon: Brain,
      title: "AI Assistant Builder",
      subtitle: "Custom AI Chatbots",
      description: "Build intelligent conversational AI assistants tailored to your startup's unique needs and customer base.",
      price: "Free",
      originalPrice: "$299/month",
      tag: "BETA SPECIAL",
      features: [
        "Natural language processing",
        "Custom training on your data",
        "Multi-platform integration",
        "24/7 automated support",
        "Analytics dashboard"
      ],
      gradient: "from-blue-500 to-indigo-600",
      popular: true
    },
    {
      icon: Zap,
      title: "Smart Automation Hub",
      subtitle: "Workflow Optimization", 
      description: "Automate repetitive tasks and streamline your startup operations with intelligent workflow solutions.",
      price: "$49",
      originalPrice: "$199/month",
      tag: "EARLY BIRD",
      features: [
        "Process automation",
        "Integration with 50+ tools",
        "Custom workflow builder",
        "Real-time monitoring",
        "ROI tracking"
      ],
      gradient: "from-emerald-500 to-teal-600",
      popular: false
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Engine",
      subtitle: "Data Intelligence",
      description: "Transform your startup data into actionable insights with AI-powered predictive analytics and forecasting.",
      price: "$99",
      originalPrice: "$399/month",
      tag: "GROWTH PLAN",
      features: [
        "Predictive modeling",
        "Real-time analytics",
        "Custom dashboards",
        "Machine learning insights",
        "Export & API access"
      ],
      gradient: "from-purple-500 to-pink-600",
      popular: false
    },
    {
      icon: Code,
      title: "AI Code Assistant",
      subtitle: "Development Acceleration",
      description: "Accelerate your startup's development with AI-powered code generation, debugging, and optimization tools.",
      price: "$79",
      originalPrice: "$299/month",
      tag: "DEV SPECIAL",
      features: [
        "Code generation",
        "Automated debugging",
        "Performance optimization",
        "Documentation generation",
        "Version control integration"
      ],
      gradient: "from-orange-500 to-red-600",
      popular: false
    }
  ];

  const startupStats = [
    { icon: Rocket, value: '50+', label: 'Startups Launched', color: 'text-blue-600' },
    { icon: Users, value: '500+', label: 'Beta Users', color: 'text-emerald-600' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-purple-600' },
    { icon: Star, value: '4.9', label: 'User Rating', color: 'text-orange-600' }
  ];

  return (
    <section id="services" className={`py-20 lg:py-32 bg-gradient-to-br ${themeColors.bg} relative overflow-hidden`}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float-3d" style={{ top: '5%', right: '10%' }}></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-emerald-200/25 to-teal-200/25 rounded-full blur-2xl animate-float-3d" style={{ bottom: '10%', left: '5%', animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${themeColors.badge} text-white text-sm font-bold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <Sparkles size={16} className="animate-pulse" />
            <span>🚀 Startup-Ready AI Solutions</span>
            <div className="px-2 py-1 bg-white/20 text-xs rounded-full font-bold">BETA</div>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Build Your
            <span className={`block bg-gradient-to-r ${themeColors.gradient} bg-clip-text text-transparent animate-gradient-shift bg-size-300`}>
              AI-Powered Startup
              </span>
            </h2>
          
          <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Launch faster with our <span className="font-bold text-blue-600">beta AI tools</span> designed specifically for startups. 
            Get early access to cutting-edge solutions at <span className="font-bold text-emerald-600">startup-friendly prices</span>.
            </p>
          </div>

        {/* Startup Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {startupStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300 hover-3d"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${themeColors.badge} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-6 transform-gpu`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className={`grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {startupServices.map((service, index) => {
            const Icon = service.icon;
            return (
            <div
              key={index}
                className={`relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group cursor-pointer card-3d ${service.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
                onClick={() => setSelectedService(index)}
                style={{
                  transform: selectedService === index ? 'translateY(-8px) scale(1.02)' : '',
                  boxShadow: selectedService === index ? '0 20px 40px rgba(0,0,0,0.15)' : ''
                }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    MOST POPULAR
                  </div>
                )}

                {/* Floating Elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-bounce shadow-lg"></div>
                
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>

                {/* Price Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl font-bold text-slate-900">{service.price}</div>
                  <div className="flex flex-col">
                    <div className="text-sm text-slate-400 line-through">{service.originalPrice}</div>
                    <div className={`text-xs font-bold px-2 py-1 bg-gradient-to-r ${themeColors.badge} text-white rounded-full`}>
                      {service.tag}
                    </div>
                  </div>
                </div>
                
                {/* Service Info */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 mb-3">{service.subtitle}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-slate-400 font-medium">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContactClick?.();
                  }}
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white py-4 px-6 rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                >
                  <span>Start Beta Trial</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Selected Service Details */}
        {selectedService !== null && (
          <div className={`bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${themeColors.badge} text-white text-sm font-bold mb-6`}>
                  <Star size={16} />
                  <span>Selected Plan Details</span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {startupServices[selectedService].title}
                </h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {startupServices[selectedService].description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Complete Feature List:</h4>
                  {startupServices[selectedService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50">
                      <Check size={18} className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-slate-900 mb-2">
                      {startupServices[selectedService].price}
                      <span className="text-lg font-normal text-slate-500">/month</span>
                    </div>
                    <div className="text-slate-400 line-through text-lg">
                      {startupServices[selectedService].originalPrice}
                    </div>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${themeColors.badge} text-white text-sm font-bold rounded-full mt-2`}>
                      {startupServices[selectedService].tag}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Setup Fee:</span>
                      <span className="font-bold text-green-600">$0 (Waived)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Contract:</span>
                      <span className="font-bold text-blue-600">Monthly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Support:</span>
                      <span className="font-bold text-purple-600">24/7 Founder</span>
                    </div>
                  </div>

                  <button
                    onClick={onContactClick}
                    className={`w-full bg-gradient-to-r ${themeColors.gradient} text-white py-4 px-6 rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group`}
                  >
                    <Rocket size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>Join Beta Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Startup CTA */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold mb-6 animate-pulse">
                <Clock size={16} />
                <span>Limited Beta Spots Available</span>
              </div>
              
              <h3 className="text-4xl font-bold mb-6">
                Ready to Transform Your Startup?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join 50+ innovative startups already using our AI solutions. 
                Get early access, special pricing, and direct founder support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={onContactClick}
                  className={`bg-gradient-to-r ${themeColors.gradient} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 group`}
                >
                  <Rocket size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Apply for Beta Access</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-100">100+</div>
                  <div className="text-sm text-blue-200">Beta Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};