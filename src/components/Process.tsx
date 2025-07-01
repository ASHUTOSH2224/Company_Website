import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Lightbulb, 
  Code, 
  Rocket, 
  ArrowRight,
  MessageSquare,
  FileText,
  Settings,
  Users,
  Calendar,
  Target
} from 'lucide-react';

interface ProcessProps {
  onContactClick?: () => void;
  currentPage?: string;
}

export const Process: React.FC<ProcessProps> = ({ onContactClick, currentPage = 'home' }) => {
  const [activeStep, setActiveStep] = useState(0);
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

    const section = document.getElementById('process');
    if (section) observer.observe(section);

    // Auto-progress through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const steps = [
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

  return (
    <section id="process" className="section-padding relative">
      <div className="container-custom">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="heading-lg mb-6">
            <span className="block text-white">Our Development</span>
            <span className="gradient-text-accent">Process</span>
          </h2>
          
          <p className="text-body max-w-3xl mx-auto">
            Our proven 4-step methodology ensures your AI project is delivered on time, 
            within budget, and exceeds your expectations every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative group transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-lg"></div>
              
              <div className={`service-card relative overflow-hidden ${
                activeStep === index ? 'border-[#0070f3] scale-105 shadow-2xl shadow-[#0070f3]/20' : ''
              } group-hover:border-[#50e3c2] group-hover:transform group-hover:-translate-y-2`}>
                {/* Animated border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg animate-gradient-shift bg-size-300`}></div>
                
                {/* Active step pulse animation */}
                {activeStep === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 animate-pulse rounded-lg"></div>
                )}
                
                <div className="relative z-10">
                  <div className="grid lg:grid-cols-12 gap-6 items-center">
                    {/* Enhanced Step Number & Icon */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                      <div className="relative mb-4 group/icon">
                        {/* Pulsing background effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-20 rounded-lg group-hover:opacity-40 transition-opacity duration-500 animate-pulse w-16 h-16 mx-auto lg:mx-0`}></div>
                        
                        {/* Main icon container */}
                        <div className={`relative w-16 h-16 rounded-lg bg-gradient-to-r ${step.gradient} flex items-center justify-center mx-auto lg:mx-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-[#0070f3]/25`}>
                          <step.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                        </div>
                        
                        {/* Enhanced step number */}
                        <div className={`absolute -top-2 -right-2 w-6 h-6 bg-[#0070f3] rounded-full flex items-center justify-center text-white text-xs font-bold group-hover:scale-125 transition-transform duration-300 ${
                          activeStep === index ? 'animate-pulse' : ''
                        }`}>
                          {index + 1}
                        </div>
                        
                        {/* Floating ring effect */}
                        <div className="absolute inset-0 border-2 border-[#0070f3] rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-ping w-16 h-16 mx-auto lg:mx-0"></div>
                      </div>
                      <div className="text-sm text-[#888] font-medium group-hover:text-[#50e3c2] transition-colors duration-300">{step.duration}</div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="lg:col-span-7">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#50e3c2] transition-colors duration-300 group-hover:scale-105 transform-gpu">{step.title}</h3>
                      <p className="text-[#50e3c2] text-sm font-medium mb-3 group-hover:text-[#0070f3] transition-colors duration-300">{step.subtitle}</p>
                      <p className="text-[#888] text-sm leading-relaxed mb-4 group-hover:text-[#aaa] transition-colors duration-300">{step.description}</p>
                      <p className="text-[#666] text-xs leading-relaxed group-hover:text-[#888] transition-colors duration-300">{step.details}</p>
                    </div>

                    {/* Enhanced Deliverables */}
                    <div className="lg:col-span-3">
                      <h4 className="text-sm font-medium text-white mb-3 group-hover:text-[#50e3c2] transition-colors duration-300">Deliverables:</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div 
                            key={idx} 
                            className="text-xs text-[#888] group-hover:text-[#aaa] transition-all duration-300 hover:translate-x-2 flex items-center gap-2"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div className="w-1 h-1 bg-[#0070f3] rounded-full group-hover:animate-ping"></div>
                            {deliverable}
                          </div>
                        ))}
                      </div>
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

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="w-px h-8 bg-[#333]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h3 className="heading-md text-white mb-12">What Makes Our Process Different</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`card p-6 text-center transform transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-[#888] text-sm leading-relaxed">{feature.description}</p>
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
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};