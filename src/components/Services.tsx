import React, { useState, useEffect, useRef } from 'react';
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
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

interface ServicesProps {
  onContactClick?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const autoPlayRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const autoPlayInterval = 4000;

  useEffect(() => {
    setIsVisible(true);

    // Handle responsive cards per view
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(1); // Mobile: 1 card
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => {
          const maxSlides = Math.max(0, services.length - cardsPerView);
          return prev >= maxSlides ? 0 : prev + 1;
        });
      }, autoPlayInterval);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, cardsPerView]);

  // Reset slide when cards per view changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsPerView]);

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

  const maxSlides = Math.max(0, services.length - cardsPerView);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section 
      className="section-padding relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container-custom" ref={containerRef}>
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="heading-lg mb-4 lg:mb-6">
            Comprehensive <span className="gradient-text-accent">AI Solutions</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto mb-6 lg:mb-8 px-4">
            From intelligent marketing automation to cutting-edge blockchain applications, 
            we deliver complete digital transformation solutions powered by artificial intelligence.
          </p>

          {/* Auto-play Control & Cards Per View Indicator */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 lg:mb-8">
            <button
              onClick={toggleAutoPlay}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                isAutoPlaying 
                  ? 'border-[#0070f3] bg-[#0070f3]/20 text-[#0070f3]' 
                  : 'border-[#333] bg-[var(--card-bg)] text-[#888] hover:text-white hover:border-[#0070f3]'
              }`}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="text-sm font-medium">
                {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
              </span>
            </button>
            
            {/* Responsive indicator */}
            <div className="text-xs text-[#666] bg-[var(--card-bg)] px-3 py-1 rounded-full border border-[#333]">
              <span className="hidden lg:inline">Showing {cardsPerView} of {services.length}</span>
              <span className="hidden md:inline lg:hidden">Showing {cardsPerView} of {services.length}</span>
              <span className="md:hidden">Showing {cardsPerView} of {services.length}</span>
            </div>
          </div>
        </div>

        {/* Responsive Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-[#333] bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              currentSlide === 0 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:border-[#0070f3] hover:bg-[#0070f3]/20 hover:scale-110 shadow-lg shadow-[#0070f3]/20'
            } hidden sm:flex`}
          >
            <ChevronLeft className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlides}
            className={`absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-[#333] bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              currentSlide >= maxSlides
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:border-[#0070f3] hover:bg-[#0070f3]/20 hover:scale-110 shadow-lg shadow-[#0070f3]/20'
            } hidden sm:flex`}
          >
            <ChevronRight className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
          </button>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-between items-center mb-6 sm:hidden">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-12 h-12 rounded-full border border-[#333] bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                currentSlide === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:border-[#0070f3] hover:bg-[#0070f3]/20'
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="text-sm text-[#888]">
              {currentSlide + 1} / {maxSlides + 1}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlides}
              className={`w-12 h-12 rounded-full border border-[#333] bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                currentSlide >= maxSlides
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:border-[#0070f3] hover:bg-[#0070f3]/20'
              }`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Carousel Viewport */}
          <div className="overflow-hidden sm:mx-8 lg:mx-16">
            <div 
              className="flex gap-4 lg:gap-8 transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`
              }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredService === index;
                
                return (
                  <div
                    key={index}
                    className="cursor-pointer transition-all duration-700 flex-shrink-0"
                    style={{
                      width: `calc(${100 / cardsPerView}% - ${cardsPerView === 1 ? '0px' : cardsPerView === 2 ? '0.75rem' : '1.5rem'})`
                    }}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Service Card */}
                    <div className={`service-card group relative overflow-hidden h-80 lg:h-96 hover:transform hover:-translate-y-2 lg:hover:-translate-y-6 hover:scale-105 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      {/* Animated background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      
                      {/* Animated border effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 p-4 lg:p-6 h-full flex flex-col">
                        {/* Service Icon */}
                        <div className="relative w-10 h-10 lg:w-12 lg:h-12 mb-4 lg:mb-6">
                          {/* Pulsing background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-lg group-hover:opacity-40 transition-opacity duration-500 animate-pulse`}></div>
                          
                          {/* Main icon container */}
                          <div className={`relative w-full h-full bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-[#0070f3]/25`}>
                            <Icon size={20} className="lg:w-6 lg:h-6 text-white group-hover:animate-bounce" />
                          </div>
                          
                          {/* Floating ring effect */}
                          <div className={`absolute inset-0 border-2 border-[#0070f3] rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 animate-ping`}></div>
                        </div>

                        {/* Service Content */}
                        <div className="flex-1 space-y-3 lg:space-y-4">
                          <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-[#50e3c2] transition-all duration-300 leading-tight">
                            {service.title}
                          </h3>
                          
                          <p className="text-sm lg:text-base text-[#888] group-hover:text-[#aaa] transition-colors duration-300 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Features List */}
                          <div className={`space-y-1 lg:space-y-2 transition-all duration-500 ${
                            isHovered ? 'opacity-100 max-h-32 translate-y-0' : 'opacity-60 max-h-20 translate-y-1'
                          }`}>
                            {service.features.map((feature, featureIndex) => (
                              <div 
                                key={featureIndex} 
                                className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                                style={{ animationDelay: `${featureIndex * 100}ms` }}
                              >
                                <div className="w-1.5 h-1.5 bg-[#0070f3] rounded-full group-hover:animate-ping group-hover:bg-[#50e3c2] transition-colors duration-300"></div>
                                <span className="text-xs lg:text-sm text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Learn More Button */}
                          <div className={`pt-3 lg:pt-4 transition-all duration-500 ${
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 lg:gap-3 mt-8 lg:mt-12">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden transition-all duration-500 ${
                  currentSlide === index 
                    ? 'w-6 lg:w-8 h-2 lg:h-3 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full scale-110 lg:scale-125' 
                    : 'w-2 lg:w-3 h-2 lg:h-3 bg-[#333] rounded-full hover:bg-[#666] hover:scale-110'
                }`}
              >
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Progress Bar - Hidden on mobile */}
          {isAutoPlaying && (
            <div className="mt-4 lg:mt-6 w-full max-w-md mx-auto h-1 bg-[#333] rounded-full overflow-hidden hidden sm:block">
              <div 
                className="h-full bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full transition-all duration-100"
                style={{ 
                  width: `${((Date.now() / autoPlayInterval) % 1) * 100}%`
                }}
              />
            </div>
          )}

          {/* Mobile Swipe Indicator */}
          <div className="text-center mt-6 sm:hidden">
            <p className="text-xs text-[#666]">← Swipe or use arrows to navigate →</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 lg:mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-xl lg:text-2xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-sm lg:text-base text-[#888] mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
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

export default Services;