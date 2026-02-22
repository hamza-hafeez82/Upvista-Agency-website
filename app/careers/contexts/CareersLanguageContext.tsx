"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from "@/locales/careers/en";
import { ja } from "@/locales/careers/ja";
import { ar } from "@/locales/careers/ar";
import { ko } from "@/locales/careers/ko";
import { zh } from "@/locales/careers/zh";
import { id } from "@/locales/careers/id";

interface CareersLanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const CareersLanguageContext = createContext<CareersLanguageContextType | undefined>(undefined);

// Careers-specific translations
const careersTranslations: { [key: string]: { [key: string]: string } } = {
  EN: en,
  JA: ja,
  AR: ar,
  KO: ko,
  ZH: zh,
  ID: id,
};

export function CareersLanguageProvider({ children }: { children: React.ReactNode }) {
  // Get the main language context to sync with it
  const { currentLanguage: mainLanguage } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(mainLanguage || 'EN');

  // Sync with main language context
  useEffect(() => {
    if (mainLanguage && careersTranslations[mainLanguage]) {
      setCurrentLanguage(mainLanguage);
    }
  }, [mainLanguage]);

  // Also check localStorage on mount for backward compatibility
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && careersTranslations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    // Sync with main language storage
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    // Fallback to English if translation not found, or return the key
    return careersTranslations[currentLanguage]?.[key] || careersTranslations['EN']?.[key] || key;
  };

  return (
    <CareersLanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
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
