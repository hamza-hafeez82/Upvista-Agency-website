"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function EmploymentRulesPage() {
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
              Rules Regarding Applying for Employment
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Guidelines and requirements for employment applications at Upvista Digital.
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
              Section
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Required Documents</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Updated resume/CV</li>
                  <li>• Cover letter</li>
                  <li>• Portfolio (for design roles)</li>
                  <li>• Reference letters (if applicable)</li>
                  <li>• Educational certificates</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Application Standards</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Complete all required fields</li>
                  <li>• Provide accurate information</li>
                  <li>• Submit within application deadline</li>
                  <li>• Follow formatting guidelines</li>
                  <li>• Include relevant work samples</li>
                </ul>
              </div>
            </div>
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
            <div className="space-y-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>General Requirements</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Must be at least 18 years of age</li>
                  <li>• Legal authorization to work in the country</li>
                  <li>• Meet position-specific qualifications</li>
                  <li>• Pass background checks (where required)</li>
                  <li>• Comply with company policies and procedures</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Professional Standards</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Demonstrate relevant skills and experience</li>
                  <li>• Show commitment to professional development</li>
                  <li>• Exhibit strong communication abilities</li>
                  <li>• Display problem-solving capabilities</li>
                  <li>• Align with company values and culture</li>
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
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Submission Guidelines</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• One application per position</li>
                  <li>• No duplicate submissions</li>
                  <li>• Complete all required assessments</li>
                  <li>• Respond to communications promptly</li>
                  <li>• Maintain professional conduct</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Prohibited Actions</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Providing false information</li>
                  <li>• Plagiarizing content</li>
                  <li>• Attempting to cheat on assessments</li>
                  <li>• Harassing recruitment staff</li>
                  <li>• Violating confidentiality agreements</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Equal Opportunity Employment</h2>
            <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Upvista Digital is committed to providing equal employment opportunities to all qualified individuals. 
              We do not discriminate based on race, color, religion, gender, age, national origin, disability, 
              sexual orientation, or any other protected characteristic.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Commitment</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Fair and unbiased evaluation</li>
                  <li>• Merit-based selection process</li>
                  <li>• Diverse and inclusive workplace</li>
                  <li>• Accommodation for disabilities</li>
                  <li>• Zero tolerance for discrimination</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Rights</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Equal consideration for all positions</li>
                  <li>• Reasonable accommodation requests</li>
                  <li>• Fair treatment throughout the process</li>
                  <li>• Confidential complaint procedures</li>
                  <li>• Protection from retaliation</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className={`border p-8 ${isDark ? 'border-gray-800' : 'border-purple-200 bg-white/40'}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Information</h2>
            <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              For questions about these employment application rules:
            </p>
            <div className={`border p-6 ${isDark ? 'border-gray-700' : 'border-purple-300 bg-white/60'}`}>
              <p className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Human Resources Department</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Email: hr@upvistadigital.com</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Phone: +92 (0) 3320 486955</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Address: Upvista Digital, HR Department, 123 Tech Street, Digital City, DC 12345</p>
            </div>
          </motion.div>

        </div>
      </section>

      <CareersFooter />
    </div>
  );
}
