"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import AssessmentPopup from "../../components/AssessmentPopup";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../../contexts/CareersLanguageContext";

export default function GraphicsDesignInternPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  const handleApplyClick = () => {
    setShowAssessmentPopup(true);
  };


  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100'}`}>
      <CareersHeader />
      
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <Link href="/careers/apply">
          <button className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
            {t('careers.graphicsIntern.backButton')}
          </button>
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span className="text-purple-300 text-sm font-medium">{t('careers.graphicsIntern.hero.badge')}</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('careers.graphicsIntern.hero.title')}
            </h1>
            
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('careers.graphicsIntern.hero.subtitle')}
            </p>
            
            <div className={`flex flex-wrap justify-center gap-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>{t('careers.graphicsIntern.hero.tags.remote')}</span>
              <span>{t('careers.graphicsIntern.hero.tags.internship')}</span>
              <span>{t('careers.graphicsIntern.hero.tags.entry')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.application.title')}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.application.step1.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.application.step1.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.application.step2.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.application.step2.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.application.step3.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.application.step3.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.application.step4.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.application.step4.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.application.step5.title')}</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.application.step5.desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Position Overview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.overview.title')}</h2>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('careers.graphicsIntern.overview.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Position Description */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.learning.title')}</h2>
            
            {/* Learning Objectives */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.learning.objectives.title')}</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.learning.objectives.item1')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.learning.objectives.item2')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.learning.objectives.item3')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.learning.objectives.item4')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.learning.objectives.item5')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.learning.objectives.item6')}</li>
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.responsibilities.title')}</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.responsibilities.item1')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.responsibilities.item2')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.responsibilities.item3')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.responsibilities.item4')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.responsibilities.item5')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.responsibilities.item6')}</li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.requirements.title')}</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.requirements.item1')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.requirements.item2')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.requirements.item3')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.requirements.item4')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.requirements.item5')}</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.requirements.item6')}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internship Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.details.title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Duration */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.details.duration.title')}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{t('careers.graphicsIntern.details.duration.desc')}</p>
              </div>

              {/* Location */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.details.location.title')}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('careers.graphicsIntern.details.location.desc')}</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className="mb-2">{t('careers.graphicsIntern.details.location.includes')}</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t('careers.graphicsIntern.details.location.item1')}</li>
                    <li>{t('careers.graphicsIntern.details.location.item2')}</li>
                    <li>{t('careers.graphicsIntern.details.location.item3')}</li>
                    <li>{t('careers.graphicsIntern.details.location.item4')}</li>
                  </ul>
                </div>
              </div>

              {/* Stipend */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.details.stipend.title')}</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('careers.graphicsIntern.details.stipend.desc')}</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className="mb-2">{t('careers.graphicsIntern.details.stipend.factors')}</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{t('careers.graphicsIntern.details.stipend.item1')}</li>
                    <li>{t('careers.graphicsIntern.details.stipend.item2')}</li>
                    <li>{t('careers.graphicsIntern.details.stipend.item3')}</li>
                    <li>{t('careers.graphicsIntern.details.stipend.item4')}</li>
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.details.benefits.title')}</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• {t('careers.graphicsIntern.details.benefits.item1')}</li>
                  <li>• {t('careers.graphicsIntern.details.benefits.item2')}</li>
                  <li>• {t('careers.graphicsIntern.details.benefits.item3')}</li>
                  <li>• {t('careers.graphicsIntern.details.benefits.item4')}</li>
                  <li>• {t('careers.graphicsIntern.details.benefits.item5')}</li>
                  <li>• {t('careers.graphicsIntern.details.benefits.item6')}</li>
                </ul>
              </div>
            </div>

            {/* Schedule */}
            <div className="mt-8">
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.graphicsIntern.details.schedule.title')}</h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                {t('careers.graphicsIntern.details.schedule.desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Button */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button 
              onClick={handleApplyClick}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              {t('careers.graphicsIntern.cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('careers.graphicsIntern.cta.desc')}</p>
          </motion.div>
        </div>
      </section>

      <CareersFooter />

      {/* Assessment Popup */}
      <AssessmentPopup
        isOpen={showAssessmentPopup}
        onClose={() => setShowAssessmentPopup(false)}
        
        position={t('careers.graphicsIntern.position')}
      />
    </div>
  );
}
