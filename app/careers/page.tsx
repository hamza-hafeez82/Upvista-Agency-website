"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Search, ExternalLink, Briefcase } from "lucide-react";
import CareersHeader from "./components/CareersHeader";
import CareersFooter from "./components/CareersFooter";
import { Vortex } from "@/components/ui/vortex";
import { searchJobs, getJobByTitle, getAllJobTitles, type JobMapping } from "./data/jobMappings";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedRecruitmentType, setSelectedRecruitmentType] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<JobMapping[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  
  const recruitmentTypes = [
    "Career Recruitment",
    "Potential Recruitment", 
    "New Graduate Recruitment"
  ];

  // Get job positions from the mapping
  const jobPositions = getAllJobTitles();

  // Handle search functionality
  const handleSearch = async () => {
    setIsSearching(true);
    
    // Simulate search delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const results = searchJobs(selectedJob, selectedRecruitmentType);
    setSearchResults(results);
    setShowResults(true);
    setIsSearching(false);
  };

  // Handle direct job selection
  const handleJobSelect = (jobTitle: string) => {
    const job = getJobByTitle(jobTitle);
    if (job) {
      window.location.href = job.href;
    }
  };

  // Handle recruitment type selection
  const handleRecruitmentTypeChange = (type: string) => {
    setSelectedRecruitmentType(type);
  };

  return (
    <>
      <CareersHeader />
      
      <div className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Animated Background */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative z-10">
        {/* Hero Section with Vortex Background */}
        <Vortex
          backgroundColor="transparent"
          particleCount={200}
          baseHue={260}
          className="w-full h-full"
          containerClassName="container mx-auto px-4 py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Building a Society
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Overflowing with Teamwork
              </span>
              </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Upvista Digital is<br />
              waiting for members to work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers/apply">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  Job Openings & Applications
                </button>
              </Link>
              <Link href="/careers/basics">
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                  Learn the Basics
                </button>
              </Link>
            </div>
          </motion.div>
        </Vortex>

            {/* Find Recruitment Information Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
                  Find Recruitment Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Recruitment Type Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Recruitment Type</h3>
                    <div className="space-y-3">
                      {recruitmentTypes.map((type) => (
                        <label key={Math.random()} className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="recruitmentType"
                            value={type}
                            checked={selectedRecruitmentType === type}
                            onChange={(e) => handleRecruitmentTypeChange(e.target.value)}
                            className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 focus:ring-purple-500 focus:ring-2"
                          />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                            {type}
                          </span>
                        </label>
                      ))}
              </div>
                </div>

                  {/* Job Category Dropdown */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Select the Job</h3>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 cursor-pointer text-left flex items-center justify-between hover:border-purple-400 transition-colors duration-200"
                      >
                        <span className={selectedJob ? "text-white" : "text-gray-400"}>
                          {selectedJob || "Select a position"}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-full left-0 right-0 mb-1 bg-black/98 backdrop-blur-lg border border-purple-500/50 rounded-xl shadow-2xl shadow-purple-500/30 z-[99999] max-h-64 overflow-hidden"
                          >
                            <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-700">
                              <div
                                onClick={() => {
                                  setSelectedJob("");
                                  setIsDropdownOpen(false);
                                }}
                                className="px-4 py-3 text-gray-400 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:text-white cursor-pointer transition-all duration-200 border-b border-gray-700/50"
                              >
                                Select a position
                </div>
                              {jobPositions
                                .filter(job => 
                                  job.toLowerCase().includes(selectedJob.toLowerCase()) ||
                                  selectedJob === ""
                                )
                                .map((job) => {
                                  const jobMapping = getJobByTitle(job);
                                  return (
                                    <div
                                      key={Math.random()}
                                      onClick={() => {
                                        setSelectedJob(job);
                                        setIsDropdownOpen(false);
                                      }}
                                      className="px-4 py-3 text-white hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 cursor-pointer transition-all duration-200 border-b border-gray-700/50 last:border-b-0 group"
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="group-hover:text-purple-300 transition-colors">
                                          {job}
                                        </span>
                                        {jobMapping && (
                                          <span className={`text-xs px-2 py-1 rounded-full ${
                                            jobMapping.type === 'full-time' ? 'bg-green-500/20 text-green-400' :
                                            jobMapping.type === 'intern' ? 'bg-blue-500/20 text-blue-400' :
                                            'bg-orange-500/20 text-orange-400'
                                          }`}>
                                            {jobMapping.type === 'full-time' ? 'Active' :
                                             jobMapping.type === 'intern' ? 'Intern' : 'Future'}
                                          </span>
                                        )}
                </div>
                                    </div>
                                  );
                                })}
              </div>
            </motion.div>
                        )}
                      </AnimatePresence>
                </div>
          </div>

                  {/* Search Button */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Find Opportunities</h3>
                    <button 
                      onClick={handleSearch}
                      disabled={isSearching}
                      className={`w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center justify-center space-x-2 ${
                        isSearching ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSearching ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Searching...</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-5 h-5" />
                          <span>Find Recruitment Information</span>
                        </>
                      )}
                </button>
                </div>
          </div>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    Can't find what you&apos;re looking for? 
                    <Link href="/careers/apply" className="text-purple-400 hover:text-purple-300 ml-1 underline">
                      View all open positions
                    </Link>
                  </p>
          </div>

                {/* Search Results */}
                <AnimatePresence>
                  {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="mt-8"
                    >
                      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Briefcase className="w-6 h-6 text-purple-400" />
                            Search Results
                          </h3>
                <button
                            onClick={() => setShowResults(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            ✕
                </button>
          </div>

                        {searchResults.length > 0 ? (
                          <div className="space-y-4">
                            <p className="text-gray-300 text-sm mb-4">
                              Found {searchResults.length} position{searchResults.length !== 1 ? 's' : ''} matching your criteria:
                            </p>
                            
                            <div className="grid gap-4">
                              {searchResults.map((job) => (
                <motion.div
                                  key={job.slug}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 }}
                                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-4 hover:bg-gray-700/70 transition-all duration-300 group"
                                >
                                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                                      <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                                          {job.title}
                                        </h4>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                          job.type === 'full-time' ? 'bg-green-500/20 text-green-400' :
                                          job.type === 'intern' ? 'bg-blue-500/20 text-blue-400' :
                                          'bg-orange-500/20 text-orange-400'
                                        }`}>
                                          {job.type === 'full-time' ? 'Full-time' :
                                           job.type === 'intern' ? 'Intern' : 'Potential'}
                        </span>
                      </div>
                                      <p className="text-gray-400 text-sm mb-2">
                                        {job.category} • {job.description}
                                      </p>
                    </div>
                                    <div className="flex items-center gap-2">
                    <button
                                        onClick={() => handleJobSelect(job.title)}
                                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 group-hover:scale-105"
                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View Details
                    </button>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">No positions found</h4>
                            <p className="text-gray-400 text-sm mb-4">
                              Try adjusting your search criteria or browse all available positions.
                            </p>
                            <Link href="/careers/apply">
                              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                                View All Positions
                      </button>
                    </Link>
                  </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Learn the Basics Section */}
                    <motion.div
                  initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
                {/* Left side - Basics Video */}
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    src="/assets/careers/top-page/basics.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
          </div>

                {/* Right side - Learn the Basics */}
                <div className="pl-0 lg:pl-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
                    <ArrowRight className="w-8 h-8 text-purple-400 mr-3" />
                    Learn the Basics
              </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/careers/basics" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Upvista Digital in 3 minutes</span>
                      </div>
                    </Link>
                    <Link href="/careers/basics" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Message from the CEO</span>
                      </div>
                    </Link>
                    <Link href="/careers/basics" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>New graduate recruitment starts here</span>
                      </div>
                    </Link>
                    <Link href="/careers/basics" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Corporate philosophy</span>
                      </div>
                    </Link>
                    <Link href="/careers/basics" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>What is important in recruitment</span>
                      </div>
                    </Link>
                        </div>
                        </div>
                      </div>
                    </motion.div>

            {/* Learn About Business Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
                {/* Left side - Learn About Business */}
                <div className="pr-0 lg:pr-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
                    <ArrowRight className="w-8 h-8 text-purple-400 mr-3" />
                    Learn About Business
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/careers/business" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Upvista Digital's Business Strategy</span>
                      </div>
                    </Link>
                    <Link href="/careers/business" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Upvista Digital Products</span>
                      </div>
                    </Link>
                    <Link href="/careers/business" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Upvista Digital's Global Strategy</span>
                      </div>
                    </Link>
                    <Link href="/careers/business" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Digital Solutions and Teamwork</span>
                      </div>
                    </Link>
                    </div>
                  </div>

                {/* Right side - Business Video */}
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    src="/assets/careers/top-page/learn-business.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
            </div>
          </div>
                    </motion.div>

            {/* Learn About Job Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
                {/* Left side - Job Video */}
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    src="/assets/careers/top-page/learn-job.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Right side - Learn About Job */}
                <div className="pl-0 lg:pl-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
                    <ArrowRight className="w-8 h-8 text-purple-400 mr-3" />
                    Learn About Job
              </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/careers/jobs" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Development and Operation</span>
                      </div>
                    </Link>
                    <Link href="/careers/jobs" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Marketing</span>
                      </div>
                    </Link>
                    <Link href="/careers/jobs" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Customer Service</span>
                      </div>
                    </Link>
                    <Link href="/careers/jobs" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Sales</span>
                      </div>
                    </Link>
                    <Link href="/careers/jobs" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>System Consulting</span>
                      </div>
                    </Link>
                    <Link href="/careers/jobs" className="group">
                      <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-3">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Corporate</span>
                      </div>
                    </Link>
                        </div>
                        </div>
                      </div>
            </motion.div>

            {/* Get to Know People Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
                {/* Left side - Get to Know People */}
                <div className="pr-0 lg:pr-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
                    <ArrowRight className="w-8 h-8 text-purple-400 mr-3" />
                    Get to Know People
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        Engineer/Designer
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our engineering and design teams are the creative minds behind innovative digital solutions. 
                        Engineers work on cutting-edge technologies, building scalable systems and applications that 
                        drive business success. Designers craft intuitive user experiences and visually stunning 
                        interfaces that users love.
                      </p>
                    </div>
                    
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        Corporate Positions
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our corporate team ensures smooth operations and strategic growth. From human resources 
                        managing talent acquisition to finance overseeing budgets and investments, these roles 
                        provide the foundation that enables our technical teams to focus on innovation and delivery.
                      </p>
                    </div>
                    
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        Business Jobs
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Business roles at Upvista Digital focus on growth, customer success, and market expansion. 
                        From marketing specialists driving brand awareness to sales representatives building client 
                        relationships, these positions are crucial for our company's continued success and expansion.
                      </p>
                    </div>
                  </div>
                  </div>

                {/* Right side - People Video */}
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    src="/assets/careers/top-page/get-to-know-people.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
            </div>
          </div>
            </motion.div>

            {/* Get to Know Workspace Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
                {/* Left side - Workspace Video */}
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    src="/assets/careers/top-page/workspace.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Right side - Get to Know Workspace */}
                <div className="pl-0 lg:pl-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
                    <ArrowRight className="w-8 h-8 text-purple-400 mr-3" />
                    Get to Know Workspace
              </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        Office & Remote Work
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        We offer flexible work arrangements with modern office spaces and comprehensive remote work support. 
                        Our offices are designed for collaboration and productivity, while our remote work policies ensure 
                        you can work effectively from anywhere.
                      </p>
                    </div>
                    
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        Communication & Internal Systems
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        We use cutting-edge communication tools and internal systems to ensure seamless collaboration. 
                        From project management platforms to instant messaging systems, we've built an infrastructure 
                        that keeps teams connected and productive.
                      </p>
                    </div>
                    
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        Learning & Career Development
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our comprehensive onboarding process and continuous learning systems help you grow professionally. 
                        We provide career support, skill development programs, and regular performance evaluations to 
                        ensure your success and advancement.
                      </p>
                    </div>
                    
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        Company Culture & Benefits
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        We foster a vibrant company culture with regular team events, competitive salary packages, 
                        and comprehensive benefits. Our evaluation system recognizes and rewards excellence while 
                        supporting continuous improvement and growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* About Upvista Digital Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-16"
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    What Upvista Digital Is
                  </h2>
                    </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Innovation Leader</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Upvista Digital is a pioneering force in digital transformation, constantly pushing boundaries 
                      and creating innovative solutions that shape the future of technology and business.
                    </p>
                    </div>
                  
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We're building solutions that make a global impact while respecting local cultures and values. 
                      Our work touches millions of lives worldwide through technology that matters.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Team Excellence</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our strength lies in our people - talented individuals who come together to create something 
                      greater than the sum of its parts through collaboration, innovation, and shared vision.
                    </p>
                  </div>
            </div>
          </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-center mb-16"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mx-4 md:mx-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 text-center">
                  Ready to Make Your Impact?
                </h3>
                <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg text-center leading-relaxed">
                  Join a team that&apos;s building the future of digital solutions.<br className="hidden sm:block" />
                  Explore our open positions and start your journey with Upvista Digital today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
                  <Link href="/careers/apply" className="w-full sm:w-auto">
                    <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base">
                      View Job Openings
                  </button>
                </Link>
                  <Link href="/careers/events" className="w-full sm:w-auto">
                    <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base">
                      Recruitment Events
                  </button>
                </Link>
              </div>
          </div>
            </motion.div>
          </div>
      </div>
      
      <CareersFooter />
    </>
  );
}
