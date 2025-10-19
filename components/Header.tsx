"use client";

import React, { useState, useEffect } from "react";
//import Logoimg from "../assets/u.png";
import Image from "next/image";
import Link from "next/link";
import AuthModal from "./ui/AuthModal";
import { supabase } from "@/lib/supabaseClient";
import ThemeToggle from "./ui/ThemeToggle";
import LanguageToggle from "./ui/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

// 1. Add icons for each section




const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Navigation dropdown data with translations
  const companyLinks = [
    //{ label: t('dropdown.company.about'), href: "/About" },
    { label: t('dropdown.company.profile'), href: "/company/profile" },
    { label: t('dropdown.company.sustainability'), href: "/company/sustainability" },
    { label: t('dropdown.company.investors'), href: "/company/investors" },
    { label: t('dropdown.company.partners'), href: "/company/partners" },
    { label: t('dropdown.company.leadership'), href: "/company/leadership" },
    { label: t('dropdown.company.contact'), href: "/contact" },
  ];

  const servicesLinks = [
    { label: t('dropdown.services.about'), href: "/Services" },
    { label: t('dropdown.services.software'), href: "/Services/software-development" },
    { label: t('dropdown.services.web'), href: "/Services/web-development" },
    { label: t('dropdown.services.ai'), href: "/Services/ai-automation" },
    { label: t('dropdown.services.cloud'), href: "/Services/cloud" },
    { label: t('dropdown.services.design'), href: "/Services/designing" },
    { label: t('dropdown.services.marketing'), href: "/Services/marketing" },
  ];

  const communityLinks = [
    { label: t('dropdown.community.about'), href: "/community/about" },
    { label: t('dropdown.community.join'), href: "/community/join" },
  ];

  const researchesLinks = [
    { label: t('dropdown.researches.about'), href: "/Researches" },
    { label: t('Global Cyber Defense fabric'), href: "/Researches/GCDF" },
    { label: t('dropdown.researches.agi'), href: "/Researches/AGI" },
    { label: t('dropdown.researches.cortex'), href: "/Researches/project-cortex" },
  ];

  const insightsLinks = [
    { label: t('dropdown.insights.caseStudies'), href: "/Insights/case-studies" },
    { label: t('dropdown.insights.news'), href: "/Insights/news" },
    { label: t('dropdown.insights.blogs'), href: "/Insights/blogs" },
    { label: t('dropdown.insights.whitepapers'), href: "/Insights/whitepapers" },
    { label: t('dropdown.insights.events'), href: "/Insights/events" },
  ];

  // Dropdown states for desktop navigation
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Function to handle dropdown toggle
  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  // Mobile menu states
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  const [mobileResearchesOpen, setMobileResearchesOpen] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const mobileMenu = document.querySelector(".mobile-menu-container");
      const mobileMenuButton = document.querySelector(".mobile-menu-button");

      if (
        mobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(e.target as Node) &&
        mobileMenuButton &&
        !mobileMenuButton.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Add/remove global class for mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      // No-op, just keeping the listener for possible future use
    });
    return () => { listener?.subscription.unsubscribe(); };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        closeAllDropdowns();
      }
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        scrolled
          ? isDark 
          ? "py-2 md:bg-black/30 md:backdrop-blur-md bg-transparent shadow-lg shadow-purple-500/10"
            : "py-2 md:bg-white/30 md:backdrop-blur-md bg-transparent shadow-lg shadow-blue-500/10"
          : "py-4 md:bg-transparent md:backdrop-blur-sm bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group cursor-pointer" aria-label="Upvista Home" role="link">
          <div
            className={`relative transition-all duration-300 ${
              scrolled ? "w-6 h-6 md:w-10 md:h-10" : "w-7 h-7 md:w-12 md:h-12"
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
                width={scrolled ? 20 : 24}
                height={scrolled ? 20 : 24}
                className="rounded-md transition-all duration-300 md:w-[36px] md:h-[36px]"
              />
            </div>
          </div>
          <div className="ml-2 md:ml-3">
            <h3 className={`text-base md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Upvista Digital</h3>
            <span className={`block text-xs font-medium -mt-0 tracking-wider ${
              isDark ? 'text-purple-300/80' : 'text-blue-600/80'
            }`}>
              Solutions
            </span>
          </div>
        </Link>

        {/* Toggle Buttons - Desktop Only */}
        <div className="hidden md:flex items-center ml-6">
          <div className="flex items-center">
            <ThemeToggle />
            <div className="-ml-px">
              <LanguageToggle />
            </div>
          </div>
        </div>

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
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
            className="flex flex-col gap-1.5 p-2 focus:outline-none z-50 mobile-menu-button"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isDark ? 'bg-white' : 'bg-gray-900'
            } ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isDark ? 'bg-white' : 'bg-gray-900'
            } ${mobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isDark ? 'bg-white' : 'bg-gray-900'
            } ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-0.5" role="navigation" aria-label="Main Navigation">
          {/* Company Dropdown */}
          <div className="relative dropdown-container">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('company');
              }}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative flex items-center rounded-lg ${
                isDark 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' + (activeDropdown === 'company' ? ' bg-white/10 text-white' : '')
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50' + (activeDropdown === 'company' ? ' bg-gray-100/50 text-gray-900' : '')
              }`}
            >
{t('nav.company')}
              <svg className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
            {activeDropdown === 'company' && (
              <div className={`absolute top-full left-0 mt-2 w-72 border rounded-xl shadow-2xl z-50 backdrop-blur-sm dropdown-menu ${
                isDark 
                  ? 'bg-white border-gray-200/50 bg-white/95' 
                  : 'bg-white border-gray-300/50 bg-white/98 shadow-xl'
              }`}>
                <div className="py-3">
                  {companyLinks.map((link) => (
                    <Link 
                      key={link.label} 
                      href={link.href} 
                      className={`block px-5 py-3 text-sm font-medium border-l-2 border-transparent transition-all duration-200 ${
                        isDark 
                          ? 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-gray-900 hover:border-blue-500'
                          : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-gray-900 hover:border-blue-500'
                      }`}
                      onClick={closeAllDropdowns}
                    >
                      {link.label}
                      </Link>
                    ))}
                </div>
              </div>
                      )}
                    </div>

          {/* Services Dropdown */}
          <div className="relative dropdown-container">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('services');
              }}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative flex items-center rounded-lg ${
                isDark 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' + (activeDropdown === 'services' ? ' bg-white/10 text-white' : '')
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50' + (activeDropdown === 'services' ? ' bg-gray-100/50 text-gray-900' : '')
              }`}
            >
{t('nav.services')}
              <svg className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                      </button>
            {activeDropdown === 'services' && (
              <div className={`absolute top-full left-0 mt-2 w-72 border rounded-xl shadow-2xl z-50 backdrop-blur-sm dropdown-menu ${
                isDark 
                  ? 'bg-white border-gray-200/50 bg-white/95' 
                  : 'bg-white border-gray-300/50 bg-white/98 shadow-xl'
              }`}>
                <div className="py-3">
                  {servicesLinks.map((link) => (
                    <Link 
                      key={link.label} 
                      href={link.href} 
                      className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-gray-900 transition-all duration-200 text-sm font-medium border-l-2 border-transparent hover:border-green-500"
                      onClick={closeAllDropdowns}
                    >
                      {link.label}
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Community Dropdown */}
          <div className="relative dropdown-container">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('community');
              }}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative flex items-center rounded-lg ${
                isDark 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' + (activeDropdown === 'community' ? ' bg-white/10 text-white' : '')
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50' + (activeDropdown === 'community' ? ' bg-gray-100/50 text-gray-900' : '')
              }`}
            >
{t('nav.community')}
              <svg className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${activeDropdown === 'community' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'community' && (
              <div className={`absolute top-full left-0 mt-2 w-72 border rounded-xl shadow-2xl z-50 backdrop-blur-sm dropdown-menu ${
                isDark 
                  ? 'bg-white border-gray-200/50 bg-white/95' 
                  : 'bg-white border-gray-300/50 bg-white/98 shadow-xl'
              }`}>
                <div className="py-3">
                  {communityLinks.map((link)  => (
                    <Link 
                      key={link.label} 
                      href={link.href} 
                      className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:text-gray-900 transition-all duration-200 text-sm font-medium border-l-2 border-transparent hover:border-purple-500"
                      onClick={closeAllDropdowns}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Researches Dropdown */}
          <div className="relative dropdown-container">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('researches');
              }}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative flex items-center rounded-lg ${
                isDark 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' + (activeDropdown === 'researches' ? ' bg-white/10 text-white' : '')
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50' + (activeDropdown === 'researches' ? ' bg-gray-100/50 text-gray-900' : '')
              }`}
            >
{t('nav.researches')}
              <svg className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${activeDropdown === 'researches' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'researches' && (
              <div className={`absolute top-full left-0 mt-2 w-72 border rounded-xl shadow-2xl z-50 backdrop-blur-sm dropdown-menu ${
                isDark 
                  ? 'bg-white border-gray-200/50 bg-white/95' 
                  : 'bg-white border-gray-300/50 bg-white/98 shadow-xl'
              }`}>
                <div className="py-3">
                  {researchesLinks.map((link) => (
                    <Link 
                      key={link.label} 
                      href={link.href} 
                      className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 text-sm font-medium border-l-2 border-transparent hover:border-orange-500"
                      onClick={closeAllDropdowns}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Insights Dropdown */}
          <div className="relative dropdown-container">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('insights');
              }}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative flex items-center rounded-lg ${
                isDark 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' + (activeDropdown === 'insights' ? ' bg-white/10 text-white' : '')
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50' + (activeDropdown === 'insights' ? ' bg-gray-100/50 text-gray-900' : '')
              }`}
            >
{t('nav.insights')}
              <svg className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${activeDropdown === 'insights' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'insights' && (
              <div className={`absolute top-full left-0 mt-2 w-72 border rounded-xl shadow-2xl z-50 backdrop-blur-sm dropdown-menu ${
                isDark 
                  ? 'bg-white border-gray-200/50 bg-white/95' 
                  : 'bg-white border-gray-300/50 bg-white/98 shadow-xl'
              }`}>
                <div className="py-3">
                  {insightsLinks.map((link) => (
                    <Link 
                      key={link.label} 
                      href={link.href} 
                      className="block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-gray-900 transition-all duration-200 text-sm font-medium border-l-2 border-transparent hover:border-indigo-500"
                      onClick={closeAllDropdowns}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Explore Careers Button - Purple to Pink Gradient with Wave Effect */}
          <Link href="/careers" target="_blank" rel="noopener noreferrer" className="ml-3">
            <button className={`px-6 py-2.5 font-semibold rounded-lg border-2 transition-colors duration-300 cursor-pointer relative overflow-hidden group ${
              isDark 
                ? 'text-white border-transparent hover:border-purple-500 hover:text-white'
                : 'text-white border-transparent hover:border-purple-600 hover:text-gray-900'
            }`}>
              {/* Gradient background that waves out on hover */}
              <span className={`absolute inset-0 bg-gradient-to-r transition-transform duration-700 ease-in-out transform translate-x-0 group-hover:translate-x-full ${
                isDark ? 'from-purple-600 to-pink-600' : 'from-purple-600 to-pink-600'
              }`}></span>
              <span className="relative z-10">{t('nav.careers')}</span>
            </button>
          </Link>
          {/* Let's Talk Business Button - Purple to Indigo Border with Wave Effect */}
          <Link href="/Consult" className="ml-2">
            <button className={`px-6 py-2.5 font-semibold rounded-lg border-2 transition-colors duration-300 cursor-pointer relative overflow-hidden group ${
              isDark 
                ? 'text-white border-purple-500 hover:border-transparent hover:text-white'
                : 'text-gray-900 border-purple-600 hover:border-transparent hover:text-white'
            }`}>
              {/* Gradient background that waves in on hover */}
              <span className={`absolute inset-0 bg-gradient-to-r transition-transform duration-700 ease-in-out transform -translate-x-full group-hover:translate-x-0 ${
                isDark ? 'from-purple-600 to-pink-600' : 'from-purple-600 to-pink-600'
              }`}></span>
              <span className="relative z-10">{t('nav.contact')}</span>
            </button>
          </Link>
        </nav>
      </div>


      {/* Mobile Menu - Redesigned */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 backdrop-blur-md transition-all duration-250 ease-out ${
              isDark ? 'bg-black/60' : 'bg-gray-900/60'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Slide-in Panel */}
          <div className={`relative w-full h-full flex flex-col shadow-2xl mobile-menu-slide-in ${
            isDark 
              ? 'bg-gradient-to-b from-gray-900 to-black' 
              : 'bg-gradient-to-b from-white to-gray-50'
          }`}>
          <div className="pt-6 px-6 flex items-center justify-between pb-6">
            {/* Logo in Mobile Menu */}
            <div className="flex items-center">
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
                    width={36}
                    height={36}
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="ml-3">
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Upvista Digital</h3>
                <span className={`block text-xs font-medium -mt-1 tracking-wider ${
                  isDark ? 'text-purple-300/80' : 'text-blue-600/80'
                }`}>
                  Solutions
                </span>
              </div>
            </div>

          </div>

            {/* Navigation Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
              {/* Navigation Links */}
              <Link
                href="/"
                className={`flex items-center py-2 text-base font-medium transition-all duration-200 ${
                  isDark 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-900/90 hover:text-gray-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{t('nav.home')}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ml-auto ${
                    isDark ? 'text-white/60' : 'text-gray-600/60'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              {/* Company Accordion */}
              <div className="mb-1">
                <button
                  className={`w-full flex items-center justify-between font-medium py-2 px-2 text-base focus:outline-none ${
                    isDark 
                      ? 'text-white/90' 
                      : 'text-gray-900/90'
                  }`}
                  onClick={() => setMobileCompanyOpen(prev => !prev)}
              >
                  <span>{t('nav.company')}</span>
                  <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${mobileCompanyOpen ? "rotate-180" : ""} ${
                    isDark ? 'text-white/60' : 'text-gray-600/60'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                {mobileCompanyOpen && (
                  <div className="pl-4 py-1 space-y-1">
                    {companyLinks.map(link => (
                      <Link key={link.label} href={link.href} className={`block py-1.5 text-sm transition-colors duration-200 ${
                        isDark 
                          ? 'text-white/80 hover:text-white' 
                          : 'text-gray-700/80 hover:text-gray-900'
                      }`} onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                    </Link>
                  ))}
                </div>
              )}
              </div>

              {/* Services Accordion */}
              <div className="mb-1">
                <button
                  className={`w-full flex items-center justify-between font-medium py-2 px-2 text-base focus:outline-none ${
                    isDark 
                      ? 'text-white/90' 
                      : 'text-gray-900/90'
                  }`}
                  onClick={() => setMobileServicesOpen(prev => !prev)}
                >
                  <span>{t('nav.services')}</span>
                  <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""} ${
                    isDark ? 'text-white/60' : 'text-gray-600/60'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 py-1 space-y-1">
                    {servicesLinks.map(link => (
                      <Link key={link.label} href={link.href} className={`block py-1.5 text-sm transition-colors duration-200 ${
                        isDark 
                          ? 'text-white/80 hover:text-white' 
                          : 'text-gray-700/80 hover:text-gray-900'
                      }`} onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                </div>
                )}
                </div>

              {/* Community Accordion */}
              <div className="mb-1">
                <button
                  className={`w-full flex items-center justify-between font-medium py-2 px-2 text-base focus:outline-none ${
                    isDark 
                      ? 'text-white/90' 
                      : 'text-gray-900/90'
                  }`}
                  onClick={() => setMobileCommunityOpen(prev => !prev)}
                >
                  <span>{t('nav.community')}</span>
                  <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${mobileCommunityOpen ? "rotate-180" : ""} ${
                    isDark ? 'text-white/60' : 'text-gray-600/60'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                {mobileCommunityOpen && (
                  <div className="pl-4 py-1 space-y-1">
                    {communityLinks.map(link => (
                      <Link key={link.label} href={link.href} className={`block py-1.5 text-sm transition-colors duration-200 ${
                        isDark 
                          ? 'text-white/80 hover:text-white' 
                          : 'text-gray-700/80 hover:text-gray-900'
                      }`} onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                    </div>
                )}
                    </div>

              {/* Researches Accordion */}
              <div className="mb-1">
                <button
                  className={`w-full flex items-center justify-between font-medium py-2 px-2 text-base focus:outline-none ${
                    isDark 
                      ? 'text-white/90' 
                      : 'text-gray-900/90'
                  }`}
                  onClick={() => setMobileResearchesOpen(prev => !prev)}
                >
                  <span>{t('nav.researches')}</span>
                  <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${mobileResearchesOpen ? "rotate-180" : ""} ${
                    isDark ? 'text-white/60' : 'text-gray-600/60'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileResearchesOpen && (
                  <div className="pl-4 py-1 space-y-1">
                    {researchesLinks.map(link => (
                      <Link key={link.label} href={link.href} className={`block py-1.5 text-sm transition-colors duration-200 ${
                        isDark 
                          ? 'text-white/80 hover:text-white' 
                          : 'text-gray-700/80 hover:text-gray-900'
                      }`} onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                        </Link>
                      ))}
                    </div>
                )}
              </div>

              {/* Insights Accordion */}
              <div className="mb-1">
                <button
                  className={`w-full flex items-center justify-between font-medium py-2 px-2 text-base focus:outline-none ${
                    isDark 
                      ? 'text-white/90' 
                      : 'text-gray-900/90'
                  }`}
                  onClick={() => setMobileInsightsOpen(prev => !prev)}
                >
                  <span>{t('nav.insights')}</span>
                  <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${mobileInsightsOpen ? "rotate-180" : ""} ${
                    isDark ? 'text-white/60' : 'text-gray-600/60'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileInsightsOpen && (
                  <div className="pl-4 py-1 space-y-1">
                    {insightsLinks.map(link => (
                      <Link key={link.label} href={link.href} className={`block py-1.5 text-sm transition-colors duration-200 ${
                        isDark 
                          ? 'text-white/80 hover:text-white' 
                          : 'text-gray-700/80 hover:text-gray-900'
                      }`} onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              </div>

            {/* Bottom Section */}
            <div className="p-6">
              {/* Main Buttons */}
              <div className="flex flex-col gap-3">
                <Link href="/careers" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`w-full px-4 py-2.5 text-sm font-medium rounded-lg border-2 transition-colors duration-300 cursor-pointer relative overflow-hidden group ${
                    isDark 
                      ? 'text-white border-transparent hover:border-purple-500 hover:text-white' 
                      : 'text-white border-transparent hover:border-purple-600 hover:text-gray-900'
                  }`}>
                    {/* Gradient background that waves out on hover */}
                    <span className={`absolute inset-0 bg-gradient-to-r transition-transform duration-700 ease-in-out transform translate-x-0 group-hover:translate-x-full ${
                      isDark ? 'from-purple-600 to-pink-600' : 'from-purple-600 to-pink-600'
                    }`}></span>
                    <span className="relative z-10">{t('nav.careers')}</span>
                  </button>
                </Link>
                <Link href="/Consult" onClick={() => setMobileMenuOpen(false)}>
                  <button className={`w-full px-4 py-2.5 text-sm font-medium rounded-lg border-2 transition-colors duration-300 cursor-pointer relative overflow-hidden group ${
                    isDark 
                      ? 'text-white border-purple-500 hover:border-transparent hover:text-white' 
                      : 'text-gray-900 border-purple-600 hover:border-transparent hover:text-white'
                  }`}>
                    {/* Gradient background that waves in on hover */}
                    <span className={`absolute inset-0 bg-gradient-to-r transition-transform duration-700 ease-in-out transform -translate-x-full group-hover:translate-x-0 ${
                      isDark ? 'from-purple-600 to-pink-600' : 'from-purple-600 to-pink-600'
                    }`}></span>
                    <span className="relative z-10">{t('nav.contact')}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal open={authModalOpen} mode={authMode} onClose={() => setAuthModalOpen(false)} onModeChange={setAuthMode} />

      {/* Add global styles for animation */}
      <style jsx global>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes slideOutToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .mobile-menu-slide-in {
          animation: slideInFromRight 0.25s ease-out;
        }
        
        .mobile-menu-slide-out {
          animation: slideOutToRight 0.2s ease-in;
        }
        
        @keyframes dropdownFadeIn {
          from { 
            opacity: 0; 
            transform: translateY(-8px) scale(0.95); 
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1); 
          }
        }
        
        .dropdown-container .dropdown-enter {
          animation: dropdownFadeIn 0.2s cubic-bezier(0.4,0,0.2,1);
        }
        
        .dropdown-container {
          position: relative;
        }
        
        .dropdown-container button {
          position: relative;
          overflow: hidden;
        }
        
        .dropdown-container button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }
        
        .dropdown-container button:hover::before {
          left: 100%;
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dropdown-container .dropdown-menu {
          animation: slideInFromTop 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Header;

