"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function PrivacyNoticePage() {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100'}`}>
      <CareersHeader />
      
      <div className="fixed top-20 left-4 z-50">
        <Link href="/careers">
          <button className={`flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-purple-600'}`}>
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </button>
        </Link>
      </div>

      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Recruitment Privacy Notice
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              How Upvista Digital protects your privacy during the recruitment process.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pt-8 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Information Collection
            </h2>
            <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              We collect personal information necessary to evaluate your application and conduct our recruitment process. 
              This includes contact information, professional experience, educational background, and assessment results.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              All information collection is conducted in accordance with applicable privacy laws and regulations, 
              ensuring your personal data is handled with the highest standards of care and security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Section
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Security Measures</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• End-to-end encryption</li>
                  <li>• Secure data storage</li>
                  <li>• Access controls</li>
                  <li>• Regular security audits</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Rights</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Access your data</li>
                  <li>• Request corrections</li>
                  <li>• Withdraw consent</li>
                  <li>• Request deletion</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Section
            </h2>
            <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Your personal information is used exclusively for recruitment purposes and is retained only as long as necessary:
            </p>
            <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Assessment data: 1 year for process improvement</li>
              <li>• Application records: 2 years for future opportunities</li>
              <li>• Communication records: 3 years for legal compliance</li>
              <li>• Successful candidates: Duration of employment + legal requirements</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Our Privacy Team</h2>
            <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              For privacy-related questions or to exercise your rights:
            </p>
            <div className={`border p-6 ${isDark ? 'border-gray-700' : 'border-purple-300 bg-white/60'}`}>
              <p className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Privacy Officer</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Email: privacy@upvistadigital.com</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Phone: +92 (0) 3320 486955</p>
            </div>
          </motion.div>

        </div>
      </section>

      <CareersFooter />
    </div>
  );
}
