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
      <section className="py-16 lg:py-24 relative">
        <div className="container-custom">
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8">
              Our <span className="gradient-text-accent">Work</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto mb-12 lg:mb-16 leading-relaxed">
              Discover how we've transformed businesses with cutting-edge AI solutions, 
              innovative web applications, and game-changing mobile experiences.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {[
                { icon: Award, value: '50+', label: 'Projects Delivered' },
                { icon: Users, value: '30+', label: 'Happy Clients' },
                { icon: Code, value: '98%', label: 'Success Rate' },
                { icon: Star, value: '4.9', label: 'Client Rating' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
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

      {/* Filter Categories */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-12 lg:mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 lg:px-8 py-3 lg:py-4 rounded-xl border-2 transition-all duration-300 text-base lg:text-lg font-medium ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white border-transparent shadow-lg'
                    : 'border-[#333] bg-black text-[#888] hover:text-white hover:border-[#0070f3] hover:shadow-md'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
                  <div className="bg-black border border-[#333] rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 hover:scale-105 transition-all duration-700 h-full hover:border-[#0070f3] hover:shadow-2xl hover:shadow-[#0070f3]/20">
                    {/* Project Image with Video Overlay */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Video Play Button */}
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          onClick={() => setSelectedVideo(project.videoId)}
                          className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
                        >
                          <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1 lg:ml-1.5" />
                        </button>
                      </div>

                      {/* Project Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Project Year */}
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm text-white font-medium">
                        {project.year}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 lg:p-8 space-y-4 lg:space-y-6 flex-1 flex flex-col">
                      <div className="space-y-3 flex-1">
                        <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-[#50e3c2] transition-colors duration-300 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-base lg:text-lg text-[#888] leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 lg:gap-6 text-sm lg:text-base">
                        <div className="flex items-center gap-3 text-[#666]">
                          <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#666]">
                          <Users className="w-4 h-4 lg:w-5 lg:h-5" />
                          <span>{project.team}</span>
                        </div>
                      </div>

                      {/* Client & Results */}
                      <div className="border-t border-[#333] pt-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm lg:text-base text-[#666]">Client:</span>
                          <span className="text-sm lg:text-base text-white font-medium truncate ml-4">{project.client}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm lg:text-base text-[#666]">Results:</span>
                          <span className="text-sm lg:text-base gradient-text-accent font-medium truncate ml-4">{project.results}</span>
                        </div>
                      </div>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1.5 bg-[#333] text-sm text-[#888] rounded-lg hover:bg-[#0070f3] hover:text-white transition-colors duration-300 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-3 py-1.5 bg-[#333] text-sm text-[#666] rounded-lg font-medium">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className={`flex gap-3 lg:gap-4 pt-4 transition-all duration-500 mt-auto ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
                      }`}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 lg:py-4 px-4 lg:px-6 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-xl text-white text-sm lg:text-base font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                          <Eye className="w-4 h-4 lg:w-5 lg:h-5" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 lg:py-4 px-4 lg:px-6 border-2 border-[#333] rounded-xl text-[#888] hover:text-white hover:border-[#0070f3] text-sm lg:text-base transition-all duration-300 font-medium"
                        >
                          <Github className="w-4 h-4 lg:w-5 lg:h-5" />
                          <span>Code</span>
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
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="bg-black border border-[#333] rounded-3xl p-12 lg:p-16 text-center hover:border-[#0070f3] transition-colors duration-300">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8">
              Ready to Start Your <span className="gradient-text-accent">Next Project?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-[#888] mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-12 lg:px-16 py-4 lg:py-6 rounded-2xl text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 group"
            >
              Start Your Project
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork; 