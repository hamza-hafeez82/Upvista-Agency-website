"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useTheme } from "@/contexts/ThemeContext";

export default function CareersHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const careersNavItems = [
    { label: "Back to Solution Site", href: "https://upvistadigital.com", key: "main-site" },
    { label: "Learn the Basics", href: "/careers/basics", key: "basics" },
    { label: "Learn About Business", href: "/careers/business", key: "business" },
    { label: "Learn About Jobs", href: "/careers/jobs", key: "jobs" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 w-full z-[999997] transition-all duration-300 ${
          scrolled
            ? isDark 
              ? "py-2 bg-black/30 backdrop-blur-md shadow-lg shadow-purple-500/10"
              : "py-2 bg-white/30 backdrop-blur-md shadow-lg shadow-blue-500/10"
            : "py-4 bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/careers" className="flex items-center group cursor-pointer" aria-label="Upvista Careers Home">
            <div
              className={`relative transition-all duration-300 ${
                scrolled ? "w-10 h-10" : "w-12 h-12"
              }`}
            >
              <div className={`absolute inset-0 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
              }`}></div>
              <div className={`relative rounded-lg p-0.5 w-full h-full flex items-center justify-center overflow-hidden ${
                isDark ? 'bg-black' : 'bg-white'
              }`}>
                <Image
                  src="/u.png"
                  alt="Construction Logo"
                  width={scrolled ? 36 : 40}
                  height={scrolled ? 36 : 40}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="ml-3">
              <h1 className={`font-bold transition-all duration-300 ${
                scrolled ? "text-lg" : "text-xl"
              } ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Upvista
              </h1>
              <p className={`text-xs font-medium ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>Careers</p>
            </div>
          </Link>

          {/* Theme and Language Toggles - Desktop Only */}
          <div className="hidden md:flex items-center ml-6">
            <div className="flex items-center">
              <ThemeToggle />
              <div className="-ml-px">
                <LanguageToggle />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {careersNavItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                target={item.key === 'main-site' ? '_blank' : undefined}
                rel={item.key === 'main-site' ? 'noopener noreferrer' : undefined}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                  isDark 
                    ? `text-white/90 hover:text-white ${pathname.startsWith(item.href) ? "font-bold text-white" : ""}`
                    : `text-gray-700 hover:text-gray-900 ${pathname.startsWith(item.href) ? "font-bold text-gray-900" : ""}`
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                  {item.key === 'main-site' && (
                    <svg 
                      className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  )}
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 origin-left ${
                  isDark ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                } ${pathname.startsWith(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </Link>
            ))}

            {/* Application Button */}
            <Link
              href="/careers/apply"
              onClick={(e) => e.stopPropagation()}
              className={`ml-2 relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium transition-all duration-300 rounded-lg group ${
                isDark
                  ? `text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 ${pathname.startsWith('/careers/apply') ? "font-bold ring-2 ring-purple-400" : ""}`
                  : `text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 ${pathname.startsWith('/careers/apply') ? "font-bold ring-2 ring-purple-400" : ""}`
              }`}
            >
              <span className="relative flex items-center">
                Job Openings & Applications
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-0 ml-0 group-hover:w-4 group-hover:ml-2 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </nav>

          {/* Mobile Toggle Buttons + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Compact Mobile Toggle Buttons */}
            <div className="flex items-center transform scale-75">
              <ThemeToggle />
              <div className="-ml-px">
                <LanguageToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors duration-200 ${
                isDark ? 'text-white hover:text-purple-400' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* BEAUTIFUL Mobile Menu with Smooth Transitions */}
      <>
        {/* Overlay with Fade Animation */}
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[999999] md:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Sidebar with Slide Animation */}
        <div 
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[9999999] md:hidden shadow-2xl transition-transform duration-500 ease-out ${
            isDark 
              ? 'bg-gradient-to-b from-black via-black to-gray-900 border-l border-purple-500/20' 
              : 'bg-gradient-to-b from-white via-gray-50 to-gray-100 border-l border-blue-500/20'
          } ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full">
            {/* Header with Close Button */}
            <div className={`flex items-center justify-between p-5 border-b transition-colors duration-300 ${
              isDark ? 'border-purple-500/20 bg-black/50' : 'border-blue-500/20 bg-white/50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <div className={`absolute inset-0 rounded-lg blur-sm opacity-70 ${
                    isDark ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                  }`}></div>
                  <div className={`relative rounded-lg p-0.5 w-full h-full flex items-center justify-center overflow-hidden ${
                    isDark ? 'bg-black' : 'bg-white'
                  }`}>
                    <Image
                      src="/u.png"
                      alt="Company Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h1 className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>Upvista</h1>
                  <p className={`text-xs font-medium ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>Careers Portal</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isDark 
                    ? 'text-white/70 hover:text-white hover:bg-purple-500/20' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-blue-500/10'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links with Enhanced Styling */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              {careersNavItems.map((item, index) => (
                <Link
                  key={item.key}
                  href={item.href}
                  target={item.key === 'main-site' ? '_blank' : undefined}
                  rel={item.key === 'main-site' ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] group ${
                    isDark
                      ? `text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 ${
                          pathname.startsWith(item.href) ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 font-semibold shadow-lg shadow-purple-500/20" : ""
                        }`
                      : `text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-indigo-600/10 ${
                          pathname.startsWith(item.href) ? "bg-gradient-to-r from-blue-600/20 to-indigo-600/20 font-semibold shadow-lg shadow-blue-500/20" : ""
                        }`
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: mobileMenuOpen ? 'slideInFromRight 0.4s ease-out forwards' : 'none'
                  }}
                >
                  <span className="flex items-center gap-3">
                    {item.key === 'main-site' ? (
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                    <span className="text-sm font-medium">{item.label}</span>
                  </span>
                  {item.key !== 'main-site' && (
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                      isDark ? 'text-purple-400' : 'text-blue-600'
                    }`} />
                  )}
                </Link>
              ))}
            </nav>

            {/* Enhanced Apply Button */}
            <div className={`p-4 border-t ${
              isDark ? 'border-purple-500/20 bg-black/30' : 'border-blue-500/20 bg-white/30'
            }`}>
              <Link
                href="/careers/apply"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full px-5 py-4 text-white font-semibold rounded-xl text-center transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg relative overflow-hidden group ${
                  isDark
                    ? `bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-purple-500/50 ${
                        pathname.startsWith('/careers/apply') ? "ring-2 ring-purple-400 ring-offset-2 ring-offset-black" : ""
                      }`
                    : `bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-purple-500/50 ${
                        pathname.startsWith('/careers/apply') ? "ring-2 ring-purple-400 ring-offset-2 ring-offset-white" : ""
                      }`
                }`}
              >
                <span className="relative flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Job Openings & Applications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
}