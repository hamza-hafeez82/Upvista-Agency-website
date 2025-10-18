"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function PersonalInformationPage() {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100'}`}>
      <CareersHeader />
      
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <Link href="/careers">
          <button className={`flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-purple-600'}`}>
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Handling of Personal Information in Recruitment Activities
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Learn how Upvista Digital collects, processes, and protects your personal information during our recruitment process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pt-8 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Overview
            </h2>
            <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Upvista Digital is committed to protecting your privacy and personal information throughout our recruitment process. 
              This document outlines how we collect, use, store, and protect your personal data when you apply for positions 
              with our company.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              We adhere to applicable data protection laws and regulations, including GDPR, CCPA, and other relevant 
              privacy legislation, ensuring your personal information is handled with the utmost care and security.
            </p>
          </motion.div>

          {/* Information Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Personal Information</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Full name, email address, and phone number</li>
                  <li>• Resume/CV and cover letter</li>
                  <li>• Professional experience and qualifications</li>
                  <li>• Educational background and certifications</li>
                  <li>• References and recommendation letters</li>
                </ul>
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Assessment Data</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Personality assessment responses</li>
                  <li>• Technical assessment results</li>
                  <li>• Interview notes and evaluations</li>
                  <li>• Skills assessments and test scores</li>
                </ul>
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Communication Records</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Email correspondence</li>
                  <li>• Interview recordings (with consent)</li>
                  <li>• Application status updates</li>
                  <li>• Feedback and evaluation notes</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How We Use Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              How We Use Your Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Recruitment Purposes</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Evaluate your qualifications and fit</li>
                  <li>• Conduct interviews and assessments</li>
                  <li>• Make hiring decisions</li>
                  <li>• Communicate about application status</li>
                  <li>• Conduct reference checks</li>
                </ul>
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Legal & Administrative</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Comply with legal obligations</li>
                  <li>• Maintain recruitment records</li>
                  <li>• Improve our recruitment process</li>
                  <li>• Protect against fraud or abuse</li>
                  <li>• Statistical analysis (anonymized)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Data Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Data Protection Measures
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Security Safeguards</h3>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <ul className={`space-y-2 ml-4 mt-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Secure access controls and authentication</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Employee training on data protection</li>
                  <li>• Incident response and breach notification procedures</li>
                </ul>
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Data Retention</h3>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  We retain your personal information only as long as necessary for recruitment purposes or as required by law:
                </p>
                <ul className={`space-y-2 ml-4 mt-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Successful candidates: Duration of employment + legal requirements</li>
                  <li>• Unsuccessful candidates: 2 years for potential future opportunities</li>
                  <li>• Assessment data: 1 year for process improvement</li>
                  <li>• Communication records: 3 years for legal compliance</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Rights</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Access & Control</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Access your personal information</li>
                  <li>• Request corrections or updates</li>
                  <li>• Withdraw consent at any time</li>
                  <li>• Request data portability</li>
                </ul>
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Privacy Rights</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Request deletion of your data</li>
                  <li>• Object to processing</li>
                  <li>• Restrict data processing</li>
                  <li>• File complaints with authorities</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Us</h2>
            <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              If you have any questions about how we handle your personal information or wish to exercise your rights, 
              please contact our Data Protection Officer:
            </p>
            <div className={`border p-6 ${isDark ? 'border-gray-700' : 'border-purple-300 bg-white/60'}`}>
              <p className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Data Protection Officer</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Email: privacy@upvistadigital.com</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Phone: +92 (0) 3320 486955</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Address: Upvista Digital, Privacy Office, 123 Tech Street, Digital City, DC 12345</p>
            </div>
          </motion.div>

        </div>
      </section>

      <CareersFooter />
    </div>
  );
}
