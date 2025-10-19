"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();
  const { isDark } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'JA', name: '日本語', flag: '🇯🇵' },
    { code: 'AR', name: 'العربية', flag: '🇸🇦' },
    { code: 'KO', name: '한국어', flag: '🇰🇷' },
    { code: 'ZH', name: '中文', flag: '🇨🇳' },
    { code: 'ID', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  ];

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 transition-all duration-300 group shadow-lg hover:shadow-xl ${
          isDark 
            ? 'bg-gradient-to-br from-white/15 to-white/5 hover:from-white/25 hover:to-white/10 border border-white/20' 
            : 'bg-gradient-to-br from-blue-100/90 to-purple-100/80 hover:from-blue-200/90 hover:to-purple-200/80 border border-blue-200/60 shadow-blue-200/20'
        }`}
        style={{
          borderRadius: '0 0.5rem 0.5rem 0'
        }}
        aria-label="Select language"
      >
        <Globe className={`w-4 h-4 ${isDark ? 'text-white' : 'text-blue-600'}`} />
        <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-blue-700'}`}>{currentLang?.code}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isDark ? 'text-white' : 'text-blue-600'
          } ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 w-48 border rounded-lg shadow-xl z-50 backdrop-blur-lg ${
          isDark 
            ? 'bg-white/95 border-gray-200/50' 
            : 'bg-white/98 border-blue-200/50 shadow-blue-200/20'
        }`}>
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                  currentLanguage === language.code 
                    ? (isDark ? 'bg-blue-50 text-blue-600' : 'bg-blue-50 text-blue-700') 
                    : (isDark ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-700 hover:bg-blue-50/50')
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{language.name}</span>
                  <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{language.code}</span>
                </div>
                {currentLanguage === language.code && (
                  <div className={`ml-auto w-2 h-2 rounded-full ${isDark ? 'bg-blue-600' : 'bg-blue-600'}`}></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
