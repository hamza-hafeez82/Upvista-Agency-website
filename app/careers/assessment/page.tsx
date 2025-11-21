"use client";

import React, { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import PersonalityAssessment from "../components/PersonalityAssessment";
import TechnicalAssessment from "../components/TechnicalAssessment";
import ApplicationForm from "../components/ApplicationForm";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function AssessmentPage() {
  const { isDark } = useTheme();
  const [currentStep, setCurrentStep] = useState(1);
  const [personalityAnswers, setPersonalityAnswers] = useState<number[]>([]);
  const [technicalAnswers, setTechnicalAnswers] = useState<{ [key: number]: string }>({});
  const [selectedPosition, setSelectedPosition] = useState("");

  const handlePersonalityComplete = (answers: number[]) => {
    setPersonalityAnswers(answers);
    setCurrentStep(2);
  };

  const handleTechnicalComplete = (answers: { [key: number]: string }, position: string) => {
    setTechnicalAnswers(answers);
    setSelectedPosition(position);
    setCurrentStep(3);
  };

  const handleApplicationSubmit = async (applicationData: unknown) => {
    // This will be handled by the ApplicationForm component
    console.log("Application submitted:", applicationData);
  };

  return (
    <>
      <Head>
        <title>Career Assessment | Upvista Digital - Complete Your Application</title>
        <meta name="description" content="Complete your career assessment at Upvista Digital. Take personality and technical assessments as part of your job application process." />
        <meta name="keywords" content="Career Assessment, Job Assessment, Personality Assessment, Technical Assessment, Application Process, Upvista Digital Assessment" />
        <meta property="og:title" content="Career Assessment | Upvista Digital" />
        <meta property="og:description" content="Complete your career assessment at Upvista Digital. Take personality and technical assessments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/careers/assessment" />
        <link rel="canonical" href="https://www.upvistadigital.com/careers/assessment" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' 
          : 'bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50'
      }`}>
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
        {/* Theme and Language Toggles */}
        <div className="flex justify-end gap-4 mb-6">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Upvista Digital Assessment
            </h1>
            <p className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Complete your application process in 3 simple steps
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`backdrop-blur-sm border rounded-2xl p-6 mb-8 ${
              isDark 
                ? 'bg-gray-800/50 border-gray-700/50' 
                : 'bg-gradient-to-br from-white/70 to-indigo-50/40 border-indigo-200'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <div className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Step {currentStep} of 3
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {currentStep === 1 && "Personality Assessment"}
                  {currentStep === 2 && "Technical Assessment"}
                  {currentStep === 3 && "Application Form"}
                </div>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>
                  {Math.round((currentStep / 3) * 100)}%
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Complete</div>
              </div>
            </div>
            
            <div className={`w-full rounded-full h-3 overflow-hidden ${isDark ? 'bg-gray-700/50' : 'bg-gray-200'}`}>
              <motion.div
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / 3) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            
            <div className={`flex justify-between mt-4 text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className={`flex items-center gap-2 ${currentStep >= 1 ? (isDark ? 'text-purple-400' : 'text-indigo-600') : ''}`}>
                <div className={`w-2 h-2 rounded-full ${currentStep >= 1 ? (isDark ? 'bg-purple-500' : 'bg-indigo-600') : (isDark ? 'bg-gray-600' : 'bg-gray-300')}`}></div>
                <span>Personality</span>
              </div>
              <div className={`flex items-center gap-2 ${currentStep >= 2 ? (isDark ? 'text-purple-400' : 'text-indigo-600') : ''}`}>
                <div className={`w-2 h-2 rounded-full ${currentStep >= 2 ? (isDark ? 'bg-purple-500' : 'bg-indigo-600') : (isDark ? 'bg-gray-600' : 'bg-gray-300')}`}></div>
                <span>Technical</span>
              </div>
              <div className={`flex items-center gap-2 ${currentStep >= 3 ? (isDark ? 'text-purple-400' : 'text-indigo-600') : ''}`}>
                <div className={`w-2 h-2 rounded-full ${currentStep >= 3 ? (isDark ? 'bg-purple-500' : 'bg-indigo-600') : (isDark ? 'bg-gray-600' : 'bg-gray-300')}`}></div>
                <span>Application</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Assessment Content */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <PersonalityAssessment
              key="personality"
              onComplete={handlePersonalityComplete}
              isDark={isDark}
            />
          )}
          
          {currentStep === 2 && (
            <TechnicalAssessment
              key="technical"
              onComplete={handleTechnicalComplete}
              isDark={isDark}
            />
          )}
          
          {currentStep === 3 && (
            <ApplicationForm
              key="application"
              personalityAnswers={personalityAnswers}
              technicalAnswers={technicalAnswers}
              selectedPosition={selectedPosition}
              onSubmit={handleApplicationSubmit}
              isDark={isDark}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
    </>
  );
}
