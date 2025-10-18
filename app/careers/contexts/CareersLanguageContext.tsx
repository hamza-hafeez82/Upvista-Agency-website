"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CareersLanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const CareersLanguageContext = createContext<CareersLanguageContextType | undefined>(undefined);

// Careers-specific translations
const careersTranslations: { [key: string]: { [key: string]: string } } = {
  EN: {
    'careers.nav.backToSite': 'Back to Solution Site',
    'careers.nav.basics': 'Learn the Basics',
    'careers.nav.business': 'Learn About Business',
    'careers.nav.jobs': 'Learn About Jobs',
    'careers.nav.apply': 'Job Openings & Applications',
  },
  // Add more languages as needed
};

export function CareersLanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('careers-language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('careers-language', lang);
  };

  const t = (key: string): string => {
    return careersTranslations[currentLanguage]?.[key] || key;
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

