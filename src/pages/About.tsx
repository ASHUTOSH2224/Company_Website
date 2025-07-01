import React from 'react';
import { Users, Target, Award, Globe, CheckCircle, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Target },
    { number: '25+', label: 'Countries Served', icon: Globe },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give your business a competitive advantage.',
      icon: '🚀',
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We work closely with you to understand your unique challenges and goals.',
      icon: '🎯',
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to project delivery.',
      icon: '⭐',
    },
    {
      title: 'Continuous Learning',
      description: 'Our team constantly evolves and learns to bring you the most advanced and effective solutions.',
      icon: '📚',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-founder',
      image: '/api/placeholder/150/150',
      bio: '15+ years in AI and automation. Former tech lead at Google.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-founder',
      image: '/api/placeholder/150/150',
      bio: 'PhD in Machine Learning. Expert in scalable AI architectures.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: '/api/placeholder/150/150',
      bio: 'Product strategist with 10+ years experience in enterprise software.',
    },
    {
      name: 'David Kim',
      role: 'Lead AI Engineer',
      image: '/api/placeholder/150/150',
      bio: 'Specialist in NLP and computer vision. Published researcher.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100/80 border border-blue-200/50 text-blue-700 text-sm font-medium mb-8 animate-fade-in-down">
              <Users size={16} />
              <span>About Upstraiq</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 animate-fade-in-up">
              Empowering Businesses Through
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AI Innovation</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-12 animate-fade-in-up animate-delay-200">
              Founded in 2020, Upstraiq has been at the forefront of AI transformation, helping businesses unlock their potential through intelligent automation and data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
                Our Story & Mission
              </h2>
              <div className="space-y-6 text-slate-600">
                <p className="text-lg leading-relaxed">
                  Upstraiq was born from a simple belief: that artificial intelligence should be accessible, practical, and transformative for businesses of all sizes. Our founders, both veterans of the tech industry, saw an opportunity to bridge the gap between cutting-edge AI research and real-world business applications.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to be a trusted partner for organizations worldwide, delivering solutions that not only meet immediate needs but also position our clients for future success in an increasingly digital world.
                </p>
                <div className="flex items-start gap-3 p-6 bg-blue-50/80 rounded-xl border border-blue-100/50">
                  <CheckCircle size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Our Mission</h4>
                    <p className="text-slate-600">To democratize AI technology and empower businesses to achieve extraordinary growth through intelligent automation and data-driven insights.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-2xl border border-blue-100/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">2020</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Company Founded</h4>
                      <p className="text-sm text-slate-600">Started with a vision to make AI accessible</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">2022</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">100+ Clients Milestone</h4>
                      <p className="text-sm text-slate-600">Reached our first major milestone</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">2024</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Global Expansion</h4>
                      <p className="text-sm text-slate-600">Serving clients across 25+ countries</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-6 animate-fade-in-up">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-slate-900 text-lg mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-6 animate-fade-in-up">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Our experienced leaders bring decades of expertise in AI, technology, and business strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up animate-delay-200">
            Let's discuss how our AI solutions can drive your business forward.
          </p>
          <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover-lift flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto animate-fade-in-up animate-delay-400">
            <span>Start Your Journey</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
}; 