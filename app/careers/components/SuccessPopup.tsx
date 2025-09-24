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
}

export default function SuccessPopup({ isOpen, candidateName, position, onClose }: SuccessPopupProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-lg bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden"
        >
          {/* Header with gradient */}
          <div className="relative px-8 py-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-gray-700/50">
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
              <h2 className="text-2xl font-bold text-white">
                Application Submitted Successfully!
              </h2>
              
              <div className="space-y-2">
                <p className="text-gray-300">
                  Thank you <span className="text-purple-400 font-semibold">{candidateName}</span>!
                </p>
                <p className="text-gray-300">
                  Your application for <span className="text-blue-400 font-semibold">{position}</span> has been received.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                <h3 className="text-white font-semibold mb-2">What's Next?</h3>
                <ul className="text-gray-300 text-sm space-y-1 text-left">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Our team will review your assessment results
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    You'll receive an email confirmation shortly
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    We'll contact you within 5-7 business days
                  </li>
                </ul>
              </div>

              <p className="text-gray-400 text-sm">
                Keep an eye on your email for updates about your application status.
              </p>
            </motion.div>
          </div>

          {/* Footer with buttons */}
          <div className="px-8 py-6 bg-gray-800/30 border-t border-gray-700/50">
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
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 border border-gray-600/50"
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
