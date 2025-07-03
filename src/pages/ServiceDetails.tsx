import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Star, 
  Users, 
  TrendingUp, 
  ArrowRight,
  Zap,
  Target,
  Bot, 
  ShoppingCart, 
  GraduationCap, 
  User, 
  Globe, 
  Smartphone, 
  Database, 
  MessageCircle, 
  MapPin, 
  Layers, 
  Brain,
  Settings
} from 'lucide-react';

interface ServiceDetailsProps {
  currentPage: string;
  serviceId: string;
  onContactClick: () => void;
  onBack: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ 
  currentPage, 
  serviceId, 
  onContactClick, 
  onBack 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const serviceIcons = {
    'ai-marketing': Bot,
    'ecommerce': ShoppingCart,
    'education': GraduationCap,
    'portfolio': User,
    'web-apps': Globe,
    'mobile-apps': Smartphone,
    'crm': Database,
    'chatbots': MessageCircle,
    'gps-tracking': MapPin,
    'blockchain': Layers,
    'ml-models': Brain,
    'ai-deployment': Zap
  };

  const services = {
    'ai-marketing': {
      title: "AI Marketing Automation",
      description: "Transform your marketing efforts with intelligent automation that adapts, learns, and optimizes campaigns in real-time.",
      fullDescription: "Our AI Marketing Automation platform revolutionizes how businesses connect with their audience. Using advanced machine learning algorithms, we create intelligent campaigns that continuously adapt based on user behavior, market trends, and performance data. The system automatically optimizes ad spend, personalizes content for different audience segments, and predicts the best times to engage with customers for maximum impact.",
      features: [
        "Smart Campaign Optimization",
        "Personalized Content Generation", 
        "Predictive Analytics",
        "A/B Testing Automation",
        "Customer Journey Mapping",
        "Real-time Performance Tracking"
      ],
      benefits: [
        "300% increase in conversion rates",
        "50% reduction in customer acquisition cost",
        "90% time savings on campaign management",
        "Real-time optimization and adjustments"
      ],
      process: [
        {
          title: "Discovery & Strategy",
          description: "We analyze your current marketing efforts and develop a comprehensive AI strategy.",
          duration: "1-2 weeks"
        },
        {
          title: "Platform Setup",
          description: "Implementation of AI tools and integration with your existing systems.",
          duration: "2-3 weeks"
        },
        {
          title: "Training & Optimization",
          description: "Machine learning model training with your data for optimal performance.",
          duration: "2-3 weeks"
        },
        {
          title: "Launch & Monitor",
          description: "Go-live with continuous monitoring and performance optimization.",
          duration: "Ongoing"
        }
      ],
      technologies: ["TensorFlow", "Python", "Google Ads API", "Facebook Marketing API", "Analytics 4.0"],
      pricing: {
        starter: { price: "$2,500", features: ["Basic automation", "Email campaigns", "Social media scheduling"] },
        professional: { price: "$5,000", features: ["Advanced AI optimization", "Cross-platform campaigns", "Predictive analytics"] },
        enterprise: { price: "Custom", features: ["Full AI suite", "Custom integrations", "Dedicated support"] }
      },
      testimonial: {
        quote: "The AI marketing automation increased our ROI by 400% in just 3 months.",
        author: "Sarah Johnson",
        position: "Marketing Director at TechCorp"
      },
      color: "from-[#0070f3] to-[#50e3c2]",
      category: "ai",
      duration: "6-8 weeks",
      rating: 4.9,
      clients: "150+"
    },
    'ecommerce': {
      title: "E-commerce Platforms",
      description: "Build powerful online stores with AI-driven recommendations and seamless user experiences.",
      fullDescription: "Our e-commerce platforms combine cutting-edge technology with intelligent automation to create online stores that not only look stunning but also drive sales. We integrate AI-powered product recommendations, smart inventory management, and automated customer service to provide a complete e-commerce solution that grows with your business.",
      features: [
        "AI Product Recommendations",
        "Smart Inventory Management",
        "Customer Analytics Dashboard",
        "Payment Gateway Integration",
        "Mobile-First Design",
        "SEO Optimization"
      ],
      benefits: [
        "250% increase in average order value",
        "70% improvement in customer retention",
        "80% reduction in cart abandonment",
        "Automated inventory optimization"
      ],
      process: [
        {
          title: "Requirements Analysis",
          description: "Understanding your products, target audience, and business goals.",
          duration: "1-2 weeks"
        },
        {
          title: "Design & Development",
          description: "Creating custom designs and developing the e-commerce platform.",
          duration: "4-6 weeks"
        },
        {
          title: "AI Integration",
          description: "Implementing recommendation engines and smart features.",
          duration: "2-3 weeks"
        },
        {
          title: "Testing & Launch",
          description: "Comprehensive testing and deployment to production.",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["React", "Node.js", "Stripe", "Shopify API", "Machine Learning", "MongoDB"],
      pricing: {
        starter: { price: "$3,500", features: ["Basic e-commerce", "Payment processing", "Product catalog"] },
        professional: { price: "$7,500", features: ["AI recommendations", "Advanced analytics", "Multi-vendor support"] },
        enterprise: { price: "Custom", features: ["Custom integrations", "Enterprise features", "24/7 support"] }
      },
      testimonial: {
        quote: "Our online sales tripled within 6 months of launching the new platform.",
        author: "Mike Chen",
        position: "CEO at Fashion Forward"
      },
      color: "from-[#50e3c2] to-[#0070f3]",
      category: "business",
      duration: "8-12 weeks",
      rating: 4.8,
      clients: "200+"
    },
    'education': {
      title: "Educational Platforms",
      description: "Modern learning management systems with AI-powered personalized learning paths and student analytics.",
      fullDescription: "Our educational platforms transform traditional learning into engaging, personalized experiences. Using AI algorithms, we create adaptive learning paths that adjust to each student's pace and learning style. The platform includes comprehensive analytics for educators, virtual classroom capabilities, and seamless integration with existing educational tools.",
      features: [
        "Personalized Learning Paths",
        "Student Progress Analytics",
        "Virtual Classrooms",
        "Assignment Management",
        "Grade Book Integration",
        "Parent Portal Access"
      ],
      benefits: [
        "40% improvement in student engagement",
        "60% faster grading and feedback",
        "Real-time progress tracking",
        "Reduced administrative workload"
      ],
      process: [
        {
          title: "Educational Assessment",
          description: "Analyzing current teaching methods and identifying improvement opportunities.",
          duration: "2-3 weeks"
        },
        {
          title: "Platform Design",
          description: "Creating user-friendly interfaces for students, teachers, and administrators.",
          duration: "4-5 weeks"
        },
        {
          title: "Content Integration",
          description: "Migrating existing content and setting up new learning modules.",
          duration: "3-4 weeks"
        },
        {
          title: "Training & Deployment",
          description: "Staff training and gradual platform rollout with ongoing support.",
          duration: "2-3 weeks"
        }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "AI Analytics", "LTI Integration"],
      pricing: {
        starter: { price: "$4,000", features: ["Basic LMS", "Student portal", "Grade management"] },
        professional: { price: "$8,500", features: ["AI personalization", "Virtual classrooms", "Advanced analytics"] },
        enterprise: { price: "Custom", features: ["Multi-campus support", "Custom integrations", "White-label solution"] }
      },
      testimonial: {
        quote: "Student engagement increased by 45% and our teachers save 3 hours per week on administrative tasks.",
        author: "Dr. Emily Rodriguez",
        position: "Principal at Lincoln High School"
      },
      color: "from-[#0070f3] to-[#8b5cf6]",
      category: "web",
      duration: "10-14 weeks",
      rating: 4.7,
      clients: "80+"
    },
    'portfolio': {
      title: "Developer Portfolios",
      description: "Stunning portfolio websites that showcase your work professionally with interactive galleries and modern design.",
      fullDescription: "Create a lasting impression with a professionally designed portfolio that showcases your skills and projects. Our portfolio websites feature interactive project galleries, smooth animations, and optimized performance. Each portfolio is uniquely designed to reflect your personal brand and includes features like blog integration, contact forms, and resume downloads.",
      features: [
        "Interactive Project Galleries",
        "Resume Integration",
        "Blog System",
        "Contact Forms",
        "Skills Showcase",
        "Testimonials Section"
      ],
      benefits: [
        "Professional online presence",
        "Increased client inquiries by 200%",
        "Mobile-responsive design",
        "SEO optimized for visibility"
      ],
      process: [
        {
          title: "Brand Discovery",
          description: "Understanding your personal brand, style preferences, and target audience.",
          duration: "3-5 days"
        },
        {
          title: "Design & Development",
          description: "Creating custom designs and building the portfolio with modern technologies.",
          duration: "1-2 weeks"
        },
        {
          title: "Content Integration",
          description: "Adding your projects, resume, and optimizing for search engines.",
          duration: "3-5 days"
        },
        {
          title: "Launch & Optimization",
          description: "Final testing, deployment, and performance optimization.",
          duration: "2-3 days"
        }
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "CMS Integration"],
      pricing: {
        starter: { price: "$800", features: ["Basic portfolio", "Project showcase", "Contact form"] },
        professional: { price: "$1,500", features: ["Custom design", "Blog integration", "SEO optimization"] },
        enterprise: { price: "$2,500", features: ["Advanced animations", "CMS integration", "Analytics dashboard"] }
      },
      testimonial: {
        quote: "My new portfolio helped me land 3 freelance projects within the first month!",
        author: "Alex Thompson",
        position: "Frontend Developer"
      },
      color: "from-[#8b5cf6] to-[#50e3c2]",
      category: "web",
      duration: "2-3 weeks",
      rating: 4.9,
      clients: "500+"
    },
    'web-apps': {
      title: "Web Applications",
      description: "High-performance web applications built with cutting-edge technologies and scalable cloud architecture.",
      fullDescription: "Build powerful web applications that scale with your business needs. Our web applications are designed with modern architecture, real-time capabilities, and cloud-native infrastructure. We focus on performance, security, and user experience to deliver applications that drive business growth and user engagement.",
      features: [
        "Real-time Features",
        "Cloud Integration",
        "Scalable Architecture",
        "API Development",
        "Database Design",
        "Security Implementation"
      ],
      benefits: [
        "99.9% uptime guarantee",
        "Handles 10,000+ concurrent users",
        "50% faster load times",
        "Enterprise-grade security"
      ],
      process: [
        {
          title: "Requirements Gathering",
          description: "Detailed analysis of business requirements and technical specifications.",
          duration: "2-3 weeks"
        },
        {
          title: "Architecture Design",
          description: "System architecture planning and technology stack selection.",
          duration: "1-2 weeks"
        },
        {
          title: "Development Sprint",
          description: "Agile development with regular demos and feedback cycles.",
          duration: "8-10 weeks"
        },
        {
          title: "Testing & Deployment",
          description: "Comprehensive testing and production deployment with monitoring.",
          duration: "2-3 weeks"
        }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS/Azure", "Docker"],
      pricing: {
        starter: { price: "$8,000", features: ["Basic web app", "User authentication", "Database integration"] },
        professional: { price: "$15,000", features: ["Advanced features", "Real-time capabilities", "Cloud deployment"] },
        enterprise: { price: "Custom", features: ["Microservices", "High availability", "Enterprise integrations"] }
      },
      testimonial: {
        quote: "The web application transformed our business operations and increased efficiency by 300%.",
        author: "Jessica Park",
        position: "CTO at Innovatetech"
      },
      color: "from-[#50e3c2] to-[#0070f3]",
      category: "web",
      duration: "12-16 weeks",
      rating: 4.8,
      clients: "120+"
    },
    'mobile-apps': {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      fullDescription: "Reach your audience on mobile with professionally crafted applications that deliver exceptional user experiences. Our mobile apps are built with performance in mind, featuring smooth animations, offline capabilities, and native integrations. Whether you need iOS, Android, or cross-platform solutions, we deliver apps that users love.",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Analytics Integration"
      ],
      benefits: [
        "Reach millions of mobile users",
        "Native performance on all devices",
        "App store approval assistance",
        "Ongoing maintenance and updates"
      ],
      process: [
        {
          title: "App Strategy & Planning",
          description: "Market research, feature planning, and platform strategy development.",
          duration: "2-3 weeks"
        },
        {
          title: "UI/UX Design",
          description: "Creating intuitive user interfaces optimized for mobile interaction.",
          duration: "3-4 weeks"
        },
        {
          title: "Development & Testing",
          description: "Native development with comprehensive testing on multiple devices.",
          duration: "8-10 weeks"
        },
        {
          title: "App Store Launch",
          description: "Store submission, approval process, and marketing launch support.",
          duration: "2-3 weeks"
        }
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Analytics"],
      pricing: {
        starter: { price: "$12,000", features: ["Single platform", "Basic features", "App store submission"] },
        professional: { price: "$20,000", features: ["Cross-platform", "Advanced features", "Push notifications"] },
        enterprise: { price: "Custom", features: ["Enterprise features", "Backend integration", "White-label solution"] }
      },
      testimonial: {
        quote: "Our mobile app has over 50,000 downloads and a 4.8-star rating on both app stores.",
        author: "David Kim",
        position: "Founder of FitTrack"
      },
      color: "from-[#0070f3] to-[#8b5cf6]",
      category: "web",
      duration: "14-18 weeks",
      rating: 4.7,
      clients: "90+"
    },
    'crm': {
      title: "CRM Platforms",
      description: "Intelligent customer relationship management systems with AI insights and sales automation.",
      fullDescription: "Streamline your sales process with an intelligent CRM that grows with your business. Our CRM platforms feature AI-powered lead scoring, automated follow-ups, and comprehensive analytics. Manage your entire customer lifecycle from lead generation to customer success with tools designed to increase sales efficiency and customer satisfaction.",
      features: [
        "Customer 360° View",
        "Sales Pipeline Automation",
        "Lead Scoring AI",
        "Performance Analytics",
        "Email Integration",
        "Mobile CRM Access"
      ],
      benefits: [
        "30% increase in sales productivity",
        "50% faster lead response time",
        "Improved customer retention",
        "Data-driven sales insights"
      ],
      process: [
        {
          title: "Business Process Analysis",
          description: "Understanding your sales process and customer journey mapping.",
          duration: "1-2 weeks"
        },
        {
          title: "CRM Configuration",
          description: "Setting up workflows, automation rules, and custom fields.",
          duration: "3-4 weeks"
        },
        {
          title: "Data Migration",
          description: "Safely migrating existing customer data and system integrations.",
          duration: "2-3 weeks"
        },
        {
          title: "Training & Go-Live",
          description: "Team training and phased rollout with ongoing support.",
          duration: "3-4 weeks"
        }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Salesforce API", "Zapier", "AI/ML"],
      pricing: {
        starter: { price: "$5,000", features: ["Basic CRM", "Contact management", "Sales pipeline"] },
        professional: { price: "$10,000", features: ["AI lead scoring", "Automation workflows", "Advanced reporting"] },
        enterprise: { price: "Custom", features: ["Custom integrations", "Multi-team support", "Advanced AI features"] }
      },
      testimonial: {
        quote: "Our sales team productivity increased by 40% and we never miss a follow-up anymore.",
        author: "Robert Martinez",
        position: "Sales Director at GrowthCorp"
      },
      color: "from-[#8b5cf6] to-[#50e3c2]",
      category: "business",
      duration: "10-12 weeks",
      rating: 4.8,
      clients: "110+"
    },
    'chatbots': {
      title: "AI Chatbots",
      description: "Intelligent conversational AI that understands context, learns from interactions, and provides human-like responses.",
      fullDescription: "Enhance customer service with AI chatbots that provide instant, intelligent responses 24/7. Our chatbots use natural language processing to understand customer intent and provide personalized assistance. They integrate seamlessly with your existing systems and learn from every interaction to continuously improve performance.",
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "Integration Ready",
        "Continuous Learning",
        "Analytics Dashboard",
        "Human Handoff"
      ],
      benefits: [
        "24/7 customer support availability",
        "80% reduction in response time",
        "Handle 1000+ queries simultaneously",
        "Reduce support costs by 60%"
      ],
      process: [
        {
          title: "Conversation Design",
          description: "Mapping customer journeys and designing conversation flows.",
          duration: "1-2 weeks"
        },
        {
          title: "AI Training",
          description: "Training the chatbot with your specific data and use cases.",
          duration: "2-3 weeks"
        },
        {
          title: "Integration & Testing",
          description: "Integrating with your systems and comprehensive testing.",
          duration: "1-2 weeks"
        },
        {
          title: "Launch & Optimization",
          description: "Deployment with ongoing monitoring and performance optimization.",
          duration: "Ongoing"
        }
      ],
      technologies: ["Python", "TensorFlow", "OpenAI API", "Dialogflow", "Webhook APIs", "Analytics"],
      pricing: {
        starter: { price: "$2,000", features: ["Basic chatbot", "Simple Q&A", "Web integration"] },
        professional: { price: "$4,500", features: ["Advanced NLP", "Multi-platform", "Analytics dashboard"] },
        enterprise: { price: "Custom", features: ["Custom AI model", "Enterprise integrations", "Advanced analytics"] }
      },
      testimonial: {
        quote: "Our AI chatbot handles 80% of customer queries automatically, freeing up our team for complex issues.",
        author: "Lisa Chen",
        position: "Customer Success Manager at SupportPro"
      },
      color: "from-[#50e3c2] to-[#0070f3]",
      category: "ai",
      duration: "4-6 weeks",
      rating: 4.9,
      clients: "300+"
    },
    'gps-tracking': {
      title: "GPS Tracking Solutions",
      description: "Real-time location tracking and fleet management solutions with advanced analytics and route optimization.",
      fullDescription: "Optimize your fleet operations with comprehensive GPS tracking and management solutions. Our platform provides real-time vehicle tracking, route optimization, driver behavior monitoring, and detailed analytics. Perfect for logistics companies, delivery services, and any business that relies on vehicle fleets.",
      features: [
        "Real-time GPS Tracking",
        "Route Optimization",
        "Fleet Management",
        "Geofencing Alerts",
        "Driver Behavior Analytics",
        "Maintenance Scheduling"
      ],
      benefits: [
        "25% reduction in fuel costs",
        "Improved delivery efficiency",
        "Enhanced security and theft prevention",
        "Compliance with regulations"
      ],
      process: [
        {
          title: "Fleet Assessment",
          description: "Analyzing your current fleet operations and identifying optimization opportunities.",
          duration: "1-2 weeks"
        },
        {
          title: "System Design",
          description: "Designing the tracking system and selecting appropriate hardware.",
          duration: "2-3 weeks"
        },
        {
          title: "Installation & Setup",
          description: "Installing GPS devices and configuring the management platform.",
          duration: "2-3 weeks"
        },
        {
          title: "Training & Optimization",
          description: "Staff training and system optimization based on usage patterns.",
          duration: "2-3 weeks"
        }
      ],
      technologies: ["React", "Node.js", "Google Maps API", "GPS Hardware", "Real-time WebSockets", "MongoDB"],
      pricing: {
        starter: { price: "$3,000", features: ["Basic tracking", "5 vehicles", "Web dashboard"] },
        professional: { price: "$6,000", features: ["Advanced features", "25 vehicles", "Mobile app"] },
        enterprise: { price: "Custom", features: ["Unlimited vehicles", "Custom integrations", "API access"] }
      },
      testimonial: {
        quote: "We reduced our delivery times by 30% and fuel costs by 25% with the new tracking system.",
        author: "Mark Johnson",
        position: "Operations Manager at Swift Delivery"
      },
      color: "from-[#0070f3] to-[#8b5cf6]",
      category: "business",
      duration: "8-10 weeks",
      rating: 4.6,
      clients: "70+"
    },
    'blockchain': {
      title: "Blockchain Applications",
      description: "Decentralized applications built on blockchain technology with smart contracts and DeFi integration.",
      fullDescription: "Enter the future of decentralized technology with custom blockchain applications. We develop smart contracts, DeFi protocols, NFT marketplaces, and decentralized applications (dApps) that leverage the power of blockchain technology. Our solutions ensure security, transparency, and decentralization for your digital assets and transactions.",
      features: [
        "Smart Contract Development",
        "DeFi Protocol Integration",
        "NFT Marketplace",
        "Wallet Integration",
        "Cross-chain Compatibility",
        "Security Auditing"
      ],
      benefits: [
        "Transparent and immutable transactions",
        "Reduced intermediary costs",
        "Global accessibility",
        "Enhanced security and trust"
      ],
      process: [
        {
          title: "Blockchain Strategy",
          description: "Analyzing your use case and selecting the optimal blockchain platform.",
          duration: "2-3 weeks"
        },
        {
          title: "Smart Contract Development",
          description: "Writing and testing secure smart contracts for your application.",
          duration: "6-8 weeks"
        },
        {
          title: "dApp Development",
          description: "Building the user interface and connecting to blockchain networks.",
          duration: "6-8 weeks"
        },
        {
          title: "Security Audit & Launch",
          description: "Comprehensive security testing and mainnet deployment.",
          duration: "3-4 weeks"
        }
      ],
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum", "Polygon"],
      pricing: {
        starter: { price: "$15,000", features: ["Basic smart contract", "Simple dApp", "Testnet deployment"] },
        professional: { price: "$30,000", features: ["Complex smart contracts", "Full dApp", "Mainnet deployment"] },
        enterprise: { price: "Custom", features: ["Enterprise blockchain", "Custom protocols", "Multi-chain support"] }
      },
      testimonial: {
        quote: "Our NFT marketplace processed over $2M in transactions in the first quarter.",
        author: "Christopher Lee",
        position: "Founder of DigitalArt Platform"
      },
      color: "from-[#8b5cf6] to-[#50e3c2]",
      category: "ai",
      duration: "16-20 weeks",
      rating: 4.7,
      clients: "40+"
    },
    'ml-models': {
      title: "ML Model Development",
      description: "Custom machine learning models tailored to your business needs with advanced algorithms and data processing.",
      fullDescription: "Unlock the power of your data with custom machine learning models designed specifically for your business challenges. Our ML solutions include predictive analytics, computer vision, natural language processing, and recommendation systems. We handle everything from data preprocessing to model deployment and monitoring.",
      features: [
        "Custom Algorithm Design",
        "Data Pipeline Setup",
        "Model Training & Validation",
        "Performance Optimization",
        "Real-time Inference",
        "Model Monitoring"
      ],
      benefits: [
        "Data-driven decision making",
        "Automated processes and predictions",
        "Competitive advantage through AI",
        "Scalable ML infrastructure"
      ],
      process: [
        {
          title: "Data Analysis & Strategy",
          description: "Analyzing your data and defining ML objectives and success metrics.",
          duration: "2-3 weeks"
        },
        {
          title: "Model Development",
          description: "Developing and training custom ML models using your data.",
          duration: "6-8 weeks"
        },
        {
          title: "Integration & Testing",
          description: "Integrating models into your systems and comprehensive testing.",
          duration: "3-4 weeks"
        },
        {
          title: "Deployment & Monitoring",
          description: "Production deployment with continuous monitoring and optimization.",
          duration: "2-3 weeks"
        }
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "AWS SageMaker"],
      pricing: {
        starter: { price: "$8,000", features: ["Basic ML model", "Data analysis", "Simple deployment"] },
        professional: { price: "$15,000", features: ["Advanced models", "Feature engineering", "Cloud deployment"] },
        enterprise: { price: "Custom", features: ["Complex ML systems", "MLOps pipeline", "Enterprise integration"] }
      },
      testimonial: {
        quote: "The predictive model helped us reduce inventory costs by 35% while improving customer satisfaction.",
        author: "Amanda Foster",
        position: "Data Director at RetailMax"
      },
      color: "from-[#50e3c2] to-[#0070f3]",
      category: "ai",
      duration: "12-16 weeks",
      rating: 4.8,
      clients: "60+"
    },
    'ai-deployment': {
      title: "AI Model Deployment",
      description: "Seamless deployment and scaling of machine learning models with monitoring and automatic optimization.",
      fullDescription: "Take your AI models from development to production with our comprehensive deployment and MLOps solutions. We ensure your models run efficiently at scale with automated monitoring, A/B testing, and continuous improvement. Our deployment solutions handle everything from containerization to auto-scaling and performance optimization.",
      features: [
        "Cloud Deployment",
        "Auto Scaling",
        "Performance Monitoring",
        "A/B Testing",
        "Model Versioning",
        "Automated Retraining"
      ],
      benefits: [
        "99.9% model uptime",
        "Automatic scaling based on demand",
        "Continuous model improvement",
        "Reduced operational overhead"
      ],
      process: [
        {
          title: "Infrastructure Setup",
          description: "Setting up cloud infrastructure and deployment pipelines.",
          duration: "1-2 weeks"
        },
        {
          title: "Model Containerization",
          description: "Packaging models for scalable deployment with Docker and Kubernetes.",
          duration: "1-2 weeks"
        },
        {
          title: "Monitoring Implementation",
          description: "Setting up comprehensive monitoring and alerting systems.",
          duration: "1-2 weeks"
        },
        {
          title: "Optimization & Scaling",
          description: "Performance tuning and implementing auto-scaling capabilities.",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["Docker", "Kubernetes", "AWS/GCP", "MLflow", "Prometheus", "Grafana"],
      pricing: {
        starter: { price: "$3,000", features: ["Basic deployment", "Simple monitoring", "Manual scaling"] },
        professional: { price: "$6,000", features: ["Auto-scaling", "Advanced monitoring", "A/B testing"] },
        enterprise: { price: "Custom", features: ["Multi-cloud", "Advanced MLOps", "Custom integrations"] }
      },
      testimonial: {
        quote: "Our AI models now handle 10x more requests with 99.9% uptime since the new deployment.",
        author: "Kevin Zhang",
        position: "ML Engineering Lead at DataFlow"
      },
      color: "from-[#0070f3] to-[#50e3c2]",
      category: "ai",
      duration: "4-6 weeks",
      rating: 4.9,
      clients: "80+"
    }
  };

  const currentService = services[serviceId as keyof typeof services];
  
  if (!currentService) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <p className="text-[#888] mb-6">The service you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={onBack}
            className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            Go Back to Services
          </button>
        </div>
      </div>
    );
  }

  const ServiceIcon = serviceIcons[serviceId as keyof typeof serviceIcons] || Bot;

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Target },
    { id: 'process', name: 'Process', icon: Settings },
    { id: 'pricing', name: 'Pricing', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0070f3]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#50e3c2]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom py-16 lg:py-24 relative z-10">
        {/* Back Button */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border-2 border-[#333] bg-black/80 text-[#888] hover:text-white hover:border-[#0070f3] hover:shadow-lg hover:shadow-[#0070f3]/20 transition-all duration-300 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Services</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-8">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentService.color} opacity-20 rounded-3xl animate-pulse`}></div>
            <div className={`relative w-full h-full bg-gradient-to-br ${currentService.color} rounded-3xl flex items-center justify-center shadow-xl`}>
              <ServiceIcon size={40} className="lg:w-16 lg:h-16 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 font-space">
            {currentService.title}
          </h1>
          <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto mb-8 leading-relaxed">
            {currentService.description}
          </p>

          {/* Service Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-[#666]">
              <Clock className="w-5 h-5 text-[#50e3c2]" />
              <span className="text-lg">{currentService.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-[#666]">
              <Star className="w-5 h-5 text-[#50e3c2]" />
              <span className="text-lg">{currentService.rating}/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-[#666]">
              <Users className="w-5 h-5 text-[#0070f3]" />
              <span className="text-lg">{currentService.clients} Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex bg-black/80 border border-[#333] rounded-2xl p-2 backdrop-blur-sm">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white shadow-lg'
                      : 'text-[#888] hover:text-white hover:bg-[#333]/50'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span className="font-semibold">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                {/* Full Description */}
                <div className="bg-black/80 border border-[#333] rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-space">About This Service</h2>
                  <p className="text-lg text-[#888] leading-relaxed">
                    {currentService.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="bg-black/80 border border-[#333] rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-space">Key Features</h2>
                  <div className="grid gap-4">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 group">
                        <CheckCircle className="w-6 h-6 text-[#50e3c2] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-lg text-[#888] group-hover:text-white transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Benefits */}
                <div className="bg-gradient-to-br from-black/80 to-[#0070f3]/5 border border-[#333] rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-space">Expected Results</h2>
                  <div className="grid gap-4">
                    {currentService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 group">
                        <TrendingUp className="w-6 h-6 text-[#0070f3] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-lg text-[#888] group-hover:text-white transition-colors duration-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-black/80 border border-[#333] rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-space">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {currentService.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-[#0070f3]/20 to-[#50e3c2]/20 border border-[#333] rounded-xl text-sm font-semibold text-white hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-black/80 to-[#50e3c2]/5 border border-[#333] rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#50e3c2] fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-lg text-[#888] italic mb-6 leading-relaxed">
                    "{currentService.testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-white">{currentService.testimonial.author}</div>
                    <div className="text-[#666]">{currentService.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-space">Our Development Process</h2>
                <p className="text-xl text-[#888] leading-relaxed">
                  We follow a proven methodology to ensure your project's success from start to finish.
                </p>
              </div>

              <div className="grid gap-8">
                {currentService.process.map((step, index) => (
                  <div key={index} className="bg-black/80 border border-[#333] rounded-3xl p-8 lg:p-10 backdrop-blur-sm group hover:border-[#0070f3] transition-colors duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#50e3c2] transition-colors duration-300">
                            {step.title}
                          </h3>
                          <span className="text-sm text-[#666] bg-[#333] px-3 py-1 rounded-full mt-2 sm:mt-0">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-lg text-[#888] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-space">Choose Your Plan</h2>
                <p className="text-xl text-[#888] leading-relaxed">
                  Flexible pricing options to match your business needs and budget.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(currentService.pricing).map(([plan, details], index) => (
                  <div 
                    key={plan}
                    className={`bg-black/80 border-2 rounded-3xl p-8 lg:p-10 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                      index === 1 
                        ? 'border-[#0070f3] shadow-xl shadow-[#0070f3]/20' 
                        : 'border-[#333] hover:border-[#0070f3]'
                    }`}
                  >
                    {index === 1 && (
                      <div className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-4 py-1 rounded-full text-sm font-bold text-center mb-6">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white capitalize mb-4">{plan}</h3>
                      <div className="text-4xl font-bold text-[#50e3c2] mb-2">{details.price}</div>
                      {details.price !== "Custom" && <div className="text-[#666]">One-time payment</div>}
                    </div>

                    <div className="space-y-4 mb-8">
                      {details.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#50e3c2] flex-shrink-0" />
                          <span className="text-[#888]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={onContactClick}
                      className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                        index === 1
                          ? 'bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white hover:scale-105 shadow-lg'
                          : 'border-2 border-[#333] text-white hover:border-[#0070f3] hover:bg-[#0070f3]/10'
                      }`}
                    >
                      {details.price === "Custom" ? "Contact Us" : "Get Started"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 lg:mt-28 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-black/80 to-[#0070f3]/5 border border-[#333] rounded-3xl p-12 lg:p-16 hover:border-[#0070f3] transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-50"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#0070f3]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#50e3c2]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 font-space">
                Ready to Get Started?
              </h3>
              <p className="text-lg lg:text-xl text-[#888] mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss your project requirements and create a custom solution that drives real results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={onContactClick}
                  className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 group"
                >
                  Start Your Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-[#333] text-white px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-semibold hover:border-[#0070f3] hover:bg-[#0070f3]/10 transition-all duration-300 inline-flex items-center gap-3">
                  Schedule Consultation
                  <Clock size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails; 