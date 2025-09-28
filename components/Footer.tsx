"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
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
  FaFacebookMessenger,
} from "react-icons/fa";
import { SiPatreon } from "react-icons/si";

// Import your logo
//import Logoimg from "../assets/W-logo.png";
// Image loaded directly from public folder to bypass Sharp
const Logoimg = "/assets/u.png";

// TypeScript interfaces
interface SocialIconProps {
  icon: React.ReactNode;
  href?: string;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const paymentMethods = [
    {
      name: t('footer.payoneer'),
      img: "/assets/payments/payoneer.jpg",
      details: (
        <div>
          <h4 className="text-lg font-bold mb-2">{t('footer.payoneer')}</h4>
          <p className="text-gray-300 mb-1">Account Name: Upvista Digital</p>
          <p className="text-gray-300 mb-1">Email: upvistadigital@gmail.com</p>
          <p className="text-gray-300">Payoneer ID: will be provided by inquiry</p>
        </div>
      ),
    },
    {
      name: t('footer.bankTransfer'),
      img: "/assets/payments/bank.jpg",
      details: (
        <div>
          <h4 className="text-lg font-bold mb-2">{t('footer.bankTransfer')}</h4>
          <p className="text-gray-300 mb-1">Bank: United Bank Limited</p>
          <p className="text-gray-300 mb-1">Account Name: Upvista Digital</p>
          <p className="text-gray-300 mb-1">Account #: will be provided by inquiry</p>
          <p className="text-gray-300">IBAN & SWIFT: will be provided by inquiry</p>
        </div>
      ),
    },
  ];

