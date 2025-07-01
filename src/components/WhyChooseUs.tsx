import React, { useEffect, useRef } from 'react';
import { Zap, Palette, Globe, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Future-Proof Solutions',
    description: 'We build with tomorrow\'s technologies to keep you ahead of the curve and competitive landscape.',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Palette,
    title: 'Bespoke by Design',
    description: 'Your business is unique. Your solutions should be too. We tailor every project to your specific goals.',
    color: 'from-pink-500 to-purple-600'
  },
  {
    icon: Globe,
    title: 'Indian Ingenuity, Global Standards',
    description: 'Leveraging deep technical expertise from India to deliver world-class, reliable products.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Users,
    title: 'End-to-End Partnership',
    description: 'From initial idea to long-term support, we are with you at every step of your growth journey.',
    color: 'from-blue-500 to-cyan-600'
  }
];

export const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

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

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 animate-gradient-shift"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="scroll-animate" ref={(el) => el && itemsRef.current.push(el)}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient-animated">
                Your Strategic Partner in Innovation
              </span>
            </h2>
            <p className="font-body text-xl sm:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              We don't just deliver solutions—we forge lasting partnerships that drive your business forward.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => el && itemsRef.current.push(el)}
              className="scroll-animate group flex gap-8 p-10 rounded-3xl glass-dark hover-lift hover-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg animate-pulse-glow`}>
                  <feature.icon size={32} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-body text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Animated underline */}
                <div className="mt-4 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-16 w-6 h-6 bg-blue-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};