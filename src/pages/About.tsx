import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Code, 
  Lightbulb, 
  Coffee,
  Rocket,
  Star,
  Brain,
  Zap,
  Globe,
  Calendar,
  MapPin,
  GraduationCap,
  Trophy,
  ChevronRight,
  Sparkles,
  Clock
} from 'lucide-react';

interface AboutProps {
  currentPage: string;
  onContactClick?: () => void;
}

export const About: React.FC<AboutProps> = ({ currentPage, onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFounder, setActiveFounder] = useState(0);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Auto-rotate founders
    const founderInterval = setInterval(() => {
      setActiveFounder((prev) => (prev + 1) % founders.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(founderInterval);
    };
  }, []);

  const getThemeColors = () => {
    switch (currentPage) {
      case 'about':
        return {
          gradient: 'from-purple-600 to-indigo-600',
          bg: 'from-purple-50 to-indigo-50',
          accent: 'purple-600',
          light: 'purple-100',
          badge: 'from-purple-500 to-indigo-500'
        };
      default:
        return {
          gradient: 'from-blue-600 to-indigo-600',
          bg: 'from-blue-50 to-indigo-50',
          accent: 'blue-600',
          light: 'blue-100',
          badge: 'from-blue-500 to-indigo-500'
        };
    }
  };

  const themeColors = getThemeColors();

  const startupJourney = [
    {
      icon: Lightbulb,
      title: "The Idea",
      date: "January 2024",
      description: "Two friends frustrated with manual processes decided to build AI solutions that actually work for startups.",
      milestone: "Idea Formation"
    },
    {
      icon: Code,
      title: "First Lines of Code",
      date: "February 2024",
      description: "Started building our MVP in a garage, fueled by coffee and the vision of democratizing AI for everyone.",
      milestone: "Development Begins"
    },
    {
      icon: Rocket,
      title: "Beta Launch",
      date: "July 2024",
      description: "Launched our beta with 10 brave startups who believed in our vision. Their feedback shaped everything.",
      milestone: "Public Beta"
    },
    {
      icon: Users,
      title: "Growing Community",
      date: "Present",
      description: "Now serving 100+ beta users across 15 countries, with new features shipping every week.",
      milestone: "Scale & Growth"
    }
  ];

  const founders = [
    {
      name: "Alex Rivera",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Former Google AI researcher with 8 years in machine learning. Dropped out of a PhD to make AI accessible to every startup.",
      education: "Stanford CS, MIT AI Research",
      previousWork: "Google AI, Tesla Autopilot",
      passion: "Making AI simple enough for anyone to use",
      favoriteQuote: "The best AI is the one you don't even notice.",
      skills: ["Machine Learning", "Product Strategy", "Team Building"],
      personalFact: "Coded the first version while traveling across 12 countries"
    },
    {
      name: "Jordan Kim",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack wizard who scaled systems at Meta. Believes great technology should feel like magic, not complexity.",
      education: "UC Berkeley EECS, Y Combinator",
      previousWork: "Meta Infrastructure, Stripe Core",
      passion: "Building tools that make developers' lives easier",
      favoriteQuote: "Code is poetry, but deployment is the applause.",
      skills: ["System Architecture", "DevOps", "Frontend Magic"],
      personalFact: "Can debug production issues while rock climbing"
    },
    {
      name: "Sam Chen",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Design thinking meets startup hustle. Former Figma PM who understands that great UX is the difference between adoption and abandonment.",
      education: "Design at RISD, Business at Wharton",
      previousWork: "Figma Product, Airbnb Design",
      passion: "Creating experiences that feel obvious in hindsight",
      favoriteQuote: "The best products solve problems you didn't know you had.",
      skills: ["Product Strategy", "User Research", "Design Systems"],
      personalFact: "Redesigned our entire UI while on a meditation retreat"
    }
  ];

  const startupValues = [
    {
      icon: Rocket,
      title: "Move Fast, Learn Faster",
      description: "We ship every week and iterate based on real user feedback. Speed beats perfection in the startup world.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Startup-First Mindset",
      description: "We're building for founders like us. Every feature is tested by startups, for startups.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "AI Should Be Simple",
      description: "Complex AI problems deserve simple solutions. If it takes more than 5 minutes to set up, we've failed.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Globe,
      title: "Global by Default",
      description: "Great ideas come from everywhere. We're building a platform that works for startups across all time zones.",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const funStats = [
    { icon: Coffee, value: '2,847', label: 'Cups of Coffee', color: 'text-orange-600' },
    { icon: Code, value: '50K+', label: 'Lines of Code', color: 'text-blue-600' },
    { icon: Clock, value: '180', label: 'All-Nighters', color: 'text-purple-600' },
    { icon: Star, value: '4.9', label: 'User Rating', color: 'text-yellow-600' }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeColors.bg} relative overflow-hidden`}>
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl animate-float-3d" style={{ top: '10%', right: '5%' }}></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/25 to-purple-200/25 rounded-full blur-2xl animate-float-3d" style={{ bottom: '20%', left: '10%', animationDelay: '2s' }}></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl animate-float-3d" style={{ top: '50%', left: '80%', animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        
        {/* Hero Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${themeColors.badge} text-white text-sm font-bold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <Sparkles size={16} className="animate-pulse" />
            <span>🚀 Our Startup Story</span>
            <div className="px-2 py-1 bg-white/20 text-xs rounded-full font-bold">EST. 2024</div>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6">
            <span className="block">Built by Founders,</span>
            <span className={`block bg-gradient-to-r ${themeColors.gradient} bg-clip-text text-transparent animate-gradient-shift bg-size-300`}>
              For Founders
            </span>
          </h1>
          
          <p className="font-body text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We're not another AI company with decades of corporate baggage. We're a <span className="font-bold text-purple-600">scrappy startup</span> building 
            the AI tools we wish we had when we started our entrepreneurial journey.
          </p>
        </div>

        {/* Startup Journey Timeline */}
        <div className={`mb-24 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Journey So Far</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">From late-night coding sessions to serving startups worldwide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {startupJourney.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300 hover-3d"
                >
                  <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 card-3d">
                    {/* Timeline connector */}
                    {index < startupJourney.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300 z-10"></div>
                    )}
                    
                    {/* Step number */}
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>

                    <div className={`w-16 h-16 bg-gradient-to-r ${themeColors.badge} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon size={28} className="text-white" />
                    </div>

                    <div className="text-sm font-bold text-purple-600 mb-2">{step.date}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-xs font-bold rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{step.milestone}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Founders Section */}
        <div className={`mb-24 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet the Founding Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Three friends who left comfortable jobs to chase an impossible dream</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${activeFounder === index ? 'scale-105 shadow-2xl' : ''}`}
                onClick={() => setActiveFounder(index)}
              >
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 card-3d">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <Heart size={16} className="text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{founder.name}</h3>
                  <p className="text-purple-600 font-bold mb-4">{founder.role}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{founder.bio}</p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap size={16} className="text-blue-500" />
                      <span className="text-slate-600">{founder.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy size={16} className="text-orange-500" />
                      <span className="text-slate-600">{founder.previousWork}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="text-sm font-bold text-slate-900 mb-2">Favorite Quote:</div>
                    <p className="text-sm italic text-slate-600">"{founder.favoriteQuote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Founder Details */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${themeColors.badge} text-white text-sm font-bold mb-6`}>
                  <Star size={16} />
                  <span>Spotlight: {founders[activeFounder].name}</span>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {founders[activeFounder].name}
                </h3>
                <p className="text-xl text-purple-600 font-bold mb-6">{founders[activeFounder].role}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Passion:</h4>
                    <p className="text-slate-600">{founders[activeFounder].passion}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Fun Fact:</h4>
                    <p className="text-slate-600">{founders[activeFounder].personalFact}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Superpowers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {founders[activeFounder].skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-sm font-medium rounded-full border border-purple-200/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200/50">
                  <h4 className="font-bold text-slate-900 mb-6 text-center">Quick Facts</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Coffee consumed:</span>
                      <span className="font-bold text-orange-600">500+ cups</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Code commits:</span>
                      <span className="font-bold text-blue-600">1,200+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">User calls:</span>
                      <span className="font-bold text-green-600">200+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Sleep lost:</span>
                      <span className="font-bold text-red-600">Countless hours</span>
                    </div>
                  </div>

                  <button
                    onClick={onContactClick}
                    className={`w-full mt-6 bg-gradient-to-r ${themeColors.gradient} text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group`}
                  >
                    <span>Chat with {founders[activeFounder].name.split(' ')[0]}</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Startup Values */}
        <div className={`mb-24 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Startup Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">The principles that guide every decision we make</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {startupValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full card-3d">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>

                    {hoveredValue === index && (
                      <div className="mt-6 pt-6 border-t border-slate-200 animate-slide-in-up">
                        <div className="text-sm text-purple-600 font-bold">This drives everything we do</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fun Stats */}
        <div className={`mb-24 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Some fun stats from our startup journey</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {funStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300 hover-3d"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${themeColors.badge} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-6 transform-gpu`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Join Us CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-slate-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold mb-6 animate-pulse">
                <Users size={16} />
                <span>Join Our Startup Journey</span>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                Want to Build the Future With Us?
              </h3>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Whether you're a fellow founder, developer, or just someone who believes in our mission, 
                we'd love to connect and explore how we can grow together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={onContactClick}
                  className={`bg-gradient-to-r ${themeColors.gradient} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 group`}
                >
                  <Heart size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Let's Chat</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-100">Open DMs</div>
                  <div className="text-sm text-purple-200">We actually read them all</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 