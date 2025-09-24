"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PersonalityAssessment from "../components/PersonalityAssessment";
import TechnicalAssessment from "../components/TechnicalAssessment";
import ApplicationForm from "../components/ApplicationForm";

export default function AssessmentPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Upvista Digital Assessment
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Complete your application process in 3 simple steps
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <div className="text-lg font-semibold text-white">
                  Step {currentStep} of 3
                </div>
                <div className="text-sm text-gray-400">
                  {currentStep === 1 && "Personality Assessment"}
                  {currentStep === 2 && "Technical Assessment"}
                  {currentStep === 3 && "Application Form"}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-400">
                  {Math.round((currentStep / 3) * 100)}%
                </div>
                <div className="text-xs text-gray-500">Complete</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / 3) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            
            <div className="flex justify-between mt-4 text-xs md:text-sm text-gray-400">
              <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-purple-400' : ''}`}>
                <div className={`w-2 h-2 rounded-full ${currentStep >= 1 ? 'bg-purple-500' : 'bg-gray-600'}`}></div>
                <span>Personality</span>
              </div>
              <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-purple-400' : ''}`}>
                <div className={`w-2 h-2 rounded-full ${currentStep >= 2 ? 'bg-purple-500' : 'bg-gray-600'}`}></div>
                <span>Technical</span>
              </div>
              <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-purple-400' : ''}`}>
                <div className={`w-2 h-2 rounded-full ${currentStep >= 3 ? 'bg-purple-500' : 'bg-gray-600'}`}></div>
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
            />
          )}
          
          {currentStep === 2 && (
            <TechnicalAssessment
              key="technical"
              onComplete={handleTechnicalComplete}
            />
          )}
          
          {currentStep === 3 && (
            <ApplicationForm
              key="application"
              personalityAnswers={personalityAnswers}
              technicalAnswers={technicalAnswers}
              selectedPosition={selectedPosition}
              onSubmit={handleApplicationSubmit}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
