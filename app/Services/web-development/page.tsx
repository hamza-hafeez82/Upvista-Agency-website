'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

import { Code2, Globe2, Cpu, Rocket, ShieldCheck, Zap, ArrowRight, Users2 } from 'lucide-react';
export default function WebDevelopmentPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();


  const caseStudies = [
    {
      id: 1,
      image: '/assets/services/software/software-poster.jpeg',
      title: t('webdev.caseStudies.aon.title'),
      description: t('webdev.caseStudies.aon.description'),
      tag: t('webdev.caseStudies.aon.tag'),
      href: '/case-studies/aon-corporate'
    },
    {
      id: 2,
      image: '/assets/services/software/development.jpeg',
      title: t('webdev.caseStudies.vigours.title'),
      description: t('webdev.caseStudies.vigours.description'),
      tag: t('webdev.caseStudies.vigours.tag'),
      href: '/Insights/case-studies/vigours-ecommerce'
    },
    {
      id: 3,
      image: '/assets/services/software/system.jpeg',
      title: t('webdev.caseStudies.celtis.title'),
      description: t('webdev.caseStudies.celtis.description'),
      tag: t('webdev.caseStudies.celtis.tag'),
      href: '/Insights/case-studies/celtis-ngo-platform'
    }
  ];

  const techStackItems = [
    { name: 'React', image: '/assets/services/software/react.jpg', logo: '/assets/services/software/logos/react.jpg', description: t('webdev.tech.react') },
    { name: 'Next.js', image: '/assets/services/software/development.jpeg', logo: '/assets/services/software/logos/react.jpg', description: t('webdev.tech.nextjs') },
    { name: 'Vue.js', image: '/assets/services/software/uiux.jpeg', logo: '/assets/services/software/logos/react.jpg', description: t('webdev.tech.vuejs') },
    { name: 'Angular', image: '/assets/services/software/api.jpeg', logo: '/assets/services/software/logos/react.jpg', description: t('webdev.tech.angular') },
    { name: 'Node.js', image: '/assets/services/software/goals.jpeg', logo: '/assets/services/software/logos/golang.jpg', description: t('webdev.tech.nodejs') },
    { name: 'Python', image: '/assets/services/software/development.jpeg', logo: '/assets/services/software/logos/python.jpg', description: t('webdev.tech.python') },
    { name: 'PHP', image: '/assets/services/software/api2.jpeg', logo: '/assets/services/software/logos/react.jpg', description: t('webdev.tech.php') },
    { name: 'MySQL', image: '/assets/services/software/check.jpeg', logo: '/assets/services/software/logos/postgres.jpg', description: t('webdev.tech.mysql') },
    { name: 'MongoDB', image: '/assets/services/software/cloud.jpeg', logo: '/assets/services/software/logos/postgres.jpg', description: t('webdev.tech.mongodb') },
    { name: 'WordPress', image: '/assets/services/software/marketing.jpeg', logo: '/assets/services/software/logos/react.jpg', description: t('webdev.tech.wordpress') },
    { name: 'Webflow', image: '/assets/services/software/html.jpeg', logo: '/assets/services/software/logos/react.jpg', description: t('webdev.tech.webflow') },
    { name: 'Docker', image: '/assets/services/software/devops.jpeg', logo: '/assets/services/software/logos/docker.jpg', description: t('webdev.tech.docker') }
  ];

  return (
    <>
      <Head>
        <title>Web Development Services | Custom Website Development | Upvista Digital</title>
        <meta name="description" content="Professional web development services by Upvista Digital. Custom websites, web applications, e-commerce solutions using React, Next.js, Vue.js, Angular, Node.js, and modern technologies." />
        <meta name="keywords" content="Web Development Services, Custom Website Development, Web Application Development, React Development, Next.js Development, Vue.js Development, E-commerce Development, Responsive Web Design" />
        <meta property="og:title" content="Web Development Services | Custom Website Development | Upvista Digital" />
        <meta property="og:description" content="Professional web development services including custom websites, web applications, and e-commerce solutions using modern technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/Services/web-development" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Services | Upvista Digital" />
        <meta name="twitter:description" content="Professional web development services including custom websites and web applications." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/Services/web-development" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Web Development Services',
            'description': 'Professional web development services including custom websites, web applications, and e-commerce solutions using React, Next.js, Vue.js, Angular, Node.js, and modern technologies.',
            'url': 'https://www.upvistadigital.com/Services/web-development',
            'provider': {
              '@type': 'Organization',
              'name': 'Upvista Digital',
              'url': 'https://www.upvistadigital.com'
            },
            'serviceType': 'Web Development',
            'areaServed': 'Worldwide',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.upvistadigital.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.upvistadigital.com/Services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Web Development', 'item': 'https://www.upvistadigital.com/Services/web-development' }
              ]
            }
          })
        }} />
      </Head>
      <div className={`min-h-screen ${isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
        }`}>
        <Header />

        {/* Hero Section - The Artistic Premiere */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Artistic Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[100px] ${isDark ? 'bg-blue-600' : 'bg-blue-300'}`}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1.1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              className={`absolute top-1/2 -right-24 w-80 h-80 rounded-full blur-[80px] ${isDark ? 'bg-purple-600' : 'bg-purple-300'}`}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content - Animated Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-8 backdrop-blur-md border ${isDark
                    ? 'bg-white/5 border-white/10 text-blue-400'
                    : 'bg-blue-50/80 border-blue-100 text-blue-700 shadow-sm'
                    }`}
                >
                  <Zap className="w-4 h-4 mr-2 animate-pulse" />
                  {t('webdev.badge')}
                </motion.div>

                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight ${isDark
                  ? 'bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-blue-900 to-purple-800 bg-clip-text text-transparent'
                  }`}>
                  {t('webdev.title')}
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`text-xl md:text-2xl leading-relaxed mb-10 max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                >
                  {t('webdev.subtitle')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className={`px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-gray-900 text-white hover:bg-black'
                    }`}>
                    Start Your Journey
                  </button>
                  <button className={`px-8 py-4 rounded-2xl font-bold text-lg border-2 transition-all duration-300 hover:bg-white/5 ${isDark ? 'border-purple-500/30 text-purple-400' : 'border-gray-200 text-gray-700'
                    }`}>
                    View Artifacts
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Side - Artistic Image Display */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className={`relative z-10 w-full aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden border-8 ${isDark ? 'border-white/5 shadow-blue-500/10' : 'border-white shadow-2xl shadow-blue-200/50'
                  }`}>
                  <Image
                    src="/assets/services/software/25.jpeg"
                    alt="Web Development Services"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -top-10 -right-10 p-6 rounded-3xl backdrop-blur-xl border z-20 hidden md:block ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-100 shadow-xl'
                    }`}
                >
                  <Code2 className="w-10 h-10 text-blue-500" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className={`absolute -bottom-10 -left-10 p-6 rounded-3xl backdrop-blur-xl border z-20 hidden md:block ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-100 shadow-xl'
                    }`}
                >
                  <Globe2 className="w-10 h-10 text-purple-500" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Wave Divider */}
        <div className="relative w-full overflow-hidden leading-[0] transform rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-[60px] md:h-[100px] ${isDark ? 'fill-gray-900' : 'fill-blue-50'
            }`}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        {/* Project Types - The Bento Grid Experience */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-black' : 'bg-white'
          }`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('webdev.projectTypes.title')}
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                {t('webdev.projectTypes.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {/* Custom Web App - Large Bento Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className={`md:col-span-4 p-8 rounded-[32px] border relative overflow-hidden group ${isDark ? 'bg-white/[0.03] border-white/10' : 'bg-blue-50/50 border-blue-100'
                  }`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Code2 className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('webdev.projectTypes.custom.title')}
                  </h3>
                  <p className={`text-lg leading-relaxed max-w-md ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('webdev.projectTypes.custom.description')}
                  </p>
                </div>
                {/* Decorative SVG Pattern */}
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cpu className="w-40 h-40" />
                </div>
              </motion.div>

              {/* Migration - Tall Bento Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className={`md:col-span-2 p-8 rounded-[32px] border relative overflow-hidden group ${isDark ? 'bg-white/[0.03] border-white/10' : 'bg-purple-500/5 border-purple-100'
                  }`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                    <Rocket className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('webdev.projectTypes.migration.title')}
                  </h3>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('webdev.projectTypes.migration.description')}
                  </p>
                </div>
              </motion.div>

              {/* Fixes & Performance - Square Bento Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className={`md:col-span-3 p-8 rounded-[32px] border relative overflow-hidden group ${isDark ? 'bg-white/[0.03] border-white/10' : 'bg-indigo-50/50 border-indigo-100'
                  }`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-8 h-8 text-indigo-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('webdev.projectTypes.fixes.title')}
                  </h3>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('webdev.projectTypes.fixes.description')}
                  </p>
                </div>
              </motion.div>

              {/* New Features - Square Bento Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className={`md:col-span-3 p-8 rounded-[32px] border relative overflow-hidden group ${isDark ? 'bg-white/[0.03] border-white/10' : 'bg-pink-50/50 border-pink-100'
                  }`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-pink-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('webdev.projectTypes.features.title')}
                  </h3>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('webdev.projectTypes.features.description')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack - The Innovation Lab */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${isDark ? 'bg-[#020617]' : 'bg-blue-50/30'
          }`}>
          {/* Background Decorative Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className={`absolute top-0 left-1/4 w-64 h-64 blur-[120px] rounded-full ${isDark ? 'bg-blue-900/20' : 'bg-blue-200/40'}`} />
            <div className={`absolute bottom-0 right-1/4 w-64 h-64 blur-[120px] rounded-full ${isDark ? 'bg-purple-900/20' : 'bg-purple-200/40'}`} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('webdev.techStack.title')}
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                {t('webdev.techStack.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStackItems.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    boxShadow: isDark ? "0 20px 40px rgba(59, 130, 246, 0.2)" : "0 20px 40px rgba(59, 130, 246, 0.1)"
                  }}
                  className={`group p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center gap-4 ${isDark
                    ? 'bg-white/[0.03] border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08]'
                    : 'bg-white border-gray-100 hover:border-blue-200 shadow-sm'
                    }`}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-500/10 pointer-events-none" />

                  <div className="relative w-16 h-16 mb-2">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-transform"
                    />
                  </div>
                  <h3 className={`text-lg font-bold tracking-tight transition-colors ${isDark ? 'text-white' : 'text-gray-900'
                    } group-hover:text-blue-500`}>
                    {tech.name}
                  </h3>

                  {/* Micro-label on hover */}
                  <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest text-blue-500">
                    Reliable
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tech Categories - Bento Secondary Row */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-[32px] border ${isDark ? 'bg-white/[0.02] border-white/5' : 'bg-gray-50/50 border-gray-100'
                  }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <h4 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('webdev.techStack.frontend')}</h4>
                </div>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t('webdev.techStack.frontend.desc1')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-[32px] border ${isDark ? 'bg-white/[0.02] border-white/5' : 'bg-gray-50/50 border-gray-100'
                  }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h4 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('webdev.techStack.backend')}</h4>
                </div>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t('webdev.techStack.backend.desc1')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Liquid Divider */}
        <div className="relative w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-[60px] md:h-[100px] ${isDark ? 'fill-black' : 'fill-white'
            }`}>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45,0.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>

        {/* Case Studies - The Gallery of Success */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-black' : 'bg-white'
          }`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('webdev.caseStudies.title')}
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                {t('webdev.caseStudies.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {caseStudies.map((study, idx) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -15 }}
                  className={`group rounded-[40px] overflow-hidden border transition-all duration-500 ${isDark
                    ? 'bg-white/[0.03] border-white/10 hover:border-blue-500/30'
                    : 'bg-gray-50/50 border-gray-100 hover:border-blue-200'
                    }`}
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute top-6 left-6">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white shadow-lg'
                        }`}>
                        {study.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                      {study.title}
                    </h3>
                    <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      {t('webdev.caseStudies.description')}
                    </p>

                    <Link
                      href={study.href}
                      className={`inline-flex items-center font-bold text-lg group-hover:gap-4 transition-all ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                        }`}
                    >
                      {t('webdev.caseStudies.readMore')}
                      <ArrowRight className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process - The Journey of Creation */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'
          }`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('webdev.process.title')}
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                {t('webdev.process.subtitle')}
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical Line */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 hidden md:block ${isDark ? 'bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-purple-500/0' : 'bg-gradient-to-b from-blue-200/0 via-blue-200 to-purple-200/0'
                }`} />

              <div className="space-y-32">
                {[
                  { step: "01", title: t('webdev.processes.custom.roadmap1.title'), desc: t('webdev.processes.custom.roadmap1.description'), icon: Users2, color: 'blue' },
                  { step: "02", title: t('webdev.processes.custom.roadmap3.title'), desc: t('webdev.processes.custom.roadmap3.description'), icon: Globe2, color: 'purple' },
                  { step: "03", title: t('webdev.processes.custom.roadmap4.title'), desc: t('webdev.processes.custom.roadmap4.description'), icon: Code2, color: 'indigo' },
                  { step: "04", title: t('webdev.processes.custom.roadmap6.title'), desc: t('webdev.processes.custom.roadmap6.description'), icon: Rocket, color: 'pink' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 relative`}
                  >
                    {/* Step Bubble */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 z-10 flex items-center justify-center font-bold text-xl backdrop-blur-xl ${isDark ? 'bg-black border-blue-500/50 text-blue-400' : 'bg-white border-blue-200 text-blue-600 shadow-xl'
                      } hidden md:flex`}>
                      {item.step}
                    </div>

                    <div className="w-full md:w-1/2">
                      <div className={`p-10 rounded-[40px] border relative overflow-hidden group ${isDark ? 'bg-white/[0.03] border-white/10 hover:border-white/20' : 'bg-white border-gray-100 shadow-2xl shadow-gray-200/50'
                        }`}>
                        <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${item.color === 'blue' ? 'bg-blue-500/20 text-blue-500' :
                          item.color === 'purple' ? 'bg-purple-500/20 text-purple-500' :
                            item.color === 'indigo' ? 'bg-indigo-500/20 text-indigo-500' :
                              'bg-pink-500/20 text-pink-500'
                          }`}>
                          <item.icon className="w-8 h-8" />
                        </div>
                        <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Section - The Power CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative rounded-[50px] overflow-hidden p-12 md:p-20 text-center ${isDark ? 'bg-[#020617] border border-blue-500/30' : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-3xl'
                }`}
            >
              {/* Background Art */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.8)_0%,_transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_80%_70%,_rgba(139,92,246,0.8)_0%,_transparent_50%)]" />
              </div>

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={`text-4xl md:text-6xl font-extrabold mb-8 leading-tight ${isDark ? 'text-white' : 'text-white'}`}
                >
                  {t('webdev.consultation.title')}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-blue-100'}`}
                >
                  {t('webdev.consultation.content')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-6"
                >
                  <button className={`px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 ${isDark ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-white text-blue-600 hover:bg-blue-50'
                    }`}>
                    {t('webdev.consultation.button')}
                  </button>
                  <Link
                    href="/assets/sample-operation-manual.pdf"
                    target="_blank"
                    className={`px-12 py-5 rounded-2xl font-bold text-xl border-2 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-2 ${isDark ? 'border-white/20 text-white hover:bg-white/5' : 'border-white/30 text-white hover:bg-white/10'
                      }`}
                  >
                    {t('webdev.consultation.manualLink')}
                  </Link>
                </motion.div>

                {/* Micro-stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
                  {[
                    { label: "Uptime", val: "99.9%" },
                    { label: "Score", val: "100/100" },
                    { label: "Support", val: "24/7" },
                    { label: "Delivery", val: "2x Fast" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold mb-1">{stat.val}</div>
                      <div className="text-sm uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section - The Industry Cloud */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('webdev.mission.title')}
                </h2>
                <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t('webdev.mission.content')}
                </p>
              </div>
              <div className={`p-6 rounded-[32px] border ${isDark ? 'bg-white/5 border-white/10' : 'bg-blue-50 border-blue-100 text-blue-700'} font-bold text-lg`}>
                {t('webdev.mission.ending')}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: t('webdev.mission.industry1.name'), img: '/assets/services/software/security.jpeg' },
                { name: t('webdev.mission.industry2.name'), img: '/assets/services/software/marketing.jpeg' },
                { name: t('webdev.mission.industry3.name'), img: '/assets/services/software/cloud2.jpeg' },
                { name: t('webdev.mission.industry4.name'), img: '/assets/services/software/mobile.jpeg' },
                { name: t('webdev.mission.industry5.name'), img: '/assets/services/software/planning.jpeg' },
                { name: t('webdev.mission.industry6.name'), img: '/assets/services/software/testing.jpeg' },
              ].map((industry, id) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.02 }}
                  className="relative h-80 rounded-[40px] overflow-hidden group border border-transparent hover:border-blue-500/50 transition-all duration-500"
                >
                  <Image src={industry.img} alt={industry.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-2xl font-bold">{industry.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}