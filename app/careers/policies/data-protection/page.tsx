"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import Link from "next/link";

export default function DataProtectionPage() {
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
              Data Protection Initiatives
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Technical Safeguards</h3>
                <ul className="text-gray-300 space-y-3 ml-4">
                  <li>• End-to-end encryption for all data transmission</li>
                  <li>• Advanced firewalls and intrusion detection systems</li>
                  <li>• Multi-factor authentication for all systems</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Secure cloud infrastructure with enterprise-grade protection</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Administrative Controls</h3>
                <ul className="text-gray-300 space-y-3 ml-4">
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
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-700/30  p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Lawfulness</h3>
                <p className="text-gray-300 text-sm">
                  All data processing is conducted in accordance with applicable laws and regulations, 
                  with clear legal bases for each processing activity.
                </p>
              </div>
              <div className="bg-gray-700/30  p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Fairness</h3>
                <p className="text-gray-300 text-sm">
                  Data subjects are treated fairly and transparently, with clear information about 
                  how their data will be used and processed.
                </p>
              </div>
              <div className="bg-gray-700/30  p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Transparency</h3>
                <p className="text-gray-300 text-sm">
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
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We implement privacy by design principles throughout our systems and processes, ensuring 
              data protection is built into every aspect of our operations from the ground up.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">System Design</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Privacy-first architecture and design</li>
                  <li>• Data minimization at the system level</li>
                  <li>• Secure default configurations</li>
                  <li>• Automated privacy controls</li>
                  <li>• Regular privacy impact assessments</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Process Integration</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
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
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Regulatory Compliance</h3>
                <ul className="text-gray-300 space-y-3 ml-4">
                  <li>• GDPR (General Data Protection Regulation)</li>
                  <li>• CCPA (California Consumer Privacy Act)</li>
                  <li>• PIPEDA (Personal Information Protection and Electronic Documents Act)</li>
                  <li>• Industry-specific regulations and standards</li>
                  <li>• International data transfer agreements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Certifications & Standards</h3>
                <ul className="text-gray-300 space-y-3 ml-4">
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
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact Our Data Protection Team</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For questions about our data protection initiatives or to exercise your privacy rights:
            </p>
            <div className="border border-gray-700 p-6">
              <p className="text-white font-medium mb-2">Data Protection Officer</p>
              <p className="text-gray-300">Email: dpo@upvistadigital.com</p>
              <p className="text-gray-300">Phone: +92 (0) 3320 486955</p>
              <p className="text-gray-300">Address: Upvista Digital, Data Protection Office, 123 Tech Street, Digital City, DC 12345</p>
            </div>
          </motion.div>

        </div>
      </section>

      <CareersFooter />
    </div>
  );
}
