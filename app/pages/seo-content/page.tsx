'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Monitor, ArrowRight, Settings, User, FileText, Check, Globe, Code, Brain, PenTool, Users, Wrench, Search } from 'lucide-react';

const SEOContentPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const servicesList = [
    { name: "End-to-End", href: "/pages/completeServices", icon: <ArrowRight className="w-5 h-5" /> },
    { name: "Web Development", href: "/pages/website", icon: <Globe className="w-5 h-5" /> },
    { name: "Software Development", href: "/pages/software-development", icon: <Code className="w-5 h-5" /> },
    { name: "Landing Pages", href: "/pages/landingPges", icon: <FileText className="w-5 h-5" /> },
    { name: "AI Automation", href: "/pages/ai", icon: <Brain className="w-5 h-5" /> },
    { name: "UI/UX Design", href: "/pages/uiuxPage", icon: <PenTool className="w-5 h-5" /> },
    { name: "Branding", href: "/pages/branding", icon: <PenTool className="w-5 h-5" /> },
    { name: "Graphics Design", href: "/pages/designing", icon: <PenTool className="w-5 h-5" /> },
    { name: "Management", href: "/pages/management", icon: <Users className="w-5 h-5" /> },
    { name: "Maintenance", href: "/pages/Maintenance", icon: <Wrench className="w-5 h-5" /> },
    { name: "SEO & Content", href: "/pages/seo-content", icon: <Search className="w-5 h-5" /> },
  ];

  const sidebarSections = [
    { id: 'overview', name: 'Overview', icon: <Monitor className="w-5 h-5" /> },
    { id: 'end-to-end', name: 'End-to-End', icon: <ArrowRight className="w-5 h-5" /> },
    { id: 'process', name: 'Process', icon: <Settings className="w-5 h-5" /> },
    { id: 'onboarding', name: 'Onboarding', icon: <User className="w-5 h-5" /> },
    { id: 'references', name: 'References', icon: <FileText className="w-5 h-5" /> },
  ];

  const sectionContent = {
    overview: {
      title: "SEO & Content Marketing Services",
      subtitle: "Drive Organic Growth Through Strategic Content & SEO",
      mainContent: {
        heading: "Transform Your Digital Presence with Data-Driven SEO",
        description: "At Upvista Digital, we combine cutting-edge SEO strategies with compelling content marketing to boost your search rankings and drive sustainable organic growth. Our comprehensive approach ensures your brand gets discovered by the right audience at the right time.",
        deliverables: [
          "Search engine optimization (SEO)",
          "Content strategy & creation",
          "Keyword research & analysis",
          "Technical SEO optimization"
        ],
        technologies: [
          "Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", "Moz", "Yoast SEO", "WordPress", "Content Management Systems", "Schema Markup", "Core Web Vitals", "PageSpeed Insights", "Google My Business"
        ]
      }
    },
    'end-to-end': {
      title: "End-to-End SEO & Content Strategy",
      subtitle: "Complete Digital Marketing Solution",
      mainContent: {
        heading: "From Strategy to Execution and Optimization",
        description: "Our end-to-end SEO and content marketing approach covers every aspect of your digital presence. From initial keyword research to ongoing content creation and performance optimization, we ensure your brand dominates search results and engages your target audience.",
        deliverables: [
          "Comprehensive SEO audit",
          "Content calendar & strategy",
          "On-page & off-page optimization",
          "Performance tracking & reporting"
        ],
        technologies: [
          "SEO Auditing Tools", "Content Planning Platforms", "Social Media Management", "Email Marketing", "Analytics & Reporting", "Competitor Analysis", "Link Building Tools", "Content Distribution"
        ]
      }
    },
    process: {
      title: "SEO & Content Process",
      subtitle: "Our Proven Digital Marketing Methodology",
      mainContent: {
        heading: "Data-Driven Approach to Digital Success",
        description: "We follow a systematic, results-driven process that combines technical SEO expertise with creative content marketing. Our iterative approach ensures continuous improvement and adaptation to changing search algorithms and market trends.",
        deliverables: [
          "Keyword research & analysis",
          "Content creation & optimization",
          "Technical SEO implementation",
          "Performance monitoring & optimization"
        ],
        technologies: [
          "Keyword Research Tools", "Content Management Systems", "SEO Plugins", "Analytics Platforms", "Social Media Tools", "Email Marketing Software", "A/B Testing Tools", "Conversion Optimization"
        ]
      }
    },
    onboarding: {
      title: "SEO & Content Onboarding",
      subtitle: "Strategic Digital Marketing Setup",
      mainContent: {
        heading: "Getting Started with Your SEO Journey",
        description: "Our onboarding process is designed to establish a solid foundation for your SEO and content marketing success. We analyze your current digital presence, identify opportunities, and create a customized strategy that aligns with your business goals.",
        deliverables: [
          "Website SEO audit",
          "Competitor analysis",
          "Content strategy development",
          "Tool setup & training"
        ],
        technologies: [
          "SEO Audit Tools", "Competitor Analysis Platforms", "Content Planning Software", "Analytics Setup", "Google Search Console", "Google Analytics", "Social Media Platforms", "Email Marketing Setup"
        ]
      }
    },
    references: {
      title: "SEO & Content Success Stories",
      subtitle: "Proven Results Across Industries",
      mainContent: {
        heading: "Delivering Measurable Digital Marketing Results",
        description: "Our SEO and content marketing expertise has helped businesses across various industries achieve significant growth in organic traffic, search rankings, and conversions. Each success story demonstrates our commitment to data-driven results and client success.",
        deliverables: [
          "Increased organic traffic",
          "Higher search rankings",
          "Improved conversion rates",
          "Enhanced brand visibility"
        ],
        technologies: [
          "Search Engine Optimization", "Content Marketing", "Social Media Marketing", "Email Marketing", "Analytics & Reporting", "Conversion Rate Optimization", "Local SEO", "E-commerce SEO"
        ]
      }
    }
  };

  const currentContent = sectionContent[activeSection as keyof typeof sectionContent];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20 animate-pulse"></div>
      
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-xl border-b border-green-500/20">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link href="/pages/services" className="text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </Link>
          </div>
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {servicesList.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="flex flex-col items-center gap-1 min-w-[80px] text-center group"
              >
                <div className="w-8 h-8 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                  {service.icon}
        </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>
            </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="hidden md:block w-64 bg-gray-950/95 backdrop-blur-xl border-r border-green-500/20 min-h-screen">
          <div className="p-6">
            <div className="space-y-2">
              {sidebarSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left group ${
                    activeSection === section.id
                      ? 'bg-green-600/20 text-green-300 border border-green-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {section.icon}
          </div>
                  <span className="text-sm font-medium">{section.name}</span>
                </button>
              ))}
            </div>
          </div>
            </div>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {currentContent.subtitle}
            </p>

            <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 rounded-2xl p-8 border border-green-500/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-green-400 mb-6">
                {currentContent.mainContent.heading}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {currentContent.mainContent.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
            <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What We Deliver</h3>
                  <ul className="space-y-3">
                    {currentContent.mainContent.deliverables.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
              </ul>
            </div>

            <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentContent.mainContent.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-950/95 backdrop-blur-xl border-t border-green-500/20 z-50">
        <div className="flex justify-around py-3">
          {sidebarSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                activeSection === section.id
                  ? 'text-green-400 bg-green-600/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {section.icon}
              </div>
              <span className="text-xs">{section.name}</span>
              </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEOContentPage; 