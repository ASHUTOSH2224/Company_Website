import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, Play, CheckCircle, Users, Trophy, Zap, Sparkles, BarChart3, ArrowDown, Rocket, Star, Brain, Shield, Globe, Clock } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const elements = document.querySelectorAll('.parallax-element');
      elements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Rotate metrics and features
    const metricInterval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % liveMetrics.length);
    }, 3000);

    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(metricInterval);
      clearInterval(featureInterval);
    };
  }, []);

  const features = [
    { 
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Automate complex tasks with advanced AI",
      color: "from-blue-600 to-indigo-600"
    },
    { 
      icon: Rocket,
      title: "10x Faster Deployment",
      description: "Launch projects in record time",
      color: "from-purple-600 to-pink-600"
    },
    { 
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols",
      color: "from-emerald-600 to-teal-600"
    },
    { 
      icon: Globe,
      title: "Global Scalability",
      description: "Scale seamlessly worldwide",
      color: "from-orange-600 to-red-600"
    }
  ];

  const startupStats = [
    { icon: Brain, value: '500+', label: 'AI Models', color: 'from-blue-500 to-cyan-500' },
    { icon: Rocket, value: '10x', label: 'Faster', color: 'from-purple-500 to-pink-500' },
    { icon: Star, value: '99.9%', label: 'Uptime', color: 'from-emerald-500 to-teal-500' },
    { icon: Clock, value: '24/7', label: 'Support', color: 'from-orange-500 to-red-500' }
  ];

  const liveMetrics = [
    { label: 'Active Users', value: '10,000+', icon: '👥' },
    { label: 'Tasks Automated', value: '1M+', icon: '⚡' },
    { label: 'Time Saved', value: '100K+ hrs', icon: '⏰' },
    { label: 'Cost Reduced', value: '$2M+', icon: '💰' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50" ref={heroRef}>
      
      {/* Enhanced 3D Floating Background Elements */}
      <div className="absolute inset-0 perspective-1000">
        <div 
          className="absolute w-[40rem] h-[40rem] bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float-slow parallax-element"
          style={{ 
            top: '5%', 
            left: '0%',
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 30}px, 0) rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg)`
          }}
        ></div>
        <div 
          className="absolute w-[35rem] h-[35rem] bg-gradient-to-r from-purple-200/25 to-pink-200/25 rounded-full blur-2xl animate-float-slow" 
          style={{ 
            animationDelay: '2s',
            top: '15%', 
            right: '5%',
            transform: `translate3d(${mousePosition.x * -25}px, ${mousePosition.y * 25}px, 0) rotateX(${mousePosition.y * -12}deg) rotateY(${mousePosition.x * 12}deg)`
          }}
        ></div>
        <div 
          className="absolute w-[30rem] h-[30rem] bg-gradient-to-r from-emerald-200/35 to-teal-200/35 rounded-full blur-3xl animate-float-slow" 
          style={{ 
            animationDelay: '4s',
            bottom: '10%', 
            left: '10%',
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * -20}px, 0) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * -10}deg)`
          }}
        ></div>
      </div>

      {/* Enhanced Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0)`
          }}
        ></div>
          </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Enhanced Trust Badge */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 text-blue-700 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <Trophy size={16} className="text-yellow-500" />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                    Trusted by 500+ Companies Worldwide
                </span>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full font-bold animate-pulse">
                  FEATURED IN FORBES
                </div>
              </div>
            </div>

            {/* Enhanced Main Heading with 3D Effect */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <span className="text-slate-900 block transform hover:scale-105 transition-transform duration-300">
                    Transform Your Business
                </span>
              </div>
                <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-shift bg-size-300 block transform hover:scale-105 transition-transform duration-300">
                    with AI-Powered Solutions
                </span>
              </div>
            </h1>
          </div>
          
            {/* Enhanced Description with Rotating Features */}
            <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    const isActive = activeFeature === index;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 cursor-pointer ${
                          isActive 
                            ? 'bg-gradient-to-r ' + feature.color + ' text-white shadow-lg scale-105' 
                            : 'hover:bg-white/50'
                        }`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isActive 
                            ? 'bg-white/20' 
                            : 'bg-gradient-to-r ' + feature.color + ' text-white'
                        }`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{feature.title}</h3>
                          <p className={`text-sm ${isActive ? 'text-white/80' : 'text-slate-600'}`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
          </div>
          
            {/* Enhanced CTA Section */}
            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button 
                onClick={onContactClick}
                className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden w-full sm:w-auto"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Rocket size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  Get Started Free
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
              <button className="group flex items-center gap-3 text-slate-700 bg-white/90 backdrop-blur-sm border-2 border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Play size={18} className="ml-1 text-white" />
                </div>
                <span>See How It Works</span>
              </button>
            </div>

            {/* Enhanced Live Metrics Display */}
            <div className={`transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-100/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-blue-600 font-semibold">Live Platform Metrics</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-1">
                      {liveMetrics[currentMetric].value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{liveMetrics[currentMetric].label}</div>
                  </div>
                  <div className="text-5xl animate-bounce-slow">
                    {liveMetrics[currentMetric].icon}
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4 h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${((currentMetric + 1) / liveMetrics.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Display */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transform transition-all duration-1000 delay-1600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {startupStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div 
                      className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-blue-100/50 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      style={{
                        transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
                      }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-6`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Interactive 3D Dashboard Preview */}
          <div className={`relative transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div 
              className="relative perspective-1000"
              style={{
                transform: `rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`
              }}
            >
              {/* Main Dashboard Preview */}
              <div className="relative bg-white/95 rounded-3xl p-8 shadow-2xl border border-blue-100/50 backdrop-blur-md hover:shadow-3xl transition-all duration-500 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">AI Dashboard</h3>
                      <p className="text-sm text-slate-500">Real-time Analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-6">
                  {/* Analytics Graph */}
                  <div className="h-40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-4">
                    <div className="h-full flex items-end justify-between">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-4 bg-gradient-to-t from-blue-600 to-indigo-600 rounded-t-lg"
                          style={{ 
                            height: `${20 + Math.random() * 80}%`,
                            opacity: i === activeFeature ? 1 : 0.7
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      const isActive = activeFeature === index;
                      return (
                        <div
                          key={index}
                          className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                            isActive 
                              ? 'bg-gradient-to-r ' + feature.color + ' text-white'
                              : 'bg-slate-100/50 hover:bg-slate-100'
                          }`}
                          onClick={() => setActiveFeature(index)}
                        >
                          <Icon size={20} className={isActive ? 'text-white' : 'text-slate-600'} />
                          <div className={`text-sm font-medium mt-2 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                            {feature.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Status Indicators */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-slate-600">System Status: Optimal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-slate-400" />
                      <span className="text-slate-600">Updated just now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg transform rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg transform -rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors duration-300 group cursor-pointer">
            <span className="text-sm font-medium">Explore More</span>
            <ArrowDown size={16} className="animate-bounce text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};