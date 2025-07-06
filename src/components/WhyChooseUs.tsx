import React, { useState, useEffect } from 'react';
import { 
  Award,
  Clock,
  Shield,
  TrendingUp,
  Users,
  Zap,
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
      gradient: 'from-[#0070f3] to-[#50e3c2]'
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Get your AI solutions up and running in weeks, not months.',
      details: 'Our streamlined process and pre-built components enable us to deliver production-ready solutions faster than traditional approaches.',
      gradient: 'from-[#0070f3] to-[#50e3c2]'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance to industry standards.',
      details: 'SOC 2 Type II certified with GDPR compliance, end-to-end encryption, and comprehensive audit trails.',
      gradient: 'from-[#0070f3] to-[#50e3c2]'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI within the first year of implementation.',
      details: 'Our clients see measurable improvements in efficiency, cost reduction, and revenue growth through intelligent automation.',
      gradient: 'from-[#0070f3] to-[#50e3c2]'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '6+',
      label: 'Projects Delivered',
      description: 'Successful AI implementations',
      color: 'text-[#0070f3]'
    },
    {
      icon: Star,
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Positive feedback rate',
      color: 'text-[#50e3c2]'
    },
    {
      icon: Zap,
      number: '80%',
      label: 'Efficiency Boost',
      description: 'Average productivity increase',
      color: 'text-[#0070f3]'
    },
    {
      icon: Globe,
      number: '24/7',
      label: 'Support',
      description: 'Round-the-clock assistance',
      color: 'text-[#50e3c2]'
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
    <section id="why-choose-us" className="section-padding relative">
      <div className="container-custom">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="heading-lg mb-6">
            <span className="block text-white">Why Choose</span>
            <span className="gradient-text-accent">Upstraiq</span>
            </h2>
          
          <p className="text-body max-w-3xl mx-auto">
            We combine deep technical expertise with a commitment to delivering results that matter.
            Here's what sets us apart from the competition.
            </p>
          </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group transform transition-all duration-700 hover:scale-110 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card p-6 text-center relative overflow-hidden group-hover:transform group-hover:-translate-y-2 transition-all duration-500">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Enhanced icon with animations */}
                <div className="relative w-8 h-8 mx-auto mb-4">
                  {/* Pulsing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] opacity-20 rounded-lg group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                  
                  {/* Main icon */}
                  <stat.icon className={`relative w-8 h-8 ${stat.color} group-hover:animate-bounce group-hover:scale-110 transition-transform duration-300`} />
                  
                  {/* Floating ring effect */}
                  <div className="absolute inset-0 border-2 border-[#0070f3] rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-ping"></div>
                </div>
                
                {/* Animated stat value */}
                <div className="relative">
                  <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-[#50e3c2]">{stat.number}</div>
                  
                  {/* Underline animation */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] mx-auto group-hover:w-full transition-all duration-500"></div>
                </div>
                
                <div className="text-sm font-medium text-white mb-1 group-hover:text-[#aaa] transition-colors duration-300">{stat.label}</div>
                <div className="text-xs text-[#888] group-hover:text-[#aaa] transition-colors duration-300">{stat.description}</div>
                
                {/* Hover particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                  <div className="absolute top-4 right-3 w-1 h-1 bg-[#50e3c2] rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                  <div className="absolute bottom-3 left-4 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`service-card group cursor-pointer relative overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2 hover:scale-105 ${
                activeFeature === index ? 'border-[#0070f3] scale-105 shadow-2xl shadow-[#0070f3]/20' : ''
              }`}
              onClick={() => setActiveFeature(index)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Animated border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg animate-gradient-shift bg-size-300`}></div>
              
              {/* Active feature pulse animation */}
              {activeFeature === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 animate-pulse rounded-lg"></div>
              )}
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  {/* Enhanced feature icon */}
                  <div className="relative flex-shrink-0">
                    {/* Pulsing background effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-20 rounded-lg group-hover:opacity-40 transition-opacity duration-500 animate-pulse w-12 h-12`}></div>
                    
                    {/* Main icon container */}
                    <div className={`relative w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-[#0070f3]/25 ${
                      activeFeature === index ? 'animate-bounce' : ''
                    }`}>
                      <feature.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                    </div>
                    
                    {/* Floating ring effect */}
                    <div className="absolute inset-0 border-2 border-[#0070f3] rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-ping w-12 h-12"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#50e3c2] transition-colors duration-300 group-hover:scale-105 transform-gpu">{feature.title}</h3>
                    <p className="text-[#888] text-sm leading-relaxed mb-3 group-hover:text-[#aaa] transition-colors duration-300">{feature.description}</p>
                    <p className="text-[#666] text-xs leading-relaxed group-hover:text-[#888] transition-colors duration-300">{feature.details}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 left-4 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                <div className="absolute top-8 right-6 w-1 h-1 bg-[#50e3c2] rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                <div className="absolute bottom-6 left-8 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Benefits Section */}
        <div className="text-center mb-12">
          <h3 className="heading-md text-white mb-12">What You Get</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`card p-6 text-center group relative overflow-hidden transform transition-all duration-700 hover:scale-110 hover:-translate-y-4 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Enhanced icon with animations */}
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    {/* Pulsing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                    
                    {/* Main icon container */}
                    <div className="relative w-full h-full bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-[#0070f3]/25">
                      <benefit.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                    </div>
                    
                    {/* Floating ring effect */}
                    <div className="absolute inset-0 border-2 border-[#0070f3] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 animate-ping"></div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-[#50e3c2] transition-colors duration-300 group-hover:scale-105 transform-gpu">{benefit.title}</h4>
                  <p className="text-[#888] text-sm leading-relaxed group-hover:text-[#aaa] transition-colors duration-300">{benefit.description}</p>
                </div>
                
                {/* Hover particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-[#50e3c2] rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                  <div className="absolute bottom-6 left-8 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                  <div className="absolute bottom-8 right-4 w-1 h-1 bg-[#50e3c2] rounded-full animate-ping" style={{ animationDelay: '600ms' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={onContactClick}
            className="btn-primary group"
          >
            <span>Start Your AI Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};