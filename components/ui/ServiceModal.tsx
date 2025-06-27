"use client";

import React, { useRef, useEffect } from "react";
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
  // Ref for horizontal scroll container
  const timelineRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll active icon into view on phase change (mobile only)
  useEffect(() => {
    if (open && window.innerWidth < 768 && iconRefs.current[currentPhase]) {
      iconRefs.current[currentPhase]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [currentPhase, open]);

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
          className="relative w-full max-w-md md:max-w-2xl max-h-screen md:max-h-[90vh] bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-0 border border-cyan-200/60 animate-fade-in overflow-y-auto"
        >
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-cyan-200 hover:text-white text-3xl font-bold z-20 bg-gray-800/80 rounded-full px-3 py-1 shadow-md">&times;</button>
          {/* Animated Timeline */}
          <div className="relative px-2 pt-8 pb-20 md:px-16 md:pt-16 md:pb-16">
            {/* Mobile: Horizontal Scrollable Timeline */}
            <div className="flex md:hidden items-center gap-4 mb-12 mt-6 overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent" ref={timelineRef}>
              {phases.map((phase, idx) => (
                <div
                  key={idx}
                  ref={el => { iconRefs.current[idx] = el || null; }}
                  className="flex flex-col items-center flex-shrink-0 min-w-[64px] mt-2"
                >
                  <motion.div
                    className={`rounded-full bg-gradient-to-br ${phaseColors[idx % phaseColors.length]} shadow-lg border-4 border-white w-14 h-14 flex items-center justify-center mb-2 z-10 cursor-pointer`}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: currentPhase === idx ? 1.15 : 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => setCurrentPhase(idx)}
                  >
                    {phaseIcons[idx % phaseIcons.length]}
                  </motion.div>
                  <span className={`text-xs font-semibold ${currentPhase === idx ? 'text-cyan-100' : 'text-cyan-400'}`}>{phase.title.split(' ')[0]}</span>
                </div>
              ))}
            </div>
            {/* Desktop: Full Row Timeline */}
            <div className="hidden md:flex items-center justify-between mb-12 gap-4 mt-8">
              {phases.map((phase, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1">
                  <motion.div
                    className={`rounded-full bg-gradient-to-br ${phaseColors[idx % phaseColors.length]} shadow-lg border-4 border-white w-14 h-14 flex items-center justify-center mb-3 z-10`}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: currentPhase === idx ? 1.15 : 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {phaseIcons[idx % phaseIcons.length]}
                  </motion.div>
                  <span className={`text-xs font-semibold ${currentPhase === idx ? 'text-cyan-100' : 'text-cyan-400'}`}>{phase.title.split(' ')[0]}</span>
                </div>
              ))}
            </div>
            {/* Timeline Bar */}
            <div className="relative h-3 w-full bg-gradient-to-r from-cyan-100 to-violet-100 rounded-full mb-12">
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
              className="mb-16 text-center px-4 md:px-8"
            >
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400 mb-6 flex items-center justify-center gap-3">
                {phaseIcons[currentPhase % phaseIcons.length]}
                <span className="text-white">{phases[currentPhase].title}</span>
              </h3>
              <p className="text-lg text-cyan-100 font-medium drop-shadow-sm leading-relaxed md:text-xl">
                {phases[currentPhase].description}
              </p>
            </motion.div>
            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 gap-8 pb-4">
              <button
                className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-200 to-cyan-200 text-cyan-900 font-bold shadow hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
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