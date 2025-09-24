"use client";

import React, { useState, useEffect, useRef } from "react";
//import Logoimg from "../assets/u.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthModal from "./ui/AuthModal";
import { supabase } from "@/lib/supabaseClient";
import { ArrowRight } from "lucide-react";
import type { JSX } from "react";
import { Brain, Heart, FileText, Newspaper, PenTool, Calendar, Monitor, Book, Building, Camera, Home, BarChart3, Truck, Zap, ShoppingCart, Factory, Globe, Code, Palette, TrendingUp, Bot, Brush, Users, Wrench, Layout, Search, ImageIcon } from "lucide-react";

// 1. Add icons for each section

// Add secondary navbar dropdown data
const researchLinks = [
  { label: "AGI (Artificial General Intelligence)", href: "/Researches/AGI" },
];
const industriesLinks = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Finance", href: "/industries/finance" },
  { label: "Education", href: "/industries/education" },
  { label: "Retail & E-commerce", href: "/industries/retail" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Logistics", href: "/industries/logistics" },
  { label: "Energy", href: "/industries/energy" },
  { label: "Government", href: "/industries/government" },
  { label: "Media & Entertainment", href: "/industries/media" },
  { label: "Real Estate", href: "/industries/real-estate" },
];
const insightsLinks = [
  { label: "Case Studies", href: "/insights/case-studies" },
  { label: "Newsroom", href: "/insights/newsroom" },
  { label: "Blogs", href: "/insights/blogs" },
  { label: "Events", href: "/insights/events" },
  { label: "Webinars", href: "/insights/webinars" },
  { label: "Whitepapers", href: "/insights/whitepapers" },
];

// 1. Add icon mapping for dropdown items
const researchIcons: { [key: string]: JSX.Element } = {
  "AGI (Artificial General Intelligence)": <Brain className="w-5 h-5 text-purple-400" />, 
  /*"Quantum Computing": <Cpu className="w-5 h-5 text-blue-400" />, 
  "Blockchain": <Link2 className="w-5 h-5 text-emerald-400" />, 
  "Cybersecurity": <Shield className="w-5 h-5 text-red-400" />, 
  "Cloud Computing": <Cloud className="w-5 h-5 text-cyan-400" />, 
  "AI Ethics": <Heart className="w-5 h-5 text-pink-400" />, 
  "Edge Computing": <Smartphone className="w-5 h-5 text-yellow-400" />, 
  "IoT": <Wifi className="w-5 h-5 text-green-400" />*/
};
const industriesIcons: { [key: string]: JSX.Element } = {
  "Healthcare": <Heart className="w-5 h-5 text-pink-400" />, 
  "Finance": <BarChart3 className="w-5 h-5 text-green-400" />, 
  "Education": <Book className="w-5 h-5 text-blue-400" />, 
  "Retail & E-commerce": <ShoppingCart className="w-5 h-5 text-yellow-400" />, 
  "Manufacturing": <Factory className="w-5 h-5 text-gray-400" />, 
  "Logistics": <Truck className="w-5 h-5 text-orange-400" />, 
  "Energy": <Zap className="w-5 h-5 text-emerald-400" />, 
  "Government": <Building className="w-5 h-5 text-indigo-400" />, 
  "Media & Entertainment": <Camera className="w-5 h-5 text-purple-400" />, 
  "Real Estate": <Home className="w-5 h-5 text-cyan-400" />
};
const insightsIcons: { [key: string]: JSX.Element } = {
  "Case Studies": <FileText className="w-5 h-5 text-violet-400" />, 
  "Newsroom": <Newspaper className="w-5 h-5 text-blue-400" />, 
  "Blogs": <PenTool className="w-5 h-5 text-pink-400" />, 
  "Events": <Calendar className="w-5 h-5 text-green-400" />, 
  "Webinars": <Monitor className="w-5 h-5 text-cyan-400" />, 
  "Whitepapers": <Book className="w-5 h-5 text-indigo-400" />
};

