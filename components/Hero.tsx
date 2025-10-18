import React, { memo, useMemo, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Star, Users, Code, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

// Video sources for theme-based switching

const Hero = memo(() => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
  // Memoized values for better performance
  const videoSource = useMemo(() => 
    isDark ? "/assets/careers/company-video3.mp4" : "/assets/careers/upvista.mp4", 
    [isDark]
  );
  
  
  // Memoized video key for proper re-rendering
  const videoKey = useMemo(() => 
    isDark ? 'dark-video' : 'light-video', 
    [isDark]
  );
  
  // Optimized video loading handlers
  const handleVideoLoadStart = useCallback(() => {
    console.log('Video loading:', isDark ? 'dark' : 'light');
  }, [isDark]);
  
  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error('Video error:', e);
  }, []);
  
  return (
    <section className={`relative overflow-hidden px-4 sm:px-6 py-16 sm:py-20 lg:py-32 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-black/80 to-purple-950'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-6">
          {/* Content section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-12">
        <div className={`inline-flex items-center px-3 py-2 rounded-full backdrop-blur-sm border text-sm font-medium mb-6 ${
          isDark 
            ? 'bg-white/10 border-white/10 text-purple-200'
            : 'bg-gradient-to-r from-purple-600/90 to-pink-600/90 border-purple-500/70 text-white shadow-lg'
        }`}>
              <span className={`flex h-2 w-2 rounded-full mr-2 ${
                isDark ? 'bg-purple-400' : 'bg-white'
              }`}></span>
              {t('hero.badge')}
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 via-purple-700 to-pink-600 bg-clip-text text-transparent'
            }`}>
              {t('hero.title')}
            </h1>

            <p className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('hero.subtitle')}
            </p>

            {/* SEO-optimized service highlights */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              <div className={`flex items-center gap-2 text-sm ${
                isDark ? 'text-purple-200' : 'text-gray-700'
              }`}>
                <Code className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <span>{t('hero.service1')}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${
                isDark ? 'text-purple-200' : 'text-gray-700'
              }`}>
                <Globe className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <span>{t('hero.service2')}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${
                isDark ? 'text-purple-200' : 'text-gray-700'
              }`}>
                <Users className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-pink-600'}`} />
                <span>{t('hero.service3')}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${
                isDark ? 'text-purple-200' : 'text-gray-700'
              }`}>
                <Star className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-pink-600'}`} />
                <span>{t('hero.service4')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-12">
              <Link href="/Services/web-development">
                <button className={`px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl border-2 transition-colors duration-300 flex items-center justify-center gap-3 group cursor-pointer w-full sm:w-auto relative overflow-hidden ${
                  isDark 
                    ? 'text-white border-transparent hover:border-purple-500 hover:text-white'
                    : 'text-white border-transparent hover:border-purple-600 hover:text-gray-900'
                }`}>
                  {/* Gradient background that waves out on hover */}
                  <span className={`absolute inset-0 bg-gradient-to-r transition-transform duration-700 ease-in-out transform translate-x-0 group-hover:translate-x-full ${
                    isDark ? 'from-purple-600 to-pink-600' : 'from-purple-600 to-pink-600'
                  }`}></span>
                  <span className="relative z-10">{t('hero.cta')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>
              </Link>
              <Link href="/pages/auth">
                <button className={`px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl border-2 transition-colors duration-300 flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto relative overflow-hidden ${
                  isDark 
                    ? 'text-white border-purple-500 hover:border-transparent hover:text-white'
                    : 'text-gray-900 border-purple-600 hover:border-transparent hover:text-white'
                }`}>
                  {/* Gradient background that waves in on hover */}
                  <span className={`absolute inset-0 bg-gradient-to-r transition-transform duration-700 ease-in-out transform -translate-x-full group-hover:translate-x-0 ${
                    isDark ? 'from-purple-600 to-pink-600' : 'from-purple-600 to-pink-600'
                  }`}></span>
                  <span className="relative z-10">{t('hero.register')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>
              </Link>
            </div>

            {/* Enhanced trust indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
                  isDark 
                    ? 'text-white' 
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
                }`}>50+</div>
                <div className={`text-sm ${
                  isDark ? 'text-purple-200/80' : 'text-purple-600/80'
                }`}>{t('hero.stats1')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
                  isDark 
                    ? 'text-white' 
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
                }`}>4.9/5</div>
                <div className={`text-sm ${
                  isDark ? 'text-purple-200/80' : 'text-purple-600/80'
                }`}>{t('hero.stats2')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
                  isDark 
                    ? 'text-white' 
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
                }`}>24/7</div>
                <div className={`text-sm ${
                  isDark ? 'text-purple-200/80' : 'text-pink-600/80'
                }`}>{t('hero.stats3')}</div>
              </div>
            </div>
          </div>

          {/* Visual section */}
          <div className="w-full lg:w-1/2 relative">
              {/* Main visual element */}
              <div className="relative w-full aspect-square max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                {/* Embedded video container */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <video
                  key={videoKey}
                  className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: '10% center' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadStart={handleVideoLoadStart}
                  onError={handleVideoError}
                >
                  <source 
                    src={videoSource} 
                    type="video/mp4" 
                  />
                  {/* Fallback for unsupported video formats */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                    <span className="text-white/60 text-sm">Video not supported</span>
                  </div>
                </video>
              </div>

              {/* Floating service icons removed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
