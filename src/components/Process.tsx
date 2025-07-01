import React, { useEffect, useRef } from 'react';
import { Search, Vibrate as Strategy, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We dive deep into your goals and challenges to understand your unique business landscape.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Strategy,
    title: 'Strategize',
    description: 'We architect a custom roadmap for success, aligning technology with your business objectives.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Our expert team builds your solution with precision, using cutting-edge technologies.',
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: Rocket,
    title: 'Deploy & Scale',
    description: 'We launch and provide ongoing support for seamless growth and continuous optimization.',
    color: 'from-pink-500 to-rose-600'
  }
];

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

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

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-purple-500/3 to-blue-500/3"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-purple-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="scroll-animate" ref={(el) => el && stepsRef.current.push(el)}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient-animated">
                From Concept to Creation: A Path to Success
              </span>
            </h2>
            <p className="font-body text-xl sm:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Our proven methodology ensures your project transforms from vision to reality with precision and excellence.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Enhanced connection line with animation */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 z-0 rounded-full animate-gradient-shift"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group text-center">
                <div
                  ref={(el) => el && stepsRef.current.push(el)}
                  className="scroll-animate"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-10">
                    <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl animate-pulse-glow`}>
                      <step.icon size={36} className="text-white" />
                    </div>
                    
                    {/* Enhanced step number */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg animate-bounce">
                      {index + 1}
                    </div>

                    {/* Connecting dots for mobile */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="glass-dark rounded-3xl p-8 group-hover:border-cyan-500/50 transition-all duration-500 hover-lift hover-glow">
                    <h3 className="font-display text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-body text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-6 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${step.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};