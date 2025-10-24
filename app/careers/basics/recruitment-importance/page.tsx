"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../../contexts/CareersLanguageContext";

export default function RecruitmentImportancePage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  
  return (
    <>
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
              {t('careers.recruitment.back')}
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
              {t('careers.recruitment.hero.title')}
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('careers.recruitment.hero.subtitle')}
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Our Recruitment Philosophy */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.recruitment.philosophy.title')}</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.recruitment.philosophy.paragraph1')}
                </p>
                <p>
                  {t('careers.recruitment.philosophy.paragraph2')}
                </p>
                <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                  "{t('careers.recruitment.philosophy.quote')}"
                </p>
              </div>
            </motion.section>

            {/* What We Value Most */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.recruitment.values.title')}</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Values Alignment */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.recruitment.values.alignment.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.recruitment.values.alignment.description')}
                  </p>
                </div>

                {/* Growth Mindset */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.recruitment.values.growth.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.recruitment.values.growth.description')}
                  </p>
                </div>

                {/* Collaborative Spirit */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.recruitment.values.collaborative.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.recruitment.values.collaborative.description')}
                  </p>
                </div>

                {/* Results Orientation */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.recruitment.values.results.title')}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('careers.recruitment.values.results.description')}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Our Evaluation Framework */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.recruitment.framework.title')}</h2>
              
              <div className="space-y-8">
                {/* Technical Competence */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.recruitment.framework.technical.title')}</h3>
                  <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('careers.recruitment.framework.technical.description')}</p>
                  <div className={`grid md:grid-cols-2 gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.recruitment.framework.technical.item1')}</p>
                    <p>• {t('careers.recruitment.framework.technical.item2')}</p>
                    <p>• {t('careers.recruitment.framework.technical.item3')}</p>
                    <p>• {t('careers.recruitment.framework.technical.item4')}</p>
                  </div>
                </div>

                {/* Cultural Fit */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.recruitment.framework.cultural.title')}</h3>
                  <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('careers.recruitment.framework.cultural.description')}</p>
                  <div className={`grid md:grid-cols-2 gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.recruitment.framework.cultural.item1')}</p>
                    <p>• {t('careers.recruitment.framework.cultural.item2')}</p>
                    <p>• {t('careers.recruitment.framework.cultural.item3')}</p>
                    <p>• {t('careers.recruitment.framework.cultural.item4')}</p>
                  </div>
                </div>

                {/* Growth Potential */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.recruitment.framework.growth.title')}</h3>
                  <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('careers.recruitment.framework.growth.description')}</p>
                  <div className={`grid md:grid-cols-2 gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.recruitment.framework.growth.item1')}</p>
                    <p>• {t('careers.recruitment.framework.growth.item2')}</p>
                    <p>• {t('careers.recruitment.framework.growth.item3')}</p>
                    <p>• {t('careers.recruitment.framework.growth.item4')}</p>
                  </div>
                </div>

                {/* Impact Orientation */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.recruitment.framework.impact.title')}</h3>
                  <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('careers.recruitment.framework.impact.description')}</p>
                  <div className={`grid md:grid-cols-2 gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.recruitment.framework.impact.item1')}</p>
                    <p>• {t('careers.recruitment.framework.impact.item2')}</p>
                    <p>• {t('careers.recruitment.framework.impact.item3')}</p>
                    <p>• {t('careers.recruitment.framework.impact.item4')}</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Our Commitment */}
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
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.recruitment.commitment.title')}</h2>
                <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    {t('careers.recruitment.commitment.paragraph1')}
                  </p>
                  <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                    "{t('careers.recruitment.commitment.quote')}"
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
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.recruitment.cta.title')}</h3>
                <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('careers.recruitment.cta.description')}
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {t('careers.recruitment.cta.button')}
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