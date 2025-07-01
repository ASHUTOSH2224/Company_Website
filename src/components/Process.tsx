import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Lightbulb, 
  Code, 
  Rocket, 
  CheckCircle, 
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

  // Dynamic theming based on current page
  const getThemeColors = () => {
    switch (currentPage) {
      case 'services':
        return {
          primary: 'from-emerald-600 to-teal-600',
          secondary: 'from-emerald-100 to-teal-100',
          background: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50',
          accent: 'text-emerald-600',
          badge: 'from-emerald-100 to-teal-100 text-emerald-700'
        };
      case 'about':
        return {
          primary: 'from-purple-600 to-indigo-600',
          secondary: 'from-purple-100 to-indigo-100',
          background: 'bg-gradient-to-br from-purple-50 via-white to-indigo-50',
          accent: 'text-purple-600',
          badge: 'from-purple-100 to-indigo-100 text-purple-700'
        };
      case 'contact':
        return {
          primary: 'from-orange-600 to-red-600',
          secondary: 'from-orange-100 to-red-100',
          background: 'bg-gradient-to-br from-orange-50 via-white to-red-50',
          accent: 'text-orange-600',
          badge: 'from-orange-100 to-red-100 text-orange-700'
        };
      default: // home
        return {
          primary: 'from-blue-600 to-indigo-600',
          secondary: 'from-blue-100 to-indigo-100',
          background: 'bg-gradient-to-br from-slate-50 via-white to-blue-50',
          accent: 'text-blue-600',
          badge: 'from-blue-100 to-indigo-100 text-blue-700'
        };
    }
  };

  const themeColors = getThemeColors();

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
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      color: 'text-blue-600'
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
      gradient: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      color: 'text-emerald-600'
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
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      color: 'text-purple-600'
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
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      color: 'text-orange-600'
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

  const timeline = [
    { phase: 'Week 1-2', activity: 'Discovery & Planning', status: 'completed' },
    { phase: 'Week 3-8', activity: 'Development & Testing', status: 'current' },
    { phase: 'Week 9-10', activity: 'Deployment & Training', status: 'upcoming' },
    { phase: 'Ongoing', activity: 'Support & Optimization', status: 'future' }
  ];

  return (
    <section id="process" className={`section-padding ${themeColors.background} relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-24 right-24 w-96 h-96 bg-gradient-to-r ${themeColors.secondary.replace('to', 'to-').replace('from', 'from-')}/40 rounded-full blur-3xl animate-float`}></div>
        <div className={`absolute bottom-24 left-24 w-80 h-80 bg-gradient-to-r ${themeColors.secondary.replace('to', 'to-').replace('from', 'from-')}/30 rounded-full blur-2xl animate-float`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${themeColors.badge} text-sm font-semibold mb-6 animate-bounce-in`}>
            <Settings size={18} className="animate-pulse" />
            <span>Our Process</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="block">From Concept to</span>
            <span className={`bg-gradient-to-r ${themeColors.primary} bg-clip-text text-transparent`}>
              AI-Powered Reality
              </span>
            </h2>
          
          <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 4-step methodology ensures your AI project is delivered on time, 
            within budget, and exceeds your expectations every step of the way.
            </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          {/* Step Navigation */}
          <div className={`flex flex-col lg:flex-row items-center justify-center gap-4 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isCompleted = index < activeStep;
              
              return (
                <React.Fragment key={step.id}>
                  <div
                    className={`relative cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-110' : 'hover:scale-105'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-r ${step.gradient} border-transparent text-white shadow-xl` 
                        : isCompleted
                        ? 'bg-emerald-100 border-emerald-300 text-emerald-600'
                        : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle size={32} />
                      ) : (
                        <Icon size={32} />
                      )}
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className={`text-sm font-bold transition-colors duration-300 ${
                        isActive ? step.color : isCompleted ? 'text-emerald-600' : 'text-slate-400'
                      }`}>
                        Step {index + 1}
                      </div>
                      <div className={`text-xs mt-1 transition-colors duration-300 ${
                        isActive || isCompleted ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        {step.title}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    {isActive && (
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block w-16 h-1 bg-gradient-to-r from-slate-200 to-slate-300 relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${steps[index].gradient} transition-all duration-500 ${
                        index < activeStep ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className={`bg-gradient-to-br ${steps[activeStep].bgColor} rounded-3xl p-12 shadow-2xl border border-white/50 backdrop-blur-sm`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`w-20 h-20 bg-gradient-to-r ${steps[activeStep].gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    {React.createElement(steps[activeStep].icon, { size: 32, className: "text-white" })}
                  </div>
                  
                  <h3 className="font-display text-3xl font-bold text-slate-900 mb-2">
                    {steps[activeStep].title}
                    </h3>
                  
                  <p className={`text-lg font-semibold mb-4 ${steps[activeStep].color}`}>
                    {steps[activeStep].subtitle}
                  </p>
                  
                  <p className="text-slate-700 text-lg leading-relaxed mb-6">
                    {steps[activeStep].details}
                    </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={20} className={steps[activeStep].color} />
                      <span className="font-semibold text-slate-700">Duration: {steps[activeStep].duration}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={onContactClick}
                    className={`bg-gradient-to-r ${steps[activeStep].gradient} text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group hover:scale-105`}
                  >
                    <span>Start This Step</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
                
                <div>
                  <h4 className="font-display text-xl font-bold text-slate-900 mb-6">Key Deliverables</h4>
                  <div className="space-y-4">
                    {steps[activeStep].deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white/70 rounded-xl backdrop-blur-sm border border-white/50">
                        <div className={`w-8 h-8 bg-gradient-to-r ${steps[activeStep].gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <FileText size={16} className="text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Features */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Visualization */}
        <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-8 text-center">Project Timeline Example</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-orange-200 rounded-full"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 bg-white z-10 ${
                      item.status === 'completed' 
                        ? 'border-emerald-500 text-emerald-600'
                        : item.status === 'current'
                        ? 'border-blue-500 text-blue-600 animate-pulse'
                        : 'border-slate-300 text-slate-400'
                    }`}>
                      {item.status === 'completed' ? (
                        <CheckCircle size={24} />
                      ) : (
                        <div className={`w-3 h-3 rounded-full ${
                          item.status === 'current' ? 'bg-blue-500' : 'bg-slate-300'
                        }`}></div>
                      )}
                    </div>
                    
                    <div className="flex-1 p-4 bg-slate-50 rounded-xl">
                      <div className="font-bold text-slate-900">{item.phase}</div>
                      <div className="text-slate-600">{item.activity}</div>
                </div>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-8 right-8 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-white rounded-full blur-xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Start Your AI Journey?
              </h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a customized roadmap for your AI transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onContactClick}
                  className="bg-white text-purple-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 group"
                >
                  <span>Schedule Discovery Call</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                <button className="text-white border-2 border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                  <span>Download Process Guide</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};