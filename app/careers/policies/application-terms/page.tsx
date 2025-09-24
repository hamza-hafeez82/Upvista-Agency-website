"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import Link from "next/link";

export default function ApplicationTermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <CareersHeader />
      
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <Link href="/careers">
          <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300">
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
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recruitment Application Terms
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Terms and conditions governing your application for employment with Upvista Digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pt-8 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Important Notice
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By submitting your application to Upvista Digital, you acknowledge that you have read, understood, 
              and agree to be bound by these terms and conditions. Please review them carefully before proceeding 
              with your application.
            </p>
          </motion.div>

          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Application Process Terms
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Assessment Integrity</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• You must complete assessments independently and honestly</li>
                  <li>• Switching tabs or applications during assessments is prohibited</li>
                  <li>• Providing false or misleading information will result in disqualification</li>
                  <li>• Collaboration with others during assessments is not permitted</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Information Accuracy</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• All provided information must be accurate and complete</li>
                  <li>• You are responsible for updating any changes to your information</li>
                  <li>• False statements may result in immediate disqualification</li>
                  <li>• Background checks may be conducted to verify information</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Communication Standards</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Maintain professional communication throughout the process</li>
                  <li>• Respond to communications within specified timeframes</li>
                  <li>• Provide accurate contact information for all communications</li>
                  <li>• Follow instructions provided by our recruitment team</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Rights and Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Your Rights and Responsibilities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Your Rights</h3>
                <ul className="text-gray-300 space-y-3 ml-4">
                  <li>• Right to fair and equal consideration</li>
                  <li>• Right to privacy and data protection</li>
                  <li>• Right to withdraw your application at any time</li>
                  <li>• Right to request feedback on your application</li>
                  <li>• Right to appeal decisions through proper channels</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Your Responsibilities</h3>
                <ul className="text-gray-300 space-y-3 ml-4">
                  <li>• Provide accurate and complete information</li>
                  <li>• Participate honestly in all assessments</li>
                  <li>• Maintain confidentiality of recruitment process</li>
                  <li>• Comply with all applicable laws and regulations</li>
                  <li>• Respect other candidates and our team members</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Assessment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Assessment Terms
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Assessment Rules</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• No time limits are imposed on assessments</li>
                  <li>• You must complete assessments in one continuous session</li>
                  <li>• Switching between tabs or applications is strictly prohibited</li>
                  <li>• Use of external resources during technical assessments is not allowed</li>
                  <li>• Violation of assessment rules results in immediate disqualification</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Assessment Results</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Assessment results are confidential and proprietary</li>
                  <li>• Results may be used for hiring decisions and process improvement</li>
                  <li>• You may request general feedback on your performance</li>
                  <li>• Results may be retained for future opportunities</li>
                  <li>• Detailed results are not shared with third parties</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Company Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Company Rights</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Hiring Decisions</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Upvista Digital reserves the right to make all hiring decisions</li>
                  <li>• We are not obligated to provide reasons for rejection</li>
                  <li>• We may withdraw job postings at any time</li>
                  <li>• We may modify position requirements as needed</li>
                  <li>• Hiring decisions are final and not subject to appeal</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Process Modifications</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• We may modify the recruitment process at any time</li>
                  <li>• We reserve the right to conduct additional assessments</li>
                  <li>• We may request additional information or documentation</li>
                  <li>• We can terminate the recruitment process at any stage</li>
                  <li>• We may contact references and previous employers</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By applying for a position with Upvista Digital, you acknowledge and agree that:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Upvista Digital is not liable for any costs incurred during the application process</li>
              <li>• We are not responsible for technical issues that may affect your application</li>
              <li>• We do not guarantee employment or any specific outcome</li>
              <li>• You participate in the recruitment process at your own risk</li>
              <li>• Our liability is limited to the maximum extent permitted by law</li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Questions About These Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these terms and conditions, please contact our recruitment team:
            </p>
            <div className="border border-gray-700 p-6">
              <p className="text-white font-medium mb-2">Recruitment Team</p>
              <p className="text-gray-300">Email: careers@upvistadigital.com</p>
              <p className="text-gray-300">Phone: +92 (0) 3320 486955</p>
              <p className="text-gray-300">Address: Upvista Digital, Recruitment Department, 123 Tech Street, Digital City, DC 12345</p>
            </div>
          </motion.div>

        </div>
      </section>

      <CareersFooter />
    </div>
  );
}
