import React, { useState, useEffect } from 'react';
import { 
  Send, 
  ArrowRight, 
  Mail, 
  MessageSquare, 
  Calendar,
  Clock,
  Phone,
  Star,
  ChevronRight,
  MapPin,
  Globe
} from 'lucide-react';
import CalendlyButton from '../components/CalendlyButton';

interface ContactProps {
  currentPage: string;
}

export const Contact: React.FC<ContactProps> = ({ currentPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeContact, setActiveContact] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    contactType: 'general',
    message: ''
  });

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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', contactType: 'general', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message and we\'ll respond within 24 hours',
      contact: 'upstraiq@gmail.com',
      responseTime: '24 hours',
      bestFor: 'Detailed inquiries, project discussions, and formal proposals',
      color: 'from-[#0070f3] to-[#50e3c2]'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant answers to your questions during business hours',
      contact: 'Available 9 AM - 6 PM EST',
      responseTime: 'Instant',
      bestFor: 'Quick questions, support issues, and immediate assistance',
      color: 'from-[#0070f3] to-[#50e3c2]'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a 30-minute consultation to discuss your AI needs',
      contact: 'Click to open calendar',
      responseTime: 'Same day',
      bestFor: 'Project planning, technical discussions, and strategy sessions',
      color: 'from-[#0070f3] to-[#50e3c2]',
      hasCalendly: true
    }
  ];

  const contactReasons = [
    {
      id: 'general',
      label: 'General Inquiry',
      description: 'Questions about our services or company'
    },
    {
      id: 'project',
      label: 'New Project',
      description: 'Discuss a potential AI project or collaboration'
    },
    {
      id: 'support',
      label: 'Support',
      description: 'Technical support for existing projects'
    },
    {
      id: 'partnership',
      label: 'Partnership',
      description: 'Business partnerships and collaboration opportunities'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section id="contact" className="py-16 lg:py-24 relative">
        <div className="container-custom">
          {/* Header */}
          <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8">
              <span className="block text-white">Get in</span>
              <span className="gradient-text-accent">Touch</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI? We'd love to hear from you. 
              Choose the best way to reach out and let's start building something amazing together.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              <div className="bg-black border border-[#333] rounded-2xl p-8 lg:p-10 hover:border-[#0070f3] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-lg flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">Send us a message</h2>
                    <p className="text-[#888] text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">What's this about?</label>
                    <div className="grid grid-cols-1 gap-3">
                      {contactReasons.map((reason) => (
                        <label 
                          key={reason.id}
                          className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            formData.contactType === reason.id 
                              ? 'bg-black border-[#0070f3] shadow-lg shadow-[#0070f3]/20' 
                              : 'border-[#333] hover:border-[#666]'
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
                            <div className="font-medium text-white">{reason.label}</div>
                            <div className="text-sm text-[#888]">{reason.description}</div>
                          </div>
                          {formData.contactType === reason.id && (
                            <div className="w-2 h-2 bg-[#0070f3] rounded-full"></div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black border-2 border-[#333] rounded-xl text-white placeholder-[#666] focus:outline-none focus:border-[#0070f3] transition-all duration-300"
                        placeholder="Jane Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black border-2 border-[#333] rounded-xl text-white placeholder-[#666] focus:outline-none focus:border-[#0070f3] transition-all duration-300"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border-2 border-[#333] rounded-xl text-white placeholder-[#666] focus:outline-none focus:border-[#0070f3] transition-all duration-300"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black border-2 border-[#333] rounded-xl text-white placeholder-[#666] focus:outline-none focus:border-[#0070f3] transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-6 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Methods */}
            <div className={`space-y-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              
              {/* Featured Contact Method */}
              <div className="bg-black border border-[#333] rounded-2xl p-8 hover:border-[#0070f3] transition-colors duration-300 hover:shadow-2xl hover:shadow-[#0070f3]/20">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-5 h-5 text-[#0070f3]" />
                  <span className="text-sm font-medium text-[#0070f3]">Recommended: {contactMethods[activeContact].title}</span>
                </div>

                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${contactMethods[activeContact].color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {React.createElement(contactMethods[activeContact].icon, { size: 28, className: "text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{contactMethods[activeContact].title}</h3>
                    <p className="text-[#888] mb-4">{contactMethods[activeContact].description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-[#0070f3]" />
                        <span className="font-medium text-white">{contactMethods[activeContact].contact}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[#50e3c2]" />
                        <span className="text-[#888]">Response time: <span className="font-medium text-white">{contactMethods[activeContact].responseTime}</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black rounded-xl p-4 border-2 border-[#333]">
                  <div className="text-sm font-medium text-white mb-2">Best for:</div>
                  <div className="text-sm text-[#888]">{contactMethods[activeContact].bestFor}</div>
                </div>

                {/* Schedule Call Button */}
                {contactMethods[activeContact].hasCalendly && (
                  <CalendlyButton 
                    className="w-full mt-4 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    buttonText="Schedule Your Call"
                    showIcon={true}
                  />
                )}
              </div>

              {/* All Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div 
                      key={index}
                      className={`bg-black border-2 border-[#333] rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${activeContact === index ? 'border-[#0070f3] shadow-lg shadow-[#0070f3]/20' : 'hover:border-[#666]'}`}
                      onClick={() => setActiveContact(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white">
                            {method.title}
                          </h4>
                          <p className="text-sm text-[#888]">{method.responseTime}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#666]" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="bg-black border border-[#333] rounded-2xl p-6 hover:border-[#0070f3] transition-colors duration-300">
                <h4 className="font-medium text-white mb-4">Other Ways to Reach Us</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#0070f3]" />
                    <span className="text-[#888]">+91 8521010925</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#50e3c2]" />
                    <span className="text-[#888]">Varanasi, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#0070f3]" />
                    <span className="text-[#888]">Available worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 