import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe, Calendar, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  currentPage: string;
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ currentPage, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: Shield,
      content: `At UPSTRAIQ, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.

As a startup focused on AI and technology solutions, we understand the importance of data privacy and are committed to maintaining the highest standards of data protection.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: `We collect information that you provide directly to us, such as when you:
• Contact us through our website forms
• Subscribe to our newsletter
• Request a consultation or quote
• Apply for a position with us
• Engage with our services

This may include your name, email address, phone number, company information, and any other details you choose to provide.

We also automatically collect certain information when you visit our website, including:
• IP address and device information
• Browser type and version
• Pages visited and time spent
• Referring website
• Cookies and similar technologies`
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: `We use the information we collect to:
• Provide and improve our services
• Respond to your inquiries and requests
• Send you relevant updates and newsletters (with your consent)
• Analyze website usage and improve user experience
• Comply with legal obligations
• Protect against fraud and security threats

As a startup, we may also use your information to:
• Develop new features and services
• Conduct market research and analysis
• Build relationships with potential clients and partners`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Users,
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

• With your explicit consent
• With service providers who assist us in operating our business (under strict confidentiality agreements)
• To comply with legal requirements or protect our rights
• In connection with a business transfer or merger (with appropriate safeguards)

We ensure that any third parties with whom we share information are bound by appropriate confidentiality and data protection obligations.`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest
• Regular security assessments and updates
• Access controls and authentication measures
• Employee training on data protection
• Incident response procedures

However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      icon: Globe,
      content: `We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:

• Remember your preferences and settings
• Analyze website traffic and usage patterns
• Provide personalized content and recommendations
• Improve website performance and functionality

You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: Shield,
      content: `You have the right to:
• Access and review your personal information
• Request correction of inaccurate information
• Request deletion of your personal information
• Object to or restrict certain processing activities
• Withdraw consent where processing is based on consent
• Request data portability
• Lodge a complaint with relevant authorities

To exercise these rights, please contact us using the information provided below.`
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: Calendar,
      content: `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.

The retention period depends on:
• The type of information collected
• The purpose for which it was collected
• Legal and regulatory requirements
• Business needs and legitimate interests

We regularly review and delete information that is no longer needed.`
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      icon: Globe,
      content: `As a startup operating globally, your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards, such as:

• Standard contractual clauses
• Adequacy decisions
• Other appropriate safeguards as required by law

We are committed to protecting your information regardless of where it is processed.`
    },
    {
      id: 'children-privacy',
      title: 'Children\'s Privacy',
      icon: Users,
      content: `Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.

If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.`
    },
    {
      id: 'changes-policy',
      title: 'Changes to This Policy',
      icon: Shield,
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:

• Posting the updated policy on our website
• Sending you an email notification (if you have provided your email)
• Displaying a prominent notice on our website

We encourage you to review this policy periodically to stay informed about how we protect your information.`
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      icon: Shield,
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Email: privacy@upstraiq.com
Phone: +91 8521010925
Address: Varanasi, India

We are committed to responding to your inquiries promptly and addressing any concerns you may have about your privacy.`
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#0070f3] rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#50e3c2] rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#0070f3] rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0070f3] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#50e3c2] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      </div>

      {/* Header */}
      <section className="relative py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Back Button */}
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[#888] hover:text-[#50e3c2] transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back</span>
            </button>

            {/* Main Heading */}
            <div className="text-center mb-16 lg:mb-24">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 font-space">
                Privacy <span className="gradient-text-accent">Policy</span>
              </h1>
              <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto leading-relaxed">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
              <div className="mt-8 text-sm text-[#666]">
                Last updated: January 2025
              </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.id}
                    className={`bg-black/80 backdrop-blur-sm border border-[#333] rounded-2xl p-8 lg:p-12 hover:border-[#0070f3] transition-all duration-500 hover:shadow-2xl hover:shadow-[#0070f3]/10 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#0070f3] to-[#50e3c2] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-space">
                          {section.title}
                        </h2>
                        <div className="prose prose-invert max-w-none">
                          <p className="text-lg lg:text-xl text-[#888] leading-relaxed whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Section */}
            <div className={`text-center mt-16 lg:mt-24 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-black/80 backdrop-blur-sm border border-[#333] rounded-3xl p-12 lg:p-20 hover:border-[#0070f3] transition-all duration-500 hover:shadow-2xl hover:shadow-[#0070f3]/10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 font-space">
                  Questions About <span className="gradient-text-accent">Privacy?</span>
                </h2>
                <p className="text-xl lg:text-2xl text-[#888] mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                  We're here to help. Contact us if you have any questions about our privacy practices or your data.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="mailto:privacy@upstraiq.com"
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0070f3] to-[#50e3c2] rounded-xl text-white font-bold hover:scale-105 transition-transform duration-300 shadow-xl"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Us
                  </a>
                  <button
                    onClick={onBack}
                    className="px-8 py-4 border border-[#333] rounded-xl text-[#888] hover:border-[#0070f3] hover:text-[#0070f3] transition-all duration-300"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 