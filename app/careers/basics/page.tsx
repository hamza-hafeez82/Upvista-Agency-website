"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CareersHeader from "../components/CareersHeader";
import CareersFooter from "../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../contexts/CareersLanguageContext";

export default function BasicsPage() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  
  const basicSections = [
    {
      title: t('careers.basics.about.title'),
      subtitle: t('careers.basics.about.subtitle'),
      description: t('careers.basics.about.description'),
      link: "/careers/basics/about",
      image: "/assets/upvista.png"
    },
    {
      title: t('careers.basics.philosophy.title'),
      subtitle: t('careers.basics.philosophy.subtitle'),
      description: t('careers.basics.philosophy.description'),
      link: "/careers/basics/philosophy",
      image: "/assets/careers/basic/coporate.jpeg"
    },
    {
      title: t('careers.basics.ceo.title'),
      subtitle: t('careers.basics.ceo.subtitle'),
      description: t('careers.basics.ceo.description'),
      link: "/careers/basics/ceo-message",
      image: "/assets/careers/basic/hamza-pic.jpeg"
    },
    {
      title: t('careers.basics.recruitment.title'),
      subtitle: t('careers.basics.recruitment.subtitle'),
      description: t('careers.basics.recruitment.description'),
      link: "/careers/basics/recruitment-importance",
      image: "/assets/careers/basic/job.jpeg"
    },
    {
      title: t('careers.basics.inclusive.title'),
      subtitle: t('careers.basics.inclusive.subtitle'),
      description: t('careers.basics.inclusive.description'),
      link: "/careers/basics/inclusive-hiring",
      image: "/assets/careers/basic/disabale.jpeg"
    },
    {
      title: t('careers.basics.graduates.title'),
      subtitle: t('careers.basics.graduates.subtitle'),
      description: t('careers.basics.graduates.description'),
      link: "/careers/basics/new-graduates",
      image: "/assets/careers/basic/new.jpeg"
    }
  ];

  return (
    <>
      <CareersHeader />
      
      <div className={`min-h-screen pt-20 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
      }`}>
        {/* Background Elements */}
        <div className={`absolute inset-0 ${
          isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50'
        }`}>
          {/* Galaxy Star Field */}
          <div className="absolute inset-0">
            {/* Bright White Stars */}
            <div className="absolute top-[10%] left-[5%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-70"></div>
            <div className="absolute top-[20%] right-[15%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-[30%] left-[25%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-[40%] right-[5%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-50" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-[50%] left-[10%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-75" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[60%] right-[20%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-65" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute top-[70%] left-[30%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-90" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-[80%] right-[10%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-55" style={{ animationDelay: '3.5s' }}></div>
            <div className="absolute top-[90%] left-[15%] w-1 h-1 bg-white rounded-full blur-[0.5px] animate-pulse opacity-85" style={{ animationDelay: '4s' }}></div>

            {/* Purple Stars */}
            <div className="absolute top-[15%] left-[40%] w-1 h-1 bg-purple-300 rounded-full blur-[0.5px] animate-pulse opacity-40" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute top-[25%] right-[30%] w-1 h-1 bg-purple-400 rounded-full blur-[0.5px] animate-pulse opacity-50" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute top-[35%] left-[50%] w-1 h-1 bg-purple-500 rounded-full blur-[0.5px] animate-pulse opacity-60" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute top-[45%] right-[40%] w-1 h-1 bg-purple-300 rounded-full blur-[0.5px] animate-pulse opacity-45" style={{ animationDelay: '1.7s' }}></div>
            <div className="absolute top-[55%] left-[60%] w-1 h-1 bg-purple-400 rounded-full blur-[0.5px] animate-pulse opacity-55" style={{ animationDelay: '2.2s' }}></div>
            <div className="absolute top-[65%] right-[50%] w-1 h-1 bg-purple-500 rounded-full blur-[0.5px] animate-pulse opacity-65" style={{ animationDelay: '2.7s' }}></div>
            <div className="absolute top-[75%] left-[70%] w-1 h-1 bg-purple-300 rounded-full blur-[0.5px] animate-pulse opacity-40" style={{ animationDelay: '3.2s' }}></div>
            <div className="absolute top-[85%] right-[60%] w-1 h-1 bg-purple-400 rounded-full blur-[0.5px] animate-pulse opacity-50" style={{ animationDelay: '3.7s' }}></div>

            {/* Pink Stars */}
            <div className="absolute top-[10%] right-[50%] w-1 h-1 bg-pink-300 rounded-full blur-[0.5px] animate-pulse opacity-30" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-[20%] left-[70%] w-1 h-1 bg-pink-400 rounded-full blur-[0.5px] animate-pulse opacity-40" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute top-[30%] right-[60%] w-1 h-1 bg-pink-500 rounded-full blur-[0.5px] animate-pulse opacity-50" style={{ animationDelay: '1.3s' }}></div>
            <div className="absolute top-[40%] left-[80%] w-1 h-1 bg-pink-300 rounded-full blur-[0.5px] animate-pulse opacity-35" style={{ animationDelay: '1.8s' }}></div>
            <div className="absolute top-[50%] right-[70%] w-1 h-1 bg-pink-400 rounded-full blur-[0.5px] animate-pulse opacity-45" style={{ animationDelay: '2.3s' }}></div>
            <div className="absolute top-[60%] left-[90%] w-1 h-1 bg-pink-500 rounded-full blur-[0.5px] animate-pulse opacity-55" style={{ animationDelay: '2.8s' }}></div>

            {/* Blue Stars */}
            <div className="absolute top-[5%] left-[80%] w-1 h-1 bg-blue-300 rounded-full blur-[0.5px] animate-pulse opacity-20" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute top-[15%] right-[80%] w-1 h-1 bg-blue-400 rounded-full blur-[0.5px] animate-pulse opacity-30" style={{ animationDelay: '0.9s' }}></div>
            <div className="absolute top-[25%] left-[90%] w-1 h-1 bg-blue-500 rounded-full blur-[0.5px] animate-pulse opacity-40" style={{ animationDelay: '1.4s' }}></div>

            {/* Yellow Stars */}
            <div className="absolute top-[70%] left-[5%] w-1 h-1 bg-yellow-300 rounded-full blur-[0.5px] animate-pulse opacity-25" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute top-[80%] right-[25%] w-1 h-1 bg-yellow-400 rounded-full blur-[0.5px] animate-pulse opacity-35" style={{ animationDelay: '1.1s' }}></div>
            <div className="absolute top-[90%] left-[35%] w-1 h-1 bg-yellow-500 rounded-full blur-[0.5px] animate-pulse opacity-45" style={{ animationDelay: '1.6s' }}></div>
          </div>
        </div>

        <main className="relative z-10 container mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('careers.basics.hero.title')}
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('careers.basics.hero.subtitle')}
            </p>
          </motion.div>

          {/* Basic Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {basicSections.map((section) => (
              <Link key={section.title} href={section.link} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer border-2 border-transparent ${
                    isDark 
                      ? 'bg-white group-hover:border-purple-200' 
                      : 'bg-white group-hover:border-indigo-300'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 ${
                      isDark ? 'group-hover:text-purple-700' : 'group-hover:text-indigo-700'
                    }`}>
                      {section.title}
                    </h3>
                    
                    <div className={`flex items-center transition-colors duration-300 mb-4 ${
                      isDark 
                        ? 'text-blue-600 group-hover:text-purple-600' 
                        : 'text-indigo-600 group-hover:text-indigo-700'
                    }`}>
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-2 transition-transform duration-300" />
                      <span className="font-medium">{section.subtitle}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {section.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center mt-20 mb-16"
          >
            <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-6 md:p-8 mx-4 md:mx-auto max-w-4xl ${
              isDark 
                ? 'from-purple-600/20 to-pink-600/20 border-purple-500/30' 
                : 'from-purple-600/10 to-pink-600/10 border-purple-500/20 bg-white/30'
            }`}>
              <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('careers.basics.cta.title')}
              </h3>
              <p className={`text-base md:text-lg mb-6 md:mb-8 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('careers.basics.cta.description1')}<br className="hidden sm:block" />
                {t('careers.basics.cta.description2')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Link href="/careers/apply" className="w-full sm:w-auto">
                  <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm sm:text-base rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                    {t('careers.basics.cta.applyButton')}
                  </button>
                </Link>
                <Link href="/careers/jobs" className="w-full sm:w-auto">
                  <button className={`w-full px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20' 
                      : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20 border border-gray-900/20'
                  }`}>
                    {t('careers.basics.cta.jobsButton')}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </main>
      </div>

      <CareersFooter />
    </>
  );
}
