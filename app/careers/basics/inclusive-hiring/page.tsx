"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../../contexts/CareersLanguageContext";

export default function InclusiveHiringPage() {
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
              {t('careers.inclusive.back')}
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
              {t('careers.inclusive.hero.title')}
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('careers.inclusive.hero.subtitle')}
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Our Commitment */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.commitment.title')}</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.inclusive.commitment.paragraph1')}
                </p>
                <p>
                  {t('careers.inclusive.commitment.paragraph2')}
                </p>
                <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                  "{t('careers.inclusive.commitment.quote')}"
                </p>
              </div>
            </motion.section>

            {/* Disability Categories We Support */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.categories.title')}</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Physical Disabilities */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.categories.physical.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.inclusive.categories.physical.item1')}</p>
                    <p>• {t('careers.inclusive.categories.physical.item2')}</p>
                    <p>• {t('careers.inclusive.categories.physical.item3')}</p>
                    <p>• {t('careers.inclusive.categories.physical.item4')}</p>
                    <p>• {t('careers.inclusive.categories.physical.item5')}</p>
                  </div>
                </div>

                {/* Sensory Disabilities */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.categories.sensory.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.inclusive.categories.sensory.item1')}</p>
                    <p>• {t('careers.inclusive.categories.sensory.item2')}</p>
                    <p>• {t('careers.inclusive.categories.sensory.item3')}</p>
                    <p>• {t('careers.inclusive.categories.sensory.item4')}</p>
                    <p>• {t('careers.inclusive.categories.sensory.item5')}</p>
                  </div>
                </div>

                {/* Cognitive and Learning Disabilities */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.categories.learning.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.inclusive.categories.learning.item1')}</p>
                    <p>• {t('careers.inclusive.categories.learning.item2')}</p>
                    <p>• {t('careers.inclusive.categories.learning.item3')}</p>
                    <p>• {t('careers.inclusive.categories.learning.item4')}</p>
                    <p>• {t('careers.inclusive.categories.learning.item5')}</p>
                  </div>
                </div>

                {/* Mental Health Conditions */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.categories.mental.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.inclusive.categories.mental.item1')}</p>
                    <p>• {t('careers.inclusive.categories.mental.item2')}</p>
                    <p>• {t('careers.inclusive.categories.mental.item3')}</p>
                    <p>• {t('careers.inclusive.categories.mental.item4')}</p>
                    <p>• {t('careers.inclusive.categories.mental.item5')}</p>
                  </div>
                </div>

                {/* Chronic Health Conditions */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.categories.chronic.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.inclusive.categories.chronic.item1')}</p>
                    <p>• {t('careers.inclusive.categories.chronic.item2')}</p>
                    <p>• {t('careers.inclusive.categories.chronic.item3')}</p>
                    <p>• {t('careers.inclusive.categories.chronic.item4')}</p>
                    <p>• {t('careers.inclusive.categories.chronic.item5')}</p>
                  </div>
                </div>

                {/* Invisible Disabilities */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.categories.invisible.title')}</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.inclusive.categories.invisible.item1')}</p>
                    <p>• {t('careers.inclusive.categories.invisible.item2')}</p>
                    <p>• {t('careers.inclusive.categories.invisible.item3')}</p>
                    <p>• {t('careers.inclusive.categories.invisible.item4')}</p>
                    <p>• {t('careers.inclusive.categories.invisible.item5')}</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Incentives and Benefits */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.title')}</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Financial Incentives */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.benefits.financial.title')}</h3>
                  <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.financial.compensation.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.financial.compensation.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.financial.compensation.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.financial.compensation.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.financial.tax.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.financial.tax.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.financial.tax.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.financial.tax.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.financial.equipment.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.financial.equipment.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.financial.equipment.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.financial.equipment.item3')}</p>
                    </div>
                  </div>
                </div>

                {/* Health and Wellness Benefits */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.benefits.health.title')}</h3>
                  <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.health.coverage.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.health.coverage.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.health.coverage.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.health.coverage.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.health.disability.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.health.disability.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.health.disability.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.health.disability.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.health.wellness.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.health.wellness.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.health.wellness.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.health.wellness.item3')}</p>
                    </div>
                  </div>
                </div>

                {/* Work-Life Balance */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.benefits.balance.title')}</h3>
                  <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.balance.flexible.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.balance.flexible.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.balance.flexible.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.balance.flexible.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.balance.leave.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.balance.leave.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.balance.leave.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.balance.leave.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.balance.support.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.balance.support.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.balance.support.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.balance.support.item3')}</p>
                    </div>
                  </div>
                </div>

                {/* Career Development */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.benefits.development.title')}</h3>
                  <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.development.growth.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.development.growth.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.development.growth.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.development.growth.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.development.learning.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.development.learning.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.development.learning.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.development.learning.item3')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.benefits.development.skills.title')}</h4>
                      <p>• {t('careers.inclusive.benefits.development.skills.item1')}</p>
                      <p>• {t('careers.inclusive.benefits.development.skills.item2')}</p>
                      <p>• {t('careers.inclusive.benefits.development.skills.item3')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Care and Support Systems */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.support.title')}</h2>
              
              <div className="space-y-8">
                {/* Accommodation Support */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.support.accommodation.title')}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.support.accommodation.application.title')}</h4>
                      <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• {t('careers.inclusive.support.accommodation.application.item1')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.application.item2')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.application.item3')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.application.item4')}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.support.accommodation.interview.title')}</h4>
                      <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• {t('careers.inclusive.support.accommodation.interview.item1')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.interview.item2')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.interview.item3')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.interview.item4')}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.support.accommodation.workplace.title')}</h4>
                      <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• {t('careers.inclusive.support.accommodation.workplace.item1')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.workplace.item2')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.workplace.item3')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.workplace.item4')}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.support.accommodation.ongoing.title')}</h4>
                      <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• {t('careers.inclusive.support.accommodation.ongoing.item1')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.ongoing.item2')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.ongoing.item3')}</p>
                        <p>• {t('careers.inclusive.support.accommodation.ongoing.item4')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accessibility and Technology */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.support.accessibility.title')}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.support.accessibility.assistive.title')}</h4>
                      <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• {t('careers.inclusive.support.accessibility.assistive.item1')}</p>
                        <p>• {t('careers.inclusive.support.accessibility.assistive.item2')}</p>
                        <p>• {t('careers.inclusive.support.accessibility.assistive.item3')}</p>
                        <p>• {t('careers.inclusive.support.accessibility.assistive.item4')}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.support.accessibility.digital.title')}</h4>
                      <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• {t('careers.inclusive.support.accessibility.digital.item1')}</p>
                        <p>• {t('careers.inclusive.support.accessibility.digital.item2')}</p>
                        <p>• {t('careers.inclusive.support.accessibility.digital.item3')}</p>
                        <p>• {t('careers.inclusive.support.accessibility.digital.item4')}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.support.accessibility.physical.title')}</h4>
                      <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• {t('careers.inclusive.support.accessibility.physical.item1')}</p>
                        <p>• {t('careers.inclusive.support.accessibility.physical.item2')}</p>
                        <p>• {t('careers.inclusive.support.accessibility.physical.item3')}</p>
                        <p>• {t('careers.inclusive.support.accessibility.physical.item4')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Development Opportunities */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.development.title')}</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Professional Development */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.development.professional.title')}</h3>
                  <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.development.professional.training.title')}</h4>
                      <p>• {t('careers.inclusive.development.professional.training.item1')}</p>
                      <p>• {t('careers.inclusive.development.professional.training.item2')}</p>
                      <p>• {t('careers.inclusive.development.professional.training.item3')}</p>
                      <p>• {t('careers.inclusive.development.professional.training.item4')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.development.professional.mentorship.title')}</h4>
                      <p>• {t('careers.inclusive.development.professional.mentorship.item1')}</p>
                      <p>• {t('careers.inclusive.development.professional.mentorship.item2')}</p>
                      <p>• {t('careers.inclusive.development.professional.mentorship.item3')}</p>
                      <p>• {t('careers.inclusive.development.professional.mentorship.item4')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.development.professional.networking.title')}</h4>
                      <p>• {t('careers.inclusive.development.professional.networking.item1')}</p>
                      <p>• {t('careers.inclusive.development.professional.networking.item2')}</p>
                      <p>• {t('careers.inclusive.development.professional.networking.item3')}</p>
                      <p>• {t('careers.inclusive.development.professional.networking.item4')}</p>
                    </div>
                  </div>
                </div>

                {/* Career Advancement */}
                <div className={`p-6 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{t('careers.inclusive.development.advancement.title')}</h3>
                  <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.development.advancement.growth.title')}</h4>
                      <p>• {t('careers.inclusive.development.advancement.growth.item1')}</p>
                      <p>• {t('careers.inclusive.development.advancement.growth.item2')}</p>
                      <p>• {t('careers.inclusive.development.advancement.growth.item3')}</p>
                      <p>• {t('careers.inclusive.development.advancement.growth.item4')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.development.advancement.leadership.title')}</h4>
                      <p>• {t('careers.inclusive.development.advancement.leadership.item1')}</p>
                      <p>• {t('careers.inclusive.development.advancement.leadership.item2')}</p>
                      <p>• {t('careers.inclusive.development.advancement.leadership.item3')}</p>
                      <p>• {t('careers.inclusive.development.advancement.leadership.item4')}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.development.advancement.recognition.title')}</h4>
                      <p>• {t('careers.inclusive.development.advancement.recognition.item1')}</p>
                      <p>• {t('careers.inclusive.development.advancement.recognition.item2')}</p>
                      <p>• {t('careers.inclusive.development.advancement.recognition.item3')}</p>
                      <p>• {t('careers.inclusive.development.advancement.recognition.item4')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Our Success Stories */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-8 md:p-12 text-center ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-indigo-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.impact.title')}</h2>
                <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    {t('careers.inclusive.impact.paragraph1')}
                  </p>
                  <p>
                    {t('careers.inclusive.impact.paragraph2')}
                  </p>
                  <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                    "{t('careers.inclusive.impact.quote')}"
                  </p>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center"
            >
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-indigo-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.inclusive.cta.title')}</h3>
                <p className={`text-lg mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('careers.inclusive.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/careers"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    {t('careers.inclusive.cta.applyButton')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 border ${
                      isDark 
                        ? 'bg-white/10 text-white hover:bg-white/20 border-white/20' 
                        : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20 border-gray-900/20'
                    }`}
                  >
                    {t('careers.inclusive.cta.contactButton')}
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