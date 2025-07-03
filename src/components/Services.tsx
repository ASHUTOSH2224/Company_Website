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
      className="py-16 lg:py-24 relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container-custom" ref={containerRef}>
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#333] bg-black backdrop-blur-sm mb-8 lg:mb-12">
            <Brain className="w-5 h-5 text-[#0070f3]" />
            <span className="text-base text-[#888] font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8">
            Comprehensive <span className="gradient-text-accent">AI Solutions</span>
          </h2>
          <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto mb-12 lg:mb-16 leading-relaxed">
            From intelligent marketing automation to cutting-edge blockchain applications, 
            we deliver complete digital transformation solutions powered by artificial intelligence.
          </p>

          {/* Auto-play Control & Cards Per View Indicator */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 lg:mb-12">
            <button
              onClick={toggleAutoPlay}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                isAutoPlaying 
                  ? 'border-[#0070f3] bg-[#0070f3]/20 text-[#0070f3] shadow-lg shadow-[#0070f3]/20' 
                  : 'border-[#333] bg-black text-[#888] hover:text-white hover:border-[#0070f3] hover:shadow-lg hover:shadow-[#0070f3]/20'
              }`}
            >
              {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span className="text-base font-semibold">
                {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
              </span>
            </button>
            
            {/* Responsive indicator */}
            <div className="text-sm text-[#666] bg-black px-4 py-2 rounded-xl border-2 border-[#333]">
              <span className="hidden lg:inline">Showing {cardsPerView} of {services.length} Services</span>
              <span className="hidden md:inline lg:hidden">Showing {cardsPerView} of {services.length}</span>
              <span className="md:hidden">{cardsPerView} / {services.length}</span>
            </div>
          </div>
        </div>

        {/* Responsive Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl border-2 border-[#333] bg-black backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              currentSlide === 0 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:border-[#0070f3] hover:bg-[#0070f3]/20 hover:scale-110 shadow-xl shadow-[#0070f3]/20'
            } hidden sm:flex`}
          >
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlides}
            className={`absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl border-2 border-[#333] bg-black backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              currentSlide >= maxSlides
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:border-[#0070f3] hover:bg-[#0070f3]/20 hover:scale-110 shadow-xl shadow-[#0070f3]/20'
            } hidden sm:flex`}
          >
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </button>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-between items-center mb-8 sm:hidden">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-14 h-14 rounded-2xl border-2 border-[#333] bg-black backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                currentSlide === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:border-[#0070f3] hover:bg-[#0070f3]/20 hover:scale-105'
              }`}
            >
              <ChevronLeft className="w-7 h-7 text-white" />
            </button>

            <div className="flex flex-col items-center gap-2">
              <div className="text-base font-semibold text-white">
                {currentSlide + 1} / {maxSlides + 1}
              </div>
              <div className="w-16 h-1 bg-[#333] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / (maxSlides + 1)) * 100}%` }}
                />
              </div>
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlides}
              className={`w-14 h-14 rounded-2xl border-2 border-[#333] bg-black backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                currentSlide >= maxSlides
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:border-[#0070f3] hover:bg-[#0070f3]/20 hover:scale-105'
              }`}
            >
              <ChevronRight className="w-7 h-7 text-white" />
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
                    <div className={`bg-black border-2 border-[#333] rounded-2xl p-6 lg:p-8 group relative overflow-hidden h-96 lg:h-[28rem] hover:transform hover:-translate-y-3 hover:scale-105 transition-all duration-700 hover:border-[#0070f3] hover:shadow-2xl hover:shadow-[#0070f3]/20 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      {/* Animated background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      
                      {/* Animated border effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Service Icon */}
                        <div className="relative w-16 h-16 lg:w-20 lg:h-20 mb-6 lg:mb-8">
                          {/* Pulsing background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse`}></div>
                          
                          {/* Main icon container */}
                          <div className={`relative w-full h-full bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-[#0070f3]/30`}>
                            <Icon size={28} className="lg:w-10 lg:h-10 text-white group-hover:animate-bounce" />
                          </div>
                          
                          {/* Floating ring effect */}
                          <div className={`absolute inset-0 border-2 border-[#0070f3] rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 animate-ping`}></div>
                        </div>

                        {/* Service Content */}
                        <div className="flex-1 space-y-4 lg:space-y-6">
                          <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#50e3c2] transition-all duration-300 leading-tight">
                  {service.title}
                </h3>
                
                          <p className="text-base lg:text-lg text-[#888] group-hover:text-[#aaa] transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>

                          {/* Features List */}
                          <div className={`space-y-2 lg:space-y-3 transition-all duration-500 ${
                            isHovered ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-70 max-h-32 translate-y-1'
                          }`}>
                            {service.features.map((feature, featureIndex) => (
                              <div 
                                key={featureIndex} 
                                className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2"
                                style={{ animationDelay: `${featureIndex * 100}ms` }}
                              >
                                <div className="w-2 h-2 bg-[#0070f3] rounded-full group-hover:animate-ping group-hover:bg-[#50e3c2] transition-colors duration-300 flex-shrink-0"></div>
                                <span className="text-sm lg:text-base text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300 font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Learn More Button */}
                          <div className={`pt-4 lg:pt-6 transition-all duration-500 ${
                            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                          }`}>
                            <button 
                              onClick={onContactClick}
                              className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-4 py-2 rounded-xl text-sm lg:text-base font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group/btn shadow-lg"
                            >
                              Learn More
                              <ArrowRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform duration-300" />
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
        <div className={`text-center mt-16 lg:mt-24 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-black border border-[#333] rounded-3xl p-12 lg:p-16 hover:border-[#0070f3] transition-colors duration-300">
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8">
              Ready to Transform Your <span className="gradient-text-accent">Business?</span>
            </h3>
            <p className="text-lg lg:text-xl text-[#888] mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our AI-powered solutions can revolutionize your operations 
              and drive unprecedented growth.
            </p>
            <button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 group"
            >
              Start Your AI Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;