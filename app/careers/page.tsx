"use client";

import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Search, ExternalLink, Briefcase } from "lucide-react";
import CareersHeader from "./components/CareersHeader";
import CareersFooter from "./components/CareersFooter";
import { Vortex } from "@/components/ui/vortex";
import { searchJobs, getJobByTitle, getAllJobTitles, type JobMapping } from "./data/jobMappings";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "./contexts/CareersLanguageContext";

export default function CareersPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
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
    t('careers.page.recruitmentTypes.career'),
    t('careers.page.recruitmentTypes.potential'), 
    t('careers.page.recruitmentTypes.newGraduate')
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
      <Head>
        <title>Careers | Join Upvista Digital - Global Career Opportunities</title>
        <meta name="description" content="Join Upvista Digital and build your career with a global digital innovation company. Explore career opportunities, internships, and recruitment programs. Work with cutting-edge technology and join a diverse, inclusive team." />
        <meta name="keywords" content="Upvista Digital Careers, Software Jobs, Tech Careers, IT Jobs, Web Development Careers, Software Engineer Jobs, Global Tech Jobs, Career Opportunities, Tech Recruitment, Software Development Jobs, AI Jobs, Digital Innovation Careers" />
        <meta property="og:title" content="Careers | Join Upvista Digital - Global Career Opportunities" />
        <meta property="og:description" content="Join Upvista Digital and build your career with a global digital innovation company. Explore career opportunities, internships, and recruitment programs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/careers" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/careers/Upvista Digital.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | Join Upvista Digital" />
        <meta name="twitter:description" content="Join Upvista Digital and build your career with a global digital innovation company. Explore career opportunities worldwide." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/careers/Upvista Digital.png" />
        <link rel="canonical" href="https://www.upvistadigital.com/careers" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Careers at Upvista Digital',
          'description': 'Join Upvista Digital and build your career with a global digital innovation company. Explore career opportunities, internships, and recruitment programs.',
          'url': 'https://www.upvistadigital.com/careers',
          'mainEntity': {
            '@type': 'Organization',
            'name': 'Upvista Digital',
            'url': 'https://www.upvistadigital.com',
            'logo': 'https://www.upvistadigital.com/assets/icon.PNG',
            'sameAs': [
              'https://www.linkedin.com/groups/13302224',
              'https://x.com/Upvista_Digital/',
              'https://www.facebook.com/share/1ZTVBZV6rT/',
              'https://www.instagram.com/upvista_digital/'
            ],
            'hiringOrganization': {
              '@type': 'Organization',
              'name': 'Upvista Digital'
            }
          },
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.upvistadigital.com'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Careers',
                'item': 'https://www.upvistadigital.com/careers'
              }
            ]
          }
        }) }} />
      </Head>
      <CareersHeader />
      
      <div className={`min-h-screen pt-20 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
      }`}>
        {/* Background Elements */}
        <div className={`absolute inset-0 ${
          isDark ? 'bg-gradient-to-br from-black via-gray-900 to-black' : 'bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50'
        }`}>
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
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('careers.page.hero.title1')}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('careers.page.hero.title2')}
              </span>
              </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('careers.page.hero.subtitle1')}<br />
              {t('careers.page.hero.subtitle2')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers/apply">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  {t('careers.page.hero.applyButton')}
                </button>
              </Link>
              <Link href="/careers/basics">
                <button className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20' 
                    : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20 border border-gray-900/20'
                }`}>
                  {t('careers.page.hero.basicsButton')}
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
              <div className={`bg-gradient-to-r backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto ${
                isDark 
                  ? 'from-purple-600/10 to-indigo-600/10 border border-purple-500/20' 
                  : 'from-purple-600/5 to-indigo-600/5 border border-purple-500/10 bg-white/40'
              }`}>
                <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('careers.page.findRecruitment.title')}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Recruitment Type Selection */}
                  <div className="space-y-4">
                    <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.page.findRecruitment.recruitmentType')}</h3>
                    <div className="space-y-3">
                      {recruitmentTypes.map((type) => (
                        <label key={Math.random()} className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="recruitmentType"
                            value={type}
                            checked={selectedRecruitmentType === type}
                            onChange={(e) => handleRecruitmentTypeChange(e.target.value)}
                            className={`w-4 h-4 text-purple-600 border-gray-600 focus:ring-purple-500 focus:ring-2 ${
                              isDark ? 'bg-gray-800' : 'bg-gray-100'
                            }`}
                          />
                          <span className={`transition-colors duration-200 ${
                            isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                          }`}>
                            {type}
                          </span>
                        </label>
                      ))}
              </div>
                </div>

                  {/* Job Category Dropdown */}
                  <div className="space-y-4">
                    <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.page.findRecruitment.selectJob')}</h3>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 cursor-pointer text-left flex items-center justify-between hover:border-purple-400 transition-colors duration-200 ${
                          isDark 
                            ? 'bg-gray-800 border border-gray-600 text-white' 
                            : 'bg-white border border-gray-300 text-gray-900'
                        }`}
                      >
                        <span className={selectedJob ? (isDark ? "text-white" : "text-gray-900") : "text-gray-400"}>
                          {selectedJob || t('careers.page.findRecruitment.selectPosition')}
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
                            className={`absolute bottom-full left-0 right-0 mb-1 backdrop-blur-lg border rounded-xl shadow-2xl z-[9990] max-h-64 overflow-hidden ${
                              isDark 
                                ? 'bg-black/98 border-purple-500/50 shadow-purple-500/30' 
                                : 'bg-white/98 border-purple-500/30 shadow-purple-500/20'
                            }`}
                          >
                            <div className={`max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 ${
                              isDark ? 'scrollbar-track-gray-700' : 'scrollbar-track-gray-200'
                            }`}>
                              <div
                                onClick={() => {
                                  setSelectedJob("");
                                  setIsDropdownOpen(false);
                                }}
                                className={`px-4 py-3 text-gray-400 cursor-pointer transition-all duration-200 border-b ${
                                  isDark 
                                    ? 'hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:text-white border-gray-700/50' 
                                    : 'hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-gray-900 border-gray-200/50'
                                }`}
                              >
                                {t('careers.page.findRecruitment.selectPosition')}
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
                                      className={`px-4 py-3 cursor-pointer transition-all duration-200 border-b last:border-b-0 group ${
                                        isDark 
                                          ? 'text-white hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 border-gray-700/50' 
                                          : 'text-gray-900 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 border-gray-200/50'
                                      }`}
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className={`transition-colors ${
                                          isDark ? 'group-hover:text-purple-300' : 'group-hover:text-indigo-700'
                                        }`}>
                                          {job}
                                        </span>
                                        {jobMapping && (
                                          <span className={`text-xs px-2 py-1 rounded-full ${
                                            jobMapping.type === 'full-time' ? 'bg-green-500/20 text-green-400' :
                                            jobMapping.type === 'intern' ? 'bg-blue-500/20 text-blue-400' :
                                            'bg-orange-500/20 text-orange-400'
                                          }`}>
                                            {jobMapping.type === 'full-time' ? t('careers.page.jobStatus.active') :
                                             jobMapping.type === 'intern' ? t('careers.page.jobStatus.intern') : t('careers.page.jobStatus.future')}
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
                    <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.page.findRecruitment.findOpportunities')}</h3>
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
                          <span>{t('careers.page.findRecruitment.searching')}</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-5 h-5" />
                          <span>{t('careers.page.findRecruitment.searchButton')}</span>
                        </>
                      )}
                </button>
                </div>
          </div>

                <div className="text-center">
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('careers.page.findRecruitment.cantFind')}
                    <Link href="/careers/apply" className="text-purple-400 hover:text-purple-300 ml-1 underline">
                      {t('careers.page.findRecruitment.viewAll')}
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
                      <div className={`backdrop-blur-sm border rounded-2xl p-6 ${
                        isDark 
                          ? 'bg-gray-800/30 border-gray-700/50' 
                          : 'bg-white/40 border-gray-300/50'
                      }`}>
                        <div className="flex items-center justify-between mb-6">
                          <h3 className={`text-xl font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            <Briefcase className="w-6 h-6 text-purple-400" />
                            {t('careers.page.searchResults.title')}
                          </h3>
                <button
                            onClick={() => setShowResults(false)}
                            className={`transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                          >
                            ✕
                </button>
          </div>

                        {searchResults.length > 0 ? (
                          <div className="space-y-4">
                            <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {t('careers.page.searchResults.found')} {searchResults.length} {searchResults.length !== 1 ? t('careers.page.searchResults.positionsPlural') : t('careers.page.searchResults.positions')} {t('careers.page.searchResults.matchingCriteria')}
                            </p>
                            
                            <div className="grid gap-4">
                              {searchResults.map((job) => (
                <motion.div
                                  key={job.slug}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 }}
                                  className={`border rounded-lg p-4 transition-all duration-300 group ${
                                    isDark 
                                      ? 'bg-gray-700/50 border-gray-600/50 hover:bg-gray-700/70' 
                                      : 'bg-white/60 border-gray-300/50 hover:bg-white/80'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                                      <div className="flex items-center gap-3 mb-2">
                                        <h4 className={`text-lg font-semibold group-hover:text-purple-300 transition-colors ${
                                          isDark ? 'text-white' : 'text-gray-900'
                                        }`}>
                                          {job.title}
                                        </h4>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                          job.type === 'full-time' ? 'bg-green-500/20 text-green-400' :
                                          job.type === 'intern' ? 'bg-blue-500/20 text-blue-400' :
                                          'bg-orange-500/20 text-orange-400'
                                        }`}>
                                          {job.type === 'full-time' ? t('careers.page.jobStatus.fullTime') :
                                           job.type === 'intern' ? t('careers.page.jobStatus.intern') : t('careers.page.jobStatus.potential')}
                        </span>
                      </div>
                                      <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {job.category} • {job.description}
                                      </p>
                    </div>
                                    <div className="flex items-center gap-2">
                    <button
                                        onClick={() => handleJobSelect(job.title)}
                                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 group-hover:scale-105"
                    >
                                        <ExternalLink className="w-4 h-4" />
                                        {t('careers.page.searchResults.viewDetails')}
                    </button>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                              isDark ? 'bg-gray-700/50' : 'bg-gray-200/50'
                            }`}>
                              <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.page.searchResults.noPositions')}</h4>
                            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {t('careers.page.searchResults.tryAdjusting')}
                            </p>
                            <Link href="/careers/apply">
                              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                                {t('careers.page.searchResults.viewAllPositions')}
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
                  <h2 className={`text-3xl md:text-4xl font-bold mb-8 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <ArrowRight className="w-8 h-8 text-purple-400 mr-3" />
                    {t('careers.page.basics.title')}
              </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/careers/basics" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.basics.upvistaIn3')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/basics" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.basics.ceoMessage')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/basics" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.basics.newGraduate')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/basics" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.basics.philosophy')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/basics" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.basics.recruitment')}</span>
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
                  <h2 className={`text-3xl md:text-4xl font-bold mb-8 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <ArrowRight className="w-8 h-8 text-purple-400 mr-3" />
                    {t('careers.page.business.title')}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/careers/business" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.business.strategy')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/business" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.business.products')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/business" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.business.globalStrategy')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/business" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.business.teamwork')}</span>
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
                  <h2 className={`text-3xl md:text-4xl font-bold mb-8 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <ArrowRight className="w-8 h-8 text-purple-400 mr-3" />
                    {t('careers.page.jobs.title')}
              </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/careers/jobs" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.jobs.development')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/jobs" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.jobs.marketing')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/jobs" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.jobs.customerService')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/jobs" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.jobs.sales')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/jobs" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.jobs.consulting')}</span>
                      </div>
                    </Link>
                    <Link href="/careers/jobs" className="group">
                      <div className={`flex items-center transition-colors duration-300 mb-3 ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>{t('careers.page.jobs.corporate')}</span>
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
                  <h2 className={`text-3xl md:text-4xl font-bold mb-8 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <ArrowRight className="w-8 h-8 text-purple-400 mr-3" />
                    {t('careers.page.people.title')}
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className={`backdrop-blur-sm border rounded-xl p-6 ${
                      isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/40 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        {t('careers.page.people.engineer.title')}
                      </h3>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t('careers.page.people.engineer.description')}
                      </p>
                    </div>
                    
                    <div className={`backdrop-blur-sm border rounded-xl p-6 ${
                      isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/40 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        {t('careers.page.people.corporate.title')}
                      </h3>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t('careers.page.people.corporate.description')}
                      </p>
                    </div>
                    
                    <div className={`backdrop-blur-sm border rounded-xl p-6 ${
                      isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/40 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        {t('careers.page.people.business.title')}
                      </h3>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t('careers.page.people.business.description')}
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
                  <h2 className={`text-3xl md:text-4xl font-bold mb-8 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <ArrowRight className="w-8 h-8 text-purple-400 mr-3" />
                    {t('careers.page.workspace.title')}
              </h2>
                  
                  <div className="space-y-6">
                    <div className={`backdrop-blur-sm border rounded-xl p-6 ${
                      isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/40 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        {t('careers.page.workspace.office.title')}
                      </h3>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t('careers.page.workspace.office.description')}
                      </p>
                    </div>
                    
                    <div className={`backdrop-blur-sm border rounded-xl p-6 ${
                      isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/40 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        {t('careers.page.workspace.communication.title')}
                      </h3>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t('careers.page.workspace.communication.description')}
                      </p>
                    </div>
                    
                    <div className={`backdrop-blur-sm border rounded-xl p-6 ${
                      isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/40 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        {t('careers.page.workspace.learning.title')}
                      </h3>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t('careers.page.workspace.learning.description')}
                      </p>
                    </div>
                    
                    <div className={`backdrop-blur-sm border rounded-xl p-6 ${
                      isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/40 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2" />
                        {t('careers.page.workspace.culture.title')}
                      </h3>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t('careers.page.workspace.culture.description')}
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
                  <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('careers.page.about.title')}
                  </h2>
                    </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <div className={`backdrop-blur-sm border rounded-xl p-6 ${
                    isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/40 border-gray-300/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.page.about.innovation.title')}</h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.page.about.innovation.description')}
                    </p>
                    </div>
                  
                  <div className={`backdrop-blur-sm border rounded-xl p-6 ${
                    isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/40 border-gray-300/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.page.about.impact.title')}</h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.page.about.impact.description')}
                    </p>
                  </div>
                  
                  <div className={`backdrop-blur-sm border rounded-xl p-6 ${
                    isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white/40 border-gray-300/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.page.about.team.title')}</h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.page.about.team.description')}
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
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mx-4 md:mx-auto ${
                isDark 
                  ? 'from-purple-600/20 to-pink-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-pink-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {t('careers.page.cta.title')}
                </h3>
                <p className={`mb-6 md:mb-8 text-base md:text-lg text-center leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('careers.page.cta.description1')}<br className="hidden sm:block" />
                  {t('careers.page.cta.description2')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
                  <Link href="/careers/apply" className="w-full sm:w-auto">
                    <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base">
                      {t('careers.page.cta.viewJobsButton')}
                  </button>
                </Link>
                  <Link href="/careers/events" className="w-full sm:w-auto">
                    <button className={`w-full px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base ${
                      isDark 
                        ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20' 
                        : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20 border border-gray-900/20'
                    }`}>
                      {t('careers.page.cta.eventsButton')}
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
