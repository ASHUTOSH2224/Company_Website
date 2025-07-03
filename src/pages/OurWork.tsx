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
  MessageCircle
} from 'lucide-react';

interface OurWorkProps {
  currentPage: string;
  onContactClick: () => void;
}

const OurWork: React.FC<OurWorkProps> = ({ currentPage, onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'ai', label: 'AI Solutions', count: 5 },
    { id: 'web', label: 'Web Apps', count: 4 },
    { id: 'mobile', label: 'Mobile Apps', count: 3 }
  ];

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

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const VideoModal = () => {
    if (!selectedVideo) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="text-white text-xl">×</span>
          </button>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
            title="Project Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <VideoModal />
      
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/10 via-transparent to-[#50e3c2]/10"></div>
        
        <div className="container-custom relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Our <span className="gradient-text-accent">Work</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#888] max-w-2xl mx-auto mb-6 lg:mb-8 px-4">
              Discover how we've transformed businesses with cutting-edge AI solutions, 
              innovative web applications, and game-changing mobile experiences.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto px-4">
              {[
                { icon: Award, value: '50+', label: 'Projects Delivered' },
                { icon: Users, value: '30+', label: 'Happy Clients' },
                { icon: Code, value: '98%', label: 'Success Rate' },
                { icon: Star, value: '4.9', label: 'Client Rating' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-lg flex items-center justify-center mx-auto mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="text-lg lg:text-2xl font-bold gradient-text-accent mb-1">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-[#888]">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 lg:py-12">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-12 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full border transition-all duration-300 text-sm lg:text-base ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white border-transparent'
                    : 'border-[#333] bg-[var(--card-bg)] text-[#888] hover:text-white hover:border-[#0070f3]'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 px-4">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              const isHovered = hoveredProject === index;
              
              return (
                <div
                  key={project.id}
                  className={`group cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="card overflow-hidden hover:transform hover:-translate-y-1 lg:hover:-translate-y-2 hover:scale-[1.02] lg:hover:scale-105 transition-all duration-700 h-full">
                    {/* Project Image with Video Overlay */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Video Play Button */}
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          onClick={() => setSelectedVideo(project.videoId)}
                          className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        >
                          <Play className="w-4 h-4 lg:w-6 lg:h-6 text-white ml-0.5 lg:ml-1" />
                        </button>
                      </div>

                      {/* Project Category Badge */}
                      <div className="absolute top-2 lg:top-4 left-2 lg:left-4">
                        <div className={`w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                        </div>
                      </div>

                      {/* Project Year */}
                      <div className="absolute top-2 lg:top-4 right-2 lg:right-4 bg-black/70 backdrop-blur-sm px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm text-white">
                        {project.year}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 lg:p-6 space-y-3 lg:space-y-4 flex-1 flex flex-col">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-[#50e3c2] transition-colors duration-300 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm lg:text-base text-[#888] leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-2 lg:gap-4 text-xs lg:text-sm">
                        <div className="flex items-center gap-2 text-[#666]">
                          <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#666]">
                          <Users className="w-3 h-3 lg:w-4 lg:h-4" />
                          <span>{project.team}</span>
                        </div>
                      </div>

                      {/* Client & Results */}
                      <div className="border-t border-[#333] pt-3 space-y-1.5 lg:space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs lg:text-sm text-[#666]">Client:</span>
                          <span className="text-xs lg:text-sm text-white font-medium truncate ml-2">{project.client}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs lg:text-sm text-[#666]">Results:</span>
                          <span className="text-xs lg:text-sm gradient-text-accent font-medium truncate ml-2">{project.results}</span>
                        </div>
                      </div>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-1.5 lg:gap-2">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-[#333] text-xs text-[#888] rounded-md hover:bg-[#0070f3] hover:text-white transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2 py-1 bg-[#333] text-xs text-[#666] rounded-md">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className={`flex gap-2 lg:gap-3 pt-3 lg:pt-4 transition-all duration-500 mt-auto ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
                      }`}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 lg:gap-2 py-2 px-3 lg:px-4 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-lg text-white text-xs lg:text-sm font-medium hover:scale-105 transition-transform duration-300"
                        >
                          <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                          <span className="hidden sm:inline">Live Demo</span>
                          <span className="sm:hidden">Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 lg:gap-2 py-2 px-3 lg:px-4 border border-[#333] rounded-lg text-[#888] hover:text-white hover:border-[#0070f3] text-xs lg:text-sm transition-colors duration-300"
                        >
                          <Github className="w-3 h-3 lg:w-4 lg:h-4" />
                          <span className="hidden sm:inline">Code</span>
                        </a>
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
      <section className="py-8 lg:py-16 bg-[var(--card-bg)]">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-12 px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
              What Our <span className="gradient-text-accent">Clients Say</span>
            </h2>
            <p className="text-sm lg:text-base text-[#888] max-w-xl lg:max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 px-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card p-4 lg:p-6 hover:transform hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-500 h-full flex flex-col"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3 lg:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-[#0070f3] text-[#0070f3]" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-sm lg:text-base text-[#888] mb-4 lg:mb-6 leading-relaxed flex-1">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3 lg:gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white text-sm lg:text-base truncate">{testimonial.name}</div>
                    <div className="text-xs lg:text-sm text-[#666] truncate">{testimonial.position}</div>
                  </div>
                </div>

                {/* Project Reference */}
                <div className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-[#333]">
                  <div className="text-xs text-[#666]">Project:</div>
                  <div className="text-sm gradient-text-accent truncate">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 lg:py-16">
        <div className="container-custom">
          <div className="text-center px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
              Ready to Start Your <span className="gradient-text-accent">Next Project?</span>
            </h2>
            <p className="text-sm lg:text-base text-[#888] mb-6 lg:mb-8 max-w-xl lg:max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <button
              onClick={onContactClick}
              className="btn-primary group px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork; 