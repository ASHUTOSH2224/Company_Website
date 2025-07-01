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
      number: '150+',
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card p-6 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
                <div className="text-xs text-[#888]">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`service-card cursor-pointer ${
                activeFeature === index ? 'border-[#0070f3]' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed mb-3">{feature.description}</p>
                  <p className="text-[#666] text-xs leading-relaxed">{feature.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h3 className="heading-md text-white mb-12">What You Get</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`card p-6 text-center transform transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{benefit.title}</h4>
                <p className="text-[#888] text-sm leading-relaxed">{benefit.description}</p>
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