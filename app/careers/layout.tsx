"use client";

import React from 'react';
import { CareersLanguageProvider } from './contexts/CareersLanguageContext';

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CareersLanguageProvider>
      {children}
    </CareersLanguageProvider>
  );
}

