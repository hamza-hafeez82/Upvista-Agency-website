"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Monitor, Code2, Brain, Brush, Users, Megaphone, Wrench, UserCheck, ArrowRight, LogOut, Globe, Palette, Settings, FileText, CheckCircle } from "lucide-react";

const servicesList = [
  { name: "Web Development", href: "/pages/website", icon: <Globe className="w-5 h-5" /> },
  { name: "Software Development", href: "/pages/software-development", icon: <Code2 className="w-5 h-5" /> },
  { name: "AI Automation", href: "/pages/ai", icon: <Brain className="w-5 h-5" /> },
  { name: "Branding", href: "/pages/branding", icon: <Brush className="w-5 h-5" /> },
  { name: "UI/UX Design", href: "/pages/uiuxPage", icon: <Palette className="w-5 h-5" /> },
  { name: "Marketing", href: "/pages/marketing", icon: <Megaphone className="w-5 h-5" /> },
  { name: "Management", href: "/pages/management", icon: <Users className="w-5 h-5" /> },
  { name: "Maintenance", href: "/pages/Maintenance", icon: <Wrench className="w-5 h-5" /> },
  { name: "Consulting", href: "/Consult", icon: <UserCheck className="w-5 h-5" /> },
];

const sidebarSections = [
  { key: "overview", label: "Overview", icon: <Monitor className="w-5 h-5" /> },
  { key: "end-to-end", label: "End-to-End", icon: <ArrowRight className="w-5 h-5" /> },
  { key: "process", label: "Process", icon: <Settings className="w-5 h-5" /> },
  { key: "onboarding", label: "Onboarding", icon: <UserCheck className="w-5 h-5" /> },
  { key: "references", label: "References", icon: <FileText className="w-5 h-5" /> },
];

type SectionKey = "overview" | "end-to-end" | "process" | "onboarding" | "references";

