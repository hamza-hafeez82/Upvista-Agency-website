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
  FaFacebook,   
} from "react-icons/fa";

// Import your logo
import Logoimg from "../../../assets/u.png";

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

export default function CareersFooter() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo" aria-label="Careers Site Footer">
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
                <h3 className="text-lg font-bold text-white">Upvista Digital</h3>
                <p className="text-purple-400 text-sm font-medium">Recruitment Site</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <SocialIcon
                icon={<FaFacebookF />}
                href="https://www.facebook.com/share/1AAjzK33pz/"
              />
              <SocialIcon
                icon={<FaTwitter />}
                href="https://x.com/Upvista_Digital/"
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
                icon={<FaGithub />}
                href="https://github.com/Upvista"
              />
              <SocialIcon
                icon={<FaDiscord />}
                href="https://discord.gg/96XN8R4y"
              />
            </div>
            <div className="space-y-3 text-sm pl-4">
              <FooterLink href="/careers/policies/personal-information">Handling of personal information in recruitment activities</FooterLink>
              <FooterLink href="/careers/policies/application-terms">Recruitment Application Terms</FooterLink>
              <FooterLink href="/careers/policies/privacy-notice">Recruitment Privacy Notice</FooterLink>
              <FooterLink href="/careers/policies/employment-rules">Rules regarding Applying for Employment</FooterLink>
              <FooterLink href="/careers/policies/data-protection">Data Protection Initiatives</FooterLink>
              <FooterLink href="/careers/legal/trademark-copyright">Trademark and Copyright Notice</FooterLink>
              <FooterLink href="/careers/legal/terms-conditions">Terms & Conditions</FooterLink>
              <FooterLink href="/careers/legal/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/careers/support/faq">FAQ</FooterLink>
            </div>
          </div>

          {/* Learn the Basics */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white mb-4">Learn the Basics</h3>
            <ul className="space-y-3">
              <FooterLink href="/careers/basics">Upvista Digital in 3 minutes</FooterLink>
              <FooterLink href="/careers/basics">Corporate philosophy</FooterLink>
              <FooterLink href="/careers/basics">Message from the CEO</FooterLink>
              <FooterLink href="/careers/basics">Hiring people with disabilities</FooterLink>
              <FooterLink href="/careers/basics">What is important in recruitment</FooterLink>
              <FooterLink href="/careers/basics">New graduate recruitment starts here</FooterLink>
            </ul>
          </div>

          {/* Learn About the Business */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white mb-4">Learn About the Business</h3>
            <ul className="space-y-3">
              <FooterLink href="/careers/business">Upvista Digital's Business Strategy</FooterLink>
              <FooterLink href="/careers/business">Upvista Digital Products</FooterLink>
              <FooterLink href="/careers/business">Upvista Digital's Global Strategy</FooterLink>
              <FooterLink href="/careers/business">Digital Solutions and Teamwork</FooterLink>
            </ul>
          </div>

          {/* Learn About the Job */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white mb-4">Learn About the Job</h3>
            <ul className="space-y-3">
              <FooterLink href="/careers/jobs">Team Introduction</FooterLink>
              <FooterLink href="/careers/jobs">Service infrastructure development and operation</FooterLink>
              <FooterLink href="/careers/jobs">Sales</FooterLink>
              <FooterLink href="/careers/jobs">Customer Service</FooterLink>
              <FooterLink href="/careers/jobs">Marketing</FooterLink>
              <FooterLink href="/careers/jobs">System Consulting</FooterLink>
              <FooterLink href="/careers/jobs">Corporate</FooterLink>
              <FooterLink href="/careers/jobs">Interview</FooterLink>
              <FooterLink href="/careers/jobs">Message from the Engineer</FooterLink>
              <FooterLink href="/careers/jobs">Message from the Sales Manager</FooterLink>
              <FooterLink href="/careers/jobs">Systems to support work</FooterLink>
            </ul>
          </div>

          {/* Application Guidelines and Entry */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white mb-4">Application Guidelines and Entry</h3>
            <ul className="space-y-3">
              <FooterLink href="/careers/apply">New graduate recruitment</FooterLink>
              <FooterLink href="/careers/apply">Career Recruitment</FooterLink>
              <FooterLink href="/careers/apply">Hiring people with disabilities</FooterLink>
              <FooterLink href="/careers/apply">Potential Recruitment</FooterLink>
              <FooterLink href="/careers/apply">Part-time jobs and internships</FooterLink>
            </ul>
          </div>

                 {/* Contact Us */}
                 <div className="space-y-5">
                   <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                   <div className="space-y-4">
                     <ContactItem
                       icon={<FaEnvelope />}
                       text="careers@upvistadigital.com"
                       href="mailto:careers@upvistadigital.com"
                     />
                     <ContactItem
                       icon={<FaPhoneAlt />}
                       text="+92 (0) 3320 486955"
                       href="tel:+923320486955"
                     />
                     <ContactItem
                       icon={<FaLinkedinIn />}
                       text="LinkedIn"
                       href="https://www.linkedin.com/company/upvista-digital/"
                     />
                     <ContactItem
                       icon={<FaWhatsapp />}
                       text="WhatsApp"
                       href="https://wa.me/923320486955"
                     />
                     <ContactItem
                       icon={<FaFacebook />}
                       text="Facebook"
                       href="https://www.facebook.com/share/1aHCQiSTB3/"
                     />
                   </div>
                   
                   {/* Company Image */}
                   <div className="mt-6">
                     <div className="relative w-full h-48 rounded-lg overflow-hidden border border-purple-500/20">
                       <Image
                         src="/assets/pvista Digital.jpeg"
                         alt="Upvista Digital"
                         fill
                         className="object-cover hover:scale-105 transition-transform duration-300"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                       <div className="absolute bottom-4 left-4 text-white">
                         <h4 className="text-lg font-bold">Upvista Digital</h4>
                         <p className="text-sm text-purple-300">Building the Future</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800" role="region" aria-label="Copyright and Policies">
        <div className="container mx-auto px-6 py-6">
          <p className="text-gray-400 text-sm">
            Copyright © Upvista Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

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
    <div>
      <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors duration-300 block">
        {children}
      </Link>
    </div>
  );
};

// Contact Item Component
const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
      <div className="text-purple-400">{icon}</div>
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
