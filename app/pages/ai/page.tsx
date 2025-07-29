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
    title: "AI Automation Services",
    subtitle: "Transforming Business Through Intelligent Automation",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
          <h3 className="text-xl font-semibold text-cyan-300 mb-3">Intelligent Solutions for the Future</h3>
          <p className="text-gray-300 leading-relaxed">
            At Upvista Digital, we harness the power of artificial intelligence to create 
            intelligent automation solutions that transform how businesses operate. Our AI 
            services combine cutting-edge technology with practical business applications 
            to drive efficiency, innovation, and competitive advantage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">What We Deliver</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                Custom AI model development
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                Process automation & optimization
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                Data analytics & insights
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                Machine learning integration
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">AI Technologies & Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "TensorFlow", "PyTorch", "OpenAI API", "Azure AI", "AWS ML", "Google Cloud AI"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
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
    title: "End-to-End AI Solutions",
    subtitle: "From Concept to Deployment",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border border-blue-500/20">
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Comprehensive AI Implementation</h3>
          <p className="text-gray-300 leading-relaxed">
            Our end-to-end AI solutions cover every aspect of artificial intelligence 
            implementation, from initial strategy and data preparation to model deployment 
            and ongoing optimization. We ensure your AI initiatives deliver measurable 
            business value.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Strategy & Planning</h4>
              <p className="text-gray-400 text-sm">AI roadmap development, use case identification, and ROI analysis.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Development & Training</h4>
              <p className="text-gray-400 text-sm">Model development, data preparation, and AI system training.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Deployment & Maintenance</h4>
              <p className="text-gray-400 text-sm">Production deployment, monitoring, and continuous improvement.</p>
            </div>
      </div>

          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
            <h4 className="text-lg font-medium text-green-300 mb-3">AI Infrastructure & Support</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h5 className="font-medium text-white mb-2">Cloud Infrastructure</h5>
                <p>Scalable cloud-based AI infrastructure and deployment platforms.</p>
              </div>
          <div>
                <h5 className="font-medium text-white mb-2">Monitoring & Analytics</h5>
                <p>Real-time AI performance monitoring and analytics dashboards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  process: {
    title: "Our AI Development Process",
    subtitle: "Methodical, Scalable, and Results-Driven",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Agile AI Development</h3>
          <p className="text-gray-300 leading-relaxed">
            We follow a proven AI development methodology that ensures successful 
            implementation and measurable results. Our iterative approach allows for 
            continuous learning and optimization throughout the development process.
          </p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              phase: "Phase 1: Discovery & Strategy",
              description: "Understanding business needs and defining AI opportunities",
              duration: "1-2 weeks",
              deliverables: ["AI strategy document", "Use case analysis", "ROI projections"]
            },
            {
              phase: "Phase 2: Data Assessment",
              description: "Evaluating data quality and preparing for AI implementation",
              duration: "1-2 weeks",
              deliverables: ["Data audit report", "Data preparation plan", "Infrastructure requirements"]
            },
            {
              phase: "Phase 3: Model Development",
              description: "Building and training AI models with your data",
              duration: "3-6 weeks",
              deliverables: ["AI models", "Training results", "Performance metrics"]
            },
            {
              phase: "Phase 4: Testing & Validation",
              description: "Rigorous testing and validation of AI systems",
              duration: "1-2 weeks",
              deliverables: ["Test results", "Validation reports", "Performance benchmarks"]
            },
            {
              phase: "Phase 5: Deployment & Optimization",
              description: "Production deployment and ongoing optimization",
              duration: "1-2 weeks",
              deliverables: ["Production deployment", "Monitoring setup", "Optimization plan"]
            }
          ].map((phase, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-medium text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-white mb-1">{phase.phase}</h4>
                  <p className="text-gray-400 mb-2">{phase.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-cyan-400">Duration: {phase.duration}</span>
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
    title: "Getting Started with AI",
    subtitle: "Strategic, Collaborative, and Future-Ready",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
          <h3 className="text-xl font-semibold text-green-300 mb-3">Ready to Embrace AI Transformation?</h3>
          <p className="text-gray-300 leading-relaxed">
            Starting your AI journey with Upvista Digital is strategic and collaborative. 
            We&apos;ll work closely with you to understand your business challenges and 
            create AI solutions that drive real value and competitive advantage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Initial AI Consultation</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Free AI strategy consultation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Business process analysis</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>AI opportunity identification</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>ROI and timeline discussion</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Project Setup</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>AI project agreement and scope</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Data access and security setup</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>AI development environment setup</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Team onboarding and kickoff</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
          <h4 className="text-lg font-medium text-cyan-300 mb-3">What You&apos;ll Need</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <h5 className="font-medium text-white mb-1">Business Requirements</h5>
              <p>Clear understanding of business processes and automation goals</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Data Access</h5>
              <p>Access to relevant business data and systems for AI training</p>
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Infrastructure</h5>
              <p>Cloud infrastructure or on-premise setup for AI deployment</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/pages/contactPage" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
            Start Your AI Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  },
  references: {
    title: "AI Success Stories",
    subtitle: "Real Results, Real Transformation",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
          <h3 className="text-xl font-semibold text-orange-300 mb-3">Proven AI Excellence</h3>
          <p className="text-gray-300 leading-relaxed">
            Our AI projects have transformed businesses across industries, delivering 
            measurable results and competitive advantages. Here are some examples of 
            our work and the impact we&apos;ve created.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              client: "Manufacturing Company",
              project: "Predictive Maintenance AI",
              description: "AI-powered system to predict equipment failures and optimize maintenance schedules",
              results: ["30% reduction in downtime", "25% cost savings on maintenance", "Improved equipment lifespan"]
            },
            {
              client: "E-commerce Platform",
              project: "Recommendation Engine",
              description: "Personalized product recommendation system using machine learning",
              results: ["40% increase in sales", "35% improvement in customer engagement", "Enhanced user experience"]
            },
            {
              client: "Financial Services",
              project: "Fraud Detection AI",
              description: "Real-time fraud detection system using advanced machine learning algorithms",
              results: ["90% fraud detection accuracy", "60% reduction in false positives", "Real-time processing"]
            },
            {
              client: "Healthcare Provider",
              project: "Diagnostic AI Assistant",
              description: "AI-powered diagnostic support system for medical professionals",
              results: ["Improved diagnostic accuracy", "Reduced diagnosis time", "Enhanced patient care"]
            }
          ].map((caseStudy, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">{caseStudy.client}</h4>
              <h5 className="text-cyan-400 mb-2">{caseStudy.project}</h5>
              <p className="text-gray-400 mb-4 text-sm">{caseStudy.description}</p>
              <div className="space-y-2">
                <h6 className="text-sm font-medium text-gray-300">Key Results:</h6>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-cyan-400" />
                      {result}
              </li>
            ))}
          </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
          <h4 className="text-lg font-medium text-cyan-300 mb-3">Ready to Transform Your Business with AI?</h4>
          <p className="text-gray-300 mb-4">
            Let&apos;s discuss how our AI expertise can help you achieve similar results.
          </p>
          <Link href="/pages/contactPage" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300">
            Schedule an AI Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }
};

export default function AIPage() {
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
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex justify-around items-center bg-black/90 border-t border-gray-800 shadow-2xl rounded-t-2xl py-2 px-1" style={{backdropFilter: 'blur(8px)'}}>
        {sidebarSections.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key as SectionKey)}
            className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg transition-all duration-200 ${
              activeSection === section.key
                ? 'text-cyan-300' : 'text-gray-400 hover:text-white'
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
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {/* Animated Gradient Background */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          
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
