import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  ShoppingCart, 
  GraduationCap, 
  User, 
  Globe, 
  Smartphone, 
  Database, 
  MessageCircle, 
  MapPin, 
  Layers, 
  Brain, 
  Zap,
  ArrowRight 
} from 'lucide-react';

interface ServicesProps {
  onContactClick?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Bot,
      title: "AI Marketing Automation",
      description: "Intelligent campaigns that adapt, optimize, and convert automatically.",
      features: ["Smart Campaign Optimization", "Personalized Content", "Predictive Analytics"],
      color: "from-[#0070f3] to-[#50e3c2]"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "AI-powered online stores with intelligent recommendations and automation.",
      features: ["Smart Product Recommendations", "Inventory Management", "Customer Analytics"],
      color: "from-[#50e3c2] to-[#0070f3]"
    },
    {
      icon: GraduationCap,
      title: "School & College Websites",
      description: "Modern educational platforms with student management systems.",
      features: ["Student Portals", "Course Management", "Virtual Classrooms"],
      color: "from-[#0070f3] to-[#8b5cf6]"
    },
    {
      icon: User,
      title: "Developer Portfolios",
      description: "Stunning portfolio websites that showcase your work professionally.",
      features: ["Interactive Galleries", "Project Showcases", "Contact Integration"],
      color: "from-[#8b5cf6] to-[#50e3c2]"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "High-performance web apps built with cutting-edge technologies.",
      features: ["Real-time Features", "Cloud Integration", "Scalable Architecture"],
      color: "from-[#50e3c2] to-[#0070f3]"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Cross-platform Development", "Native Performance", "App Store Optimization"],
      color: "from-[#0070f3] to-[#8b5cf6]"
    },
    {
      icon: Database,
      title: "CRM Platforms",
      description: "Intelligent customer relationship management with AI insights.",
      features: ["Customer Analytics", "Sales Automation", "Lead Scoring"],
      color: "from-[#8b5cf6] to-[#50e3c2]"
    },
    {
      icon: MessageCircle,
      title: "Custom AI Chatbots",
      description: "Intelligent conversational AI that understands and responds naturally.",
      features: ["Natural Language Processing", "Multi-language Support", "Integration Ready"],
      color: "from-[#50e3c2] to-[#0070f3]"
    },
    {
      icon: MapPin,
      title: "GPS Tracking Tools",
      description: "Real-time location tracking and fleet management solutions.",
      features: ["Real-time Tracking", "Route Optimization", "Fleet Management"],
      color: "from-[#0070f3] to-[#8b5cf6]"
    },
    {
      icon: Layers,
      title: "Web3 Blockchain Apps",
      description: "Decentralized applications built on blockchain technology.",
      features: ["Smart Contracts", "DeFi Integration", "NFT Marketplaces"],
      color: "from-[#8b5cf6] to-[#50e3c2]"
    },
    {
      icon: Brain,
      title: "ML Model Development",
      description: "Custom machine learning models tailored to your business needs.",
      features: ["Custom Algorithms", "Data Processing", "Model Training"],
      color: "from-[#50e3c2] to-[#0070f3]"
    },
    {
      icon: Zap,
      title: "AI Model Deployment",
      description: "Seamless deployment and scaling of machine learning models.",
      features: ["Cloud Deployment", "Auto Scaling", "Performance Monitoring"],
      color: "from-[#0070f3] to-[#50e3c2]"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-lg mb-6">
            Comprehensive <span className="gradient-text-accent">AI Solutions</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            From intelligent marketing automation to cutting-edge blockchain applications, 
            we deliver complete digital transformation solutions powered by artificial intelligence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <div
                key={index}
                className={`service-card group cursor-pointer transition-all duration-700 hover:transform hover:-translate-y-6 hover:scale-105 relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Animated border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg animate-gradient-shift bg-size-300`}></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Enhanced Service Icon */}
                  <div className="relative w-12 h-12 mb-6">
                    {/* Pulsing background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-lg group-hover:opacity-40 transition-opacity duration-500 animate-pulse`}></div>
                    
                    {/* Main icon container */}
                    <div className={`relative w-full h-full bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-[#0070f3]/25`}>
                      <Icon size={24} className="text-white group-hover:animate-bounce" />
                    </div>
                    
                    {/* Floating ring effect */}
                    <div className={`absolute inset-0 border-2 border-[#0070f3] rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 animate-ping`}></div>
                  </div>

                  {/* Enhanced Service Content */}
                  <div className="space-y-4">
                    <h3 className="heading-sm text-white group-hover:text-[#50e3c2] transition-all duration-300 group-hover:scale-105 transform-gpu">
                      {service.title}
                    </h3>
                    
                    <p className="text-body-sm group-hover:text-[#aaa] transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Enhanced Features List */}
                    <div className={`space-y-2 transition-all duration-500 ${
                      isHovered ? 'opacity-100 max-h-32 translate-y-0' : 'opacity-60 max-h-20 translate-y-1'
                    }`}>
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                          style={{ animationDelay: `${featureIndex * 100}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-[#0070f3] rounded-full group-hover:animate-ping group-hover:bg-[#50e3c2] transition-colors duration-300"></div>
                          <span className="text-body-sm text-xs group-hover:text-[#50e3c2] transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Learn More Button */}
                    <div className={`pt-4 transition-all duration-500 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      <button 
                        onClick={onContactClick}
                        className="text-[#0070f3] text-sm font-medium flex items-center gap-2 hover:gap-3 hover:text-[#50e3c2] transition-all duration-300 group/btn"
                      >
                        Learn More
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Hover particles */}
                  {isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-4 left-4 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                      <div className="absolute top-8 right-6 w-1 h-1 bg-[#50e3c2] rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                      <div className="absolute bottom-6 left-8 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                      <div className="absolute bottom-8 right-4 w-1 h-1 bg-[#50e3c2] rounded-full animate-ping" style={{ animationDelay: '600ms' }}></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="heading-md mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered solutions can revolutionize your operations 
            and drive unprecedented growth.
          </p>
          <button 
            onClick={onContactClick}
            className="btn-primary"
          >
            Start Your AI Journey
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};