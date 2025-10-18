"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface CareersThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const CareersThemeContext = createContext<CareersThemeContextType | undefined>(undefined);

export function CareersThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference specifically for careers site
    const savedTheme = localStorage.getItem('careers-theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      applyTheme(savedTheme === 'dark');
    } else {
      applyTheme(true); // Default to dark
    }
  }, []);

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('careers-dark');
      document.documentElement.classList.remove('careers-light');
    } else {
      document.documentElement.classList.add('careers-light');
      document.documentElement.classList.remove('careers-dark');
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('careers-theme', newTheme ? 'dark' : 'light');
    applyTheme(newTheme);
  };

  return (
    <CareersThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </CareersThemeContext.Provider>
  );
}

export function useCareersTheme() {
  const context = useContext(CareersThemeContext);
  if (context === undefined) {
    throw new Error('useCareersTheme must be used within a CareersThemeProvider');
  }
  return context;
}

