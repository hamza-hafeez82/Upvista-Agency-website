'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CompanyProfilePage() {
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
      <div className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 ${
              isDark 
                ? 'bg-white/10 border border-white/20 text-indigo-200'
                : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-blue-500/70 text-white shadow-lg'
            }`}>
              <span className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${
                isDark ? 'bg-blue-400' : 'bg-white'
              }`}></span>
{t('companyProfile.badge')}
            </div>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
            }`}>
{t('companyProfile.title')}
            </h1>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
{t('companyProfile.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="space-y-6 sm:space-y-8">
              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.tradeName')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Upvista Digital</div>
                </div>
              </div>

              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.businessDescription')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg leading-relaxed ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('companyProfile.businessDesc1')}<br />
                    {t('companyProfile.businessDesc2')}
                  </div>
                </div>
              </div>

              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.ceo')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{t('companyProfile.ceoName')}</div>
                </div>
              </div>

              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.founded')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{t('companyProfile.foundedDate')}</div>
                </div>
              </div>

              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.fiscalYearEnd')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{t('companyProfile.fiscalEnd')}</div>
                </div>
              </div>

              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.headOffice')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{t('companyProfile.headOfficeLocation')}</div>
                </div>
              </div>

              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.legalStatus')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{t('companyProfile.legalStatusType')}</div>
                </div>
              </div>

              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.serviceAreas')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{t('companyProfile.serviceAreasGlobal')}</div>
                </div>
              </div>

              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.industryFocus')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg leading-relaxed ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{t('companyProfile.industryTypes')}</div>
                </div>
              </div>

              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.revenueModel')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{t('companyProfile.revenueType')}</div>
                </div>
              </div>

              <div className={`border-b pb-4 sm:pb-6 ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/60'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.clientPortfolio')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg leading-relaxed ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{t('companyProfile.clientCount')}</div>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                  <div className={`font-bold text-base sm:text-lg ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>{t('companyProfile.qualityStandards')}</div>
                  <div className={`sm:col-span-2 text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{t('companyProfile.qualityRating')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
