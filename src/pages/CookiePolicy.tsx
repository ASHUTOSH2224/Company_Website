import React, { useState, useEffect } from 'react';
import { ArrowLeft, Cookie, Settings, Eye, Shield, Globe, Calendar, Info, Mail } from 'lucide-react';

interface CookiePolicyProps {
  currentPage: string;
  onBack: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ currentPage, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'introduction',
      title: 'What Are Cookies?',
      icon: Cookie,
      content: `Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.

Cookies can be either "session cookies" (which are deleted when you close your browser) or "persistent cookies" (which remain on your device for a set period or until you delete them).

As a startup focused on technology and user experience, we use cookies responsibly to improve our services while respecting your privacy.`
    },
    {
      id: 'how-we-use',
      title: 'How We Use Cookies',
      icon: Eye,
      content: `We use cookies for several purposes:

Essential Cookies: These are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.

Analytics Cookies: These help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our site and services.

Functional Cookies: These allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.

Marketing Cookies: These are used to track visitors across websites to display relevant and engaging advertisements.

We are committed to being transparent about our cookie usage and providing you with control over your privacy.`
    },
    {
      id: 'types-of-cookies',
      title: 'Types of Cookies We Use',
      icon: Settings,
      content: `First-Party Cookies: These are set by our website and can only be read by our site. They are typically used for functionality and analytics.

Third-Party Cookies: These are set by external services that we use, such as:
• Google Analytics (for website analytics)
• Social media platforms (for sharing functionality)
• Payment processors (for secure transactions)

Session Cookies: These are temporary cookies that are deleted when you close your browser. They are used to maintain your session while you browse our website.

Persistent Cookies: These remain on your device for a set period or until you delete them. They are used to remember your preferences and settings.

We carefully select third-party services that share our commitment to privacy and data protection.`
    },
    {
      id: 'specific-cookies',
      title: 'Specific Cookies We Use',
      icon: Info,
      content: `Essential Cookies:
• session_id: Maintains your session while browsing
• csrf_token: Protects against cross-site request forgery
• language: Remembers your language preference

Analytics Cookies:
• _ga: Google Analytics - tracks unique visitors
• _gid: Google Analytics - tracks user sessions
• _gat: Google Analytics - controls request rate

Functional Cookies:
• theme_preference: Remembers your theme choice (dark/light)
• newsletter_subscription: Remembers if you've subscribed
• form_data: Saves form progress for better UX

Marketing Cookies:
• _fbp: Facebook Pixel - for advertising optimization
• _gcl_au: Google Ads - for conversion tracking

We regularly review and update our cookie usage to ensure it aligns with best practices and your privacy expectations.`
    },
    {
      id: 'cookie-controls',
      title: 'Managing Your Cookie Preferences',
      icon: Settings,
      content: `You have several options for managing cookies:

Browser Settings: Most browsers allow you to control cookies through their settings. You can:
• Block all cookies
• Allow only first-party cookies
• Delete existing cookies
• Set preferences for specific websites

Cookie Consent: When you first visit our website, you'll see a cookie consent banner that allows you to:
• Accept all cookies
• Accept only essential cookies
• Customize your preferences
• Learn more about our cookie usage

Cookie Management Tool: We provide a cookie management tool that allows you to:
• View all cookies we use
• Enable or disable specific cookie categories
• Update your preferences at any time

We respect your choices and will honor your cookie preferences.`
    },
    {
      id: 'third-party-cookies',
      title: 'Third-Party Cookies',
      icon: Globe,
      content: `We may use third-party services that set their own cookies. These services include:

Google Analytics: Helps us understand how visitors use our website. Google Analytics cookies collect information such as:
• Pages visited
• Time spent on pages
• How you reached our site
• Your general location (city/country level)

Social Media: Social media platforms may set cookies when you interact with social features on our website.

Payment Processors: If you make payments through our website, payment processors may set cookies for security and fraud prevention.

We carefully vet all third-party services to ensure they comply with privacy regulations and our own privacy standards.`
    },
    {
      id: 'data-collection',
      title: 'What Data Do Cookies Collect?',
      icon: Shield,
      content: `Cookies may collect the following types of information:

Technical Information:
• IP address (anonymized)
• Browser type and version
• Operating system
• Device type and screen resolution

Usage Information:
• Pages visited
• Time spent on pages
• Links clicked
• Search terms used

Preference Information:
• Language settings
• Theme preferences
• Newsletter subscriptions
• Form data (temporarily)

We do not collect personally identifiable information through cookies unless you explicitly provide it. All data collection is done in accordance with our Privacy Policy and applicable data protection laws.`
    },
    {
      id: 'data-retention',
      title: 'Cookie Retention Periods',
      icon: Calendar,
      content: `Different types of cookies have different retention periods:

Session Cookies: These are automatically deleted when you close your browser. They typically last for the duration of your browsing session.

Persistent Cookies: These remain on your device for a set period:
• Analytics cookies: Up to 2 years
• Functional cookies: Up to 1 year
• Marketing cookies: Up to 90 days
• Essential cookies: Up to 1 year

We regularly review and update our cookie retention periods to ensure they are appropriate for their intended purpose and comply with privacy regulations.

You can delete cookies at any time through your browser settings or our cookie management tool.`
    },
    {
      id: 'legal-basis',
      title: 'Legal Basis for Cookie Usage',
      icon: Shield,
      content: `We process cookie data based on the following legal grounds:

Consent: For non-essential cookies (analytics, marketing, functional), we rely on your consent. You can withdraw your consent at any time.

Legitimate Interest: For essential cookies, we rely on our legitimate interest in providing a functional website and ensuring security.

Contract Performance: Some cookies are necessary to perform our contract with you (e.g., maintaining your session during a transaction).

Legal Obligation: Some cookies may be required to comply with legal obligations (e.g., fraud prevention).

We are committed to ensuring that our cookie usage is lawful, fair, and transparent.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights Regarding Cookies',
      icon: Shield,
      content: `You have several rights regarding cookies and the data they collect:

Right to Information: You have the right to know what cookies we use and why.

Right to Consent: You have the right to give or withdraw consent for non-essential cookies.

Right to Access: You can request information about what personal data we collect through cookies.

Right to Deletion: You can request deletion of data collected through cookies.

Right to Object: You can object to the processing of your data through cookies.

Right to Portability: You can request a copy of your data in a portable format.

To exercise these rights, please contact us using the information provided below.`
    },
    {
      id: 'updates',
      title: 'Updates to This Policy',
      icon: Calendar,
      content: `We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.

When we make changes, we will:
• Update the "Last Updated" date at the top of this policy
• Notify you through our website or email (if you have provided your email)
• Provide clear information about what has changed

We encourage you to review this policy periodically to stay informed about how we use cookies and protect your privacy.

If you have any questions about changes to this policy, please contact us.`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: Shield,
      content: `If you have any questions about our use of cookies or this Cookie Policy, please contact us:

Email: privacy@upstraiq.com
Phone: +91 8521010925
Address: Varanasi, India

We are committed to being transparent about our cookie usage and are happy to answer any questions you may have.`
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
                  <Cookie className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 font-space">
                Cookie <span className="gradient-text-accent">Policy</span>
              </h1>
              <p className="text-xl lg:text-2xl text-[#888] max-w-4xl mx-auto leading-relaxed">
                Learn how we use cookies to improve your experience on our website.
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
                  Questions About <span className="gradient-text-accent">Cookies?</span>
                </h2>
                <p className="text-xl lg:text-2xl text-[#888] mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                  We're here to help you understand how we use cookies and how to manage your preferences.
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

export default CookiePolicy; 