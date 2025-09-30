'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CorporateValuesPage() {
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
              {t('values.badge')}
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-green-800 to-blue-700 bg-clip-text text-transparent'
            }`}>
              {t('values.title')}
            </h1>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.subtitle')}
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
              {t('values.innovation.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.innovation.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.innovation.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('values.integrity.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.integrity.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.integrity.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('values.collaboration.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.collaboration.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.collaboration.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('values.learning.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.learning.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.learning.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('values.client.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.client.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('values.client.content2')}
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

