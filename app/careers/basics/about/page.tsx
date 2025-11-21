"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../../contexts/CareersLanguageContext";

export default function AboutPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  
  return (
    <>
      <Head>
        <title>About Upvista Digital | Careers - Company Overview in 3 Minutes</title>
        <meta name="description" content="Learn about Upvista Digital in 3 minutes. Discover our philosophy, business model, work culture, and working style. Understand what makes Upvista Digital a unique place to work." />
        <meta name="keywords" content="About Upvista Digital, Company Overview, Upvista Digital Philosophy, Company Culture, Work Culture, Digital Innovation Company, Tech Company Overview" />
        <meta property="og:title" content="About Upvista Digital | Careers" />
        <meta property="og:description" content="Learn about Upvista Digital in 3 minutes. Discover our philosophy, business model, and work culture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/careers/basics/about" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/upvista.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Upvista Digital | Careers" />
        <meta name="twitter:description" content="Learn about Upvista Digital in 3 minutes. Discover our philosophy and work culture." />
        <link rel="canonical" href="https://www.upvistadigital.com/careers/basics/about" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'About Upvista Digital - Careers',
          'description': 'Learn about Upvista Digital in 3 minutes. Discover our philosophy, business model, and work culture.',
          'url': 'https://www.upvistadigital.com/careers/basics/about',
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
                'name': 'Learn the Basics',
                'item': 'https://www.upvistadigital.com/careers/basics'
              },
              {
                '@type': 'ListItem',
                'position': 4,
                'name': 'About',
                'item': 'https://www.upvistadigital.com/careers/basics/about'
              }
            ]
          }
        }) }} />
      </Head>
      <CareersHeader />
      
      <div className={`min-h-screen pt-20 relative transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
      }`}>
        {/* Vortex Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <Vortex
            backgroundColor="transparent"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full opacity-50"
          >
          </Vortex>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-20 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link 
              href="/careers/basics" 
              className={`flex items-center transition-colors duration-200 ${
                isDark ? 'text-purple-400 hover:text-purple-300' : 'text-indigo-600 hover:text-indigo-700'
              }`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('careers.about.back')}
            </Link>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24 relative z-20 pt-8 pb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-12 pb-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              {t('careers.about.hero.title')}
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('careers.about.hero.subtitle')}
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Company Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.about.whoWeAre.title')}</h2>
                <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    {t('careers.about.whoWeAre.paragraph1')}
                  </p>
                  <p>
                    {t('careers.about.whoWeAre.paragraph2')}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Our Services */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-7xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.about.services.title')}</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {/* Enterprise Software Development */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.about.services.enterprise.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.about.services.enterprise.item1')}</p>
                    <p>• {t('careers.about.services.enterprise.item2')}</p>
                    <p>• {t('careers.about.services.enterprise.item3')}</p>
                    <p>• {t('careers.about.services.enterprise.item4')}</p>
                    <p>• {t('careers.about.services.enterprise.item5')}</p>
                    <p>• {t('careers.about.services.enterprise.item6')}</p>
                    <p>• {t('careers.about.services.enterprise.item7')}</p>
                  </div>
                </div>

                {/* Web Development */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.about.services.web.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.about.services.web.item1')}</p>
                    <p>• {t('careers.about.services.web.item2')}</p>
                    <p>• {t('careers.about.services.web.item3')}</p>
                    <p>• {t('careers.about.services.web.item4')}</p>
                    <p>• {t('careers.about.services.web.item5')}</p>
                    <p>• {t('careers.about.services.web.item6')}</p>
                    <p>• {t('careers.about.services.web.item7')}</p>
                  </div>
                </div>

                {/* AI and Automation */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.about.services.ai.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.about.services.ai.item1')}</p>
                    <p>• {t('careers.about.services.ai.item2')}</p>
                    <p>• {t('careers.about.services.ai.item3')}</p>
                    <p>• {t('careers.about.services.ai.item4')}</p>
                    <p>• {t('careers.about.services.ai.item5')}</p>
                    <p>• {t('careers.about.services.ai.item6')}</p>
                    <p>• {t('careers.about.services.ai.item7')}</p>
                  </div>
                </div>

                {/* Cloud Solutions */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.about.services.cloud.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.about.services.cloud.item1')}</p>
                    <p>• {t('careers.about.services.cloud.item2')}</p>
                    <p>• {t('careers.about.services.cloud.item3')}</p>
                    <p>• {t('careers.about.services.cloud.item4')}</p>
                    <p>• {t('careers.about.services.cloud.item5')}</p>
                    <p>• {t('careers.about.services.cloud.item6')}</p>
                    <p>• {t('careers.about.services.cloud.item7')}</p>
                  </div>
                </div>

                {/* Graphics and Design */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.about.services.design.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.about.services.design.item1')}</p>
                    <p>• {t('careers.about.services.design.item2')}</p>
                    <p>• {t('careers.about.services.design.item3')}</p>
                    <p>• {t('careers.about.services.design.item4')}</p>
                    <p>• {t('careers.about.services.design.item5')}</p>
                    <p>• {t('careers.about.services.design.item6')}</p>
                    <p>• {t('careers.about.services.design.item7')}</p>
                  </div>
                </div>

                {/* Additional Services */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.about.services.additional.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.about.services.additional.item1')}</p>
                    <p>• {t('careers.about.services.additional.item2')}</p>
                    <p>• {t('careers.about.services.additional.item3')}</p>
                    <p>• {t('careers.about.services.additional.item4')}</p>
                    <p>• {t('careers.about.services.additional.item5')}</p>
                    <p>• {t('careers.about.services.additional.item6')}</p>
                    <p>• {t('careers.about.services.additional.item7')}</p>
                  </div>
                </div>
                </div>
              </div>
            </motion.section>

            {/* Community */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.about.community.title')}</h2>
                <div className={`space-y-8 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="text-center">
                    {t('careers.about.community.intro')}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className={`p-6 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.about.community.collaboration.title')}</h3>
                      <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• {t('careers.about.community.collaboration.item1')}</p>
                        <p>• {t('careers.about.community.collaboration.item2')}</p>
                        <p>• {t('careers.about.community.collaboration.item3')}</p>
                        <p>• {t('careers.about.community.collaboration.item4')}</p>
                        <p>• {t('careers.about.community.collaboration.item5')}</p>
                      </div>
                    </div>
                    
                    <div className={`p-6 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.about.community.training.title')}</h3>
                      <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• {t('careers.about.community.training.item1')}</p>
                        <p>• {t('careers.about.community.training.item2')}</p>
                        <p>• {t('careers.about.community.training.item3')}</p>
                        <p>• {t('careers.about.community.training.item4')}</p>
                        <p>• {t('careers.about.community.training.item5')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Upvista Technologies Lab */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.about.lab.title')}</h2>
                <div className={`space-y-8 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="text-center">
                    {t('careers.about.lab.intro')}
                  </p>
                  
                  <div className="mt-12">
                    <div className={`p-6 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-6 text-center ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.about.lab.focus.title')}</h3>
                      <div className={`grid md:grid-cols-2 gap-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• {t('careers.about.lab.focus.item1')}</p>
                        <p>• {t('careers.about.lab.focus.item2')}</p>
                        <p>• {t('careers.about.lab.focus.item3')}</p>
                        <p>• {t('careers.about.lab.focus.item4')}</p>
                        <p>• {t('careers.about.lab.focus.item5')}</p>
                        <p>• {t('careers.about.lab.focus.item6')}</p>
                        <p>• {t('careers.about.lab.focus.item7')}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-center mt-8">
                    {t('careers.about.lab.conclusion')}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-indigo-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.about.cta.title')}</h3>
                <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('careers.about.cta.description')}
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {t('careers.about.cta.button')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CareersFooter />
    </>
  );
}