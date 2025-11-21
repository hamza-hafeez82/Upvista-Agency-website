"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../components/CareersHeader";
import CareersFooter from "../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../contexts/CareersLanguageContext";

export default function JobsPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();

  return (
    <>
      <Head>
        <title>Job Openings | Upvista Digital Careers - Explore Available Positions</title>
        <meta name="description" content="Explore job openings at Upvista Digital. Browse available positions across development, design, marketing, operations, and more. Find your perfect role in a global digital innovation company." />
        <meta name="keywords" content="Upvista Digital Jobs, Software Engineer Jobs, Web Developer Jobs, UI UX Designer Jobs, Tech Jobs, IT Jobs, Software Development Jobs, Job Openings, Career Opportunities, Tech Careers" />
        <meta property="og:title" content="Job Openings | Upvista Digital Careers" />
        <meta property="og:description" content="Explore job openings at Upvista Digital. Browse available positions across development, design, marketing, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/careers/jobs" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/careers/jobs/dev.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Job Openings | Upvista Digital Careers" />
        <meta name="twitter:description" content="Explore job openings at Upvista Digital across development, design, and more." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/careers/jobs/dev.jpeg" />
        <link rel="canonical" href="https://www.upvistadigital.com/careers/jobs" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Job Openings - Upvista Digital Careers',
          'description': 'Explore job openings at Upvista Digital. Browse available positions across development, design, marketing, and more.',
          'url': 'https://www.upvistadigital.com/careers/jobs',
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
                'name': 'Job Openings',
                'item': 'https://www.upvistadigital.com/careers/jobs'
              }
            ]
          }
        }) }} />
      </Head>
      <CareersHeader />
      
      <div className={`min-h-screen pt-20 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white' 
          : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 text-gray-900'
      }`}>
        {/* Hero Section with Vortex Background */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Vortex Background - Only behind hero */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <Vortex
              backgroundColor="transparent"
              className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full opacity-50"
            >
            </Vortex>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pt-8 pb-12"
            >
              <h1 className={`text-5xl md:text-7xl font-bold mb-8 drop-shadow-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('careers.jobs.hero.title')}
              </h1>
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12 ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {t('careers.jobs.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers/apply"
                  className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg ${
                    isDark 
                      ? 'bg-white text-slate-900 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  {t('careers.jobs.hero.applyButton')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/careers"
                  className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 border ${
                    isDark 
                      ? 'bg-transparent text-white hover:bg-white/10 border-white/30' 
                      : 'bg-transparent text-gray-900 hover:bg-purple-100 border-purple-400'
                  }`}
                >
                  {t('careers.jobs.hero.viewButton')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Department Cards */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.jobs.departments.title')}</h2>
              <div className={`w-24 h-1 mx-auto mb-8 ${
                isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
              }`}></div>
              <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t('careers.jobs.departments.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                {
                  title: t('careers.jobs.departments.development.title'),
                  description: t('careers.jobs.departments.development.description'),
                  image: "/assets/careers/jobs/dev.jpeg"
                },
                {
                  title: t('careers.jobs.departments.uiux.title'),
                  description: t('careers.jobs.departments.uiux.description'),
                  image: "/assets/careers/jobs/design.jpeg"
                },
                {
                  title: t('careers.jobs.departments.product.title'),
                  description: t('careers.jobs.departments.product.description'),
                  image: "/assets/careers/jobs/management.jpeg"
                },
                {
                  title: t('careers.jobs.departments.marketing.title'),
                  description: t('careers.jobs.departments.marketing.description'),
                  image: "/assets/careers/jobs/marketing.jpeg"
                },
                {
                  title: t('careers.jobs.departments.rnd.title'),
                  description: t('careers.jobs.departments.rnd.description'),
                  image: "/assets/careers/jobs/rnd.jpeg"
                },
                {
                  title: t('careers.jobs.departments.qa.title'),
                  description: t('careers.jobs.departments.qa.description'),
                  image: "/assets/careers/jobs/QA.jpeg"
                },
                {
                  title: t('careers.jobs.departments.infrastructure.title'),
                  description: t('careers.jobs.departments.infrastructure.description'),
                  image: "/assets/careers/jobs/infra.jpeg"
                },
                {
                  title: t('careers.jobs.departments.service.title'),
                  description: t('careers.jobs.departments.service.description'),
                  image: "/assets/careers/jobs/service.jpeg"
                },
                {
                  title: t('careers.jobs.departments.hr.title'),
                  description: t('careers.jobs.departments.hr.description'),
                  image: "/assets/careers/jobs/HR.jpeg"
                },
                {
                  title: t('careers.jobs.departments.finance.title'),
                  description: t('careers.jobs.departments.finance.description'),
                  image: "/assets/careers/jobs/finance.jpeg"
                },
                {
                  title: t('careers.jobs.departments.operations.title'),
                  description: t('careers.jobs.departments.operations.description'),
                  image: "/assets/careers/jobs/operations.jpeg"
                },
                {
                  title: t('careers.jobs.departments.writing.title'),
                  description: t('careers.jobs.departments.writing.description'),
                  image: "/assets/careers/jobs/writing.jpeg"
                }
              ].map((department, index) => {
                // Department URLs mapped by index since titles are now translated
                const departmentUrls = [
                  "/careers/jobs/development-team",
                  "/careers/jobs/ui-ux-design",
                  "/careers/jobs/product-management",
                  "/careers/jobs/marketing-and-sales",
                  "/careers/jobs/research-and-development",
                  "/careers/jobs/quality-assurance",
                  "/careers/jobs/it-infrastructure",
                  "/careers/jobs/customer-service",
                  "/careers/jobs/human-resources",
                  "/careers/jobs/finance",
                  "/careers/jobs/operations",
                  "/careers/jobs/technical-writing"
                ];
                
                const getDepartmentUrl = () => departmentUrls[index];

                return (
                  <Link key={department.title} href={getDepartmentUrl()} className="h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className={`h-full flex flex-col group backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                        isDark 
                          ? 'bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10' 
                          : 'bg-white/60 border-purple-300/50 hover:border-purple-500/60 hover:bg-white/80'
                      }`}
                      suppressHydrationWarning
                    >
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={department.image}
                        alt={department.title}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {isDark && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-100"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                        isDark 
                          ? 'text-white group-hover:text-purple-400' 
                          : 'text-gray-900 group-hover:text-purple-600'
                      }`}>
                        {department.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {department.description}
                      </p>
                    </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.section>

          {/* Upvista is Waiting for You */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-24"
          >
            <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-12 ${
              isDark 
                ? 'from-purple-600/20 to-pink-600/20 border-purple-500/30' 
                : 'from-purple-600/10 to-pink-600/10 border-purple-500/20 bg-white/30'
            }`}>
              <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t('careers.jobs.cta.title')}
              </h3>
              <p className={`text-xl mb-10 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('careers.jobs.cta.description1')}<br className="hidden sm:block" />
                {t('careers.jobs.cta.description2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers/apply"
                  className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  {t('careers.jobs.cta.applyButton')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/careers"
                  className={`inline-flex items-center px-10 py-4 font-semibold rounded-lg transition-all duration-200 border ${
                    isDark 
                      ? 'bg-white/10 text-white hover:bg-white/20 border-white/20' 
                      : 'bg-white/30 text-gray-900 hover:bg-white/50 border-purple-400'
                  }`}
                >
                  {t('careers.jobs.cta.jobsButton')}
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
