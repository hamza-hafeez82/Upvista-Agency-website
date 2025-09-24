"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Monitor, Code2, Brain, Brush, Users, ChevronLeft, ChevronRight, ArrowRight, LogOut, Globe, Palette } from "lucide-react";

const servicesList = [
  { label: "End-to-End", href: "/pages/completeServices", icon: <ArrowRight className="w-5 h-5" /> },
  { label: "Web Development", href: "/pages/website", icon: <Code2 className="w-5 h-5" /> },
  { label: "Landing Pages", href: "/pages/landingPges", icon: <Globe className="w-5 h-5" /> },
  { label: "AI Automation", href: "/pages/ai", icon: <Brain className="w-5 h-5" /> },
  { label: "UI/UX Design", href: "/pages/uiuxPage", icon: <Users className="w-5 h-5" /> },
  { label: "Branding", href: "/pages/branding", icon: <Brush className="w-5 h-5" /> },
  { label: "Graphics Design", href: "/pages/designing", icon: <Palette className="w-5 h-5" /> },
  { label: "Management", href: "/pages/management", icon: <Users className="w-5 h-5" /> },
  { label: "Maintenance", href: "/pages/Maintenance", icon: <Users className="w-5 h-5" /> },
];

const sections = [
  { key: "overview", label: "Overview", icon: <Monitor className="w-5 h-5" /> },
  { key: "endtoend", label: "End-to-End", icon: <Code2 className="w-5 h-5" /> },
  { key: "process", label: "Process", icon: <Brain className="w-5 h-5" /> },
  { key: "onboarding", label: "Onboarding", icon: <Users className="w-5 h-5" /> },
  { key: "references", label: "References", icon: <Users className="w-5 h-5" /> },
];

const gradients = [
  "from-violet-500 via-purple-500 to-indigo-500",
  "from-pink-500 via-red-500 to-yellow-500",
  "from-cyan-500 via-blue-500 to-purple-500",
  "from-emerald-500 via-teal-500 to-blue-500",
];

type SectionKey = "overview" | "endtoend" | "process" | "onboarding" | "references";

