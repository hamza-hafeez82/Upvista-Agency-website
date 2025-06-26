"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

interface Phase {
  title: string;
  description: string;
}

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  phases: Phase[];
  currentPhase: number;
  setCurrentPhase: (idx: number) => void;
}

const phaseColors = [
  "from-cyan-400 to-emerald-400",
  "from-fuchsia-400 to-pink-400",
  "from-yellow-400 to-amber-400",
  "from-blue-400 to-indigo-400",
  "from-teal-400 to-cyan-400",
  "from-violet-400 to-purple-400",
];

const phaseIcons = [
  <Sparkles key="sparkle" className="w-6 h-6" />, // 1
  <CheckCircle key="check" className="w-6 h-6" />, // 2
  <ArrowRight key="arrow" className="w-6 h-6" />, // 3
  <ArrowLeft key="arrowl" className="w-6 h-6" />, // 4
  <Sparkles key="sparkle2" className="w-6 h-6" />, // 5
  <CheckCircle key="check2" className="w-6 h-6" />, // 6
];

export const ServiceModal: React.FC<ServiceModalProps> = ({ open, onClose, phases, currentPhase, setCurrentPhase }) => {
  if (!open) return null;
  const progress = ((currentPhase + 1) / phases.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-black/30 backdrop-blur-2xl rounded-3xl shadow-2xl p-0 border border-violet-900 glassmorphism animate-fade-in overflow-hidden"
        >
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-violet-700 hover:text-violet-900 text-2xl font-bold z-20">&times;</button>
          {/* Animated Timeline */}
          <div className="relative px-8 pt-12 pb-8">
            <div className="flex items-center justify-between mb-8">
              {phases.map((phase, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <motion.div
                    className={`rounded-full bg-gradient-to-br ${phaseColors[idx % phaseColors.length]} shadow-lg border-4 border-white w-12 h-12 flex items-center justify-center mb-2 z-10`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: currentPhase === idx ? 1.15 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {phaseIcons[idx % phaseIcons.length]}
                  </motion.div>
                  <span className={`text-xs font-semibold ${currentPhase === idx ? 'text-violet-900' : 'text-violet-500'}`}>{phase.title.split(' ')[0]}</span>
                </div>
              ))}
            </div>
            {/* Timeline Bar */}
            <div className="relative h-3 w-full bg-gradient-to-r from-violet-200 to-cyan-200 rounded-full mb-8">
              <motion.div
                className="absolute top-0 left-0 h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-lg"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 flex justify-between items-center">
                {phases.map((_, idx) => (
                  <div key={idx} className="w-3 h-3 rounded-full bg-white border-2 border-cyan-400 shadow" />
                ))}
              </div>
            </div>
            {/* Phase Content */}
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="mb-8 text-center px-2"
            >
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-700 mb-3 flex items-center justify-center gap-2">
                {phaseIcons[currentPhase % phaseIcons.length]}
                {phases[currentPhase].title}
              </h3>
              <p className="text-lg text-violet-800/90 font-medium drop-shadow-sm">
                {phases[currentPhase].description}
              </p>
            </motion.div>
            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-200 to-cyan-200 text-violet-900 font-bold shadow hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                onClick={() => setCurrentPhase(currentPhase - 1)}
                disabled={currentPhase === 0}
              >
                <ArrowLeft className="inline-block w-5 h-5 mr-1" /> Previous
              </button>
              {currentPhase === phases.length - 1 ? (
                <a
                  href="/pages/consult"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" /> Start Consulting
                </a>
              ) : (
                <button
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold shadow hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center gap-1"
                  onClick={() => setCurrentPhase(currentPhase + 1)}
                  disabled={currentPhase === phases.length - 1}
                >
                  Next <ArrowRight className="inline-block w-5 h-5 ml-1" />
                </button>
              )}
            </div>
          </div>
          {/* Decorative Graphics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            className="absolute inset-0 pointer-events-none z-0"
          >
            <svg width="100%" height="100%" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full">
              <circle cx="500" cy="100" r="80" fill="url(#paint0_radial)" />
              <circle cx="100" cy="350" r="60" fill="url(#paint1_radial)" />
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(500 100) scale(80)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00FFD0" />
                  <stop offset="1" stopColor="#0F172A" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientTransform="translate(100 350) scale(60)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A78BFA" />
                  <stop offset="1" stopColor="#0F172A" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}; 