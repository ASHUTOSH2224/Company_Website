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
  Shield,
  Search,
  MessageSquare,
  FileText,
  Settings,
  Play,
  Building
} from 'lucide-react';

interface CompanyProps {
  currentPage: string;
  onContactClick: () => void;
}

const Company: React.FC<CompanyProps> = ({ currentPage, onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [activeFounder, setActiveFounder] = useState(0);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-progress through process steps
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    // Auto-rotate founders every 6 seconds
    const founderInterval = setInterval(() => {
      setActiveFounder((prev) => (prev + 1) % founders.length);
    }, 6000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(founderInterval);
    };
  }, []);

  const processSteps = [
    {
      id: 'discovery',
      icon: Search,
      title: 'Discovery & Analysis',
      subtitle: 'Understanding Your Vision',
      description: 'We dive deep into your business needs, challenges, and goals to create a comprehensive roadmap.',
      details: 'Our team conducts thorough stakeholder interviews, process mapping, and technical assessments to understand your current state and desired outcomes.',
      duration: '1-2 weeks',
      deliverables: ['Requirements Document', 'Technical Assessment', 'Project Roadmap'],
      gradient: 'from-[#0070f3] to-[#50e3c2]',
      color: 'text-[#0070f3]'
    },
    {
      id: 'planning',
      icon: Lightbulb,
      title: 'Strategy & Planning',
      subtitle: 'Crafting the Perfect Solution',
      description: 'We design a tailored AI strategy that aligns with your business objectives and technical requirements.',
      details: 'Our experts create detailed technical specifications, architecture designs, and implementation timelines customized for your needs.',
      duration: '1-2 weeks',
      deliverables: ['Solution Architecture', 'Implementation Plan', 'Resource Allocation'],
      gradient: 'from-[#0070f3] to-[#50e3c2]',
      color: 'text-[#50e3c2]'
    },
    {
      id: 'development',
      icon: Code,
      title: 'Development & Integration',
      subtitle: 'Building Your AI Solution',
      description: 'Our experienced team develops and integrates your custom AI solution with precision and quality.',
      details: 'Using agile methodologies, we build, test, and refine your solution with regular checkpoints and feedback loops.',
      duration: '4-12 weeks',
      deliverables: ['MVP Development', 'Testing Reports', 'Integration Setup'],
      gradient: 'from-[#0070f3] to-[#50e3c2]',
      color: 'text-[#0070f3]'
    },
    {
      id: 'deployment',
      icon: Rocket,
      title: 'Launch & Optimization',
      subtitle: 'Going Live Successfully',
      description: 'We ensure a smooth deployment and provide ongoing optimization to maximize your ROI.',
      details: 'Our team handles deployment, monitoring, and continuous optimization while providing comprehensive training and support.',
      duration: '1-2 weeks',
      deliverables: ['Live Deployment', 'Training Materials', 'Support Documentation'],
      gradient: 'from-[#0070f3] to-[#50e3c2]',
      color: 'text-[#50e3c2]'
    }
  ];

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

  const features = [
    {
      icon: MessageSquare,
      title: 'Continuous Communication',
      description: 'Regular updates and feedback sessions throughout the project'
    },
    {
      icon: Calendar,
      title: 'Agile Methodology',
      description: 'Flexible approach with iterative development and quick adaptations'
    },
    {
      icon: Target,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks at every stage'
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
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="container-custom">
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#333] bg-black backdrop-blur-sm mb-8 lg:mb-12">
              <Building className="w-5 h-5 text-[#0070f3]" />
              <span className="text-base text-[#888] font-medium">About UPSTRAIQ</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8">
              <span className="block text-white">Built by Innovators,</span>
              <span className="gradient-text-accent">For Visionaries</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto mb-12 lg:mb-16 leading-relaxed">
              We're not just another AI company. We're entrepreneurs who understand the challenges 
              of building and scaling a business in today's fast-paced world.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {stats.slice(0, 4).map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold gradient-text-accent mb-2">{stat.value}</div>
                    <div className="text-sm lg:text-base text-[#888] font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8">Our Journey</h2>
            <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto leading-relaxed">From idea to impact in less than a year</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {journey.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-black border border-[#333] rounded-2xl p-8 lg:p-10 text-center h-full transition-all duration-500 hover:transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden hover:border-[#0070f3] hover:shadow-2xl hover:shadow-[#0070f3]/20">
                    {/* Step number */}
                    <div className="absolute -top-3 left-6 lg:left-8 w-8 h-8 bg-[#0070f3] rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:animate-pulse shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white group-hover:animate-bounce" />
                    </div>

                    <div className="text-sm lg:text-base font-semibold text-[#0070f3] mb-3">{step.date}</div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">{step.title}</h3>
                    <p className="text-base lg:text-lg text-[#888] leading-relaxed mb-6 lg:mb-8">{step.description}</p>
                    
                    {/* Milestone badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-black border-2 border-[#333] text-[#50e3c2] text-sm font-semibold rounded-xl">
                      <div className="w-2 h-2 bg-[#50e3c2] rounded-full"></div>
                      <span>{step.milestone}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-8 lg:py-16">
        <div className="container-custom">
          <div className={`text-center mb-8 lg:mb-16 px-4 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl lg:text-4xl font-bold mb-3 lg:mb-4">
              <span className="block text-white">Our Development</span>
              <span className="gradient-text-accent">Process</span>
            </h2>
            <p className="text-sm lg:text-base text-[#888] max-w-2xl mx-auto">
              Our proven 4-step methodology ensures your AI project is delivered on time, 
              within budget, and exceeds your expectations every step of the way.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6 lg:space-y-8 mb-12 lg:mb-20 px-4">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`relative group transform transition-all duration-700 hover:scale-[1.02] lg:hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`card overflow-hidden ${
                  activeStep === index ? 'border-[#0070f3] scale-[1.02] lg:scale-105 shadow-2xl shadow-[#0070f3]/20' : ''
                } group-hover:border-[#50e3c2] group-hover:transform group-hover:-translate-y-1 lg:group-hover:-translate-y-2`}>
                  
                  <div className="p-4 lg:p-6">
                    <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                      {/* Step Icon & Number */}
                      <div className="lg:col-span-2 text-center lg:text-left">
                        <div className="relative mb-3 lg:mb-4 group/icon">
                          <div className={`relative w-12 h-12 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-r ${step.gradient} flex items-center justify-center mx-auto lg:mx-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <step.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white group-hover:animate-bounce" />
                          </div>
                          
                          <div className={`absolute -top-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 bg-[#0070f3] rounded-full flex items-center justify-center text-white text-xs font-bold group-hover:scale-125 transition-transform duration-300 ${
                            activeStep === index ? 'animate-pulse' : ''
                          }`}>
                            {index + 1}
                          </div>
                        </div>
                        <div className="text-xs lg:text-sm text-[#888] font-medium">{step.duration}</div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-7">
                        <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 group-hover:text-[#50e3c2] transition-colors duration-300">{step.title}</h3>
                        <p className="text-[#50e3c2] text-sm font-medium mb-3">{step.subtitle}</p>
                        <p className="text-sm lg:text-base text-[#888] leading-relaxed mb-3 lg:mb-4">{step.description}</p>
                        <p className="text-xs lg:text-sm text-[#666] leading-relaxed">{step.details}</p>
                      </div>

                      {/* Deliverables */}
                      <div className="lg:col-span-3">
                        <h4 className="text-sm font-medium text-white mb-3">Deliverables:</h4>
                        <div className="space-y-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <div 
                              key={idx} 
                              className="text-xs lg:text-sm text-[#888] flex items-center gap-2"
                            >
                              <div className="w-1 h-1 bg-[#0070f3] rounded-full"></div>
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-4 lg:my-6">
                    <div className="w-px h-6 lg:h-8 bg-[#333]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Process Features */}
          <div className="text-center mb-8 lg:mb-12 px-4">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-8 lg:mb-12">What Makes Our Process Different</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="card p-4 lg:p-6 text-center transition-all duration-500 hover:transform hover:-translate-y-1 lg:hover:-translate-y-2"
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h4 className="text-base lg:text-lg font-semibold text-white mb-2 lg:mb-3">{feature.title}</h4>
                  <p className="text-sm lg:text-base text-[#888] leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 lg:py-16 bg-[var(--card-bg)]">
        <div className="container-custom">
          <div className={`text-center mb-8 lg:mb-12 px-4 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">Meet the Team</h2>
            <p className="text-sm lg:text-base text-[#888] max-w-2xl mx-auto">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12 px-4">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className={`card p-6 lg:p-8 cursor-pointer transition-all duration-500 hover:transform hover:-translate-y-2 lg:hover:-translate-y-4 hover:scale-105 relative overflow-hidden group ${
                  activeFounder === index ? 'border-[#0070f3] scale-105 shadow-2xl shadow-[#0070f3]/20' : ''
                }`}
                onClick={() => setActiveFounder(index)}
              >
                <div className="text-center relative z-10">
                  {/* Profile image */}
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 lg:mb-6 group">
                    <div className="w-full h-full rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {activeFounder === index && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center animate-pulse">
                        <Star className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-1">{founder.name}</h3>
                  <p className="text-[#0070f3] font-medium mb-3 lg:mb-4 text-sm lg:text-base">{founder.role}</p>
                  <p className="text-sm lg:text-base text-[#888] leading-relaxed mb-4 lg:mb-6">{founder.bio}</p>

                  {/* Info badges */}
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-[var(--card-bg)] border border-[#333]">
                      <GraduationCap className="w-3 h-3 text-[#50e3c2]" />
                      <span className="text-[#666] truncate">{founder.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-[var(--card-bg)] border border-[#333]">
                      <Trophy className="w-3 h-3 text-[#0070f3]" />
                      <span className="text-[#666] truncate">{founder.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Founder Spotlight */}
          <div className="card p-6 lg:p-8 mx-4">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 text-sm text-[#0070f3] font-medium mb-3 lg:mb-4">
                  <Star className="w-4 h-4" />
                  <span>Team Spotlight</span>
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                  {founders[activeFounder].name}
                </h3>
                <p className="text-[#0070f3] font-medium mb-4 lg:mb-6">{founders[activeFounder].role}</p>

                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">Focus Area:</h4>
                    <p className="text-sm lg:text-base text-[#888]">{founders[activeFounder].focus}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-white mb-2">Philosophy:</h4>
                    <p className="text-sm lg:text-base text-[#888] italic">"{founders[activeFounder].quote}"</p>
                  </div>
                </div>
              </div>

              <div className="card p-4 lg:p-6">
                <h4 className="font-medium text-white mb-4 lg:mb-6 text-center">Quick Stats</h4>
                
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm lg:text-base text-[#888]">Projects Led:</span>
                    <span className="font-medium text-[#0070f3]">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm lg:text-base text-[#888]">Team Size:</span>
                    <span className="font-medium text-[#50e3c2]">15+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm lg:text-base text-[#888]">Success Rate:</span>
                    <span className="font-medium text-[#0070f3]">98%</span>
                  </div>
                </div>

                <button
                  onClick={onContactClick}
                  className="btn-primary w-full mt-4 lg:mt-6 group text-sm lg:text-base"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 lg:py-16">
        <div className="container-custom">
          <div className={`text-center mb-8 lg:mb-12 px-4 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">Our Values</h2>
            <p className="text-sm lg:text-base text-[#888] max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 px-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="card p-6 lg:p-8 h-full transition-all duration-500 hover:transform hover:-translate-y-2 lg:hover:-translate-y-4 hover:scale-105 relative overflow-hidden group"
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:animate-pulse" />
                    </div>

                    <h3 className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4 group-hover:text-[#50e3c2] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm lg:text-base text-[#888] leading-relaxed">
                      {value.description}
                    </p>

                    {/* Hover content */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      hoveredValue === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-[#333]">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#0070f3] rounded-full animate-pulse"></div>
                          <div className="text-xs text-[#0070f3] font-medium">Core Principle</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-black border border-[#333] rounded-3xl p-12 lg:p-16 hover:border-[#0070f3] transition-colors duration-300">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8">Ready to Work Together?</h2>
              <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto mb-12 lg:mb-16 leading-relaxed">
                Let's discuss how we can help transform your business with AI solutions 
                that actually work and deliver real results.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
                <button
                  onClick={onContactClick}
                  className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={onContactClick}
                  className="border-2 border-[#333] bg-black text-white px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-semibold hover:border-[#0070f3] hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <Calendar className="w-6 h-6" />
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

export default Company;