"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import Link from "next/link";

export default function PrivacyNoticePage() {
  return (
    <div className="min-h-screen bg-black">
      <CareersHeader />
      
      <div className="fixed top-20 left-4 z-50">
        <Link href="/careers">
          <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300">
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
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recruitment Privacy Notice
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Information Collection
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We collect personal information necessary to evaluate your application and conduct our recruitment process. 
              This includes contact information, professional experience, educational background, and assessment results.
            </p>
            <p className="text-gray-300 leading-relaxed">
              All information collection is conducted in accordance with applicable privacy laws and regulations, 
              ensuring your personal data is handled with the highest standards of care and security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Security Measures</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• End-to-end encryption</li>
                  <li>• Secure data storage</li>
                  <li>• Access controls</li>
                  <li>• Regular security audits</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Your Rights</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
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
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your personal information is used exclusively for recruitment purposes and is retained only as long as necessary:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
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
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact Our Privacy Team</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For privacy-related questions or to exercise your rights:
            </p>
            <div className="border border-gray-700 p-6">
              <p className="text-white font-medium mb-2">Privacy Officer</p>
              <p className="text-gray-300">Email: privacy@upvistadigital.com</p>
              <p className="text-gray-300">Phone: +92 (0) 3320 486955</p>
            </div>
          </motion.div>

        </div>
      </section>

      <CareersFooter />
    </div>
  );
}
