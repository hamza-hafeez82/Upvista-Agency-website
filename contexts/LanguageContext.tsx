"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translation function - in a real app, you'd use a proper i18n library
const translations: Record<string, Record<string, string>> = {
  EN: {
    'nav.home': 'Home',
    'nav.company': 'Company',
    'nav.services': 'Services',
    'nav.community': 'Community',
    'nav.researches': 'Researches',
    'nav.insights': 'Insights',
    'nav.careers': 'Explore Careers',
    'nav.contact': "Let's Talk Business",
    'hero.title': 'Digital Solutions That Drive Growth',
    'hero.subtitle': 'Transform your business with cutting-edge technology and innovative solutions.',
    'hero.cta': 'Get Started',
    'hero.register': 'Register',
    'hero.badge': 'Upvista Digital - Pakistan\'s Premier Software Agency',
    'hero.service1': 'Web Development',
    'hero.service2': 'Software Engineering',
    'hero.service3': 'Graphics & Design',
    'hero.service4': 'AI Automation',
    'hero.stats1': 'Projects Delivered',
    'hero.stats2': 'Client Rating',
    'hero.stats3': 'Support',
    // Company dropdown
    'dropdown.company.about': 'About Us',
    'dropdown.company.profile': 'Company Profile',
    'dropdown.company.sustainability': 'Sustainability & Values',
    'dropdown.company.investors': 'Investor Relationship',
    'dropdown.company.partners': 'Partnerships',
    'dropdown.company.leadership': 'Leadership',
    'dropdown.company.contact': 'Contact Us',
    // Company Profile Page
    'companyProfile.badge': 'Corporate Information',
    'companyProfile.title': 'Company Profile',
    'companyProfile.subtitle': 'Comprehensive overview of Upvista Digital\'s corporate foundation, leadership structure, and business operations.',
    'companyProfile.tradeName': 'Trade Name',
    'companyProfile.businessDescription': 'Business Description',
    'companyProfile.ceo': 'Chief Executive Officer',
    'companyProfile.founded': 'Date of Establishment',
    'companyProfile.fiscalYearEnd': 'Fiscal Year End',
    'companyProfile.headOffice': 'Head Office',
    'companyProfile.legalStatus': 'Legal Status',
    'companyProfile.serviceAreas': 'Service Areas',
    'companyProfile.industryFocus': 'Industry Focus',
    'companyProfile.revenueModel': 'Revenue Model',
    'companyProfile.clientPortfolio': 'Client Portfolio',
    'companyProfile.qualityStandards': 'Quality Standards',
    'companyProfile.businessDesc1': 'Development, sales and operation of digital solutions.',
    'companyProfile.businessDesc2': 'Development, sales and delivery of web development and software engineering services.',
    'companyProfile.ceoName': 'Hamza Hafeez',
    'companyProfile.foundedDate': 'July 1, 2025',
    'companyProfile.fiscalEnd': 'June 30th',
    'companyProfile.headOfficeLocation': 'Lahore, Pakistan',
    'companyProfile.legalStatusType': 'Sole Proprietorship',
    'companyProfile.serviceAreasGlobal': 'Global',
    'companyProfile.industryTypes': 'Technology Services, Digital Solutions, Software Development',
    'companyProfile.revenueType': 'Service-based',
    'companyProfile.clientCount': '50+ successful projects across diverse industries',
    'companyProfile.qualityRating': '4.9/5 client satisfaction rating',
    // Services dropdown
    'dropdown.services.about': 'About our Services',
    'dropdown.services.software': 'Software Development',
    'dropdown.services.web': 'Web Development',
    'dropdown.services.ai': 'AI and Automation',
    'dropdown.services.cloud': 'Cloud',
    'dropdown.services.design': 'Graphics and Design',
    'dropdown.services.marketing': 'Digital Marketing',
    // Community dropdown
    'dropdown.community.about': 'About Community',
    'dropdown.community.events': 'Events',
    'dropdown.community.members': 'Community Members',
    'dropdown.community.achievements': 'Achievements',
    'dropdown.community.trainings': 'Trainings',
    'dropdown.community.join': 'Join the community',
    // Researches dropdown
    'dropdown.researches.about': 'About Upvista Researches',
    'dropdown.researches.cortex': 'Project Cortex',
    'dropdown.researches.agi': 'Research on AGI',
    // Insights dropdown
    'dropdown.insights.caseStudies': 'Case Studies',
    'dropdown.insights.news': 'News',
    'dropdown.insights.blogs': 'Blogs',
    'dropdown.insights.whitepapers': 'WhitePapers',
    'dropdown.insights.events': 'Events',
    // Homepage sections
    'home.transform.title': 'Transforming Digital Presence',
    'home.transform.subtitle': 'Designing Experiences That Inspire Action',
    'home.transform.description': 'From idea to execution, We dont just build websites - we build journeys that connect with people, build trust, and convert visitors into loyal customers.',
    'home.transform.exploreServices': 'Explore Our Services',
    'home.transform.contactUs': 'Contact Us',
    'home.partnership.title': 'Partnering for Your Digital Growth',
    'home.partnership.description': 'We don\'t just deliver projects - we build long-term partnerships that empower your business to thrive in a digital-first world. Our approach is collaborative, transparent, and focused on your success.',
    'home.partnership.explore': 'Explore Partnerships',
    'home.partnership.premium': 'Premium Collaboration',
    'home.partnership.subtitle': 'Let\'s co-create digital solutions that set new standards for excellence.',
    'home.expertise.title': 'Expertise That Drives Results',
    'home.expertise.subtitle': 'Real Expertise Across Digital Niches',
    'home.expertise.description': 'We deliver tailored solutions for a variety of industries and business models. Our team brings deep, hands-on experience in each niche - no fluff, just proven results.',
    'home.expertise.ecommerce.title': 'E-commerce',
    'home.expertise.ecommerce.description': 'Custom online stores, payment integration, product management, and conversion optimization for B2C & B2B brands.',
    'home.expertise.saas.title': 'SaaS Platforms',
    'home.expertise.saas.description': 'Robust, scalable SaaS solutions with user management, billing, analytics, and cloud integration.',
    'home.expertise.healthcare.title': 'Healthcare',
    'home.expertise.healthcare.description': 'HIPAA-compliant apps, patient portals, telemedicine, and secure health data management.',
    'home.expertise.edtech.title': 'EdTech',
    'home.expertise.edtech.description': 'Learning management systems, e-learning platforms, and interactive educational tools.',
    'home.expertise.fintech.title': 'FinTech',
    'home.expertise.fintech.description': 'Secure payment gateways, digital wallets, and financial analytics platforms.',
    'home.expertise.portfolio.title': 'Portfolio & Creative',
    'home.expertise.portfolio.description': 'Personal portfolios, creative agency sites, and digital showcases for artists and professionals.',
    'home.expertise.explore': 'Explore Our Solutions',
    'home.services.title': 'Our Core Services',
    'home.services.subtitle': 'Digital Solutions That Drive Results',
    'home.services.description': 'From concept to deployment, we deliver comprehensive digital solutions that transform your business and accelerate growth in the digital landscape.',
    'home.services.software.title': 'Software Development',
    'home.services.software.description': 'Custom software solutions built with cutting-edge technologies. From web applications to desktop software, we deliver scalable and maintainable code.',
    'home.services.software.learnMore': 'Learn more',
    'home.services.web.title': 'Web Development',
    'home.services.web.description': 'Modern, responsive websites and web applications that deliver exceptional user experiences and drive business growth.',
    'home.services.web.learnMore': 'Learn more',
    'home.services.cloud.title': 'Cloud Solutions',
    'home.services.cloud.description': 'Comprehensive cloud infrastructure, migration, and management services to optimize your business operations and scalability.',
    'home.services.cloud.learnMore': 'Learn more',
    'home.services.ai.title': 'AI & Automation',
    'home.services.ai.description': 'Intelligent automation solutions and AI-powered applications that streamline processes and enhance decision-making capabilities.',
    'home.services.ai.learnMore': 'Learn more',
    'home.services.design.title': 'Graphics & Design',
    'home.services.design.description': 'Professional graphic design, branding, and visual identity services that make your brand stand out in the digital landscape.',
    'home.services.design.learnMore': 'Learn more',
    'home.services.marketing.title': 'Digital Marketing',
    'home.services.marketing.description': 'Strategic digital marketing campaigns, SEO optimization, social media management, and performance analytics to maximize your online reach and ROI.',
    'home.services.marketing.learnMore': 'Learn more',
    'home.services.exploreAll': 'Explore All Services',
    'home.webDesign.title': 'Web Design Experts',
    'home.webDesign.subtitle': 'Establish Your Digital Presence with Confidence',
    'home.webDesign.description': 'Upvista creates powerful digital experiences that don\'t just look great, they deliver measurable growth and lasting impact.',
    'home.webDesign.getStarted': 'Get Started Now',
    'home.webDesign.viewWork': 'View Our Work',
    'home.testimonials.title': 'Testimonials',
    'home.testimonials.subtitle': 'What our users say',
    'home.testimonials.description': 'See what our customers have to say about us.',
    'home.testimonials.testimonial1': 'Their team crafted a beautiful and functional website for us. It boosted our visibility and client trust dramatically.',
    'home.testimonials.testimonial2': 'We needed a landing page that converts - and they delivered. Clean design, fast loading, and optimized perfectly.',
    'home.testimonials.testimonial3': 'The UI/UX design exceeded our expectations. Intuitive layouts and consistent branding helped elevate our digital product.',
    'home.testimonials.testimonial4': 'From branding to website development, everything was handled with creativity and professionalism.',
    'home.testimonials.testimonial5': 'Their landing page design helped us increase conversions by 35% - visually stunning and mobile-friendly.',
    'home.testimonials.testimonial6': 'Great collaboration and clear process. They understood our needs and built a custom solution that reflects our brand.',
    'home.testimonials.testimonial7': 'Professional team and timely delivery. Our branding is now modern, bold, and consistent across platforms.',
    'home.testimonials.testimonial8': 'They helped us rebrand and redesign our website - the result was a sleek and modern experience that stands out.',
    'home.testimonials.testimonial9': 'UI/UX revamp brought clarity to our service offering. Our users now stay longer and explore more.',
    'home.whyChoose.title': 'Why Choose Us',
    'home.whyChoose.description': 'We build affordable, custom, and scalable digital solutions for modern businesses - fast.',
    'home.whyChoose.transparentPricing': 'Transparent pricing',
    'home.whyChoose.fixedDeadlines': 'Fixed deadlines',
    'home.whyChoose.cleanDesign': 'Clean design',
    'home.whyChoose.freeConsultation': 'Free consultation',
    'home.whyChoose.longTermSupport': 'Long-term support',
    'home.whyChoose.flexibleTech': 'Flexible tech stack',
    'home.palestine.title': 'Upvista stands with Palestine and its people',
    'home.join.title': 'Join Us',
    // Footer translations
    'footer.description': 'Empowering businesses with cutting-edge digital solutions. We deliver innovative software development, comprehensive web services, and transformative technology partnerships that drive growth and success.',
    'footer.paymentMethods': 'Payment Methods',
    'footer.payoneer': 'Payoneer',
    'footer.bankTransfer': 'Bank Transfer',
    'footer.jazzCash': 'JazzCash',
    'footer.easyPaisa': 'EasyPaisa',
    'footer.company': 'Company',
    'footer.aboutUs': 'About Us',
    'footer.companyProfile': 'Company Profile',
    'footer.sustainability': 'Sustainability & Values',
    'footer.investorRelations': 'Investor Relations',
    'footer.partnerships': 'Partnerships',
    'footer.leadership': 'Leadership',
    'footer.contactUs': 'Contact Us',
    'footer.careers': 'Careers',
    'footer.services': 'Services',
    'footer.allServices': 'All Services',
    'footer.softwareDevelopment': 'Software Development',
    'footer.webDevelopment': 'Web Development',
    'footer.aiAutomation': 'AI & Automation',
    'footer.cloudSolutions': 'Cloud Solutions',
    'footer.graphicsDesign': 'Graphics & Design',
    'footer.digitalMarketing': 'Digital Marketing',
    'footer.consultService': 'Consult for any service',
    'footer.communityResources': 'Community & Resources',
    'footer.aboutCommunity': 'About Community',
    'footer.events': 'Events',
    'footer.communityMembers': 'Community Members',
    'footer.trainings': 'Trainings',
    'footer.research': 'Research',
    'footer.projectCortex': 'Project Cortex',
    'footer.blog': 'Blog',
    'footer.faq': 'FAQ',
    'footer.whatsappUs': 'WhatsApp Us',
    'footer.linkedinUs': 'LinkedIn Us',
    'footer.messengerUs': 'Messenger Us',
    'footer.copyright': '© 2025 Upvista Digital. All rights reserved.',
    'footer.termsConditions': 'Terms & Conditions',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.trademarkCopyright': 'Trademark & Copyright',
    'footer.dataProtection': 'Data Protection',
    'carousel.technologies': 'Technologies We Use',
    // Sustainability Page
    'sustainability.badge': 'Sustainable Future',
    'sustainability.title': 'Sustainability & Values',
    'sustainability.subtitle': 'Our comprehensive approach to environmental responsibility, social impact, and ethical business practices that shape our corporate culture and guide our operations.',
    'sustainability.learnMore': 'Learn More',
    'sustainability.policy.title': 'Sustainability Policy',
    'sustainability.policy.description': 'Our comprehensive framework for environmental stewardship, social responsibility, and sustainable business practices.',
    'sustainability.values.title': 'Corporate Values',
    'sustainability.values.description': 'The core principles and values that drive our decision-making and shape our organizational culture.',
    'sustainability.humanRights.title': 'Human Rights Policy',
    'sustainability.humanRights.description': 'Our commitment to protecting and promoting human rights across all our operations and partnerships.',
    'sustainability.humanCapital.title': 'Human Capital Initiatives',
    'sustainability.humanCapital.description': 'Programs and initiatives focused on employee development, well-being, and creating an inclusive workplace.',
    'sustainability.environmental.title': 'Environmental Philosophy',
    'sustainability.environmental.description': 'Our approach to minimizing environmental impact and promoting sustainable practices in technology.',
    'sustainability.social.title': 'Social Philosophy',
    'sustainability.social.description': 'Our commitment to social responsibility and positive community impact through technology solutions.',
    'sustainability.governance.title': 'Corporate Governance',
    'sustainability.governance.description': 'Our governance framework ensuring transparency, accountability, and ethical business practices.',
    'sustainability.research.title': 'Research & Development',
    'sustainability.research.description': 'Innovation initiatives focused on sustainable technology solutions and responsible innovation practices.',
    // Sustainability Policy Page
    'policy.badge': 'Sustainability Framework',
    'policy.title': 'Sustainability Policy',
    'policy.subtitle': 'Our comprehensive framework for environmental stewardship, social responsibility, and sustainable business practices that guide every aspect of our operations.',
    'policy.environmental.title': 'Environmental Commitment',
    'policy.environmental.content1': 'At Upvista Digital, we recognize our responsibility to minimize environmental impact through sustainable practices. Our environmental policy encompasses energy efficiency, waste reduction, and carbon footprint minimization across all business operations.',
    'policy.environmental.content2': 'We prioritize cloud-based solutions and energy-efficient technologies to reduce our digital carbon footprint. Our development practices emphasize clean code, optimized performance, and sustainable architecture patterns that minimize resource consumption.',
    'policy.social.title': 'Social Responsibility Framework',
    'policy.social.content1': 'Our social responsibility policy focuses on creating positive impact through technology. We believe in digital inclusion, supporting communities through technology-driven solutions, and ensuring our services benefit society as a whole.',
    'policy.social.content2': 'We actively engage in mentorship programs, educational initiatives, and community development projects. Our commitment extends to supporting local technology ecosystems and fostering innovation that addresses real-world challenges.',
    'policy.business.title': 'Sustainable Business Practices',
    'policy.business.content1': 'Our business practices are designed with sustainability at their core. We implement transparent reporting, ethical sourcing, and responsible project management that considers long-term environmental and social impacts.',
    'policy.business.content2': 'We maintain high standards of corporate governance, ensuring accountability in all our operations. Our client relationships are built on trust, transparency, and shared commitment to sustainable development goals.',
    'policy.implementation.title': 'Implementation and Monitoring',
    'policy.implementation.content1': 'This sustainability policy is actively implemented across all departments and projects. We regularly monitor our progress, measure our impact, and continuously improve our practices to ensure we meet and exceed our sustainability commitments.',
    'policy.implementation.content2': 'Our team receives regular training on sustainability practices, and we encourage innovation in sustainable technology solutions. We are committed to being a leader in responsible technology development and deployment.',
    // Corporate Values Page
    'values.badge': 'Core Principles',
    'values.title': 'Corporate Values',
    'values.subtitle': 'The core principles and values that drive our decision-making, shape our organizational culture, and define how we conduct business in the digital landscape.',
    'values.innovation.title': 'Innovation and Excellence',
    'values.innovation.content1': 'We are committed to pushing the boundaries of what\'s possible in technology. Innovation is not just a buzzword for us; it\'s the foundation of everything we do. We continuously seek new ways to solve complex problems and deliver exceptional results for our clients.',
    'values.innovation.content2': 'Excellence in execution is our standard. We believe that every project, no matter how small, deserves our best effort. This commitment to quality drives us to continuously improve our processes, technologies, and service delivery.',
    'values.integrity.title': 'Integrity and Transparency',
    'values.integrity.content1': 'Integrity forms the bedrock of all our relationships. We conduct business with honesty, fairness, and respect for all stakeholders. Our transparency in communication ensures that clients, partners, and team members always know where they stand.',
    'values.integrity.content2': 'We believe that trust is earned through consistent actions and honest communication. Our commitment to transparency extends to our project management, pricing, timelines, and any challenges we encounter along the way.',
    'values.collaboration.title': 'Collaboration and Partnership',
    'values.collaboration.content1': 'We view every client relationship as a true partnership. Collaboration is key to our success, and we work closely with clients to understand their unique challenges and goals. Our team-based approach ensures diverse perspectives and comprehensive solutions.',
    'values.collaboration.content2': 'Internally, we foster a culture of collaboration where every team member\'s input is valued. We believe that the best solutions emerge when diverse talents and perspectives come together to tackle complex challenges.',
    'values.learning.title': 'Continuous Learning and Growth',
    'values.learning.content1': 'In the rapidly evolving world of technology, continuous learning is essential. We invest heavily in our team\'s professional development, providing opportunities for training, certification, and skill enhancement.',
    'values.learning.content2': 'We encourage experimentation and learning from failures. Our culture promotes knowledge sharing, mentorship, and the pursuit of new technologies and methodologies that can benefit our clients and advance our capabilities.',
    'values.client.title': 'Client Success and Value Creation',
    'values.client.content1': 'Our success is measured by our clients\' success. We are committed to delivering solutions that not only meet requirements but exceed expectations and drive real business value. Every project is approached with the goal of creating lasting positive impact.',
    'values.client.content2': 'We take a long-term view of client relationships, focusing on sustainable solutions that will serve our clients well into the future. Our value proposition goes beyond technical expertise to include strategic thinking, business acumen, and ongoing support.',
    // Human Rights Policy Page
    'humanRights.badge': 'Human Rights Commitment',
    'humanRights.title': 'Human Rights Policy',
    'humanRights.subtitle': 'Our unwavering commitment to protecting and promoting human rights across all our operations, partnerships, and technology solutions that serve communities worldwide.',
    'humanRights.universal.title': 'Universal Human Rights Principles',
    'humanRights.universal.content1': 'Upvista Digital is committed to upholding the Universal Declaration of Human Rights and all relevant international human rights standards. We recognize that technology has the power to both protect and potentially infringe upon human rights, and we are dedicated to ensuring our solutions advance human dignity and freedom.',
    'humanRights.universal.content2': 'Our human rights policy applies to all aspects of our business operations, including employee relations, client partnerships, supply chain management, and the development and deployment of technology solutions that impact individuals and communities.',
    'humanRights.workplace.title': 'Workplace Human Rights',
    'humanRights.workplace.content1': 'We maintain a workplace environment that respects and protects the fundamental rights of all employees. This includes the right to fair treatment, freedom from discrimination, safe working conditions, and the right to voice concerns without fear of retaliation.',
    'humanRights.workplace.content2': 'Our commitment extends to ensuring equal opportunities for career advancement, fair compensation practices, and creating an inclusive environment where diversity is celebrated and all individuals can thrive regardless of their background, identity, or beliefs.',
    'humanRights.privacy.title': 'Privacy and Digital Rights',
    'humanRights.privacy.content1': 'In our digital age, privacy is a fundamental human right. We are committed to protecting the privacy rights of all individuals whose data we handle, whether they are our employees, clients, or end users of the solutions we develop.',
    'humanRights.privacy.content2': 'Our technology solutions are designed with privacy-by-design principles, ensuring that data protection is built into every system from the ground up. We implement robust security measures and transparent data handling practices that respect individual autonomy and consent.',
    'humanRights.community.title': 'Community Impact and Accessibility',
    'humanRights.community.content1': 'We believe that technology should be accessible to all and should not create or perpetuate inequalities. Our solutions are designed with accessibility in mind, ensuring that individuals with disabilities can fully participate in the digital world.',
    'humanRights.community.content2': 'We actively work to bridge the digital divide by supporting initiatives that provide technology access to underserved communities. Our commitment to human rights includes ensuring that our technology solutions promote social inclusion rather than exclusion.',
    'humanRights.ethical.title': 'Ethical Technology Development',
    'humanRights.ethical.content1': 'We are committed to developing technology that respects human rights and promotes human flourishing. This includes avoiding the development of technologies that could be used to violate human rights, such as surveillance systems that infringe on privacy or AI systems that perpetuate bias and discrimination.',
    'humanRights.ethical.content2': 'Our ethical framework guides all technology development decisions, ensuring that we consider the potential human rights implications of our solutions. We conduct regular human rights impact assessments and maintain ongoing dialogue with stakeholders to ensure our technology serves humanity\'s best interests.',
    'humanRights.implementation.title': 'Implementation and Accountability',
    'humanRights.implementation.content1': 'This human rights policy is not just a document; it\'s a living commitment that guides our daily operations. We provide regular training to all employees on human rights principles and maintain robust mechanisms for reporting and addressing any concerns.',
    'humanRights.implementation.content2': 'We hold ourselves accountable to these principles through regular audits, stakeholder engagement, and transparent reporting on our human rights performance. Our commitment to human rights is fundamental to our identity as a responsible technology company.',
    // Environmental Philosophy Page
    'environmental.badge': 'Green Technology Leadership',
    'environmental.title': 'Environmental Philosophy',
    'environmental.subtitle': 'Our comprehensive approach to minimizing environmental impact and promoting sustainable practices in technology development, operations, and client solutions.',
    'environmental.development.title': 'Sustainable Technology Development',
    'environmental.development.content1': 'We believe that technology should be a force for environmental good, not a source of environmental harm. Our development practices prioritize energy efficiency, resource optimization, and minimal environmental impact. Every solution we create is designed with sustainability principles at its core.',
    'environmental.development.content2': 'Our sustainable development approach includes green coding practices, optimized algorithms that reduce computational requirements, and cloud infrastructure choices that minimize carbon footprint. We continuously research and implement new technologies that can help reduce environmental impact.',
    'environmental.carbon.title': 'Carbon Footprint Reduction',
    'environmental.carbon.content1': 'We are committed to reducing our carbon footprint across all operations. This includes using renewable energy sources for our offices, implementing energy-efficient hardware and software, and choosing cloud providers that prioritize sustainability and renewable energy.',
    'environmental.carbon.content2': 'Our carbon reduction initiatives include remote work policies that reduce commuting emissions, digital-first practices that minimize paper usage, and energy-efficient office designs. We regularly measure and report our carbon footprint and set ambitious targets for reduction.',
    'environmental.cloud.title': 'Green Cloud Computing and Infrastructure',
    'environmental.cloud.content1': 'We prioritize cloud computing solutions that are powered by renewable energy and operated by providers with strong environmental commitments. Our infrastructure choices are guided by sustainability metrics, including carbon intensity, energy efficiency, and environmental certifications.',
    'environmental.cloud.content2': 'Our green infrastructure approach includes serverless computing to minimize resource usage, auto-scaling to match demand and reduce waste, and data center selection based on environmental criteria. We work with clients to optimize their cloud usage for both performance and environmental impact.',
    'environmental.digital.title': 'Digital Solutions for Environmental Challenges',
    'environmental.digital.content1': 'We develop technology solutions that help our clients reduce their environmental impact. This includes energy management systems, waste reduction applications, supply chain optimization tools, and sustainability reporting platforms that enable better environmental decision-making.',
    'environmental.digital.content2': 'Our environmental technology solutions help businesses track their carbon emissions, optimize resource usage, and implement sustainable practices. We believe that technology can be a powerful tool for environmental protection and sustainability.',
    'environmental.waste.title': 'Waste Reduction and Circular Economy',
    'environmental.waste.content1': 'We embrace circular economy principles in our operations and technology development. This includes extending the lifecycle of hardware, promoting software reuse and modularity, and designing systems that can be easily updated rather than replaced.',
    'environmental.waste.content2': 'Our waste reduction initiatives include paperless office practices, electronic waste recycling programs, and digital-first processes that minimize physical resource consumption. We encourage our clients to adopt similar practices through the solutions we develop.',
    'environmental.education.title': 'Environmental Education and Advocacy',
    'environmental.education.content1': 'We believe in the power of education and advocacy to drive environmental change. Our team members receive regular training on environmental best practices, and we share our knowledge with clients and the broader technology community.',
    'environmental.education.content2': 'We actively participate in environmental initiatives, support green technology research, and advocate for policies that promote sustainable technology development. Our goal is to be a positive force for environmental change in the technology industry.',
    'environmental.improvement.title': 'Continuous Improvement and Innovation',
    'environmental.improvement.content1': 'Environmental sustainability is an ongoing journey, not a destination. We continuously research new technologies and practices that can further reduce our environmental impact. Our innovation efforts focus on developing solutions that are both technologically advanced and environmentally responsible.',
    'environmental.improvement.content2': 'We regularly assess our environmental performance, set ambitious goals for improvement, and invest in technologies and practices that advance our sustainability mission. Our commitment to environmental responsibility drives us to constantly seek better ways to serve our clients while protecting our planet.',
    // Social Philosophy Page
    'social.badge': 'Social Impact Mission',
    'social.title': 'Social Philosophy',
    'social.subtitle': 'Our commitment to social responsibility and positive community impact through technology solutions that empower individuals, strengthen communities, and promote social equity.',
    'social.good.title': 'Technology for Social Good',
    'social.good.content1': 'We believe that technology should be a force for positive social change, empowering individuals and communities to overcome challenges and achieve their full potential. Our social philosophy centers on using our technical expertise to address real-world problems and create meaningful impact in society.',
    'social.good.content2': 'Our commitment to social good extends beyond our commercial projects to include pro-bono work, community partnerships, and initiatives that leverage technology to address social inequalities, improve access to education and healthcare, and strengthen community resilience.',
    'social.inclusion.title': 'Digital Inclusion and Accessibility',
    'social.inclusion.content1': 'We are committed to ensuring that the benefits of technology are accessible to all members of society, regardless of their background, abilities, or economic circumstances. Our digital inclusion initiatives focus on breaking down barriers and creating technology solutions that serve everyone.',
    'social.inclusion.content2': 'Our accessibility efforts include developing solutions that work for people with disabilities, creating multilingual interfaces, and designing for low-bandwidth environments. We believe that inclusive design leads to better solutions for everyone and helps bridge the digital divide.',
    'social.community.title': 'Community Engagement and Partnership',
    'social.community.content1': 'We actively engage with local communities and organizations to understand their needs and contribute our expertise to address community challenges. Our community partnerships include educational institutions, non-profit organizations, and local government initiatives.',
    'social.community.content2': 'Our community engagement includes mentorship programs for students, technology workshops for community members, and collaborative projects that combine our technical skills with local knowledge and needs. We believe that strong communities lead to stronger societies.',
    'social.education.title': 'Education and Knowledge Sharing',
    'social.education.content1': 'We believe in the transformative power of education and are committed to sharing knowledge and expertise with the broader community. Our educational initiatives include coding bootcamps, technology workshops, and mentorship programs that help others develop technical skills.',
    'social.education.content2': 'Our knowledge sharing efforts include open-source contributions, technical blog posts, conference presentations, and collaborative learning opportunities. We believe that sharing knowledge strengthens the entire technology community and creates opportunities for innovation.',
    'social.ethical.title': 'Ethical Technology Development',
    'social.ethical.content1': 'We are committed to developing technology that respects human dignity, protects privacy, and promotes social equity. Our ethical development practices include privacy-by-design principles, bias testing, and consideration of the social implications of our solutions.',
    'social.ethical.content2': 'Our ethical framework guides all technology development decisions, ensuring that we consider the potential social impacts of our solutions. We conduct regular ethics reviews and maintain ongoing dialogue with stakeholders to ensure our technology serves society\'s best interests.',
    'social.economic.title': 'Economic Empowerment Through Technology',
    'social.economic.content1': 'We believe that technology can be a powerful tool for economic empowerment, helping individuals and businesses access new opportunities and improve their economic prospects. Our solutions are designed to create economic value and enable sustainable growth.',
    'social.economic.content2': 'Our economic empowerment initiatives include supporting small businesses with technology solutions, creating platforms that enable new economic opportunities, and developing tools that help individuals and communities participate in the digital economy.',
    'social.global.title': 'Global Citizenship and Responsibility',
    'social.global.content1': 'As a global technology company, we recognize our responsibility to contribute positively to the communities where we operate and the broader global society. Our global citizenship efforts include supporting international development projects and contributing to global technology standards.',
    'social.global.content2': 'We believe that technology companies have a special responsibility to use their resources and expertise to address global challenges. Our global citizenship initiatives include supporting education in developing countries, contributing to open-source projects, and participating in international technology standards development.',
    // Corporate Governance Page
    'governance.badge': 'Ethical Leadership',
    'governance.title': 'Corporate Governance',
    'governance.subtitle': 'Our governance framework ensuring transparency, accountability, and ethical business practices that build trust with stakeholders and drive sustainable long-term success.',
    'governance.board.title': 'Board Leadership and Oversight',
    'governance.board.content1': 'Our corporate governance is built on a foundation of strong board leadership and independent oversight. Our board of directors provides strategic guidance, ensures accountability, and oversees the implementation of our governance policies and procedures.',
    'governance.board.content2': 'The board maintains independent committees for audit, compensation, and governance matters, ensuring that all major decisions are subject to appropriate oversight and review. Our governance structure promotes transparency, accountability, and alignment with stakeholder interests.',
    'governance.transparency.title': 'Transparency and Disclosure',
    'governance.transparency.content1': 'We maintain the highest standards of transparency in all our business operations and communications. Our disclosure practices include regular reporting on financial performance, business operations, and key governance matters to ensure stakeholders are well-informed.',
    'governance.transparency.content2': 'Our transparency commitments extend to our client relationships, where we provide clear communication about project progress, challenges, and outcomes. We believe that transparent communication builds trust and enables better decision-making for all parties involved.',
    'governance.risk.title': 'Risk Management and Compliance',
    'governance.risk.content1': 'We maintain comprehensive risk management systems that identify, assess, and mitigate risks across all aspects of our business operations. Our risk management framework includes regular assessments, contingency planning, and continuous monitoring of key risk indicators.',
    'governance.risk.content2': 'Our compliance program ensures adherence to all applicable laws, regulations, and industry standards. We maintain robust internal controls and conduct regular audits to ensure compliance with legal and regulatory requirements across all jurisdictions where we operate.',
    'governance.ethics.title': 'Ethical Business Practices',
    'governance.ethics.content1': 'We are committed to conducting business with the highest ethical standards, guided by our code of conduct and ethics policies. Our ethical framework covers all aspects of business operations, from client relationships to employee conduct and vendor partnerships.',
    'governance.ethics.content2': 'Our ethical practices include fair competition, responsible sourcing, anti-corruption measures, and protection of confidential information. We provide regular ethics training to all employees and maintain channels for reporting ethical concerns without fear of retaliation.',
    'governance.stakeholder.title': 'Stakeholder Engagement and Communication',
    'governance.stakeholder.content1': 'We maintain active engagement with all our stakeholders, including clients, employees, investors, partners, and the communities where we operate. Our stakeholder engagement includes regular communication, feedback mechanisms, and collaborative decision-making processes.',
    'governance.stakeholder.content2': 'Our communication practices ensure that stakeholders are informed about our business performance, strategic direction, and key developments. We value stakeholder input and incorporate feedback into our decision-making processes to ensure alignment with stakeholder interests.',
    'governance.performance.title': 'Performance Management and Accountability',
    'governance.performance.content1': 'We maintain robust performance management systems that ensure accountability at all levels of the organization. Our performance framework includes clear objectives, regular reviews, and consequences for both achievement and non-achievement of goals.',
    'governance.performance.content2': 'Our accountability measures include executive compensation tied to performance, regular board evaluations, and independent assessments of management effectiveness. We believe that strong accountability systems drive better performance and create value for all stakeholders.',
    'governance.improvement.title': 'Continuous Improvement and Innovation',
    'governance.improvement.content1': 'We continuously seek to improve our governance practices and adapt to changing business environments and stakeholder expectations. Our governance framework is regularly reviewed and updated to ensure it remains effective and relevant.',
    'governance.improvement.content2': 'We benchmark our governance practices against industry best practices and incorporate feedback from stakeholders to drive continuous improvement. Our commitment to governance excellence ensures that we maintain the trust and confidence of all our stakeholders while driving sustainable business success.',
    // Research & Development Page
    'research.badge': 'Innovation Hub',
    'research.title': 'Research & Development',
    'research.subtitle': 'Our commitment to advancing technology through cutting-edge research, innovation initiatives, and development of next-generation solutions that shape the future of digital transformation.',
    'research.strategy.title': 'Innovation Strategy and Vision',
    'research.strategy.content1': 'Our research and development strategy is driven by a vision of creating technology solutions that not only meet today\'s needs but anticipate and address tomorrow\'s challenges. We invest significantly in R&D to maintain our position at the forefront of technological innovation.',
    'research.strategy.content2': 'Our innovation approach combines fundamental research with applied development, ensuring that our discoveries translate into practical solutions that benefit our clients and society. We focus on emerging technologies that have the potential to transform industries and create new opportunities.',
    'research.emerging.title': 'Emerging Technology Research',
    'research.emerging.content1': 'We actively research emerging technologies including artificial intelligence, machine learning, blockchain, quantum computing, and advanced analytics. Our research teams work on developing new algorithms, improving existing technologies, and creating innovative applications.',
    'research.emerging.content2': 'Our research initiatives include exploring the potential of edge computing, investigating sustainable technology solutions, and developing new approaches to cybersecurity and data privacy. We collaborate with academic institutions and research organizations to advance the state of the art.',
    'research.development.title': 'Product Development and Prototyping',
    'research.development.content1': 'Our product development process combines rigorous research with agile development methodologies to create innovative solutions. We use rapid prototyping and iterative development to validate concepts and refine products before full-scale implementation.',
    'research.development.content2': 'Our development teams work closely with clients and end-users to ensure that our products meet real-world needs and deliver tangible value. We employ user-centered design principles and continuous feedback loops to create solutions that are both technically advanced and user-friendly.',
    'research.sustainable.title': 'Sustainable Technology Development',
    'research.sustainable.content1': 'A significant portion of our R&D efforts focuses on developing sustainable technology solutions that minimize environmental impact while maximizing efficiency and performance. We research green computing techniques, energy-efficient algorithms, and sustainable software architectures.',
    'research.sustainable.content2': 'Our sustainable development initiatives include creating carbon-neutral applications, optimizing cloud resource usage, and developing technologies that help other organizations reduce their environmental footprint. We believe that technology should be a force for environmental good.',
    'research.collaboration.title': 'Collaboration and Partnerships',
    'research.collaboration.content1': 'We actively collaborate with universities, research institutions, technology companies, and industry organizations to advance research and share knowledge. Our partnerships enable us to access cutting-edge research, share resources, and accelerate innovation.',
    'research.collaboration.content2': 'Our collaborative approach includes joint research projects, technology transfer programs, and participation in industry consortia. We believe that the best innovations come from diverse perspectives and collaborative efforts that combine different areas of expertise.',
    'research.ip.title': 'Intellectual Property and Innovation Protection',
    'research.ip.content1': 'We protect our innovations through strategic intellectual property management, including patents, trademarks, and trade secrets. Our IP strategy balances protection of our innovations with open collaboration and knowledge sharing where appropriate.',
    'research.ip.content2': 'We also contribute to open-source projects and share research findings that can benefit the broader technology community. Our approach to IP management reflects our commitment to advancing technology while protecting our competitive advantages and investment in innovation.',
    'research.roadmap.title': 'Future Technology Roadmap',
    'research.roadmap.content1': 'Our research and development roadmap focuses on technologies that will be critical in the coming years, including artificial intelligence, quantum computing, edge computing, and next-generation networking technologies. We invest in both incremental improvements and breakthrough innovations.',
    'research.roadmap.content2': 'We continuously monitor technology trends and market developments to ensure our R&D investments align with future opportunities and client needs. Our flexible research approach allows us to adapt quickly to new opportunities and pivot our efforts when promising new technologies emerge.',
    'research.impact.title': 'Measuring Impact and Success',
    'research.impact.content1': 'We measure the success of our R&D efforts through both quantitative metrics and qualitative assessments. Our evaluation framework includes innovation output, technology adoption, client satisfaction, and contribution to the broader technology ecosystem.',
    'research.impact.content2': 'Our commitment to continuous improvement in R&D ensures that we maintain our position as a technology leader while contributing to the advancement of the industry. We regularly review our research priorities and adjust our investments to maximize impact and value creation.',
    // Human Capital Initiatives Page
    'humanCapital.badge': 'People-First Approach',
    'humanCapital.title': 'Human Capital Initiatives',
    'humanCapital.subtitle': 'Comprehensive programs and initiatives focused on employee development, well-being, and creating an inclusive workplace that empowers our greatest asset - our people.',
    'humanCapital.development.title': 'Professional Development Programs',
    'humanCapital.development.content1': 'We invest heavily in the continuous growth and development of our team members. Our comprehensive professional development programs include technical training, leadership development, and soft skills enhancement to ensure our employees stay at the forefront of their fields.',
    'humanCapital.development.content2': 'Our development initiatives include mentorship programs, cross-functional project opportunities, conference attendance, certification support, and access to cutting-edge tools and technologies. We believe that investing in our people\'s growth directly translates to better outcomes for our clients and the company.',
    'humanCapital.wellbeing.title': 'Employee Well-being and Work-Life Balance',
    'humanCapital.wellbeing.content1': 'We recognize that employee well-being is fundamental to both personal happiness and professional success. Our well-being initiatives include flexible work arrangements, mental health support programs, wellness activities, and comprehensive health benefits.',
    'humanCapital.wellbeing.content2': 'Our work-life balance policies include remote work options, flexible hours, generous vacation policies, and family-friendly practices. We understand that our employees have lives outside of work, and we support them in maintaining a healthy balance between their professional and personal commitments.',
    'humanCapital.diversity.title': 'Diversity, Equity, and Inclusion',
    'humanCapital.diversity.content1': 'We are committed to creating an inclusive workplace where diversity is celebrated and everyone feels valued and respected. Our diversity, equity, and inclusion initiatives focus on recruiting from diverse talent pools, providing equal opportunities for advancement, and fostering an environment of belonging.',
    'humanCapital.diversity.content2': 'Our inclusion efforts include unconscious bias training, diverse hiring practices, employee resource groups, and regular assessments of our workplace culture. We believe that diverse perspectives lead to better innovation, problem-solving, and business outcomes.',
    'humanCapital.knowledge.title': 'Knowledge Sharing and Innovation Culture',
    'humanCapital.knowledge.content1': 'We foster a culture of knowledge sharing and continuous learning. Our innovation initiatives include regular tech talks, hackathons, innovation challenges, and opportunities for employees to pursue passion projects that can benefit the company and our clients.',
    'humanCapital.knowledge.content2': 'We encourage cross-team collaboration and provide platforms for employees to share their expertise, learn from others, and contribute to the collective knowledge of the organization. This culture of sharing and innovation drives both personal growth and company advancement.',
    'humanCapital.recognition.title': 'Recognition and Career Advancement',
    'humanCapital.recognition.content1': 'We believe in recognizing and rewarding excellence. Our recognition programs include performance-based bonuses, achievement awards, and public acknowledgment of outstanding contributions. We provide clear career advancement paths and support employees in achieving their professional goals.',
    'humanCapital.recognition.content2': 'Our career development framework includes regular performance reviews, goal setting, skill assessments, and personalized development plans. We invest in our employees\' long-term career success, knowing that their growth directly contributes to the company\'s success.',
    'humanCapital.community.title': 'Community Engagement and Social Impact',
    'humanCapital.community.content1': 'We encourage our employees to engage with their communities and contribute to social causes. Our community engagement initiatives include volunteer time off, corporate social responsibility programs, and support for employees\' personal charitable activities.',
    'humanCapital.community.content2': 'We believe that engaged employees who contribute to their communities are more fulfilled and bring that positive energy back to their work. Our social impact programs allow employees to use their skills and expertise to make a difference in the world.',
  },
  JA: {
    'nav.home': 'ホーム',
    'nav.company': '会社',
    'nav.services': 'サービス',
    'nav.community': 'コミュニティ',
    'nav.researches': '研究',
    'nav.insights': 'インサイト',
    'nav.careers': 'キャリアを探す',
    'nav.contact': 'ビジネスについて話しましょう',
    'hero.title': '成長を促進するデジタルソリューション',
    'hero.subtitle': '最先端技術と革新的なソリューションでビジネスを変革しましょう。',
    'hero.cta': '始める',
    'hero.register': '登録',
    'hero.badge': 'Upvista Digital - パキスタンのトップソフトウェアエージェンシー',
    'hero.service1': 'ウェブ開発',
    'hero.service2': 'ソフトウェアエンジニアリング',
    'hero.service3': 'グラフィック&デザイン',
    'hero.service4': 'AI自動化',
    'hero.stats1': 'プロジェクト完了',
    'hero.stats2': 'クライアント評価',
    'hero.stats3': 'サポート',
    // Company dropdown
    'dropdown.company.about': '私たちについて',
    'dropdown.company.profile': '会社概要',
    'dropdown.company.sustainability': 'サステナビリティと価値観',
    'dropdown.company.investors': '投資家関係',
    'dropdown.company.partners': 'パートナーシップ',
    'dropdown.company.leadership': 'リーダーシップ',
    'dropdown.company.contact': 'お問い合わせ',
    // Company Profile Page
    'companyProfile.badge': '企業情報',
    'companyProfile.title': '会社概要',
    'companyProfile.subtitle': 'Upvista Digitalの企業基盤、リーダーシップ構造、事業運営の包括的概要。',
    'companyProfile.tradeName': '商号',
    'companyProfile.businessDescription': '事業内容',
    'companyProfile.ceo': '最高経営責任者',
    'companyProfile.founded': '設立日',
    'companyProfile.fiscalYearEnd': '会計年度末',
    'companyProfile.headOffice': '本社',
    'companyProfile.legalStatus': '法的地位',
    'companyProfile.serviceAreas': 'サービス地域',
    'companyProfile.industryFocus': '業界フォーカス',
    'companyProfile.revenueModel': '収益モデル',
    'companyProfile.clientPortfolio': 'クライアントポートフォリオ',
    'companyProfile.qualityStandards': '品質基準',
    'companyProfile.businessDesc1': 'デジタルソリューションの開発、販売、運営。',
    'companyProfile.businessDesc2': 'ウェブ開発およびソフトウェアエンジニアリングサービスの開発、販売、提供。',
    'companyProfile.ceoName': 'Hamza Hafeez',
    'companyProfile.foundedDate': '2025年7月1日',
    'companyProfile.fiscalEnd': '6月30日',
    'companyProfile.headOfficeLocation': 'ラホール、パキスタン',
    'companyProfile.legalStatusType': '個人事業',
    'companyProfile.serviceAreasGlobal': 'グローバル',
    'companyProfile.industryTypes': '技術サービス、デジタルソリューション、ソフトウェア開発',
    'companyProfile.revenueType': 'サービスベース',
    'companyProfile.clientCount': '多様な業界での50以上の成功プロジェクト',
    'companyProfile.qualityRating': '4.9/5クライアント満足度評価',
    // Services dropdown
    'dropdown.services.about': 'サービスについて',
    'dropdown.services.software': 'ソフトウェア開発',
    'dropdown.services.web': 'ウェブ開発',
    'dropdown.services.ai': 'AIと自動化',
    'dropdown.services.cloud': 'クラウド',
    'dropdown.services.design': 'グラフィックとデザイン',
    'dropdown.services.marketing': 'デジタルマーケティング',
    // Community dropdown
    'dropdown.community.about': 'コミュニティについて',
    'dropdown.community.events': 'イベント',
    'dropdown.community.members': 'コミュニティメンバー',
    'dropdown.community.achievements': '実績',
    'dropdown.community.trainings': 'トレーニング',
    'dropdown.community.join': 'コミュニティに参加',
    // Researches dropdown
    'dropdown.researches.about': 'Upvista研究について',
    'dropdown.researches.cortex': 'プロジェクトコルテックス',
    'dropdown.researches.agi': 'AGI研究',
    // Insights dropdown
    'dropdown.insights.caseStudies': 'ケーススタディ',
    'dropdown.insights.news': 'ニュース',
    'dropdown.insights.blogs': 'ブログ',
    'dropdown.insights.whitepapers': 'ホワイトペーパー',
    'dropdown.insights.events': 'イベント',
    // Homepage sections
    'home.transform.title': 'デジタルプレゼンスの変革',
    'home.transform.subtitle': '行動を促す体験のデザイン',
    'home.transform.description': 'アイデアから実行まで、私たちは単にウェブサイトを構築するのではなく、人々とつながり、信頼を築き、訪問者を忠実な顧客に変換する旅路を築きます。',
    'home.transform.exploreServices': 'サービスを探索',
    'home.transform.contactUs': 'お問い合わせ',
    'home.partnership.title': 'デジタル成長のためのパートナーシップ',
    'home.partnership.description': '私たちは単にプロジェクトを提供するだけでなく、デジタルファーストの世界でビジネスが繁栄できる長期的なパートナーシップを築きます。私たちのアプローチは協力的で、透明性があり、あなたの成功に焦点を当てています。',
    'home.partnership.explore': 'パートナーシップを探索',
    'home.partnership.premium': 'プレミアムコラボレーション',
    'home.partnership.subtitle': '卓越性の新基準を設定するデジタルソリューションを共創しましょう。',
    'home.expertise.title': '結果を生み出す専門知識',
    'home.expertise.subtitle': 'デジタルニッチ全体での真の専門知識',
    'home.expertise.description': '様々な業界とビジネスモデルに合わせたソリューションを提供します。私たちのチームは各ニッチで深い実践的経験を持っており、無駄なことはせず、実証された結果のみを提供します。',
    'home.expertise.ecommerce.title': 'Eコマース',
    'home.expertise.ecommerce.description': 'B2C・B2Bブランド向けのカスタムオンラインストア、決済統合、商品管理、コンバージョン最適化。',
    'home.expertise.saas.title': 'SaaSプラットフォーム',
    'home.expertise.saas.description': 'ユーザー管理、請求、分析、クラウド統合を備えた堅牢でスケーラブルなSaaSソリューション。',
    'home.expertise.healthcare.title': 'ヘルスケア',
    'home.expertise.healthcare.description': 'HIPAA準拠アプリ、患者ポータル、遠隔医療、安全な健康データ管理。',
    'home.expertise.edtech.title': 'EdTech',
    'home.expertise.edtech.description': '学習管理システム、eラーニングプラットフォーム、インタラクティブ教育ツール。',
    'home.expertise.fintech.title': 'FinTech',
    'home.expertise.fintech.description': '安全な決済ゲートウェイ、デジタルウォレット、金融分析プラットフォーム。',
    'home.expertise.portfolio.title': 'ポートフォリオ・クリエイティブ',
    'home.expertise.portfolio.description': '個人ポートフォリオ、クリエイティブエージェンシーサイト、アーティストとプロフェッショナル向けデジタルショーケース。',
    'home.expertise.explore': 'ソリューションを探索',
    'home.services.title': 'コアサービス',
    'home.services.subtitle': '結果を生み出すデジタルソリューション',
    'home.services.description': 'コンセプトからデプロイまで、ビジネスを変革し、デジタル環境での成長を加速する包括的なデジタルソリューションを提供します。',
    'home.services.software.title': 'ソフトウェア開発',
    'home.services.software.description': '最先端技術で構築されたカスタムソフトウェアソリューション。ウェブアプリケーションからデスクトップソフトウェアまで、スケーラブルで保守可能なコードを提供します。',
    'home.services.software.learnMore': '詳細を見る',
    'home.services.web.title': 'ウェブ開発',
    'home.services.web.description': '優れたユーザー体験を提供し、ビジネス成長を促進するモダンでレスポンシブなウェブサイトとウェブアプリケーション。',
    'home.services.web.learnMore': '詳細を見る',
    'home.services.cloud.title': 'クラウドソリューション',
    'home.services.cloud.description': 'ビジネス運営とスケーラビリティを最適化する包括的なクラウドインフラストラクチャ、移行、管理サービス。',
    'home.services.cloud.learnMore': '詳細を見る',
    'home.services.ai.title': 'AI・自動化',
    'home.services.ai.description': 'プロセスを合理化し、意思決定能力を向上させるインテリジェント自動化ソリューションとAI搭載アプリケーション。',
    'home.services.ai.learnMore': '詳細を見る',
    'home.services.design.title': 'グラフィック・デザイン',
    'home.services.design.description': 'デジタル環境でブランドを際立たせるプロフェッショナルなグラフィックデザイン、ブランディング、ビジュアルアイデンティティサービス。',
    'home.services.design.learnMore': '詳細を見る',
    'home.services.marketing.title': 'デジタルマーケティング',
    'home.services.marketing.description': 'オンラインリーチとROIを最大化する戦略的デジタルマーケティングキャンペーン、SEO最適化、ソーシャルメディア管理、パフォーマンス分析。',
    'home.services.marketing.learnMore': '詳細を見る',
    'home.services.exploreAll': 'すべてのサービスを探索',
    'home.webDesign.title': 'ウェブデザイン専門家',
    'home.webDesign.subtitle': '自信を持ってデジタルプレゼンスを確立',
    'home.webDesign.description': 'Upvistaは単に見た目が良いだけでなく、測定可能な成長と持続的な影響をもたらす強力なデジタル体験を創造します。',
    'home.webDesign.getStarted': '今すぐ始める',
    'home.webDesign.viewWork': '私たちの作品を見る',
    'home.testimonials.title': 'お客様の声',
    'home.testimonials.subtitle': 'お客様の声',
    'home.testimonials.description': 'お客様からの声をお聞きください。',
    'home.testimonials.testimonial1': '彼らのチームは私たちのために美しく機能的なウェブサイトを作成しました。それは私たちの可視性とクライアントの信頼を劇的に向上させました。',
    'home.testimonials.testimonial2': 'コンバージョンするランディングページが必要でしたが、彼らはそれを提供してくれました。クリーンなデザイン、高速ローディング、完璧に最適化されています。',
    'home.testimonials.testimonial3': 'UI/UXデザインは私たちの期待を上回りました。直感的なレイアウトと一貫したブランディングがデジタル製品の向上に役立ちました。',
    'home.testimonials.testimonial4': 'ブランディングからウェブサイト開発まで、すべてが創造性とプロフェッショナリズムで処理されました。',
    'home.testimonials.testimonial5': '彼らのランディングページデザインはコンバージョンを35%増加させました—視覚的に美しく、モバイルフレンドリーです。',
    'home.testimonials.testimonial6': '素晴らしいコラボレーションと明確なプロセス。彼らは私たちのニーズを理解し、私たちのブランドを反映するカスタムソリューションを構築しました。',
    'home.testimonials.testimonial7': 'プロフェッショナルなチームとタイムリーな納品。私たちのブランディングは今やモダンで大胆で、すべてのプラットフォームで一貫しています。',
    'home.testimonials.testimonial8': '彼らは私たちのブランドリニューアルとウェブサイトの再設計を支援し、結果は際立つ洗練されたモダンな体験でした。',
    'home.testimonials.testimonial9': 'UI/UXの刷新により、サービス提供の明確性が向上しました。私たちのユーザーは今やより長く滞在し、より多くを探索しています。',
    'home.whyChoose.title': 'なぜ私たちを選ぶのか',
    'home.whyChoose.description': '私たちは現代のビジネス向けの手頃な価格で、カスタムで、スケーラブルなデジタルソリューションを迅速に構築します。',
    'home.whyChoose.transparentPricing': '透明な価格設定',
    'home.whyChoose.fixedDeadlines': '固定締切',
    'home.whyChoose.cleanDesign': 'クリーンなデザイン',
    'home.whyChoose.freeConsultation': '無料相談',
    'home.whyChoose.longTermSupport': '長期サポート',
    'home.whyChoose.flexibleTech': '柔軟な技術スタック',
    'home.palestine.title': 'Upvistaはパレスチナとその人々と共に立ちます',
    'home.join.title': '参加する',
    // Footer translations
    'footer.description': '最先端のデジタルソリューションでビジネスを強化。革新的なソフトウェア開発、包括的なウェブサービス、成長と成功を促進する変革的な技術パートナーシップを提供します。',
    'footer.paymentMethods': '支払い方法',
    'footer.payoneer': 'Payoneer',
    'footer.bankTransfer': '銀行振込',
    'footer.jazzCash': 'JazzCash',
    'footer.easyPaisa': 'EasyPaisa',
    'footer.company': '会社',
    'footer.aboutUs': '私たちについて',
    'footer.companyProfile': '会社プロフィール',
    'footer.sustainability': '持続可能性と価値観',
    'footer.investorRelations': '投資家関係',
    'footer.partnerships': 'パートナーシップ',
    'footer.leadership': 'リーダーシップ',
    'footer.contactUs': 'お問い合わせ',
    'footer.careers': 'キャリア',
    'footer.services': 'サービス',
    'footer.allServices': 'すべてのサービス',
    'footer.softwareDevelopment': 'ソフトウェア開発',
    'footer.webDevelopment': 'ウェブ開発',
    'footer.aiAutomation': 'AI・自動化',
    'footer.cloudSolutions': 'クラウドソリューション',
    'footer.graphicsDesign': 'グラフィック・デザイン',
    'footer.digitalMarketing': 'デジタルマーケティング',
    'footer.consultService': 'サービスのご相談',
    'footer.communityResources': 'コミュニティ・リソース',
    'footer.aboutCommunity': 'コミュニティについて',
    'footer.events': 'イベント',
    'footer.communityMembers': 'コミュニティメンバー',
    'footer.trainings': 'トレーニング',
    'footer.research': '研究',
    'footer.projectCortex': 'プロジェクトコルテックス',
    'footer.blog': 'ブログ',
    'footer.faq': 'FAQ',
    'footer.whatsappUs': 'WhatsAppで連絡',
    'footer.linkedinUs': 'LinkedInで連絡',
    'footer.messengerUs': 'Messengerで連絡',
    'footer.copyright': '© 2025 Upvista Digital. 全著作権所有。',
    'footer.termsConditions': '利用規約',
    'footer.privacyPolicy': 'プライバシーポリシー',
    'footer.trademarkCopyright': '商標・著作権',
    'footer.dataProtection': 'データ保護',
    'carousel.technologies': '使用技術',
    // Sustainability Page
    'sustainability.badge': '持続可能な未来',
    'sustainability.title': 'サステナビリティと価値観',
    'sustainability.subtitle': '環境責任、社会的影響、倫理的なビジネス慣行に対する私たちの包括的なアプローチは、企業文化を形成し、運営を導きます。',
    'sustainability.learnMore': '詳細を見る',
    'sustainability.policy.title': 'サステナビリティポリシー',
    'sustainability.policy.description': '環境管理、社会的責任、持続可能なビジネス慣行のための包括的フレームワーク。',
    'sustainability.values.title': '企業価値',
    'sustainability.values.description': '意思決定を導き、組織文化を形成する中核的な原則と価値観。',
    'sustainability.humanRights.title': '人権ポリシー',
    'sustainability.humanRights.description': 'すべての運営とパートナーシップにおいて人権の保護と促進への取り組み。',
    'sustainability.humanCapital.title': '人的資本イニシアチブ',
    'sustainability.humanCapital.description': '従業員の開発、ウェルビーイング、包括的な職場作りに焦点を当てたプログラムとイニシアチブ。',
    'sustainability.environmental.title': '環境哲学',
    'sustainability.environmental.description': '技術における環境への影響を最小限に抑え、持続可能な慣行を促進するアプローチ。',
    'sustainability.social.title': '社会哲学',
    'sustainability.social.description': '技術ソリューションを通じた社会的責任とポジティブなコミュニティへの影響への取り組み。',
    'sustainability.governance.title': 'コーポレートガバナンス',
    'sustainability.governance.description': '透明性、説明責任、倫理的なビジネス慣行を確保するガバナンスフレームワーク。',
    'sustainability.research.title': '研究開発',
    'sustainability.research.description': '持続可能な技術ソリューションと責任あるイノベーション慣行に焦点を当てたイノベーションイニシアチブ。',
    // Sustainability Policy Page
    'policy.badge': 'サステナビリティフレームワーク',
    'policy.title': 'サステナビリティポリシー',
    'policy.subtitle': '環境管理、社会的責任、持続可能なビジネス慣行のための包括的フレームワーク。私たちの運営のあらゆる側面を導く包括的なフレームワーク。',
    'policy.environmental.title': '環境への取り組み',
    'policy.environmental.content1': 'Upvista Digitalでは、持続可能な慣行を通じて環境への影響を最小限に抑える責任を認識しています。私たちの環境ポリシーは、すべてのビジネス運営にわたるエネルギー効率、廃棄物削減、カーボンフットプリントの最小化を包含しています。',
    'policy.environmental.content2': 'デジタルカーボンフットプリントを削減するために、クラウドベースのソリューションとエネルギー効率の高い技術を優先しています。私たちの開発慣行は、リソース消費を最小限に抑えるクリーンコード、最適化されたパフォーマンス、持続可能なアーキテクチャパターンを重視しています。',
    'policy.social.title': '社会的責任フレームワーク',
    'policy.social.content1': '私たちの社会的責任ポリシーは、技術を通じてポジティブな影響を創出することに焦点を当てています。デジタルインクルージョン、技術駆動ソリューションによるコミュニティ支援、そして私たちのサービスが社会全体に利益をもたらすことを信じています。',
    'policy.social.content2': 'メンターシッププログラム、教育イニシアチブ、コミュニティ開発プロジェクトに積極的に参加しています。私たちの取り組みは、地域の技術エコシステムの支援と、現実世界の課題に対処するイノベーションの育成にまで及んでいます。',
    'policy.business.title': '持続可能なビジネス慣行',
    'policy.business.content1': '私たちのビジネス慣行は、持続可能性を中核に設計されています。透明な報告、倫理的な調達、長期的な環境・社会的影響を考慮した責任あるプロジェクト管理を実装しています。',
    'policy.business.content2': 'すべての運営において説明責任を確保する高い企業統治基準を維持しています。私たちのクライアント関係は、信頼、透明性、持続可能な開発目標への共通の取り組みに基づいて構築されています。',
    'policy.implementation.title': '実装と監視',
    'policy.implementation.content1': 'このサステナビリティポリシーは、すべての部門とプロジェクトで積極的に実装されています。進捗を定期的に監視し、影響を測定し、持続可能性の取り組みを満たし、それを上回るために慣行を継続的に改善しています。',
    'policy.implementation.content2': '私たちのチームは持続可能性慣行について定期的な研修を受け、持続可能な技術ソリューションにおけるイノベーションを奨励しています。責任ある技術開発と展開のリーダーであることにコミットしています。',
    // Corporate Values Page
    'values.badge': '中核原則',
    'values.title': '企業価値',
    'values.subtitle': '意思決定を導き、組織文化を形成し、デジタル環境でどのようにビジネスを展開するかを定義する中核的な原則と価値観。',
    'values.innovation.title': 'イノベーションと卓越性',
    'values.innovation.content1': '私たちは技術で可能なことの境界を押し広げることにコミットしています。イノベーションは単なる流行語ではなく、私たちが行うすべてのことの基盤です。複雑な問題を解決し、クライアントに卓越した結果を提供する新しい方法を絶えず探求しています。',
    'values.innovation.content2': '実行における卓越性が私たちの基準です。プロジェクトの規模に関係なく、すべてのプロジェクトが私たちの最善の努力に値すると信じています。品質へのこの取り組みが、プロセス、技術、サービス提供を継続的に改善する原動力となっています。',
    'values.integrity.title': '誠実性と透明性',
    'values.integrity.content1': '誠実性はすべての関係の基盤を形成します。私たちは誠実さ、公平さ、すべてのステークホルダーへの敬意を持ってビジネスを展開しています。コミュニケーションにおける透明性により、クライアント、パートナー、チームメンバーは常に自分の立場を理解できます。',
    'values.integrity.content2': '信頼は一貫した行動と誠実なコミュニケーションを通じて得られると信じています。透明性への取り組みは、プロジェクト管理、価格設定、タイムライン、そして道中で遭遇する課題にまで及びます。',
    'values.collaboration.title': 'コラボレーションとパートナーシップ',
    'values.collaboration.content1': '私たちはすべてのクライアント関係を真のパートナーシップとして捉えています。コラボレーションは私たちの成功の鍵であり、クライアントのユニークな課題と目標を理解するために密接に協力しています。チームベースのアプローチにより、多様な視点と包括的なソリューションが確保されます。',
    'values.collaboration.content2': '内部的には、すべてのチームメンバーの意見が尊重されるコラボレーション文化を育成しています。多様な才能と視点が集まって複雑な課題に取り組むとき、最高のソリューションが生まれると信じています。',
    'values.learning.title': '継続的な学習と成長',
    'values.learning.content1': '急速に進化する技術の世界では、継続的な学習が不可欠です。私たちはチームの専門的成長に大きく投資し、研修、認定、スキル向上の機会を提供しています。',
    'values.learning.content2': '実験と失敗からの学習を奨励しています。私たちの文化は知識共有、メンターシップ、クライアントに利益をもたらし、私たちの能力を向上させることができる新しい技術と方法論の追求を促進します。',
    'values.client.title': 'クライアント成功と価値創造',
    'values.client.content1': '私たちの成功はクライアントの成功によって測定されます。要件を満たすだけでなく、期待を上回り、真のビジネス価値を生み出すソリューションを提供することにコミットしています。すべてのプロジェクトは持続的なポジティブな影響を創造することを目標に取り組まれます。',
    'values.client.content2': 'クライアント関係を長期的に捉え、クライアントが将来にわたって恩恵を受ける持続可能なソリューションに焦点を当てています。私たちの価値提案は技術的専門知識を超えて、戦略的思考、ビジネス洞察、継続的なサポートを含みます。',
    // Human Rights Policy Page
    'humanRights.badge': '人権への取り組み',
    'humanRights.title': '人権ポリシー',
    'humanRights.subtitle': '世界中のコミュニティに奉仕するすべての運営、パートナーシップ、技術ソリューションにおいて人権の保護と促進への揺るぎない取り組み。',
    'humanRights.universal.title': '普遍的人権原則',
    'humanRights.universal.content1': 'Upvista Digitalは世界人権宣言および関連するすべての国際人権基準を支持することにコミットしています。技術が人権を保護し、同時に潜在的に侵害する力を持つことを認識し、私たちのソリューションが人間の尊厳と自由を前進させることを確保することに専念しています。',
    'humanRights.universal.content2': '私たちの人権ポリシーは、従業員関係、クライアントパートナーシップ、サプライチェーン管理、および個人やコミュニティに影響を与える技術ソリューションの開発と展開を含む、ビジネス運営のすべての側面に適用されます。',
    'humanRights.workplace.title': '職場人権',
    'humanRights.workplace.content1': '私たちはすべての従業員の基本的権利を尊重し保護する職場環境を維持しています。これには、公正な待遇を受ける権利、差別からの自由、安全な労働条件、報復を恐れることなく懸念を表明する権利が含まれます。',
    'humanRights.workplace.content2': '私たちの取り組みは、キャリア発展のための平等な機会の確保、公正な報酬慣行、多様性が祝われ、すべての個人がその背景、アイデンティティ、信念に関係なく繁栄できる包括的な環境の創造にまで及びます。',
    'humanRights.privacy.title': 'プライバシーとデジタル権利',
    'humanRights.privacy.content1': '私たちのデジタル時代において、プライバシーは基本的な人権です。私たちは、従業員、クライアント、または私たちが開発するソリューションのエンドユーザーを問わず、私たちが扱うすべての個人のプライバシー権利を保護することにコミットしています。',
    'humanRights.privacy.content2': '私たちの技術ソリューションはプライバシー・バイ・デザインの原則で設計されており、データ保護がすべてのシステムに最初から組み込まれていることを保証しています。個人の自律性と同意を尊重する堅牢なセキュリティ対策と透明なデータ処理慣行を実装しています。',
    'humanRights.community.title': 'コミュニティへの影響とアクセシビリティ',
    'humanRights.community.content1': '私たちは、技術がすべての人にアクセス可能であるべきであり、不平等を作り出したり永続化させたりすべきではないと信じています。私たちのソリューションはアクセシビリティを念頭に設計されており、障害を持つ個人がデジタル世界に完全に参加できることを保証しています。',
    'humanRights.community.content2': '私たちは、十分なサービスを受けていないコミュニティに技術アクセスを提供するイニシアチブを支援することで、デジタル格差を埋めることに積極的に取り組んでいます。人権への私たちの取り組みには、技術ソリューションが社会的排除ではなく社会的包摂を促進することを確保することが含まれます。',
    'humanRights.ethical.title': '倫理的技術開発',
    'humanRights.ethical.content1': '私たちは人権を尊重し、人間の繁栄を促進する技術の開発にコミットしています。これには、プライバシーを侵害する監視システムや偏見と差別を永続化させるAIシステムなど、人権侵害に使用される可能性のある技術の開発を避けることが含まれます。',
    'humanRights.ethical.content2': '私たちの倫理的フレームワークはすべての技術開発決定を導き、私たちのソリューションの潜在的な人権への影響を考慮することを保証します。定期的な人権影響評価を実施し、ステークホルダーとの継続的な対話を維持して、私たちの技術が人類の最善の利益に奉仕することを確保しています。',
    'humanRights.implementation.title': '実装と説明責任',
    'humanRights.implementation.content1': 'この人権ポリシーは単なる文書ではありません；それは私たちの日常業務を導く生きた約束です。私たちはすべての従業員に人権原則に関する定期的な研修を提供し、懸念事項を報告し対処するための堅牢なメカニズムを維持しています。',
    'humanRights.implementation.content2': '私たちは定期的な監査、ステークホルダーエンゲージメント、人権パフォーマンスに関する透明な報告を通じて、これらの原則に対する説明責任を果たしています。人権への私たちの取り組みは、責任ある技術会社としての私たちのアイデンティティの根本的な要素です。',
    // Environmental Philosophy Page
    'environmental.badge': 'グリーンテクノロジーリーダーシップ',
    'environmental.title': '環境哲学',
    'environmental.subtitle': '技術開発、運用、クライアントソリューションにおける環境への影響を最小限に抑え、持続可能な実践を促進するための私たちの包括的アプローチ。',
    'environmental.development.title': '持続可能な技術開発',
    'environmental.development.content1': '私たちは、技術が環境に害を与える源ではなく、環境にとって良い力であるべきだと信じています。私たちの開発実践では、エネルギー効率、リソース最適化、環境への影響を最小限に抑えることを優先しています。私たちが作成するすべてのソリューションは、持続可能性の原則を中心に設計されています。',
    'environmental.development.content2': '私たちの持続可能な開発アプローチには、グリーンコーディング実践、計算要件を削減する最適化されたアルゴリズム、カーボンフットプリントを最小限に抑えるクラウドインフラストラクチャの選択が含まれます。私たちは環境への影響を減らすのに役立つ新しい技術の研究と実装を継続しています。',
    'environmental.carbon.title': 'カーボンフットプリント削減',
    'environmental.carbon.content1': '私たちは、すべての運用でカーボンフットプリントを削減することにコミットしています。これには、オフィスで再生可能エネルギー源を使用すること、エネルギー効率の高いハードウェアとソフトウェアを実装すること、持続可能性と再生可能エネルギーを優先するクラウドプロバイダーを選択することが含まれます。',
    'environmental.carbon.content2': '私たちのカーボン削減イニシアチブには、通勤排出量を削減するリモートワーク政策、紙の使用を最小限に抑えるデジタルファースト実践、エネルギー効率の高いオフィス設計が含まれます。私たちは定期的にカーボンフットプリントを測定・報告し、削減のための野心的な目標を設定しています。',
    'environmental.cloud.title': 'グリーンクラウドコンピューティングとインフラストラクチャ',
    'environmental.cloud.content1': '私たちは、再生可能エネルギーで稼働し、強力な環境コミットメントを持つプロバイダーによって運営されるクラウドコンピューティングソリューションを優先します。私たちのインフラストラクチャの選択は、カーボン強度、エネルギー効率、環境認証を含む持続可能性メトリクスによって導かれます。',
    'environmental.cloud.content2': '私たちのグリーンインフラストラクチャアプローチには、リソース使用量を最小限に抑えるサーバーレスコンピューティング、需要に合わせてスケールし廃棄を減らすオートスケーリング、環境基準に基づくデータセンターの選択が含まれます。私たちはクライアントと協力して、パフォーマンスと環境への影響の両方のためにクラウド使用を最適化します。',
    'environmental.digital.title': '環境課題のためのデジタルソリューション',
    'environmental.digital.content1': '私たちは、クライアントの環境への影響を減らすのに役立つ技術ソリューションを開発しています。これには、エネルギー管理システム、廃棄物削減アプリケーション、サプライチェーン最適化ツール、より良い環境意思決定を可能にする持続可能性報告プラットフォームが含まれます。',
    'environmental.digital.content2': '私たちの環境技術ソリューションは、企業がカーボン排出量を追跡し、リソース使用を最適化し、持続可能な実践を実装するのに役立ちます。私たちは、技術が環境保護と持続可能性のための強力なツールになり得ると信じています。',
    'environmental.waste.title': '廃棄物削減と循環経済',
    'environmental.waste.content1': '私たちは、運用と技術開発において循環経済の原則を受け入れています。これには、ハードウェアのライフサイクルを延長し、ソフトウェアの再利用とモジュラー性を促進し、交換ではなく簡単に更新できるシステムを設計することが含まれます。',
    'environmental.waste.content2': '私たちの廃棄物削減イニシアチブには、ペーパーレスオフィス実践、電子廃棄物リサイクルプログラム、物理的リソース消費を最小限に抑えるデジタルファーストプロセスが含まれます。私たちは、開発するソリューションを通じてクライアントに同様の実践を採用することを奨励しています。',
    'environmental.education.title': '環境教育とアドボカシー',
    'environmental.education.content1': '私たちは、環境変化を促進する教育とアドボカシーの力を信じています。私たちのチームメンバーは環境のベストプラクティスに関する定期的な研修を受け、クライアントとより広い技術コミュニティと知識を共有しています。',
    'environmental.education.content2': '私たちは環境イニシアチブに積極的に参加し、グリーンテクノロジー研究を支援し、持続可能な技術開発を促進する政策を提唱しています。私たちの目標は、技術業界で環境変化のためのポジティブな力になることです。',
    'environmental.improvement.title': '継続的改善とイノベーション',
    'environmental.improvement.content1': '環境持続可能性は目的地ではなく、継続的な旅路です。私たちは、環境への影響をさらに減らすことができる新しい技術と実践の研究を継続しています。私たちのイノベーション努力は、技術的に高度で環境に責任のあるソリューションの開発に焦点を当てています。',
    'environmental.improvement.content2': '私たちは定期的に環境パフォーマンスを評価し、改善のための野心的な目標を設定し、持続可能性ミッションを推進する技術と実践に投資しています。環境責任への私たちの取り組みは、地球を保護しながらクライアントに奉仕するより良い方法を絶えず模索することを私たちに駆り立てています。',
    // Social Philosophy Page
    'social.badge': '社会的インパクトミッション',
    'social.title': '社会哲学',
    'social.subtitle': '個人を力づけ、コミュニティを強化し、社会の公平性を促進する技術ソリューションを通じて、社会的責任とポジティブなコミュニティインパクトに対する私たちの取り組み。',
    'social.good.title': '社会善のための技術',
    'social.good.content1': '私たちは、技術がポジティブな社会的変化の力であり、個人やコミュニティが課題を克服し、潜在能力を最大限に発揮できるようにするべきだと信じています。私たちの社会哲学は、現実世界の問題に対処し、社会に意味のあるインパクトを創造するために技術的専門知識を使用することに焦点を当てています。',
    'social.good.content2': '私たちの社会善への取り組みは、商業プロジェクトを超えて、プロボノ活動、コミュニティパートナーシップ、社会的不平等に対処し、教育とヘルスケアへのアクセスを改善し、コミュニティの回復力を強化するために技術を活用するイニシアチブを含みます。',
    'social.inclusion.title': 'デジタルインクルージョンとアクセシビリティ',
    'social.inclusion.content1': '私たちは、背景、能力、経済状況に関係なく、社会のすべてのメンバーが技術の恩恵を受けられることを確保することにコミットしています。私たちのデジタルインクルージョンイニシアチブは、障壁を打破し、すべての人にサービスを提供する技術ソリューションを作成することに焦点を当てています。',
    'social.inclusion.content2': '私たちのアクセシビリティの取り組みには、障害者向けのソリューション開発、多言語インターフェースの作成、低帯域幅環境での設計が含まれます。私たちは、インクルーシブデザインがすべての人にとってより良いソリューションにつながり、デジタルデバイドを埋めるのに役立つと信じています。',
    'social.community.title': 'コミュニティエンゲージメントとパートナーシップ',
    'social.community.content1': '私たちは、地元のコミュニティや組織と積極的に関わり、彼らのニーズを理解し、コミュニティの課題に対処するために専門知識を貢献します。私たちのコミュニティパートナーシップには、教育機関、非営利組織、地方自治体のイニシアチブが含まれます。',
    'social.community.content2': '私たちのコミュニティエンゲージメントには、学生向けのメンタリングプログラム、コミュニティメンバー向けの技術ワークショップ、技術スキルと地元の知識とニーズを組み合わせた協力プロジェクトが含まれます。私たちは、強いコミュニティがより強い社会につながると信じています。',
    'social.education.title': '教育と知識共有',
    'social.education.content1': '私たちは教育の変革力に信じ、より広いコミュニティと知識と専門知識を共有することにコミットしています。私たちの教育イニシアチブには、コーディングブートキャンプ、技術ワークショップ、他の人が技術スキルを開発するのに役立つメンタリングプログラムが含まれます。',
    'social.education.content2': '私たちの知識共有の取り組みには、オープンソースへの貢献、技術ブログ投稿、会議でのプレゼンテーション、協力的な学習機会が含まれます。私たちは、知識を共有することが技術コミュニティ全体を強化し、イノベーションの機会を創造すると信じています。',
    'social.ethical.title': '倫理的技術開発',
    'social.ethical.content1': '私たちは、人間の尊厳を尊重し、プライバシーを保護し、社会の公平性を促進する技術の開発にコミットしています。私たちの倫理的開発実践には、プライバシーバイデザイン原則、バイアステスト、ソリューションの社会的影響の考慮が含まれます。',
    'social.ethical.content2': '私たちの倫理的フレームワークはすべての技術開発決定を導き、ソリューションの潜在的な社会的影響を考慮することを保証します。定期的な倫理レビューを実施し、技術が社会の最善の利益に奉仕することを確保するためにステークホルダーとの継続的な対話を維持しています。',
    'social.economic.title': '技術による経済的エンパワーメント',
    'social.economic.content1': '私たちは、技術が経済的エンパワーメントのための強力なツールであり、個人や企業が新しい機会にアクセスし、経済的見通しを改善するのに役立つと信じています。私たちのソリューションは、経済的価値を創造し、持続可能な成長を可能にするように設計されています。',
    'social.economic.content2': '私たちの経済的エンパワーメントイニシアチブには、技術ソリューションで中小企業を支援すること、新しい経済機会を可能にするプラットフォームの作成、個人やコミュニティがデジタル経済に参加するのに役立つツールの開発が含まれます。',
    'social.global.title': 'グローバルシチズンシップと責任',
    'social.global.content1': 'グローバル技術会社として、私たちは運営するコミュニティとより広いグローバル社会にポジティブに貢献する責任を認識しています。私たちのグローバルシチズンシップの取り組みには、国際開発プロジェクトの支援とグローバル技術標準への貢献が含まれます。',
    'social.global.content2': '私たちは、技術会社がグローバルな課題に対処するためにリソースと専門知識を使用する特別な責任があると信じています。私たちのグローバルシチズンシップイニシアチブには、開発途上国での教育支援、オープンソースプロジェクトへの貢献、国際技術標準開発への参加が含まれます。',
    // Corporate Governance Page
    'governance.badge': '倫理的リーダーシップ',
    'governance.title': 'コーポレートガバナンス',
    'governance.subtitle': 'ステークホルダーとの信頼を構築し、持続可能な長期的成功を推進する透明性、説明責任、倫理的なビジネス慣行を確保する私たちのガバナンスフレームワーク。',
    'governance.board.title': '取締役会のリーダーシップと監視',
    'governance.board.content1': '私たちのコーポレートガバナンスは、強力な取締役会リーダーシップと独立した監視の基盤の上に構築されています。私たちの取締役会は戦略的指導を提供し、説明責任を確保し、ガバナンスポリシーと手順の実装を監視します。',
    'governance.board.content2': '取締役会は監査、報酬、ガバナンス事項のための独立委員会を維持し、すべての主要な決定が適切な監視とレビューの対象となることを確保しています。私たちのガバナンス構造は透明性、説明責任、ステークホルダーの利益との整合性を促進します。',
    'governance.transparency.title': '透明性と開示',
    'governance.transparency.content1': '私たちは、すべての事業運営とコミュニケーションにおいて最高レベルの透明性を維持しています。私たちの開示慣行には、財務業績、事業運営、主要なガバナンス事項に関する定期的な報告が含まれ、ステークホルダーが十分に情報を得られるようにしています。',
    'governance.transparency.content2': '私たちの透明性への取り組みは、クライアントとの関係にも及び、プロジェクトの進捗、課題、結果について明確なコミュニケーションを提供しています。透明なコミュニケーションが信頼を構築し、関係するすべての当事者のより良い意思決定を可能にすると信じています。',
    'governance.risk.title': 'リスク管理とコンプライアンス',
    'governance.risk.content1': '私たちは、事業運営のすべての側面にわたってリスクを特定、評価、軽減する包括的なリスク管理システムを維持しています。私たちのリスク管理フレームワークには、定期的な評価、緊急時計画、主要リスク指標の継続的な監視が含まれます。',
    'governance.risk.content2': '私たちのコンプライアンスプログラムは、適用されるすべての法律、規制、業界基準の遵守を確保します。私たちは堅牢な内部統制を維持し、運営するすべての管轄区域で法的および規制要件の遵守を確保するための定期的な監査を実施しています。',
    'governance.ethics.title': '倫理的なビジネス慣行',
    'governance.ethics.content1': '私たちは、行動規範と倫理ポリシーに導かれ、最高の倫理基準でビジネスを遂行することにコミットしています。私たちの倫理フレームワークは、クライアントとの関係から従業員の行動、ベンダーパートナーシップまで、ビジネス運営のすべての側面をカバーしています。',
    'governance.ethics.content2': '私たちの倫理慣行には、公正な競争、責任ある調達、汚職防止措置、機密情報の保護が含まれます。私たちはすべての従業員に定期的な倫理訓練を提供し、報復の恐れなく倫理的懸念を報告するためのチャネルを維持しています。',
    'governance.stakeholder.title': 'ステークホルダーエンゲージメントとコミュニケーション',
    'governance.stakeholder.content1': '私たちは、クライアント、従業員、投資家、パートナー、運営するコミュニティを含むすべてのステークホルダーとの積極的なエンゲージメントを維持しています。私たちのステークホルダーエンゲージメントには、定期的なコミュニケーション、フィードバックメカニズム、協調的な意思決定プロセスが含まれます。',
    'governance.stakeholder.content2': '私たちのコミュニケーション慣行は、ステークホルダーが私たちの事業業績、戦略的方向性、主要な開発について情報を得られることを確保しています。私たちはステークホルダーの意見を重視し、ステークホルダーの利益との整合性を確保するために意思決定プロセスにフィードバックを組み込んでいます。',
    'governance.performance.title': 'パフォーマンス管理と説明責任',
    'governance.performance.content1': '私たちは、組織のすべてのレベルで説明責任を確保する堅牢なパフォーマンス管理システムを維持しています。私たちのパフォーマンスフレームワークには、明確な目標、定期的なレビュー、目標の達成と非達成の両方に対する結果が含まれます。',
    'governance.performance.content2': '私たちの説明責任措置には、パフォーマンスに連動した経営陣報酬、定期的な取締役会評価、経営陣の有効性の独立評価が含まれます。強力な説明責任システムがより良いパフォーマンスを促進し、すべてのステークホルダーに価値を創造すると信じています。',
    'governance.improvement.title': '継続的改善とイノベーション',
    'governance.improvement.content1': '私たちは、ガバナンス慣行を改善し、変化するビジネス環境とステークホルダーの期待に適応することを継続的に求めています。私たちのガバナンスフレームワークは、効果的で関連性を保つために定期的にレビューされ、更新されます。',
    'governance.improvement.content2': '私たちは、ガバナンス慣行を業界のベストプラクティスとベンチマークし、継続的改善を推進するためにステークホルダーからのフィードバックを組み込んでいます。ガバナンス卓越性への私たちのコミットメントは、持続可能な事業成功を推進しながら、すべてのステークホルダーの信頼と信頼を維持することを確保します。',
    // Research & Development Page
    'research.badge': 'イノベーションハブ',
    'research.title': '研究開発',
    'research.subtitle': '最先端の研究、イノベーションイニシアチブ、そしてデジタル変革の未来を形作る次世代ソリューションの開発を通じて技術を進歩させる私たちのコミットメント。',
    'research.strategy.title': 'イノベーション戦略とビジョン',
    'research.strategy.content1': '私たちの研究開発戦略は、今日のニーズを満たすだけでなく、明日の課題を予測し対処する技術ソリューションを作り出すビジョンによって推進されています。私たちは技術革新の最前線に位置を維持するために研究開発に大幅に投資しています。',
    'research.strategy.content2': '私たちのイノベーションアプローチは、基礎研究と応用開発を組み合わせ、私たちの発見がクライアントと社会に利益をもたらす実用的なソリューションに変換されることを保証します。私たちは業界を変革し、新しい機会を創造する可能性のある新興技術に焦点を当てています。',
    'research.emerging.title': '新興技術研究',
    'research.emerging.content1': '私たちは人工知能、機械学習、ブロックチェーン、量子コンピューティング、高度な分析を含む新興技術を積極的に研究しています。私たちの研究チームは、新しいアルゴリズムの開発、既存技術の改善、革新的なアプリケーションの作成に取り組んでいます。',
    'research.emerging.content2': '私たちの研究イニシアチブには、エッジコンピューティングの可能性の探求、持続可能な技術ソリューションの調査、サイバーセキュリティとデータプライバシーへの新しいアプローチの開発が含まれます。私たちは学術機関や研究組織と協力して最先端技術を進歩させています。',
    'research.development.title': '製品開発とプロトタイピング',
    'research.development.content1': '私たちの製品開発プロセスは、革新的なソリューションを作成するために厳格な研究とアジャイル開発手法を組み合わせています。私たちは、本格的な実装前に概念を検証し、製品を改良するために、ラピッドプロトタイピングと反復開発を使用しています。',
    'research.development.content2': '私たちの開発チームは、クライアントとエンドユーザーと密接に協力して、私たちの製品が現実世界のニーズを満たし、具体的な価値を提供することを保証しています。私たちは、ユーザー中心の設計原則と継続的なフィードバックループを採用して、技術的に高度でユーザーフレンドリーなソリューションを作成しています。',
    'research.sustainable.title': '持続可能な技術開発',
    'research.sustainable.content1': '私たちの研究開発努力の重要な部分は、効率とパフォーマンスを最大化しながら環境への影響を最小限に抑える持続可能な技術ソリューションの開発に焦点を当てています。私たちはグリーンコンピューティング技術、エネルギー効率の良いアルゴリズム、持続可能なソフトウェアアーキテクチャを研究しています。',
    'research.sustainable.content2': '私たちの持続可能な開発イニシアチブには、カーボンニュートラルアプリケーションの作成、クラウドリソース使用の最適化、他の組織が環境フットプリントを削減するのに役立つ技術の開発が含まれます。私たちは、技術が環境の善の力であるべきだと信じています。',
    'research.collaboration.title': '協力とパートナーシップ',
    'research.collaboration.content1': '私たちは、大学、研究機関、技術会社、業界組織と積極的に協力して、研究を進歩させ、知識を共有しています。私たちのパートナーシップは、最先端の研究にアクセスし、リソースを共有し、イノベーションを加速することを可能にします。',
    'research.collaboration.content2': '私たちの協力的アプローチには、共同研究プロジェクト、技術移転プログラム、業界コンソーシアムへの参加が含まれます。私たちは、最高のイノベーションは、異なる専門分野を組み合わせた多様な視点と協力的な努力から生まれると信じています。',
    'research.ip.title': '知的財産とイノベーション保護',
    'research.ip.content1': '私たちは、特許、商標、営業秘密を含む戦略的な知的財産管理を通じて、私たちのイノベーションを保護しています。私たちの知的財産戦略は、適切な場合のオープンな協力と知識共有と、私たちのイノベーションの保護のバランスを取ります。',
    'research.ip.content2': '私たちはまた、オープンソースプロジェクトに貢献し、より広い技術コミュニティに利益をもたらす研究結果を共有しています。私たちの知的財産管理へのアプローチは、競争上の優位性とイノベーションへの投資を保護しながら技術を進歩させるという私たちのコミットメントを反映しています。',
    'research.roadmap.title': '未来技術ロードマップ',
    'research.roadmap.content1': '私たちの研究開発ロードマップは、人工知能、量子コンピューティング、エッジコンピューティング、次世代ネットワーキング技術を含む、今後数年間で重要になる技術に焦点を当てています。私たちは漸進的改善と画期的なイノベーションの両方に投資しています。',
    'research.roadmap.content2': '私たちは技術トレンドと市場開発を継続的に監視して、私たちの研究開発投資が将来の機会とクライアントのニーズと一致することを保証しています。私たちの柔軟な研究アプローチは、新しい機会に迅速に適応し、有望な新技術が出現したときに努力を方向転換することを可能にします。',
    'research.impact.title': '影響と成功の測定',
    'research.impact.content1': '私たちは、定量的指標と定性的評価の両方を通じて、研究開発努力の成功を測定しています。私たちの評価フレームワークには、イノベーション出力、技術採用、クライアント満足度、より広い技術エコシステムへの貢献が含まれます。',
    'research.impact.content2': '研究開発における継続的改善への私たちのコミットメントは、業界の進歩に貢献しながら技術リーダーとしての地位を維持することを保証します。私たちは定期的に研究優先事項を検討し、影響と価値創造を最大化するために投資を調整します。',
    // Human Capital Initiatives Page
    'humanCapital.badge': '人材ファーストアプローチ',
    'humanCapital.title': '人材資本イニシアチブ',
    'humanCapital.subtitle': '従業員の発展、ウェルビーイング、そして私たちの最大の資産である人材に力を与える包括的な職場環境の創造に焦点を当てた包括的なプログラムとイニシアチブ。',
    'humanCapital.development.title': '専門能力開発プログラム',
    'humanCapital.development.content1': '私たちはチームメンバーの継続的な成長と発展に大きく投資しています。私たちの包括的な専門能力開発プログラムには、技術研修、リーダーシップ開発、ソフトスキル向上が含まれ、従業員が各分野の最前線に留まることを保証しています。',
    'humanCapital.development.content2': '私たちの開発イニシアチブには、メンターシッププログラム、クロスファンクショナルプロジェクト機会、カンファレンス参加、認定サポート、最先端ツールと技術へのアクセスが含まれます。人材の成長への投資が直接的にクライアントと会社により良い結果をもたらすと信じています。',
    'humanCapital.wellbeing.title': '従業員ウェルビーイングとワークライフバランス',
    'humanCapital.wellbeing.content1': '従業員のウェルビーイングが個人的な幸福と専門的成功の両方にとって根本的であることを認識しています。私たちのウェルビーイングイニシアチブには、柔軟な働き方の取り決め、メンタルヘルスサポートプログラム、ウェルネス活動、包括的な健康給付が含まれます。',
    'humanCapital.wellbeing.content2': '私たちのワークライフバランス政策には、リモートワークオプション、柔軟な時間、充実した休暇政策、家族に優しい慣行が含まれます。従業員が仕事以外の生活を持っていることを理解し、専門的および個人的なコミットメント間の健全なバランスを維持することをサポートしています。',
    'humanCapital.diversity.title': '多様性、公平性、包摂性',
    'humanCapital.diversity.content1': '多様性が祝われ、誰もが価値を感じ、尊重される包括的な職場環境を作ることにコミットしています。私たちの多様性、公平性、包摂性イニシアチブは、多様な人材プールからの採用、昇進のための平等な機会の提供、帰属感のある環境の育成に焦点を当てています。',
    'humanCapital.diversity.content2': '私たちの包摂努力には、無意識のバイアストレーニング、多様な採用慣行、従業員リソースグループ、職場文化の定期的な評価が含まれます。多様な視点がより良いイノベーション、問題解決、ビジネス成果につながると信じています。',
    'humanCapital.knowledge.title': '知識共有とイノベーション文化',
    'humanCapital.knowledge.content1': '知識共有と継続的学習の文化を育成しています。私たちのイノベーションイニシアチブには、定期的なテックトーク、ハッカソン、イノベーションチャレンジ、従業員が会社とクライアントに利益をもたらす情熱プロジェクトを追求する機会が含まれます。',
    'humanCapital.knowledge.content2': 'クロスチーム協力を奨励し、従業員が専門知識を共有し、他から学び、組織の集合知識に貢献するためのプラットフォームを提供しています。この共有とイノベーションの文化は、個人的成長と会社の前進の両方を推進します。',
    'humanCapital.recognition.title': '認識とキャリア発展',
    'humanCapital.recognition.content1': '卓越性を認識し、報酬を与えることを信じています。私たちの認識プログラムには、パフォーマンスベースのボーナス、業績賞、優秀な貢献の公的認識が含まれます。明確なキャリア発展パスを提供し、従業員の専門目標達成をサポートしています。',
    'humanCapital.recognition.content2': '私たちのキャリア開発フレームワークには、定期的なパフォーマンスレビュー、目標設定、スキル評価、個人化された開発計画が含まれます。従業員の長期的なキャリア成功に投資し、その成長が直接的に会社の成功に貢献することを知っています。',
    'humanCapital.community.title': 'コミュニティエンゲージメントと社会的影響',
    'humanCapital.community.content1': '従業員がコミュニティと関わり、社会的事業に貢献することを奨励しています。私たちのコミュニティエンゲージメントイニシアチブには、ボランティア休暇、企業の社会的責任プログラム、従業員の個人的慈善活動のサポートが含まれます。',
    'humanCapital.community.content2': 'コミュニティに貢献するエンゲージされた従業員がより充実し、そのポジティブなエネルギーを仕事に持ち帰ると信じています。私たちの社会的影響プログラムにより、従業員はスキルと専門知識を使って世界に変化をもたらすことができます。',
  },
  AR: {
    'nav.home': 'الرئيسية',
    'nav.company': 'الشركة',
    'nav.services': 'الخدمات',
    'nav.community': 'المجتمع',
    'nav.researches': 'البحوث',
    'nav.insights': 'الرؤى',
    'nav.careers': 'استكشاف الوظائف',
    'nav.contact': 'دعنا نتحدث عن الأعمال',
    'hero.title': 'الحلول الرقمية التي تدفع النمو',
    'hero.subtitle': 'حوّل عملك بتقنيات متطورة وحلول مبتكرة.',
    'hero.cta': 'ابدأ',
    'hero.register': 'التسجيل',
    'hero.badge': 'Upvista Digital - وكالة البرمجيات الرائدة في باكستان',
    'hero.service1': 'تطوير المواقع',
    'hero.service2': 'هندسة البرمجيات',
    'hero.service3': 'الرسومات والتصميم',
    'hero.service4': 'أتمتة الذكاء الاصطناعي',
    'hero.stats1': 'المشاريع المُنجزة',
    'hero.stats2': 'تقييم العملاء',
    'hero.stats3': 'الدعم',
    // Company dropdown
    'dropdown.company.about': 'من نحن',
    'dropdown.company.profile': 'ملف الشركة',
    'dropdown.company.sustainability': 'الاستدامة والقيم',
    'dropdown.company.investors': 'علاقات المستثمرين',
    'dropdown.company.partners': 'الشراكات',
    'dropdown.company.leadership': 'القيادة',
    'dropdown.company.contact': 'اتصل بنا',
    // Company Profile Page
    'companyProfile.badge': 'معلومات الشركة',
    'companyProfile.title': 'ملف الشركة',
    'companyProfile.subtitle': 'نظرة شاملة على الأسس المؤسسية لشركة Upvista Digital وهيكل القيادة وعمليات الأعمال.',
    'companyProfile.tradeName': 'الاسم التجاري',
    'companyProfile.businessDescription': 'وصف الأعمال',
    'companyProfile.ceo': 'الرئيس التنفيذي',
    'companyProfile.founded': 'تاريخ التأسيس',
    'companyProfile.fiscalYearEnd': 'نهاية السنة المالية',
    'companyProfile.headOffice': 'المكتب الرئيسي',
    'companyProfile.legalStatus': 'الوضع القانوني',
    'companyProfile.serviceAreas': 'مناطق الخدمة',
    'companyProfile.industryFocus': 'التركيز الصناعي',
    'companyProfile.revenueModel': 'نموذج الإيرادات',
    'companyProfile.clientPortfolio': 'محفظة العملاء',
    'companyProfile.qualityStandards': 'معايير الجودة',
    'companyProfile.businessDesc1': 'تطوير وبيع وتشغيل الحلول الرقمية.',
    'companyProfile.businessDesc2': 'تطوير وبيع وتسليم خدمات تطوير الويب والهندسة البرمجية.',
    'companyProfile.ceoName': 'حمزة حفيظ',
    'companyProfile.foundedDate': '1 يوليو 2025',
    'companyProfile.fiscalEnd': '30 يونيو',
    'companyProfile.headOfficeLocation': 'لاهور، باكستان',
    'companyProfile.legalStatusType': 'مؤسسة فردية',
    'companyProfile.serviceAreasGlobal': 'عالمي',
    'companyProfile.industryTypes': 'خدمات التكنولوجيا، الحلول الرقمية، تطوير البرمجيات',
    'companyProfile.revenueType': 'قائم على الخدمة',
    'companyProfile.clientCount': '50+ مشروع ناجح عبر صناعات متنوعة',
    'companyProfile.qualityRating': '4.9/5 تقييم رضا العملاء',
    // Services dropdown
    'dropdown.services.about': 'حول خدماتنا',
    'dropdown.services.software': 'تطوير البرمجيات',
    'dropdown.services.web': 'تطوير المواقع',
    'dropdown.services.ai': 'الذكاء الاصطناعي والأتمتة',
    'dropdown.services.cloud': 'الحوسبة السحابية',
    'dropdown.services.design': 'الرسومات والتصميم',
    'dropdown.services.marketing': 'التسويق الرقمي',
    // Community dropdown
    'dropdown.community.about': 'حول المجتمع',
    'dropdown.community.events': 'الأحداث',
    'dropdown.community.members': 'أعضاء المجتمع',
    'dropdown.community.achievements': 'الإنجازات',
    'dropdown.community.trainings': 'التدريبات',
    'dropdown.community.join': 'انضم إلى المجتمع',
    // Researches dropdown
    'dropdown.researches.about': 'حول أبحاث Upvista',
    'dropdown.researches.cortex': 'مشروع القشرة',
    'dropdown.researches.agi': 'البحث في الذكاء الاصطناعي العام',
    // Insights dropdown
    'dropdown.insights.caseStudies': 'دراسات الحالة',
    'dropdown.insights.news': 'الأخبار',
    'dropdown.insights.blogs': 'المدونات',
    'dropdown.insights.whitepapers': 'الأوراق البيضاء',
    'dropdown.insights.events': 'الأحداث',
    // Homepage sections
    'home.transform.title': 'تحويل الحضور الرقمي',
    'home.transform.subtitle': 'تصميم تجارب تلهم العمل',
    'home.transform.description': 'من الفكرة إلى التنفيذ، نحن لا نبني مواقع ويب فقط — نبني رحلات تتصل بالناس وتبني الثقة وتحول الزوار إلى عملاء مخلصين.',
    'home.transform.exploreServices': 'استكشف خدماتنا',
    'home.transform.contactUs': 'اتصل بنا',
    'home.partnership.title': 'الشراكة من أجل نموك الرقمي',
    'home.partnership.description': 'نحن لا نسلم المشاريع فقط—نبني شراكات طويلة المدى تمكن عملك من الازدهار في عالم رقمي أول. نهجنا تعاوني وشفاف ومركز على نجاحك.',
    'home.partnership.explore': 'استكشف الشراكات',
    'home.partnership.premium': 'تعاون مميز',
    'home.partnership.subtitle': 'دعنا نشارك في إنشاء حلول رقمية تضع معايير جديدة للتميز.',
    'home.expertise.title': 'الخبرة التي تحقق النتائج',
    'home.expertise.subtitle': 'خبرة حقيقية عبر المجالات الرقمية',
    'home.expertise.description': 'نقدم حلول مخصصة لمجموعة متنوعة من الصناعات ونماذج الأعمال. فريقنا يجلب خبرة عملية عميقة في كل مجال—بدون إضافات، فقط نتائج مثبتة.',
    'home.expertise.ecommerce.title': 'التجارة الإلكترونية',
    'home.expertise.ecommerce.description': 'متاجر إلكترونية مخصصة وتكامل الدفع وإدارة المنتجات وتحسين التحويل للعلامات التجارية B2C و B2B.',
    'home.expertise.saas.title': 'منصات SaaS',
    'home.expertise.saas.description': 'حلول SaaS قوية وقابلة للتوسع مع إدارة المستخدمين والفواتير والتحليلات والتكامل السحابي.',
    'home.expertise.healthcare.title': 'الرعاية الصحية',
    'home.expertise.healthcare.description': 'تطبيقات متوافقة مع HIPAA وبوابات المرضى والطب عن بُعد وإدارة آمنة لبيانات الصحة.',
    'home.expertise.edtech.title': 'التكنولوجيا التعليمية',
    'home.expertise.edtech.description': 'أنظمة إدارة التعلم ومنصات التعلم الإلكتروني وأدوات تعليمية تفاعلية.',
    'home.expertise.fintech.title': 'التكنولوجيا المالية',
    'home.expertise.fintech.description': 'بوابات دفع آمنة ومحافظ رقمية ومنصات تحليل مالية.',
    'home.expertise.portfolio.title': 'المحفظة والإبداع',
    'home.expertise.portfolio.description': 'محافظ شخصية ومواقع وكالات إبداعية وعروض رقمية للفنانين والمهنيين.',
    'home.expertise.explore': 'استكشف حلولنا',
    'home.services.title': 'خدماتنا الأساسية',
    'home.services.subtitle': 'حلول رقمية تحقق النتائج',
    'home.services.description': 'من المفهوم إلى النشر، نقدم حلول رقمية شاملة تحول عملك وتسارع النمو في المشهد الرقمي.',
    'home.services.software.title': 'تطوير البرمجيات',
    'home.services.software.description': 'حلول برمجيات مخصصة مبنية بأحدث التقنيات. من تطبيقات الويب إلى برامج سطح المكتب، نقدم كود قابل للتوسع والصيانة.',
    'home.services.software.learnMore': 'اعرف المزيد',
    'home.services.web.title': 'تطوير المواقع',
    'home.services.web.description': 'مواقع ويب وتطبيقات ويب حديثة ومتجاوبة تقدم تجارب مستخدم استثنائية وتدفع نمو الأعمال.',
    'home.services.web.learnMore': 'اعرف المزيد',
    'home.services.cloud.title': 'الحلول السحابية',
    'home.services.cloud.description': 'خدمات بنية تحتية سحابية شاملة والهجرة والإدارة لتحسين عمليات عملك وقابلية التوسع.',
    'home.services.cloud.learnMore': 'اعرف المزيد',
    'home.services.ai.title': 'الذكاء الاصطناعي والأتمتة',
    'home.services.ai.description': 'حلول أتمتة ذكية وتطبيقات مدعومة بالذكاء الاصطناعي تبسط العمليات وتعزز قدرات اتخاذ القرار.',
    'home.services.ai.learnMore': 'اعرف المزيد',
    'home.services.design.title': 'الرسومات والتصميم',
    'home.services.design.description': 'خدمات تصميم جرافيكي احترافي وبناء العلامة التجارية والهوية البصرية التي تجعل علامتك التجارية تبرز في المشهد الرقمي.',
    'home.services.design.learnMore': 'اعرف المزيد',
    'home.services.marketing.title': 'التسويق الرقمي',
    'home.services.marketing.description': 'حملات تسويق رقمي استراتيجية وتحسين محركات البحث وإدارة وسائل التواصل الاجتماعي وتحليلات الأداء لتعظيم وصولك الإلكتروني وعائد الاستثمار.',
    'home.services.marketing.learnMore': 'اعرف المزيد',
    'home.services.exploreAll': 'استكشف جميع الخدمات',
    'home.webDesign.title': 'خبراء تصميم المواقع',
    'home.webDesign.subtitle': 'أقِم حضورك الرقمي بثقة',
    'home.webDesign.description': 'Upvista تخلق تجارب رقمية قوية لا تبدو رائعة فحسب، بل تحقق نمواً قابلاً للقياس وتأثيراً دائم.',
    'home.webDesign.getStarted': 'ابدأ الآن',
    'home.webDesign.viewWork': 'شاهد أعمالنا',
    'home.testimonials.title': 'الشهادات',
    'home.testimonials.subtitle': 'ما يقوله مستخدمونا',
    'home.testimonials.description': 'شاهد ما يقوله عملاؤنا عنا.',
    'home.testimonials.testimonial1': 'فريقهم أنشأ موقع ويب جميل ووظيفي لنا. لقد عزز رؤيتنا وثقة العملاء بشكل كبير.',
    'home.testimonials.testimonial2': 'كنا بحاجة إلى صفحة هبوط تحول الزوار — وقد قدموها. تصميم نظيف وتحميل سريع ومحسن بشكل مثالي.',
    'home.testimonials.testimonial3': 'تصميم UI/UX تجاوز توقعاتنا. التخطيطات البديهية والعلامة التجارية المتسقة ساعدت في رفع منتجنا الرقمي.',
    'home.testimonials.testimonial4': 'من بناء العلامة التجارية إلى تطوير المواقع، تم التعامل مع كل شيء بالإبداع والاحترافية.',
    'home.testimonials.testimonial5': 'تصميم صفحة الهبوط الخاصة بهم ساعدنا في زيادة التحويلات بنسبة 35% — مذهل بصرياً وصديق للهاتف المحمول.',
    'home.testimonials.testimonial6': 'تعاون رائع وعملية واضحة. فهموا احتياجاتنا وبنوا حلاً مخصصاً يعكس علامتنا التجارية.',
    'home.testimonials.testimonial7': 'فريق احترافي وتسليم في الوقت المحدد. علامتنا التجارية الآن حديثة وجريئة ومتسقة عبر المنصات.',
    'home.testimonials.testimonial8': 'ساعدونا في إعادة بناء العلامة التجارية وإعادة تصميم موقعنا — كانت النتيجة تجربة أنيقة وحديثة تبرز.',
    'home.testimonials.testimonial9': 'إعادة تصميم UI/UX جلبت الوضوح لعرض خدماتنا. مستخدمونا الآن يقضون وقتاً أطول ويستكشفون أكثر.',
    'home.whyChoose.title': 'لماذا تختارنا',
    'home.whyChoose.description': 'نبني حلول رقمية ميسورة التكلفة ومخصصة وقابلة للتوسع للشركات الحديثة — بسرعة.',
    'home.whyChoose.transparentPricing': 'أسعار شفافة',
    'home.whyChoose.fixedDeadlines': 'مواعيد نهائية ثابتة',
    'home.whyChoose.cleanDesign': 'تصميم نظيف',
    'home.whyChoose.freeConsultation': 'استشارة مجانية',
    'home.whyChoose.longTermSupport': 'دعم طويل المدى',
    'home.whyChoose.flexibleTech': 'مكدس تقني مرن',
    'home.palestine.title': 'Upvista تقف مع فلسطين وشعبها',
    'home.join.title': 'انضم إلينا',
    // Footer translations
    'footer.description': 'تمكين الشركات بحلول رقمية متطورة. نحن نقدم تطوير برمجيات مبتكر، خدمات ويب شاملة، وشراكات تقنية تحويلية تعزز النمو والنجاح.',
    'footer.paymentMethods': 'طرق الدفع',
    'footer.payoneer': 'Payoneer',
    'footer.bankTransfer': 'تحويل بنكي',
    'footer.jazzCash': 'JazzCash',
    'footer.easyPaisa': 'EasyPaisa',
    'footer.company': 'الشركة',
    'footer.aboutUs': 'معلومات عنا',
    'footer.companyProfile': 'ملف الشركة',
    'footer.sustainability': 'الاستدامة والقيم',
    'footer.investorRelations': 'علاقات المستثمرين',
    'footer.partnerships': 'الشراكات',
    'footer.leadership': 'القيادة',
    'footer.contactUs': 'اتصل بنا',
    'footer.careers': 'الوظائف',
    'footer.services': 'الخدمات',
    'footer.allServices': 'جميع الخدمات',
    'footer.softwareDevelopment': 'تطوير البرمجيات',
    'footer.webDevelopment': 'تطوير المواقع',
    'footer.aiAutomation': 'الذكاء الاصطناعي والأتمتة',
    'footer.cloudSolutions': 'حلول السحابة',
    'footer.graphicsDesign': 'الرسوم والتصميم',
    'footer.digitalMarketing': 'التسويق الرقمي',
    'footer.consultService': 'استشارة لأي خدمة',
    'footer.communityResources': 'المجتمع والموارد',
    'footer.aboutCommunity': 'حول المجتمع',
    'footer.events': 'الأحداث',
    'footer.communityMembers': 'أعضاء المجتمع',
    'footer.trainings': 'التدريبات',
    'footer.research': 'البحث',
    'footer.projectCortex': 'مشروع كورتكس',
    'footer.blog': 'المدونة',
    'footer.faq': 'الأسئلة الشائعة',
    'footer.whatsappUs': 'راسلنا عبر WhatsApp',
    'footer.linkedinUs': 'راسلنا عبر LinkedIn',
    'footer.messengerUs': 'راسلنا عبر Messenger',
    'footer.copyright': '© 2025 Upvista Digital. جميع الحقوق محفوظة.',
    'footer.termsConditions': 'الشروط والأحكام',
    'footer.privacyPolicy': 'سياسة الخصوصية',
    'footer.trademarkCopyright': 'العلامة التجارية وحقوق الطبع',
    'footer.dataProtection': 'حماية البيانات',
    'carousel.technologies': 'التقنيات التي نستخدمها',
    // Sustainability Page
    'sustainability.badge': 'مستقبل مستدام',
    'sustainability.title': 'الاستدامة والقيم',
    'sustainability.subtitle': 'نهجنا الشامل للمسؤولية البيئية والتأثير الاجتماعي والممارسات التجارية الأخلاقية التي تشكل ثقافتنا المؤسسية وتوجه عملياتنا.',
    'sustainability.learnMore': 'تعلم المزيد',
    'sustainability.policy.title': 'سياسة الاستدامة',
    'sustainability.policy.description': 'إطارنا الشامل للإشراف البيئي والمسؤولية الاجتماعية والممارسات التجارية المستدامة.',
    'sustainability.values.title': 'القيم المؤسسية',
    'sustainability.values.description': 'المبادئ والقيم الأساسية التي توجه اتخاذ القرارات وتشكل ثقافتنا التنظيمية.',
    'sustainability.humanRights.title': 'سياسة حقوق الإنسان',
    'sustainability.humanRights.description': 'التزامنا بحماية وتعزيز حقوق الإنسان عبر جميع عملياتنا وشراكاتنا.',
    'sustainability.humanCapital.title': 'مبادرات رأس المال البشري',
    'sustainability.humanCapital.description': 'البرامج والمبادرات التي تركز على تطوير الموظفين والرفاهية وخلق مكان عمل شامل.',
    'sustainability.environmental.title': 'الفلسفة البيئية',
    'sustainability.environmental.description': 'نهجنا لتقليل التأثير البيئي وتعزيز الممارسات المستدامة في التكنولوجيا.',
    'sustainability.social.title': 'الفلسفة الاجتماعية',
    'sustainability.social.description': 'التزامنا بالمسؤولية الاجتماعية والتأثير الإيجابي على المجتمع من خلال حلول التكنولوجيا.',
    'sustainability.governance.title': 'الحوكمة المؤسسية',
    'sustainability.governance.description': 'إطار الحوكمة الخاص بنا لضمان الشفافية والمساءلة والممارسات التجارية الأخلاقية.',
    'sustainability.research.title': 'البحث والتطوير',
    'sustainability.research.description': 'مبادرات الابتكار التي تركز على حلول التكنولوجيا المستدامة وممارسات الابتكار المسؤولة.',
    // Sustainability Policy Page
    'policy.badge': 'إطار الاستدامة',
    'policy.title': 'سياسة الاستدامة',
    'policy.subtitle': 'إطارنا الشامل للإشراف البيئي والمسؤولية الاجتماعية والممارسات التجارية المستدامة التي توجه كل جانب من جوانب عملياتنا.',
    'policy.environmental.title': 'الالتزام البيئي',
    'policy.environmental.content1': 'في Upvista Digital، ندرك مسؤوليتنا في تقليل التأثير البيئي من خلال الممارسات المستدامة. تشمل سياستنا البيئية كفاءة الطاقة وتقليل النفايات وتقليل البصمة الكربونية عبر جميع العمليات التجارية.',
    'policy.environmental.content2': 'نعطي الأولوية للحلول القائمة على السحابة والتقنيات الموفرة للطاقة لتقليل بصمتنا الكربونية الرقمية. تؤكد ممارساتنا التطويرية على الكود النظيف والأداء المحسن وأنماط الهندسة المعمارية المستدامة التي تقلل من استهلاك الموارد.',
    'policy.social.title': 'إطار المسؤولية الاجتماعية',
    'policy.social.content1': 'تركز سياسة المسؤولية الاجتماعية لدينا على خلق تأثير إيجابي من خلال التكنولوجيا. نؤمن بالشمول الرقمي ودعم المجتمعات من خلال الحلول المدفوعة بالتكنولوجيا، وضمان أن خدماتنا تفيد المجتمع ككل.',
    'policy.social.content2': 'نشارك بنشاط في برامج الإرشاد والمبادرات التعليمية ومشاريع تنمية المجتمع. يمتد التزامنا إلى دعم النظم البيئية التكنولوجية المحلية وتعزيز الابتكار الذي يعالج التحديات الواقعية.',
    'policy.business.title': 'الممارسات التجارية المستدامة',
    'policy.business.content1': 'ممارساتنا التجارية مصممة مع الاستدامة في جوهرها. ننفذ التقارير الشفافة والشراء الأخلاقي وإدارة المشاريع المسؤولة التي تأخذ في الاعتبار التأثيرات البيئية والاجتماعية طويلة المدى.',
    'policy.business.content2': 'نحافظ على معايير عالية من الحوكمة المؤسسية، مما يضمن المساءلة في جميع عملياتنا. علاقاتنا مع العملاء مبنية على الثقة والشفافية والالتزام المشترك بأهداف التنمية المستدامة.',
    'policy.implementation.title': 'التنفيذ والمراقبة',
    'policy.implementation.content1': 'يتم تنفيذ سياسة الاستدامة هذه بنشاط عبر جميع الأقسام والمشاريع. نراقب تقدمنا بانتظام ونقيس تأثيرنا ونحسن ممارساتنا باستمرار لضمان أننا نلبي ونفوق التزاماتنا بالاستدامة.',
    'policy.implementation.content2': 'يتلقى فريقنا تدريباً منتظماً على ممارسات الاستدامة، ونشجع الابتكار في حلول التكنولوجيا المستدامة. نحن ملتزمون بأن نكون رواداً في تطوير ونشر التكنولوجيا المسؤولة.',
    // Corporate Values Page
    'values.badge': 'المبادئ الأساسية',
    'values.title': 'القيم المؤسسية',
    'values.subtitle': 'المبادئ والقيم الأساسية التي توجه اتخاذ القرارات، وتشكل ثقافتنا التنظيمية، وتحدد كيفية إدارة الأعمال في المشهد الرقمي.',
    'values.innovation.title': 'الابتكار والتميز',
    'values.innovation.content1': 'نحن ملتزمون بدفع حدود ما هو ممكن في التكنولوجيا. الابتكار ليس مجرد كلمة طنانة بالنسبة لنا؛ إنه أساس كل ما نقوم به. نسعى باستمرار إلى طرق جديدة لحل المشاكل المعقدة وتقديم نتائج استثنائية لعملائنا.',
    'values.innovation.content2': 'التميز في التنفيذ هو معيارنا. نؤمن بأن كل مشروع، مهما كان صغيراً، يستحق أفضل جهودنا. هذا الالتزام بالجودة يدفعنا إلى التحسين المستمر لعملياتنا وتقنياتنا وتقديم الخدمات.',
    'values.integrity.title': 'النزاهة والشفافية',
    'values.integrity.content1': 'تشكل النزاهة الأساس لجميع علاقاتنا. ندير الأعمال بأمانة وعدالة واحترام لجميع أصحاب المصلحة. تضمن شفافيتنا في التواصل أن العملاء والشركاء وأعضاء الفريق يعرفون دائماً أين يقفون.',
    'values.integrity.content2': 'نؤمن بأن الثقة تُكتسب من خلال الأفعال المتسقة والتواصل الصادق. يمتد التزامنا بالشفافية إلى إدارة المشاريع والأسعار والجداول الزمنية وأي تحديات نواجهها على الطريق.',
    'values.collaboration.title': 'التعاون والشراكة',
    'values.collaboration.content1': 'ننظر إلى كل علاقة عملاء كشراكة حقيقية. التعاون هو مفتاح نجاحنا، ونعمل عن كثب مع العملاء لفهم تحدياتهم وأهدافهم الفريدة. نهجنا القائم على الفريق يضمن وجهات نظر متنوعة وحلول شاملة.',
    'values.collaboration.content2': 'داخلياً، نعزز ثقافة التعاون حيث تُقدر مساهمة كل عضو في الفريق. نؤمن بأن أفضل الحلول تظهر عندما تجتمع المواهب والوجهات المتنوعة لمواجهة التحديات المعقدة.',
    'values.learning.title': 'التعلم والنمو المستمر',
    'values.learning.content1': 'في عالم التكنولوجيا سريع التطور، التعلم المستمر أمر ضروري. نستثمر بكثافة في التطوير المهني لفريقنا، ونوفر فرص التدريب والشهادات وتحسين المهارات.',
    'values.learning.content2': 'نشجع التجريب والتعلم من الأخطاء. تعزز ثقافتنا مشاركة المعرفة والإرشاد والسعي وراء التقنيات والمنهجيات الجديدة التي يمكن أن تفيد عملائنا وتطور قدراتنا.',
    'values.client.title': 'نجاح العملاء وخلق القيمة',
    'values.client.content1': 'يُقاس نجاحنا بنجاح عملائنا. نحن ملتزمون بتقديم حلول لا تلبي المتطلبات فحسب، بل تتجاوز التوقعات وتولد قيمة تجارية حقيقية. يُقارب كل مشروع بهدف خلق تأثير إيجابي دائم.',
    'values.client.content2': 'نأخذ نظرة طويلة المدى لعلاقات العملاء، مع التركيز على الحلول المستدامة التي ستخدم عملاءنا جيداً في المستقبل. عرض القيمة الخاص بنا يتجاوز الخبرة التقنية ليشمل التفكير الاستراتيجي والفطنة التجارية والدعم المستمر.',
    // Human Rights Policy Page
    'humanRights.badge': 'التزام حقوق الإنسان',
    'humanRights.title': 'سياسة حقوق الإنسان',
    'humanRights.subtitle': 'التزامنا الثابت بحماية وتعزيز حقوق الإنسان عبر جميع عملياتنا وشراكاتنا وحلولنا التكنولوجية التي تخدم المجتمعات في جميع أنحاء العالم.',
    'humanRights.universal.title': 'مبادئ حقوق الإنسان العالمية',
    'humanRights.universal.content1': 'تلتزم Upvista Digital بدعم الإعلان العالمي لحقوق الإنسان وجميع معايير حقوق الإنسان الدولية ذات الصلة. ندرك أن التكنولوجيا لديها القدرة على حماية حقوق الإنسان وخرقها محتملاً، ونحن ملتزمون بضمان أن حلولنا تعزز الكرامة الإنسانية والحرية.',
    'humanRights.universal.content2': 'تنطبق سياسة حقوق الإنسان لدينا على جميع جوانب عملياتنا التجارية، بما في ذلك علاقات الموظفين وشراكات العملاء وإدارة سلسلة التوريد وتطوير ونشر حلول التكنولوجيا التي تؤثر على الأفراد والمجتمعات.',
    'humanRights.workplace.title': 'حقوق الإنسان في مكان العمل',
    'humanRights.workplace.content1': 'نحافظ على بيئة عمل تحترم وتحمي الحقوق الأساسية لجميع الموظفين. يشمل ذلك الحق في المعاملة العادلة والتحرر من التمييز وظروف العمل الآمنة والحق في التعبير عن المخاوف دون خوف من الانتقام.',
    'humanRights.workplace.content2': 'يمتد التزامنا إلى ضمان تكافؤ الفرص للتقدم المهني وممارسات التعويض العادلة وخلق بيئة شاملة حيث يتم الاحتفال بالتنوع ويمكن لجميع الأفراد الازدهار بغض النظر عن خلفيتهم أو هويتهم أو معتقداتهم.',
    'humanRights.privacy.title': 'الخصوصية والحقوق الرقمية',
    'humanRights.privacy.content1': 'في عصرنا الرقمي، تعد الخصوصية حقاً أساسياً من حقوق الإنسان. نحن ملتزمون بحماية حقوق الخصوصية لجميع الأفراد الذين نتعامل مع بياناتهم، سواء كانوا موظفينا أو عملاءنا أو المستخدمين النهائيين للحلول التي نطورها.',
    'humanRights.privacy.content2': 'تم تصميم حلولنا التكنولوجية وفقاً لمبادئ الخصوصية في التصميم، مما يضمن أن حماية البيانات مدمجة في كل نظام من الأساس. ننفذ تدابير أمنية قوية وممارسات شفافة لمعالجة البيانات التي تحترم الاستقلالية والموافقة الفردية.',
    'humanRights.community.title': 'التأثير المجتمعي وإمكانية الوصول',
    'humanRights.community.content1': 'نؤمن أن التكنولوجيا يجب أن تكون متاحة للجميع ولا يجب أن تخلق أو تستمر في عدم المساواة. تم تصميم حلولنا مع مراعاة إمكانية الوصول، مما يضمن أن الأفراد ذوي الإعاقة يمكنهم المشاركة الكاملة في العالم الرقمي.',
    'humanRights.community.content2': 'نعمل بنشاط على سد الفجوة الرقمية من خلال دعم المبادرات التي توفر الوصول إلى التكنولوجيا للمجتمعات المحرومة. يشمل التزامنا بحقوق الإنسان ضمان أن حلولنا التكنولوجية تعزز الإدماج الاجتماعي بدلاً من الاستبعاد.',
    'humanRights.ethical.title': 'التطوير التكنولوجي الأخلاقي',
    'humanRights.ethical.content1': 'نحن ملتزمون بتطوير التكنولوجيا التي تحترم حقوق الإنسان وتعزز الازدهار الإنساني. يشمل ذلك تجنب تطوير التكنولوجيات التي يمكن استخدامها لانتهاك حقوق الإنسان، مثل أنظمة المراقبة التي تنتهك الخصوصية أو أنظمة الذكاء الاصطناعي التي تستمر في التحيز والتمييز.',
    'humanRights.ethical.content2': 'يوجه إطارنا الأخلاقي جميع قرارات تطوير التكنولوجيا، مما يضمن أننا نأخذ في الاعتبار الآثار المحتملة لحقوق الإنسان لحلولنا. نجري تقييمات منتظمة لتأثير حقوق الإنسان ونحافظ على حوار مستمر مع أصحاب المصلحة لضمان أن تكنولوجيتنا تخدم مصالح الإنسانية الفضلى.',
    'humanRights.implementation.title': 'التنفيذ والمساءلة',
    'humanRights.implementation.content1': 'سياسة حقوق الإنسان هذه ليست مجرد وثيقة؛ إنها التزام حي يوجه عملياتنا اليومية. نوفر تدريباً منتظماً لجميع الموظفين حول مبادئ حقوق الإنسان ونحافظ على آليات قوية للإبلاغ عن أي مخاوف ومعالجتها.',
    'humanRights.implementation.content2': 'نحمل أنفسنا المسؤولية تجاه هذه المبادئ من خلال عمليات التدقيق المنتظمة ومشاركة أصحاب المصلحة والإبلاغ الشفاف عن أدائنا في حقوق الإنسان. التزامنا بحقوق الإنسان أساسي لهويتنا كشركة تكنولوجيا مسؤولة.',
    // Environmental Philosophy Page
    'environmental.badge': 'الريادة في التكنولوجيا الخضراء',
    'environmental.title': 'الفلسفة البيئية',
    'environmental.subtitle': 'نهجنا الشامل لتقليل التأثير البيئي وتعزيز الممارسات المستدامة في تطوير التكنولوجيا والعمليات وحلول العملاء.',
    'environmental.development.title': 'تطوير التكنولوجيا المستدامة',
    'environmental.development.content1': 'نؤمن بأن التكنولوجيا يجب أن تكون قوة للخير البيئي وليس مصدراً للأذى البيئي. ممارساتنا في التطوير تعطي الأولوية لكفاءة الطاقة وتحسين الموارد وتقليل التأثير البيئي إلى الحد الأدنى. كل حل نبتكره مصمم مع مبادئ الاستدامة في جوهره.',
    'environmental.development.content2': 'نهجنا في التطوير المستدام يشمل ممارسات البرمجة الخضراء والخوارزميات المحسنة التي تقلل متطلبات الحوسبة وخيارات البنية التحتية السحابية التي تقلل البصمة الكربونية. نستمر في البحث وتنفيذ التقنيات الجديدة التي يمكن أن تساعد في تقليل التأثير البيئي.',
    'environmental.carbon.title': 'تقليل البصمة الكربونية',
    'environmental.carbon.content1': 'نحن ملتزمون بتقليل بصمتنا الكربونية عبر جميع العمليات. يشمل ذلك استخدام مصادر الطاقة المتجددة لمكاتبنا وتنفيذ الأجهزة والبرامج الموفرة للطاقة واختيار مزودي الخدمات السحابية الذين يعطون الأولوية للاستدامة والطاقة المتجددة.',
    'environmental.carbon.content2': 'مبادراتنا لتقليل الكربون تشمل سياسات العمل عن بُعد التي تقلل انبعاثات التنقل والممارسات الرقمية الأولى التي تقلل استخدام الورق وتصاميم المكاتب الموفرة للطاقة. نقيس ونتابع بصمتنا الكربونية بانتظام ونضع أهدافاً طموحة للتقليل.',
    'environmental.cloud.title': 'الحوسبة السحابية الخضراء والبنية التحتية',
    'environmental.cloud.content1': 'نعطي الأولوية لحلول الحوسبة السحابية التي تعمل بالطاقة المتجددة وتديرها مزودو الخدمات الذين لديهم التزامات بيئية قوية. خياراتنا للبنية التحتية تُوجه بمقاييس الاستدامة، بما في ذلك كثافة الكربون وكفاءة الطاقة والشهادات البيئية.',
    'environmental.cloud.content2': 'نهجنا للبنية التحتية الخضراء يشمل الحوسبة الخالية من الخوادم لتقليل استخدام الموارد والتوسع التلقائي لمطابقة الطلب وتقليل الهدر واختيار مراكز البيانات بناءً على المعايير البيئية. نعمل مع العملاء لتحسين استخدامهم السحابي للأداء والتأثير البيئي على حد سواء.',
    'environmental.digital.title': 'الحلول الرقمية للتحديات البيئية',
    'environmental.digital.content1': 'نطور حلولاً تقنية تساعد عملاءنا على تقليل تأثيرهم البيئي. يشمل ذلك أنظمة إدارة الطاقة وتطبيقات تقليل النفايات وأدوات تحسين سلسلة التوريد ومنصات تقارير الاستدامة التي تمكن من اتخاذ قرارات بيئية أفضل.',
    'environmental.digital.content2': 'حلولنا التقنية البيئية تساعد الشركات على تتبع انبعاثاتها الكربونية وتحسين استخدام الموارد وتنفيذ الممارسات المستدامة. نؤمن بأن التكنولوجيا يمكن أن تكون أداة قوية لحماية البيئة والاستدامة.',
    'environmental.waste.title': 'تقليل النفايات والاقتصاد الدائري',
    'environmental.waste.content1': 'نتبنى مبادئ الاقتصاد الدائري في عملياتنا وتطوير التكنولوجيا. يشمل ذلك إطالة دورة حياة الأجهزة وتعزيز إعادة استخدام البرامج والوحداتية وتصميم الأنظمة التي يمكن تحديثها بسهولة بدلاً من استبدالها.',
    'environmental.waste.content2': 'مبادراتنا لتقليل النفايات تشمل ممارسات المكاتب الخالية من الورق وبرامج إعادة تدوير النفايات الإلكترونية والعمليات الرقمية الأولى التي تقلل استهلاك الموارد المادية. نشجع عملاءنا على تبني ممارسات مماثلة من خلال الحلول التي نطورها.',
    'environmental.education.title': 'التعليم البيئي والدعوة',
    'environmental.education.content1': 'نؤمن بقوة التعليم والدعوة لدفع التغيير البيئي. يحصل أعضاء فريقنا على تدريب منتظم على أفضل الممارسات البيئية ونشارك معرفتنا مع العملاء ومجتمع التكنولوجيا الأوسع.',
    'environmental.education.content2': 'نشارك بنشاط في المبادرات البيئية وندعم أبحاث التكنولوجيا الخضراء وندعو للسياسات التي تعزز تطوير التكنولوجيا المستدامة. هدفنا هو أن نكون قوة إيجابية للتغيير البيئي في صناعة التكنولوجيا.',
    'environmental.improvement.title': 'التحسين المستمر والابتكار',
    'environmental.improvement.content1': 'الاستدامة البيئية رحلة مستمرة وليس وجهة. نستمر في البحث عن التقنيات والممارسات الجديدة التي يمكن أن تقلل أكثر من تأثيرنا البيئي. جهودنا في الابتكار تركز على تطوير الحلول المتقدمة تقنياً والمسؤولة بيئياً.',
    'environmental.improvement.content2': 'نقيم بانتظام أداءنا البيئي ونضع أهدافاً طموحة للتحسين ونستثمر في التقنيات والممارسات التي تدفع مهمتنا للاستدامة. التزامنا بالمسؤولية البيئية يدفعنا للبحث المستمر عن طرق أفضل لخدمة عملائنا مع حماية كوكبنا.',
    // Social Philosophy Page
    'social.badge': 'مهمة التأثير الاجتماعي',
    'social.title': 'الفلسفة الاجتماعية',
    'social.subtitle': 'التزامنا بالمسؤولية الاجتماعية والتأثير الإيجابي على المجتمع من خلال حلول تقنية تمكن الأفراد وتقوي المجتمعات وتعزز العدالة الاجتماعية.',
    'social.good.title': 'التكنولوجيا من أجل الخير الاجتماعي',
    'social.good.content1': 'نؤمن بأن التكنولوجيا يجب أن تكون قوة للتغيير الاجتماعي الإيجابي، وتمكين الأفراد والمجتمعات من التغلب على التحديات وتحقيق إمكاناتهم الكاملة. فلسفتنا الاجتماعية تركز على استخدام خبرتنا التقنية لمعالجة المشاكل الحقيقية وخلق تأثير ذي معنى في المجتمع.',
    'social.good.content2': 'يمتد التزامنا بالخير الاجتماعي إلى ما هو أبعد من مشاريعنا التجارية لتشمل العمل التطوعي والشراكات المجتمعية والمبادرات التي تستفيد من التكنولوجيا لمعالجة عدم المساواة الاجتماعية وتحسين الوصول إلى التعليم والرعاية الصحية وتقوية مرونة المجتمع.',
    'social.inclusion.title': 'الشمولية الرقمية وإمكانية الوصول',
    'social.inclusion.content1': 'نحن ملتزمون بضمان أن فوائد التكنولوجيا متاحة لجميع أفراد المجتمع، بغض النظر عن خلفيتهم أو قدراتهم أو ظروفهم الاقتصادية. تركز مبادرات الشمولية الرقمية لدينا على كسر الحواجز وخلق حلول تقنية تخدم الجميع.',
    'social.inclusion.content2': 'تشمل جهود إمكانية الوصول لدينا تطوير حلول تعمل للأشخاص ذوي الإعاقة، وخلق واجهات متعددة اللغات، والتصميم لبيئات النطاق الترددي المنخفض. نؤمن أن التصميم الشامل يؤدي إلى حلول أفضل للجميع ويساعد في سد الفجوة الرقمية.',
    'social.community.title': 'المشاركة المجتمعية والشراكة',
    'social.community.content1': 'نشارك بنشاط مع المجتمعات المحلية والمنظمات لفهم احتياجاتها والمساهمة بخبرتنا لمعالجة التحديات المجتمعية. شراكاتنا المجتمعية تشمل المؤسسات التعليمية والمنظمات غير الربحية ومبادرات الحكومة المحلية.',
    'social.community.content2': 'تشمل مشاركتنا المجتمعية برامج الإرشاد للطلاب، وورش عمل تقنية لأعضاء المجتمع، ومشاريع تعاونية تجمع بين مهاراتنا التقنية والمعرفة المحلية والاحتياجات. نؤمن أن المجتمعات القوية تؤدي إلى مجتمعات أقوى.',
    'social.education.title': 'التعليم ومشاركة المعرفة',
    'social.education.content1': 'نؤمن بالقوة التحويلية للتعليم وملتزمون بمشاركة المعرفة والخبرة مع المجتمع الأوسع. تشمل مبادراتنا التعليمية معسكرات البرمجة وورش العمل التقنية وبرامج الإرشاد التي تساعد الآخرين على تطوير المهارات التقنية.',
    'social.education.content2': 'تشمل جهود مشاركة المعرفة لدينا المساهمات مفتوحة المصدر، ومنشورات المدونات التقنية، وعروض المؤتمرات، وفرص التعلم التعاوني. نؤمن أن مشاركة المعرفة تقوي مجتمع التكنولوجيا بأكمله وتخلق فرصاً للابتكار.',
    'social.ethical.title': 'التطوير التقني الأخلاقي',
    'social.ethical.content1': 'نحن ملتزمون بتطوير تقنيات تحترم الكرامة الإنسانية وتحمي الخصوصية وتعزز العدالة الاجتماعية. تشمل ممارسات التطوير الأخلاقية لدينا مبادئ الخصوصية بالتصميم واختبار التحيز والنظر في الآثار الاجتماعية لحلولنا.',
    'social.ethical.content2': 'يوجه إطارنا الأخلاقي جميع قرارات تطوير التكنولوجيا، مما يضمن أننا نأخذ في الاعتبار الآثار الاجتماعية المحتملة لحلولنا. نجري مراجعات أخلاقية منتظمة ونحافظ على حوار مستمر مع أصحاب المصلحة لضمان أن تكنولوجيتنا تخدم مصالح المجتمع الفضلى.',
    'social.economic.title': 'التمكين الاقتصادي من خلال التكنولوجيا',
    'social.economic.content1': 'نؤمن بأن التكنولوجيا يمكن أن تكون أداة قوية للتمكين الاقتصادي، وتساعد الأفراد والشركات على الوصول إلى فرص جديدة وتحسين آفاقهم الاقتصادية. تم تصميم حلولنا لخلق قيمة اقتصادية وتمكين النمو المستدام.',
    'social.economic.content2': 'تشمل مبادرات التمكين الاقتصادي لدينا دعم الشركات الصغيرة بحلول تقنية، وخلق منصات تمكن من فرص اقتصادية جديدة، وتطوير أدوات تساعد الأفراد والمجتمعات على المشاركة في الاقتصاد الرقمي.',
    'social.global.title': 'المواطنة العالمية والمسؤولية',
    'social.global.content1': 'كشركة تقنية عالمية، ندرك مسؤوليتنا في المساهمة إيجابياً في المجتمعات التي نعمل فيها والمجتمع العالمي الأوسع. تشمل جهود المواطنة العالمية لدينا دعم مشاريع التنمية الدولية والمساهمة في معايير التكنولوجيا العالمية.',
    'social.global.content2': 'نؤمن أن شركات التكنولوجيا لديها مسؤولية خاصة لاستخدام مواردها وخبرتها لمعالجة التحديات العالمية. تشمل مبادرات المواطنة العالمية لدينا دعم التعليم في البلدان النامية، والمساهمة في مشاريع مفتوحة المصدر، والمشاركة في تطوير معايير التكنولوجيا الدولية.',
    // Corporate Governance Page
    'governance.badge': 'القيادة الأخلاقية',
    'governance.title': 'الحوكمة المؤسسية',
    'governance.subtitle': 'إطار عمل الحوكمة الخاص بنا لضمان الشفافية والمساءلة والممارسات التجارية الأخلاقية التي تبني الثقة مع أصحاب المصلحة وتدفع النجاح المستدام على المدى الطويل.',
    'governance.board.title': 'قيادة مجلس الإدارة والإشراف',
    'governance.board.content1': 'الحوكمة المؤسسية لدينا مبنية على أساس قيادة مجلس إدارة قوية وإشراف مستقل. يقدم مجلس إدارتنا التوجيه الاستراتيجي، ويضمن المساءلة، ويشرف على تنفيذ سياسات وإجراءات الحوكمة الخاصة بنا.',
    'governance.board.content2': 'يحتفظ المجلس بلجان مستقلة للتدقيق والتنفيذ والشؤون الحوكمية، مما يضمن أن جميع القرارات الرئيسية تخضع للإشراف والمراجعة المناسبة. هيكل الحوكمة لدينا يعزز الشفافية والمساءلة والمواءمة مع مصالح أصحاب المصلحة.',
    'governance.transparency.title': 'الشفافية والإفصاح',
    'governance.transparency.content1': 'نحافظ على أعلى معايير الشفافية في جميع عملياتنا التجارية والاتصالات. تشمل ممارسات الإفصاح لدينا التقارير المنتظمة عن الأداء المالي والعمليات التجارية والمسائل الحوكمية الرئيسية لضمان إعلام أصحاب المصلحة بشكل جيد.',
    'governance.transparency.content2': 'تمتد التزامات الشفافية لدينا إلى علاقاتنا مع العملاء، حيث نقدم اتصالاً واضحاً حول تقدم المشاريع والتحديات والنتائج. نؤمن أن الاتصال الشفاف يبني الثقة ويمكن من اتخاذ قرارات أفضل لجميع الأطراف المعنية.',
    'governance.risk.title': 'إدارة المخاطر والامتثال',
    'governance.risk.content1': 'نحتفظ بأنظمة شاملة لإدارة المخاطر تحدد وتقييم وتخفف المخاطر عبر جميع جوانب عملياتنا التجارية. يتضمن إطار إدارة المخاطر لدينا التقييمات المنتظمة والتخطيط للطوارئ والمراقبة المستمرة لمؤشرات المخاطر الرئيسية.',
    'governance.risk.content2': 'برنامج الامتثال لدينا يضمن الالتزام بجميع القوانين واللوائح والمعايير الصناعية المعمول بها. نحتفظ بضوابط داخلية قوية ونقوم بمراجعات منتظمة لضمان الامتثال للمتطلبات القانونية والتنظيمية في جميع الولايات القضائية التي نعمل فيها.',
    'governance.ethics.title': 'الممارسات التجارية الأخلاقية',
    'governance.ethics.content1': 'نحن ملتزمون بإجراء الأعمال بأعلى المعايير الأخلاقية، مسترشدين بمدونة قواعد السلوك والسياسات الأخلاقية. إطارنا الأخلاقي يغطي جميع جوانب العمليات التجارية، من علاقات العملاء إلى سلوك الموظفين وشراكات الموردين.',
    'governance.ethics.content2': 'تشمل ممارساتنا الأخلاقية المنافسة العادلة والتدبير المسؤول وإجراءات مكافحة الفساد وحماية المعلومات السرية. نقدم تدريباً أخلاقياً منتظماً لجميع الموظفين ونحتفظ بقنوات للإبلاغ عن المخاوف الأخلاقية دون خوف من الانتقام.',
    'governance.stakeholder.title': 'إشراك أصحاب المصلحة والتواصل',
    'governance.stakeholder.content1': 'نحتفظ بإشراك نشط مع جميع أصحاب المصلحة، بما في ذلك العملاء والموظفين والمستثمرين والشركاء والمجتمعات التي نعمل فيها. يشمل إشراك أصحاب المصلحة لدينا التواصل المنتظم وآليات التغذية الراجعة وعمليات اتخاذ القرار التعاونية.',
    'governance.stakeholder.content2': 'ممارسات التواصل لدينا تضمن أن أصحاب المصلحة على علم بأداء أعمالنا والاتجاه الاستراتيجي والتطورات الرئيسية. نقدر مدخلات أصحاب المصلحة وندمج التغذية الراجعة في عمليات اتخاذ القرار لضمان المواءمة مع مصالح أصحاب المصلحة.',
    'governance.performance.title': 'إدارة الأداء والمساءلة',
    'governance.performance.content1': 'نحتفظ بأنظمة قوية لإدارة الأداء تضمن المساءلة على جميع مستويات المنظمة. يتضمن إطار الأداء لدينا أهدافاً واضحة ومراجعات منتظمة ونتائج لكل من تحقيق وعدم تحقيق الأهداف.',
    'governance.performance.content2': 'تشمل تدابير المساءلة لدينا تعويضات التنفيذيين المرتبطة بالأداء وتقييمات مجلس الإدارة المنتظمة والتقييمات المستقلة لفعالية الإدارة. نؤمن أن أنظمة المساءلة القوية تحرك أداءً أفضل وتخلق قيمة لجميع أصحاب المصلحة.',
    'governance.improvement.title': 'التحسين المستمر والابتكار',
    'governance.improvement.content1': 'نسعى باستمرار لتحسين ممارسات الحوكمة لدينا والتكيف مع البيئات التجارية المتغيرة وتوقعات أصحاب المصلحة. يتم مراجعة وتحديث إطار الحوكمة لدينا بانتظام لضمان أنه يبقى فعالاً وذا صلة.',
    'governance.improvement.content2': 'نقيس ممارسات الحوكمة لدينا مقابل أفضل الممارسات في الصناعة وندمج التغذية الراجعة من أصحاب المصلحة لدفع التحسين المستمر. التزامنا بتميز الحوكمة يضمن أن نحتفظ بثقة وثقة جميع أصحاب المصلحة بينما ندفع نجاح الأعمال المستدام.',
    // Research & Development Page
    'research.badge': 'مركز الابتكار',
    'research.title': 'البحث والتطوير',
    'research.subtitle': 'التزامنا بتطوير التكنولوجيا من خلال البحث المتقدم والمبادرات الابتكارية وتطوير حلول الجيل القادم التي تشكل مستقبل التحول الرقمي.',
    'research.strategy.title': 'استراتيجية الابتكار والرؤية',
    'research.strategy.content1': 'استراتيجية البحث والتطوير لدينا مدفوعة برؤية لإنشاء حلول تقنية لا تلبي احتياجات اليوم فحسب، بل تتوقع وتعالج تحديات الغد. نستثمر بشكل كبير في البحث والتطوير للحفاظ على موقعنا في طليعة الابتكار التقني.',
    'research.strategy.content2': 'نهجنا الابتكاري يجمع بين البحث الأساسي والتطوير التطبيقي، مما يضمن أن اكتشافاتنا تترجم إلى حلول عملية تفيد عملائنا والمجتمع. نركز على التقنيات الناشئة التي لديها القدرة على تحويل الصناعات وخلق فرص جديدة.',
    'research.emerging.title': 'بحث التقنيات الناشئة',
    'research.emerging.content1': 'نبحث بنشاط في التقنيات الناشئة بما في ذلك الذكاء الاصطناعي والتعلم الآلي وسلسلة الكتل والحوسبة الكمية والتحليلات المتقدمة. تعمل فرق البحث لدينا على تطوير خوارزميات جديدة وتحسين التقنيات الموجودة وإنشاء تطبيقات مبتكرة.',
    'research.emerging.content2': 'تشمل مبادرات البحث لدينا استكشاف إمكانات الحوسبة الطرفية والتحقيق في حلول التكنولوجيا المستدامة وتطوير أساليب جديدة للأمن السيبراني وخصوصية البيانات. نتعاون مع المؤسسات الأكاديمية ومنظمات البحث لتطوير أحدث التقنيات.',
    'research.development.title': 'تطوير المنتجات والنماذج الأولية',
    'research.development.content1': 'عملية تطوير المنتجات لدينا تجمع بين البحث الدقيق ومنهجيات التطوير المرنة لإنشاء حلول مبتكرة. نستخدم النماذج الأولية السريعة والتطوير التكراري للتحقق من المفاهيم وتحسين المنتجات قبل التنفيذ على نطاق واسع.',
    'research.development.content2': 'تعمل فرق التطوير لدينا بشكل وثيق مع العملاء والمستخدمين النهائيين لضمان أن منتجاتنا تلبي احتياجات العالم الحقيقي وتوفر قيمة ملموسة. نستخدم مبادئ التصميم المتمحور حول المستخدم وحلقات التغذية الراجعة المستمرة لإنشاء حلول متقدمة تقنياً وسهلة الاستخدام.',
    'research.sustainable.title': 'تطوير التكنولوجيا المستدامة',
    'research.sustainable.content1': 'جزء كبير من جهود البحث والتطوير لدينا يركز على تطوير حلول التكنولوجيا المستدامة التي تقلل من التأثير البيئي مع تعظيم الكفاءة والأداء. نبحث في تقنيات الحوسبة الخضراء والخوارزميات الموفرة للطاقة ومعماريات البرمجيات المستدامة.',
    'research.sustainable.content2': 'تشمل مبادرات التطوير المستدام لدينا إنشاء تطبيقات محايدة للكربون وتحسين استخدام موارد الحوسبة السحابية وتطوير تقنيات تساعد المنظمات الأخرى على تقليل بصمتها البيئية. نؤمن بأن التكنولوجيا يجب أن تكون قوة للخير البيئي.',
    'research.collaboration.title': 'التعاون والشراكات',
    'research.collaboration.content1': 'نتعاون بنشاط مع الجامعات ومؤسسات البحث وشركات التكنولوجيا والمنظمات الصناعية لتطوير البحث ومشاركة المعرفة. شراكاتنا تمكننا من الوصول إلى أحدث الأبحاث ومشاركة الموارد وتسريع الابتكار.',
    'research.collaboration.content2': 'نهجنا التعاوني يشمل مشاريع البحث المشتركة وبرامج نقل التكنولوجيا والمشاركة في اتحادات الصناعة. نؤمن بأن أفضل الابتكارات تأتي من وجهات نظر متنوعة وجهود تعاونية تجمع بين مجالات مختلفة من الخبرة.',
    'research.ip.title': 'الملكية الفكرية وحماية الابتكار',
    'research.ip.content1': 'نحمي ابتكاراتنا من خلال إدارة الملكية الفكرية الاستراتيجية، بما في ذلك براءات الاختراع والعلامات التجارية والأسرار التجارية. استراتيجية الملكية الفكرية لدينا توازن بين حماية ابتكاراتنا والتعاون المفتوح ومشاركة المعرفة حيثما كان ذلك مناسباً.',
    'research.ip.content2': 'نساهم أيضاً في مشاريع المصادر المفتوحة ونشارك نتائج البحث التي يمكن أن تفيد مجتمع التكنولوجيا الأوسع. نهجنا في إدارة الملكية الفكرية يعكس التزامنا بتطوير التكنولوجيا مع حماية مزايانا التنافسية واستثمارنا في الابتكار.',
    'research.roadmap.title': 'خارطة طريق التكنولوجيا المستقبلية',
    'research.roadmap.content1': 'خارطة طريق البحث والتطوير لدينا تركز على التقنيات التي ستكون حاسمة في السنوات القادمة، بما في ذلك الذكاء الاصطناعي والحوسبة الكمية والحوسبة الطرفية وتقنيات الشبكات من الجيل القادم. نستثمر في التحسينات التدريجية والابتكارات الثورية.',
    'research.roadmap.content2': 'نراقب باستمرار اتجاهات التكنولوجيا وتطورات السوق لضمان أن استثمارات البحث والتطوير لدينا تتماشى مع الفرص المستقبلية واحتياجات العملاء. نهجنا البحثي المرن يسمح لنا بالتكيف بسرعة مع الفرص الجديدة وتحويل جهودنا عندما تظهر تقنيات جديدة واعدة.',
    'research.impact.title': 'قياس التأثير والنجاح',
    'research.impact.content1': 'نقيس نجاح جهود البحث والتطوير لدينا من خلال المقاييس الكمية والتقييمات النوعية. إطار التقييم لدينا يشمل مخرجات الابتكار واعتماد التكنولوجيا ورضا العملاء والمساهمة في نظام التكنولوجيا الأوسع.',
    'research.impact.content2': 'التزامنا بالتحسين المستمر في البحث والتطوير يضمن أن نحافظ على موقعنا كقائد تقني مع المساهمة في تقدم الصناعة. نراجع بانتظام أولويات البحث لدينا ونعدل استثماراتنا لتعظيم التأثير وخلق القيمة.',
    // Human Capital Initiatives Page
    'humanCapital.badge': 'نهج الناس أولاً',
    'humanCapital.title': 'مبادرات رأس المال البشري',
    'humanCapital.subtitle': 'برامج ومبادرات شاملة تركز على تطوير الموظفين والرفاهية وخلق بيئة عمل شاملة تمكن من أعظم أصولنا - موظفينا.',
    'humanCapital.development.title': 'برامج التطوير المهني',
    'humanCapital.development.content1': 'نستثمر بكثافة في النمو والتطوير المستمر لأعضاء فريقنا. تشمل برامج التطوير المهني الشاملة لدينا التدريب التقني وتطوير القيادة وتعزيز المهارات الشخصية لضمان بقاء موظفينا في طليعة مجالاتهم.',
    'humanCapital.development.content2': 'تشمل مبادرات التطوير لدينا برامج الإرشاد وفرص المشاريع متعددة الوظائف وحضور المؤتمرات ودعم الشهادات والوصول إلى أحدث الأدوات والتقنيات. نؤمن أن الاستثمار في نمو موظفينا يترجم مباشرة إلى نتائج أفضل لعملائنا والشركة.',
    'humanCapital.wellbeing.title': 'رفاهية الموظفين والتوازن بين العمل والحياة',
    'humanCapital.wellbeing.content1': 'ندرك أن رفاهية الموظفين أساسية للسعادة الشخصية والنجاح المهني على حد سواء. تشمل مبادرات الرفاهية لدينا ترتيبات العمل المرنة وبرامج دعم الصحة العقلية والأنشطة الصحية والفوائد الصحية الشاملة.',
    'humanCapital.wellbeing.content2': 'تشمل سياسات التوازن بين العمل والحياة لدينا خيارات العمل عن بُعد والساعات المرنة وسياسات الإجازات السخية والممارسات الصديقة للعائلة. نفهم أن موظفينا لديهم حياة خارج العمل، ونحن ندعمهم في الحفاظ على توازن صحي بين التزاماتهم المهنية والشخصية.',
    'humanCapital.diversity.title': 'التنوع والمساواة والشمولية',
    'humanCapital.diversity.content1': 'نحن ملتزمون بخلق بيئة عمل شاملة حيث يتم الاحتفال بالتنوع ويشعر الجميع بالتقدير والاحترام. تركز مبادرات التنوع والمساواة والشمولية لدينا على التوظيف من مجموعات المواهب المتنوعة وتوفير فرص متساوية للتقدم وترسيخ بيئة الانتماء.',
    'humanCapital.diversity.content2': 'تشمل جهود الشمولية لدينا تدريب التحيز اللاواعي وممارسات التوظيف المتنوعة ومجموعات موارد الموظفين والتقييمات المنتظمة لثقافة مكان العمل. نؤمن أن المنظورات المتنوعة تؤدي إلى ابتكار أفضل وحل المشاكل والنتائج التجارية.',
    'humanCapital.knowledge.title': 'ثقافة مشاركة المعرفة والابتكار',
    'humanCapital.knowledge.content1': 'نعزز ثقافة مشاركة المعرفة والتعلم المستمر. تشمل مبادرات الابتكار لدينا المحادثات التقنية المنتظمة والهاكاثونات وتحديات الابتكار وفرص للموظفين لمتابعة مشاريع الشغف التي يمكن أن تفيد الشركة وعملائنا.',
    'humanCapital.knowledge.content2': 'نشجع التعاون بين الفرق ونوفر منصات للموظفين لمشاركة خبراتهم والتعلم من الآخرين والمساهمة في المعرفة الجماعية للمنظمة. هذه الثقافة من المشاركة والابتكار تدفع كل من النمو الشخصي وتقدم الشركة.',
    'humanCapital.recognition.title': 'التقدير والتقدم المهني',
    'humanCapital.recognition.content1': 'نؤمن بتقدير ومكافأة التميز. تشمل برامج التقدير لدينا المكافآت القائمة على الأداء وجوائز الإنجاز والاعتراف العام بالمساهمات المتميزة. نوفر مسارات واضحة للتقدم المهني وندعم الموظفين في تحقيق أهدافهم المهنية.',
    'humanCapital.recognition.content2': 'يشمل إطار التطوير المهني لدينا مراجعات الأداء المنتظمة وتحديد الأهداف وتقييمات المهارات والخطط التطويرية الشخصية. نستثمر في نجاح الموظفين المهني طويل الأجل، مع العلم أن نموهم يساهم مباشرة في نجاح الشركة.',
    'humanCapital.community.title': 'المشاركة المجتمعية والتأثير الاجتماعي',
    'humanCapital.community.content1': 'نشجع موظفينا على التفاعل مع مجتمعاتهم والمساهمة في القضايا الاجتماعية. تشمل مبادرات المشاركة المجتمعية لدينا إجازة التطوع وبرامج المسؤولية الاجتماعية للشركات ودعم الأنشطة الخيرية الشخصية للموظفين.',
    'humanCapital.community.content2': 'نؤمن أن الموظفين المشاركين الذين يساهمون في مجتمعاتهم أكثر إشباعاً ويحضرون تلك الطاقة الإيجابية إلى عملهم. تسمح برامج التأثير الاجتماعي لدينا للموظفين باستخدام مهاراتهم وخبراتهم لإحداث فرق في العالم.',
  },
  KO: {
    'nav.home': '홈',
    'nav.company': '회사',
    'nav.services': '서비스',
    'nav.community': '커뮤니티',
    'nav.researches': '연구',
    'nav.insights': '인사이트',
    'nav.careers': '채용 탐색',
    'nav.contact': '비즈니스에 대해 이야기합시다',
    'hero.title': '성장을 추진하는 디지털 솔루션',
    'hero.subtitle': '최첨단 기술과 혁신적인 솔루션으로 비즈니스를 변혁하세요.',
    'hero.cta': '시작하기',
    'hero.register': '등록',
    'hero.badge': 'Upvista Digital - 파키스탄 최고의 소프트웨어 에이전시',
    'hero.service1': '웹 개발',
    'hero.service2': '소프트웨어 엔지니어링',
    'hero.service3': '그래픽 & 디자인',
    'hero.service4': 'AI 자동화',
    'hero.stats1': '완료된 프로젝트',
    'hero.stats2': '고객 평가',
    'hero.stats3': '지원',
    // Company dropdown
    'dropdown.company.about': '회사 소개',
    'dropdown.company.profile': '회사 프로필',
    'dropdown.company.sustainability': '지속가능성 및 가치',
    'dropdown.company.investors': '투자자 관계',
    'dropdown.company.partners': '파트너십',
    'dropdown.company.leadership': '리더십',
    'dropdown.company.contact': '문의하기',
    // Company Profile Page
    'companyProfile.badge': '기업 정보',
    'companyProfile.title': '회사 프로필',
    'companyProfile.subtitle': 'Upvista Digital의 기업 기반, 리더십 구조 및 비즈니스 운영에 대한 포괄적인 개요.',
    'companyProfile.tradeName': '상호',
    'companyProfile.businessDescription': '사업 설명',
    'companyProfile.ceo': '최고경영자',
    'companyProfile.founded': '설립일',
    'companyProfile.fiscalYearEnd': '회계연도 종료',
    'companyProfile.headOffice': '본사',
    'companyProfile.legalStatus': '법적 지위',
    'companyProfile.serviceAreas': '서비스 지역',
    'companyProfile.industryFocus': '산업 초점',
    'companyProfile.revenueModel': '수익 모델',
    'companyProfile.clientPortfolio': '클라이언트 포트폴리오',
    'companyProfile.qualityStandards': '품질 기준',
    'companyProfile.businessDesc1': '디지털 솔루션의 개발, 판매 및 운영.',
    'companyProfile.businessDesc2': '웹 개발 및 소프트웨어 엔지니어링 서비스의 개발, 판매 및 제공.',
    'companyProfile.ceoName': 'Hamza Hafeez',
    'companyProfile.foundedDate': '2025년 7월 1일',
    'companyProfile.fiscalEnd': '6월 30일',
    'companyProfile.headOfficeLocation': '라호르, 파키스탄',
    'companyProfile.legalStatusType': '개인사업자',
    'companyProfile.serviceAreasGlobal': '글로벌',
    'companyProfile.industryTypes': '기술 서비스, 디지털 솔루션, 소프트웨어 개발',
    'companyProfile.revenueType': '서비스 기반',
    'companyProfile.clientCount': '다양한 산업 분야에서 50개 이상의 성공적인 프로젝트',
    'companyProfile.qualityRating': '4.9/5 클라이언트 만족도 평가',
    // Services dropdown
    'dropdown.services.about': '서비스 소개',
    'dropdown.services.software': '소프트웨어 개발',
    'dropdown.services.web': '웹 개발',
    'dropdown.services.ai': 'AI 및 자동화',
    'dropdown.services.cloud': '클라우드',
    'dropdown.services.design': '그래픽 및 디자인',
    'dropdown.services.marketing': '디지털 마케팅',
    // Community dropdown
    'dropdown.community.about': '커뮤니티 소개',
    'dropdown.community.events': '이벤트',
    'dropdown.community.members': '커뮤니티 멤버',
    'dropdown.community.achievements': '성과',
    'dropdown.community.trainings': '교육',
    'dropdown.community.join': '커뮤니티 참여',
    // Researches dropdown
    'dropdown.researches.about': 'Upvista 연구 소개',
    'dropdown.researches.cortex': '프로젝트 코르텍스',
    'dropdown.researches.agi': 'AGI 연구',
    // Insights dropdown
    'dropdown.insights.caseStudies': '사례 연구',
    'dropdown.insights.news': '뉴스',
    'dropdown.insights.blogs': '블로그',
    'dropdown.insights.whitepapers': '화이트페이퍼',
    'dropdown.insights.events': '이벤트',
    // Homepage sections - Korean
    'home.transform.title': '디지털 존재감 변환',
    'home.transform.subtitle': '행동을 영감하는 경험 설계',
    'home.transform.description': '아이디어에서 실행까지, 우리는 단순히 웹사이트를 구축하는 것이 아니라 사람들과 연결되고 신뢰를 구축하며 방문자를 충성 고객으로 전환하는 여정을 구축합니다.',
    'home.transform.exploreServices': '서비스 탐색',
    'home.transform.contactUs': '문의하기',
    'home.partnership.title': '디지털 성장을 위한 파트너십',
    'home.partnership.description': '우리는 단순히 프로젝트를 제공하는 것이 아니라 디지털 우선 세계에서 비즈니스가 번영할 수 있도록 하는 장기적 파트너십을 구축합니다. 우리의 접근 방식은 협력적이고 투명하며 귀하의 성공에 집중합니다.',
    'home.partnership.explore': '파트너십 탐색',
    'home.partnership.premium': '프리미엄 협업',
    'home.partnership.subtitle': '우수성의 새로운 기준을 설정하는 디지털 솔루션을 공동 창조합시다.',
    'home.expertise.title': '결과를 이끄는 전문성',
    'home.expertise.subtitle': '디지털 니치 전반의 진정한 전문성',
    'home.expertise.description': '다양한 산업과 비즈니스 모델에 맞춤형 솔루션을 제공합니다. 우리 팀은 각 니치에서 깊은 실무 경험을 가져오며, 허풍 없이 입증된 결과만을 제공합니다.',
    'home.expertise.ecommerce.title': '전자상거래',
    'home.expertise.ecommerce.description': 'B2C 및 B2B 브랜드를 위한 맞춤형 온라인 스토어, 결제 통합, 제품 관리 및 전환 최적화.',
    'home.expertise.saas.title': 'SaaS 플랫폼',
    'home.expertise.saas.description': '사용자 관리, 청구, 분석 및 클라우드 통합을 갖춘 강력하고 확장 가능한 SaaS 솔루션.',
    'home.expertise.healthcare.title': '의료',
    'home.expertise.healthcare.description': 'HIPAA 준수 앱, 환자 포털, 원격의료 및 안전한 건강 데이터 관리.',
    'home.expertise.edtech.title': '에드테크',
    'home.expertise.edtech.description': '학습 관리 시스템, 이러닝 플랫폼 및 대화형 교육 도구.',
    'home.expertise.fintech.title': '핀테크',
    'home.expertise.fintech.description': '안전한 결제 게이트웨이, 디지털 지갑 및 금융 분석 플랫폼.',
    'home.expertise.portfolio.title': '포트폴리오 및 크리에이티브',
    'home.expertise.portfolio.description': '개인 포트폴리오, 크리에이티브 에이전시 사이트 및 아티스트와 전문가를 위한 디지털 쇼케이스.',
    'home.expertise.explore': '솔루션 탐색',
    'home.services.title': '핵심 서비스',
    'home.services.subtitle': '결과를 이끄는 디지털 솔루션',
    'home.services.description': '개념에서 배포까지, 비즈니스를 변환하고 디지털 환경에서 성장을 가속화하는 포괄적인 디지털 솔루션을 제공합니다.',
    'home.services.software.title': '소프트웨어 개발',
    'home.services.software.description': '최첨단 기술로 구축된 맞춤형 소프트웨어 솔루션. 웹 애플리케이션부터 데스크톱 소프트웨어까지, 확장 가능하고 유지보수가 가능한 코드를 제공합니다.',
    'home.services.software.learnMore': '자세히 보기',
    'home.services.web.title': '웹 개발',
    'home.services.web.description': '탁월한 사용자 경험을 제공하고 비즈니스 성장을 촉진하는 현대적이고 반응형 웹사이트 및 웹 애플리케이션.',
    'home.services.web.learnMore': '자세히 보기',
    'home.services.cloud.title': '클라우드 솔루션',
    'home.services.cloud.description': '비즈니스 운영과 확장성을 최적화하는 포괄적인 클라우드 인프라, 마이그레이션 및 관리 서비스.',
    'home.services.cloud.learnMore': '자세히 보기',
    'home.services.ai.title': 'AI 및 자동화',
    'home.services.ai.description': '프로세스를 간소화하고 의사결정 능력을 향상시키는 지능형 자동화 솔루션 및 AI 기반 애플리케이션.',
    'home.services.ai.learnMore': '자세히 보기',
    'home.services.design.title': '그래픽 및 디자인',
    'home.services.design.description': '디지털 환경에서 브랜드를 돋보이게 하는 전문적인 그래픽 디자인, 브랜딩 및 시각적 아이덴티티 서비스.',
    'home.services.design.learnMore': '자세히 보기',
    'home.services.marketing.title': '디지털 마케팅',
    'home.services.marketing.description': '온라인 도달 범위와 ROI를 극대화하는 전략적 디지털 마케팅 캠페인, SEO 최적화, 소셜 미디어 관리 및 성과 분석.',
    'home.services.marketing.learnMore': '자세히 보기',
    'home.services.exploreAll': '모든 서비스 탐색',
    'home.webDesign.title': '웹 디자인 전문가',
    'home.webDesign.subtitle': '확신을 가지고 디지털 존재감 확립',
    'home.webDesign.description': 'Upvista는 단순히 훌륭하게 보이는 것이 아니라 측정 가능한 성장과 지속적인 영향을 제공하는 강력한 디지털 경험을 만듭니다.',
    'home.webDesign.getStarted': '지금 시작하기',
    'home.webDesign.viewWork': '우리 작품 보기',
    'home.testimonials.title': '고객 후기',
    'home.testimonials.subtitle': '사용자들이 말하는 것',
    'home.testimonials.description': '고객들이 우리에 대해 말하는 것을 들어보세요.',
    'home.testimonials.testimonial1': '그들의 팀이 우리를 위해 아름답고 기능적인 웹사이트를 제작했습니다. 우리의 가시성과 고객 신뢰를 극적으로 향상시켰습니다.',
    'home.testimonials.testimonial2': '전환되는 랜딩 페이지가 필요했는데 그들이 제공했습니다. 깔끔한 디자인, 빠른 로딩, 완벽하게 최적화되었습니다.',
    'home.testimonials.testimonial3': 'UI/UX 디자인이 우리의 기대를 뛰어넘었습니다. 직관적인 레이아웃과 일관된 브랜딩이 우리의 디지털 제품을 향상시키는 데 도움이 되었습니다.',
    'home.testimonials.testimonial4': '브랜딩부터 웹사이트 개발까지 모든 것이 창의성과 전문성으로 처리되었습니다.',
    'home.testimonials.testimonial5': '그들의 랜딩 페이지 디자인이 전환율을 35% 증가시켰습니다—시각적으로 놀랍고 모바일 친화적입니다.',
    'home.testimonials.testimonial6': '훌륭한 협업과 명확한 프로세스. 그들은 우리의 요구사항을 이해하고 우리 브랜드를 반영하는 맞춤형 솔루션을 구축했습니다.',
    'home.testimonials.testimonial7': '전문적인 팀과 정시 납품. 우리의 브랜딩은 이제 현대적이고 대담하며 모든 플랫폼에서 일관됩니다.',
    'home.testimonials.testimonial8': '그들은 우리의 브랜드 리뉴얼과 웹사이트 재설계를 도왔고, 결과는 돋보이는 세련되고 현대적인 경험이었습니다.',
    'home.testimonials.testimonial9': 'UI/UX 개편이 우리의 서비스 제공에 명확성을 가져왔습니다. 우리 사용자들은 이제 더 오래 머물고 더 많이 탐색합니다.',
    'home.whyChoose.title': '왜 우리를 선택해야 하는가',
    'home.whyChoose.description': '우리는 현대 비즈니스를 위한 저렴하고 맞춤형이며 확장 가능한 디지털 솔루션을 빠르게 구축합니다.',
    'home.whyChoose.transparentPricing': '투명한 가격',
    'home.whyChoose.fixedDeadlines': '고정 마감일',
    'home.whyChoose.cleanDesign': '깔끔한 디자인',
    'home.whyChoose.freeConsultation': '무료 상담',
    'home.whyChoose.longTermSupport': '장기 지원',
    'home.whyChoose.flexibleTech': '유연한 기술 스택',
    'home.palestine.title': 'Upvista는 팔레스타인과 그 국민과 함께 섭니다',
    'home.join.title': '참여하기',
    // Footer translations
    'footer.description': '최첨단 디지털 솔루션으로 비즈니스를 강화합니다. 혁신적인 소프트웨어 개발, 포괄적인 웹 서비스, 성장과 성공을 촉진하는 변혁적인 기술 파트너십을 제공합니다.',
    'footer.paymentMethods': '결제 방법',
    'footer.payoneer': 'Payoneer',
    'footer.bankTransfer': '은행 송금',
    'footer.jazzCash': 'JazzCash',
    'footer.easyPaisa': 'EasyPaisa',
    'footer.company': '회사',
    'footer.aboutUs': '회사 소개',
    'footer.companyProfile': '회사 프로필',
    'footer.sustainability': '지속가능성 및 가치',
    'footer.investorRelations': '투자자 관계',
    'footer.partnerships': '파트너십',
    'footer.leadership': '리더십',
    'footer.contactUs': '문의하기',
    'footer.careers': '채용',
    'footer.services': '서비스',
    'footer.allServices': '모든 서비스',
    'footer.softwareDevelopment': '소프트웨어 개발',
    'footer.webDevelopment': '웹 개발',
    'footer.aiAutomation': 'AI 및 자동화',
    'footer.cloudSolutions': '클라우드 솔루션',
    'footer.graphicsDesign': '그래픽 및 디자인',
    'footer.digitalMarketing': '디지털 마케팅',
    'footer.consultService': '서비스 상담',
    'footer.communityResources': '커뮤니티 및 리소스',
    'footer.aboutCommunity': '커뮤니티 소개',
    'footer.events': '이벤트',
    'footer.communityMembers': '커뮤니티 멤버',
    'footer.trainings': '교육',
    'footer.research': '연구',
    'footer.projectCortex': '프로젝트 코르텍스',
    'footer.blog': '블로그',
    'footer.faq': 'FAQ',
    'footer.whatsappUs': 'WhatsApp으로 연락',
    'footer.linkedinUs': 'LinkedIn으로 연락',
    'footer.messengerUs': 'Messenger로 연락',
    'footer.copyright': '© 2025 Upvista Digital. 모든 권리 보유.',
    'footer.termsConditions': '이용약관',
    'footer.privacyPolicy': '개인정보처리방침',
    'footer.trademarkCopyright': '상표 및 저작권',
    'footer.dataProtection': '데이터 보호',
    'carousel.technologies': '사용 기술',
    // Sustainability Page
    'sustainability.badge': '지속 가능한 미래',
    'sustainability.title': '지속가능성과 가치',
    'sustainability.subtitle': '환경적 책임, 사회적 영향, 윤리적 비즈니스 관행에 대한 우리의 포괄적 접근법은 기업 문화를 형성하고 운영을 안내합니다.',
    'sustainability.learnMore': '자세히 알아보기',
    'sustainability.policy.title': '지속가능성 정책',
    'sustainability.policy.description': '환경 관리, 사회적 책임, 지속 가능한 비즈니스 관행을 위한 포괄적 프레임워크.',
    'sustainability.values.title': '기업 가치',
    'sustainability.values.description': '의사결정을 안내하고 조직 문화를 형성하는 핵심 원칙과 가치.',
    'sustainability.humanRights.title': '인권 정책',
    'sustainability.humanRights.description': '모든 운영과 파트너십에서 인권 보호와 증진에 대한 우리의 약속.',
    'sustainability.humanCapital.title': '인적 자본 이니셔티브',
    'sustainability.humanCapital.description': '직원 개발, 웰빙, 포용적 직장 조성에 중점을 둔 프로그램과 이니셔티브.',
    'sustainability.environmental.title': '환경 철학',
    'sustainability.environmental.description': '기술에서 환경적 영향을 최소화하고 지속 가능한 관행을 촉진하는 우리의 접근법.',
    'sustainability.social.title': '사회 철학',
    'sustainability.social.description': '기술 솔루션을 통한 사회적 책임과 긍정적인 지역사회 영향에 대한 우리의 약속.',
    'sustainability.governance.title': '기업 지배구조',
    'sustainability.governance.description': '투명성, 책임성, 윤리적 비즈니스 관행을 보장하는 거버넌스 프레임워크.',
    'sustainability.research.title': '연구개발',
    'sustainability.research.description': '지속 가능한 기술 솔루션과 책임감 있는 혁신 관행에 중점을 둔 혁신 이니셔티브.',
    // Sustainability Policy Page
    'policy.badge': '지속가능성 프레임워크',
    'policy.title': '지속가능성 정책',
    'policy.subtitle': '환경 관리, 사회적 책임, 지속 가능한 비즈니스 관행을 위한 포괄적 프레임워크. 우리 운영의 모든 측면을 안내하는 포괄적 프레임워크.',
    'policy.environmental.title': '환경적 약속',
    'policy.environmental.content1': 'Upvista Digital에서는 지속 가능한 관행을 통해 환경적 영향을 최소화할 책임을 인식합니다. 우리의 환경 정책은 모든 비즈니스 운영에 걸친 에너지 효율성, 폐기물 감소, 탄소 발자국 최소화를 포함합니다.',
    'policy.environmental.content2': '디지털 탄소 발자국을 줄이기 위해 클라우드 기반 솔루션과 에너지 효율적인 기술을 우선시합니다. 우리의 개발 관행은 리소스 소비를 최소화하는 깨끗한 코드, 최적화된 성능, 지속 가능한 아키텍처 패턴을 강조합니다.',
    'policy.social.title': '사회적 책임 프레임워크',
    'policy.social.content1': '우리의 사회적 책임 정책은 기술을 통해 긍정적인 영향을 창출하는 데 중점을 둡니다. 디지털 포용성, 기술 중심 솔루션을 통한 커뮤니티 지원, 그리고 우리의 서비스가 사회 전체에 이익이 되도록 하는 것을 믿습니다.',
    'policy.social.content2': '멘토십 프로그램, 교육 이니셔티브, 커뮤니티 개발 프로젝트에 적극적으로 참여합니다. 우리의 약속은 지역 기술 생태계 지원과 실제 문제를 해결하는 혁신을 육성하는 데까지 확장됩니다.',
    'policy.business.title': '지속 가능한 비즈니스 관행',
    'policy.business.content1': '우리의 비즈니스 관행은 지속가능성을 핵심으로 설계되었습니다. 투명한 보고, 윤리적 조달, 장기적인 환경 및 사회적 영향을 고려한 책임감 있는 프로젝트 관리를 구현합니다.',
    'policy.business.content2': '모든 운영에서 책임을 보장하는 높은 기업 거버넌스 기준을 유지합니다. 우리의 고객 관계는 신뢰, 투명성, 지속 가능한 개발 목표에 대한 공유된 약속에 기반하여 구축됩니다.',
    'policy.implementation.title': '구현 및 모니터링',
    'policy.implementation.content1': '이 지속가능성 정책은 모든 부서와 프로젝트에서 적극적으로 구현됩니다. 우리는 정기적으로 진행 상황을 모니터링하고, 영향을 측정하며, 지속가능성 약속을 충족하고 초과하도록 관행을 지속적으로 개선합니다.',
    'policy.implementation.content2': '우리 팀은 지속가능성 관행에 대한 정기적인 교육을 받으며, 지속 가능한 기술 솔루션에서의 혁신을 장려합니다. 우리는 책임감 있는 기술 개발과 배포의 리더가 되는 데 전념하고 있습니다.',
    // Corporate Values Page
    'values.badge': '핵심 원칙',
    'values.title': '기업 가치',
    'values.subtitle': '의사결정을 안내하고 조직 문화를 형성하며 디지털 환경에서 비즈니스를 수행하는 방식을 정의하는 핵심 원칙과 가치.',
    'values.innovation.title': '혁신과 우수성',
    'values.innovation.content1': '우리는 기술에서 가능한 것의 한계를 넓히는 데 전념하고 있습니다. 혁신은 단순한 유행어가 아니라 우리가 하는 모든 일의 기반입니다. 우리는 복잡한 문제를 해결하고 클라이언트에게 탁월한 결과를 제공하는 새로운 방법을 지속적으로 모색합니다.',
    'values.innovation.content2': '실행에서의 우수성이 우리의 기준입니다. 우리는 프로젝트의 규모에 관계없이 모든 프로젝트가 우리의 최선의 노력에 값한다고 믿습니다. 품질에 대한 이러한 약속이 우리의 프로세스, 기술, 서비스 제공을 지속적으로 개선하는 동력이 됩니다.',
    'values.integrity.title': '정직성과 투명성',
    'values.integrity.content1': '정직성은 모든 관계의 기반을 형성합니다. 우리는 모든 이해관계자에 대한 정직함, 공정함, 존중으로 비즈니스를 수행합니다. 커뮤니케이션에서의 투명성은 클라이언트, 파트너, 팀원들이 항상 자신의 위치를 알 수 있도록 보장합니다.',
    'values.integrity.content2': '우리는 신뢰가 일관된 행동과 정직한 커뮤니케이션을 통해 얻어진다고 믿습니다. 투명성에 대한 우리의 약속은 프로젝트 관리, 가격 책정, 일정, 그리고 여정에서 마주치는 모든 도전에까지 확장됩니다.',
    'values.collaboration.title': '협업과 파트너십',
    'values.collaboration.content1': '우리는 모든 클라이언트 관계를 진정한 파트너십으로 봅니다. 협업은 우리 성공의 열쇠이며, 우리는 클라이언트의 고유한 도전과 목표를 이해하기 위해 밀접하게 협력합니다. 팀 기반 접근법은 다양한 관점과 포괄적인 솔루션을 보장합니다.',
    'values.collaboration.content2': '내부적으로, 우리는 모든 팀원의 의견이 소중히 여겨지는 협업 문화를 조성합니다. 우리는 다양한 재능과 관점이 함께 모여 복잡한 도전에 대처할 때 최고의 솔루션이 나온다고 믿습니다.',
    'values.learning.title': '지속적인 학습과 성장',
    'values.learning.content1': '급속히 진화하는 기술의 세계에서 지속적인 학습은 필수적입니다. 우리는 팀의 전문적 발전에 크게 투자하며, 훈련, 인증, 기술 향상의 기회를 제공합니다.',
    'values.learning.content2': '우리는 실험과 실패로부터의 학습을 장려합니다. 우리의 문화는 지식 공유, 멘토십, 클라이언트에게 도움이 되고 우리의 역량을 발전시킬 수 있는 새로운 기술과 방법론 추구를 촉진합니다.',
    'values.client.title': '클라이언트 성공과 가치 창출',
    'values.client.content1': '우리의 성공은 클라이언트의 성공으로 측정됩니다. 우리는 요구사항을 충족할 뿐만 아니라 기대를 뛰어넘고 진정한 비즈니스 가치를 창출하는 솔루션을 제공하는 데 전념하고 있습니다. 모든 프로젝트는 지속적인 긍정적 영향을 창출하는 목표로 접근됩니다.',
    'values.client.content2': '우리는 클라이언트 관계를 장기적으로 보며, 클라이언트가 미래에 잘 서비스를 받을 수 있는 지속 가능한 솔루션에 집중합니다. 우리의 가치 제안은 기술적 전문성을 넘어 전략적 사고, 비즈니스 통찰력, 지속적인 지원을 포함합니다.',
    // Human Capital Initiatives Page
    'humanCapital.badge': '인재 우선 접근법',
    'humanCapital.title': '인적자본 이니셔티브',
    'humanCapital.subtitle': '직원 개발, 웰빙, 그리고 우리의 가장 큰 자산인 인재에게 권한을 부여하는 포용적인 직장 환경 조성에 중점을 둔 포괄적인 프로그램과 이니셔티브.',
    'humanCapital.development.title': '전문성 개발 프로그램',
    'humanCapital.development.content1': '우리는 팀원들의 지속적인 성장과 개발에 막대한 투자를 하고 있습니다. 우리의 포괄적인 전문성 개발 프로그램에는 기술 교육, 리더십 개발, 소프트 스킬 향상이 포함되어 직원들이 각 분야의 최전선에 머물 수 있도록 보장합니다.',
    'humanCapital.development.content2': '우리의 개발 이니셔티브에는 멘토링 프로그램, 크로스 기능 프로젝트 기회, 컨퍼런스 참석, 인증 지원, 최첨단 도구 및 기술에 대한 접근이 포함됩니다. 우리 인재의 성장에 투자하는 것이 클라이언트와 회사에 더 나은 결과로 직접 이어진다고 믿습니다.',
    'humanCapital.wellbeing.title': '직원 웰빙과 워라밸',
    'humanCapital.wellbeing.content1': '직원 웰빙이 개인적 행복과 전문적 성공 모두에 근본적이라는 것을 인식합니다. 우리의 웰빙 이니셔티브에는 유연한 근무 배치, 정신 건강 지원 프로그램, 웰니스 활동, 포괄적인 건강 혜택이 포함됩니다.',
    'humanCapital.wellbeing.content2': '우리의 워라밸 정책에는 원격 근무 옵션, 유연한 시간, 관대한 휴가 정책, 가족 친화적 관행이 포함됩니다. 직원들이 일 외에도 삶이 있다는 것을 이해하며, 전문적이고 개인적 약속 사이의 건강한 균형을 유지하도록 지원합니다.',
    'humanCapital.diversity.title': '다양성, 형평성, 포용성',
    'humanCapital.diversity.content1': '다양성이 축하되고 모든 사람이 가치를 느끼고 존중받는 포용적인 직장 환경을 조성하는 데 전념하고 있습니다. 우리의 다양성, 형평성, 포용성 이니셔티브는 다양한 인재 풀에서의 채용, 진급을 위한 평등한 기회 제공, 소속감 있는 환경 조성에 중점을 둡니다.',
    'humanCapital.diversity.content2': '우리의 포용성 노력에는 무의식적 편견 훈련, 다양한 채용 관행, 직원 자원 그룹, 직장 문화의 정기적 평가가 포함됩니다. 다양한 관점이 더 나은 혁신, 문제 해결, 비즈니스 결과로 이어진다고 믿습니다.',
    'humanCapital.knowledge.title': '지식 공유와 혁신 문화',
    'humanCapital.knowledge.content1': '지식 공유와 지속적인 학습의 문화를 조성합니다. 우리의 혁신 이니셔티브에는 정기적인 기술 토크, 해커톤, 혁신 도전, 직원들이 회사와 클라이언트에 도움이 될 수 있는 열정 프로젝트를 추구할 기회가 포함됩니다.',
    'humanCapital.knowledge.content2': '크로스 팀 협력을 장려하고 직원들이 전문성을 공유하고 다른 사람으로부터 배우며 조직의 집합적 지식에 기여할 수 있는 플랫폼을 제공합니다. 이러한 공유와 혁신의 문화는 개인적 성장과 회사 발전을 모두 추진합니다.',
    'humanCapital.recognition.title': '인정과 경력 발전',
    'humanCapital.recognition.content1': '우수함을 인정하고 보상하는 것을 믿습니다. 우리의 인정 프로그램에는 성과 기반 보너스, 성취 상, 우수한 기여에 대한 공개 인정이 포함됩니다. 명확한 경력 발전 경로를 제공하고 직원들의 전문적 목표 달성을 지원합니다.',
    'humanCapital.recognition.content2': '우리의 경력 개발 프레임워크에는 정기적인 성과 검토, 목표 설정, 스킬 평가, 개인화된 개발 계획이 포함됩니다. 직원들의 장기적 경력 성공에 투자하며, 그들의 성장이 회사의 성공에 직접적으로 기여한다는 것을 알고 있습니다.',
    'humanCapital.community.title': '커뮤니티 참여와 사회적 영향',
    'humanCapital.community.content1': '직원들이 자신의 커뮤니티와 소통하고 사회적 사업에 기여하도록 장려합니다. 우리의 커뮤니티 참여 이니셔티브에는 자원봉사 시간, 기업 사회적 책임 프로그램, 직원들의 개인적 자선 활동 지원이 포함됩니다.',
    'humanCapital.community.content2': '커뮤니티에 기여하는 참여하는 직원들이 더욱 충족되고 그 긍정적인 에너지를 업무에 가져온다고 믿습니다. 우리의 사회적 영향 프로그램은 직원들이 자신의 스킬과 전문성을 사용하여 세상에 변화를 만들 수 있게 합니다.'
  },
  ZH: {
    'nav.home': '首页',
    'nav.company': '公司',
    'nav.services': '服务',
    'nav.community': '社区',
    'nav.researches': '研究',
    'nav.insights': '洞察',
    'nav.careers': '探索职业',
    'nav.contact': '让我们谈谈业务',
    'hero.title': '推动增长的数字化解决方案',
    'hero.subtitle': '用尖端技术和创新解决方案变革您的业务。',
    'hero.cta': '开始',
    'hero.register': '注册',
    'hero.badge': 'Upvista Digital - 巴基斯坦顶级软件机构',
    'hero.service1': '网站开发',
    'hero.service2': '软件工程',
    'hero.service3': '图形设计',
    'hero.service4': 'AI自动化',
    'hero.stats1': '已完成项目',
    'hero.stats2': '客户评分',
    'hero.stats3': '支持服务',
    // Company dropdown
    'dropdown.company.about': '关于我们',
    'dropdown.company.profile': '公司简介',
    'dropdown.company.sustainability': '可持续性与价值观',
    'dropdown.company.investors': '投资者关系',
    'dropdown.company.partners': '合作伙伴',
    'dropdown.company.leadership': '领导团队',
    'dropdown.company.contact': '联系我们',
    // Company Profile Page
    'companyProfile.badge': '企业信息',
    'companyProfile.title': '公司简介',
    'companyProfile.subtitle': 'Upvista Digital的企业基础、领导结构和业务运营的综合概述。',
    'companyProfile.tradeName': '商号',
    'companyProfile.businessDescription': '业务描述',
    'companyProfile.ceo': '首席执行官',
    'companyProfile.founded': '成立日期',
    'companyProfile.fiscalYearEnd': '财政年度结束',
    'companyProfile.headOffice': '总部',
    'companyProfile.legalStatus': '法律地位',
    'companyProfile.serviceAreas': '服务区域',
    'companyProfile.industryFocus': '行业重点',
    'companyProfile.revenueModel': '收入模式',
    'companyProfile.clientPortfolio': '客户组合',
    'companyProfile.qualityStandards': '质量标准',
    'companyProfile.businessDesc1': '数字解决方案的开发、销售和运营。',
    'companyProfile.businessDesc2': '网站开发和软件工程服务的开发、销售和交付。',
    'companyProfile.ceoName': 'Hamza Hafeez',
    'companyProfile.foundedDate': '2025年7月1日',
    'companyProfile.fiscalEnd': '6月30日',
    'companyProfile.headOfficeLocation': '拉合尔，巴基斯坦',
    'companyProfile.legalStatusType': '独资企业',
    'companyProfile.serviceAreasGlobal': '全球',
    'companyProfile.industryTypes': '技术服务、数字解决方案、软件开发',
    'companyProfile.revenueType': '基于服务',
    'companyProfile.clientCount': '跨多个行业的50多个成功项目',
    'companyProfile.qualityRating': '4.9/5客户满意度评级',
    // Services dropdown
    'dropdown.services.about': '关于我们的服务',
    'dropdown.services.software': '软件开发',
    'dropdown.services.web': '网站开发',
    'dropdown.services.ai': 'AI与自动化',
    'dropdown.services.cloud': '云计算',
    'dropdown.services.design': '图形设计',
    'dropdown.services.marketing': '数字营销',
    // Community dropdown
    'dropdown.community.about': '关于社区',
    'dropdown.community.events': '活动',
    'dropdown.community.members': '社区成员',
    'dropdown.community.achievements': '成就',
    'dropdown.community.trainings': '培训',
    'dropdown.community.join': '加入社区',
    // Researches dropdown
    'dropdown.researches.about': '关于Upvista研究',
    'dropdown.researches.cortex': '项目皮层',
    'dropdown.researches.agi': 'AGI研究',
    // Insights dropdown
    'dropdown.insights.caseStudies': '案例研究',
    'dropdown.insights.news': '新闻',
    'dropdown.insights.blogs': '博客',
    'dropdown.insights.whitepapers': '白皮书',
    'dropdown.insights.events': '活动',
    // Homepage sections - Chinese
    'home.transform.title': '数字化转型',
    'home.transform.subtitle': '设计激发行动的体验',
    'home.transform.description': '从想法到执行，我们不仅仅是构建网站——我们构建连接人们、建立信任并将访问者转化为忠实客户的旅程。',
    'home.transform.exploreServices': '探索我们的服务',
    'home.transform.contactUs': '联系我们',
    'home.partnership.title': '为您的数字增长建立伙伴关系',
    'home.partnership.description': '我们不仅仅交付项目——我们建立长期伙伴关系，使您的业务在数字优先的世界中蓬勃发展。我们的方法是协作的、透明的，专注于您的成功。',
    'home.partnership.explore': '探索伙伴关系',
    'home.partnership.premium': '优质合作',
    'home.partnership.subtitle': '让我们共同创建为卓越设定新标准的数字解决方案。',
    'home.expertise.title': '推动结果的专长',
    'home.expertise.subtitle': '跨数字领域的真正专长',
    'home.expertise.description': '我们为各种行业和商业模式提供定制解决方案。我们的团队在每个领域都带来深入的实践经验——没有浮夸，只有经过验证的结果。',
    'home.expertise.ecommerce.title': '电子商务',
    'home.expertise.ecommerce.description': '为B2C和B2B品牌定制的在线商店、支付集成、产品管理和转化优化。',
    'home.expertise.saas.title': 'SaaS平台',
    'home.expertise.saas.description': '具有用户管理、计费、分析和云集成的强大、可扩展的SaaS解决方案。',
    'home.expertise.healthcare.title': '医疗保健',
    'home.expertise.healthcare.description': '符合HIPAA的应用程序、患者门户、远程医疗和安全健康数据管理。',
    'home.expertise.edtech.title': '教育技术',
    'home.expertise.edtech.description': '学习管理系统、电子学习平台和交互式教育工具。',
    'home.expertise.fintech.title': '金融科技',
    'home.expertise.fintech.description': '安全支付网关、数字钱包和金融分析平台。',
    'home.expertise.portfolio.title': '作品集与创意',
    'home.expertise.portfolio.description': '个人作品集、创意机构网站以及为艺术家和专业人士提供的数字展示。',
    'home.expertise.explore': '探索我们的解决方案',
    'home.services.title': '我们的核心服务',
    'home.services.subtitle': '推动结果的数字解决方案',
    'home.services.description': '从概念到部署，我们提供全面的数字解决方案，转变您的业务并加速数字环境中的增长。',
    'home.services.software.title': '软件开发',
    'home.services.software.description': '使用尖端技术构建的定制软件解决方案。从Web应用程序到桌面软件，我们提供可扩展和可维护的代码。',
    'home.services.software.learnMore': '了解更多',
    'home.services.web.title': '网站开发',
    'home.services.web.description': '提供卓越用户体验并推动业务增长的现代、响应式网站和Web应用程序。',
    'home.services.web.learnMore': '了解更多',
    'home.services.cloud.title': '云解决方案',
    'home.services.cloud.description': '全面的云基础设施、迁移和管理服务，以优化您的业务运营和可扩展性。',
    'home.services.cloud.learnMore': '了解更多',
    'home.services.ai.title': 'AI与自动化',
    'home.services.ai.description': '简化流程并增强决策能力的智能自动化解决方案和AI驱动的应用程序。',
    'home.services.ai.learnMore': '了解更多',
    'home.services.design.title': '图形设计',
    'home.services.design.description': '专业的平面设计、品牌和视觉识别服务，让您的品牌在数字环境中脱颖而出。',
    'home.services.design.learnMore': '了解更多',
    'home.services.marketing.title': '数字营销',
    'home.services.marketing.description': '战略数字营销活动、SEO优化、社交媒体管理和绩效分析，以最大化您的在线覆盖范围和投资回报率。',
    'home.services.marketing.learnMore': '了解更多',
    'home.services.exploreAll': '探索所有服务',
    'home.webDesign.title': '网站设计专家',
    'home.webDesign.subtitle': '自信地建立您的数字存在',
    'home.webDesign.description': 'Upvista创造强大的数字体验，不仅看起来很棒，还能带来可衡量的增长和持久的影响。',
    'home.webDesign.getStarted': '立即开始',
    'home.webDesign.viewWork': '查看我们的作品',
    'home.testimonials.title': '客户评价',
    'home.testimonials.subtitle': '用户评价',
    'home.testimonials.description': '看看我们的客户对我们的评价。',
    'home.testimonials.testimonial1': '他们的团队为我们制作了一个美丽而功能强大的网站。它大大提高了我们的可见性和客户信任。',
    'home.testimonials.testimonial2': '我们需要一个能转化的落地页——他们提供了。干净的设计、快速加载和完美优化。',
    'home.testimonials.testimonial3': 'UI/UX设计超出了我们的期望。直观的布局和一致的品牌帮助提升了我们的数字产品。',
    'home.testimonials.testimonial4': '从品牌到网站开发，一切都以创造性和专业精神处理。',
    'home.testimonials.testimonial5': '他们的落地页设计帮助我们增加了35%的转化率——视觉震撼且移动友好。',
    'home.testimonials.testimonial6': '出色的协作和清晰的过程。他们理解我们的需求并构建了反映我们品牌的定制解决方案。',
    'home.testimonials.testimonial7': '专业的团队和及时的交付。我们的品牌现在现代、大胆，在所有平台上保持一致。',
    'home.testimonials.testimonial8': '他们帮助我们重新品牌和重新设计网站——结果是一个脱颖而出的精致现代体验。',
    'home.testimonials.testimonial9': 'UI/UX改造为我们的服务提供带来了清晰度。我们的用户现在停留更长时间并探索更多。',
    'home.whyChoose.title': '为什么选择我们',
    'home.whyChoose.description': '我们为现代企业快速构建经济实惠、定制且可扩展的数字解决方案。',
    'home.whyChoose.transparentPricing': '透明定价',
    'home.whyChoose.fixedDeadlines': '固定截止日期',
    'home.whyChoose.cleanDesign': '简洁设计',
    'home.whyChoose.freeConsultation': '免费咨询',
    'home.whyChoose.longTermSupport': '长期支持',
    'home.whyChoose.flexibleTech': '灵活的技术栈',
    'home.palestine.title': 'Upvista与巴勒斯坦及其人民站在一起',
    'home.join.title': '加入我们',
    // Footer translations
    'footer.description': '通过尖端数字解决方案赋能企业。我们提供创新的软件开发、全面的网络服务，以及推动增长和成功的变革性技术合作伙伴关系。',
    'footer.paymentMethods': '支付方式',
    'footer.payoneer': 'Payoneer',
    'footer.bankTransfer': '银行转账',
    'footer.jazzCash': 'JazzCash',
    'footer.easyPaisa': 'EasyPaisa',
    'footer.company': '公司',
    'footer.aboutUs': '关于我们',
    'footer.companyProfile': '公司简介',
    'footer.sustainability': '可持续发展与价值观',
    'footer.investorRelations': '投资者关系',
    'footer.partnerships': '合作伙伴关系',
    'footer.leadership': '领导团队',
    'footer.contactUs': '联系我们',
    'footer.careers': '职业机会',
    'footer.services': '服务',
    'footer.allServices': '所有服务',
    'footer.softwareDevelopment': '软件开发',
    'footer.webDevelopment': '网站开发',
    'footer.aiAutomation': 'AI与自动化',
    'footer.cloudSolutions': '云解决方案',
    'footer.graphicsDesign': '图形设计',
    'footer.digitalMarketing': '数字营销',
    'footer.consultService': '服务咨询',
    'footer.communityResources': '社区与资源',
    'footer.aboutCommunity': '关于社区',
    'footer.events': '活动',
    'footer.communityMembers': '社区成员',
    'footer.trainings': '培训',
    'footer.research': '研究',
    'footer.projectCortex': '项目皮质',
    'footer.blog': '博客',
    'footer.faq': '常见问题',
    'footer.whatsappUs': 'WhatsApp联系我们',
    'footer.linkedinUs': 'LinkedIn联系我们',
    'footer.messengerUs': 'Messenger联系我们',
    'footer.copyright': '© 2025 Upvista Digital. 版权所有。',
    'footer.termsConditions': '条款和条件',
    'footer.privacyPolicy': '隐私政策',
    'footer.trademarkCopyright': '商标和版权',
    'footer.dataProtection': '数据保护',
    'carousel.technologies': '我们使用的技术',
    // Sustainability Page
    'sustainability.badge': '可持续未来',
    'sustainability.title': '可持续发展与价值观',
    'sustainability.subtitle': '我们在环境责任、社会影响和道德商业实践方面的综合方法塑造了我们的企业文化并指导我们的运营。',
    'sustainability.learnMore': '了解更多',
    'sustainability.policy.title': '可持续发展政策',
    'sustainability.policy.description': '我们在环境管理、社会责任和可持续商业实践方面的综合框架。',
    'sustainability.values.title': '企业价值观',
    'sustainability.values.description': '指导我们决策制定并塑造我们组织文化的核心原则和价值观。',
    'sustainability.humanRights.title': '人权政策',
    'sustainability.humanRights.description': '我们在所有运营和合作伙伴关系中保护和促进人权的承诺。',
    'sustainability.humanCapital.title': '人力资本倡议',
    'sustainability.humanCapital.description': '专注于员工发展、福祉和创造包容性工作场所的项目和倡议。',
    'sustainability.environmental.title': '环境理念',
    'sustainability.environmental.description': '我们在技术领域最小化环境影响并促进可持续实践的方法。',
    'sustainability.social.title': '社会理念',
    'sustainability.social.description': '我们通过技术解决方案对社会责任和积极社区影响的承诺。',
    'sustainability.governance.title': '企业治理',
    'sustainability.governance.description': '确保透明度、问责制和道德商业实践的企业治理框架。',
    'sustainability.research.title': '研发',
    'sustainability.research.description': '专注于可持续技术解决方案和负责任创新实践的创新倡议。',
    // Sustainability Policy Page
    'policy.badge': '可持续发展框架',
    'policy.title': '可持续发展政策',
    'policy.subtitle': '我们在环境管理、社会责任和可持续商业实践方面的综合框架，指导我们运营的各个方面。',
    'policy.environmental.title': '环境承诺',
    'policy.environmental.content1': '在Upvista Digital，我们认识到通过可持续实践最小化环境影响的责任。我们的环境政策涵盖所有业务运营中的能源效率、废物减少和碳足迹最小化。',
    'policy.environmental.content2': '我们优先考虑基于云的解决方案和节能技术，以减少我们的数字碳足迹。我们的开发实践强调清洁代码、优化性能和可持续的架构模式，以最小化资源消耗。',
    'policy.social.title': '社会责任框架',
    'policy.social.content1': '我们的社会责任政策专注于通过技术创造积极影响。我们相信数字包容性，通过技术驱动的解决方案支持社区，并确保我们的服务使整个社会受益。',
    'policy.social.content2': '我们积极参与指导计划、教育倡议和社区发展项目。我们的承诺延伸到支持本地技术生态系统和培养解决现实世界挑战的创新。',
    'policy.business.title': '可持续商业实践',
    'policy.business.content1': '我们的商业实践以可持续性为核心设计。我们实施透明报告、道德采购和负责任的项目管理，考虑长期的环境和社会影响。',
    'policy.business.content2': '我们维持高标准的公司治理，确保所有运营中的问责制。我们的客户关系建立在信任、透明度和对可持续发展目标的共同承诺基础上。',
    'policy.implementation.title': '实施和监控',
    'policy.implementation.content1': '这一可持续发展政策在所有部门和项目中积极实施。我们定期监控我们的进展，衡量我们的影响，并持续改进我们的实践，以确保我们满足并超越我们的可持续发展承诺。',
    'policy.implementation.content2': '我们的团队接受可持续发展实践的定期培训，我们鼓励可持续技术解决方案的创新。我们致力于成为负责任的技术开发和部署的领导者。',
    // Corporate Values Page
    'values.badge': '核心原则',
    'values.title': '企业价值观',
    'values.subtitle': '指导我们决策制定、塑造组织文化并定义我们在数字环境中如何开展业务的核心原则和价值观。',
    'values.innovation.title': '创新与卓越',
    'values.innovation.content1': '我们致力于推动技术在可能领域的边界。创新对我们来说不仅仅是一个流行词；它是我们所做一切的基础。我们不断寻求新的方法来解决复杂问题并为客户提供卓越的成果。',
    'values.innovation.content2': '执行卓越是我们标准。我们相信每个项目，无论多小，都值得我们付出最大努力。这种对质量的承诺推动我们不断改进我们的流程、技术和服务交付。',
    'values.integrity.title': '诚信与透明',
    'values.integrity.content1': '诚信是我们所有关系的基础。我们以诚实、公平和对所有利益相关者的尊重开展业务。我们在沟通中的透明性确保客户、合作伙伴和团队成员始终了解自己的立场。',
    'values.integrity.content2': '我们相信信任是通过一致的行动和诚实的沟通赢得的。我们对透明的承诺延伸到我们的项目管理、定价、时间表以及我们在前进道路上遇到的任何挑战。',
    'values.collaboration.title': '合作与伙伴关系',
    'values.collaboration.content1': '我们将每个客户关系视为真正的伙伴关系。合作是我们成功的关键，我们与客户密切合作以了解他们独特的挑战和目标。我们基于团队的方法确保多样化的观点和全面的解决方案。',
    'values.collaboration.content2': '在内部，我们培养一种合作文化，重视每个团队成员的投入。我们相信，当不同的才能和观点聚集在一起应对复杂挑战时，最佳解决方案就会出现。',
    'values.learning.title': '持续学习与成长',
    'values.learning.content1': '在快速发展的技术世界中，持续学习至关重要。我们在团队的专业发展上大量投资，提供培训、认证和技能提升的机会。',
    'values.learning.content2': '我们鼓励实验和从失败中学习。我们的文化促进知识共享、指导以及追求能够使客户受益并提升我们能力的新技术和方法论。',
    'values.client.title': '客户成功与价值创造',
    'values.client.content1': '我们的成功是通过客户的成功来衡量的。我们致力于提供不仅满足要求而且超越期望并创造真正商业价值的解决方案。每个项目都以创造持久积极影响为目标。',
    'values.client.content2': '我们对客户关系采取长期观点，专注于将在未来为我们的客户提供良好服务的可持续解决方案。我们的价值主张超越了技术专长，包括战略思维、商业敏锐度和持续支持。',
    // Human Capital Initiatives Page
    'humanCapital.badge': '以人为本的方法',
    'humanCapital.title': '人力资本倡议',
    'humanCapital.subtitle': '专注于员工发展、福祉和创造包容性工作环境的综合项目和倡议，赋予我们最宝贵的资产——我们的员工。',
    'humanCapital.development.title': '专业发展计划',
    'humanCapital.development.content1': '我们在团队成员持续成长和发展方面投入巨资。我们的综合专业发展计划包括技术培训、领导力发展和软技能提升，确保我们的员工始终处于各自领域的前沿。',
    'humanCapital.development.content2': '我们的发展倡议包括导师计划、跨职能项目机会、会议参与、认证支持和前沿工具技术的获取。我们相信投资于我们员工的成长直接转化为客户和公司更好的成果。',
    'humanCapital.wellbeing.title': '员工福祉与工作生活平衡',
    'humanCapital.wellbeing.content1': '我们认识到员工福祉对个人幸福和职业成功都至关重要。我们的福祉倡议包括灵活工作安排、心理健康支持计划、健康活动和全面的健康福利。',
    'humanCapital.wellbeing.content2': '我们的工作生活平衡政策包括远程工作选项、灵活时间、慷慨的假期政策和家庭友好实践。我们理解员工在工作之外还有生活，我们支持他们在专业和个人承诺之间保持健康平衡。',
    'humanCapital.diversity.title': '多样性、公平性和包容性',
    'humanCapital.diversity.content1': '我们致力于创造一个包容的工作场所，在这里多样性受到庆祝，每个人都感到被重视和尊重。我们的多样性、公平性和包容性倡议专注于从多元化人才库招聘、提供平等的晋升机会和培养归属感环境。',
    'humanCapital.diversity.content2': '我们的包容性努力包括无意识偏见培训、多元化招聘实践、员工资源团体和定期的工作场所文化评估。我们相信多样化的观点带来更好的创新、问题解决和业务成果。',
    'humanCapital.knowledge.title': '知识共享与创新文化',
    'humanCapital.knowledge.content1': '我们培养知识共享和持续学习的文化。我们的创新倡议包括定期的技术讲座、黑客马拉松、创新挑战和员工追求对公司及客户有益的热情项目的机会。',
    'humanCapital.knowledge.content2': '我们鼓励跨团队合作，为员工提供分享专业知识、向他人学习和为组织的集体知识做出贡献的平台。这种分享和创新的文化推动个人成长和公司进步。',
    'humanCapital.recognition.title': '认可与职业发展',
    'humanCapital.recognition.content1': '我们相信认可和奖励卓越。我们的认可计划包括基于绩效的奖金、成就奖项和优秀贡献的公开认可。我们提供清晰的职业发展路径，支持员工实现职业目标。',
    'humanCapital.recognition.content2': '我们的职业发展框架包括定期绩效评估、目标设定、技能评估和个性化发展计划。我们投资于员工的长期职业成功，知道他们的成长直接促进公司的成功。',
    'humanCapital.community.title': '社区参与与社会影响',
    'humanCapital.community.content1': '我们鼓励员工参与社区并为社会事业做出贡献。我们的社区参与倡议包括志愿者时间、企业社会责任计划和对员工个人慈善活动的支持。',
    'humanCapital.community.content2': '我们相信为社区做出贡献的参与员工更加充实，并将这种正能量带回工作中。我们的社会影响计划让员工能够运用技能和专业知识在世界上产生影响。',
    // Human Rights Policy Page
    'humanRights.badge': '人权承诺',
    'humanRights.title': '人权政策',
    'humanRights.subtitle': '我们在所有运营、合作伙伴关系和服务全球社区的技术解决方案中保护和促进人权的坚定承诺。',
    'humanRights.universal.title': '普遍人权原则',
    'humanRights.universal.content1': 'Upvista Digital致力于维护《世界人权宣言》和所有相关的国际人权标准。我们认识到技术既有保护人权的力量，也可能潜在侵犯人权，我们致力于确保我们的解决方案促进人类尊严和自由。',
    'humanRights.universal.content2': '我们的人权政策适用于我们业务运营的所有方面，包括员工关系、客户合作伙伴关系、供应链管理，以及影响个人和社区的技术解决方案的开发和部署。',
    'humanRights.workplace.title': '工作场所人权',
    'humanRights.workplace.content1': '我们维护尊重和保护所有员工基本权利的工作场所环境。这包括获得公平待遇的权利、免受歧视的自由、安全的工作条件，以及在不担心报复的情况下表达关切的权利。',
    'humanRights.workplace.content2': '我们的承诺延伸到确保职业发展的平等机会、公平的薪酬实践，以及创造一个包容的环境，在这里多样性受到庆祝，所有个人无论其背景、身份或信仰如何都能茁壮成长。',
    'humanRights.privacy.title': '隐私和数字权利',
    'humanRights.privacy.content1': '在我们的数字时代，隐私是一项基本人权。我们致力于保护所有我们处理其数据的个人的隐私权，无论他们是我们的员工、客户还是我们开发的解决方案的最终用户。',
    'humanRights.privacy.content2': '我们的技术解决方案采用隐私设计原则设计，确保数据保护从一开始就内置到每个系统中。我们实施强大的安全措施和透明的数据处理实践，尊重个人自主权和同意。',
    'humanRights.community.title': '社区影响和可访问性',
    'humanRights.community.content1': '我们相信技术应该为所有人所及，不应该创造或延续不平等。我们的解决方案在设计时考虑了可访问性，确保残疾人能够充分参与数字世界。',
    'humanRights.community.content2': '我们积极努力通过支持为服务不足的社区提供技术访问的倡议来弥合数字鸿沟。我们对人权的承诺包括确保我们的技术解决方案促进社会包容而非排斥。',
    'humanRights.ethical.title': '道德技术开发',
    'humanRights.ethical.content1': '我们致力于开发尊重人权并促进人类繁荣的技术。这包括避免开发可能被用于侵犯人权的技术，如侵犯隐私的监控系统或延续偏见和歧视的AI系统。',
    'humanRights.ethical.content2': '我们的道德框架指导所有技术开发决策，确保我们考虑解决方案的潜在人权影响。我们进行定期的人权影响评估，并与利益相关者保持持续对话，确保我们的技术为人类的最佳利益服务。',
    'humanRights.implementation.title': '实施和问责',
    'humanRights.implementation.content1': '这份人权政策不仅仅是一份文件；它是指导我们日常运营的活承诺。我们为所有员工提供人权原则的定期培训，并维护强大的机制来报告和解决任何关切。',
    'humanRights.implementation.content2': '我们通过定期审计、利益相关者参与和人权绩效的透明报告，对这些原则承担责任。我们对人权的承诺是我们作为负责任技术公司身份的根本。',
    // Environmental Philosophy Page
    'environmental.badge': '绿色技术领导力',
    'environmental.title': '环境理念',
    'environmental.subtitle': '我们在技术开发、运营和客户解决方案中最小化环境影响和促进可持续实践的全面方法。',
    'environmental.development.title': '可持续技术开发',
    'environmental.development.content1': '我们相信技术应该是环境善的力量，而不是环境伤害的源泉。我们的开发实践优先考虑能源效率、资源优化和最小环境影响。我们创建的每个解决方案都以可持续性原则为核心设计。',
    'environmental.development.content2': '我们的可持续开发方法包括绿色编码实践、减少计算要求的优化算法，以及最小化碳足迹的云基础设施选择。我们持续研究和实施能够帮助减少环境影响的新技术。',
    'environmental.carbon.title': '碳足迹减少',
    'environmental.carbon.content1': '我们致力于在所有运营中减少碳足迹。这包括为我们的办公室使用可再生能源、实施节能硬件和软件，以及选择优先考虑可持续性和可再生能源的云提供商。',
    'environmental.carbon.content2': '我们的碳减少倡议包括减少通勤排放的远程工作政策、最小化纸张使用的数字优先实践，以及节能办公室设计。我们定期测量和报告碳足迹，并设定雄心勃勃的减少目标。',
    'environmental.cloud.title': '绿色云计算和基础设施',
    'environmental.cloud.content1': '我们优先选择由可再生能源驱动并由具有强烈环境承诺的提供商运营的云计算解决方案。我们的基础设施选择由可持续性指标指导，包括碳强度、能源效率和环境认证。',
    'environmental.cloud.content2': '我们的绿色基础设施方法包括无服务器计算以最小化资源使用、自动扩展以匹配需求并减少浪费，以及基于环境标准的数据中心选择。我们与客户合作优化他们的云使用，兼顾性能和环境影响。',
    'environmental.digital.title': '环境挑战的数字解决方案',
    'environmental.digital.content1': '我们开发帮助客户减少环境影响的技术解决方案。这包括能源管理系统、废物减少应用程序、供应链优化工具，以及实现更好环境决策的可持续性报告平台。',
    'environmental.digital.content2': '我们的环境技术解决方案帮助企业管理碳排放、优化资源使用并实施可持续实践。我们相信技术可以成为环境保护和可持续性的强大工具。',
    'environmental.waste.title': '废物减少和循环经济',
    'environmental.waste.content1': '我们在运营和技术开发中采用循环经济原则。这包括延长硬件生命周期、促进软件重用和模块化，以及设计可以轻松更新而不是替换的系统。',
    'environmental.waste.content2': '我们的废物减少倡议包括无纸化办公室实践、电子废物回收计划，以及最小化物理资源消耗的数字优先流程。我们鼓励客户通过我们开发的解决方案采用类似的实践。',
    'environmental.education.title': '环境教育和倡导',
    'environmental.education.content1': '我们相信教育和倡导推动环境变化的力量。我们的团队成员接受环境最佳实践的定期培训，并与客户和更广泛的技术社区分享我们的知识。',
    'environmental.education.content2': '我们积极参与环境倡议、支持绿色技术研究，并倡导促进可持续技术开发的政策。我们的目标是在技术行业成为环境变化的积极力量。',
    'environmental.improvement.title': '持续改进和创新',
    'environmental.improvement.content1': '环境可持续性是一个持续的旅程，而不是目的地。我们持续研究能够进一步减少环境影响的新技术和实践。我们的创新努力专注于开发既技术先进又环境负责的解决方案。',
    'environmental.improvement.content2': '我们定期评估环境绩效、设定雄心勃勃的改进目标，并投资于推进我们可持续性使命的技术和实践。我们对环境责任的承诺驱使我们不断寻求在保护地球的同时更好地服务客户的方法。',
    // Social Philosophy Page
    'social.badge': '社会影响力使命',
    'social.title': '社会理念',
    'social.subtitle': '我们通过赋能个人、强化社区和促进社会公平的技术解决方案，对社会责任和积极社区影响的承诺。',
    'social.good.title': '技术为社会善',
    'social.good.content1': '我们相信技术应该是积极社会变革的力量，赋能个人和社区克服挑战并实现他们的全部潜力。我们的社会理念专注于使用我们的技术专长来解决现实世界的问题并在社会中创造有意义的影响。',
    'social.good.content2': '我们对社会善的承诺超越商业项目，包括无偿工作、社区合作伙伴关系以及利用技术解决社会不平等、改善教育和医疗保健获取以及增强社区韧性的倡议。',
    'social.inclusion.title': '数字包容性和可访问性',
    'social.inclusion.content1': '我们致力于确保技术的好处对社会所有成员都可获得，无论他们的背景、能力或经济状况如何。我们的数字包容性倡议专注于打破障碍并创建服务于每个人的技术解决方案。',
    'social.inclusion.content2': '我们的可访问性努力包括开发适用于残疾人的解决方案、创建多语言界面以及为低带宽环境设计。我们相信包容性设计为每个人带来更好的解决方案并帮助弥合数字鸿沟。',
    'social.community.title': '社区参与和合作伙伴关系',
    'social.community.content1': '我们积极与当地社区和组织合作，了解他们的需求并贡献我们的专业知识来解决社区挑战。我们的社区合作伙伴关系包括教育机构、非营利组织和地方政府倡议。',
    'social.community.content2': '我们的社区参与包括学生指导计划、社区成员技术研讨会以及将我们的技术技能与当地知识和需求相结合的协作项目。我们相信强大的社区带来更强大的社会。',
    'social.education.title': '教育和知识共享',
    'social.education.content1': '我们相信教育的变革力量，并致力于与更广泛的社区分享知识和专业知识。我们的教育倡议包括编程训练营、技术研讨会和帮助他人发展技术技能的指导计划。',
    'social.education.content2': '我们的知识共享努力包括开源贡献、技术博客文章、会议演讲和协作学习机会。我们相信分享知识加强整个技术社区并创造创新机会。',
    'social.ethical.title': '道德技术开发',
    'social.ethical.content1': '我们致力于开发尊重人类尊严、保护隐私并促进社会公平的技术。我们的道德开发实践包括隐私设计原则、偏见测试以及对我们解决方案社会影响的考虑。',
    'social.ethical.content2': '我们的道德框架指导所有技术开发决策，确保我们考虑解决方案的潜在社会影响。我们进行定期道德审查并与利益相关者保持持续对话，确保我们的技术服务于社会的最佳利益。',
    'social.economic.title': '通过技术的经济赋权',
    'social.economic.content1': '我们相信技术可以成为经济赋权的强大工具，帮助个人和企业获得新机会并改善他们的经济前景。我们的解决方案旨在创造经济价值并实现可持续增长。',
    'social.economic.content2': '我们的经济赋权倡议包括用技术解决方案支持小企业、创建实现新经济机会的平台，以及开发帮助个人和社区参与数字经济的工具。',
    'social.global.title': '全球公民和责任',
    'social.global.content1': '作为全球技术公司，我们认识到我们有责任对我们运营的社区和更广泛的全球社会做出积极贡献。我们的全球公民努力包括支持国际发展项目和贡献全球技术标准。',
    'social.global.content2': '我们相信技术公司有特殊责任使用他们的资源和专业知识来应对全球挑战。我们的全球公民倡议包括支持发展中国家的教育、贡献开源项目以及参与国际技术标准开发。',
    // Corporate Governance Page
    'governance.badge': '道德领导力',
    'governance.title': '企业治理',
    'governance.subtitle': '我们的治理框架确保透明度、问责制和道德商业实践，与利益相关者建立信任并推动可持续的长期成功。',
    'governance.board.title': '董事会领导力和监督',
    'governance.board.content1': '我们的企业治理建立在强大的董事会领导和独立监督的基础上。我们的董事会提供战略指导，确保问责制，并监督我们治理政策和程序的实施。',
    'governance.board.content2': '董事会维持审计、薪酬和治理事务的独立委员会，确保所有重大决策都受到适当的监督和审查。我们的治理结构促进透明度、问责制以及与利益相关者利益的一致性。',
    'governance.transparency.title': '透明度和披露',
    'governance.transparency.content1': '我们在所有业务运营和沟通中保持最高标准的透明度。我们的披露实践包括定期报告财务业绩、业务运营和关键治理事项，以确保利益相关者充分了解情况。',
    'governance.transparency.content2': '我们的透明度承诺延伸到客户关系，我们提供关于项目进展、挑战和结果的清晰沟通。我们相信透明的沟通建立信任并能够为所有相关方做出更好的决策。',
    'governance.risk.title': '风险管理和合规',
    'governance.risk.content1': '我们维护全面的风险管理体系，识别、评估和缓解业务运营各个方面的风险。我们的风险管理框架包括定期评估、应急计划和关键风险指标的持续监控。',
    'governance.risk.content2': '我们的合规计划确保遵守所有适用的法律、法规和行业标准。我们维护强大的内部控制并进行定期审计，以确保在我们运营的所有司法管辖区遵守法律和监管要求。',
    'governance.ethics.title': '道德商业实践',
    'governance.ethics.content1': '我们致力于以最高的道德标准开展业务，遵循我们的行为准则和道德政策。我们的道德框架涵盖业务运营的所有方面，从客户关系到员工行为和供应商合作伙伴关系。',
    'governance.ethics.content2': '我们的道德实践包括公平竞争、负责任的采购、反腐败措施和保护机密信息。我们为所有员工提供定期道德培训，并维护无报复恐惧地报告道德关切的渠道。',
    'governance.stakeholder.title': '利益相关者参与和沟通',
    'governance.stakeholder.content1': '我们与所有利益相关者保持积极接触，包括客户、员工、投资者、合作伙伴和我们运营的社区。我们的利益相关者参与包括定期沟通、反馈机制和协作决策过程。',
    'governance.stakeholder.content2': '我们的沟通实践确保利益相关者了解我们的业务表现、战略方向和关键发展。我们重视利益相关者的意见，并将反馈纳入我们的决策过程，以确保与利益相关者利益的一致性。',
    'governance.performance.title': '绩效管理和问责制',
    'governance.performance.content1': '我们维护强大的绩效管理系统，确保组织各个层面的问责制。我们的绩效框架包括明确的目标、定期审查以及对目标实现和未实现的后果。',
    'governance.performance.content2': '我们的问责措施包括与绩效挂钩的高管薪酬、定期董事会评估以及管理层有效性的独立评估。我们相信强大的问责系统推动更好的绩效并为所有利益相关者创造价值。',
    'governance.improvement.title': '持续改进和创新',
    'governance.improvement.content1': '我们持续寻求改进治理实践并适应不断变化的商业环境和利益相关者期望。我们的治理框架定期审查和更新，以确保其保持有效性和相关性。',
    'governance.improvement.content2': '我们将治理实践与行业最佳实践进行基准比较，并整合利益相关者的反馈以推动持续改进。我们对治理卓越的承诺确保我们保持所有利益相关者的信任和信心，同时推动可持续的商业成功。',
    // Research & Development Page
    'research.badge': '创新中心',
    'research.title': '研发',
    'research.subtitle': '我们通过前沿研究、创新倡议和开发塑造数字化转型未来的下一代解决方案来推进技术的承诺。',
    'research.strategy.title': '创新策略和愿景',
    'research.strategy.content1': '我们的研发策略由创造不仅满足今天需求而且预见和应对明天挑战的技术解决方案的愿景驱动。我们在研发方面大量投资以保持我们在技术创新前沿的地位。',
    'research.strategy.content2': '我们的创新方法将基础研究与应用开发相结合，确保我们的发现转化为使客户和社会受益的实用解决方案。我们专注于有潜力改变行业和创造新机会的新兴技术。',
    'research.emerging.title': '新兴技术研究',
    'research.emerging.content1': '我们积极研究包括人工智能、机器学习、区块链、量子计算和高级分析在内的新兴技术。我们的研究团队致力于开发新算法、改进现有技术并创建创新应用。',
    'research.emerging.content2': '我们的研究倡议包括探索边缘计算的潜力、调查可持续技术解决方案以及开发网络安全和数据隐私的新方法。我们与学术机构和研究组织合作以推进技术前沿。',
    'research.development.title': '产品开发和原型制作',
    'research.development.content1': '我们的产品开发过程将严格的研究与敏捷开发方法相结合，以创建创新解决方案。我们使用快速原型制作和迭代开发来验证概念并在全面实施前完善产品。',
    'research.development.content2': '我们的开发团队与客户和最终用户密切合作，确保我们的产品满足现实世界的需求并提供切实的价值。我们采用以用户为中心的设计原则和持续反馈循环来创建既技术先进又用户友好的解决方案。',
    'research.sustainable.title': '可持续技术开发',
    'research.sustainable.content1': '我们研发努力的重要部分专注于开发在最大化效率和性能的同时最小化环境影响的可持续技术解决方案。我们研究绿色计算技术、节能算法和可持续软件架构。',
    'research.sustainable.content2': '我们的可持续发展倡议包括创建碳中和应用、优化云资源使用以及开发帮助其他组织减少环境足迹的技术。我们相信技术应该是环境善的力量。',
    'research.collaboration.title': '协作和合作伙伴关系',
    'research.collaboration.content1': '我们积极与大学、研究机构、技术公司和行业组织合作，推进研究并分享知识。我们的合作伙伴关系使我们能够获得前沿研究、分享资源并加速创新。',
    'research.collaboration.content2': '我们的协作方法包括联合研究项目、技术转移计划和参与行业联盟。我们相信最好的创新来自结合不同专业领域的多样化观点和协作努力。',
    'research.ip.title': '知识产权和创新保护',
    'research.ip.content1': '我们通过战略性知识产权管理保护我们的创新，包括专利、商标和商业秘密。我们的知识产权策略在适当的地方平衡对我们创新的保护与开放协作和知识分享。',
    'research.ip.content2': '我们还为开源项目做出贡献并分享能够惠及更广泛技术社区的研究发现。我们对知识产权管理的方法反映了我们在保护竞争优势和创新投资的同时推进技术的承诺。',
    'research.roadmap.title': '未来技术路线图',
    'research.roadmap.content1': '我们的研发路线图专注于未来几年将至关重要的技术，包括人工智能、量子计算、边缘计算和下一代网络技术。我们投资于渐进式改进和突破性创新。',
    'research.roadmap.content2': '我们持续监控技术趋势和市场发展，确保我们的研发投资与未来机会和客户需求保持一致。我们灵活的研究方法使我们能够快速适应新机会，并在有前景的新技术出现时调整我们的努力。',
    'research.impact.title': '衡量影响和成功',
    'research.impact.content1': '我们通过定量指标和定性评估来衡量我们研发努力的成功。我们的评估框架包括创新产出、技术采用、客户满意度以及对更广泛技术生态系统的贡献。',
    'research.impact.content2': '我们对研发持续改进的承诺确保我们在为行业进步做出贡献的同时保持作为技术领导者的地位。我们定期审查我们的研究优先级并调整我们的投资以最大化影响和价值创造。'
  },
  ID: {
    'nav.home': 'Beranda',
    'nav.company': 'Perusahaan',
    'nav.services': 'Layanan',
    'nav.community': 'Komunitas',
    'nav.researches': 'Penelitian',
    'nav.insights': 'Wawasan',
    'nav.careers': 'Jelajahi Karir',
    'nav.contact': 'Mari Bicara Bisnis',
    'hero.title': 'Solusi Digital Yang Mendorong Pertumbuhan',
    'hero.subtitle': 'Transformasikan bisnis Anda dengan teknologi canggih dan solusi inovatif.',
    'hero.cta': 'Mulai',
    'hero.register': 'Daftar',
    'hero.badge': 'Upvista Digital - Agensi Perangkat Lunak Terkemuka Pakistan',
    'hero.service1': 'Pengembangan Web',
    'hero.service2': 'Rekayasa Perangkat Lunak',
    'hero.service3': 'Grafis & Desain',
    'hero.service4': 'Otomasi AI',
    'hero.stats1': 'Proyek Diselesaikan',
    'hero.stats2': 'Rating Klien',
    'hero.stats3': 'Dukungan',
    // Company dropdown
    'dropdown.company.about': 'Tentang Kami',
    'dropdown.company.profile': 'Profil Perusahaan',
    'dropdown.company.sustainability': 'Keberlanjutan & Nilai',
    'dropdown.company.investors': 'Hubungan Investor',
    'dropdown.company.partners': 'Kemitraan',
    'dropdown.company.leadership': 'Kepemimpinan',
    'dropdown.company.contact': 'Hubungi Kami',
    // Company Profile Page
    'companyProfile.badge': 'Informasi Perusahaan',
    'companyProfile.title': 'Profil Perusahaan',
    'companyProfile.subtitle': 'Gambaran komprehensif tentang fondasi perusahaan Upvista Digital, struktur kepemimpinan, dan operasi bisnis.',
    'companyProfile.tradeName': 'Nama Dagang',
    'companyProfile.businessDescription': 'Deskripsi Bisnis',
    'companyProfile.ceo': 'Direktur Utama',
    'companyProfile.founded': 'Tanggal Pendirian',
    'companyProfile.fiscalYearEnd': 'Akhir Tahun Fiskal',
    'companyProfile.headOffice': 'Kantor Pusat',
    'companyProfile.legalStatus': 'Status Hukum',
    'companyProfile.serviceAreas': 'Area Layanan',
    'companyProfile.industryFocus': 'Fokus Industri',
    'companyProfile.revenueModel': 'Model Pendapatan',
    'companyProfile.clientPortfolio': 'Portofolio Klien',
    'companyProfile.qualityStandards': 'Standar Kualitas',
    'companyProfile.businessDesc1': 'Pengembangan, penjualan dan pengoperasian solusi digital.',
    'companyProfile.businessDesc2': 'Pengembangan, penjualan dan pengiriman layanan pengembangan web dan rekayasa perangkat lunak.',
    'companyProfile.ceoName': 'Hamza Hafeez',
    'companyProfile.foundedDate': '1 Juli 2025',
    'companyProfile.fiscalEnd': '30 Juni',
    'companyProfile.headOfficeLocation': 'Lahore, Pakistan',
    'companyProfile.legalStatusType': 'Usaha Perorangan',
    'companyProfile.serviceAreasGlobal': 'Global',
    'companyProfile.industryTypes': 'Layanan Teknologi, Solusi Digital, Pengembangan Perangkat Lunak',
    'companyProfile.revenueType': 'Berbasis Layanan',
    'companyProfile.clientCount': '50+ proyek berhasil di berbagai industri',
    'companyProfile.qualityRating': '4.9/5 peringkat kepuasan klien',
    // Services dropdown
    'dropdown.services.about': 'Tentang Layanan Kami',
    'dropdown.services.software': 'Pengembangan Perangkat Lunak',
    'dropdown.services.web': 'Pengembangan Web',
    'dropdown.services.ai': 'AI dan Otomasi',
    'dropdown.services.cloud': 'Cloud',
    'dropdown.services.design': 'Grafis dan Desain',
    'dropdown.services.marketing': 'Pemasaran Digital',
    // Community dropdown
    'dropdown.community.about': 'Tentang Komunitas',
    'dropdown.community.events': 'Acara',
    'dropdown.community.members': 'Anggota Komunitas',
    'dropdown.community.achievements': 'Pencapaian',
    'dropdown.community.trainings': 'Pelatihan',
    'dropdown.community.join': 'Bergabung dengan Komunitas',
    // Researches dropdown
    'dropdown.researches.about': 'Tentang Penelitian Upvista',
    'dropdown.researches.cortex': 'Proyek Cortex',
    'dropdown.researches.agi': 'Penelitian AGI',
    // Insights dropdown
    'dropdown.insights.caseStudies': 'Studi Kasus',
    'dropdown.insights.news': 'Berita',
    'dropdown.insights.blogs': 'Blog',
    'dropdown.insights.whitepapers': 'Makalah Putih',
    'dropdown.insights.events': 'Acara',
    // Homepage sections - Indonesian
    'home.transform.title': 'Mengubah Kehadiran Digital',
    'home.transform.subtitle': 'Merancang Pengalaman yang Menginspirasi Tindakan',
    'home.transform.description': 'Dari ide hingga eksekusi, kami tidak hanya membangun website — kami membangun perjalanan yang terhubung dengan orang-orang, membangun kepercayaan, dan mengubah pengunjung menjadi pelanggan setia.',
    'home.transform.exploreServices': 'Jelajahi Layanan Kami',
    'home.transform.contactUs': 'Hubungi Kami',
    'home.partnership.title': 'Bermitra untuk Pertumbuhan Digital Anda',
    'home.partnership.description': 'Kami tidak hanya memberikan proyek—kami membangun kemitraan jangka panjang yang memberdayakan bisnis Anda untuk berkembang di dunia digital-first. Pendekatan kami kolaboratif, transparan, dan berfokus pada kesuksesan Anda.',
    'home.partnership.explore': 'Jelajahi Kemitraan',
    'home.partnership.premium': 'Kolaborasi Premium',
    'home.partnership.subtitle': 'Mari kita ciptakan bersama solusi digital yang menetapkan standar baru untuk keunggulan.',
    'home.expertise.title': 'Keahlian yang Menghasilkan Hasil',
    'home.expertise.subtitle': 'Keahlian Nyata di Seluruh Niche Digital',
    'home.expertise.description': 'Kami memberikan solusi yang disesuaikan untuk berbagai industri dan model bisnis. Tim kami membawa pengalaman praktis yang mendalam di setiap niche—tanpa embel-embel, hanya hasil yang terbukti.',
    'home.expertise.ecommerce.title': 'E-commerce',
    'home.expertise.ecommerce.description': 'Toko online khusus, integrasi pembayaran, manajemen produk, dan optimasi konversi untuk merek B2C & B2B.',
    'home.expertise.saas.title': 'Platform SaaS',
    'home.expertise.saas.description': 'Solusi SaaS yang kuat dan dapat diskalakan dengan manajemen pengguna, penagihan, analitik, dan integrasi cloud.',
    'home.expertise.healthcare.title': 'Kesehatan',
    'home.expertise.healthcare.description': 'Aplikasi yang sesuai dengan HIPAA, portal pasien, telemedicine, dan manajemen data kesehatan yang aman.',
    'home.expertise.edtech.title': 'EdTech',
    'home.expertise.edtech.description': 'Sistem manajemen pembelajaran, platform e-learning, dan alat pendidikan interaktif.',
    'home.expertise.fintech.title': 'FinTech',
    'home.expertise.fintech.description': 'Gateway pembayaran yang aman, dompet digital, dan platform analitik keuangan.',
    'home.expertise.portfolio.title': 'Portfolio & Kreatif',
    'home.expertise.portfolio.description': 'Portfolio pribadi, situs agensi kreatif, dan showcase digital untuk seniman dan profesional.',
    'home.expertise.explore': 'Jelajahi Solusi Kami',
    'home.services.title': 'Layanan Inti Kami',
    'home.services.subtitle': 'Solusi Digital yang Menghasilkan Hasil',
    'home.services.description': 'Dari konsep hingga deployment, kami memberikan solusi digital komprehensif yang mengubah bisnis Anda dan mempercepat pertumbuhan di lanskap digital.',
    'home.services.software.title': 'Pengembangan Perangkat Lunak',
    'home.services.software.description': 'Solusi perangkat lunak khusus yang dibangun dengan teknologi terdepan. Dari aplikasi web hingga perangkat lunak desktop, kami memberikan kode yang dapat diskalakan dan dapat dipelihara.',
    'home.services.software.learnMore': 'Pelajari lebih lanjut',
    'home.services.web.title': 'Pengembangan Web',
    'home.services.web.description': 'Website dan aplikasi web modern yang responsif yang memberikan pengalaman pengguna yang luar biasa dan mendorong pertumbuhan bisnis.',
    'home.services.web.learnMore': 'Pelajari lebih lanjut',
    'home.services.cloud.title': 'Solusi Cloud',
    'home.services.cloud.description': 'Infrastruktur cloud komprehensif, migrasi, dan layanan manajemen untuk mengoptimalkan operasi bisnis dan skalabilitas Anda.',
    'home.services.cloud.learnMore': 'Pelajari lebih lanjut',
    'home.services.ai.title': 'AI & Otomasi',
    'home.services.ai.description': 'Solusi otomasi cerdas dan aplikasi bertenaga AI yang merampingkan proses dan meningkatkan kemampuan pengambilan keputusan.',
    'home.services.ai.learnMore': 'Pelajari lebih lanjut',
    'home.services.design.title': 'Grafis & Desain',
    'home.services.design.description': 'Layanan desain grafis profesional, branding, dan identitas visual yang membuat merek Anda menonjol di lanskap digital.',
    'home.services.design.learnMore': 'Pelajari lebih lanjut',
    'home.services.marketing.title': 'Pemasaran Digital',
    'home.services.marketing.description': 'Kampanye pemasaran digital strategis, optimasi SEO, manajemen media sosial, dan analitik kinerja untuk memaksimalkan jangkauan online dan ROI Anda.',
    'home.services.marketing.learnMore': 'Pelajari lebih lanjut',
    'home.services.exploreAll': 'Jelajahi Semua Layanan',
    'home.webDesign.title': 'Ahli Desain Web',
    'home.webDesign.subtitle': 'Bangun Kehadiran Digital Anda dengan Percaya Diri',
    'home.webDesign.description': 'Upvista menciptakan pengalaman digital yang kuat yang tidak hanya terlihat hebat, tetapi memberikan pertumbuhan yang terukur dan dampak yang bertahan lama.',
    'home.webDesign.getStarted': 'Mulai Sekarang',
    'home.webDesign.viewWork': 'Lihat Karya Kami',
    'home.testimonials.title': 'Testimonial',
    'home.testimonials.subtitle': 'Apa yang dikatakan pengguna kami',
    'home.testimonials.description': 'Lihat apa yang dikatakan pelanggan kami tentang kami.',
    'home.testimonials.testimonial1': 'Tim mereka membuat website yang indah dan fungsional untuk kami. Ini meningkatkan visibilitas dan kepercayaan klien secara dramatis.',
    'home.testimonials.testimonial2': 'Kami membutuhkan halaman landing yang mengkonversi — dan mereka memberikan. Desain bersih, loading cepat, dan dioptimalkan dengan sempurna.',
    'home.testimonials.testimonial3': 'Desain UI/UX melampaui harapan kami. Tata letak intuitif dan branding yang konsisten membantu meningkatkan produk digital kami.',
    'home.testimonials.testimonial4': 'Dari branding hingga pengembangan website, semuanya ditangani dengan kreativitas dan profesionalisme.',
    'home.testimonials.testimonial5': 'Desain halaman landing mereka membantu kami meningkatkan konversi sebesar 35% — menakjubkan secara visual dan mobile-friendly.',
    'home.testimonials.testimonial6': 'Kolaborasi yang hebat dan proses yang jelas. Mereka memahami kebutuhan kami dan membangun solusi khusus yang mencerminkan merek kami.',
    'home.testimonials.testimonial7': 'Tim profesional dan pengiriman tepat waktu. Branding kami sekarang modern, berani, dan konsisten di semua platform.',
    'home.testimonials.testimonial8': 'Mereka membantu kami rebrand dan mendesain ulang website — hasilnya adalah pengalaman yang elegan dan modern yang menonjol.',
    'home.testimonials.testimonial9': 'Pembaruan UI/UX memberikan kejelasan pada penawaran layanan kami. Pengguna kami sekarang tinggal lebih lama dan menjelajah lebih banyak.',
    'home.whyChoose.title': 'Mengapa Memilih Kami',
    'home.whyChoose.description': 'Kami membangun solusi digital yang terjangkau, khusus, dan dapat diskalakan untuk bisnis modern — dengan cepat.',
    'home.whyChoose.transparentPricing': 'Harga transparan',
    'home.whyChoose.fixedDeadlines': 'Tenggat waktu tetap',
    'home.whyChoose.cleanDesign': 'Desain bersih',
    'home.whyChoose.freeConsultation': 'Konsultasi gratis',
    'home.whyChoose.longTermSupport': 'Dukungan jangka panjang',
    'home.whyChoose.flexibleTech': 'Stack teknologi fleksibel',
    'home.palestine.title': 'Upvista berdiri bersama Palestina dan rakyatnya',
    'home.join.title': 'Bergabunglah dengan Kami',
    // Footer translations
    'footer.description': 'Memberdayakan bisnis dengan solusi digital canggih. Kami menyediakan pengembangan perangkat lunak inovatif, layanan web komprehensif, dan kemitraan teknologi transformatif yang mendorong pertumbuhan dan kesuksesan.',
    'footer.paymentMethods': 'Metode Pembayaran',
    'footer.payoneer': 'Payoneer',
    'footer.bankTransfer': 'Transfer Bank',
    'footer.jazzCash': 'JazzCash',
    'footer.easyPaisa': 'EasyPaisa',
    'footer.company': 'Perusahaan',
    'footer.aboutUs': 'Tentang Kami',
    'footer.companyProfile': 'Profil Perusahaan',
    'footer.sustainability': 'Keberlanjutan & Nilai',
    'footer.investorRelations': 'Hubungan Investor',
    'footer.partnerships': 'Kemitraan',
    'footer.leadership': 'Kepemimpinan',
    'footer.contactUs': 'Hubungi Kami',
    'footer.careers': 'Karir',
    'footer.services': 'Layanan',
    'footer.allServices': 'Semua Layanan',
    'footer.softwareDevelopment': 'Pengembangan Perangkat Lunak',
    'footer.webDevelopment': 'Pengembangan Web',
    'footer.aiAutomation': 'AI & Otomasi',
    'footer.cloudSolutions': 'Solusi Cloud',
    'footer.graphicsDesign': 'Grafis & Desain',
    'footer.digitalMarketing': 'Pemasaran Digital',
    'footer.consultService': 'Konsultasi untuk layanan apa pun',
    'footer.communityResources': 'Komunitas & Sumber Daya',
    'footer.aboutCommunity': 'Tentang Komunitas',
    'footer.events': 'Acara',
    'footer.communityMembers': 'Anggota Komunitas',
    'footer.trainings': 'Pelatihan',
    'footer.research': 'Penelitian',
    'footer.projectCortex': 'Proyek Cortex',
    'footer.blog': 'Blog',
    'footer.faq': 'FAQ',
    'footer.whatsappUs': 'Hubungi kami via WhatsApp',
    'footer.linkedinUs': 'Hubungi kami via LinkedIn',
    'footer.messengerUs': 'Hubungi kami via Messenger',
    'footer.copyright': '© 2025 Upvista Digital. Semua hak dilindungi.',
    'footer.termsConditions': 'Syarat & Ketentuan',
    'footer.privacyPolicy': 'Kebijakan Privasi',
    'footer.trademarkCopyright': 'Merek Dagang & Hak Cipta',
    'footer.dataProtection': 'Perlindungan Data',
    'carousel.technologies': 'Teknologi yang Kami Gunakan',
    // Sustainability Page
    'sustainability.badge': 'Masa Depan Berkelanjutan',
    'sustainability.title': 'Keberlanjutan & Nilai',
    'sustainability.subtitle': 'Pendekatan komprehensif kami terhadap tanggung jawab lingkungan, dampak sosial, dan praktik bisnis etis yang membentuk budaya perusahaan dan memandu operasi kami.',
    'sustainability.learnMore': 'Pelajari Lebih Lanjut',
    'sustainability.policy.title': 'Kebijakan Keberlanjutan',
    'sustainability.policy.description': 'Kerangka komprehensif kami untuk pengelolaan lingkungan, tanggung jawab sosial, dan praktik bisnis berkelanjutan.',
    'sustainability.values.title': 'Nilai Perusahaan',
    'sustainability.values.description': 'Prinsip dan nilai inti yang memandu pengambilan keputusan dan membentuk budaya organisasi kami.',
    'sustainability.humanRights.title': 'Kebijakan Hak Asasi Manusia',
    'sustainability.humanRights.description': 'Komitmen kami untuk melindungi dan mempromosikan hak asasi manusia di semua operasi dan kemitraan kami.',
    'sustainability.humanCapital.title': 'Inisiatif Modal Manusia',
    'sustainability.humanCapital.description': 'Program dan inisiatif yang berfokus pada pengembangan karyawan, kesejahteraan, dan menciptakan tempat kerja yang inklusif.',
    'sustainability.environmental.title': 'Filosofi Lingkungan',
    'sustainability.environmental.description': 'Pendekatan kami untuk meminimalkan dampak lingkungan dan mempromosikan praktik berkelanjutan dalam teknologi.',
    'sustainability.social.title': 'Filosofi Sosial',
    'sustainability.social.description': 'Komitmen kami terhadap tanggung jawab sosial dan dampak positif komunitas melalui solusi teknologi.',
    'sustainability.governance.title': 'Tata Kelola Perusahaan',
    'sustainability.governance.description': 'Kerangka tata kelola kami untuk memastikan transparansi, akuntabilitas, dan praktik bisnis etis.',
    'sustainability.research.title': 'Penelitian & Pengembangan',
    'sustainability.research.description': 'Inisiatif inovasi yang berfokus pada solusi teknologi berkelanjutan dan praktik inovasi yang bertanggung jawab.',
    // Sustainability Policy Page
    'policy.badge': 'Kerangka Keberlanjutan',
    'policy.title': 'Kebijakan Keberlanjutan',
    'policy.subtitle': 'Kerangka komprehensif kami untuk pengelolaan lingkungan, tanggung jawab sosial, dan praktik bisnis berkelanjutan yang memandu setiap aspek operasi kami.',
    'policy.environmental.title': 'Komitmen Lingkungan',
    'policy.environmental.content1': 'Di Upvista Digital, kami menyadari tanggung jawab kami untuk meminimalkan dampak lingkungan melalui praktik berkelanjutan. Kebijakan lingkungan kami mencakup efisiensi energi, pengurangan limbah, dan minimisasi jejak karbon di semua operasi bisnis.',
    'policy.environmental.content2': 'Kami memprioritaskan solusi berbasis cloud dan teknologi hemat energi untuk mengurangi jejak karbon digital kami. Praktik pengembangan kami menekankan kode bersih, kinerja yang dioptimalkan, dan pola arsitektur berkelanjutan yang meminimalkan konsumsi sumber daya.',
    'policy.social.title': 'Kerangka Tanggung Jawab Sosial',
    'policy.social.content1': 'Kebijakan tanggung jawab sosial kami berfokus pada menciptakan dampak positif melalui teknologi. Kami percaya pada inklusi digital, mendukung komunitas melalui solusi yang digerakkan teknologi, dan memastikan layanan kami menguntungkan masyarakat secara keseluruhan.',
    'policy.social.content2': 'Kami secara aktif terlibat dalam program mentoring, inisiatif pendidikan, dan proyek pengembangan komunitas. Komitmen kami meluas hingga mendukung ekosistem teknologi lokal dan memupuk inovasi yang mengatasi tantangan dunia nyata.',
    'policy.business.title': 'Praktik Bisnis Berkelanjutan',
    'policy.business.content1': 'Praktik bisnis kami dirancang dengan keberlanjutan sebagai intinya. Kami menerapkan pelaporan transparan, pengadaan etis, dan manajemen proyek yang bertanggung jawab yang mempertimbangkan dampak lingkungan dan sosial jangka panjang.',
    'policy.business.content2': 'Kami mempertahankan standar tata kelola perusahaan yang tinggi, memastikan akuntabilitas dalam semua operasi kami. Hubungan klien kami dibangun di atas kepercayaan, transparansi, dan komitmen bersama untuk tujuan pembangunan berkelanjutan.',
    'policy.implementation.title': 'Implementasi dan Pemantauan',
    'policy.implementation.content1': 'Kebijakan keberlanjutan ini secara aktif diimplementasikan di semua departemen dan proyek. Kami secara teratur memantau kemajuan kami, mengukur dampak kami, dan terus meningkatkan praktik kami untuk memastikan kami memenuhi dan melampaui komitmen keberlanjutan kami.',
    'policy.implementation.content2': 'Tim kami menerima pelatihan rutin tentang praktik keberlanjutan, dan kami mendorong inovasi dalam solusi teknologi berkelanjutan. Kami berkomitmen untuk menjadi pemimpin dalam pengembangan dan penyebaran teknologi yang bertanggung jawab.',
    // Corporate Values Page
    'values.badge': 'Prinsip Inti',
    'values.title': 'Nilai Perusahaan',
    'values.subtitle': 'Prinsip dan nilai inti yang memandu pengambilan keputusan, membentuk budaya organisasi kami, dan mendefinisikan cara kami menjalankan bisnis di lanskap digital.',
    'values.innovation.title': 'Inovasi dan Keunggulan',
    'values.innovation.content1': 'Kami berkomitmen untuk mendorong batas-batas apa yang mungkin dalam teknologi. Inovasi bukan hanya kata kunci bagi kami; itu adalah fondasi dari semua yang kami lakukan. Kami terus mencari cara baru untuk memecahkan masalah kompleks dan memberikan hasil yang luar biasa untuk klien kami.',
    'values.innovation.content2': 'Keunggulan dalam eksekusi adalah standar kami. Kami percaya bahwa setiap proyek, tidak peduli seberapa kecil, layak mendapat upaya terbaik kami. Komitmen terhadap kualitas ini mendorong kami untuk terus meningkatkan proses, teknologi, dan pengiriman layanan kami.',
    'values.integrity.title': 'Integritas dan Transparansi',
    'values.integrity.content1': 'Integritas membentuk fondasi dari semua hubungan kami. Kami menjalankan bisnis dengan kejujuran, keadilan, dan rasa hormat terhadap semua pemangku kepentingan. Transparansi kami dalam komunikasi memastikan bahwa klien, mitra, dan anggota tim selalu tahu di mana mereka berdiri.',
    'values.integrity.content2': 'Kami percaya bahwa kepercayaan diperoleh melalui tindakan yang konsisten dan komunikasi yang jujur. Komitmen kami terhadap transparansi meluas ke manajemen proyek, penetapan harga, timeline, dan tantangan apa pun yang kami hadapi di sepanjang jalan.',
    'values.collaboration.title': 'Kolaborasi dan Kemitraan',
    'values.collaboration.content1': 'Kami melihat setiap hubungan klien sebagai kemitraan yang sesungguhnya. Kolaborasi adalah kunci kesuksesan kami, dan kami bekerja erat dengan klien untuk memahami tantangan dan tujuan unik mereka. Pendekatan berbasis tim kami memastikan perspektif yang beragam dan solusi yang komprehensif.',
    'values.collaboration.content2': 'Secara internal, kami menumbuhkan budaya kolaborasi di mana masukan setiap anggota tim dihargai. Kami percaya bahwa solusi terbaik muncul ketika berbagai bakat dan perspektif berkumpul untuk mengatasi tantangan kompleks.',
    'values.learning.title': 'Pembelajaran dan Pertumbuhan Berkelanjutan',
    'values.learning.content1': 'Dalam dunia teknologi yang berkembang pesat, pembelajaran berkelanjutan sangat penting. Kami berinvestasi besar dalam pengembangan profesional tim kami, menyediakan kesempatan untuk pelatihan, sertifikasi, dan peningkatan keterampilan.',
    'values.learning.content2': 'Kami mendorong eksperimen dan pembelajaran dari kegagalan. Budaya kami mempromosikan berbagi pengetahuan, mentoring, dan pengejaran teknologi dan metodologi baru yang dapat menguntungkan klien kami dan memajukan kemampuan kami.',
    'values.client.title': 'Kesuksesan Klien dan Penciptaan Nilai',
    'values.client.content1': 'Kesuksesan kami diukur oleh kesuksesan klien kami. Kami berkomitmen untuk memberikan solusi yang tidak hanya memenuhi persyaratan tetapi melampaui harapan dan mendorong nilai bisnis yang nyata. Setiap proyek didekati dengan tujuan menciptakan dampak positif yang berkelanjutan.',
    'values.client.content2': 'Kami mengambil pandangan jangka panjang dari hubungan klien, berfokus pada solusi berkelanjutan yang akan melayani klien kami dengan baik di masa depan. Proposisi nilai kami melampaui keahlian teknis untuk mencakup pemikiran strategis, kecerdasan bisnis, dan dukungan berkelanjutan.',
    // Human Capital Initiatives Page
    'humanCapital.badge': 'Pendekatan Berorientasi Orang',
    'humanCapital.title': 'Inisiatif Modal Manusia',
    'humanCapital.subtitle': 'Program dan inisiatif komprehensif yang berfokus pada pengembangan karyawan, kesejahteraan, dan menciptakan lingkungan kerja yang inklusif yang memberdayakan aset terbesar kami - orang-orang kami.',
    'humanCapital.development.title': 'Program Pengembangan Profesional',
    'humanCapital.development.content1': 'Kami berinvestasi besar-besaran dalam pertumbuhan dan pengembangan berkelanjutan anggota tim kami. Program pengembangan profesional komprehensif kami meliputi pelatihan teknis, pengembangan kepemimpinan, dan peningkatan keterampilan lunak untuk memastikan karyawan kami tetap berada di garis depan bidang mereka.',
    'humanCapital.development.content2': 'Inisiatif pengembangan kami meliputi program mentoring, peluang proyek lintas fungsi, kehadiran konferensi, dukungan sertifikasi, dan akses ke alat dan teknologi terdepan. Kami percaya bahwa berinvestasi dalam pertumbuhan orang-orang kami secara langsung diterjemahkan menjadi hasil yang lebih baik untuk klien dan perusahaan kami.',
    'humanCapital.wellbeing.title': 'Kesejahteraan Karyawan dan Keseimbangan Kerja-Hidup',
    'humanCapital.wellbeing.content1': 'Kami menyadari bahwa kesejahteraan karyawan adalah fundamental untuk kebahagiaan pribadi dan kesuksesan profesional. Inisiatif kesejahteraan kami meliputi pengaturan kerja yang fleksibel, program dukungan kesehatan mental, kegiatan wellness, dan tunjangan kesehatan komprehensif.',
    'humanCapital.wellbeing.content2': 'Kebijakan keseimbangan kerja-hidup kami meliputi opsi kerja jarak jauh, jam kerja fleksibel, kebijakan liburan yang murah hati, dan praktik yang ramah keluarga. Kami memahami bahwa karyawan kami memiliki kehidupan di luar kerja, dan kami mendukung mereka dalam mempertahankan keseimbangan yang sehat antara komitmen profesional dan pribadi mereka.',
    'humanCapital.diversity.title': 'Keberagaman, Keadilan, dan Inklusi',
    'humanCapital.diversity.content1': 'Kami berkomitmen untuk menciptakan lingkungan kerja yang inklusif di mana keberagaman dirayakan dan semua orang merasa dihargai dan dihormati. Inisiatif keberagaman, keadilan, dan inklusi kami berfokus pada merekrut dari kumpulan bakat yang beragam, menyediakan peluang yang sama untuk kemajuan, dan memupuk lingkungan yang menciptakan rasa memiliki.',
    'humanCapital.diversity.content2': 'Upaya inklusi kami meliputi pelatihan bias tidak sadar, praktik perekrutan yang beragam, kelompok sumber daya karyawan, dan penilaian rutin budaya tempat kerja kami. Kami percaya bahwa perspektif yang beragam mengarah pada inovasi yang lebih baik, pemecahan masalah, dan hasil bisnis.',
    'humanCapital.knowledge.title': 'Budaya Berbagi Pengetahuan dan Inovasi',
    'humanCapital.knowledge.content1': 'Kami memupuk budaya berbagi pengetahuan dan pembelajaran berkelanjutan. Inisiatif inovasi kami meliputi tech talk rutin, hackathon, tantangan inovasi, dan peluang bagi karyawan untuk mengejar proyek passion yang dapat menguntungkan perusahaan dan klien kami.',
    'humanCapital.knowledge.content2': 'Kami mendorong kolaborasi lintas tim dan menyediakan platform bagi karyawan untuk berbagi keahlian mereka, belajar dari orang lain, dan berkontribusi pada pengetahuan kolektif organisasi. Budaya berbagi dan inovasi ini mendorong pertumbuhan pribadi dan kemajuan perusahaan.',
    'humanCapital.recognition.title': 'Pengakuan dan Kemajuan Karir',
    'humanCapital.recognition.content1': 'Kami percaya dalam mengakui dan menghargai keunggulan. Program pengakuan kami meliputi bonus berbasis kinerja, penghargaan pencapaian, dan pengakuan publik atas kontribusi luar biasa. Kami menyediakan jalur kemajuan karir yang jelas dan mendukung karyawan dalam mencapai tujuan profesional mereka.',
    'humanCapital.recognition.content2': 'Kerangka pengembangan karir kami meliputi tinjauan kinerja rutin, penetapan tujuan, penilaian keterampilan, dan rencana pengembangan yang dipersonalisasi. Kami berinvestasi dalam kesuksesan karir jangka panjang karyawan kami, mengetahui bahwa pertumbuhan mereka secara langsung berkontribusi pada kesuksesan perusahaan.',
    'humanCapital.community.title': 'Keterlibatan Komunitas dan Dampak Sosial',
    'humanCapital.community.content1': 'Kami mendorong karyawan kami untuk terlibat dengan komunitas mereka dan berkontribusi pada penyebab sosial. Inisiatif keterlibatan komunitas kami meliputi cuti sukarela, program tanggung jawab sosial perusahaan, dan dukungan untuk kegiatan amal pribadi karyawan.',
    'humanCapital.community.content2': 'Kami percaya bahwa karyawan yang terlibat yang berkontribusi pada komunitas mereka lebih puas dan membawa energi positif itu kembali ke pekerjaan mereka. Program dampak sosial kami memungkinkan karyawan menggunakan keterampilan dan keahlian mereka untuk membuat perbedaan di dunia.',
    // Human Rights Policy Page
    'humanRights.badge': 'Komitmen Hak Asasi Manusia',
    'humanRights.title': 'Kebijakan Hak Asasi Manusia',
    'humanRights.subtitle': 'Komitmen teguh kami untuk melindungi dan memajukan hak asasi manusia di seluruh operasi, kemitraan, dan solusi teknologi kami yang melayani komunitas di seluruh dunia.',
    'humanRights.universal.title': 'Prinsip-Prinsip Hak Asasi Manusia Universal',
    'humanRights.universal.content1': 'Upvista Digital berkomitmen untuk menjunjung tinggi Deklarasi Universal Hak Asasi Manusia dan semua standar hak asasi manusia internasional yang relevan. Kami menyadari bahwa teknologi memiliki kekuatan untuk melindungi dan berpotensi melanggar hak asasi manusia, dan kami berdedikasi untuk memastikan solusi kami memajukan martabat dan kebebasan manusia.',
    'humanRights.universal.content2': 'Kebijakan hak asasi manusia kami berlaku untuk semua aspek operasi bisnis kami, termasuk hubungan karyawan, kemitraan klien, manajemen rantai pasok, dan pengembangan serta penyebaran solusi teknologi yang berdampak pada individu dan komunitas.',
    'humanRights.workplace.title': 'Hak Asasi Manusia di Tempat Kerja',
    'humanRights.workplace.content1': 'Kami mempertahankan lingkungan kerja yang menghormati dan melindungi hak-hak fundamental semua karyawan. Ini termasuk hak untuk perlakuan yang adil, kebebasan dari diskriminasi, kondisi kerja yang aman, dan hak untuk menyuarakan kekhawatiran tanpa takut akan pembalasan.',
    'humanRights.workplace.content2': 'Komitmen kami meluas untuk memastikan kesempatan yang sama untuk kemajuan karir, praktik kompensasi yang adil, dan menciptakan lingkungan yang inklusif di mana keberagaman dirayakan dan semua individu dapat berkembang terlepas dari latar belakang, identitas, atau keyakinan mereka.',
    'humanRights.privacy.title': 'Privasi dan Hak Digital',
    'humanRights.privacy.content1': 'Di era digital kita, privasi adalah hak asasi manusia yang fundamental. Kami berkomitmen untuk melindungi hak privasi semua individu yang datanya kami tangani, baik mereka adalah karyawan kami, klien, atau pengguna akhir dari solusi yang kami kembangkan.',
    'humanRights.privacy.content2': 'Solusi teknologi kami dirancang dengan prinsip privasi-by-design, memastikan bahwa perlindungan data dibangun ke dalam setiap sistem dari awal. Kami mengimplementasikan langkah-langkah keamanan yang kuat dan praktik penanganan data yang transparan yang menghormati otonomi dan persetujuan individu.',
    'humanRights.community.title': 'Dampak Komunitas dan Aksesibilitas',
    'humanRights.community.content1': 'Kami percaya bahwa teknologi harus dapat diakses oleh semua orang dan tidak boleh menciptakan atau melanggengkan ketidaksetaraan. Solusi kami dirancang dengan mempertimbangkan aksesibilitas, memastikan bahwa individu dengan disabilitas dapat berpartisipasi penuh dalam dunia digital.',
    'humanRights.community.content2': 'Kami secara aktif bekerja untuk menjembatani kesenjangan digital dengan mendukung inisiatif yang menyediakan akses teknologi untuk komunitas yang kurang terlayani. Komitmen kami terhadap hak asasi manusia termasuk memastikan bahwa solusi teknologi kami mempromosikan inklusi sosial daripada eksklusi.',
    'humanRights.ethical.title': 'Pengembangan Teknologi Etis',
    'humanRights.ethical.content1': 'Kami berkomitmen untuk mengembangkan teknologi yang menghormati hak asasi manusia dan mempromosikan kemakmuran manusia. Ini termasuk menghindari pengembangan teknologi yang dapat digunakan untuk melanggar hak asasi manusia, seperti sistem pengawasan yang melanggar privasi atau sistem AI yang melanggengkan bias dan diskriminasi.',
    'humanRights.ethical.content2': 'Kerangka etis kami memandu semua keputusan pengembangan teknologi, memastikan bahwa kami mempertimbangkan implikasi hak asasi manusia yang potensial dari solusi kami. Kami melakukan penilaian dampak hak asasi manusia secara teratur dan mempertahankan dialog berkelanjutan dengan pemangku kepentingan untuk memastikan teknologi kami melayani kepentingan terbaik umat manusia.',
    'humanRights.implementation.title': 'Implementasi dan Akuntabilitas',
    'humanRights.implementation.content1': 'Kebijakan hak asasi manusia ini bukan hanya dokumen; ini adalah komitmen hidup yang memandu operasi harian kami. Kami menyediakan pelatihan teratur untuk semua karyawan tentang prinsip-prinsip hak asasi manusia dan mempertahankan mekanisme yang kuat untuk melaporkan dan menangani setiap kekhawatiran.',
    'humanRights.implementation.content2': 'Kami mempertanggungjawabkan diri terhadap prinsip-prinsip ini melalui audit teratur, keterlibatan pemangku kepentingan, dan pelaporan transparan tentang kinerja hak asasi manusia kami. Komitmen kami terhadap hak asasi manusia adalah fundamental bagi identitas kami sebagai perusahaan teknologi yang bertanggung jawab.',
    // Environmental Philosophy Page
    'environmental.badge': 'Kepemimpinan Teknologi Hijau',
    'environmental.title': 'Filosofi Lingkungan',
    'environmental.subtitle': 'Pendekatan komprehensif kami untuk meminimalkan dampak lingkungan dan mempromosikan praktik berkelanjutan dalam pengembangan teknologi, operasi, dan solusi klien.',
    'environmental.development.title': 'Pengembangan Teknologi Berkelanjutan',
    'environmental.development.content1': 'Kami percaya bahwa teknologi harus menjadi kekuatan untuk kebaikan lingkungan, bukan sumber bahaya lingkungan. Praktik pengembangan kami mengutamakan efisiensi energi, optimasi sumber daya, dan dampak lingkungan minimal. Setiap solusi yang kami buat dirancang dengan prinsip keberlanjutan sebagai intinya.',
    'environmental.development.content2': 'Pendekatan pengembangan berkelanjutan kami meliputi praktik pengkodean hijau, algoritma yang dioptimalkan yang mengurangi persyaratan komputasi, dan pilihan infrastruktur cloud yang meminimalkan jejak karbon. Kami terus meneliti dan mengimplementasikan teknologi baru yang dapat membantu mengurangi dampak lingkungan.',
    'environmental.carbon.title': 'Pengurangan Jejak Karbon',
    'environmental.carbon.content1': 'Kami berkomitmen untuk mengurangi jejak karbon kami di semua operasi. Ini termasuk menggunakan sumber energi terbarukan untuk kantor kami, mengimplementasikan perangkat keras dan perangkat lunak yang efisien energi, dan memilih penyedia cloud yang mengutamakan keberlanjutan dan energi terbarukan.',
    'environmental.carbon.content2': 'Inisiatif pengurangan karbon kami meliputi kebijakan kerja jarak jauh yang mengurangi emisi perjalanan, praktik digital-first yang meminimalkan penggunaan kertas, dan desain kantor yang efisien energi. Kami secara teratur mengukur dan melaporkan jejak karbon kami dan menetapkan target ambisius untuk pengurangan.',
    'environmental.cloud.title': 'Komputasi Cloud Hijau dan Infrastruktur',
    'environmental.cloud.content1': 'Kami mengutamakan solusi komputasi cloud yang ditenagai oleh energi terbarukan dan dioperasikan oleh penyedia dengan komitmen lingkungan yang kuat. Pilihan infrastruktur kami dipandu oleh metrik keberlanjutan, termasuk intensitas karbon, efisiensi energi, dan sertifikasi lingkungan.',
    'environmental.cloud.content2': 'Pendekatan infrastruktur hijau kami meliputi komputasi serverless untuk meminimalkan penggunaan sumber daya, auto-scaling untuk mencocokkan permintaan dan mengurangi limbah, dan pemilihan pusat data berdasarkan kriteria lingkungan. Kami bekerja dengan klien untuk mengoptimalkan penggunaan cloud mereka untuk kinerja dan dampak lingkungan.',
    'environmental.digital.title': 'Solusi Digital untuk Tantangan Lingkungan',
    'environmental.digital.content1': 'Kami mengembangkan solusi teknologi yang membantu klien kami mengurangi dampak lingkungan mereka. Ini termasuk sistem manajemen energi, aplikasi pengurangan limbah, alat optimasi rantai pasok, dan platform pelaporan keberlanjutan yang memungkinkan pengambilan keputusan lingkungan yang lebih baik.',
    'environmental.digital.content2': 'Solusi teknologi lingkungan kami membantu bisnis melacak emisi karbon mereka, mengoptimalkan penggunaan sumber daya, dan mengimplementasikan praktik berkelanjutan. Kami percaya bahwa teknologi dapat menjadi alat yang kuat untuk perlindungan lingkungan dan keberlanjutan.',
    'environmental.waste.title': 'Pengurangan Limbah dan Ekonomi Sirkular',
    'environmental.waste.content1': 'Kami mengadopsi prinsip ekonomi sirkular dalam operasi dan pengembangan teknologi kami. Ini termasuk memperpanjang siklus hidup perangkat keras, mempromosikan penggunaan ulang dan modularitas perangkat lunak, dan merancang sistem yang dapat dengan mudah diperbarui daripada diganti.',
    'environmental.waste.content2': 'Inisiatif pengurangan limbah kami meliputi praktik kantor bebas kertas, program daur ulang limbah elektronik, dan proses digital-first yang meminimalkan konsumsi sumber daya fisik. Kami mendorong klien kami untuk mengadopsi praktik serupa melalui solusi yang kami kembangkan.',
    'environmental.education.title': 'Pendidikan dan Advokasi Lingkungan',
    'environmental.education.content1': 'Kami percaya pada kekuatan pendidikan dan advokasi untuk mendorong perubahan lingkungan. Anggota tim kami menerima pelatihan teratur tentang praktik terbaik lingkungan, dan kami berbagi pengetahuan dengan klien dan komunitas teknologi yang lebih luas.',
    'environmental.education.content2': 'Kami secara aktif berpartisipasi dalam inisiatif lingkungan, mendukung penelitian teknologi hijau, dan mengadvokasi kebijakan yang mempromosikan pengembangan teknologi berkelanjutan. Tujuan kami adalah menjadi kekuatan positif untuk perubahan lingkungan dalam industri teknologi.',
    'environmental.improvement.title': 'Perbaikan Berkelanjutan dan Inovasi',
    'environmental.improvement.content1': 'Keberlanjutan lingkungan adalah perjalanan yang berkelanjutan, bukan tujuan. Kami terus meneliti teknologi dan praktik baru yang dapat lebih mengurangi dampak lingkungan kami. Upaya inovasi kami berfokus pada pengembangan solusi yang canggih secara teknologi dan bertanggung jawab secara lingkungan.',
    'environmental.improvement.content2': 'Kami secara teratur menilai kinerja lingkungan kami, menetapkan tujuan ambisius untuk perbaikan, dan berinvestasi dalam teknologi dan praktik yang memajukan misi keberlanjutan kami. Komitmen kami terhadap tanggung jawab lingkungan mendorong kami untuk terus mencari cara yang lebih baik untuk melayani klien kami sambil melindungi planet kita.',
    // Social Philosophy Page
    'social.badge': 'Misi Dampak Sosial',
    'social.title': 'Filosofi Sosial',
    'social.subtitle': 'Komitmen kami terhadap tanggung jawab sosial dan dampak komunitas positif melalui solusi teknologi yang memberdayakan individu, memperkuat komunitas, dan mempromosikan kesetaraan sosial.',
    'social.good.title': 'Teknologi untuk Kebaikan Sosial',
    'social.good.content1': 'Kami percaya bahwa teknologi harus menjadi kekuatan untuk perubahan sosial positif, memberdayakan individu dan komunitas untuk mengatasi tantangan dan mencapai potensi penuh mereka. Filosofi sosial kami berpusat pada penggunaan keahlian teknis kami untuk mengatasi masalah dunia nyata dan menciptakan dampak yang berarti dalam masyarakat.',
    'social.good.content2': 'Komitmen kami terhadap kebaikan sosial melampaui proyek komersial kami untuk mencakup kerja pro-bono, kemitraan komunitas, dan inisiatif yang memanfaatkan teknologi untuk mengatasi ketidaksetaraan sosial, meningkatkan akses ke pendidikan dan perawatan kesehatan, dan memperkuat ketahanan komunitas.',
    'social.inclusion.title': 'Inklusi Digital dan Aksesibilitas',
    'social.inclusion.content1': 'Kami berkomitmen untuk memastikan bahwa manfaat teknologi dapat diakses oleh semua anggota masyarakat, terlepas dari latar belakang, kemampuan, atau keadaan ekonomi mereka. Inisiatif inklusi digital kami berfokus pada menghilangkan hambatan dan menciptakan solusi teknologi yang melayani semua orang.',
    'social.inclusion.content2': 'Upaya aksesibilitas kami termasuk mengembangkan solusi yang bekerja untuk penyandang disabilitas, membuat antarmuka multibahasa, dan merancang untuk lingkungan bandwidth rendah. Kami percaya bahwa desain inklusif mengarah pada solusi yang lebih baik untuk semua orang dan membantu menjembatani kesenjangan digital.',
    'social.community.title': 'Keterlibatan Komunitas dan Kemitraan',
    'social.community.content1': 'Kami secara aktif terlibat dengan komunitas lokal dan organisasi untuk memahami kebutuhan mereka dan berkontribusi keahlian kami untuk mengatasi tantangan komunitas. Kemitraan komunitas kami termasuk institusi pendidikan, organisasi nirlaba, dan inisiatif pemerintah lokal.',
    'social.community.content2': 'Keterlibatan komunitas kami termasuk program mentoring untuk siswa, lokakarya teknologi untuk anggota komunitas, dan proyek kolaboratif yang menggabungkan keterampilan teknis kami dengan pengetahuan dan kebutuhan lokal. Kami percaya bahwa komunitas yang kuat mengarah pada masyarakat yang lebih kuat.',
    'social.education.title': 'Pendidikan dan Berbagi Pengetahuan',
    'social.education.content1': 'Kami percaya pada kekuatan transformatif pendidikan dan berkomitmen untuk berbagi pengetahuan dan keahlian dengan komunitas yang lebih luas. Inisiatif pendidikan kami termasuk bootcamp coding, lokakarya teknologi, dan program mentoring yang membantu orang lain mengembangkan keterampilan teknis.',
    'social.education.content2': 'Upaya berbagi pengetahuan kami termasuk kontribusi open-source, posting blog teknis, presentasi konferensi, dan peluang pembelajaran kolaboratif. Kami percaya bahwa berbagi pengetahuan memperkuat seluruh komunitas teknologi dan menciptakan peluang untuk inovasi.',
    'social.ethical.title': 'Pengembangan Teknologi Etis',
    'social.ethical.content1': 'Kami berkomitmen untuk mengembangkan teknologi yang menghormati martabat manusia, melindungi privasi, dan mempromosikan kesetaraan sosial. Praktik pengembangan etis kami termasuk prinsip privasi-by-design, pengujian bias, dan pertimbangan implikasi sosial dari solusi kami.',
    'social.ethical.content2': 'Kerangka etis kami memandu semua keputusan pengembangan teknologi, memastikan bahwa kami mempertimbangkan dampak sosial potensial dari solusi kami. Kami melakukan tinjauan etika reguler dan mempertahankan dialog berkelanjutan dengan pemangku kepentingan untuk memastikan teknologi kami melayani kepentingan terbaik masyarakat.',
    'social.economic.title': 'Pemberdayaan Ekonomi Melalui Teknologi',
    'social.economic.content1': 'Kami percaya bahwa teknologi dapat menjadi alat yang kuat untuk pemberdayaan ekonomi, membantu individu dan bisnis mengakses peluang baru dan meningkatkan prospek ekonomi mereka. Solusi kami dirancang untuk menciptakan nilai ekonomi dan memungkinkan pertumbuhan berkelanjutan.',
    'social.economic.content2': 'Inisiatif pemberdayaan ekonomi kami termasuk mendukung bisnis kecil dengan solusi teknologi, menciptakan platform yang memungkinkan peluang ekonomi baru, dan mengembangkan alat yang membantu individu dan komunitas berpartisipasi dalam ekonomi digital.',
    'social.global.title': 'Kewarganegaraan Global dan Tanggung Jawab',
    'social.global.content1': 'Sebagai perusahaan teknologi global, kami mengakui tanggung jawab kami untuk berkontribusi positif pada komunitas tempat kami beroperasi dan masyarakat global yang lebih luas. Upaya kewarganegaraan global kami termasuk mendukung proyek pembangunan internasional dan berkontribusi pada standar teknologi global.',
    'social.global.content2': 'Kami percaya bahwa perusahaan teknologi memiliki tanggung jawab khusus untuk menggunakan sumber daya dan keahlian mereka untuk mengatasi tantangan global. Inisiatif kewarganegaraan global kami termasuk mendukung pendidikan di negara berkembang, berkontribusi pada proyek open-source, dan berpartisipasi dalam pengembangan standar teknologi internasional.',
    // Corporate Governance Page
    'governance.badge': 'Kepemimpinan Etis',
    'governance.title': 'Tata Kelola Perusahaan',
    'governance.subtitle': 'Kerangka tata kelola kami yang memastikan transparansi, akuntabilitas, dan praktik bisnis etis yang membangun kepercayaan dengan pemangku kepentingan dan mendorong kesuksesan jangka panjang yang berkelanjutan.',
    'governance.board.title': 'Kepemimpinan dan Pengawasan Dewan',
    'governance.board.content1': 'Tata kelola perusahaan kami dibangun di atas fondasi kepemimpinan dewan yang kuat dan pengawasan independen. Dewan direktur kami memberikan panduan strategis, memastikan akuntabilitas, dan mengawasi implementasi kebijakan dan prosedur tata kelola kami.',
    'governance.board.content2': 'Dewan mempertahankan komite independen untuk audit, kompensasi, dan masalah tata kelola, memastikan bahwa semua keputusan besar tunduk pada pengawasan dan tinjauan yang tepat. Struktur tata kelola kami mempromosikan transparansi, akuntabilitas, dan keselarasan dengan kepentingan pemangku kepentingan.',
    'governance.transparency.title': 'Transparansi dan Pengungkapan',
    'governance.transparency.content1': 'Kami mempertahankan standar transparansi tertinggi dalam semua operasi bisnis dan komunikasi kami. Praktik pengungkapan kami termasuk pelaporan rutin tentang kinerja keuangan, operasi bisnis, dan masalah tata kelola utama untuk memastikan pemangku kepentingan mendapat informasi yang baik.',
    'governance.transparency.content2': 'Komitmen transparansi kami meluas ke hubungan klien kami, di mana kami memberikan komunikasi yang jelas tentang kemajuan proyek, tantangan, dan hasil. Kami percaya bahwa komunikasi yang transparan membangun kepercayaan dan memungkinkan pengambilan keputusan yang lebih baik untuk semua pihak yang terlibat.',
    'governance.risk.title': 'Manajemen Risiko dan Kepatuhan',
    'governance.risk.content1': 'Kami mempertahankan sistem manajemen risiko yang komprehensif yang mengidentifikasi, menilai, dan mengurangi risiko di semua aspek operasi bisnis kami. Kerangka manajemen risiko kami termasuk penilaian rutin, perencanaan kontingensi, dan pemantauan berkelanjutan terhadap indikator risiko utama.',
    'governance.risk.content2': 'Program kepatuhan kami memastikan kepatuhan terhadap semua hukum, peraturan, dan standar industri yang berlaku. Kami mempertahankan kontrol internal yang kuat dan melakukan audit rutin untuk memastikan kepatuhan dengan persyaratan hukum dan regulasi di semua yurisdiksi di mana kami beroperasi.',
    'governance.ethics.title': 'Praktik Bisnis Etis',
    'governance.ethics.content1': 'Kami berkomitmen untuk melakukan bisnis dengan standar etis tertinggi, dipandu oleh kode etik dan kebijakan etika kami. Kerangka etis kami mencakup semua aspek operasi bisnis, dari hubungan klien hingga perilaku karyawan dan kemitraan vendor.',
    'governance.ethics.content2': 'Praktik etis kami termasuk persaingan yang adil, pengadaan yang bertanggung jawab, langkah-langkah anti-korupsi, dan perlindungan informasi rahasia. Kami memberikan pelatihan etika rutin kepada semua karyawan dan mempertahankan saluran untuk melaporkan kekhawatiran etika tanpa takut pembalasan.',
    'governance.stakeholder.title': 'Keterlibatan Pemangku Kepentingan dan Komunikasi',
    'governance.stakeholder.content1': 'Kami mempertahankan keterlibatan aktif dengan semua pemangku kepentingan kami, termasuk klien, karyawan, investor, mitra, dan komunitas di mana kami beroperasi. Keterlibatan pemangku kepentingan kami termasuk komunikasi rutin, mekanisme umpan balik, dan proses pengambilan keputusan kolaboratif.',
    'governance.stakeholder.content2': 'Praktik komunikasi kami memastikan bahwa pemangku kepentingan mendapat informasi tentang kinerja bisnis kami, arah strategis, dan perkembangan utama. Kami menghargai masukan pemangku kepentingan dan menggabungkan umpan balik ke dalam proses pengambilan keputusan kami untuk memastikan keselarasan dengan kepentingan pemangku kepentingan.',
    'governance.performance.title': 'Manajemen Kinerja dan Akuntabilitas',
    'governance.performance.content1': 'Kami mempertahankan sistem manajemen kinerja yang kuat yang memastikan akuntabilitas di semua tingkat organisasi. Kerangka kinerja kami termasuk tujuan yang jelas, tinjauan rutin, dan konsekuensi untuk pencapaian dan non-pencapaian tujuan.',
    'governance.performance.content2': 'Langkah-langkah akuntabilitas kami termasuk kompensasi eksekutif yang terkait dengan kinerja, evaluasi dewan rutin, dan penilaian independen terhadap efektivitas manajemen. Kami percaya bahwa sistem akuntabilitas yang kuat mendorong kinerja yang lebih baik dan menciptakan nilai bagi semua pemangku kepentingan.',
    'governance.improvement.title': 'Perbaikan Berkelanjutan dan Inovasi',
    'governance.improvement.content1': 'Kami terus berusaha untuk meningkatkan praktik tata kelola kami dan beradaptasi dengan lingkungan bisnis yang berubah dan harapan pemangku kepentingan. Kerangka tata kelola kami secara rutin ditinjau dan diperbarui untuk memastikan tetap efektif dan relevan.',
    'governance.improvement.content2': 'Kami membandingkan praktik tata kelola kami dengan praktik terbaik industri dan menggabungkan umpan balik dari pemangku kepentingan untuk mendorong perbaikan berkelanjutan. Komitmen kami terhadap keunggulan tata kelola memastikan bahwa kami mempertahankan kepercayaan dan keyakinan semua pemangku kepentingan sambil mendorong kesuksesan bisnis yang berkelanjutan.',
    // Research & Development Page
    'research.badge': 'Pusat Inovasi',
    'research.title': 'Penelitian & Pengembangan',
    'research.subtitle': 'Komitmen kami untuk memajukan teknologi melalui penelitian terdepan, inisiatif inovasi, dan pengembangan solusi generasi berikutnya yang membentuk masa depan transformasi digital.',
    'research.strategy.title': 'Strategi dan Visi Inovasi',
    'research.strategy.content1': 'Strategi penelitian dan pengembangan kami didorong oleh visi menciptakan solusi teknologi yang tidak hanya memenuhi kebutuhan hari ini tetapi juga mengantisipasi dan mengatasi tantangan masa depan. Kami berinvestasi signifikan dalam R&D untuk mempertahankan posisi kami di garis depan inovasi teknologi.',
    'research.strategy.content2': 'Pendekatan inovasi kami menggabungkan penelitian fundamental dengan pengembangan terapan, memastikan bahwa penemuan kami diterjemahkan menjadi solusi praktis yang menguntungkan klien dan masyarakat. Kami fokus pada teknologi yang muncul yang memiliki potensi untuk mengubah industri dan menciptakan peluang baru.',
    'research.emerging.title': 'Penelitian Teknologi yang Muncul',
    'research.emerging.content1': 'Kami secara aktif meneliti teknologi yang muncul termasuk kecerdasan buatan, pembelajaran mesin, blockchain, komputasi kuantum, dan analitik lanjutan. Tim penelitian kami bekerja pada pengembangan algoritma baru, peningkatan teknologi yang ada, dan menciptakan aplikasi inovatif.',
    'research.emerging.content2': 'Inisiatif penelitian kami termasuk mengeksplorasi potensi komputasi tepi, menyelidiki solusi teknologi berkelanjutan, dan mengembangkan pendekatan baru untuk keamanan siber dan privasi data. Kami berkolaborasi dengan institusi akademik dan organisasi penelitian untuk memajukan teknologi terdepan.',
    'research.development.title': 'Pengembangan Produk dan Prototyping',
    'research.development.content1': 'Proses pengembangan produk kami menggabungkan penelitian ketat dengan metodologi pengembangan tangkas untuk menciptakan solusi inovatif. Kami menggunakan prototyping cepat dan pengembangan iteratif untuk memvalidasi konsep dan menyempurnakan produk sebelum implementasi penuh.',
    'research.development.content2': 'Tim pengembangan kami bekerja erat dengan klien dan pengguna akhir untuk memastikan bahwa produk kami memenuhi kebutuhan dunia nyata dan memberikan nilai nyata. Kami menggunakan prinsip desain yang berpusat pada pengguna dan loop umpan balik berkelanjutan untuk menciptakan solusi yang canggih secara teknis dan ramah pengguna.',
    'research.sustainable.title': 'Pengembangan Teknologi Berkelanjutan',
    'research.sustainable.content1': 'Sebagian besar upaya R&D kami berfokus pada pengembangan solusi teknologi berkelanjutan yang meminimalkan dampak lingkungan sambil memaksimalkan efisiensi dan kinerja. Kami meneliti teknik komputasi hijau, algoritma hemat energi, dan arsitektur perangkat lunak berkelanjutan.',
    'research.sustainable.content2': 'Inisiatif pengembangan berkelanjutan kami termasuk menciptakan aplikasi netral karbon, mengoptimalkan penggunaan sumber daya cloud, dan mengembangkan teknologi yang membantu organisasi lain mengurangi jejak lingkungan mereka. Kami percaya bahwa teknologi harus menjadi kekuatan untuk kebaikan lingkungan.',
    'research.collaboration.title': 'Kolaborasi dan Kemitraan',
    'research.collaboration.content1': 'Kami secara aktif berkolaborasi dengan universitas, institusi penelitian, perusahaan teknologi, dan organisasi industri untuk memajukan penelitian dan berbagi pengetahuan. Kemitraan kami memungkinkan kami mengakses penelitian terdepan, berbagi sumber daya, dan mempercepat inovasi.',
    'research.collaboration.content2': 'Pendekatan kolaboratif kami termasuk proyek penelitian bersama, program transfer teknologi, dan partisipasi dalam konsorsium industri. Kami percaya bahwa inovasi terbaik datang dari perspektif yang beragam dan upaya kolaboratif yang menggabungkan berbagai bidang keahlian.',
    'research.ip.title': 'Kekayaan Intelektual dan Perlindungan Inovasi',
    'research.ip.content1': 'Kami melindungi inovasi kami melalui manajemen kekayaan intelektual strategis, termasuk paten, merek dagang, dan rahasia dagang. Strategi IP kami menyeimbangkan perlindungan inovasi kami dengan kolaborasi terbuka dan berbagi pengetahuan di mana pun sesuai.',
    'research.ip.content2': 'Kami juga berkontribusi pada proyek open-source dan berbagi temuan penelitian yang dapat menguntungkan komunitas teknologi yang lebih luas. Pendekatan kami terhadap manajemen IP mencerminkan komitmen kami untuk memajukan teknologi sambil melindungi keunggulan kompetitif dan investasi dalam inovasi.',
    'research.roadmap.title': 'Peta Jalan Teknologi Masa Depan',
    'research.roadmap.content1': 'Peta jalan penelitian dan pengembangan kami berfokus pada teknologi yang akan kritis dalam tahun-tahun mendatang, termasuk kecerdasan buatan, komputasi kuantum, komputasi tepi, dan teknologi jaringan generasi berikutnya. Kami berinvestasi dalam peningkatan bertahap dan inovasi terobosan.',
    'research.roadmap.content2': 'Kami terus memantau tren teknologi dan perkembangan pasar untuk memastikan investasi R&D kami selaras dengan peluang masa depan dan kebutuhan klien. Pendekatan penelitian fleksibel kami memungkinkan kami beradaptasi dengan cepat terhadap peluang baru dan mengubah arah upaya kami ketika teknologi baru yang menjanjikan muncul.',
    'research.impact.title': 'Mengukur Dampak dan Kesuksesan',
    'research.impact.content1': 'Kami mengukur kesuksesan upaya R&D kami melalui metrik kuantitatif dan penilaian kualitatif. Kerangka evaluasi kami termasuk output inovasi, adopsi teknologi, kepuasan klien, dan kontribusi terhadap ekosistem teknologi yang lebih luas.',
    'research.impact.content2': 'Komitmen kami terhadap perbaikan berkelanjutan dalam R&D memastikan bahwa kami mempertahankan posisi kami sebagai pemimpin teknologi sambil berkontribusi pada kemajuan industri. Kami secara teratur meninjau prioritas penelitian kami dan menyesuaikan investasi kami untuk memaksimalkan dampak dan penciptaan nilai.'
  },
  FR: {
    'nav.home': 'Accueil',
    'nav.company': 'Entreprise',
    'nav.services': 'Services',
    'nav.community': 'Communauté',
    'nav.researches': 'Recherches',
    'nav.insights': 'Perspectives',
    'nav.careers': 'Explorer les Carrières',
    'nav.contact': 'Parlons Affaires',
    'hero.title': 'Solutions Numériques Qui Propulsent la Croissance',
    'hero.subtitle': 'Transformez votre entreprise avec une technologie de pointe et des solutions innovantes.',
    'hero.cta': 'Commencer',
    'hero.register': 'S\'inscrire',
    'hero.badge': 'Upvista Digital - Agence Logicielle de Premier Plan du Pakistan',
    'hero.service1': 'Développement Web',
    'hero.service2': 'Ingénierie Logicielle',
    'hero.service3': 'Graphisme & Design',
    'hero.service4': 'Automatisation IA',
    'hero.stats1': 'Projets Livrés',
    'hero.stats2': 'Note Client',
    'hero.stats3': 'Support',
    // Company dropdown
    'dropdown.company.about': 'À Propos de Nous',
    'dropdown.company.profile': 'Profil de l\'Entreprise',
    'dropdown.company.sustainability': 'Durabilité et Valeurs',
    'dropdown.company.investors': 'Relations Investisseurs',
    'dropdown.company.partners': 'Partenariats',
    'dropdown.company.leadership': 'Direction',
    'dropdown.company.contact': 'Nous Contacter',
    // Company Profile Page
    'companyProfile.badge': 'Informations d\'Entreprise',
    'companyProfile.title': 'Profil de l\'Entreprise',
    'companyProfile.subtitle': 'Aperçu complet des fondations d\'entreprise d\'Upvista Digital, de la structure de leadership et des opérations commerciales.',
    'companyProfile.tradeName': 'Nom Commercial',
    'companyProfile.businessDescription': 'Description de l\'Entreprise',
    'companyProfile.ceo': 'Directeur Général',
    'companyProfile.founded': 'Date de Fondation',
    'companyProfile.fiscalYearEnd': 'Fin de l\'Année Fiscale',
    'companyProfile.headOffice': 'Siège Social',
    'companyProfile.legalStatus': 'Statut Légal',
    'companyProfile.serviceAreas': 'Zones de Service',
    'companyProfile.industryFocus': 'Focus Industriel',
    'companyProfile.revenueModel': 'Modèle de Revenus',
    'companyProfile.clientPortfolio': 'Portefeuille Clients',
    'companyProfile.qualityStandards': 'Standards de Qualité',
    'companyProfile.businessDesc1': 'Développement, vente et exploitation de solutions numériques.',
    'companyProfile.businessDesc2': 'Développement, vente et livraison de services de développement web et d\'ingénierie logicielle.',
    'companyProfile.ceoName': 'Hamza Hafeez',
    'companyProfile.foundedDate': '1er Juillet 2025',
    'companyProfile.fiscalEnd': '30 Juin',
    'companyProfile.headOfficeLocation': 'Lahore, Pakistan',
    'companyProfile.legalStatusType': 'Entreprise Individuelle',
    'companyProfile.serviceAreasGlobal': 'Mondial',
    'companyProfile.industryTypes': 'Services Technologiques, Solutions Numériques, Développement Logiciel',
    'companyProfile.revenueType': 'Basé sur les Services',
    'companyProfile.clientCount': '50+ projets réussis à travers diverses industries',
    'companyProfile.qualityRating': '4.9/5 évaluation de satisfaction client',
    // Services dropdown
    'dropdown.services.about': 'À Propos de nos Services',
    'dropdown.services.software': 'Développement Logiciel',
    'dropdown.services.web': 'Développement Web',
    'dropdown.services.ai': 'IA et Automatisation',
    'dropdown.services.cloud': 'Cloud',
    'dropdown.services.design': 'Graphisme et Design',
    'dropdown.services.marketing': 'Marketing Numérique',
    // Community dropdown
    'dropdown.community.about': 'À Propos de la Communauté',
    'dropdown.community.events': 'Événements',
    'dropdown.community.members': 'Membres de la Communauté',
    'dropdown.community.achievements': 'Réalisations',
    'dropdown.community.trainings': 'Formations',
    'dropdown.community.join': 'Rejoindre la Communauté',
    // Researches dropdown
    'dropdown.researches.about': 'À Propos des Recherches Upvista',
    'dropdown.researches.cortex': 'Projet Cortex',
    'dropdown.researches.agi': 'Recherche sur l\'AGI',
    // Insights dropdown
    'dropdown.insights.caseStudies': 'Études de Cas',
    'dropdown.insights.news': 'Actualités',
    'dropdown.insights.blogs': 'Blogs',
    'dropdown.insights.whitepapers': 'Livres Blancs',
    'dropdown.insights.events': 'Événements',
    // Homepage sections - French
    'home.transform.title': 'Transformer la Présence Numérique',
    'home.transform.subtitle': 'Concevoir des Expériences qui Inspirent l\'Action',
    'home.transform.description': 'De l\'idée à l\'exécution, nous ne construisons pas seulement des sites web — nous construisons des parcours qui connectent avec les gens, bâtissent la confiance et transforment les visiteurs en clients fidèles.',
    'home.transform.exploreServices': 'Explorer nos Services',
    'home.transform.contactUs': 'Nous Contacter',
    'home.partnership.title': 'Partenariat pour votre Croissance Numérique',
    'home.partnership.description': 'Nous ne livrons pas seulement des projets—nous construisons des partenariats à long terme qui permettent à votre entreprise de prospérer dans un monde numérique-first. Notre approche est collaborative, transparente et axée sur votre succès.',
    'home.partnership.explore': 'Explorer les Partenariats',
    'home.partnership.premium': 'Collaboration Premium',
    'home.partnership.subtitle': 'Co-créons des solutions numériques qui établissent de nouveaux standards d\'excellence.',
    'home.expertise.title': 'Expertise qui Génère des Résultats',
    'home.expertise.subtitle': 'Vraie Expertise à Travers les Niches Numériques',
    'home.expertise.description': 'Nous livrons des solutions sur mesure pour une variété d\'industries et de modèles d\'affaires. Notre équipe apporte une expérience pratique profonde dans chaque niche—sans fioritures, juste des résultats prouvés.',
    'home.expertise.ecommerce.title': 'E-commerce',
    'home.expertise.ecommerce.description': 'Boutiques en ligne personnalisées, intégration de paiement, gestion de produits et optimisation de conversion pour les marques B2C & B2B.',
    'home.expertise.saas.title': 'Plateformes SaaS',
    'home.expertise.saas.description': 'Solutions SaaS robustes et évolutives avec gestion d\'utilisateurs, facturation, analytiques et intégration cloud.',
    'home.expertise.healthcare.title': 'Santé',
    'home.expertise.healthcare.description': 'Applications conformes HIPAA, portails patients, télémédecine et gestion sécurisée des données de santé.',
    'home.expertise.edtech.title': 'EdTech',
    'home.expertise.edtech.description': 'Systèmes de gestion de l\'apprentissage, plateformes e-learning et outils éducatifs interactifs.',
    'home.expertise.fintech.title': 'FinTech',
    'home.expertise.fintech.description': 'Passerelles de paiement sécurisées, portefeuilles numériques et plateformes d\'analyse financière.',
    'home.expertise.portfolio.title': 'Portfolio & Créatif',
    'home.expertise.portfolio.description': 'Portfolios personnels, sites d\'agences créatives et vitrines numériques pour artistes et professionnels.',
    'home.expertise.explore': 'Explorer nos Solutions',
    'home.services.title': 'Nos Services Principaux',
    'home.services.subtitle': 'Solutions Numériques qui Génèrent des Résultats',
    'home.services.description': 'Du concept au déploiement, nous livrons des solutions numériques complètes qui transforment votre entreprise et accélèrent la croissance dans le paysage numérique.',
    'home.services.software.title': 'Développement Logiciel',
    'home.services.software.description': 'Solutions logicielles personnalisées construites avec des technologies de pointe. Des applications web aux logiciels desktop, nous livrons un code évolutif et maintenable.',
    'home.services.software.learnMore': 'En savoir plus',
    'home.services.web.title': 'Développement Web',
    'home.services.web.description': 'Sites web et applications web modernes et responsives qui livrent des expériences utilisateur exceptionnelles et stimulent la croissance commerciale.',
    'home.services.web.learnMore': 'En savoir plus',
    'home.services.cloud.title': 'Solutions Cloud',
    'home.services.cloud.description': 'Infrastructure cloud complète, migration et services de gestion pour optimiser vos opérations commerciales et évolutivité.',
    'home.services.cloud.learnMore': 'En savoir plus',
    'home.services.ai.title': 'IA & Automatisation',
    'home.services.ai.description': 'Solutions d\'automatisation intelligentes et applications alimentées par l\'IA qui rationalisent les processus et améliorent les capacités de prise de décision.',
    'home.services.ai.learnMore': 'En savoir plus',
    'home.services.design.title': 'Graphisme & Design',
    'home.services.design.description': 'Services de design graphique professionnel, branding et identité visuelle qui font ressortir votre marque dans le paysage numérique.',
    'home.services.design.learnMore': 'En savoir plus',
    'home.services.marketing.title': 'Marketing Numérique',
    'home.services.marketing.description': 'Campagnes de marketing numérique stratégiques, optimisation SEO, gestion des médias sociaux et analytiques de performance pour maximiser votre portée en ligne et ROI.',
    'home.services.marketing.learnMore': 'En savoir plus',
    'home.services.exploreAll': 'Explorer tous les Services',
    'home.webDesign.title': 'Experts en Design Web',
    'home.webDesign.subtitle': 'Établissez votre Présence Numérique avec Confiance',
    'home.webDesign.description': 'Upvista crée des expériences numériques puissantes qui ne sont pas seulement magnifiques, elles livrent une croissance mesurable et un impact durable.',
    'home.webDesign.getStarted': 'Commencer Maintenant',
    'home.webDesign.viewWork': 'Voir notre Travail',
    'home.testimonials.title': 'Témoignages',
    'home.testimonials.subtitle': 'Ce que disent nos utilisateurs',
    'home.testimonials.description': 'Découvrez ce que nos clients disent de nous.',
    'home.testimonials.testimonial1': 'Leur équipe a créé un site web magnifique et fonctionnel pour nous. Cela a considérablement augmenté notre visibilité et la confiance des clients.',
    'home.testimonials.testimonial2': 'Nous avions besoin d\'une page d\'atterrissage qui convertit — et ils l\'ont livrée. Design épuré, chargement rapide et parfaitement optimisé.',
    'home.testimonials.testimonial3': 'Le design UI/UX a dépassé nos attentes. Les mises en page intuitives et le branding cohérent ont aidé à élever notre produit numérique.',
    'home.testimonials.testimonial4': 'Du branding au développement de site web, tout a été géré avec créativité et professionnalisme.',
    'home.testimonials.testimonial5': 'Leur design de page d\'atterrissage nous a aidés à augmenter les conversions de 35% — visuellement époustouflant et mobile-friendly.',
    'home.testimonials.testimonial6': 'Excellente collaboration et processus clair. Ils ont compris nos besoins et construit une solution personnalisée qui reflète notre marque.',
    'home.testimonials.testimonial7': 'Équipe professionnelle et livraison ponctuelle. Notre branding est maintenant moderne, audacieux et cohérent sur toutes les plateformes.',
    'home.testimonials.testimonial8': 'Ils nous ont aidés à rebrander et redessiner notre site web — le résultat était une expérience élégante et moderne qui se démarque.',
    'home.testimonials.testimonial9': 'La refonte UI/UX a apporté de la clarté à notre offre de services. Nos utilisateurs restent maintenant plus longtemps et explorent davantage.',
    'home.whyChoose.title': 'Pourquoi Nous Choisir',
    'home.whyChoose.description': 'Nous construisons des solutions numériques abordables, personnalisées et évolutives pour les entreprises modernes — rapidement.',
    'home.whyChoose.transparentPricing': 'Tarification transparente',
    'home.whyChoose.fixedDeadlines': 'Échéances fixes',
    'home.whyChoose.cleanDesign': 'Design épuré',
    'home.whyChoose.freeConsultation': 'Consultation gratuite',
    'home.whyChoose.longTermSupport': 'Support à long terme',
    'home.whyChoose.flexibleTech': 'Stack technologique flexible',
    'home.palestine.title': 'Upvista se tient aux côtés de la Palestine et de son peuple',
    'home.join.title': 'Rejoignez-nous',
    // Footer translations
    'footer.description': 'Autonomiser les entreprises avec des solutions numériques de pointe. Nous offrons un développement logiciel innovant, des services web complets et des partenariats technologiques transformationnels qui stimulent la croissance et le succès.',
    'footer.paymentMethods': 'Méthodes de Paiement',
    'footer.payoneer': 'Payoneer',
    'footer.bankTransfer': 'Virement Bancaire',
    'footer.jazzCash': 'JazzCash',
    'footer.easyPaisa': 'EasyPaisa',
    'footer.company': 'Entreprise',
    'footer.aboutUs': 'À Propos',
    'footer.companyProfile': 'Profil de l\'Entreprise',
    'footer.sustainability': 'Durabilité et Valeurs',
    'footer.investorRelations': 'Relations Investisseurs',
    'footer.partnerships': 'Partenariats',
    'footer.leadership': 'Direction',
    'footer.contactUs': 'Contactez-nous',
    'footer.careers': 'Carrières',
    'footer.services': 'Services',
    'footer.allServices': 'Tous les Services',
    'footer.softwareDevelopment': 'Développement Logiciel',
    'footer.webDevelopment': 'Développement Web',
    'footer.aiAutomation': 'IA et Automatisation',
    'footer.cloudSolutions': 'Solutions Cloud',
    'footer.graphicsDesign': 'Graphiques et Design',
    'footer.digitalMarketing': 'Marketing Numérique',
    'footer.consultService': 'Consulter pour tout service',
    'footer.communityResources': 'Communauté et Ressources',
    'footer.aboutCommunity': 'À Propos de la Communauté',
    'footer.events': 'Événements',
    'footer.communityMembers': 'Membres de la Communauté',
    'footer.trainings': 'Formations',
    'footer.research': 'Recherche',
    'footer.projectCortex': 'Projet Cortex',
    'footer.blog': 'Blog',
    'footer.faq': 'FAQ',
    'footer.whatsappUs': 'Contactez-nous via WhatsApp',
    'footer.linkedinUs': 'Contactez-nous via LinkedIn',
    'footer.messengerUs': 'Contactez-nous via Messenger',
    'footer.copyright': '© 2025 Upvista Digital. Tous droits réservés.',
    'footer.termsConditions': 'Termes et Conditions',
    'footer.privacyPolicy': 'Politique de Confidentialité',
    'footer.trademarkCopyright': 'Marque et Droits d\'Auteur',
    'footer.dataProtection': 'Protection des Données',
    'carousel.technologies': 'Technologies que Nous Utilisons',
    // Sustainability Page
    'sustainability.badge': 'Avenir Durable',
    'sustainability.title': 'Durabilité et Valeurs',
    'sustainability.subtitle': 'Notre approche globale de la responsabilité environnementale, de l\'impact social et des pratiques commerciales éthiques qui façonnent notre culture d\'entreprise et guident nos opérations.',
    'sustainability.learnMore': 'En Savoir Plus',
    'sustainability.policy.title': 'Politique de Durabilité',
    'sustainability.policy.description': 'Notre cadre complet pour la gestion environnementale, la responsabilité sociale et les pratiques commerciales durables.',
    'sustainability.values.title': 'Valeurs d\'Entreprise',
    'sustainability.values.description': 'Les principes et valeurs fondamentales qui guident la prise de décision et façonnent notre culture organisationnelle.',
    'sustainability.humanRights.title': 'Politique des Droits de l\'Homme',
    'sustainability.humanRights.description': 'Notre engagement à protéger et promouvoir les droits de l\'homme dans toutes nos opérations et partenariats.',
    'sustainability.humanCapital.title': 'Initiatives du Capital Humain',
    'sustainability.humanCapital.description': 'Programmes et initiatives axés sur le développement des employés, le bien-être et la création d\'un lieu de travail inclusif.',
    'sustainability.environmental.title': 'Philosophie Environnementale',
    'sustainability.environmental.description': 'Notre approche pour minimiser l\'impact environnemental et promouvoir des pratiques durables dans la technologie.',
    'sustainability.social.title': 'Philosophie Sociale',
    'sustainability.social.description': 'Notre engagement envers la responsabilité sociale et l\'impact communautaire positif grâce aux solutions technologiques.',
    'sustainability.governance.title': 'Gouvernance d\'Entreprise',
    'sustainability.governance.description': 'Notre cadre de gouvernance pour assurer la transparence, la responsabilité et les pratiques commerciales éthiques.',
    'sustainability.research.title': 'Recherche et Développement',
    'sustainability.research.description': 'Initiatives d\'innovation axées sur les solutions technologiques durables et les pratiques d\'innovation responsables.',
    // Sustainability Policy Page
    'policy.badge': 'Cadre de Durabilité',
    'policy.title': 'Politique de Durabilité',
    'policy.subtitle': 'Notre cadre complet pour la gestion environnementale, la responsabilité sociale et les pratiques commerciales durables qui guident chaque aspect de nos opérations.',
    'policy.environmental.title': 'Engagement Environnemental',
    'policy.environmental.content1': 'Chez Upvista Digital, nous reconnaissons notre responsabilité de minimiser l\'impact environnemental grâce à des pratiques durables. Notre politique environnementale englobe l\'efficacité énergétique, la réduction des déchets et la minimisation de l\'empreinte carbone dans toutes les opérations commerciales.',
    'policy.environmental.content2': 'Nous privilégions les solutions basées sur le cloud et les technologies écoénergétiques pour réduire notre empreinte carbone numérique. Nos pratiques de développement mettent l\'accent sur le code propre, les performances optimisées et les modèles d\'architecture durables qui minimisent la consommation de ressources.',
    'policy.social.title': 'Cadre de Responsabilité Sociale',
    'policy.social.content1': 'Notre politique de responsabilité sociale se concentre sur la création d\'impact positif grâce à la technologie. Nous croyons en l\'inclusion numérique, en soutenant les communautés grâce à des solutions axées sur la technologie, et en nous assurant que nos services profitent à la société dans son ensemble.',
    'policy.social.content2': 'Nous nous engageons activement dans des programmes de mentorat, des initiatives éducatives et des projets de développement communautaire. Notre engagement s\'étend au soutien des écosystèmes technologiques locaux et à la promotion de l\'innovation qui répond aux défis du monde réel.',
    'policy.business.title': 'Pratiques Commerciales Durables',
    'policy.business.content1': 'Nos pratiques commerciales sont conçues avec la durabilité au cœur. Nous mettons en œuvre des rapports transparents, des approvisionnements éthiques et une gestion de projet responsable qui considère les impacts environnementaux et sociaux à long terme.',
    'policy.business.content2': 'Nous maintenons des normes élevées de gouvernance d\'entreprise, assurant la responsabilité dans toutes nos opérations. Nos relations clients sont construites sur la confiance, la transparence et l\'engagement partagé envers les objectifs de développement durable.',
    'policy.implementation.title': 'Mise en Œuvre et Surveillance',
    'policy.implementation.content1': 'Cette politique de durabilité est activement mise en œuvre dans tous les départements et projets. Nous surveillons régulièrement nos progrès, mesurons notre impact et améliorons continuellement nos pratiques pour nous assurer de respecter et dépasser nos engagements de durabilité.',
    'policy.implementation.content2': 'Notre équipe reçoit une formation régulière sur les pratiques de durabilité, et nous encourageons l\'innovation dans les solutions technologiques durables. Nous nous engageons à être un leader dans le développement et le déploiement de technologies responsables.',
    // Corporate Values Page
    'values.badge': 'Principes Fondamentaux',
    'values.title': 'Valeurs d\'Entreprise',
    'values.subtitle': 'Les principes et valeurs fondamentales qui guident notre prise de décision, façonnent notre culture organisationnelle et définissent comment nous menons nos activités dans le paysage numérique.',
    'values.innovation.title': 'Innovation et Excellence',
    'values.innovation.content1': 'Nous nous engageons à repousser les limites de ce qui est possible en technologie. L\'innovation n\'est pas seulement un mot à la mode pour nous ; c\'est le fondement de tout ce que nous faisons. Nous recherchons continuellement de nouvelles façons de résoudre des problèmes complexes et de livrer des résultats exceptionnels à nos clients.',
    'values.innovation.content2': 'L\'excellence dans l\'exécution est notre norme. Nous croyons que chaque projet, peu importe sa taille, mérite nos meilleurs efforts. Cet engagement envers la qualité nous pousse à améliorer continuellement nos processus, nos technologies et notre prestation de services.',
    'values.integrity.title': 'Intégrité et Transparence',
    'values.integrity.content1': 'L\'intégrité forme le fondement de toutes nos relations. Nous menons nos activités avec honnêteté, équité et respect envers toutes les parties prenantes. Notre transparence dans la communication garantit que les clients, les partenaires et les membres de l\'équipe savent toujours où ils en sont.',
    'values.integrity.content2': 'Nous croyons que la confiance se gagne par des actions cohérentes et une communication honnête. Notre engagement envers la transparence s\'étend à notre gestion de projet, à nos prix, à nos délais et à tous les défis que nous rencontrons en cours de route.',
    'values.collaboration.title': 'Collaboration et Partenariat',
    'values.collaboration.content1': 'Nous considérons chaque relation client comme un véritable partenariat. La collaboration est la clé de notre succès, et nous travaillons étroitement avec les clients pour comprendre leurs défis et objectifs uniques. Notre approche basée sur l\'équipe garantit des perspectives diverses et des solutions complètes.',
    'values.collaboration.content2': 'En interne, nous favorisons une culture de collaboration où la contribution de chaque membre de l\'équipe est valorisée. Nous croyons que les meilleures solutions émergent lorsque des talents et des perspectives divers se réunissent pour relever des défis complexes.',
    'values.learning.title': 'Apprentissage et Croissance Continus',
    'values.learning.content1': 'Dans le monde de la technologie en évolution rapide, l\'apprentissage continu est essentiel. Nous investissons massivement dans le développement professionnel de notre équipe, offrant des opportunités de formation, de certification et d\'amélioration des compétences.',
    'values.learning.content2': 'Nous encourageons l\'expérimentation et l\'apprentissage par l\'échec. Notre culture favorise le partage de connaissances, le mentorat et la poursuite de nouvelles technologies et méthodologies qui peuvent bénéficier à nos clients et faire progresser nos capacités.',
    'values.client.title': 'Succès Client et Création de Valeur',
    'values.client.content1': 'Notre succès est mesuré par le succès de nos clients. Nous nous engageons à livrer des solutions qui non seulement répondent aux exigences mais dépassent les attentes et génèrent une vraie valeur commerciale. Chaque projet est abordé avec l\'objectif de créer un impact positif durable.',
    'values.client.content2': 'Nous adoptons une vision à long terme des relations clients, en nous concentrant sur des solutions durables qui serviront bien nos clients à l\'avenir. Notre proposition de valeur va au-delà de l\'expertise technique pour inclure la pensée stratégique, l\'acuité commerciale et le support continu.',
    // Human Capital Initiatives Page
    'humanCapital.badge': 'Approche Centrée sur les Personnes',
    'humanCapital.title': 'Initiatives du Capital Humain',
    'humanCapital.subtitle': 'Programmes et initiatives complets axés sur le développement des employés, le bien-être et la création d\'un environnement de travail inclusif qui autonomise notre plus grand atout - nos employés.',
    'humanCapital.development.title': 'Programmes de Développement Professionnel',
    'humanCapital.development.content1': 'Nous investissons massivement dans la croissance et le développement continus de nos membres d\'équipe. Nos programmes complets de développement professionnel incluent la formation technique, le développement du leadership et l\'amélioration des compétences douces pour s\'assurer que nos employés restent à l\'avant-garde de leurs domaines.',
    'humanCapital.development.content2': 'Nos initiatives de développement incluent des programmes de mentorat, des opportunités de projets transversaux, la participation à des conférences, le support de certification et l\'accès aux outils et technologies de pointe. Nous croyons que l\'investissement dans la croissance de nos employés se traduit directement par de meilleurs résultats pour nos clients et l\'entreprise.',
    'humanCapital.wellbeing.title': 'Bien-être des Employés et Équilibre Travail-Vie',
    'humanCapital.wellbeing.content1': 'Nous reconnaissons que le bien-être des employés est fondamental pour le bonheur personnel et le succès professionnel. Nos initiatives de bien-être incluent des arrangements de travail flexibles, des programmes de support en santé mentale, des activités de bien-être et des avantages santé complets.',
    'humanCapital.wellbeing.content2': 'Nos politiques d\'équilibre travail-vie incluent des options de télétravail, des heures flexibles, des politiques de vacances généreuses et des pratiques favorables à la famille. Nous comprenons que nos employés ont une vie en dehors du travail, et nous les soutenons pour maintenir un équilibre sain entre leurs engagements professionnels et personnels.',
    'humanCapital.diversity.title': 'Diversité, Équité et Inclusion',
    'humanCapital.diversity.content1': 'Nous nous engageons à créer un environnement de travail inclusif où la diversité est célébrée et où chacun se sent valorisé et respecté. Nos initiatives de diversité, équité et inclusion se concentrent sur le recrutement dans des bassins de talents diversifiés, la fourniture d\'opportunités égales d\'avancement et la promotion d\'un environnement d\'appartenance.',
    'humanCapital.diversity.content2': 'Nos efforts d\'inclusion incluent la formation aux biais inconscients, des pratiques d\'embauche diversifiées, des groupes de ressources employés et des évaluations régulières de notre culture de travail. Nous croyons que des perspectives diverses mènent à une meilleure innovation, résolution de problèmes et résultats commerciaux.',
    'humanCapital.knowledge.title': 'Culture de Partage de Connaissances et d\'Innovation',
    'humanCapital.knowledge.content1': 'Nous favorisons une culture de partage de connaissances et d\'apprentissage continu. Nos initiatives d\'innovation incluent des tech talks réguliers, des hackathons, des défis d\'innovation et des opportunités pour les employés de poursuivre des projets passion qui peuvent bénéficier à l\'entreprise et à nos clients.',
    'humanCapital.knowledge.content2': 'Nous encourageons la collaboration inter-équipes et fournissons des plateformes pour que les employés partagent leur expertise, apprennent des autres et contribuent à la connaissance collective de l\'organisation. Cette culture de partage et d\'innovation stimule à la fois la croissance personnelle et l\'avancement de l\'entreprise.',
    'humanCapital.recognition.title': 'Reconnaissance et Avancement de Carrière',
    'humanCapital.recognition.content1': 'Nous croyons en la reconnaissance et la récompense de l\'excellence. Nos programmes de reconnaissance incluent des bonus basés sur la performance, des prix d\'accomplissement et la reconnaissance publique de contributions exceptionnelles. Nous fournissons des chemins clairs d\'avancement de carrière et soutenons les employés dans l\'atteinte de leurs objectifs professionnels.',
    'humanCapital.recognition.content2': 'Notre cadre de développement de carrière inclut des évaluations de performance régulières, la fixation d\'objectifs, les évaluations de compétences et les plans de développement personnalisés. Nous investissons dans le succès de carrière à long terme de nos employés, sachant que leur croissance contribue directement au succès de l\'entreprise.',
    'humanCapital.community.title': 'Engagement Communautaire et Impact Social',
    'humanCapital.community.content1': 'Nous encourageons nos employés à s\'engager avec leurs communautés et à contribuer aux causes sociales. Nos initiatives d\'engagement communautaire incluent du temps de bénévolat, des programmes de responsabilité sociale d\'entreprise et le support des activités caritatives personnelles des employés.',
    'humanCapital.community.content2': 'Nous croyons que les employés engagés qui contribuent à leurs communautés sont plus épanouis et ramènent cette énergie positive à leur travail. Nos programmes d\'impact social permettent aux employés d\'utiliser leurs compétences et expertise pour faire une différence dans le monde.',
    // Human Rights Policy Page
    'humanRights.badge': 'Engagement en faveur des Droits de l\'Homme',
    'humanRights.title': 'Politique des Droits de l\'Homme',
    'humanRights.subtitle': 'Notre engagement inébranlable à protéger et promouvoir les droits de l\'homme dans toutes nos opérations, partenariats et solutions technologiques qui servent les communautés du monde entier.',
    'humanRights.universal.title': 'Principes Universels des Droits de l\'Homme',
    'humanRights.universal.content1': 'Upvista Digital s\'engage à respecter la Déclaration Universelle des Droits de l\'Homme et toutes les normes internationales pertinentes en matière de droits de l\'homme. Nous reconnaissons que la technologie a le pouvoir de protéger et potentiellement violer les droits de l\'homme, et nous nous engageons à garantir que nos solutions font progresser la dignité et la liberté humaines.',
    'humanRights.universal.content2': 'Notre politique des droits de l\'homme s\'applique à tous les aspects de nos opérations commerciales, y compris les relations employés, les partenariats clients, la gestion de la chaîne d\'approvisionnement, et le développement et le déploiement de solutions technologiques qui impactent les individus et les communautés.',
    'humanRights.workplace.title': 'Droits de l\'Homme sur le Lieu de Travail',
    'humanRights.workplace.content1': 'Nous maintenons un environnement de travail qui respecte et protège les droits fondamentaux de tous les employés. Cela inclut le droit à un traitement équitable, la liberté de discrimination, des conditions de travail sûres, et le droit d\'exprimer des préoccupations sans crainte de représailles.',
    'humanRights.workplace.content2': 'Notre engagement s\'étend à garantir des opportunités égales d\'avancement professionnel, des pratiques de rémunération équitables, et la création d\'un environnement inclusif où la diversité est célébrée et tous les individus peuvent s\'épanouir indépendamment de leur origine, identité ou croyances.',
    'humanRights.privacy.title': 'Confidentialité et Droits Numériques',
    'humanRights.privacy.content1': 'Dans notre ère numérique, la confidentialité est un droit humain fondamental. Nous nous engageons à protéger les droits à la confidentialité de tous les individus dont nous traitons les données, qu\'ils soient nos employés, clients, ou utilisateurs finaux des solutions que nous développons.',
    'humanRights.privacy.content2': 'Nos solutions technologiques sont conçues selon les principes de confidentialité par conception, garantissant que la protection des données est intégrée dans chaque système dès le départ. Nous implémentons des mesures de sécurité robustes et des pratiques de traitement des données transparentes qui respectent l\'autonomie et le consentement individuels.',
    'humanRights.community.title': 'Impact Communautaire et Accessibilité',
    'humanRights.community.content1': 'Nous croyons que la technologie devrait être accessible à tous et ne devrait pas créer ou perpétuer les inégalités. Nos solutions sont conçues en pensant à l\'accessibilité, garantissant que les individus handicapés peuvent pleinement participer au monde numérique.',
    'humanRights.community.content2': 'Nous travaillons activement pour combler le fossé numérique en soutenant des initiatives qui fournissent l\'accès à la technologie aux communautés mal desservies. Notre engagement en faveur des droits de l\'homme inclut la garantie que nos solutions technologiques promeuvent l\'inclusion sociale plutôt que l\'exclusion.',
    'humanRights.ethical.title': 'Développement Technologique Éthique',
    'humanRights.ethical.content1': 'Nous nous engageons à développer une technologie qui respecte les droits de l\'homme et promeut l\'épanouissement humain. Cela inclut éviter le développement de technologies qui pourraient être utilisées pour violer les droits de l\'homme, telles que les systèmes de surveillance qui empiètent sur la confidentialité ou les systèmes d\'IA qui perpétuent les préjugés et la discrimination.',
    'humanRights.ethical.content2': 'Notre cadre éthique guide toutes les décisions de développement technologique, garantissant que nous considérons les implications potentielles en matière de droits de l\'homme de nos solutions. Nous menons des évaluations d\'impact régulières sur les droits de l\'homme et maintenons un dialogue continu avec les parties prenantes pour garantir que notre technologie sert les meilleurs intérêts de l\'humanité.',
    'humanRights.implementation.title': 'Mise en Œuvre et Responsabilité',
    'humanRights.implementation.content1': 'Cette politique des droits de l\'homme n\'est pas seulement un document; c\'est un engagement vivant qui guide nos opérations quotidiennes. Nous fournissons une formation régulière à tous les employés sur les principes des droits de l\'homme et maintenons des mécanismes robustes pour signaler et traiter toute préoccupation.',
    'humanRights.implementation.content2': 'Nous nous tenons responsables de ces principes par des audits réguliers, l\'engagement des parties prenantes, et des rapports transparents sur notre performance en matière de droits de l\'homme. Notre engagement en faveur des droits de l\'homme est fondamental à notre identité en tant qu\'entreprise technologique responsable.',
    // Environmental Philosophy Page
    'environmental.badge': 'Leadership Technologique Vert',
    'environmental.title': 'Philosophie Environnementale',
    'environmental.subtitle': 'Notre approche globale pour minimiser l\'impact environnemental et promouvoir des pratiques durables dans le développement technologique, les opérations et les solutions client.',
    'environmental.development.title': 'Développement Technologique Durable',
    'environmental.development.content1': 'Nous croyons que la technologie devrait être une force pour le bien environnemental, pas une source de dommage environnemental. Nos pratiques de développement privilégient l\'efficacité énergétique, l\'optimisation des ressources et un impact environnemental minimal. Chaque solution que nous créons est conçue avec les principes de durabilité en son cœur.',
    'environmental.development.content2': 'Notre approche de développement durable inclut des pratiques de codage vert, des algorithmes optimisés qui réduisent les exigences de calcul, et des choix d\'infrastructure cloud qui minimisent l\'empreinte carbone. Nous recherchons et implémentons continuellement de nouvelles technologies qui peuvent aider à réduire l\'impact environnemental.',
    'environmental.carbon.title': 'Réduction de l\'Empreinte Carbone',
    'environmental.carbon.content1': 'Nous nous engageons à réduire notre empreinte carbone dans toutes nos opérations. Cela inclut l\'utilisation de sources d\'énergie renouvelables pour nos bureaux, l\'implémentation de matériel et logiciels éconergétiques, et le choix de fournisseurs cloud qui privilégient la durabilité et les énergies renouvelables.',
    'environmental.carbon.content2': 'Nos initiatives de réduction carbone incluent des politiques de télétravail qui réduisent les émissions de transport, des pratiques numériques-first qui minimisent l\'utilisation de papier, et des conceptions de bureaux éconergétiques. Nous mesurons et rapportons régulièrement notre empreinte carbone et fixons des objectifs ambitieux de réduction.',
    'environmental.cloud.title': 'Informatique Cloud Verte et Infrastructure',
    'environmental.cloud.content1': 'Nous privilégions les solutions d\'informatique cloud alimentées par des énergies renouvelables et exploitées par des fournisseurs avec de forts engagements environnementaux. Nos choix d\'infrastructure sont guidés par des métriques de durabilité, incluant l\'intensité carbone, l\'efficacité énergétique, et les certifications environnementales.',
    'environmental.cloud.content2': 'Notre approche d\'infrastructure verte inclut l\'informatique serverless pour minimiser l\'utilisation des ressources, l\'auto-scaling pour correspondre à la demande et réduire le gaspillage, et la sélection de centres de données basée sur des critères environnementaux. Nous travaillons avec les clients pour optimiser leur utilisation cloud pour les performances et l\'impact environnemental.',
    'environmental.digital.title': 'Solutions Numériques pour les Défis Environnementaux',
    'environmental.digital.content1': 'Nous développons des solutions technologiques qui aident nos clients à réduire leur impact environnemental. Cela inclut des systèmes de gestion énergétique, des applications de réduction des déchets, des outils d\'optimisation de chaîne d\'approvisionnement, et des plateformes de rapport de durabilité qui permettent une meilleure prise de décision environnementale.',
    'environmental.digital.content2': 'Nos solutions technologiques environnementales aident les entreprises à suivre leurs émissions carbone, optimiser l\'utilisation des ressources, et implémenter des pratiques durables. Nous croyons que la technologie peut être un outil puissant pour la protection environnementale et la durabilité.',
    'environmental.waste.title': 'Réduction des Déchets et Économie Circulaire',
    'environmental.waste.content1': 'Nous adoptons les principes d\'économie circulaire dans nos opérations et développement technologique. Cela inclut l\'extension du cycle de vie du matériel, la promotion de la réutilisation et modularité des logiciels, et la conception de systèmes qui peuvent être facilement mis à jour plutôt que remplacés.',
    'environmental.waste.content2': 'Nos initiatives de réduction des déchets incluent des pratiques de bureau sans papier, des programmes de recyclage de déchets électroniques, et des processus numériques-first qui minimisent la consommation de ressources physiques. Nous encourageons nos clients à adopter des pratiques similaires à travers les solutions que nous développons.',
    'environmental.education.title': 'Éducation et Plaidoyer Environnementaux',
    'environmental.education.content1': 'Nous croyons au pouvoir de l\'éducation et du plaidoyer pour conduire le changement environnemental. Nos membres d\'équipe reçoivent une formation régulière sur les meilleures pratiques environnementales, et nous partageons nos connaissances avec les clients et la communauté technologique élargie.',
    'environmental.education.content2': 'Nous participons activement aux initiatives environnementales, soutenons la recherche en technologie verte, et plaidons pour des politiques qui promeuvent le développement technologique durable. Notre objectif est d\'être une force positive pour le changement environnemental dans l\'industrie technologique.',
    'environmental.improvement.title': 'Amélioration Continue et Innovation',
    'environmental.improvement.content1': 'La durabilité environnementale est un voyage continu, pas une destination. Nous recherchons continuellement de nouvelles technologies et pratiques qui peuvent réduire davantage notre impact environnemental. Nos efforts d\'innovation se concentrent sur le développement de solutions technologiquement avancées et environnementalement responsables.',
    'environmental.improvement.content2': 'Nous évaluons régulièrement notre performance environnementale, fixons des objectifs ambitieux d\'amélioration, et investissons dans des technologies et pratiques qui font avancer notre mission de durabilité. Notre engagement envers la responsabilité environnementale nous pousse à chercher constamment de meilleures façons de servir nos clients tout en protégeant notre planète.',
    // Social Philosophy Page
    'social.badge': 'Mission d\'Impact Social',
    'social.title': 'Philosophie Sociale',
    'social.subtitle': 'Notre engagement envers la responsabilité sociale et l\'impact communautaire positif à travers des solutions technologiques qui autonomisent les individus, renforcent les communautés et promeuvent l\'équité sociale.',
    'social.good.title': 'Technologie pour le Bien Social',
    'social.good.content1': 'Nous croyons que la technologie devrait être une force pour le changement social positif, autonomisant les individus et les communautés pour surmonter les défis et atteindre leur plein potentiel. Notre philosophie sociale se concentre sur l\'utilisation de notre expertise technique pour résoudre les problèmes du monde réel et créer un impact significatif dans la société.',
    'social.good.content2': 'Notre engagement envers le bien social s\'étend au-delà de nos projets commerciaux pour inclure le travail pro-bono, les partenariats communautaires et les initiatives qui exploitent la technologie pour résoudre les inégalités sociales, améliorer l\'accès à l\'éducation et aux soins de santé, et renforcer la résilience communautaire.',
    'social.inclusion.title': 'Inclusion Numérique et Accessibilité',
    'social.inclusion.content1': 'Nous nous engageons à garantir que les avantages de la technologie sont accessibles à tous les membres de la société, indépendamment de leur origine, capacités ou circonstances économiques. Nos initiatives d\'inclusion numérique se concentrent sur la suppression des barrières et la création de solutions technologiques qui servent tout le monde.',
    'social.inclusion.content2': 'Nos efforts d\'accessibilité incluent le développement de solutions qui fonctionnent pour les personnes handicapées, la création d\'interfaces multilingues, et la conception pour des environnements à faible bande passante. Nous croyons que la conception inclusive mène à de meilleures solutions pour tous et aide à combler la fracture numérique.',
    'social.community.title': 'Engagement Communautaire et Partenariat',
    'social.community.content1': 'Nous nous engageons activement avec les communautés locales et les organisations pour comprendre leurs besoins et contribuer notre expertise à résoudre les défis communautaires. Nos partenariats communautaires incluent les institutions éducatives, les organisations à but non lucratif et les initiatives gouvernementales locales.',
    'social.community.content2': 'Notre engagement communautaire inclut des programmes de mentorat pour les étudiants, des ateliers technologiques pour les membres de la communauté, et des projets collaboratifs qui combinent nos compétences techniques avec les connaissances et besoins locaux. Nous croyons que des communautés fortes mènent à des sociétés plus fortes.',
    'social.education.title': 'Éducation et Partage de Connaissances',
    'social.education.content1': 'Nous croyons au pouvoir transformateur de l\'éducation et nous nous engageons à partager nos connaissances et notre expertise avec la communauté élargie. Nos initiatives éducatives incluent des bootcamps de codage, des ateliers technologiques et des programmes de mentorat qui aident les autres à développer des compétences techniques.',
    'social.education.content2': 'Nos efforts de partage de connaissances incluent des contributions open-source, des articles de blog techniques, des présentations de conférence et des opportunités d\'apprentissage collaboratif. Nous croyons que le partage de connaissances renforce toute la communauté technologique et crée des opportunités d\'innovation.',
    'social.ethical.title': 'Développement Technologique Éthique',
    'social.ethical.content1': 'Nous nous engageons à développer une technologie qui respecte la dignité humaine, protège la vie privée et promeut l\'équité sociale. Nos pratiques de développement éthique incluent les principes de confidentialité par conception, les tests de biais et la considération des implications sociales de nos solutions.',
    'social.ethical.content2': 'Notre cadre éthique guide toutes les décisions de développement technologique, garantissant que nous considérons les impacts sociaux potentiels de nos solutions. Nous effectuons des examens éthiques réguliers et maintenons un dialogue continu avec les parties prenantes pour nous assurer que notre technologie sert les meilleurs intérêts de la société.',
    'social.economic.title': 'Autonomisation Économique par la Technologie',
    'social.economic.content1': 'Nous croyons que la technologie peut être un outil puissant pour l\'autonomisation économique, aidant les individus et les entreprises à accéder à de nouvelles opportunités et à améliorer leurs perspectives économiques. Nos solutions sont conçues pour créer de la valeur économique et permettre une croissance durable.',
    'social.economic.content2': 'Nos initiatives d\'autonomisation économique incluent le soutien aux petites entreprises avec des solutions technologiques, la création de plateformes qui permettent de nouvelles opportunités économiques, et le développement d\'outils qui aident les individus et les communautés à participer à l\'économie numérique.',
    'social.global.title': 'Citoyenneté Mondiale et Responsabilité',
    'social.global.content1': 'En tant qu\'entreprise technologique mondiale, nous reconnaissons notre responsabilité de contribuer positivement aux communautés où nous opérons et à la société mondiale élargie. Nos efforts de citoyenneté mondiale incluent le soutien aux projets de développement international et la contribution aux normes technologiques mondiales.',
    'social.global.content2': 'Nous croyons que les entreprises technologiques ont une responsabilité spéciale d\'utiliser leurs ressources et expertise pour résoudre les défis mondiaux. Nos initiatives de citoyenneté mondiale incluent le soutien à l\'éducation dans les pays en développement, la contribution aux projets open-source, et la participation au développement de normes technologiques internationales.',
    // Corporate Governance Page
    'governance.badge': 'Leadership Éthique',
    'governance.title': 'Gouvernance d\'Entreprise',
    'governance.subtitle': 'Notre cadre de gouvernance garantissant la transparence, la responsabilité et les pratiques commerciales éthiques qui construisent la confiance avec les parties prenantes et favorisent le succès durable à long terme.',
    'governance.board.title': 'Leadership et Surveillance du Conseil',
    'governance.board.content1': 'Notre gouvernance d\'entreprise est construite sur une base de leadership fort du conseil et de surveillance indépendante. Notre conseil d\'administration fournit des conseils stratégiques, assure la responsabilité et supervise la mise en œuvre de nos politiques et procédures de gouvernance.',
    'governance.board.content2': 'Le conseil maintient des comités indépendants pour l\'audit, la rémunération et les questions de gouvernance, garantissant que toutes les décisions majeures sont soumises à une surveillance et à un examen appropriés. Notre structure de gouvernance promeut la transparence, la responsabilité et l\'alignement avec les intérêts des parties prenantes.',
    'governance.transparency.title': 'Transparence et Divulgation',
    'governance.transparency.content1': 'Nous maintenons les plus hauts standards de transparence dans toutes nos opérations commerciales et communications. Nos pratiques de divulgation incluent des rapports réguliers sur les performances financières, les opérations commerciales et les questions clés de gouvernance pour assurer que les parties prenantes sont bien informées.',
    'governance.transparency.content2': 'Nos engagements de transparence s\'étendent à nos relations clients, où nous fournissons une communication claire sur les progrès des projets, les défis et les résultats. Nous croyons que la communication transparente construit la confiance et permet une meilleure prise de décision pour toutes les parties impliquées.',
    'governance.risk.title': 'Gestion des Risques et Conformité',
    'governance.risk.content1': 'Nous maintenons des systèmes complets de gestion des risques qui identifient, évaluent et atténuent les risques dans tous les aspects de nos opérations commerciales. Notre cadre de gestion des risques inclut des évaluations régulières, une planification de contingence et une surveillance continue des indicateurs de risque clés.',
    'governance.risk.content2': 'Notre programme de conformité assure l\'adhésion à toutes les lois, réglementations et standards industriels applicables. Nous maintenons des contrôles internes robustes et effectuons des audits réguliers pour assurer la conformité avec les exigences légales et réglementaires dans toutes les juridictions où nous opérons.',
    'governance.ethics.title': 'Pratiques Commerciales Éthiques',
    'governance.ethics.content1': 'Nous nous engageons à mener nos affaires avec les plus hauts standards éthiques, guidés par notre code de conduite et nos politiques d\'éthique. Notre cadre éthique couvre tous les aspects des opérations commerciales, des relations clients au comportement des employés et aux partenariats avec les fournisseurs.',
    'governance.ethics.content2': 'Nos pratiques éthiques incluent une concurrence équitable, un approvisionnement responsable, des mesures anti-corruption et la protection des informations confidentielles. Nous fournissons une formation éthique régulière à tous les employés et maintenons des canaux pour signaler les préoccupations éthiques sans crainte de représailles.',
    'governance.stakeholder.title': 'Engagement des Parties Prenantes et Communication',
    'governance.stakeholder.content1': 'Nous maintenons un engagement actif avec toutes nos parties prenantes, y compris les clients, employés, investisseurs, partenaires et les communautés où nous opérons. Notre engagement des parties prenantes inclut une communication régulière, des mécanismes de retour d\'information et des processus de prise de décision collaborative.',
    'governance.stakeholder.content2': 'Nos pratiques de communication assurent que les parties prenantes sont informées de nos performances commerciales, de notre direction stratégique et des développements clés. Nous valorisons l\'apport des parties prenantes et incorporons les retours dans nos processus de prise de décision pour assurer l\'alignement avec les intérêts des parties prenantes.',
    'governance.performance.title': 'Gestion de la Performance et Responsabilité',
    'governance.performance.content1': 'Nous maintenons des systèmes robustes de gestion de la performance qui assurent la responsabilité à tous les niveaux de l\'organisation. Notre cadre de performance inclut des objectifs clairs, des examens réguliers et des conséquences pour l\'atteinte et la non-atteinte des objectifs.',
    'governance.performance.content2': 'Nos mesures de responsabilité incluent une rémunération exécutive liée à la performance, des évaluations régulières du conseil et des évaluations indépendantes de l\'efficacité de la direction. Nous croyons que des systèmes de responsabilité solides favorisent de meilleures performances et créent de la valeur pour toutes les parties prenantes.',
    'governance.improvement.title': 'Amélioration Continue et Innovation',
    'governance.improvement.content1': 'Nous cherchons continuellement à améliorer nos pratiques de gouvernance et à nous adapter aux environnements commerciaux changeants et aux attentes des parties prenantes. Notre cadre de gouvernance est régulièrement examiné et mis à jour pour assurer qu\'il reste efficace et pertinent.',
    'governance.improvement.content2': 'Nous comparons nos pratiques de gouvernance aux meilleures pratiques de l\'industrie et incorporons les retours des parties prenantes pour favoriser l\'amélioration continue. Notre engagement envers l\'excellence de la gouvernance assure que nous maintenons la confiance et la confiance de toutes nos parties prenantes tout en favorisant le succès commercial durable.',
    // Research & Development Page
    'research.badge': 'Centre d\'Innovation',
    'research.title': 'Recherche & Développement',
    'research.subtitle': 'Notre engagement à faire progresser la technologie grâce à la recherche de pointe, aux initiatives d\'innovation et au développement de solutions de nouvelle génération qui façonnent l\'avenir de la transformation numérique.',
    'research.strategy.title': 'Stratégie et Vision d\'Innovation',
    'research.strategy.content1': 'Notre stratégie de recherche et développement est motivée par une vision de création de solutions technologiques qui non seulement répondent aux besoins d\'aujourd\'hui mais anticipent et abordent les défis de demain. Nous investissons considérablement dans la R&D pour maintenir notre position à l\'avant-garde de l\'innovation technologique.',
    'research.strategy.content2': 'Notre approche d\'innovation combine la recherche fondamentale avec le développement appliqué, garantissant que nos découvertes se traduisent en solutions pratiques qui bénéficient à nos clients et à la société. Nous nous concentrons sur les technologies émergentes qui ont le potentiel de transformer les industries et de créer de nouvelles opportunités.',
    'research.emerging.title': 'Recherche en Technologies Émergentes',
    'research.emerging.content1': 'Nous recherchons activement les technologies émergentes, notamment l\'intelligence artificielle, l\'apprentissage automatique, la blockchain, l\'informatique quantique et l\'analyse avancée. Nos équipes de recherche travaillent sur le développement de nouveaux algorithmes, l\'amélioration des technologies existantes et la création d\'applications innovantes.',
    'research.emerging.content2': 'Nos initiatives de recherche incluent l\'exploration du potentiel de l\'informatique en périphérie, l\'investigation de solutions technologiques durables et le développement de nouvelles approches pour la cybersécurité et la confidentialité des données. Nous collaborons avec des institutions académiques et des organisations de recherche pour faire avancer l\'état de l\'art.',
    'research.development.title': 'Développement de Produits et Prototypage',
    'research.development.content1': 'Notre processus de développement de produits combine une recherche rigoureuse avec des méthodologies de développement agiles pour créer des solutions innovantes. Nous utilisons le prototypage rapide et le développement itératif pour valider les concepts et affiner les produits avant une implémentation à grande échelle.',
    'research.development.content2': 'Nos équipes de développement travaillent étroitement avec les clients et les utilisateurs finaux pour s\'assurer que nos produits répondent aux besoins du monde réel et apportent une valeur tangible. Nous employons des principes de conception centrés sur l\'utilisateur et des boucles de retour d\'information continues pour créer des solutions à la fois techniquement avancées et conviviales.',
    'research.sustainable.title': 'Développement de Technologies Durables',
    'research.sustainable.content1': 'Une partie importante de nos efforts de R&D se concentre sur le développement de solutions technologiques durables qui minimisent l\'impact environnemental tout en maximisant l\'efficacité et les performances. Nous recherchons des techniques de calcul vert, des algorithmes écoénergétiques et des architectures logicielles durables.',
    'research.sustainable.content2': 'Nos initiatives de développement durable incluent la création d\'applications neutres en carbone, l\'optimisation de l\'utilisation des ressources cloud et le développement de technologies qui aident d\'autres organisations à réduire leur empreinte environnementale. Nous croyons que la technologie devrait être une force pour le bien environnemental.',
    'research.collaboration.title': 'Collaboration et Partenariats',
    'research.collaboration.content1': 'Nous collaborons activement avec des universités, des institutions de recherche, des entreprises technologiques et des organisations industrielles pour faire progresser la recherche et partager les connaissances. Nos partenariats nous permettent d\'accéder à la recherche de pointe, de partager des ressources et d\'accélérer l\'innovation.',
    'research.collaboration.content2': 'Notre approche collaborative inclut des projets de recherche conjoints, des programmes de transfert de technologie et la participation à des consortiums industriels. Nous croyons que les meilleures innovations viennent de perspectives diverses et d\'efforts collaboratifs qui combinent différents domaines d\'expertise.',
    'research.ip.title': 'Propriété Intellectuelle et Protection de l\'Innovation',
    'research.ip.content1': 'Nous protégeons nos innovations grâce à une gestion stratégique de la propriété intellectuelle, incluant les brevets, les marques commerciales et les secrets commerciaux. Notre stratégie de propriété intellectuelle équilibre la protection de nos innovations avec la collaboration ouverte et le partage de connaissances lorsque c\'est approprié.',
    'research.ip.content2': 'Nous contribuons également aux projets open-source et partageons les résultats de recherche qui peuvent bénéficier à la communauté technologique élargie. Notre approche de la gestion de la propriété intellectuelle reflète notre engagement à faire progresser la technologie tout en protégeant nos avantages concurrentiels et notre investissement dans l\'innovation.',
    'research.roadmap.title': 'Feuille de Route Technologique Future',
    'research.roadmap.content1': 'Notre feuille de route de recherche et développement se concentre sur les technologies qui seront critiques dans les années à venir, notamment l\'intelligence artificielle, l\'informatique quantique, l\'informatique en périphérie et les technologies de réseau de nouvelle génération. Nous investissons dans les améliorations incrémentales et les innovations révolutionnaires.',
    'research.roadmap.content2': 'Nous surveillons continuellement les tendances technologiques et les développements du marché pour nous assurer que nos investissements en R&D s\'alignent sur les opportunités futures et les besoins des clients. Notre approche de recherche flexible nous permet de nous adapter rapidement aux nouvelles opportunités et de pivoter nos efforts lorsque de nouvelles technologies prometteuses émergent.',
    'research.impact.title': 'Mesure de l\'Impact et du Succès',
    'research.impact.content1': 'Nous mesurons le succès de nos efforts de R&D grâce à des métriques quantitatives et des évaluations qualitatives. Notre cadre d\'évaluation inclut la production d\'innovation, l\'adoption technologique, la satisfaction client et la contribution à l\'écosystème technologique élargi.',
    'research.impact.content2': 'Notre engagement envers l\'amélioration continue en R&D assure que nous maintenons notre position de leader technologique tout en contribuant à l\'avancement de l\'industrie. Nous examinons régulièrement nos priorités de recherche et ajustons nos investissements pour maximiser l\'impact et la création de valeur.'
  },
  ES: {
    'nav.home': 'Inicio',
    'nav.company': 'Empresa',
    'nav.services': 'Servicios',
    'nav.community': 'Comunidad',
    'nav.researches': 'Investigaciones',
    'nav.insights': 'Perspectivas',
    'nav.careers': 'Explorar Carreras',
    'nav.contact': 'Hablemos de Negocios',
    'hero.title': 'Soluciones Digitales Que Impulsan el Crecimiento',
    'hero.subtitle': 'Transforma tu negocio con tecnología de vanguardia y soluciones innovadoras.',
    'hero.cta': 'Comenzar',
    'hero.register': 'Registrarse',
    'hero.badge': 'Upvista Digital - Agencia de Software Líder de Pakistán',
    'hero.service1': 'Desarrollo Web',
    'hero.service2': 'Ingeniería de Software',
    'hero.service3': 'Gráficos y Diseño',
    'hero.service4': 'Automatización IA',
    'hero.stats1': 'Proyectos Entregados',
    'hero.stats2': 'Calificación del Cliente',
    'hero.stats3': 'Soporte',
    // Company dropdown
    'dropdown.company.about': 'Acerca de Nosotros',
    'dropdown.company.profile': 'Perfil de la Empresa',
    'dropdown.company.sustainability': 'Sostenibilidad y Valores',
    'dropdown.company.investors': 'Relaciones con Inversores',
    'dropdown.company.partners': 'Asociaciones',
    'dropdown.company.leadership': 'Liderazgo',
    'dropdown.company.contact': 'Contáctanos',
    // Company Profile Page
    'companyProfile.badge': 'Información Corporativa',
    'companyProfile.title': 'Perfil de la Empresa',
    'companyProfile.subtitle': 'Descripción completa de los fundamentos corporativos de Upvista Digital, estructura de liderazgo y operaciones comerciales.',
    'companyProfile.tradeName': 'Nombre Comercial',
    'companyProfile.businessDescription': 'Descripción del Negocio',
    'companyProfile.ceo': 'Director Ejecutivo',
    'companyProfile.founded': 'Fecha de Fundación',
    'companyProfile.fiscalYearEnd': 'Fin del Año Fiscal',
    'companyProfile.headOffice': 'Oficina Central',
    'companyProfile.legalStatus': 'Estado Legal',
    'companyProfile.serviceAreas': 'Áreas de Servicio',
    'companyProfile.industryFocus': 'Enfoque Industrial',
    'companyProfile.revenueModel': 'Modelo de Ingresos',
    'companyProfile.clientPortfolio': 'Portafolio de Clientes',
    'companyProfile.qualityStandards': 'Estándares de Calidad',
    'companyProfile.businessDesc1': 'Desarrollo, venta y operación de soluciones digitales.',
    'companyProfile.businessDesc2': 'Desarrollo, venta y entrega de servicios de desarrollo web e ingeniería de software.',
    'companyProfile.ceoName': 'Hamza Hafeez',
    'companyProfile.foundedDate': '1 de Julio de 2025',
    'companyProfile.fiscalEnd': '30 de Junio',
    'companyProfile.headOfficeLocation': 'Lahore, Pakistán',
    'companyProfile.legalStatusType': 'Empresa Individual',
    'companyProfile.serviceAreasGlobal': 'Global',
    'companyProfile.industryTypes': 'Servicios Tecnológicos, Soluciones Digitales, Desarrollo de Software',
    'companyProfile.revenueType': 'Basado en Servicios',
    'companyProfile.clientCount': '50+ proyectos exitosos en diversas industrias',
    'companyProfile.qualityRating': '4.9/5 evaluación de satisfacción del cliente',
    // Services dropdown
    'dropdown.services.about': 'Acerca de nuestros Servicios',
    'dropdown.services.software': 'Desarrollo de Software',
    'dropdown.services.web': 'Desarrollo Web',
    'dropdown.services.ai': 'IA y Automatización',
    'dropdown.services.cloud': 'Nube',
    'dropdown.services.design': 'Gráficos y Diseño',
    'dropdown.services.marketing': 'Marketing Digital',
    // Community dropdown
    'dropdown.community.about': 'Acerca de la Comunidad',
    'dropdown.community.events': 'Eventos',
    'dropdown.community.members': 'Miembros de la Comunidad',
    'dropdown.community.achievements': 'Logros',
    'dropdown.community.trainings': 'Capacitaciones',
    'dropdown.community.join': 'Unirse a la Comunidad',
    // Researches dropdown
    'dropdown.researches.about': 'Acerca de las Investigaciones Upvista',
    'dropdown.researches.cortex': 'Proyecto Cortex',
    'dropdown.researches.agi': 'Investigación en AGI',
    // Insights dropdown
    'dropdown.insights.caseStudies': 'Estudios de Caso',
    'dropdown.insights.news': 'Noticias',
    'dropdown.insights.blogs': 'Blogs',
    'dropdown.insights.whitepapers': 'Libros Blancos',
    'dropdown.insights.events': 'Eventos',
    // Homepage sections - Spanish
    'home.transform.title': 'Transformando la Presencia Digital',
    'home.transform.subtitle': 'Diseñando Experiencias que Inspiran Acción',
    'home.transform.description': 'De la idea a la ejecución, no solo construimos sitios web — construimos viajes que se conectan con las personas, construyen confianza y convierten visitantes en clientes leales.',
    'home.transform.exploreServices': 'Explorar nuestros Servicios',
    'home.transform.contactUs': 'Contáctanos',
    'home.partnership.title': 'Asociándonos para tu Crecimiento Digital',
    'home.partnership.description': 'No solo entregamos proyectos—construimos asociaciones a largo plazo que empoderan tu negocio para prosperar en un mundo digital-first. Nuestro enfoque es colaborativo, transparente y enfocado en tu éxito.',
    'home.partnership.explore': 'Explorar Asociaciones',
    'home.partnership.premium': 'Colaboración Premium',
    'home.partnership.subtitle': 'Co-creemos soluciones digitales que establezcan nuevos estándares de excelencia.',
    'home.expertise.title': 'Experiencia que Impulsa Resultados',
    'home.expertise.subtitle': 'Verdadera Experiencia a través de Nichos Digitales',
    'home.expertise.description': 'Entregamos soluciones personalizadas para una variedad de industrias y modelos de negocio. Nuestro equipo trae experiencia práctica profunda en cada nicho—sin florituras, solo resultados probados.',
    'home.expertise.ecommerce.title': 'E-commerce',
    'home.expertise.ecommerce.description': 'Tiendas en línea personalizadas, integración de pagos, gestión de productos y optimización de conversión para marcas B2C y B2B.',
    'home.expertise.saas.title': 'Plataformas SaaS',
    'home.expertise.saas.description': 'Soluciones SaaS robustas y escalables con gestión de usuarios, facturación, analíticas e integración en la nube.',
    'home.expertise.healthcare.title': 'Salud',
    'home.expertise.healthcare.description': 'Aplicaciones compatibles con HIPAA, portales de pacientes, telemedicina y gestión segura de datos de salud.',
    'home.expertise.edtech.title': 'EdTech',
    'home.expertise.edtech.description': 'Sistemas de gestión de aprendizaje, plataformas de e-learning y herramientas educativas interactivas.',
    'home.expertise.fintech.title': 'FinTech',
    'home.expertise.fintech.description': 'Pasarelas de pago seguras, billeteras digitales y plataformas de análisis financiero.',
    'home.expertise.portfolio.title': 'Portfolio y Creativo',
    'home.expertise.portfolio.description': 'Portfolios personales, sitios de agencias creativas y vitrinas digitales para artistas y profesionales.',
    'home.expertise.explore': 'Explorar nuestras Soluciones',
    'home.services.title': 'Nuestros Servicios Principales',
    'home.services.subtitle': 'Soluciones Digitales que Impulsan Resultados',
    'home.services.description': 'Del concepto al despliegue, entregamos soluciones digitales integrales que transforman tu negocio y aceleran el crecimiento en el panorama digital.',
    'home.services.software.title': 'Desarrollo de Software',
    'home.services.software.description': 'Soluciones de software personalizadas construidas con tecnologías de vanguardia. Desde aplicaciones web hasta software de escritorio, entregamos código escalable y mantenible.',
    'home.services.software.learnMore': 'Saber más',
    'home.services.web.title': 'Desarrollo Web',
    'home.services.web.description': 'Sitios web y aplicaciones web modernas y responsivas que entregan experiencias de usuario excepcionales e impulsan el crecimiento del negocio.',
    'home.services.web.learnMore': 'Saber más',
    'home.services.cloud.title': 'Soluciones en la Nube',
    'home.services.cloud.description': 'Infraestructura en la nube integral, migración y servicios de gestión para optimizar las operaciones de tu negocio y escalabilidad.',
    'home.services.cloud.learnMore': 'Saber más',
    'home.services.ai.title': 'IA y Automatización',
    'home.services.ai.description': 'Soluciones de automatización inteligente y aplicaciones impulsadas por IA que agilizan procesos y mejoran las capacidades de toma de decisiones.',
    'home.services.ai.learnMore': 'Saber más',
    'home.services.design.title': 'Gráficos y Diseño',
    'home.services.design.description': 'Servicios de diseño gráfico profesional, branding e identidad visual que hacen que tu marca destaque en el panorama digital.',
    'home.services.design.learnMore': 'Saber más',
    'home.services.marketing.title': 'Marketing Digital',
    'home.services.marketing.description': 'Campañas de marketing digital estratégicas, optimización SEO, gestión de redes sociales y analíticas de rendimiento para maximizar tu alcance en línea y ROI.',
    'home.services.marketing.learnMore': 'Saber más',
    'home.services.exploreAll': 'Explorar todos los Servicios',
    'home.webDesign.title': 'Expertos en Diseño Web',
    'home.webDesign.subtitle': 'Establece tu Presencia Digital con Confianza',
    'home.webDesign.description': 'Upvista crea experiencias digitales poderosas que no solo se ven geniales, sino que entregan crecimiento medible e impacto duradero.',
    'home.webDesign.getStarted': 'Comenzar Ahora',
    'home.webDesign.viewWork': 'Ver nuestro Trabajo',
    'home.testimonials.title': 'Testimonios',
    'home.testimonials.subtitle': 'Lo que dicen nuestros usuarios',
    'home.testimonials.description': 'Ve lo que nuestros clientes dicen sobre nosotros.',
    'home.testimonials.testimonial1': 'Su equipo creó un sitio web hermoso y funcional para nosotros. Aumentó dramáticamente nuestra visibilidad y confianza del cliente.',
    'home.testimonials.testimonial2': 'Necesitábamos una página de aterrizaje que convirtiera — y la entregaron. Diseño limpio, carga rápida y perfectamente optimizada.',
    'home.testimonials.testimonial3': 'El diseño UI/UX superó nuestras expectativas. Los diseños intuitivos y el branding consistente ayudaron a elevar nuestro producto digital.',
    'home.testimonials.testimonial4': 'Desde el branding hasta el desarrollo de sitios web, todo fue manejado con creatividad y profesionalismo.',
    'home.testimonials.testimonial5': 'Su diseño de página de aterrizaje nos ayudó a aumentar las conversiones en un 35% — visualmente impresionante y amigable para móviles.',
    'home.testimonials.testimonial6': 'Excelente colaboración y proceso claro. Entendieron nuestras necesidades y construyeron una solución personalizada que refleja nuestra marca.',
    'home.testimonials.testimonial7': 'Equipo profesional y entrega puntual. Nuestro branding ahora es moderno, audaz y consistente en todas las plataformas.',
    'home.testimonials.testimonial8': 'Nos ayudaron a rebrandear y rediseñar nuestro sitio web — el resultado fue una experiencia elegante y moderna que destaca.',
    'home.testimonials.testimonial9': 'La renovación UI/UX trajo claridad a nuestra oferta de servicios. Nuestros usuarios ahora permanecen más tiempo y exploran más.',
    'home.whyChoose.title': 'Por qué Elegirnos',
    'home.whyChoose.description': 'Construimos soluciones digitales asequibles, personalizadas y escalables para negocios modernos — rápidamente.',
    'home.whyChoose.transparentPricing': 'Precios transparentes',
    'home.whyChoose.fixedDeadlines': 'Fechas límite fijas',
    'home.whyChoose.cleanDesign': 'Diseño limpio',
    'home.whyChoose.freeConsultation': 'Consulta gratuita',
    'home.whyChoose.longTermSupport': 'Soporte a largo plazo',
    'home.whyChoose.flexibleTech': 'Stack tecnológico flexible',
    'home.palestine.title': 'Upvista se pone del lado de Palestina y su pueblo',
    'home.join.title': 'Únete a Nosotros',
    // Footer translations
    'footer.description': 'Empoderando empresas con soluciones digitales de vanguardia. Ofrecemos desarrollo de software innovador, servicios web integrales y asociaciones tecnológicas transformadoras que impulsan el crecimiento y el éxito.',
    'footer.paymentMethods': 'Métodos de Pago',
    'footer.payoneer': 'Payoneer',
    'footer.bankTransfer': 'Transferencia Bancaria',
    'footer.jazzCash': 'JazzCash',
    'footer.easyPaisa': 'EasyPaisa',
    'footer.company': 'Empresa',
    'footer.aboutUs': 'Acerca de Nosotros',
    'footer.companyProfile': 'Perfil de la Empresa',
    'footer.sustainability': 'Sostenibilidad y Valores',
    'footer.investorRelations': 'Relaciones con Inversores',
    'footer.partnerships': 'Asociaciones',
    'footer.leadership': 'Liderazgo',
    'footer.contactUs': 'Contáctanos',
    'footer.careers': 'Carreras',
    'footer.services': 'Servicios',
    'footer.allServices': 'Todos los Servicios',
    'footer.softwareDevelopment': 'Desarrollo de Software',
    'footer.webDevelopment': 'Desarrollo Web',
    'footer.aiAutomation': 'IA y Automatización',
    'footer.cloudSolutions': 'Soluciones en la Nube',
    'footer.graphicsDesign': 'Gráficos y Diseño',
    'footer.digitalMarketing': 'Marketing Digital',
    'footer.consultService': 'Consultar para cualquier servicio',
    'footer.communityResources': 'Comunidad y Recursos',
    'footer.aboutCommunity': 'Acerca de la Comunidad',
    'footer.events': 'Eventos',
    'footer.communityMembers': 'Miembros de la Comunidad',
    'footer.trainings': 'Entrenamientos',
    'footer.research': 'Investigación',
    'footer.projectCortex': 'Proyecto Cortex',
    'footer.blog': 'Blog',
    'footer.faq': 'Preguntas Frecuentes',
    'footer.whatsappUs': 'Contáctanos vía WhatsApp',
    'footer.linkedinUs': 'Contáctanos vía LinkedIn',
    'footer.messengerUs': 'Contáctanos vía Messenger',
    'footer.copyright': '© 2025 Upvista Digital. Todos los derechos reservados.',
    'footer.termsConditions': 'Términos y Condiciones',
    'footer.privacyPolicy': 'Política de Privacidad',
    'footer.trademarkCopyright': 'Marca Registrada y Derechos de Autor',
    'footer.dataProtection': 'Protección de Datos',
    'carousel.technologies': 'Tecnologías que Utilizamos',
    // Sustainability Page
    'sustainability.badge': 'Futuro Sostenible',
    'sustainability.title': 'Sostenibilidad y Valores',
    'sustainability.subtitle': 'Nuestro enfoque integral de responsabilidad ambiental, impacto social y prácticas comerciales éticas que dan forma a nuestra cultura corporativa y guían nuestras operaciones.',
    'sustainability.learnMore': 'Aprender Más',
    'sustainability.policy.title': 'Política de Sostenibilidad',
    'sustainability.policy.description': 'Nuestro marco integral para la gestión ambiental, responsabilidad social y prácticas comerciales sostenibles.',
    'sustainability.values.title': 'Valores Corporativos',
    'sustainability.values.description': 'Los principios y valores fundamentales que guían la toma de decisiones y dan forma a nuestra cultura organizacional.',
    'sustainability.humanRights.title': 'Política de Derechos Humanos',
    'sustainability.humanRights.description': 'Nuestro compromiso de proteger y promover los derechos humanos en todas nuestras operaciones y asociaciones.',
    'sustainability.humanCapital.title': 'Iniciativas de Capital Humano',
    'sustainability.humanCapital.description': 'Programas e iniciativas enfocadas en el desarrollo de empleados, bienestar y creación de un lugar de trabajo inclusivo.',
    'sustainability.environmental.title': 'Filosofía Ambiental',
    'sustainability.environmental.description': 'Nuestro enfoque para minimizar el impacto ambiental y promover prácticas sostenibles en tecnología.',
    'sustainability.social.title': 'Filosofía Social',
    'sustainability.social.description': 'Nuestro compromiso con la responsabilidad social y el impacto positivo en la comunidad a través de soluciones tecnológicas.',
    'sustainability.governance.title': 'Gobierno Corporativo',
    'sustainability.governance.description': 'Nuestro marco de gobernanza para asegurar transparencia, responsabilidad y prácticas comerciales éticas.',
    'sustainability.research.title': 'Investigación y Desarrollo',
    'sustainability.research.description': 'Iniciativas de innovación enfocadas en soluciones tecnológicas sostenibles y prácticas de innovación responsables.',
    // Sustainability Policy Page
    'policy.badge': 'Marco de Sostenibilidad',
    'policy.title': 'Política de Sostenibilidad',
    'policy.subtitle': 'Nuestro marco integral para la gestión ambiental, responsabilidad social y prácticas comerciales sostenibles que guían cada aspecto de nuestras operaciones.',
    'policy.environmental.title': 'Compromiso Ambiental',
    'policy.environmental.content1': 'En Upvista Digital, reconocemos nuestra responsabilidad de minimizar el impacto ambiental a través de prácticas sostenibles. Nuestra política ambiental abarca la eficiencia energética, la reducción de residuos y la minimización de la huella de carbono en todas las operaciones comerciales.',
    'policy.environmental.content2': 'Priorizamos soluciones basadas en la nube y tecnologías eficientes en energía para reducir nuestra huella de carbono digital. Nuestras prácticas de desarrollo enfatizan código limpio, rendimiento optimizado y patrones de arquitectura sostenibles que minimizan el consumo de recursos.',
    'policy.social.title': 'Marco de Responsabilidad Social',
    'policy.social.content1': 'Nuestra política de responsabilidad social se enfoca en crear impacto positivo a través de la tecnología. Creemos en la inclusión digital, apoyando comunidades a través de soluciones impulsadas por tecnología, y asegurando que nuestros servicios beneficien a la sociedad en general.',
    'policy.social.content2': 'Nos involucramos activamente en programas de mentoría, iniciativas educativas y proyectos de desarrollo comunitario. Nuestro compromiso se extiende a apoyar ecosistemas tecnológicos locales y fomentar la innovación que aborda desafíos del mundo real.',
    'policy.business.title': 'Prácticas Comerciales Sostenibles',
    'policy.business.content1': 'Nuestras prácticas comerciales están diseñadas con la sostenibilidad en su núcleo. Implementamos reportes transparentes, abastecimiento ético y gestión de proyectos responsable que considera los impactos ambientales y sociales a largo plazo.',
    'policy.business.content2': 'Mantenemos altos estándares de gobernanza corporativa, asegurando la responsabilidad en todas nuestras operaciones. Nuestras relaciones con clientes se construyen sobre confianza, transparencia y compromiso compartido con los objetivos de desarrollo sostenible.',
    'policy.implementation.title': 'Implementación y Monitoreo',
    'policy.implementation.content1': 'Esta política de sostenibilidad se implementa activamente en todos los departamentos y proyectos. Monitoreamos regularmente nuestro progreso, medimos nuestro impacto y mejoramos continuamente nuestras prácticas para asegurar que cumplimos y superamos nuestros compromisos de sostenibilidad.',
    'policy.implementation.content2': 'Nuestro equipo recibe capacitación regular sobre prácticas de sostenibilidad, y fomentamos la innovación en soluciones tecnológicas sostenibles. Estamos comprometidos a ser líderes en el desarrollo y despliegue de tecnología responsable.',
    // Corporate Values Page
    'values.badge': 'Principios Fundamentales',
    'values.title': 'Valores Corporativos',
    'values.subtitle': 'Los principios y valores fundamentales que guían nuestra toma de decisiones, dan forma a nuestra cultura organizacional y definen cómo realizamos negocios en el paisaje digital.',
    'values.innovation.title': 'Innovación y Excelencia',
    'values.innovation.content1': 'Estamos comprometidos a empujar los límites de lo que es posible en tecnología. La innovación no es solo una palabra de moda para nosotros; es la base de todo lo que hacemos. Buscamos continuamente nuevas formas de resolver problemas complejos y entregar resultados excepcionales para nuestros clientes.',
    'values.innovation.content2': 'La excelencia en la ejecución es nuestro estándar. Creemos que cada proyecto, sin importar cuán pequeño, merece nuestro mejor esfuerzo. Este compromiso con la calidad nos impulsa a mejorar continuamente nuestros procesos, tecnologías y entrega de servicios.',
    'values.integrity.title': 'Integridad y Transparencia',
    'values.integrity.content1': 'La integridad forma la base de todas nuestras relaciones. Realizamos negocios con honestidad, equidad y respeto por todas las partes interesadas. Nuestra transparencia en la comunicación asegura que clientes, socios y miembros del equipo siempre sepan dónde están parados.',
    'values.integrity.content2': 'Creemos que la confianza se gana a través de acciones consistentes y comunicación honesta. Nuestro compromiso con la transparencia se extiende a nuestra gestión de proyectos, precios, cronogramas y cualquier desafío que encontremos en el camino.',
    'values.collaboration.title': 'Colaboración y Asociación',
    'values.collaboration.content1': 'Vemos cada relación con clientes como una verdadera asociación. La colaboración es clave para nuestro éxito, y trabajamos estrechamente con clientes para entender sus desafíos y objetivos únicos. Nuestro enfoque basado en equipos asegura perspectivas diversas y soluciones integrales.',
    'values.collaboration.content2': 'Internamente, fomentamos una cultura de colaboración donde la contribución de cada miembro del equipo es valorada. Creemos que las mejores soluciones emergen cuando diversos talentos y perspectivas se unen para abordar desafíos complejos.',
    'values.learning.title': 'Aprendizaje y Crecimiento Continuo',
    'values.learning.content1': 'En el mundo de la tecnología en rápida evolución, el aprendizaje continuo es esencial. Invertimos fuertemente en el desarrollo profesional de nuestro equipo, proporcionando oportunidades para capacitación, certificación y mejora de habilidades.',
    'values.learning.content2': 'Fomentamos la experimentación y el aprendizaje de los fracasos. Nuestra cultura promueve el intercambio de conocimientos, la mentoría y la búsqueda de nuevas tecnologías y metodologías que puedan beneficiar a nuestros clientes y avanzar nuestras capacidades.',
    'values.client.title': 'Éxito del Cliente y Creación de Valor',
    'values.client.content1': 'Nuestro éxito se mide por el éxito de nuestros clientes. Estamos comprometidos a entregar soluciones que no solo cumplan con los requisitos sino que excedan las expectativas y generen valor comercial real. Cada proyecto se aborda con el objetivo de crear un impacto positivo duradero.',
    'values.client.content2': 'Tomamos una visión a largo plazo de las relaciones con clientes, enfocándonos en soluciones sostenibles que servirán bien a nuestros clientes en el futuro. Nuestra propuesta de valor va más allá de la experiencia técnica para incluir pensamiento estratégico, perspicacia comercial y apoyo continuo.',
    // Human Capital Initiatives Page
    'humanCapital.badge': 'Enfoque Centrado en las Personas',
    'humanCapital.title': 'Iniciativas de Capital Humano',
    'humanCapital.subtitle': 'Programas e iniciativas integrales enfocados en el desarrollo de empleados, bienestar y crear un ambiente de trabajo inclusivo que empodere nuestro mayor activo - nuestra gente.',
    'humanCapital.development.title': 'Programas de Desarrollo Profesional',
    'humanCapital.development.content1': 'Invertimos fuertemente en el crecimiento y desarrollo continuo de los miembros de nuestro equipo. Nuestros programas integrales de desarrollo profesional incluyen entrenamiento técnico, desarrollo de liderazgo y mejora de habilidades blandas para asegurar que nuestros empleados se mantengan a la vanguardia en sus campos.',
    'humanCapital.development.content2': 'Nuestras iniciativas de desarrollo incluyen programas de mentoría, oportunidades de proyectos multifuncionales, asistencia a conferencias, apoyo de certificación y acceso a herramientas y tecnologías de vanguardia. Creemos que invertir en el crecimiento de nuestra gente se traduce directamente en mejores resultados para nuestros clientes y la empresa.',
    'humanCapital.wellbeing.title': 'Bienestar del Empleado y Equilibrio Trabajo-Vida',
    'humanCapital.wellbeing.content1': 'Reconocemos que el bienestar del empleado es fundamental tanto para la felicidad personal como para el éxito profesional. Nuestras iniciativas de bienestar incluyen arreglos de trabajo flexibles, programas de apoyo en salud mental, actividades de bienestar y beneficios de salud integrales.',
    'humanCapital.wellbeing.content2': 'Nuestras políticas de equilibrio trabajo-vida incluyen opciones de trabajo remoto, horarios flexibles, políticas de vacaciones generosas y prácticas amigables con la familia. Entendemos que nuestros empleados tienen vidas fuera del trabajo, y los apoyamos para mantener un equilibrio saludable entre sus compromisos profesionales y personales.',
    'humanCapital.diversity.title': 'Diversidad, Equidad e Inclusión',
    'humanCapital.diversity.content1': 'Estamos comprometidos a crear un ambiente de trabajo inclusivo donde se celebre la diversidad y todos se sientan valorados y respetados. Nuestras iniciativas de diversidad, equidad e inclusión se enfocan en reclutar de grupos de talento diversos, proporcionar oportunidades iguales de avance y fomentar un ambiente de pertenencia.',
    'humanCapital.diversity.content2': 'Nuestros esfuerzos de inclusión incluyen entrenamiento en sesgos inconscientes, prácticas de contratación diversas, grupos de recursos de empleados y evaluaciones regulares de nuestra cultura de trabajo. Creemos que las perspectivas diversas llevan a mejor innovación, resolución de problemas y resultados comerciales.',
    'humanCapital.knowledge.title': 'Cultura de Compartir Conocimiento e Innovación',
    'humanCapital.knowledge.content1': 'Fomentamos una cultura de compartir conocimiento y aprendizaje continuo. Nuestras iniciativas de innovación incluyen tech talks regulares, hackathones, desafíos de innovación y oportunidades para que los empleados persigan proyectos de pasión que puedan beneficiar a la empresa y nuestros clientes.',
    'humanCapital.knowledge.content2': 'Alentamos la colaboración entre equipos y proporcionamos plataformas para que los empleados compartan su experiencia, aprendan de otros y contribuyan al conocimiento colectivo de la organización. Esta cultura de compartir e innovación impulsa tanto el crecimiento personal como el avance de la empresa.',
    'humanCapital.recognition.title': 'Reconocimiento y Avance de Carrera',
    'humanCapital.recognition.content1': 'Creemos en reconocer y recompensar la excelencia. Nuestros programas de reconocimiento incluyen bonos basados en rendimiento, premios de logros y reconocimiento público de contribuciones sobresalientes. Proporcionamos caminos claros de avance de carrera y apoyamos a los empleados en alcanzar sus objetivos profesionales.',
    'humanCapital.recognition.content2': 'Nuestro marco de desarrollo de carrera incluye revisiones regulares de rendimiento, establecimiento de objetivos, evaluaciones de habilidades y planes de desarrollo personalizados. Invertimos en el éxito de carrera a largo plazo de nuestros empleados, sabiendo que su crecimiento contribuye directamente al éxito de la empresa.',
    'humanCapital.community.title': 'Compromiso Comunitario e Impacto Social',
    'humanCapital.community.content1': 'Alentamos a nuestros empleados a involucrarse con sus comunidades y contribuir a causas sociales. Nuestras iniciativas de compromiso comunitario incluyen tiempo de voluntariado, programas de responsabilidad social corporativa y apoyo para las actividades caritativas personales de los empleados.',
    'humanCapital.community.content2': 'Creemos que los empleados comprometidos que contribuyen a sus comunidades están más satisfechos y traen esa energía positiva de vuelta a su trabajo. Nuestros programas de impacto social permiten a los empleados usar sus habilidades y experiencia para hacer una diferencia en el mundo.',
    // Human Rights Policy Page
    'humanRights.badge': 'Compromiso con los Derechos Humanos',
    'humanRights.title': 'Política de Derechos Humanos',
    'humanRights.subtitle': 'Nuestro compromiso inquebrantable de proteger y promover los derechos humanos en todas nuestras operaciones, alianzas y soluciones tecnológicas que sirven a comunidades en todo el mundo.',
    'humanRights.universal.title': 'Principios Universales de Derechos Humanos',
    'humanRights.universal.content1': 'Upvista Digital se compromete a defender la Declaración Universal de Derechos Humanos y todos los estándares internacionales relevantes de derechos humanos. Reconocemos que la tecnología tiene el poder tanto de proteger como de potencialmente infringir los derechos humanos, y estamos dedicados a asegurar que nuestras soluciones avancen la dignidad y libertad humanas.',
    'humanRights.universal.content2': 'Nuestra política de derechos humanos se aplica a todos los aspectos de nuestras operaciones comerciales, incluyendo relaciones con empleados, alianzas con clientes, gestión de cadena de suministro, y el desarrollo y despliegue de soluciones tecnológicas que impactan a individuos y comunidades.',
    'humanRights.workplace.title': 'Derechos Humanos en el Lugar de Trabajo',
    'humanRights.workplace.content1': 'Mantenemos un ambiente de trabajo que respeta y protege los derechos fundamentales de todos los empleados. Esto incluye el derecho a un trato justo, libertad de discriminación, condiciones de trabajo seguras, y el derecho a expresar preocupaciones sin temor a represalias.',
    'humanRights.workplace.content2': 'Nuestro compromiso se extiende a asegurar oportunidades iguales para el avance profesional, prácticas de compensación justas, y crear un ambiente inclusivo donde se celebre la diversidad y todos los individuos puedan prosperar independientemente de su origen, identidad o creencias.',
    'humanRights.privacy.title': 'Privacidad y Derechos Digitales',
    'humanRights.privacy.content1': 'En nuestra era digital, la privacidad es un derecho humano fundamental. Nos comprometemos a proteger los derechos de privacidad de todos los individuos cuyos datos manejamos, ya sean nuestros empleados, clientes, o usuarios finales de las soluciones que desarrollamos.',
    'humanRights.privacy.content2': 'Nuestras soluciones tecnológicas están diseñadas con principios de privacidad por diseño, asegurando que la protección de datos esté integrada en cada sistema desde el principio. Implementamos medidas de seguridad robustas y prácticas transparentes de manejo de datos que respetan la autonomía y consentimiento individuales.',
    'humanRights.community.title': 'Impacto Comunitario y Accesibilidad',
    'humanRights.community.content1': 'Creemos que la tecnología debería ser accesible para todos y no debería crear o perpetuar desigualdades. Nuestras soluciones están diseñadas con la accesibilidad en mente, asegurando que los individuos con discapacidades puedan participar plenamente en el mundo digital.',
    'humanRights.community.content2': 'Trabajamos activamente para cerrar la brecha digital apoyando iniciativas que proporcionan acceso a la tecnología a comunidades desatendidas. Nuestro compromiso con los derechos humanos incluye asegurar que nuestras soluciones tecnológicas promuevan la inclusión social en lugar de la exclusión.',
    'humanRights.ethical.title': 'Desarrollo Tecnológico Ético',
    'humanRights.ethical.content1': 'Nos comprometemos a desarrollar tecnología que respete los derechos humanos y promueva el florecimiento humano. Esto incluye evitar el desarrollo de tecnologías que podrían ser utilizadas para violar los derechos humanos, como sistemas de vigilancia que infrinjan la privacidad o sistemas de IA que perpetúen sesgos y discriminación.',
    'humanRights.ethical.content2': 'Nuestro marco ético guía todas las decisiones de desarrollo tecnológico, asegurando que consideremos las implicaciones potenciales de derechos humanos de nuestras soluciones. Realizamos evaluaciones regulares de impacto en derechos humanos y mantenemos diálogo continuo con las partes interesadas para asegurar que nuestra tecnología sirva a los mejores intereses de la humanidad.',
    'humanRights.implementation.title': 'Implementación y Responsabilidad',
    'humanRights.implementation.content1': 'Esta política de derechos humanos no es solo un documento; es un compromiso vivo que guía nuestras operaciones diarias. Proporcionamos entrenamiento regular a todos los empleados sobre principios de derechos humanos y mantenemos mecanismos robustos para reportar y abordar cualquier preocupación.',
    'humanRights.implementation.content2': 'Nos mantenemos responsables de estos principios a través de auditorías regulares, participación de partes interesadas, y reportes transparentes sobre nuestro desempeño en derechos humanos. Nuestro compromiso con los derechos humanos es fundamental para nuestra identidad como una empresa tecnológica responsable.',
    // Environmental Philosophy Page
    'environmental.badge': 'Liderazgo en Tecnología Verde',
    'environmental.title': 'Filosofía Ambiental',
    'environmental.subtitle': 'Nuestro enfoque integral para minimizar el impacto ambiental y promover prácticas sostenibles en el desarrollo tecnológico, operaciones y soluciones para clientes.',
    'environmental.development.title': 'Desarrollo Tecnológico Sostenible',
    'environmental.development.content1': 'Creemos que la tecnología debe ser una fuerza para el bien ambiental, no una fuente de daño ambiental. Nuestras prácticas de desarrollo priorizan la eficiencia energética, la optimización de recursos y el impacto ambiental mínimo. Cada solución que creamos está diseñada con principios de sostenibilidad en su núcleo.',
    'environmental.development.content2': 'Nuestro enfoque de desarrollo sostenible incluye prácticas de codificación verde, algoritmos optimizados que reducen los requisitos computacionales, y opciones de infraestructura en la nube que minimizan la huella de carbono. Investigamos e implementamos continuamente nuevas tecnologías que pueden ayudar a reducir el impacto ambiental.',
    'environmental.carbon.title': 'Reducción de la Huella de Carbono',
    'environmental.carbon.content1': 'Estamos comprometidos a reducir nuestra huella de carbono en todas las operaciones. Esto incluye usar fuentes de energía renovable para nuestras oficinas, implementar hardware y software eficientes en energía, y elegir proveedores de nube que prioricen la sostenibilidad y la energía renovable.',
    'environmental.carbon.content2': 'Nuestras iniciativas de reducción de carbono incluyen políticas de trabajo remoto que reducen las emisiones de desplazamiento, prácticas digitales-first que minimizan el uso de papel, y diseños de oficina eficientes en energía. Medimos y reportamos regularmente nuestra huella de carbono y establecemos objetivos ambiciosos de reducción.',
    'environmental.cloud.title': 'Computación en la Nube Verde e Infraestructura',
    'environmental.cloud.content1': 'Priorizamos soluciones de computación en la nube que funcionan con energía renovable y son operadas por proveedores con fuertes compromisos ambientales. Nuestras opciones de infraestructura están guiadas por métricas de sostenibilidad, incluyendo intensidad de carbono, eficiencia energética y certificaciones ambientales.',
    'environmental.cloud.content2': 'Nuestro enfoque de infraestructura verde incluye computación sin servidor para minimizar el uso de recursos, auto-escalado para coincidir con la demanda y reducir el desperdicio, y selección de centros de datos basada en criterios ambientales. Trabajamos con clientes para optimizar su uso de la nube tanto para rendimiento como para impacto ambiental.',
    'environmental.digital.title': 'Soluciones Digitales para Desafíos Ambientales',
    'environmental.digital.content1': 'Desarrollamos soluciones tecnológicas que ayudan a nuestros clientes a reducir su impacto ambiental. Esto incluye sistemas de gestión de energía, aplicaciones de reducción de residuos, herramientas de optimización de cadena de suministro, y plataformas de reporte de sostenibilidad que permiten una mejor toma de decisiones ambientales.',
    'environmental.digital.content2': 'Nuestras soluciones tecnológicas ambientales ayudan a las empresas a rastrear sus emisiones de carbono, optimizar el uso de recursos e implementar prácticas sostenibles. Creemos que la tecnología puede ser una herramienta poderosa para la protección ambiental y la sostenibilidad.',
    'environmental.waste.title': 'Reducción de Residuos y Economía Circular',
    'environmental.waste.content1': 'Adoptamos principios de economía circular en nuestras operaciones y desarrollo tecnológico. Esto incluye extender el ciclo de vida del hardware, promover la reutilización y modularidad del software, y diseñar sistemas que pueden ser fácilmente actualizados en lugar de reemplazados.',
    'environmental.waste.content2': 'Nuestras iniciativas de reducción de residuos incluyen prácticas de oficina sin papel, programas de reciclaje de residuos electrónicos, y procesos digitales-first que minimizan el consumo de recursos físicos. Alentamos a nuestros clientes a adoptar prácticas similares a través de las soluciones que desarrollamos.',
    'environmental.education.title': 'Educación y Defensa Ambiental',
    'environmental.education.content1': 'Creemos en el poder de la educación y la defensa para impulsar el cambio ambiental. Nuestros miembros del equipo reciben entrenamiento regular sobre mejores prácticas ambientales, y compartimos nuestro conocimiento con clientes y la comunidad tecnológica más amplia.',
    'environmental.education.content2': 'Participamos activamente en iniciativas ambientales, apoyamos la investigación en tecnología verde, y abogamos por políticas que promuevan el desarrollo tecnológico sostenible. Nuestro objetivo es ser una fuerza positiva para el cambio ambiental en la industria tecnológica.',
    'environmental.improvement.title': 'Mejora Continua e Innovación',
    'environmental.improvement.content1': 'La sostenibilidad ambiental es un viaje continuo, no un destino. Investigamos continuamente nuevas tecnologías y prácticas que pueden reducir aún más nuestro impacto ambiental. Nuestros esfuerzos de innovación se enfocan en desarrollar soluciones tecnológicamente avanzadas y ambientalmente responsables.',
    'environmental.improvement.content2': 'Evaluamos regularmente nuestro rendimiento ambiental, establecemos objetivos ambiciosos de mejora, e invertimos en tecnologías y prácticas que avancen nuestra misión de sostenibilidad. Nuestro compromiso con la responsabilidad ambiental nos impulsa a buscar constantemente mejores formas de servir a nuestros clientes mientras protegemos nuestro planeta.',
    // Social Philosophy Page
    'social.badge': 'Misión de Impacto Social',
    'social.title': 'Filosofía Social',
    'social.subtitle': 'Nuestro compromiso con la responsabilidad social y el impacto comunitario positivo a través de soluciones tecnológicas que empoderan a los individuos, fortalecen las comunidades y promueven la equidad social.',
    'social.good.title': 'Tecnología para el Bien Social',
    'social.good.content1': 'Creemos que la tecnología debe ser una fuerza para el cambio social positivo, empoderando a individuos y comunidades para superar desafíos y alcanzar su potencial completo. Nuestra filosofía social se centra en usar nuestra experiencia técnica para abordar problemas del mundo real y crear un impacto significativo en la sociedad.',
    'social.good.content2': 'Nuestro compromiso con el bien social se extiende más allá de nuestros proyectos comerciales para incluir trabajo pro-bono, asociaciones comunitarias e iniciativas que aprovechan la tecnología para abordar desigualdades sociales, mejorar el acceso a la educación y la atención médica, y fortalecer la resistencia comunitaria.',
    'social.inclusion.title': 'Inclusión Digital y Accesibilidad',
    'social.inclusion.content1': 'Estamos comprometidos a asegurar que los beneficios de la tecnología sean accesibles para todos los miembros de la sociedad, independientemente de su origen, habilidades o circunstancias económicas. Nuestras iniciativas de inclusión digital se enfocan en romper barreras y crear soluciones tecnológicas que sirvan a todos.',
    'social.inclusion.content2': 'Nuestros esfuerzos de accesibilidad incluyen desarrollar soluciones que funcionen para personas con discapacidades, crear interfaces multilingües y diseñar para entornos de bajo ancho de banda. Creemos que el diseño inclusivo lleva a mejores soluciones para todos y ayuda a cerrar la brecha digital.',
    'social.community.title': 'Compromiso Comunitario y Asociación',
    'social.community.content1': 'Nos involucramos activamente con comunidades locales y organizaciones para entender sus necesidades y contribuir nuestra experiencia para abordar desafíos comunitarios. Nuestras asociaciones comunitarias incluyen instituciones educativas, organizaciones sin fines de lucro e iniciativas gubernamentales locales.',
    'social.community.content2': 'Nuestro compromiso comunitario incluye programas de mentoría para estudiantes, talleres de tecnología para miembros de la comunidad y proyectos colaborativos que combinan nuestras habilidades técnicas con conocimiento y necesidades locales. Creemos que las comunidades fuertes llevan a sociedades más fuertes.',
    'social.education.title': 'Educación y Compartir Conocimiento',
    'social.education.content1': 'Creemos en el poder transformador de la educación y estamos comprometidos a compartir conocimiento y experiencia con la comunidad más amplia. Nuestras iniciativas educativas incluyen bootcamps de codificación, talleres de tecnología y programas de mentoría que ayudan a otros a desarrollar habilidades técnicas.',
    'social.education.content2': 'Nuestros esfuerzos de compartir conocimiento incluyen contribuciones de código abierto, publicaciones de blog técnico, presentaciones de conferencias y oportunidades de aprendizaje colaborativo. Creemos que compartir conocimiento fortalece toda la comunidad tecnológica y crea oportunidades para la innovación.',
    'social.ethical.title': 'Desarrollo Tecnológico Ético',
    'social.ethical.content1': 'Estamos comprometidos a desarrollar tecnología que respete la dignidad humana, proteja la privacidad y promueva la equidad social. Nuestras prácticas de desarrollo ético incluyen principios de privacidad por diseño, pruebas de sesgo y consideración de las implicaciones sociales de nuestras soluciones.',
    'social.ethical.content2': 'Nuestro marco ético guía todas las decisiones de desarrollo tecnológico, asegurando que consideremos los impactos sociales potenciales de nuestras soluciones. Realizamos revisiones éticas regulares y mantenemos diálogo continuo con partes interesadas para asegurar que nuestra tecnología sirva a los mejores intereses de la sociedad.',
    'social.economic.title': 'Empoderamiento Económico a Través de la Tecnología',
    'social.economic.content1': 'Creemos que la tecnología puede ser una herramienta poderosa para el empoderamiento económico, ayudando a individuos y negocios a acceder a nuevas oportunidades y mejorar sus perspectivas económicas. Nuestras soluciones están diseñadas para crear valor económico y permitir crecimiento sostenible.',
    'social.economic.content2': 'Nuestras iniciativas de empoderamiento económico incluyen apoyar a pequeñas empresas con soluciones tecnológicas, crear plataformas que permitan nuevas oportunidades económicas y desarrollar herramientas que ayuden a individuos y comunidades a participar en la economía digital.',
    'social.global.title': 'Ciudadanía Global y Responsabilidad',
    'social.global.content1': 'Como empresa tecnológica global, reconocemos nuestra responsabilidad de contribuir positivamente a las comunidades donde operamos y a la sociedad global más amplia. Nuestros esfuerzos de ciudadanía global incluyen apoyar proyectos de desarrollo internacional y contribuir a estándares tecnológicos globales.',
    'social.global.content2': 'Creemos que las empresas tecnológicas tienen una responsabilidad especial de usar sus recursos y experiencia para abordar desafíos globales. Nuestras iniciativas de ciudadanía global incluyen apoyar la educación en países en desarrollo, contribuir a proyectos de código abierto y participar en el desarrollo de estándares tecnológicos internacionales.',
    // Corporate Governance Page
    'governance.badge': 'Liderazgo Ético',
    'governance.title': 'Gobierno Corporativo',
    'governance.subtitle': 'Nuestro marco de gobierno asegurando transparencia, responsabilidad y prácticas comerciales éticas que construyen confianza con los stakeholders y impulsan el éxito sostenible a largo plazo.',
    'governance.board.title': 'Liderazgo y Supervisión del Directorio',
    'governance.board.content1': 'Nuestro gobierno corporativo está construido sobre una base de liderazgo fuerte del directorio y supervisión independiente. Nuestro consejo de administración proporciona orientación estratégica, asegura la responsabilidad y supervisa la implementación de nuestras políticas y procedimientos de gobierno.',
    'governance.board.content2': 'El directorio mantiene comités independientes para auditoría, compensación y asuntos de gobierno, asegurando que todas las decisiones principales estén sujetas a supervisión y revisión apropiadas. Nuestra estructura de gobierno promueve transparencia, responsabilidad y alineación con los intereses de los stakeholders.',
    'governance.transparency.title': 'Transparencia y Divulgación',
    'governance.transparency.content1': 'Mantenemos los más altos estándares de transparencia en todas nuestras operaciones comerciales y comunicaciones. Nuestras prácticas de divulgación incluyen reportes regulares sobre rendimiento financiero, operaciones comerciales y asuntos clave de gobierno para asegurar que los stakeholders estén bien informados.',
    'governance.transparency.content2': 'Nuestros compromisos de transparencia se extienden a nuestras relaciones con clientes, donde proporcionamos comunicación clara sobre el progreso del proyecto, desafíos y resultados. Creemos que la comunicación transparente construye confianza y permite mejor toma de decisiones para todas las partes involucradas.',
    'governance.risk.title': 'Gestión de Riesgos y Cumplimiento',
    'governance.risk.content1': 'Mantenemos sistemas comprensivos de gestión de riesgos que identifican, evalúan y mitigan riesgos en todos los aspectos de nuestras operaciones comerciales. Nuestro marco de gestión de riesgos incluye evaluaciones regulares, planificación de contingencia y monitoreo continuo de indicadores clave de riesgo.',
    'governance.risk.content2': 'Nuestro programa de cumplimiento asegura adherencia a todas las leyes, regulaciones y estándares industriales aplicables. Mantenemos controles internos robustos y realizamos auditorías regulares para asegurar cumplimiento con requisitos legales y regulatorios en todas las jurisdicciones donde operamos.',
    'governance.ethics.title': 'Prácticas Comerciales Éticas',
    'governance.ethics.content1': 'Estamos comprometidos a conducir negocios con los más altos estándares éticos, guiados por nuestro código de conducta y políticas éticas. Nuestro marco ético cubre todos los aspectos de las operaciones comerciales, desde relaciones con clientes hasta conducta de empleados y asociaciones con proveedores.',
    'governance.ethics.content2': 'Nuestras prácticas éticas incluyen competencia justa, abastecimiento responsable, medidas anti-corrupción y protección de información confidencial. Proporcionamos entrenamiento ético regular a todos los empleados y mantenemos canales para reportar preocupaciones éticas sin temor a represalias.',
    'governance.stakeholder.title': 'Compromiso de Stakeholders y Comunicación',
    'governance.stakeholder.content1': 'Mantenemos compromiso activo con todos nuestros stakeholders, incluyendo clientes, empleados, inversionistas, socios y las comunidades donde operamos. Nuestro compromiso con stakeholders incluye comunicación regular, mecanismos de retroalimentación y procesos de toma de decisiones colaborativos.',
    'governance.stakeholder.content2': 'Nuestras prácticas de comunicación aseguran que los stakeholders estén informados sobre nuestro rendimiento comercial, dirección estratégica y desarrollos clave. Valoramos el aporte de los stakeholders e incorporamos retroalimentación en nuestros procesos de toma de decisiones para asegurar alineación con los intereses de los stakeholders.',
    'governance.performance.title': 'Gestión de Rendimiento y Responsabilidad',
    'governance.performance.content1': 'Mantenemos sistemas robustos de gestión de rendimiento que aseguran responsabilidad en todos los niveles de la organización. Nuestro marco de rendimiento incluye objetivos claros, revisiones regulares y consecuencias tanto para el logro como para el no logro de metas.',
    'governance.performance.content2': 'Nuestras medidas de responsabilidad incluyen compensación ejecutiva vinculada al rendimiento, evaluaciones regulares del directorio y evaluaciones independientes de la efectividad gerencial. Creemos que sistemas fuertes de responsabilidad impulsan mejor rendimiento y crean valor para todos los stakeholders.',
    'governance.improvement.title': 'Mejora Continua e Innovación',
    'governance.improvement.content1': 'Continuamente buscamos mejorar nuestras prácticas de gobierno y adaptarnos a entornos comerciales cambiantes y expectativas de stakeholders. Nuestro marco de gobierno es regularmente revisado y actualizado para asegurar que permanezca efectivo y relevante.',
    'governance.improvement.content2': 'Comparamos nuestras prácticas de gobierno contra las mejores prácticas de la industria e incorporamos retroalimentación de stakeholders para impulsar mejora continua. Nuestro compromiso con la excelencia en gobierno asegura que mantengamos la confianza y confianza de todos nuestros stakeholders mientras impulsamos el éxito comercial sostenible.',
    // Research & Development Page
    'research.badge': 'Centro de Innovación',
    'research.title': 'Investigación y Desarrollo',
    'research.subtitle': 'Nuestro compromiso con avanzar la tecnología a través de investigación de vanguardia, iniciativas de innovación y desarrollo de soluciones de próxima generación que dan forma al futuro de la transformación digital.',
    'research.strategy.title': 'Estrategia y Visión de Innovación',
    'research.strategy.content1': 'Nuestra estrategia de investigación y desarrollo está impulsada por una visión de crear soluciones tecnológicas que no solo satisfagan las necesidades de hoy sino que anticipen y aborden los desafíos del mañana. Invertimos significativamente en I+D para mantener nuestra posición en la vanguardia de la innovación tecnológica.',
    'research.strategy.content2': 'Nuestro enfoque de innovación combina investigación fundamental con desarrollo aplicado, asegurando que nuestros descubrimientos se traduzcan en soluciones prácticas que beneficien a nuestros clientes y la sociedad. Nos enfocamos en tecnologías emergentes que tienen el potencial de transformar industrias y crear nuevas oportunidades.',
    'research.emerging.title': 'Investigación en Tecnologías Emergentes',
    'research.emerging.content1': 'Investigamos activamente tecnologías emergentes incluyendo inteligencia artificial, aprendizaje automático, blockchain, computación cuántica y análisis avanzado. Nuestros equipos de investigación trabajan en desarrollar nuevos algoritmos, mejorar tecnologías existentes y crear aplicaciones innovadoras.',
    'research.emerging.content2': 'Nuestras iniciativas de investigación incluyen explorar el potencial de la computación perimetral, investigar soluciones tecnológicas sostenibles y desarrollar nuevos enfoques para ciberseguridad y privacidad de datos. Colaboramos con instituciones académicas y organizaciones de investigación para avanzar el estado del arte.',
    'research.development.title': 'Desarrollo de Productos y Prototipado',
    'research.development.content1': 'Nuestro proceso de desarrollo de productos combina investigación rigurosa con metodologías de desarrollo ágil para crear soluciones innovadoras. Utilizamos prototipado rápido y desarrollo iterativo para validar conceptos y refinar productos antes de la implementación a gran escala.',
    'research.development.content2': 'Nuestros equipos de desarrollo trabajan estrechamente con clientes y usuarios finales para asegurar que nuestros productos satisfagan necesidades del mundo real y entreguen valor tangible. Empleamos principios de diseño centrado en el usuario y bucles de retroalimentación continuos para crear soluciones que son tanto técnicamente avanzadas como fáciles de usar.',
    'research.sustainable.title': 'Desarrollo de Tecnología Sostenible',
    'research.sustainable.content1': 'Una porción significativa de nuestros esfuerzos de I+D se enfoca en desarrollar soluciones tecnológicas sostenibles que minimicen el impacto ambiental mientras maximizan la eficiencia y el rendimiento. Investigamos técnicas de computación verde, algoritmos eficientes en energía y arquitecturas de software sostenibles.',
    'research.sustainable.content2': 'Nuestras iniciativas de desarrollo sostenible incluyen crear aplicaciones neutrales en carbono, optimizar el uso de recursos en la nube y desarrollar tecnologías que ayuden a otras organizaciones a reducir su huella ambiental. Creemos que la tecnología debe ser una fuerza para el bien ambiental.',
    'research.collaboration.title': 'Colaboración y Asociaciones',
    'research.collaboration.content1': 'Colaboramos activamente con universidades, instituciones de investigación, empresas tecnológicas y organizaciones industriales para avanzar la investigación y compartir conocimiento. Nuestras asociaciones nos permiten acceder a investigación de vanguardia, compartir recursos y acelerar la innovación.',
    'research.collaboration.content2': 'Nuestro enfoque colaborativo incluye proyectos de investigación conjuntos, programas de transferencia de tecnología y participación en consorcios industriales. Creemos que las mejores innovaciones vienen de perspectivas diversas y esfuerzos colaborativos que combinan diferentes áreas de experiencia.',
    'research.ip.title': 'Propiedad Intelectual y Protección de Innovación',
    'research.ip.content1': 'Protegemos nuestras innovaciones a través de gestión estratégica de propiedad intelectual, incluyendo patentes, marcas registradas y secretos comerciales. Nuestra estrategia de PI equilibra la protección de nuestras innovaciones con colaboración abierta y compartir conocimiento donde sea apropiado.',
    'research.ip.content2': 'También contribuimos a proyectos de código abierto y compartimos hallazgos de investigación que pueden beneficiar a la comunidad tecnológica más amplia. Nuestro enfoque a la gestión de PI refleja nuestro compromiso de avanzar la tecnología mientras protegemos nuestras ventajas competitivas e inversión en innovación.',
    'research.roadmap.title': 'Hoja de Ruta Tecnológica Futura',
    'research.roadmap.content1': 'Nuestra hoja de ruta de investigación y desarrollo se enfoca en tecnologías que serán críticas en los próximos años, incluyendo inteligencia artificial, computación cuántica, computación perimetral y tecnologías de redes de próxima generación. Invertimos tanto en mejoras incrementales como en innovaciones revolucionarias.',
    'research.roadmap.content2': 'Monitoreamos continuamente tendencias tecnológicas y desarrollos del mercado para asegurar que nuestras inversiones en I+D se alineen con oportunidades futuras y necesidades del cliente. Nuestro enfoque de investigación flexible nos permite adaptarnos rápidamente a nuevas oportunidades y pivotar nuestros esfuerzos cuando emergen nuevas tecnologías prometedoras.',
    'research.impact.title': 'Medición de Impacto y Éxito',
    'research.impact.content1': 'Medimos el éxito de nuestros esfuerzos de I+D a través de métricas cuantitativas y evaluaciones cualitativas. Nuestro marco de evaluación incluye producción de innovación, adopción tecnológica, satisfacción del cliente y contribución al ecosistema tecnológico más amplio.',
    'research.impact.content2': 'Nuestro compromiso con la mejora continua en I+D asegura que mantengamos nuestra posición como líder tecnológico mientras contribuimos al avance de la industria. Revisamos regularmente nuestras prioridades de investigación y ajustamos nuestras inversiones para maximizar el impacto y la creación de valor.'
  },
  TR: {
    'nav.home': 'Ana Sayfa',
    'nav.company': 'Şirket',
    'nav.services': 'Hizmetler',
    'nav.community': 'Topluluk',
    'nav.researches': 'Araştırmalar',
    'nav.insights': 'İçgörüler',
    'nav.careers': 'Kariyerleri Keşfet',
    'nav.contact': 'İş Hakkında Konuşalım',
    'hero.title': 'Büyümeyi Teşvik Eden Dijital Çözümler',
    'hero.subtitle': 'İşletmenizi son teknoloji ve yenilikçi çözümlerle dönüştürün.',
    'hero.cta': 'Başla',
    'hero.register': 'Kayıt Ol',
    'hero.badge': 'Upvista Digital - Pakistan\'ın Önde Gelen Yazılım Ajansı',
    'hero.service1': 'Web Geliştirme',
    'hero.service2': 'Yazılım Mühendisliği',
    'hero.service3': 'Grafik ve Tasarım',
    'hero.service4': 'AI Otomasyonu',
    'hero.stats1': 'Teslim Edilen Projeler',
    'hero.stats2': 'Müşteri Değerlendirmesi',
    'hero.stats3': 'Destek',
    // Company dropdown
    'dropdown.company.about': 'Hakkımızda',
    'dropdown.company.profile': 'Şirket Profili',
    'dropdown.company.sustainability': 'Sürdürülebilirlik ve Değerler',
    'dropdown.company.investors': 'Yatırımcı İlişkileri',
    'dropdown.company.partners': 'Ortaklıklar',
    'dropdown.company.leadership': 'Liderlik',
    'dropdown.company.contact': 'İletişim',
    // Company Profile Page
    'companyProfile.badge': 'Kurumsal Bilgiler',
    'companyProfile.title': 'Şirket Profili',
    'companyProfile.subtitle': 'Upvista Digital\'in kurumsal temelleri, liderlik yapısı ve iş operasyonları hakkında kapsamlı genel bakış.',
    'companyProfile.tradeName': 'Ticari Unvan',
    'companyProfile.businessDescription': 'İş Açıklaması',
    'companyProfile.ceo': 'Genel Müdür',
    'companyProfile.founded': 'Kuruluş Tarihi',
    'companyProfile.fiscalYearEnd': 'Mali Yıl Sonu',
    'companyProfile.headOffice': 'Genel Merkez',
    'companyProfile.legalStatus': 'Yasal Durum',
    'companyProfile.serviceAreas': 'Hizmet Alanları',
    'companyProfile.industryFocus': 'Sektörel Odak',
    'companyProfile.revenueModel': 'Gelir Modeli',
    'companyProfile.clientPortfolio': 'Müşteri Portföyü',
    'companyProfile.qualityStandards': 'Kalite Standartları',
    'companyProfile.businessDesc1': 'Dijital çözümlerin geliştirilmesi, satışı ve işletilmesi.',
    'companyProfile.businessDesc2': 'Web geliştirme ve yazılım mühendisliği hizmetlerinin geliştirilmesi, satışı ve teslimi.',
    'companyProfile.ceoName': 'Hamza Hafeez',
    'companyProfile.foundedDate': '1 Temmuz 2025',
    'companyProfile.fiscalEnd': '30 Haziran',
    'companyProfile.headOfficeLocation': 'Lahor, Pakistan',
    'companyProfile.legalStatusType': 'Tek Kişilik İşletme',
    'companyProfile.serviceAreasGlobal': 'Küresel',
    'companyProfile.industryTypes': 'Teknoloji Hizmetleri, Dijital Çözümler, Yazılım Geliştirme',
    'companyProfile.revenueType': 'Hizmet Tabanlı',
    'companyProfile.clientCount': 'Çeşitli sektörlerde 50+ başarılı proje',
    'companyProfile.qualityRating': '4.9/5 müşteri memnuniyeti değerlendirmesi',
    // Services dropdown
    'dropdown.services.about': 'Hizmetlerimiz Hakkında',
    'dropdown.services.software': 'Yazılım Geliştirme',
    'dropdown.services.web': 'Web Geliştirme',
    'dropdown.services.ai': 'AI ve Otomasyon',
    'dropdown.services.cloud': 'Bulut',
    'dropdown.services.design': 'Grafik ve Tasarım',
    'dropdown.services.marketing': 'Dijital Pazarlama',
    // Community dropdown
    'dropdown.community.about': 'Topluluk Hakkında',
    'dropdown.community.events': 'Etkinlikler',
    'dropdown.community.members': 'Topluluk Üyeleri',
    'dropdown.community.achievements': 'Başarılar',
    'dropdown.community.trainings': 'Eğitimler',
    'dropdown.community.join': 'Topluluğa Katıl',
    // Researches dropdown
    'dropdown.researches.about': 'Upvista Araştırmaları Hakkında',
    'dropdown.researches.cortex': 'Proje Cortex',
    'dropdown.researches.agi': 'AGI Araştırması',
    // Insights dropdown
    'dropdown.insights.caseStudies': 'Vaka Çalışmaları',
    'dropdown.insights.news': 'Haberler',
    'dropdown.insights.blogs': 'Bloglar',
    'dropdown.insights.whitepapers': 'Beyaz Kitaplar',
    'dropdown.insights.events': 'Etkinlikler',
    // Homepage sections - Turkish
    'home.transform.title': 'Dijital Varlığı Dönüştürme',
    'home.transform.subtitle': 'Eylemi İlham Eden Deneyimler Tasarlama',
    'home.transform.description': 'Fikirden uygulamaya, sadece web siteleri inşa etmiyoruz — insanlarla bağlantı kuran, güven inşa eden ve ziyaretçileri sadık müşterilere dönüştüren yolculuklar inşa ediyoruz.',
    'home.transform.exploreServices': 'Hizmetlerimizi Keşfet',
    'home.transform.contactUs': 'İletişime Geç',
    'home.partnership.title': 'Dijital Büyümeniz İçin Ortaklık',
    'home.partnership.description': 'Sadece proje teslim etmiyoruz—işletmenizin dijital-öncelikli dünyada gelişmesini sağlayan uzun vadeli ortaklıklar kuruyoruz. Yaklaşımımız işbirlikçi, şeffaf ve başarınıza odaklı.',
    'home.partnership.explore': 'Ortaklıkları Keşfet',
    'home.partnership.premium': 'Premium İşbirliği',
    'home.partnership.subtitle': 'Mükemmellik için yeni standartlar belirleyen dijital çözümler birlikte yaratalım.',
    'home.expertise.title': 'Sonuçları Tetikleyen Uzmanlık',
    'home.expertise.subtitle': 'Dijital Nişlerde Gerçek Uzmanlık',
    'home.expertise.description': 'Çeşitli endüstriler ve iş modelleri için özelleştirilmiş çözümler sunuyoruz. Ekibimiz her nişte derin, pratik deneyim getiriyor—süslü sözler yok, sadece kanıtlanmış sonuçlar.',
    'home.expertise.ecommerce.title': 'E-ticaret',
    'home.expertise.ecommerce.description': 'B2C ve B2B markalar için özel çevrimiçi mağazalar, ödeme entegrasyonu, ürün yönetimi ve dönüşüm optimizasyonu.',
    'home.expertise.saas.title': 'SaaS Platformları',
    'home.expertise.saas.description': 'Kullanıcı yönetimi, faturalandırma, analitik ve bulut entegrasyonu ile güçlü, ölçeklenebilir SaaS çözümleri.',
    'home.expertise.healthcare.title': 'Sağlık',
    'home.expertise.healthcare.description': 'HIPAA uyumlu uygulamalar, hasta portalleri, telemedicine ve güvenli sağlık veri yönetimi.',
    'home.expertise.edtech.title': 'EdTech',
    'home.expertise.edtech.description': 'Öğrenme yönetim sistemleri, e-öğrenme platformları ve etkileşimli eğitim araçları.',
    'home.expertise.fintech.title': 'FinTech',
    'home.expertise.fintech.description': 'Güvenli ödeme geçitleri, dijital cüzdanlar ve finansal analitik platformları.',
    'home.expertise.portfolio.title': 'Portfolyo ve Yaratıcı',
    'home.expertise.portfolio.description': 'Kişisel portfolyolar, yaratıcı ajans siteleri ve sanatçılar ve profesyoneller için dijital vitrinler.',
    'home.expertise.explore': 'Çözümlerimizi Keşfet',
    'home.services.title': 'Ana Hizmetlerimiz',
    'home.services.subtitle': 'Sonuçları Tetikleyen Dijital Çözümler',
    'home.services.description': 'Konseptten dağıtıma kadar, işletmenizi dönüştüren ve dijital ortamda büyümeyi hızlandıran kapsamlı dijital çözümler sunuyoruz.',
    'home.services.software.title': 'Yazılım Geliştirme',
    'home.services.software.description': 'En son teknolojilerle inşa edilmiş özel yazılım çözümleri. Web uygulamalarından masaüstü yazılımlarına kadar, ölçeklenebilir ve sürdürülebilir kod sunuyoruz.',
    'home.services.software.learnMore': 'Daha fazla bilgi',
    'home.services.web.title': 'Web Geliştirme',
    'home.services.web.description': 'Olağanüstü kullanıcı deneyimleri sunan ve iş büyümesini tetikleyen modern, duyarlı web siteleri ve web uygulamaları.',
    'home.services.web.learnMore': 'Daha fazla bilgi',
    'home.services.cloud.title': 'Bulut Çözümleri',
    'home.services.cloud.description': 'İş operasyonlarınızı ve ölçeklenebilirliğinizi optimize etmek için kapsamlı bulut altyapısı, migrasyon ve yönetim hizmetleri.',
    'home.services.cloud.learnMore': 'Daha fazla bilgi',
    'home.services.ai.title': 'AI ve Otomasyon',
    'home.services.ai.description': 'Süreçleri kolaylaştıran ve karar verme yeteneklerini geliştiren akıllı otomasyon çözümleri ve AI destekli uygulamalar.',
    'home.services.ai.learnMore': 'Daha fazla bilgi',
    'home.services.design.title': 'Grafik ve Tasarım',
    'home.services.design.description': 'Markanızı dijital ortamda öne çıkaran profesyonel grafik tasarım, marka oluşturma ve görsel kimlik hizmetleri.',
    'home.services.design.learnMore': 'Daha fazla bilgi',
    'home.services.marketing.title': 'Dijital Pazarlama',
    'home.services.marketing.description': 'Çevrimiçi erişiminizi ve ROI\'nizi maksimize etmek için stratejik dijital pazarlama kampanyaları, SEO optimizasyonu, sosyal medya yönetimi ve performans analitikleri.',
    'home.services.marketing.learnMore': 'Daha fazla bilgi',
    'home.services.exploreAll': 'Tüm Hizmetleri Keşfet',
    'home.webDesign.title': 'Web Tasarım Uzmanları',
    'home.webDesign.subtitle': 'Dijital Varlığınızı Güvenle Kurun',
    'home.webDesign.description': 'Upvista sadece harika görünmeyen değil, aynı zamanda ölçülebilir büyüme ve kalıcı etki sunan güçlü dijital deneyimler yaratır.',
    'home.webDesign.getStarted': 'Şimdi Başla',
    'home.webDesign.viewWork': 'Çalışmalarımızı Gör',
    'home.testimonials.title': 'Referanslar',
    'home.testimonials.subtitle': 'Kullanıcılarımızın söyledikleri',
    'home.testimonials.description': 'Müşterilerimizin bizim hakkımızda söylediklerini görün.',
    'home.testimonials.testimonial1': 'Ekibi bizim için güzel ve işlevsel bir web sitesi oluşturdu. Görünürlüğümüzü ve müşteri güvenini önemli ölçüde artırdı.',
    'home.testimonials.testimonial2': 'Dönüşüm yapan bir landing page\'e ihtiyacımız vardı — ve onu teslim ettiler. Temiz tasarım, hızlı yükleme ve mükemmel şekilde optimize edilmiş.',
    'home.testimonials.testimonial3': 'UI/UX tasarımı beklentilerimizi aştı. Sezgisel düzenler ve tutarlı marka oluşturma dijital ürünümüzü yükseltmeye yardımcı oldu.',
    'home.testimonials.testimonial4': 'Marka oluşturmadan web sitesi geliştirmeye kadar her şey yaratıcılık ve profesyonellikle ele alındı.',
    'home.testimonials.testimonial5': 'Landing page tasarımları dönüşümleri %35 artırmamıza yardımcı oldu — görsel olarak etkileyici ve mobil dostu.',
    'home.testimonials.testimonial6': 'Harika işbirliği ve net süreç. İhtiyaçlarımızı anladılar ve markamızı yansıtan özel bir çözüm inşa ettiler.',
    'home.testimonials.testimonial7': 'Profesyonel ekip ve zamanında teslimat. Marka oluşturmamız artık modern, cesur ve tüm platformlarda tutarlı.',
    'home.testimonials.testimonial8': 'Marka yenileme ve web sitemizi yeniden tasarlamada bize yardımcı oldular — sonuç öne çıkan şık ve modern bir deneyimdi.',
    'home.testimonials.testimonial9': 'UI/UX yenileme hizmet teklifimize netlik getirdi. Kullanıcılarımız artık daha uzun kalıyor ve daha fazla keşfediyor.',
    'home.whyChoose.title': 'Neden Bizi Seçmelisiniz',
    'home.whyChoose.description': 'Modern işletmeler için uygun fiyatlı, özel ve ölçeklenebilir dijital çözümler inşa ediyoruz — hızlıca.',
    'home.whyChoose.transparentPricing': 'Şeffaf fiyatlandırma',
    'home.whyChoose.fixedDeadlines': 'Sabit teslim tarihleri',
    'home.whyChoose.cleanDesign': 'Temiz tasarım',
    'home.whyChoose.freeConsultation': 'Ücretsiz danışmanlık',
    'home.whyChoose.longTermSupport': 'Uzun vadeli destek',
    'home.whyChoose.flexibleTech': 'Esnek teknoloji yığını',
    'home.palestine.title': 'Upvista Filistin ve halkının yanında duruyor',
    'home.join.title': 'Bize Katılın',
    // Footer translations
    'footer.description': 'İşletmeleri en son teknoloji dijital çözümlerle güçlendiriyoruz. Yenilikçi yazılım geliştirme, kapsamlı web hizmetleri ve büyüme ile başarıyı destekleyen dönüştürücü teknoloji ortaklıkları sunuyoruz.',
    'footer.paymentMethods': 'Ödeme Yöntemleri',
    'footer.payoneer': 'Payoneer',
    'footer.bankTransfer': 'Banka Havalesi',
    'footer.jazzCash': 'JazzCash',
    'footer.easyPaisa': 'EasyPaisa',
    'footer.company': 'Şirket',
    'footer.aboutUs': 'Hakkımızda',
    'footer.companyProfile': 'Şirket Profili',
    'footer.sustainability': 'Sürdürülebilirlik ve Değerler',
    'footer.investorRelations': 'Yatırımcı İlişkileri',
    'footer.partnerships': 'Ortaklıklar',
    'footer.leadership': 'Liderlik',
    'footer.contactUs': 'İletişim',
    'footer.careers': 'Kariyer',
    'footer.services': 'Hizmetler',
    'footer.allServices': 'Tüm Hizmetler',
    'footer.softwareDevelopment': 'Yazılım Geliştirme',
    'footer.webDevelopment': 'Web Geliştirme',
    'footer.aiAutomation': 'AI ve Otomasyon',
    'footer.cloudSolutions': 'Bulut Çözümleri',
    'footer.graphicsDesign': 'Grafik ve Tasarım',
    'footer.digitalMarketing': 'Dijital Pazarlama',
    'footer.consultService': 'Herhangi bir hizmet için danışın',
    'footer.communityResources': 'Topluluk ve Kaynaklar',
    'footer.aboutCommunity': 'Topluluk Hakkında',
    'footer.events': 'Etkinlikler',
    'footer.communityMembers': 'Topluluk Üyeleri',
    'footer.trainings': 'Eğitimler',
    'footer.research': 'Araştırma',
    'footer.projectCortex': 'Proje Cortex',
    'footer.blog': 'Blog',
    'footer.faq': 'SSS',
    'footer.whatsappUs': 'WhatsApp ile iletişim',
    'footer.linkedinUs': 'LinkedIn ile iletişim',
    'footer.messengerUs': 'Messenger ile iletişim',
    'footer.copyright': '© 2025 Upvista Digital. Tüm hakları saklıdır.',
    'footer.termsConditions': 'Şartlar ve Koşullar',
    'footer.privacyPolicy': 'Gizlilik Politikası',
    'footer.trademarkCopyright': 'Marka ve Telif Hakkı',
    'footer.dataProtection': 'Veri Koruması',
    'carousel.technologies': 'Kullandığımız Teknolojiler',
    // Sustainability Page
    'sustainability.badge': 'Sürdürülebilir Gelecek',
    'sustainability.title': 'Sürdürülebilirlik ve Değerler',
    'sustainability.subtitle': 'Çevresel sorumluluk, sosyal etki ve kurumsal kültürümüzü şekillendiren ve operasyonlarımızı yönlendiren etik iş uygulamalarına kapsamlı yaklaşımımız.',
    'sustainability.learnMore': 'Daha Fazla Bilgi',
    'sustainability.policy.title': 'Sürdürülebilirlik Politikası',
    'sustainability.policy.description': 'Çevresel yönetim, sosyal sorumluluk ve sürdürülebilir iş uygulamaları için kapsamlı çerçevemiz.',
    'sustainability.values.title': 'Kurumsal Değerler',
    'sustainability.values.description': 'Karar vermeyi yönlendiren ve organizasyonel kültürümüzü şekillendiren temel ilke ve değerler.',
    'sustainability.humanRights.title': 'İnsan Hakları Politikası',
    'sustainability.humanRights.description': 'Tüm operasyonlarımız ve ortaklıklarımızda insan haklarını koruma ve geliştirme taahhüdümüz.',
    'sustainability.humanCapital.title': 'İnsan Sermayesi Girişimleri',
    'sustainability.humanCapital.description': 'Çalışan gelişimi, refahı ve kapsayıcı işyeri oluşturmaya odaklanan programlar ve girişimler.',
    'sustainability.environmental.title': 'Çevre Felsefesi',
    'sustainability.environmental.description': 'Teknolojide çevresel etkiyi minimize etme ve sürdürülebilir uygulamaları teşvik etme yaklaşımımız.',
    'sustainability.social.title': 'Sosyal Felsefe',
    'sustainability.social.description': 'Teknoloji çözümleri aracılığıyla sosyal sorumluluk ve pozitif toplum etkisine olan bağlılığımız.',
    'sustainability.governance.title': 'Kurumsal Yönetişim',
    'sustainability.governance.description': 'Şeffaflık, hesap verebilirlik ve etik iş uygulamalarını sağlamak için yönetişim çerçevemiz.',
    'sustainability.research.title': 'Araştırma ve Geliştirme',
    'sustainability.research.description': 'Sürdürülebilir teknoloji çözümlerine ve sorumlu inovasyon uygulamalarına odaklanan inovasyon girişimleri.',
    // Sustainability Policy Page
    'policy.badge': 'Sürdürülebilirlik Çerçevesi',
    'policy.title': 'Sürdürülebilirlik Politikası',
    'policy.subtitle': 'Operasyonlarımızın her yönünü yönlendiren çevre yönetimi, sosyal sorumluluk ve sürdürülebilir iş uygulamaları için kapsamlı çerçevemiz.',
    'policy.environmental.title': 'Çevresel Taahhüt',
    'policy.environmental.content1': 'Upvista Digital\'de, sürdürülebilir uygulamalar yoluyla çevresel etkiyi minimize etme sorumluluğumuzu tanıyoruz. Çevre politikamız, tüm iş operasyonlarında enerji verimliliği, atık azaltma ve karbon ayak izi minimizasyonunu kapsar.',
    'policy.environmental.content2': 'Dijital karbon ayak izimizi azaltmak için bulut tabanlı çözümleri ve enerji verimli teknolojileri önceliklendiriyoruz. Geliştirme uygulamalarımız, kaynak tüketimini minimize eden temiz kod, optimize edilmiş performans ve sürdürülebilir mimari desenleri vurgular.',
    'policy.social.title': 'Sosyal Sorumluluk Çerçevesi',
    'policy.social.content1': 'Sosyal sorumluluk politikamız, teknoloji aracılığıyla pozitif etki yaratmaya odaklanır. Dijital kapsayıcılığa, teknoloji odaklı çözümlerle toplulukları desteklemeye ve hizmetlerimizin toplumun tamamına fayda sağlamasını sağlamaya inanıyoruz.',
    'policy.social.content2': 'Mentorluk programları, eğitim girişimleri ve topluluk geliştirme projelerinde aktif olarak yer alıyoruz. Taahhüdümüz, yerel teknoloji ekosistemlerini desteklemeye ve gerçek dünya zorluklarını ele alan inovasyonu teşvik etmeye kadar uzanır.',
    'policy.business.title': 'Sürdürülebilir İş Uygulamaları',
    'policy.business.content1': 'İş uygulamalarımız sürdürülebilirliği merkeze alarak tasarlanmıştır. Şeffaf raporlama, etik tedarik ve uzun vadeli çevresel ve sosyal etkileri dikkate alan sorumlu proje yönetimi uyguluyoruz.',
    'policy.business.content2': 'Tüm operasyonlarımızda sorumluluğu sağlayan yüksek kurumsal yönetişim standartlarını koruyoruz. Müşteri ilişkilerimiz güven, şeffaflık ve sürdürülebilir kalkınma hedeflerine ortak taahhüt üzerine kuruludur.',
    'policy.implementation.title': 'Uygulama ve İzleme',
    'policy.implementation.content1': 'Bu sürdürülebilirlik politikası tüm departmanlar ve projelerde aktif olarak uygulanmaktadır. İlerlememizi düzenli olarak izliyor, etkimizi ölçüyor ve sürdürülebilirlik taahhütlerimizi karşıladığımızdan ve aştığımızdan emin olmak için uygulamalarımızı sürekli iyileştiriyoruz.',
    'policy.implementation.content2': 'Ekibimiz sürdürülebilirlik uygulamaları konusunda düzenli eğitim alıyor ve sürdürülebilir teknoloji çözümlerinde inovasyonu teşvik ediyoruz. Sorumlu teknoloji geliştirme ve dağıtımında lider olmaya kararlıyız.',
    // Corporate Values Page
    'values.badge': 'Temel İlkeler',
    'values.title': 'Kurumsal Değerler',
    'values.subtitle': 'Karar vermemizi yönlendiren, örgütsel kültürümüzü şekillendiren ve dijital ortamda iş yapma şeklimizi tanımlayan temel ilke ve değerler.',
    'values.innovation.title': 'İnovasyon ve Mükemmellik',
    'values.innovation.content1': 'Teknolojide mümkün olanın sınırlarını zorlamaya kararlıyız. İnovasyon bizim için sadece bir moda kelime değil; yaptığımız her şeyin temelidir. Karmaşık problemleri çözmek ve müşterilerimize olağanüstü sonuçlar sunmak için sürekli yeni yollar arıyoruz.',
    'values.innovation.content2': 'Uygulamada mükemmellik bizim standardımızdır. Projenin ne kadar küçük olursa olsun, her projenin en iyi çabamızı hak ettiğine inanıyoruz. Kaliteye olan bu bağlılık, sürekli olarak süreçlerimizi, teknolojilerimizi ve hizmet sunumumuzu geliştirmemizi sağlıyor.',
    'values.integrity.title': 'Dürüstlük ve Şeffaflık',
    'values.integrity.content1': 'Dürüstlük tüm ilişkilerimizin temelini oluşturur. Tüm paydaşlara karşı dürüstlük, adalet ve saygı ile iş yürütürüz. İletişimdeki şeffaflığımız, müşterilerin, ortakların ve ekip üyelerinin her zaman nerede durduklarını bilmelerini sağlar.',
    'values.integrity.content2': 'Güvenin tutarlı eylemler ve dürüst iletişim yoluyla kazanıldığına inanıyoruz. Şeffaflık taahhüdümüz proje yönetimimiz, fiyatlandırmamız, zaman çizelgelerimiz ve yolda karşılaştığımız her türlü zorluğa kadar uzanır.',
    'values.collaboration.title': 'İşbirliği ve Ortaklık',
    'values.collaboration.content1': 'Her müşteri ilişkisini gerçek bir ortaklık olarak görüyoruz. İşbirliği başarımızın anahtarıdır ve müşterilerin benzersiz zorluklarını ve hedeflerini anlamak için onlarla yakın çalışırız. Ekip tabanlı yaklaşımımız çeşitli bakış açıları ve kapsamlı çözümler sağlar.',
    'values.collaboration.content2': 'İçeride, her ekip üyesinin katkısının değer gördüğü bir işbirliği kültürü besliyoruz. Karmaşık zorluklarla başa çıkmak için çeşitli yeteneklerin ve bakış açılarının bir araya geldiğinde en iyi çözümlerin ortaya çıktığına inanıyoruz.',
    'values.learning.title': 'Sürekli Öğrenme ve Büyüme',
    'values.learning.content1': 'Hızla gelişen teknoloji dünyasında sürekli öğrenme zorunludur. Ekibimizin profesyonel gelişimine büyük yatırım yapıyor, eğitim, sertifikasyon ve beceri geliştirme fırsatları sağlıyoruz.',
    'values.learning.content2': 'Deneyimi ve hatalardan öğrenmeyi teşvik ediyoruz. Kültürümüz bilgi paylaşımını, mentorluğu ve müşterilerimize fayda sağlayabilecek ve yeteneklerimizi geliştirebilecek yeni teknolojiler ve metodolojilerin peşinde koşmayı destekler.',
    'values.client.title': 'Müşteri Başarısı ve Değer Yaratma',
    'values.client.content1': 'Başarımız müşterilerimizin başarısıyla ölçülür. Sadece gereksinimleri karşılamakla kalmayıp beklentileri aşan ve gerçek iş değeri yaratan çözümler sunmaya kararlıyız. Her proje kalıcı pozitif etki yaratma hedefiyle ele alınır.',
    'values.client.content2': 'Müşteri ilişkilerine uzun vadeli bakış açısıyla yaklaşıyor, müşterilerimizin gelecekte iyi hizmet alacağı sürdürülebilir çözümlere odaklanıyoruz. Değer önerimiz teknik uzmanlığın ötesine geçerek stratejik düşünmeyi, iş zekasını ve sürekli desteği içerir.',
    // Human Capital Initiatives Page
    'humanCapital.badge': 'İnsan Odaklı Yaklaşım',
    'humanCapital.title': 'İnsan Sermayesi Girişimleri',
    'humanCapital.subtitle': 'Çalışan gelişimi, refah ve en büyük varlığımızı - insanlarımızı güçlendiren kapsayıcı bir işyeri ortamı yaratmaya odaklanan kapsamlı programlar ve girişimler.',
    'humanCapital.development.title': 'Profesyonel Gelişim Programları',
    'humanCapital.development.content1': 'Takım üyelerimizin sürekli büyüme ve gelişimine büyük yatırım yapıyoruz. Kapsamlı profesyonel gelişim programlarımız teknik eğitim, liderlik gelişimi ve yumuşak beceri geliştirmeyi içererek çalışanlarımızın alanlarında ön sıralarda kalmasını sağlıyor.',
    'humanCapital.development.content2': 'Gelişim girişimlerimiz mentorluk programları, çapraz fonksiyonel proje fırsatları, konferans katılımı, sertifikasyon desteği ve en son araç ve teknolojilere erişim içerir. İnsanlarımızın büyümesine yatırım yapmanın doğrudan müşterilerimiz ve şirket için daha iyi sonuçlara dönüştüğüne inanıyoruz.',
    'humanCapital.wellbeing.title': 'Çalışan Refahı ve İş-Yaşam Dengesi',
    'humanCapital.wellbeing.content1': 'Çalışan refahının hem kişisel mutluluk hem de profesyonel başarı için temel olduğunu kabul ediyoruz. Refah girişimlerimiz esnek çalışma düzenlemeleri, ruh sağlığı destek programları, wellness aktiviteleri ve kapsamlı sağlık yardımları içerir.',
    'humanCapital.wellbeing.content2': 'İş-yaşam dengesi politikalarımız uzaktan çalışma seçenekleri, esnek saatler, cömert tatil politikaları ve aile dostu uygulamalar içerir. Çalışanlarımızın iş dışında yaşamları olduğunu anlıyor ve profesyonel ve kişisel taahhütleri arasında sağlıklı bir denge kurmalarında onları destekliyoruz.',
    'humanCapital.diversity.title': 'Çeşitlilik, Eşitlik ve Kapsayıcılık',
    'humanCapital.diversity.content1': 'Çeşitliliğin kutlandığı ve herkesin değerli ve saygılı hissedildiği kapsayıcı bir işyeri ortamı yaratmaya kararlıyız. Çeşitlilik, eşitlik ve kapsayıcılık girişimlerimiz çeşitli yetenek havuzlarından işe alım, terfi için eşit fırsatlar sağlama ve aidiyet ortamı yaratmaya odaklanır.',
    'humanCapital.diversity.content2': 'Kapsayıcılık çabalarımız bilinçsiz önyargı eğitimi, çeşitli işe alım uygulamaları, çalışan kaynak grupları ve işyeri kültürümüzün düzenli değerlendirmelerini içerir. Çeşitli perspektiflerin daha iyi yenilik, problem çözme ve iş sonuçlarına yol açtığına inanıyoruz.',
    'humanCapital.knowledge.title': 'Bilgi Paylaşımı ve Yenilik Kültürü',
    'humanCapital.knowledge.content1': 'Bilgi paylaşımı ve sürekli öğrenme kültürünü teşvik ediyoruz. Yenilik girişimlerimiz düzenli tech talk\'lar, hackathon\'lar, yenilik meydan okumaları ve çalışanların şirket ve müşterilerimize faydalı olabilecek tutku projeleri peşinde koşma fırsatları içerir.',
    'humanCapital.knowledge.content2': 'Ekip içi işbirliğini teşvik ediyor ve çalışanların uzmanlıklarını paylaşması, başkalarından öğrenmesi ve organizasyonun kolektif bilgisine katkıda bulunması için platformlar sağlıyoruz. Bu paylaşım ve yenilik kültürü hem kişisel büyümeyi hem de şirket ilerlemesini teşvik eder.',
    'humanCapital.recognition.title': 'Tanınma ve Kariyer İlerlemesi',
    'humanCapital.recognition.content1': 'Mükemmelliği tanıma ve ödüllendirmeye inanıyoruz. Tanınma programlarımız performansa dayalı primler, başarı ödülleri ve olağanüstü katkıların kamuoyu tanınmasını içerir. Net kariyer ilerleme yolları sağlıyor ve çalışanları profesyonel hedeflerine ulaşmada destekliyoruz.',
    'humanCapital.recognition.content2': 'Kariyer gelişim çerçevemiz düzenli performans değerlendirmeleri, hedef belirleme, beceri değerlendirmeleri ve kişiselleştirilmiş gelişim planları içerir. Çalışanlarımızın uzun vadeli kariyer başarısına yatırım yapıyor, büyümelerinin doğrudan şirketin başarısına katkıda bulunduğunu biliyoruz.',
    'humanCapital.community.title': 'Topluluk Katılımı ve Sosyal Etki',
    'humanCapital.community.content1': 'Çalışanlarımızı topluluklarıyla etkileşime girmeye ve sosyal nedenlere katkıda bulunmaya teşvik ediyoruz. Topluluk katılım girişimlerimiz gönüllü zaman, kurumsal sosyal sorumluluk programları ve çalışanların kişisel hayırseverlik aktivitelerine destek içerir.',
    'humanCapital.community.content2': 'Topluluklarına katkıda bulunan katılımcı çalışanların daha tatmin olduğuna ve bu pozitif enerjiyi işlerine geri getirdiğine inanıyoruz. Sosyal etki programlarımız çalışanların beceri ve uzmanlıklarını kullanarak dünyada fark yaratmalarına olanak tanır.',
    // Human Rights Policy Page
    'humanRights.badge': 'İnsan Hakları Taahhüdü',
    'humanRights.title': 'İnsan Hakları Politikası',
    'humanRights.subtitle': 'Dünya çapında topluluklara hizmet eden tüm operasyonlarımız, ortaklıklarımız ve teknoloji çözümlerimizde insan haklarını koruma ve geliştirme konusundaki kararlı taahhüdümüz.',
    'humanRights.universal.title': 'Evrensel İnsan Hakları İlkeleri',
    'humanRights.universal.content1': 'Upvista Digital, İnsan Hakları Evrensel Beyannamesi\'ni ve ilgili tüm uluslararası insan hakları standartlarını desteklemeye kararlıdır. Teknolojinin hem koruma hem de potansiyel olarak ihlal etme gücüne sahip olduğunu kabul ediyoruz ve çözümlerimizin insan onuru ve özgürlüğünü ilerletmesini sağlamaya kararlıyız.',
    'humanRights.universal.content2': 'İnsan hakları politikamız, çalışan ilişkileri, müşteri ortaklıkları, tedarik zinciri yönetimi ve bireyleri ve toplulukları etkileyen teknoloji çözümlerinin geliştirilmesi ve dağıtılması dahil olmak üzere iş operasyonlarımızın tüm yönlerine uygulanır.',
    'humanRights.workplace.title': 'İşyeri İnsan Hakları',
    'humanRights.workplace.content1': 'Tüm çalışanların temel haklarına saygı duyan ve koruyan bir işyeri ortamı sürdürüyoruz. Bu, adil muamele görme hakkı, ayrımcılıktan özgürlük, güvenli çalışma koşulları ve misilleme korkusu olmadan endişeleri dile getirme hakkını içerir.',
    'humanRights.workplace.content2': 'Taahhüdümüz, kariyer ilerlemesi için eşit fırsatlar sağlama, adil ücret uygulamaları ve çeşitliliğin kutlandığı, tüm bireylerin arka planları, kimlikleri veya inançları ne olursa olsun gelişebileceği kapsayıcı bir ortam yaratmaya kadar uzanır.',
    'humanRights.privacy.title': 'Gizlilik ve Dijital Haklar',
    'humanRights.privacy.content1': 'Dijital çağımızda, gizlilik temel bir insan hakkıdır. Verilerini işlediğimiz tüm bireylerin gizlilik haklarını korumaya kararlıyız, bunlar ister çalışanlarımız, müşterilerimiz ister geliştirdiğimiz çözümlerin son kullanıcıları olsun.',
    'humanRights.privacy.content2': 'Teknoloji çözümlerimiz gizlilik-tasarım ilkeleriyle tasarlanmış olup, veri korumanın her sistemde baştan itibaren yerleşik olduğundan emin olur. Bireysel özerklik ve rızayı sayan güçlü güvenlik önlemleri ve şeffaf veri işleme uygulamaları uygularız.',
    'humanRights.community.title': 'Topluluk Etkisi ve Erişilebilirlik',
    'humanRights.community.content1': 'Teknolojinin herkes için erişilebilir olması ve eşitsizlik yaratmaması veya sürdürmemesi gerektiğine inanıyoruz. Çözümlerimiz erişilebilirlik göz önünde bulundurularak tasarlanmış olup, engelli bireylerin dijital dünyaya tam olarak katılabilmesini sağlar.',
    'humanRights.community.content2': 'Teknoloji erişimi yetersiz olan topluluklara teknoloji erişimi sağlayan girişimleri destekleyerek dijital uçurumu kapatmak için aktif olarak çalışıyoruz. İnsan hakları taahhüdümüz, teknoloji çözümlerimizin sosyal dışlama yerine sosyal kapsamayı teşvik etmesini sağlamayı içerir.',
    'humanRights.ethical.title': 'Etik Teknoloji Geliştirme',
    'humanRights.ethical.content1': 'İnsan haklarına saygı duyan ve insan gelişimini teşvik eden teknoloji geliştirmeye kararlıyız. Bu, gizliliği ihlal eden gözetleme sistemleri veya önyargı ve ayrımcılığı sürdüren AI sistemleri gibi insan haklarını ihlal etmek için kullanılabilecek teknolojilerin geliştirilmesinden kaçınmayı içerir.',
    'humanRights.ethical.content2': 'Etik çerçevemiz, çözümlerimizin potansiyel insan hakları etkilerini göz önünde bulundurduğumuzdan emin olarak tüm teknoloji geliştirme kararlarını yönlendirir. Düzenli insan hakları etki değerlendirmeleri yaparız ve teknolojimizin insanlığın en iyi çıkarlarına hizmet etmesini sağlamak için paydaşlarla sürekli diyalog sürdürürüz.',
    'humanRights.implementation.title': 'Uygulama ve Hesap Verebilirlik',
    'humanRights.implementation.content1': 'Bu insan hakları politikası sadece bir belge değil; günlük operasyonlarımızı yönlendiren yaşayan bir taahhüttür. Tüm çalışanlara insan hakları ilkeleri konusunda düzenli eğitim sağlarız ve herhangi bir endişeyi bildirmek ve ele almak için güçlü mekanizmalar sürdürürüz.',
    'humanRights.implementation.content2': 'Düzenli denetimler, paydaş katılımı ve insan hakları performansımız hakkında şeffaf raporlama yoluyla bu ilkelere karşı kendimizi sorumlu tutuyoruz. İnsan hakları taahhüdümüz, sorumlu bir teknoloji şirketi olarak kimliğimizin temelidir.',
    // Environmental Philosophy Page
    'environmental.badge': 'Yeşil Teknoloji Liderliği',
    'environmental.title': 'Çevre Felsefesi',
    'environmental.subtitle': 'Teknoloji geliştirme, operasyonlar ve müşteri çözümlerinde çevresel etkiyi en aza indirme ve sürdürülebilir uygulamaları teşvik etme konusundaki kapsamlı yaklaşımımız.',
    'environmental.development.title': 'Sürdürülebilir Teknoloji Geliştirme',
    'environmental.development.content1': 'Teknolojinin çevresel zarar kaynağı değil, çevresel iyilik için bir güç olması gerektiğine inanıyoruz. Geliştirme uygulamalarımız enerji verimliliği, kaynak optimizasyonu ve minimal çevresel etkiyi öncelikli tutar. Yaratığımız her çözüm, çekirdeğinde sürdürülebilirlik ilkeleriyle tasarlanmıştır.',
    'environmental.development.content2': 'Sürdürülebilir geliştirme yaklaşımımız yeşil kodlama uygulamaları, hesaplama gereksinimlerini azaltan optimize edilmiş algoritmalar ve karbon ayak izini en aza indiren bulut altyapısı seçeneklerini içerir. Çevresel etkiyi azaltmaya yardımcı olabilecek yeni teknolojileri sürekli araştırır ve uygularız.',
    'environmental.carbon.title': 'Karbon Ayak İzi Azaltma',
    'environmental.carbon.content1': 'Tüm operasyonlarda karbon ayak izimizi azaltmaya kararlıyız. Bu, ofislerimiz için yenilenebilir enerji kaynakları kullanmayı, enerji verimli donanım ve yazılım uygulamayı ve sürdürülebilirlik ile yenilenebilir enerjiyi öncelikli tutan bulut sağlayıcıları seçmeyi içerir.',
    'environmental.carbon.content2': 'Karbon azaltma girişimlerimiz, ulaşım emisyonlarını azaltan uzaktan çalışma politikaları, kağıt kullanımını en aza indiren dijital-first uygulamalar ve enerji verimli ofis tasarımlarını içerir. Karbon ayak izimizi düzenli olarak ölçer ve raporlarız ve azaltma için iddialı hedefler belirleriz.',
    'environmental.cloud.title': 'Yeşil Bulut Hesaplama ve Altyapı',
    'environmental.cloud.content1': 'Yenilenebilir enerji ile çalışan ve güçlü çevresel taahhütlere sahip sağlayıcılar tarafından işletilen bulut hesaplama çözümlerini öncelikli tutuyoruz. Altyapı seçimlerimiz karbon yoğunluğu, enerji verimliliği ve çevresel sertifikalar dahil sürdürülebilirlik metrikleri tarafından yönlendirilir.',
    'environmental.cloud.content2': 'Yeşil altyapı yaklaşımımız kaynak kullanımını en aza indiren sunucusuz hesaplama, talebe uyum sağlamak ve israfı azaltmak için otomatik ölçeklendirme ve çevresel kriterlere dayalı veri merkezi seçimini içerir. Müşterilerle bulut kullanımlarını hem performans hem de çevresel etki için optimize etmek üzere çalışırız.',
    'environmental.digital.title': 'Çevresel Zorluklar için Dijital Çözümler',
    'environmental.digital.content1': 'Müşterilerimizin çevresel etkilerini azaltmaya yardımcı olan teknoloji çözümleri geliştiriyoruz. Bu, enerji yönetim sistemleri, atık azaltma uygulamaları, tedarik zinciri optimizasyon araçları ve daha iyi çevresel karar vermeyi sağlayan sürdürülebilirlik raporlama platformlarını içerir.',
    'environmental.digital.content2': 'Çevresel teknoloji çözümlerimiz işletmelerin karbon emisyonlarını takip etmelerine, kaynak kullanımını optimize etmelerine ve sürdürülebilir uygulamaları hayata geçirmelerine yardımcı olur. Teknolojinin çevre koruma ve sürdürülebilirlik için güçlü bir araç olabileceğine inanıyoruz.',
    'environmental.waste.title': 'Atık Azaltma ve Döngüsel Ekonomi',
    'environmental.waste.content1': 'Operasyonlarımız ve teknoloji geliştirmemizde döngüsel ekonomi ilkelerini benimsiyoruz. Bu, donanım yaşam döngüsünü uzatmayı, yazılım yeniden kullanımı ve modülerliğini teşvik etmeyi ve değiştirilmek yerine kolayca güncellenebilen sistemler tasarlamayı içerir.',
    'environmental.waste.content2': 'Atık azaltma girişimlerimiz kağıtsız ofis uygulamaları, elektronik atık geri dönüşüm programları ve fiziksel kaynak tüketimini en aza indiren dijital-first süreçleri içerir. Geliştirdiğimiz çözümler aracılığıyla müşterilerimizin benzer uygulamaları benimsemelerini teşvik ediyoruz.',
    'environmental.education.title': 'Çevresel Eğitim ve Savunuculuk',
    'environmental.education.content1': 'Eğitim ve savunuculuğun çevresel değişimi yönlendirme gücüne inanıyoruz. Takım üyelerimiz çevresel en iyi uygulamalar konusunda düzenli eğitim alır ve bilgimizi müşteriler ve daha geniş teknoloji topluluğu ile paylaşırız.',
    'environmental.education.content2': 'Çevresel girişimlerde aktif olarak yer alırız, yeşil teknoloji araştırmasını destekleriz ve sürdürülebilir teknoloji geliştirmeyi teşvik eden politikaları savunuruz. Amacımız teknoloji endüstrisinde çevresel değişim için olumlu bir güç olmaktır.',
    'environmental.improvement.title': 'Sürekli İyileştirme ve İnovasyon',
    'environmental.improvement.content1': 'Çevresel sürdürülebilirlik bir hedef değil, sürekli bir yolculuktur. Çevresel etkimizi daha da azaltabilecek yeni teknolojiler ve uygulamaları sürekli araştırıyoruz. İnovasyon çabalarımız hem teknolojik olarak gelişmiş hem de çevresel olarak sorumlu çözümler geliştirmeye odaklanır.',
    'environmental.improvement.content2': 'Çevresel performansımızı düzenli olarak değerlendiririz, iyileştirme için iddialı hedefler belirleriz ve sürdürülebilirlik misyonumuzu ilerleten teknolojilere ve uygulamalara yatırım yaparız. Çevresel sorumluluğa olan bağlılığımız, gezegenimizi korurken müşterilerimize hizmet etmenin daha iyi yollarını sürekli aramaya bizi yönlendirir.',
    // Social Philosophy Page
    'social.badge': 'Sosyal Etki Misyonu',
    'social.title': 'Sosyal Felsefe',
    'social.subtitle': 'Bireyleri güçlendiren, toplulukları güçlendiren ve sosyal adaleti teşvik eden teknoloji çözümleri aracılığıyla sosyal sorumluluk ve olumlu topluluk etkisine olan bağlılığımız.',
    'social.good.title': 'Sosyal İyilik için Teknoloji',
    'social.good.content1': 'Teknolojinin olumlu sosyal değişim için bir güç olması gerektiğine inanıyoruz, bireyleri ve toplulukları zorlukları aşmaya ve tam potansiyellerine ulaşmaya güçlendiriyor. Sosyal felsefemiz, gerçek dünya sorunlarını ele almak ve toplumda anlamlı etki yaratmak için teknik uzmanlığımızı kullanmaya odaklanır.',
    'social.good.content2': 'Sosyal iyiliğe olan bağlılığımız ticari projelerimizin ötesine uzanarak pro-bono çalışmalar, topluluk ortaklıkları ve teknolojiyi sosyal eşitsizlikleri ele almak, eğitim ve sağlık hizmetlerine erişimi iyileştirmek ve topluluk direncini güçlendirmek için kullanan girişimleri içerir.',
    'social.inclusion.title': 'Dijital Kapsayıcılık ve Erişilebilirlik',
    'social.inclusion.content1': 'Teknolojinin faydalarının, arka planları, yetenekleri veya ekonomik durumları ne olursa olsun toplumun tüm üyeleri için erişilebilir olmasını sağlamaya kararlıyız. Dijital kapsayıcılık girişimlerimiz engelleri yıkmaya ve herkese hizmet eden teknoloji çözümleri yaratmaya odaklanır.',
    'social.inclusion.content2': 'Erişilebilirlik çabalarımız engelliler için çalışan çözümler geliştirmeyi, çok dilli arayüzler oluşturmayı ve düşük bant genişliği ortamları için tasarım yapmayı içerir. Kapsayıcı tasarımın herkes için daha iyi çözümlere yol açtığına ve dijital uçurumu kapatmaya yardımcı olduğuna inanıyoruz.',
    'social.community.title': 'Topluluk Katılımı ve Ortaklık',
    'social.community.content1': 'İhtiyaçlarını anlamak ve topluluk zorluklarını ele almak için uzmanlığımızı katkıda bulunmak amacıyla yerel topluluklar ve organizasyonlarla aktif olarak etkileşime gireriz. Topluluk ortaklıklarımız eğitim kurumları, kar amacı gütmeyen organizasyonlar ve yerel hükümet girişimlerini içerir.',
    'social.community.content2': 'Topluluk katılımımız öğrenciler için mentorluk programları, topluluk üyeleri için teknoloji atölyeleri ve teknik becerilerimizi yerel bilgi ve ihtiyaçlarla birleştiren işbirlikçi projeleri içerir. Güçlü toplulukların daha güçlü toplumlara yol açtığına inanıyoruz.',
    'social.education.title': 'Eğitim ve Bilgi Paylaşımı',
    'social.education.content1': 'Eğitimin dönüştürücü gücüne inanıyoruz ve daha geniş toplulukla bilgi ve uzmanlık paylaşmaya kararlıyız. Eğitim girişimlerimiz kodlama bootcamp\'leri, teknoloji atölyeleri ve diğerlerinin teknik beceriler geliştirmesine yardımcı olan mentorluk programlarını içerir.',
    'social.education.content2': 'Bilgi paylaşım çabalarımız açık kaynak katkıları, teknik blog yayınları, konferans sunumları ve işbirlikçi öğrenme fırsatlarını içerir. Bilgi paylaşımının tüm teknoloji topluluğunu güçlendirdiğine ve inovasyon için fırsatlar yarattığına inanıyoruz.',
    'social.ethical.title': 'Etik Teknoloji Geliştirme',
    'social.ethical.content1': 'İnsan onuruna saygı duyan, gizliliği koruyan ve sosyal adaleti teşvik eden teknoloji geliştirmeye kararlıyız. Etik geliştirme uygulamalarımız gizlilik-tasarım ilkeleri, önyargı testi ve çözümlerimizin sosyal etkilerinin değerlendirilmesini içerir.',
    'social.ethical.content2': 'Etik çerçevemiz tüm teknoloji geliştirme kararlarını yönlendirir, çözümlerimizin potansiyel sosyal etkilerini göz önünde bulundurduğumuzdan emin olur. Düzenli etik incelemeler yaparız ve teknolojimizin toplumun en iyi çıkarlarına hizmet etmesini sağlamak için paydaşlarla sürekli diyalog sürdürürüz.',
    'social.economic.title': 'Teknoloji ile Ekonomik Güçlendirme',
    'social.economic.content1': 'Teknolojinin ekonomik güçlendirme için güçlü bir araç olabileceğine, bireylere ve işletmelere yeni fırsatlara erişim ve ekonomik beklentilerini iyileştirme konusunda yardımcı olabileceğine inanıyoruz. Çözümlerimiz ekonomik değer yaratmak ve sürdürülebilir büyümeyi sağlamak için tasarlanmıştır.',
    'social.economic.content2': 'Ekonomik güçlendirme girişimlerimiz teknoloji çözümleriyle küçük işletmeleri desteklemeyi, yeni ekonomik fırsatları mümkün kılan platformlar yaratmayı ve bireylerin ve toplulukların dijital ekonomide yer almasına yardımcı olan araçlar geliştirmeyi içerir.',
    'social.global.title': 'Küresel Vatandaşlık ve Sorumluluk',
    'social.global.content1': 'Küresel bir teknoloji şirketi olarak, faaliyet gösterdiğimiz topluluklara ve daha geniş küresel topluma olumlu katkıda bulunma sorumluluğumuzu kabul ediyoruz. Küresel vatandaşlık çabalarımız uluslararası kalkınma projelerini desteklemeyi ve küresel teknoloji standartlarına katkıda bulunmayı içerir.',
    'social.global.content2': 'Teknoloji şirketlerinin kaynaklarını ve uzmanlıklarını küresel zorlukları ele almak için kullanma konusunda özel bir sorumlulukları olduğuna inanıyoruz. Küresel vatandaşlık girişimlerimiz gelişmekte olan ülkelerde eğitimi desteklemeyi, açık kaynak projelere katkıda bulunmayı ve uluslararası teknoloji standartları geliştirmeye katılmayı içerir.',
    // Corporate Governance Page
    'governance.badge': 'Etik Liderlik',
    'governance.title': 'Kurumsal Yönetişim',
    'governance.subtitle': 'Paydaşlarla güven inşa eden ve sürdürülebilir uzun vadeli başarıyı teşvik eden şeffaflık, hesap verebilirlik ve etik iş uygulamalarını sağlayan yönetişim çerçevemiz.',
    'governance.board.title': 'Yönetim Kurulu Liderliği ve Denetimi',
    'governance.board.content1': 'Kurumsal yönetişimimiz güçlü yönetim kurulu liderliği ve bağımsız denetim temelinde inşa edilmiştir. Yönetim kurulumuz stratejik rehberlik sağlar, hesap verebilirliği garanti eder ve yönetişim politikalarımızın ve prosedürlerimizin uygulanmasını denetler.',
    'governance.board.content2': 'Yönetim kurulu, denetim, tazminat ve yönetişim konuları için bağımsız komiteleri sürdürür ve tüm büyük kararların uygun denetim ve incelemeye tabi olmasını sağlar. Yönetişim yapımız şeffaflığı, hesap verebilirliği ve paydaş çıkarlarıyla uyumu teşvik eder.',
    'governance.transparency.title': 'Şeffaflık ve Açıklama',
    'governance.transparency.content1': 'Tüm iş operasyonlarımız ve iletişimlerimizde en yüksek şeffaflık standartlarını sürdürüyoruz. Açıklama uygulamalarımız, paydaşların iyi bilgilendirilmesini sağlamak için finansal performans, iş operasyonları ve temel yönetişim konuları hakkında düzenli raporlamayı içerir.',
    'governance.transparency.content2': 'Şeffaflık taahhütlerimiz, proje ilerlemesi, zorluklar ve sonuçlar hakkında net iletişim sağladığımız müşteri ilişkilerimize kadar uzanır. Şeffaf iletişimin güven inşa ettiğine ve dahil olan tüm taraflar için daha iyi karar vermeyi mümkün kıldığına inanıyoruz.',
    'governance.risk.title': 'Risk Yönetimi ve Uyumluluk',
    'governance.risk.content1': 'İş operasyonlarımızın tüm yönlerinde riskleri tanımlayan, değerlendiren ve azaltan kapsamlı risk yönetimi sistemleri sürdürüyoruz. Risk yönetimi çerçevemiz düzenli değerlendirmeler, acil durum planlaması ve temel risk göstergelerinin sürekli izlenmesini içerir.',
    'governance.risk.content2': 'Uyumluluk programımız tüm geçerli yasalara, düzenlemelere ve endüstri standartlarına uyumu sağlar. Güçlü iç kontrolleri sürdürür ve faaliyet gösterdiğimiz tüm yargı bölgelerinde yasal ve düzenleyici gerekliliklere uyumu sağlamak için düzenli denetimler yaparız.',
    'governance.ethics.title': 'Etik İş Uygulamaları',
    'governance.ethics.content1': 'Davranış kurallarımız ve etik politikalarımız rehberliğinde en yüksek etik standartlarla iş yapmaya kararlıyız. Etik çerçevemiz müşteri ilişkilerinden çalışan davranışına ve tedarikçi ortaklıklarına kadar iş operasyonlarının tüm yönlerini kapsar.',
    'governance.ethics.content2': 'Etik uygulamalarımız adil rekabet, sorumlu tedarik, yolsuzlukla mücadele önlemleri ve gizli bilgilerin korunmasını içerir. Tüm çalışanlara düzenli etik eğitimi sağlar ve misilleme korkusu olmadan etik endişeleri bildirmek için kanalları sürdürürüz.',
    'governance.stakeholder.title': 'Paydaş Katılımı ve İletişim',
    'governance.stakeholder.content1': 'Müşteriler, çalışanlar, yatırımcılar, ortaklar ve faaliyet gösterdiğimiz topluluklar dahil olmak üzere tüm paydaşlarımızla aktif katılım sürdürüyoruz. Paydaş katılımımız düzenli iletişim, geri bildirim mekanizmaları ve işbirlikçi karar verme süreçlerini içerir.',
    'governance.stakeholder.content2': 'İletişim uygulamalarımız paydaşların iş performansımız, stratejik yönümüz ve temel gelişmeler hakkında bilgilendirilmesini sağlar. Paydaş girdilerine değer veriyor ve paydaş çıkarlarıyla uyumu sağlamak için karar verme süreçlerimize geri bildirimi dahil ediyoruz.',
    'governance.performance.title': 'Performans Yönetimi ve Hesap Verebilirlik',
    'governance.performance.content1': 'Organizasyonun tüm seviyelerinde hesap verebilirliği sağlayan güçlü performans yönetimi sistemleri sürdürüyoruz. Performans çerçevemiz net hedefler, düzenli incelemeler ve hem hedef başarımı hem de hedef başarısızlığı için sonuçları içerir.',
    'governance.performance.content2': 'Hesap verebilirlik önlemlerimiz performansa bağlı yönetici tazminatı, düzenli yönetim kurulu değerlendirmeleri ve yönetim etkinliğinin bağımsız değerlendirmelerini içerir. Güçlü hesap verebilirlik sistemlerinin daha iyi performansı teşvik ettiğine ve tüm paydaşlar için değer yarattığına inanıyoruz.',
    'governance.improvement.title': 'Sürekli İyileştirme ve İnovasyon',
    'governance.improvement.content1': 'Yönetişim uygulamalarımızı iyileştirmek ve değişen iş ortamları ve paydaş beklentilerine uyum sağlamak için sürekli çalışıyoruz. Yönetişim çerçevemiz etkili ve ilgili kalmasını sağlamak için düzenli olarak gözden geçirilir ve güncellenir.',
    'governance.improvement.content2': 'Yönetişim uygulamalarımızı endüstri en iyi uygulamalarıyla karşılaştırır ve sürekli iyileştirmeyi teşvik etmek için paydaşlardan geri bildirimi dahil ederiz. Yönetişim mükemmelliğine olan bağlılığımız, sürdürülebilir iş başarısını teşvik ederken tüm paydaşlarımızın güvenini ve inancını sürdürmemizi sağlar.',
    // Research & Development Page
    'research.badge': 'İnovasyon Merkezi',
    'research.title': 'Araştırma ve Geliştirme',
    'research.subtitle': 'Dijital dönüşümün geleceğini şekillendiren son teknoloji araştırma, inovasyon girişimleri ve yeni nesil çözümlerin geliştirilmesi yoluyla teknolojiyi ilerletme taahhüdümüz.',
    'research.strategy.title': 'İnovasyon Stratejisi ve Vizyonu',
    'research.strategy.content1': 'Araştırma ve geliştirme stratejimiz, sadece bugünün ihtiyaçlarını karşılamakla kalmayıp yarının zorluklarını öngören ve ele alan teknoloji çözümleri yaratma vizyonuyla yönlendirilir. Teknolojik inovasyonun ön saflarında konumumuzu korumak için Ar-Ge\'ye önemli ölçüde yatırım yapıyoruz.',
    'research.strategy.content2': 'İnovasyon yaklaşımımız temel araştırmayı uygulamalı geliştirmeyle birleştirerek, keşiflerimizin müşterilerimiz ve toplum için faydalı pratik çözümlere dönüşmesini sağlar. Endüstrileri dönüştürme ve yeni fırsatlar yaratma potansiyeline sahip yeni teknolojilere odaklanıyoruz.',
    'research.emerging.title': 'Yeni Teknoloji Araştırması',
    'research.emerging.content1': 'Yapay zeka, makine öğrenmesi, blok zincir, kuantum hesaplama ve gelişmiş analitik dahil olmak üzere yeni teknolojileri aktif olarak araştırıyoruz. Araştırma ekiplerimiz yeni algoritmalar geliştirme, mevcut teknolojileri iyileştirme ve yenilikçi uygulamalar yaratma üzerinde çalışıyor.',
    'research.emerging.content2': 'Araştırma girişimlerimiz kenar hesaplamanın potansiyelini keşfetme, sürdürülebilir teknoloji çözümlerini araştırma ve siber güvenlik ve veri gizliliği için yeni yaklaşımlar geliştirme içerir. Akademik kurumlar ve araştırma organizasyonlarıyla işbirliği yaparak teknolojiyi ilerletiyoruz.',
    'research.development.title': 'Ürün Geliştirme ve Prototipleme',
    'research.development.content1': 'Ürün geliştirme sürecimiz yenilikçi çözümler yaratmak için titiz araştırmayı çevik geliştirme metodolojileriyle birleştirir. Konseptleri doğrulamak ve tam ölçekli uygulamadan önce ürünleri geliştirmek için hızlı prototipleme ve yinelemeli geliştirme kullanıyoruz.',
    'research.development.content2': 'Geliştirme ekiplerimiz ürünlerimizin gerçek dünya ihtiyaçlarını karşıladığından ve somut değer sağladığından emin olmak için müşteriler ve son kullanıcılarla yakın çalışır. Hem teknik olarak gelişmiş hem de kullanıcı dostu çözümler yaratmak için kullanıcı merkezli tasarım ilkeleri ve sürekli geri bildirim döngüleri kullanıyoruz.',
    'research.sustainable.title': 'Sürdürülebilir Teknoloji Geliştirme',
    'research.sustainable.content1': 'Ar-Ge çabalarımızın önemli bir kısmı, verimliliği ve performansı maksimize ederken çevresel etkiyi minimize eden sürdürülebilir teknoloji çözümleri geliştirmeye odaklanır. Yeşil hesaplama teknikleri, enerji verimli algoritmalar ve sürdürülebilir yazılım mimarileri araştırıyoruz.',
    'research.sustainable.content2': 'Sürdürülebilir geliştirme girişimlerimiz karbon nötr uygulamalar yaratma, bulut kaynak kullanımını optimize etme ve diğer organizasyonların çevresel ayak izlerini azaltmalarına yardımcı olan teknolojiler geliştirme içerir. Teknolojinin çevresel iyilik için bir güç olması gerektiğine inanıyoruz.',
    'research.collaboration.title': 'İşbirliği ve Ortaklıklar',
    'research.collaboration.content1': 'Araştırmayı ilerletmek ve bilgi paylaşmak için üniversiteler, araştırma kurumları, teknoloji şirketleri ve endüstri organizasyonlarıyla aktif olarak işbirliği yapıyoruz. Ortaklıklarımız bize son teknoloji araştırmaya erişim, kaynak paylaşımı ve inovasyonu hızlandırma imkanı sağlar.',
    'research.collaboration.content2': 'İşbirlikçi yaklaşımımız ortak araştırma projeleri, teknoloji transfer programları ve endüstri konsorsiyumlarına katılım içerir. En iyi inovasyonların farklı uzmanlık alanlarını birleştiren çeşitli perspektifler ve işbirlikçi çabalardan geldiğine inanıyoruz.',
    'research.ip.title': 'Fikri Mülkiyet ve İnovasyon Koruma',
    'research.ip.content1': 'Patentler, ticari markalar ve ticari sırlar dahil olmak üzere stratejik fikri mülkiyet yönetimi yoluyla inovasyonlarımızı koruyoruz. IP stratejimiz inovasyonlarımızın korunmasını uygun yerlerde açık işbirliği ve bilgi paylaşımıyla dengeleyerek.',
    'research.ip.content2': 'Ayrıca açık kaynak projelere katkıda bulunuyor ve daha geniş teknoloji topluluğuna fayda sağlayabilecek araştırma bulgularını paylaşıyoruz. IP yönetimimize yaklaşımımız, rekabet avantajlarımızı ve inovasyona yatırımımızı korurken teknolojiyi ilerletme taahhüdümüzü yansıtır.',
    'research.roadmap.title': 'Gelecek Teknoloji Yol Haritası',
    'research.roadmap.content1': 'Araştırma ve geliştirme yol haritamız yapay zeka, kuantum hesaplama, kenar hesaplama ve yeni nesil ağ teknolojileri dahil olmak üzere önümüzdeki yıllarda kritik olacak teknolojilere odaklanır. Hem artan iyileştirmeler hem de çığır açan inovasyonlara yatırım yapıyoruz.',
    'research.roadmap.content2': 'Ar-Ge yatırımlarımızın gelecekteki fırsatlarla ve müşteri ihtiyaçlarıyla uyumlu olduğundan emin olmak için teknoloji trendlerini ve pazar gelişmelerini sürekli izliyoruz. Esnek araştırma yaklaşımımız yeni fırsatlara hızla uyum sağlamamızı ve umut verici yeni teknolojiler ortaya çıktığında çabalarımızı yönlendirmemizi sağlar.',
    'research.impact.title': 'Etki ve Başarıyı Ölçme',
    'research.impact.content1': 'Ar-Ge çabalarımızın başarısını hem nicel metrikler hem de nitel değerlendirmeler yoluyla ölçüyoruz. Değerlendirme çerçevemiz inovasyon çıktısı, teknoloji benimsenmesi, müşteri memnuniyeti ve daha geniş teknoloji ekosistemine katkı içerir.',
    'research.impact.content2': 'Ar-Ge\'de sürekli iyileştirmeye olan bağlılığımız, endüstrinin ilerlemesine katkıda bulunurken teknoloji lideri olarak konumumuzu korumamızı sağlar. Araştırma önceliklerimizi düzenli olarak gözden geçiriyor ve etkiyi ve değer yaratmayı maksimize etmek için yatırımlarımızı ayarlıyoruz.'
  },
  UR: {
    'nav.home': 'ہوم',
    'nav.company': 'کمپنی',
    'nav.services': 'خدمات',
    'nav.community': 'کمیونٹی',
    'nav.researches': 'تحقیقات',
    'nav.insights': 'نظریات',
    'nav.careers': 'کیریئرز کی تلاش',
    'nav.contact': 'کاروبار کے بارے میں بات کریں',
    'hero.title': 'ڈیجیٹل حل جو ترقی کو فروغ دیتے ہیں',
    'hero.subtitle': 'جدید ترین ٹیکنالوجی اور اختراعی حل کے ساتھ اپنے کاروبار کو تبدیل کریں۔',
    'hero.cta': 'شروع کریں',
    'hero.register': 'رجسٹر کریں',
    'hero.badge': 'Upvista Digital - پاکستان کی معروف سافٹ ویئر ایجنسی',
    'hero.service1': 'ویب ڈیولپمنٹ',
    'hero.service2': 'سافٹ ویئر انجینئرنگ',
    'hero.service3': 'گرافکس اور ڈیزائن',
    'hero.service4': 'AI آٹومیشن',
    'hero.stats1': 'مکمل شدہ پروجیکٹس',
    'hero.stats2': 'کلائنٹ ریٹنگ',
    'hero.stats3': 'سپورٹ',
    // Company dropdown
    'dropdown.company.about': 'ہمارے بارے میں',
    'dropdown.company.profile': 'کمپنی کا پروفائل',
    'dropdown.company.sustainability': 'پائیداری اور اقدار',
    'dropdown.company.investors': 'سرمایہ کار تعلقات',
    'dropdown.company.partners': 'شراکت داری',
    'dropdown.company.leadership': 'قیادت',
    'dropdown.company.contact': 'ہم سے رابطہ کریں',
    // Company Profile Page
    'companyProfile.badge': 'کمپنی کی معلومات',
    'companyProfile.title': 'کمپنی کا پروفائل',
    'companyProfile.subtitle': 'Upvista Digital کی کارپوریٹ بنیاد، قیادت کی ساخت اور کاروباری آپریشنز کا جامع جائزہ۔',
    'companyProfile.tradeName': 'تجارتی نام',
    'companyProfile.businessDescription': 'کاروبار کی تفصیل',
    'companyProfile.ceo': 'چیف ایگزیکٹو آفیسر',
    'companyProfile.founded': 'قیام کی تاریخ',
    'companyProfile.fiscalYearEnd': 'مالی سال کا اختتام',
    'companyProfile.headOffice': 'ہیڈ آفس',
    'companyProfile.legalStatus': 'قانونی حیثیت',
    'companyProfile.serviceAreas': 'سروس کے علاقے',
    'companyProfile.industryFocus': 'انڈسٹری فوکس',
    'companyProfile.revenueModel': 'آمدنی کا ماڈل',
    'companyProfile.clientPortfolio': 'کلائنٹ پورٹ فولیو',
    'companyProfile.qualityStandards': 'معیار کے معیارات',
    'companyProfile.businessDesc1': 'ڈیجیٹل حل کی ترقی، فروخت اور آپریشن۔',
    'companyProfile.businessDesc2': 'ویب ڈیولپمنٹ اور سافٹ ویئر انجینئرنگ سروسز کی ترقی، فروخت اور ڈیلیوری۔',
    'companyProfile.ceoName': 'حمزہ حفیظ',
    'companyProfile.foundedDate': '1 جولائی 2025',
    'companyProfile.fiscalEnd': '30 جون',
    'companyProfile.headOfficeLocation': 'لاہور، پاکستان',
    'companyProfile.legalStatusType': 'واحد ملکیت',
    'companyProfile.serviceAreasGlobal': 'عالمی',
    'companyProfile.industryTypes': 'ٹیکنالوجی سروسز، ڈیجیٹل حل، سافٹ ویئر ڈیولپمنٹ',
    'companyProfile.revenueType': 'سروس بیسڈ',
    'companyProfile.clientCount': 'مختلف صنعتوں میں 50+ کامیاب پروجیکٹس',
    'companyProfile.qualityRating': '4.9/5 کلائنٹ اطمینان کی درجہ بندی',
    // Services dropdown
    'dropdown.services.about': 'ہماری خدمات کے بارے میں',
    'dropdown.services.software': 'سافٹ ویئر ڈیولپمنٹ',
    'dropdown.services.web': 'ویب ڈیولپمنٹ',
    'dropdown.services.ai': 'AI اور آٹومیشن',
    'dropdown.services.cloud': 'کلاؤڈ',
    'dropdown.services.design': 'گرافکس اور ڈیزائن',
    'dropdown.services.marketing': 'ڈیجیٹل مارکیٹنگ',
    // Community dropdown
    'dropdown.community.about': 'کمیونٹی کے بارے میں',
    'dropdown.community.events': 'تقریبات',
    'dropdown.community.members': 'کمیونٹی کے اراکین',
    'dropdown.community.achievements': 'کامیابیاں',
    'dropdown.community.trainings': 'ٹریننگ',
    'dropdown.community.join': 'کمیونٹی میں شامل ہوں',
    // Researches dropdown
    'dropdown.researches.about': 'Upvista تحقیق کے بارے میں',
    'dropdown.researches.cortex': 'پروجیکٹ کورٹیکس',
    'dropdown.researches.agi': 'AGI پر تحقیق',
    // Insights dropdown
    'dropdown.insights.caseStudies': 'کیس اسٹڈیز',
    'dropdown.insights.news': 'خبریں',
    'dropdown.insights.blogs': 'بلاگز',
    'dropdown.insights.whitepapers': 'وائٹ پیپرز',
    'dropdown.insights.events': 'تقریبات',
    // Homepage sections - Urdu
    'home.transform.title': 'ڈیجیٹل موجودگی کو تبدیل کرنا',
    'home.transform.subtitle': 'ایسے تجربات ڈیزائن کرنا جو عمل کو متاثر کریں',
    'home.transform.description': 'خیال سے عمل تک، ہم صرف ویب سائٹس نہیں بناتے — ہم ایسے سفر بناتے ہیں جو لوگوں سے جڑتے ہیں، اعتماد بناتے ہیں، اور زائرین کو وفادار کسٹمرز میں تبدیل کرتے ہیں۔',
    'home.transform.exploreServices': 'ہماری خدمات دریافت کریں',
    'home.transform.contactUs': 'ہم سے رابطہ کریں',
    'home.partnership.title': 'آپ کی ڈیجیٹل ترقی کے لیے شراکت داری',
    'home.partnership.description': 'ہم صرف منصوبے نہیں دیتے—ہم طویل مدتی شراکت داریاں بناتے ہیں جو آپ کے کاروبار کو ڈیجیٹل فرسٹ دنیا میں کامیاب ہونے میں مدد کرتی ہیں۔ ہمارا طریقہ کار تعاون پر مبنی، شفاف اور آپ کی کامیابی پر مرکوز ہے۔',
    'home.partnership.explore': 'شراکت داریاں دریافت کریں',
    'home.partnership.premium': 'پریمیم تعاون',
    'home.partnership.subtitle': 'آئیے ایسے ڈیجیٹل حل تیار کریں جو عمدگی کے لیے نئے معیارات قائم کریں۔',
    'home.expertise.title': 'مہارت جو نتائج پیدا کرتی ہے',
    'home.expertise.subtitle': 'ڈیجیٹل شعبوں میں حقیقی مہارت',
    'home.expertise.description': 'ہم مختلف صنعتوں اور کاروباری ماڈلز کے لیے حسب ضرورت حل فراہم کرتے ہیں۔ ہماری ٹیم ہر شعبے میں گہرا، عملی تجربہ لاتی ہے—بغیر کسی اضافی بات کے، صرف ثابت شدہ نتائج۔',
    'home.expertise.ecommerce.title': 'ای کامرس',
    'home.expertise.ecommerce.description': 'B2C اور B2B برانڈز کے لیے حسب ضرورت آن لائن اسٹورز، ادائیگی کی انٹیگریشن، مصنوعات کا انتظام اور تبدیلی کی بہتری۔',
    'home.expertise.saas.title': 'SaaS پلیٹ فارمز',
    'home.expertise.saas.description': 'صارف انتظام، بلنگ، تجزیات اور کلاؤڈ انٹیگریشن کے ساتھ مضبوط، قابل توسیع SaaS حل۔',
    'home.expertise.healthcare.title': 'ہیلتھ کیئر',
    'home.expertise.healthcare.description': 'HIPAA مطابق ایپس، مریض پورٹلز، ٹیلی میڈیسن اور محفوظ صحت ڈیٹا انتظام۔',
    'home.expertise.edtech.title': 'ایڈ ٹیک',
    'home.expertise.edtech.description': 'تعلیمی انتظام کے نظام، ای لرننگ پلیٹ فارمز اور تعاملی تعلیمی اوزار۔',
    'home.expertise.fintech.title': 'فن ٹیک',
    'home.expertise.fintech.description': 'محفوظ ادائیگی کے گیٹ ویز، ڈیجیٹل والٹس اور مالی تجزیاتی پلیٹ فارمز۔',
    'home.expertise.portfolio.title': 'پورٹ فولیو اور تخلیقی',
    'home.expertise.portfolio.description': 'ذاتی پورٹ فولیوز، تخلیقی ایجنسی سائٹس اور فنکاروں اور پیشہ ور افراد کے لیے ڈیجیٹل شوکیسز۔',
    'home.expertise.explore': 'ہمارے حل دریافت کریں',
    'home.services.title': 'ہماری بنیادی خدمات',
    'home.services.subtitle': 'ڈیجیٹل حل جو نتائج پیدا کرتے ہیں',
    'home.services.description': 'تصور سے تعیناتی تک، ہم جامع ڈیجیٹل حل فراہم کرتے ہیں جو آپ کے کاروبار کو تبدیل کرتے ہیں اور ڈیجیٹل منظر نامے میں ترقی کو تیز کرتے ہیں۔',
    'home.services.software.title': 'سافٹ ویئر ڈیولپمنٹ',
    'home.services.software.description': 'جدید ترین ٹیکنالوجیز سے بنائے گئے حسب ضرورت سافٹ ویئر حل۔ ویب ایپلی کیشنز سے ڈیسک ٹاپ سافٹ ویئر تک، ہم قابل توسیع اور قابل برقرار کوڈ فراہم کرتے ہیں۔',
    'home.services.software.learnMore': 'مزید جانیں',
    'home.services.web.title': 'ویب ڈیولپمنٹ',
    'home.services.web.description': 'جدید، ریسپانسیو ویب سائٹس اور ویب ایپلی کیشنز جو غیر معمولی صارف تجربات فراہم کرتی ہیں اور کاروباری ترقی کو تیز کرتی ہیں۔',
    'home.services.web.learnMore': 'مزید جانیں',
    'home.services.cloud.title': 'کلاؤڈ حل',
    'home.services.cloud.description': 'آپ کے کاروباری آپریشنز اور توسیع پذیری کو بہتر بنانے کے لیے جامع کلاؤڈ انفراسٹرکچر، مائیگریشن اور انتظامی خدمات۔',
    'home.services.cloud.learnMore': 'مزید جانیں',
    'home.services.ai.title': 'AI اور آٹومیشن',
    'home.services.ai.description': 'ذہین آٹومیشن حل اور AI سے چلنے والی ایپلی کیشنز جو عملوں کو آسان بناتی ہیں اور فیصلہ سازی کی صلاحیتوں کو بہتر بناتی ہیں۔',
    'home.services.ai.learnMore': 'مزید جانیں',
    'home.services.design.title': 'گرافکس اور ڈیزائن',
    'home.services.design.description': 'پیشہ ورانہ گرافک ڈیزائن، برانڈنگ اور بصری شناخت کی خدمات جو آپ کے برانڈ کو ڈیجیٹل منظر نامے میں نمایاں بناتی ہیں۔',
    'home.services.design.learnMore': 'مزید جانیں',
    'home.services.marketing.title': 'ڈیجیٹل مارکیٹنگ',
    'home.services.marketing.description': 'آپ کی آن لائن رسائی اور ROI کو زیادہ سے زیادہ بنانے کے لیے اسٹریٹجک ڈیجیٹل مارکیٹنگ مہمات، SEO بہتری، سوشل میڈیا انتظام اور کارکردگی کی تجزیات۔',
    'home.services.marketing.learnMore': 'مزید جانیں',
    'home.services.exploreAll': 'تمام خدمات دریافت کریں',
    'home.webDesign.title': 'ویب ڈیزائن کے ماہرین',
    'home.webDesign.subtitle': 'اعتماد کے ساتھ اپنی ڈیجیٹل موجودگی قائم کریں',
    'home.webDesign.description': 'Upvista طاقتور ڈیجیٹل تجربات بناتی ہے جو نہ صرف بہترین نظر آتے ہیں، بلکہ قابل پیمائش ترقی اور دیرپا اثرات فراہم کرتے ہیں۔',
    'home.webDesign.getStarted': 'ابھی شروع کریں',
    'home.webDesign.viewWork': 'ہمارا کام دیکھیں',
    'home.testimonials.title': 'شہادتیں',
    'home.testimonials.subtitle': 'ہمارے صارفین کیا کہتے ہیں',
    'home.testimonials.description': 'دیکھیں کہ ہمارے کسٹمرز ہمارے بارے میں کیا کہتے ہیں۔',
    'home.testimonials.testimonial1': 'ان کی ٹیم نے ہمارے لیے ایک خوبصورت اور فعال ویب سائٹ بنائی۔ اس نے ہماری نظروں میں آنا اور کسٹمر اعتماد کو ڈرامائی طور پر بڑھایا۔',
    'home.testimonials.testimonial2': 'ہمیں ایک لینڈنگ پیج کی ضرورت تھی جو تبدیل کرے — اور انہوں نے فراہم کیا۔ صاف ڈیزائن، تیز لوڈنگ اور بالکل بہتر۔',
    'home.testimonials.testimonial3': 'UI/UX ڈیزائن نے ہماری توقعات سے بڑھ کر کام کیا۔ فطری لے آؤٹ اور مستقل برانڈنگ نے ہمارے ڈیجیٹل پروڈکٹ کو بہتر بنانے میں مدد کی۔',
    'home.testimonials.testimonial4': 'برانڈنگ سے ویب سائٹ ڈیولپمنٹ تک، سب کچھ تخلیقی اور پیشہ ورانہ طریقے سے نمٹایا گیا۔',
    'home.testimonials.testimonial5': 'ان کا لینڈنگ پیج ڈیزائن ہمیں تبدیلیوں میں 35% اضافے میں مدد کیا — بصری طور پر حیرت انگیز اور موبائل فرینڈلی۔',
    'home.testimonials.testimonial6': 'بہترین تعاون اور واضح عمل۔ انہوں نے ہماری ضروریات کو سمجھا اور ہمارے برانڈ کو ظاہر کرنے والا حسب ضرورت حل بنایا۔',
    'home.testimonials.testimonial7': 'پیشہ ور ٹیم اور وقت پر ڈیلیوری۔ ہماری برانڈنگ اب جدید، دلیر اور تمام پلیٹ فارمز پر مستقل ہے۔',
    'home.testimonials.testimonial8': 'انہوں نے ہماری برانڈ ری نیول اور ویب سائٹ ری ڈیزائن میں مدد کی — نتیجہ ایک شائستہ اور جدید تجربہ تھا جو نمایاں ہے۔',
    'home.testimonials.testimonial9': 'UI/UX ری ویمپ نے ہماری سروس آفرنگ میں وضاحت لائی۔ ہمارے صارفین اب زیادہ وقت گزارتے ہیں اور زیادہ دریافت کرتے ہیں۔',
    'home.whyChoose.title': 'ہمیں کیوں منتخب کریں',
    'home.whyChoose.description': 'ہم جدید کاروباروں کے لیے سستی، حسب ضرورت اور قابل توسیع ڈیجیٹل حل بناتے ہیں — تیزی سے۔',
    'home.whyChoose.transparentPricing': 'شفاف قیمت سازی',
    'home.whyChoose.fixedDeadlines': 'طے شدہ ڈیڈ لائنز',
    'home.whyChoose.cleanDesign': 'صاف ڈیزائن',
    'home.whyChoose.freeConsultation': 'مفت مشاورہ',
    'home.whyChoose.longTermSupport': 'طویل مدتی سپورٹ',
    'home.whyChoose.flexibleTech': 'لچکدار ٹیک اسٹیک',
    'home.palestine.title': 'Upvista فلسطین اور اس کے عوام کے ساتھ کھڑی ہے',
    'home.join.title': 'ہمارے ساتھ شامل ہوں',
    // Footer translations
    'footer.description': 'اینٹرپرائزز کو جدید ترین ڈیجیٹل حل کے ساتھ بااختیار بناتے ہیں۔ ہم اختراعی سافٹ ویئر ڈیولپمنٹ، جامع ویب سروسز، اور تبدیلی لانے والی ٹیکنالوجی پارٹنرشپ فراہم کرتے ہیں جو ترقی اور کامیابی کو فروغ دیتے ہیں۔',
    'footer.paymentMethods': 'ادائیگی کے طریقے',
    'footer.payoneer': 'Payoneer',
    'footer.bankTransfer': 'بینک ٹرانسفر',
    'footer.jazzCash': 'JazzCash',
    'footer.easyPaisa': 'EasyPaisa',
    'footer.company': 'کمپنی',
    'footer.aboutUs': 'ہمارے بارے میں',
    'footer.companyProfile': 'کمپنی پروفائل',
    'footer.sustainability': 'پائیداری اور اقدار',
    'footer.investorRelations': 'سرمایہ کار تعلقات',
    'footer.partnerships': 'شراکت',
    'footer.leadership': 'قیادت',
    'footer.contactUs': 'ہم سے رابطہ کریں',
    'footer.careers': 'کیریئرز',
    'footer.services': 'خدمات',
    'footer.allServices': 'تمام خدمات',
    'footer.softwareDevelopment': 'سافٹ ویئر ڈیولپمنٹ',
    'footer.webDevelopment': 'ویب ڈیولپمنٹ',
    'footer.aiAutomation': 'AI اور آٹومیشن',
    'footer.cloudSolutions': 'کلاؤڈ حل',
    'footer.graphicsDesign': 'گرافکس اور ڈیزائن',
    'footer.digitalMarketing': 'ڈیجیٹل مارکیٹنگ',
    'footer.consultService': 'کسی بھی خدمت کے لیے مشاورہ',
    'footer.communityResources': 'کمیونٹی اور وسائل',
    'footer.aboutCommunity': 'کمیونٹی کے بارے میں',
    'footer.events': 'تقریبات',
    'footer.communityMembers': 'کمیونٹی ممبرز',
    'footer.trainings': 'تربیتیں',
    'footer.research': 'تحقیق',
    'footer.projectCortex': 'پروجیکٹ کورٹیکس',
    'footer.blog': 'بلاگ',
    'footer.faq': 'سوالات',
    'footer.whatsappUs': 'WhatsApp کے ذریعے رابطہ',
    'footer.linkedinUs': 'LinkedIn کے ذریعے رابطہ',
    'footer.messengerUs': 'Messenger کے ذریعے رابطہ',
    'footer.copyright': '© 2025 Upvista Digital. تمام حقوق محفوظ ہیں۔',
    'footer.termsConditions': 'شرائط و ضوابط',
    'footer.privacyPolicy': 'پرائیویسی پالیسی',
    'footer.trademarkCopyright': 'ٹریڈ مارک اور کاپی رائٹ',
    'footer.dataProtection': 'ڈیٹا کی حفاظت',
    'carousel.technologies': 'ہماری استعمال کی جانے والی ٹیکنالوجیز',
    // Sustainability Page
    'sustainability.badge': 'پائیدار مستقبل',
    'sustainability.title': 'پائیداری اور اقدار',
    'sustainability.subtitle': 'ماحولیاتی ذمہ داری، سماجی اثرات، اور اخلاقی کاروباری طریقوں کے لیے ہمارا جامع نقطہ نظر جو ہماری کارپوریٹ ثقافت کو تشکیل دیتا ہے اور ہماری کارروائیوں کی رہنمائی کرتا ہے۔',
    'sustainability.learnMore': 'مزید سیکھیں',
    'sustainability.policy.title': 'پائیداری کی پالیسی',
    'sustainability.policy.description': 'ماحولیاتی انتظام، سماجی ذمہ داری، اور پائیدار کاروباری طریقوں کے لیے ہمارا جامع فریم ورک۔',
    'sustainability.values.title': 'کارپوریٹ اقدار',
    'sustainability.values.description': 'وہ بنیادی اصول اور اقدار جو فیصلہ سازی کی رہنمائی کرتے ہیں اور ہماری تنظیمی ثقافت کو تشکیل دیتے ہیں۔',
    'sustainability.humanRights.title': 'انسانی حقوق کی پالیسی',
    'sustainability.humanRights.description': 'ہماری تمام کارروائیوں اور شراکت داریوں میں انسانی حقوق کے تحفظ اور فروغ کے لیے ہمارا عہد۔',
    'sustainability.humanCapital.title': 'انسانی سرمائے کے اقدامات',
    'sustainability.humanCapital.description': 'ملازمین کی ترقی، بہبود، اور جامع کام کی جگہ بنانے پر توجہ مرکوز کرنے والے پروگرام اور اقدامات۔',
    'sustainability.environmental.title': 'ماحولیاتی فلسفہ',
    'sustainability.environmental.description': 'ٹیکنالوجی میں ماحولیاتی اثرات کو کم سے کم کرنے اور پائیدار طریقوں کو فروغ دینے کا ہمارا نقطہ نظر۔',
    'sustainability.social.title': 'سماجی فلسفہ',
    'sustainability.social.description': 'ٹیکنالوجی کے حل کے ذریعے سماجی ذمہ داری اور مثبت کمیونٹی کے اثرات کے لیے ہمارا عہد۔',
    'sustainability.governance.title': 'کارپوریٹ گورننس',
    'sustainability.governance.description': 'شفافیت، جوابدہی، اور اخلاقی کاروباری طریقوں کو یقینی بنانے کے لیے ہمارا گورننس فریم ورک۔',
    'sustainability.research.title': 'تحقیق و ترقی',
    'sustainability.research.description': 'پائیدار ٹیکنالوجی کے حل اور ذمہ دار اختراعی طریقوں پر توجہ مرکوز کرنے والے اختراعی اقدامات۔',
    // Sustainability Policy Page
    'policy.badge': 'پائیداری کا فریم ورک',
    'policy.title': 'پائیداری کی پالیسی',
    'policy.subtitle': 'ماحولیاتی انتظام، سماجی ذمہ داری، اور پائیدار کاروباری طریقوں کے لیے ہمارا جامع فریم ورک جو ہمارے آپریشنز کے ہر پہلو کو رہنمائی کرتا ہے۔',
    'policy.environmental.title': 'ماحولیاتی عہد',
    'policy.environmental.content1': 'Upvista Digital میں، ہم پائیدار طریقوں کے ذریعے ماحولیاتی اثرات کو کم کرنے کی اپنی ذمہ داری کو تسلیم کرتے ہیں۔ ہماری ماحولیاتی پالیسی تمام کاروباری آپریشنز میں توانائی کی کارکردگی، فضلہ میں کمی، اور کاربن فوٹ پرنٹ کو کم کرنے پر محیط ہے۔',
    'policy.environmental.content2': 'ہم اپنے ڈیجیٹل کاربن فوٹ پرنٹ کو کم کرنے کے لیے کلاؤڈ بیسڈ حل اور توانائی سے موثر ٹیکنالوجیز کو ترجیح دیتے ہیں۔ ہمارے ڈیولپمنٹ کے طریقے صاف کوڈ، بہتر کارکردگی، اور پائیدار آرکیٹیکچرل پیٹرنز پر زور دیتے ہیں جو وسائل کی کھپت کو کم کرتے ہیں۔',
    'policy.social.title': 'سماجی ذمہ داری کا فریم ورک',
    'policy.social.content1': 'ہماری سماجی ذمہ داری کی پالیسی ٹیکنالوجی کے ذریعے مثبت اثر پیدا کرنے پر مرکوز ہے۔ ہم ڈیجیٹل شمولیت، ٹیکنالوجی سے چلنے والے حل کے ذریعے کمیونٹیز کی مدد، اور یہ یقینی بنانے میں یقین رکھتے ہیں کہ ہماری خدمات پورے معاشرے کو فائدہ پہنچائیں۔',
    'policy.social.content2': 'ہم رہنمائی کے پروگراموں، تعلیمی اقدامات، اور کمیونٹی ڈیولپمنٹ پروجیکٹس میں فعال طور پر حصہ لیتے ہیں۔ ہمارا عہد مقامی ٹیکنالوجی کے ماحولیاتی نظام کی مدد اور حقیقی دنیا کے چیلنجز سے نمٹنے والی اختراع کو فروغ دینے تک پھیلا ہوا ہے۔',
    'policy.business.title': 'پائیدار کاروباری طریقے',
    'policy.business.content1': 'ہمارے کاروباری طریقے پائیداری کو مرکز میں رکھ کر ڈیزائن کیے گئے ہیں۔ ہم شفاف رپورٹنگ، اخلاقی سورسنگ، اور ذمہ دار پروجیکٹ مینجمنٹ کو نافذ کرتے ہیں جو طویل مدتی ماحولیاتی اور سماجی اثرات کو مدنظر رکھتے ہیں۔',
    'policy.business.content2': 'ہم کارپوریٹ گورننس کے اعلیٰ معیارات کو برقرار رکھتے ہیں، اپنے تمام آپریشنز میں جوابدہی کو یقینی بناتے ہیں۔ ہمارے کلائنٹ کے تعلقات اعتماد، شفافیت، اور پائیدار ترقی کے اہداف کے لیے مشترکہ عہد پر استوار ہیں۔',
    'policy.implementation.title': 'عملدرآمد اور نگرانی',
    'policy.implementation.content1': 'یہ پائیداری کی پالیسی تمام محکموں اور پروجیکٹس میں فعال طور پر نافذ کی جاتی ہے۔ ہم اپنی پیشرفت کی باقاعدگی سے نگرانی کرتے ہیں، اپنے اثرات کو ناپتے ہیں، اور اپنے طریقوں کو مسلسل بہتر بناتے ہیں تاکہ یقینی بنایا جا سکے کہ ہم اپنے پائیداری کے عہدوں کو پورا کرتے اور ان سے آگے بڑھتے ہیں۔',
    'policy.implementation.content2': 'ہماری ٹیم پائیداری کے طریقوں پر باقاعدہ تربیت حاصل کرتی ہے، اور ہم پائیدار ٹیکنالوجی کے حل میں اختراع کو فروغ دیتے ہیں۔ ہم ذمہ دار ٹیکنالوجی کی ڈیولپمنٹ اور تعیناتی میں لیڈر بننے کے لیے پرعزم ہیں۔',
    // Corporate Values Page
    'values.badge': 'بنیادی اصول',
    'values.title': 'کمپنی کے اقدار',
    'values.subtitle': 'بنیادی اصول اور اقدار جو ہمارے فیصلہ سازی کو رہنمائی کرتے ہیں، ہماری تنظیمی ثقافت کو تشکیل دیتے ہیں، اور ڈیجیٹل ماحول میں ہم کیسے کاروبار کرتے ہیں اس کی وضاحت کرتے ہیں۔',
    'values.innovation.title': 'اختراع اور عمدگی',
    'values.innovation.content1': 'ہم ٹیکنالوجی میں ممکنات کی حدود کو آگے بڑھانے کے لیے پرعزم ہیں۔ اختراع ہمارے لیے صرف ایک نعرہ نہیں؛ یہ ہم جو کچھ بھی کرتے ہیں اس کی بنیاد ہے۔ ہم پیچیدہ مسائل کو حل کرنے اور اپنے کلائنٹس کو غیر معمولی نتائج فراہم کرنے کے لیے نئے طریقے تلاش کرتے رہتے ہیں۔',
    'values.innovation.content2': 'عملدرآمد میں عمدگی ہمارا معیار ہے۔ ہم یقین رکھتے ہیں کہ ہر منصوبہ، چاہے وہ کتنا ہی چھوٹا کیوں نہ ہو، ہماری بہترین کوشش کا مستحق ہے۔ معیار کے لیے یہ عہد ہمیں اپنے طریقوں، ٹیکنالوجیز، اور سروس ڈیلیوری کو مسلسل بہتر بنانے کی طرف راغب کرتا ہے۔',
    'values.integrity.title': 'دیانتداری اور شفافیت',
    'values.integrity.content1': 'دیانتداری ہمارے تمام تعلقات کی بنیاد بنتی ہے۔ ہم تمام اسٹیک ہولڈرز کے لیے ایمانداری، انصاف اور احترام کے ساتھ کاروبار کرتے ہیں۔ مواصلت میں ہماری شفافیت یقینی بناتی ہے کہ کلائنٹس، شراکت دار، اور ٹیم کے اراکین ہمیشہ جانتے ہیں کہ وہ کہاں کھڑے ہیں۔',
    'values.integrity.content2': 'ہم یقین رکھتے ہیں کہ اعتماد مستقل اقدامات اور ایمانداری سے مواصلت کے ذریعے حاصل ہوتا ہے۔ شفافیت کے لیے ہمارا عہد ہمارے پروجیکٹ مینجمنٹ، قیمت سازی، ٹائم لائنز، اور راستے میں ہمیں درپیش کسی بھی چیلنج تک پھیلا ہوا ہے۔',
    'values.collaboration.title': 'تعاون اور شراکت داری',
    'values.collaboration.content1': 'ہم ہر کلائنٹ کے رشتے کو ایک حقیقی شراکت داری کے طور پر دیکھتے ہیں۔ تعاون ہماری کامیابی کی کنجی ہے، اور ہم کلائنٹس کے ساتھ ان کے منفرد چیلنجز اور اہداف کو سمجھنے کے لیے قریب سے کام کرتے ہیں۔ ہمارا ٹیم بیسڈ نقطہ نظر متنوع نقطہ ہائے نظر اور جامع حل یقینی بناتا ہے۔',
    'values.collaboration.content2': 'اندرونی طور پر، ہم تعاون کی ایک ثقافت کو فروغ دیتے ہیں جہاں ہر ٹیم ممبر کی رائے کی قدر کی جاتی ہے۔ ہم یقین رکھتے ہیں کہ بہترین حل اس وقت سامنے آتے ہیں جب متنوع صلاحیتوں اور نقطہ ہائے نظر پیچیدہ چیلنجز سے نمٹنے کے لیے اکٹھے ہوتے ہیں۔',
    'values.learning.title': 'مسلسل سیکھنا اور ترقی',
    'values.learning.content1': 'تیزی سے بدلتے ہوئے ٹیکنالوجی کے دنیا میں، مسلسل سیکھنا ضروری ہے۔ ہم اپنی ٹیم کی پیشہ ورانہ ترقی میں بھاری سرمایہ کاری کرتے ہیں، تربیت، تصدیق، اور صلاحیت بہتری کے مواقع فراہم کرتے ہیں۔',
    'values.learning.content2': 'ہم تجربہ کاری اور ناکامیوں سے سیکھنے کو فروغ دیتے ہیں۔ ہماری ثقافت علم کے اشتراک، رہنمائی، اور نئی ٹیکنالوجیز اور طریقوں کی تلاش کو فروغ دیتی ہے جو ہمارے کلائنٹس کو فائدہ پہنچا سکتے ہیں اور ہماری صلاحیتوں کو آگے بڑھا سکتے ہیں۔',
    'values.client.title': 'کلائنٹ کی کامیابی اور قدر کی تخلیق',
    'values.client.content1': 'ہماری کامیابی ہمارے کلائنٹس کی کامیابی سے ناپی جاتی ہے۔ ہم ایسے حل فراہم کرنے کے لیے پرعزم ہیں جو نہ صرف ضروریات کو پورا کرتے ہیں بلکہ توقعات سے بھی آگے بڑھتے ہیں اور حقیقی کاروباری قدر پیدا کرتے ہیں۔ ہر منصوبے کو پائیدار مثبت اثر پیدا کرنے کے ہدف کے ساتھ لیا جاتا ہے۔',
    'values.client.content2': 'ہم کلائنٹ کے تعلقات کا طویل مدتی نظریہ رکھتے ہیں، پائیدار حل پر توجہ مرکوز کرتے ہیں جو مستقبل میں ہمارے کلائنٹس کو اچھی خدمت فراہم کریں گے۔ ہمارا قدر کا اظہار تکنیکی مہارت سے آگے بڑھ کر اسٹریٹجک سوچ، کاروباری بصیرت، اور مسلسل سپورٹ شامل کرتا ہے۔',
    // Human Capital Initiatives Page
    'humanCapital.badge': 'لوگوں پر مبنی نقطہ نظر',
    'humanCapital.title': 'انسانی سرمایہ کی پہل',
    'humanCapital.subtitle': 'ملازمین کی ترقی، فلاح و بہبود، اور ایک جامع کام کی جگہ بنانے پر توجہ مرکوز کرنے والے جامع پروگرام اور اقدامات جو ہمارے سب سے بڑے اثاثے - ہمارے لوگوں کو بااختیار بناتے ہیں۔',
    'humanCapital.development.title': 'پیشہ ورانہ ترقی کے پروگرام',
    'humanCapital.development.content1': 'ہم اپنے ٹیم کے اراکین کی مسلسل ترقی اور نشوونما میں بہت زیادہ سرمایہ کاری کرتے ہیں۔ ہمارے جامع پیشہ ورانہ ترقی کے پروگراموں میں تکنیکی تربیت، قیادت کی ترقی، اور نرم مہارتوں کو بہتر بنانا شامل ہے تاکہ ہمارے ملازمین اپنے شعبوں میں آگے رہیں۔',
    'humanCapital.development.content2': 'ہماری ترقی کی پہلوں میں مینٹرشپ پروگرام، کراس فنکشنل پروجیکٹ کے مواقع، کانفرنس میں شرکت، سند کی حمایت، اور جدید ترین ٹولز اور ٹیکنالوجیز تک رسائی شامل ہے۔ ہم یقین رکھتے ہیں کہ ہمارے لوگوں کی ترقی میں سرمایہ کاری براہ راست ہمارے کلائنٹس اور کمپنی کے لیے بہتر نتائج میں ترجمہ کرتی ہے۔',
    'humanCapital.wellbeing.title': 'ملازمین کی فلاح و بہبود اور کام-زندگی کا توازن',
    'humanCapital.wellbeing.content1': 'ہم سمجھتے ہیں کہ ملازمین کی فلاح و بہبود ذاتی خوشی اور پیشہ ورانہ کامیابی دونوں کے لیے بنیادی ہے۔ ہماری فلاح و بہبود کی پہلوں میں لچکدار کام کے انتظامات، ذہنی صحت کی سپورٹ پروگرام، ویلنس کی سرگرمیاں، اور جامع صحت کے فوائد شامل ہیں۔',
    'humanCapital.wellbeing.content2': 'ہماری کام-زندگی توازن کی پالیسیوں میں ریموٹ کام کے اختیارات، لچکدار اوقات، فراخ دلانہ چھٹی کی پالیسیاں، اور خاندان دوست طریقے شامل ہیں۔ ہم سمجھتے ہیں کہ ہمارے ملازمین کے کام کے باہر زندگی ہے، اور ہم انہیں اپنے پیشہ ورانہ اور ذاتی عہدوں کے درمیان صحت مند توازن برقرار رکھنے میں مدد کرتے ہیں۔',
    'humanCapital.diversity.title': 'تنوع، انصاف اور شمولیت',
    'humanCapital.diversity.content1': 'ہم ایک جامع کام کی جگہ بنانے کے لیے پرعزم ہیں جہاں تنوع کی تعریف ہو اور ہر کوئی خود کو قیمتی اور محترم محسوس کرے۔ ہماری تنوع، انصاف اور شمولیت کی پہلوں میں متنوع صلاحیتوں کے پول سے بھرتی، ترقی کے لیے مساوی مواقع فراہم کرنا، اور تعلق کا ماحول پیدا کرنا شامل ہے۔',
    'humanCapital.diversity.content2': 'ہماری شمولیت کی کوششوں میں غیر شعوری تعصب کی تربیت، متنوع بھرتی کے طریقے، ملازمین کے وسائل کے گروپ، اور ہماری کام کی جگہ کی ثقافت کے باقاعدہ جائزے شامل ہیں۔ ہم یقین رکھتے ہیں کہ متنوع نقطہ نظر بہتر جدت طرازی، مسئلہ حل، اور کاروباری نتائج کی طرف لے جاتے ہیں۔',
    'humanCapital.knowledge.title': 'علم کا اشتراک اور جدت طرازی کی ثقافت',
    'humanCapital.knowledge.content1': 'ہم علم کے اشتراک اور مسلسل سیکھنے کی ثقافت کو فروغ دیتے ہیں۔ ہماری جدت طرازی کی پہلوں میں باقاعدہ ٹیک ٹاک، ہیکاتھون، جدت طرازی کے چیلنج، اور ملازمین کے لیے شوق کے پروجیکٹس کو آگے بڑھانے کے مواقع شامل ہیں جو کمپنی اور ہمارے کلائنٹس کو فائدہ پہنچا سکتے ہیں۔',
    'humanCapital.knowledge.content2': 'ہم کراس ٹیم تعاون کو فروغ دیتے ہیں اور ملازمین کے لیے پلیٹ فارم فراہم کرتے ہیں تاکہ وہ اپنی مہارت شیئر کریں، دوسروں سے سیکھیں، اور تنظیم کے اجتماعی علم میں حصہ ڈالیں۔ اشتراک اور جدت طرازی کی یہ ثقافت ذاتی ترقی اور کمپنی کی پیشرفت دونوں کو آگے بڑھاتی ہے۔',
    'humanCapital.recognition.title': 'تسلیم اور کیریئر کی ترقی',
    'humanCapital.recognition.content1': 'ہم تعریف اور بہترین کارکردگی کو انعام دینے پر یقین رکھتے ہیں۔ ہمارے تسلیم کے پروگراموں میں کارکردگی پر مبنی بونس، کامیابی کے انعامات، اور غیر معمولی شراکتوں کی عوامی تسلیم شامل ہے۔ ہم واضح کیریئر ترقی کے راستے فراہم کرتے ہیں اور ملازمین کو اپنے پیشہ ورانہ اہداف حاصل کرنے میں مدد کرتے ہیں۔',
    'humanCapital.recognition.content2': 'ہمارا کیریئر ترقی کا فریم ورک باقاعدہ کارکردگی کے جائزے، ہدف سازی، مہارت کے جائزے، اور ذاتی ترقی کے منصوبے شامل ہے۔ ہم اپنے ملازمین کی طویل مدتی کیریئر کامیابی میں سرمایہ کاری کرتے ہیں، یہ جانتے ہوئے کہ ان کی ترقی براہ راست کمپنی کی کامیابی میں حصہ ڈالتی ہے۔',
    'humanCapital.community.title': 'کمیونٹی کی شمولیت اور سماجی اثر',
    'humanCapital.community.content1': 'ہم اپنے ملازمین کو اپنی کمیونٹیز کے ساتھ جڑنے اور سماجی مقاصد میں حصہ ڈالنے کی ترغیب دیتے ہیں۔ ہماری کمیونٹی کی شمولیت کی پہلوں میں رضاکارانہ وقت، کارپوریٹ سماجی ذمہ داری کے پروگرام، اور ملازمین کی ذاتی خیراتی سرگرمیوں کی حمایت شامل ہے۔',
    'humanCapital.community.content2': 'ہم یقین رکھتے ہیں کہ جو ملازمین اپنی کمیونٹیز میں حصہ ڈالتے ہیں وہ زیادہ مطمئن ہوتے ہیں اور اس مثبت توانائی کو اپنے کام میں واپس لاتے ہیں۔ ہمارے سماجی اثر کے پروگرام ملازمین کو اپنی مہارتوں اور مہارت کا استعمال کرکے دنیا میں فرق لانے کی اجازت دیتے ہیں۔',
    // Human Rights Policy Page
    'humanRights.badge': 'انسانی حقوق کا عہد',
    'humanRights.title': 'انسانی حقوق کی پالیسی',
    'humanRights.subtitle': 'دنیا بھر کی کمیونٹیز کی خدمت کرنے والے ہمارے تمام آپریشنز، شراکت داریوں اور ٹیکنالوجی حل میں انسانی حقوق کے تحفظ اور فروغ کے لیے ہمارا غیر متزلزل عہد۔',
    'humanRights.universal.title': 'عالمی انسانی حقوق کے اصول',
    'humanRights.universal.content1': 'Upvista Digital عالمی انسانی حقوق کے اعلامیے اور تمام متعلقہ بین الاقوامی انسانی حقوق کے معیارات کو برقرار رکھنے کے لیے پرعزم ہے۔ ہم سمجھتے ہیں کہ ٹیکنالوجی میں انسانی حقوق کو تحفظ دینے اور ممکنہ طور پر انہیں پامال کرنے دونوں کی طاقت ہے، اور ہم اس بات کو یقینی بنانے کے لیے پرعزم ہیں کہ ہمارے حل انسانی وقار اور آزادی کو آگے بڑھائیں۔',
    'humanRights.universal.content2': 'ہماری انسانی حقوق کی پالیسی ہمارے کاروباری آپریشنز کے تمام پہلوؤں پر لاگو ہوتی ہے، بشمول ملازمین کے تعلقات، کلائنٹ کی شراکت داریاں، سپلائی چین مینجمنٹ، اور ایسے ٹیکنالوجی حل کی ترقی اور تعیناتی جو افراد اور کمیونٹیز کو متاثر کرتے ہیں۔',
    'humanRights.workplace.title': 'کام کی جگہ پر انسانی حقوق',
    'humanRights.workplace.content1': 'ہم ایک کام کی جگہ کا ماحول برقرار رکھتے ہیں جو تمام ملازمین کے بنیادی حقوق کا احترام اور تحفظ کرتا ہے۔ اس میں منصفانہ سلوک کا حق، امتیازی سلوک سے آزادی، محفوظ کام کی حالات، اور انتقام کے خوف کے بغیر خدشات کا اظہار کرنے کا حق شامل ہے۔',
    'humanRights.workplace.content2': 'ہمارا عہد کیریئر کی ترقی کے لیے برابر کے مواقع فراہم کرنا، منصفانہ معاوضے کی پالیسیاں، اور ایک جامع ماحول بنانا شامل ہے جہاں تنوع کی تعریف ہو اور تمام افراد اپنے پس منظر، شناخت یا عقائد سے قطع نظر ترقی کر سکیں۔',
    'humanRights.privacy.title': 'پرائیویسی اور ڈیجیٹل حقوق',
    'humanRights.privacy.content1': 'ہمارے ڈیجیٹل دور میں، پرائیویسی ایک بنیادی انسانی حق ہے۔ ہم ان تمام افراد کے پرائیویسی کے حقوق کے تحفظ کے لیے پرعزم ہیں جن کا ڈیٹا ہم سنبھالتے ہیں، چاہے وہ ہمارے ملازمین، کلائنٹ، یا ہمارے بنائے گئے حل کے آخری صارفین ہوں۔',
    'humanRights.privacy.content2': 'ہمارے ٹیکنالوجی حل پرائیویسی-بائے-ڈیزائن اصولوں کے ساتھ ڈیزائن کیے گئے ہیں، یقینی بناتے ہیں کہ ڈیٹا کا تحفظ ہر نظام میں شروع سے ہی سرایت کر جائے۔ ہم مضبوط سیکیورٹی اقدامات اور شفاف ڈیٹا ہینڈلنگ کی پالیسیاں لاگو کرتے ہیں جو انفرادی خودمختاری اور رضامندی کا احترام کرتی ہیں۔',
    'humanRights.community.title': 'کمیونٹی اثر اور رسائی',
    'humanRights.community.content1': 'ہم یقین رکھتے ہیں کہ ٹیکنالوجی سب کے لیے قابل رسائی ہونی چاہیے اور عدم مساوات پیدا نہیں کرنی چاہیے یا انہیں جاری نہیں رکھنا چاہیے۔ ہمارے حل رسائی کو ذہن میں رکھ کر ڈیزائن کیے گئے ہیں، یقینی بناتے ہیں کہ معذور افراد ڈیجیٹل دنیا میں مکمل طور پر حصہ لے سکیں۔',
    'humanRights.community.content2': 'ہم فعال طور پر ڈیجیٹل تقسیم کو کم کرنے کے لیے کام کرتے ہیں جو کم سروس والی کمیونٹیز کو ٹیکنالوجی تک رسائی فراہم کرنے والے اقدامات کی حمایت کرتا ہے۔ انسانی حقوق کے لیے ہمارا عہد یہ یقینی بنانا شامل ہے کہ ہمارے ٹیکنالوجی حل سماجی شمولیت کو بڑھائیں نہ کہ اخراج کو۔',
    'humanRights.ethical.title': 'اخلاقی ٹیکنالوجی کی ترقی',
    'humanRights.ethical.content1': 'ہم ایسی ٹیکنالوجی کی ترقی کے لیے پرعزم ہیں جو انسانی حقوق کا احترام کرے اور انسانی ترقی کو فروغ دے۔ اس میں ایسی ٹیکنالوجیوں کی ترقی سے گریز کرنا شامل ہے جو انسانی حقوق کے خلاف استعمال ہو سکتی ہیں، جیسے کہ پرائیویسی کو پامال کرنے والے نگرانی کے نظام یا ایسے AI نظام جو تعصب اور امتیازی سلوک کو جاری رکھتے ہیں۔',
    'humanRights.ethical.content2': 'ہمارا اخلاقی فریم ورک تمام ٹیکنالوجی ترقی کے فیصلوں کی رہنمائی کرتا ہے، یقینی بناتا ہے کہ ہم اپنے حل کے ممکنہ انسانی حقوق کے اثرات پر غور کریں۔ ہم باقاعدہ انسانی حقوق کے اثر کی تشخیص کرتے ہیں اور اسٹیک ہولڈرز کے ساتھ مسلسل مکالمہ برقرار رکھتے ہیں تاکہ یقینی بنائیں کہ ہماری ٹیکنالوجی انسانیت کے بہترین مفادات کی خدمت کرے۔',
    'humanRights.implementation.title': 'عمل درآمد اور جوابدہی',
    'humanRights.implementation.content1': 'یہ انسانی حقوق کی پالیسی صرف ایک دستاویز نہیں؛ یہ ایک زندہ عہد ہے جو ہمارے روزمرہ کے آپریشنز کی رہنمائی کرتا ہے۔ ہم تمام ملازمین کو انسانی حقوق کے اصولوں پر باقاعدہ تربیت فراہم کرتے ہیں اور کسی بھی خدشات کی رپورٹ کرنے اور ان سے نمٹنے کے لیے مضبوط طریقہ کار برقرار رکھتے ہیں۔',
    'humanRights.implementation.content2': 'ہم باقاعدہ آڈٹ، اسٹیک ہولڈر کی شمولیت، اور ہماری انسانی حقوق کی کارکردگی پر شفاف رپورٹنگ کے ذریعے ان اصولوں کے لیے خود کو جوابدہ ٹھہراتے ہیں۔ انسانی حقوق کا ہمارا عہد ایک ذمہ دار ٹیکنالوجی کمپنی کے طور پر ہماری شناخت کا بنیادی عنصر ہے۔',
    // Environmental Philosophy Page
    'environmental.badge': 'گرین ٹیکنالوجی لیڈرشپ',
    'environmental.title': 'ماحولیاتی فلسفہ',
    'environmental.subtitle': 'ٹیکنالوجی کی ترقی، آپریشنز، اور کلائنٹ کے حل میں ماحولیاتی اثرات کو کم سے کم کرنے اور پائیدار طریقوں کو فروغ دینے کے لیے ہمارا جامع نقطہ نظر۔',
    'environmental.development.title': 'پائیدار ٹیکنالوجی کی ترقی',
    'environmental.development.content1': 'ہم یقین رکھتے ہیں کہ ٹیکنالوجی ماحولیاتی نقصان کا ذریعہ نہیں بلکہ ماحولیاتی بھلائی کے لیے ایک قوت ہونا چاہیے۔ ہمارے ترقیاتی طریقے توانائی کی کارکردگی، وسائل کی بہتری، اور کم سے کم ماحولیاتی اثر کو ترجیح دیتے ہیں۔ ہم جو بھی حل بناتے ہیں وہ پائیداری کے اصولوں کے ساتھ اس کے مرکز میں ڈیزائن کیا گیا ہے۔',
    'environmental.development.content2': 'ہمارا پائیدار ترقیاتی نقطہ نظر گرین کوڈنگ کے طریقوں، کمپیوٹیشنل ضروریات کو کم کرنے والے بہتر الگورتھم، اور کاربن فٹ پرنٹ کو کم سے کم کرنے والے کلاؤڈ انفراسٹرکچر کے انتخاب شامل کرتا ہے۔ ہم مسلسل نئی ٹیکنالوجیز کی تحقیق اور نفاذ کرتے ہیں جو ماحولیاتی اثرات کو کم کرنے میں مدد کر سکتے ہیں۔',
    'environmental.carbon.title': 'کاربن فٹ پرنٹ میں کمی',
    'environmental.carbon.content1': 'ہم تمام آپریشنز میں اپنے کاربن فٹ پرنٹ کو کم کرنے کے لیے پرعزم ہیں۔ اس میں ہمارے دفاتر کے لیے قابل تجدید توانائی کے ذرائع کا استعمال، توانائی سے موثر ہارڈویئر اور سافٹ ویئر کا نفاذ، اور پائیداری اور قابل تجدید توانائی کو ترجیح دینے والے کلاؤڈ فراہم کنندگان کا انتخاب شامل ہے۔',
    'environmental.carbon.content2': 'ہماری کاربن میں کمی کی کوششوں میں کام کرنے کے دور دراز کے طریقے شامل ہیں جو سفر کے اخراج کو کم کرتے ہیں، ڈیجیٹل فرسٹ طریقے جو کاغذ کے استعمال کو کم سے کم کرتے ہیں، اور توانائی سے موثر دفتری ڈیزائن۔ ہم باقاعدگی سے اپنے کاربن فٹ پرنٹ کو ناپتے اور رپورٹ کرتے ہیں اور کمی کے لیے بڑے اہداف طے کرتے ہیں۔',
    'environmental.cloud.title': 'گرین کلاؤڈ کمپیوٹنگ اور انفراسٹرکچر',
    'environmental.cloud.content1': 'ہم کلاؤڈ کمپیوٹنگ کے حل کو ترجیح دیتے ہیں جو قابل تجدید توانائی سے چلتے ہیں اور مضبوط ماحولیاتی وعدوں والے فراہم کنندگان کے ذریعے چلائے جاتے ہیں۔ ہمارے انفراسٹرکچر کے انتخاب پائیداری کے پیمانوں سے رہنمائی حاصل کرتے ہیں، جن میں کاربن کی شدت، توانائی کی کارکردگی، اور ماحولیاتی سرٹیفیکیشن شامل ہیں۔',
    'environmental.cloud.content2': 'ہمارا گرین انفراسٹرکچر نقطہ نظر میں وسائل کے استعمال کو کم سے کم کرنے کے لیے سرورلیس کمپیوٹنگ، طلب کے مطابق سکیل کرنے اور فضول کو کم کرنے کے لیے آٹو سکیلنگ، اور ماحولیاتی معیارات کی بنیاد پر ڈیٹا سینٹر کا انتخاب شامل ہے۔ ہم کلائنٹس کے ساتھ ان کے کلاؤڈ استعمال کو کارکردگی اور ماحولیاتی اثر دونوں کے لیے بہتر بنانے کے لیے کام کرتے ہیں۔',
    'environmental.digital.title': 'ماحولیاتی چیلنجز کے لیے ڈیجیٹل حل',
    'environmental.digital.content1': 'ہم ٹیکنالوجی کے حل تیار کرتے ہیں جو ہمارے کلائنٹس کو ان کے ماحولیاتی اثرات کو کم کرنے میں مدد کرتے ہیں۔ اس میں توانائی کے انتظام کے نظام، فضول میں کمی کے ایپلیکیشنز، سپلائی چین کی بہتری کے ٹولز، اور بہتر ماحولیاتی فیصلہ سازی کو ممکن بنانے والے پائیداری کی رپورٹنگ پلیٹ فارم شامل ہیں۔',
    'environmental.digital.content2': 'ہمارے ماحولیاتی ٹیکنالوجی کے حل کاروباروں کو ان کے کاربن اخراج کو ٹریک کرنے، وسائل کے استعمال کو بہتر بنانے، اور پائیدار طریقے نافذ کرنے میں مدد کرتے ہیں۔ ہم یقین رکھتے ہیں کہ ٹیکنالوجی ماحولیاتی تحفظ اور پائیداری کے لیے ایک طاقتور ٹول ہو سکتا ہے۔',
    'environmental.waste.title': 'فضول میں کمی اور سرکلر اکانومی',
    'environmental.waste.content1': 'ہم اپنے آپریشنز اور ٹیکنالوجی کی ترقی میں سرکلر اکانومی کے اصولوں کو اپناتے ہیں۔ اس میں ہارڈویئر کی زندگی کے دور کو بڑھانا، سافٹ ویئر کی دوبارہ استعمال اور ماڈیولرٹی کو فروغ دینا، اور ایسے نظام ڈیزائن کرنا شامل ہے جو آسانی سے اپڈیٹ کیے جا سکتے ہیں بجائے تبدیل کیے جانے کے۔',
    'environmental.waste.content2': 'ہماری فضول میں کمی کی کوششوں میں پیپرلیس دفتری طریقے، الیکٹرانک فضول کی ری سائیکلنگ پروگرام، اور جسمانی وسائل کی کھپت کو کم سے کم کرنے والے ڈیجیٹل فرسٹ طریقے شامل ہیں۔ ہم کلائنٹس کو ترغیب دیتے ہیں کہ وہ ہمارے بنائے گئے حل کے ذریعے اسی طرح کے طریقے اپنائیں۔',
    'environmental.education.title': 'ماحولیاتی تعلیم اور وکالت',
    'environmental.education.content1': 'ہم تعلیم اور وکالت کی قوت پر یقین رکھتے ہیں جو ماحولیاتی تبدیلی کو آگے بڑھاتی ہے۔ ہمارے ٹیم کے ارکان کو ماحولیاتی بہترین طریقوں پر باقاعدہ تربیت ملتی ہے، اور ہم اپنا علم کلائنٹس اور وسیع تر ٹیکنالوجی کمیونٹی کے ساتھ شیئر کرتے ہیں۔',
    'environmental.education.content2': 'ہم فعال طور پر ماحولیاتی کوششوں میں حصہ لیتے ہیں، گرین ٹیکنالوجی کی تحقیق کی حمایت کرتے ہیں، اور ایسی پالیسیوں کی وکالت کرتے ہیں جو پائیدار ٹیکنالوجی کی ترقی کو فروغ دیتی ہیں۔ ہمارا ہدف ٹیکنالوجی انڈسٹری میں ماحولیاتی تبدیلی کے لیے ایک مثبت قوت بننا ہے۔',
    'environmental.improvement.title': 'مسلسل بہتری اور جدت طرازی',
    'environmental.improvement.content1': 'ماحولیاتی پائیداری ایک منزل نہیں بلکہ ایک مسلسل سفر ہے۔ ہم مسلسل نئی ٹیکنالوجیز اور طریقوں کی تحقیق کرتے ہیں جو ہمارے ماحولیاتی اثرات کو اور بھی کم کر سکتے ہیں۔ ہماری جدت طرازی کی کوششیں ایسے حل کی ترقی پر مرکوز ہیں جو ٹیکنالوجی کے لحاظ سے اعلیٰ اور ماحولیاتی طور پر ذمہ دار ہوں۔',
    'environmental.improvement.content2': 'ہم باقاعدگی سے اپنی ماحولیاتی کارکردگی کا جائزہ لیتے ہیں، بہتری کے لیے بڑے اہداف طے کرتے ہیں، اور ٹیکنالوجیز اور طریقوں میں سرمایہ کاری کرتے ہیں جو ہماری پائیداری کی مہم کو آگے بڑھاتے ہیں۔ ماحولیاتی ذمہ داری کے لیے ہمارا عہد ہمیں اپنے سیارے کی حفاظت کرتے ہوئے اپنے کلائنٹس کی خدمت کرنے کے بہتر طریقوں کو مسلسل تلاش کرنے کی طرف راغب کرتا ہے۔',
    // Social Philosophy Page
    'social.badge': 'سماجی اثرات کی مہم',
    'social.title': 'سماجی فلسفہ',
    'social.subtitle': 'ٹیکنالوجی کے حل کے ذریعے سماجی ذمہ داری اور مثبت کمیونٹی اثرات کے لیے ہمارا عہد جو افراد کو بااختیار بناتے ہیں، کمیونٹیز کو مضبوط بناتے ہیں، اور سماجی مساوات کو فروغ دیتے ہیں۔',
    'social.good.title': 'سماجی بھلائی کے لیے ٹیکنالوجی',
    'social.good.content1': 'ہم یقین رکھتے ہیں کہ ٹیکنالوجی مثبت سماجی تبدیلی کی قوت ہونی چاہیے، افراد اور کمیونٹیز کو چیلنجز پر قابو پانے اور اپنی مکمل صلاحیتوں کو حاصل کرنے کے لیے بااختیار بنانا۔ ہمارا سماجی فلسفہ حقیقی دنیا کے مسائل کو حل کرنے اور معاشرے میں معنوی اثر پیدا کرنے کے لیے اپنی تکنیکی مہارت کو استعمال کرنے پر مرکوز ہے۔',
    'social.good.content2': 'سماجی بھلائی کے لیے ہمارا عہد ہمارے تجارتی منصوبوں سے آگے بڑھ کر پرو بونو کام، کمیونٹی شراکت داری، اور ایسی پہلوں کو شامل کرتا ہے جو ٹیکنالوجی کو سماجی عدم مساوات کو حل کرنے، تعلیم اور صحت کی دیکھ بھال تک رسائی بہتر بنانے، اور کمیونٹی کی لچک کو مضبوط بنانے کے لیے استعمال کرتے ہیں۔',
    'social.inclusion.title': 'ڈیجیٹل شمولیت اور رسائی',
    'social.inclusion.content1': 'ہم یقینی بنانے کے لیے پرعزم ہیں کہ ٹیکنالوجی کے فوائد معاشرے کے تمام ارکان کے لیے قابل رسائی ہوں، ان کی پس منظر، صلاحیتوں، یا معاشی حالات سے قطع نظر۔ ہماری ڈیجیٹل شمولیت کی پہلوں کا مقصد رکاوٹوں کو توڑنا اور ایسے ٹیکنالوجی کے حل بنانا ہے جو سب کی خدمت کریں۔',
    'social.inclusion.content2': 'ہماری رسائی کی کوششوں میں معذور افراد کے لیے کام کرنے والے حل تیار کرنا، کثیر لسانی انٹرفیس بنانا، اور کم بینڈوتھ ماحول کے لیے ڈیزائن کرنا شامل ہے۔ ہم یقین رکھتے ہیں کہ شامل ڈیزائن سب کے لیے بہتر حل کی طرف لے جاتا ہے اور ڈیجیٹل تقسیم کو کم کرنے میں مدد کرتا ہے۔',
    'social.community.title': 'کمیونٹی کی شمولیت اور شراکت داری',
    'social.community.content1': 'ہم مقامی کمیونٹیز اور تنظیموں کے ساتھ فعال طور پر جڑتے ہیں تاکہ ان کی ضروریات کو سمجھ سکیں اور کمیونٹی کے چیلنجز سے نمٹنے کے لیے اپنی مہارت کا حصہ ڈال سکیں۔ ہماری کمیونٹی کی شراکت داری میں تعلیمی ادارے، غیر منفعتی تنظیمیں، اور مقامی حکومت کی پہلوں شامل ہیں۔',
    'social.community.content2': 'ہماری کمیونٹی کی شمولیت میں طلباء کے لیے رہنمائی کے پروگرام، کمیونٹی کے ارکان کے لیے ٹیکنالوجی ورکشاپس، اور ایسے تعاون کے منصوبے شامل ہیں جو ہماری تکنیکی مہارتوں کو مقامی علم اور ضروریات کے ساتھ ملاتے ہیں۔ ہم یقین رکھتے ہیں کہ مضبوط کمیونٹیز مضبوط معاشروں کی طرف لے جاتی ہیں۔',
    'social.education.title': 'تعلیم اور علم کا اشتراک',
    'social.education.content1': 'ہم تعلیم کی تبدیلی کی قوت پر یقین رکھتے ہیں اور وسیع تر کمیونٹی کے ساتھ علم اور مہارت کا اشتراک کرنے کے لیے پرعزم ہیں۔ ہماری تعلیمی پہلوں میں کوڈنگ بٹ کیمپس، ٹیکنالوجی ورکشاپس، اور رہنمائی کے پروگرام شامل ہیں جو دوسروں کو تکنیکی مہارتیں تیار کرنے میں مدد کرتے ہیں۔',
    'social.education.content2': 'ہماری علم کے اشتراک کی کوششوں میں اوپن سورس تعاون، تکنیکی بلاگ پوسٹس، کانفرنس پیشکشیں، اور تعاون کی تعلیم کے مواقع شامل ہیں۔ ہم یقین رکھتے ہیں کہ علم کا اشتراک پورے ٹیکنالوجی کمیونٹی کو مضبوط بناتا ہے اور جدت کے لیے مواقع پیدا کرتا ہے۔',
    'social.ethical.title': 'اخلاقی ٹیکنالوجی کی ترقی',
    'social.ethical.content1': 'ہم ایسی ٹیکنالوجی تیار کرنے کے لیے پرعزم ہیں جو انسانی وقار کا احترام کرے، رازداری کی حفاظت کرے، اور سماجی مساوات کو فروغ دے۔ ہماری اخلاقی ترقی کے طریقوں میں رازداری بائی ڈیزائن کے اصول، تعصب کی جانچ، اور ہمارے حل کے سماجی اثرات پر غور شامل ہے۔',
    'social.ethical.content2': 'ہمارا اخلاقی فریم ورک تمام ٹیکنالوجی ترقی کے فیصلوں کی رہنمائی کرتا ہے، یقینی بناتا ہے کہ ہم اپنے حل کے ممکنہ سماجی اثرات پر غور کریں۔ ہم باقاعدہ اخلاقی جائزے کرتے ہیں اور اسٹیک ہولڈرز کے ساتھ مسلسل مکالمہ برقرار رکھتے ہیں تاکہ یقینی بنائیں کہ ہماری ٹیکنالوجی معاشرے کے بہترین مفادات کی خدمت کرے۔',
    'social.economic.title': 'ٹیکنالوجی کے ذریعے معاشی بااختیار سازی',
    'social.economic.content1': 'ہم یقین رکھتے ہیں کہ ٹیکنالوجی معاشی بااختیار سازی کے لیے ایک طاقتور آلہ ہو سکتی ہے، افراد اور کاروباروں کو نئے مواقع تک رسائی حاصل کرنے اور اپنے معاشی امکانات کو بہتر بنانے میں مدد کر سکتی ہے۔ ہمارے حل معاشی قدر پیدا کرنے اور پائیدار ترقی کو ممکن بنانے کے لیے ڈیزائن کیے گئے ہیں۔',
    'social.economic.content2': 'ہماری معاشی بااختیار سازی کی پہلوں میں چھوٹے کاروباروں کی ٹیکنالوجی کے حل کے ساتھ حمایت، نئے معاشی مواقع کو ممکن بنانے والے پلیٹ فارم بنانا، اور ایسے ٹولز تیار کرنا شامل ہیں جو افراد اور کمیونٹیز کو ڈیجیٹل معیشت میں حصہ لینے میں مدد کرتے ہیں۔',
    'social.global.title': 'عالمی شہریت اور ذمہ داری',
    'social.global.content1': 'ایک عالمی ٹیکنالوجی کمپنی کے طور پر، ہم اپنی ذمہ داری کو تسلیم کرتے ہیں کہ ہم جن کمیونٹیز میں کام کرتے ہیں اور وسیع تر عالمی معاشرے میں مثبت طور پر حصہ ڈالیں۔ ہماری عالمی شہریت کی کوششوں میں بین الاقوامی ترقی کے منصوبوں کی حمایت اور عالمی ٹیکنالوجی کے معیارات میں حصہ ڈالنا شامل ہے۔',
    'social.global.content2': 'ہم یقین رکھتے ہیں کہ ٹیکنالوجی کی کمپنیوں کی عالمی چیلنجز سے نمٹنے کے لیے اپنے وسائل اور مہارت کا استعمال کرنے کی خاص ذمہ داری ہے۔ ہماری عالمی شہریت کی پہلوں میں ترقی پذیر ممالک میں تعلیم کی حمایت، اوپن سورس منصوبوں میں حصہ ڈالنا، اور بین الاقوامی ٹیکنالوجی کے معیارات کی ترقی میں شرکت شامل ہے۔',
    // Corporate Governance Page
    'governance.badge': 'اخلاقی قیادت',
    'governance.title': 'کارپوریٹ گورننس',
    'governance.subtitle': 'ہمارا گورننس فریم ورک جو شفافیت، جوابدہی اور اخلاقی کاروباری طریقوں کو یقینی بناتا ہے جو اسٹیک ہولڈرز کے ساتھ اعتماد پیدا کرتا ہے اور پائیدار طویل مدتی کامیابی کو فروغ دیتا ہے۔',
    'governance.board.title': 'بورڈ کی قیادت اور نگرانی',
    'governance.board.content1': 'ہماری کارپوریٹ گورننس مضبوط بورڈ کی قیادت اور آزاد نگرانی کی بنیاد پر تعمیر کی گئی ہے۔ ہمارا بورڈ آف ڈائریکٹرز حکمت عملی کی رہنمائی فراہم کرتا ہے، جوابدہی کو یقینی بناتا ہے، اور ہماری گورننس پالیسیوں اور طریقہ کار کے نفاذ کی نگرانی کرتا ہے۔',
    'governance.board.content2': 'بورڈ آڈٹ، معاوضے اور گورننس کے معاملات کے لیے آزاد کمیٹیاں برقرار رکھتا ہے، یقینی بناتا ہے کہ تمام اہم فیصلے مناسب نگرانی اور جائزے کے تابع ہوں۔ ہمارا گورننس ڈھانچہ شفافیت، جوابدہی اور اسٹیک ہولڈرز کے مفادات کے ساتھ ہم آہنگی کو فروغ دیتا ہے۔',
    'governance.transparency.title': 'شفافیت اور افشا',
    'governance.transparency.content1': 'ہم اپنے تمام کاروباری عملیات اور مواصلات میں شفافیت کے اعلیٰ معیارات برقرار رکھتے ہیں۔ ہمارے افشا کے طریقوں میں مالی کارکردگی، کاروباری عملیات اور کلیدی گورننس معاملات پر باقاعدہ رپورٹنگ شامل ہے تاکہ اسٹیک ہولڈرز کو اچھی طرح آگاہ کیا جا سکے۔',
    'governance.transparency.content2': 'ہمارے شفافیت کے وعدے ہمارے کلائنٹ کے تعلقات تک پھیلے ہیں، جہاں ہم پروجیکٹ کی پیشرفت، چیلنجز اور نتائج کے بارے میں واضح مواصلات فراہم کرتے ہیں۔ ہم یقین رکھتے ہیں کہ شفاف مواصلات اعتماد پیدا کرتے ہیں اور شامل تمام فریقوں کے لیے بہتر فیصلہ سازی کو ممکن بناتے ہیں۔',
    'governance.risk.title': 'رسک مینجمنٹ اور تعمیل',
    'governance.risk.content1': 'ہم جامع رسک مینجمنٹ سسٹم برقرار رکھتے ہیں جو ہمارے کاروباری عملیات کے تمام پہلوؤں میں رسکس کو شناخت، تشخیص اور کم کرتے ہیں۔ ہمارا رسک مینجمنٹ فریم ورک باقاعدہ تشخیص، کنٹینجنسی پلاننگ اور کلیدی رسک اشاروں کی مسلسل نگرانی شامل کرتا ہے۔',
    'governance.risk.content2': 'ہمارا تعمیل کا پروگرام تمام قابل اطلاق قوانین، ضابطوں اور انڈسٹری معیارات کی پابندی کو یقینی بناتا ہے۔ ہم مضبوط اندرونی کنٹرول برقرار رکھتے ہیں اور ان تمام دائرہ اختیارات میں قانونی اور ضابطے کی ضروریات کی تعمیل کو یقینی بنانے کے لیے باقاعدہ آڈٹ کرتے ہیں جہاں ہم کام کرتے ہیں۔',
    'governance.ethics.title': 'اخلاقی کاروباری طریقے',
    'governance.ethics.content1': 'ہم اپنے ضابطہ اخلاق اور اخلاقی پالیسیوں کی رہنمائی میں اعلیٰ اخلاقی معیارات کے ساتھ کاروبار کرنے کے لیے پرعزم ہیں۔ ہمارا اخلاقی فریم ورک کاروباری عملیات کے تمام پہلوؤں کو کور کرتا ہے، کلائنٹ کے تعلقات سے لے کر ملازم کے رویے اور وینڈر شراکت داری تک۔',
    'governance.ethics.content2': 'ہمارے اخلاقی طریقوں میں منصفانہ مقابلہ، ذمہ دارانہ سورسنگ، بدعنوانی مخالف اقدامات اور خفیہ معلومات کی حفاظت شامل ہے۔ ہم تمام ملازمین کو باقاعدہ اخلاقی تربیت فراہم کرتے ہیں اور بدلہ لینے کے خوف کے بغیر اخلاقی خدشات کی رپورٹنگ کے لیے چینلز برقرار رکھتے ہیں۔',
    'governance.stakeholder.title': 'اسٹیک ہولڈر کی شمولیت اور مواصلات',
    'governance.stakeholder.content1': 'ہم اپنے تمام اسٹیک ہولڈرز کے ساتھ فعال شمولیت برقرار رکھتے ہیں، جن میں کلائنٹ، ملازمین، سرمایہ کار، شراکت دار اور وہ کمیونٹیز شامل ہیں جہاں ہم کام کرتے ہیں۔ ہماری اسٹیک ہولڈر کی شمولیت میں باقاعدہ مواصلات، فیڈ بیک کے طریقے اور تعاون کی فیصلہ سازی کے عمل شامل ہیں۔',
    'governance.stakeholder.content2': 'ہمارے مواصلات کے طریقے یقینی بناتے ہیں کہ اسٹیک ہولڈر ہماری کاروباری کارکردگی، حکمت عملی کی سمت اور کلیدی ترقی کے بارے میں آگاہ ہیں۔ ہم اسٹیک ہولڈر کے ان پٹ کو اہمیت دیتے ہیں اور اسٹیک ہولڈر کے مفادات کے ساتھ ہم آہنگی کو یقینی بنانے کے لیے اپنے فیصلہ سازی کے عمل میں فیڈ بیک کو شامل کرتے ہیں۔',
    'governance.performance.title': 'کارکردگی کی انتظام اور جوابدہی',
    'governance.performance.content1': 'ہم مضبوط کارکردگی انتظام کے نظام برقرار رکھتے ہیں جو تنظیم کے تمام سطحوں پر جوابدہی کو یقینی بناتے ہیں۔ ہمارا کارکردگی فریم ورک واضح اہداف، باقاعدہ جائزے اور اہداف کی حصول اور عدم حصول دونوں کے لیے نتائج شامل کرتا ہے۔',
    'governance.performance.content2': 'ہمارے جوابدہی کے اقدامات میں کارکردگی سے منسلک ایگزیکٹو معاوضہ، باقاعدہ بورڈ کی تشخیص اور انتظام کی اثر انگیزی کی آزاد تشخیص شامل ہے۔ ہم یقین رکھتے ہیں کہ مضبوط جوابدہی کے نظام بہتر کارکردگی کو فروغ دیتے ہیں اور تمام اسٹیک ہولڈرز کے لیے قیمت پیدا کرتے ہیں۔',
    'governance.improvement.title': 'مسلسل بہتری اور جدت طرازی',
    'governance.improvement.content1': 'ہم مسلسل اپنے گورننس کے طریقوں کو بہتر بنانے اور بدلتے ہوئے کاروباری ماحول اور اسٹیک ہولڈر کی توقعات کے ساتھ مطابقت پیدا کرنے کی کوشش کرتے ہیں۔ ہمارا گورننس فریم ورک باقاعدگی سے جائزہ لیا جاتا ہے اور اپڈیٹ کیا جاتا ہے تاکہ یقینی بنایا جا سکے کہ یہ مؤثر اور متعلقہ رہے۔',
    'governance.improvement.content2': 'ہم اپنے گورننس کے طریقوں کا انڈسٹری کے بہترین طریقوں کے ساتھ موازنہ کرتے ہیں اور مسلسل بہتری کو فروغ دینے کے لیے اسٹیک ہولڈر سے فیڈ بیک کو شامل کرتے ہیں۔ گورننس کی تعالیٰ کے لیے ہمارا عہد یقینی بناتا ہے کہ ہم پائیدار کاروباری کامیابی کو فروغ دیتے ہوئے اپنے تمام اسٹیک ہولڈرز کا اعتماد اور یقین برقرار رکھیں۔',
    // Research & Development Page
    'research.badge': 'جدت کا مرکز',
    'research.title': 'تحقیق و ترقی',
    'research.subtitle': 'ڈیجیٹل تبدیلی کے مستقبل کو تشکیل دینے والی اعلیٰ تحقیق، جدت کی پہلوں اور نئی نسل کے حل کی ترقی کے ذریعے ٹیکنالوجی کو آگے بڑھانے کا ہمارا عہد۔',
    'research.strategy.title': 'جدت کی حکمت عملی اور وژن',
    'research.strategy.content1': 'ہماری تحقیق و ترقی کی حکمت عملی ایسے ٹیکنالوجی حل تخلیق کرنے کے وژن سے چلتی ہے جو نہ صرف آج کی ضروریات کو پورا کرتے ہیں بلکہ کل کے چیلنجز کا اندازہ لگاتے اور ان سے نمٹتے ہیں۔ ہم ٹیکنالوجی کی جدت کے محاذ پر اپنی پوزیشن برقرار رکھنے کے لیے تحقیق و ترقی میں نمایاں سرمایہ کاری کرتے ہیں۔',
    'research.strategy.content2': 'ہمارا جدت کا نقطہ نظر بنیادی تحقیق کو عملی ترقی کے ساتھ جوڑتا ہے، یقینی بناتا ہے کہ ہماری دریافتیں عملی حل میں تبدیل ہوں جو ہمارے کلائنٹس اور معاشرے کو فائدہ پہنچائیں۔ ہم ابھرتی ہوئی ٹیکنالوجیز پر توجہ مرکوز کرتے ہیں جن میں صنعتوں کو تبدیل کرنے اور نئے مواقع پیدا کرنے کی صلاحیت ہے۔',
    'research.emerging.title': 'ابھرتی ہوئی ٹیکنالوجی تحقیق',
    'research.emerging.content1': 'ہم مصنوعی ذہانت، مشین لرننگ، بلاک چین، کوانٹم کمپیوٹنگ اور جدید تجزیات سمیت ابھرتی ہوئی ٹیکنالوجیز کو فعال طور پر تحقیق کرتے ہیں۔ ہماری تحقیق کی ٹیمیں نئے الگورتھم تیار کرنے، موجودہ ٹیکنالوجیز کو بہتر بنانے اور جدت پسند ایپلی کیشنز تخلیق کرنے پر کام کرتی ہیں۔',
    'research.emerging.content2': 'ہماری تحقیق کی پہلوں میں ایج کمپیوٹنگ کی صلاحیتوں کی تلاش، پائیدار ٹیکنالوجی حل کی تحقیق، اور سائبر سیکیورٹی اور ڈیٹا پرائیویسی کے لیے نئے طریقے تیار کرنا شامل ہے۔ ہم ٹیکنالوجی کو آگے بڑھانے کے لیے تعلیمی اداروں اور تحقیق کے اداروں کے ساتھ تعاون کرتے ہیں۔',
    'research.development.title': 'پروڈکٹ ڈویلپمنٹ اور پروٹوٹائپنگ',
    'research.development.content1': 'ہمارا پروڈکٹ ڈویلپمنٹ کا عمل جدت پسند حل تخلیق کرنے کے لیے سخت تحقیق کو چست ڈویلپمنٹ کے طریقوں کے ساتھ جوڑتا ہے۔ ہم تصورات کی تصدیق اور بڑے پیمانے پر عمل درآمد سے پہلے پروڈکٹس کو بہتر بنانے کے لیے تیز پروٹوٹائپنگ اور بار بار دہرائی جانے والی ڈویلپمنٹ استعمال کرتے ہیں۔',
    'research.development.content2': 'ہماری ڈویلپمنٹ ٹیمیں یقینی بنانے کے لیے کلائنٹس اور اختتامی صارفین کے ساتھ قریبی طور پر کام کرتی ہیں کہ ہمارے پروڈکٹس حقیقی دنیا کی ضروریات کو پورا کریں اور ٹھوس قیمت فراہم کریں۔ ہم ٹیکنالوجی طور پر اعلیٰ اور صارف دوست حل تخلیق کرنے کے لیے صارف مرکوز ڈیزائن کے اصول اور مسلسل فیڈ بیک لوپ استعمال کرتے ہیں۔',
    'research.sustainable.title': 'پائیدار ٹیکنالوجی ڈویلپمنٹ',
    'research.sustainable.content1': 'ہماری تحقیق و ترقی کی کوششوں کا ایک اہم حصہ پائیدار ٹیکنالوجی حل تیار کرنے پر مرکوز ہے جو کارکردگی اور کارکردگی کو زیادہ سے زیادہ کرتے ہوئے ماحولیاتی اثر کو کم سے کم کرتے ہیں۔ ہم گرین کمپیوٹنگ تکنیک، توانائی سے موثر الگورتھم اور پائیدار سافٹ ویئر آرکیٹیکچر تحقیق کرتے ہیں۔',
    'research.sustainable.content2': 'ہماری پائیدار ترقی کی پہلوں میں کاربن نیوٹرل ایپلی کیشنز تخلیق کرنا، کلاؤڈ وسائل کے استعمال کو بہتر بنانا، اور ایسی ٹیکنالوجیز تیار کرنا شامل ہے جو دوسرے اداروں کو اپنے ماحولیاتی اثرات کو کم کرنے میں مدد کرتی ہیں۔ ہم یقین رکھتے ہیں کہ ٹیکنالوجی ماحولیاتی خیر کے لیے ایک قوت ہونی چاہیے۔',
    'research.collaboration.title': 'تعاون اور شراکت داری',
    'research.collaboration.content1': 'ہم تحقیق کو آگے بڑھانے اور علم کا اشتراک کرنے کے لیے یونیورسٹیوں، تحقیق کے اداروں، ٹیکنالوجی کمپنیوں اور انڈسٹری کے اداروں کے ساتھ فعال طور پر تعاون کرتے ہیں۔ ہماری شراکت داری ہمیں اعلیٰ تحقیق تک رسائی، وسائل کا اشتراک اور جدت کو تیز کرنے کا موقع فراہم کرتی ہے۔',
    'research.collaboration.content2': 'ہمارا تعاون کا نقطہ نظر مشترکہ تحقیق کے منصوبے، ٹیکنالوجی ٹرانسفر پروگرام اور انڈسٹری کے کنسورشیم میں شرکت شامل ہے۔ ہم یقین رکھتے ہیں کہ بہترین جدت مختلف نقطہ ہائے نظر اور تعاون کی کوششوں سے آتی ہے جو مختلف مہارت کے شعبوں کو جوڑتی ہے۔',
    'research.ip.title': 'فکری ملکیت اور جدت کی حفاظت',
    'research.ip.content1': 'ہم پیٹنٹس، ٹریڈ مارکس اور تجارتی رازوں سمیت حکمت عملی فکری ملکیت کے انتظام کے ذریعے اپنی جدت کی حفاظت کرتے ہیں۔ ہماری فکری ملکیت کی حکمت عملی جہاں مناسب ہو جدت کی حفاظت کو کھلے تعاون اور علم کے اشتراک کے ساتھ توازن میں رکھتی ہے۔',
    'research.ip.content2': 'ہم اوپن سورس منصوبوں میں بھی حصہ ڈالتے ہیں اور تحقیق کے نتائج کا اشتراک کرتے ہیں جو وسیع تر ٹیکنالوجی کمیونٹی کو فائدہ پہنچا سکتے ہیں۔ فکری ملکیت کے انتظام کے لیے ہمارا نقطہ نظر ٹیکنالوجی کو آگے بڑھانے کے ہمارے عہد کو ظاہر کرتا ہے جبکہ ہمارے مقابلہ جاتی فوائد اور جدت میں سرمایہ کاری کی حفاظت کرتے ہیں۔',
    'research.roadmap.title': 'مستقبل کی ٹیکنالوجی روڈ میپ',
    'research.roadmap.content1': 'ہمارا تحقیق و ترقی کا روڈ میپ ان ٹیکنالوجیز پر مرکوز ہے جو آنے والے سالوں میں اہم ہوں گی، جن میں مصنوعی ذہانت، کوانٹم کمپیوٹنگ، ایج کمپیوٹنگ اور نئی نسل کی نیٹ ورکنگ ٹیکنالوجیز شامل ہیں۔ ہم تدریجی بہتری اور انقلابی جدت دونوں میں سرمایہ کاری کرتے ہیں۔',
    'research.roadmap.content2': 'ہم یقینی بنانے کے لیے ٹیکنالوجی کے رجحانات اور مارکیٹ کی ترقی کو مسلسل نگرانی کرتے ہیں کہ ہمارے تحقیق و ترقی کے سرمایہ کاری مستقبل کے مواقع اور کلائنٹ کی ضروریات کے ساتھ ہم آہنگ ہوں۔ ہمارا لچکدار تحقیق کا نقطہ نظر ہمیں نئے مواقعوں کے ساتھ تیزی سے ہم آہنگ ہونے اور جب امید افزا نئی ٹیکنالوجیز سامنے آئیں تو اپنی کوششوں کو موڑنے کا موقع فراہم کرتا ہے۔',
    'research.impact.title': 'اثر اور کامیابی کی پیمائش',
    'research.impact.content1': 'ہم اپنی تحقیق و ترقی کی کوششوں کی کامیابی کو مقداری پیمائش اور معیاری تشخیص کے ذریعے ماپتے ہیں۔ ہمارا تشخیصی فریم ورک جدت کی پیداوار، ٹیکنالوجی کی اپنایا جانا، کلائنٹ کی اطمینان اور وسیع تر ٹیکنالوجی ایکو سسٹم میں حصہ شامل ہے۔',
    'research.impact.content2': 'تحقیق و ترقی میں مسلسل بہتری کے لیے ہمارا عہد یقینی بناتا ہے کہ ہم انڈسٹری کی ترقی میں حصہ ڈالتے ہوئے ٹیکنالوجی لیڈر کے طور پر اپنی پوزیشن برقرار رکھیں۔ ہم باقاعدگی سے اپنی تحقیق کی ترجیحات کا جائزہ لیتے ہیں اور اثر اور قیمت کی تخلیق کو زیادہ سے زیادہ کرنے کے لیے اپنے سرمایہ کاری کو ایڈجسٹ کرتے ہیں۔'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations['EN'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
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
