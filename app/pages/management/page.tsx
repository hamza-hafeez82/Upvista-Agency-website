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
  { name: "Consulting", href: "/pages/consult", icon: <UserCheck className="w-5 h-5" /> },
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
    title: "Professional Management Services",
    subtitle: "Streamlining Your Digital Operations for Maximum Efficiency",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border border-blue-500/20">
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Comprehensive Digital Management Solutions</h3>
          <p className="text-gray-300 leading-relaxed">
            At Upvista Digital, we understand that effective management is the backbone of 
            successful digital operations. Our professional management services cover every 
            aspect of your digital presence, from social media to project management, 
            ensuring everything runs smoothly while you focus on growing your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">What We Deliver</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                Social media management & strategy
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                Project management & coordination
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                Content management & optimization
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                Community management & engagement
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Management Areas</h4>
            <div className="flex flex-wrap gap-2">
              {["Social Media", "Projects", "Content", "Community", "Digital Assets", "Websites", "Analytics", "Workflows"].map((area) => (
                <span key={area} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  "end-to-end": {
    title: "End-to-End Management Solutions",
    subtitle: "From Strategy to Execution and Optimization",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border border-indigo-500/20">
          <h3 className="text-xl font-semibold text-indigo-300 mb-3">Comprehensive Management Ecosystem</h3>
          <p className="text-gray-300 leading-relaxed">
            Our end-to-end management solutions provide a complete framework for 
            organizing, executing, and optimizing your digital operations. We handle 
            every aspect of management, ensuring seamless coordination and maximum efficiency.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Strategy & Planning</h4>
              <p className="text-gray-400 text-sm">Management strategy development, workflow design, and process optimization.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Execution & Monitoring</h4>
              <p className="text-gray-400 text-sm">Daily management tasks, performance monitoring, and quality assurance.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Optimization & Growth</h4>
              <p className="text-gray-400 text-sm">Continuous improvement, process refinement, and scalability planning.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
            <h4 className="text-lg font-medium text-green-300 mb-3">Management Tools & Platforms</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h5 className="font-medium text-white mb-2">Project Management</h5>
                <p>Asana, Trello, Monday.com, and other leading project management platforms.</p>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">Analytics & Reporting</h5>
                <p>Google Analytics, social media insights, and comprehensive reporting dashboards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  process: {
    title: "Our Management Process",
    subtitle: "Systematic, Efficient, and Results-Driven",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Proven Management Methodology</h3>
          <p className="text-gray-300 leading-relaxed">
            We follow a systematic management approach that ensures every aspect of your 
            digital operations is handled efficiently and effectively. Our process is 
            designed to deliver consistent results while maintaining flexibility for 
            your unique needs.
          </p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              phase: "Phase 1: Assessment & Analysis",
              description: "Evaluating current management needs and identifying opportunities",
              duration: "1 week",
              deliverables: ["Management audit", "Process analysis", "Gap identification", "Strategy recommendations"]
            },
            {
              phase: "Phase 2: Strategy Development",
              description: "Creating comprehensive management strategies and workflows",
              duration: "1-2 weeks",
              deliverables: ["Management strategy", "Workflow design", "Tool selection", "Timeline planning"]
            },
            {
              phase: "Phase 3: Implementation & Setup",
              description: "Setting up management systems and beginning operations",
              duration: "1-2 weeks",
              deliverables: ["System setup", "Process implementation", "Team training", "Initial execution"]
            },
            {
              phase: "Phase 4: Monitoring & Optimization",
              description: "Ongoing management, monitoring, and continuous improvement",
              duration: "Ongoing",
              deliverables: ["Performance monitoring", "Process optimization", "Regular reporting", "Strategy refinement"]
            },
            {
              phase: "Phase 5: Scaling & Growth",
              description: "Expanding management capabilities and supporting business growth",
              duration: "Ongoing",
              deliverables: ["Process scaling", "Advanced automation", "Growth support", "Strategic planning"]
            }
          ].map((phase, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-medium text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-white mb-1">{phase.phase}</h4>
                  <p className="text-gray-400 mb-2">{phase.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-blue-400">Duration: {phase.duration}</span>
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
    title: "Getting Started with Management",
    subtitle: "Smooth, Transparent, and Efficient",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
          <h3 className="text-xl font-semibold text-green-300 mb-3">Ready to Streamline Your Operations?</h3>
          <p className="text-gray-300 leading-relaxed">
            Starting your management journey with Upvista Digital is smooth and transparent. 
            We&apos;ll work closely with you to understand your current processes and create 
            efficient management solutions that free up your time to focus on what matters most.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Initial Management Consultation</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Free management assessment consultation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Current process evaluation and analysis</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Management needs and goals discussion</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Service scope and timeline alignment</span>
              </div>
            </div>
      </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Project Setup</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Management service agreement and scope</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Tool access and account setup</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Communication and reporting setup</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Kickoff meeting and process initiation</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border border-blue-500/20">
          <h4 className="text-lg font-medium text-blue-300 mb-3">What You&apos;ll Need</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <h5 className="font-medium text-white mb-1">Access & Permissions</h5>
              <p>Access to social media accounts, websites, and relevant platforms</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Brand Guidelines</h5>
              <p>Brand guidelines, content preferences, and communication style</p>
                </div>
            <div>
              <h5 className="font-medium text-white mb-1">Goals & Objectives</h5>
              <p>Clear management goals, KPIs, and success metrics</p>
              </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105">
            Start Your Management Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  },
  references: {
    title: "Management Success Stories",
    subtitle: "Real Results, Real Efficiency",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
          <h3 className="text-xl font-semibold text-orange-300 mb-3">Proven Management Excellence</h3>
          <p className="text-gray-300 leading-relaxed">
            Our management services have transformed operations across industries, 
            delivering significant efficiency gains and operational improvements. 
            Here are some examples of our work and the impact we&apos;ve created.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              client: "E-commerce Brand",
              project: "Social Media Management",
              description: "Complete social media management for a growing e-commerce brand",
              results: ["200% increase in social engagement", "50% reduction in management time", "Improved brand consistency"]
            },
            {
              client: "Tech Startup",
              project: "Project Management",
              description: "Project management and coordination for a fast-growing tech startup",
              results: ["30% faster project delivery", "Improved team collaboration", "Enhanced project visibility"]
            },
            {
              client: "Content Creator",
              project: "Content Management",
              description: "Content management and optimization for a professional content creator",
              results: ["40% increase in content output", "Improved content quality", "Enhanced audience engagement"]
            },
            {
              client: "SaaS Company",
              project: "Community Management",
              description: "Community management and engagement for a SaaS platform",
              results: ["300% increase in community engagement", "Improved customer satisfaction", "Enhanced brand loyalty"]
            }
          ].map((caseStudy, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">{caseStudy.client}</h4>
              <h5 className="text-blue-400 mb-2">{caseStudy.project}</h5>
              <p className="text-gray-400 mb-4 text-sm">{caseStudy.description}</p>
              <div className="space-y-2">
                <h6 className="text-sm font-medium text-gray-300">Key Results:</h6>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-blue-400" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            ))}
          </div>
        
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border border-blue-500/20">
          <h4 className="text-lg font-medium text-blue-300 mb-3">Ready to Streamline Your Operations?</h4>
          <p className="text-gray-300 mb-4">
            Let&apos;s discuss how our management expertise can help you achieve similar results.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-400 hover:to-indigo-500 transition-all duration-300">
            Schedule a Management Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
              </div>
    )
  }
};

export default function ManagementPage() {
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
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
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
                ? 'text-indigo-300' : 'text-gray-400 hover:text-white'
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
