"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
import Logoimg from "../assets/u.png";

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

const paymentMethods = [
  {
    name: "Payoneer",
    img: "/assets/payments/payoneer.jpg",
    details: (
      <div>
        <h4 className="text-lg font-bold mb-2">Payoneer</h4>
        <p className="text-gray-300 mb-1">Account Name: Upvista Digital</p>
        <p className="text-gray-300 mb-1">Email: upvistadigital@gmail.com</p>
        <p className="text-gray-300">Payoneer ID: will be provided by inquiry</p>
      </div>
    ),
  },
  {
    name: "Bank Transfer",
    img: "/assets/payments/bank.jpg",
    details: (
      <div>
        <h4 className="text-lg font-bold mb-2">Bank Transfer</h4>
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
    name: "JazzCash",
    img: "/assets/payments/jazzcash.png",
    details: (
      <div>
         <h4 className="text-lg font-bold mb-2">JazzCash</h4>
        <p className="text-gray-300 mb-1">Account Name: Upvista Digital</p>
        <p className="text-gray-300 mb-1">Mobile Number: will be provided by inquiry</p>
        <p className="text-gray-300"></p>
      </div>
    ),
  },
  {
    name: "EasyPaisa",
    img: "/assets/payments/easypaisa2.png",
    details: (
      <div>
        <h4 className="text-lg font-bold mb-2">EasyPaisa</h4>
        <p className="text-gray-300 mb-1">Account Name: Upvista Digital</p>
        <p className="text-gray-300 mb-1">Mobile Number: will be provided by inquiry</p>
        <p className="text-gray-300"></p>
      </div>
    ),
  },
];

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedPayment, setSelectedPayment] = React.useState<number | null>(null);

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo" aria-label="Site Footer">
      {/* Palestine Support Banner */}
      <div className="bg-gradient-to-r from-red-600 via-white to-green-600 text-center py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-black font-semibold text-sm sm:text-base">
              🇵🇸 Upvista stands with Palestine and its people
            </span>
            <Link 
              href="/pages/stand-with-palestine"
              className="bg-black/80 hover:bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 border border-white/20"
            >
              Join Us 
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-15 w-15">
                <Image
                  src={Logoimg}
                  alt="Agency Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Upvista</h3>
            </div>
            <p className="text-gray-400 text-sm">
            Upvista: Agency. Community. Trainings. Vision. We don’t just build digital solutions, we build the future. Join the movement.
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
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 after:bg-purple-600">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/pages/about">About Us</FooterLink>
              <FooterLink href="/pages/community">Community</FooterLink>
              <FooterLink href="/pages/services">Services</FooterLink>
              <FooterLink href="/pages/portfolio">Portfolio</FooterLink>
              <FooterLink href="/pages/blog">Blog</FooterLink>
              <FooterLink href="/pages/faq">Q&A</FooterLink>
              <FooterLink href="/pages/partners">Partners</FooterLink>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 after:bg-purple-600">
              Contact Us
            </h3>
            <div className="space-y-3">
              <ContactItem
                icon={<FaEnvelope />}
                text="info@upvistadigital.com"
              />
              <ContactItem icon={<FaPhoneAlt />} text="+92 332 0486955" />
              <ContactItem
                icon={<FaWhatsapp />}
                text="WhatsApp Us"
                href="https://wa.me/923320486955"
              />
              <ContactItem
                icon={<FaLinkedinIn />}
                text="LinkedIn Us"
                href="https://www.linkedin.com/in/hamza-hafeez-b0233731a"
              />
              <ContactItem
                icon={<FaFacebookMessenger />}
                text="Messenger Us"
                href="https://m.me/61576935582300?source=qr_link_share"
              />
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className="space-y-4 md:col-span-1 flex flex-col items-start md:items-end md:pr-8 md:max-w-xs w-full">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 after:bg-purple-600">
              Payments
            </h3>
            <ul className="space-y-2 w-full">
              {[...paymentMethods, ...landscapePayments].map((method, idx) => (
                <li key={method.name}>
                <button
                    className="text-purple-300 hover:text-white font-semibold text-base w-full text-left py-2 px-2 rounded-lg transition-all duration-200 bg-gray-800/60 hover:bg-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onClick={() => { setSelectedPayment(idx); setModalOpen(true); }}
                >
                    {method.name}
                </button>
                </li>
              ))}
            </ul>
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
      <div className="border-t border-gray-800 mt-12" role="region" aria-label="Copyright and Policies">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 Upvista Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/pages/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/pages/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
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
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

// Footer Link Component
const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className="text-gray-400 hover:text-white relative overflow-hidden group flex items-center">
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
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
  return (
    <div className="flex items-center space-x-3">
      <div className="text-purple-500">{icon}</div>
      {href ? (
        <a
          href={href}
          className="text-gray-400 hover:text-white transition-colors duration-300"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {text}
        </a>
      ) : (
        <span className="text-gray-400">{text}</span>
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
