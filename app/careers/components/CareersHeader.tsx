"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function CareersHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const careersNavItems = [
    { label: "Learn the Basics", href: "/careers/basics", key: "basics" },
    { label: "Learn About Business", href: "/careers/business", key: "business" },
    { label: "Learn About Jobs", href: "/careers/jobs", key: "jobs" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-transparent"
          : "py-4 bg-transparent"
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
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-black rounded-lg p-0.5 w-full h-full flex items-center justify-center overflow-hidden">
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
            <h1 className={`font-bold text-white transition-all duration-300 ${
              scrolled ? "text-lg" : "text-xl"
            }`}>
              Upvista Digital
            </h1>
            <p className="text-purple-400 text-xs font-medium">Careers</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {careersNavItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                pathname.startsWith(item.href) ? "font-bold text-white" : ""
              }`}
            >
              <span>{item.label}</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 origin-left ${
                pathname.startsWith(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}></span>
            </Link>
          ))}

          {/* Application Button */}
          <Link
            href="/careers/apply"
            onClick={(e) => e.stopPropagation()}
            className={`ml-2 relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg group hover:from-purple-700 hover:to-indigo-700 ${
              pathname.startsWith('/careers/apply') ? "font-bold ring-2 ring-purple-400" : ""
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-purple-400 transition-colors duration-200"
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black/95 backdrop-blur-md border-l border-purple-500/20 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-sm opacity-70"></div>
                <div className="relative bg-black rounded-lg p-0.5 w-full h-full flex items-center justify-center overflow-hidden">
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
                <h1 className="font-bold text-white text-lg">Upvista Digital</h1>
                <p className="text-purple-400 text-xs font-medium">Careers</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-purple-400 transition-colors duration-200"
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
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-4 text-white/90 hover:text-white hover:bg-purple-600/20 rounded-lg transition-all duration-200 ${
                  pathname.startsWith(item.href) ? "bg-purple-600/20 text-white font-semibold" : ""
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-purple-400" />
              </Link>
            ))}
          </nav>

          {/* Application Button */}
          <div className="p-4 border-t border-purple-500/20">
            <Link
              href="/careers/apply"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full px-4 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg text-center transition-all duration-200 ${
                pathname.startsWith('/careers/apply') ? "ring-2 ring-purple-400" : ""
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
