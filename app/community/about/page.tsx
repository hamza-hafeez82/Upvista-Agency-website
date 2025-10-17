"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CommunityAboutPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      <Header />
      
      {/* Hero Section */}
      <div className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'
            }`}>
              {t('community.hero.title')}
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('community.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`py-16 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-gray-900/50' : 'bg-white/70 backdrop-blur-sm'
      }`}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Our Vision */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
{t('community.vision.title')}
              </h2>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.vision.p1')}
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.vision.p2')}
              </p>
            </div>

            {/* Open Source Philosophy */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
{t('community.philosophy.title')}
              </h2>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.philosophy.p1')}
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.philosophy.p2')}
              </p>
            </div>

            {/* Global Collaboration */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
{t('community.collaboration.title')}
              </h2>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.collaboration.p1')}
              </p>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.collaboration.p2')}
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.collaboration.p3')}
              </p>
            </div>

            {/* Learning & Growth */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
{t('community.learning.title')}
              </h2>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.learning.p1')}
              </p>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.learning.p2')}
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.learning.p3')}
              </p>
            </div>

            {/* Recognition & Earning */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
{t('community.recognition.title')}
              </h2>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.recognition.p1')}
              </p>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.recognition.p2')}
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.recognition.p3')}
              </p>
            </div>

            {/* Join Our Community */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
{t('community.join.title')}
              </h2>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.join.p1')}
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.join.p2')}
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
{t('community.join.p3')}
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