// Create services array from serviceSections
const services = [
  { label: "Web Development", href: "/pages/website" },
  { label: "Software Development", href: "/pages/software-development" },
  { label: "UI/UX Design", href: "/pages/uiuxPage" },
  { label: "Digital Marketing", href: "/pages/marketing" },
  { label: "AI Automation", href: "/pages/ai" },
  { label: "Branding", href: "/pages/branding" },
  { label: "Management", href: "/pages/management" },
  { label: "Maintenance", href: "/pages/Maintenance" },
  { label: "Landing Pages", href: "/pages/landingPges" },
  { label: "SEO & Content", href: "/pages/seo-content" },
  { label: "Graphics Design", href: "/pages/designing" }
];

// Add icon mappings for Services and Trainings dropdowns
const servicesIcons: { [key: string]: JSX.Element } = {
  "Web Development": <Globe className="w-5 h-5 text-blue-400" />,
  "Software Development": <Code className="w-5 h-5 text-green-400" />,
  "UI/UX Design": <Palette className="w-5 h-5 text-purple-400" />,
  "Digital Marketing": <TrendingUp className="w-5 h-5 text-orange-400" />,
  "AI Automation": <Bot className="w-5 h-5 text-cyan-400" />,
  "Branding": <Brush className="w-5 h-5 text-pink-400" />,
  "Management": <Users className="w-5 h-5 text-indigo-400" />,
  "Maintenance": <Wrench className="w-5 h-5 text-yellow-400" />,
  "Landing Pages": <Layout className="w-5 h-5 text-emerald-400" />,
  "SEO & Content": <Search className="w-5 h-5 text-red-400" />,
  "Graphics Design": <ImageIcon className="w-5 h-5 text-violet-400" />
};

