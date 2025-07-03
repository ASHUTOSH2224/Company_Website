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
  RotateCcw,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import CalendlyButton from './CalendlyButton';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isTyping?: boolean;
  type?: 'text' | 'industry-selector' | 'service-selector';
}

interface ChatState {
  mode: 'general' | 'services' | 'contact';
  step: 'initial' | 'industry-selection' | 'service-selection' | 'conversation';
  selectedIndustry: string;
  selectedService: string;
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
  const [chatState, setChatState] = useState<ChatState>({
    mode: 'general',
    step: 'initial',
    selectedIndustry: '',
    selectedService: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Industry options for Services mode
  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing',
    'Retail & E-commerce', 'Real Estate', 'Consulting', 'Startups', 'Other'
  ];

  // Service categories for Services mode
  const serviceCategories = [
    'AI & Machine Learning', 'Web Development', 'Mobile Development',
    'E-commerce Solutions', 'Business Automation', 'Consulting Services'
  ];

  // Initial greeting message
  const getInitialMessage = (): Message => ({
    id: 'initial',
    text: "Hi! I'm UPSTRAIQ's AI Assistant. Choose a mode below to get started, or ask me anything about our AI-powered digital transformation services!",
    isBot: true,
    timestamp: new Date()
  });

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setMessages([getInitialMessage()]);
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

  const resetConversation = () => {
    setMessages([getInitialMessage()]);
    setChatState({
      mode: 'general',
      step: 'initial',
      selectedIndustry: '',
      selectedService: ''
    });
  };

  const handleModeChange = (mode: 'general' | 'services' | 'contact') => {
    setChatState(prev => ({ ...prev, mode }));

    let responseText = '';
    let newStep: ChatState['step'] = 'conversation';

    switch (mode) {
      case 'general':
        responseText = "Great! I'm here to help with general questions about UPSTRAIQ. I can tell you about our company, technologies, case studies, pricing, timelines, and our approach to digital transformation. What would you like to know?";
        break;
      case 'services':
        responseText = "Perfect! Let's find the right AI solution for your business. First, which industry best describes your business?";
        newStep = 'industry-selection';
        break;
      case 'contact':
        responseText = "I'd be happy to help you get in touch with our team!\n\n📧 **Email**: info@upstraiq.com\n📞 **Phone**: +1 (555) 123-4567\n📅 **Schedule a Call**: Click the button below to open calendar\n🌐 **Website**: Contact form available\n\n🚀 **Next Steps**:\n• Schedule a free 30-minute consultation\n• Discuss your project requirements\n• Receive a custom proposal\n\nWould you like me to help you with anything specific before connecting with our team?";
        break;
    }

    setChatState(prev => ({ ...prev, step: newStep }));

    const botMessage: Message = {
      id: Date.now().toString(),
      text: responseText,
      isBot: true,
      timestamp: new Date(),
      type: mode === 'services' && newStep === 'industry-selection' ? 'industry-selector' : 'text'
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleIndustrySelection = (industry: string) => {
    setChatState(prev => ({ ...prev, selectedIndustry: industry, step: 'service-selection' }));

    const userMessage: Message = {
      id: Date.now().toString(),
      text: `Industry: ${industry}`,
      isBot: false,
      timestamp: new Date()
    };

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: `Excellent! Now, which service category best matches what you're looking for in the ${industry} industry?`,
      isBot: true,
      timestamp: new Date(),
      type: 'service-selector'
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const handleServiceSelection = (service: string) => {
    setChatState(prev => ({ ...prev, selectedService: service, step: 'conversation' }));

    const userMessage: Message = {
      id: Date.now().toString(),
      text: `Service: ${service}`,
      isBot: false,
      timestamp: new Date()
    };

    const contextualResponse = getServiceContextualResponse(chatState.selectedIndustry, service);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: contextualResponse,
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const getServiceSpecificSuggestions = (industry: string, service: string): string => {
    const suggestions: Record<string, Record<string, string>> = {
      'Technology': {
        'Mobile Development': '📱 SaaS mobile apps\n🚀 Developer productivity tools\n💼 Business automation apps\n🎮 Gaming applications\n📊 Analytics dashboards',
        'Web Development': '💻 SaaS platforms\n⚡ API services\n🔧 Developer tools\n📈 Analytics platforms\n🌐 Enterprise web portals',
        'AI & Machine Learning': '🤖 ML model APIs\n📊 Predictive analytics\n🔮 Computer vision tools\n💬 NLP applications'
      },
      'Healthcare': {
        'Mobile Development': '🏥 Patient apps\n💊 Medication tracking\n👩‍⚕️ Telemedicine platforms\n📋 Health monitoring\n🚨 Emergency response apps',
        'Web Development': '🏥 Patient portals\n📅 Appointment systems\n📋 EHR integrations\n🔒 HIPAA-compliant platforms\n📊 Health analytics dashboards',
        'AI & Machine Learning': '🏥 Medical imaging AI\n📊 Patient analytics\n💊 Drug discovery tools\n🩺 Diagnostic assistance'
      },
      'Finance': {
        'Mobile Development': '💳 Banking apps\n📊 Investment platforms\n💰 Payment solutions\n📈 Trading applications\n🔐 Secure wallet apps',
        'Web Development': '🏦 Online banking\n📊 Financial dashboards\n💼 Portfolio management\n🔒 Secure transactions\n📈 Trading platforms',
        'AI & Machine Learning': '🤖 Fraud detection\n📊 Risk assessment\n💹 Algorithmic trading\n📈 Credit scoring'
      },
      'Education': {
        'Mobile Development': '🎓 Learning apps\n📚 Study tools\n👨‍🏫 Teacher platforms\n🧠 Quiz applications\n📖 E-book readers',
        'Web Development': '🎓 Learning management systems\n📚 Online course platforms\n👨‍🏫 Virtual classrooms\n📊 Student analytics\n📝 Assessment tools',
        'AI & Machine Learning': '🤖 Personalized learning\n📊 Student performance analytics\n💬 AI tutoring\n🎯 Content recommendations'
      },
      'Retail & E-commerce': {
        'Mobile Development': '🛒 Shopping apps\n📱 Loyalty programs\n📦 Delivery tracking\n💳 Mobile payments\n🎯 Personalized shopping',
        'Web Development': '🛒 E-commerce platforms\n📊 Inventory management\n💳 Payment gateways\n📈 Sales analytics\n🎯 Customer portals',
        'AI & Machine Learning': '🤖 Recommendation engines\n📊 Demand forecasting\n💬 Customer service bots\n🎯 Personalization AI'
      }
    };

    return suggestions[industry]?.[service] || 
      `• Custom ${service.toLowerCase()} solutions\n• AI-powered features\n• Scalable architecture\n• Modern user experience\n• Integration capabilities`;
  };

  const getServiceContextualResponse = (industry: string, service: string): string => {
    const responses: Record<string, Record<string, string>> = {
      'Technology': {
        'AI & Machine Learning': `Perfect match! For ${industry} companies, our AI & ML services include:\n\n🤖 **Custom ML Model Development** ($8,000-15,000, 12-16 weeks)\n🚀 **AI Model Deployment & MLOps** ($3,000-6,000, 4-6 weeks)\n📊 **Predictive Analytics Solutions**\n🔮 **Computer Vision & NLP Applications**\n\nTypical results: 300% ROI improvement, 90%+ automation rates. Ready to discuss your specific AI needs?`,
        'Web Development': `Great choice! For ${industry} businesses, we specialize in:\n\n💻 **Modern Web Applications** ($8,000-15,000, 12-16 weeks)\n⚡ **High-performance React/Next.js platforms**\n🔧 **API development and integrations**\n📱 **Responsive, mobile-first design**\n\nOur tech stack: React, Node.js, PostgreSQL, AWS. Want to discuss your web application requirements?`
      },
      'Healthcare': {
        'AI & Machine Learning': `Excellent! Healthcare AI solutions we provide:\n\n🏥 **Medical Data Analytics** (HIPAA compliant)\n🤖 **Patient Management AI Systems**\n📋 **Clinical Decision Support Tools**\n📊 **Predictive Health Analytics**\n\nAll solutions are HIPAA compliant with 99.9% uptime. How can we help transform your healthcare operations?`,
        'Web Development': `Perfect for Healthcare! We build:\n\n🏥 **Patient Portal Systems** ($5,000-12,000)\n📅 **Appointment Management Platforms**\n📋 **Electronic Health Records Integration**\n🔒 **HIPAA-compliant secure platforms**\n\nAll with enterprise-grade security. What's your primary healthcare platform need?`
      }
    };

    return responses[industry]?.[service] || 
      `Excellent choice! ${service} solutions for ${industry} companies typically include custom development, AI integration, and ongoing optimization. Our approach ensures 300% average ROI with modern technologies. What specific challenges are you looking to solve?`;
  };

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    try {
      // Check if we should prioritize local context-aware responses
      const lowerUserMessage = userMessage.toLowerCase();
      const hasSpecificInquiry = lowerUserMessage.includes('web app') || 
        lowerUserMessage.includes('mobile app') || 
        lowerUserMessage.includes('pricing') || 
        lowerUserMessage.includes('timeline') ||
        lowerUserMessage.includes('cost');
        
      const shouldUseLocalResponse = hasSpecificInquiry || 
        (chatState.mode === 'services' && 
         chatState.selectedIndustry && 
         chatState.selectedService && 
         (lowerUserMessage.includes('app') || 
          lowerUserMessage.includes('business') || 
          lowerUserMessage.includes('want') || 
          lowerUserMessage.includes('need')));

      if (shouldUseLocalResponse) {
        console.log('Using local context-aware response for:', chatState.selectedIndustry, chatState.selectedService);
        const response = await simulateGroqResponse(userMessage);
        return response;
      }

      // Try to use Groq API for general inquiries
      const groqApiKey = import.meta.env.VITE_GROQ_API_KEY;
      
      if (groqApiKey) {
        // Use real Groq API with context
        const { groqApiService } = await import('../services/groqApi');
        
        // Convert current conversation to the format expected by Groq
        const conversationHistory = messages
          .filter(msg => !msg.isTyping && msg.type !== 'industry-selector' && msg.type !== 'service-selector')
          .map(msg => ({
            role: msg.isBot ? 'assistant' as const : 'user' as const,
            content: msg.text
          }));

        // Add context about selected industry and service
        let contextualMessage = `IMPORTANT CONTEXT - Mode: ${chatState.mode}. `;
        if (chatState.selectedIndustry && chatState.selectedService) {
          contextualMessage += `The user has specifically selected ${chatState.selectedIndustry} industry and ${chatState.selectedService} service. Provide a SPECIFIC response for ${chatState.selectedService} in the ${chatState.selectedIndustry} industry. DO NOT give generic responses. `;
        } else if (chatState.selectedIndustry) {
          contextualMessage += `User industry: ${chatState.selectedIndustry}. `;
        } else if (chatState.selectedService) {
          contextualMessage += `User service interest: ${chatState.selectedService}. `;
        }
        contextualMessage += `User Question: ${userMessage}`;
        
        console.log('Sending to Groq:', contextualMessage);
        
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

  // Enhanced simulate response with context awareness
  const simulateGroqResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Context-aware responses based on mode and selections
    if (chatState.mode === 'services' && chatState.selectedIndustry && chatState.selectedService) {
      // Mobile app specific responses
      if (chatState.selectedService === 'Mobile Development' && (lowerMessage.includes('mobile app') || lowerMessage.includes('app') || lowerMessage.includes('mobile'))) {
        return `Perfect! For ${chatState.selectedIndustry} mobile apps, we offer comprehensive solutions:\n\n📱 **Native iOS & Android Apps**\n⚡ **Cross-platform React Native**\n🤖 **AI-powered features integration**\n📊 **Real-time analytics and insights**\n🔒 **Enterprise-grade security**\n🚀 **App Store optimization & deployment**\n\n**Process**: UI/UX Design → Development → Testing → App Store Launch\n**Timeline**: 14-18 weeks\n**Includes**: Source code, documentation, 3 months support\n\nWhat type of mobile app functionality do you need? E-commerce, productivity, social, or something else?`;
      }

      // Web app specific responses
      if (chatState.selectedService === 'Web Development' && (lowerMessage.includes('web app') || lowerMessage.includes('website') || lowerMessage.includes('web'))) {
        return `Excellent! For ${chatState.selectedIndustry} web applications, we provide cutting-edge solutions:\n\n💻 **Modern Web Applications**\n⚡ **Progressive Web Apps (PWAs)**\n🚀 **Single Page Applications (SPAs)**\n📊 **Real-time dashboards and analytics**\n🤖 **AI-powered features integration**\n🔒 **Enterprise-grade security**\n\n**Tech Stack**: React, Next.js, Node.js, PostgreSQL\n**Timeline**: 12-16 weeks\n**Includes**: Responsive design, API development, hosting setup\n\nWhat specific web application features do you need? Dashboard, e-commerce, CRM, or something else?`;
      }

      if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        return `For ${chatState.selectedService} in ${chatState.selectedIndustry}, our pricing typically ranges:\n\n💰 **Starter Level**: $3,000-8,000\n🚀 **Professional Level**: $8,000-15,000\n🏢 **Enterprise Level**: Custom pricing\n\nIncludes consultation, development, testing, deployment, and 3 months support. Want a detailed quote for your specific requirements?`;
      }
      
      if (lowerMessage.includes('timeline') || lowerMessage.includes('time')) {
        return `${chatState.selectedService} projects for ${chatState.selectedIndustry} typically take:\n\n⚡ **Planning & Design**: 2-4 weeks\n🛠️ **Development**: 6-12 weeks\n🧪 **Testing & Deployment**: 2-3 weeks\n\n**Total**: 10-19 weeks depending on complexity. We provide weekly progress updates and demos. Need a more specific timeline?`;
      }

      // General business/service inquiry in Services mode
      if (lowerMessage.includes('business') || lowerMessage.includes('need') || lowerMessage.includes('want') || lowerMessage.includes('build') || lowerMessage.includes('develop')) {
        return `Excellent! For ${chatState.selectedService} in the ${chatState.selectedIndustry} industry, we can help you build:\n\n${getServiceSpecificSuggestions(chatState.selectedIndustry, chatState.selectedService)}\n\nOur approach includes AI integration, modern tech stack, and proven methodologies. What specific features or functionality are you looking for?`;
      }
    }

    // Mobile app specific general inquiries (outside of Services mode)
    if (lowerMessage.includes('mobile app') || (lowerMessage.includes('app') && (lowerMessage.includes('build') || lowerMessage.includes('develop') || lowerMessage.includes('create')))) {
      return `Great! We specialize in mobile app development with cutting-edge technology:\n\n📱 **Mobile App Services**:\n• Native iOS & Android development\n• Cross-platform React Native apps\n• Progressive Web Apps (PWAs)\n• AI-powered mobile features\n• Real-time functionality\n• App Store optimization\n\n⏱️ **Timeline**: 14-18 weeks\n\n🚀 **Popular Features**:\n• User authentication & profiles\n• Push notifications\n• In-app payments\n• Social features\n• Offline functionality\n• Analytics integration\n\nSwitch to **Services mode** below and select your industry for personalized recommendations! What type of mobile app are you thinking about?`;
    }

    // Web app specific general inquiries (outside of Services mode)
    if (lowerMessage.includes('web app') || lowerMessage.includes('website') || (lowerMessage.includes('web') && (lowerMessage.includes('build') || lowerMessage.includes('develop') || lowerMessage.includes('create')))) {
      return `Excellent! We create powerful web applications using modern technology:\n\n💻 **Web Development Services**:\n• Modern React/Next.js web applications\n• Progressive Web Apps (PWAs)\n• E-commerce platforms\n• SaaS applications\n• Enterprise web portals\n• API development & integrations\n\n⏱️ **Timeline**: 12-16 weeks\n\n🚀 **Popular Features**:\n• Responsive design (mobile-first)\n• Real-time functionality\n• User authentication & dashboards\n• Payment integrations\n• Analytics & reporting\n• Cloud deployment\n\nSwitch to **Services mode** below and select your industry for targeted recommendations! What type of web application do you need?`;
    }

    // Pricing inquiries (general)
    if (lowerMessage.includes('pricing') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('timeline')) {
      return `Here's our comprehensive pricing structure:\n\n💰 **Service Pricing Ranges**:\n• Developer Portfolios: $800-2,500 (2-3 weeks)\n• AI Chatbots: $2,000-4,500 (4-6 weeks)\n• AI Marketing: $2,500-5,000 (6-8 weeks)\n• E-commerce Platforms: $3,500-7,500 (8-12 weeks)\n• Web Applications: $8,000-15,000 (12-16 weeks)\n• Mobile Applications: $12,000-20,000 (14-18 weeks)\n• ML Model Development: $8,000-15,000 (12-16 weeks)\n\n📋 **All Projects Include**:\n• Free consultation & planning\n• Custom design & development\n• Testing & quality assurance\n• Deployment & launch support\n• 3 months of free support\n\n🎯 **Custom Enterprise Solutions**: Available with tailored pricing\n\nSwitch to **Services mode** for industry-specific pricing! What type of project interests you most?`;
    }

    // Pattern matching for common inquiries with enhanced responses  
    if (lowerMessage.includes('techk') || lowerMessage.includes('teck') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
      return `Our cutting-edge technology stack includes:\n\n🎯 **Frontend**: React, Next.js, Vue.js, React Native\n⚙️ **Backend**: Node.js, Python, PostgreSQL, MongoDB\n🤖 **AI/ML**: TensorFlow, PyTorch, OpenAI, Custom Models\n☁️ **Cloud**: AWS, Azure, Docker, Kubernetes\n🔗 **Blockchain**: Solidity, Web3.js, Ethereum, Polygon\n\nWe choose the best technology for each project's specific needs. What type of solution are you building?`;
    }

    if (lowerMessage.includes('compaj') || lowerMessage.includes('compan') || lowerMessage.includes('about') || lowerMessage.includes('upstraiq')) {
      return `UPSTRAIQ is a leading AI-powered digital transformation company:\n\n🎯 **Our Mission**: Transform businesses through intelligent automation\n📊 **Track Record**: 1,500+ projects, 300% average ROI, 4.9/5 satisfaction\n🌟 **Specialties**: 12 core AI-powered services\n🏆 **Industries**: Technology, Healthcare, Finance, Education, and more\n\nWe're passionate about helping businesses unlock AI's potential. How can we transform your business?`;
    }

    // Enhanced responses for general mode inquiries
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('what can you do')) {
      return "We offer 12 comprehensive AI-powered services:\n\n🤖 **AI Marketing Automation** - Smart campaigns that adapt automatically\n🛒 **E-commerce Platforms** - AI-driven online stores with personalization\n🎓 **Educational Platforms** - Modern LMS with adaptive learning\n💼 **CRM Platforms** - Intelligent customer relationship management\n📱 **Mobile & Web Applications** - High-performance, scalable solutions\n🔗 **Blockchain Applications** - Smart contracts and DeFi integration\n🧠 **ML Model Development** - Custom machine learning solutions\n\n⏱️ **Timeline**: 2-20 weeks based on project scope\n\nEach service includes AI integration for maximum efficiency. Switch to **Services mode** below for personalized recommendations!";
    }

    // Company and about inquiries
    if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who are you') || lowerMessage.includes('upstraiq')) {
      return `**UPSTRAIQ** is a leading AI-powered digital transformation company:\n\n🎯 **Our Mission**: Transform businesses through intelligent automation and cutting-edge AI solutions\n\n📊 **Track Record**:\n• 1,500+ successful projects completed\n• 300% average ROI for our clients\n• 4.9/5 client satisfaction rating\n• 99% project success rate\n\n🌟 **What Sets Us Apart**:\n• AI-first approach to every solution\n• End-to-end digital transformation\n• Proven methodologies and processes\n• Expert team of AI specialists\n• Ongoing support and optimization\n\n🏆 **Industries We Serve**: Technology, Healthcare, Finance, Education, Manufacturing, Retail, and more\n\nHow can we help transform your business with AI?`;
    }

    // Technology and technical inquiries
    if (lowerMessage.includes('technology') || lowerMessage.includes('tech stack') || lowerMessage.includes('how do you build') || lowerMessage.includes('development')) {
      return `We use cutting-edge technologies and proven methodologies:\n\n🛠️ **Our Technology Stack**:\n• **Frontend**: React, Next.js, Vue.js, React Native\n• **Backend**: Node.js, Python, PostgreSQL, MongoDB\n• **AI/ML**: TensorFlow, PyTorch, OpenAI, Custom Models\n• **Cloud**: AWS, Azure, Docker, Kubernetes\n• **Blockchain**: Solidity, Web3.js, Ethereum, Polygon\n\n⚡ **Our Development Process**:\n1. **Discovery & Strategy** (1-3 weeks) - Understanding your needs\n2. **Design & Architecture** (2-4 weeks) - Planning the solution\n3. **Development & AI Integration** (6-16 weeks) - Building your solution\n4. **Testing & Deployment** (1-3 weeks) - Ensuring quality\n5. **Ongoing Support & Optimization** - Continuous improvement\n\nWe follow agile methodologies with regular demos and feedback cycles. What type of solution are you interested in building?`;
    }

    // Case studies and results
    if (lowerMessage.includes('case stud') || lowerMessage.includes('example') || lowerMessage.includes('results') || lowerMessage.includes('success') || lowerMessage.includes('portfolio')) {
      return `Here are some of our standout success stories:\n\n🎯 **TechCorp**: 300% ROI increase with AI marketing automation\n• Challenge: Manual marketing processes\n• Solution: AI-powered campaign automation\n• Result: 300% ROI, 50% time savings\n\n🛍️ **Fashion Forward**: 500% sales growth with AI e-commerce platform\n• Challenge: Low online conversion rates\n• Solution: AI-driven personalization engine\n• Result: 500% sales increase, 85% better user engagement\n\n📚 **EduTech Academy**: 85% student engagement boost\n• Challenge: Low student completion rates\n• Solution: Personalized learning platform with AI\n• Result: 85% engagement increase, 70% completion rate\n\n📈 **GrowthCorp**: 400% lead conversion improvement\n• Challenge: Poor lead management\n• Solution: Intelligent CRM with AI scoring\n• Result: 400% better conversions, 60% faster sales cycle\n\n🏃 **FitTrack**: 2M+ mobile app downloads\n• Challenge: User retention in fitness apps\n• Solution: Gamified AI-powered fitness experience\n• Result: 2M+ downloads, 80% retention rate\n\nOur average client sees **300% ROI** with **99% project success rate**. Which type of success story interests you most?`;
    }

    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi ') || lowerMessage.includes('hey') || lowerMessage.includes('good morning') || lowerMessage.includes('good afternoon')) {
      return "Hello! Great to meet you! 👋 I'm UPSTRAIQ's AI Assistant, here to help you discover how we can transform your business with cutting-edge AI solutions.\n\n🎯 **Quick Start Options**:\n👤 **General** - Learn about our company, technologies, and approach\n⭐ **Services** - Get personalized service recommendations for your industry\n✉️ **Contact** - Connect directly with our team\n\n💡 **Popular Topics**: Services overview, pricing info, case studies, technology stack\n\nWhat would you like to explore first?";
    }

    // Thank you responses
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('appreciate')) {
      return "You're very welcome! 😊 I'm here whenever you need information about our AI services, pricing, or want to connect with our team.\n\n🔄 **Continue Exploring**:\n• Ask about specific services or technologies\n• Learn about our case studies and success stories\n• Get detailed pricing for your project type\n• Connect with our sales team\n\nFeel free to explore different modes below or ask me anything else!";
    }

    // Help and guidance responses  
    if (lowerMessage.includes('help') || lowerMessage.includes('guide') || lowerMessage.includes('how to') || lowerMessage.includes('what can i ask')) {
      return "I'd love to help! Here's everything I can assist you with:\n\n🏢 **Company Information**\n• Our story, mission, and values\n• Track record and achievements\n• Industries we serve\n\n⚙️ **Services & Solutions**\n• 12 comprehensive AI-powered services\n• Technology stack and methodologies\n• Custom vs. standard solutions\n\n💰 **Pricing & Timelines**\n• Service-specific pricing ranges\n• Project duration estimates\n• What's included in each package\n\n📊 **Success Stories**\n• Detailed case studies\n• ROI and performance results\n• Industry-specific examples\n\n📞 **Getting Started**\n• Contact options and next steps\n• Consultation process\n• Custom proposals\n\n💡 **Try asking**: \"What services do you offer?\", \"Show me case studies\", \"What's your pricing?\", or use the mode buttons below!";
    }

    // AI and digital transformation inquiries
    if (lowerMessage.includes('ai ') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning') || lowerMessage.includes('digital transformation')) {
      return `**AI & Digital Transformation** is at the core of everything we do:\n\n🧠 **AI Capabilities**:\n• **Custom ML Model Development** - Tailored algorithms for your business\n• **AI Model Deployment & MLOps** - Production-ready AI systems\n• **Natural Language Processing** - Chatbots, content analysis, sentiment\n• **Computer Vision** - Image recognition, quality control, automation\n• **Predictive Analytics** - Forecasting, demand planning, risk assessment\n• **Recommendation Systems** - Personalization engines for better engagement\n\n🚀 **Transformation Results**:\n• **300% average ROI** improvement for our clients\n• **90%+ automation** rates in business processes\n• **Real-time optimization** and intelligent decision making\n• **Scalable AI infrastructure** that grows with your business\n\n🎯 **Popular AI Applications**:\n• Marketing automation with predictive analytics\n• E-commerce personalization engines\n• Customer service chatbots and virtual assistants\n• Process automation and workflow optimization\n\nWhat specific AI challenge can we help you solve?`;
    }

    // Business and industry general inquiries
    if (lowerMessage.includes('business') || lowerMessage.includes('startup') || lowerMessage.includes('company') || lowerMessage.includes('enterprise')) {
      return `Perfect! We help businesses of all sizes achieve digital transformation:\n\n🚀 **For Startups**:\n• MVP development and validation\n• Scalable architecture from day one\n• AI-powered growth tools\n• Fast time-to-market solutions\n\n🏢 **For Small-Medium Business**:\n• Process automation and efficiency\n• Customer engagement platforms\n• Data analytics and insights\n• Competitive advantage through AI\n\n🏭 **For Enterprise**:\n• Complex system integrations\n• Large-scale AI implementations\n• Digital transformation strategy\n• Custom enterprise solutions\n\n📊 **All Business Solutions Include**:\n• Free consultation and strategy session\n• Scalable, future-proof architecture\n• AI integration for competitive advantage\n• Ongoing support and optimization\n\nWhat size business are you working with? Switch to **Services mode** for industry-specific recommendations!`;
    }

    // General questions about getting started
    if (lowerMessage.includes('get started') || lowerMessage.includes('begin') || lowerMessage.includes('start') || lowerMessage.includes('next steps')) {
      return `Great! Here's how to get started with your AI transformation:\n\n🎯 **Step 1: Discovery Call** (Free - 30 minutes)\n• Understand your business goals and challenges\n• Identify opportunities for AI integration\n• Discuss your technical requirements\n• Provide initial recommendations\n\n📋 **Step 2: Custom Proposal** (Free - 2-3 days)\n• Detailed project scope and timeline\n• Technology recommendations\n• Transparent pricing breakdown\n• Success metrics and ROI projections\n\n🚀 **Step 3: Project Kickoff** (1 week)\n• Finalize requirements and specifications\n• Set up development environment\n• Establish communication channels\n• Begin development sprint planning\n\n📞 **Ready to Start?**\n• **Schedule a Call**: Click **Contact mode** below to open calendar popup\n• Email: info@upstraiq.com\n• Phone: +1 (555) 123-4567\n• Use **Contact mode** below for immediate connection\n\n💡 **Or continue exploring** our services and case studies to learn more!`;
    }

            // Context-aware fallback for Services mode
    if (chatState.mode === 'services' && chatState.selectedIndustry && chatState.selectedService) {
      return `I understand you're interested in ${chatState.selectedService} for your ${chatState.selectedIndustry} business. Here's what we can help you build:\n\n${getServiceSpecificSuggestions(chatState.selectedIndustry, chatState.selectedService)}\n\n⏱️ **Timeline**: 10-18 weeks with weekly progress updates\n🎯 **Includes**: Full development, testing, deployment, and 3 months support\n\nWhat specific features or functionality do you need? I can provide more detailed information about timeline or technical approach.`;
    }

    // Default response with mode suggestions
    return `Thanks for your question! I can provide detailed information about:\n\n• UPSTRAIQ's AI-powered services and solutions\n• Pricing, timelines, and project planning\n• Success stories and case studies\n• Our technology stack and development process\n• Getting started with your digital transformation\n\nTry using the mode buttons below for targeted assistance, or ask me anything specific!`;
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



  const renderIndustrySelector = () => (
    <div className="grid grid-cols-2 gap-2 mt-3">
      {industries.map((industry) => (
        <button
          key={industry}
          onClick={() => handleIndustrySelection(industry)}
          className="p-2 bg-[#333] hover:bg-[#444] border border-[#555] hover:border-[#0070f3] rounded-lg text-xs text-white transition-all duration-200"
        >
          {industry}
        </button>
      ))}
    </div>
  );

  const renderServiceSelector = () => (
    <div className="grid grid-cols-1 gap-2 mt-3">
      {serviceCategories.map((service) => (
        <button
          key={service}
          onClick={() => handleServiceSelection(service)}
          className="p-3 bg-[#333] hover:bg-[#444] border border-[#555] hover:border-[#0070f3] rounded-lg text-sm text-white transition-all duration-200 text-left"
        >
          {service}
        </button>
      ))}
    </div>
  );

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
              onClick={resetConversation}
              className="text-[#888] hover:text-white p-1 rounded transition-colors duration-200"
              title="Reset conversation"
            >
              <RotateCcw size={16} />
            </button>
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id}>
                  <div
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
                      
                      {/* Show Calendly button for contact mode messages */}
                      {message.isBot && chatState.mode === 'contact' && message.text.includes('Schedule a Call') && (
                        <div className="mt-3">
                          <CalendlyButton 
                            variant="compact"
                            className="w-full bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-200"
                            buttonText="Schedule Your Call"
                            showIcon={true}
                          />
                        </div>
                      )}
                      
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

                  {/* Render selectors for specific message types */}
                  {message.type === 'industry-selector' && renderIndustrySelector()}
                  {message.type === 'service-selector' && renderServiceSelector()}
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#333]">
              <div className="flex items-center gap-2 mb-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
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

              {/* Navigation Modes */}
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={() => handleModeChange('general')}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 ${
                    chatState.mode === 'general'
                      ? 'bg-[#0070f3] text-white'
                      : 'bg-[#333] text-[#888] hover:text-white hover:bg-[#444]'
                  }`}
                >
                  <User size={16} />
                  <span className="text-xs">General</span>
                </button>

                <button
                  onClick={() => handleModeChange('services')}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 ${
                    chatState.mode === 'services'
                      ? 'bg-[#0070f3] text-white'
                      : 'bg-[#333] text-[#888] hover:text-white hover:bg-[#444]'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                  <span className="text-xs">Services</span>
                </button>

                <button
                  onClick={() => handleModeChange('contact')}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 ${
                    chatState.mode === 'contact'
                      ? 'bg-[#0070f3] text-white'
                      : 'bg-[#333] text-[#888] hover:text-white hover:bg-[#444]'
                  }`}
                >
                  <Mail size={16} />
                  <span className="text-xs">Contact</span>
                </button>
              </div>

              {/* Reset conversation button */}
              <div className="text-center">
                <button
                  onClick={resetConversation}
                  className="text-xs text-[#0070f3] hover:text-[#50e3c2] transition-colors duration-200"
                >
                  Reset conversation
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;