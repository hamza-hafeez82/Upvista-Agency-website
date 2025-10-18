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
    // Header Navigation
    'careers.nav.backToSite': 'Back to Solution Site',
    'careers.nav.basics': 'Learn the Basics',
    'careers.nav.business': 'Learn About Business',
    'careers.nav.jobs': 'Learn About Jobs',
    'careers.nav.apply': 'Job Openings & Applications',
    
    // Header Branding
    'careers.header.companyName': 'Upvista',
    'careers.header.portal': 'Careers',
    'careers.header.portalFull': 'Careers Portal',
    
    // Footer Sections
    'careers.footer.companyName': 'Upvista Digital',
    'careers.footer.recruitmentSite': 'Recruitment Site',
    'careers.footer.buildingFuture': 'Building the Future',
    'careers.footer.copyright': 'Copyright © Upvista Digital. All rights reserved.',
    
    // Footer - Policies and Legal
    'careers.footer.policies.title': 'Policies and Legal',
    'careers.footer.policies.personalInfo': 'Handling of personal information in recruitment activities',
    'careers.footer.policies.applicationTerms': 'Recruitment Application Terms',
    'careers.footer.policies.privacyNotice': 'Recruitment Privacy Notice',
    'careers.footer.policies.employmentRules': 'Rules regarding Applying for Employment',
    'careers.footer.policies.dataProtection': 'Data Protection Initiatives',
    'careers.footer.policies.trademark': 'Trademark and Copyright Notice',
    'careers.footer.policies.terms': 'Terms & Conditions',
    'careers.footer.policies.privacy': 'Privacy Policy',
    'careers.footer.policies.faq': 'FAQ',
    
    // Footer - Learn the Basics
    'careers.footer.basics.title': 'Learn the Basics',
    'careers.footer.basics.upvistaIn3': 'Upvista Digital in 3 minutes',
    'careers.footer.basics.philosophy': 'Corporate philosophy',
    'careers.footer.basics.ceoMessage': 'Message from the CEO',
    'careers.footer.basics.disabilities': 'Hiring people with disabilities',
    'careers.footer.basics.recruitment': 'What is important in recruitment',
    'careers.footer.basics.graduates': 'New graduate recruitment starts here',
    
    // Footer - Learn About Business
    'careers.footer.business.title': 'Learn About the Business',
    'careers.footer.business.strategy': 'Upvista Digital\'s Business Strategy',
    'careers.footer.business.products': 'Upvista Digital Products',
    'careers.footer.business.globalStrategy': 'Upvista Digital\'s Global Strategy',
    'careers.footer.business.teamwork': 'Digital Solutions and Teamwork',
    
    // Footer - Learn About Jobs
    'careers.footer.jobs.title': 'Learn About the Job',
    'careers.footer.jobs.teamIntro': 'Team Introduction',
    'careers.footer.jobs.infrastructure': 'Service infrastructure development and operation',
    'careers.footer.jobs.sales': 'Sales',
    'careers.footer.jobs.customerService': 'Customer Service',
    'careers.footer.jobs.marketing': 'Marketing',
    'careers.footer.jobs.consulting': 'System Consulting',
    'careers.footer.jobs.corporate': 'Corporate',
    
    // Footer - Application Guidelines
    'careers.footer.application.title': 'Application Guidelines and Entry',
    'careers.footer.application.newGraduate': 'New graduate recruitment',
    'careers.footer.application.career': 'Career Recruitment',
    'careers.footer.application.disabilities': 'Hiring people with disabilities',
    'careers.footer.application.potential': 'Potential Recruitment',
    'careers.footer.application.partTime': 'Part-time jobs and internships',
    
    // Footer - Contact
    'careers.footer.contact.title': 'Contact Us',
    'careers.footer.contact.email': 'careers@upvistadigital.com',
    'careers.footer.contact.phone': '+92 (0) 3320486955',
    'careers.footer.contact.linkedin': 'LinkedIn',
    'careers.footer.contact.whatsapp': 'WhatsApp',
    'careers.footer.contact.facebook': 'Facebook',
  },
  JA: {
    // Header Navigation
    'careers.nav.backToSite': 'ソリューションサイトに戻る',
    'careers.nav.basics': '基本を学ぶ',
    'careers.nav.business': 'ビジネスについて学ぶ',
    'careers.nav.jobs': '仕事について学ぶ',
    'careers.nav.apply': '求人情報と応募',
    
    // Header Branding
    'careers.header.companyName': 'Upvista',
    'careers.header.portal': 'キャリア',
    'careers.header.portalFull': 'キャリアポータル',
    
    // Footer Sections
    'careers.footer.companyName': 'Upvista Digital',
    'careers.footer.recruitmentSite': '採用サイト',
    'careers.footer.buildingFuture': '未来を創る',
    'careers.footer.copyright': 'Copyright © Upvista Digital. All rights reserved.',
    
    // Footer - Policies and Legal
    'careers.footer.policies.title': 'ポリシーと法的事項',
    'careers.footer.policies.personalInfo': '採用活動における個人情報の取り扱い',
    'careers.footer.policies.applicationTerms': '採用応募規約',
    'careers.footer.policies.privacyNotice': '採用プライバシー通知',
    'careers.footer.policies.employmentRules': '雇用応募に関する規則',
    'careers.footer.policies.dataProtection': 'データ保護イニシアチブ',
    'careers.footer.policies.trademark': '商標と著作権に関する通知',
    'careers.footer.policies.terms': '利用規約',
    'careers.footer.policies.privacy': 'プライバシーポリシー',
    'careers.footer.policies.faq': 'よくある質問',
    
    // Footer - Learn the Basics
    'careers.footer.basics.title': '基本を学ぶ',
    'careers.footer.basics.upvistaIn3': 'Upvista Digitalを3分で',
    'careers.footer.basics.philosophy': '企業理念',
    'careers.footer.basics.ceoMessage': 'CEOからのメッセージ',
    'careers.footer.basics.disabilities': '障害者の採用',
    'careers.footer.basics.recruitment': '採用で重要なこと',
    'careers.footer.basics.graduates': '新卒採用はこちらから',
    
    // Footer - Learn About Business
    'careers.footer.business.title': 'ビジネスについて学ぶ',
    'careers.footer.business.strategy': 'Upvista Digitalのビジネス戦略',
    'careers.footer.business.products': 'Upvista Digital製品',
    'careers.footer.business.globalStrategy': 'Upvista Digitalのグローバル戦略',
    'careers.footer.business.teamwork': 'デジタルソリューションとチームワーク',
    
    // Footer - Learn About Jobs
    'careers.footer.jobs.title': '仕事について学ぶ',
    'careers.footer.jobs.teamIntro': 'チーム紹介',
    'careers.footer.jobs.infrastructure': 'サービスインフラの開発と運用',
    'careers.footer.jobs.sales': '営業',
    'careers.footer.jobs.customerService': 'カスタマーサービス',
    'careers.footer.jobs.marketing': 'マーケティング',
    'careers.footer.jobs.consulting': 'システムコンサルティング',
    'careers.footer.jobs.corporate': 'コーポレート',
    
    // Footer - Application Guidelines
    'careers.footer.application.title': '応募ガイドラインとエントリー',
    'careers.footer.application.newGraduate': '新卒採用',
    'careers.footer.application.career': 'キャリア採用',
    'careers.footer.application.disabilities': '障害者の採用',
    'careers.footer.application.potential': 'ポテンシャル採用',
    'careers.footer.application.partTime': 'アルバイトとインターンシップ',
    
    // Footer - Contact
    'careers.footer.contact.title': 'お問い合わせ',
    'careers.footer.contact.email': 'careers@upvistadigital.com',
    'careers.footer.contact.phone': '+92 (0) 3320486955',
    'careers.footer.contact.linkedin': 'LinkedIn',
    'careers.footer.contact.whatsapp': 'WhatsApp',
    'careers.footer.contact.facebook': 'Facebook',
  },
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

