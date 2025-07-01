import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, Play, CheckCircle, Users, Trophy, Zap, ArrowDown, Sparkles, BarChart3 } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    // Mouse move effect for interactive elements
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, value: '98%', label: 'Success Rate', color: 'from-blue-500 to-indigo-500' },
    { icon: BarChart3, value: '250%', label: 'ROI Average', color: 'from-purple-500 to-pink-500' },
    { icon: Trophy, value: '50+', label: 'Awards Won', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
      
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      
      {/* Interactive floating shapes that respond to mouse */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl animate-float transition-transform duration-1000"
        style={{ 
          top: '10%', 
          left: '5%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute w-72 h-72 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-2xl animate-float transition-transform duration-1000" 
        style={{ 
          animationDelay: '2s',
          top: '20%', 
          right: '10%',
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px)`
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 bg-gradient-to-r from-cyan-100/35 to-blue-100/35 rounded-full blur-3xl animate-float transition-transform duration-1000" 
        style={{ 
          animationDelay: '4s',
          bottom: '15%', 
          left: '15%',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01}px)`
        }}
      ></div>
      
      {/* Enhanced dot pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Enhanced Left Content */}
          <div className="space-y-8">
            {/* Animated professional badge */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/50 text-blue-700 text-sm font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <Trophy size={18} className="text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">Trusted by 500+ Global Companies</span>
                <Sparkles size={16} className="text-blue-500 animate-pulse" />
              </div>
            </div>

            {/* Enhanced main heading with staggered animations */}
            <div className="space-y-6">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <span className="text-slate-900 block">
                    Transform Your
                  </span>
                </div>
                <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift bg-size-300 block">
                    Business Future
                  </span>
                </div>
                <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <span className="text-slate-700 block">
                    with AI Innovation
                  </span>
                </div>
              </h1>
            </div>
            
            {/* Enhanced subtitle */}
            <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="font-body text-xl sm:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                We deliver <span className="font-semibold text-blue-600">cutting-edge AI solutions</span> that streamline operations, 
                boost productivity, and drive <span className="font-semibold text-indigo-600">measurable growth</span> for forward-thinking organizations.
              </p>
            </div>

            {/* Enhanced key benefits with icons */}
            <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3 text-slate-700 bg-green-50/80 px-4 py-2 rounded-full border border-green-200/50 hover:scale-105 transition-transform duration-300">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-sm font-semibold">Custom AI Development</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 bg-blue-50/80 px-4 py-2 rounded-full border border-blue-200/50 hover:scale-105 transition-transform duration-300">
                  <CheckCircle size={20} className="text-blue-600" />
                  <span className="text-sm font-semibold">Process Automation</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 bg-purple-50/80 px-4 py-2 rounded-full border border-purple-200/50 hover:scale-105 transition-transform duration-300">
                  <CheckCircle size={20} className="text-purple-600" />
                  <span className="text-sm font-semibold">24/7 Expert Support</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA buttons with hover effects */}
            <div className={`flex flex-col sm:flex-row items-start gap-6 pt-8 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover-lift flex items-center gap-4 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">Schedule Free Consultation</span>
                <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group flex items-center gap-4 text-slate-700 bg-white/90 backdrop-blur-sm border-2 border-slate-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <Play size={18} className="ml-1 text-white" />
                </div>
                <span>Watch Success Stories</span>
              </button>
            </div>

            {/* Live stats counter */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Right Content with 3D effects */}
          <div className={`relative transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative">
              {/* Enhanced main illustration container */}
              <div className="relative bg-gradient-to-br from-white/95 to-blue-50/80 rounded-3xl p-10 shadow-2xl border border-blue-100/50 backdrop-blur-md hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Real-Time Dashboard</h3>
                  <p className="text-slate-600">Live Performance Metrics</p>
                </div>

                {/* Enhanced stats grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/card">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
                        <Users size={26} className="text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900 tabular-nums">500+</div>
                        <div className="text-sm text-slate-600 font-medium">Active Clients</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/card" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
                        <Zap size={26} className="text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900 tabular-nums">98%</div>
                        <div className="text-sm text-slate-600 font-medium">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced feature showcase */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-200/50 hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-300 group/feature">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 size={24} className="text-blue-600 group-hover/feature:scale-110 transition-transform duration-300" />
                      <h4 className="font-bold text-slate-900">AI-Powered Analytics</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">Real-time insights and predictive modeling for data-driven decisions.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-200/50 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group/feature">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap size={24} className="text-purple-600 group-hover/feature:scale-110 transition-transform duration-300" />
                      <h4 className="font-bold text-slate-900">Smart Automation</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">Streamline workflows and reduce manual tasks by up to 80%.</p>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements with 3D effect */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl shadow-2xl animate-float opacity-90 hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-xl shadow-2xl animate-float opacity-90 hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl shadow-xl animate-float opacity-80 hover:scale-110 transition-transform duration-300" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col items-center gap-3 text-slate-500 group cursor-pointer hover:text-blue-600 transition-colors duration-300">
            <span className="text-sm font-medium group-hover:text-blue-600">Explore Our Solutions</span>
            <div className="w-8 h-12 border-2 border-slate-400 group-hover:border-blue-500 rounded-full flex justify-center transition-colors duration-300 relative overflow-hidden">
              <div className="w-1.5 h-4 bg-slate-400 group-hover:bg-blue-500 rounded-full mt-2 animate-bounce transition-colors duration-300"></div>
            </div>
            <ArrowDown size={16} className="animate-bounce text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};