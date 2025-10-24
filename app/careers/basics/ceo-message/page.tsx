"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../../contexts/CareersLanguageContext";

export default function CEOMessagePage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  
  const tableOfContents = [
    { id: "welcome", title: t('careers.ceo.toc.welcome.title'), description: t('careers.ceo.toc.welcome.description') },
    { id: "journey", title: t('careers.ceo.toc.journey.title'), description: t('careers.ceo.toc.journey.description') },
    { id: "vision", title: t('careers.ceo.toc.vision.title'), description: t('careers.ceo.toc.vision.description') },
    { id: "team", title: t('careers.ceo.toc.team.title'), description: t('careers.ceo.toc.team.description') },
    { id: "innovation", title: t('careers.ceo.toc.innovation.title'), description: t('careers.ceo.toc.innovation.description') },
    { id: "values", title: t('careers.ceo.toc.values.title'), description: t('careers.ceo.toc.values.description') },
    { id: "future", title: t('careers.ceo.toc.future.title'), description: t('careers.ceo.toc.future.description') },
    { id: "join", title: t('careers.ceo.toc.join.title'), description: t('careers.ceo.toc.join.description') }
  ];

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
              {t('careers.ceo.back')}
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
              {t('careers.ceo.hero.title')}
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('careers.ceo.hero.subtitle')}
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* CEO Introduction */}
            <motion.section
              id="welcome"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.ceo.welcome.title')}</h2>
                  <p>
                    {t('careers.ceo.welcome.paragraph1')}
                  </p>
                  <p>
                    {t('careers.ceo.welcome.paragraph2')}
                  </p>
                </div>
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/hamza-pic.jpg"
                    alt={t('careers.ceo.welcome.imageAlt')}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </motion.section>

            {/* Table of Contents */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.ceo.toc.title')}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tableOfContents.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="group cursor-pointer"
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <div className={`flex items-center p-4 rounded-xl border transition-all duration-300 ${
                        isDark 
                          ? 'border-white/10 hover:border-purple-500/30 hover:bg-white/5' 
                          : 'border-gray-300/50 hover:border-indigo-500/40 hover:bg-white/60'
                      }`}>
                        <div className="flex-1">
                          <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                            isDark ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-indigo-600'
                          }`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm transition-colors ${
                            isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className={`w-5 h-5 transition-colors ${
                          isDark ? 'text-gray-400 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-indigo-600'
                        }`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Our Journey */}
            <motion.section
              id="journey"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.ceo.journey.title')}</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.ceo.journey.paragraph1')}
                </p>
                <p>
                  {t('careers.ceo.journey.paragraph2')}
                </p>
                <p>
                  {t('careers.ceo.journey.paragraph3')}
                </p>
              </div>
            </motion.section>

            {/* Our Vision for the Future */}
            <motion.section
              id="vision"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.ceo.vision.title')}</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.ceo.vision.paragraph1')}
                </p>
                <p>
                  {t('careers.ceo.vision.paragraph2')}
                </p>
                <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                  "{t('careers.ceo.vision.quote')}"
                </p>
              </div>
            </motion.section>

            {/* Building the Right Team */}
            <motion.section
              id="team"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.ceo.team.title')}</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.ceo.team.paragraph1')}
                </p>
                <p>
                  {t('careers.ceo.team.paragraph2')}
                </p>
                <p>
                  {t('careers.ceo.team.paragraph3')}
                </p>
                <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                  "{t('careers.ceo.team.quote')}"
                </p>
              </div>
            </motion.section>

            {/* Our Innovation Strategy */}
            <motion.section
              id="innovation"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.ceo.innovation.title')}</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.ceo.innovation.paragraph1')}
                </p>
                <p>
                  {t('careers.ceo.innovation.paragraph2')}
                </p>
                <p>
                  {t('careers.ceo.innovation.paragraph3')}
                </p>
              </div>
            </motion.section>

            {/* Our Commitment to Values */}
            <motion.section
              id="values"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.ceo.values.title')}</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.ceo.values.paragraph1')}
                </p>
                <p>
                  {t('careers.ceo.values.paragraph2')}
                </p>
                <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                  "{t('careers.ceo.values.quote')}"
                </p>
              </div>
            </motion.section>

            {/* Looking Ahead */}
            <motion.section
              id="future"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.ceo.future.title')}</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.ceo.future.paragraph1')}
                </p>
                <p>
                  {t('careers.ceo.future.paragraph2')}
                </p>
                <p>
                  {t('careers.ceo.future.paragraph3')}
                </p>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
              id="join"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-center"
            >
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-indigo-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.ceo.join.title')}</h3>
                <p className={`text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{t('careers.ceo.join.quote')}"
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/careers"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    {t('careers.ceo.join.button')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <CareersFooter />
    </>
  );
}