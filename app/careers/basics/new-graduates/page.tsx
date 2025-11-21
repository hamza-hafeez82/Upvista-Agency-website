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

export default function NewGraduatesPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  
  return (
    <>
      <Head>
        <title>New Graduates Program | Upvista Digital Careers - Graduate Opportunities</title>
        <meta name="description" content="Explore career opportunities for new graduates at Upvista Digital. Learn about our graduate program, training opportunities, and how we support fresh talent in building successful careers." />
        <meta name="keywords" content="New Graduates, Graduate Program, Entry Level Jobs, Fresh Graduate Opportunities, Graduate Training, New Graduate Careers, Entry Level Tech Jobs" />
        <meta property="og:title" content="New Graduates Program | Upvista Digital Careers" />
        <meta property="og:description" content="Explore career opportunities for new graduates at Upvista Digital. Learn about our graduate program and training opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/careers/basics/new-graduates" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/careers/basic/new.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New Graduates Program | Upvista Digital Careers" />
        <meta name="twitter:description" content="Explore career opportunities for new graduates at Upvista Digital." />
        <link rel="canonical" href="https://www.upvistadigital.com/careers/basics/new-graduates" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'New Graduates Program - Upvista Digital Careers',
          'description': 'Explore career opportunities for new graduates at Upvista Digital. Learn about our graduate program and training opportunities.',
          'url': 'https://www.upvistadigital.com/careers/basics/new-graduates',
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
                'name': 'New Graduates',
                'item': 'https://www.upvistadigital.com/careers/basics/new-graduates'
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
              {t('careers.graduates.back')}
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
              {t('careers.graduates.hero.title')}
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('careers.graduates.hero.subtitle')}
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Our Commitment to New Graduates */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.commitment.title')}</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.graduates.commitment.paragraph1')}
                </p>
                <p>
                  {t('careers.graduates.commitment.paragraph2')}
                </p>
                <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                  "{t('careers.graduates.commitment.quote')}"
                </p>
              </div>
            </motion.section>

            {/* Programs for New Graduates */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.programs.title')}</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Graduate Training Program */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.graduates.programs.training.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.graduates.programs.training.item1')}</p>
                    <p>• {t('careers.graduates.programs.training.item2')}</p>
                    <p>• {t('careers.graduates.programs.training.item3')}</p>
                    <p>• {t('careers.graduates.programs.training.item4')}</p>
                    <p>• {t('careers.graduates.programs.training.item5')}</p>
                    <p>• {t('careers.graduates.programs.training.item6')}</p>
                  </div>
                </div>

                {/* Mentorship Program */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.graduates.programs.mentorship.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.graduates.programs.mentorship.item1')}</p>
                    <p>• {t('careers.graduates.programs.mentorship.item2')}</p>
                    <p>• {t('careers.graduates.programs.mentorship.item3')}</p>
                    <p>• {t('careers.graduates.programs.mentorship.item4')}</p>
                    <p>• {t('careers.graduates.programs.mentorship.item5')}</p>
                    <p>• {t('careers.graduates.programs.mentorship.item6')}</p>
                  </div>
                </div>

                {/* Leadership Development */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.graduates.programs.leadership.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.graduates.programs.leadership.item1')}</p>
                    <p>• {t('careers.graduates.programs.leadership.item2')}</p>
                    <p>• {t('careers.graduates.programs.leadership.item3')}</p>
                    <p>• {t('careers.graduates.programs.leadership.item4')}</p>
                    <p>• {t('careers.graduates.programs.leadership.item5')}</p>
                    <p>• {t('careers.graduates.programs.leadership.item6')}</p>
                  </div>
                </div>

                {/* Innovation Lab */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.graduates.programs.innovation.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.graduates.programs.innovation.item1')}</p>
                    <p>• {t('careers.graduates.programs.innovation.item2')}</p>
                    <p>• {t('careers.graduates.programs.innovation.item3')}</p>
                    <p>• {t('careers.graduates.programs.innovation.item4')}</p>
                    <p>• {t('careers.graduates.programs.innovation.item5')}</p>
                    <p>• {t('careers.graduates.programs.innovation.item6')}</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Benefits and Support */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.title')}</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Financial Benefits */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.graduates.benefits.financial.title')}</h3>
                  <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.financial.salary.title')}</h4>
                      <p>• {t('careers.graduates.benefits.financial.salary.item1')}</p>
                      <p>• {t('careers.graduates.benefits.financial.salary.item2')}</p>
                      <p>• {t('careers.graduates.benefits.financial.salary.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.financial.loans.title')}</h4>
                      <p>• {t('careers.graduates.benefits.financial.loans.item1')}</p>
                      <p>• {t('careers.graduates.benefits.financial.loans.item2')}</p>
                      <p>• {t('careers.graduates.benefits.financial.loans.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.financial.relocation.title')}</h4>
                      <p>• {t('careers.graduates.benefits.financial.relocation.item1')}</p>
                      <p>• {t('careers.graduates.benefits.financial.relocation.item2')}</p>
                      <p>• {t('careers.graduates.benefits.financial.relocation.item3')}</p>
                    </div>
                  </div>
                </div>

                {/* Professional Development */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.graduates.benefits.professional.title')}</h3>
                  <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.professional.learning.title')}</h4>
                      <p>• {t('careers.graduates.benefits.professional.learning.item1')}</p>
                      <p>• {t('careers.graduates.benefits.professional.learning.item2')}</p>
                      <p>• {t('careers.graduates.benefits.professional.learning.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.professional.skills.title')}</h4>
                      <p>• {t('careers.graduates.benefits.professional.skills.item1')}</p>
                      <p>• {t('careers.graduates.benefits.professional.skills.item2')}</p>
                      <p>• {t('careers.graduates.benefits.professional.skills.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.professional.growth.title')}</h4>
                      <p>• {t('careers.graduates.benefits.professional.growth.item1')}</p>
                      <p>• {t('careers.graduates.benefits.professional.growth.item2')}</p>
                      <p>• {t('careers.graduates.benefits.professional.growth.item3')}</p>
                    </div>
                  </div>
                </div>

                {/* Work-Life Balance */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.graduates.benefits.balance.title')}</h3>
                  <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.balance.flexible.title')}</h4>
                      <p>• {t('careers.graduates.benefits.balance.flexible.item1')}</p>
                      <p>• {t('careers.graduates.benefits.balance.flexible.item2')}</p>
                      <p>• {t('careers.graduates.benefits.balance.flexible.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.balance.leave.title')}</h4>
                      <p>• {t('careers.graduates.benefits.balance.leave.item1')}</p>
                      <p>• {t('careers.graduates.benefits.balance.leave.item2')}</p>
                      <p>• {t('careers.graduates.benefits.balance.leave.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.balance.wellness.title')}</h4>
                      <p>• {t('careers.graduates.benefits.balance.wellness.item1')}</p>
                      <p>• {t('careers.graduates.benefits.balance.wellness.item2')}</p>
                      <p>• {t('careers.graduates.benefits.balance.wellness.item3')}</p>
                    </div>
                  </div>
                </div>

                {/* Community and Culture */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.graduates.benefits.community.title')}</h3>
                  <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.community.inclusive.title')}</h4>
                      <p>• {t('careers.graduates.benefits.community.inclusive.item1')}</p>
                      <p>• {t('careers.graduates.benefits.community.inclusive.item2')}</p>
                      <p>• {t('careers.graduates.benefits.community.inclusive.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.community.teambuilding.title')}</h4>
                      <p>• {t('careers.graduates.benefits.community.teambuilding.item1')}</p>
                      <p>• {t('careers.graduates.benefits.community.teambuilding.item2')}</p>
                      <p>• {t('careers.graduates.benefits.community.teambuilding.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.benefits.community.support.title')}</h4>
                      <p>• {t('careers.graduates.benefits.community.support.item1')}</p>
                      <p>• {t('careers.graduates.benefits.community.support.item2')}</p>
                      <p>• {t('careers.graduates.benefits.community.support.item3')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Application Process */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.process.title')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Step 1 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.process.step1.title')}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.graduates.process.step1.description')}
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.process.step2.title')}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.graduates.process.step2.description')}
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.process.step3.title')}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.graduates.process.step3.description')}
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.process.step4.title')}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.graduates.process.step4.description')}
                  </p>
                </div>

                {/* Step 5 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    5
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.process.step5.title')}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.graduates.process.step5.description')}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Success Stories */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-8 md:p-12 text-center ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-indigo-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.success.title')}</h2>
                <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    {t('careers.graduates.success.paragraph1')}
                  </p>
                  <p>
                    {t('careers.graduates.success.paragraph2')}
                  </p>
                  <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                    "{t('careers.graduates.success.quote')}"
                  </p>
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
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graduates.cta.title')}</h3>
                <p className={`text-lg mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('careers.graduates.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/careers"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    {t('careers.graduates.cta.applyButton')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/careers/jobs"
                    className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 border ${
                      isDark 
                        ? 'bg-white/10 text-white hover:bg-white/20 border-white/20' 
                        : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20 border-gray-900/20'
                    }`}
                  >
                    {t('careers.graduates.cta.viewButton')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CareersFooter />
    </>
  );
}