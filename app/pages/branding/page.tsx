"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Monitor, Code2, Brain, Brush, Users, Megaphone, Wrench, UserCheck, ArrowRight, LogOut, Globe, Palette, Settings, FileText, CheckCircle } from "lucide-react";

const servicesList = [
  { name: "Web Development", href: "/pages/website", icon: <Globe className="w-5 h-5" /> },
  { name: "Software Development", href: "/pages/completeServices", icon: <Code2 className="w-5 h-5" /> },
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
    title: "Branding Services",
    subtitle: "Creating Memorable Brand Identities That Connect",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
          <h3 className="text-xl font-semibold text-orange-300 mb-3">Brands That Leave a Lasting Impression</h3>
          <p className="text-gray-300 leading-relaxed">
            At Upvista Digital, we believe that great branding goes beyond just visual design—it&apos;s about 
            creating emotional connections and building trust with your audience. Our branding services 
            combine strategic thinking with creative excellence to craft identities that resonate, 
            inspire, and drive business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">What We Deliver</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                Strategic brand positioning
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                Logo design & visual identity
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                Brand guidelines & standards
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                Brand collateral & templates
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Branding Elements</h4>
            <div className="flex flex-wrap gap-2">
              {["Logo Design", "Color Palette", "Typography", "Brand Voice", "Visual Style", "Brand Guidelines", "Collateral Design"].map((element) => (
                <span key={element} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                  {element}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  "end-to-end": {
    title: "End-to-End Branding Process",
    subtitle: "From Strategy to Implementation",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Comprehensive Brand Development</h3>
          <p className="text-gray-300 leading-relaxed">
            Our end-to-end branding process ensures every aspect of your brand identity is 
            thoughtfully crafted and strategically aligned. From initial research to final 
            implementation, we create cohesive brand experiences that drive results.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Strategy & Research</h4>
              <p className="text-gray-400 text-sm">Market analysis, competitor research, and brand positioning strategy.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Design & Creation</h4>
              <p className="text-gray-400 text-sm">Visual identity development, logo design, and brand system creation.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Implementation & Launch</h4>
              <p className="text-gray-400 text-sm">Brand rollout, collateral production, and launch strategy.</p>
            </div>
      </div>

          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
            <h4 className="text-lg font-medium text-green-300 mb-3">Brand Management & Support</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h5 className="font-medium text-white mb-2">Brand Guidelines</h5>
                <p>Comprehensive brand standards and usage guidelines for consistency.</p>
              </div>
          <div>
                <h5 className="font-medium text-white mb-2">Ongoing Support</h5>
                <p>Brand maintenance, updates, and strategic guidance for long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  process: {
    title: "Our Branding Process",
    subtitle: "Strategic, Creative, and Results-Driven",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Strategic Brand Development</h3>
          <p className="text-gray-300 leading-relaxed">
            We follow a proven branding methodology that ensures your brand identity is 
            strategically sound, creatively compelling, and commercially effective. Each 
            phase builds upon the previous one, creating a solid foundation for brand success.
          </p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              phase: "Phase 1: Discovery & Research",
              description: "Understanding your business, market, and competitive landscape",
              duration: "1-2 weeks",
              deliverables: ["Brand audit", "Market research", "Competitor analysis", "Brand brief"]
            },
            {
              phase: "Phase 2: Strategy & Positioning",
              description: "Developing brand strategy and positioning framework",
              duration: "1-2 weeks",
              deliverables: ["Brand strategy", "Positioning statement", "Brand personality", "Value proposition"]
            },
            {
              phase: "Phase 3: Visual Identity Design",
              description: "Creating logo, color palette, typography, and visual system",
              duration: "2-3 weeks",
              deliverables: ["Logo concepts", "Color palette", "Typography system", "Visual style guide"]
            },
            {
              phase: "Phase 4: Brand System Development",
              description: "Building comprehensive brand guidelines and collateral",
              duration: "1-2 weeks",
              deliverables: ["Brand guidelines", "Collateral designs", "Templates", "Usage examples"]
            },
            {
              phase: "Phase 5: Implementation & Launch",
              description: "Rolling out the brand across all touchpoints",
              duration: "1-2 weeks",
              deliverables: ["Brand rollout plan", "Launch materials", "Implementation support", "Training"]
            }
          ].map((phase, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-medium text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-white mb-1">{phase.phase}</h4>
                  <p className="text-gray-400 mb-2">{phase.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-orange-400">Duration: {phase.duration}</span>
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
    title: "Getting Started with Branding",
    subtitle: "Collaborative, Transparent, and Strategic",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
          <h3 className="text-xl font-semibold text-green-300 mb-3">Ready to Build Your Brand?</h3>
          <p className="text-gray-300 leading-relaxed">
            Starting your branding journey with Upvista Digital is collaborative and strategic. 
            We&apos;ll work closely with you to understand your vision, values, and goals, 
            creating a brand identity that truly represents who you are and connects with your audience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Initial Brand Consultation</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Free brand strategy consultation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Business and brand goals discussion</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Target audience and market analysis</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Project scope and timeline alignment</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Project Setup</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Brand project agreement and scope</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Brand research and discovery session</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Creative brief and project timeline</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Team introduction and kickoff meeting</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
          <h4 className="text-lg font-medium text-orange-300 mb-3">What You&apos;ll Need</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <h5 className="font-medium text-white mb-1">Business Information</h5>
              <p>Company overview, values, mission, and target audience details</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Brand Preferences</h5>
              <p>Style preferences, color likes/dislikes, and brand inspiration examples</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Project Requirements</h5>
              <p>Specific deliverables needed and timeline requirements</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-medium hover:from-orange-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105">
            Start Your Brand Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  },
  references: {
    title: "Brand Success Stories",
    subtitle: "Real Brands, Real Impact",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
          <h3 className="text-xl font-semibold text-orange-300 mb-3">Proven Brand Excellence</h3>
          <p className="text-gray-300 leading-relaxed">
            Our branding projects have transformed businesses across industries, creating 
            memorable identities that drive engagement and business growth. Here are some 
            examples of our work and the impact we&apos;ve created.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              client: "Tech Startup",
              project: "Complete Brand Identity",
              description: "Full brand identity system for a disruptive fintech startup",
              results: ["300% increase in brand recognition", "Improved investor confidence", "Enhanced user trust"]
            },
            {
              client: "Restaurant Chain",
              project: "Brand Refresh & Positioning",
              description: "Strategic brand refresh for a growing restaurant franchise",
              results: ["25% increase in customer engagement", "Improved brand consistency", "Enhanced market positioning"]
            },
            {
              client: "Healthcare Provider",
              project: "Professional Brand Identity",
              description: "Trust-building brand identity for a healthcare organization",
              results: ["40% increase in patient trust", "Improved professional credibility", "Enhanced community recognition"]
            },
            {
              client: "E-commerce Brand",
              project: "Lifestyle Brand Development",
              description: "Complete lifestyle brand identity for an e-commerce platform",
              results: ["50% increase in brand loyalty", "Improved social media engagement", "Enhanced customer connection"]
            }
          ].map((caseStudy, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">{caseStudy.client}</h4>
              <h5 className="text-orange-400 mb-2">{caseStudy.project}</h5>
              <p className="text-gray-400 mb-4 text-sm">{caseStudy.description}</p>
              <div className="space-y-2">
                <h6 className="text-sm font-medium text-gray-300">Key Results:</h6>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-orange-400" />
                      {result}
              </li>
            ))}
          </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
          <h4 className="text-lg font-medium text-orange-300 mb-3">Ready to Transform Your Brand?</h4>
          <p className="text-gray-300 mb-4">
            Let&apos;s discuss how our branding expertise can help you create a memorable and effective brand identity.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-400 hover:to-red-500 transition-all duration-300">
            Schedule a Brand Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }
};

export default function BrandingPage() {
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
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
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
                ? 'text-orange-300' : 'text-gray-400 hover:text-white'
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