  const landscapePayments = [
    {
      name: t('footer.jazzCash'),
      img: "/assets/payments/jazzcash.png",
      details: (
        <div>
           <h4 className="text-lg font-bold mb-2">{t('footer.jazzCash')}</h4>
          <p className="text-gray-300 mb-1">Account Name: Upvista Digital</p>
          <p className="text-gray-300 mb-1">Mobile Number: will be provided by inquiry</p>
          <p className="text-gray-300"></p>
        </div>
      ),
    },
    {
      name: t('footer.easyPaisa'),
      img: "/assets/payments/easypaisa2.png",
      details: (
        <div>
          <h4 className="text-lg font-bold mb-2">{t('footer.easyPaisa')}</h4>
          <p className="text-gray-300 mb-1">Account Name: Upvista Digital</p>
          <p className="text-gray-300 mb-1">Mobile Number: will be provided by inquiry</p>
          <p className="text-gray-300"></p>
        </div>
      ),
    },
  ];
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedPayment, setSelectedPayment] = React.useState<number | null>(null);

  return (
    <footer className={`relative overflow-hidden ${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-gray-900'}`} role="contentinfo" aria-label="Site Footer">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl ${
          isDark ? 'bg-purple-600/20' : 'bg-gradient-to-br from-blue-400/25 to-purple-500/20'
        }`}></div>
        <div className={`absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl ${
          isDark ? 'bg-indigo-600/20' : 'bg-gradient-to-br from-indigo-500/25 to-violet-600/20'
        }`}></div>
        <div className={`absolute top-1/4 left-1/3 h-80 w-80 rounded-full blur-3xl ${
          isDark ? 'bg-violet-800/15' : 'bg-gradient-to-br from-purple-400/20 to-pink-400/15'
        }`}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 ${
        isDark 
          ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"
          : "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMTUsMjMsNDIsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDE1LDIzLDQyLDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"
      }`}></div>

      {/* Palestine Support Banner */}
      <div className="bg-gradient-to-r from-red-600 via-white to-green-600 text-center py-3 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-black font-semibold text-sm sm:text-base">
              🇵🇸 {t('home.palestine.title')}
            </span>
            <Link 
              href="/pages/stand-with-palestine"
              className="bg-black/80 hover:bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 border border-white/20"
            >
              {t('home.join.title')} 
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-3 space-y-4">
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
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Upvista Digital</h3>
                <p className={`text-sm font-medium ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>Solutions</p>
              </div>
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon
                icon={<FaFacebookF />}
                href="https://www.facebook.com/share/1AAjzK33pz/"
              />
              <SocialIcon
                icon={<FaInstagram />}
                href="https://www.instagram.com/upvista_digital/"
              />
              <SocialIcon
                icon={<FaLinkedinIn />}
                href="https://www.linkedin.com/in/hamza-hafeez-b0233731a"
              />
              <SocialIcon
                icon={<FaTwitter />}
                href="https://x.com/Upvista_Digital/"
              />
              <SocialIcon
                icon={<FaGithub />}
                href="https://github.com/Upvista"
              />
              <SocialIcon
                icon={<FaDiscord />}
                href="https://discord.gg/96XN8R4y"
              />
              <SocialIcon
                icon={<SiPatreon />}
                href="https://www.patreon.com/Upvista_Digital?utm_campaign=creatorshare_creator"
              />
            </div>
            
            {/* Payment Methods */}
            <div className="space-y-3 pt-6">
              <h4 className={`text-sm font-semibold ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>{t('footer.paymentMethods')}</h4>
              <div className="grid grid-cols-2 gap-2">
                {[...paymentMethods, ...landscapePayments].map((method, idx) => (
                  <button
                    key={method.name}
                    className={`font-semibold text-xs w-full text-left py-2 px-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 ${
                      isDark 
                        ? 'text-purple-300 hover:text-white bg-gray-800/60 hover:bg-purple-700/30 focus:ring-purple-500'
                        : 'text-blue-700 hover:text-white bg-white/80 hover:bg-blue-600 border border-blue-200 focus:ring-blue-500'
                    }`}
                    onClick={() => { setSelectedPayment(idx); setModalOpen(true); }}
                  >
                    {method.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('footer.company')}</h3>
            <ul className="space-y-3">
              <FooterLink href="/About">{t('footer.aboutUs')}</FooterLink>
              <FooterLink href="/company/profile">{t('footer.companyProfile')}</FooterLink>
              <FooterLink href="/company/sustainability">{t('footer.sustainability')}</FooterLink>
              <FooterLink href="/company/investors">{t('footer.investorRelations')}</FooterLink>
              <FooterLink href="/company/partners">{t('footer.partnerships')}</FooterLink>
              <FooterLink href="/company/leadership">{t('footer.leadership')}</FooterLink>
              <FooterLink href="/contact">{t('footer.contactUs')}</FooterLink>
              <FooterLink href="/careers">{t('footer.careers')}</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('footer.services')}</h3>
            <ul className="space-y-3">
              <FooterLink href="/Services">{t('footer.allServices')}</FooterLink>
              <FooterLink href="/Services/software-development">{t('footer.softwareDevelopment')}</FooterLink>
              <FooterLink href="/Services/web-development">{t('footer.webDevelopment')}</FooterLink>
              <FooterLink href="/Services/ai-automation">{t('footer.aiAutomation')}</FooterLink>
              <FooterLink href="/Services/cloud">{t('footer.cloudSolutions')}</FooterLink>
              <FooterLink href="/Services/designing">{t('footer.graphicsDesign')}</FooterLink>
              <FooterLink href="/Services/marketing">{t('footer.digitalMarketing')}</FooterLink>
              <FooterLink href="/Consult">{t('footer.consultService')}</FooterLink>
            </ul>
          </div>

          {/* Community & Resources */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('footer.communityResources')}</h3>
            <ul className="space-y-3">
              <FooterLink href="/community/about">{t('footer.aboutCommunity')}</FooterLink>
              <FooterLink href="/community/events">{t('footer.events')}</FooterLink>
              <FooterLink href="/community/members">{t('footer.communityMembers')}</FooterLink>
              <FooterLink href="/pages/trainings">{t('footer.trainings')}</FooterLink>
              <FooterLink href="/Researches">{t('footer.research')}</FooterLink>
              <FooterLink href="/Researches/project-cortex">{t('footer.projectCortex')}</FooterLink>
              <FooterLink href="/pages/blog">{t('footer.blog')}</FooterLink>
              <FooterLink href="/pages/faq">{t('footer.faq')}</FooterLink>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('footer.contactUs')}</h3>
            <div className="space-y-4">
              <ContactItem
                icon={<FaEnvelope />}
                text="info@upvistadigital.com"
                href="mailto:info@upvistadigital.com"
              />
              <ContactItem
                icon={<FaEnvelope />}
                text="support@upvistadigital.com"
                href="mailto:info@upvistadigital.com"
              />
              <ContactItem
                icon={<FaEnvelope />}
                text="careers@upvistadigital.com"
                href="mailto:info@upvistadigital.com"
              />
              <ContactItem 
                icon={<FaPhoneAlt />} 
                text="+92 (0) 3320 486955" 
                href="tel:+923320486955"
              />
              <ContactItem
                icon={<FaWhatsapp />}
                text={t('footer.whatsappUs')}
                href="https://wa.me/923320486955"
              />
              <ContactItem
                icon={<FaLinkedinIn />}
                text={t('footer.linkedinUs')}
                href="https://www.linkedin.com/in/hamza-hafeez-b0233731a"
              />
              <ContactItem
                icon={<FaFacebookMessenger />}
                text={t('footer.messengerUs')}
                href="https://m.me/61576935582300?source=qr_link_share"
              />
            </div>
          </div>
        </div>
        {/* Payment Modal */}
        {modalOpen && selectedPayment !== null && (
          <PaymentModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title={
              selectedPayment < paymentMethods.length
                ? paymentMethods[selectedPayment].name
                : landscapePayments[selectedPayment - paymentMethods.length].name
            }
          >
            {selectedPayment < paymentMethods.length
              ? paymentMethods[selectedPayment].details
              : landscapePayments[selectedPayment - paymentMethods.length].details}
          </PaymentModal>
        )}
      </div>

      {/* Copyright Section */}
      <div className={`border-t mt-12 relative z-10 ${isDark ? 'border-gray-800' : 'border-gray-300'}`} role="region" aria-label="Copyright and Policies">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`text-sm text-center sm:text-left ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('footer.copyright')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
              <Link
                href="/pages/terms"
                className={`text-sm transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                {t('footer.termsConditions')}
              </Link>
              <Link
                href="/pages/privacy"
                className={`text-sm transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                {t('footer.privacyPolicy')}
              </Link>
              <Link
                href="/careers/legal/trademark-copyright"
                className={`text-sm transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                {t('footer.trademarkCopyright')}
              </Link>
              <Link
                href="/careers/policies/data-protection"
                className={`text-sm transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                {t('footer.dataProtection')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Media Icon Component
const SocialIcon: React.FC<SocialIconProps> = ({ icon, href = "#" }) => {
  const { isDark } = useTheme();
  
  return (
    <a
      href={href}
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
        isDark 
          ? 'bg-gray-800 hover:bg-purple-600 text-white' 
          : 'bg-white hover:bg-blue-600 text-gray-700 hover:text-white shadow-lg border border-gray-200'
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

// Footer Link Component
const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  const { isDark } = useTheme();
  
  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className={`relative overflow-hidden group flex items-center ${
          isDark 
            ? 'text-gray-400 hover:text-white' 
            : 'text-gray-600 hover:text-blue-700'
        }`}>
          <span className={`absolute left-0 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
            isDark ? 'bg-purple-500' : 'bg-blue-500'
          }`}></span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            {children}
          </span>
        </a>
      </Link>
    </li>
  );
};

// Contact Item Component
const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href }) => {
  const { isDark } = useTheme();
  
  return (
    <div className="flex items-center space-x-3">
      <div className={`${isDark ? 'text-purple-500' : 'text-blue-600'}`}>{icon}</div>
      {href ? (
        <a
          href={href}
          className={`transition-colors duration-300 ${
            isDark 
              ? 'text-gray-400 hover:text-white' 
              : 'text-gray-600 hover:text-blue-700'
          }`}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {text}
        </a>
      ) : (
        <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{text}</span>
      )}
    </div>
  );
};

// Simple PaymentModal component (inline for this file)
const PaymentModal = ({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 border border-purple-500 rounded-2xl shadow-2xl p-6 w-[22rem] max-w-full relative animate-fade-in mx-4">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl font-bold focus:outline-none"
          aria-label="Close payment details"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">{title}</h3>
        <div className="text-gray-200 text-base space-y-1 text-center">{children}</div>
      </div>
    </div>
  );
};

export default Footer;
