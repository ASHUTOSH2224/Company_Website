import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Code, 
  Lightbulb, 
  Coffee,
  Rocket,
  Star,
  Brain,
  Zap,
  Globe,
  Calendar,
  MapPin,
  GraduationCap,
  Trophy,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  Shield
} from 'lucide-react';

interface AboutProps {
  currentPage: string;
  onContactClick?: () => void;
}

export const About: React.FC<AboutProps> = ({ currentPage, onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFounder, setActiveFounder] = useState(0);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate founders every 6 seconds
    const founderInterval = setInterval(() => {
      setActiveFounder((prev) => (prev + 1) % founders.length);
    }, 6000);

    return () => clearInterval(founderInterval);
  }, []);

  const journey = [
    {
      icon: Lightbulb,
      title: "The Vision",
      date: "January 2024",
      description: "Started with a simple belief: AI should empower businesses, not complicate them.",
      milestone: "Concept"
    },
    {
      icon: Code,
      title: "First Build",
      date: "March 2024",
      description: "Developed our first AI automation tool and tested it with local businesses.",
      milestone: "MVP"
    },
    {
      icon: Rocket,
      title: "Going Public",
      date: "July 2024",
      description: "Launched our platform and onboarded our first 50 clients within 30 days.",
      milestone: "Launch"
    },
    {
      icon: TrendingUp,
      title: "Scaling Up",
      date: "Present",
      description: "Now serving 150+ businesses worldwide with AI solutions that actually work.",
      milestone: "Growth"
    }
  ];

  const founders = [
    {
      name: "Nitish Maurya",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader passionate about making AI accessible to every business and driving innovation.",
      education: "Computer Science Engineering",
      experience: "5+ years in AI/ML",
      focus: "Product Strategy & AI Research",
      quote: "The best AI is invisible AI."
    },
    {
      name: "Nitish Maurya",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack architect and technical innovator who believes in building simple, powerful solutions.",
      education: "Computer Science Engineering",
      experience: "4+ years in Full-Stack Development",
      focus: "System Architecture & DevOps",
      quote: "Great technology should feel like magic."
    },
    {
      name: "Nitish Maurya",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Product strategist and design thinker who creates experiences that users actually love.",
      education: "Product Management & Design",
      experience: "3+ years in Product Development",
      focus: "User Experience & Design",
      quote: "Good design is good business."
    }
  ];

  const values = [
    {
      icon: Rocket,
      title: "Move Fast, Learn Faster",
      description: "We iterate quickly, ship often, and learn from real user feedback to build better products."
    },
    {
      icon: Heart,
      title: "Customer-First Approach",
      description: "Every decision we make starts with one question: How does this help our customers succeed?"
    },
    {
      icon: Brain,
      title: "Simple AI Solutions",
      description: "We believe AI should be accessible, not intimidating. Complex problems deserve simple solutions."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building tools that work for businesses everywhere, regardless of size or industry."
    }
  ];

  const stats = [
    { icon: Code, value: '150+', label: 'Projects Delivered', color: 'text-[#0070f3]' },
    { icon: Star, value: '98%', label: 'Client Satisfaction', color: 'text-[#50e3c2]' },
    { icon: Clock, value: '24/7', label: 'AI Support', color: 'text-[#0070f3]' },
    { icon: Trophy, value: '10x', label: 'Average ROI', color: 'text-[#50e3c2]' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="section-padding relative">
        <div className="container-custom">
          {/* Hero Section */}
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#333] bg-[var(--card-bg)] backdrop-blur-sm mb-8">
              <Star className="w-4 h-4 text-[#0070f3]" />
              <span className="text-sm text-[#888]">About Upstraiq</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="block text-white">Built by Innovators,</span>
              <span className="gradient-text-accent">For Visionaries</span>
            </h1>
            
            <p className="text-body max-w-4xl mx-auto">
              We're not just another AI company. We're entrepreneurs who understand the challenges 
              of building and scaling a business in today's fast-paced world.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className={`mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-white mb-4">Our Journey</h2>
              <p className="text-body max-w-3xl mx-auto">From idea to impact in less than a year</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {journey.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index}
                    className="relative group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/10 to-[#50e3c2]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    <div className="card p-8 text-center h-full transition-all duration-500 group-hover:transform group-hover:-translate-y-3 group-hover:scale-105 relative overflow-hidden">
                      {/* Animated border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0070f3] via-[#50e3c2] to-[#0070f3] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl animate-gradient-shift bg-size-300"></div>
                      
                      {/* Timeline connector with animation */}
                      {index < journey.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#333] to-transparent group-hover:from-[#0070f3] transition-all duration-500"></div>
                      )}
                      
                      {/* Step number with pulse animation */}
                      <div className="absolute -top-3 left-6 w-6 h-6 bg-[#0070f3] rounded-full flex items-center justify-center text-white text-xs font-bold group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>

                      {/* Icon with enhanced animations */}
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-[#0070f3]/25">
                        <Icon className="w-7 h-7 text-white group-hover:animate-bounce" />
                      </div>

                      <div className="text-sm font-medium text-[#0070f3] mb-2 group-hover:text-[#50e3c2] transition-colors duration-300">{step.date}</div>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:scale-105 transition-transform duration-300">{step.title}</h3>
                      <p className="text-[#888] text-sm leading-relaxed mb-4 group-hover:text-[#aaa] transition-colors duration-300">{step.description}</p>
                      
                      {/* Milestone badge with animation */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--card-bg)] border border-[#333] text-[#50e3c2] text-xs font-medium rounded-full group-hover:border-[#0070f3] group-hover:bg-[#0070f3]/10 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-[#50e3c2] rounded-full group-hover:animate-ping"></div>
                        <span>{step.milestone}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Founders Section */}
          <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-white mb-4">Meet the Team</h2>
              <p className="text-body max-w-3xl mx-auto">Experienced professionals dedicated to your success</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {founders.map((founder, index) => (
                <div 
                  key={index}
                  className={`card p-8 cursor-pointer transition-all duration-500 hover:transform hover:-translate-y-4 hover:scale-105 relative overflow-hidden group ${
                    activeFounder === index ? 'border-[#0070f3] scale-105 shadow-2xl shadow-[#0070f3]/20' : ''
                  }`}
                  onClick={() => setActiveFounder(index)}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Animated background for active founder */}
                  {activeFounder === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 animate-pulse"></div>
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/10 to-[#50e3c2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className="text-center relative z-10">
                    {/* Profile image with enhanced animations */}
                    <div className="relative w-20 h-20 mx-auto mb-6 group">
                      <div className="w-full h-full rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {/* Active indicator */}
                      {activeFounder === index && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center animate-pulse">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                      )}
                      {/* Hover ring effect */}
                      <div className="absolute inset-0 rounded-xl border-2 border-[#0070f3] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#50e3c2] transition-colors duration-300">{founder.name}</h3>
                    <p className="text-[#0070f3] font-medium mb-4 group-hover:text-[#50e3c2] transition-colors duration-300">{founder.role}</p>
                    <p className="text-[#888] text-sm leading-relaxed mb-6 group-hover:text-[#aaa] transition-colors duration-300">{founder.bio}</p>

                    {/* Enhanced info badges */}
                    <div className="space-y-2 text-left">
                      <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-[var(--card-bg)] border border-[#333] group-hover:border-[#50e3c2] group-hover:bg-[#50e3c2]/5 transition-all duration-300">
                        <GraduationCap className="w-3 h-3 text-[#50e3c2] group-hover:animate-pulse" />
                        <span className="text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">{founder.education}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-[var(--card-bg)] border border-[#333] group-hover:border-[#0070f3] group-hover:bg-[#0070f3]/5 transition-all duration-300">
                        <Trophy className="w-3 h-3 text-[#0070f3] group-hover:animate-pulse" />
                        <span className="text-[#666] group-hover:text-[#0070f3] transition-colors duration-300">{founder.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Click ripple effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0070f3]/20 to-[#50e3c2]/20 opacity-0 group-active:opacity-100 transition-opacity duration-150 rounded-2xl"></div>
                </div>
              ))}
            </div>

            {/* Active Founder Spotlight */}
            <div className="card p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 text-sm text-[#0070f3] font-medium mb-4">
                    <Star className="w-4 h-4" />
                    <span>Team Spotlight</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {founders[activeFounder].name}
                  </h3>
                  <p className="text-[#0070f3] font-medium mb-6">{founders[activeFounder].role}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Focus Area:</h4>
                      <p className="text-[#888] text-sm">{founders[activeFounder].focus}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-white mb-2">Philosophy:</h4>
                      <p className="text-[#888] text-sm italic">"{founders[activeFounder].quote}"</p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <h4 className="font-medium text-white mb-6 text-center">Quick Stats</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#888] text-sm">Projects Led:</span>
                      <span className="font-medium text-[#0070f3]">50+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#888] text-sm">Team Size:</span>
                      <span className="font-medium text-[#50e3c2]">15+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#888] text-sm">Success Rate:</span>
                      <span className="font-medium text-[#0070f3]">98%</span>
                    </div>
                  </div>

                  <button
                    onClick={onContactClick}
                    className="btn-primary w-full mt-6 group"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-white mb-4">Our Values</h2>
              <p className="text-body max-w-3xl mx-auto">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="card p-8 h-full transition-all duration-500 hover:transform hover:-translate-y-4 hover:scale-105 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredValue(index)}
                    onMouseLeave={() => setHoveredValue(null)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/10 to-[#50e3c2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    {/* Animated border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0070f3] via-[#50e3c2] to-[#0070f3] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl animate-gradient-shift bg-size-300"></div>
                    
                    <div className="relative z-10">
                      {/* Enhanced icon with animations */}
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-[#0070f3]/25">
                        <Icon className="w-7 h-7 text-white group-hover:animate-pulse" />
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#50e3c2] transition-colors duration-300 group-hover:scale-105 transform-gpu">
                        {value.title}
                      </h3>
                      <p className="text-[#888] leading-relaxed group-hover:text-[#aaa] transition-colors duration-300">
                        {value.description}
                      </p>

                      {/* Animated hover content */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        hoveredValue === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="mt-4 pt-4 border-t border-[#333] group-hover:border-[#0070f3] transition-colors duration-300">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#0070f3] rounded-full animate-pulse"></div>
                            <div className="text-xs text-[#0070f3] font-medium animate-fade-in">Core Principle</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating particles effect */}
                    {hoveredValue === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-4 left-4 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                        <div className="absolute top-8 right-6 w-1 h-1 bg-[#50e3c2] rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                        <div className="absolute bottom-6 left-8 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className={`mb-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="card p-8">
              <div className="text-center mb-12">
                <h2 className="heading-lg text-white mb-4">Our Impact</h2>
                <p className="text-body">Numbers that tell our story</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="text-center group cursor-pointer"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Icon with enhanced animations */}
                      <div className="relative w-14 h-14 mx-auto mb-4">
                        {/* Pulsing background effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                        
                        {/* Main icon container */}
                        <div className="relative w-full h-full bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-[#0070f3]/25">
                          <Icon className="w-7 h-7 text-white group-hover:animate-bounce" />
                        </div>
                        
                        {/* Floating ring effect */}
                        <div className="absolute inset-0 border-2 border-[#0070f3] rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 animate-ping"></div>
                      </div>
                      
                      {/* Animated stat value */}
                      <div className="relative">
                        <div className={`text-3xl font-bold gradient-text-accent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                          {stat.value}
                        </div>
                        
                        {/* Underline animation */}
                        <div className="w-0 h-0.5 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] mx-auto group-hover:w-full transition-all duration-500"></div>
                      </div>
                      
                      <div className="text-[#888] text-sm font-medium group-hover:text-[#aaa] transition-colors duration-300">{stat.label}</div>
                      
                      {/* Hover particles */}
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-1/4 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                        <div className="absolute top-2 right-1/4 w-1 h-1 bg-[#50e3c2] rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                        <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-[#0070f3] rounded-full animate-ping" style={{ animationDelay: '400ms' }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="card p-12">
              <h2 className="heading-md text-white mb-4">Ready to Work Together?</h2>
              <p className="text-body max-w-2xl mx-auto mb-8">
                Let's discuss how we can help transform your business with AI solutions 
                that actually work and deliver real results.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onContactClick}
                  className="btn-primary group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="btn-secondary">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 