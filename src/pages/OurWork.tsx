import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Award, 
  ArrowRight,
  Star,
  Eye,
  Code,
  Zap,
  Globe,
  Smartphone,
  Brain,
  ShoppingCart,
  Shield,
  Bot,
  Database,
  MessageCircle,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';

interface OurWorkProps {
  currentPage: string;
  onContactClick: () => void;
}

const OurWork: React.FC<OurWorkProps> = ({ currentPage, onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [textComplete, setTextComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setTextComplete(true), 1500);
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      description: "Complete e-commerce solution with AI recommendations, intelligent inventory management, and predictive analytics.",
      category: 'ai',
      tags: ['React', 'Python', 'TensorFlow', 'AWS'],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "dQw4w9WgXcQ", // Replace with actual project video
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/upstraiq/ai-ecommerce",
      year: "2024",
      duration: "6 months",
      team: "8 people",
      client: "TechStore Inc.",
      results: "+150% conversion rate",
      icon: ShoppingCart,
      color: "from-[#0070f3] to-[#50e3c2]"
    },
    {
      id: 2,
      title: "Smart Healthcare Management System",
      description: "AI-driven healthcare platform with patient management, diagnosis assistance, and treatment recommendations.",
      category: 'ai',
      tags: ['Vue.js', 'FastAPI', 'PyTorch', 'Docker'],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "dQw4w9WgXcQ",
      liveUrl: "https://healthcare-platform.com",
      githubUrl: "https://github.com/upstraiq/healthcare-ai",
      year: "2024",
      duration: "8 months",
      team: "12 people",
      client: "MediCore Solutions",
      results: "40% faster diagnosis",
      icon: Brain,
      color: "from-[#50e3c2] to-[#0070f3]"
    },
    {
      id: 3,
      title: "Cryptocurrency Trading Platform",
      description: "Advanced trading platform with real-time analytics, automated trading bots, and portfolio management.",
      category: 'web',
      tags: ['Next.js', 'Node.js', 'Web3', 'Blockchain'],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "dQw4w9WgXcQ",
      liveUrl: "https://crypto-platform.com",
      githubUrl: "https://github.com/upstraiq/crypto-trading",
      year: "2023",
      duration: "10 months",
      team: "15 people",
      client: "CryptoMax Ltd.",
      results: "$50M+ trading volume",
      icon: Shield,
      color: "from-[#8b5cf6] to-[#50e3c2]"
    },
    {
      id: 4,
      title: "AI Customer Service Chatbot",
      description: "Intelligent chatbot with natural language processing, multi-language support, and seamless integrations.",
      category: 'ai',
      tags: ['Python', 'NLP', 'Rasa', 'MongoDB'],
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "dQw4w9WgXcQ",
      liveUrl: "https://chatbot-demo.com",
      githubUrl: "https://github.com/upstraiq/ai-chatbot",
      year: "2024",
      duration: "4 months",
      team: "6 people",
      client: "ServicePro Inc.",
      results: "85% automation rate",
      icon: MessageCircle,
      color: "from-[#0070f3] to-[#8b5cf6]"
    },
    {
      id: 5,
      title: "Fitness Tracking Mobile App",
      description: "Cross-platform fitness app with AI workout plans, nutrition tracking, and social features.",
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Machine Learning'],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "dQw4w9WgXcQ",
      liveUrl: "https://fittrack-app.com",
      githubUrl: "https://github.com/upstraiq/fitness-app",
      year: "2023",
      duration: "5 months",
      team: "7 people",
      client: "FitLife Corp.",
      results: "100K+ downloads",
      icon: Smartphone,
      color: "from-[#50e3c2] to-[#0070f3]"
    },
    {
      id: 6,
      title: "Real Estate Management Platform",
      description: "Comprehensive property management system with virtual tours, AI pricing, and tenant management.",
      category: 'web',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', '3D'],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoId: "dQw4w9WgXcQ",
      liveUrl: "https://realestate-platform.com",
      githubUrl: "https://github.com/upstraiq/realestate",
      year: "2024",
      duration: "7 months",
      team: "10 people",
      client: "PropertyMax LLC",
      results: "300+ properties managed",
      icon: Globe,
      color: "from-[#8b5cf6] to-[#0070f3]"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechStore Inc.",
      content: "UPSTRAIQ transformed our e-commerce platform with cutting-edge AI. The results exceeded all our expectations!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      project: "AI-Powered E-commerce Platform"
    },
    {
      name: "Dr. Michael Chen",
      position: "Director, MediCore Solutions",
      content: "The healthcare management system has revolutionized our patient care process. Truly innovative work!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      project: "Smart Healthcare Management System"
    },
    {
      name: "Alex Rodriguez",
      position: "Founder, CryptoMax Ltd.",
      content: "Professional, reliable, and delivered beyond our requirements. The trading platform is performing exceptionally.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      project: "Cryptocurrency Trading Platform"
    }
  ];





  return (
    <div className="min-h-screen bg-black overflow-hidden">
      
      {/* Subtle animated background elements matching Hero */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#0070f3] rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#50e3c2] rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#0070f3] rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-[#50e3c2] rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0070f3] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#50e3c2] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <div className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Main heading with elegant text reveal animation matching Hero */}
            <div className="space-y-6 lg:space-y-8 mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight font-space">
                <div className="flex flex-col items-center gap-2 lg:gap-4">
                  <div className="overflow-hidden">
                    <span className={`block text-white drop-shadow-2xl transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                      Our
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span className={`block bg-gradient-to-r from-[#0070f3] via-[#50e3c2] to-[#0070f3] bg-clip-text text-transparent font-black drop-shadow-xl animate-gradient bg-size-300 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-95'}`}>
                      Work
                    </span>
                  </div>
                </div>
              </h1>
              
              <div className="relative max-w-4xl mx-auto">
                <div className="overflow-hidden">
                  <p className={`text-xl lg:text-2xl xl:text-3xl text-[#ccc] leading-relaxed font-medium drop-shadow-lg transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    Discover how we've transformed businesses with <span className="text-[#50e3c2] font-bold">cutting-edge AI solutions</span>, 
                    <span className="text-[#0070f3] font-bold"> innovative web applications</span>, and 
                    <span className="text-[#50e3c2] font-bold"> game-changing mobile experiences</span>.
                  </p>
                </div>
                {/* Decorative animated lines */}
                <div className={`absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#0070f3] opacity-60 transition-all duration-1000 delay-900 ${textComplete ? 'scale-100 opacity-60' : 'scale-0 opacity-0'}`}></div>
                <div className={`absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#50e3c2] opacity-60 transition-all duration-1000 delay-1100 ${textComplete ? 'scale-100 opacity-60' : 'scale-0 opacity-0'}`}></div>
              </div>
            </div>
            
            {/* Stats matching Hero style */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {[
                { icon: Target, value: '50+', label: 'Projects Delivered', delay: '1200ms' },
                { icon: Users, value: '30+', label: 'Happy Clients', delay: '1300ms' },
                { icon: Award, value: '98%', label: 'Success Rate', delay: '1400ms' },
                { icon: Star, value: '4.9', label: 'Client Rating', delay: '1500ms' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className={`text-center group transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    style={{ transitionDelay: stat.delay }}
                  >
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold gradient-text-accent mb-2">{stat.value}</div>
                    <div className="text-sm lg:text-base text-[#888] font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-custom">
          {/* Projects Section Heading */}
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 font-space">
              Featured <span className="gradient-text-accent">Projects</span>
            </h2>
            <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of innovative solutions that have transformed businesses and delivered exceptional results.
            </p>
          </div>

          {/* Projects Grid - 1 column layout with increased width */}
          <div className="grid grid-cols-1 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isHovered = hoveredProject === index;
              
              return (
                <div
                  key={project.id}
                  className={`group cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${2000 + index * 150}ms` }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="bg-black/80 backdrop-blur-sm border border-[#333] rounded-2xl overflow-hidden hover:transform hover:-translate-y-3 hover:scale-[1.01] transition-all duration-700 h-full hover:border-[#0070f3] hover:shadow-2xl hover:shadow-[#0070f3]/30">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Project Image/Video */}
                      <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
                        {playingVideo === project.id ? (
                          <div className="w-full h-full relative">
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`}
                              title={`${project.title} Demo`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            ></iframe>
                            {/* Close Video Button */}
                            <button
                              onClick={() => setPlayingVideo(null)}
                              className="absolute top-4 right-4 w-10 h-10 bg-black/80 hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-300 border border-[#333] hover:border-[#0070f3] z-10"
                            >
                              <span className="text-white text-lg">×</span>
                            </button>
                          </div>
                        ) : (
                          <>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Video Play Button */}
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <button
                                onClick={() => setPlayingVideo(project.id)}
                                className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
                              >
                                <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1 lg:ml-1.5" />
                              </button>
                            </div>
                          </>
                        )}

                      {/* Project Category Badge */}
                      <div className="absolute top-6 left-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                        {/* Project Year */}
                        <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-white font-medium border border-[#333]">
                          {project.year}
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 lg:p-8 space-y-4 lg:space-y-6 flex-1 flex flex-col">
                      <div className="space-y-3 flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#50e3c2] transition-colors duration-300 line-clamp-2 font-space">
                          {project.title}
                        </h3>
                        <p className="text-lg lg:text-xl text-[#888] leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 lg:gap-6 text-base lg:text-lg">
                        <div className="flex items-center gap-3 text-[#666]">
                          <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#666]">
                          <Users className="w-5 h-5 lg:w-6 lg:h-6" />
                          <span>{project.team}</span>
                        </div>
                      </div>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-3 lg:gap-4">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-4 py-2 bg-[#333] text-sm text-[#888] rounded-xl hover:bg-[#0070f3] hover:text-white transition-colors duration-300 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-4 py-2 bg-[#333] text-sm text-[#666] rounded-xl font-medium">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className={`flex justify-start pt-4 transition-all duration-500 ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'
                      }`}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 py-3 lg:py-4 px-6 lg:px-8 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-xl text-white text-base lg:text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-xl"
                        >
                          <Eye className="w-5 h-5 lg:w-6 lg:h-6" />
                          <span>View Live Demo</span>
                        </a>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8">
              What Our <span className="gradient-text-accent">Clients Say</span>
            </h2>
            <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about their experience working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black border border-[#333] rounded-2xl p-6 lg:p-8 hover:transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 h-full flex flex-col hover:border-[#0070f3] hover:shadow-2xl hover:shadow-[#0070f3]/20"
              >
                {/* Rating Stars */}
                <div className="flex gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#0070f3] text-[#0070f3]" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-lg lg:text-xl text-[#888] mb-8 leading-relaxed flex-1 font-medium">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white text-base lg:text-lg truncate">{testimonial.name}</div>
                    <div className="text-sm lg:text-base text-[#666] truncate">{testimonial.position}</div>
                  </div>
                </div>

                {/* Project Reference */}
                <div className="mt-6 pt-6 border-t border-[#333]">
                  <div className="text-sm text-[#666] mb-1">Project:</div>
                  <div className="text-base lg:text-lg gradient-text-accent truncate font-medium">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-custom">
          <div className="bg-black/80 backdrop-blur-sm border border-[#333] rounded-3xl p-12 lg:p-20 text-center hover:border-[#0070f3] transition-all duration-500 hover:shadow-2xl hover:shadow-[#0070f3]/10">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 font-space">
              Ready to Start Your <span className="gradient-text-accent">Next Project?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-[#888] mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Trust indicators matching Hero style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 mb-12 lg:mb-16">
              {[
                { icon: Sparkles, text: '✨ Free consultation', color: 'bg-[#50e3c2]' },
                { icon: Target, text: '🎯 Custom solutions', color: 'bg-[#0070f3]' },
                { icon: TrendingUp, text: '📈 Proven results', color: 'bg-[#50e3c2]' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-[#888] text-lg lg:text-xl transition-all duration-300"
                >
                  <div className={`w-3 h-3 ${item.color} rounded-full animate-pulse`} style={{ animationDelay: `${index * 0.5}s` }}></div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <button
              onClick={onContactClick}
              className="group relative bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-12 lg:px-16 py-4 lg:py-6 rounded-2xl text-lg lg:text-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork; 