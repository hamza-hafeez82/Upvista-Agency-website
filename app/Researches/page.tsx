"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ResearchesPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('research.hero.title')}
            </h1>
            <p className={`text-xl leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('research.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
      </div>

      {/* Research Domain 1: Client Experience & Problem Solving */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className={`text-sm font-semibold tracking-wider mb-4 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                01 / RESEARCH DOMAIN
              </div>
              <h2 className={`text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('research.clientExperience.title')}
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('research.clientExperience.description')}
              </p>
            </div>

            <div className={`p-8 border ${
              isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('research.clientExperience.caseStudy.title')}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {t('research.clientExperience.caseStudy.challenge')}
                  </h4>
                  <ul className={`space-y-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t('research.clientExperience.caseStudy.challenge1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t('research.clientExperience.caseStudy.challenge2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t('research.clientExperience.caseStudy.challenge3')}</span>
                    </li>
                  </ul>
                </div>

                <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}></div>

                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {t('research.clientExperience.caseStudy.solution')}
                  </h4>
                  <ul className={`space-y-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t('research.clientExperience.caseStudy.solution1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t('research.clientExperience.caseStudy.solution2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t('research.clientExperience.caseStudy.solution3')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{t('research.clientExperience.caseStudy.solution4')}</span>
                    </li>
                  </ul>
                </div>

                <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}></div>

                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {t('research.clientExperience.caseStudy.impact')}
                  </h4>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    {t('research.clientExperience.caseStudy.impactDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('research.clientExperience.rndDepartment')}
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
      </div>

      {/* Research Domain 2: Future Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-16">
            <div className={`text-sm font-semibold tracking-wider mb-4 ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              02 / RESEARCH DOMAIN
            </div>
            <h2 className={`text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('research.futureTech.title')}
            </h2>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('research.futureTech.description')}
            </p>
          </div>

          {/* Research Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Cortex */}
            <Link href="/Researches/project-cortex" className={`group p-8 border transition-all ${
              isDark 
                ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
            }`}>
              <div className={`text-xs font-semibold tracking-wider mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                FLAGSHIP PROJECT
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('research.futureTech.projectCortex.title')}
              </h3>
              <p className={`leading-relaxed mb-6 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('research.futureTech.projectCortex.description')}
              </p>
              <div className={`text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-900'
              }`}>
                {t('research.futureTech.projectCortex.vision')}
              </div>
              <div className={`mt-4 text-sm ${
                isDark ? 'text-gray-500 group-hover:text-gray-400' : 'text-gray-500 group-hover:text-gray-700'
              } transition-colors`}>
                {t('research.learnMore')} →
              </div>
            </Link>

            {/* Global Cyber Defence Fabric */}
            <Link href="/Researches/GCDF" className={`group p-8 border transition-all ${
              isDark 
                ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
            }`}>
              <div className={`text-xs font-semibold tracking-wider mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                RESEARCH INITIATIVE
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('research.futureTech.cyberDefence.title')}
              </h3>
              <p className={`leading-relaxed mb-6 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('research.futureTech.cyberDefence.description')}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className={`text-xs font-semibold ${
                  isDark ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {t('research.futureTech.cyberDefence.technologies')}
                </div>
                <div className={`flex flex-wrap gap-2 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <span>Cybersecurity</span>
                  <span>•</span>
                  <span>Artificial Intelligence</span>
                  <span>•</span>
                  <span>Blockchain</span>
                  <span>•</span>
                  <span>Quantum Computing</span>
                  <span>•</span>
                  <span>Cloud Computing</span>
                </div>
              </div>

              <div className={`text-sm ${
                isDark ? 'text-gray-500 group-hover:text-gray-400' : 'text-gray-500 group-hover:text-gray-700'
              } transition-colors`}>
                {t('research.learnMore')} →
              </div>
            </Link>

            {/* AGI Research */}
            <Link href="/Researches/AGI" className={`group p-8 border transition-all ${
              isDark 
                ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
            }`}>
              <div className={`text-xs font-semibold tracking-wider mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                ADVANCED RESEARCH
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('research.futureTech.agi.title')}
              </h3>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('research.futureTech.agi.description')}
              </p>
              <div className={`mt-4 text-sm ${
                isDark ? 'text-gray-500 group-hover:text-gray-400' : 'text-gray-500 group-hover:text-gray-700'
              } transition-colors`}>
                {t('research.learnMore')} →
              </div>
            </Link>

            {/* Quantum Computing */}
            <div className={`p-8 border ${
              isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'
            }`}>
              <div className={`text-xs font-semibold tracking-wider mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                EMERGING TECHNOLOGY
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('research.futureTech.quantum.title')}
              </h3>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('research.futureTech.quantum.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
      </div>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('research.mission.title')}
            </h2>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('research.mission.description')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

