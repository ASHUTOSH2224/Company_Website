import React, { useEffect, useState } from 'react';
import { ArrowRight, Bot, Zap, Globe, Smartphone, Brain, Code, Star, TrendingUp, Shield } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const rotatingWords = ['AI', 'Innovation', 'Technology', 'Solutions'];

  useEffect(() => {
    setIsVisible(true);

    // Rotate words every 3 seconds
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-50"></div>
      
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#0070f3] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#50e3c2] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#0070f3] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#50e3c2] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-12">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#333] bg-[var(--card-bg)] backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Star className="w-4 h-4 text-[#0070f3]" />
            <span className="text-sm text-[#888]">Leading AI Development Company</span>
          </div>

          {/* Main heading with rotating words */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="heading-xl leading-tight">
              <span className="block text-white">Automating Your Future</span>
              <span className="block text-white">with{' '}
                <span className="relative inline-block">
                  <span className="gradient-text-accent transition-all duration-500">
                    {rotatingWords[currentWordIndex]}
                </span>
                </span>
                </span>
            </h1>
            <p className="text-body max-w-4xl mx-auto leading-relaxed">
              We deliver next-generation web, mobile, and AI solutions—from smart e-commerce platforms 
              to intelligent CRMs that transform how your business operates and scales.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              onClick={onContactClick}
              className="btn-primary group text-lg px-8 py-4 relative overflow-hidden"
            >
              <span className="relative z-10">Book a Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button className="btn-secondary text-lg px-8 py-4 group">
              <span>Explore Our Services</span>
              <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Enhanced Services Preview Grid */}
          <div className={`mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-semibold text-white mb-12">What We Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Marketing */}
              <div className="group relative">
                <div className="service-card text-left h-full p-8 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">AI Marketing Automation</h3>
                  <p className="text-[#888] leading-relaxed mb-6">
                    Intelligent automation that optimizes campaigns, personalizes content, and drives conversions using advanced machine learning.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-[#666]">• Campaign Optimization</div>
                    <div className="text-sm text-[#666]">• Content Personalization</div>
                    <div className="text-sm text-[#666]">• Conversion Analytics</div>
                  </div>
                </div>
              </div>

              {/* Web & Mobile */}
              <div className="group relative">
                <div className="service-card text-left h-full p-8 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#50e3c2] to-[#0070f3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Web & Mobile Apps</h3>
                  <p className="text-[#888] leading-relaxed mb-6">
                    High-performance applications built with cutting-edge technologies, AI integration, and modern development practices.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-[#666]">• React & Next.js Apps</div>
                    <div className="text-sm text-[#666]">• Mobile Development</div>
                    <div className="text-sm text-[#666]">• AI Integration</div>
                  </div>
                </div>
              </div>

              {/* AI Solutions */}
              <div className="group relative">
                <div className="service-card text-left h-full p-8 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Bot size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Custom AI Solutions</h3>
                  <p className="text-[#888] leading-relaxed mb-6">
                    Custom chatbots, machine learning models, and intelligent automation systems tailored to your business needs.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-[#666]">• Custom Chatbots</div>
                    <div className="text-sm text-[#666]">• ML Model Development</div>
                    <div className="text-sm text-[#666]">• Process Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className={`mt-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="card p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '150+', label: 'Projects Delivered', icon: TrendingUp },
                  { value: '98%', label: 'Client Satisfaction', icon: Star },
                  { value: '24/7', label: 'AI Support', icon: Bot },
                  { value: '10x', label: 'ROI Improvement', icon: Shield }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold gradient-text-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[#888] text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Bottom */}
          <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#666] text-lg mb-4">
              Ready to transform your business with AI?
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-[#888] text-sm">
                <div className="w-2 h-2 bg-[#50e3c2] rounded-full"></div>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2 text-[#888] text-sm">
                <div className="w-2 h-2 bg-[#0070f3] rounded-full"></div>
                <span>Custom solutions</span>
              </div>
              <div className="flex items-center gap-2 text-[#888] text-sm">
                <div className="w-2 h-2 bg-[#50e3c2] rounded-full"></div>
                <span>Proven results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};