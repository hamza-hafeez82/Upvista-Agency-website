"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  const loadTranslations = useCallback(async (lang: string) => {
    setIsLoading(true);
    try {
      let data: Record<string, string> = {};

      switch (lang) {
        case 'JA':
          data = (await import('../locales/ja.json')).default;
          break;
        case 'AR':
          data = (await import('../locales/ar.json')).default;
          break;
        case 'KO':
          data = (await import('../locales/ko.json')).default;
          break;
        case 'ZH':
          data = (await import('../locales/zh.json')).default;
          break;
        case 'ID':
          data = (await import('../locales/id.json')).default;
          break;
        case 'EN':
        default:
          data = (await import('../locales/en.json')).default;
          break;
      }

      setTranslations(data);
    } catch (error) {
      console.error(`Error loading translations for ${lang}:`, error);
      // Fallback: try to load EN if it failed for another language
      if (lang !== 'EN') {
        try {
          const data = (await import('../locales/en.json')).default;
          setTranslations(data);
        } catch (fallbackError) {
          console.error('Fallback translation loading failed:', fallbackError);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Check for saved language preference on mount
    const savedLanguage = localStorage.getItem('language') || 'EN';
    setCurrentLanguage(savedLanguage);
    loadTranslations(savedLanguage);
  }, [loadTranslations]);

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
    loadTranslations(language);
  };

  const t = (key: string): string => {
    // Return translation if found, otherwise return the key itself
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
