import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Scale, Users, Globe, Calendar, Shield, AlertTriangle, Mail } from 'lucide-react';

interface TermsOfServiceProps {
  currentPage: string;
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ currentPage, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: FileText,
      content: `Welcome to UPSTRAIQ. These Terms of Service ("Terms") govern your use of our website, services, and any related applications (collectively, the "Service") operated by UPSTRAIQ ("we," "us," or "our").

By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.

As a startup, we are committed to providing innovative AI and technology solutions while maintaining clear and fair terms for all our users and clients.`
    },
    {
      id: 'definitions',
      title: 'Definitions',
      icon: Scale,
      content: `• "Service" refers to our website, applications, and all related services provided by UPSTRAIQ.
• "User," "you," and "your" refers to you, as the user of the Service.
• "Content" refers to text, images, videos, or other information that can be posted, uploaded, linked to, or otherwise made available by you.
• "Client" refers to any individual or entity that engages our services for development or consulting work.
• "Project" refers to any work, service, or deliverable provided by UPSTRAIQ to a client.`
    },
    {
      id: 'use-of-service',
      title: 'Use of Service',
      icon: Users,
      content: `You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:

• In any way that violates any applicable federal, state, local, or international law or regulation.
• To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.
• To impersonate or attempt to impersonate UPSTRAIQ, an employee, another user, or any other person or entity.
• To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service.

We reserve the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever.`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: Shield,
      content: `The Service and its original content, features, and functionality are and will remain the exclusive property of UPSTRAIQ and its licensors. The Service is protected by copyright, trademark, and other laws.

For projects developed for clients:
• Pre-existing intellectual property owned by the client remains the client's property.
• New intellectual property created specifically for the client project is typically transferred to the client upon full payment.
• UPSTRAIQ retains the right to use general knowledge, skills, and experience gained during the project.
• Specific terms regarding intellectual property ownership are detailed in individual project agreements.

You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service.`
    },
    {
      id: 'client-agreements',
      title: 'Client Agreements and Projects',
      icon: FileText,
      content: `When engaging our services for development or consulting work:

• All projects are subject to separate written agreements that detail scope, deliverables, timelines, and payment terms.
• Payment terms are typically 50% upfront and 50% upon project completion, unless otherwise agreed.
• We commit to delivering high-quality work within agreed timelines, subject to client cooperation and timely feedback.
• Changes to project scope may result in additional charges and timeline adjustments.
• We provide ongoing support and maintenance options for completed projects.

As a startup, we are flexible and willing to work with clients to find mutually beneficial arrangements.`
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: `In no event shall UPSTRAIQ, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:

• Your use or inability to use the Service.
• Any unauthorized access to or use of our servers and/or any personal information stored therein.
• Any interruption or cessation of transmission to or from the Service.
• Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service.

Our total liability to you for any claims arising from the use of our Service shall not exceed the amount paid by you, if any, for accessing our Service.`
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers',
      icon: AlertTriangle,
      content: `The information on our Service is provided on an "as is" and "as available" basis. UPSTRAIQ makes no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, materials, or products included on the Service.

We do not warrant that:
• The Service will be uninterrupted or error-free.
• Defects will be corrected.
• The Service or the server that makes it available are free of viruses or other harmful components.
• The results obtained from using the Service will be accurate or reliable.

As a startup, we are constantly improving our services and processes.`
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      icon: Shield,
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.

The Privacy Policy is incorporated into these Terms by reference and forms part of these Terms. Please review our Privacy Policy to understand our practices.`
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: Calendar,
      content: `We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.

If you wish to terminate your account, you may simply discontinue using the Service.

All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.`
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: Globe,
      content: `These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.

These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.`
    },
    {
      id: 'changes-to-terms',
      title: 'Changes to Terms',
      icon: FileText,
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.

What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.

If you do not agree to the new terms, you are no longer authorized to use the Service.`
    },
    {
      id: 'contact-information',
      title: 'Contact Information',
      icon: Users,
      content: `If you have any questions about these Terms of Service, please contact us:

Email: legal@upstraiq.com
Phone: +91 8521010925
Address: Varanasi, India

We are committed to addressing any concerns you may have about these terms and our services.`
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
                  <FileText className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 font-space">
                Terms of <span className="gradient-text-accent">Service</span>
              </h1>
              <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto leading-relaxed">
                Please read these terms carefully before using our services.
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
                  Questions About Our <span className="gradient-text-accent">Terms?</span>
                </h2>
                <p className="text-xl lg:text-2xl text-[#888] mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                  We're here to help clarify any questions you may have about our terms of service.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="mailto:legal@upstraiq.com"
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

export default TermsOfService; 