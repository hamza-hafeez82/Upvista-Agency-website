"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CareersHeader from "../components/CareersHeader";
import CareersFooter from "../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../contexts/CareersLanguageContext";

export default function BusinessPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  
  return (
    <>
      <CareersHeader />
      
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white' 
          : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 text-gray-900'
      }`}>
        {/* Hero Section with Video Background */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-screen w-full overflow-hidden">
          {/* Video Background - Hidden on mobile, visible on md+ screens */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
              key={isDark ? 'dark-video' : 'light-video'}
            >
              <source src={isDark ? "/assets/careers/company-video3.mp4" : "/assets/careers/upvista.mp4"} type="video/mp4" />
            </video>
          </div>
          
          {/* Hero Content - Mobile Only */}
          <div className="absolute inset-0 z-10 flex items-center justify-center md:hidden pt-20">
            <div className="text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`text-4xl font-bold pt-14 pb-4 bg-clip-text text-transparent drop-shadow-2xl ${
                  isDark 
                    ? 'bg-gradient-to-r from-white via-purple-200 to-pink-200' 
                    : 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800'
                }`}
              >
                {t('careers.business.hero.title')}
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-20 relative z-10">
          
          {/* Content Sections */}
          <div className="space-y-20">
            
            {/* Executive Summary */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('careers.business.summary.title')}
                </h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.business.summary.paragraph1')}
                </p>
                <p>
                  {t('careers.business.summary.paragraph2')}
                </p>
                <p>
                  {t('careers.business.summary.paragraph3')}
                </p>
              </div>
            </motion.section>

            {/* Industry Analysis */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('careers.business.industry.title')}
                </h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.business.industry.paragraph1')}
                </p>
                <p>
                  {t('careers.business.industry.paragraph2')}
                </p>
                <p>
                  {t('careers.business.industry.paragraph3')}
                </p>
                <p>
                  {t('careers.business.industry.paragraph4')}
                </p>
              </div>
            </motion.section>

            {/* Company Description */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('careers.business.company.title')}
                </h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className={`space-y-8 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.company.vision.title')}</h3>
                  <p>
                    {t('careers.business.company.vision.content')}
                  </p>
                    </div>
                    <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.company.mission.title')}</h3>
                  <p>
                    {t('careers.business.company.mission.content')}
                  </p>
                    </div>
                    <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.company.values.title')}</h3>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>{t('careers.business.company.values.innovation')}</li>
                    <li>{t('careers.business.company.values.excellence')}</li>
                    <li>{t('careers.business.company.values.collaboration')}</li>
                    <li>{t('careers.business.company.values.social')}</li>
                    <li>{t('careers.business.company.values.literacy')}</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* What We Offer */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('careers.business.offer.title')}
                </h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className="space-y-6">
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-400' : 'border-purple-500'}`}>
                  <h3 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.offer.services.title')}</h3>
                  <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.business.offer.services.item1')}</p>
                    <p>• {t('careers.business.offer.services.item2')}</p>
                    <p>• {t('careers.business.offer.services.item3')}</p>
                    <p>• {t('careers.business.offer.services.item4')}</p>
                    </div>
                    </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-indigo-400' : 'border-indigo-500'}`}>
                  <h3 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.offer.products.title')}</h3>
                  <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.business.offer.products.item1')}</p>
                    <p>• {t('careers.business.offer.products.item2')}</p>
                    <p>• {t('careers.business.offer.products.item3')}</p>
                    <p>• {t('careers.business.offer.products.item4')}</p>
                    <p>• {t('careers.business.offer.products.item5')}</p>
                    </div>
                    </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-pink-400' : 'border-pink-500'}`}>
                  <h3 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.offer.research.title')}</h3>
                  <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• {t('careers.business.offer.research.item1')}</p>
                    <p>• {t('careers.business.offer.research.item2')}</p>
                    <p>• {t('careers.business.offer.research.item3')}</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Target Markets */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('careers.business.markets.title')}
                </h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className={`grid md:grid-cols-2 gap-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className={`p-6 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.markets.ecommerce.title')}</h3>
                  <p>{t('careers.business.markets.ecommerce.content')}</p>
                    </div>
                <div className={`p-6 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.markets.saas.title')}</h3>
                  <p>{t('careers.business.markets.saas.content')}</p>
                    </div>
                <div className={`p-6 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.markets.healthcare.title')}</h3>
                  <p>{t('careers.business.markets.healthcare.content')}</p>
                    </div>
                <div className={`p-6 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.markets.edtech.title')}</h3>
                  <p>{t('careers.business.markets.edtech.content')}</p>
                    </div>
                <div className={`p-6 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.markets.fintech.title')}</h3>
                  <p>{t('careers.business.markets.fintech.content')}</p>
                    </div>
                <div className={`p-6 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.markets.creative.title')}</h3>
                  <p>{t('careers.business.markets.creative.content')}</p>
                </div>
              </div>
            </motion.section>

            {/* Competitive Advantage */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('careers.business.advantage.title')}
                </h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.business.advantage.paragraph1')}
                </p>
                <p>
                  {t('careers.business.advantage.paragraph2')}
                    </p>
                    <p>
                  {t('careers.business.advantage.paragraph3')}
                    </p>
                  </div>
            </motion.section>

            {/* Technology & Development */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('careers.business.technology.title')}
                </h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className={`space-y-8 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.technology.approach.title')}</h3>
                    <p>
                    {t('careers.business.technology.approach.content')}
                    </p>
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.technology.cloud.title')}</h3>
                    <p>
                    {t('careers.business.technology.cloud.content')}
                    </p>
                  </div>
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.business.technology.research.title')}</h3>
                    <p>
                    {t('careers.business.technology.research.content')}
                    </p>
                </div>
              </div>
            </motion.section>

            {/* Team & Culture */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('careers.business.team.title')}
                </h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  {t('careers.business.team.paragraph1')}
                </p>
                <p>
                  {t('careers.business.team.paragraph2')}
                </p>
                <p>
                  {t('careers.business.team.paragraph3')}
                </p>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-12 ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white/40 border-purple-300/50'
              }`}>
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('careers.business.cta.title')}
                </h3>
                <p className={`text-xl mb-10 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('careers.business.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/careers"
                    className={`inline-flex items-center px-10 py-4 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg ${
                      isDark 
                        ? 'bg-white text-slate-900 hover:bg-gray-100' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    }`}
                  >
                    {t('careers.business.cta.explore')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/careers/jobs"
                    className={`inline-flex items-center px-10 py-4 font-semibold rounded-lg transition-all duration-200 border ${
                      isDark 
                        ? 'bg-transparent text-white hover:bg-white/10 border-white/30' 
                        : 'bg-transparent text-gray-900 hover:bg-purple-100 border-purple-400'
                    }`}
                  >
                    {t('careers.business.cta.positions')}
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
