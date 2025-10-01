'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PartnersPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <div className={`min-h-screen ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
    }`}>
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
              isDark
                ? 'bg-white/10 border border-white/20 text-indigo-200'
                : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-blue-500/70 text-white shadow-lg'
            }`}>
              <span className={`w-2 h-2 rounded-full mr-3 ${
                isDark ? 'bg-blue-400' : 'bg-white'
              }`}></span>
              {t('partners.badge')}
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight ${
              isDark
                ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
            }`}>
              {t('partners.title')}
            </h1>
            <p className={`text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed px-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`prose prose-lg max-w-none ${
            isDark ? 'prose-invert' : 'prose-gray'
          }`}>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.philosophy.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.philosophy.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.philosophy.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.ecosystem.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.ecosystem.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.ecosystem.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.value.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.value.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.value.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.opportunities.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.opportunities.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.opportunities.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.success.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.success.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.success.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.support.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.support.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.support.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.contact.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.contact.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.contact.content2')}
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
