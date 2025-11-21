'use client';

import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HumanRightsPolicyPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>Human Rights Policy | Human Rights Commitment | Upvista Digital</title>
        <meta name="description" content="Learn about Upvista Digital's commitment to human rights, workplace equality, diversity, inclusion, and ethical business practices that respect human dignity." />
        <meta name="keywords" content="Human Rights Policy, Workplace Equality, Diversity and Inclusion, Human Rights Commitment, Ethical Business Practices, Corporate Human Rights" />
        <meta property="og:title" content="Human Rights Policy | Upvista Digital" />
        <meta property="og:description" content="Learn about Upvista Digital's commitment to human rights, workplace equality, and diversity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/company/sustainability/human-rights" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Human Rights Policy | Upvista Digital" />
        <meta name="twitter:description" content="Learn about Upvista Digital's commitment to human rights." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/company/sustainability/human-rights" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Human Rights Policy - Upvista Digital',
          'description': 'Learn about Upvista Digital\'s commitment to human rights, workplace equality, diversity, inclusion, and ethical business practices.',
          'url': 'https://www.upvistadigital.com/company/sustainability/human-rights',
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.upvistadigital.com' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Company', 'item': 'https://www.upvistadigital.com/company' },
              { '@type': 'ListItem', 'position': 3, 'name': 'Sustainability', 'item': 'https://www.upvistadigital.com/company/sustainability' },
              { '@type': 'ListItem', 'position': 4, 'name': 'Human Rights', 'item': 'https://www.upvistadigital.com/company/sustainability/human-rights' }
            ]
          }
        }) }} />
      </Head>
      <div className={`min-h-screen ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
    }`}>
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
              isDark 
                ? 'bg-white/10 border border-white/20 text-indigo-200'
                : 'bg-gradient-to-r from-green-600/90 to-blue-600/90 border border-green-500/70 text-white shadow-lg'
            }`}>
              <span className={`w-2 h-2 rounded-full mr-3 ${
                isDark ? 'bg-green-400' : 'bg-white'
              }`}></span>
              {t('humanRights.badge')}
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-green-800 to-blue-700 bg-clip-text text-transparent'
            }`}>
              {t('humanRights.title')}
            </h1>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`prose prose-lg max-w-none ${
            isDark ? 'prose-invert' : 'prose-gray'
          }`}>
            
            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('humanRights.universal.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.universal.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.universal.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('humanRights.workplace.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.workplace.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.workplace.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('humanRights.privacy.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.privacy.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.privacy.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('humanRights.community.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.community.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.community.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('humanRights.ethical.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.ethical.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.ethical.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('humanRights.implementation.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.implementation.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('humanRights.implementation.content2')}
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}

