"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Monitor, Code2, Brain, Brush, Users, Megaphone, Wrench, UserCheck, ArrowRight, LogOut, Globe, Palette, Settings, FileText, CheckCircle, Eye, PenTool, Search } from "lucide-react";

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
    title: "Graphic Design Services",
    subtitle: "Creating Visual Stories That Connect and Inspire",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Comprehensive Visual Design Solutions</h3>
          <p className="text-gray-300 leading-relaxed">
            At Upvista Digital, we believe that great design is more than just aesthetics—it&apos;s 
            about creating meaningful connections with your audience. Our graphic design services 
            combine creativity with strategy to deliver visual solutions that not only look stunning 
            but also drive results and build lasting brand relationships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Design Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                Brand identity & logo design
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                Digital graphics & social media
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                Print design & marketing materials
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                Motion graphics & animations
              </li>
            </ul>
      </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Design Categories</h4>
            <div className="flex flex-wrap gap-2">
              {["Brand Identity", "Digital Graphics", "Print Design", "Motion Graphics", "UI/UX", "Photo Editing", "Illustrations", "Infographics"].map((category) => (
                <span key={category} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  "end-to-end": {
    title: "End-to-End Design Solutions",
    subtitle: "From Concept to Final Delivery and Implementation",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20">
          <h3 className="text-xl font-semibold text-pink-300 mb-3">Complete Design Ecosystem</h3>
          <p className="text-gray-300 leading-relaxed">
            Our end-to-end design approach ensures that every visual element aligns with your 
            brand strategy and business goals. From initial concept development to final delivery 
            and implementation, we provide comprehensive design solutions that create lasting impact.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Strategy & Research</h4>
              <p className="text-gray-400 text-sm">Brand analysis, market research, and design strategy development.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Design & Creation</h4>
              <p className="text-gray-400 text-sm">Creative design process with multiple iterations and feedback cycles.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Delivery & Support</h4>
              <p className="text-gray-400 text-sm">Final delivery, implementation support, and ongoing design assistance.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
            <h4 className="text-lg font-medium text-white mb-3">Design Workflow</h4>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Search className="w-4 h-4 text-purple-300" />
                </div>
                <p className="text-purple-300 font-medium">Research</p>
                <p className="text-gray-400">Market & brand analysis</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <PenTool className="w-4 h-4 text-purple-300" />
                </div>
                <p className="text-purple-300 font-medium">Design</p>
                <p className="text-gray-400">Creative development</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Eye className="w-4 h-4 text-purple-300" />
                </div>
                <p className="text-purple-300 font-medium">Review</p>
                <p className="text-gray-400">Feedback & refinement</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-4 h-4 text-purple-300" />
                </div>
                <p className="text-purple-300 font-medium">Deliver</p>
                <p className="text-gray-400">Final implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  process: {
    title: "Design Process & Methodology",
    subtitle: "Systematic Approach to Creative Excellence",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20">
          <h3 className="text-xl font-semibold text-pink-300 mb-3">Proven Design Methodology</h3>
          <p className="text-gray-300 leading-relaxed">
            Our design process is built on years of experience and industry best practices. 
            We combine creative intuition with systematic methodology to ensure consistent, 
            high-quality results that meet both aesthetic and strategic objectives.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Design Tools & Software</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Adobe Creative Suite (Photoshop, Illustrator, InDesign)
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Figma & Sketch for UI/UX design
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  After Effects for motion graphics
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Canva Pro for quick graphics
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Design Principles</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Brand consistency & coherence
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  User-centered design approach
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Visual hierarchy & readability
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Scalable & adaptable design systems
                    </li>
                </ul>
            </div>
          </div>
          
          <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
            <h4 className="text-lg font-medium text-white mb-4">Design Process Steps</h4>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                <Search className="w-6 h-6 text-purple-300 mx-auto mb-2" />
                <p className="text-purple-300 font-medium">Discovery</p>
                <p className="text-gray-400">Requirements gathering</p>
              </div>
              <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                <PenTool className="w-6 h-6 text-purple-300 mx-auto mb-2" />
                <p className="text-purple-300 font-medium">Concept</p>
                <p className="text-gray-400">Initial design concepts</p>
              </div>
              <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                <Eye className="w-6 h-6 text-purple-300 mx-auto mb-2" />
                <p className="text-purple-300 font-medium">Refine</p>
                <p className="text-gray-400">Feedback & iterations</p>
              </div>
              <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-300 mx-auto mb-2" />
                <p className="text-purple-300 font-medium">Finalize</p>
                <p className="text-gray-400">Production ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  onboarding: {
    title: "Design Onboarding & Collaboration",
    subtitle: "Smooth Start to Your Design Project Journey",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Collaborative Design Experience</h3>
          <p className="text-gray-300 leading-relaxed">
            Our onboarding process is designed to establish clear communication channels and 
            set expectations for a successful design collaboration. We work closely with you 
            to understand your vision and ensure every design element aligns with your goals.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Initial Consultation</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Brand analysis & requirements gathering
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Project scope & timeline definition
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Design style & preference discussion
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Budget & deliverable planning
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Project Setup</h4>
                <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Project management tool setup
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Communication channel establishment
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Design brief & creative direction
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Milestone & review schedule
                    </li>
                </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20">
            <h4 className="text-lg font-medium text-white mb-4">Onboarding Timeline</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-300 font-medium text-sm">1</span>
                </div>
                <div>
                  <p className="text-white font-medium">Day 1: Initial Consultation</p>
                  <p className="text-gray-400 text-sm">Requirements gathering and project planning</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-300 font-medium text-sm">2</span>
                </div>
                <div>
                  <p className="text-white font-medium">Day 2-3: Project Setup</p>
                  <p className="text-gray-400 text-sm">Tools setup and communication channels</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-300 font-medium text-sm">3</span>
                </div>
                <div>
                  <p className="text-white font-medium">Day 4-5: Design Brief & Kickoff</p>
                  <p className="text-gray-400 text-sm">Creative direction and project kickoff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  references: {
    title: "Design Portfolio & Case Studies",
    subtitle: "Showcasing Creative Excellence and Strategic Impact",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20">
          <h3 className="text-xl font-semibold text-pink-300 mb-3">Creative Portfolio & Success Stories</h3>
          <p className="text-gray-300 leading-relaxed">
            Our design portfolio showcases a diverse range of creative projects that have 
            helped businesses establish strong visual identities and connect with their audiences. 
            Each project represents our commitment to creative excellence and strategic thinking.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-3">Brand Identity Design</h4>
              <p className="text-gray-400 mb-4">Complete brand identity redesign for a tech startup, including logo, color palette, and brand guidelines.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Logo Design</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Brand Guidelines</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Color Palette</span>
              </div>
            </div>
            
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-3">Digital Marketing Graphics</h4>
              <p className="text-gray-400 mb-4">Comprehensive social media graphics package with consistent visual identity across all platforms.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Social Media</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Digital Ads</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Infographics</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
            <h4 className="text-lg font-medium text-white mb-4">Design Impact Metrics</h4>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-purple-300">200+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-300">98%</p>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-300">50+</p>
                <p className="text-gray-400 text-sm">Brand Identities</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-300">24hrs</p>
                <p className="text-gray-400 text-sm">Average Response</p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
            <h4 className="text-lg font-medium text-white mb-4">Client Testimonials</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="text-gray-300 italic">&quot;Upvista&apos;s design team transformed our brand identity completely. The new logo and visual system perfectly capture our vision.&quot;</p>
                <p className="text-purple-300 font-medium mt-2">- Jennifer Martinez, Marketing Director</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="text-gray-300 italic">&quot;The social media graphics package has significantly improved our engagement rates. The designs are both beautiful and strategic.&quot;</p>
                <p className="text-purple-300 font-medium mt-2">- David Kim, Social Media Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default function DesigningPage() {
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
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
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
                ? 'text-purple-300' : 'text-gray-400 hover:text-white'
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>

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
