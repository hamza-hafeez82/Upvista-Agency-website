"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface AssessmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  
  position: string;
}

export default function AssessmentPopup({
  isOpen,
  onClose,
  position,
}: AssessmentPopupProps) {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const router = useRouter();

  const handleStartAssessment = () => {
    if (agreeToTerms) {
      console.log("Starting assessment, redirecting to /careers/assessment");
      // Close popup first
      onClose();
      // Then redirect using Next.js router
      router.push('/careers/assessment');
    } else {
      console.log("Terms not agreed");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[95vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl flex flex-col backdrop-blur-sm"
          >
            {/* Header */}
            <div className="relative px-8 py-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Upvista Digital Assessment
                  </h2>
                  <p className="text-gray-300 mt-1 text-sm md:text-base">
                    {position} Position Application Process
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-8 py-6 space-y-8">
                {/* Welcome Section */}
                <div className="text-center border-b border-gray-700/30 pb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Assessment Overview
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Thank you for your interest in the {position} position at Upvista Digital. 
                    Our comprehensive assessment process ensures we identify candidates who align with our 
                    technical standards and company culture.
                  </p>
                </div>

                {/* Assessment Structure */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white">Assessment Structure</h4>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-purple-400">Personality Assessment</h5>
                      <div className="text-gray-300 space-y-2">
                        <p>15 questions total</p>
                        <p>10 Multiple Choice Questions</p>
                        <p>5 Fill in the blanks questions</p>
                        <p>Mandatory for all candidates</p>
                        <p>Evaluates work style and cultural alignment</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-purple-400">Technical Assessment</h5>
                      <div className="text-gray-300 space-y-2">
                        <p>15 questions total</p>
                        <p>10 Multiple Choice Questions</p>
                        <p>5 Fill in the blanks questions</p>
                        <p>Position-specific technical evaluation</p>
                        <p>Tests relevant skills and knowledge</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process Flow */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white">Application Process</h4>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">Personality Assessment</h5>
                        <p className="text-gray-300">Complete the personality assessment to demonstrate your work style, communication preferences, and cultural compatibility with our organization.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">Technical Assessment</h5>
                        <p className="text-gray-300">Demonstrate your technical proficiency through position-specific questions that evaluate your knowledge and skills relevant to the role.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">Application Submission</h5>
                        <p className="text-gray-300">Submit your detailed application including personal information, professional resume, and additional documentation required for the position.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-2">Initial Screening</h5>
                        <p className="text-gray-300">Your assessment results and application will undergo comprehensive review by our recruitment team. Qualified candidates will proceed to the interview stage.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Assessment Guidelines */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-xl font-bold text-white mb-4">Assessment Guidelines</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">No Time Restrictions</h5>
                      <p className="text-gray-300">Take sufficient time to provide thoughtful and accurate responses. There are no time constraints on the assessment.</p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">Assessment Integrity</h5>
                      <p className="text-gray-300">Maintain focus during the assessment. Switching tabs, windows, or applications will result in immediate disqualification from the application process.</p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">Honest Participation</h5>
                      <p className="text-gray-300">Provide genuine responses that accurately represent your skills, experience, and personality. Integrity is fundamental to our selection process.</p>
                    </div>
                  </div>
                </div>

                {/* Data Privacy */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">Data Privacy and Usage</h4>
                  <div className="text-gray-300 space-y-3">
                    <p>By participating in this assessment, you consent to the collection and processing of your responses for recruitment evaluation purposes.</p>
                    <p>Your assessment data will be used exclusively for recruitment processes and will be handled in strict accordance with our privacy policy and data protection standards.</p>
                    <p>Assessment results and application information will be shared with our recruitment team and may be retained for potential future opportunities where appropriate.</p>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">Terms and Conditions</h4>
                  <div className="text-gray-300 space-y-2">
                    <p>• By commencing the assessment, you agree to participate with integrity and adhere to all specified guidelines.</p>
                    <p>• Assessment results remain confidential and are utilized solely for recruitment evaluation purposes.</p>
                    <p>• Upvista Digital maintains the right to disqualify candidates who violate assessment protocols or demonstrate dishonest behavior.</p>
                    <p>• Our assessment methodology is designed to ensure fairness, objectivity, and equal opportunity for all candidates.</p>
                    <p>• You may withdraw from the assessment process at any time, though your progress will not be preserved.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-700/50 bg-gray-800/30 px-8 py-6 flex-shrink-0">
              <div className="space-y-6">
                {/* Terms Agreement */}
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    checked={agreeToTerms}
                    onChange={(e) => {
                      console.log("Checkbox changed:", e.target.checked);
                      setAgreeToTerms(e.target.checked);
                    }}
                    className="mt-1 w-5 h-5 text-purple-600 bg-gray-700 border-gray-600 rounded-lg focus:ring-purple-500 focus:ring-2 transition-all duration-300"
                  />
                  <label htmlFor="agreeToTerms" className="text-gray-300 text-sm leading-relaxed">
                    I acknowledge and agree to the{" "}
                    <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline transition-colors duration-300">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms-conditions" className="text-purple-400 hover:text-purple-300 underline transition-colors duration-300">
                      Terms and Conditions
                    </a>{" "}
                    of Upvista Digital
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Button clicked, agreeToTerms:", agreeToTerms);
                      handleStartAssessment();
                    }}
                    disabled={!agreeToTerms}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
                      agreeToTerms
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Start Assessment
                  </button>
                  
                  <div className="text-center">
                    <p className="text-gray-400 text-xs md:text-sm">
                      Prefer direct application?{" "}
                      <a
                        href="mailto:careers@upvistadigital.com"
                        className="text-purple-400 hover:text-purple-300 underline transition-colors duration-300"
                      >
                        Contact careers@upvistadigital.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