const trainingIcons: { [key: string]: JSX.Element } = {
  "Web Development": <Globe className="w-5 h-5 text-blue-400" />,
  "Software Development": <Code className="w-5 h-5 text-green-400" />,
  "Artificial Intelligence": <Brain className="w-5 h-5 text-purple-400" />,
  // "Digital Marketing": <TrendingUp className="w-5 h-5 text-orange-400" />,
  // "Design & UI/UX": <Palette className="w-5 h-5 text-pink-400" />,
  // "Business Management": <Briefcase className="w-5 h-5 text-indigo-400" />,
  // "Cloud & DevOps": <Cloud className="w-5 h-5 text-cyan-400" />,
  // "Cybersecurity": <Shield className="w-5 h-5 text-red-400" />,
  // "Data Science & AI": <BarChart3 className="w-5 h-5 text-emerald-400" />,
  // "Industry Specific": <Building className="w-5 h-5 text-gray-400" />
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const pathname = usePathname();

  // 1. Update trainingCategories to remove icons
  const trainingCategories = [
    { name: 'Web Development', href: '/pages/trainings/web-development' },
    { name: 'Software Development', href: '/pages/trainings/software-development' },
    { name: 'Artificial Intelligence', href: '/pages/trainings/artificial-intelligence' },
    // { name: 'Digital Marketing', href: '/pages/trainings/digital-marketing' },
    // { name: 'Design & UI/UX', href: '/pages/trainings/design-uiux' },
    // { name: 'Business & Management', href: '/pages/trainings/business-management' },
    // { name: 'Cybersecurity', href: '/pages/trainings/cybersecurity' },
    // { name: 'Cloud & DevOps', href: '/pages/trainings/cloud-devops' },
    // { name: 'Industry-Specific', href: '/pages/trainings/industry-specific' },
  ];

  // New state for mobile secondary navbars
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTrainingsOpen, setMobileTrainingsOpen] = useState(false);

  // Add state and refs for dropdown open/close with delay
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [trainingsDropdownOpen, setTrainingsDropdownOpen] = useState(false);
  const servicesDropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const trainingsDropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Add state and refs for secondary navbar dropdowns
  const [researchDropdownOpen, setResearchDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [insightsDropdownOpen, setInsightsDropdownOpen] = useState(false);
  const researchDropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const industriesDropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const insightsDropdownTimeout = useRef<NodeJS.Timeout | null>(null);

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

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        scrolled
          ? "py-2 md:bg-black/30 md:backdrop-blur-md bg-transparent shadow-lg shadow-purple-500/10"
          : "py-4 md:bg-transparent md:backdrop-blur-sm bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group cursor-pointer" aria-label="Upvista Home" role="link">
          <div
            className={`relative transition-all duration-300 ${
              scrolled ? "w-10 h-10" : "w-12 h-12"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-black rounded-lg p-0.5 w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src="/u.png"
                alt="Company Logo"
                width={scrolled ? 36 : 40}
                height={scrolled ? 36 : 40}
                className="rounded-md transition-all duration-300"
              />
            </div>
          </div>
          <div className="ml-3">
            <h3 className="text-xl font-bold text-white">Upvista</h3>
            <span className="block text-xs text-purple-300/80 font-medium -mt-1 tracking-wider">
              Digital Solutions
            </span>
          </div>
        </Link>

        {/* Register Button */}
        <Link href="/pages/auth" className="hidden md:inline-block ml-6">
          <button className="px-6 py-2 bg-white text-indigo-900 font-medium rounded-lg hover:shadow-lg transition duration-300 flex items-center gap-2 group">
            Register
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-50 mobile-menu-button"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" role="navigation" aria-label="Main Navigation">
          <Link
            href="/"
            className={`text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group${pathname === '/' ? ' font-bold text-white' : ''}`}
          >
            <span>Home</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 origin-left${pathname === '/' ? ' scale-x-100' : ' scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link
            href="/About"
            className={`text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${pathname.startsWith('/About') ? "font-bold text-white" : ""}`}
          >
            <span>About</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 origin-left ${pathname.startsWith('/About') ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => {
              if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current);
              setServicesDropdownOpen(true);
            }}
            onMouseLeave={() => {
              servicesDropdownTimeout.current = setTimeout(() => setServicesDropdownOpen(false), 500);
            }}
          >
            <button className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group flex items-center">
              Services
              <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {servicesDropdownOpen && (
              <div className="fixed left-0 right-0 top-[calc(var(--header-height,56px)+20px)] w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-t border-purple-500/20 shadow-2xl ring-1 ring-black ring-opacity-5 z-50 animate-fade-in rounded-b-2xl"
                onMouseEnter={() => {
                  if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current);
                  setServicesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  servicesDropdownTimeout.current = setTimeout(() => setServicesDropdownOpen(false), 500);
                }}
              >
                <div className="max-w-6xl mx-auto py-8 px-8">
                  {/* Services Button */}
                  <div className="flex flex-col items-center mb-6">
                  <Link href="/Services">
                      <button className="px-8 py-3 bg-white text-indigo-900 font-semibold rounded-xl hover:shadow-xl transition duration-300 flex items-center gap-3 group text-lg shadow-lg cursor-pointer hover:bg-gray-50">
                      Services
                      <span className="inline-block">
                          <svg className="w-5 h-5 text-indigo-900 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
          </Link>
                </div>
                {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-purple-400/20 via-white/10 to-purple-400/20 mb-6"></div>
                  {/* Services Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map(service => (
                      <Link key={service.label} href={service.href} className="flex items-center gap-3 p-4 rounded-xl hover:bg-purple-900/30 transition-all duration-200 group">
                        {servicesIcons[service.label]}
                        <span className="text-white/90 font-medium text-base group-hover:text-purple-300">{service.label}</span>
                      </Link>
                    ))}
                      </div>
                </div>
              </div>
                      )}
                    </div>
          {/* Trainings Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => {
              if (trainingsDropdownTimeout.current) clearTimeout(trainingsDropdownTimeout.current);
              setTrainingsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              trainingsDropdownTimeout.current = setTimeout(() => setTrainingsDropdownOpen(false), 500);
            }}
          >
            <button className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group flex items-center">
              Trainings
              <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {trainingsDropdownOpen && (
              <div className="fixed left-0 right-0 top-[calc(var(--header-height,56px)+20px)] w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-t border-purple-500/20 shadow-2xl ring-1 ring-black ring-opacity-5 z-50 animate-fade-in rounded-b-2xl"
                onMouseEnter={() => {
                  if (trainingsDropdownTimeout.current) clearTimeout(trainingsDropdownTimeout.current);
                  setTrainingsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  trainingsDropdownTimeout.current = setTimeout(() => setTrainingsDropdownOpen(false), 500);
                }}
              >
                <div className="max-w-6xl mx-auto py-8 px-8">
                  {/* Trainings Button */}
                  <div className="flex flex-col items-center mb-6">
                    <Link href="/pages/trainings">
                      <button className="px-8 py-3 bg-white text-indigo-900 font-semibold rounded-xl hover:shadow-xl transition duration-300 flex items-center gap-3 group text-lg shadow-lg cursor-pointer hover:bg-gray-50">
                        Trainings
                        <span className="inline-block">
                          <svg className="w-5 h-5 text-indigo-900 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-purple-400/20 via-white/10 to-purple-400/20 mb-6"></div>
                  {/* Trainings Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {trainingCategories.map(category => (
                      <Link key={category.name} href={category.href} className="flex items-center gap-3 p-4 rounded-xl hover:bg-purple-900/30 transition-all duration-200 group">
                        {trainingIcons[category.name]}
                        <span className="text-white/90 font-medium text-base group-hover:text-purple-300">{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/pages/marketplace"
            className={`text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${pathname.startsWith('/pages/marketplace') ? "font-bold text-white" : ""}`}
          >
            <span>Marketplace</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 origin-left ${pathname.startsWith('/pages/marketplace') ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>

          {/* Community Link */}
          <Link
            href="/community"
            className={`text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${pathname.startsWith('/community') ? "font-bold text-white" : ""}`}
          >
            <span>Community</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 origin-left ${pathname.startsWith('/community') ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>
          {/* Partners Link */}
          <Link
            href="/pages/partners"
            className={`text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${pathname.startsWith('/pages/partners') ? "font-bold text-white" : ""}`}
          >
            <span>Partners</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 origin-left ${pathname.startsWith('/pages/partners') ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>

          {/* Contact Button */}
          <Link
            href="/contact"
            onClick={(e) => e.stopPropagation()}
            className={`ml-2 relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg group hover:from-purple-700 hover:to-indigo-700 ${pathname.startsWith('/contact') ? "font-bold ring-2 ring-purple-400" : ""}`}
          >
            <span className="relative flex items-center">
              Contact
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
      </div>

      {/* Secondary Navbar */}
      <div className="hidden md:flex w-full bg-transparent flex-row items-center justify-end py-1 sticky top-[var(--header-height,56px)] z-40 secondary-navbar">
        <div className="container mx-auto px-4 lg:px-8 flex flex-row gap-2 md:gap-4 items-center justify-end">
          {/* Research Dropdown - Full Width */}
          <div
            className="relative group"
            onMouseEnter={() => {
              if (researchDropdownTimeout.current) clearTimeout(researchDropdownTimeout.current);
              setResearchDropdownOpen(true);
            }}
            onMouseLeave={() => {
              researchDropdownTimeout.current = setTimeout(() => setResearchDropdownOpen(false), 500);
            }}
          >
            <button className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group flex items-center">
              Research
              <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {researchDropdownOpen && (
              <div className="fixed left-0 right-0 top-[calc(var(--header-height,56px)+60px)] w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-t border-purple-500/20 shadow-2xl ring-1 ring-black ring-opacity-5 z-50 animate-fade-in rounded-b-2xl"
                onMouseEnter={() => {
                  if (researchDropdownTimeout.current) clearTimeout(researchDropdownTimeout.current);
                  setResearchDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  researchDropdownTimeout.current = setTimeout(() => setResearchDropdownOpen(false), 500);
                }}
              >
                <div className="max-w-6xl mx-auto py-8 px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                  {researchLinks.map(link => (
                    <Link key={link.label} href={link.href} className="flex items-center gap-3 p-4 rounded-xl hover:bg-purple-900/30 transition-all duration-200 group">
                      {researchIcons[link.label]}
                      <span className="text-white/90 font-medium text-base group-hover:text-purple-300">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Industries Dropdown - Full Width */}
          <div
            className="relative group"
            onMouseEnter={() => {
              if (industriesDropdownTimeout.current) clearTimeout(industriesDropdownTimeout.current);
              setIndustriesDropdownOpen(true);
            }}
            onMouseLeave={() => {
              industriesDropdownTimeout.current = setTimeout(() => setIndustriesDropdownOpen(false), 500);
            }}
          >
            <button className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group flex items-center">
              Industries
              <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {industriesDropdownOpen && (
              <div className="fixed left-0 right-0 top-[calc(var(--header-height,56px)+60px)] w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-t border-purple-500/20 shadow-2xl ring-1 ring-black ring-opacity-5 z-50 animate-fade-in rounded-b-2xl"
                onMouseEnter={() => {
                  if (industriesDropdownTimeout.current) clearTimeout(industriesDropdownTimeout.current);
                  setIndustriesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  industriesDropdownTimeout.current = setTimeout(() => setIndustriesDropdownOpen(false), 500);
                }}
              >
                <div className="max-w-6xl mx-auto py-8 px-8 grid grid-cols-2 md:grid-cols-5 gap-6">
                  {industriesLinks.map(link => (
                    <Link key={link.label} href={link.href} className="flex items-center gap-3 p-4 rounded-xl hover:bg-purple-900/30 transition-all duration-200 group">
                      {industriesIcons[link.label]}
                      <span className="text-white/90 font-medium text-base group-hover:text-purple-300">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Insights Dropdown - Full Width */}
          <div
            className="relative group"
            onMouseEnter={() => {
              if (insightsDropdownTimeout.current) clearTimeout(insightsDropdownTimeout.current);
              setInsightsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              insightsDropdownTimeout.current = setTimeout(() => setInsightsDropdownOpen(false), 500);
            }}
          >
            <button className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group flex items-center">
              Insights
              <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {insightsDropdownOpen && (
              <div className="fixed left-0 right-0 top-[calc(var(--header-height,56px)+60px)] w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-t border-purple-500/20 shadow-2xl ring-1 ring-black ring-opacity-5 z-50 animate-fade-in rounded-b-2xl"
                onMouseEnter={() => {
                  if (insightsDropdownTimeout.current) clearTimeout(insightsDropdownTimeout.current);
                  setInsightsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  insightsDropdownTimeout.current = setTimeout(() => setInsightsDropdownOpen(false), 500);
                }}
              >
                <div className="max-w-4xl mx-auto py-8 px-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                  {insightsLinks.map(link => (
                    <Link key={link.label} href={link.href} className="flex items-center gap-3 p-4 rounded-xl hover:bg-purple-900/30 transition-all duration-200 group">
                      {insightsIcons[link.label]}
                      <span className="text-white/90 font-medium text-base group-hover:text-purple-300">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Explore Careers Button */}
          <Link href="/careers" className="ml-2">
            <button className="px-5 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300 border border-transparent">
              Explore Careers
            </button>
          </Link>
          {/* Let's Talk Business Button */}
          <Link href="/Consult" className="ml-2">
            <button className="px-5 py-2 bg-transparent text-white font-semibold rounded-lg border border-white shadow hover:bg-white hover:text-black transition-all duration-300">
              Let&apos;s Talk Business
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu - Redesigned */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 flex flex-col overflow-y-auto mobile-menu-container transition-all duration-500 ease-in-out animate-mobile-menu-fade-in">
          <div className="pt-6 px-6 flex items-center justify-between border-b border-white/10 pb-6">
            {/* Logo in Mobile Menu */}
            <div className="flex items-center">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-sm opacity-70"></div>
                <div className="relative bg-black rounded-lg p-0.5 w-full h-full flex items-center justify-center overflow-hidden">
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
                <h3 className="text-xl font-bold text-white">Upvista</h3>
                <span className="block text-xs text-purple-300/80 font-medium -mt-1 tracking-wider">
                  Digital Solutions
                </span>
              </div>
            </div>

            {/* Close Button */}
            {/* <button 
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(false);
              }}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> */}
          </div>

          <div className="flex-1 flex flex-col justify-between transition-all duration-500 ease-in-out">
            <div className="px-6 py-6 space-y-2">
              {/* Navigation Links */}
              <Link
                href="/"
                className="text-white/90 hover:text-white flex items-center py-3 text-lg font-medium border-b border-white/5 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-purple-400"
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
              <Link
                href="/About"
                className="text-white/90 hover:text-white flex items-center py-3 text-lg font-medium border-b border-white/5 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>About</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-purple-400"
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
              {/* Services Accordion */}
              <div className="mb-2">
                <button
                  className="w-full flex items-center justify-between text-white/90 font-semibold py-3 px-2 text-lg focus:outline-none border-b border-white/5"
                  onClick={() => setMobileServicesOpen(prev => !prev)}
              >
                <span>Services</span>
                  <svg className={`w-5 h-5 ml-2 text-purple-400 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                {mobileServicesOpen && (
                  <div className="pl-4 py-2 space-y-1">
                    {services.map(service => (
                      <Link key={service.label} href={service.href} className="block text-white/80 hover:text-purple-300 py-2 text-base rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                        {service.label}
                    </Link>
                  ))}
                </div>
              )}
              </div>
              <Link
                href="/pages/marketplace"
                className="text-white/90 hover:text-white flex items-center py-3 text-lg font-medium border-b border-white/5 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Marketplace</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-purple-400"
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

              {/* Community Link */}
              <Link
                href="/community"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(false);
                }}
                className="text-white/90 hover:text-white flex items-center py-3 text-lg font-medium border-b border-white/5 transition-all duration-200"
              >
                <span>Community</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-purple-400"
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
              {/* Partners Link */}
              <Link
                href="/pages/partners"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(false);
                }}
                className={`text-white/90 hover:text-white flex items-center py-3 text-lg font-medium border-b border-white/5 transition-all duration-200 ${pathname.startsWith('/pages/partners') ? "font-bold text-white" : ""}`}
              >
                <span>Partners</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-purple-400"
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

              {/* Trainings Accordion */}
              <div className="mb-2">
                <button
                  className="w-full flex items-center justify-between text-white/90 font-semibold py-3 px-2 text-lg focus:outline-none border-b border-white/5"
                  onClick={() => setMobileTrainingsOpen(prev => !prev)}
                >
                  <span>Trainings</span>
                  <svg className={`w-5 h-5 ml-2 text-purple-400 transition-transform duration-300 ${mobileTrainingsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileTrainingsOpen && (
                  <div className="pl-4 py-2 space-y-1">
                    {trainingCategories.map(training => (
                      <Link key={training.name} href={training.href} className="block text-white/80 hover:text-purple-300 py-2 text-base rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                        {training.name}
                      </Link>
                    ))}
                </div>
                )}
              </div>
                </div>

            {/* Secondary Navbar (Mobile) */}
            <div className="mt-6 border-t border-white/10 pt-4">
              {/* Research Accordion */}
              <div className="mb-2">
                <button
                  className="w-full flex items-center justify-between text-white/90 font-semibold py-3 px-2 text-lg focus:outline-none"
                  onClick={() => setMobileResearchOpen(prev => !prev)}
                >
                  <span>Research</span>
                  <svg className={`w-5 h-5 ml-2 text-purple-400 transition-transform duration-300 ${mobileResearchOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                {mobileResearchOpen && (
                  <div className="pl-4 py-2 space-y-1">
                    {researchLinks.map(link => (
                      <Link key={link.label} href={link.href} className="block text-white/80 hover:text-purple-300 py-2 text-base rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                    </div>
                )}
                    </div>
              {/* Industries Accordion */}
              <div className="mb-2">
                <button
                  className="w-full flex items-center justify-between text-white/90 font-semibold py-3 px-2 text-lg focus:outline-none"
                  onClick={() => setMobileIndustriesOpen(prev => !prev)}
                >
                  <span>Industries</span>
                  <svg className={`w-5 h-5 ml-2 text-purple-400 transition-transform duration-300 ${mobileIndustriesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileIndustriesOpen && (
                  <div className="pl-4 py-2 space-y-1">
                    {industriesLinks.map(link => (
                      <Link key={link.label} href={link.href} className="block text-white/80 hover:text-purple-300 py-2 text-base rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                        </Link>
                      ))}
                    </div>
                )}
              </div>
              {/* Insights Accordion */}
              <div className="mb-2">
                <button
                  className="w-full flex items-center justify-between text-white/90 font-semibold py-3 px-2 text-lg focus:outline-none"
                  onClick={() => setMobileInsightsOpen(prev => !prev)}
                >
                  <span>Insights</span>
                  <svg className={`w-5 h-5 ml-2 text-purple-400 transition-transform duration-300 ${mobileInsightsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileInsightsOpen && (
                  <div className="pl-4 py-2 space-y-1">
                    {insightsLinks.map(link => (
                      <Link key={link.label} href={link.href} className="block text-white/80 hover:text-purple-300 py-2 text-base rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Buttons */}
              <div className="flex flex-col gap-3 mt-4">
                <Link href="/careers" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-5 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300 border border-transparent">
                    Explore Careers
                  </button>
                </Link>
                <Link href="/Consult" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-5 py-3 bg-transparent text-white font-semibold rounded-lg border border-white shadow hover:bg-white hover:text-black transition-all duration-300">
                    Let&apos;s Talk Business
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile Contact Button at Bottom */}
            <div className="px-6 py-8 border-t border-white/10 mt-auto">
              <Link
                href="/contactPage"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg text-center font-medium flex items-center justify-center"
              >
                <span>Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
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
              </Link>
              <Link
                href="/pages/auth"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-4 bg-white text-indigo-900 py-2 rounded-lg text-center font-medium flex items-center justify-center shadow hover:shadow-lg transition duration-300 group"
              >
                <span>Register</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal open={authModalOpen} mode={authMode} onClose={() => setAuthModalOpen(false)} onModeChange={setAuthMode} />

      {/* Add global styles for animation */}
      <style jsx global>{`
        @keyframes mobileMenuFadeIn {
          0% {
            opacity: 0;
            transform: translateY(-32px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-mobile-menu-fade-in {
          animation: mobileMenuFadeIn 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .dropdown-link {
          display: block;
          padding: 0.65rem 1.1rem;
          border-radius: 0.75rem;
          color: #e0e7ff;
          font-weight: 500;
          font-size: 1.08rem;
          letter-spacing: 0.01em;
          transition: background 0.18s, color 0.18s, transform 0.18s, box-shadow 0.18s;
          position: relative;
          box-shadow: 0 0 0 transparent;
        }
        .dropdown-link:hover {
          background: linear-gradient(90deg, #a78bfa33 0%, #6366f133 100%);
          color: #fff;
          transform: translateX(6px) scale(1.045);
          box-shadow: 0 2px 8px 0 #7c3aed22;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;
