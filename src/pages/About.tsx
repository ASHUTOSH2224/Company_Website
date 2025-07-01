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
      name: "Alex Rivera",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Former Google AI researcher passionate about making AI accessible to every business.",
      education: "Stanford Computer Science",
      experience: "8+ years in AI/ML",
      focus: "Product Strategy & AI Research",
      quote: "The best AI is invisible AI."
    },
    {
      name: "Jordan Kim",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack architect who scaled systems at Meta. Believes in simple, powerful solutions.",
      education: "UC Berkeley EECS",
      experience: "10+ years in Infrastructure",
      focus: "System Architecture & DevOps",
      quote: "Great technology should feel like magic."
    },
    {
      name: "Sam Chen",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Design-focused product leader who creates experiences that users actually love.",
      education: "Stanford Design Program",
      experience: "6+ years in Product",
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
                  >
                    <div className="card p-8 text-center h-full transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                      {/* Step number */}
                      <div className="absolute -top-3 left-6 w-6 h-6 bg-[#0070f3] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>

                      <div className="w-14 h-14 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div className="text-sm font-medium text-[#0070f3] mb-2">{step.date}</div>
                      <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-[#888] text-sm leading-relaxed mb-4">{step.description}</p>
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--card-bg)] border border-[#333] text-[#50e3c2] text-xs font-medium rounded-full">
                        <div className="w-1.5 h-1.5 bg-[#50e3c2] rounded-full"></div>
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
                  className={`card p-8 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 ${
                    activeFounder === index ? 'border-[#0070f3]' : ''
                  }`}
                  onClick={() => setActiveFounder(index)}
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-xl overflow-hidden mb-6">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1">{founder.name}</h3>
                    <p className="text-[#0070f3] font-medium mb-4">{founder.role}</p>
                    <p className="text-[#888] text-sm leading-relaxed mb-6">{founder.bio}</p>

                    <div className="space-y-2 text-left">
                      <div className="flex items-center gap-2 text-xs">
                        <GraduationCap className="w-3 h-3 text-[#50e3c2]" />
                        <span className="text-[#666]">{founder.education}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Trophy className="w-3 h-3 text-[#0070f3]" />
                        <span className="text-[#666]">{founder.experience}</span>
                      </div>
                    </div>
                  </div>
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
                    className="card p-8 h-full transition-all duration-300 hover:transform hover:-translate-y-2"
                    onMouseEnter={() => setHoveredValue(index)}
                    onMouseLeave={() => setHoveredValue(null)}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-[#888] leading-relaxed">
                      {value.description}
                    </p>

                    {hoveredValue === index && (
                      <div className="mt-4 pt-4 border-t border-[#333]">
                        <div className="text-xs text-[#0070f3] font-medium">Core Principle</div>
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
                      className="text-center group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className={`text-3xl font-bold gradient-text-accent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-[#888] text-sm font-medium">{stat.label}</div>
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