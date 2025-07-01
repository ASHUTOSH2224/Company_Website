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
              className={`relative transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`service-card ${activeStep === index ? 'border-[#0070f3]' : ''}`}>
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="relative mb-4">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${step.gradient} flex items-center justify-center mx-auto lg:mx-0`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0070f3] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="text-sm text-[#888] font-medium">{step.duration}</div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-[#50e3c2] text-sm font-medium mb-3">{step.subtitle}</p>
                    <p className="text-[#888] text-sm leading-relaxed mb-4">{step.description}</p>
                    <p className="text-[#666] text-xs leading-relaxed">{step.details}</p>
                  </div>

                                     {/* Deliverables */}
                   <div className="lg:col-span-3">
                     <h4 className="text-sm font-medium text-white mb-3">Deliverables:</h4>
                     <div className="space-y-2">
                       {step.deliverables.map((deliverable, idx) => (
                         <div key={idx} className="text-xs text-[#888]">
                           • {deliverable}
                         </div>
                       ))}
                     </div>
                   </div>
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