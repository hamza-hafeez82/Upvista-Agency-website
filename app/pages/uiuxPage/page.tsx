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
    title: "UI/UX Design Services",
    subtitle: "Creating Intuitive and Beautiful Digital Experiences",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20">
          <h3 className="text-xl font-semibold text-pink-300 mb-3">Design That Drives Results</h3>
          <p className="text-gray-300 leading-relaxed">
            At Upvista Digital, we believe great design is invisible—it guides users effortlessly 
            through their journey while creating memorable experiences. Our UI/UX design services 
            combine user research, creative design, and strategic thinking to deliver solutions 
            that not only look stunning but perform exceptionally.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">What We Deliver</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-pink-400" />
                User research & persona development
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-pink-400" />
                Wireframes & interactive prototypes
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-pink-400" />
                Visual design & brand integration
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-pink-400" />
                Usability testing & optimization
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Design Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer", "Protopie"].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  "end-to-end": {
    title: "End-to-End Design Process",
    subtitle: "From Research to Implementation",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Comprehensive Design Solutions</h3>
          <p className="text-gray-300 leading-relaxed">
            Our end-to-end design process ensures every aspect of your digital product is 
            thoughtfully crafted and optimized for success. From initial research to final 
            implementation, we maintain a user-centered approach throughout.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Research & Strategy</h4>
              <p className="text-gray-400 text-sm">User research, competitive analysis, and strategic planning.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Design & Prototyping</h4>
              <p className="text-gray-400 text-sm">Wireframing, visual design, and interactive prototyping.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Testing & Handoff</h4>
              <p className="text-gray-400 text-sm">Usability testing, design system creation, and developer handoff.</p>
            </div>
      </div>

          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
            <h4 className="text-lg font-medium text-green-300 mb-3">Design System & Documentation</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h5 className="font-medium text-white mb-2">Component Library</h5>
                <p>Reusable design components and patterns for consistency and scalability.</p>
              </div>
          <div>
                <h5 className="font-medium text-white mb-2">Design Guidelines</h5>
                <p>Comprehensive documentation for maintaining design quality and consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  process: {
    title: "Our Design Process",
    subtitle: "User-Centered, Iterative, and Results-Driven",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Design Thinking Methodology</h3>
          <p className="text-gray-300 leading-relaxed">
            We follow a proven design thinking process that ensures we understand your users, 
            create innovative solutions, and deliver designs that exceed expectations. Each 
            phase builds upon the previous one, creating a solid foundation for success.
          </p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              phase: "Phase 1: Discover",
              description: "Understanding users, business goals, and market context",
              duration: "1-2 weeks",
              deliverables: ["User research", "Competitive analysis", "Business requirements"]
            },
            {
              phase: "Phase 2: Define",
              description: "Synthesizing insights and defining design opportunities",
              duration: "1 week",
              deliverables: ["User personas", "Journey maps", "Design brief"]
            },
            {
              phase: "Phase 3: Design",
              description: "Creating wireframes, mockups, and interactive prototypes",
              duration: "2-4 weeks",
              deliverables: ["Wireframes", "Visual designs", "Interactive prototypes"]
            },
            {
              phase: "Phase 4: Test",
              description: "Validating designs through user testing and feedback",
              duration: "1-2 weeks",
              deliverables: ["Usability testing", "User feedback", "Design iterations"]
            },
            {
              phase: "Phase 5: Deliver",
              description: "Finalizing designs and preparing for development",
              duration: "1 week",
              deliverables: ["Design system", "Developer handoff", "Documentation"]
            }
          ].map((phase, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm font-medium text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-white mb-1">{phase.phase}</h4>
                  <p className="text-gray-400 mb-2">{phase.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-pink-400">Duration: {phase.duration}</span>
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
    title: "Getting Started with Design",
    subtitle: "Simple, Collaborative, and Transparent",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
          <h3 className="text-xl font-semibold text-green-300 mb-3">Ready to Transform Your Digital Experience?</h3>
          <p className="text-gray-300 leading-relaxed">
            Starting your design project with Upvista Digital is collaborative and transparent. 
            We&apos;ll work closely with you to understand your vision and create designs that 
            not only look beautiful but drive real business results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Initial Consultation</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Free design consultation call</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Project scope and requirements discussion</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Timeline and budget alignment</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Design team introduction</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Project Setup</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Design brief and project agreement</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Design tool access and collaboration setup</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Communication and feedback channels</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Kickoff meeting and project timeline</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20">
          <h4 className="text-lg font-medium text-pink-300 mb-3">What You&apos;ll Need</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <h5 className="font-medium text-white mb-1">Brand Assets</h5>
              <p>Logo, color palette, fonts, and brand guidelines</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Content & Requirements</h5>
              <p>Project brief, user stories, and functional requirements</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Access & Collaboration</h5>
              <p>Design tool access and team collaboration setup</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/pages/contactPage" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
            Start Your Design Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  },
  references: {
    title: "Design Portfolio & Success Stories",
    subtitle: "Real Projects, Real Impact",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
          <h3 className="text-xl font-semibold text-orange-300 mb-3">Proven Design Excellence</h3>
          <p className="text-gray-300 leading-relaxed">
            Our design projects have transformed digital experiences across industries, 
            delivering measurable results and user satisfaction. Here are some examples 
            of our work and the impact we&apos;ve created.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              client: "FinTech Startup",
              project: "Mobile Banking App",
              description: "Redesigned mobile banking experience with focus on security and ease of use",
              results: ["40% increase in user engagement", "60% reduction in support tickets", "4.8/5 app store rating"]
            },
            {
              client: "E-commerce Platform",
              project: "Shopping Experience Redesign",
              description: "Complete UX overhaul of online shopping platform",
              results: ["25% increase in conversion rate", "35% reduction in cart abandonment", "Improved mobile experience"]
            },
            {
              client: "Healthcare Provider",
              project: "Patient Portal Design",
              description: "Intuitive patient management system with appointment booking",
              results: ["50% increase in portal adoption", "Streamlined patient workflows", "Accessible design compliance"]
            },
            {
              client: "SaaS Platform",
              project: "Dashboard & Analytics UI",
              description: "Complex data visualization and analytics dashboard design",
              results: ["Improved data comprehension", "Reduced training time", "Enhanced user productivity"]
            }
          ].map((caseStudy, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">{caseStudy.client}</h4>
              <h5 className="text-pink-400 mb-2">{caseStudy.project}</h5>
              <p className="text-gray-400 mb-4 text-sm">{caseStudy.description}</p>
              <div className="space-y-2">
                <h6 className="text-sm font-medium text-gray-300">Key Results:</h6>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-pink-400" />
                      {result}
              </li>
            ))}
          </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20">
          <h4 className="text-lg font-medium text-pink-300 mb-3">Ready to Transform Your Digital Experience?</h4>
          <p className="text-gray-300 mb-4">
            Let&apos;s discuss how our design expertise can help you create exceptional user experiences.
          </p>
          <Link href="/pages/contactPage" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-pink-400 hover:to-purple-500 transition-all duration-300">
            Schedule a Design Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }
};

export default function UiUxPage() {
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
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar (hidden on mobile) */}
      <div className={`hidden md:block fixed left-0 top-0 h-full bg-black border-r border-gray-800 z-20 transition-all duration-300 ${serviceBarShrink ? 'w-16' : 'w-64'} md:relative md:translate-x-0`}>
        <div className="p-4 space-y-6">
          {sidebarSections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key as SectionKey)}
              className={`w-full flex flex-col md:flex-row items-center gap-2 p-3 rounded-lg transition-all duration-200 ${
                activeSection === section.key
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex justify-around items-center bg-black/90 border-t border-gray-800 shadow-2xl py-2 px-1" style={{backdropFilter: 'blur(8px)'}}>
        {sidebarSections.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key as SectionKey)}
            className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg transition-all duration-200 ${
              activeSection === section.key
                ? 'text-pink-300' : 'text-gray-400 hover:text-white'
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          
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