export default function CompleteServices() {
  const [activeSection, setActiveSection] = useState<SectionKey>("overview");
  const [gradientIdx, setGradientIdx] = useState(0);
  const [topbarMenuOpen, setTopbarMenuOpen] = useState(false);
  const [serviceBarShrink, setServiceBarShrink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIdx((idx) => (idx + 1) % gradients.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Responsive shrink for sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setServiceBarShrink(true);
      else setServiceBarShrink(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white flex flex-col">
      {/* Animated Gradient Blob */}
      <div className="fixed top-0 left-0 z-0 w-[420px] h-[420px] pointer-events-none">
        <div
          className={`absolute w-full h-full rounded-full blur-3xl opacity-60 animate-fade-in-up transition-all duration-1000 bg-gradient-to-br ${gradients[gradientIdx]}`}
          style={{ filter: "blur(80px)", transition: "background 1s" }}
        />
      </div>

      {/* Top Bar */}
      <header className="sticky top-0 z-30 w-full bg-black/80 border-b border-gray-800 flex items-center px-2 md:px-8 py-2 gap-2 shadow-lg">
        {/* Exit Icon (far left) */}
        <Link href="/pages/services" className="flex items-center mr-2 text-gray-300 hover:text-white p-2 rounded-full transition-colors duration-200">
          <LogOut className="h-7 w-7" />
            </Link>
        {/* Centered Services List (desktop) */}
        <nav className="flex-1 hidden md:flex justify-center">
          <ul className="flex gap-2 md:gap-4 items-center">
            {servicesList.map((service) => (
              <li key={service.label}>
                <Link href={service.href} className="flex flex-col items-center px-4 py-2 rounded-lg font-semibold text-sm md:text-base text-gray-200 hover:bg-violet-700/40 hover:text-white transition-all duration-200 whitespace-nowrap">
                  {service.icon}
                  <span className="text-xs mt-1">{service.label}</span>
                </Link>
                    </li>
                  ))}
                </ul>
        </nav>
        {/* Hamburger menu for top bar (mobile) */}
        <button
          className="ml-auto md:hidden flex items-center text-gray-300 hover:text-white p-2 rounded-full transition-colors duration-200"
          onClick={() => setTopbarMenuOpen(true)}
          aria-label="Open services menu"
        >
          <Menu className="h-7 w-7" />
        </button>
        {/* Topbar mobile menu sidebar (open from right) */}
        {topbarMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 flex flex-row-reverse">
            <div className="w-64 bg-black border-l border-gray-800 flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-6 border-b border-gray-800">
                <span className="text-2xl font-bold text-white tracking-wide">Services</span>
                <button className="text-gray-400 hover:text-white" onClick={() => setTopbarMenuOpen(false)}>
                  <X className="h-7 w-7" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col gap-2 px-4 py-6">
                {servicesList.map((service) => (
                  <Link key={service.label} href={service.href} className="flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-base text-gray-200 hover:bg-violet-700/40 hover:text-white transition-all duration-200 whitespace-nowrap">
                    {service.icon}
                    <span>{service.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-1" onClick={() => setTopbarMenuOpen(false)} />
          </div>
        )}
      </header>

      <div className="flex flex-1 w-full">
        {/* Services Sidebar (sticky, shrinkable on mobile) */}
        <aside className={`hidden md:flex sticky top-0 z-40 h-screen bg-black border-r border-gray-800 flex-col transition-all duration-300 ${serviceBarShrink ? 'w-14 min-w-[3.5rem]' : 'w-64 min-w-[16rem]'} items-center md:items-stretch`}>
          <div className="flex items-center justify-between px-2 md:px-6 py-6 border-b border-gray-800 w-full">
            <span className={`text-2xl font-bold text-white tracking-wide transition-all duration-300 ${serviceBarShrink ? 'text-base' : ''}`}>Services</span>
            <button
              className="text-gray-400 hover:text-white md:hidden"
              onClick={() => setServiceBarShrink((s) => !s)}
              aria-label={serviceBarShrink ? "Expand sidebar" : "Shrink sidebar"}
            >
              {serviceBarShrink ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
            </button>
          </div>
          <nav className="flex-1 flex flex-col gap-2 px-1 md:px-4 py-6 items-center md:items-stretch">
            {sections.map((section) => (
              <button
                key={section.key}
                className={`flex flex-col items-center md:flex-row md:items-center w-full px-1 md:px-2 py-2 md:py-3 rounded-lg font-semibold text-base transition-all duration-200 ${activeSection === section.key ? 'bg-violet-700/80 text-white shadow-lg' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
                onClick={() => { setActiveSection(section.key as SectionKey); }}
              >
                <span className={`mb-0.5 md:mb-0 md:mr-3 flex items-center justify-center ${serviceBarShrink ? 'w-5 h-5' : 'w-5 h-5'}`}>{React.cloneElement(section.icon, { className: 'w-5 h-5' })}</span>
                {/* Make text even smaller for mobile sidebar */}
                <span className={`text-[8px] md:text-base ${serviceBarShrink ? 'block md:hidden' : ''}`}>{section.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Bottom Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex justify-around items-center bg-black/90 border-t border-gray-800 shadow-2xl rounded-t-2xl py-2 px-1" style={{backdropFilter: 'blur(8px)'}}>
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key as SectionKey)}
              className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg transition-all duration-200 ${
                activeSection === section.key
                  ? 'text-violet-300' : 'text-gray-400 hover:text-white'
              }`}
            >
              {React.cloneElement(section.icon, { className: 'w-6 h-6 mb-0.5' })}
              <span className="text-[10px] font-medium leading-tight">{section.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <main className="flex-1 ml-0 min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col justify-center items-center">
            {/* Dynamic, visually rich content for each section */}
            {activeSection === "overview" && (
              <div className="w-full max-w-3xl mx-auto p-8 text-center animate-fade-in-up">
                <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">Complete End-to-End Digital Solutions</h1>
                <p className="text-2xl text-gray-200 mb-8">Upvista is your partner for digital transformation. We blend vision, technology, and creativity to deliver experiences that inspire and empower.</p>
                <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
                  <div className="flex-1 bg-gradient-to-br from-violet-900/40 to-indigo-900/40 rounded-2xl p-6 shadow-lg border border-violet-700/30">
                    <h3 className="text-xl font-bold mb-2 text-violet-300">Agency</h3>
                    <p className="text-gray-300">Award-winning design, development, and strategy for brands that want to lead.</p>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-purple-900/40 to-violet-900/40 rounded-2xl p-6 shadow-lg border border-purple-700/30">
                    <h3 className="text-xl font-bold mb-2 text-purple-300">Community</h3>
                    <p className="text-gray-300">A thriving network of creators, learners, and leaders—growing together.</p>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-2xl p-6 shadow-lg border border-indigo-700/30">
                    <h3 className="text-xl font-bold mb-2 text-indigo-300">Trainings</h3>
                    <p className="text-gray-300">Cutting-edge programs in web, software, and AI—mentorship for the next generation.</p>
                  </div>
          </div>
              </div>
            )}
            {activeSection === "endtoend" && (
              <div className="w-full max-w-4xl mx-auto p-8 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">End-to-End Excellence</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-violet-700/30 shadow-lg">
                    <h3 className="text-xl font-bold mb-2 text-violet-300">Strategy & Consulting</h3>
                    <p className="text-gray-300">We start with your vision, goals, and market—crafting a roadmap for success.</p>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-purple-700/30 shadow-lg">
                    <h3 className="text-xl font-bold mb-2 text-purple-300">Design & Development</h3>
                    <p className="text-gray-300">Custom UI/UX, web, and mobile solutions—built for performance and beauty.</p>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-indigo-700/30 shadow-lg">
                    <h3 className="text-xl font-bold mb-2 text-indigo-300">Deployment & Hosting</h3>
                    <p className="text-gray-300">Secure, scalable, and lightning-fast infrastructure for peace of mind.</p>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-emerald-700/30 shadow-lg">
                    <h3 className="text-xl font-bold mb-2 text-emerald-300">Analytics & Marketing</h3>
                    <p className="text-gray-300">Data-driven growth, engagement, and marketing automation for results.</p>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-cyan-700/30 shadow-lg">
                    <h3 className="text-xl font-bold mb-2 text-cyan-300">Security & Compliance</h3>
                    <p className="text-gray-300">Peace of mind with built-in security, compliance, and regular audits.</p>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-pink-700/30 shadow-lg">
                    <h3 className="text-xl font-bold mb-2 text-pink-300">Ongoing Support</h3>
                    <p className="text-gray-300">Dedicated support team for all your digital needs, 24/7.</p>
                  </div>
            </div>
              </div>
            )}
            {activeSection === "process" && (
              <div className="w-full max-w-3xl mx-auto p-8 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">Our Process</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-violet-700/60 flex items-center justify-center text-white font-bold text-lg">1</span>
                      <div>
                        <h4 className="font-bold text-lg">Discovery</h4>
                        <p className="text-gray-300">Deep dive into your needs, market, and vision.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-purple-700/60 flex items-center justify-center text-white font-bold text-lg">2</span>
                      <div>
                        <h4 className="font-bold text-lg">Blueprint</h4>
                        <p className="text-gray-300">Strategic planning, wireframes, and roadmaps.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-indigo-700/60 flex items-center justify-center text-white font-bold text-lg">3</span>
                      <div>
                        <h4 className="font-bold text-lg">Creation</h4>
                        <p className="text-gray-300">Design, development, and iteration with your feedback.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-emerald-700/60 flex items-center justify-center text-white font-bold text-lg">4</span>
                      <div>
                        <h4 className="font-bold text-lg">Launch</h4>
                        <p className="text-gray-300">Seamless deployment, training, and go-live support.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-cyan-700/60 flex items-center justify-center text-white font-bold text-lg">5</span>
                      <div>
                        <h4 className="font-bold text-lg">Growth</h4>
                        <p className="text-gray-300">Analytics, optimization, and continuous improvement.</p>
            </div>
              </div>
            </div>
          </div>
        </div>
            )}
            {activeSection === "onboarding" && (
              <div className="w-full max-w-2xl mx-auto p-8 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">Onboarding</h2>
                <div className="bg-gray-900/60 rounded-xl p-8 border border-violet-700/30 shadow-lg flex flex-col gap-6 items-center">
                  <p className="text-lg text-gray-200 mb-2">We make onboarding effortless and inspiring. You’ll have a dedicated success manager, clear milestones, and transparent communication from day one.</p>
                  <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
                    <li>Kickoff call & vision alignment</li>
                    <li>Access to project dashboard</li>
                    <li>Regular updates & feedback loops</li>
                    <li>Resource library & support</li>
                  </ul>
                  <div className="mt-6">
            <Link href="/contact">
                      <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2 shadow-lg mx-auto">
                        Meet Your Team
                        <Users className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
              </div>
            )}
            {activeSection === "references" && (
              <div className="w-full max-w-4xl mx-auto p-8 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">References</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-violet-700/30 shadow-lg flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-violet-300 mb-2">Case Study: Visionary Brand</h3>
                    <p className="text-gray-300">How we helped a startup become a market leader through digital transformation.</p>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-purple-700/30 shadow-lg flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-purple-300 mb-2">Testimonial: Community Growth</h3>
                    <p className="text-gray-300">“Upvista’s team is not just skilled—they’re invested in our success.”</p>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-indigo-700/30 shadow-lg flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-indigo-300 mb-2">Reference: End-to-End Delivery</h3>
                    <p className="text-gray-300">Seamless project delivery, from ideation to launch and beyond.</p>
                  </div>
                  <div className="bg-gray-900/60 rounded-xl p-6 border border-emerald-700/30 shadow-lg flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-emerald-300 mb-2">Portfolio: See More</h3>
                    <Link href="/pages/portfolio" className="text-violet-400 hover:underline">View Portfolio</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
