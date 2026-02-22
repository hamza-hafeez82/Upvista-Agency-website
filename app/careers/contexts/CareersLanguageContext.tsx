"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CareersLanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const CareersLanguageContext = createContext<CareersLanguageContextType | undefined>(undefined);

export function CareersLanguageProvider({ children }: { children: React.ReactNode }) {
  // Get the main language context to sync with it
  const { currentLanguage: mainLanguage } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(mainLanguage || 'EN');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  const loadTranslations = useCallback(async (lang: string) => {
    setIsLoading(true);
    try {
      let data: Record<string, string> = {};

      switch (lang) {
        case 'JA':
          const { ja } = await import('@/locales/careers/ja');
          data = ja;
          break;
        case 'AR':
          const { ar } = await import('@/locales/careers/ar');
          data = ar;
          break;
        case 'KO':
          const { ko } = await import('@/locales/careers/ko');
          data = ko;
          break;
        case 'ZH':
          const { zh } = await import('@/locales/careers/zh');
          data = zh;
          break;
        case 'ID':
          const { id } = await import('@/locales/careers/id');
          data = id;
          break;
        case 'EN':
        default:
          const { en } = await import('@/locales/careers/en');
          data = en;
          break;
      }

      setTranslations(data);
    } catch (error) {
      console.error(`Error loading career translations for ${lang}:`, error);
      // Fallback: try to load EN if it failed
      if (lang !== 'EN') {
        try {
          const { en } = await import('@/locales/careers/en');
          setTranslations(en);
        } catch (fallbackError) {
          console.error('Fallback career translation loading failed:', fallbackError);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Sync with main language context
  useEffect(() => {
    if (mainLanguage) {
      setCurrentLanguage(mainLanguage);
      loadTranslations(mainLanguage);
    }
  }, [mainLanguage, loadTranslations]);

  // Initial load based on localStorage if mainLanguage not available yet
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && !mainLanguage) {
      setCurrentLanguage(savedLanguage);
      loadTranslations(savedLanguage);
    } else if (!savedLanguage && !mainLanguage) {
      // Default to EN if nothing is set
      loadTranslations('EN');
    }
  }, [mainLanguage, loadTranslations]);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    // Sync with main language storage
    localStorage.setItem('language', lang);
    loadTranslations(lang);
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <CareersLanguageContext.Provider value={{ currentLanguage, setLanguage, t, isLoading }}>
      {children}
    </CareersLanguageContext.Provider>
  );
}

export function useCareersLanguage() {
  const context = useContext(CareersLanguageContext);
  if (context === undefined) {
    throw new Error('useCareersLanguage must be used within a CareersLanguageProvider');
  }
  return context;
}
