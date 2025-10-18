"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function DataProtectionPage() {
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
              Data Protection Initiatives
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Upvista Digital's comprehensive approach to protecting personal data and ensuring privacy compliance.
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
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Safeguards</h3>
                <ul className={`space-y-3 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• End-to-end encryption for all data transmission</li>
                  <li>• Advanced firewalls and intrusion detection systems</li>
                  <li>• Multi-factor authentication for all systems</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Secure cloud infrastructure with enterprise-grade protection</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Administrative Controls</h3>
                <ul className={`space-y-3 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Role-based access controls and permissions</li>
                  <li>• Regular staff training on data protection</li>
                  <li>• Incident response and breach notification procedures</li>
                  <li>• Data minimization and purpose limitation principles</li>
                  <li>• Regular compliance audits and assessments</li>
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
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`p-6 ${isDark ? 'bg-gray-700/30' : 'bg-white/60 border border-purple-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Lawfulness</h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  All data processing is conducted in accordance with applicable laws and regulations, 
                  with clear legal bases for each processing activity.
                </p>
              </div>
              <div className={`p-6 ${isDark ? 'bg-gray-700/30' : 'bg-white/60 border border-purple-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Fairness</h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Data subjects are treated fairly and transparently, with clear information about 
                  how their data will be used and processed.
                </p>
              </div>
              <div className={`p-6 ${isDark ? 'bg-gray-700/30' : 'bg-white/60 border border-purple-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Transparency</h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Clear and easily accessible privacy notices explain our data processing practices, 
                  ensuring individuals understand their rights and our obligations.
                </p>
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
            <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              We implement privacy by design principles throughout our systems and processes, ensuring 
              data protection is built into every aspect of our operations from the ground up.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>System Design</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Privacy-first architecture and design</li>
                  <li>• Data minimization at the system level</li>
                  <li>• Secure default configurations</li>
                  <li>• Automated privacy controls</li>
                  <li>• Regular privacy impact assessments</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Process Integration</h3>
                <ul className={`space-y-2 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Privacy considerations in all workflows</li>
                  <li>• Regular privacy training for all staff</li>
                  <li>• Privacy-aware development practices</li>
                  <li>• Continuous monitoring and improvement</li>
                  <li>• Stakeholder engagement and feedback</li>
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
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Section
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Regulatory Compliance</h3>
                <ul className={`space-y-3 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• GDPR (General Data Protection Regulation)</li>
                  <li>• CCPA (California Consumer Privacy Act)</li>
                  <li>• PIPEDA (Personal Information Protection and Electronic Documents Act)</li>
                  <li>• Industry-specific regulations and standards</li>
                  <li>• International data transfer agreements</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Certifications & Standards</h3>
                <ul className={`space-y-3 ml-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• ISO 27001 (Information Security Management)</li>
                  <li>• SOC 2 Type II (Security and Availability)</li>
                  <li>• GDPR Compliance Certification</li>
                  <li>• Regular third-party security audits</li>
                  <li>• Industry best practice frameworks</li>
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
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Our Data Protection Team</h2>
            <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              For questions about our data protection initiatives or to exercise your privacy rights:
            </p>
            <div className={`border p-6 ${isDark ? 'border-gray-700' : 'border-purple-300 bg-white/60'}`}>
              <p className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Data Protection Officer</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Email: dpo@upvistadigital.com</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Phone: +92 (0) 3320 486955</p>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Address: Upvista Digital, Data Protection Office, 123 Tech Street, Digital City, DC 12345</p>
            </div>
          </motion.div>

        </div>
      </section>

      <CareersFooter />
    </div>
  );
}
