'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Cpu, Layers, Zap, ArrowRight, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function SoftwareDevelopmentPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [expandedProcess, setExpandedProcess] = useState<string | null>('custom-software');
  const [expandedTechStack, setExpandedTechStack] = useState(false);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  const toggleProcess = (processType: string) => {
    setExpandedProcess(expandedProcess === processType ? null : processType);
  };

  const toggleTechStack = () => {
    setExpandedTechStack(!expandedTechStack);
  };

  const caseStudies = [
    {
      id: 1,
      image: '/assets/services/software/software-poster.jpeg',
      title: t('softdev.caseStudies.enterprise.title'),
      description: t('softdev.caseStudies.enterprise.description'),
      tag: t('softdev.caseStudies.enterprise.tag'),
      href: '/Insights/case-studies/vigours-organic-crm'
    },
    {
      id: 2,
      image: '/assets/services/ecommerce.jpeg',
      title: t('softdev.caseStudies.healthcare.title'),
      description: t('softdev.caseStudies.healthcare.description'),
      tag: t('softdev.caseStudies.healthcare.tag'),
      href: '/case-studies/retail-system'
    },
    {
      id: 3,
      image: '/assets/services/software/system.jpeg',
      title: t('softdev.caseStudies.lms.title'),
      description: t('softdev.caseStudies.lms.description'),
      tag: t('softdev.caseStudies.lms.tag'),
      href: '/case-studies/erp-system'
    }
  ];

  const techStackItems = [
    { name: 'React Native', image: '/assets/services/software/mobile.jpeg', logo: '/assets/services/software/logos/react.jpg', description: t('softdev.tech.reactNative') },
    { name: 'Flutter', image: '/assets/services/software/mobile-yellow.jpeg', logo: '/assets/services/software/logos/flutter.jpg', description: t('softdev.tech.flutter') },
    { name: 'Python', image: '/assets/services/software/development.jpeg', logo: '/assets/services/software/logos/python.jpg', description: t('softdev.tech.python') },
    { name: 'Java', image: '/assets/services/software/system.jpeg', logo: '/assets/services/software/logos/java.jpg', description: t('softdev.tech.java') },
    { name: 'C#', image: '/assets/services/software/api.jpeg', logo: '/assets/services/software/logos/c.jpg', description: t('softdev.tech.csharp') },
    { name: 'Go', image: '/assets/services/software/goals.jpeg', logo: '/assets/services/software/logos/golang.jpg', description: t('softdev.tech.go') },
    { name: 'Kubernetes', image: '/assets/services/software/devops.jpeg', logo: '/assets/services/software/logos/kubernetes.jpg', description: t('softdev.tech.kubernetes') },
    { name: 'AWS', image: '/assets/services/software/cloud.jpeg', logo: '/assets/services/software/logos/aws.jpg', description: t('softdev.tech.aws') },
    { name: 'Docker', image: '/assets/services/software/cloud2.jpeg', logo: '/assets/services/software/logos/docker.jpg', description: t('softdev.tech.docker') },
    { name: 'PostgreSQL', image: '/assets/services/software/check.jpeg', logo: '/assets/services/software/logos/postgres.jpg', description: t('softdev.tech.postgresql') },
    { name: 'Redis', image: '/assets/services/software/cloud3.jpeg', logo: '/assets/services/software/logos/redis.jpg', description: t('softdev.tech.redis') },
    { name: 'Elasticsearch', image: '/assets/services/software/cloud4.jpeg', logo: '/assets/services/software/logos/search.jpg', description: t('softdev.tech.elasticsearch') }
  ];

  const developmentProcesses = [
    {
      type: 'custom-software',
      title: t('softdev.processes.custom.title'),
      description: t('softdev.processes.custom.description'),
      platforms: ['React Native', 'Flutter', 'Python', 'Java', 'C#', 'Go'],
      services: [
        t('softdev.processes.custom.service1'),
        t('softdev.processes.custom.service2'),
        t('softdev.processes.custom.service3'),
        t('softdev.processes.custom.service4'),
        t('softdev.processes.custom.service5'),
        t('softdev.processes.custom.service6'),
        t('softdev.processes.custom.service7'),
        t('softdev.processes.custom.service8')
      ],
      roadmap: [
        {
          step: 1,
          title: t('softdev.processes.custom.roadmap1.title'),
          description: t('softdev.processes.custom.roadmap1.description'),
          details: t('softdev.processes.custom.roadmap1.details'),
          image: '/assets/services/process/consultation.jpeg'
        },
        {
          step: 2,
          title: t('softdev.processes.custom.roadmap2.title'),
          description: t('softdev.processes.custom.roadmap2.description'),
          details: t('softdev.processes.custom.roadmap2.details'),
          image: '/assets/services/software/planning.jpeg'
        },
        {
          step: 3,
          title: t('softdev.processes.custom.roadmap3.title'),
          description: t('softdev.processes.custom.roadmap3.description'),
          details: t('softdev.processes.custom.roadmap3.details'),
          image: '/assets/services/software/uiux.jpeg'
        },
        {
          step: 4,
          title: t('softdev.processes.custom.roadmap4.title'),
          description: t('softdev.processes.custom.roadmap4.description'),
          details: t('softdev.processes.custom.roadmap4.details'),
          image: '/assets/services/software/development.jpeg'
        },
        {
          step: 5,
          title: t('softdev.processes.custom.roadmap5.title'),
          description: t('softdev.processes.custom.roadmap5.description'),
          details: t('softdev.processes.custom.roadmap5.details'),
          image: '/assets/services/software/testing.jpeg'
        },
        {
          step: 6,
          title: t('softdev.processes.custom.roadmap6.title'),
          description: t('softdev.processes.custom.roadmap6.description'),
          details: t('softdev.processes.custom.roadmap6.details'),
          image: '/assets/services/software/launch2.jpeg'
        },
        {
          step: 7,
          title: t('softdev.processes.custom.roadmap7.title'),
          description: t('softdev.processes.custom.roadmap7.description'),
          details: t('softdev.processes.custom.roadmap7.details'),
          image: '/assets/services/software/maintenance.jpeg'
        }
      ]
    },
    {
      type: 'mobile-apps',
      title: t('softdev.processes.mobile.title'),
      description: t('softdev.processes.mobile.description'),
      platforms: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
      services: [
        t('softdev.processes.mobile.service1'),
        t('softdev.processes.mobile.service2'),
        t('softdev.processes.mobile.service3'),
        t('softdev.processes.mobile.service4'),
        t('softdev.processes.mobile.service5'),
        t('softdev.processes.mobile.service6'),
        t('softdev.processes.mobile.service7'),
        t('softdev.processes.mobile.service8')
      ],
      roadmap: [
        { step: 1, title: t('softdev.processes.mobile.roadmap1.title'), description: t('softdev.processes.mobile.roadmap1.description'), image: '/assets/services/process/consultation.jpeg' },
        { step: 2, title: t('softdev.processes.mobile.roadmap2.title'), description: t('softdev.processes.mobile.roadmap2.description'), image: '/assets/services/software/planning.jpeg' },
        { step: 3, title: t('softdev.processes.mobile.roadmap3.title'), description: t('softdev.processes.mobile.roadmap3.description'), image: '/assets/services/software/uiux.jpeg' },
        { step: 4, title: t('softdev.processes.mobile.roadmap4.title'), description: t('softdev.processes.mobile.roadmap4.description'), image: '/assets/services/software/mobile.jpeg' },
        { step: 5, title: t('softdev.processes.mobile.roadmap5.title'), description: t('softdev.processes.mobile.roadmap5.description'), image: '/assets/services/software/testing.jpeg' },
        { step: 6, title: t('softdev.processes.mobile.roadmap6.title'), description: t('softdev.processes.mobile.roadmap6.description'), image: '/assets/services/software/google-play.jpeg' },
        { step: 7, title: t('softdev.processes.mobile.roadmap7.title'), description: t('softdev.processes.mobile.roadmap7.description'), image: '/assets/services/software/maintenance.jpeg' }
      ]
    },
    {
      type: 'enterprise-solutions',
      title: t('softdev.processes.enterprise.title'),
      description: t('softdev.processes.enterprise.description'),
      platforms: ['Java', 'C#', 'Python', 'Microservices', 'Cloud Platforms'],
      services: [
        t('softdev.processes.enterprise.service1'),
        t('softdev.processes.enterprise.service2'),
        t('softdev.processes.enterprise.service3'),
        t('softdev.processes.enterprise.service4'),
        t('softdev.processes.enterprise.service5'),
        t('softdev.processes.enterprise.service6'),
        t('softdev.processes.enterprise.service7'),
        t('softdev.processes.enterprise.service8')
      ],
      roadmap: [
        { step: 1, title: t('softdev.processes.enterprise.roadmap1.title'), description: t('softdev.processes.enterprise.roadmap1.description'), image: '/assets/services/process/consultation.jpeg' },
        { step: 2, title: t('softdev.processes.enterprise.roadmap2.title'), description: t('softdev.processes.enterprise.roadmap2.description'), image: '/assets/services/software/planning.jpeg' },
        { step: 3, title: t('softdev.processes.enterprise.roadmap3.title'), description: t('softdev.processes.enterprise.roadmap3.description'), image: '/assets/services/software/uiux.jpeg' },
        { step: 4, title: t('softdev.processes.enterprise.roadmap4.title'), description: t('softdev.processes.enterprise.roadmap4.description'), image: '/assets/services/software/system.jpeg' },
        { step: 5, title: t('softdev.processes.enterprise.roadmap5.title'), description: t('softdev.processes.enterprise.roadmap5.description'), image: '/assets/services/software/security.jpeg' },
        { step: 6, title: t('softdev.processes.enterprise.roadmap6.title'), description: t('softdev.processes.enterprise.roadmap6.description'), image: '/assets/services/software/launch2.jpeg' },
        { step: 7, title: t('softdev.processes.enterprise.roadmap7.title'), description: t('softdev.processes.enterprise.roadmap7.description'), image: '/assets/services/software/maintenance.jpeg' }
      ]
    },
    {
      type: 'cloud-solutions',
      title: t('softdev.processes.cloud.title'),
      description: t('softdev.processes.cloud.description'),
      platforms: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      services: [
        t('softdev.processes.cloud.service1'),
        t('softdev.processes.cloud.service2'),
        t('softdev.processes.cloud.service3'),
        t('softdev.processes.cloud.service4'),
        t('softdev.processes.cloud.service5'),
        t('softdev.processes.cloud.service6'),
        t('softdev.processes.cloud.service7'),
        t('softdev.processes.cloud.service8')
      ],
      roadmap: [
        { step: 1, title: t('softdev.processes.cloud.roadmap1.title'), description: t('softdev.processes.cloud.roadmap1.description'), image: '/assets/services/process/consultation.jpeg' },
        { step: 2, title: t('softdev.processes.cloud.roadmap2.title'), description: t('softdev.processes.cloud.roadmap2.description'), image: '/assets/services/software/planning.jpeg' },
        { step: 3, title: t('softdev.processes.cloud.roadmap3.title'), description: t('softdev.processes.cloud.roadmap3.description'), image: '/assets/services/software/cloud.jpeg' },
        { step: 4, title: t('softdev.processes.cloud.roadmap4.title'), description: t('softdev.processes.cloud.roadmap4.description'), image: '/assets/services/software/devops.jpeg' },
        { step: 5, title: t('softdev.processes.cloud.roadmap5.title'), description: t('softdev.processes.cloud.roadmap5.description'), image: '/assets/services/software/cloud2.jpeg' },
        { step: 6, title: t('softdev.processes.cloud.roadmap6.title'), description: t('softdev.processes.cloud.roadmap6.description'), image: '/assets/services/software/launch2.jpeg' },
        { step: 7, title: t('softdev.processes.cloud.roadmap7.title'), description: t('softdev.processes.cloud.roadmap7.description'), image: '/assets/services/software/maintenance.jpeg' }
      ]
    },
    {
      type: 'integration-services',
      title: t('softdev.processes.integration.title'),
      description: t('softdev.processes.integration.description'),
      platforms: ['REST APIs', 'GraphQL', 'Message Queues', 'ETL Tools', 'Middleware'],
      services: [
        t('softdev.processes.integration.service1'),
        t('softdev.processes.integration.service2'),
        t('softdev.processes.integration.service3'),
        t('softdev.processes.integration.service4'),
        t('softdev.processes.integration.service5'),
        t('softdev.processes.integration.service6'),
        t('softdev.processes.integration.service7'),
        t('softdev.processes.integration.service8')
      ],
      roadmap: [
        { step: 1, title: t('softdev.processes.integration.roadmap1.title'), description: t('softdev.processes.integration.roadmap1.description'), image: '/assets/services/process/consultation.jpeg' },
        { step: 2, title: t('softdev.processes.integration.roadmap2.title'), description: t('softdev.processes.integration.roadmap2.description'), image: '/assets/services/software/planning.jpeg' },
        { step: 3, title: t('softdev.processes.integration.roadmap3.title'), description: t('softdev.processes.integration.roadmap3.description'), image: '/assets/services/software/api2.jpeg' },
        { step: 4, title: t('softdev.processes.integration.roadmap4.title'), description: t('softdev.processes.integration.roadmap4.description'), image: '/assets/services/software/api.jpeg' },
        { step: 5, title: t('softdev.processes.integration.roadmap5.title'), description: t('softdev.processes.integration.roadmap5.description'), image: '/assets/services/software/check.jpeg' },
        { step: 6, title: t('softdev.processes.integration.roadmap6.title'), description: t('softdev.processes.integration.roadmap6.description'), image: '/assets/services/software/launch2.jpeg' },
        { step: 7, title: t('softdev.processes.integration.roadmap7.title'), description: t('softdev.processes.integration.roadmap7.description'), image: '/assets/services/software/maintenance.jpeg' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Software Development Services | Custom Software Solutions | Upvista Digital</title>
        <meta name="description" content="Professional software development services by Upvista Digital. Custom software solutions, mobile apps, enterprise applications using React Native, Flutter, Python, Java, Go, and modern technologies." />
        <meta name="keywords" content="Software Development Services, Custom Software Development, Mobile App Development, Enterprise Software, React Native Development, Flutter Development, Python Development, Java Development" />
        <meta property="og:title" content="Software Development Services | Custom Software Solutions | Upvista Digital" />
        <meta property="og:description" content="Professional software development services including custom software solutions, mobile apps, and enterprise applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/Services/software-development" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Development Services | Upvista Digital" />
        <meta name="twitter:description" content="Professional software development services including custom software solutions and mobile apps." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/Services/software-development" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Software Development Services',
            'description': 'Professional software development services including custom software solutions, mobile apps, and enterprise applications using React Native, Flutter, Python, Java, Go, and modern technologies.',
            'url': 'https://www.upvistadigital.com/Services/software-development',
            'provider': {
              '@type': 'Organization',
              'name': 'Upvista Digital',
              'url': 'https://www.upvistadigital.com'
            },
            'serviceType': 'Software Development',
            'areaServed': 'Worldwide',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.upvistadigital.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.upvistadigital.com/Services' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Software Development', 'item': 'https://www.upvistadigital.com/Services/software-development' }
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
              className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[100px] ${isDark ? 'bg-indigo-600' : 'bg-indigo-300'}`}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1.1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              className={`absolute top-1/2 -right-24 w-80 h-80 rounded-full blur-[80px] ${isDark ? 'bg-blue-600' : 'bg-blue-300'}`}
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
                    ? 'bg-white/5 border-white/10 text-indigo-400'
                    : 'bg-indigo-50/80 border-indigo-100 text-indigo-700 shadow-sm'
                    }`}
                >
                  <Smartphone className="w-4 h-4 mr-2 animate-pulse" />
                  {t('softdev.badge')}
                </motion.div>

                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight ${isDark
                  ? 'bg-gradient-to-r from-white via-indigo-200 to-blue-300 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-indigo-900 to-blue-800 bg-clip-text text-transparent'
                  }`}>
                  {t('softdev.title')}
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`text-xl md:text-2xl leading-relaxed mb-10 max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                >
                  {t('softdev.subtitle')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className={`px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-gray-900 text-white hover:bg-black'
                    }`}>
                    Consult Experts
                  </button>
                  <Link href="/Insights/case-studies/vigours-organic-crm" className={`px-8 py-4 rounded-2xl font-bold text-lg border-2 flex items-center transition-all duration-300 hover:bg-white/5 ${isDark ? 'border-blue-500/30 text-blue-400' : 'border-gray-200 text-gray-700'
                    }`}>
                    Our Portfolio <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Side - Artistic Image Display */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className={`relative z-10 w-full aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden border-8 ${isDark ? 'border-white/5 shadow-indigo-500/10' : 'border-white shadow-2xl shadow-indigo-200/50'
                  }`}>
                  <Image
                    src="/assets/services/software/software-poster.jpeg"
                    alt="Software Development Services"
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
                  <Laptop className="w-10 h-10 text-indigo-500" />
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
                  <Cpu className="w-10 h-10 text-blue-500" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="relative w-full overflow-hidden leading-[0] transform rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-[60px] md:h-[100px] ${isDark ? 'fill-gray-950' : 'fill-indigo-50/50'
            }`}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        {/* Project Types - The Bento Grid Experience */}
        <section className={`py-24 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('softdev.projectTypes.title')}
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                {t('softdev.projectTypes.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {/* Custom Software - Large Bento Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className={`md:col-span-4 p-8 rounded-[32px] border relative overflow-hidden group ${isDark ? 'bg-white/[0.03] border-white/10' : 'bg-indigo-50/50 border-indigo-100'
                  }`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Laptop className="w-8 h-8 text-indigo-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('softdev.projectTypes.custom.title')}
                  </h3>
                  <p className={`text-lg leading-relaxed max-w-md ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('softdev.projectTypes.custom.description')}
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Code2 className="w-40 h-40" />
                </div>
              </motion.div>

              {/* Mobile Apps - Tall Bento Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className={`md:col-span-2 p-8 rounded-[32px] border relative overflow-hidden group ${isDark ? 'bg-white/[0.03] border-white/10' : 'bg-blue-500/5 border-blue-100'
                  }`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                    <Smartphone className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('softdev.projectTypes.mobile.title')}
                  </h3>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('softdev.projectTypes.mobile.description')}
                  </p>
                </div>
              </motion.div>

              {/* Enterprise - Square Bento Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className={`md:col-span-3 p-8 rounded-[32px] border relative overflow-hidden group ${isDark ? 'bg-white/[0.03] border-white/10' : 'bg-gray-50/50 border-gray-200'
                  }`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gray-500/20 flex items-center justify-center mb-6">
                    <Layers className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('softdev.projectTypes.enterprise.title')}
                  </h3>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('softdev.projectTypes.enterprise.description')}
                  </p>
                </div>
              </motion.div>

              {/* API & Integration - Square Bento Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className={`md:col-span-3 p-8 rounded-[32px] border relative overflow-hidden group ${isDark ? 'bg-white/[0.03] border-white/10' : 'bg-purple-50/50 border-purple-100'
                  }`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('softdev.projectTypes.integration.title')}
                  </h3>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('softdev.projectTypes.integration.description')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Tech Stack Section */}
        <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('softdev.techStack.title')}
              </h2>
              <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {t('softdev.techStack.subtitle')}
              </p>
            </div>

            <div className={`rounded-2xl border overflow-hidden ${isDark
              ? 'bg-white/5 border-white/10'
              : 'bg-white/70 border-gray-200 shadow-lg'
              }`}>
              <button
                onClick={toggleTechStack}
                className={`w-full p-6 text-left transition-colors ${isDark
                  ? 'hover:bg-white/10'
                  : 'hover:bg-white/90'
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                      {t('softdev.techStack.heading')}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {t('softdev.techStack.subtitle')}
                    </p>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-transform ${expandedTechStack ? 'rotate-180' : ''
                      } ${isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedTechStack && (
                <div className={`px-6 pb-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'
                  }`}>
                  <div className="pt-6">
                    {/* Tech Stack Carousel */}
                    <div className="mb-12">
                      <div className="relative overflow-hidden rounded-2xl">
                        <div className="flex transition-transform duration-500 ease-in-out"
                          style={{ transform: `translateX(-${currentTechIndex * 100}%)` }}>
                          {techStackItems.map((tech, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                              <div className={`p-6 rounded-2xl ${isDark
                                ? 'bg-white/5 border border-white/10'
                                : 'bg-white/70 border border-gray-200 shadow-lg'
                                }`}>
                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                  {/* Tech Image */}
                                  <div className="flex-shrink-0 w-full lg:w-80 h-48 rounded-xl overflow-hidden relative">
                                    <Image
                                      src={tech.image}
                                      alt={tech.name}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>

                                  {/* Tech Info */}
                                  <div className="flex-1 text-center lg:text-left">
                                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                                      <div className="w-12 h-12 rounded-xl overflow-hidden">
                                        <Image
                                          src={tech.logo}
                                          alt={`${tech.name} logo`}
                                          width={48}
                                          height={48}
                                          className="w-full h-full object-contain p-1 bg-white/90"
                                        />
                                      </div>
                                      <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {tech.name}
                                      </h3>
                                    </div>
                                    <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'
                                      }`}>
                                      {tech.description}
                                    </p>
                                    <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${isDark
                                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                                      }`}>
                                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse"></span>
                                      {t('softdev.techStack.badge')}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center mt-6 space-x-2">
                          {techStackItems.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentTechIndex(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTechIndex
                                ? isDark
                                  ? 'bg-blue-500 scale-125'
                                  : 'bg-blue-600 scale-125'
                                : isDark
                                  ? 'bg-white/30 hover:bg-white/50'
                                  : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tech Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className={`p-6 rounded-xl ${isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                        }`}>
                        <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                          {t('softdev.techStack.mobile')}
                        </h4>
                        <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                          {t('softdev.techStack.mobile.desc1')}
                        </p>
                        <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                          {t('softdev.techStack.mobile.desc2')}
                        </p>
                      </div>

                      <div className={`p-6 rounded-xl ${isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                        }`}>
                        <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                          {t('softdev.techStack.backend')}
                        </h4>
                        <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                          {t('softdev.techStack.backend.desc1')}
                        </p>
                        <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                          {t('softdev.techStack.backend.desc2')}
                        </p>
                      </div>

                      <div className={`p-6 rounded-xl ${isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                        }`}>
                        <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                          {t('softdev.techStack.cloud')}
                        </h4>
                        <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                          {t('softdev.techStack.cloud.desc1')}
                        </p>
                        <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                          {t('softdev.techStack.cloud.desc2')}
                        </p>
                      </div>

                      <div className={`p-6 rounded-xl ${isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                        }`}>
                        <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                          {t('softdev.techStack.database')}
                        </h4>
                        <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                          {t('softdev.techStack.database.desc1')}
                        </p>
                        <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                          {t('softdev.techStack.database.desc2')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('softdev.caseStudies.title')}
              </h2>
              <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {t('softdev.caseStudies.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className={`group rounded-2xl overflow-hidden border ${isDark
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : 'bg-white/70 border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
                    } transition-all duration-300`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDark
                        ? 'bg-blue-600/80 text-white'
                        : 'bg-blue-600 text-white'
                        }`}>
                        {study.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                      {study.title}
                    </h3>
                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {study.description}
                    </p>
                    <a
                      href={study.href}
                      className={`inline-flex items-center text-sm font-medium ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                        } transition-colors`}
                    >
                      {t('softdev.caseStudies.readMore')}
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Process Section */}
        <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('softdev.process.title')}
              </h2>
              <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {t('softdev.process.subtitle')}
              </p>
            </div>

            <div className="space-y-4">
              {developmentProcesses.map((process) => (
                <div
                  key={process.type}
                  className={`rounded-2xl border ${isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/70 border-gray-200 shadow-lg'
                    } overflow-hidden`}
                >
                  <button
                    onClick={() => toggleProcess(process.type)}
                    className={`w-full p-6 text-left transition-colors ${isDark
                      ? 'hover:bg-white/10'
                      : 'hover:bg-white/90'
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                          {process.title}
                        </h3>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                          {process.description}
                        </p>
                      </div>
                      <svg
                        className={`w-6 h-6 transition-transform ${expandedProcess === process.type ? 'rotate-180' : ''
                          } ${isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {expandedProcess === process.type && (
                    <div className={`px-6 pb-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'
                      }`}>
                      <div className="pt-6">
                        {/* Enhanced Roadmap with Zig-Zag Layout */}
                        <div className="mb-8">
                          <h4 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            {t('softdev.processes.roadmapHeading')}
                          </h4>
                          <div className="space-y-12">
                            {process.roadmap.map((step, index) => (
                              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } items-center gap-8`}>
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                                  }`}>
                                  <div className="flex items-start space-x-4">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${isDark
                                      ? 'bg-blue-600 text-white'
                                      : 'bg-blue-600 text-white'
                                      }`}>
                                      {step.step}
                                    </div>
                                    <div className="flex-1">
                                      <h5 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {step.title}
                                      </h5>
                                      <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        {step.description}
                                      </p>
                                      {(step as { details: string }).details && (
                                        <div className={`p-4 rounded-lg ${isDark
                                          ? 'bg-white/5 border border-white/10'
                                          : 'bg-gray-50 border border-gray-200'
                                          }`}>
                                          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                            {(step as { details: string }).details}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Image */}
                                <div className="flex-shrink-0 w-full max-w-sm lg:w-80">
                                  <div className={`relative h-48 rounded-xl overflow-hidden ${isDark
                                    ? 'bg-white/5 border border-white/10'
                                    : 'bg-gray-100 border border-gray-200'
                                    }`}>
                                    <Image
                                      src={(step as { image: string }).image || '/assets/services/process-step.jpg'}
                                      alt={step.title}
                                      fill
                                      className="object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4">
                                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDark
                                        ? 'bg-blue-600/80 text-white'
                                        : 'bg-blue-600 text-white'
                                        }`}>
                                        {t('softdev.processes.step')} {step.step}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'
                              }`}>
                              {t('softdev.processes.technologiesHeading')}
                            </h4>
                            <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                              {process.platforms.map((platform, index) => (
                                <div key={index} className="flex items-center">
                                  <span className={`w-2 h-2 rounded-full mr-3 ${isDark ? 'bg-blue-400' : 'bg-blue-600'
                                    }`}></span>
                                  {platform}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'
                              }`}>
                              {t('softdev.processes.servicesHeading')}
                            </h4>
                            <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                              {process.services.map((service, index) => (
                                <div key={index} className="flex items-center">
                                  <span className={`w-2 h-2 rounded-full mr-3 ${isDark ? 'bg-green-400' : 'bg-green-600'
                                    }`}></span>
                                  {service}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Consultation Section */}
        <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`relative text-center p-8 sm:p-12 rounded-3xl overflow-hidden ${isDark
              ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10'
              : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
              }`}>
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/assets/services/software/planning.jpeg"
                  alt="Software Development Consultation"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="relative z-10">
                <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                  {t('softdev.consultation.title')}
                </h2>
                <p className={`text-lg sm:text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  {t('softdev.consultation.content')}
                </p>

                {/* Additional Services */}
                <div className={`mb-8 p-6 rounded-2xl ${isDark
                  ? 'bg-white/5 border border-white/10'
                  : 'bg-white/70 border border-gray-200'
                  }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {t('softdev.consultation.additionalServices')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-white/5' : 'bg-white/50'
                      }`}>
                      <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>{t('softdev.consultation.service1.title')}</strong>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{t('softdev.consultation.service1.description')}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-white/5' : 'bg-white/50'
                      }`}>
                      <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>{t('softdev.consultation.service2.title')}</strong>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{t('softdev.consultation.service2.description')}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-white/5' : 'bg-white/50'
                      }`}>
                      <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>{t('softdev.consultation.service3.title')}</strong>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{t('softdev.consultation.service3.description')}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isDark
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    }`}>
                    {t('softdev.consultation.button')}
                  </button>
                  <a
                    href="/assets/sample-operation-manual.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${isDark
                      ? 'border border-white/20 text-white hover:bg-white/10'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <span className="text-blue-600 underline hover:text-blue-700 transition-colors">
                      {t('softdev.consultation.manualLink')}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('softdev.mission.title')}
              </h2>
              <p className={`text-lg sm:text-xl leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {t('softdev.mission.content')}
              </p>
            </div>

            <div className="mb-12">
              <h3 className={`text-2xl font-semibold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('softdev.mission.industries')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: t('softdev.mission.industry1.name'),
                    image: '/assets/services/health.jpeg',
                    description: t('softdev.mission.industry1.description')
                  },
                  {
                    name: t('softdev.mission.industry2.name'),
                    image: '/assets/services/fintech.jpeg',
                    description: t('softdev.mission.industry2.description')
                  },
                  {
                    name: t('softdev.mission.industry3.name'),
                    image: '/assets/services/ecommerce.jpeg',
                    description: t('softdev.mission.industry3.description')
                  },
                  {
                    name: t('softdev.mission.industry4.name'),
                    image: '/assets/services/edutech.jpeg',
                    description: t('softdev.mission.industry4.description')
                  },
                  {
                    name: t('softdev.mission.industry5.name'),
                    image: '/assets/services/saas.jpeg',
                    description: t('softdev.mission.industry5.description')
                  },
                  {
                    name: t('softdev.mission.industry6.name'),
                    image: '/assets/services/creativity.jpeg',
                    description: t('softdev.mission.industry6.description')
                  }
                ].map((industry, index) => (
                  <div
                    key={index}
                    className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      {/* Default State */}
                      <div className="group-hover:opacity-0 transition-opacity duration-300">
                        <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                          {industry.name}
                        </h4>
                      </div>

                      {/* Hover State */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <h4 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white drop-shadow-lg' : 'text-gray-900'
                          }`}>
                          {industry.name}
                        </h4>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-100 drop-shadow-md' : 'text-gray-700'
                          }`}>
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    {/* Overlay Gradient for Better Text Readability */}
                    <div className={`absolute inset-0 pointer-events-none ${isDark
                      ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                      : 'bg-gradient-to-t from-white/70 via-transparent to-transparent'
                      }`}></div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`text-center p-6 rounded-2xl ${isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
              }`}>
              <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                {t('softdev.mission.ending')}
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}