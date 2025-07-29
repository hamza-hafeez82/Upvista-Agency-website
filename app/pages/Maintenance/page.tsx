"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Monitor, Code2, Brain, Brush, Users, Megaphone, Wrench, UserCheck, ArrowRight, LogOut, Globe, Palette, Settings, FileText, CheckCircle, Eye, Zap, Search, Calendar } from "lucide-react";

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
    title: "Website & System Maintenance Services",
    subtitle: "Keeping Your Digital Assets Running Smoothly and Securely",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
          <h3 className="text-xl font-semibold text-green-300 mb-3">Proactive Maintenance Solutions</h3>
          <p className="text-gray-300 leading-relaxed">
            At Upvista Digital, we believe that prevention is better than cure. Our comprehensive 
            maintenance services ensure your websites, applications, and digital systems remain 
            secure, fast, and up-to-date. We handle everything from routine updates to emergency 
            fixes, giving you peace of mind and uninterrupted digital operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">What We Maintain</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Website performance & speed optimization
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Security updates & vulnerability patches
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Content management system updates
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Database optimization & backups
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Maintenance Types</h4>
            <div className="flex flex-wrap gap-2">
              {["Preventive", "Corrective", "Emergency", "Performance", "Security", "Updates", "Backups", "Monitoring"].map((type) => (
                <span key={type} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  "end-to-end": {
    title: "End-to-End Maintenance Solutions",
    subtitle: "From Monitoring to Optimization and Emergency Response",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-xl border border-emerald-500/20">
          <h3 className="text-xl font-semibold text-emerald-300 mb-3">Comprehensive Maintenance Ecosystem</h3>
          <p className="text-gray-300 leading-relaxed">
            Our end-to-end maintenance approach covers every aspect of your digital infrastructure. 
            From proactive monitoring and regular updates to emergency response and performance 
            optimization, we ensure your systems remain reliable, secure, and efficient.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Monitoring & Alerts</h4>
              <p className="text-gray-400 text-sm">24/7 system monitoring with instant alerts for any issues or performance degradation.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Regular Updates</h4>
              <p className="text-gray-400 text-sm">Scheduled updates for security patches, CMS updates, and performance improvements.</p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-2">Emergency Response</h4>
              <p className="text-gray-400 text-sm">Rapid response team for critical issues, downtime, and security incidents.</p>
            </div>
      </div>

          <div className="bg-gradient-to-r from-teal-500/10 to-green-500/10 p-6 rounded-xl border border-teal-500/20">
            <h4 className="text-lg font-medium text-white mb-3">Maintenance Workflow</h4>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Eye className="w-4 h-4 text-green-300" />
                </div>
                <p className="text-green-300 font-medium">Monitor</p>
                <p className="text-gray-400">Continuous monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Search className="w-4 h-4 text-green-300" />
                </div>
                <p className="text-green-300 font-medium">Analyze</p>
                <p className="text-gray-400">Issue identification</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-4 h-4 text-green-300" />
                </div>
                <p className="text-green-300 font-medium">Fix</p>
                <p className="text-gray-400">Quick resolution</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                </div>
                <p className="text-green-300 font-medium">Verify</p>
                <p className="text-gray-400">Quality assurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  process: {
    title: "Maintenance Process & Methodology",
    subtitle: "Systematic Approach to Digital Asset Management",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-500/10 to-green-500/10 p-6 rounded-xl border border-teal-500/20">
          <h3 className="text-xl font-semibold text-teal-300 mb-3">Structured Maintenance Methodology</h3>
          <p className="text-gray-300 leading-relaxed">
            Our maintenance process follows industry best practices and proven methodologies 
            to ensure consistent, reliable service delivery. We combine automated monitoring 
            with human expertise to provide the best possible maintenance experience.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Automated Monitoring</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Uptime monitoring & alerting
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Performance metrics tracking
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Security vulnerability scanning
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Automated backup verification
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Manual Maintenance</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Code review & optimization
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Content updates & management
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  User experience improvements
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Strategic recommendations
              </li>
          </ul>
            </div>
          </div>
          
          <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
            <h4 className="text-lg font-medium text-white mb-4">Maintenance Schedule</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center p-3 bg-green-500/10 rounded-lg">
                <Calendar className="w-6 h-6 text-green-300 mx-auto mb-2" />
                <p className="text-green-300 font-medium">Daily</p>
                <p className="text-gray-400">Monitoring & alerts</p>
              </div>
              <div className="text-center p-3 bg-green-500/10 rounded-lg">
                <Calendar className="w-6 h-6 text-green-300 mx-auto mb-2" />
                <p className="text-green-300 font-medium">Weekly</p>
                <p className="text-gray-400">Performance review</p>
              </div>
              <div className="text-center p-3 bg-green-500/10 rounded-lg">
                <Calendar className="w-6 h-6 text-green-300 mx-auto mb-2" />
                <p className="text-green-300 font-medium">Monthly</p>
                <p className="text-gray-400">Security updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  onboarding: {
    title: "Maintenance Onboarding & Setup",
    subtitle: "Smooth Transition to Professional Maintenance Services",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
          <h3 className="text-xl font-semibold text-green-300 mb-3">Seamless Onboarding Experience</h3>
          <p className="text-gray-300 leading-relaxed">
            Our onboarding process is designed to get your maintenance services up and running 
            quickly and efficiently. We assess your current systems, set up monitoring, and 
            establish clear communication channels to ensure a smooth transition.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Initial Assessment</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  System architecture review
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Performance baseline establishment
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Security vulnerability assessment
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Maintenance requirements analysis
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Setup & Configuration</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Monitoring tools installation
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Backup system configuration
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Alert system setup
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Access credentials management
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-6 rounded-xl border border-emerald-500/20">
            <h4 className="text-lg font-medium text-white mb-4">Onboarding Timeline</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-300 font-medium text-sm">1</span>
                </div>
                <div>
                  <p className="text-white font-medium">Day 1-2: Assessment & Planning</p>
                  <p className="text-gray-400 text-sm">System review and maintenance strategy development</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-300 font-medium text-sm">2</span>
                </div>
                <div>
                  <p className="text-white font-medium">Day 3-4: Setup & Configuration</p>
                  <p className="text-gray-400 text-sm">Monitoring tools and backup systems installation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-300 font-medium text-sm">3</span>
                </div>
                <div>
                  <p className="text-white font-medium">Day 5-7: Testing & Handover</p>
                  <p className="text-gray-400 text-sm">System testing and maintenance handover</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  references: {
    title: "Maintenance References & Case Studies",
    subtitle: "Proven Track Record of Reliable Maintenance Services",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-500/10 to-green-500/10 p-6 rounded-xl border border-teal-500/20">
          <h3 className="text-xl font-semibold text-teal-300 mb-3">Success Stories & Testimonials</h3>
          <p className="text-gray-300 leading-relaxed">
            Our maintenance services have helped numerous businesses maintain their digital 
            presence with minimal downtime and maximum performance. Here are some examples 
            of our successful maintenance partnerships and the results we&apos;ve achieved.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-3">E-commerce Platform</h4>
              <p className="text-gray-400 mb-4">Maintained a high-traffic e-commerce website with 99.9% uptime and improved page load speeds by 40%.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Performance</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Security</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Updates</span>
              </div>
            </div>
            
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-3">Corporate Website</h4>
              <p className="text-gray-400 mb-4">Managed a corporate website with automated backups, security updates, and content management.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Backups</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Security</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Content</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
            <h4 className="text-lg font-medium text-white mb-4">Maintenance Metrics</h4>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-green-300">99.9%</p>
                <p className="text-gray-400 text-sm">Average Uptime</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-300">&lt;2hrs</p>
                <p className="text-gray-400 text-sm">Response Time</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-300">100%</p>
                <p className="text-gray-400 text-sm">Backup Success</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-300">24/7</p>
                <p className="text-gray-400 text-sm">Monitoring</p>
              </div>
            </div>
          </div>
          
          <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
            <h4 className="text-lg font-medium text-white mb-4">Client Testimonials</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-gray-300 italic">&quot;Upvista&apos;s maintenance service has been a game-changer for our business. Our website has never been more reliable.&quot;</p>
                <p className="text-green-300 font-medium mt-2">- Sarah Johnson, CEO</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-gray-300 italic">&quot;The proactive approach to maintenance has saved us countless hours and prevented potential issues before they became problems.&quot;</p>
                <p className="text-green-300 font-medium mt-2">- Michael Chen, CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default function MaintenancePage() {
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
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
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
                ? 'text-green-300' : 'text-gray-400 hover:text-white'
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-teal-500/20 via-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>

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