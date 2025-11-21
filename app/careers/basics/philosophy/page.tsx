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

export default function PhilosophyPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  
  return (
    <>
      <Head>
        <title>Corporate Philosophy | Upvista Digital Careers - Our Mindset & Culture</title>
        <meta name="description" content="Discover Upvista Digital's corporate philosophy, including our purpose and five core cultures. Learn about our mindset, values, and what drives our organization." />
        <meta name="keywords" content="Corporate Philosophy, Company Values, Corporate Culture, Company Mindset, Organizational Culture, Upvista Digital Values, Company Purpose" />
        <meta property="og:title" content="Corporate Philosophy | Upvista Digital Careers" />
        <meta property="og:description" content="Discover Upvista Digital's corporate philosophy, including our purpose and five core cultures." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/careers/basics/philosophy" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/careers/basic/coporate.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corporate Philosophy | Upvista Digital Careers" />
        <meta name="twitter:description" content="Discover Upvista Digital's corporate philosophy and core values." />
        <link rel="canonical" href="https://www.upvistadigital.com/careers/basics/philosophy" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Corporate Philosophy - Upvista Digital Careers',
          'description': 'Discover Upvista Digital\'s corporate philosophy, including our purpose and five core cultures.',
          'url': 'https://www.upvistadigital.com/careers/basics/philosophy',
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
                'name': 'Corporate Philosophy',
                'item': 'https://www.upvistadigital.com/careers/basics/philosophy'
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
              {t('careers.philosophy.back')}
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
              {t('careers.philosophy.hero.title')}
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('careers.philosophy.hero.subtitle')}
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Core Purpose */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-8 md:p-12 text-center ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-indigo-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.philosophy.purpose.title')}</h2>
                <p className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('careers.philosophy.purpose.description')}
                </p>
              </div>
            </motion.section>

            {/* Our Five Cultures */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-7xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.philosophy.cultures.title')}</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {/* Human-Centered */}
                  <div className={`p-6 rounded-xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                      : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.cultures.humanCentered.title')}</h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.philosophy.cultures.humanCentered.description')}
                    </p>
                  </div>

                  {/* Innovation-Driven */}
                  <div className={`p-6 rounded-xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                      : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.cultures.innovation.title')}</h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.philosophy.cultures.innovation.description')}
                    </p>
                  </div>

                  {/* Collaborative */}
                  <div className={`p-6 rounded-xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                      : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.cultures.collaborative.title')}</h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.philosophy.cultures.collaborative.description')}
                    </p>
                  </div>

                  {/* Ethical */}
                  <div className={`p-6 rounded-xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                      : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.cultures.ethical.title')}</h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.philosophy.cultures.ethical.description')}
                    </p>
                  </div>

                  {/* Excellence-Focused */}
                  <div className={`p-6 rounded-xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                      : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.cultures.excellence.title')}</h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.philosophy.cultures.excellence.description')}
                    </p>
                  </div>

                  {/* Growth-Oriented */}
                  <div className={`p-6 rounded-xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                      : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.cultures.growth.title')}</h3>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.philosophy.cultures.growth.description')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Guiding Principles */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.philosophy.principles.title')}</h2>
                
                <div className="space-y-8">
                  <div className={`p-6 rounded-xl border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.principles.growthMindset.title')}</h3>
                    <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.philosophy.principles.growthMindset.description')}
                    </p>
                  </div>

                  <div className={`p-6 rounded-xl border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.principles.sustainable.title')}</h3>
                    <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.philosophy.principles.sustainable.description')}
                    </p>
                  </div>

                  <div className={`p-6 rounded-xl border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.principles.customer.title')}</h3>
                    <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.philosophy.principles.customer.description')}
                    </p>
                  </div>

                  <div className={`p-6 rounded-xl border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.principles.learning.title')}</h3>
                    <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t('careers.philosophy.principles.learning.description')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Our Vision */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-8 md:p-12 text-center ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-indigo-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.philosophy.vision.title')}</h2>
                <p className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{t('careers.philosophy.vision.quote')}"
                </p>
              </div>
            </motion.section>

            {/* Values in Action */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.philosophy.values.title')}</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className={`p-6 rounded-xl border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.values.workplace.title')}</h3>
                    <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <p>• {t('careers.philosophy.values.workplace.item1')}</p>
                      <p>• {t('careers.philosophy.values.workplace.item2')}</p>
                      <p>• {t('careers.philosophy.values.workplace.item3')}</p>
                      <p>• {t('careers.philosophy.values.workplace.item4')}</p>
                      <p>• {t('careers.philosophy.values.workplace.item5')}</p>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-xl border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.philosophy.values.community.title')}</h3>
                    <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <p>• {t('careers.philosophy.values.community.item1')}</p>
                      <p>• {t('careers.philosophy.values.community.item2')}</p>
                      <p>• {t('careers.philosophy.values.community.item3')}</p>
                      <p>• {t('careers.philosophy.values.community.item4')}</p>
                      <p>• {t('careers.philosophy.values.community.item5')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-indigo-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.philosophy.cta.title')}</h3>
                <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('careers.philosophy.cta.description')}
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {t('careers.philosophy.cta.button')}
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