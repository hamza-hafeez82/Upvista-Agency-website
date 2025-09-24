"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CareersHeader from "../components/CareersHeader";
import CareersFooter from "../components/CareersFooter";

export default function BasicsPage() {
  const basicSections = [
    {
      title: "About Upvista Digital",
      subtitle: "Upvista Digital in 3 minutes",
      description: "We will explain Upvista Digital's philosophy, business, work, and working style in an easy-to-understand manner using symbolic numbers and keywords.",
      link: "/careers/basics/about",
      image: "/assets/upvista.png"
    },
    {
      title: "Corporate Philosophy",
      subtitle: "Our Mindset and Culture",
      description: "We would like to introduce Upvista Digital's corporate philosophy, which consists of our purpose and five cultures.",
      link: "/careers/basics/philosophy",
      image: "/assets/careers/basic/coporate.jpeg"
    },
    {
      title: "Message from the CEO",
      subtitle: "Warm words from Hamza Hafeez",
      description: "We present an interview with CEO about the company's future strategies and thoughts on building the organization.",
      link: "/careers/basics/ceo-message",
      image: "/assets/careers/basic/hamza-pic.jpeg"
    },
    {
      title: "What is important in recruitment",
      subtitle: "Best practices for recruitment",
      description: "We will explain the cultural fit that we value in recruitment and the indicators we use to measure that match.",
      link: "/careers/basics/recruitment-importance",
      image: "/assets/careers/basic/job.jpeg"
    },
    {
      title: "Hiring people with disabilities",
      subtitle: "Hiring people with disabilities",
      description: "We will be sharing information about Upvista Digital's approach to hiring people with disabilities, working styles, and systems.",
      link: "/careers/basics/inclusive-hiring",
      image: "/assets/careers/basic/disabale.jpeg"
    },
    {
      title: "New graduate recruitment",
      subtitle: "Instructions for new graduates",
      description: "We provide comprehensive programs, mentorship, and opportunities specifically designed for recent graduates to launch their careers.",
      link: "/careers/basics/new-graduates",
      image: "/assets/careers/basic/new.jpeg"
    }
  ];

  return (
    <>
      <CareersHeader />
      
      <div className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Galaxy Star Field */}
          <div className="absolute inset-0">
            {/* Bright White Stars */}
            <div className="absolute top-[10%] left-[5%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-70"></div>
            <div className="absolute top-[20%] right-[15%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-[30%] left-[25%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-[40%] right-[5%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-50" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-[50%] left-[10%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-75" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[60%] right-[20%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-65" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute top-[70%] left-[30%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-90" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-[80%] right-[10%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-55" style={{ animationDelay: '3.5s' }}></div>
            <div className="absolute top-[90%] left-[15%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-85" style={{ animationDelay: '4s' }}></div>

            {/* Purple Stars */}
            <div className="absolute top-[15%] left-[40%] w-1 h-1 bg-purple-300 rounded-full blur-[0.5px] animate-pulse opacity-40" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute top-[25%] right-[30%] w-1 h-1 bg-purple-400 rounded-full blur-[0.5px] animate-pulse opacity-50" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute top-[35%] left-[50%] w-1 h-1 bg-purple-500 rounded-full blur-[0.5px] animate-pulse opacity-60" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute top-[45%] right-[40%] w-1 h-1 bg-purple-300 rounded-full blur-[0.5px] animate-pulse opacity-45" style={{ animationDelay: '1.7s' }}></div>
            <div className="absolute top-[55%] left-[60%] w-1 h-1 bg-purple-400 rounded-full blur-[0.5px] animate-pulse opacity-55" style={{ animationDelay: '2.2s' }}></div>
            <div className="absolute top-[65%] right-[50%] w-1 h-1 bg-purple-500 rounded-full blur-[0.5px] animate-pulse opacity-65" style={{ animationDelay: '2.7s' }}></div>
            <div className="absolute top-[75%] left-[70%] w-1 h-1 bg-purple-300 rounded-full blur-[0.5px] animate-pulse opacity-40" style={{ animationDelay: '3.2s' }}></div>
            <div className="absolute top-[85%] right-[60%] w-1 h-1 bg-purple-400 rounded-full blur-[0.5px] animate-pulse opacity-50" style={{ animationDelay: '3.7s' }}></div>

            {/* Pink Stars */}
            <div className="absolute top-[10%] right-[50%] w-1 h-1 bg-pink-300 rounded-full blur-[0.5px] animate-pulse opacity-30" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-[20%] left-[70%] w-1 h-1 bg-pink-400 rounded-full blur-[0.5px] animate-pulse opacity-40" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute top-[30%] right-[60%] w-1 h-1 bg-pink-500 rounded-full blur-[0.5px] animate-pulse opacity-50" style={{ animationDelay: '1.3s' }}></div>
            <div className="absolute top-[40%] left-[80%] w-1 h-1 bg-pink-300 rounded-full blur-[0.5px] animate-pulse opacity-35" style={{ animationDelay: '1.8s' }}></div>
            <div className="absolute top-[50%] right-[70%] w-1 h-1 bg-pink-400 rounded-full blur-[0.5px] animate-pulse opacity-45" style={{ animationDelay: '2.3s' }}></div>
            <div className="absolute top-[60%] left-[90%] w-1 h-1 bg-pink-500 rounded-full blur-[0.5px] animate-pulse opacity-55" style={{ animationDelay: '2.8s' }}></div>

            {/* Blue Stars */}
            <div className="absolute top-[5%] left-[80%] w-1 h-1 bg-blue-300 rounded-full blur-[0.5px] animate-pulse opacity-20" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute top-[15%] right-[80%] w-1 h-1 bg-blue-400 rounded-full blur-[0.5px] animate-pulse opacity-30" style={{ animationDelay: '0.9s' }}></div>
            <div className="absolute top-[25%] left-[90%] w-1 h-1 bg-blue-500 rounded-full blur-[0.5px] animate-pulse opacity-40" style={{ animationDelay: '1.4s' }}></div>

            {/* Yellow Stars */}
            <div className="absolute top-[70%] left-[5%] w-1 h-1 bg-yellow-300 rounded-full blur-[0.5px] animate-pulse opacity-25" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute top-[80%] right-[25%] w-1 h-1 bg-yellow-400 rounded-full blur-[0.5px] animate-pulse opacity-35" style={{ animationDelay: '1.1s' }}></div>
            <div className="absolute top-[90%] left-[35%] w-1 h-1 bg-yellow-500 rounded-full blur-[0.5px] animate-pulse opacity-45" style={{ animationDelay: '1.6s' }}></div>
          </div>
        </div>

        <main className="relative z-10 container mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn the Basics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes Upvista Digital a unique place to build your career.
            </p>
          </motion.div>

          {/* Basic Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {basicSections.map((section) => (
              <Link key={section.title} href={section.link} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer group-hover:border-purple-200 border-2 border-transparent"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {section.title}
                    </h3>
                    
                    <div className="flex items-center text-blue-600 group-hover:text-purple-600 transition-colors duration-300 mb-4">
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-2 transition-transform duration-300" />
                      <span className="font-medium">{section.subtitle}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {section.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center mt-20 mb-16"
          >
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8 mx-4 md:mx-auto max-w-4xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Upvista Digital is waiting for you
              </h3>
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Join Upvista Digital as a member and participate in projects that shape the future.<br className="hidden sm:block" />
                We're looking for talented individuals who share our vision and passion for innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Link href="/careers/apply" className="w-full sm:w-auto">
                  <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm sm:text-base rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                    Job Openings & Applications
                  </button>
                </Link>
                <Link href="/careers/jobs" className="w-full sm:w-auto">
                  <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                    Learn About Jobs
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </main>
      </div>

      <CareersFooter />
    </>
  );
}
