"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StandWithPalestinePage: React.FC = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <div className={`min-h-screen pt-20 ${
        isDark 
          ? 'bg-gradient-to-br from-black via-purple-950/30 to-black text-white'
          : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 text-gray-900'
      }`}>
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/10' : 'bg-gradient-to-br from-purple-400/15 to-pink-500/10'
          }`}></div>
          <div className={`absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl ${
            isDark ? 'bg-pink-600/10' : 'bg-gradient-to-br from-pink-500/15 to-purple-600/10'
          }`}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-16 max-w-5xl">
          {/* Back Button */}
          <Link 
            href="/"
            className={`inline-flex items-center gap-2 mb-12 transition-all duration-300 ${
              isDark 
                ? 'text-purple-400 hover:text-purple-300' 
                : 'text-purple-700 hover:text-purple-900'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">{t('palestine.backHome')}</span>
          </Link>

          {/* Title Section */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm border mb-6 ${
              isDark 
                ? 'bg-purple-900/30 border-purple-700/40'
                : 'bg-gradient-to-r from-purple-600/90 to-pink-600/90 border-purple-500/70 shadow-lg'
            }`}>
              <span className={`text-sm font-medium ${
                isDark ? 'text-purple-300' : 'text-white'
              }`}>
                {t('palestine.badge')}
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              isDark 
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400'
                : 'bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600'
            }`}>
              {t('palestine.title')}
            </h1>
            
            <div className={`w-24 h-1 mx-auto mb-8 rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600'
            }`}></div>
          </div>

          {/* Introduction */}
          <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 mb-12 ${
            isDark 
              ? 'bg-white/5 border-purple-500/20'
              : 'bg-white/80 border-purple-200/50 shadow-lg'
          }`}>
            <p className={`text-lg md:text-xl leading-relaxed mb-6 ${
              isDark ? 'text-gray-200' : 'text-gray-800'
            }`}>
              {t('palestine.intro.p1')}
            </p>
            
            <p className={`text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-200' : 'text-gray-800'
            }`}>
              {t('palestine.intro.p2')}
            </p>
          </div>

          {/* Our Position */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('palestine.position.title')}
            </h2>
            
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 mb-8 ${
              isDark 
                ? 'bg-white/5 border-purple-500/20'
                : 'bg-white/80 border-purple-200/50 shadow-lg'
            }`}>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {t('palestine.position.p1')}
              </p>
              
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {t('palestine.position.p2')}
              </p>
              
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {t('palestine.position.p3')}
              </p>
            </div>
          </div>

          {/* Sacred Texts Section */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('palestine.sacred.title')}
            </h2>

            {/* Quote from the Quran */}
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 mb-8 ${
              isDark 
                ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-purple-500/30'
                : 'bg-gradient-to-br from-purple-50/80 to-pink-50/80 border-purple-300/50 shadow-lg'
            }`}>
              <div className={`text-sm font-semibold mb-4 tracking-wider ${
                isDark ? 'text-purple-400' : 'text-purple-700'
              }`}>
                {t('palestine.sacred.quran.label')}
              </div>
              <blockquote className={`text-xl md:text-2xl font-serif italic leading-relaxed mb-6 ${
                isDark ? 'text-purple-200' : 'text-purple-900'
              }`}>
                "{t('palestine.sacred.quran.text')}"
              </blockquote>
              <p className={`text-base ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {t('palestine.sacred.quran.reference')}
              </p>
            </div>

            {/* Quote from the Bible */}
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 mb-8 ${
              isDark 
                ? 'bg-gradient-to-br from-pink-900/30 to-purple-900/20 border-pink-500/30'
                : 'bg-gradient-to-br from-pink-50/80 to-purple-50/80 border-pink-300/50 shadow-lg'
            }`}>
              <div className={`text-sm font-semibold mb-4 tracking-wider ${
                isDark ? 'text-pink-400' : 'text-pink-700'
              }`}>
                {t('palestine.sacred.bible.label')}
              </div>
              <blockquote className={`text-xl md:text-2xl font-serif italic leading-relaxed mb-6 ${
                isDark ? 'text-pink-200' : 'text-pink-900'
              }`}>
                "{t('palestine.sacred.bible.text')}"
              </blockquote>
              <p className={`text-base ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {t('palestine.sacred.bible.reference')}
              </p>
            </div>

            {/* Quote from the Torah */}
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 mb-8 ${
              isDark 
                ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-purple-500/30'
                : 'bg-gradient-to-br from-purple-50/80 to-pink-50/80 border-purple-300/50 shadow-lg'
            }`}>
              <div className={`text-sm font-semibold mb-4 tracking-wider ${
                isDark ? 'text-purple-400' : 'text-purple-700'
              }`}>
                {t('palestine.sacred.torah.label')}
              </div>
              <blockquote className={`text-xl md:text-2xl font-serif italic leading-relaxed mb-6 ${
                isDark ? 'text-purple-200' : 'text-purple-900'
              }`}>
                "{t('palestine.sacred.torah.text')}"
              </blockquote>
              <p className={`text-base ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {t('palestine.sacred.torah.reference')}
              </p>
            </div>
          </div>

          {/* What We Believe */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
{t('palestine.believe.title')}
            </h2>
            
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 space-y-6 ${
              isDark 
                ? 'bg-white/5 border-purple-500/20'
                : 'bg-white/80 border-purple-200/50 shadow-lg'
            }`}>
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-purple-300' : 'text-purple-700'
                }`}>
{t('palestine.believe.humanRights.title')}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
{t('palestine.believe.humanRights.text')}
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-pink-300' : 'text-pink-700'
                }`}>
{t('palestine.believe.peace.title')}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
{t('palestine.believe.peace.text')}
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-purple-300' : 'text-purple-700'
                }`}>
{t('palestine.believe.voices.title')}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
{t('palestine.believe.voices.text')}
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-pink-300' : 'text-pink-700'
                }`}>
{t('palestine.believe.silence.title')}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
{t('palestine.believe.silence.text')}
                </p>
              </div>
            </div>
          </div>

          {/* The Reality */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
{t('palestine.reality.title')}
            </h2>
            
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 ${
              isDark 
                ? 'bg-white/5 border-purple-500/20'
                : 'bg-white/80 border-purple-200/50 shadow-lg'
            }`}>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
{t('palestine.reality.p1')}
              </p>
              
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
{t('palestine.reality.p2')}
              </p>
              
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
{t('palestine.reality.p3')}
              </p>
            </div>
          </div>

          {/* Universal Message */}
          <div className="mb-12">
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 text-center ${
              isDark 
                ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/30 border-purple-500/30'
                : 'bg-gradient-to-br from-purple-100/80 to-pink-100/80 border-purple-300/60 shadow-xl'
            }`}>
              <blockquote className={`text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 ${
                isDark ? 'text-purple-100' : 'text-purple-900'
              }`}>
{t('palestine.universal.quote')}
              </blockquote>
              <p className={`text-base font-medium ${
                isDark ? 'text-purple-400' : 'text-purple-700'
              }`}>
{t('palestine.universal.reference')}
              </p>
            </div>
          </div>

          {/* How We Stand */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
{t('palestine.howWeStand.title')}
            </h2>
            
            <div className="space-y-6">
              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 ${
                isDark 
                  ? 'bg-white/5 border-purple-500/20'
                  : 'bg-white/80 border-purple-200/50 shadow-lg'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-purple-300' : 'text-purple-700'
                }`}>
{t('palestine.howWeStand.voices.title')}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
{t('palestine.howWeStand.voices.text')}
                </p>
              </div>

              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 ${
                isDark 
                  ? 'bg-white/5 border-purple-500/20'
                  : 'bg-white/80 border-purple-200/50 shadow-lg'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-pink-300' : 'text-pink-700'
                }`}>
{t('palestine.howWeStand.awareness.title')}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
{t('palestine.howWeStand.awareness.text')}
                </p>
              </div>

              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 ${
                isDark 
                  ? 'bg-white/5 border-purple-500/20'
                  : 'bg-white/80 border-purple-200/50 shadow-lg'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-purple-300' : 'text-purple-700'
                }`}>
{t('palestine.howWeStand.humanitarian.title')}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
{t('palestine.howWeStand.humanitarian.text')}
                </p>
              </div>

              <div className={`backdrop-blur-sm border rounded-xl p-6 md:p-8 ${
                isDark 
                  ? 'bg-white/5 border-purple-500/20'
                  : 'bg-white/80 border-purple-200/50 shadow-lg'
              }`}>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-pink-300' : 'text-pink-700'
                }`}>
{t('palestine.howWeStand.justice.title')}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
{t('palestine.howWeStand.justice.text')}
                </p>
              </div>
            </div>
          </div>

          {/* Message of Hope */}
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
{t('palestine.hope.title')}
            </h2>
            
            <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-10 ${
              isDark 
                ? 'bg-white/5 border-purple-500/20'
                : 'bg-white/80 border-purple-200/50 shadow-lg'
            }`}>
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
{t('palestine.hope.p1')}
              </p>
              
              <p className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
{t('palestine.hope.p2')}
              </p>
              
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
{t('palestine.hope.p3')}
              </p>
            </div>
          </div>

          {/* Closing Quote */}
          <div className="mb-16">
            <div className={`backdrop-blur-sm border rounded-2xl p-10 md:p-14 text-center ${
              isDark 
                ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/30 border-purple-500/40'
                : 'bg-gradient-to-br from-purple-100/90 to-pink-100/90 border-purple-300/70 shadow-xl'
            }`}>
              <blockquote className={`text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed mb-6 ${
                isDark ? 'text-purple-100' : 'text-purple-900'
              }`}>
{t('palestine.closing.quote')}
              </blockquote>
              <p className={`text-base md:text-lg font-medium ${
                isDark ? 'text-purple-400' : 'text-purple-700'
              }`}>
{t('palestine.closing.attribution')}
              </p>
            </div>
          </div>

          {/* Final Statement */}
          <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 text-center mb-12 ${
            isDark 
              ? 'bg-white/5 border-purple-500/20'
              : 'bg-white/80 border-purple-200/50 shadow-lg'
          }`}>
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
              isDark 
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400'
                : 'bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-700'
            }`}>
{t('palestine.final.title')}
            </h2>
            
            <p className={`text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-200' : 'text-gray-800'
            }`}>
{t('palestine.final.text')}
            </p>
          </div>

          {/* Symbolic Divider */}
          <div className="flex items-center justify-center my-16">
            <div className={`h-px w-32 ${
              isDark 
                ? 'bg-gradient-to-r from-transparent via-purple-500 to-transparent'
                : 'bg-gradient-to-r from-transparent via-purple-600 to-transparent'
            }`}></div>
            <div className={`mx-4 text-2xl ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`}>
              🕊️
            </div>
            <div className={`h-px w-32 ${
              isDark 
                ? 'bg-gradient-to-r from-transparent via-pink-500 to-transparent'
                : 'bg-gradient-to-r from-transparent via-pink-600 to-transparent'
            }`}></div>
          </div>

          {/* Closing Prayer/Wish */}
          <div className="text-center mb-16">
            <p className={`text-xl md:text-2xl font-serif italic leading-relaxed ${
              isDark ? 'text-purple-200' : 'text-purple-800'
            }`}>
{t('palestine.prayer.line1')}
              <br />
              {t('palestine.prayer.line2')}
              <br />
              {t('palestine.prayer.line3')}
            </p>
          </div>

          {/* Date */}
          <div className="text-center">
            <p className={`text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}>
{t('palestine.footer')}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StandWithPalestinePage;
