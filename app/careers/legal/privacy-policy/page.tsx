"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How Upvista Digital collects, uses, and protects your personal information.
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
            <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At Upvista Digital, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We comply with applicable privacy laws and regulations, including GDPR, CCPA, and other relevant data protection legislation. 
              By using our services, you consent to the data practices described in this policy.
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
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Name, email address, and phone number</li>
                  <li>• Professional experience and qualifications</li>
                  <li>• Educational background and certifications</li>
                  <li>• Resume, CV, and cover letters</li>
                  <li>• Assessment responses and test results</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Technical Information</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Website usage patterns and analytics</li>
                  <li>• Cookies and similar technologies</li>
                  <li>• Log files and error reports</li>
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
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Recruitment Purposes</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Evaluate your qualifications and fit for positions</li>
                  <li>• Conduct interviews and assessments</li>
                  <li>• Communicate about application status</li>
                  <li>• Make hiring decisions</li>
                  <li>• Conduct background and reference checks</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Business Operations</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Improve our recruitment processes</li>
                  <li>• Analyze website usage and performance</li>
                  <li>• Ensure security and prevent fraud</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Generate statistical reports (anonymized)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement comprehensive security measures to protect your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Technical Safeguards</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Secure servers and databases</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Access controls and authentication</li>
                  <li>• Intrusion detection and prevention</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Administrative Controls</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Employee training on data protection</li>
                  <li>• Confidentiality agreements</li>
                  <li>• Incident response procedures</li>
                  <li>• Regular compliance reviews</li>
                  <li>• Data minimization practices</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Access and Control</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Access your personal information</li>
                  <li>• Request corrections or updates</li>
                  <li>• Withdraw consent at any time</li>
                  <li>• Request data portability</li>
                  <li>• Object to processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Privacy Rights</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Request deletion of your data</li>
                  <li>• Restrict data processing</li>
                  <li>• File complaints with authorities</li>
                  <li>• Request information about data sharing</li>
                  <li>• Opt out of marketing communications</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We retain your personal information only as long as necessary for the purposes outlined in this policy:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Application data: 2 years for potential future opportunities</li>
              <li>• Assessment results: 1 year for process improvement</li>
              <li>• Communication records: 3 years for legal compliance</li>
              <li>• Successful candidates: Duration of employment + legal requirements</li>
              <li>• Technical data: As required for security and analytics</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
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
              <p className="text-gray-300">Address: Upvista Digital, Privacy Office, 123 Tech Street, Digital City, DC 12345</p>
            </div>
          </motion.div>

        </div>
      </section>

      <CareersFooter />
    </div>
  );
}
