import React, { useEffect, useRef } from 'react';
import { 
  Smartphone, 
  Brain, 
  MessageSquare, 
  ShoppingCart, 
  Blocks, 
  Compass 
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'AI-Automated Apps',
    description: 'Intelligent web and mobile applications that streamline your workflows and enhance productivity.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Brain,
    title: 'AI Model Deployment',
    description: 'Development and deployment of custom AI models tailored to your specific data and business needs.',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: MessageSquare,
    title: 'Custom Chatbots',
    description: 'Engaging, intelligent chatbots and virtual assistants for superior customer interaction.',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: ShoppingCart,
    title: 'Intelligent E-commerce & CRM',
    description: 'Smart platforms that enhance customer relationships and boost sales through AI-driven insights.',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    icon: Blocks,
    title: 'Web3 & Blockchain',
    description: 'Pioneering decentralized solutions for the next generation of the internet and digital economy.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: Compass,
    title: 'Strategic AI Consulting',
    description: 'Expert guidance to integrate AI seamlessly into your business strategy and operations.',
    gradient: 'from-emerald-500 to-teal-600'
  }
];

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="scroll-animate" ref={(el) => el && cardsRef.current.push(el)}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient-animated">
                Our Expertise in Evolving Technologies
              </span>
            </h2>
            <p className="font-body text-xl sm:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              From AI automation to Web3 innovation, we deliver cutting-edge solutions 
              that position your business at the forefront of technological advancement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => el && cardsRef.current.push(el)}
              className="scroll-animate group relative glass-dark rounded-3xl p-8 hover-lift hover-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-3xl bg-slate-900/90 backdrop-blur-xl"></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <service.icon size={36} className="text-white" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-body text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center text-cyan-400 font-medium">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};