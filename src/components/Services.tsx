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
  Pause,
  Star,
  Clock,
  Users,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onContactClick?: () => void;
  onServiceLearnMore?: (serviceId: string) => void;
  onViewCaseStudies?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick, onServiceLearnMore, onViewCaseStudies }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const autoPlayRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const autoPlayInterval = 5000; // Increased interval for better UX

  useEffect(() => {
    setIsVisible(true);

    // Handle responsive cards per view
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
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
          const filteredServices = getFilteredServices();
          const maxSlides = Math.max(0, filteredServices.length - cardsPerView);
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
  }, [isAutoPlaying, cardsPerView, selectedCategory]);

  // Reset slide when cards per view changes or category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsPerView, selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'web', name: 'Web & Mobile', icon: Globe },
    { id: 'business', name: 'Business', icon: TrendingUp }
  ];

const services = [
    {
      icon: Bot,
      title: "AI Marketing Automation",
      description: "Intelligent campaigns that adapt, optimize, and convert automatically with advanced machine learning algorithms.",
      features: ["Smart Campaign Optimization", "Personalized Content Generation", "Predictive Analytics", "A/B Testing Automation"],
      color: "from-[#0070f3] to-[#50e3c2]",
      category: "ai",
      duration: "6-8 weeks",
      rating: 4.9,
      clients: "5+",
      badge: "Most Popular",
      id: "ai-marketing"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "AI-powered online stores with intelligent recommendations, inventory management, and seamless checkout experiences.",
      features: ["Smart Product Recommendations", "Automated Inventory Management", "Customer Analytics Dashboard", "Payment Gateway Integration"],
      color: "from-[#50e3c2] to-[#0070f3]",
      category: "business",
      duration: "8-12 weeks",
      rating: 4.8,
      clients: "200+",
      badge: "Enterprise Ready",
      id: "ecommerce"
    },
    {
      icon: GraduationCap,
      title: "Educational Platforms",
      description: "Modern learning management systems with AI-powered personalized learning paths and student analytics.",
      features: ["Personalized Learning Paths", "Student Progress Analytics", "Virtual Classrooms", "Assignment Management"],
      color: "from-[#0070f3] to-[#8b5cf6]",
      category: "web",
      duration: "10-14 weeks",
      rating: 4.7,
      clients: "80+",
      badge: "EdTech Leader",
      id: "education"
    },
    {
      icon: User,
      title: "Developer Portfolios",
      description: "Stunning portfolio websites that showcase your work professionally with interactive galleries and modern design.",
      features: ["Interactive Project Galleries", "Resume Integration", "Blog System", "Contact Forms"],
      color: "from-[#8b5cf6] to-[#50e3c2]",
      category: "web",
      duration: "2-3 weeks",
      rating: 4.9,
      clients: "500+",
      badge: "Quick Delivery",
      id: "portfolio"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "High-performance web applications built with cutting-edge technologies and scalable cloud architecture.",
      features: ["Real-time Features", "Cloud Integration", "Scalable Architecture", "API Development"],
      color: "from-[#50e3c2] to-[#0070f3]",
      category: "web",
      duration: "12-16 weeks",
      rating: 4.8,
      clients: "120+",
      badge: "Enterprise Scale",
      id: "web-apps"
    },
  {
    icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["Cross-platform Development", "Native Performance", "App Store Optimization", "Push Notifications"],
      color: "from-[#0070f3] to-[#8b5cf6]",
      category: "web",
      duration: "14-18 weeks",
      rating: 4.7,
      clients: "90+",
      badge: "Mobile First",
      id: "mobile-apps"
    },
    {
      icon: Database,
      title: "CRM Platforms",
      description: "Intelligent customer relationship management systems with AI insights and sales automation.",
      features: ["Customer 360° View", "Sales Pipeline Automation", "Lead Scoring AI", "Performance Analytics"],
      color: "from-[#8b5cf6] to-[#50e3c2]",
      category: "business",
      duration: "10-12 weeks",
      rating: 4.8,
      clients: "110+",
      badge: "Sales Booster",
      id: "crm"
    },
    {
      icon: MessageCircle,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that understands context, learns from interactions, and provides human-like responses.",
      features: ["Natural Language Processing", "Multi-language Support", "Integration Ready", "Continuous Learning"],
      color: "from-[#50e3c2] to-[#0070f3]",
      category: "ai",
      duration: "4-6 weeks",
      rating: 4.9,
      clients: "300+",
      badge: "AI Powered",
      id: "chatbots"
    },
    {
      icon: MapPin,
      title: "GPS Tracking Solutions",
      description: "Real-time location tracking and fleet management solutions with advanced analytics and route optimization.",
      features: ["Real-time GPS Tracking", "Route Optimization", "Fleet Management", "Geofencing Alerts"],
      color: "from-[#0070f3] to-[#8b5cf6]",
      category: "business",
      duration: "8-10 weeks",
      rating: 4.6,
      clients: "70+",
      badge: "Location Tech",
      id: "gps-tracking"
    },
    {
      icon: Layers,
      title: "Blockchain Applications",
      description: "Decentralized applications built on blockchain technology with smart contracts and DeFi integration.",
      features: ["Smart Contract Development", "DeFi Protocol Integration", "NFT Marketplace", "Wallet Integration"],
      color: "from-[#8b5cf6] to-[#50e3c2]",
      category: "ai",
      duration: "16-20 weeks",
      rating: 4.7,
      clients: "40+",
      badge: "Web3 Ready",
      id: "blockchain"
    },
    {
      icon: Brain,
      title: "ML Model Development",
      description: "Custom machine learning models tailored to your business needs with advanced algorithms and data processing.",
      features: ["Custom Algorithm Design", "Data Pipeline Setup", "Model Training & Validation", "Performance Optimization"],
      color: "from-[#50e3c2] to-[#0070f3]",
      category: "ai",
      duration: "12-16 weeks",
      rating: 4.8,
      clients: "60+",
      badge: "AI Expert",
      id: "ml-models"
    },
    {
      icon: Zap,
      title: "AI Model Deployment",
      description: "Seamless deployment and scaling of machine learning models with monitoring and automatic optimization.",
      features: ["Cloud Deployment", "Auto Scaling", "Performance Monitoring", "A/B Testing"],
      color: "from-[#0070f3] to-[#50e3c2]",
      category: "ai",
      duration: "4-6 weeks",
      rating: 4.9,
      clients: "80+",
      badge: "MLOps",
      id: "ai-deployment"
    }
  ];

  const getFilteredServices = () => {
    if (selectedCategory === 'all') return services;
    return services.filter(service => service.category === selectedCategory);
  };

  const filteredServices = getFilteredServices();
  const maxSlides = Math.max(0, filteredServices.length - cardsPerView);

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
      className="py-16 lg:py-24 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0070f3]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#50e3c2]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#333] bg-black/80 backdrop-blur-sm mb-8 lg:mb-12">
            <Sparkles className="w-5 h-5 text-[#0070f3]" />
            <span className="text-base text-[#888] font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 font-space">
            Comprehensive <span className="gradient-text-accent">AI Solutions</span>
          </h2>
          <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto mb-12 lg:mb-16 leading-relaxed">
            From intelligent marketing automation to cutting-edge blockchain applications, 
            we deliver complete digital transformation solutions powered by artificial intelligence.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12">
            {categories.map((category) => {
              const CategoryIcon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-[#0070f3] bg-[#0070f3]/20 text-[#0070f3] shadow-lg shadow-[#0070f3]/20'
                      : 'border-[#333] bg-black/80 text-[#888] hover:text-white hover:border-[#0070f3] hover:shadow-lg hover:shadow-[#0070f3]/20'
                  }`}
                >
                  <CategoryIcon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Auto-play Control & Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 lg:mb-12">
            <button
              onClick={toggleAutoPlay}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                isAutoPlaying 
                  ? 'border-[#0070f3] bg-[#0070f3]/20 text-[#0070f3] shadow-lg shadow-[#0070f3]/20' 
                  : 'border-[#333] bg-black/80 text-[#888] hover:text-white hover:border-[#0070f3] hover:shadow-lg hover:shadow-[#0070f3]/20'
              }`}
            >
              {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span className="text-base font-semibold">
                {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
              </span>
            </button>
            
            {/* Service Statistics */}
            <div className="flex items-center gap-6 text-sm text-[#666]">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#50e3c2]" />
                <span>4.8+ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#0070f3]" />
                <span>1500+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#8b5cf6]" />
                <span>99% Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl border-2 border-[#333] bg-black/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
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
            className={`absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl border-2 border-[#333] bg-black/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              currentSlide >= maxSlides
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:border-[#0070f3] hover:bg-[#0070f3]/20 hover:scale-110 shadow-xl shadow-[#0070f3]/20'
            } hidden sm:flex`}
          >
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </button>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mb-8 sm:hidden">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-14 h-14 rounded-2xl border-2 border-[#333] bg-black/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
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
              <div className="w-20 h-1 bg-[#333] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / (maxSlides + 1)) * 100}%` }}
                />
              </div>
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlides}
              className={`w-14 h-14 rounded-2xl border-2 border-[#333] bg-black/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
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
              {filteredServices.map((service, index) => {
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
                    <div className={`bg-black/90 border-2 border-[#333] rounded-3xl p-6 lg:p-8 group relative overflow-hidden h-[28rem] lg:h-[32rem] hover:transform hover:-translate-y-3 hover:scale-105 transition-all duration-700 hover:border-[#0070f3] hover:shadow-2xl hover:shadow-[#0070f3]/20 backdrop-blur-sm ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                          {service.badge}
                        </div>
                      )}

                      {/* Animated background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      
                      {/* Animated border effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Service Icon */}
                        <div className="relative w-16 h-16 lg:w-18 lg:h-18 mb-4 lg:mb-6">
                          {/* Pulsing background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse`}></div>
                          
                          {/* Main icon container */}
                          <div className={`relative w-full h-full bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-[#0070f3]/30`}>
                            <Icon size={24} className="lg:w-8 lg:h-8 text-white group-hover:animate-bounce" />
                          </div>
                          
                          {/* Floating ring effect */}
                          <div className={`absolute inset-0 border-2 border-[#0070f3] rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 animate-ping`}></div>
                        </div>

                        {/* Service Content */}
                        <div className="flex-1 space-y-3 lg:space-y-4">
                          <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-[#50e3c2] transition-all duration-300 leading-tight font-space">
                  {service.title}
                </h3>
                
                          <p className="text-sm lg:text-base text-[#888] group-hover:text-[#aaa] transition-colors duration-300 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                          {/* Service Stats */}
                          <div className="flex items-center gap-3 text-xs text-[#666] group-hover:text-[#888] transition-colors duration-300">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{service.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-[#50e3c2]" />
                              <span>{service.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{service.clients}</span>
                            </div>
                          </div>

                          {/* Features List - Reduced */}
                          <div className="space-y-2">
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <div 
                                key={featureIndex} 
                                className="flex items-center gap-2 transition-all duration-300"
                              >
                                <div className="w-1.5 h-1.5 bg-[#0070f3] rounded-full group-hover:bg-[#50e3c2] transition-colors duration-300 flex-shrink-0"></div>
                                <span className="text-xs lg:text-sm text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300 font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Action Buttons - Always Visible */}
                          <div className="pt-3 lg:pt-4 space-y-2">
                            <button 
                              onClick={() => onServiceLearnMore?.(service.id)}
                              className="w-full border border-[#333] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:border-[#0070f3] hover:bg-[#0070f3]/10 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 justify-center group/btn"
                            >
                              Learn More
                              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button 
                              onClick={onContactClick}
                              className="w-full bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 justify-center group/btn shadow-lg"
                            >
                              Get Started
                              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
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
                    ? 'w-8 lg:w-10 h-2 lg:h-3 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full scale-110 lg:scale-125' 
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

        {/* Enhanced CTA Section */}
        <div className={`text-center mt-20 lg:mt-28 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-black/80 to-[#0070f3]/5 border border-[#333] rounded-3xl p-12 lg:p-16 hover:border-[#0070f3] transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-50"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#0070f3]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#50e3c2]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#333] bg-black/50 backdrop-blur-sm mb-8">
                <Award className="w-5 h-5 text-[#50e3c2]" />
                <span className="text-sm text-[#888] font-medium">Industry Leaders</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 font-space">
                Ready to Transform Your <span className="gradient-text-accent">Business?</span>
              </h3>
              <p className="text-lg lg:text-xl text-[#888] mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                Join 1500+ satisfied clients who've revolutionized their operations with our AI-powered solutions. 
                Let's discuss your project and create something extraordinary together.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 mb-10 lg:mb-12 text-sm text-[#666]">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#50e3c2]" />
                  <span>4.9/5 Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#0070f3]" />
                  <span>300% Average ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#8b5cf6]" />
                  <span>Industry Recognition</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={onContactClick}
                  className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 group"
                >
                  Start Your AI Journey
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={onViewCaseStudies}
                  className="border-2 border-[#333] text-white px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-semibold hover:border-[#0070f3] hover:bg-[#0070f3]/10 transition-all duration-300 inline-flex items-center gap-3"
                >
                  View Case Studies
                  <TrendingUp size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;