"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MarketingServices from "@/components/MarketingServices";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Reviews";
import InfiniteSliderBasic from "@/components/InfinityCarousel";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";
import ValueProposition from "@/components/ValueProposition";

export default function Home() {
  return (
    <>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="infiniteSlider">
        <InfiniteSliderBasic />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <MarketingServices />
      </div>
      <div id="portfolio">
        {/* HeroParallax removed for a cleaner homepage */}
      </div>
      <div
        id="callToAction"
        className="h-screen w-full overflow-hidden items-center justify-center"
      >
        <Vortex
          particleCount={700}
          baseHue={220}
          backgroundColor="#000000"
          className="text-white flex items-center justify-center"
          containerClassName="h-full w-full"
          baseSpeed={0.1}
          rangeSpeed={1.5}
          baseRadius={1}
          rangeRadius={2}
        >
          <div className="relative w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center mt-20">
            {/* Modern gradient badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm border border-indigo-500/20">
              <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
              Web Design Experts
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
              Establish Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Digital Presence
              </span>{" "}
              with Confidence
            </h1>

            {/* Description with increased readability */}
            <p className="text-gray-300 text-center text-lg max-w-2xl mb-10 leading-relaxed">
              Upvista creates powerful digital experiences that don&apos;t just look
              great — they deliver measurable growth and lasting impact.
            </p>

            {/* Modern CTA buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/pages/services">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium overflow-hidden shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    Get Started Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
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
                </button>
              </Link>

              <Link href="/pages/portfolio">
                <button className="px-8 py-4 border border-indigo-500/30 rounded-full text-indigo-300 font-medium backdrop-blur-sm hover:bg-indigo-500/10 transition-all duration-300">
                  View Our Work
                </button>
              </Link>
            </div>

            {/* Stats section for social proof */}

            {/* Floating decorative elements */}
            <div className="absolute top-0 -left-20 w-40 h-40 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
            <div className="absolute -bottom-8 left-20 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
            <div className="absolute top-0 -right-20 w-40 h-40 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
          </div>
        </Vortex>
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <ValueProposition />
      <Footer />
    </>
  );
}
