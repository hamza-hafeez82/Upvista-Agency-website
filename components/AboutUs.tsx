"use client";

import React, { memo, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Cloud, Stethoscope, GraduationCap, CreditCard, Brush } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const AboutUs = memo(() => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
  // Memoized expertise data for better performance
  const expertiseData = useMemo(() => [
    {
      icon: ShoppingCart,
      title: t('home.expertise.ecommerce.title'),
      description: t('home.expertise.ecommerce.description'),
      color: 'blue'
    },
    {
      icon: Cloud,
      title: t('home.expertise.saas.title'),
      description: t('home.expertise.saas.description'),
      color: 'cyan'
    },
    {
      icon: Stethoscope,
      title: t('home.expertise.healthcare.title'),
      description: t('home.expertise.healthcare.description'),
      color: 'green'
    },
    {
      icon: GraduationCap,
      title: t('home.expertise.edtech.title'),
      description: t('home.expertise.edtech.description'),
      color: 'purple'
    },
    {
      icon: CreditCard,
      title: t('home.expertise.fintech.title'),
      description: t('home.expertise.fintech.description'),
      color: 'orange'
    },
    {
      icon: Brush,
      title: t('home.expertise.portfolio.title'),
      description: t('home.expertise.portfolio.description'),
      color: 'pink'
    }
  ], [t]);
  
  return (
    <div className={`relative overflow-hidden p-10 min-h-screen ${
      isDark 
        ? 'bg-gradient-to-br from-black via-black/80 to-purple-950 text-white'
        : 'bg-white text-gray-900'
    }`}>
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl ${
          isDark ? 'bg-purple-600/20' : 'bg-gradient-to-br from-blue-400/25 to-purple-500/20'
        }`}></div>
        <div className={`absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl ${
          isDark ? 'bg-indigo-600/20' : 'bg-gradient-to-br from-indigo-500/25 to-violet-600/20'
        }`}></div>
        <div className={`absolute top-1/4 left-1/3 h-80 w-80 rounded-full blur-3xl ${
          isDark ? 'bg-violet-800/15' : 'bg-gradient-to-br from-purple-400/20 to-pink-400/15'
        }`}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 ${
        isDark 
          ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"
          : "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMTUsMjMsNDIsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDE1LDIzLDQyLDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"
      }`}></div>
      <Head>
        <title>Upvista Digital</title>
        <meta
          name="description"
          content="Learn about Upvista - your partner for innovative digital solutions that transform businesses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col items-center text-center">
            <div className={`inline-block mb-6 px-4 py-1 rounded-full border ${
              isDark 
                ? 'bg-violet-900/30 border-violet-700/40'
                : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border-blue-500/70 shadow-lg'
            }`}>
              <span className={`text-sm font-medium ${
                isDark ? 'text-violet-300' : 'text-white'
              }`}>
                {t('home.transform.title')}
              </span>
            </div>
            <h1 className={`text-4xl p-4 md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark 
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400'
                : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'
            }`}>
              {t('home.transform.subtitle')}
            </h1>
            <p className={`text-lg max-w-3xl mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('home.transform.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/Services">
                <button className={`px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2 shadow-lg ${
                  isDark 
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-violet-900/30'
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-purple-500/25'
                }`}>
                  {t('home.transform.exploreServices')}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/contactPage">
                <button className={`px-8 py-3 rounded-lg font-medium transition duration-300 border ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700'
                    : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-300 shadow-lg'
                }`}>
                  {t('home.transform.contactUs')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Card Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('home.partnership.title')}
            </h2>
            <p className={`text-lg mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('home.partnership.description')}
            </p>
            <Link href="/pages/partners">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-lg">
                {t('home.partnership.explore')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            {/* Clean, premium card area */}
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Central interactive card - Bigger and cleaner */}
              <div className={`relative z-10 backdrop-blur-lg border rounded-3xl shadow-2xl p-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer ${
                isDark 
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/10'
                  : 'bg-gradient-to-br from-blue-50/80 to-purple-50/60 border-blue-200/50 shadow-blue-200/20'
              }`}>
                <Brush className={`w-16 h-16 mb-6 animate-spin-slow ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <span className={`text-2xl font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {t('home.partnership.premium')}
                </span>
                <span className={`text-lg ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {t('home.partnership.subtitle')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Expertise Section - Salesforce Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm border mb-6 ${
            isDark 
              ? 'bg-blue-50/10 border-blue-200/20'
              : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border-blue-500/70 shadow-lg'
          }`}>
            <span className={`w-2 h-2 rounded-full mr-3 ${
              isDark ? 'bg-blue-400' : 'bg-white'
            }`}></span>
            <span className={`text-sm font-medium ${
              isDark ? 'text-blue-200' : 'text-white'
            }`}>
              {t('home.expertise.title')}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
            isDark 
              ? 'text-white'
              : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'
          }`}>
            {t('home.expertise.subtitle')}
          </h2>
          <p className={`max-w-4xl mx-auto text-xl leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t('home.expertise.description')}
          </p>
        </div>

        {/* Professional Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* E-commerce */}
          <div className={`group backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400/30'
              : 'bg-white/90 border-gray-200/60 hover:bg-white hover:border-blue-300/60'
          }`}>
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
              isDark 
                ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                : 'bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200'
            }`}>
              <ShoppingCart className={`w-8 h-8 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
            <h3 className={`text-2xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t('home.expertise.ecommerce.title')}</h3>
            <p className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('home.expertise.ecommerce.description')}
            </p>
          </div>

          {/* SaaS Platforms */}
          <div className={`group backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400/30'
              : 'bg-white/90 border-gray-200/60 hover:bg-white hover:border-blue-300/60'
          }`}>
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
              isDark 
                ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                : 'bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200'
            }`}>
              <Cloud className={`w-8 h-8 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
            <h3 className={`text-2xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t('home.expertise.saas.title')}</h3>
            <p className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('home.expertise.saas.description')}
            </p>
          </div>

          {/* Healthcare */}
          <div className={`group backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400/30'
              : 'bg-white/90 border-gray-200/60 hover:bg-white hover:border-blue-300/60'
          }`}>
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
              isDark 
                ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                : 'bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200'
            }`}>
              <Stethoscope className={`w-8 h-8 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
            <h3 className={`text-2xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t('home.expertise.healthcare.title')}</h3>
            <p className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('home.expertise.healthcare.description')}
            </p>
          </div>

          {/* EdTech */}
          <div className={`group backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400/30'
              : 'bg-white/90 border-gray-200/60 hover:bg-white hover:border-blue-300/60'
          }`}>
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
              isDark 
                ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                : 'bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200'
            }`}>
              <GraduationCap className={`w-8 h-8 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
            <h3 className={`text-2xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t('home.expertise.edtech.title')}</h3>
            <p className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('home.expertise.edtech.description')}
            </p>
          </div>

          {/* FinTech */}
          <div className={`group backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400/30'
              : 'bg-white/90 border-gray-200/60 hover:bg-white hover:border-blue-300/60'
          }`}>
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
              isDark 
                ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                : 'bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200'
            }`}>
              <CreditCard className={`w-8 h-8 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
            <h3 className={`text-2xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t('home.expertise.fintech.title')}</h3>
            <p className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('home.expertise.fintech.description')}
            </p>
          </div>

          {/* Portfolio & Creative */}
          <div className={`group backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400/30'
              : 'bg-white/90 border-gray-200/60 hover:bg-white hover:border-blue-300/60'
          }`}>
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
              isDark 
                ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                : 'bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200'
            }`}>
              <Brush className={`w-8 h-8 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
            <h3 className={`text-2xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t('home.expertise.portfolio.title')}</h3>
            <p className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('home.expertise.portfolio.description')}
            </p>
          </div>
        </div>

        {/* Professional CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors duration-300 shadow-lg shadow-blue-600/25">
            <span>{t('home.expertise.explore')}</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
});

AboutUs.displayName = 'AboutUs';

export default AboutUs;
