"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import CareersHeader from "../components/CareersHeader";
import CareersFooter from "../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../contexts/CareersLanguageContext";

export default function ApplyPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);
  const [clickedTooltip, setClickedTooltip] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Click outside to close tooltip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setClickedTooltip(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filters = [
    { id: "intern", label: t('careers.apply.filters.intern'), description: t('careers.apply.filters.intern.desc') },
    { id: "potential", label: t('careers.apply.filters.potential'), description: t('careers.apply.filters.potential.desc') },
    { id: "all", label: t('careers.apply.filters.all'), description: t('careers.apply.filters.all.desc') }
  ];

  const positions = [
    // Intern Positions
    {
      id: "web-dev-intern",
      category: "intern",
      department: t('careers.apply.departments.development'),
      title: t('careers.apply.positions.webDevIntern.title'),
      description: t('careers.apply.positions.webDevIntern.desc'),
      type: t('careers.apply.jobTypes.internship'),
      duration: "3-6 months",
      href: "/careers/jobs/web-development-intern"
    },
    {
      id: "graphics-intern",
      category: "intern",
      department: t('careers.apply.departments.uiux'),
      title: t('careers.apply.positions.graphicsIntern.title'),
      description: t('careers.apply.positions.graphicsIntern.desc'),
      type: t('careers.apply.jobTypes.internship'),
      duration: "3-6 months",
      href: "/careers/jobs/graphics-design-intern"
    },
    // Potential Recruitment Positions
    {
      id: "software-engineer",
      category: "potential",
      department: t('careers.apply.departments.development'),
      title: t('careers.apply.positions.softwareEngineer.title'),
      description: t('careers.apply.positions.softwareEngineer.desc'),
      type: t('careers.apply.jobTypes.fulltime'),
      experience: "2-5 years",
      href: "/careers/jobs/software-engineer"
    },
    {
      id: "qa-engineer",
      category: "potential",
      department: t('careers.apply.departments.qa'),
      title: t('careers.apply.positions.qaEngineer.title'),
      description: t('careers.apply.positions.qaEngineer.desc'),
      type: t('careers.apply.jobTypes.fulltime'),
      experience: "2-4 years",
      href: "/careers/jobs/qa-engineer"
    },
    {
      id: "fullstack-developer",
      category: "potential",
      department: t('careers.apply.departments.development'),
      title: t('careers.apply.positions.fullstackDeveloper.title'),
      description: t('careers.apply.positions.fullstackDeveloper.desc'),
      type: t('careers.apply.jobTypes.fulltime'),
      experience: "3-6 years",
      href: "/careers/jobs/full-stack-developer"
    },
    {
      id: "devops-engineer",
      category: "potential",
      department: t('careers.apply.departments.infrastructure'),
      title: t('careers.apply.positions.devopsEngineer.title'),
      description: t('careers.apply.positions.devopsEngineer.desc'),
      type: t('careers.apply.jobTypes.fulltime'),
      experience: "3-5 years",
      href: "/careers/jobs/devops-engineer"
    }
  ];

  const filteredPositions = positions.filter(position => 
    activeFilter === "all" || position.category === activeFilter
  );

  const getDepartmentColor = (department: string) => {
    // Use original English names for color mapping since translations might vary
    const isDevelopment = department === t('careers.apply.departments.development');
    const isUIUX = department === t('careers.apply.departments.uiux');
    const isQA = department === t('careers.apply.departments.qa');
    const isInfrastructure = department === t('careers.apply.departments.infrastructure');
    
    if (isDark) {
      if (isDevelopment) return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      if (isUIUX) return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      if (isQA) return "bg-green-500/20 text-green-300 border-green-500/30";
      if (isInfrastructure) return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    } else {
      if (isDevelopment) return "bg-blue-100 text-blue-700 border-blue-400";
      if (isUIUX) return "bg-purple-100 text-purple-700 border-purple-400";
      if (isQA) return "bg-green-100 text-green-700 border-green-400";
      if (isInfrastructure) return "bg-orange-100 text-orange-700 border-orange-400";
      return "bg-gray-100 text-gray-700 border-gray-400";
    }
  };

  return (
    <>
      <Head>
        <title>Apply for Jobs | Upvista Digital Careers - Submit Your Application</title>
        <meta name="description" content="Apply for jobs at Upvista Digital. Browse internship and full-time positions. Submit your application and start your career journey with a global digital innovation company." />
        <meta name="keywords" content="Apply for Jobs, Job Application, Career Application, Internship Application, Software Job Application, Tech Job Application, Upvista Digital Application" />
        <meta property="og:title" content="Apply for Jobs | Upvista Digital Careers" />
        <meta property="og:description" content="Apply for jobs at Upvista Digital. Browse internship and full-time positions and submit your application." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/careers/apply" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/careers/jobs/dev.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apply for Jobs | Upvista Digital Careers" />
        <meta name="twitter:description" content="Apply for jobs at Upvista Digital. Browse positions and submit your application." />
        <link rel="canonical" href="https://www.upvistadigital.com/careers/apply" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Apply for Jobs - Upvista Digital Careers',
          'description': 'Apply for jobs at Upvista Digital. Browse internship and full-time positions and submit your application.',
          'url': 'https://www.upvistadigital.com/careers/apply',
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
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Apply',
                'item': 'https://www.upvistadigital.com/careers/apply'
              }
            ]
          }
        }) }} />
      </Head>
      <CareersHeader />
      
      {/* Hero Section with Video Background */}
      <div className="relative h-0 md:h-screen w-full overflow-hidden">
        {/* Video Background - Hidden on mobile, visible on md+ screens */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <video
            key={isDark ? 'dark-video' : 'light-video'}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          >
            <source src={isDark ? "/assets/careers/company-video3.mp4" : "/assets/careers/upvista.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Main Content */}
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 text-gray-900'}`}>
        <div className="container mx-auto px-6 py-16">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 mt-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t('careers.apply.hero.title')}
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('careers.apply.hero.subtitle')}
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <div key={filter.id} className="relative group flex items-center gap-2" ref={filter.id === clickedTooltip ? tooltipRef : null}>
                <button
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                      : isDark 
                        ? "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                        : "bg-white border border-purple-200 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-gray-900"
                  }`}
                >
                  {filter.label}
                </button>
                
                <HelpCircle 
                  className={`w-5 h-5 cursor-pointer transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-indigo-600'}`}
                  onMouseEnter={() => setHoveredTooltip(filter.id)}
                  onMouseLeave={() => setHoveredTooltip(null)}
                  onClick={() => setClickedTooltip(clickedTooltip === filter.id ? null : filter.id)}
                />
                
                {/* Tooltip - Desktop hover / Mobile click */}
                {(hoveredTooltip === filter.id || clickedTooltip === filter.id) && (
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 p-4 backdrop-blur-md border rounded-lg shadow-xl z-50 ${
                    isDark 
                      ? 'bg-gray-900/95 border-purple-500/30' 
                      : 'bg-white/95 border-indigo-300'
                  }`}>
                    <p className={`text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{filter.description}</p>
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${isDark ? 'border-t-gray-900/95' : 'border-t-white/95'}`}></div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Positions Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPositions.map((position) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`group backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-900/50 border-gray-800/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10' 
                    : 'bg-white/70 border-purple-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-200/50'
                }`}
              >
                {/* Department Tag */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getDepartmentColor(position.department)} mb-4`}>
                  {position.department}
                </div>

                {/* Job Title */}
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  isDark 
                    ? 'text-white group-hover:text-purple-300' 
                    : 'text-gray-900 group-hover:text-indigo-600'
                }`}>
                  {position.title}
                </h3>

                {/* Description */}
                <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {position.description}
                </p>

                {/* Job Details */}
                <div className="space-y-2 mb-6">
                  <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="font-medium">{t('careers.apply.jobDetails.type')}</span>
                    <span className={isDark ? 'text-purple-300' : 'text-purple-600'}>{position.type}</span>
                  </div>
                  {position.duration && (
                    <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-medium">{t('careers.apply.jobDetails.duration')}</span>
                      <span className={isDark ? 'text-blue-300' : 'text-indigo-600'}>{position.duration}</span>
                    </div>
                  )}
                  {position.experience && (
                    <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-medium">{t('careers.apply.jobDetails.experience')}</span>
                      <span className={isDark ? 'text-green-300' : 'text-green-600'}>{position.experience}</span>
                    </div>
                  )}
                </div>

                {/* View Button */}
                <Link href={position.href}>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                    {t('careers.apply.cta.viewDetails')}
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No Positions Message */}
          {filteredPositions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('careers.apply.noPositions')}</p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <div className={`backdrop-blur-sm border rounded-2xl p-8 ${
              isDark 
                ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30' 
                : 'bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 border-indigo-300'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.apply.cta.title')}</h2>
              <p className={`mb-6 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('careers.apply.cta.desc')}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                {t('careers.apply.cta.contact')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <CareersFooter />
    </>
  );
}
