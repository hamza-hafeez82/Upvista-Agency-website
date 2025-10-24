"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../../contexts/CareersLanguageContext";

export default function DevelopmentTeamPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  
  return (
    <>
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
                {t('careers.departments.development.hero.title')}
              </h1>
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12 ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {t('careers.departments.development.hero.subtitle')}
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
                  {t('careers.departments.applyNow')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/careers/jobs"
                  className={`inline-flex items-center px-8 py-4 bg-transparent font-semibold rounded-lg transition-all duration-200 border ${
                    isDark 
                      ? 'text-white hover:bg-white/10 border-white/30' 
                      : 'text-gray-900 hover:bg-purple-100 border-purple-400'
                  }`}
                >
                  {t('careers.departments.backToDepartments')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          {/* Content Sections */}
          <div className="space-y-24">
            {/* About the Department */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.about.title')}</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className={`space-y-8 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.departments.development.about.p1')}
                </p>
                <p>
                  {t('careers.departments.development.about.p2')}
                </p>
                <p>
                  {t('careers.departments.development.about.p3')}
                </p>
              </div>
            </motion.section>

            {/* What We Do */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.whatWeDo')}</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className="space-y-8">
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.activities.software.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.activities.software.desc')}
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.activities.architecture.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.activities.architecture.desc')}
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.activities.quality.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.activities.quality.desc')}
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.activities.innovation.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.activities.innovation.desc')}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Team Structure & Roles */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.teamStructure')}</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    titleKey: 'careers.departments.development.roles.senior.title',
                    descKey: 'careers.departments.development.roles.senior.desc'
                  },
                  {
                    titleKey: 'careers.departments.development.roles.engineer.title',
                    descKey: 'careers.departments.development.roles.engineer.desc'
                  },
                  {
                    titleKey: 'careers.departments.development.roles.frontend.title',
                    descKey: 'careers.departments.development.roles.frontend.desc'
                  },
                  {
                    titleKey: 'careers.departments.development.roles.backend.title',
                    descKey: 'careers.departments.development.roles.backend.desc'
                  },
                  {
                    titleKey: 'careers.departments.development.roles.fullstack.title',
                    descKey: 'careers.departments.development.roles.fullstack.desc'
                  },
                  {
                    titleKey: 'careers.departments.development.roles.devops.title',
                    descKey: 'careers.departments.development.roles.devops.desc'
                  },
                  {
                    titleKey: 'careers.departments.development.roles.techlead.title',
                    descKey: 'careers.departments.development.roles.techlead.desc'
                  },
                  {
                    titleKey: 'careers.departments.development.roles.mobile.title',
                    descKey: 'careers.departments.development.roles.mobile.desc'
                  },
                  {
                    titleKey: 'careers.departments.development.roles.aiml.title',
                    descKey: 'careers.departments.development.roles.aiml.desc'
                  }
                ].map((role, index) => (
                  <div key={index} className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10' 
                    : 'bg-white/60 border-purple-300/50 hover:border-purple-500/60 hover:bg-white/80'
                }`}>
                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{t(role.titleKey)}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t(role.descKey)}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Work Culture & Environment */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.workCulture')}</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.culture.remote.title')}</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.culture.remote.p1')}
                  </p>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.culture.remote.p2')}
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.culture.collaborative.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.culture.collaborative.desc')}
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.culture.innovation.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.culture.innovation.desc')}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Career Development */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.careerDevelopment')}</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.career.learning.title')}</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.career.learning.desc')}
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.career.paths.title')}</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.career.paths.desc')}
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.career.onboarding.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.departments.development.career.onboarding.desc')}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* What We Expect */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.whatWeExpect')}</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className="space-y-6">
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.expectations.technical.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.departments.development.expectations.technical.desc')}</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.expectations.learning.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.departments.development.expectations.learning.desc')}</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.expectations.collaboration.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.departments.development.expectations.collaboration.desc')}</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.expectations.problemSolving.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.departments.development.expectations.problemSolving.desc')}</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.expectations.quality.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.departments.development.expectations.quality.desc')}</p>
                </div>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center"
            >
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-12 ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-pink-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.departments.development.cta.title')}</h3>
                <p className={`text-xl mb-10 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('careers.departments.development.cta.desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/careers/apply"
                    className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                  >
                    {t('careers.departments.applyNow')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/careers/jobs"
                    className={`inline-flex items-center px-10 py-4 font-semibold rounded-lg transition-all duration-200 border ${
                      isDark 
                        ? 'bg-white/10 text-white hover:bg-white/20 border-white/20' 
                        : 'bg-white/30 text-gray-900 hover:bg-white/50 border-purple-400'
                    }`}
                  >
                    {t('careers.departments.viewAllDepartments')}
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
