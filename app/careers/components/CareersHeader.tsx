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
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
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
                alt="Company Logo"
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
              Upvista Digital
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm backdrop-blur-md z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isDark 
            ? 'bg-black/95 border-l border-purple-500/20' 
            : 'bg-white/95 border-l border-blue-500/20'
        } ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={`flex items-center justify-between p-4 border-b ${
            isDark ? 'border-purple-500/20' : 'border-blue-500/20'
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
                <h1 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>Upvista Digital</h1>
                <p className={`text-xs font-medium ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>Careers</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {careersNavItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                target={item.key === 'main-site' ? '_blank' : undefined}
                rel={item.key === 'main-site' ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-4 rounded-lg transition-all duration-200 ${
                  isDark
                    ? `text-white/90 hover:text-white hover:bg-purple-600/20 ${pathname.startsWith(item.href) ? "bg-purple-600/20 text-white font-semibold" : ""}`
                    : `text-gray-700 hover:text-gray-900 hover:bg-blue-600/10 ${pathname.startsWith(item.href) ? "bg-blue-600/10 text-gray-900 font-semibold" : ""}`
                }`}
              >
                <span className="flex items-center gap-2.5">
                  {item.label}
                  {item.key === 'main-site' && (
                    <svg 
                      className="w-4.5 h-4.5" 
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
                {item.key !== 'main-site' && (
                  <ArrowRight className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-blue-600'}`} />
                )}
              </Link>
            ))}
          </nav>

          {/* Application Button */}
          <div className={`p-4 border-t ${isDark ? 'border-purple-500/20' : 'border-blue-500/20'}`}>
            <Link
              href="/careers/apply"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full px-4 py-4 text-white font-semibold rounded-lg text-center transition-all duration-200 ${
                isDark
                  ? `bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 ${pathname.startsWith('/careers/apply') ? "ring-2 ring-purple-400" : ""}`
                  : `bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 ${pathname.startsWith('/careers/apply') ? "ring-2 ring-purple-400" : ""}`
              }`}
            >
              Job Openings & Applications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
