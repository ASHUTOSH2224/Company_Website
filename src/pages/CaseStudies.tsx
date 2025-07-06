import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  ExternalLink,
  Calendar,
  MapPin,
  Star,
  ChevronDown,
  BarChart3,
  Zap,
  Bot,
  ShoppingCart,
  GraduationCap,
  Globe,
  Database,
  MessageCircle,
  Smartphone,
  Brain
} from 'lucide-react';

interface CaseStudiesProps {
  currentPage: string;
  onContactClick: () => void;
  onBack: () => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ 
  currentPage, 
  onContactClick, 
  onBack 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    { id: 'all', name: 'All Studies' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'saas', name: 'SaaS Platforms' },
    { id: 'mobile', name: 'Mobile Apps' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "TechCorp's AI Marketing Revolution",
      subtitle: "300% ROI Increase with Smart Campaign Automation",
      category: "ai",
      icon: Bot,
      client: "TechCorp Inc.",
      industry: "Technology",
      location: "San Francisco, CA",
      duration: "6 months",
      teamSize: "8 specialists",
      challenge: "TechCorp was struggling with inefficient marketing campaigns, low conversion rates, and high customer acquisition costs. Their manual campaign management was consuming 40+ hours per week.",
      solution: "We implemented our AI Marketing Automation platform with predictive analytics, automated A/B testing, and personalized content generation. The system learned from user behavior patterns and optimized campaigns in real-time.",
      results: [
        { metric: "ROI Increase", value: "300%", description: "Return on marketing investment" },
        { metric: "Conversion Rate", value: "+250%", description: "Campaign conversion improvement" },
        { metric: "Time Savings", value: "90%", description: "Reduction in manual work" },
        { metric: "Cost Reduction", value: "45%", description: "Lower customer acquisition cost" }
      ],
      technologies: ["Python", "TensorFlow", "Google Ads API", "Facebook Marketing API", "BigQuery"],
      testimonial: {
        quote: "The AI marketing platform transformed our entire approach. We went from guessing to knowing exactly what works.",
        author: "Sarah Johnson",
        position: "CMO at TechCorp"
      },
      image: "/api/placeholder/600/400",
      featured: true,
      color: "from-[#0070f3] to-[#50e3c2]"
    },
    {
      id: 2,
      title: "Fashion Forward's E-commerce Empire",
      subtitle: "500% Sales Growth with AI-Powered Recommendations",
      category: "ecommerce",
      icon: ShoppingCart,
      client: "Fashion Forward",
      industry: "Fashion Retail",
      location: "New York, NY",
      duration: "8 months",
      teamSize: "12 specialists",
      challenge: "Fashion Forward's online store had high bounce rates, low average order values, and poor customer retention. Their conversion rate was below industry standards at 1.2%.",
      solution: "We built a comprehensive e-commerce platform with AI-powered product recommendations, smart inventory management, and personalized shopping experiences. The platform analyzed customer behavior to suggest relevant products.",
      results: [
        { metric: "Sales Growth", value: "500%", description: "Total revenue increase" },
        { metric: "AOV Increase", value: "+180%", description: "Average order value boost" },
        { metric: "Conversion Rate", value: "4.8%", description: "From 1.2% to 4.8%" },
        { metric: "Customer Retention", value: "+320%", description: "Repeat purchase rate" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Machine Learning", "Redis"],
      testimonial: {
        quote: "Our online sales exploded after the new platform launch. The AI recommendations are incredibly accurate.",
        author: "Mike Chen",
        position: "CEO at Fashion Forward"
      },
      image: "/api/placeholder/600/400",
      featured: true,
      color: "from-[#50e3c2] to-[#0070f3]"
    },
    {
      id: 3,
      title: "EduTech Academy's Learning Revolution",
      subtitle: "85% Student Engagement Boost with Personalized Learning",
      category: "saas",
      icon: GraduationCap,
      client: "EduTech Academy",
      industry: "Education Technology",
      location: "Austin, TX",
      duration: "10 months",
      teamSize: "15 specialists",
      challenge: "EduTech Academy's traditional LMS had low student engagement, poor completion rates, and limited analytics. Teachers struggled to track individual student progress effectively.",
      solution: "We developed an AI-powered educational platform with personalized learning paths, real-time analytics, and adaptive content delivery. The system adjusted difficulty based on student performance.",
      results: [
        { metric: "Engagement Rate", value: "+85%", description: "Student platform usage" },
        { metric: "Completion Rate", value: "+160%", description: "Course completion improvement" },
        { metric: "Teacher Efficiency", value: "+120%", description: "Time savings on admin tasks" },
        { metric: "Student Satisfaction", value: "4.9/5", description: "Platform rating" }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "AI Analytics", "Docker"],
      testimonial: {
        quote: "The personalized learning paths have revolutionized how our students learn. Engagement is through the roof!",
        author: "Dr. Emily Rodriguez",
        position: "Principal at EduTech Academy"
      },
      image: "/api/placeholder/600/400",
      featured: false,
      color: "from-[#8b5cf6] to-[#50e3c2]"
    },
    {
      id: 4,
      title: "GrowthCorp's Sales Acceleration",
      subtitle: "400% Lead Conversion with Intelligent CRM",
      category: "saas",
      icon: Database,
      client: "GrowthCorp Solutions",
      industry: "B2B Software",
      location: "Seattle, WA",
      duration: "7 months",
      teamSize: "10 specialists",
      challenge: "GrowthCorp's sales team was losing leads, missing follow-ups, and struggling with manual data entry. Their conversion rate was only 8% and sales cycle was 6+ months.",
      solution: "We implemented an intelligent CRM platform with AI-powered lead scoring, automated follow-ups, and predictive analytics. The system prioritized high-value leads and streamlined the sales process.",
      results: [
        { metric: "Lead Conversion", value: "+400%", description: "From 8% to 40% conversion rate" },
        { metric: "Sales Cycle", value: "-60%", description: "Reduced from 6 to 2.4 months" },
        { metric: "Team Productivity", value: "+250%", description: "More deals per rep" },
        { metric: "Revenue Growth", value: "+380%", description: "Quarterly revenue increase" }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Salesforce API", "Machine Learning", "Zapier"],
      testimonial: {
        quote: "Our sales team is now unstoppable. The AI lead scoring helps us focus on the right prospects every time.",
        author: "Robert Martinez",
        position: "VP Sales at GrowthCorp"
      },
      image: "/api/placeholder/600/400",
      featured: false,
      color: "from-[#0070f3] to-[#8b5cf6]"
    },
    {
      id: 5,
      title: "FitTrack's Mobile App Success",
      subtitle: "2M+ Downloads with Gamified Fitness Experience",
      category: "mobile",
      icon: Smartphone,
      client: "FitTrack Wellness",
      industry: "Health & Fitness",
      location: "Los Angeles, CA",
      duration: "12 months",
      teamSize: "18 specialists",
      challenge: "FitTrack needed a mobile app to compete with established fitness brands. They wanted to create an engaging, gamified experience that would drive user retention and premium subscriptions.",
      solution: "We developed a comprehensive fitness mobile app with AI-powered workout recommendations, social features, gamification elements, and premium content. The app included progress tracking and community challenges.",
      results: [
        { metric: "Downloads", value: "2M+", description: "Total app downloads" },
        { metric: "User Retention", value: "78%", description: "30-day retention rate" },
        { metric: "Premium Subscriptions", value: "45%", description: "Conversion to paid plans" },
        { metric: "App Store Rating", value: "4.8/5", description: "Average user rating" }
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Machine Learning", "Stripe"],
      testimonial: {
        quote: "The app exceeded all our expectations. Our users are incredibly engaged and the premium conversion rate is amazing.",
        author: "David Kim",
        position: "Founder of FitTrack"
      },
      image: "/api/placeholder/600/400",
      featured: false,
      color: "from-[#50e3c2] to-[#0070f3]"
    },
    {
      id: 6,
      title: "SupportPro's AI Customer Service",
      subtitle: "90% Query Resolution with Intelligent Chatbots",
      category: "ai",
      icon: MessageCircle,
      client: "SupportPro Inc.",
      industry: "Customer Service",
      location: "Chicago, IL",
      duration: "4 months",
      teamSize: "6 specialists",
      challenge: "SupportPro was overwhelmed with customer queries, long response times, and high support costs. Their team was working overtime but customer satisfaction was declining.",
      solution: "We implemented an AI chatbot system with natural language processing, multi-language support, and seamless human handoff. The bot learned from every interaction to improve responses.",
      results: [
        { metric: "Query Resolution", value: "90%", description: "Automated resolution rate" },
        { metric: "Response Time", value: "-95%", description: "From hours to seconds" },
        { metric: "Cost Reduction", value: "70%", description: "Support operation savings" },
        { metric: "Customer Satisfaction", value: "+180%", description: "CSAT score improvement" }
      ],
      technologies: ["Python", "TensorFlow", "OpenAI API", "Dialogflow", "Node.js", "PostgreSQL"],
      testimonial: {
        quote: "Our AI chatbot handles 90% of queries perfectly. Our team can now focus on complex issues that truly need human touch.",
        author: "Lisa Chen",
        position: "Head of Customer Success at SupportPro"
      },
      image: "/api/placeholder/600/400",
      featured: false,
      color: "from-[#8b5cf6] to-[#0070f3]"
    }
  ];

  const getFilteredStudies = () => {
    if (selectedCategory === 'all') return caseStudies;
    return caseStudies.filter(study => study.category === selectedCategory);
  };

  const toggleExpanded = (studyId: number) => {
    setExpandedStudy(expandedStudy === studyId ? null : studyId);
  };

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

        {/* Header Section */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#333] bg-black/80 backdrop-blur-sm mb-8 lg:mb-12">
            <Award className="w-5 h-5 text-[#0070f3]" />
            <span className="text-base text-[#888] font-medium">Success Stories</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 font-space">
            Transformative <span className="gradient-text-accent">Case Studies</span>
          </h1>
          <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto mb-12 lg:mb-16 leading-relaxed">
            Discover how we've helped leading companies achieve extraordinary results with our AI-powered solutions. 
            Real projects, real impact, real transformation.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12">
            {categories.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-[#0070f3] bg-[#0070f3]/20 text-[#0070f3] shadow-lg shadow-[#0070f3]/20'
                      : 'border-[#333] bg-black/80 text-[#888] hover:text-white hover:border-[#0070f3] hover:shadow-lg hover:shadow-[#0070f3]/20'
                  }`}
                >
                  <span className="text-sm font-semibold">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
            <div className="bg-black/80 border border-[#333] rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-[#50e3c2] mb-2">1500+</div>
              <div className="text-sm text-[#888]">Projects Completed</div>
            </div>
            <div className="bg-black/80 border border-[#333] rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-[#0070f3] mb-2">300%</div>
              <div className="text-sm text-[#888]">Average ROI</div>
            </div>
            <div className="bg-black/80 border border-[#333] rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-[#8b5cf6] mb-2">4.9/5</div>
              <div className="text-sm text-[#888]">Client Satisfaction</div>
            </div>
            <div className="bg-black/80 border border-[#333] rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-[#50e3c2] mb-2">99%</div>
              <div className="text-sm text-[#888]">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8 lg:space-y-12">
          {getFilteredStudies().map((study, index) => {
            const StudyIcon = study.icon;
            const isExpanded = expandedStudy === study.id;
            
            return (
              <div
                key={study.id}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className={`bg-black/80 border-2 border-[#333] rounded-3xl overflow-hidden backdrop-blur-sm hover:border-[#0070f3] transition-all duration-500 ${
                  study.featured ? 'lg:grid lg:grid-cols-2 lg:gap-0' : ''
                }`}>
                  {/* Case Study Header */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center`}>
                          <StudyIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          {study.featured && (
                            <div className="inline-block bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                              Featured Case Study
                            </div>
                          )}
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-space">
                            {study.title}
                          </h3>
                          <p className="text-lg text-[#50e3c2]">{study.subtitle}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleExpanded(study.id)}
                        className="flex-shrink-0 w-10 h-10 rounded-full border border-[#333] bg-black/50 flex items-center justify-center hover:border-[#0070f3] transition-all duration-300"
                      >
                        <ChevronDown className={`w-5 h-5 text-[#888] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Client Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-[#888]">
                        <Users className="w-4 h-4 text-[#0070f3]" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#888]">
                        <Target className="w-4 h-4 text-[#50e3c2]" />
                        <span>{study.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#888]">
                        <MapPin className="w-4 h-4 text-[#8b5cf6]" />
                        <span>{study.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#888]">
                        <Calendar className="w-4 h-4 text-[#0070f3]" />
                        <span>{study.duration}</span>
                      </div>
                    </div>

                    {/* Results Preview */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {study.results.slice(0, 4).map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-[#50e3c2] mb-1">{result.value}</div>
                          <div className="text-xs text-[#888]">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge Preview */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">The Challenge</h4>
                      <p className="text-[#888] leading-relaxed">
                        {study.challenge.substring(0, 150)}...
                      </p>
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => toggleExpanded(study.id)}
                      className="inline-flex items-center gap-2 text-[#0070f3] hover:text-[#50e3c2] transition-colors duration-300"
                    >
                      <span>{isExpanded ? 'Show Less' : 'Read Full Case Study'}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Featured Image for Featured Studies */}
                  {study.featured && (
                    <div className="relative min-h-[300px] lg:min-h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/20 to-[#50e3c2]/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="w-24 h-24 text-white/20 mx-auto mb-4" />
                          <p className="text-white/60">Interactive Demo Available</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="border-t border-[#333] p-8 lg:p-12 lg:col-span-2">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Solution & Technologies */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Our Solution</h4>
                            <p className="text-[#888] leading-relaxed mb-6">{study.solution}</p>
                          </div>

                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-gradient-to-r from-[#0070f3]/20 to-[#50e3c2]/20 border border-[#333] rounded-lg text-sm text-white"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Detailed Results & Testimonial */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Detailed Results</h4>
                            <div className="space-y-4">
                              {study.results.map((result, resultIndex) => (
                                <div key={resultIndex} className="flex items-center justify-between p-4 bg-black/50 border border-[#333] rounded-xl">
                                  <div>
                                    <div className="font-semibold text-white">{result.metric}</div>
                                    <div className="text-sm text-[#888]">{result.description}</div>
                                  </div>
                                  <div className="text-2xl font-bold text-[#50e3c2]">{result.value}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-black/50 to-[#0070f3]/5 border border-[#333] rounded-xl p-6">
                            <div className="flex items-center gap-2 mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-[#50e3c2] fill-current" />
                              ))}
                            </div>
                            <blockquote className="text-[#888] italic mb-4">
                              "{study.testimonial.quote}"
                            </blockquote>
                            <div>
                              <div className="font-bold text-white">{study.testimonial.author}</div>
                              <div className="text-sm text-[#666]">{study.testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-8 pt-8 border-t border-[#333] text-center">
                        <p className="text-[#888] mb-6">Ready to achieve similar results for your business?</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <button
                            onClick={onContactClick}
                            className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                          >
                            Start Your Project
                            <ExternalLink className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={onContactClick}
                            className="border border-[#333] text-white px-8 py-3 rounded-xl font-semibold hover:border-[#0070f3] hover:bg-[#0070f3]/10 transition-all duration-300"
                          >
                            Schedule Consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 lg:mt-28 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-black/80 to-[#0070f3]/5 border border-[#333] rounded-3xl p-12 lg:p-16 hover:border-[#0070f3] transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 to-[#50e3c2]/5 opacity-50"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#0070f3]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#50e3c2]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 font-space">
                Ready to Write Your <span className="gradient-text-accent">Success Story?</span>
              </h3>
              <p className="text-lg lg:text-xl text-[#888] mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the ranks of successful companies who've transformed their business with our AI solutions. 
                Let's discuss how we can achieve extraordinary results for your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={onContactClick}
                  className="bg-gradient-to-r from-[#0070f3] to-[#50e3c2] text-white px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 group"
                >
                  Start Your Transformation
                  <Zap size={20} className="group-hover:animate-pulse" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies; 