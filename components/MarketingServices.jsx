import Link from 'next/link';
import React, { memo, useMemo, useCallback } from 'react';
import { Code, Globe, Cloud, Brain, Palette, Target, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const ITServices = memo(() => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
  // Memoized services data for better performance
  const services = useMemo(() => [
    {
      id: 1,
      icon: Code,
      title: t('home.services.software.title'),
      description: t('home.services.software.description'),
      learnMoreLink: "/pages/services",
      color: "blue"
    },
    {
      id: 2,
      icon: Globe,
      title: t('home.services.web.title'),
      description: t('home.services.web.description'),
      learnMoreLink: "/pages/services",
      color: "green"
    },
    {
      id: 3,
      icon: Cloud,
      title: t('home.services.cloud.title'),
      description: t('home.services.cloud.description'),
      learnMoreLink: "/pages/services",
      color: "cyan"
    },
    {
      id: 4,
      icon: Brain,
      title: t('home.services.ai.title'),
      description: t('home.services.ai.description'),
      learnMoreLink: "/pages/services",
      color: "purple"
    },
    {
      id: 5,
      icon: Palette,
      title: t('home.services.design.title'),
      description: t('home.services.design.description'),
      learnMoreLink: "/pages/services",
      color: "pink"
    },
    {
      id: 6,
      icon: Target,
      title: t('home.services.marketing.title'),
      description: t('home.services.marketing.description'),
      learnMoreLink: "/pages/services",
      color: "orange"
    }
  ], [t]);

  // Memoized color classes function
  const getColorClasses = useCallback((color) => {
    const colorMap = {
      blue: "from-blue-500/20 to-blue-600/30 text-blue-400 border-blue-400/30",
      green: "from-green-500/20 to-green-600/30 text-green-400 border-green-400/30", 
      cyan: "from-cyan-500/20 to-cyan-600/30 text-cyan-400 border-cyan-400/30",
      purple: "from-purple-500/20 to-purple-600/30 text-purple-400 border-purple-400/30",
      pink: "from-pink-500/20 to-pink-600/30 text-pink-400 border-pink-400/30",
      orange: "from-orange-500/20 to-orange-600/30 text-orange-400 border-orange-400/30"
    };
    return colorMap[color] || colorMap.blue;
  }, []);

  return (
    <section className={`relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-black/80 to-purple-950 text-white'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-gray-900'
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
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
              {t('home.services.title')}
            </span>
        </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
            isDark 
              ? 'text-white'
              : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'
          }`}>
            {t('home.services.subtitle')}
          </h2>
          <p className={`max-w-4xl mx-auto text-xl leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t('home.services.description')}
          </p>
      </div>
      
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            const colorClasses = getColorClasses(service.color);
            
            return (
              <Link href={service.learnMoreLink}>
                <div 
                  key={service.id} 
                  className={`group backdrop-blur-lg border rounded-2xl p-6 transition-all duration-300 cursor-pointer h-full ${
                    isDark 
                      ? 'bg-white/5 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 hover:bg-white/10 hover:border-gradient-to-r hover:from-blue-400/50 hover:via-purple-400/50 hover:to-pink-400/50'
                      : 'bg-white/20 border-gradient-to-r from-blue-500/40 via-purple-500/40 to-indigo-500/40 hover:bg-white/30 hover:border-gradient-to-r hover:from-blue-400/60 hover:via-purple-400/60 hover:to-indigo-400/60'
                  }`}
                  style={{
                    background: isDark 
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'
                      : 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                    borderImage: isDark
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3)) 1'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4), rgba(99, 102, 241, 0.4)) 1'
                  }}
                >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  isDark 
                    ? `bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`
                    : 'bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200'
                }`}>
                  <IconComponent className={`w-7 h-7 ${
                    isDark ? colorClasses.split(' ')[2] : 'text-blue-600'
                  }`} />
              </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{service.title}</h3>
                <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {service.description}
                </p>
                <div className={`inline-flex items-center text-xs font-medium ${
                    isDark ? colorClasses.split(' ')[2] : 'text-blue-600'
                  } hover:opacity-80 transition-opacity duration-300`}>
                  {t('home.services.software.learnMore')}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
         <Link href="/pages/services">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors duration-300 shadow-lg shadow-blue-600/25">
              <span>{t('home.services.exploreAll')}</span>
              <ArrowRight className="w-5 h-5" />
        </button>
         </Link>
        </div>
      </div>
    </section>
  );
});

ITServices.displayName = 'ITServices';

export default ITServices;
