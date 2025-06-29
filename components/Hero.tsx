import React from "react";
import Image from "next/image";
import imgHero from "@/assets/hero.jpeg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-black/80 to-purple-950 px-6 py-20 lg:py-38">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 h-80 w-80 rounded-full bg-violet-800/15 blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
          {/* Content section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-indigo-200 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2"></span>
              Trusted by many businesses worldwide
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-white">Your Vision, Our Code</span>
              <span className="bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 bg-clip-text text-transparent">
                Scale and Succeed!
              </span>
            </h1>

            <p className="text-lg md:text-xl text-indigo-100/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Upvista builds future-ready digital products — blending
              intelligent code, engaging UI/UX, and results-driven strategy.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/pages/services">
                <button className="px-6 py-3 bg-white text-indigo-900 font-medium rounded-lg hover:shadow-lg transition duration-300 flex items-center gap-2 group">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/pages/portfolio">
                <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-lg hover:bg-white/20 transition duration-300">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>

          {/* Visual section */}
          <div className="w-full lg:w-1/2 relative">
            {/* Main visual element */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circular gradient background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-md"></div>

              {/* 3D-like dashboard mockup */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-xl transform  transition-all duration-700 overflow-hidden">
                <Image
                  src={imgHero}
                  alt="Dashboard Mockup"
                  layout="fill"
                  className="rounded-2xl transform hover:scale-105 transition-transform duration-300 w-[20px]"
                  priority
                />
              </div>

              {/* Floating service icons removed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
