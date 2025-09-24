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
    title: "Software Development Services",
    subtitle: "Building Scalable Solutions That Drive Innovation",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border border-blue-500/20">
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Transform Your Ideas Into Powerful Software</h3>
          <p className="text-gray-300 leading-relaxed">
            At Upvista Digital, we specialize in creating robust, scalable software solutions that transform businesses. 
            Our expert development team combines cutting-edge technology with industry best practices to deliver 
            software that not only meets your current needs but grows with your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">What We Deliver</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                Custom software applications
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                Enterprise solutions
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                API development & integration
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                Database design & optimization
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Technologies We Use</h4>
            <div className="flex flex-wrap gap-2">
              {["Java", "Python", "C#", ".NET", "Spring Boot", "Django", "Flask", "SQL Server", "MySQL", "Redis", "Docker", "Kubernetes"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  "end-to-end": {
    title: "End-to-End Software Development",
    subtitle: "Complete Software Lifecycle Management",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-xl border border-emerald-500/20">
          <h3 className="text-xl font-semibold text-emerald-300 mb-3">From Concept to Deployment and Beyond</h3>
          <p className="text-gray-300 leading-relaxed">
            Our comprehensive end-to-end software development approach ensures your project is handled with the utmost 
            care and expertise. We manage every aspect of the development lifecycle, from initial planning to 
            post-launch support.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Requirements & Planning</h4>
              <p className="text-gray-400 text-sm">Requirements analysis, system architecture design, and technology stack selection.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Development & Testing</h4>
              <p className="text-gray-400 text-sm">Agile development with continuous integration, testing, and quality assurance.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Deployment & DevOps</h4>
              <p className="text-gray-400 text-sm">Automated deployment, monitoring, and infrastructure management.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
            <h4 className="text-lg font-medium text-blue-300 mb-3">Post-Launch Support</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h5 className="font-medium text-white mb-2">Maintenance & Updates</h5>
                <p>Regular security updates, performance monitoring, and feature enhancements.</p>
              </div>
              <div>
                <h5 className="font-medium text-white mb-2">Scalability & Optimization</h5>
                <p>Performance optimization, scaling strategies, and continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  process: {
    title: "Our Development Process",
    subtitle: "Agile Methodology with Quality-First Approach",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Agile Development Methodology</h3>
          <p className="text-gray-300 leading-relaxed">
            We follow industry-standard agile development practices with a focus on quality, collaboration, and 
            continuous improvement. Our process ensures transparency, flexibility, and rapid delivery of 
            high-quality software solutions.
          </p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              phase: "Phase 1: Discovery",
              description: "Understanding your business, goals, and technical requirements",
              duration: "1-2 weeks",
              deliverables: ["Project brief", "Technical specification", "Timeline & milestones"]
            },
            {
              phase: "Phase 2: Design",
              description: "Creating wireframes, mockups, and user experience flows",
              duration: "2-3 weeks",
              deliverables: ["Wireframes", "UI mockups", "User flow diagrams"]
            },
            {
              phase: "Phase 3: Development",
              description: "Building your website with clean, scalable code",
              duration: "4-8 weeks",
              deliverables: ["Frontend development", "Backend integration", "Database setup"]
            },
            {
              phase: "Phase 4: Testing",
              description: "Comprehensive testing across devices and browsers",
              duration: "1-2 weeks",
              deliverables: ["Quality assurance", "Performance testing", "Security audit"]
            },
            {
              phase: "Phase 5: Launch",
              description: "Deployment and post-launch optimization",
              duration: "1 week",
              deliverables: ["Production deployment", "SEO optimization", "Analytics setup"]
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
    title: "Getting Started",
    subtitle: "Simple, Streamlined, and Stress-Free",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
          <h3 className="text-xl font-semibold text-green-300 mb-3">Ready to Begin Your Project?</h3>
          <p className="text-gray-300 leading-relaxed">
            Starting your web development journey with Upvista Digital is straightforward and 
            transparent. We&apos;ll guide you through every step, ensuring you feel confident 
            and informed throughout the process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Initial Consultation</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Free 30-minute discovery call</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Project requirements discussion</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Budget and timeline alignment</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Team introduction and next steps</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Project Setup</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Contract and payment terms</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Project management tool access</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Communication channels setup</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span>Kickoff meeting scheduling</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 p-6 rounded-xl border border-violet-500/20">
          <h4 className="text-lg font-medium text-violet-300 mb-3">What You&apos;ll Need</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <h5 className="font-medium text-white mb-1">Brand Assets</h5>
              <p>Logo, color palette, fonts, and brand guidelines</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Content</h5>
              <p>Text, images, and any existing marketing materials</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Requirements</h5>
              <p>Detailed project brief and functional specifications</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/contactPage" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-violet-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  },
  references: {
    title: "Client Success Stories",
    subtitle: "Real Results, Real Impact",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
          <h3 className="text-xl font-semibold text-orange-300 mb-3">Proven Track Record</h3>
          <p className="text-gray-300 leading-relaxed">
            Our web development projects have helped businesses across industries achieve 
            their digital goals. Here are some examples of our work and the results we&apos;ve delivered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              client: "TechStart Inc.",
              project: "E-commerce Platform",
              description: "Built a scalable e-commerce solution with advanced inventory management",
              results: ["300% increase in online sales", "50% reduction in cart abandonment", "Mobile-first responsive design"]
            },
            {
              client: "Creative Agency",
              project: "Portfolio Website",
              description: "Modern, interactive portfolio showcasing creative work and services",
              results: ["200% increase in lead generation", "Improved user engagement", "SEO-optimized structure"]
            },
            {
              client: "Healthcare Provider",
              project: "Patient Portal",
              description: "Secure patient management system with appointment booking",
              results: ["Streamlined patient experience", "Reduced administrative workload", "HIPAA-compliant design"]
            },
            {
              client: "Restaurant Chain",
              project: "Multi-location Website",
              description: "Unified website for multiple restaurant locations with online ordering",
              results: ["Centralized brand presence", "Increased online orders", "Location-specific SEO"]
            }
          ].map((caseStudy, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">{caseStudy.client}</h4>
              <h5 className="text-violet-400 mb-2">{caseStudy.project}</h5>
              <p className="text-gray-400 mb-4 text-sm">{caseStudy.description}</p>
              <div className="space-y-2">
                <h6 className="text-sm font-medium text-gray-300">Key Results:</h6>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-violet-400" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 p-6 rounded-xl border border-violet-500/20">
          <h4 className="text-lg font-medium text-violet-300 mb-3">Ready to Join Our Success Stories?</h4>
          <p className="text-gray-300 mb-4">
            Let&apos;s discuss how we can help you achieve similar results for your business.
          </p>
          <Link href="/contactPage" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-violet-400 hover:to-purple-500 transition-all duration-300">
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }
};

export default function WebsitePage() {
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
                ? 'text-blue-300' : 'text-gray-400 hover:text-white'
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
          <Link href="/Services" className="flex items-center mr-2 text-gray-300 hover:text-white p-2 rounded-full transition-colors duration-200">
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
