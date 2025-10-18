"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function ValueProposition() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
  return (
    <section className={`relative w-full py-24 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-black via-black/80 to-purple-950'
        : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100'
    }`}>
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl ${
          isDark ? 'bg-purple-600/20' : 'bg-gradient-to-br from-purple-400/25 to-pink-500/20'
        }`}></div>
        <div className={`absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl ${
          isDark ? 'bg-pink-600/20' : 'bg-gradient-to-br from-pink-500/25 to-purple-600/20'
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Modern gradient badge */}
          <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border ${
            isDark 
              ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 border-purple-500/20'
              : 'bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white border-purple-500/70 shadow-lg'
          }`}>
            <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
              isDark ? 'bg-purple-400' : 'bg-white'
            }`}></span>
            {t('home.whyChoose.title')}
          </div>

          {/* Main heading with gradient text */}
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 leading-tight ${
            isDark 
              ? 'text-gray-200'
              : 'text-gray-900'
          }`}>
            {t('home.whyChoose.description')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              t('home.whyChoose.transparentPricing'),
              t('home.whyChoose.fixedDeadlines'),
              t('home.whyChoose.cleanDesign'),
              t('home.whyChoose.freeConsultation'),
              t('home.whyChoose.longTermSupport'),
              t('home.whyChoose.flexibleTech'),
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative flex items-center space-x-3 p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg ${
                  isDark 
                    ? 'bg-gray-800/30 border-purple-500/10 hover:border-purple-500/30 hover:shadow-purple-500/10'
                    : 'bg-white/80 border-purple-200/50 hover:border-purple-300/70 hover:shadow-purple-200/20'
                }`}
              >
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full blur-md group-hover:blur-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20'
                      : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20'
                  }`}></div>
                  <CheckCircle2 className={`relative w-6 h-6 ${
                    isDark ? 'text-green-400' : 'text-green-500'
                  }`} />
                </div>
                <span className={`transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-300 group-hover:text-white'
                    : 'text-gray-700 group-hover:text-gray-900'
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-12"></div>
        </div>
      </div>
    </section>
  );
}
