import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Phone, 
  Rocket,
  Heart,
  Zap,
  Star,
  Calendar,
  Coffee,
  Users,
  Send,
  CheckCircle,
  Sparkles,
  Code,
  Globe,
  ArrowRight,
  Brain,
  ChevronRight
} from 'lucide-react';

interface ContactProps {
  currentPage: string;
}

export const Contact: React.FC<ContactProps> = ({ currentPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    contactType: 'beta'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeContact, setActiveContact] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Auto-rotate contact methods
    const contactInterval = setInterval(() => {
      setActiveContact((prev) => (prev + 1) % contactMethods.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(contactInterval);
    };
  }, []);

  const getThemeColors = () => {
    switch (currentPage) {
      case 'contact':
        return {
          gradient: 'from-orange-600 to-red-600',
          bg: 'from-orange-50 to-red-50',
          accent: 'orange-600',
          light: 'orange-100',
          badge: 'from-orange-500 to-red-500'
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

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Direct Founder Chat",
      description: "Chat directly with our founders. We read every message personally.",
      contact: "founders@ourstartu.ai",
      responseTime: "< 2 hours",
      bestFor: "Partnership discussions, investor inquiries, general questions",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Rocket,
      title: "Beta Program Access",
      description: "Apply for early access to our AI tools and join our growing community.",
      contact: "beta@ourstartu.ai",
      responseTime: "Same day",
      bestFor: "Product trials, feature requests, beta feedback",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Code,
      title: "Technical Support",
      description: "Get help with integration, setup, or technical questions from our team.",
      contact: "tech@ourstartu.ai",
      responseTime: "< 4 hours",
      bestFor: "API questions, integration help, technical issues",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Coffee,
      title: "Virtual Coffee Chat",
      description: "Schedule a casual 30-min video call with one of our founders.",
      contact: "Schedule via Calendly",
      responseTime: "Within 48 hours",
      bestFor: "Getting to know us, advice, mentorship",
      color: "from-orange-500 to-red-600"
    }
  ];

  const contactReasons = [
    { id: 'beta', label: '🚀 Join Beta Program', description: 'Get early access to our AI tools' },
    { id: 'partnership', label: '🤝 Partnership Inquiry', description: 'Explore collaboration opportunities' },
    { id: 'investment', label: '💰 Investment Discussion', description: 'Learn about our funding round' },
    { id: 'support', label: '🛠️ Technical Support', description: 'Get help with our products' },
    { id: 'general', label: '💬 General Question', description: 'Just want to say hi or ask something' }
  ];

  const quickStats = [
    { icon: Clock, value: '< 2h', label: 'Response Time', color: 'text-blue-600' },
    { icon: Users, value: '100+', label: 'Beta Users', color: 'text-emerald-600' },
    { icon: Star, value: '4.9/5', label: 'Support Rating', color: 'text-orange-600' },
    { icon: Heart, value: '100%', label: 'Founder Replies', color: 'text-red-600' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${themeColors.bg} flex items-center justify-center relative overflow-hidden`}>
        {/* 3D Background Elements */}
        <div className="absolute inset-0 perspective-1000">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-float-3d" style={{ top: '20%', right: '10%' }}></div>
          <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/25 to-purple-200/25 rounded-full blur-2xl animate-float-3d" style={{ bottom: '20%', left: '10%', animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 border border-white/50 shadow-2xl card-3d">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-in">
              <CheckCircle size={40} className="text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent Successfully! 🎉</h2>
            <p className="text-xl text-slate-600 mb-8">
              Thanks for reaching out! One of our founders will get back to you within 2 hours. 
              We're excited to connect with you!
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50 mb-8">
              <h3 className="font-bold text-slate-900 mb-3">What happens next?</h3>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">We'll review your message personally</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">Expect a thoughtful response within 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">If it's about beta access, we'll send next steps</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.location.reload()}
              className={`bg-gradient-to-r ${themeColors.gradient} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto group`}
            >
              <Heart size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Send Another Message</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeColors.bg} relative overflow-hidden`}>
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-3xl animate-float-3d" style={{ top: '10%', right: '5%' }}></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/25 to-purple-200/25 rounded-full blur-2xl animate-float-3d" style={{ bottom: '20%', left: '10%', animationDelay: '2s' }}></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl animate-float-3d" style={{ top: '50%', left: '80%', animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        
        {/* Hero Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${themeColors.badge} text-white text-sm font-bold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <Sparkles size={16} className="animate-pulse" />
            <span>💬 Let's Connect</span>
            <div className="px-2 py-1 bg-white/20 text-xs rounded-full font-bold">FOUNDERS REPLY</div>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6">
            <span className="block">Chat with the</span>
            <span className={`block bg-gradient-to-r ${themeColors.gradient} bg-clip-text text-transparent animate-gradient-shift bg-size-300`}>
              Founding Team
            </span>
          </h1>
          
          <p className="font-body text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            No chatbots, no support tickets, no BS. Just <span className="font-bold text-orange-600">real founders</span> who 
            actually read every message and reply personally. We're building this startup together with our community.
          </p>
        </div>

        {/* Quick Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300 hover-3d"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${themeColors.badge} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-6 transform-gpu`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl card-3d">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
                <p className="text-slate-600">Choose how you'd like to connect with us, and we'll get back to you super fast.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Type Selection */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">What's this about?</label>
                  <div className="grid grid-cols-1 gap-3">
                    {contactReasons.map((reason) => (
                      <label 
                        key={reason.id}
                        className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-105 ${
                          formData.contactType === reason.id 
                            ? `bg-gradient-to-r ${themeColors.bg} border-orange-300 shadow-lg` 
                            : 'bg-white border-slate-200 hover:border-orange-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactType"
                          value={reason.id}
                          checked={formData.contactType === reason.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex-1">
                          <div className="font-bold text-slate-900">{reason.label}</div>
                          <div className="text-sm text-slate-600">{reason.description}</div>
                        </div>
                        {formData.contactType === reason.id && (
                          <CheckCircle size={20} className="text-orange-600" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                      placeholder="jane@startup.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Company/Startup</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                    placeholder="Awesome Startup Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your startup, what you're building, or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r ${themeColors.gradient} text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group relative overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending to Founders...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                      <span>Send Message to Founders</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Methods */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            
            {/* Active Contact Method Spotlight */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-2xl card-3d">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${themeColors.badge} text-white text-sm font-bold mb-6`}>
                <Star size={16} />
                <span>Recommended: {contactMethods[activeContact].title}</span>
              </div>

                             <div className="flex items-start gap-6 mb-6">
                 <div className={`w-16 h-16 bg-gradient-to-r ${contactMethods[activeContact].color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                   {React.createElement(contactMethods[activeContact].icon, { size: 28, className: "text-white" })}
                 </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{contactMethods[activeContact].title}</h3>
                  <p className="text-slate-600 mb-4">{contactMethods[activeContact].description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-orange-600" />
                      <span className="font-bold text-slate-900">{contactMethods[activeContact].contact}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-blue-600" />
                      <span className="text-slate-600">Response time: <span className="font-bold">{contactMethods[activeContact].responseTime}</span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200/50">
                <div className="text-sm font-bold text-slate-900 mb-2">Best for:</div>
                <div className="text-sm text-slate-600">{contactMethods[activeContact].bestFor}</div>
              </div>
            </div>

            {/* All Contact Methods Grid */}
            <div className="grid gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div 
                    key={index}
                    className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 ${activeContact === index ? 'ring-2 ring-orange-300' : ''}`}
                    onClick={() => setActiveContact(index)}
                  >
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                            {method.title}
                          </h4>
                          <p className="text-sm text-slate-600">{method.responseTime}</p>
                        </div>
                        <ChevronRight size={16} className="text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Founder Availability */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-slate-900">Founders are online now!</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Alex and Jordan are currently online and available for quick chats. 
                Perfect time to reach out if you have questions about our beta program.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Alex" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b550?w=40&h=40&fit=crop&crop=face" alt="Jordan" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <span className="text-sm text-green-700 font-medium">Available for the next 3 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 