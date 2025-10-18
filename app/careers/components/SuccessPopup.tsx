"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Home } from "lucide-react";
import Link from "next/link";

interface SuccessPopupProps {
  isOpen: boolean;
  candidateName: string;
  position: string;
  onClose: () => void;
  isDark: boolean;
}

export default function SuccessPopup({ isOpen, candidateName, position, onClose, isDark }: SuccessPopupProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm ${isDark ? 'bg-black/80' : 'bg-gray-900/60'}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`relative w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden ${
            isDark 
              ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50' 
              : 'bg-gradient-to-br from-white to-indigo-50 border-indigo-200'
          }`}
        >
          {/* Header with gradient */}
          <div className={`relative px-8 py-6 border-b ${
            isDark 
              ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-gray-700/50' 
              : 'bg-gradient-to-r from-purple-100 to-indigo-100 border-indigo-200'
          }`}>
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25"
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center space-y-4"
            >
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Application Submitted Successfully!
              </h2>
              
              <div className="space-y-2">
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  Thank you <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{candidateName}</span>!
                </p>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  Your application for <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{position}</span> has been received.
                </p>
              </div>

              <div className={`rounded-xl p-4 border ${
                isDark 
                  ? 'bg-gray-800/50 border-gray-700/50' 
                  : 'bg-gradient-to-br from-purple-50 to-indigo-50 border-indigo-200'
              }`}>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>What's Next?</h3>
                <ul className={`text-sm space-y-1 text-left ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-purple-500' : 'bg-indigo-600'}`}></div>
                    Our team will review your assessment results
                  </li>
                  <li className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-purple-500' : 'bg-indigo-600'}`}></div>
                    You'll receive an email confirmation shortly
                  </li>
                  <li className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-purple-500' : 'bg-indigo-600'}`}></div>
                    We'll contact you within 5-7 business days
                  </li>
                </ul>
              </div>

              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Keep an eye on your email for updates about your application status.
              </p>
            </motion.div>
          </div>

          {/* Footer with buttons */}
          <div className={`px-8 py-6 border-t ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700/50' 
              : 'bg-gradient-to-br from-purple-50/50 to-indigo-50/50 border-indigo-200'
          }`}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/careers"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
              >
                <Home className="w-5 h-5" />
                Back to Careers
              </Link>
              
              <button
                onClick={onClose}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 border ${
                  isDark 
                    ? 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white border-gray-600/50' 
                    : 'bg-white hover:bg-indigo-50 text-gray-700 hover:text-gray-900 border-indigo-200'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
