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
} from "react-icons/fa";

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

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo" aria-label="Site Footer">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              We create cutting-edge digital solutions for businesses looking to
              make an impact in the digital world.
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
                href="https://www.linkedin.com/in/hamza-hafeez-00937436a/"
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
                text="upvistadigital@gmail.com"
              />
              <ContactItem icon={<FaPhoneAlt />} text="+92 332 0486955" />
              <ContactItem
                icon={<FaWhatsapp />}
                text="WhatsApp Us"
                href="https://wa.me/923320486955"
              />
            </div>
          </div>
        </div>
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

export default Footer;
