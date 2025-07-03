import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2, 
  Maximize2,
  Loader2,
  Sparkles,
  ExternalLink,
  Phone,
  Mail
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatBotProps {
  onContactClick?: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial greeting message
  const initialMessage: Message = {
    id: 'initial',
    text: "Hi! I'm UPSTRAIQ's AI Assistant. I can help you learn about our AI-powered services, pricing, case studies, and answer any questions about digital transformation. How can I assist you today?",
    isBot: true,
    timestamp: new Date()
  };

  // Quick action buttons
  const quickActions = [
    { text: "Our Services", action: "services" },
    { text: "Pricing Info", action: "pricing" },
    { text: "Case Studies", action: "case-studies" },
    { text: "Contact Sales", action: "contact" }
  ];

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setMessages([initialMessage]);
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    try {
      // Try to use Groq API first if available
      const groqApiKey = import.meta.env.VITE_GROQ_API_KEY;
      
      if (groqApiKey) {
        // Use real Groq API with context
        const { groqApiService } = await import('../services/groqApi');
        
        // Convert current conversation to the format expected by Groq
        const conversationHistory = messages
          .filter(msg => !msg.isTyping)
          .map(msg => ({
            role: msg.isBot ? 'assistant' as const : 'user' as const,
            content: msg.text
          }));

        // Add context about the user's question
        const contextualMessage = `Question: ${userMessage}`;
        
        return await groqApiService.generateResponse(contextualMessage, conversationHistory);
      } else {
        // Fallback to simulated responses with context
        const response = await simulateGroqResponse(userMessage);
        return response;
      }
    } catch (error) {
      console.error('Bot response error:', error);
      // Fallback to simulated response on error
      try {
        const response = await simulateGroqResponse(userMessage);
        return response;
      } catch (fallbackError) {
        return "I apologize, but I'm experiencing technical difficulties. Please contact our team directly for immediate assistance at info@upstraiq.com or visit our contact page.";
      }
    }
  };

  // Simulate Groq API response with intelligent context matching
  const simulateGroqResponse = async (userMessage: string, context?: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Services inquiries
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offerings')) {
      return "We offer 12 comprehensive AI-powered services including:\n\n🤖 AI Marketing Automation - Smart campaigns that adapt and optimize automatically\n🛒 E-commerce Platforms - AI-driven online stores with personalized recommendations\n🎓 Educational Platforms - Modern LMS with personalized learning paths\n💼 CRM Platforms - Intelligent customer relationship management\n📱 Mobile & Web Applications - High-performance, scalable solutions\n🔗 Blockchain Applications - Smart contracts and DeFi integration\n🧠 ML Model Development - Custom machine learning solutions\n\nWould you like detailed information about any specific service?";
    }

    // Pricing inquiries
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('how much')) {
      return "Our pricing varies by service complexity and requirements:\n\n💰 Starter Services: $800 - $4,000\n• Developer Portfolios: $800-2,500\n• AI Chatbots: $2,000-4,500\n• GPS Tracking: $3,000-6,000\n\n🚀 Professional Services: $5,000 - $20,000\n• AI Marketing: $2,500-5,000\n• E-commerce Platforms: $3,500-7,500\n• CRM Platforms: $5,000-10,000\n• Mobile Apps: $12,000-20,000\n\n🏢 Enterprise Solutions: Custom Pricing\n• Complex integrations and custom requirements\n\nAll projects include consultation, development, testing, and deployment. Would you like a custom quote for your specific needs?";
    }

    // Case studies and results
    if (lowerMessage.includes('case stud') || lowerMessage.includes('example') || lowerMessage.includes('results') || lowerMessage.includes('success')) {
      return "Here are some of our standout success stories:\n\n🎯 TechCorp: 300% ROI increase with AI marketing automation\n🛍️ Fashion Forward: 500% sales growth with AI e-commerce platform\n📚 EduTech Academy: 85% student engagement boost with personalized learning\n📈 GrowthCorp: 400% lead conversion improvement with intelligent CRM\n🏃 FitTrack: 2M+ mobile app downloads with gamified fitness experience\n🎧 SupportPro: 90% automated query resolution with AI chatbots\n\nOur average client sees 300% ROI with 99% project success rate. Would you like detailed information about any specific case study?";
    }

    // Technology and development process
    if (lowerMessage.includes('technology') || lowerMessage.includes('tech stack') || lowerMessage.includes('how do you build') || lowerMessage.includes('development')) {
      return "We use cutting-edge technologies and follow proven methodologies:\n\n🛠️ Technologies:\n• Frontend: React, Next.js, Vue.js, React Native\n• Backend: Node.js, Python, PostgreSQL, MongoDB\n• AI/ML: TensorFlow, PyTorch, OpenAI, Custom Models\n• Cloud: AWS, Azure, Docker, Kubernetes\n• Blockchain: Solidity, Web3.js, Ethereum, Polygon\n\n⚡ Our Process:\n1. Discovery & Strategy (1-3 weeks)\n2. Design & Architecture (2-4 weeks)\n3. Development & AI Integration (6-16 weeks)\n4. Testing & Deployment (1-3 weeks)\n5. Ongoing Support & Optimization\n\nWe follow agile methodologies with regular demos and feedback cycles. Interested in learning about our process for a specific service?";
    }

    // Timeline and project duration
    if (lowerMessage.includes('timeline') || lowerMessage.includes('how long') || lowerMessage.includes('duration') || lowerMessage.includes('time')) {
      return "Project timelines vary based on complexity:\n\n⚡ Quick Turnaround (2-6 weeks):\n• Developer Portfolios: 2-3 weeks\n• AI Chatbots: 4-6 weeks\n• AI Model Deployment: 4-6 weeks\n\n🚀 Standard Projects (8-14 weeks):\n• AI Marketing Automation: 6-8 weeks\n• E-commerce Platforms: 8-12 weeks\n• GPS Tracking Solutions: 8-10 weeks\n• CRM Platforms: 10-12 weeks\n• Educational Platforms: 10-14 weeks\n\n🏢 Complex Solutions (12-20 weeks):\n• Web Applications: 12-16 weeks\n• ML Model Development: 12-16 weeks\n• Mobile Applications: 14-18 weeks\n• Blockchain Applications: 16-20 weeks\n\nWe can provide more specific timelines after understanding your requirements. What type of project are you considering?";
    }

    // Contact and getting started
    if (lowerMessage.includes('contact') || lowerMessage.includes('get started') || lowerMessage.includes('speak') || lowerMessage.includes('call') || lowerMessage.includes('meeting')) {
      return "Ready to start your AI transformation? Here's how to get in touch:\n\n📧 Email: info@upstraiq.com\n📞 Phone: +1 (555) 123-4567\n🌐 Contact Form: Available on our website\n\n🚀 Next Steps:\n1. Schedule a free consultation\n2. Discuss your project requirements\n3. Receive a custom proposal\n4. Begin your transformation journey\n\nWould you like me to direct you to our contact page, or do you have specific questions about getting started?";
    }

    // AI and machine learning specific
    if (lowerMessage.includes('ai ') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml ')) {
      return "AI and Machine Learning are at the core of everything we do:\n\n🧠 AI Services:\n• Custom ML Model Development\n• AI Model Deployment & MLOps\n• Natural Language Processing\n• Computer Vision Solutions\n• Predictive Analytics\n• Recommendation Systems\n\n💡 AI Applications:\n• Marketing Automation with predictive analytics\n• E-commerce personalization engines\n• Educational content adaptation\n• Customer service chatbots\n• Sales lead scoring\n• Process automation\n\n🎯 Results:\n• 300% average ROI improvement\n• 90%+ automation rates\n• Real-time optimization\n• Scalable AI infrastructure\n\nWhat specific AI challenge can we help you solve?";
    }

    // Company information
    if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who are you') || lowerMessage.includes('upstraiq')) {
      return "UPSTRAIQ is a leading AI-powered digital transformation company that helps businesses revolutionize their operations:\n\n🎯 Our Mission: Transform businesses through intelligent automation and cutting-edge AI solutions\n\n📊 Track Record:\n• 1,500+ successful projects\n• 300% average ROI for clients\n• 4.9/5 client satisfaction rating\n• 99% project success rate\n\n🌟 What Sets Us Apart:\n• AI-first approach to every solution\n• End-to-end digital transformation\n• Proven methodologies and processes\n• Expert team of AI specialists\n• Ongoing support and optimization\n\n🏆 Industries Served:\n• Technology, E-commerce, Education\n• Healthcare, Finance, Manufacturing\n• Startups to Enterprise clients\n\nWe're passionate about helping businesses unlock the power of AI. How can we help transform your business?";
    }

    // Default response with helpful suggestions
    return `I'd be happy to help you learn more about UPSTRAIQ! I can provide information about:\n\n• Our 12 AI-powered services and solutions\n• Pricing and project timelines\n• Success stories and case studies\n• Technologies and development process\n• Getting started with your project\n\nWhat specific information would you like to know about? You can also ask me about AI, machine learning, digital transformation, or any of our services.`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Add typing indicator
    const typingMessage: Message = {
      id: 'typing',
      text: 'Thinking...',
      isBot: true,
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    try {
      const botResponse = await generateBotResponse(inputValue);
      
      // Remove typing indicator and add actual response
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => msg.id !== 'typing');
        const botMessage: Message = {
          id: Date.now().toString(),
          text: botResponse,
          isBot: true,
          timestamp: new Date()
        };
        return [...withoutTyping, botMessage];
      });
    } catch (error) {
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => msg.id !== 'typing');
        const errorMessage: Message = {
          id: Date.now().toString(),
          text: "I apologize for the technical difficulty. Please contact our team directly for immediate assistance.",
          isBot: true,
          timestamp: new Date()
        };
        return [...withoutTyping, errorMessage];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    let message = '';
    switch (action) {
      case 'services':
        message = 'What services do you offer?';
        break;
      case 'pricing':
        message = 'What are your pricing options?';
        break;
      case 'case-studies':
        message = 'Can you show me some case studies?';
        break;
      case 'contact':
        message = 'How can I contact your sales team?';
        break;
    }
    setInputValue(message);
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group relative"
        >
          <MessageCircle size={24} className="group-hover:animate-bounce" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#50e3c2] rounded-full animate-pulse"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with AI Assistant
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <div className={`bg-black/95 border-2 border-[#333] rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-300 flex flex-col ${
        isMinimized 
          ? 'w-72 md:w-80 h-16' 
          : 'w-[calc(100vw-2rem)] max-w-sm md:max-w-md lg:w-96 h-[80vh] md:h-[600px] max-h-[600px]'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#333]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">UPSTRAIQ Assistant</h3>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#50e3c2] rounded-full animate-pulse"></div>
                <span className="text-xs text-[#888]">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMinimize}
              className="text-[#888] hover:text-white p-1 rounded transition-colors duration-200"
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
            <button
              onClick={toggleChat}
              className="text-[#888] hover:text-white p-1 rounded transition-colors duration-200"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[440px]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.isBot ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-lg flex items-center justify-center flex-shrink-0">
                      {message.isTyping ? (
                        <Loader2 size={14} className="text-white animate-spin" />
                      ) : (
                        <Bot size={14} className="text-white" />
                      )}
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-[#333] text-white'
                        : 'bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line">{message.text}</div>
                    <div className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>

                  {!message.isBot && (
                    <div className="w-8 h-8 bg-[#666] rounded-lg flex items-center justify-center flex-shrink-0">
                      <User size={14} className="text-white" />
                    </div>
                  )}
                </div>
              ))}

              {/* Quick Actions */}
              {messages.length === 1 && (
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#333] rounded-full text-xs text-[#888]">
                      <Sparkles size={12} />
                      Quick Actions
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => (
                      <button
                        key={action.action}
                        onClick={() => handleQuickAction(action.action)}
                        className="p-3 bg-[#333] hover:bg-[#444] border border-[#555] hover:border-[#0070f3] rounded-xl text-sm text-white transition-all duration-200 flex items-center gap-2"
                      >
                        <ExternalLink size={14} />
                        {action.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#333]">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about our AI services..."
                  className="flex-1 bg-[#333] border border-[#555] rounded-xl px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#0070f3] transition-colors duration-200"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white p-3 rounded-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between mt-3 text-xs text-[#666]">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-[#50e3c2] rounded-full"></div>
                  <span>Powered by AI</span>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={onContactClick}
                    className="flex items-center gap-1 hover:text-[#0070f3] transition-colors duration-200"
                  >
                    <Phone size={10} />
                    Contact
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#0070f3] transition-colors duration-200">
                    <Mail size={10} />
                    Email
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;