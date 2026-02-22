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
          const { JA } = await import('../locales/ja');
          data = JA;
          break;
        case 'AR':
          const { AR } = await import('../locales/ar');
          data = AR;
          break;
        case 'KO':
          const { KO } = await import('../locales/ko');
          data = KO;
          break;
        case 'ZH':
          const { ZH } = await import('../locales/zh');
          data = ZH;
          break;
        case 'ID':
          const { ID } = await import('../locales/id');
          data = ID;
          break;
        case 'EN':
        default:
          const { EN } = await import('../locales/en');
          data = EN;
          break;
      }

      setTranslations(data);
    } catch (error) {
      console.error(`Error loading translations for ${lang}:`, error);
      // Fallback: try to load EN if it failed for another language
      if (lang !== 'EN') {
        try {
          const { EN } = await import('../locales/en');
          setTranslations(EN);
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
