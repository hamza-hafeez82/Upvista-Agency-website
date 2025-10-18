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
    
    // Careers Page - Hero Section
    'careers.page.hero.title1': 'Building a Society',
    'careers.page.hero.title2': 'Overflowing with Teamwork',
    'careers.page.hero.subtitle1': 'Upvista Digital is',
    'careers.page.hero.subtitle2': 'waiting for members to work together.',
    'careers.page.hero.applyButton': 'Job Openings & Applications',
    'careers.page.hero.basicsButton': 'Learn the Basics',
    
    // Careers Page - Find Recruitment Section
    'careers.page.findRecruitment.title': 'Find Recruitment Information',
    'careers.page.findRecruitment.recruitmentType': 'Recruitment Type',
    'careers.page.findRecruitment.selectJob': 'Select the Job',
    'careers.page.findRecruitment.selectPosition': 'Select a position',
    'careers.page.findRecruitment.findOpportunities': 'Find Opportunities',
    'careers.page.findRecruitment.searching': 'Searching...',
    'careers.page.findRecruitment.searchButton': 'Find Recruitment Information',
    'careers.page.findRecruitment.cantFind': 'Can\'t find what you\'re looking for?',
    'careers.page.findRecruitment.viewAll': 'View all open positions',
    
    // Recruitment Types
    'careers.page.recruitmentTypes.career': 'Career Recruitment',
    'careers.page.recruitmentTypes.potential': 'Potential Recruitment',
    'careers.page.recruitmentTypes.newGraduate': 'New Graduate Recruitment',
    
    // Job Status Labels
    'careers.page.jobStatus.active': 'Active',
    'careers.page.jobStatus.intern': 'Intern',
    'careers.page.jobStatus.future': 'Future',
    'careers.page.jobStatus.fullTime': 'Full-time',
    'careers.page.jobStatus.potential': 'Potential',
    
    // Search Results
    'careers.page.searchResults.title': 'Search Results',
    'careers.page.searchResults.found': 'Found',
    'careers.page.searchResults.positions': 'position',
    'careers.page.searchResults.positionsPlural': 'positions',
    'careers.page.searchResults.matchingCriteria': 'matching your criteria:',
    'careers.page.searchResults.viewDetails': 'View Details',
    'careers.page.searchResults.noPositions': 'No positions found',
    'careers.page.searchResults.tryAdjusting': 'Try adjusting your search criteria or browse all available positions.',
    'careers.page.searchResults.viewAllPositions': 'View All Positions',
    
    // Learn the Basics Section
    'careers.page.basics.title': 'Learn the Basics',
    'careers.page.basics.upvistaIn3': 'Upvista Digital in 3 minutes',
    'careers.page.basics.ceoMessage': 'Message from the CEO',
    'careers.page.basics.newGraduate': 'New graduate recruitment starts here',
    'careers.page.basics.philosophy': 'Corporate philosophy',
    'careers.page.basics.recruitment': 'What is important in recruitment',
    
    // Learn About Business Section
    'careers.page.business.title': 'Learn About Business',
    'careers.page.business.strategy': 'Upvista Digital\'s Business Strategy',
    'careers.page.business.products': 'Upvista Digital Products',
    'careers.page.business.globalStrategy': 'Upvista Digital\'s Global Strategy',
    'careers.page.business.teamwork': 'Digital Solutions and Teamwork',
    
    // Learn About Job Section
    'careers.page.jobs.title': 'Learn About Job',
    'careers.page.jobs.development': 'Development and Operation',
    'careers.page.jobs.marketing': 'Marketing',
    'careers.page.jobs.customerService': 'Customer Service',
    'careers.page.jobs.sales': 'Sales',
    'careers.page.jobs.consulting': 'System Consulting',
    'careers.page.jobs.corporate': 'Corporate',
    
    // Get to Know People Section
    'careers.page.people.title': 'Get to Know People',
    'careers.page.people.engineer.title': 'Engineer/Designer',
    'careers.page.people.engineer.description': 'Our engineering and design teams are the creative minds behind innovative digital solutions. Engineers work on cutting-edge technologies, building scalable systems and applications that drive business success. Designers craft intuitive user experiences and visually stunning interfaces that users love.',
    'careers.page.people.corporate.title': 'Corporate Positions',
    'careers.page.people.corporate.description': 'Our corporate team ensures smooth operations and strategic growth. From human resources managing talent acquisition to finance overseeing budgets and investments, these roles provide the foundation that enables our technical teams to focus on innovation and delivery.',
    'careers.page.people.business.title': 'Business Jobs',
    'careers.page.people.business.description': 'Business roles at Upvista Digital focus on growth, customer success, and market expansion. From marketing specialists driving brand awareness to sales representatives building client relationships, these positions are crucial for our company\'s continued success and expansion.',
    
    // Get to Know Workspace Section
    'careers.page.workspace.title': 'Get to Know Workspace',
    'careers.page.workspace.office.title': 'Office & Remote Work',
    'careers.page.workspace.office.description': 'We offer flexible work arrangements with modern office spaces and comprehensive remote work support. Our offices are designed for collaboration and productivity, while our remote work policies ensure you can work effectively from anywhere.',
    'careers.page.workspace.communication.title': 'Communication & Internal Systems',
    'careers.page.workspace.communication.description': 'We use cutting-edge communication tools and internal systems to ensure seamless collaboration. From project management platforms to instant messaging systems, we\'ve built an infrastructure that keeps teams connected and productive.',
    'careers.page.workspace.learning.title': 'Learning & Career Development',
    'careers.page.workspace.learning.description': 'Our comprehensive onboarding process and continuous learning systems help you grow professionally. We provide career support, skill development programs, and regular performance evaluations to ensure your success and advancement.',
    'careers.page.workspace.culture.title': 'Company Culture & Benefits',
    'careers.page.workspace.culture.description': 'We foster a vibrant company culture with regular team events, competitive salary packages, and comprehensive benefits. Our evaluation system recognizes and rewards excellence while supporting continuous improvement and growth.',
    
    // What Upvista Digital Is Section
    'careers.page.about.title': 'What Upvista Digital Is',
    'careers.page.about.innovation.title': 'Innovation Leader',
    'careers.page.about.innovation.description': 'Upvista Digital is a pioneering force in digital transformation, constantly pushing boundaries and creating innovative solutions that shape the future of technology and business.',
    'careers.page.about.impact.title': 'Global Impact',
    'careers.page.about.impact.description': 'We\'re building solutions that make a global impact while respecting local cultures and values. Our work touches millions of lives worldwide through technology that matters.',
    'careers.page.about.team.title': 'Team Excellence',
    'careers.page.about.team.description': 'Our strength lies in our people - talented individuals who come together to create something greater than the sum of its parts through collaboration, innovation, and shared vision.',
    
    // CTA Section
    'careers.page.cta.title': 'Ready to Make Your Impact?',
    'careers.page.cta.description1': 'Join a team that\'s building the future of digital solutions.',
    'careers.page.cta.description2': 'Explore our open positions and start your journey with Upvista Digital today.',
    'careers.page.cta.viewJobsButton': 'View Job Openings',
    'careers.page.cta.eventsButton': 'Recruitment Events',
    
    // Basics Page
    'careers.basics.hero.title': 'Learn the Basics',
    'careers.basics.hero.subtitle': 'Discover what makes Upvista Digital a unique place to build your career.',
    
    // Basics Sections
    'careers.basics.about.title': 'About Upvista Digital',
    'careers.basics.about.subtitle': 'Upvista Digital in 3 minutes',
    'careers.basics.about.description': 'We will explain Upvista Digital\'s philosophy, business, work, and working style in an easy-to-understand manner using symbolic numbers and keywords.',
    
    'careers.basics.philosophy.title': 'Corporate Philosophy',
    'careers.basics.philosophy.subtitle': 'Our Mindset and Culture',
    'careers.basics.philosophy.description': 'We would like to introduce Upvista Digital\'s corporate philosophy, which consists of our purpose and five cultures.',
    
    'careers.basics.ceo.title': 'Message from the CEO',
    'careers.basics.ceo.subtitle': 'Warm words from Hamza Hafeez',
    'careers.basics.ceo.description': 'We present an interview with CEO about the company\'s future strategies and thoughts on building the organization.',
    
    'careers.basics.recruitment.title': 'What is important in recruitment',
    'careers.basics.recruitment.subtitle': 'Best practices for recruitment',
    'careers.basics.recruitment.description': 'We will explain the cultural fit that we value in recruitment and the indicators we use to measure that match.',
    
    'careers.basics.inclusive.title': 'Hiring people with disabilities',
    'careers.basics.inclusive.subtitle': 'Hiring people with disabilities',
    'careers.basics.inclusive.description': 'We will be sharing information about Upvista Digital\'s approach to hiring people with disabilities, working styles, and systems.',
    
    'careers.basics.graduates.title': 'New graduate recruitment',
    'careers.basics.graduates.subtitle': 'Instructions for new graduates',
    'careers.basics.graduates.description': 'We provide comprehensive programs, mentorship, and opportunities specifically designed for recent graduates to launch their careers.',
    
    // Basics CTA
    'careers.basics.cta.title': 'Upvista Digital is waiting for you',
    'careers.basics.cta.description1': 'Join Upvista Digital as a member and participate in projects that shape the future.',
    'careers.basics.cta.description2': 'We\'re looking for talented individuals who share our vision and passion for innovation.',
    'careers.basics.cta.applyButton': 'Job Openings & Applications',
    'careers.basics.cta.jobsButton': 'Learn About Jobs',
    
    // About Page
    'careers.about.back': 'Back to Learn the Basics',
    'careers.about.hero.title': 'About Upvista Digital',
    'careers.about.hero.subtitle': 'A technology company at the forefront of digital innovation, empowering businesses through enterprise software, web development, AI automation, cloud solutions, and cutting-edge design.',
    
    // Who We Are Section
    'careers.about.whoWeAre.title': 'Who We Are',
    'careers.about.whoWeAre.paragraph1': 'Upvista Digital is a comprehensive technology company that bridges the gap between innovation and implementation. We specialize in transforming complex business challenges into elegant digital solutions that drive growth and efficiency.',
    'careers.about.whoWeAre.paragraph2': 'Our expertise spans across multiple technology domains, enabling us to provide end-to-end solutions for enterprises of all sizes. From custom software development to AI-powered automation, we help organizations navigate the digital landscape with confidence and clarity.',
    
    // Core Services Section
    'careers.about.services.title': 'Our Core Services',
    'careers.about.services.enterprise.title': 'Enterprise Software Development',
    'careers.about.services.enterprise.item1': 'Custom Application Development',
    'careers.about.services.enterprise.item2': 'Enterprise Resource Planning (ERP)',
    'careers.about.services.enterprise.item3': 'Customer Relationship Management (CRM)',
    'careers.about.services.enterprise.item4': 'Business Process Management',
    'careers.about.services.enterprise.item5': 'Database Design & Management',
    'careers.about.services.enterprise.item6': 'API Development & Integration',
    'careers.about.services.enterprise.item7': 'Legacy System Modernization',
    
    'careers.about.services.web.title': 'Web Development',
    'careers.about.services.web.item1': 'Frontend Development (React, Vue, Angular)',
    'careers.about.services.web.item2': 'Backend Development (Node.js, Python, Java)',
    'careers.about.services.web.item3': 'Full-Stack Web Applications',
    'careers.about.services.web.item4': 'E-commerce Solutions',
    'careers.about.services.web.item5': 'Progressive Web Apps (PWA)',
    'careers.about.services.web.item6': 'Content Management Systems',
    'careers.about.services.web.item7': 'Web Performance Optimization',
    
    'careers.about.services.ai.title': 'AI and Automation',
    'careers.about.services.ai.item1': 'Machine Learning Solutions',
    'careers.about.services.ai.item2': 'Natural Language Processing',
    'careers.about.services.ai.item3': 'Computer Vision Applications',
    'careers.about.services.ai.item4': 'Robotic Process Automation (RPA)',
    'careers.about.services.ai.item5': 'Predictive Analytics',
    'careers.about.services.ai.item6': 'Intelligent Chatbots',
    'careers.about.services.ai.item7': 'AI-powered Business Intelligence',
    
    'careers.about.services.cloud.title': 'Cloud Solutions',
    'careers.about.services.cloud.item1': 'Cloud Migration & Strategy',
    'careers.about.services.cloud.item2': 'AWS, Azure, Google Cloud Services',
    'careers.about.services.cloud.item3': 'Infrastructure as a Service (IaaS)',
    'careers.about.services.cloud.item4': 'Platform as a Service (PaaS)',
    'careers.about.services.cloud.item5': 'Software as a Service (SaaS)',
    'careers.about.services.cloud.item6': 'Cloud Security & Compliance',
    'careers.about.services.cloud.item7': 'DevOps & CI/CD Implementation',
    
    'careers.about.services.design.title': 'Graphics and Design',
    'careers.about.services.design.item1': 'UI/UX Design',
    'careers.about.services.design.item2': 'Brand Identity & Logo Design',
    'careers.about.services.design.item3': 'Digital Marketing Materials',
    'careers.about.services.design.item4': 'Product Design & Prototyping',
    'careers.about.services.design.item5': 'Motion Graphics & Animation',
    'careers.about.services.design.item6': 'Web Design & Responsive Layouts',
    'careers.about.services.design.item7': 'User Experience Research',
    
    'careers.about.services.additional.title': 'Additional Services',
    'careers.about.services.additional.item1': 'Cybersecurity Solutions',
    'careers.about.services.additional.item2': 'Mobile App Development',
    'careers.about.services.additional.item3': 'Blockchain Development',
    'careers.about.services.additional.item4': 'IoT Solutions',
    'careers.about.services.additional.item5': 'Data Analytics & Visualization',
    'careers.about.services.additional.item6': 'Quality Assurance & Testing',
    'careers.about.services.additional.item7': 'Technical Consulting',
    
    // Community Section
    'careers.about.community.title': 'Our Community',
    'careers.about.community.intro': 'At Upvista Digital, we believe that the best innovations come from collaborative minds working together. Our community is a vibrant collective of engineers, designers, developers, and forward-thinking professionals who share a passion for technology and innovation.',
    'careers.about.community.collaboration.title': 'Collaboration & Events',
    'careers.about.community.collaboration.item1': 'Cross-functional project teams',
    'careers.about.community.collaboration.item2': 'Regular hackathons and coding challenges',
    'careers.about.community.collaboration.item3': 'Industry meetups and networking events',
    'careers.about.community.collaboration.item4': 'Knowledge sharing sessions',
    'careers.about.community.collaboration.item5': 'Open-source contributions',
    'careers.about.community.training.title': 'Training & Development',
    'careers.about.community.training.item1': 'Comprehensive web development bootcamps',
    'careers.about.community.training.item2': 'Advanced software engineering courses',
    'careers.about.community.training.item3': 'AI and machine learning workshops',
    'careers.about.community.training.item4': 'Cloud computing certification programs',
    'careers.about.community.training.item5': 'Design thinking and UX methodologies',
    
    // Technologies Lab Section
    'careers.about.lab.title': 'Upvista Technologies Lab',
    'careers.about.lab.intro': 'Our Technologies Lab serves as the innovation engine of Upvista Digital, where we experiment with emerging technologies and push the boundaries of what\'s possible. This dedicated research facility allows us to stay ahead of technological trends and develop next-generation solutions.',
    'careers.about.lab.focus.title': 'Research Focus Areas',
    'careers.about.lab.focus.item1': 'Artificial General Intelligence (AGI) development',
    'careers.about.lab.focus.item2': 'Quantum computing applications',
    'careers.about.lab.focus.item3': 'Advanced neural network architectures',
    'careers.about.lab.focus.item4': 'Human-computer interaction innovations',
    'careers.about.lab.focus.item5': 'Next-generation web technologies',
    'careers.about.lab.focus.item6': 'Autonomous systems and robotics',
    'careers.about.lab.focus.item7': 'Sustainable technology solutions',
    'careers.about.lab.conclusion': 'The lab operates as an incubator for breakthrough ideas, where our researchers and engineers collaborate with academic institutions and industry partners to explore the frontiers of technology and create solutions that will shape the future of digital innovation.',
    
    // About CTA
    'careers.about.cta.title': 'Ready to Join Our Mission?',
    'careers.about.cta.description': 'Be part of a team that\'s shaping the future of technology. Explore exciting career opportunities at Upvista Digital.',
    'careers.about.cta.button': 'Join Our Team',
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
    
    // Careers Page - Hero Section
    'careers.page.hero.title1': '社会を築く',
    'careers.page.hero.title2': 'チームワークに溢れた',
    'careers.page.hero.subtitle1': 'Upvista Digitalは',
    'careers.page.hero.subtitle2': '共に働くメンバーを待っています。',
    'careers.page.hero.applyButton': '求人情報と応募',
    'careers.page.hero.basicsButton': '基本を学ぶ',
    
    // Careers Page - Find Recruitment Section
    'careers.page.findRecruitment.title': '採用情報を検索',
    'careers.page.findRecruitment.recruitmentType': '採用タイプ',
    'careers.page.findRecruitment.selectJob': '職種を選択',
    'careers.page.findRecruitment.selectPosition': 'ポジションを選択',
    'careers.page.findRecruitment.findOpportunities': '機会を見つける',
    'careers.page.findRecruitment.searching': '検索中...',
    'careers.page.findRecruitment.searchButton': '採用情報を検索',
    'careers.page.findRecruitment.cantFind': 'お探しのものが見つかりませんか？',
    'careers.page.findRecruitment.viewAll': 'すべての募集ポジションを見る',
    
    // Recruitment Types
    'careers.page.recruitmentTypes.career': 'キャリア採用',
    'careers.page.recruitmentTypes.potential': 'ポテンシャル採用',
    'careers.page.recruitmentTypes.newGraduate': '新卒採用',
    
    // Job Status Labels
    'careers.page.jobStatus.active': '募集中',
    'careers.page.jobStatus.intern': 'インターン',
    'careers.page.jobStatus.future': '今後',
    'careers.page.jobStatus.fullTime': '正社員',
    'careers.page.jobStatus.potential': 'ポテンシャル',
    
    // Search Results
    'careers.page.searchResults.title': '検索結果',
    'careers.page.searchResults.found': '見つかりました',
    'careers.page.searchResults.positions': 'ポジション',
    'careers.page.searchResults.positionsPlural': 'ポジション',
    'careers.page.searchResults.matchingCriteria': '条件に一致する:',
    'careers.page.searchResults.viewDetails': '詳細を見る',
    'careers.page.searchResults.noPositions': 'ポジションが見つかりません',
    'careers.page.searchResults.tryAdjusting': '検索条件を調整するか、すべての募集ポジションを閲覧してください。',
    'careers.page.searchResults.viewAllPositions': 'すべてのポジションを見る',
    
    // Learn the Basics Section
    'careers.page.basics.title': '基本を学ぶ',
    'careers.page.basics.upvistaIn3': 'Upvista Digitalを3分で',
    'careers.page.basics.ceoMessage': 'CEOからのメッセージ',
    'careers.page.basics.newGraduate': '新卒採用はこちらから',
    'careers.page.basics.philosophy': '企業理念',
    'careers.page.basics.recruitment': '採用で重要なこと',
    
    // Learn About Business Section
    'careers.page.business.title': 'ビジネスについて学ぶ',
    'careers.page.business.strategy': 'Upvista Digitalのビジネス戦略',
    'careers.page.business.products': 'Upvista Digital製品',
    'careers.page.business.globalStrategy': 'Upvista Digitalのグローバル戦略',
    'careers.page.business.teamwork': 'デジタルソリューションとチームワーク',
    
    // Learn About Job Section
    'careers.page.jobs.title': '仕事について学ぶ',
    'careers.page.jobs.development': '開発と運用',
    'careers.page.jobs.marketing': 'マーケティング',
    'careers.page.jobs.customerService': 'カスタマーサービス',
    'careers.page.jobs.sales': '営業',
    'careers.page.jobs.consulting': 'システムコンサルティング',
    'careers.page.jobs.corporate': 'コーポレート',
    
    // Get to Know People Section
    'careers.page.people.title': '人々を知る',
    'careers.page.people.engineer.title': 'エンジニア/デザイナー',
    'careers.page.people.engineer.description': '私たちのエンジニアリングとデザインチームは、革新的なデジタルソリューションの創造的な頭脳です。エンジニアは最先端技術に取り組み、ビジネスの成功を推進するスケーラブルなシステムとアプリケーションを構築します。デザイナーは、ユーザーが愛する直感的なユーザーエクスペリエンスと視覚的に美しいインターフェースを作成します。',
    'careers.page.people.corporate.title': 'コーポレートポジション',
    'careers.page.people.corporate.description': '私たちのコーポレートチームは、円滑な運営と戦略的成長を確保します。人材獲得を管理する人事から、予算と投資を監督する財務まで、これらの役割は、技術チームがイノベーションと提供に集中できる基盤を提供します。',
    'careers.page.people.business.title': 'ビジネス職',
    'careers.page.people.business.description': 'Upvista Digitalのビジネス職は、成長、顧客成功、市場拡大に焦点を当てています。ブランド認知度を高めるマーケティングスペシャリストから、クライアント関係を構築する営業担当者まで、これらのポジションは当社の継続的な成功と拡大に不可欠です。',
    
    // Get to Know Workspace Section
    'careers.page.workspace.title': 'ワークスペースを知る',
    'careers.page.workspace.office.title': 'オフィスとリモートワーク',
    'careers.page.workspace.office.description': '私たちは、最新のオフィススペースと包括的なリモートワークサポートを備えた柔軟な勤務形態を提供しています。オフィスはコラボレーションと生産性のために設計されており、リモートワークポリシーにより、どこからでも効果的に作業できます。',
    'careers.page.workspace.communication.title': 'コミュニケーションと社内システム',
    'careers.page.workspace.communication.description': '最先端のコミュニケーションツールと社内システムを使用して、シームレスなコラボレーションを確保します。プロジェクト管理プラットフォームからインスタントメッセージングシステムまで、チームを接続し生産性を維持するインフラストラクチャを構築しました。',
    'careers.page.workspace.learning.title': '学習とキャリア開発',
    'careers.page.workspace.learning.description': '包括的なオンボーディングプロセスと継続的な学習システムは、プロフェッショナルとして成長するのに役立ちます。キャリアサポート、スキル開発プログラム、定期的なパフォーマンス評価を提供し、成功と昇進を確実にします。',
    'careers.page.workspace.culture.title': '企業文化と福利厚生',
    'careers.page.workspace.culture.description': '定期的なチームイベント、競争力のある給与パッケージ、包括的な福利厚生を備えた活気のある企業文化を育てています。評価システムは、継続的な改善と成長をサポートしながら、卓越性を認識し報酬を与えます。',
    
    // What Upvista Digital Is Section
    'careers.page.about.title': 'Upvista Digitalとは',
    'careers.page.about.innovation.title': 'イノベーションリーダー',
    'careers.page.about.innovation.description': 'Upvista Digitalは、デジタルトランスフォーメーションの先駆者であり、常に境界を押し広げ、テクノロジーとビジネスの未来を形作る革新的なソリューションを創造しています。',
    'careers.page.about.impact.title': 'グローバルな影響',
    'careers.page.about.impact.description': '私たちは、地域の文化と価値観を尊重しながら、グローバルな影響を与えるソリューションを構築しています。重要なテクノロジーを通じて、私たちの仕事は世界中の何百万人もの生活に影響を与えています。',
    'careers.page.about.team.title': 'チームの卓越性',
    'careers.page.about.team.description': '私たちの強みは人々にあります。コラボレーション、イノベーション、共有されたビジョンを通じて、部分の合計よりも大きなものを創造するために集まる才能ある個人です。',
    
    // CTA Section
    'careers.page.cta.title': 'あなたの影響を与える準備はできていますか？',
    'careers.page.cta.description1': 'デジタルソリューションの未来を築くチームに参加しましょう。',
    'careers.page.cta.description2': '募集ポジションを探索し、今日からUpvista Digitalでのあなたの旅を始めましょう。',
    'careers.page.cta.viewJobsButton': '求人を見る',
    'careers.page.cta.eventsButton': '採用イベント',
    
    // Basics Page
    'careers.basics.hero.title': '基本を学ぶ',
    'careers.basics.hero.subtitle': 'Upvista Digitalがキャリアを築くユニークな場所である理由を発見してください。',
    
    // Basics Sections
    'careers.basics.about.title': 'Upvista Digitalについて',
    'careers.basics.about.subtitle': 'Upvista Digitalを3分で',
    'careers.basics.about.description': 'シンボリックな数字とキーワードを使って、Upvista Digitalの哲学、ビジネス、仕事、働き方をわかりやすく説明します。',
    
    'careers.basics.philosophy.title': '企業理念',
    'careers.basics.philosophy.subtitle': '私たちのマインドセットと文化',
    'careers.basics.philosophy.description': '私たちの目的と5つの文化から成るUpvista Digitalの企業理念を紹介します。',
    
    'careers.basics.ceo.title': 'CEOからのメッセージ',
    'careers.basics.ceo.subtitle': 'Hamza Hafeezからの温かい言葉',
    'careers.basics.ceo.description': '会社の将来戦略と組織構築についての考えについて、CEOとのインタビューをご紹介します。',
    
    'careers.basics.recruitment.title': '採用で重要なこと',
    'careers.basics.recruitment.subtitle': '採用のベストプラクティス',
    'careers.basics.recruitment.description': '採用で重視する文化的適合性と、そのマッチングを測定するために使用する指標について説明します。',
    
    'careers.basics.inclusive.title': '障害者の採用',
    'careers.basics.inclusive.subtitle': '障害者の採用',
    'careers.basics.inclusive.description': 'Upvista Digitalの障害者採用へのアプローチ、働き方、システムについての情報を共有します。',
    
    'careers.basics.graduates.title': '新卒採用',
    'careers.basics.graduates.subtitle': '新卒者向けの案内',
    'careers.basics.graduates.description': '新卒者がキャリアをスタートするために特別に設計された包括的なプログラム、メンターシップ、機会を提供します。',
    
    // Basics CTA
    'careers.basics.cta.title': 'Upvista Digitalがあなたを待っています',
    'careers.basics.cta.description1': 'Upvista Digitalのメンバーとして参加し、未来を形作るプロジェクトに参加してください。',
    'careers.basics.cta.description2': '私たちのビジョンと革新への情熱を共有する才能ある個人を探しています。',
    'careers.basics.cta.applyButton': '求人情報と応募',
    'careers.basics.cta.jobsButton': '仕事について学ぶ',
    
    // About Page
    'careers.about.back': '基本を学ぶに戻る',
    'careers.about.hero.title': 'Upvista Digitalについて',
    'careers.about.hero.subtitle': 'エンタープライズソフトウェア、Web開発、AI自動化、クラウドソリューション、最先端のデザインを通じて企業を支援する、デジタルイノベーションの最前線にあるテクノロジー企業。',
    
    // Who We Are Section
    'careers.about.whoWeAre.title': '私たちは誰ですか',
    'careers.about.whoWeAre.paragraph1': 'Upvista Digitalは、革新と実装の間のギャップを埋める包括的なテクノロジー企業です。複雑なビジネス課題を成長と効率を促進するエレガントなデジタルソリューションに変換することを専門としています。',
    'careers.about.whoWeAre.paragraph2': '私たちの専門知識は複数のテクノロジードメインにまたがっており、あらゆる規模の企業にエンドツーエンドのソリューションを提供できます。カスタムソフトウェア開発からAI駆動の自動化まで、組織が自信と明確さを持ってデジタルランドスケープをナビゲートするのを支援します。',
    
    // Core Services Section
    'careers.about.services.title': 'コアサービス',
    'careers.about.services.enterprise.title': 'エンタープライズソフトウェア開発',
    'careers.about.services.enterprise.item1': 'カスタムアプリケーション開発',
    'careers.about.services.enterprise.item2': 'エンタープライズリソースプランニング（ERP）',
    'careers.about.services.enterprise.item3': '顧客関係管理（CRM）',
    'careers.about.services.enterprise.item4': 'ビジネスプロセス管理',
    'careers.about.services.enterprise.item5': 'データベース設計と管理',
    'careers.about.services.enterprise.item6': 'API開発と統合',
    'careers.about.services.enterprise.item7': 'レガシーシステムの近代化',
    
    'careers.about.services.web.title': 'Web開発',
    'careers.about.services.web.item1': 'フロントエンド開発（React、Vue、Angular）',
    'careers.about.services.web.item2': 'バックエンド開発（Node.js、Python、Java）',
    'careers.about.services.web.item3': 'フルスタックWebアプリケーション',
    'careers.about.services.web.item4': 'eコマースソリューション',
    'careers.about.services.web.item5': 'プログレッシブWebアプリ（PWA）',
    'careers.about.services.web.item6': 'コンテンツ管理システム',
    'careers.about.services.web.item7': 'Webパフォーマンス最適化',
    
    'careers.about.services.ai.title': 'AIと自動化',
    'careers.about.services.ai.item1': '機械学習ソリューション',
    'careers.about.services.ai.item2': '自然言語処理',
    'careers.about.services.ai.item3': 'コンピュータビジョンアプリケーション',
    'careers.about.services.ai.item4': 'ロボティックプロセスオートメーション（RPA）',
    'careers.about.services.ai.item5': '予測分析',
    'careers.about.services.ai.item6': 'インテリジェントチャットボット',
    'careers.about.services.ai.item7': 'AI搭載ビジネスインテリジェンス',
    
    'careers.about.services.cloud.title': 'クラウドソリューション',
    'careers.about.services.cloud.item1': 'クラウド移行と戦略',
    'careers.about.services.cloud.item2': 'AWS、Azure、Google Cloudサービス',
    'careers.about.services.cloud.item3': 'Infrastructure as a Service（IaaS）',
    'careers.about.services.cloud.item4': 'Platform as a Service（PaaS）',
    'careers.about.services.cloud.item5': 'Software as a Service（SaaS）',
    'careers.about.services.cloud.item6': 'クラウドセキュリティとコンプライアンス',
    'careers.about.services.cloud.item7': 'DevOpsとCI/CD実装',
    
    'careers.about.services.design.title': 'グラフィックスとデザイン',
    'careers.about.services.design.item1': 'UI/UXデザイン',
    'careers.about.services.design.item2': 'ブランドアイデンティティとロゴデザイン',
    'careers.about.services.design.item3': 'デジタルマーケティング資料',
    'careers.about.services.design.item4': '製品デザインとプロトタイピング',
    'careers.about.services.design.item5': 'モーショングラフィックスとアニメーション',
    'careers.about.services.design.item6': 'Webデザインとレスポンシブレイアウト',
    'careers.about.services.design.item7': 'ユーザーエクスペリエンスリサーチ',
    
    'careers.about.services.additional.title': '追加サービス',
    'careers.about.services.additional.item1': 'サイバーセキュリティソリューション',
    'careers.about.services.additional.item2': 'モバイルアプリ開発',
    'careers.about.services.additional.item3': 'ブロックチェーン開発',
    'careers.about.services.additional.item4': 'IoTソリューション',
    'careers.about.services.additional.item5': 'データ分析と可視化',
    'careers.about.services.additional.item6': '品質保証とテスト',
    'careers.about.services.additional.item7': '技術コンサルティング',
    
    // Community Section
    'careers.about.community.title': '私たちのコミュニティ',
    'careers.about.community.intro': 'Upvista Digitalでは、最高のイノベーションは協力的な心が一緒に働くことから生まれると信じています。私たちのコミュニティは、テクノロジーとイノベーションへの情熱を共有するエンジニア、デザイナー、開発者、前向きな専門家の活気あるコレクティブです。',
    'careers.about.community.collaboration.title': 'コラボレーションとイベント',
    'careers.about.community.collaboration.item1': '部門横断プロジェクトチーム',
    'careers.about.community.collaboration.item2': '定期的なハッカソンとコーディングチャレンジ',
    'careers.about.community.collaboration.item3': '業界ミートアップとネットワーキングイベント',
    'careers.about.community.collaboration.item4': '知識共有セッション',
    'careers.about.community.collaboration.item5': 'オープンソース貢献',
    'careers.about.community.training.title': 'トレーニングと開発',
    'careers.about.community.training.item1': '包括的なWeb開発ブートキャンプ',
    'careers.about.community.training.item2': '高度なソフトウェアエンジニアリングコース',
    'careers.about.community.training.item3': 'AIと機械学習ワークショップ',
    'careers.about.community.training.item4': 'クラウドコンピューティング認定プログラム',
    'careers.about.community.training.item5': 'デザイン思考とUX方法論',
    
    // Technologies Lab Section
    'careers.about.lab.title': 'Upvista Technologies Lab',
    'careers.about.lab.intro': '私たちのTechnologies Labは、Upvista Digitalのイノベーションエンジンとして機能し、新興技術を実験し、可能性の境界を押し広げています。この専用研究施設により、技術トレンドの先を行き、次世代ソリューションを開発することができます。',
    'careers.about.lab.focus.title': '研究重点分野',
    'careers.about.lab.focus.item1': '汎用人工知能（AGI）開発',
    'careers.about.lab.focus.item2': '量子コンピューティングアプリケーション',
    'careers.about.lab.focus.item3': '高度なニューラルネットワークアーキテクチャ',
    'careers.about.lab.focus.item4': 'ヒューマンコンピュータインタラクションイノベーション',
    'careers.about.lab.focus.item5': '次世代Web技術',
    'careers.about.lab.focus.item6': '自律システムとロボティクス',
    'careers.about.lab.focus.item7': '持続可能な技術ソリューション',
    'careers.about.lab.conclusion': 'ラボは画期的なアイデアのインキュベーターとして機能し、研究者とエンジニアが学術機関や業界パートナーと協力して技術のフロンティアを探索し、デジタルイノベーションの未来を形作るソリューションを作成します。',
    
    // About CTA
    'careers.about.cta.title': '私たちのミッションに参加する準備はできていますか？',
    'careers.about.cta.description': 'テクノロジーの未来を形作るチームの一員になりましょう。Upvista Digitalでのエキサイティングなキャリア機会を探索してください。',
    'careers.about.cta.button': '私たちのチームに参加',
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
    
    // Careers Page - Hero Section
    'careers.page.hero.title1': 'بناء مجتمع',
    'careers.page.hero.title2': 'يفيض بالعمل الجماعي',
    'careers.page.hero.subtitle1': 'Upvista Digital',
    'careers.page.hero.subtitle2': 'في انتظار الأعضاء للعمل معًا.',
    'careers.page.hero.applyButton': 'الوظائف الشاغرة والتطبيقات',
    'careers.page.hero.basicsButton': 'تعلم الأساسيات',
    
    // Careers Page - Find Recruitment Section
    'careers.page.findRecruitment.title': 'البحث عن معلومات التوظيف',
    'careers.page.findRecruitment.recruitmentType': 'نوع التوظيف',
    'careers.page.findRecruitment.selectJob': 'اختر الوظيفة',
    'careers.page.findRecruitment.selectPosition': 'اختر منصبًا',
    'careers.page.findRecruitment.findOpportunities': 'ابحث عن فرص',
    'careers.page.findRecruitment.searching': 'جاري البحث...',
    'careers.page.findRecruitment.searchButton': 'البحث عن معلومات التوظيف',
    'careers.page.findRecruitment.cantFind': 'لا يمكنك العثور على ما تبحث عنه؟',
    'careers.page.findRecruitment.viewAll': 'عرض جميع المناصب المفتوحة',
    
    // Recruitment Types
    'careers.page.recruitmentTypes.career': 'التوظيف المهني',
    'careers.page.recruitmentTypes.potential': 'التوظيف المحتمل',
    'careers.page.recruitmentTypes.newGraduate': 'توظيف الخريجين الجدد',
    
    // Job Status Labels
    'careers.page.jobStatus.active': 'نشط',
    'careers.page.jobStatus.intern': 'متدرب',
    'careers.page.jobStatus.future': 'مستقبلي',
    'careers.page.jobStatus.fullTime': 'دوام كامل',
    'careers.page.jobStatus.potential': 'محتمل',
    
    // Search Results
    'careers.page.searchResults.title': 'نتائج البحث',
    'careers.page.searchResults.found': 'تم العثور على',
    'careers.page.searchResults.positions': 'منصب',
    'careers.page.searchResults.positionsPlural': 'مناصب',
    'careers.page.searchResults.matchingCriteria': 'يطابق معاييرك:',
    'careers.page.searchResults.viewDetails': 'عرض التفاصيل',
    'careers.page.searchResults.noPositions': 'لم يتم العثور على مناصب',
    'careers.page.searchResults.tryAdjusting': 'حاول تعديل معايير البحث أو تصفح جميع المناصب المتاحة.',
    'careers.page.searchResults.viewAllPositions': 'عرض جميع المناصب',
    
    // Learn the Basics Section
    'careers.page.basics.title': 'تعلم الأساسيات',
    'careers.page.basics.upvistaIn3': 'Upvista Digital في 3 دقائق',
    'careers.page.basics.ceoMessage': 'رسالة من الرئيس التنفيذي',
    'careers.page.basics.newGraduate': 'يبدأ توظيف الخريجين الجدد من هنا',
    'careers.page.basics.philosophy': 'فلسفة الشركة',
    'careers.page.basics.recruitment': 'ما هو مهم في التوظيف',
    
    // Learn About Business Section
    'careers.page.business.title': 'تعرف على الأعمال',
    'careers.page.business.strategy': 'استراتيجية أعمال Upvista Digital',
    'careers.page.business.products': 'منتجات Upvista Digital',
    'careers.page.business.globalStrategy': 'الاستراتيجية العالمية لـ Upvista Digital',
    'careers.page.business.teamwork': 'الحلول الرقمية والعمل الجماعي',
    
    // Learn About Job Section
    'careers.page.jobs.title': 'تعرف على الوظيفة',
    'careers.page.jobs.development': 'التطوير والتشغيل',
    'careers.page.jobs.marketing': 'التسويق',
    'careers.page.jobs.customerService': 'خدمة العملاء',
    'careers.page.jobs.sales': 'المبيعات',
    'careers.page.jobs.consulting': 'استشارات النظام',
    'careers.page.jobs.corporate': 'الشركات',
    
    // Get to Know People Section
    'careers.page.people.title': 'تعرف على الأشخاص',
    'careers.page.people.engineer.title': 'مهندس/مصمم',
    'careers.page.people.engineer.description': 'فرق الهندسة والتصميم لدينا هي العقول المبدعة وراء الحلول الرقمية المبتكرة. يعمل المهندسون على أحدث التقنيات، ويبنون أنظمة وتطبيقات قابلة للتوسع تدفع نجاح الأعمال. يصنع المصممون تجارب مستخدم بديهية وواجهات مذهلة بصريًا يحبها المستخدمون.',
    'careers.page.people.corporate.title': 'المناصب المؤسسية',
    'careers.page.people.corporate.description': 'يضمن فريقنا المؤسسي العمليات السلسة والنمو الاستراتيجي. من الموارد البشرية التي تدير اكتساب المواهب إلى التمويل الذي يشرف على الميزانيات والاستثمارات، توفر هذه الأدوار الأساس الذي يمكّن فرقنا التقنية من التركيز على الابتكار والتسليم.',
    'careers.page.people.business.title': 'وظائف الأعمال',
    'careers.page.people.business.description': 'تركز الأدوار التجارية في Upvista Digital على النمو ونجاح العملاء وتوسع السوق. من المتخصصين في التسويق الذين يدفعون الوعي بالعلامة التجارية إلى ممثلي المبيعات الذين يبنون علاقات العملاء، هذه المناصب حاسمة لنجاح شركتنا المستمر وتوسعها.',
    
    // Get to Know Workspace Section
    'careers.page.workspace.title': 'تعرف على مساحة العمل',
    'careers.page.workspace.office.title': 'المكتب والعمل عن بُعد',
    'careers.page.workspace.office.description': 'نقدم ترتيبات عمل مرنة مع مساحات مكتبية حديثة ودعم شامل للعمل عن بُعد. تم تصميم مكاتبنا للتعاون والإنتاجية، بينما تضمن سياسات العمل عن بُعد لدينا أنه يمكنك العمل بفعالية من أي مكان.',
    'careers.page.workspace.communication.title': 'التواصل والأنظمة الداخلية',
    'careers.page.workspace.communication.description': 'نستخدم أدوات الاتصال المتطورة والأنظمة الداخلية لضمان التعاون السلس. من منصات إدارة المشاريع إلى أنظمة المراسلة الفورية، قمنا ببناء بنية تحتية تحافظ على اتصال الفرق وإنتاجيتها.',
    'careers.page.workspace.learning.title': 'التعلم وتطوير المهنة',
    'careers.page.workspace.learning.description': 'تساعدك عملية الإعداد الشاملة وأنظمة التعلم المستمر على النمو مهنيًا. نقدم الدعم المهني وبرامج تطوير المهارات وتقييمات الأداء المنتظمة لضمان نجاحك وتقدمك.',
    'careers.page.workspace.culture.title': 'ثقافة الشركة والمزايا',
    'careers.page.workspace.culture.description': 'نعزز ثقافة شركة نابضة بالحياة مع فعاليات الفريق المنتظمة وحزم الرواتب التنافسية والمزايا الشاملة. يعترف نظام التقييم لدينا ويكافئ التميز مع دعم التحسين المستمر والنمو.',
    
    // What Upvista Digital Is Section
    'careers.page.about.title': 'ما هي Upvista Digital',
    'careers.page.about.innovation.title': 'قائد الابتكار',
    'careers.page.about.innovation.description': 'Upvista Digital هي قوة رائدة في التحول الرقمي، تدفع الحدود باستمرار وتخلق حلولاً مبتكرة تشكل مستقبل التكنولوجيا والأعمال.',
    'careers.page.about.impact.title': 'التأثير العالمي',
    'careers.page.about.impact.description': 'نحن نبني حلولاً تحدث تأثيرًا عالميًا مع احترام الثقافات والقيم المحلية. يمس عملنا ملايين الأرواح في جميع أنحاء العالم من خلال التكنولوجيا المهمة.',
    'careers.page.about.team.title': 'التميز الجماعي',
    'careers.page.about.team.description': 'تكمن قوتنا في شعبنا - أفراد موهوبون يجتمعون لخلق شيء أكبر من مجموع أجزائه من خلال التعاون والابتكار والرؤية المشتركة.',
    
    // CTA Section
    'careers.page.cta.title': 'هل أنت مستعد لإحداث تأثيرك؟',
    'careers.page.cta.description1': 'انضم إلى فريق يبني مستقبل الحلول الرقمية.',
    'careers.page.cta.description2': 'استكشف مناصبنا المفتوحة وابدأ رحلتك مع Upvista Digital اليوم.',
    'careers.page.cta.viewJobsButton': 'عرض الوظائف الشاغرة',
    'careers.page.cta.eventsButton': 'فعاليات التوظيف',
    
    // Basics Page
    'careers.basics.hero.title': 'تعلم الأساسيات',
    'careers.basics.hero.subtitle': 'اكتشف ما يجعل Upvista Digital مكانًا فريدًا لبناء مسيرتك المهنية.',
    
    // Basics Sections
    'careers.basics.about.title': 'حول Upvista Digital',
    'careers.basics.about.subtitle': 'Upvista Digital في 3 دقائق',
    'careers.basics.about.description': 'سنشرح فلسفة وأعمال وعمل وأسلوب عمل Upvista Digital بطريقة سهلة الفهم باستخدام أرقام ومصطلحات رمزية.',
    
    'careers.basics.philosophy.title': 'فلسفة الشركة',
    'careers.basics.philosophy.subtitle': 'عقليتنا وثقافتنا',
    'careers.basics.philosophy.description': 'نود أن نقدم فلسفة Upvista Digital للشركات، والتي تتكون من هدفنا وخمس ثقافات.',
    
    'careers.basics.ceo.title': 'رسالة من الرئيس التنفيذي',
    'careers.basics.ceo.subtitle': 'كلمات دافئة من حمزة حفيظ',
    'careers.basics.ceo.description': 'نقدم مقابلة مع الرئيس التنفيذي حول استراتيجيات الشركة المستقبلية والأفكار حول بناء المنظمة.',
    
    'careers.basics.recruitment.title': 'ما هو مهم في التوظيف',
    'careers.basics.recruitment.subtitle': 'أفضل ممارسات التوظيف',
    'careers.basics.recruitment.description': 'سنشرح التوافق الثقافي الذي نقدره في التوظيف والمؤشرات التي نستخدمها لقياس ذلك التطابق.',
    
    'careers.basics.inclusive.title': 'توظيف الأشخاص ذوي الإعاقة',
    'careers.basics.inclusive.subtitle': 'توظيف الأشخاص ذوي الإعاقة',
    'careers.basics.inclusive.description': 'سنشارك معلومات حول نهج Upvista Digital لتوظيف الأشخاص ذوي الإعاقة وأساليب العمل والأنظمة.',
    
    'careers.basics.graduates.title': 'توظيف الخريجين الجدد',
    'careers.basics.graduates.subtitle': 'تعليمات للخريجين الجدد',
    'careers.basics.graduates.description': 'نقدم برامج شاملة وإرشادًا وفرصًا مصممة خصيصًا للخريجين الجدد لإطلاق حياتهم المهنية.',
    
    // Basics CTA
    'careers.basics.cta.title': 'Upvista Digital في انتظارك',
    'careers.basics.cta.description1': 'انضم إلى Upvista Digital كعضو وشارك في مشاريع تشكل المستقبل.',
    'careers.basics.cta.description2': 'نحن نبحث عن أفراد موهوبين يشاركوننا رؤيتنا وشغفنا بالابتكار.',
    'careers.basics.cta.applyButton': 'الوظائف الشاغرة والتطبيقات',
    'careers.basics.cta.jobsButton': 'تعرف على الوظائف',
    
    // About Page
    'careers.about.back': 'العودة إلى تعلم الأساسيات',
    'careers.about.hero.title': 'حول Upvista Digital',
    'careers.about.hero.subtitle': 'شركة تكنولوجيا في طليعة الابتكار الرقمي، تمكين الشركات من خلال برامج المؤسسات وتطوير الويب والأتمتة بالذكاء الاصطناعي والحلول السحابية والتصميم المتطور.',
    'careers.about.whoWeAre.title': 'من نحن',
    'careers.about.whoWeAre.paragraph1': 'Upvista Digital هي شركة تكنولوجيا شاملة تسد الفجوة بين الابتكار والتنفيذ. نحن متخصصون في تحويل تحديات الأعمال المعقدة إلى حلول رقمية أنيقة تدفع النمو والكفاءة.',
    'careers.about.whoWeAre.paragraph2': 'تمتد خبرتنا عبر مجالات تكنولوجية متعددة، مما يمكننا من توفير حلول شاملة للمؤسسات من جميع الأحجام. من تطوير البرمجيات المخصصة إلى الأتمتة المدعومة بالذكاء الاصطناعي، نساعد المنظمات على التنقل في المشهد الرقمي بثقة ووضوح.',
    'careers.about.services.title': 'خدماتنا الأساسية',
    'careers.about.services.enterprise.title': 'تطوير برامج المؤسسات',
    'careers.about.services.enterprise.item1': 'تطوير التطبيقات المخصصة',
    'careers.about.services.enterprise.item2': 'تخطيط موارد المؤسسات (ERP)',
    'careers.about.services.enterprise.item3': 'إدارة علاقات العملاء (CRM)',
    'careers.about.services.enterprise.item4': 'إدارة العمليات التجارية',
    'careers.about.services.enterprise.item5': 'تصميم وإدارة قواعد البيانات',
    'careers.about.services.enterprise.item6': 'تطوير ودمج واجهات برمجة التطبيقات',
    'careers.about.services.enterprise.item7': 'تحديث الأنظمة القديمة',
    'careers.about.services.web.title': 'تطوير الويب',
    'careers.about.services.web.item1': 'تطوير الواجهة الأمامية (React، Vue، Angular)',
    'careers.about.services.web.item2': 'تطوير الواجهة الخلفية (Node.js، Python، Java)',
    'careers.about.services.web.item3': 'تطبيقات الويب الكاملة',
    'careers.about.services.web.item4': 'حلول التجارة الإلكترونية',
    'careers.about.services.web.item5': 'تطبيقات الويب التقدمية (PWA)',
    'careers.about.services.web.item6': 'أنظمة إدارة المحتوى',
    'careers.about.services.web.item7': 'تحسين أداء الويب',
    'careers.about.services.ai.title': 'الذكاء الاصطناعي والأتمتة',
    'careers.about.services.ai.item1': 'حلول التعلم الآلي',
    'careers.about.services.ai.item2': 'معالجة اللغة الطبيعية',
    'careers.about.services.ai.item3': 'تطبيقات رؤية الكمبيوتر',
    'careers.about.services.ai.item4': 'أتمتة العمليات الروبوتية (RPA)',
    'careers.about.services.ai.item5': 'التحليلات التنبؤية',
    'careers.about.services.ai.item6': 'روبوتات المحادثة الذكية',
    'careers.about.services.ai.item7': 'ذكاء الأعمال المدعوم بالذكاء الاصطناعي',
    'careers.about.services.cloud.title': 'الحلول السحابية',
    'careers.about.services.cloud.item1': 'الترحيل والاستراتيجية السحابية',
    'careers.about.services.cloud.item2': 'خدمات AWS وAzure وGoogle Cloud',
    'careers.about.services.cloud.item3': 'البنية التحتية كخدمة (IaaS)',
    'careers.about.services.cloud.item4': 'المنصة كخدمة (PaaS)',
    'careers.about.services.cloud.item5': 'البرمجيات كخدمة (SaaS)',
    'careers.about.services.cloud.item6': 'أمان السحابة والامتثال',
    'careers.about.services.cloud.item7': 'تنفيذ DevOps وCI/CD',
    'careers.about.services.design.title': 'الرسومات والتصميم',
    'careers.about.services.design.item1': 'تصميم واجهة المستخدم/تجربة المستخدم',
    'careers.about.services.design.item2': 'هوية العلامة التجارية وتصميم الشعار',
    'careers.about.services.design.item3': 'مواد التسويق الرقمي',
    'careers.about.services.design.item4': 'تصميم المنتجات والنماذج الأولية',
    'careers.about.services.design.item5': 'الرسوم المتحركة والأنيميشن',
    'careers.about.services.design.item6': 'تصميم الويب والتخطيطات المستجيبة',
    'careers.about.services.design.item7': 'بحث تجربة المستخدم',
    'careers.about.services.additional.title': 'خدمات إضافية',
    'careers.about.services.additional.item1': 'حلول الأمن السيبراني',
    'careers.about.services.additional.item2': 'تطوير تطبيقات الجوال',
    'careers.about.services.additional.item3': 'تطوير البلوكتشين',
    'careers.about.services.additional.item4': 'حلول إنترنت الأشياء',
    'careers.about.services.additional.item5': 'تحليلات البيانات والتصور',
    'careers.about.services.additional.item6': 'ضمان الجودة والاختبار',
    'careers.about.services.additional.item7': 'الاستشارات التقنية',
    'careers.about.community.title': 'مجتمعنا',
    'careers.about.community.intro': 'في Upvista Digital، نؤمن بأن أفضل الابتكارات تأتي من العقول المتعاونة التي تعمل معًا. مجتمعنا هو مجموعة نابضة بالحياة من المهندسين والمصممين والمطورين والمهنيين ذوي التفكير المستقبلي الذين يشاركون شغفًا بالتكنولوجيا والابتكار.',
    'careers.about.community.collaboration.title': 'التعاون والفعاليات',
    'careers.about.community.collaboration.item1': 'فرق مشاريع متعددة الوظائف',
    'careers.about.community.collaboration.item2': 'هاكاثونات منتظمة وتحديات برمجية',
    'careers.about.community.collaboration.item3': 'لقاءات صناعية وفعاليات التواصل',
    'careers.about.community.collaboration.item4': 'جلسات مشاركة المعرفة',
    'careers.about.community.collaboration.item5': 'المساهمات مفتوحة المصدر',
    'careers.about.community.training.title': 'التدريب والتطوير',
    'careers.about.community.training.item1': 'معسكرات تطوير الويب الشاملة',
    'careers.about.community.training.item2': 'دورات هندسة البرمجيات المتقدمة',
    'careers.about.community.training.item3': 'ورش عمل الذكاء الاصطناعي والتعلم الآلي',
    'careers.about.community.training.item4': 'برامج شهادات الحوسبة السحابية',
    'careers.about.community.training.item5': 'التفكير التصميمي ومنهجيات تجربة المستخدم',
    'careers.about.lab.title': 'مختبر Upvista للتقنيات',
    'careers.about.lab.intro': 'يعمل مختبر التقنيات لدينا كمحرك الابتكار في Upvista Digital، حيث نجرب التقنيات الناشئة وندفع حدود ما هو ممكن. تتيح لنا هذه المنشأة البحثية المخصصة البقاء في طليعة الاتجاهات التكنولوجية وتطوير حلول الجيل القادم.',
    'careers.about.lab.focus.title': 'مجالات التركيز البحثي',
    'careers.about.lab.focus.item1': 'تطوير الذكاء الاصطناعي العام (AGI)',
    'careers.about.lab.focus.item2': 'تطبيقات الحوسبة الكمية',
    'careers.about.lab.focus.item3': 'بنيات الشبكات العصبية المتقدمة',
    'careers.about.lab.focus.item4': 'ابتكارات التفاعل بين الإنسان والحاسوب',
    'careers.about.lab.focus.item5': 'تقنيات الويب من الجيل القادم',
    'careers.about.lab.focus.item6': 'الأنظمة المستقلة والروبوتات',
    'careers.about.lab.focus.item7': 'حلول التكنولوجيا المستدامة',
    'careers.about.lab.conclusion': 'يعمل المختبر كحاضنة للأفكار الرائدة، حيث يتعاون باحثونا ومهندسونا مع المؤسسات الأكاديمية والشركاء الصناعيين لاستكشاف حدود التكنولوجيا وإنشاء حلول ستشكل مستقبل الابتكار الرقمي.',
    'careers.about.cta.title': 'مستعد للانضمام إلى مهمتنا؟',
    'careers.about.cta.description': 'كن جزءًا من فريق يشكل مستقبل التكنولوجيا. استكشف فرص العمل المثيرة في Upvista Digital.',
    'careers.about.cta.button': 'انضم إلى فريقنا',
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
    
    // Careers Page - Hero Section
    'careers.page.hero.title1': '사회 구축',
    'careers.page.hero.title2': '팀워크로 가득한',
    'careers.page.hero.subtitle1': 'Upvista Digital은',
    'careers.page.hero.subtitle2': '함께 일할 멤버를 기다리고 있습니다.',
    'careers.page.hero.applyButton': '채용 공고 및 지원',
    'careers.page.hero.basicsButton': '기본 배우기',
    
    // Careers Page - Find Recruitment Section
    'careers.page.findRecruitment.title': '채용 정보 찾기',
    'careers.page.findRecruitment.recruitmentType': '채용 유형',
    'careers.page.findRecruitment.selectJob': '직무 선택',
    'careers.page.findRecruitment.selectPosition': '포지션 선택',
    'careers.page.findRecruitment.findOpportunities': '기회 찾기',
    'careers.page.findRecruitment.searching': '검색 중...',
    'careers.page.findRecruitment.searchButton': '채용 정보 찾기',
    'careers.page.findRecruitment.cantFind': '찾으시는 것을 못 찾으셨나요?',
    'careers.page.findRecruitment.viewAll': '모든 채용 포지션 보기',
    
    // Recruitment Types
    'careers.page.recruitmentTypes.career': '경력 채용',
    'careers.page.recruitmentTypes.potential': '잠재력 채용',
    'careers.page.recruitmentTypes.newGraduate': '신입 채용',
    
    // Job Status Labels
    'careers.page.jobStatus.active': '모집 중',
    'careers.page.jobStatus.intern': '인턴',
    'careers.page.jobStatus.future': '향후',
    'careers.page.jobStatus.fullTime': '정규직',
    'careers.page.jobStatus.potential': '잠재력',
    
    // Search Results
    'careers.page.searchResults.title': '검색 결과',
    'careers.page.searchResults.found': '발견됨',
    'careers.page.searchResults.positions': '포지션',
    'careers.page.searchResults.positionsPlural': '포지션',
    'careers.page.searchResults.matchingCriteria': '귀하의 기준과 일치:',
    'careers.page.searchResults.viewDetails': '세부 정보 보기',
    'careers.page.searchResults.noPositions': '포지션을 찾을 수 없습니다',
    'careers.page.searchResults.tryAdjusting': '검색 기준을 조정하거나 모든 사용 가능한 포지션을 찾아보세요.',
    'careers.page.searchResults.viewAllPositions': '모든 포지션 보기',
    
    // Learn the Basics Section
    'careers.page.basics.title': '기본 배우기',
    'careers.page.basics.upvistaIn3': '3분 안에 Upvista Digital',
    'careers.page.basics.ceoMessage': 'CEO 메시지',
    'careers.page.basics.newGraduate': '신입사원 채용은 여기서 시작',
    'careers.page.basics.philosophy': '기업 철학',
    'careers.page.basics.recruitment': '채용에서 중요한 것',
    
    // Learn About Business Section
    'careers.page.business.title': '비즈니스 알아보기',
    'careers.page.business.strategy': 'Upvista Digital의 비즈니스 전략',
    'careers.page.business.products': 'Upvista Digital 제품',
    'careers.page.business.globalStrategy': 'Upvista Digital의 글로벌 전략',
    'careers.page.business.teamwork': '디지털 솔루션 및 팀워크',
    
    // Learn About Job Section
    'careers.page.jobs.title': '직무 알아보기',
    'careers.page.jobs.development': '개발 및 운영',
    'careers.page.jobs.marketing': '마케팅',
    'careers.page.jobs.customerService': '고객 서비스',
    'careers.page.jobs.sales': '영업',
    'careers.page.jobs.consulting': '시스템 컨설팅',
    'careers.page.jobs.corporate': '기업',
    
    // Get to Know People Section
    'careers.page.people.title': '사람들 알아보기',
    'careers.page.people.engineer.title': '엔지니어/디자이너',
    'careers.page.people.engineer.description': '우리의 엔지니어링 및 디자인 팀은 혁신적인 디지털 솔루션 뒤에 있는 창의적인 마인드입니다. 엔지니어는 최첨단 기술을 연구하고 비즈니스 성공을 이끄는 확장 가능한 시스템과 애플리케이션을 구축합니다. 디자이너는 사용자가 사랑하는 직관적인 사용자 경험과 시각적으로 멋진 인터페이스를 만듭니다.',
    'careers.page.people.corporate.title': '기업 포지션',
    'careers.page.people.corporate.description': '우리의 기업 팀은 원활한 운영과 전략적 성장을 보장합니다. 인재 확보를 관리하는 인사부터 예산과 투자를 감독하는 재무까지, 이러한 역할은 기술 팀이 혁신과 제공에 집중할 수 있는 기반을 제공합니다.',
    'careers.page.people.business.title': '비즈니스 직무',
    'careers.page.people.business.description': 'Upvista Digital의 비즈니스 역할은 성장, 고객 성공 및 시장 확장에 중점을 둡니다. 브랜드 인지도를 높이는 마케팅 전문가부터 고객 관계를 구축하는 영업 담당자까지, 이러한 포지션은 회사의 지속적인 성공과 확장에 중요합니다.',
    
    // Get to Know Workspace Section
    'careers.page.workspace.title': '작업 공간 알아보기',
    'careers.page.workspace.office.title': '사무실 및 원격 근무',
    'careers.page.workspace.office.description': '최신 사무실 공간과 포괄적인 원격 근무 지원을 갖춘 유연한 근무 형태를 제공합니다. 사무실은 협업과 생산성을 위해 설계되었으며, 원격 근무 정책은 어디서나 효과적으로 작업할 수 있도록 보장합니다.',
    'careers.page.workspace.communication.title': '커뮤니케이션 및 내부 시스템',
    'careers.page.workspace.communication.description': '최첨단 커뮤니케이션 도구와 내부 시스템을 사용하여 원활한 협업을 보장합니다. 프로젝트 관리 플랫폼부터 인스턴트 메시징 시스템까지, 팀을 연결하고 생산성을 유지하는 인프라를 구축했습니다.',
    'careers.page.workspace.learning.title': '학습 및 경력 개발',
    'careers.page.workspace.learning.description': '포괄적인 온보딩 프로세스와 지속적인 학습 시스템은 전문가로 성장하는 데 도움이 됩니다. 경력 지원, 기술 개발 프로그램, 정기적인 성과 평가를 제공하여 성공과 발전을 보장합니다.',
    'careers.page.workspace.culture.title': '기업 문화 및 복지',
    'careers.page.workspace.culture.description': '정기적인 팀 이벤트, 경쟁력 있는 급여 패키지, 포괄적인 복지 혜택을 갖춘 활기찬 기업 문화를 조성합니다. 평가 시스템은 지속적인 개선과 성장을 지원하면서 우수성을 인정하고 보상합니다.',
    
    // What Upvista Digital Is Section
    'careers.page.about.title': 'Upvista Digital이란',
    'careers.page.about.innovation.title': '혁신 리더',
    'careers.page.about.innovation.description': 'Upvista Digital은 디지털 혁신의 선구자로서 끊임없이 경계를 넓히고 기술과 비즈니스의 미래를 형성하는 혁신적인 솔루션을 만듭니다.',
    'careers.page.about.impact.title': '글로벌 영향',
    'careers.page.about.impact.description': '지역 문화와 가치를 존중하면서 글로벌 영향을 미치는 솔루션을 구축하고 있습니다. 중요한 기술을 통해 우리의 작업은 전 세계 수백만 명의 삶에 영향을 미칩니다.',
    'careers.page.about.team.title': '팀 우수성',
    'careers.page.about.team.description': '우리의 강점은 사람들에게 있습니다. 협업, 혁신, 공유 비전을 통해 부분의 합보다 더 큰 것을 만들기 위해 모이는 재능 있는 개인들입니다.',
    
    // CTA Section
    'careers.page.cta.title': '영향을 미칠 준비가 되셨나요?',
    'careers.page.cta.description1': '디지털 솔루션의 미래를 구축하는 팀에 합류하세요.',
    'careers.page.cta.description2': '오픈 포지션을 탐색하고 오늘 Upvista Digital과 함께 여정을 시작하세요.',
    'careers.page.cta.viewJobsButton': '채용 공고 보기',
    'careers.page.cta.eventsButton': '채용 이벤트',
    
    // Basics Page
    'careers.basics.hero.title': '기본 배우기',
    'careers.basics.hero.subtitle': 'Upvista Digital이 경력을 쌓기에 독특한 장소인 이유를 알아보세요.',
    
    // Basics Sections
    'careers.basics.about.title': 'Upvista Digital 소개',
    'careers.basics.about.subtitle': '3분 안에 Upvista Digital',
    'careers.basics.about.description': '상징적인 숫자와 키워드를 사용하여 Upvista Digital의 철학, 비즈니스, 업무 및 업무 스타일을 이해하기 쉽게 설명합니다.',
    
    'careers.basics.philosophy.title': '기업 철학',
    'careers.basics.philosophy.subtitle': '우리의 마인드셋과 문화',
    'careers.basics.philosophy.description': '우리의 목적과 5가지 문화로 구성된 Upvista Digital의 기업 철학을 소개합니다.',
    
    'careers.basics.ceo.title': 'CEO 메시지',
    'careers.basics.ceo.subtitle': 'Hamza Hafeez의 따뜻한 말씀',
    'careers.basics.ceo.description': '회사의 미래 전략과 조직 구축에 대한 생각에 대한 CEO 인터뷰를 제공합니다.',
    
    'careers.basics.recruitment.title': '채용에서 중요한 것',
    'careers.basics.recruitment.subtitle': '채용 모범 사례',
    'careers.basics.recruitment.description': '채용에서 중요하게 생각하는 문화적 적합성과 그 일치를 측정하기 위해 사용하는 지표를 설명합니다.',
    
    'careers.basics.inclusive.title': '장애인 채용',
    'careers.basics.inclusive.subtitle': '장애인 채용',
    'careers.basics.inclusive.description': 'Upvista Digital의 장애인 채용 접근 방식, 근무 스타일 및 시스템에 대한 정보를 공유합니다.',
    
    'careers.basics.graduates.title': '신입 채용',
    'careers.basics.graduates.subtitle': '신입생을 위한 안내',
    'careers.basics.graduates.description': '최근 졸업생이 경력을 시작할 수 있도록 특별히 설계된 포괄적인 프로그램, 멘토십 및 기회를 제공합니다.',
    
    // Basics CTA
    'careers.basics.cta.title': 'Upvista Digital이 당신을 기다리고 있습니다',
    'careers.basics.cta.description1': 'Upvista Digital의 멤버로 참여하고 미래를 형성하는 프로젝트에 참여하세요.',
    'careers.basics.cta.description2': '우리의 비전과 혁신에 대한 열정을 공유하는 재능 있는 개인을 찾고 있습니다.',
    'careers.basics.cta.applyButton': '채용 공고 및 지원',
    'careers.basics.cta.jobsButton': '직무 알아보기',
    
    // About Page
    'careers.about.back': '기본 배우기로 돌아가기',
    'careers.about.hero.title': 'Upvista Digital 소개',
    'careers.about.hero.subtitle': '기업 소프트웨어, 웹 개발, AI 자동화, 클라우드 솔루션 및 최첨단 디자인을 통해 비즈니스를 지원하는 디지털 혁신의 최전선에 있는 기술 회사.',
    'careers.about.whoWeAre.title': '우리는 누구인가',
    'careers.about.whoWeAre.paragraph1': 'Upvista Digital은 혁신과 구현 사이의 격차를 해소하는 종합 기술 회사입니다. 복잡한 비즈니스 과제를 성장과 효율성을 촉진하는 우아한 디지털 솔루션으로 변환하는 것을 전문으로 합니다.',
    'careers.about.whoWeAre.paragraph2': '우리의 전문성은 여러 기술 영역에 걸쳐 있어 모든 규모의 기업에 종합적인 솔루션을 제공할 수 있습니다. 맞춤형 소프트웨어 개발부터 AI 기반 자동화까지, 우리는 조직이 자신감과 명확성을 가지고 디지털 환경을 탐색하도록 돕습니다.',
    'careers.about.services.title': '핵심 서비스',
    'careers.about.services.enterprise.title': '기업 소프트웨어 개발',
    'careers.about.services.enterprise.item1': '맞춤형 애플리케이션 개발',
    'careers.about.services.enterprise.item2': '전사적 자원 관리 (ERP)',
    'careers.about.services.enterprise.item3': '고객 관계 관리 (CRM)',
    'careers.about.services.enterprise.item4': '비즈니스 프로세스 관리',
    'careers.about.services.enterprise.item5': '데이터베이스 설계 및 관리',
    'careers.about.services.enterprise.item6': 'API 개발 및 통합',
    'careers.about.services.enterprise.item7': '레거시 시스템 현대화',
    'careers.about.services.web.title': '웹 개발',
    'careers.about.services.web.item1': '프론트엔드 개발 (React, Vue, Angular)',
    'careers.about.services.web.item2': '백엔드 개발 (Node.js, Python, Java)',
    'careers.about.services.web.item3': '풀스택 웹 애플리케이션',
    'careers.about.services.web.item4': '전자상거래 솔루션',
    'careers.about.services.web.item5': '프로그레시브 웹 앱 (PWA)',
    'careers.about.services.web.item6': '콘텐츠 관리 시스템',
    'careers.about.services.web.item7': '웹 성능 최적화',
    'careers.about.services.ai.title': 'AI 및 자동화',
    'careers.about.services.ai.item1': '머신 러닝 솔루션',
    'careers.about.services.ai.item2': '자연어 처리',
    'careers.about.services.ai.item3': '컴퓨터 비전 애플리케이션',
    'careers.about.services.ai.item4': '로보틱 프로세스 자동화 (RPA)',
    'careers.about.services.ai.item5': '예측 분석',
    'careers.about.services.ai.item6': '지능형 챗봇',
    'careers.about.services.ai.item7': 'AI 기반 비즈니스 인텔리전스',
    'careers.about.services.cloud.title': '클라우드 솔루션',
    'careers.about.services.cloud.item1': '클라우드 마이그레이션 및 전략',
    'careers.about.services.cloud.item2': 'AWS, Azure, Google Cloud 서비스',
    'careers.about.services.cloud.item3': 'Infrastructure as a Service (IaaS)',
    'careers.about.services.cloud.item4': 'Platform as a Service (PaaS)',
    'careers.about.services.cloud.item5': 'Software as a Service (SaaS)',
    'careers.about.services.cloud.item6': '클라우드 보안 및 규정 준수',
    'careers.about.services.cloud.item7': 'DevOps 및 CI/CD 구현',
    'careers.about.services.design.title': '그래픽 및 디자인',
    'careers.about.services.design.item1': 'UI/UX 디자인',
    'careers.about.services.design.item2': '브랜드 아이덴티티 및 로고 디자인',
    'careers.about.services.design.item3': '디지털 마케팅 자료',
    'careers.about.services.design.item4': '제품 디자인 및 프로토타이핑',
    'careers.about.services.design.item5': '모션 그래픽 및 애니메이션',
    'careers.about.services.design.item6': '웹 디자인 및 반응형 레이아웃',
    'careers.about.services.design.item7': '사용자 경험 연구',
    'careers.about.services.additional.title': '추가 서비스',
    'careers.about.services.additional.item1': '사이버 보안 솔루션',
    'careers.about.services.additional.item2': '모바일 앱 개발',
    'careers.about.services.additional.item3': '블록체인 개발',
    'careers.about.services.additional.item4': 'IoT 솔루션',
    'careers.about.services.additional.item5': '데이터 분석 및 시각화',
    'careers.about.services.additional.item6': '품질 보증 및 테스트',
    'careers.about.services.additional.item7': '기술 컨설팅',
    'careers.about.community.title': '우리 커뮤니티',
    'careers.about.community.intro': 'Upvista Digital에서 우리는 최고의 혁신은 협력하는 마음이 함께 일할 때 나온다고 믿습니다. 우리 커뮤니티는 기술과 혁신에 대한 열정을 공유하는 엔지니어, 디자이너, 개발자 및 미래 지향적인 전문가들의 활기찬 집단입니다.',
    'careers.about.community.collaboration.title': '협업 및 이벤트',
    'careers.about.community.collaboration.item1': '부서 간 프로젝트 팀',
    'careers.about.community.collaboration.item2': '정기 해커톤 및 코딩 챌린지',
    'careers.about.community.collaboration.item3': '업계 모임 및 네트워킹 이벤트',
    'careers.about.community.collaboration.item4': '지식 공유 세션',
    'careers.about.community.collaboration.item5': '오픈 소스 기여',
    'careers.about.community.training.title': '교육 및 개발',
    'careers.about.community.training.item1': '포괄적인 웹 개발 부트캠프',
    'careers.about.community.training.item2': '고급 소프트웨어 엔지니어링 과정',
    'careers.about.community.training.item3': 'AI 및 머신 러닝 워크샵',
    'careers.about.community.training.item4': '클라우드 컴퓨팅 인증 프로그램',
    'careers.about.community.training.item5': '디자인 사고 및 UX 방법론',
    'careers.about.lab.title': 'Upvista Technologies Lab',
    'careers.about.lab.intro': '우리의 Technologies Lab은 Upvista Digital의 혁신 엔진 역할을 하며, 신흥 기술을 실험하고 가능성의 경계를 넓힙니다. 이 전용 연구 시설을 통해 기술 트렌드를 앞서 나가고 차세대 솔루션을 개발할 수 있습니다.',
    'careers.about.lab.focus.title': '연구 중점 분야',
    'careers.about.lab.focus.item1': '범용 인공 지능 (AGI) 개발',
    'careers.about.lab.focus.item2': '양자 컴퓨팅 응용',
    'careers.about.lab.focus.item3': '고급 신경망 아키텍처',
    'careers.about.lab.focus.item4': '인간-컴퓨터 상호 작용 혁신',
    'careers.about.lab.focus.item5': '차세대 웹 기술',
    'careers.about.lab.focus.item6': '자율 시스템 및 로봇 공학',
    'careers.about.lab.focus.item7': '지속 가능한 기술 솔루션',
    'careers.about.lab.conclusion': '이 랩은 획기적인 아이디어의 인큐베이터 역할을 하며, 우리의 연구원과 엔지니어가 학술 기관 및 산업 파트너와 협력하여 기술의 프론티어를 탐험하고 디지털 혁신의 미래를 형성할 솔루션을 만듭니다.',
    'careers.about.cta.title': '우리의 미션에 참여할 준비가 되셨나요?',
    'careers.about.cta.description': '기술의 미래를 형성하는 팀의 일원이 되십시오. Upvista Digital에서 흥미진진한 경력 기회를 탐색하세요.',
    'careers.about.cta.button': '우리 팀에 합류하기',
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
    
    // Careers Page - Hero Section
    'careers.page.hero.title1': '建设社会',
    'careers.page.hero.title2': '充满团队合作',
    'careers.page.hero.subtitle1': 'Upvista Digital',
    'careers.page.hero.subtitle2': '等待成员一起工作。',
    'careers.page.hero.applyButton': '职位空缺与申请',
    'careers.page.hero.basicsButton': '学习基础知识',
    
    // Careers Page - Find Recruitment Section
    'careers.page.findRecruitment.title': '查找招聘信息',
    'careers.page.findRecruitment.recruitmentType': '招聘类型',
    'careers.page.findRecruitment.selectJob': '选择工作',
    'careers.page.findRecruitment.selectPosition': '选择职位',
    'careers.page.findRecruitment.findOpportunities': '寻找机会',
    'careers.page.findRecruitment.searching': '搜索中...',
    'careers.page.findRecruitment.searchButton': '查找招聘信息',
    'careers.page.findRecruitment.cantFind': '找不到您要找的内容？',
    'careers.page.findRecruitment.viewAll': '查看所有职位空缺',
    
    // Recruitment Types
    'careers.page.recruitmentTypes.career': '职业招聘',
    'careers.page.recruitmentTypes.potential': '潜力招聘',
    'careers.page.recruitmentTypes.newGraduate': '应届毕业生招聘',
    
    // Job Status Labels
    'careers.page.jobStatus.active': '招聘中',
    'careers.page.jobStatus.intern': '实习生',
    'careers.page.jobStatus.future': '未来',
    'careers.page.jobStatus.fullTime': '全职',
    'careers.page.jobStatus.potential': '潜力',
    
    // Search Results
    'careers.page.searchResults.title': '搜索结果',
    'careers.page.searchResults.found': '找到',
    'careers.page.searchResults.positions': '职位',
    'careers.page.searchResults.positionsPlural': '职位',
    'careers.page.searchResults.matchingCriteria': '符合您的标准：',
    'careers.page.searchResults.viewDetails': '查看详情',
    'careers.page.searchResults.noPositions': '未找到职位',
    'careers.page.searchResults.tryAdjusting': '尝试调整您的搜索条件或浏览所有可用职位。',
    'careers.page.searchResults.viewAllPositions': '查看所有职位',
    
    // Learn the Basics Section
    'careers.page.basics.title': '学习基础知识',
    'careers.page.basics.upvistaIn3': '3分钟了解Upvista Digital',
    'careers.page.basics.ceoMessage': 'CEO致辞',
    'careers.page.basics.newGraduate': '应届毕业生招聘从这里开始',
    'careers.page.basics.philosophy': '企业理念',
    'careers.page.basics.recruitment': '招聘中的重要事项',
    
    // Learn About Business Section
    'careers.page.business.title': '了解业务',
    'careers.page.business.strategy': 'Upvista Digital的业务战略',
    'careers.page.business.products': 'Upvista Digital产品',
    'careers.page.business.globalStrategy': 'Upvista Digital的全球战略',
    'careers.page.business.teamwork': '数字解决方案与团队合作',
    
    // Learn About Job Section
    'careers.page.jobs.title': '了解工作',
    'careers.page.jobs.development': '开发与运营',
    'careers.page.jobs.marketing': '市场营销',
    'careers.page.jobs.customerService': '客户服务',
    'careers.page.jobs.sales': '销售',
    'careers.page.jobs.consulting': '系统咨询',
    'careers.page.jobs.corporate': '企业',
    
    // Get to Know People Section
    'careers.page.people.title': '了解人员',
    'careers.page.people.engineer.title': '工程师/设计师',
    'careers.page.people.engineer.description': '我们的工程和设计团队是创新数字解决方案背后的创造性思维。工程师致力于尖端技术，构建推动业务成功的可扩展系统和应用程序。设计师打造用户喜爱的直观用户体验和视觉上令人惊叹的界面。',
    'careers.page.people.corporate.title': '企业职位',
    'careers.page.people.corporate.description': '我们的企业团队确保顺畅运营和战略增长。从管理人才招聘的人力资源到监督预算和投资的财务，这些角色为技术团队专注于创新和交付提供了基础。',
    'careers.page.people.business.title': '业务工作',
    'careers.page.people.business.description': 'Upvista Digital的业务角色专注于增长、客户成功和市场扩张。从推动品牌知名度的营销专家到建立客户关系的销售代表，这些职位对我们公司的持续成功和扩张至关重要。',
    
    // Get to Know Workspace Section
    'careers.page.workspace.title': '了解工作空间',
    'careers.page.workspace.office.title': '办公室与远程工作',
    'careers.page.workspace.office.description': '我们提供灵活的工作安排，配有现代化办公空间和全面的远程工作支持。我们的办公室专为协作和生产力而设计，而我们的远程工作政策确保您可以从任何地方有效工作。',
    'careers.page.workspace.communication.title': '沟通与内部系统',
    'careers.page.workspace.communication.description': '我们使用尖端的沟通工具和内部系统来确保无缝协作。从项目管理平台到即时消息系统，我们构建了保持团队连接和生产力的基础设施。',
    'careers.page.workspace.learning.title': '学习与职业发展',
    'careers.page.workspace.learning.description': '我们全面的入职流程和持续学习系统帮助您专业成长。我们提供职业支持、技能发展计划和定期绩效评估，以确保您的成功和晋升。',
    'careers.page.workspace.culture.title': '公司文化与福利',
    'careers.page.workspace.culture.description': '我们培养充满活力的公司文化，定期举办团队活动、具有竞争力的薪酬待遇和全面的福利。我们的评估系统认可和奖励卓越表现，同时支持持续改进和成长。',
    
    // What Upvista Digital Is Section
    'careers.page.about.title': 'Upvista Digital是什么',
    'careers.page.about.innovation.title': '创新领导者',
    'careers.page.about.innovation.description': 'Upvista Digital是数字化转型的先锋力量，不断突破界限，创造塑造技术和商业未来的创新解决方案。',
    'careers.page.about.impact.title': '全球影响',
    'careers.page.about.impact.description': '我们正在构建产生全球影响的解决方案，同时尊重当地文化和价值观。通过重要的技术，我们的工作影响着全球数百万人的生活。',
    'careers.page.about.team.title': '团队卓越',
    'careers.page.about.team.description': '我们的力量在于我们的人民 - 才华横溢的个人通过协作、创新和共同愿景聚集在一起，创造出大于部分总和的东西。',
    
    // CTA Section
    'careers.page.cta.title': '准备好发挥您的影响力了吗？',
    'careers.page.cta.description1': '加入一个正在构建数字解决方案未来的团队。',
    'careers.page.cta.description2': '探索我们的职位空缺，今天就开始您在Upvista Digital的旅程。',
    'careers.page.cta.viewJobsButton': '查看职位空缺',
    'careers.page.cta.eventsButton': '招聘活动',
    
    // Basics Page
    'careers.basics.hero.title': '学习基础知识',
    'careers.basics.hero.subtitle': '了解是什么让Upvista Digital成为您职业发展的独特之地。',
    
    // Basics Sections
    'careers.basics.about.title': '关于Upvista Digital',
    'careers.basics.about.subtitle': '3分钟了解Upvista Digital',
    'careers.basics.about.description': '我们将使用象征性的数字和关键词，以易于理解的方式解释Upvista Digital的理念、业务、工作和工作方式。',
    
    'careers.basics.philosophy.title': '企业理念',
    'careers.basics.philosophy.subtitle': '我们的思维方式和文化',
    'careers.basics.philosophy.description': '我们想介绍Upvista Digital的企业理念，它由我们的目标和五种文化组成。',
    
    'careers.basics.ceo.title': 'CEO致辞',
    'careers.basics.ceo.subtitle': 'Hamza Hafeez的温馨话语',
    'careers.basics.ceo.description': '我们介绍与CEO关于公司未来战略和建设组织的想法的访谈。',
    
    'careers.basics.recruitment.title': '招聘中的重要事项',
    'careers.basics.recruitment.subtitle': '招聘最佳实践',
    'careers.basics.recruitment.description': '我们将解释我们在招聘中重视的文化契合度以及我们用来衡量该匹配度的指标。',
    
    'careers.basics.inclusive.title': '残疾人招聘',
    'careers.basics.inclusive.subtitle': '残疾人招聘',
    'careers.basics.inclusive.description': '我们将分享有关Upvista Digital招聘残疾人的方法、工作方式和系统的信息。',
    
    'careers.basics.graduates.title': '应届毕业生招聘',
    'careers.basics.graduates.subtitle': '新毕业生指南',
    'careers.basics.graduates.description': '我们提供专门为应届毕业生设计的全面计划、导师制和机会，帮助他们开启职业生涯。',
    
    // Basics CTA
    'careers.basics.cta.title': 'Upvista Digital在等你',
    'careers.basics.cta.description1': '作为成员加入Upvista Digital，参与塑造未来的项目。',
    'careers.basics.cta.description2': '我们正在寻找与我们共享愿景和创新热情的有才华的个人。',
    'careers.basics.cta.applyButton': '职位空缺与申请',
    'careers.basics.cta.jobsButton': '了解工作',
    
    // About Page
    'careers.about.back': '返回学习基础知识',
    'careers.about.hero.title': '关于Upvista Digital',
    'careers.about.hero.subtitle': '一家处于数字创新前沿的技术公司，通过企业软件、网络开发、AI自动化、云解决方案和尖端设计赋能企业。',
    'careers.about.whoWeAre.title': '我们是谁',
    'careers.about.whoWeAre.paragraph1': 'Upvista Digital是一家综合性技术公司，弥合创新与实施之间的差距。我们专门将复杂的业务挑战转化为推动增长和效率的优雅数字解决方案。',
    'careers.about.whoWeAre.paragraph2': '我们的专业知识跨越多个技术领域，使我们能够为各种规模的企业提供端到端解决方案。从定制软件开发到AI驱动的自动化，我们帮助组织自信而清晰地导航数字景观。',
    'careers.about.services.title': '我们的核心服务',
    'careers.about.services.enterprise.title': '企业软件开发',
    'careers.about.services.enterprise.item1': '定制应用程序开发',
    'careers.about.services.enterprise.item2': '企业资源规划（ERP）',
    'careers.about.services.enterprise.item3': '客户关系管理（CRM）',
    'careers.about.services.enterprise.item4': '业务流程管理',
    'careers.about.services.enterprise.item5': '数据库设计与管理',
    'careers.about.services.enterprise.item6': 'API开发与集成',
    'careers.about.services.enterprise.item7': '遗留系统现代化',
    'careers.about.services.web.title': '网络开发',
    'careers.about.services.web.item1': '前端开发（React、Vue、Angular）',
    'careers.about.services.web.item2': '后端开发（Node.js、Python、Java）',
    'careers.about.services.web.item3': '全栈Web应用程序',
    'careers.about.services.web.item4': '电子商务解决方案',
    'careers.about.services.web.item5': '渐进式Web应用（PWA）',
    'careers.about.services.web.item6': '内容管理系统',
    'careers.about.services.web.item7': 'Web性能优化',
    'careers.about.services.ai.title': 'AI和自动化',
    'careers.about.services.ai.item1': '机器学习解决方案',
    'careers.about.services.ai.item2': '自然语言处理',
    'careers.about.services.ai.item3': '计算机视觉应用',
    'careers.about.services.ai.item4': '机器人流程自动化（RPA）',
    'careers.about.services.ai.item5': '预测分析',
    'careers.about.services.ai.item6': '智能聊天机器人',
    'careers.about.services.ai.item7': 'AI驱动的商业智能',
    'careers.about.services.cloud.title': '云解决方案',
    'careers.about.services.cloud.item1': '云迁移与策略',
    'careers.about.services.cloud.item2': 'AWS、Azure、Google Cloud服务',
    'careers.about.services.cloud.item3': '基础设施即服务（IaaS）',
    'careers.about.services.cloud.item4': '平台即服务（PaaS）',
    'careers.about.services.cloud.item5': '软件即服务（SaaS）',
    'careers.about.services.cloud.item6': '云安全与合规',
    'careers.about.services.cloud.item7': 'DevOps和CI/CD实施',
    'careers.about.services.design.title': '图形和设计',
    'careers.about.services.design.item1': 'UI/UX设计',
    'careers.about.services.design.item2': '品牌标识和标志设计',
    'careers.about.services.design.item3': '数字营销材料',
    'careers.about.services.design.item4': '产品设计与原型制作',
    'careers.about.services.design.item5': '动态图形和动画',
    'careers.about.services.design.item6': 'Web设计和响应式布局',
    'careers.about.services.design.item7': '用户体验研究',
    'careers.about.services.additional.title': '附加服务',
    'careers.about.services.additional.item1': '网络安全解决方案',
    'careers.about.services.additional.item2': '移动应用开发',
    'careers.about.services.additional.item3': '区块链开发',
    'careers.about.services.additional.item4': '物联网解决方案',
    'careers.about.services.additional.item5': '数据分析与可视化',
    'careers.about.services.additional.item6': '质量保证与测试',
    'careers.about.services.additional.item7': '技术咨询',
    'careers.about.community.title': '我们的社区',
    'careers.about.community.intro': '在Upvista Digital，我们相信最好的创新来自协作的思维共同工作。我们的社区是一个充满活力的工程师、设计师、开发人员和具有前瞻性思维的专业人士的集体，他们分享对技术和创新的热情。',
    'careers.about.community.collaboration.title': '协作与活动',
    'careers.about.community.collaboration.item1': '跨职能项目团队',
    'careers.about.community.collaboration.item2': '定期黑客马拉松和编码挑战',
    'careers.about.community.collaboration.item3': '行业聚会和网络活动',
    'careers.about.community.collaboration.item4': '知识分享会议',
    'careers.about.community.collaboration.item5': '开源贡献',
    'careers.about.community.training.title': '培训与发展',
    'careers.about.community.training.item1': '全面的Web开发训练营',
    'careers.about.community.training.item2': '高级软件工程课程',
    'careers.about.community.training.item3': 'AI和机器学习研讨会',
    'careers.about.community.training.item4': '云计算认证计划',
    'careers.about.community.training.item5': '设计思维和UX方法论',
    'careers.about.lab.title': 'Upvista Technologies Lab',
    'careers.about.lab.intro': '我们的Technologies Lab作为Upvista Digital的创新引擎，我们在这里实验新兴技术并推动可能性的边界。这个专用研究设施使我们能够保持技术趋势的领先地位并开发下一代解决方案。',
    'careers.about.lab.focus.title': '研究重点领域',
    'careers.about.lab.focus.item1': '通用人工智能（AGI）开发',
    'careers.about.lab.focus.item2': '量子计算应用',
    'careers.about.lab.focus.item3': '高级神经网络架构',
    'careers.about.lab.focus.item4': '人机交互创新',
    'careers.about.lab.focus.item5': '下一代网络技术',
    'careers.about.lab.focus.item6': '自主系统和机器人技术',
    'careers.about.lab.focus.item7': '可持续技术解决方案',
    'careers.about.lab.conclusion': '该实验室作为突破性想法的孵化器，我们的研究人员和工程师与学术机构和行业合作伙伴合作，探索技术前沿并创建将塑造数字创新未来的解决方案。',
    'careers.about.cta.title': '准备加入我们的使命了吗？',
    'careers.about.cta.description': '成为塑造技术未来的团队的一部分。探索Upvista Digital令人兴奋的职业机会。',
    'careers.about.cta.button': '加入我们的团队',
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
    
    // Careers Page - Hero Section
    'careers.page.hero.title1': 'Membangun Masyarakat',
    'careers.page.hero.title2': 'Penuh dengan Kerja Sama Tim',
    'careers.page.hero.subtitle1': 'Upvista Digital',
    'careers.page.hero.subtitle2': 'menunggu anggota untuk bekerja bersama.',
    'careers.page.hero.applyButton': 'Lowongan & Aplikasi Pekerjaan',
    'careers.page.hero.basicsButton': 'Pelajari Dasar-dasar',
    
    // Careers Page - Find Recruitment Section
    'careers.page.findRecruitment.title': 'Temukan Informasi Rekrutmen',
    'careers.page.findRecruitment.recruitmentType': 'Jenis Rekrutmen',
    'careers.page.findRecruitment.selectJob': 'Pilih Pekerjaan',
    'careers.page.findRecruitment.selectPosition': 'Pilih posisi',
    'careers.page.findRecruitment.findOpportunities': 'Temukan Peluang',
    'careers.page.findRecruitment.searching': 'Mencari...',
    'careers.page.findRecruitment.searchButton': 'Temukan Informasi Rekrutmen',
    'careers.page.findRecruitment.cantFind': 'Tidak dapat menemukan yang Anda cari?',
    'careers.page.findRecruitment.viewAll': 'Lihat semua posisi terbuka',
    
    // Recruitment Types
    'careers.page.recruitmentTypes.career': 'Rekrutmen Karir',
    'careers.page.recruitmentTypes.potential': 'Rekrutmen Potensial',
    'careers.page.recruitmentTypes.newGraduate': 'Rekrutmen Lulusan Baru',
    
    // Job Status Labels
    'careers.page.jobStatus.active': 'Aktif',
    'careers.page.jobStatus.intern': 'Magang',
    'careers.page.jobStatus.future': 'Masa Depan',
    'careers.page.jobStatus.fullTime': 'Penuh waktu',
    'careers.page.jobStatus.potential': 'Potensial',
    
    // Search Results
    'careers.page.searchResults.title': 'Hasil Pencarian',
    'careers.page.searchResults.found': 'Ditemukan',
    'careers.page.searchResults.positions': 'posisi',
    'careers.page.searchResults.positionsPlural': 'posisi',
    'careers.page.searchResults.matchingCriteria': 'sesuai kriteria Anda:',
    'careers.page.searchResults.viewDetails': 'Lihat Detail',
    'careers.page.searchResults.noPositions': 'Tidak ada posisi ditemukan',
    'careers.page.searchResults.tryAdjusting': 'Coba sesuaikan kriteria pencarian Anda atau jelajahi semua posisi yang tersedia.',
    'careers.page.searchResults.viewAllPositions': 'Lihat Semua Posisi',
    
    // Learn the Basics Section
    'careers.page.basics.title': 'Pelajari Dasar-dasar',
    'careers.page.basics.upvistaIn3': 'Upvista Digital dalam 3 menit',
    'careers.page.basics.ceoMessage': 'Pesan dari CEO',
    'careers.page.basics.newGraduate': 'Rekrutmen lulusan baru dimulai di sini',
    'careers.page.basics.philosophy': 'Filosofi perusahaan',
    'careers.page.basics.recruitment': 'Apa yang penting dalam rekrutmen',
    
    // Learn About Business Section
    'careers.page.business.title': 'Pelajari Bisnis',
    'careers.page.business.strategy': 'Strategi Bisnis Upvista Digital',
    'careers.page.business.products': 'Produk Upvista Digital',
    'careers.page.business.globalStrategy': 'Strategi Global Upvista Digital',
    'careers.page.business.teamwork': 'Solusi Digital dan Kerja Sama Tim',
    
    // Learn About Job Section
    'careers.page.jobs.title': 'Pelajari Pekerjaan',
    'careers.page.jobs.development': 'Pengembangan dan Operasi',
    'careers.page.jobs.marketing': 'Pemasaran',
    'careers.page.jobs.customerService': 'Layanan Pelanggan',
    'careers.page.jobs.sales': 'Penjualan',
    'careers.page.jobs.consulting': 'Konsultasi Sistem',
    'careers.page.jobs.corporate': 'Perusahaan',
    
    // Get to Know People Section
    'careers.page.people.title': 'Kenali Orang-orang',
    'careers.page.people.engineer.title': 'Insinyur/Desainer',
    'careers.page.people.engineer.description': 'Tim teknik dan desain kami adalah pikiran kreatif di balik solusi digital inovatif. Insinyur bekerja pada teknologi mutakhir, membangun sistem dan aplikasi yang dapat diskalakan yang mendorong kesuksesan bisnis. Desainer membuat pengalaman pengguna yang intuitif dan antarmuka yang menakjubkan secara visual yang disukai pengguna.',
    'careers.page.people.corporate.title': 'Posisi Korporat',
    'careers.page.people.corporate.description': 'Tim korporat kami memastikan operasi yang lancar dan pertumbuhan strategis. Dari sumber daya manusia yang mengelola akuisisi bakat hingga keuangan yang mengawasi anggaran dan investasi, peran ini memberikan fondasi yang memungkinkan tim teknis kami fokus pada inovasi dan pengiriman.',
    'careers.page.people.business.title': 'Pekerjaan Bisnis',
    'careers.page.people.business.description': 'Peran bisnis di Upvista Digital berfokus pada pertumbuhan, kesuksesan pelanggan, dan ekspansi pasar. Dari spesialis pemasaran yang mendorong kesadaran merek hingga perwakilan penjualan yang membangun hubungan klien, posisi ini sangat penting untuk kesuksesan dan ekspansi perusahaan kami yang berkelanjutan.',
    
    // Get to Know Workspace Section
    'careers.page.workspace.title': 'Kenali Ruang Kerja',
    'careers.page.workspace.office.title': 'Kantor & Kerja Jarak Jauh',
    'careers.page.workspace.office.description': 'Kami menawarkan pengaturan kerja yang fleksibel dengan ruang kantor modern dan dukungan kerja jarak jauh yang komprehensif. Kantor kami dirancang untuk kolaborasi dan produktivitas, sementara kebijakan kerja jarak jauh kami memastikan Anda dapat bekerja secara efektif dari mana saja.',
    'careers.page.workspace.communication.title': 'Komunikasi & Sistem Internal',
    'careers.page.workspace.communication.description': 'Kami menggunakan alat komunikasi mutakhir dan sistem internal untuk memastikan kolaborasi yang mulus. Dari platform manajemen proyek hingga sistem pesan instan, kami telah membangun infrastruktur yang menjaga tim tetap terhubung dan produktif.',
    'careers.page.workspace.learning.title': 'Pembelajaran & Pengembangan Karir',
    'careers.page.workspace.learning.description': 'Proses onboarding komprehensif kami dan sistem pembelajaran berkelanjutan membantu Anda tumbuh secara profesional. Kami menyediakan dukungan karir, program pengembangan keterampilan, dan evaluasi kinerja reguler untuk memastikan kesuksesan dan kemajuan Anda.',
    'careers.page.workspace.culture.title': 'Budaya Perusahaan & Manfaat',
    'careers.page.workspace.culture.description': 'Kami menumbuhkan budaya perusahaan yang dinamis dengan acara tim reguler, paket gaji yang kompetitif, dan manfaat komprehensif. Sistem evaluasi kami mengakui dan menghargai keunggulan sambil mendukung peningkatan berkelanjutan dan pertumbuhan.',
    
    // What Upvista Digital Is Section
    'careers.page.about.title': 'Apa itu Upvista Digital',
    'careers.page.about.innovation.title': 'Pemimpin Inovasi',
    'careers.page.about.innovation.description': 'Upvista Digital adalah kekuatan perintis dalam transformasi digital, terus mendorong batas dan menciptakan solusi inovatif yang membentuk masa depan teknologi dan bisnis.',
    'careers.page.about.impact.title': 'Dampak Global',
    'careers.page.about.impact.description': 'Kami membangun solusi yang memberikan dampak global sambil menghormati budaya dan nilai lokal. Pekerjaan kami menyentuh jutaan kehidupan di seluruh dunia melalui teknologi yang penting.',
    'careers.page.about.team.title': 'Keunggulan Tim',
    'careers.page.about.team.description': 'Kekuatan kami terletak pada orang-orang kami - individu berbakat yang berkumpul untuk menciptakan sesuatu yang lebih besar dari jumlah bagiannya melalui kolaborasi, inovasi, dan visi bersama.',
    
    // CTA Section
    'careers.page.cta.title': 'Siap Membuat Dampak Anda?',
    'careers.page.cta.description1': 'Bergabunglah dengan tim yang membangun masa depan solusi digital.',
    'careers.page.cta.description2': 'Jelajahi posisi terbuka kami dan mulai perjalanan Anda dengan Upvista Digital hari ini.',
    'careers.page.cta.viewJobsButton': 'Lihat Lowongan Pekerjaan',
    'careers.page.cta.eventsButton': 'Acara Rekrutmen',
    
    // Basics Page
    'careers.basics.hero.title': 'Pelajari Dasar-dasar',
    'careers.basics.hero.subtitle': 'Temukan apa yang membuat Upvista Digital tempat unik untuk membangun karir Anda.',
    
    // Basics Sections
    'careers.basics.about.title': 'Tentang Upvista Digital',
    'careers.basics.about.subtitle': 'Upvista Digital dalam 3 menit',
    'careers.basics.about.description': 'Kami akan menjelaskan filosofi, bisnis, pekerjaan, dan gaya kerja Upvista Digital dengan cara yang mudah dipahami menggunakan angka dan kata kunci simbolis.',
    
    'careers.basics.philosophy.title': 'Filosofi Perusahaan',
    'careers.basics.philosophy.subtitle': 'Pola Pikir dan Budaya Kami',
    'careers.basics.philosophy.description': 'Kami ingin memperkenalkan filosofi perusahaan Upvista Digital, yang terdiri dari tujuan kami dan lima budaya.',
    
    'careers.basics.ceo.title': 'Pesan dari CEO',
    'careers.basics.ceo.subtitle': 'Kata-kata hangat dari Hamza Hafeez',
    'careers.basics.ceo.description': 'Kami menyajikan wawancara dengan CEO tentang strategi masa depan perusahaan dan pemikiran tentang membangun organisasi.',
    
    'careers.basics.recruitment.title': 'Apa yang penting dalam rekrutmen',
    'careers.basics.recruitment.subtitle': 'Praktik terbaik untuk rekrutmen',
    'careers.basics.recruitment.description': 'Kami akan menjelaskan kesesuaian budaya yang kami hargai dalam rekrutmen dan indikator yang kami gunakan untuk mengukur kecocokan tersebut.',
    
    'careers.basics.inclusive.title': 'Merekrut penyandang disabilitas',
    'careers.basics.inclusive.subtitle': 'Merekrut penyandang disabilitas',
    'careers.basics.inclusive.description': 'Kami akan membagikan informasi tentang pendekatan Upvista Digital terhadap perekrutan penyandang disabilitas, gaya kerja, dan sistem.',
    
    'careers.basics.graduates.title': 'Rekrutmen lulusan baru',
    'careers.basics.graduates.subtitle': 'Instruksi untuk lulusan baru',
    'careers.basics.graduates.description': 'Kami menyediakan program komprehensif, bimbingan, dan peluang yang dirancang khusus untuk lulusan baru untuk memulai karir mereka.',
    
    // Basics CTA
    'careers.basics.cta.title': 'Upvista Digital menunggu Anda',
    'careers.basics.cta.description1': 'Bergabunglah dengan Upvista Digital sebagai anggota dan berpartisipasi dalam proyek yang membentuk masa depan.',
    'careers.basics.cta.description2': 'Kami mencari individu berbakat yang berbagi visi dan semangat kami untuk inovasi.',
    'careers.basics.cta.applyButton': 'Lowongan & Aplikasi Pekerjaan',
    'careers.basics.cta.jobsButton': 'Pelajari Pekerjaan',
    
    // About Page
    'careers.about.back': 'Kembali ke Pelajari Dasar-dasar',
    'careers.about.hero.title': 'Tentang Upvista Digital',
    'careers.about.hero.subtitle': 'Perusahaan teknologi di garis depan inovasi digital, memberdayakan bisnis melalui perangkat lunak perusahaan, pengembangan web, otomasi AI, solusi cloud, dan desain canggih.',
    'careers.about.whoWeAre.title': 'Siapa Kami',
    'careers.about.whoWeAre.paragraph1': 'Upvista Digital adalah perusahaan teknologi komprehensif yang menjembatani kesenjangan antara inovasi dan implementasi. Kami berspesialisasi dalam mengubah tantangan bisnis yang kompleks menjadi solusi digital elegan yang mendorong pertumbuhan dan efisiensi.',
    'careers.about.whoWeAre.paragraph2': 'Keahlian kami mencakup berbagai domain teknologi, memungkinkan kami memberikan solusi end-to-end untuk perusahaan dari semua ukuran. Dari pengembangan perangkat lunak khusus hingga otomasi bertenaga AI, kami membantu organisasi menavigasi lanskap digital dengan percaya diri dan kejelasan.',
    'careers.about.services.title': 'Layanan Inti Kami',
    'careers.about.services.enterprise.title': 'Pengembangan Perangkat Lunak Perusahaan',
    'careers.about.services.enterprise.item1': 'Pengembangan Aplikasi Kustom',
    'careers.about.services.enterprise.item2': 'Perencanaan Sumber Daya Perusahaan (ERP)',
    'careers.about.services.enterprise.item3': 'Manajemen Hubungan Pelanggan (CRM)',
    'careers.about.services.enterprise.item4': 'Manajemen Proses Bisnis',
    'careers.about.services.enterprise.item5': 'Desain & Manajemen Database',
    'careers.about.services.enterprise.item6': 'Pengembangan & Integrasi API',
    'careers.about.services.enterprise.item7': 'Modernisasi Sistem Legacy',
    'careers.about.services.web.title': 'Pengembangan Web',
    'careers.about.services.web.item1': 'Pengembangan Frontend (React, Vue, Angular)',
    'careers.about.services.web.item2': 'Pengembangan Backend (Node.js, Python, Java)',
    'careers.about.services.web.item3': 'Aplikasi Web Full-Stack',
    'careers.about.services.web.item4': 'Solusi E-commerce',
    'careers.about.services.web.item5': 'Aplikasi Web Progresif (PWA)',
    'careers.about.services.web.item6': 'Sistem Manajemen Konten',
    'careers.about.services.web.item7': 'Optimasi Kinerja Web',
    'careers.about.services.ai.title': 'AI dan Otomasi',
    'careers.about.services.ai.item1': 'Solusi Machine Learning',
    'careers.about.services.ai.item2': 'Pemrosesan Bahasa Alami',
    'careers.about.services.ai.item3': 'Aplikasi Computer Vision',
    'careers.about.services.ai.item4': 'Otomasi Proses Robotik (RPA)',
    'careers.about.services.ai.item5': 'Analitik Prediktif',
    'careers.about.services.ai.item6': 'Chatbot Cerdas',
    'careers.about.services.ai.item7': 'Business Intelligence Bertenaga AI',
    'careers.about.services.cloud.title': 'Solusi Cloud',
    'careers.about.services.cloud.item1': 'Migrasi & Strategi Cloud',
    'careers.about.services.cloud.item2': 'Layanan AWS, Azure, Google Cloud',
    'careers.about.services.cloud.item3': 'Infrastructure as a Service (IaaS)',
    'careers.about.services.cloud.item4': 'Platform as a Service (PaaS)',
    'careers.about.services.cloud.item5': 'Software as a Service (SaaS)',
    'careers.about.services.cloud.item6': 'Keamanan & Kepatuhan Cloud',
    'careers.about.services.cloud.item7': 'Implementasi DevOps & CI/CD',
    'careers.about.services.design.title': 'Grafis dan Desain',
    'careers.about.services.design.item1': 'Desain UI/UX',
    'careers.about.services.design.item2': 'Identitas Merek & Desain Logo',
    'careers.about.services.design.item3': 'Materi Pemasaran Digital',
    'careers.about.services.design.item4': 'Desain & Prototipe Produk',
    'careers.about.services.design.item5': 'Motion Graphics & Animasi',
    'careers.about.services.design.item6': 'Desain Web & Tata Letak Responsif',
    'careers.about.services.design.item7': 'Riset Pengalaman Pengguna',
    'careers.about.services.additional.title': 'Layanan Tambahan',
    'careers.about.services.additional.item1': 'Solusi Keamanan Siber',
    'careers.about.services.additional.item2': 'Pengembangan Aplikasi Mobile',
    'careers.about.services.additional.item3': 'Pengembangan Blockchain',
    'careers.about.services.additional.item4': 'Solusi IoT',
    'careers.about.services.additional.item5': 'Analitik & Visualisasi Data',
    'careers.about.services.additional.item6': 'Jaminan Kualitas & Pengujian',
    'careers.about.services.additional.item7': 'Konsultasi Teknis',
    'careers.about.community.title': 'Komunitas Kami',
    'careers.about.community.intro': 'Di Upvista Digital, kami percaya bahwa inovasi terbaik berasal dari pikiran kolaboratif yang bekerja bersama. Komunitas kami adalah kolektif yang dinamis dari insinyur, desainer, pengembang, dan profesional berpikiran maju yang berbagi hasrat untuk teknologi dan inovasi.',
    'careers.about.community.collaboration.title': 'Kolaborasi & Acara',
    'careers.about.community.collaboration.item1': 'Tim proyek lintas fungsi',
    'careers.about.community.collaboration.item2': 'Hackathon reguler dan tantangan coding',
    'careers.about.community.collaboration.item3': 'Pertemuan industri dan acara networking',
    'careers.about.community.collaboration.item4': 'Sesi berbagi pengetahuan',
    'careers.about.community.collaboration.item5': 'Kontribusi open-source',
    'careers.about.community.training.title': 'Pelatihan & Pengembangan',
    'careers.about.community.training.item1': 'Bootcamp pengembangan web komprehensif',
    'careers.about.community.training.item2': 'Kursus rekayasa perangkat lunak lanjutan',
    'careers.about.community.training.item3': 'Workshop AI dan machine learning',
    'careers.about.community.training.item4': 'Program sertifikasi cloud computing',
    'careers.about.community.training.item5': 'Metodologi design thinking dan UX',
    'careers.about.lab.title': 'Upvista Technologies Lab',
    'careers.about.lab.intro': 'Technologies Lab kami berfungsi sebagai mesin inovasi Upvista Digital, di mana kami bereksperimen dengan teknologi baru dan mendorong batas kemungkinan. Fasilitas penelitian khusus ini memungkinkan kami tetap unggul dalam tren teknologi dan mengembangkan solusi generasi berikutnya.',
    'careers.about.lab.focus.title': 'Bidang Fokus Penelitian',
    'careers.about.lab.focus.item1': 'Pengembangan Artificial General Intelligence (AGI)',
    'careers.about.lab.focus.item2': 'Aplikasi komputasi kuantum',
    'careers.about.lab.focus.item3': 'Arsitektur jaringan saraf lanjutan',
    'careers.about.lab.focus.item4': 'Inovasi interaksi manusia-komputer',
    'careers.about.lab.focus.item5': 'Teknologi web generasi berikutnya',
    'careers.about.lab.focus.item6': 'Sistem otonom dan robotika',
    'careers.about.lab.focus.item7': 'Solusi teknologi berkelanjutan',
    'careers.about.lab.conclusion': 'Lab ini beroperasi sebagai inkubator untuk ide-ide terobosan, di mana peneliti dan insinyur kami berkolaborasi dengan institusi akademik dan mitra industri untuk mengeksplorasi batas teknologi dan menciptakan solusi yang akan membentuk masa depan inovasi digital.',
    'careers.about.cta.title': 'Siap Bergabung dengan Misi Kami?',
    'careers.about.cta.description': 'Jadilah bagian dari tim yang membentuk masa depan teknologi. Jelajahi peluang karir yang menarik di Upvista Digital.',
    'careers.about.cta.button': 'Bergabung dengan Tim Kami',
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
    
    // Careers Page - Hero Section
    'careers.page.hero.title1': 'Construire une société',
    'careers.page.hero.title2': 'Débordante de travail d\'équipe',
    'careers.page.hero.subtitle1': 'Upvista Digital',
    'careers.page.hero.subtitle2': 'attend des membres pour travailler ensemble.',
    'careers.page.hero.applyButton': 'Offres d\'emploi et candidatures',
    'careers.page.hero.basicsButton': 'Apprendre les bases',
    
    // Careers Page - Find Recruitment Section
    'careers.page.findRecruitment.title': 'Trouver des informations de recrutement',
    'careers.page.findRecruitment.recruitmentType': 'Type de recrutement',
    'careers.page.findRecruitment.selectJob': 'Sélectionner l\'emploi',
    'careers.page.findRecruitment.selectPosition': 'Sélectionner un poste',
    'careers.page.findRecruitment.findOpportunities': 'Trouver des opportunités',
    'careers.page.findRecruitment.searching': 'Recherche...',
    'careers.page.findRecruitment.searchButton': 'Trouver des informations de recrutement',
    'careers.page.findRecruitment.cantFind': 'Vous ne trouvez pas ce que vous cherchez?',
    'careers.page.findRecruitment.viewAll': 'Voir toutes les postes ouverts',
    
    // Recruitment Types
    'careers.page.recruitmentTypes.career': 'Recrutement de carrière',
    'careers.page.recruitmentTypes.potential': 'Recrutement potentiel',
    'careers.page.recruitmentTypes.newGraduate': 'Recrutement de nouveaux diplômés',
    
    // Job Status Labels
    'careers.page.jobStatus.active': 'Actif',
    'careers.page.jobStatus.intern': 'Stagiaire',
    'careers.page.jobStatus.future': 'Futur',
    'careers.page.jobStatus.fullTime': 'Temps plein',
    'careers.page.jobStatus.potential': 'Potentiel',
    
    // Search Results
    'careers.page.searchResults.title': 'Résultats de recherche',
    'careers.page.searchResults.found': 'Trouvé',
    'careers.page.searchResults.positions': 'poste',
    'careers.page.searchResults.positionsPlural': 'postes',
    'careers.page.searchResults.matchingCriteria': 'correspondant à vos critères:',
    'careers.page.searchResults.viewDetails': 'Voir les détails',
    'careers.page.searchResults.noPositions': 'Aucun poste trouvé',
    'careers.page.searchResults.tryAdjusting': 'Essayez d\'ajuster vos critères de recherche ou parcourez tous les postes disponibles.',
    'careers.page.searchResults.viewAllPositions': 'Voir tous les postes',
    
    // Learn the Basics Section
    'careers.page.basics.title': 'Apprendre les bases',
    'careers.page.basics.upvistaIn3': 'Upvista Digital en 3 minutes',
    'careers.page.basics.ceoMessage': 'Message du PDG',
    'careers.page.basics.newGraduate': 'Le recrutement de nouveaux diplômés commence ici',
    'careers.page.basics.philosophy': 'Philosophie d\'entreprise',
    'careers.page.basics.recruitment': 'Ce qui est important dans le recrutement',
    
    // Learn About Business Section
    'careers.page.business.title': 'En savoir plus sur l\'entreprise',
    'careers.page.business.strategy': 'Stratégie commerciale d\'Upvista Digital',
    'careers.page.business.products': 'Produits Upvista Digital',
    'careers.page.business.globalStrategy': 'Stratégie mondiale d\'Upvista Digital',
    'careers.page.business.teamwork': 'Solutions numériques et travail d\'équipe',
    
    // Learn About Job Section
    'careers.page.jobs.title': 'En savoir plus sur l\'emploi',
    'careers.page.jobs.development': 'Développement et opérations',
    'careers.page.jobs.marketing': 'Marketing',
    'careers.page.jobs.customerService': 'Service client',
    'careers.page.jobs.sales': 'Ventes',
    'careers.page.jobs.consulting': 'Conseil en systèmes',
    'careers.page.jobs.corporate': 'Entreprise',
    
    // Get to Know People Section
    'careers.page.people.title': 'Rencontrer les gens',
    'careers.page.people.engineer.title': 'Ingénieur/Concepteur',
    'careers.page.people.engineer.description': 'Nos équipes d\'ingénierie et de conception sont les esprits créatifs derrière des solutions numériques innovantes. Les ingénieurs travaillent sur des technologies de pointe, construisant des systèmes et applications évolutifs qui stimulent le succès commercial. Les concepteurs créent des expériences utilisateur intuitives et des interfaces visuellement époustouflantes que les utilisateurs adorent.',
    'careers.page.people.corporate.title': 'Postes corporatifs',
    'careers.page.people.corporate.description': 'Notre équipe corporative assure des opérations fluides et une croissance stratégique. Des ressources humaines gérant l\'acquisition de talents aux finances supervisant les budgets et les investissements, ces rôles fournissent la fondation qui permet à nos équipes techniques de se concentrer sur l\'innovation et la livraison.',
    'careers.page.people.business.title': 'Emplois commerciaux',
    'careers.page.people.business.description': 'Les rôles commerciaux chez Upvista Digital se concentrent sur la croissance, le succès client et l\'expansion du marché. Des spécialistes du marketing qui stimulent la notoriété de la marque aux représentants commerciaux qui établissent des relations clients, ces postes sont cruciaux pour le succès continu et l\'expansion de notre entreprise.',
    
    // Get to Know Workspace Section
    'careers.page.workspace.title': 'Découvrir l\'espace de travail',
    'careers.page.workspace.office.title': 'Bureau et télétravail',
    'careers.page.workspace.office.description': 'Nous offrons des arrangements de travail flexibles avec des espaces de bureau modernes et un support complet pour le travail à distance. Nos bureaux sont conçus pour la collaboration et la productivité, tandis que nos politiques de télétravail garantissent que vous pouvez travailler efficacement de n\'importe où.',
    'careers.page.workspace.communication.title': 'Communication et systèmes internes',
    'careers.page.workspace.communication.description': 'Nous utilisons des outils de communication de pointe et des systèmes internes pour assurer une collaboration transparente. Des plateformes de gestion de projet aux systèmes de messagerie instantanée, nous avons construit une infrastructure qui maintient les équipes connectées et productives.',
    'careers.page.workspace.learning.title': 'Apprentissage et développement de carrière',
    'careers.page.workspace.learning.description': 'Notre processus d\'intégration complet et nos systèmes d\'apprentissage continu vous aident à grandir professionnellement. Nous fournissons un soutien de carrière, des programmes de développement des compétences et des évaluations de performance régulières pour assurer votre succès et votre avancement.',
    'careers.page.workspace.culture.title': 'Culture d\'entreprise et avantages',
    'careers.page.workspace.culture.description': 'Nous favorisons une culture d\'entreprise dynamique avec des événements d\'équipe réguliers, des packages salariaux compétitifs et des avantages complets. Notre système d\'évaluation reconnaît et récompense l\'excellence tout en soutenant l\'amélioration continue et la croissance.',
    
    // What Upvista Digital Is Section
    'careers.page.about.title': 'Qu\'est-ce qu\'Upvista Digital',
    'careers.page.about.innovation.title': 'Leader de l\'innovation',
    'careers.page.about.innovation.description': 'Upvista Digital est une force pionnière dans la transformation numérique, repoussant constamment les limites et créant des solutions innovantes qui façonnent l\'avenir de la technologie et des affaires.',
    'careers.page.about.impact.title': 'Impact mondial',
    'careers.page.about.impact.description': 'Nous construisons des solutions qui ont un impact mondial tout en respectant les cultures et les valeurs locales. Notre travail touche des millions de vies dans le monde entier grâce à une technologie qui compte.',
    'careers.page.about.team.title': 'Excellence d\'équipe',
    'careers.page.about.team.description': 'Notre force réside dans nos personnes - des individus talentueux qui se réunissent pour créer quelque chose de plus grand que la somme de ses parties grâce à la collaboration, l\'innovation et une vision partagée.',
    
    // CTA Section
    'careers.page.cta.title': 'Prêt à faire votre impact?',
    'careers.page.cta.description1': 'Rejoignez une équipe qui construit l\'avenir des solutions numériques.',
    'careers.page.cta.description2': 'Explorez nos postes ouverts et commencez votre parcours avec Upvista Digital aujourd\'hui.',
    'careers.page.cta.viewJobsButton': 'Voir les offres d\'emploi',
    'careers.page.cta.eventsButton': 'Événements de recrutement',
    
    // Basics Page
    'careers.basics.hero.title': 'Apprendre les bases',
    'careers.basics.hero.subtitle': 'Découvrez ce qui fait d\'Upvista Digital un endroit unique pour construire votre carrière.',
    
    // Basics Sections
    'careers.basics.about.title': 'À propos d\'Upvista Digital',
    'careers.basics.about.subtitle': 'Upvista Digital en 3 minutes',
    'careers.basics.about.description': 'Nous expliquerons la philosophie, les affaires, le travail et le style de travail d\'Upvista Digital de manière facile à comprendre en utilisant des chiffres et des mots-clés symboliques.',
    
    'careers.basics.philosophy.title': 'Philosophie d\'entreprise',
    'careers.basics.philosophy.subtitle': 'Notre état d\'esprit et notre culture',
    'careers.basics.philosophy.description': 'Nous aimerions présenter la philosophie d\'entreprise d\'Upvista Digital, qui se compose de notre objectif et de cinq cultures.',
    
    'careers.basics.ceo.title': 'Message du PDG',
    'careers.basics.ceo.subtitle': 'Mots chaleureux de Hamza Hafeez',
    'careers.basics.ceo.description': 'Nous présentons une interview avec le PDG sur les stratégies futures de l\'entreprise et les réflexions sur la construction de l\'organisation.',
    
    'careers.basics.recruitment.title': 'Ce qui est important dans le recrutement',
    'careers.basics.recruitment.subtitle': 'Meilleures pratiques de recrutement',
    'careers.basics.recruitment.description': 'Nous expliquerons l\'adéquation culturelle que nous valorisons dans le recrutement et les indicateurs que nous utilisons pour mesurer cette correspondance.',
    
    'careers.basics.inclusive.title': 'Embauche de personnes handicapées',
    'careers.basics.inclusive.subtitle': 'Embauche de personnes handicapées',
    'careers.basics.inclusive.description': 'Nous partagerons des informations sur l\'approche d\'Upvista Digital en matière d\'embauche de personnes handicapées, les styles de travail et les systèmes.',
    
    'careers.basics.graduates.title': 'Recrutement de nouveaux diplômés',
    'careers.basics.graduates.subtitle': 'Instructions pour les nouveaux diplômés',
    'careers.basics.graduates.description': 'Nous proposons des programmes complets, du mentorat et des opportunités spécialement conçus pour les nouveaux diplômés afin de lancer leur carrière.',
    
    // Basics CTA
    'careers.basics.cta.title': 'Upvista Digital vous attend',
    'careers.basics.cta.description1': 'Rejoignez Upvista Digital en tant que membre et participez à des projets qui façonnent l\'avenir.',
    'careers.basics.cta.description2': 'Nous recherchons des personnes talentueuses qui partagent notre vision et notre passion pour l\'innovation.',
    'careers.basics.cta.applyButton': 'Offres d\'emploi et candidatures',
    'careers.basics.cta.jobsButton': 'En savoir plus sur les emplois',
    
    // About Page
    'careers.about.back': 'Retour à Apprendre les bases',
    'careers.about.hero.title': 'À propos d\'Upvista Digital',
    'careers.about.hero.subtitle': 'Une entreprise technologique à l\'avant-garde de l\'innovation numérique, permettant aux entreprises grâce aux logiciels d\'entreprise, au développement web, à l\'automatisation IA, aux solutions cloud et au design de pointe.',
    'careers.about.whoWeAre.title': 'Qui sommes-nous',
    'careers.about.whoWeAre.paragraph1': 'Upvista Digital est une entreprise technologique complète qui comble le fossé entre innovation et mise en œuvre. Nous sommes spécialisés dans la transformation de défis commerciaux complexes en solutions numériques élégantes qui stimulent la croissance et l\'efficacité.',
    'careers.about.whoWeAre.paragraph2': 'Notre expertise s\'étend sur plusieurs domaines technologiques, nous permettant de fournir des solutions de bout en bout pour les entreprises de toutes tailles. Du développement de logiciels personnalisés à l\'automatisation alimentée par l\'IA, nous aidons les organisations à naviguer dans le paysage numérique avec confiance et clarté.',
    'careers.about.services.title': 'Nos services principaux',
    'careers.about.services.enterprise.title': 'Développement de logiciels d\'entreprise',
    'careers.about.services.enterprise.item1': 'Développement d\'applications personnalisées',
    'careers.about.services.enterprise.item2': 'Planification des ressources d\'entreprise (ERP)',
    'careers.about.services.enterprise.item3': 'Gestion de la relation client (CRM)',
    'careers.about.services.enterprise.item4': 'Gestion des processus métier',
    'careers.about.services.enterprise.item5': 'Conception et gestion de bases de données',
    'careers.about.services.enterprise.item6': 'Développement et intégration d\'API',
    'careers.about.services.enterprise.item7': 'Modernisation des systèmes hérités',
    'careers.about.services.web.title': 'Développement Web',
    'careers.about.services.web.item1': 'Développement Frontend (React, Vue, Angular)',
    'careers.about.services.web.item2': 'Développement Backend (Node.js, Python, Java)',
    'careers.about.services.web.item3': 'Applications Web Full-Stack',
    'careers.about.services.web.item4': 'Solutions E-commerce',
    'careers.about.services.web.item5': 'Applications Web Progressives (PWA)',
    'careers.about.services.web.item6': 'Systèmes de gestion de contenu',
    'careers.about.services.web.item7': 'Optimisation des performances Web',
    'careers.about.services.ai.title': 'IA et automatisation',
    'careers.about.services.ai.item1': 'Solutions d\'apprentissage automatique',
    'careers.about.services.ai.item2': 'Traitement du langage naturel',
    'careers.about.services.ai.item3': 'Applications de vision par ordinateur',
    'careers.about.services.ai.item4': 'Automatisation robotique des processus (RPA)',
    'careers.about.services.ai.item5': 'Analytique prédictive',
    'careers.about.services.ai.item6': 'Chatbots intelligents',
    'careers.about.services.ai.item7': 'Intelligence d\'affaires alimentée par l\'IA',
    'careers.about.services.cloud.title': 'Solutions Cloud',
    'careers.about.services.cloud.item1': 'Migration et stratégie Cloud',
    'careers.about.services.cloud.item2': 'Services AWS, Azure, Google Cloud',
    'careers.about.services.cloud.item3': 'Infrastructure as a Service (IaaS)',
    'careers.about.services.cloud.item4': 'Platform as a Service (PaaS)',
    'careers.about.services.cloud.item5': 'Software as a Service (SaaS)',
    'careers.about.services.cloud.item6': 'Sécurité et conformité Cloud',
    'careers.about.services.cloud.item7': 'Implémentation DevOps et CI/CD',
    'careers.about.services.design.title': 'Graphisme et design',
    'careers.about.services.design.item1': 'Design UI/UX',
    'careers.about.services.design.item2': 'Identité de marque et design de logo',
    'careers.about.services.design.item3': 'Matériel de marketing numérique',
    'careers.about.services.design.item4': 'Design et prototypage de produits',
    'careers.about.services.design.item5': 'Motion Graphics et animation',
    'careers.about.services.design.item6': 'Design Web et mises en page réactives',
    'careers.about.services.design.item7': 'Recherche sur l\'expérience utilisateur',
    'careers.about.services.additional.title': 'Services supplémentaires',
    'careers.about.services.additional.item1': 'Solutions de cybersécurité',
    'careers.about.services.additional.item2': 'Développement d\'applications mobiles',
    'careers.about.services.additional.item3': 'Développement Blockchain',
    'careers.about.services.additional.item4': 'Solutions IoT',
    'careers.about.services.additional.item5': 'Analytique et visualisation de données',
    'careers.about.services.additional.item6': 'Assurance qualité et tests',
    'careers.about.services.additional.item7': 'Conseil technique',
    'careers.about.community.title': 'Notre communauté',
    'careers.about.community.intro': 'Chez Upvista Digital, nous croyons que les meilleures innovations viennent d\'esprits collaboratifs travaillant ensemble. Notre communauté est un collectif dynamique d\'ingénieurs, de designers, de développeurs et de professionnels avant-gardistes qui partagent une passion pour la technologie et l\'innovation.',
    'careers.about.community.collaboration.title': 'Collaboration et événements',
    'careers.about.community.collaboration.item1': 'Équipes de projet transversales',
    'careers.about.community.collaboration.item2': 'Hackathons réguliers et défis de codage',
    'careers.about.community.collaboration.item3': 'Rencontres industrielles et événements de réseautage',
    'careers.about.community.collaboration.item4': 'Sessions de partage de connaissances',
    'careers.about.community.collaboration.item5': 'Contributions open-source',
    'careers.about.community.training.title': 'Formation et développement',
    'careers.about.community.training.item1': 'Bootcamps de développement web complets',
    'careers.about.community.training.item2': 'Cours avancés d\'ingénierie logicielle',
    'careers.about.community.training.item3': 'Ateliers sur l\'IA et l\'apprentissage automatique',
    'careers.about.community.training.item4': 'Programmes de certification cloud computing',
    'careers.about.community.training.item5': 'Méthodologies de design thinking et UX',
    'careers.about.lab.title': 'Upvista Technologies Lab',
    'careers.about.lab.intro': 'Notre Technologies Lab sert de moteur d\'innovation d\'Upvista Digital, où nous expérimentons avec les technologies émergentes et repoussons les limites du possible. Cette installation de recherche dédiée nous permet de rester en avance sur les tendances technologiques et de développer des solutions de nouvelle génération.',
    'careers.about.lab.focus.title': 'Domaines de recherche prioritaires',
    'careers.about.lab.focus.item1': 'Développement de l\'Intelligence Artificielle Générale (AGI)',
    'careers.about.lab.focus.item2': 'Applications de l\'informatique quantique',
    'careers.about.lab.focus.item3': 'Architectures de réseaux neuronaux avancées',
    'careers.about.lab.focus.item4': 'Innovations en interaction homme-machine',
    'careers.about.lab.focus.item5': 'Technologies web de nouvelle génération',
    'careers.about.lab.focus.item6': 'Systèmes autonomes et robotique',
    'careers.about.lab.focus.item7': 'Solutions technologiques durables',
    'careers.about.lab.conclusion': 'Le laboratoire fonctionne comme un incubateur pour des idées révolutionnaires, où nos chercheurs et ingénieurs collaborent avec des institutions académiques et des partenaires industriels pour explorer les frontières de la technologie et créer des solutions qui façonneront l\'avenir de l\'innovation numérique.',
    'careers.about.cta.title': 'Prêt à rejoindre notre mission?',
    'careers.about.cta.description': 'Faites partie d\'une équipe qui façonne l\'avenir de la technologie. Explorez des opportunités de carrière passionnantes chez Upvista Digital.',
    'careers.about.cta.button': 'Rejoindre notre équipe',
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
    
    // Careers Page - Hero Section
    'careers.page.hero.title1': 'Construyendo una sociedad',
    'careers.page.hero.title2': 'Desbordante de trabajo en equipo',
    'careers.page.hero.subtitle1': 'Upvista Digital',
    'careers.page.hero.subtitle2': 'espera miembros para trabajar juntos.',
    'careers.page.hero.applyButton': 'Ofertas de empleo y solicitudes',
    'careers.page.hero.basicsButton': 'Aprender lo básico',
    
    // Careers Page - Find Recruitment Section
    'careers.page.findRecruitment.title': 'Encontrar información de reclutamiento',
    'careers.page.findRecruitment.recruitmentType': 'Tipo de reclutamiento',
    'careers.page.findRecruitment.selectJob': 'Seleccionar el trabajo',
    'careers.page.findRecruitment.selectPosition': 'Seleccionar una posición',
    'careers.page.findRecruitment.findOpportunities': 'Encontrar oportunidades',
    'careers.page.findRecruitment.searching': 'Buscando...',
    'careers.page.findRecruitment.searchButton': 'Encontrar información de reclutamiento',
    'careers.page.findRecruitment.cantFind': '¿No puede encontrar lo que busca?',
    'careers.page.findRecruitment.viewAll': 'Ver todas las posiciones abiertas',
    
    // Recruitment Types
    'careers.page.recruitmentTypes.career': 'Reclutamiento de carrera',
    'careers.page.recruitmentTypes.potential': 'Reclutamiento potencial',
    'careers.page.recruitmentTypes.newGraduate': 'Reclutamiento de nuevos graduados',
    
    // Job Status Labels
    'careers.page.jobStatus.active': 'Activo',
    'careers.page.jobStatus.intern': 'Pasante',
    'careers.page.jobStatus.future': 'Futuro',
    'careers.page.jobStatus.fullTime': 'Tiempo completo',
    'careers.page.jobStatus.potential': 'Potencial',
    
    // Search Results
    'careers.page.searchResults.title': 'Resultados de búsqueda',
    'careers.page.searchResults.found': 'Encontrado',
    'careers.page.searchResults.positions': 'posición',
    'careers.page.searchResults.positionsPlural': 'posiciones',
    'careers.page.searchResults.matchingCriteria': 'que coinciden con sus criterios:',
    'careers.page.searchResults.viewDetails': 'Ver detalles',
    'careers.page.searchResults.noPositions': 'No se encontraron posiciones',
    'careers.page.searchResults.tryAdjusting': 'Intente ajustar sus criterios de búsqueda o explore todas las posiciones disponibles.',
    'careers.page.searchResults.viewAllPositions': 'Ver todas las posiciones',
    
    // Learn the Basics Section
    'careers.page.basics.title': 'Aprender lo básico',
    'careers.page.basics.upvistaIn3': 'Upvista Digital en 3 minutos',
    'careers.page.basics.ceoMessage': 'Mensaje del CEO',
    'careers.page.basics.newGraduate': 'El reclutamiento de nuevos graduados comienza aquí',
    'careers.page.basics.philosophy': 'Filosofía corporativa',
    'careers.page.basics.recruitment': 'Lo que es importante en el reclutamiento',
    
    // Learn About Business Section
    'careers.page.business.title': 'Conocer el negocio',
    'careers.page.business.strategy': 'Estrategia de negocios de Upvista Digital',
    'careers.page.business.products': 'Productos de Upvista Digital',
    'careers.page.business.globalStrategy': 'Estrategia global de Upvista Digital',
    'careers.page.business.teamwork': 'Soluciones digitales y trabajo en equipo',
    
    // Learn About Job Section
    'careers.page.jobs.title': 'Conocer el trabajo',
    'careers.page.jobs.development': 'Desarrollo y operaciones',
    'careers.page.jobs.marketing': 'Marketing',
    'careers.page.jobs.customerService': 'Servicio al cliente',
    'careers.page.jobs.sales': 'Ventas',
    'careers.page.jobs.consulting': 'Consultoría de sistemas',
    'careers.page.jobs.corporate': 'Corporativo',
    
    // Get to Know People Section
    'careers.page.people.title': 'Conocer a la gente',
    'careers.page.people.engineer.title': 'Ingeniero/Diseñador',
    'careers.page.people.engineer.description': 'Nuestros equipos de ingeniería y diseño son las mentes creativas detrás de soluciones digitales innovadoras. Los ingenieros trabajan en tecnologías de vanguardia, construyendo sistemas y aplicaciones escalables que impulsan el éxito empresarial. Los diseñadores crean experiencias de usuario intuitivas e interfaces visualmente impresionantes que los usuarios aman.',
    'careers.page.people.corporate.title': 'Posiciones corporativas',
    'careers.page.people.corporate.description': 'Nuestro equipo corporativo asegura operaciones fluidas y crecimiento estratégico. Desde recursos humanos que gestionan la adquisición de talento hasta finanzas que supervisan presupuestos e inversiones, estos roles proporcionan la base que permite a nuestros equipos técnicos centrarse en la innovación y la entrega.',
    'careers.page.people.business.title': 'Trabajos de negocios',
    'careers.page.people.business.description': 'Los roles de negocios en Upvista Digital se centran en el crecimiento, el éxito del cliente y la expansión del mercado. Desde especialistas en marketing que impulsan el conocimiento de la marca hasta representantes de ventas que construyen relaciones con los clientes, estas posiciones son cruciales para el éxito continuo y la expansión de nuestra empresa.',
    
    // Get to Know Workspace Section
    'careers.page.workspace.title': 'Conocer el espacio de trabajo',
    'careers.page.workspace.office.title': 'Oficina y trabajo remoto',
    'careers.page.workspace.office.description': 'Ofrecemos arreglos de trabajo flexibles con espacios de oficina modernos y soporte integral para trabajo remoto. Nuestras oficinas están diseñadas para la colaboración y la productividad, mientras que nuestras políticas de trabajo remoto aseguran que puede trabajar efectivamente desde cualquier lugar.',
    'careers.page.workspace.communication.title': 'Comunicación y sistemas internos',
    'careers.page.workspace.communication.description': 'Utilizamos herramientas de comunicación de vanguardia y sistemas internos para asegurar una colaboración fluida. Desde plataformas de gestión de proyectos hasta sistemas de mensajería instantánea, hemos construido una infraestructura que mantiene a los equipos conectados y productivos.',
    'careers.page.workspace.learning.title': 'Aprendizaje y desarrollo profesional',
    'careers.page.workspace.learning.description': 'Nuestro proceso integral de incorporación y sistemas de aprendizaje continuo lo ayudan a crecer profesionalmente. Proporcionamos apoyo profesional, programas de desarrollo de habilidades y evaluaciones de desempeño regulares para asegurar su éxito y avance.',
    'careers.page.workspace.culture.title': 'Cultura empresarial y beneficios',
    'careers.page.workspace.culture.description': 'Fomentamos una cultura empresarial vibrante con eventos de equipo regulares, paquetes salariales competitivos y beneficios integrales. Nuestro sistema de evaluación reconoce y recompensa la excelencia mientras apoya la mejora continua y el crecimiento.',
    
    // What Upvista Digital Is Section
    'careers.page.about.title': 'Qué es Upvista Digital',
    'careers.page.about.innovation.title': 'Líder en innovación',
    'careers.page.about.innovation.description': 'Upvista Digital es una fuerza pionera en la transformación digital, constantemente empujando límites y creando soluciones innovadoras que dan forma al futuro de la tecnología y los negocios.',
    'careers.page.about.impact.title': 'Impacto global',
    'careers.page.about.impact.description': 'Estamos construyendo soluciones que tienen un impacto global mientras respetamos las culturas y valores locales. Nuestro trabajo toca millones de vidas en todo el mundo a través de tecnología que importa.',
    'careers.page.about.team.title': 'Excelencia del equipo',
    'careers.page.about.team.description': 'Nuestra fortaleza radica en nuestra gente - individuos talentosos que se unen para crear algo más grande que la suma de sus partes a través de la colaboración, la innovación y una visión compartida.',
    
    // CTA Section
    'careers.page.cta.title': '¿Listo para hacer su impacto?',
    'careers.page.cta.description1': 'Únase a un equipo que está construyendo el futuro de las soluciones digitales.',
    'careers.page.cta.description2': 'Explore nuestras posiciones abiertas y comience su viaje con Upvista Digital hoy.',
    'careers.page.cta.viewJobsButton': 'Ver ofertas de empleo',
    'careers.page.cta.eventsButton': 'Eventos de reclutamiento',
    
    // Basics Page
    'careers.basics.hero.title': 'Aprender lo básico',
    'careers.basics.hero.subtitle': 'Descubra qué hace de Upvista Digital un lugar único para construir su carrera.',
    
    // Basics Sections
    'careers.basics.about.title': 'Acerca de Upvista Digital',
    'careers.basics.about.subtitle': 'Upvista Digital en 3 minutos',
    'careers.basics.about.description': 'Explicaremos la filosofía, el negocio, el trabajo y el estilo de trabajo de Upvista Digital de manera fácil de entender utilizando números y palabras clave simbólicas.',
    
    'careers.basics.philosophy.title': 'Filosofía corporativa',
    'careers.basics.philosophy.subtitle': 'Nuestra mentalidad y cultura',
    'careers.basics.philosophy.description': 'Nos gustaría presentar la filosofía corporativa de Upvista Digital, que consiste en nuestro propósito y cinco culturas.',
    
    'careers.basics.ceo.title': 'Mensaje del CEO',
    'careers.basics.ceo.subtitle': 'Palabras cálidas de Hamza Hafeez',
    'careers.basics.ceo.description': 'Presentamos una entrevista con el CEO sobre las estrategias futuras de la empresa y los pensamientos sobre la construcción de la organización.',
    
    'careers.basics.recruitment.title': 'Lo que es importante en el reclutamiento',
    'careers.basics.recruitment.subtitle': 'Mejores prácticas para el reclutamiento',
    'careers.basics.recruitment.description': 'Explicaremos el ajuste cultural que valoramos en el reclutamiento y los indicadores que utilizamos para medir ese ajuste.',
    
    'careers.basics.inclusive.title': 'Contratación de personas con discapacidad',
    'careers.basics.inclusive.subtitle': 'Contratación de personas con discapacidad',
    'careers.basics.inclusive.description': 'Compartiremos información sobre el enfoque de Upvista Digital para contratar personas con discapacidad, estilos de trabajo y sistemas.',
    
    'careers.basics.graduates.title': 'Reclutamiento de nuevos graduados',
    'careers.basics.graduates.subtitle': 'Instrucciones para nuevos graduados',
    'careers.basics.graduates.description': 'Proporcionamos programas integrales, mentoría y oportunidades diseñadas específicamente para graduados recientes para lanzar sus carreras.',
    
    // Basics CTA
    'careers.basics.cta.title': 'Upvista Digital te está esperando',
    'careers.basics.cta.description1': 'Únete a Upvista Digital como miembro y participa en proyectos que dan forma al futuro.',
    'careers.basics.cta.description2': 'Buscamos individuos talentosos que compartan nuestra visión y pasión por la innovación.',
    'careers.basics.cta.applyButton': 'Ofertas de empleo y solicitudes',
    'careers.basics.cta.jobsButton': 'Conocer los trabajos',
    
    // About Page
    'careers.about.back': 'Volver a Aprender lo básico',
    'careers.about.hero.title': 'Acerca de Upvista Digital',
    'careers.about.hero.subtitle': 'Una empresa tecnológica a la vanguardia de la innovación digital, empoderando a las empresas a través de software empresarial, desarrollo web, automatización de IA, soluciones en la nube y diseño de vanguardia.',
    'careers.about.whoWeAre.title': 'Quiénes somos',
    'careers.about.whoWeAre.paragraph1': 'Upvista Digital es una empresa tecnológica integral que cierra la brecha entre innovación e implementación. Nos especializamos en transformar desafíos empresariales complejos en soluciones digitales elegantes que impulsan el crecimiento y la eficiencia.',
    'careers.about.whoWeAre.paragraph2': 'Nuestra experiencia abarca múltiples dominios tecnológicos, lo que nos permite proporcionar soluciones de extremo a extremo para empresas de todos los tamaños. Desde el desarrollo de software personalizado hasta la automatización impulsada por IA, ayudamos a las organizaciones a navegar el panorama digital con confianza y claridad.',
    'careers.about.services.title': 'Nuestros servicios principales',
    'careers.about.services.enterprise.title': 'Desarrollo de software empresarial',
    'careers.about.services.enterprise.item1': 'Desarrollo de aplicaciones personalizadas',
    'careers.about.services.enterprise.item2': 'Planificación de recursos empresariales (ERP)',
    'careers.about.services.enterprise.item3': 'Gestión de relaciones con clientes (CRM)',
    'careers.about.services.enterprise.item4': 'Gestión de procesos empresariales',
    'careers.about.services.enterprise.item5': 'Diseño y gestión de bases de datos',
    'careers.about.services.enterprise.item6': 'Desarrollo e integración de API',
    'careers.about.services.enterprise.item7': 'Modernización de sistemas heredados',
    'careers.about.services.web.title': 'Desarrollo Web',
    'careers.about.services.web.item1': 'Desarrollo Frontend (React, Vue, Angular)',
    'careers.about.services.web.item2': 'Desarrollo Backend (Node.js, Python, Java)',
    'careers.about.services.web.item3': 'Aplicaciones Web Full-Stack',
    'careers.about.services.web.item4': 'Soluciones de comercio electrónico',
    'careers.about.services.web.item5': 'Aplicaciones Web Progresivas (PWA)',
    'careers.about.services.web.item6': 'Sistemas de gestión de contenido',
    'careers.about.services.web.item7': 'Optimización del rendimiento web',
    'careers.about.services.ai.title': 'IA y automatización',
    'careers.about.services.ai.item1': 'Soluciones de aprendizaje automático',
    'careers.about.services.ai.item2': 'Procesamiento del lenguaje natural',
    'careers.about.services.ai.item3': 'Aplicaciones de visión por computadora',
    'careers.about.services.ai.item4': 'Automatización robótica de procesos (RPA)',
    'careers.about.services.ai.item5': 'Análisis predictivo',
    'careers.about.services.ai.item6': 'Chatbots inteligentes',
    'careers.about.services.ai.item7': 'Inteligencia empresarial impulsada por IA',
    'careers.about.services.cloud.title': 'Soluciones en la nube',
    'careers.about.services.cloud.item1': 'Migración y estrategia en la nube',
    'careers.about.services.cloud.item2': 'Servicios AWS, Azure, Google Cloud',
    'careers.about.services.cloud.item3': 'Infraestructura como servicio (IaaS)',
    'careers.about.services.cloud.item4': 'Plataforma como servicio (PaaS)',
    'careers.about.services.cloud.item5': 'Software como servicio (SaaS)',
    'careers.about.services.cloud.item6': 'Seguridad y cumplimiento en la nube',
    'careers.about.services.cloud.item7': 'Implementación de DevOps y CI/CD',
    'careers.about.services.design.title': 'Gráficos y diseño',
    'careers.about.services.design.item1': 'Diseño UI/UX',
    'careers.about.services.design.item2': 'Identidad de marca y diseño de logotipos',
    'careers.about.services.design.item3': 'Materiales de marketing digital',
    'careers.about.services.design.item4': 'Diseño y prototipado de productos',
    'careers.about.services.design.item5': 'Motion Graphics y animación',
    'careers.about.services.design.item6': 'Diseño web y diseños responsivos',
    'careers.about.services.design.item7': 'Investigación de experiencia del usuario',
    'careers.about.services.additional.title': 'Servicios adicionales',
    'careers.about.services.additional.item1': 'Soluciones de ciberseguridad',
    'careers.about.services.additional.item2': 'Desarrollo de aplicaciones móviles',
    'careers.about.services.additional.item3': 'Desarrollo de Blockchain',
    'careers.about.services.additional.item4': 'Soluciones IoT',
    'careers.about.services.additional.item5': 'Análisis y visualización de datos',
    'careers.about.services.additional.item6': 'Aseguramiento de calidad y pruebas',
    'careers.about.services.additional.item7': 'Consultoría técnica',
    'careers.about.community.title': 'Nuestra comunidad',
    'careers.about.community.intro': 'En Upvista Digital, creemos que las mejores innovaciones provienen de mentes colaborativas trabajando juntas. Nuestra comunidad es un colectivo vibrante de ingenieros, diseñadores, desarrolladores y profesionales con visión de futuro que comparten una pasión por la tecnología y la innovación.',
    'careers.about.community.collaboration.title': 'Colaboración y eventos',
    'careers.about.community.collaboration.item1': 'Equipos de proyectos interfuncionales',
    'careers.about.community.collaboration.item2': 'Hackathons regulares y desafíos de codificación',
    'careers.about.community.collaboration.item3': 'Encuentros de la industria y eventos de networking',
    'careers.about.community.collaboration.item4': 'Sesiones de compartir conocimientos',
    'careers.about.community.collaboration.item5': 'Contribuciones de código abierto',
    'careers.about.community.training.title': 'Capacitación y desarrollo',
    'careers.about.community.training.item1': 'Bootcamps completos de desarrollo web',
    'careers.about.community.training.item2': 'Cursos avanzados de ingeniería de software',
    'careers.about.community.training.item3': 'Talleres de IA y aprendizaje automático',
    'careers.about.community.training.item4': 'Programas de certificación en computación en la nube',
    'careers.about.community.training.item5': 'Metodologías de pensamiento de diseño y UX',
    'careers.about.lab.title': 'Upvista Technologies Lab',
    'careers.about.lab.intro': 'Nuestro Technologies Lab sirve como el motor de innovación de Upvista Digital, donde experimentamos con tecnologías emergentes y empujamos los límites de lo posible. Esta instalación de investigación dedicada nos permite mantenernos por delante de las tendencias tecnológicas y desarrollar soluciones de próxima generación.',
    'careers.about.lab.focus.title': 'Áreas de enfoque de investigación',
    'careers.about.lab.focus.item1': 'Desarrollo de Inteligencia Artificial General (AGI)',
    'careers.about.lab.focus.item2': 'Aplicaciones de computación cuántica',
    'careers.about.lab.focus.item3': 'Arquitecturas avanzadas de redes neuronales',
    'careers.about.lab.focus.item4': 'Innovaciones en interacción humano-computadora',
    'careers.about.lab.focus.item5': 'Tecnologías web de próxima generación',
    'careers.about.lab.focus.item6': 'Sistemas autónomos y robótica',
    'careers.about.lab.focus.item7': 'Soluciones tecnológicas sostenibles',
    'careers.about.lab.conclusion': 'El laboratorio opera como una incubadora para ideas innovadoras, donde nuestros investigadores e ingenieros colaboran con instituciones académicas y socios industriales para explorar las fronteras de la tecnología y crear soluciones que darán forma al futuro de la innovación digital.',
    'careers.about.cta.title': '¿Listo para unirse a nuestra misión?',
    'careers.about.cta.description': 'Sé parte de un equipo que está dando forma al futuro de la tecnología. Explora emocionantes oportunidades de carrera en Upvista Digital.',
    'careers.about.cta.button': 'Únete a nuestro equipo',
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
    
    // Careers Page - Hero Section
    'careers.page.hero.title1': 'Bir Toplum İnşa Etmek',
    'careers.page.hero.title2': 'Takım Çalışmasıyla Taşan',
    'careers.page.hero.subtitle1': 'Upvista Digital',
    'careers.page.hero.subtitle2': 'birlikte çalışacak üyeleri bekliyor.',
    'careers.page.hero.applyButton': 'İş İlanları ve Başvurular',
    'careers.page.hero.basicsButton': 'Temelleri Öğren',
    
    // Careers Page - Find Recruitment Section
    'careers.page.findRecruitment.title': 'İşe Alım Bilgilerini Bul',
    'careers.page.findRecruitment.recruitmentType': 'İşe Alım Türü',
    'careers.page.findRecruitment.selectJob': 'İşi Seç',
    'careers.page.findRecruitment.selectPosition': 'Bir pozisyon seç',
    'careers.page.findRecruitment.findOpportunities': 'Fırsatları Bul',
    'careers.page.findRecruitment.searching': 'Aranıyor...',
    'careers.page.findRecruitment.searchButton': 'İşe Alım Bilgilerini Bul',
    'careers.page.findRecruitment.cantFind': 'Aradığınızı bulamadınız mı?',
    'careers.page.findRecruitment.viewAll': 'Tüm açık pozisyonları görüntüle',
    
    // Recruitment Types
    'careers.page.recruitmentTypes.career': 'Kariyer İşe Alımı',
    'careers.page.recruitmentTypes.potential': 'Potansiyel İşe Alım',
    'careers.page.recruitmentTypes.newGraduate': 'Yeni Mezun İşe Alımı',
    
    // Job Status Labels
    'careers.page.jobStatus.active': 'Aktif',
    'careers.page.jobStatus.intern': 'Stajyer',
    'careers.page.jobStatus.future': 'Gelecek',
    'careers.page.jobStatus.fullTime': 'Tam zamanlı',
    'careers.page.jobStatus.potential': 'Potansiyel',
    
    // Search Results
    'careers.page.searchResults.title': 'Arama Sonuçları',
    'careers.page.searchResults.found': 'Bulundu',
    'careers.page.searchResults.positions': 'pozisyon',
    'careers.page.searchResults.positionsPlural': 'pozisyon',
    'careers.page.searchResults.matchingCriteria': 'kriterlerinize uygun:',
    'careers.page.searchResults.viewDetails': 'Detayları Görüntüle',
    'careers.page.searchResults.noPositions': 'Pozisyon bulunamadı',
    'careers.page.searchResults.tryAdjusting': 'Arama kriterlerinizi ayarlamayı deneyin veya tüm mevcut pozisyonlara göz atın.',
    'careers.page.searchResults.viewAllPositions': 'Tüm Pozisyonları Görüntüle',
    
    // Learn the Basics Section
    'careers.page.basics.title': 'Temelleri Öğren',
    'careers.page.basics.upvistaIn3': '3 dakikada Upvista Digital',
    'careers.page.basics.ceoMessage': 'CEO\'dan Mesaj',
    'careers.page.basics.newGraduate': 'Yeni mezun işe alımı buradan başlıyor',
    'careers.page.basics.philosophy': 'Kurumsal felsefe',
    'careers.page.basics.recruitment': 'İşe alımda önemli olan',
    
    // Learn About Business Section
    'careers.page.business.title': 'İş Hakkında Bilgi Edin',
    'careers.page.business.strategy': 'Upvista Digital\'ın İş Stratejisi',
    'careers.page.business.products': 'Upvista Digital Ürünleri',
    'careers.page.business.globalStrategy': 'Upvista Digital\'ın Küresel Stratejisi',
    'careers.page.business.teamwork': 'Dijital Çözümler ve Ekip Çalışması',
    
    // Learn About Job Section
    'careers.page.jobs.title': 'İş Hakkında Bilgi Edin',
    'careers.page.jobs.development': 'Geliştirme ve Operasyon',
    'careers.page.jobs.marketing': 'Pazarlama',
    'careers.page.jobs.customerService': 'Müşteri Hizmetleri',
    'careers.page.jobs.sales': 'Satış',
    'careers.page.jobs.consulting': 'Sistem Danışmanlığı',
    'careers.page.jobs.corporate': 'Kurumsal',
    
    // Get to Know People Section
    'careers.page.people.title': 'İnsanları Tanıyın',
    'careers.page.people.engineer.title': 'Mühendis/Tasarımcı',
    'careers.page.people.engineer.description': 'Mühendislik ve tasarım ekiplerimiz yenilikçi dijital çözümlerin arkasındaki yaratıcı beyinlerdir. Mühendisler son teknoloji üzerinde çalışır, iş başarısını sağlayan ölçeklenebilir sistemler ve uygulamalar oluşturur. Tasarımcılar, kullanıcıların sevdiği sezgisel kullanıcı deneyimleri ve görsel olarak çarpıcı arayüzler yaratır.',
    'careers.page.people.corporate.title': 'Kurumsal Pozisyonlar',
    'careers.page.people.corporate.description': 'Kurumsal ekibimiz sorunsuz operasyonları ve stratejik büyümeyi sağlar. Yetenek kazanımını yöneten insan kaynaklarından, bütçeleri ve yatırımları denetleyen finansmana kadar, bu roller teknik ekiplerimizin inovasyon ve teslimat üzerine odaklanmasını sağlayan temeli sunar.',
    'careers.page.people.business.title': 'İş Pozisyonları',
    'careers.page.people.business.description': 'Upvista Digital\'daki iş rolleri büyüme, müşteri başarısı ve pazar genişlemesine odaklanır. Marka bilinirliğini artıran pazarlama uzmanlarından müşteri ilişkileri kuran satış temsilcilerine kadar, bu pozisyonlar şirketimizin sürekli başarısı ve genişlemesi için çok önemlidir.',
    
    // Get to Know Workspace Section
    'careers.page.workspace.title': 'Çalışma Alanını Tanıyın',
    'careers.page.workspace.office.title': 'Ofis ve Uzaktan Çalışma',
    'careers.page.workspace.office.description': 'Modern ofis alanları ve kapsamlı uzaktan çalışma desteği ile esnek çalışma düzenlemeleri sunuyoruz. Ofislerimiz işbirliği ve üretkenlik için tasarlanmıştır, uzaktan çalışma politikalarımız ise her yerden etkili bir şekilde çalışabilmenizi sağlar.',
    'careers.page.workspace.communication.title': 'İletişim ve Dahili Sistemler',
    'careers.page.workspace.communication.description': 'Sorunsuz işbirliği sağlamak için son teknoloji iletişim araçları ve dahili sistemler kullanıyoruz. Proje yönetim platformlarından anlık mesajlaşma sistemlerine kadar, ekipleri bağlı ve üretken tutan bir altyapı inşa ettik.',
    'careers.page.workspace.learning.title': 'Öğrenme ve Kariyer Geliştirme',
    'careers.page.workspace.learning.description': 'Kapsamlı işe alım sürecimiz ve sürekli öğrenme sistemlerimiz profesyonel olarak büyümenize yardımcı olur. Başarınızı ve ilerlemenizi sağlamak için kariyer desteği, beceri geliştirme programları ve düzenli performans değerlendirmeleri sağlıyoruz.',
    'careers.page.workspace.culture.title': 'Şirket Kültürü ve Faydalar',
    'careers.page.workspace.culture.description': 'Düzenli ekip etkinlikleri, rekabetçi maaş paketleri ve kapsamlı faydalar ile canlı bir şirket kültürü geliştiriyoruz. Değerlendirme sistemimiz, sürekli iyileştirme ve büyümeyi desteklerken mükemmelliği tanır ve ödüllendirir.',
    
    // What Upvista Digital Is Section
    'careers.page.about.title': 'Upvista Digital Nedir',
    'careers.page.about.innovation.title': 'İnovasyon Lideri',
    'careers.page.about.innovation.description': 'Upvista Digital, dijital dönüşümde öncü bir güçtür, sürekli olarak sınırları zorlar ve teknoloji ve işin geleceğini şekillendiren yenilikçi çözümler yaratır.',
    'careers.page.about.impact.title': 'Küresel Etki',
    'careers.page.about.impact.description': 'Yerel kültürlere ve değerlere saygı gösterirken küresel etki yaratan çözümler inşa ediyoruz. Çalışmamız önemli teknoloji aracılığıyla dünya çapında milyonlarca hayata dokunuyor.',
    'careers.page.about.team.title': 'Takım Mükemmelliği',
    'careers.page.about.team.description': 'Gücümüz insanlarımızda yatıyor - işbirliği, inovasyon ve paylaşılan vizyon aracılığıyla parçalarının toplamından daha büyük bir şey yaratmak için bir araya gelen yetenekli bireyler.',
    
    // CTA Section
    'careers.page.cta.title': 'Etkinizi Yaratmaya Hazır mısınız?',
    'careers.page.cta.description1': 'Dijital çözümlerin geleceğini inşa eden bir ekibe katılın.',
    'careers.page.cta.description2': 'Açık pozisyonlarımızı keşfedin ve bugün Upvista Digital ile yolculuğunuza başlayın.',
    'careers.page.cta.viewJobsButton': 'İş İlanlarını Görüntüle',
    'careers.page.cta.eventsButton': 'İşe Alım Etkinlikleri',
    
    // Basics Page
    'careers.basics.hero.title': 'Temelleri Öğren',
    'careers.basics.hero.subtitle': 'Upvista Digital\'ı kariyerinizi inşa etmek için benzersiz bir yer yapan şeyi keşfedin.',
    
    // Basics Sections
    'careers.basics.about.title': 'Upvista Digital Hakkında',
    'careers.basics.about.subtitle': '3 dakikada Upvista Digital',
    'careers.basics.about.description': 'Sembolik sayılar ve anahtar kelimeler kullanarak Upvista Digital\'ın felsefesini, işini, çalışmasını ve çalışma tarzını anlaşılır bir şekilde açıklayacağız.',
    
    'careers.basics.philosophy.title': 'Kurumsal Felsefe',
    'careers.basics.philosophy.subtitle': 'Zihniyetimiz ve Kültürümüz',
    'careers.basics.philosophy.description': 'Amacımız ve beş kültürden oluşan Upvista Digital\'ın kurumsal felsefesini tanıtmak istiyoruz.',
    
    'careers.basics.ceo.title': 'CEO\'dan Mesaj',
    'careers.basics.ceo.subtitle': 'Hamza Hafeez\'den sıcak sözler',
    'careers.basics.ceo.description': 'Şirketin gelecek stratejileri ve organizasyon inşası hakkındaki düşünceler hakkında CEO ile bir röportaj sunuyoruz.',
    
    'careers.basics.recruitment.title': 'İşe alımda önemli olan',
    'careers.basics.recruitment.subtitle': 'İşe alım için en iyi uygulamalar',
    'careers.basics.recruitment.description': 'İşe alımda değer verdiğimiz kültürel uyumu ve bu eşleşmeyi ölçmek için kullandığımız göstergeleri açıklayacağız.',
    
    'careers.basics.inclusive.title': 'Engelli kişileri işe alma',
    'careers.basics.inclusive.subtitle': 'Engelli kişileri işe alma',
    'careers.basics.inclusive.description': 'Upvista Digital\'ın engelli kişileri işe alma yaklaşımı, çalışma stilleri ve sistemleri hakkında bilgi paylaşacağız.',
    
    'careers.basics.graduates.title': 'Yeni mezun işe alımı',
    'careers.basics.graduates.subtitle': 'Yeni mezunlar için talimatlar',
    'careers.basics.graduates.description': 'Yeni mezunların kariyerlerine başlamaları için özel olarak tasarlanmış kapsamlı programlar, mentorluk ve fırsatlar sağlıyoruz.',
    
    // Basics CTA
    'careers.basics.cta.title': 'Upvista Digital sizi bekliyor',
    'careers.basics.cta.description1': 'Upvista Digital\'a üye olarak katılın ve geleceği şekillendiren projelere katılın.',
    'careers.basics.cta.description2': 'Vizyonumuzu ve inovasyon tutkumuzu paylaşan yetenekli bireyler arıyoruz.',
    'careers.basics.cta.applyButton': 'İş İlanları ve Başvurular',
    'careers.basics.cta.jobsButton': 'İşler Hakkında Bilgi Edin',
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
    
    // Careers Page - Hero Section
    'careers.page.hero.title1': 'ایک معاشرے کی تعمیر',
    'careers.page.hero.title2': 'ٹیم ورک سے بھرپور',
    'careers.page.hero.subtitle1': 'Upvista Digital',
    'careers.page.hero.subtitle2': 'مل کر کام کرنے کے لیے ممبران کا انتظار کر رہا ہے۔',
    'careers.page.hero.applyButton': 'ملازمت کی خالی جگہیں اور درخواستیں',
    'careers.page.hero.basicsButton': 'بنیادی باتیں سیکھیں',
    
    // Careers Page - Find Recruitment Section
    'careers.page.findRecruitment.title': 'بھرتی کی معلومات تلاش کریں',
    'careers.page.findRecruitment.recruitmentType': 'بھرتی کی قسم',
    'careers.page.findRecruitment.selectJob': 'ملازمت منتخب کریں',
    'careers.page.findRecruitment.selectPosition': 'ایک پوزیشن منتخب کریں',
    'careers.page.findRecruitment.findOpportunities': 'مواقع تلاش کریں',
    'careers.page.findRecruitment.searching': 'تلاش کر رہے ہیں...',
    'careers.page.findRecruitment.searchButton': 'بھرتی کی معلومات تلاش کریں',
    'careers.page.findRecruitment.cantFind': 'جو آپ تلاش کر رہے ہیں وہ نہیں مل رہا؟',
    'careers.page.findRecruitment.viewAll': 'تمام کھلی پوزیشنیں دیکھیں',
    
    // Recruitment Types
    'careers.page.recruitmentTypes.career': 'کیریئر بھرتی',
    'careers.page.recruitmentTypes.potential': 'ممکنہ بھرتی',
    'careers.page.recruitmentTypes.newGraduate': 'نئے گریجویٹ کی بھرتی',
    
    // Job Status Labels
    'careers.page.jobStatus.active': 'فعال',
    'careers.page.jobStatus.intern': 'انٹرن',
    'careers.page.jobStatus.future': 'مستقبل',
    'careers.page.jobStatus.fullTime': 'فل ٹائم',
    'careers.page.jobStatus.potential': 'ممکنہ',
    
    // Search Results
    'careers.page.searchResults.title': 'تلاش کے نتائج',
    'careers.page.searchResults.found': 'ملا',
    'careers.page.searchResults.positions': 'پوزیشن',
    'careers.page.searchResults.positionsPlural': 'پوزیشنیں',
    'careers.page.searchResults.matchingCriteria': 'آپ کے معیار سے مماثل:',
    'careers.page.searchResults.viewDetails': 'تفصیلات دیکھیں',
    'careers.page.searchResults.noPositions': 'کوئی پوزیشن نہیں ملی',
    'careers.page.searchResults.tryAdjusting': 'اپنے تلاش کے معیار کو ایڈجسٹ کرنے کی کوشش کریں یا تمام دستیاب پوزیشنوں کو براؤز کریں۔',
    'careers.page.searchResults.viewAllPositions': 'تمام پوزیشنیں دیکھیں',
    
    // Learn the Basics Section
    'careers.page.basics.title': 'بنیادی باتیں سیکھیں',
    'careers.page.basics.upvistaIn3': '3 منٹ میں Upvista Digital',
    'careers.page.basics.ceoMessage': 'CEO کا پیغام',
    'careers.page.basics.newGraduate': 'نئے گریجویٹ کی بھرتی یہاں سے شروع ہوتی ہے',
    'careers.page.basics.philosophy': 'کارپوریٹ فلسفہ',
    'careers.page.basics.recruitment': 'بھرتی میں کیا اہم ہے',
    
    // Learn About Business Section
    'careers.page.business.title': 'کاروبار کے بارے میں جانیں',
    'careers.page.business.strategy': 'Upvista Digital کی کاروباری حکمت عملی',
    'careers.page.business.products': 'Upvista Digital کی مصنوعات',
    'careers.page.business.globalStrategy': 'Upvista Digital کی عالمی حکمت عملی',
    'careers.page.business.teamwork': 'ڈیجیٹل حل اور ٹیم ورک',
    
    // Learn About Job Section
    'careers.page.jobs.title': 'ملازمت کے بارے میں جانیں',
    'careers.page.jobs.development': 'ترقی اور آپریشن',
    'careers.page.jobs.marketing': 'مارکیٹنگ',
    'careers.page.jobs.customerService': 'کسٹمر سروس',
    'careers.page.jobs.sales': 'فروخت',
    'careers.page.jobs.consulting': 'سسٹم کنسلٹنگ',
    'careers.page.jobs.corporate': 'کارپوریٹ',
    
    // Get to Know People Section
    'careers.page.people.title': 'لوگوں کو جانیں',
    'careers.page.people.engineer.title': 'انجینئر/ڈیزائنر',
    'careers.page.people.engineer.description': 'ہماری انجینئرنگ اور ڈیزائن ٹیمیں جدید ڈیجیٹل حل کے پیچھے تخلیقی ذہن ہیں۔ انجینئرز جدید ترین ٹیکنالوجیز پر کام کرتے ہیں، قابل توسیع سسٹم اور ایپلیکیشنز بناتے ہیں جو کاروباری کامیابی کو آگے بڑھاتے ہیں۔ ڈیزائنرز بدیہی صارف تجربات اور بصری طور پر شاندار انٹرفیس تیار کرتے ہیں جنہیں صارفین پسند کرتے ہیں۔',
    'careers.page.people.corporate.title': 'کارپوریٹ پوزیشنز',
    'careers.page.people.corporate.description': 'ہماری کارپوریٹ ٹیم ہموار آپریشنز اور اسٹریٹیجک ترقی کو یقینی بناتی ہے۔ ٹیلنٹ حاصل کرنے کا انتظام کرنے والے انسانی وسائل سے لے کر بجٹ اور سرمایہ کاری کی نگرانی کرنے والے فنانس تک، یہ کردار ایسی بنیاد فراہم کرتے ہیں جو ہماری تکنیکی ٹیموں کو جدت اور فراہمی پر توجہ مرکوز کرنے کے قابل بناتی ہے۔',
    'careers.page.people.business.title': 'کاروباری ملازمتیں',
    'careers.page.people.business.description': 'Upvista Digital میں کاروباری کردار ترقی، کسٹمر کی کامیابی، اور مارکیٹ کی توسیع پر مرکوز ہیں۔ برانڈ بیداری کو آگے بڑھانے والے مارکیٹنگ ماہرین سے لے کر کلائنٹ تعلقات بنانے والے سیلز نمائندوں تک، یہ پوزیشنیں ہماری کمپنی کی مسلسل کامیابی اور توسیع کے لیے اہم ہیں۔',
    
    // Get to Know Workspace Section
    'careers.page.workspace.title': 'ورک سپیس کو جانیں',
    'careers.page.workspace.office.title': 'دفتر اور ریموٹ ورک',
    'careers.page.workspace.office.description': 'ہم جدید دفتری جگہوں اور جامع ریموٹ ورک سپورٹ کے ساتھ لچکدار کام کے انتظامات پیش کرتے ہیں۔ ہمارے دفاتر تعاون اور پیداواری صلاحیت کے لیے ڈیزائن کیے گئے ہیں، جبکہ ہماری ریموٹ ورک پالیسیاں یقینی بناتی ہیں کہ آپ کہیں سے بھی مؤثر طریقے سے کام کر سکتے ہیں۔',
    'careers.page.workspace.communication.title': 'مواصلات اور اندرونی نظام',
    'careers.page.workspace.communication.description': 'ہم ہموار تعاون کو یقینی بنانے کے لیے جدید ترین مواصلاتی ٹولز اور اندرونی نظام استعمال کرتے ہیں۔ پروجیکٹ مینجمنٹ پلیٹ فارمز سے لے کر فوری پیغام رسانی کے نظام تک، ہم نے ایک انفراسٹرکچر بنایا ہے جو ٹیموں کو جڑے اور پیداواری رکھتا ہے۔',
    'careers.page.workspace.learning.title': 'سیکھنا اور کیریئر کی ترقی',
    'careers.page.workspace.learning.description': 'ہمارا جامع آن بورڈنگ عمل اور مسلسل سیکھنے کے نظام آپ کو پیشہ ورانہ طور پر بڑھنے میں مدد کرتے ہیں۔ ہم آپ کی کامیابی اور ترقی کو یقینی بنانے کے لیے کیریئر سپورٹ، ہنر کی ترقی کے پروگرام، اور باقاعدہ کارکردگی کی تشخیص فراہم کرتے ہیں۔',
    'careers.page.workspace.culture.title': 'کمپنی کلچر اور فوائد',
    'careers.page.workspace.culture.description': 'ہم باقاعدہ ٹیم ایونٹس، مسابقتی تنخواہ کے پیکجز، اور جامع فوائد کے ساتھ ایک متحرک کمپنی کلچر کو فروغ دیتے ہیں۔ ہمارا تشخیصی نظام مسلسل بہتری اور ترقی کی حمایت کرتے ہوئے بہترین کارکردگی کو تسلیم اور انعام دیتا ہے۔',
    
    // What Upvista Digital Is Section
    'careers.page.about.title': 'Upvista Digital کیا ہے',
    'careers.page.about.innovation.title': 'جدت کا رہنما',
    'careers.page.about.innovation.description': 'Upvista Digital ڈیجیٹل تبدیلی میں ایک پیش رو قوت ہے، مسلسل حدود کو آگے بڑھاتے ہوئے اور جدید حل تخلیق کرتے ہوئے جو ٹیکنالوجی اور کاروبار کے مستقبل کو تشکیل دیتے ہیں۔',
    'careers.page.about.impact.title': 'عالمی اثر',
    'careers.page.about.impact.description': 'ہم مقامی ثقافتوں اور اقدار کا احترام کرتے ہوئے عالمی اثر ڈالنے والے حل بنا رہے ہیں۔ ہمارا کام اہم ٹیکنالوجی کے ذریعے دنیا بھر میں لاکھوں زندگیوں کو چھوتا ہے۔',
    'careers.page.about.team.title': 'ٹیم کی بہترین کارکردگی',
    'careers.page.about.team.description': 'ہماری طاقت ہمارے لوگوں میں ہے - باصلاحیت افراد جو تعاون، جدت، اور مشترکہ وژن کے ذریعے اپنے حصوں کے مجموعے سے زیادہ بڑی چیز بنانے کے لیے اکٹھے ہوتے ہیں۔',
    
    // CTA Section
    'careers.page.cta.title': 'اپنا اثر ڈالنے کے لیے تیار ہیں؟',
    'careers.page.cta.description1': 'ایک ایسی ٹیم میں شامل ہوں جو ڈیجیٹل حل کے مستقبل کی تعمیر کر رہی ہے۔',
    'careers.page.cta.description2': 'ہماری کھلی پوزیشنوں کو دریافت کریں اور آج Upvista Digital کے ساتھ اپنا سفر شروع کریں۔',
    'careers.page.cta.viewJobsButton': 'ملازمت کی خالی جگہیں دیکھیں',
    'careers.page.cta.eventsButton': 'بھرتی کے واقعات',
    
    // Basics Page
    'careers.basics.hero.title': 'بنیادی باتیں سیکھیں',
    'careers.basics.hero.subtitle': 'دریافت کریں کہ Upvista Digital کو آپ کے کیریئر کی تعمیر کے لیے ایک منفرد جگہ کیا بناتا ہے۔',
    
    // Basics Sections
    'careers.basics.about.title': 'Upvista Digital کے بارے میں',
    'careers.basics.about.subtitle': '3 منٹ میں Upvista Digital',
    'careers.basics.about.description': 'ہم علامتی اعداد اور کلیدی الفاظ استعمال کرتے ہوئے Upvista Digital کے فلسفے، کاروبار، کام، اور کام کرنے کے انداز کو سمجھنے میں آسان طریقے سے بیان کریں گے۔',
    
    'careers.basics.philosophy.title': 'کارپوریٹ فلسفہ',
    'careers.basics.philosophy.subtitle': 'ہماری سوچ اور ثقافت',
    'careers.basics.philosophy.description': 'ہم Upvista Digital کے کارپوریٹ فلسفے کو متعارف کرانا چاہیں گے، جو ہمارے مقصد اور پانچ ثقافتوں پر مشتمل ہے۔',
    
    'careers.basics.ceo.title': 'CEO کا پیغام',
    'careers.basics.ceo.subtitle': 'حمزہ حفیظ کے گرم جوش الفاظ',
    'careers.basics.ceo.description': 'ہم کمپنی کی مستقبل کی حکمت عملیوں اور تنظیم کی تعمیر کے بارے میں خیالات کے بارے میں CEO کے ساتھ ایک انٹرویو پیش کرتے ہیں۔',
    
    'careers.basics.recruitment.title': 'بھرتی میں کیا اہم ہے',
    'careers.basics.recruitment.subtitle': 'بھرتی کے لیے بہترین طریقے',
    'careers.basics.recruitment.description': 'ہم ثقافتی مطابقت کی وضاحت کریں گے جسے ہم بھرتی میں اہمیت دیتے ہیں اور وہ اشارے جو ہم اس مماثلت کو ماپنے کے لیے استعمال کرتے ہیں۔',
    
    'careers.basics.inclusive.title': 'معذور افراد کی بھرتی',
    'careers.basics.inclusive.subtitle': 'معذور افراد کی بھرتی',
    'careers.basics.inclusive.description': 'ہم معذور افراد کی بھرتی، کام کرنے کے انداز، اور نظام کے بارے میں Upvista Digital کے نقطہ نظر کے بارے میں معلومات شیئر کریں گے۔',
    
    'careers.basics.graduates.title': 'نئے گریجویٹ کی بھرتی',
    'careers.basics.graduates.subtitle': 'نئے گریجویٹس کے لیے ہدایات',
    'careers.basics.graduates.description': 'ہم نئے گریجویٹس کے لیے خاص طور پر ڈیزائن کیے گئے جامع پروگرام، رہنمائی، اور مواقع فراہم کرتے ہیں تاکہ وہ اپنے کیریئر کا آغاز کر سکیں۔',
    
    // Basics CTA
    'careers.basics.cta.title': 'Upvista Digital آپ کا انتظار کر رہا ہے',
    'careers.basics.cta.description1': 'Upvista Digital کے ممبر کے طور پر شامل ہوں اور ایسے منصوبوں میں حصہ لیں جو مستقبل کی تشکیل کرتے ہیں۔',
    'careers.basics.cta.description2': 'ہم ایسے باصلاحیت افراد کی تلاش میں ہیں جو ہمارے وژن اور جدت کے جذبے کو شیئر کرتے ہیں۔',
    'careers.basics.cta.applyButton': 'ملازمت کی خالی جگہیں اور درخواستیں',
    'careers.basics.cta.jobsButton': 'ملازمتوں کے بارے میں جانیں',
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

