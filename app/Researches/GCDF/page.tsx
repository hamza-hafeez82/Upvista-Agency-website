"use client";

import React from 'react';
import Head from 'next/head';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function GCDFPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>Global Cyber Defense Fabric (GCDF) | Upvista Digital Research</title>
        <meta name="description" content="Global Cyber Defense Fabric (GCDF) - A comprehensive cybersecurity research initiative by Upvista Digital focusing on global cyber defense strategies and technologies." />
        <meta name="keywords" content="GCDF, Global Cyber Defense Fabric, Cybersecurity Research, Cyber Defense, Upvista Digital Research" />
        <meta property="og:title" content="Global Cyber Defense Fabric (GCDF) | Upvista Digital" />
        <meta property="og:description" content="Global Cyber Defense Fabric (GCDF) - A comprehensive cybersecurity research initiative focusing on global cyber defense strategies." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.upvistadigital.com/Researches/GCDF" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Global Cyber Defense Fabric (GCDF) | Upvista Digital" />
        <meta name="twitter:description" content="Global Cyber Defense Fabric (GCDF) - A comprehensive cybersecurity research initiative." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/Researches/GCDF" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ScholarlyArticle',
          'headline': 'Global Cyber Defense Fabric (GCDF)',
          'description': 'A comprehensive cybersecurity research initiative focusing on global cyber defense strategies and technologies',
          'url': 'https://www.upvistadigital.com/Researches/GCDF',
          'author': {
            '@type': 'Person',
            'name': 'Hamza Hafeez',
            'jobTitle': 'Founder & CEO'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Upvista Digital',
            'url': 'https://www.upvistadigital.com',
            'logo': 'https://www.upvistadigital.com/assets/icon.PNG'
          },
          'about': {
            '@type': 'Thing',
            'name': 'Cybersecurity',
            'description': 'Global cyber defense strategies and technologies'
          },
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
                'name': 'Researches',
                'item': 'https://www.upvistadigital.com/Researches'
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': 'GCDF',
                'item': 'https://www.upvistadigital.com/Researches/GCDF'
              }
            ]
          }
        }) }} />
      </Head>
      <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
        <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/Researches" 
            className={`inline-flex items-center text-sm mb-8 ${
              isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            ← {t('gcdf.backToResearch')}
          </Link>
          
          <div className="max-w-4xl">
            <div className={`text-sm font-semibold tracking-wider mb-4 ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              {t('gcdf.label')}
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('gcdf.title')}
            </h1>
            <p className={`text-xl leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('gcdf.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
      </div>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('gcdf.overview.title')}
              </h2>
              <div className={`space-y-4 text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <p>{t('gcdf.overview.p1')}</p>
                <p>{t('gcdf.overview.p2')}</p>
              </div>
            </div>

            <div className={`p-8 border ${
              isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'
            }`}>
              <h3 className={`text-sm font-semibold tracking-wider mb-6 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {t('gcdf.overview.status')}
              </h3>
              <div className="space-y-4">
                <div>
                  <div className={`text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {t('gcdf.overview.phase')}
                  </div>
                  <div className={`text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('gcdf.overview.phaseValue')}
                  </div>
                </div>
                <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                <div>
                  <div className={`text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {t('gcdf.overview.priority')}
                  </div>
                  <div className={`text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('gcdf.overview.priorityValue')}
                  </div>
                </div>
                <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                <div>
                  <div className={`text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {t('gcdf.overview.currentFocus')}
                  </div>
                  <div className={`text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('gcdf.overview.currentFocusValue')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
      </div>

      {/* Convergence of Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-16">
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('gcdf.convergence.title')}
            </h2>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('gcdf.convergence.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cybersecurity */}
            <div className={`p-8 border ${
              isDark ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className={`text-xs font-semibold tracking-wider mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                01
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('gcdf.tech.cybersecurity.title')}
              </h3>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('gcdf.tech.cybersecurity.description')}
              </p>
            </div>

            {/* Artificial Intelligence */}
            <div className={`p-8 border ${
              isDark ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className={`text-xs font-semibold tracking-wider mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                02
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('gcdf.tech.ai.title')}
              </h3>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('gcdf.tech.ai.description')}
              </p>
            </div>

            {/* Blockchain */}
            <div className={`p-8 border ${
              isDark ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className={`text-xs font-semibold tracking-wider mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                03
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('gcdf.tech.blockchain.title')}
              </h3>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('gcdf.tech.blockchain.description')}
              </p>
            </div>

            {/* Quantum Computing */}
            <div className={`p-8 border ${
              isDark ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className={`text-xs font-semibold tracking-wider mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                04
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('gcdf.tech.quantum.title')}
              </h3>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('gcdf.tech.quantum.description')}
              </p>
            </div>

            {/* Cloud Computing */}
            <div className={`p-8 border ${
              isDark ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className={`text-xs font-semibold tracking-wider mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                05
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('gcdf.tech.cloud.title')}
              </h3>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('gcdf.tech.cloud.description')}
              </p>
            </div>

            {/* Integration Layer */}
            <div className={`p-8 border ${
              isDark ? 'border-gray-800 bg-gray-900/50' : 'border-gray-300 bg-gray-50'
            }`}>
              <div className={`text-xs font-semibold tracking-wider mb-3 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                SYNTHESIS
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('gcdf.tech.integration.title')}
              </h3>
              <p className={`leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('gcdf.tech.integration.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
      </div>

      {/* Vision & Rationale */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('gcdf.vision.title')}
              </h2>
              <div className={`space-y-4 text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <p>{t('gcdf.vision.p1')}</p>
                <p>{t('gcdf.vision.p2')}</p>
                <p>{t('gcdf.vision.p3')}</p>
              </div>
            </div>

            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('gcdf.rationale.title')}
              </h2>
              <div className={`space-y-6 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <div>
                  <h3 className={`text-sm font-semibold tracking-wider mb-2 ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {t('gcdf.rationale.reason1.title')}
                  </h3>
                  <p className="leading-relaxed">{t('gcdf.rationale.reason1.description')}</p>
                </div>
                <div>
                  <h3 className={`text-sm font-semibold tracking-wider mb-2 ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {t('gcdf.rationale.reason2.title')}
                  </h3>
                  <p className="leading-relaxed">{t('gcdf.rationale.reason2.description')}</p>
                </div>
                <div>
                  <h3 className={`text-sm font-semibold tracking-wider mb-2 ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {t('gcdf.rationale.reason3.title')}
                  </h3>
                  <p className="leading-relaxed">{t('gcdf.rationale.reason3.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
      </div>

      {/* Current Status */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h2 className={`text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('gcdf.currentStatus.title')}
            </h2>
            <div className={`space-y-4 text-lg leading-relaxed mb-12 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <p>{t('gcdf.currentStatus.p1')}</p>
              <p>{t('gcdf.currentStatus.p2')}</p>
              <p>{t('gcdf.currentStatus.p3')}</p>
            </div>

            <div className={`p-8 border ${
              isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('gcdf.currentStatus.activities.title')}
              </h3>
              <ul className={`space-y-3 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('gcdf.currentStatus.activities.activity1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('gcdf.currentStatus.activities.activity2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('gcdf.currentStatus.activities.activity3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{t('gcdf.currentStatus.activities.activity4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
      </div>

      {/* Future Outlook */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('gcdf.future.title')}
            </h2>
            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('gcdf.future.description')}
            </p>
            <Link 
              href="/Researches/project-cortex"
              className={`inline-block px-6 py-3 border ${
                isDark 
                  ? 'border-gray-800 text-white hover:bg-gray-900' 
                  : 'border-gray-300 text-gray-900 hover:bg-gray-50'
              } transition-colors`}
            >
              {t('gcdf.future.projectCortexLink')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}

