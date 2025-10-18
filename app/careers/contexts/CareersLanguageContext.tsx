"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

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
  AR: {
    // Header Navigation
    'careers.nav.backToSite': 'العودة إلى موقع الحلول',
    'careers.nav.basics': 'تعلم الأساسيات',
    'careers.nav.business': 'تعرف على الأعمال',
    'careers.nav.jobs': 'تعرف على الوظائف',
    'careers.nav.apply': 'الوظائف الشاغرة والتطبيقات',
    
    // Header Branding
    'careers.header.companyName': 'Upvista',
    'careers.header.portal': 'الوظائف',
    'careers.header.portalFull': 'بوابة الوظائف',
    
    // Footer Sections
    'careers.footer.companyName': 'Upvista Digital',
    'careers.footer.recruitmentSite': 'موقع التوظيف',
    'careers.footer.buildingFuture': 'بناء المستقبل',
    'careers.footer.copyright': 'Copyright © Upvista Digital. All rights reserved.',
    
    // Footer - Policies and Legal
    'careers.footer.policies.title': 'السياسات والقانونية',
    'careers.footer.policies.personalInfo': 'التعامل مع المعلومات الشخصية في أنشطة التوظيف',
    'careers.footer.policies.applicationTerms': 'شروط طلب التوظيف',
    'careers.footer.policies.privacyNotice': 'إشعار خصوصية التوظيف',
    'careers.footer.policies.employmentRules': 'القواعد المتعلقة بالتقدم للتوظيف',
    'careers.footer.policies.dataProtection': 'مبادرات حماية البيانات',
    'careers.footer.policies.trademark': 'إشعار العلامة التجارية وحقوق النشر',
    'careers.footer.policies.terms': 'الشروط والأحكام',
    'careers.footer.policies.privacy': 'سياسة الخصوصية',
    'careers.footer.policies.faq': 'الأسئلة الشائعة',
    
    // Footer - Learn the Basics
    'careers.footer.basics.title': 'تعلم الأساسيات',
    'careers.footer.basics.upvistaIn3': 'Upvista Digital في 3 دقائق',
    'careers.footer.basics.philosophy': 'فلسفة الشركة',
    'careers.footer.basics.ceoMessage': 'رسالة من الرئيس التنفيذي',
    'careers.footer.basics.disabilities': 'توظيف الأشخاص ذوي الإعاقة',
    'careers.footer.basics.recruitment': 'ما هو مهم في التوظيف',
    'careers.footer.basics.graduates': 'يبدأ توظيف الخريجين الجدد من هنا',
    
    // Footer - Learn About Business
    'careers.footer.business.title': 'تعرف على الأعمال',
    'careers.footer.business.strategy': 'استراتيجية أعمال Upvista Digital',
    'careers.footer.business.products': 'منتجات Upvista Digital',
    'careers.footer.business.globalStrategy': 'الاستراتيجية العالمية لـ Upvista Digital',
    'careers.footer.business.teamwork': 'الحلول الرقمية والعمل الجماعي',
    
    // Footer - Learn About Jobs
    'careers.footer.jobs.title': 'تعرف على الوظيفة',
    'careers.footer.jobs.teamIntro': 'مقدمة الفريق',
    'careers.footer.jobs.infrastructure': 'تطوير وتشغيل البنية التحتية للخدمة',
    'careers.footer.jobs.sales': 'المبيعات',
    'careers.footer.jobs.customerService': 'خدمة العملاء',
    'careers.footer.jobs.marketing': 'التسويق',
    'careers.footer.jobs.consulting': 'استشارات النظام',
    'careers.footer.jobs.corporate': 'الشركات',
    
    // Footer - Application Guidelines
    'careers.footer.application.title': 'إرشادات التقديم والدخول',
    'careers.footer.application.newGraduate': 'توظيف الخريجين الجدد',
    'careers.footer.application.career': 'التوظيف المهني',
    'careers.footer.application.disabilities': 'توظيف الأشخاص ذوي الإعاقة',
    'careers.footer.application.potential': 'التوظيف المحتمل',
    'careers.footer.application.partTime': 'الوظائف بدوام جزئي والتدريب الداخلي',
    
    // Footer - Contact
    'careers.footer.contact.title': 'اتصل بنا',
    'careers.footer.contact.email': 'careers@upvistadigital.com',
    'careers.footer.contact.phone': '+92 (0) 3320486955',
    'careers.footer.contact.linkedin': 'LinkedIn',
    'careers.footer.contact.whatsapp': 'WhatsApp',
    'careers.footer.contact.facebook': 'Facebook',
  },
  KO: {
    // Header Navigation
    'careers.nav.backToSite': '솔루션 사이트로 돌아가기',
    'careers.nav.basics': '기본 배우기',
    'careers.nav.business': '비즈니스 알아보기',
    'careers.nav.jobs': '직무 알아보기',
    'careers.nav.apply': '채용 공고 및 지원',
    
    // Header Branding
    'careers.header.companyName': 'Upvista',
    'careers.header.portal': '채용',
    'careers.header.portalFull': '채용 포털',
    
    // Footer Sections
    'careers.footer.companyName': 'Upvista Digital',
    'careers.footer.recruitmentSite': '채용 사이트',
    'careers.footer.buildingFuture': '미래 건설',
    'careers.footer.copyright': 'Copyright © Upvista Digital. All rights reserved.',
    
    // Footer - Policies and Legal
    'careers.footer.policies.title': '정책 및 법률',
    'careers.footer.policies.personalInfo': '채용 활동에서의 개인정보 취급',
    'careers.footer.policies.applicationTerms': '채용 지원 약관',
    'careers.footer.policies.privacyNotice': '채용 개인정보 보호 안내',
    'careers.footer.policies.employmentRules': '고용 지원에 관한 규칙',
    'careers.footer.policies.dataProtection': '데이터 보호 이니셔티브',
    'careers.footer.policies.trademark': '상표 및 저작권 고지',
    'careers.footer.policies.terms': '이용약관',
    'careers.footer.policies.privacy': '개인정보 보호정책',
    'careers.footer.policies.faq': '자주 묻는 질문',
    
    // Footer - Learn the Basics
    'careers.footer.basics.title': '기본 배우기',
    'careers.footer.basics.upvistaIn3': '3분 안에 Upvista Digital',
    'careers.footer.basics.philosophy': '기업 철학',
    'careers.footer.basics.ceoMessage': 'CEO 메시지',
    'careers.footer.basics.disabilities': '장애인 채용',
    'careers.footer.basics.recruitment': '채용에서 중요한 것',
    'careers.footer.basics.graduates': '신입사원 채용은 여기서 시작',
    
    // Footer - Learn About Business
    'careers.footer.business.title': '비즈니스 알아보기',
    'careers.footer.business.strategy': 'Upvista Digital의 비즈니스 전략',
    'careers.footer.business.products': 'Upvista Digital 제품',
    'careers.footer.business.globalStrategy': 'Upvista Digital의 글로벌 전략',
    'careers.footer.business.teamwork': '디지털 솔루션 및 팀워크',
    
    // Footer - Learn About Jobs
    'careers.footer.jobs.title': '직무 알아보기',
    'careers.footer.jobs.teamIntro': '팀 소개',
    'careers.footer.jobs.infrastructure': '서비스 인프라 개발 및 운영',
    'careers.footer.jobs.sales': '영업',
    'careers.footer.jobs.customerService': '고객 서비스',
    'careers.footer.jobs.marketing': '마케팅',
    'careers.footer.jobs.consulting': '시스템 컨설팅',
    'careers.footer.jobs.corporate': '기업',
    
    // Footer - Application Guidelines
    'careers.footer.application.title': '지원 가이드라인 및 입력',
    'careers.footer.application.newGraduate': '신입사원 채용',
    'careers.footer.application.career': '경력 채용',
    'careers.footer.application.disabilities': '장애인 채용',
    'careers.footer.application.potential': '잠재력 채용',
    'careers.footer.application.partTime': '파트타임 및 인턴십',
    
    // Footer - Contact
    'careers.footer.contact.title': '문의하기',
    'careers.footer.contact.email': 'careers@upvistadigital.com',
    'careers.footer.contact.phone': '+92 (0) 3320486955',
    'careers.footer.contact.linkedin': 'LinkedIn',
    'careers.footer.contact.whatsapp': 'WhatsApp',
    'careers.footer.contact.facebook': 'Facebook',
  },
  ZH: {
    // Header Navigation
    'careers.nav.backToSite': '返回解决方案网站',
    'careers.nav.basics': '学习基础知识',
    'careers.nav.business': '了解业务',
    'careers.nav.jobs': '了解工作',
    'careers.nav.apply': '职位空缺与申请',
    
    // Header Branding
    'careers.header.companyName': 'Upvista',
    'careers.header.portal': '招聘',
    'careers.header.portalFull': '招聘门户',
    
    // Footer Sections
    'careers.footer.companyName': 'Upvista Digital',
    'careers.footer.recruitmentSite': '招聘网站',
    'careers.footer.buildingFuture': '建设未来',
    'careers.footer.copyright': 'Copyright © Upvista Digital. All rights reserved.',
    
    // Footer - Policies and Legal
    'careers.footer.policies.title': '政策与法律',
    'careers.footer.policies.personalInfo': '招聘活动中的个人信息处理',
    'careers.footer.policies.applicationTerms': '招聘申请条款',
    'careers.footer.policies.privacyNotice': '招聘隐私声明',
    'careers.footer.policies.employmentRules': '申请就业的规则',
    'careers.footer.policies.dataProtection': '数据保护计划',
    'careers.footer.policies.trademark': '商标和版权声明',
    'careers.footer.policies.terms': '条款与条件',
    'careers.footer.policies.privacy': '隐私政策',
    'careers.footer.policies.faq': '常见问题',
    
    // Footer - Learn the Basics
    'careers.footer.basics.title': '学习基础知识',
    'careers.footer.basics.upvistaIn3': '3分钟了解Upvista Digital',
    'careers.footer.basics.philosophy': '企业理念',
    'careers.footer.basics.ceoMessage': 'CEO致辞',
    'careers.footer.basics.disabilities': '残疾人招聘',
    'careers.footer.basics.recruitment': '招聘中的重要事项',
    'careers.footer.basics.graduates': '应届毕业生招聘从这里开始',
    
    // Footer - Learn About Business
    'careers.footer.business.title': '了解业务',
    'careers.footer.business.strategy': 'Upvista Digital的业务战略',
    'careers.footer.business.products': 'Upvista Digital产品',
    'careers.footer.business.globalStrategy': 'Upvista Digital的全球战略',
    'careers.footer.business.teamwork': '数字解决方案与团队合作',
    
    // Footer - Learn About Jobs
    'careers.footer.jobs.title': '了解工作',
    'careers.footer.jobs.teamIntro': '团队介绍',
    'careers.footer.jobs.infrastructure': '服务基础设施开发与运营',
    'careers.footer.jobs.sales': '销售',
    'careers.footer.jobs.customerService': '客户服务',
    'careers.footer.jobs.marketing': '市场营销',
    'careers.footer.jobs.consulting': '系统咨询',
    'careers.footer.jobs.corporate': '企业',
    
    // Footer - Application Guidelines
    'careers.footer.application.title': '申请指南与入口',
    'careers.footer.application.newGraduate': '应届毕业生招聘',
    'careers.footer.application.career': '职业招聘',
    'careers.footer.application.disabilities': '残疾人招聘',
    'careers.footer.application.potential': '潜力招聘',
    'careers.footer.application.partTime': '兼职和实习',
    
    // Footer - Contact
    'careers.footer.contact.title': '联系我们',
    'careers.footer.contact.email': 'careers@upvistadigital.com',
    'careers.footer.contact.phone': '+92 (0) 3320486955',
    'careers.footer.contact.linkedin': 'LinkedIn',
    'careers.footer.contact.whatsapp': 'WhatsApp',
    'careers.footer.contact.facebook': 'Facebook',
  },
  ID: {
    // Header Navigation
    'careers.nav.backToSite': 'Kembali ke Situs Solusi',
    'careers.nav.basics': 'Pelajari Dasar-dasar',
    'careers.nav.business': 'Pelajari Bisnis',
    'careers.nav.jobs': 'Pelajari Pekerjaan',
    'careers.nav.apply': 'Lowongan & Aplikasi Pekerjaan',
    
    // Header Branding
    'careers.header.companyName': 'Upvista',
    'careers.header.portal': 'Karir',
    'careers.header.portalFull': 'Portal Karir',
    
    // Footer Sections
    'careers.footer.companyName': 'Upvista Digital',
    'careers.footer.recruitmentSite': 'Situs Rekrutmen',
    'careers.footer.buildingFuture': 'Membangun Masa Depan',
    'careers.footer.copyright': 'Copyright © Upvista Digital. All rights reserved.',
    
    // Footer - Policies and Legal
    'careers.footer.policies.title': 'Kebijakan dan Hukum',
    'careers.footer.policies.personalInfo': 'Penanganan informasi pribadi dalam kegiatan rekrutmen',
    'careers.footer.policies.applicationTerms': 'Ketentuan Aplikasi Rekrutmen',
    'careers.footer.policies.privacyNotice': 'Pemberitahuan Privasi Rekrutmen',
    'careers.footer.policies.employmentRules': 'Aturan mengenai Melamar Pekerjaan',
    'careers.footer.policies.dataProtection': 'Inisiatif Perlindungan Data',
    'careers.footer.policies.trademark': 'Pemberitahuan Merek Dagang dan Hak Cipta',
    'careers.footer.policies.terms': 'Syarat & Ketentuan',
    'careers.footer.policies.privacy': 'Kebijakan Privasi',
    'careers.footer.policies.faq': 'FAQ',
    
    // Footer - Learn the Basics
    'careers.footer.basics.title': 'Pelajari Dasar-dasar',
    'careers.footer.basics.upvistaIn3': 'Upvista Digital dalam 3 menit',
    'careers.footer.basics.philosophy': 'Filosofi perusahaan',
    'careers.footer.basics.ceoMessage': 'Pesan dari CEO',
    'careers.footer.basics.disabilities': 'Merekrut penyandang disabilitas',
    'careers.footer.basics.recruitment': 'Apa yang penting dalam rekrutmen',
    'careers.footer.basics.graduates': 'Rekrutmen lulusan baru dimulai di sini',
    
    // Footer - Learn About Business
    'careers.footer.business.title': 'Pelajari Bisnis',
    'careers.footer.business.strategy': 'Strategi Bisnis Upvista Digital',
    'careers.footer.business.products': 'Produk Upvista Digital',
    'careers.footer.business.globalStrategy': 'Strategi Global Upvista Digital',
    'careers.footer.business.teamwork': 'Solusi Digital dan Kerja Sama Tim',
    
    // Footer - Learn About Jobs
    'careers.footer.jobs.title': 'Pelajari Pekerjaan',
    'careers.footer.jobs.teamIntro': 'Pengenalan Tim',
    'careers.footer.jobs.infrastructure': 'Pengembangan dan operasi infrastruktur layanan',
    'careers.footer.jobs.sales': 'Penjualan',
    'careers.footer.jobs.customerService': 'Layanan Pelanggan',
    'careers.footer.jobs.marketing': 'Pemasaran',
    'careers.footer.jobs.consulting': 'Konsultasi Sistem',
    'careers.footer.jobs.corporate': 'Perusahaan',
    
    // Footer - Application Guidelines
    'careers.footer.application.title': 'Panduan Aplikasi dan Entri',
    'careers.footer.application.newGraduate': 'Rekrutmen lulusan baru',
    'careers.footer.application.career': 'Rekrutmen Karir',
    'careers.footer.application.disabilities': 'Merekrut penyandang disabilitas',
    'careers.footer.application.potential': 'Rekrutmen Potensial',
    'careers.footer.application.partTime': 'Pekerjaan paruh waktu dan magang',
    
    // Footer - Contact
    'careers.footer.contact.title': 'Hubungi Kami',
    'careers.footer.contact.email': 'careers@upvistadigital.com',
    'careers.footer.contact.phone': '+92 (0) 3320486955',
    'careers.footer.contact.linkedin': 'LinkedIn',
    'careers.footer.contact.whatsapp': 'WhatsApp',
    'careers.footer.contact.facebook': 'Facebook',
  },
  FR: {
    // Header Navigation
    'careers.nav.backToSite': 'Retour au site de solutions',
    'careers.nav.basics': 'Apprendre les bases',
    'careers.nav.business': 'En savoir plus sur l\'entreprise',
    'careers.nav.jobs': 'En savoir plus sur les emplois',
    'careers.nav.apply': 'Offres d\'emploi et candidatures',
    
    // Header Branding
    'careers.header.companyName': 'Upvista',
    'careers.header.portal': 'Carrières',
    'careers.header.portalFull': 'Portail Carrières',
    
    // Footer Sections
    'careers.footer.companyName': 'Upvista Digital',
    'careers.footer.recruitmentSite': 'Site de recrutement',
    'careers.footer.buildingFuture': 'Construire l\'avenir',
    'careers.footer.copyright': 'Copyright © Upvista Digital. All rights reserved.',
    
    // Footer - Policies and Legal
    'careers.footer.policies.title': 'Politiques et mentions légales',
    'careers.footer.policies.personalInfo': 'Traitement des informations personnelles dans les activités de recrutement',
    'careers.footer.policies.applicationTerms': 'Conditions de candidature au recrutement',
    'careers.footer.policies.privacyNotice': 'Avis de confidentialité du recrutement',
    'careers.footer.policies.employmentRules': 'Règles concernant la candidature à un emploi',
    'careers.footer.policies.dataProtection': 'Initiatives de protection des données',
    'careers.footer.policies.trademark': 'Avis de marque et de droits d\'auteur',
    'careers.footer.policies.terms': 'Conditions générales',
    'careers.footer.policies.privacy': 'Politique de confidentialité',
    'careers.footer.policies.faq': 'FAQ',
    
    // Footer - Learn the Basics
    'careers.footer.basics.title': 'Apprendre les bases',
    'careers.footer.basics.upvistaIn3': 'Upvista Digital en 3 minutes',
    'careers.footer.basics.philosophy': 'Philosophie d\'entreprise',
    'careers.footer.basics.ceoMessage': 'Message du PDG',
    'careers.footer.basics.disabilities': 'Embauche de personnes handicapées',
    'careers.footer.basics.recruitment': 'Ce qui est important dans le recrutement',
    'careers.footer.basics.graduates': 'Le recrutement de nouveaux diplômés commence ici',
    
    // Footer - Learn About Business
    'careers.footer.business.title': 'En savoir plus sur l\'entreprise',
    'careers.footer.business.strategy': 'Stratégie commerciale d\'Upvista Digital',
    'careers.footer.business.products': 'Produits Upvista Digital',
    'careers.footer.business.globalStrategy': 'Stratégie mondiale d\'Upvista Digital',
    'careers.footer.business.teamwork': 'Solutions numériques et travail d\'équipe',
    
    // Footer - Learn About Jobs
    'careers.footer.jobs.title': 'En savoir plus sur l\'emploi',
    'careers.footer.jobs.teamIntro': 'Présentation de l\'équipe',
    'careers.footer.jobs.infrastructure': 'Développement et exploitation de l\'infrastructure de service',
    'careers.footer.jobs.sales': 'Ventes',
    'careers.footer.jobs.customerService': 'Service client',
    'careers.footer.jobs.marketing': 'Marketing',
    'careers.footer.jobs.consulting': 'Conseil en systèmes',
    'careers.footer.jobs.corporate': 'Entreprise',
    
    // Footer - Application Guidelines
    'careers.footer.application.title': 'Directives de candidature et entrée',
    'careers.footer.application.newGraduate': 'Recrutement de nouveaux diplômés',
    'careers.footer.application.career': 'Recrutement de carrière',
    'careers.footer.application.disabilities': 'Embauche de personnes handicapées',
    'careers.footer.application.potential': 'Recrutement potentiel',
    'careers.footer.application.partTime': 'Emplois à temps partiel et stages',
    
    // Footer - Contact
    'careers.footer.contact.title': 'Contactez-nous',
    'careers.footer.contact.email': 'careers@upvistadigital.com',
    'careers.footer.contact.phone': '+92 (0) 3320486955',
    'careers.footer.contact.linkedin': 'LinkedIn',
    'careers.footer.contact.whatsapp': 'WhatsApp',
    'careers.footer.contact.facebook': 'Facebook',
  },
  ES: {
    // Header Navigation
    'careers.nav.backToSite': 'Volver al sitio de soluciones',
    'careers.nav.basics': 'Aprender lo básico',
    'careers.nav.business': 'Conocer el negocio',
    'careers.nav.jobs': 'Conocer los trabajos',
    'careers.nav.apply': 'Ofertas de empleo y solicitudes',
    
    // Header Branding
    'careers.header.companyName': 'Upvista',
    'careers.header.portal': 'Carreras',
    'careers.header.portalFull': 'Portal de Carreras',
    
    // Footer Sections
    'careers.footer.companyName': 'Upvista Digital',
    'careers.footer.recruitmentSite': 'Sitio de reclutamiento',
    'careers.footer.buildingFuture': 'Construyendo el futuro',
    'careers.footer.copyright': 'Copyright © Upvista Digital. All rights reserved.',
    
    // Footer - Policies and Legal
    'careers.footer.policies.title': 'Políticas y asuntos legales',
    'careers.footer.policies.personalInfo': 'Manejo de información personal en actividades de reclutamiento',
    'careers.footer.policies.applicationTerms': 'Términos de solicitud de reclutamiento',
    'careers.footer.policies.privacyNotice': 'Aviso de privacidad de reclutamiento',
    'careers.footer.policies.employmentRules': 'Reglas sobre la solicitud de empleo',
    'careers.footer.policies.dataProtection': 'Iniciativas de protección de datos',
    'careers.footer.policies.trademark': 'Aviso de marca registrada y derechos de autor',
    'careers.footer.policies.terms': 'Términos y condiciones',
    'careers.footer.policies.privacy': 'Política de privacidad',
    'careers.footer.policies.faq': 'Preguntas frecuentes',
    
    // Footer - Learn the Basics
    'careers.footer.basics.title': 'Aprender lo básico',
    'careers.footer.basics.upvistaIn3': 'Upvista Digital en 3 minutos',
    'careers.footer.basics.philosophy': 'Filosofía corporativa',
    'careers.footer.basics.ceoMessage': 'Mensaje del CEO',
    'careers.footer.basics.disabilities': 'Contratación de personas con discapacidad',
    'careers.footer.basics.recruitment': 'Lo que es importante en el reclutamiento',
    'careers.footer.basics.graduates': 'El reclutamiento de nuevos graduados comienza aquí',
    
    // Footer - Learn About Business
    'careers.footer.business.title': 'Conocer el negocio',
    'careers.footer.business.strategy': 'Estrategia de negocios de Upvista Digital',
    'careers.footer.business.products': 'Productos de Upvista Digital',
    'careers.footer.business.globalStrategy': 'Estrategia global de Upvista Digital',
    'careers.footer.business.teamwork': 'Soluciones digitales y trabajo en equipo',
    
    // Footer - Learn About Jobs
    'careers.footer.jobs.title': 'Conocer el trabajo',
    'careers.footer.jobs.teamIntro': 'Presentación del equipo',
    'careers.footer.jobs.infrastructure': 'Desarrollo y operación de infraestructura de servicios',
    'careers.footer.jobs.sales': 'Ventas',
    'careers.footer.jobs.customerService': 'Servicio al cliente',
    'careers.footer.jobs.marketing': 'Marketing',
    'careers.footer.jobs.consulting': 'Consultoría de sistemas',
    'careers.footer.jobs.corporate': 'Corporativo',
    
    // Footer - Application Guidelines
    'careers.footer.application.title': 'Directrices de solicitud y entrada',
    'careers.footer.application.newGraduate': 'Reclutamiento de nuevos graduados',
    'careers.footer.application.career': 'Reclutamiento de carrera',
    'careers.footer.application.disabilities': 'Contratación de personas con discapacidad',
    'careers.footer.application.potential': 'Reclutamiento potencial',
    'careers.footer.application.partTime': 'Trabajos a tiempo parcial y pasantías',
    
    // Footer - Contact
    'careers.footer.contact.title': 'Contáctenos',
    'careers.footer.contact.email': 'careers@upvistadigital.com',
    'careers.footer.contact.phone': '+92 (0) 3320486955',
    'careers.footer.contact.linkedin': 'LinkedIn',
    'careers.footer.contact.whatsapp': 'WhatsApp',
    'careers.footer.contact.facebook': 'Facebook',
  },
  TR: {
    // Header Navigation
    'careers.nav.backToSite': 'Çözüm Sitesine Dön',
    'careers.nav.basics': 'Temelleri Öğren',
    'careers.nav.business': 'İş Hakkında Bilgi Edin',
    'careers.nav.jobs': 'İşler Hakkında Bilgi Edin',
    'careers.nav.apply': 'İş İlanları ve Başvurular',
    
    // Header Branding
    'careers.header.companyName': 'Upvista',
    'careers.header.portal': 'Kariyer',
    'careers.header.portalFull': 'Kariyer Portalı',
    
    // Footer Sections
    'careers.footer.companyName': 'Upvista Digital',
    'careers.footer.recruitmentSite': 'İşe Alım Sitesi',
    'careers.footer.buildingFuture': 'Geleceği İnşa Etmek',
    'careers.footer.copyright': 'Copyright © Upvista Digital. All rights reserved.',
    
    // Footer - Policies and Legal
    'careers.footer.policies.title': 'Politikalar ve Yasal',
    'careers.footer.policies.personalInfo': 'İşe alım faaliyetlerinde kişisel bilgilerin ele alınması',
    'careers.footer.policies.applicationTerms': 'İşe Alım Başvuru Şartları',
    'careers.footer.policies.privacyNotice': 'İşe Alım Gizlilik Bildirimi',
    'careers.footer.policies.employmentRules': 'İstihdam için başvuru ile ilgili kurallar',
    'careers.footer.policies.dataProtection': 'Veri Koruma Girişimleri',
    'careers.footer.policies.trademark': 'Ticari Marka ve Telif Hakkı Bildirimi',
    'careers.footer.policies.terms': 'Şartlar ve Koşullar',
    'careers.footer.policies.privacy': 'Gizlilik Politikası',
    'careers.footer.policies.faq': 'SSS',
    
    // Footer - Learn the Basics
    'careers.footer.basics.title': 'Temelleri Öğren',
    'careers.footer.basics.upvistaIn3': '3 dakikada Upvista Digital',
    'careers.footer.basics.philosophy': 'Kurumsal felsefe',
    'careers.footer.basics.ceoMessage': 'CEO\'dan Mesaj',
    'careers.footer.basics.disabilities': 'Engelli kişileri işe alma',
    'careers.footer.basics.recruitment': 'İşe alımda önemli olan',
    'careers.footer.basics.graduates': 'Yeni mezun işe alımı buradan başlıyor',
    
    // Footer - Learn About Business
    'careers.footer.business.title': 'İş Hakkında Bilgi Edin',
    'careers.footer.business.strategy': 'Upvista Digital\'ın İş Stratejisi',
    'careers.footer.business.products': 'Upvista Digital Ürünleri',
    'careers.footer.business.globalStrategy': 'Upvista Digital\'ın Küresel Stratejisi',
    'careers.footer.business.teamwork': 'Dijital Çözümler ve Ekip Çalışması',
    
    // Footer - Learn About Jobs
    'careers.footer.jobs.title': 'İş Hakkında Bilgi Edin',
    'careers.footer.jobs.teamIntro': 'Takım Tanıtımı',
    'careers.footer.jobs.infrastructure': 'Hizmet altyapısı geliştirme ve operasyon',
    'careers.footer.jobs.sales': 'Satış',
    'careers.footer.jobs.customerService': 'Müşteri Hizmetleri',
    'careers.footer.jobs.marketing': 'Pazarlama',
    'careers.footer.jobs.consulting': 'Sistem Danışmanlığı',
    'careers.footer.jobs.corporate': 'Kurumsal',
    
    // Footer - Application Guidelines
    'careers.footer.application.title': 'Başvuru Kılavuzu ve Giriş',
    'careers.footer.application.newGraduate': 'Yeni mezun işe alımı',
    'careers.footer.application.career': 'Kariyer İşe Alımı',
    'careers.footer.application.disabilities': 'Engelli kişileri işe alma',
    'careers.footer.application.potential': 'Potansiyel İşe Alım',
    'careers.footer.application.partTime': 'Yarı zamanlı işler ve stajlar',
    
    // Footer - Contact
    'careers.footer.contact.title': 'Bize Ulaşın',
    'careers.footer.contact.email': 'careers@upvistadigital.com',
    'careers.footer.contact.phone': '+92 (0) 3320486955',
    'careers.footer.contact.linkedin': 'LinkedIn',
    'careers.footer.contact.whatsapp': 'WhatsApp',
    'careers.footer.contact.facebook': 'Facebook',
  },
  UR: {
    // Header Navigation
    'careers.nav.backToSite': 'حل کی سائٹ پر واپس جائیں',
    'careers.nav.basics': 'بنیادی باتیں سیکھیں',
    'careers.nav.business': 'کاروبار کے بارے میں جانیں',
    'careers.nav.jobs': 'ملازمتوں کے بارے میں جانیں',
    'careers.nav.apply': 'ملازمت کی خالی جگہیں اور درخواستیں',
    
    // Header Branding
    'careers.header.companyName': 'Upvista',
    'careers.header.portal': 'کیریئر',
    'careers.header.portalFull': 'کیریئر پورٹل',
    
    // Footer Sections
    'careers.footer.companyName': 'Upvista Digital',
    'careers.footer.recruitmentSite': 'بھرتی کی سائٹ',
    'careers.footer.buildingFuture': 'مستقبل کی تعمیر',
    'careers.footer.copyright': 'Copyright © Upvista Digital. All rights reserved.',
    
    // Footer - Policies and Legal
    'careers.footer.policies.title': 'پالیسیاں اور قانونی',
    'careers.footer.policies.personalInfo': 'بھرتی کی سرگرمیوں میں ذاتی معلومات کا انتظام',
    'careers.footer.policies.applicationTerms': 'بھرتی کی درخواست کی شرائط',
    'careers.footer.policies.privacyNotice': 'بھرتی رازداری نوٹس',
    'careers.footer.policies.employmentRules': 'ملازمت کے لیے درخواست دینے کے قواعد',
    'careers.footer.policies.dataProtection': 'ڈیٹا کے تحفظ کے اقدامات',
    'careers.footer.policies.trademark': 'ٹریڈ مارک اور کاپی رائٹ نوٹس',
    'careers.footer.policies.terms': 'شرائط و ضوابط',
    'careers.footer.policies.privacy': 'رازداری کی پالیسی',
    'careers.footer.policies.faq': 'عمومی سوالات',
    
    // Footer - Learn the Basics
    'careers.footer.basics.title': 'بنیادی باتیں سیکھیں',
    'careers.footer.basics.upvistaIn3': '3 منٹ میں Upvista Digital',
    'careers.footer.basics.philosophy': 'کارپوریٹ فلسفہ',
    'careers.footer.basics.ceoMessage': 'CEO کا پیغام',
    'careers.footer.basics.disabilities': 'معذور افراد کی بھرتی',
    'careers.footer.basics.recruitment': 'بھرتی میں کیا اہم ہے',
    'careers.footer.basics.graduates': 'نئے گریجویٹ کی بھرتی یہاں سے شروع ہوتی ہے',
    
    // Footer - Learn About Business
    'careers.footer.business.title': 'کاروبار کے بارے میں جانیں',
    'careers.footer.business.strategy': 'Upvista Digital کی کاروباری حکمت عملی',
    'careers.footer.business.products': 'Upvista Digital کی مصنوعات',
    'careers.footer.business.globalStrategy': 'Upvista Digital کی عالمی حکمت عملی',
    'careers.footer.business.teamwork': 'ڈیجیٹل حل اور ٹیم ورک',
    
    // Footer - Learn About Jobs
    'careers.footer.jobs.title': 'ملازمت کے بارے میں جانیں',
    'careers.footer.jobs.teamIntro': 'ٹیم کا تعارف',
    'careers.footer.jobs.infrastructure': 'سروس انفراسٹرکچر کی ترقی اور آپریشن',
    'careers.footer.jobs.sales': 'فروخت',
    'careers.footer.jobs.customerService': 'کسٹمر سروس',
    'careers.footer.jobs.marketing': 'مارکیٹنگ',
    'careers.footer.jobs.consulting': 'سسٹم کنسلٹنگ',
    'careers.footer.jobs.corporate': 'کارپوریٹ',
    
    // Footer - Application Guidelines
    'careers.footer.application.title': 'درخواست کی ہدایات اور داخلہ',
    'careers.footer.application.newGraduate': 'نئے گریجویٹ کی بھرتی',
    'careers.footer.application.career': 'کیریئر بھرتی',
    'careers.footer.application.disabilities': 'معذور افراد کی بھرتی',
    'careers.footer.application.potential': 'ممکنہ بھرتی',
    'careers.footer.application.partTime': 'پارٹ ٹائم ملازمتیں اور انٹرن شپس',
    
    // Footer - Contact
    'careers.footer.contact.title': 'ہم سے رابطہ کریں',
    'careers.footer.contact.email': 'careers@upvistadigital.com',
    'careers.footer.contact.phone': '+92 (0) 3320486955',
    'careers.footer.contact.linkedin': 'LinkedIn',
    'careers.footer.contact.whatsapp': 'WhatsApp',
    'careers.footer.contact.facebook': 'Facebook',
  },
};

export function CareersLanguageProvider({ children }: { children: React.ReactNode }) {
  // Get the main language context to sync with it
  const { currentLanguage: mainLanguage } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  // Sync with main language context
  useEffect(() => {
    setCurrentLanguage(mainLanguage);
  }, [mainLanguage]);

  // Also check localStorage on mount for backward compatibility
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language'); // Use main language storage
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