const sectionContent = {
  overview: {
    title: "Marketing & Sales Growth Services",
    subtitle: "Driving Business Growth Through Strategic Marketing",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-xl border border-emerald-500/20">
          <h3 className="text-xl font-semibold text-emerald-300 mb-3">Results-Driven Marketing Solutions</h3>
          <p className="text-gray-300 leading-relaxed">
            At Upvista Digital, we believe that great marketing is about more than just 
            visibility—it&apos;s about driving measurable business results. Our comprehensive 
            marketing and sales services combine data-driven strategies with creative execution 
            to help you achieve sustainable growth and market leadership.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">What We Deliver</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Digital marketing strategy & execution
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                SEO & content marketing optimization
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Social media & influencer marketing
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Sales funnel optimization & automation
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Marketing Channels & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {["Google Ads", "Facebook Ads", "LinkedIn Marketing", "Email Marketing", "Content Marketing", "SEO", "Social Media", "Analytics"].map((channel) => (
                <span key={channel} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                  {channel}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  "end-to-end": {
    title: "End-to-End Marketing Solutions",
    subtitle: "From Strategy to Execution and Optimization",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Comprehensive Marketing Ecosystem</h3>
          <p className="text-gray-300 leading-relaxed">
            Our end-to-end marketing solutions cover every aspect of your marketing 
            journey, from initial strategy development to ongoing optimization and 
            performance tracking. We ensure all channels work together cohesively 
            to maximize your ROI.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Strategy & Planning</h4>
              <p className="text-gray-400 text-sm">Market research, competitive analysis, and comprehensive marketing strategy development.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Execution & Management</h4>
              <p className="text-gray-400 text-sm">Multi-channel campaign execution, content creation, and ongoing campaign management.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Optimization & Growth</h4>
              <p className="text-gray-400 text-sm">Performance analysis, A/B testing, and continuous optimization for maximum results.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
            <h4 className="text-lg font-medium text-green-300 mb-3">Marketing Technology Stack</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h5 className="font-medium text-white mb-2">Analytics & Tracking</h5>
                <p>Google Analytics, Google Tag Manager, and advanced conversion tracking setup.</p>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">Automation & CRM</h5>
                <p>Marketing automation platforms, CRM integration, and lead nurturing systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  process: {
    title: "Our Marketing Process",
    subtitle: "Data-Driven, Results-Focused, and Continuously Optimized",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Agile Marketing Methodology</h3>
          <p className="text-gray-300 leading-relaxed">
            We follow a proven marketing methodology that combines strategic planning 
            with agile execution and continuous optimization. Each phase is designed 
            to deliver measurable results while building a foundation for long-term success.
          </p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              phase: "Phase 1: Research & Analysis",
              description: "Understanding your market, competitors, and target audience",
              duration: "1-2 weeks",
              deliverables: ["Market analysis", "Competitor research", "Audience personas", "SWOT analysis"]
            },
            {
              phase: "Phase 2: Strategy Development",
              description: "Creating comprehensive marketing strategy and campaign plans",
              duration: "1-2 weeks",
              deliverables: ["Marketing strategy", "Campaign plans", "Budget allocation", "KPI framework"]
            },
            {
              phase: "Phase 3: Campaign Execution",
              description: "Implementing multi-channel marketing campaigns",
              duration: "2-4 weeks",
              deliverables: ["Content creation", "Campaign setup", "Channel activation", "Initial optimization"]
            },
            {
              phase: "Phase 4: Monitoring & Optimization",
              description: "Tracking performance and optimizing campaigns for better results",
              duration: "Ongoing",
              deliverables: ["Performance reports", "A/B testing", "Campaign optimization", "ROI analysis"]
            },
            {
              phase: "Phase 5: Scaling & Growth",
              description: "Expanding successful campaigns and exploring new opportunities",
              duration: "Ongoing",
              deliverables: ["Campaign scaling", "New channel expansion", "Advanced strategies", "Growth planning"]
            }
          ].map((phase, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-medium text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-white mb-1">{phase.phase}</h4>
                  <p className="text-gray-400 mb-2">{phase.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-emerald-400">Duration: {phase.duration}</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-400">Deliverables: {phase.deliverables.join(", ")}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  onboarding: {
    title: "Getting Started with Marketing",
    subtitle: "Strategic, Transparent, and Results-Oriented",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
          <h3 className="text-xl font-semibold text-green-300 mb-3">Ready to Accelerate Your Growth?</h3>
          <p className="text-gray-300 leading-relaxed">
            Starting your marketing journey with Upvista Digital is strategic and transparent. 
            We&apos;ll work closely with you to understand your business goals and create 
            marketing strategies that drive real, measurable results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Initial Marketing Consultation</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Free marketing strategy consultation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Business goals and target audience discussion</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Current marketing performance review</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Budget and timeline alignment</span>
              </div>
            </div>
      </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Project Setup</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Marketing project agreement and scope</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Marketing tool access and setup</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Communication and reporting setup</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Kickoff meeting and project timeline</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-xl border border-emerald-500/20">
          <h4 className="text-lg font-medium text-emerald-300 mb-3">What You&apos;ll Need</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <h5 className="font-medium text-white mb-1">Business Information</h5>
              <p>Company overview, target audience, and business goals</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Marketing Assets</h5>
              <p>Brand guidelines, existing content, and marketing materials</p>
                </div>
            <div>
              <h5 className="font-medium text-white mb-1">Access & Permissions</h5>
              <p>Website access, social media accounts, and analytics access</p>
              </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:from-emerald-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-105">
            Start Your Marketing Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  },
  references: {
    title: "Marketing Success Stories",
    subtitle: "Real Results, Real Growth",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
          <h3 className="text-xl font-semibold text-orange-300 mb-3">Proven Marketing Excellence</h3>
          <p className="text-gray-300 leading-relaxed">
            Our marketing campaigns have delivered exceptional results across industries, 
            driving significant growth and ROI for our clients. Here are some examples 
            of our work and the impact we&apos;ve created.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              client: "E-commerce Startup",
              project: "Digital Marketing Campaign",
              description: "Comprehensive digital marketing strategy for a new e-commerce platform",
              results: ["300% increase in website traffic", "150% increase in sales", "Improved conversion rate"]
            },
            {
              client: "B2B Software Company",
              project: "Lead Generation & SEO",
              description: "B2B lead generation and SEO optimization for software company",
              results: ["200% increase in qualified leads", "Top 3 rankings for target keywords", "Enhanced brand visibility"]
            },
            {
              client: "Local Restaurant Chain",
              project: "Local SEO & Social Media",
              description: "Local SEO and social media marketing for restaurant franchise",
              results: ["50% increase in foot traffic", "Improved local search rankings", "Enhanced social engagement"]
            },
            {
              client: "SaaS Platform",
              project: "Content Marketing & Automation",
              description: "Content marketing and marketing automation for SaaS platform",
              results: ["400% increase in organic traffic", "Improved customer retention", "Enhanced user engagement"]
            }
          ].map((caseStudy, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">{caseStudy.client}</h4>
              <h5 className="text-emerald-400 mb-2">{caseStudy.project}</h5>
              <p className="text-gray-400 mb-4 text-sm">{caseStudy.description}</p>
              <div className="space-y-2">
                <h6 className="text-sm font-medium text-gray-300">Key Results:</h6>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            ))}
          </div>
        
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-xl border border-emerald-500/20">
          <h4 className="text-lg font-medium text-emerald-300 mb-3">Ready to Achieve Similar Results?</h4>
          <p className="text-gray-300 mb-4">
            Let&apos;s discuss how our marketing expertise can help you achieve your growth goals.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-400 hover:to-teal-500 transition-all duration-300">
            Schedule a Marketing Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
              </div>
    )
  }
};

export default function MarketingPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [serviceBarShrink, setServiceBarShrink] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setServiceBarShrink(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-black text-white flex">
      {/* Left Sidebar (hidden on mobile) */}
      <div className={`hidden md:block fixed left-0 top-0 h-full bg-black border-r border-gray-800 z-20 transition-all duration-300 ${serviceBarShrink ? 'w-16' : 'w-64'} md:relative md:translate-x-0`}>
        <div className="p-4 space-y-6">
          {sidebarSections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key as SectionKey)}
              className={`w-full flex flex-col md:flex-row items-center gap-2 p-3 rounded-lg transition-all duration-200 ${
                activeSection === section.key
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <span className={`mb-0.5 md:mb-0 md:mr-3 flex items-center justify-center ${serviceBarShrink ? 'w-5 h-5' : 'w-5 h-5'}`}>{React.cloneElement(section.icon, { className: 'w-5 h-5' })}</span>
              <span className={`text-[8px] md:text-base ${serviceBarShrink ? 'block md:hidden' : ''}`}>{section.label}</span>
            </button>
          ))}
            </div>
              </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 flex justify-around items-center bg-black/90 border-t border-gray-800 shadow-2xl py-2" style={{backdropFilter: 'blur(8px)', width: '100vw'}}>
        {sidebarSections.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key as SectionKey)}
            className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg transition-all duration-200 ${
              activeSection === section.key
                ? 'text-emerald-300' : 'text-gray-400 hover:text-white'
            }`}
          >
            {React.cloneElement(section.icon, { className: 'w-6 h-6 mb-0.5' })}
            <span className="text-[10px] font-medium leading-tight">{section.label}</span>
          </button>
        ))}
            </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 w-full bg-black/80 border-b border-gray-800 flex items-center px-2 md:px-8 py-2 gap-2 shadow-lg">
          {/* Exit Icon (far left) */}
          <Link href="/pages/services" className="flex items-center mr-2 text-gray-300 hover:text-white p-2 rounded-full transition-colors duration-200">
            <LogOut className="h-7 w-7" />
          </Link>
          
          {/* Centered Services List (desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-6">
            {servicesList.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                {service.icon}
                <span className="text-sm">{service.name}</span>
              </Link>
            ))}
              </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </header>

        {/* Mobile Services Sidebar */}
        <div className={`fixed right-0 top-0 h-full w-64 bg-black border-l border-gray-800 z-40 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-2">
              {servicesList.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                >
                  {service.icon}
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto pb-20 md:pb-8">
          {/* Animated Gradient Background */}
          <div className="relative z-10">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {sectionContent[activeSection].title}
              </h1>
              <p className="text-lg text-gray-400">
                {sectionContent[activeSection].subtitle}
              </p>
            </div>
            
            <div className="prose prose-invert max-w-none">
              {sectionContent[activeSection].content}
            </div>
          </div>
        </main>
        </div>
    </div>
  );
}
