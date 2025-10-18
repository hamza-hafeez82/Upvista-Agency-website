"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { useCareersLanguage } from "../contexts/CareersLanguageContext";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,   
} from "react-icons/fa";

// Import your logo
// Image loaded directly from public folder to bypass Sharp
const Logoimg = "/assets/u.png";

// TypeScript interfaces
interface SocialIconProps {
  icon: React.ReactNode;
  href?: string;
  isDark: boolean;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  isDark: boolean;
}

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
  isDark: boolean;
}

export default function CareersFooter() {
  const { isDark } = useTheme();
  const { t } = useCareersLanguage();
  
  return (
    <footer className={`${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-gray-900'}`} role="contentinfo" aria-label="Careers Site Footer">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative h-12 w-12">
                <Image
                  src={Logoimg}
                  alt="Upvista Digital Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.footer.companyName')}</h3>
                <p className={`text-sm font-medium ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>{t('careers.footer.recruitmentSite')}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <SocialIcon
                icon={<FaFacebookF />}
                href="https://www.facebook.com/share/1AAjzK33pz/"
                isDark={isDark}
              />
              <SocialIcon
                icon={<FaTwitter />}
                href="https://x.com/Upvista_Digital/"
                isDark={isDark}
              />
              <SocialIcon
                icon={<FaInstagram />}
                href="https://www.instagram.com/upvista_digital/"
                isDark={isDark}
              />
              <SocialIcon
                icon={<FaLinkedinIn />}
                href="https://www.linkedin.com/in/hamza-hafeez-b0233731a"
                isDark={isDark}
              />
              <SocialIcon
                icon={<FaGithub />}
                href="https://github.com/Upvista"
                isDark={isDark}
              />
              <SocialIcon
                icon={<FaDiscord />}
                href="https://discord.gg/96XN8R4y"
                isDark={isDark}
              />
            </div>
            <div className="space-y-3 text-sm pl-4">
              <FooterLink href="/careers/policies/personal-information" isDark={isDark}>{t('careers.footer.policies.personalInfo')}</FooterLink>
              <FooterLink href="/careers/policies/application-terms" isDark={isDark}>{t('careers.footer.policies.applicationTerms')}</FooterLink>
              <FooterLink href="/careers/policies/privacy-notice" isDark={isDark}>{t('careers.footer.policies.privacyNotice')}</FooterLink>
              <FooterLink href="/careers/policies/employment-rules" isDark={isDark}>{t('careers.footer.policies.employmentRules')}</FooterLink>
              <FooterLink href="/careers/policies/data-protection" isDark={isDark}>{t('careers.footer.policies.dataProtection')}</FooterLink>
              <FooterLink href="/careers/legal/trademark-copyright" isDark={isDark}>{t('careers.footer.policies.trademark')}</FooterLink>
              <FooterLink href="/careers/legal/terms-conditions" isDark={isDark}>{t('careers.footer.policies.terms')}</FooterLink>
              <FooterLink href="/careers/legal/privacy-policy" isDark={isDark}>{t('careers.footer.policies.privacy')}</FooterLink>
              <FooterLink href="/careers/support/faq" isDark={isDark}>{t('careers.footer.policies.faq')}</FooterLink>
            </div>
          </div>

          {/* Learn the Basics */}
          <div className="space-y-5">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.footer.basics.title')}</h3>
            <ul className="space-y-3">
              <FooterLink href="/careers/basics" isDark={isDark}>{t('careers.footer.basics.upvistaIn3')}</FooterLink>
              <FooterLink href="/careers/basics" isDark={isDark}>{t('careers.footer.basics.philosophy')}</FooterLink>
              <FooterLink href="/careers/basics" isDark={isDark}>{t('careers.footer.basics.ceoMessage')}</FooterLink>
              <FooterLink href="/careers/basics" isDark={isDark}>{t('careers.footer.basics.disabilities')}</FooterLink>
              <FooterLink href="/careers/basics" isDark={isDark}>{t('careers.footer.basics.recruitment')}</FooterLink>
              <FooterLink href="/careers/basics" isDark={isDark}>{t('careers.footer.basics.graduates')}</FooterLink>
            </ul>
          </div>

          {/* Learn About the Business */}
          <div className="space-y-5">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.footer.business.title')}</h3>
            <ul className="space-y-3">
              <FooterLink href="/careers/business" isDark={isDark}>{t('careers.footer.business.strategy')}</FooterLink>
              <FooterLink href="/careers/business" isDark={isDark}>{t('careers.footer.business.products')}</FooterLink>
              <FooterLink href="/careers/business" isDark={isDark}>{t('careers.footer.business.globalStrategy')}</FooterLink>
              <FooterLink href="/careers/business" isDark={isDark}>{t('careers.footer.business.teamwork')}</FooterLink>
            </ul>
          </div>

          {/* Learn About the Job */}
          <div className="space-y-5">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.footer.jobs.title')}</h3>
            <ul className="space-y-3">
              <FooterLink href="/careers/jobs" isDark={isDark}>{t('careers.footer.jobs.teamIntro')}</FooterLink>
              <FooterLink href="/careers/jobs" isDark={isDark}>{t('careers.footer.jobs.infrastructure')}</FooterLink>
              <FooterLink href="/careers/jobs" isDark={isDark}>{t('careers.footer.jobs.sales')}</FooterLink>
              <FooterLink href="/careers/jobs" isDark={isDark}>{t('careers.footer.jobs.customerService')}</FooterLink>
              <FooterLink href="/careers/jobs" isDark={isDark}>{t('careers.footer.jobs.marketing')}</FooterLink>
              <FooterLink href="/careers/jobs" isDark={isDark}>{t('careers.footer.jobs.consulting')}</FooterLink>
              <FooterLink href="/careers/jobs" isDark={isDark}>{t('careers.footer.jobs.corporate')}</FooterLink>
            </ul>
          </div>

          {/* Application Guidelines and Entry */}
          <div className="space-y-5">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.footer.application.title')}</h3>
            <ul className="space-y-3">
              <FooterLink href="/careers/apply" isDark={isDark}>{t('careers.footer.application.newGraduate')}</FooterLink>
              <FooterLink href="/careers/apply" isDark={isDark}>{t('careers.footer.application.career')}</FooterLink>
              <FooterLink href="/careers/apply" isDark={isDark}>{t('careers.footer.application.disabilities')}</FooterLink>
              <FooterLink href="/careers/apply" isDark={isDark}>{t('careers.footer.application.potential')}</FooterLink>
              <FooterLink href="/careers/apply" isDark={isDark}>{t('careers.footer.application.partTime')}</FooterLink>
            </ul>
          </div>

                 {/* Contact Us */}
                 <div className="space-y-5">
                   <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('careers.footer.contact.title')}</h3>
                   <div className="space-y-4">
                     <ContactItem
                       icon={<FaEnvelope />}
                       text="careers@upvistadigital.com"
                       href="mailto:careers@upvistadigital.com"
                       isDark={isDark}
                     />
                     <ContactItem
                       icon={<FaPhoneAlt />}
                       text="+92 (0) 3320486955"
                       href="tel:+923320486955"
                       isDark={isDark}
                     />
                     <ContactItem
                       icon={<FaLinkedinIn />}
                       text="LinkedIn"
                       href="https://www.linkedin.com/company/upvista-digital/"
                       isDark={isDark}
                     />
                     <ContactItem
                       icon={<FaWhatsapp />}
                       text="WhatsApp"
                       href="https://wa.me/923320486955"
                       isDark={isDark}
                     />
                     <ContactItem
                       icon={<FaFacebook />}
                       text="Facebook"
                       href="https://www.facebook.com/share/1aHCQiSTB3/"
                       isDark={isDark}
                     />
                   </div>
                   
                   {/* Company Image */}
                   <div className="mt-6">
                     <div className={`relative w-full h-48 rounded-lg overflow-hidden border ${
                       isDark ? 'border-purple-500/20' : 'border-blue-500/20'
                     }`}>
                       <Image
                         src="/assets/pvista Digital.jpeg"
                         alt="Upvista Digital"
                         fill
                         className="object-cover hover:scale-105 transition-transform duration-300"
                       />
                       <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
                         isDark ? 'from-black/70' : 'from-white/70'
                       }`}></div>
                       <div className={`absolute bottom-4 left-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                         <h4 className="text-lg font-bold">{t('careers.footer.companyName')}</h4>
                         <p className={`text-sm ${isDark ? 'text-purple-300' : 'text-blue-600'}`}>{t('careers.footer.buildingFuture')}</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
      </div>

      {/* Copyright Section */}
      <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-300'}`} role="region" aria-label="Copyright and Policies">
        <div className="container mx-auto px-6 py-6">
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t('careers.footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

// Social Media Icon Component
const SocialIcon: React.FC<SocialIconProps> = ({ icon, href = "#", isDark }) => {
  return (
    <a
      href={href}
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
        isDark 
          ? 'bg-gray-800 hover:bg-purple-600' 
          : 'bg-gray-200 hover:bg-blue-600 hover:text-white'
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

// Footer Link Component
const FooterLink: React.FC<FooterLinkProps> = ({ href, children, isDark }) => {
  return (
    <div>
      <Link href={href} className={`text-sm transition-colors duration-300 block ${
        isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
      }`}>
        {children}
      </Link>
    </div>
  );
};

// Contact Item Component
const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href, isDark }) => {
  const content = (
    <div className={`flex items-center space-x-3 transition-colors duration-300 ${
      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
    }`}>
      <div className={isDark ? 'text-purple-400' : 'text-blue-600'}>{icon}</div>
      <span className="text-sm">{text}</span>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
};
