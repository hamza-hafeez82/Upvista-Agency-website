'use client';

import React from "react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated SVG Background */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-30 animate-pulse" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex: 0}}>
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <path d="M0,400 Q360,200 720,400 T1440,400 V800 H0 Z" fill="url(#grad1)"/>
        <circle cx="1200" cy="200" r="120" fill="#a78bfa44">
          <animate attributeName="cy" values="200;250;200" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="600" r="80" fill="#38bdf844">
          <animate attributeName="cy" values="600;650;600" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>
      {/* Floating Cubes Animation */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-1/4 top-1/3 animate-float-slow">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="18" fill="#a78bfa" fillOpacity="0.18"/><rect x="10" y="10" width="60" height="60" rx="12" fill="#fff" fillOpacity="0.08"/></svg>
        </div>
        <div className="absolute right-1/5 bottom-1/4 animate-float">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect width="60" height="60" rx="14" fill="#38bdf8" fillOpacity="0.16"/><rect x="8" y="8" width="44" height="44" rx="8" fill="#fff" fillOpacity="0.08"/></svg>
        </div>
        <div className="absolute left-1/2 top-1/5 animate-float-fast">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#f472b6" fillOpacity="0.13"/><rect x="6" y="6" width="28" height="28" rx="6" fill="#fff" fillOpacity="0.08"/></svg>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-glow animate-fade-in-up">Coming Soon</h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-8 animate-fade-in-up delay-100">Stay connected for something amazing.<br/>We&apos;re working hard to bring you this page!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <Link href="/" className="px-8 py-3 bg-gradient-to-r from-purple-400 to-indigo-600 text-white text-lg font-bold rounded-xl shadow-lg hover:from-purple-500 hover:to-indigo-700 transition-all duration-300 glow-btn">Back to Home</Link>
          <Link href="/pages/contactPage" className="px-8 py-3 bg-white/10 text-purple-100 font-bold rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-purple-400/30 backdrop-blur-md glow-btn">Contact Us</Link>
        </div>
      </div>
      {/* Animations */}
      <style jsx global>{`
        .glow-btn {
          box-shadow: 0 0 16px 0 #a78bfa55, 0 2px 8px 0 #0004;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #a78bfa88) drop-shadow(0 0 2px #fff2);
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-24px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        @keyframes float-fast {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-32px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-fast {
          animation: float-fast 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 