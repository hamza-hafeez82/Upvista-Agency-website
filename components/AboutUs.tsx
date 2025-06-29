"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Cloud, Stethoscope, GraduationCap, CreditCard, Brush } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="p-10 bg-gradient-to-b from-gray-950 to-black text-white min-h-screen">
      <Head>
        <title>About Upvista | Innovative Digital Solutions</title>
        <meta
          name="description"
          content="Learn about Upvista - your partner for innovative digital solutions that transform businesses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-violet-900/30 border border-violet-700/40">
              <span className="text-violet-300 text-sm font-medium">
                Transforming Digital Presence
              </span>
            </div>
            <h1 className="text-4xl p-4 md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
              Designing Experiences That Inspire Action
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mb-8">
              From idea to execution, We dont just build websites — we build
              journeys that connect with people, build trust, and convert
              visitors into loyal customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pages/services">
                <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2 shadow-lg shadow-violet-900/30">
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/pages/contactPage">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 border border-gray-700">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Card Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Partnering for Your Digital Growth
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We don&apos;t just deliver projects—we build long-term partnerships that empower your business to thrive in a digital-first world. Our approach is collaborative, transparent, and focused on your success.
            </p>
            <Link href="/pages/partners">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-lg">
                Explore Partnerships
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            {/* Animated, premium, interactive area */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Animated gradient orbs */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-400 via-pink-400 to-cyan-400 rounded-full blur-3xl opacity-40 animate-blob"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
              {/* Floating interactive icons */}
              <div className="absolute top-10 left-16 animate-float-slow">
                <Cloud className="w-10 h-10 text-cyan-300 drop-shadow-lg" />
              </div>
              <div className="absolute bottom-10 right-16 animate-float-fast">
                <CreditCard className="w-10 h-10 text-pink-300 drop-shadow-lg" />
              </div>
              <div className="absolute top-24 right-8 animate-float-medium">
                <Stethoscope className="w-10 h-10 text-purple-300 drop-shadow-lg" />
              </div>
              <div className="absolute bottom-16 left-8 animate-float-medium">
                <GraduationCap className="w-10 h-10 text-blue-300 drop-shadow-lg" />
              </div>
              {/* Central interactive card */}
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Brush className="w-12 h-12 text-purple-400 mb-4 animate-spin-slow" />
                <span className="text-xl font-semibold text-white mb-2">Premium Collaboration</span>
                <span className="text-gray-200 text-base">Let&apos;s co-create digital solutions that set new standards for excellence.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Modern Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900/50 rounded-3xl shadow-xl shadow-violet-600/60">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-3 py-1 rounded-full bg-violet-900/30 border border-violet-700/40">
            <span className="text-violet-300 text-sm font-medium">
              Expertise That Drives Results
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
            Real Expertise Across Digital Niches
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We deliver tailored solutions for a variety of industries and business models. Our team brings deep, hands-on experience in each niche—no fluff, just proven results.
          </p>
        </div>

        {/* Animated Niche Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* E-commerce */}
          <div className="relative bg-gradient-to-br from-violet-800/80 to-indigo-900/80 border border-violet-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float">
            <ShoppingCart className="w-14 h-14 mb-4 text-cyan-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">E-commerce</h3>
            <p className="text-cyan-100 text-center">Custom online stores, payment integration, product management, and conversion optimization for B2C & B2B brands.</p>
          </div>
          {/* SaaS */}
          <div className="relative bg-gradient-to-br from-indigo-800/80 to-violet-900/80 border border-indigo-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float-delay">
            <Cloud className="w-14 h-14 mb-4 text-fuchsia-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">SaaS Platforms</h3>
            <p className="text-fuchsia-100 text-center">Robust, scalable SaaS solutions with user management, billing, analytics, and cloud integration.</p>
          </div>
          {/* Healthcare */}
          <div className="relative bg-gradient-to-br from-emerald-800/80 to-cyan-900/80 border border-emerald-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float-slow">
            <Stethoscope className="w-14 h-14 mb-4 text-emerald-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">Healthcare</h3>
            <p className="text-emerald-100 text-center">HIPAA-compliant apps, patient portals, telemedicine, and secure health data management.</p>
          </div>
          {/* EdTech */}
          <div className="relative bg-gradient-to-br from-pink-800/80 to-violet-900/80 border border-pink-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float">
            <GraduationCap className="w-14 h-14 mb-4 text-pink-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">EdTech</h3>
            <p className="text-pink-100 text-center">Learning management systems, e-learning platforms, and interactive educational tools.</p>
          </div>
          {/* FinTech */}
          <div className="relative bg-gradient-to-br from-cyan-800/80 to-blue-900/80 border border-cyan-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float-delay">
            <CreditCard className="w-14 h-14 mb-4 text-cyan-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">FinTech</h3>
            <p className="text-cyan-100 text-center">Secure payment gateways, digital wallets, and financial analytics platforms.</p>
          </div>
          {/* Portfolio & Creative */}
          <div className="relative bg-gradient-to-br from-indigo-800/80 to-pink-900/80 border border-indigo-700/40 rounded-2xl p-8 shadow-xl flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-all duration-400 animate-float-slow">
            <Brush className="w-14 h-14 mb-4 text-indigo-300 group-hover:animate-bounce transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">Portfolio & Creative</h3>
            <p className="text-indigo-100 text-center">Personal portfolios, creative agency sites, and digital showcases for artists and professionals.</p>
          </div>
        </div>
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-float-delay { animation: float 3s 1s ease-in-out infinite; }
          .animate-float-slow { animation: float 4s 0.5s ease-in-out infinite; }
        `}</style>
      </section>
    </div>
  );
}
