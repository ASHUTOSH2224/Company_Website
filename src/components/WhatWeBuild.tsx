import React, { useState, useEffect } from 'react';
import { Brain, Code, Bot, TrendingUp, Star, Shield } from 'lucide-react';

interface WhatWeBuildProps {
  onContactClick?: () => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onContactClick }) => {
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

    const section = document.getElementById('what-we-build');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-we-build" className="py-16 lg:py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#333] bg-black backdrop-blur-sm mb-8 lg:mb-12">
            <Code className="w-5 h-5 text-[#0070f3]" />
            <span className="text-base text-[#888] font-medium">What We Build</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8">
            Innovative <span className="gradient-text-accent">Solutions</span>
          </h2>
          <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto leading-relaxed">
            From intelligent automation to cutting-edge applications, we create technology that transforms businesses and drives growth.
          </p>
        </div>

        {/* Services Preview Grid */}
        <div className={`transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {/* AI Marketing */}
            <div className="group relative">
              <div className="bg-black border-2 border-[#333] rounded-2xl p-8 lg:p-10 text-left h-full transition-all duration-300 group-hover:transform group-hover:-translate-y-3 group-hover:scale-105 hover:border-[#0070f3] hover:shadow-2xl hover:shadow-[#0070f3]/20">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Brain size={28} className="lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 group-hover:text-[#50e3c2] transition-colors duration-300">
                  AI Marketing Automation
                </h3>
                <p className="text-base lg:text-lg text-[#888] leading-relaxed mb-6 lg:mb-8 group-hover:text-[#aaa] transition-colors duration-300">
                  Intelligent automation that optimizes campaigns, personalizes content, and drives conversions using advanced machine learning.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm lg:text-base text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#0070f3] rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Campaign Optimization</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm lg:text-base text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#0070f3] rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Content Personalization</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm lg:text-base text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#0070f3] rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Conversion Analytics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Web & Mobile */}
            <div className="group relative">
              <div className="bg-black border-2 border-[#333] rounded-2xl p-8 lg:p-10 text-left h-full transition-all duration-300 group-hover:transform group-hover:-translate-y-3 group-hover:scale-105 hover:border-[#0070f3] hover:shadow-2xl hover:shadow-[#0070f3]/20">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#50e3c2] to-[#0070f3] rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Code size={28} className="lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 group-hover:text-[#50e3c2] transition-colors duration-300">
                  Web & Mobile Apps
                </h3>
                <p className="text-base lg:text-lg text-[#888] leading-relaxed mb-6 lg:mb-8 group-hover:text-[#aaa] transition-colors duration-300">
                  High-performance applications built with cutting-edge technologies, AI integration, and modern development practices.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm lg:text-base text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#0070f3] rounded-full flex-shrink-0"></div>
                    <span className="font-medium">React & Next.js Apps</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm lg:text-base text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#0070f3] rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Mobile Development</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm lg:text-base text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#0070f3] rounded-full flex-shrink-0"></div>
                    <span className="font-medium">AI Integration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Solutions */}
            <div className="group relative">
              <div className="bg-black border-2 border-[#333] rounded-2xl p-8 lg:p-10 text-left h-full transition-all duration-300 group-hover:transform group-hover:-translate-y-3 group-hover:scale-105 hover:border-[#0070f3] hover:shadow-2xl hover:shadow-[#0070f3]/20">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Bot size={28} className="lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 group-hover:text-[#50e3c2] transition-colors duration-300">
                  Custom AI Solutions
                </h3>
                <p className="text-base lg:text-lg text-[#888] leading-relaxed mb-6 lg:mb-8 group-hover:text-[#aaa] transition-colors duration-300">
                  Custom chatbots, machine learning models, and intelligent automation systems tailored to your business needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm lg:text-base text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#0070f3] rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Custom Chatbots</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm lg:text-base text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#0070f3] rounded-full flex-shrink-0"></div>
                    <span className="font-medium">ML Model Development</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm lg:text-base text-[#666] group-hover:text-[#50e3c2] transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#0070f3] rounded-full flex-shrink-0"></div>
                    <span className="font-medium">Process Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-black border border-[#333] rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto hover:border-[#0070f3] transition-colors duration-300">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { value: '150+', label: 'Projects Delivered', icon: TrendingUp },
                { value: '98%', label: 'Client Satisfaction', icon: Star },
                { value: '24/7', label: 'AI Support', icon: Bot },
                { value: '10x', label: 'ROI Improvement', icon: Shield }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold gradient-text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-[#888] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
