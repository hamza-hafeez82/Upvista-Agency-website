"use client";

import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CareersLanguageProvider } from './contexts/CareersLanguageContext';

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <CareersLanguageProvider>
        {children}
      </CareersLanguageProvider>
    </LanguageProvider>
  );
}

