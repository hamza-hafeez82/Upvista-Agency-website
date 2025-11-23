"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { technicalQuestions } from "../data/technicalQuestions";

interface TechnicalAssessmentProps {
  onComplete: (answers: { [key: number]: string }, position: string) => void;
  isDark: boolean;
}

const positionOptions = [
  "Software Engineer",
  "QA Engineer", 
  "Full Stack Developer",
  "DevOps & Cloud Engineer",
  "Full Stack Web Development Intern",
  "Graphics Design Intern",
  "Motion Graphics Designer"
];


export default function TechnicalAssessment({ onComplete, isDark }: TechnicalAssessmentProps) {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const questions = selectedPosition ? technicalQuestions[selectedPosition] || [] : [];

  const handlePositionSelect = (position: string) => {
    setSelectedPosition(position);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = { ...answers };
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers, selectedPosition);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (!selectedPosition) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <div className={`backdrop-blur-sm border rounded-2xl p-8 ${
          isDark 
            ? 'bg-gray-800/50 border-gray-700/50' 
            : 'bg-gradient-to-br from-white/70 to-indigo-50/40 border-indigo-200'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Select Your Position</h2>
          <p className={`mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Please select the position you&apos;re applying for to receive relevant technical questions.
          </p>
          
          <div className="space-y-4">
            {positionOptions.map((position) => (
              <motion.button
                key={position}
                onClick={() => handlePositionSelect(position)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  isDark 
                    ? 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-purple-500 hover:bg-purple-500/20 hover:text-white' 
                    : 'border-indigo-200 bg-white text-gray-700 hover:border-indigo-500 hover:bg-indigo-100 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {position}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  const currentAnswer = answers[currentQuestion] || "";
  const currentQ = questions[currentQuestion] as { question: string; type: string; options: string[] };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <div className={`backdrop-blur-sm border rounded-2xl p-4 md:p-8 ${
        isDark 
          ? 'bg-gray-800/50 border-gray-700/50' 
          : 'bg-gradient-to-br from-white/70 to-indigo-50/40 border-indigo-200'
      }`}>
        {/* Question Progress */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <h2 className={`text-lg md:text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Assessment</h2>
            <span className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className={`w-full rounded-full h-2 md:h-3 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200'}`}>
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 md:h-3 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-6 md:mb-8">
          <h3 className={`text-lg md:text-2xl font-bold mb-6 md:mb-8 leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {currentQ.question}
          </h3>

          {/* Answer Options */}
          {currentQ.type === "mcq" ? (
            <div className="space-y-4">
              {currentQ.options.map((option: string, index: number) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    currentAnswer === option
                      ? (isDark 
                          ? "border-purple-500 bg-purple-500/20 text-white" 
                          : "border-indigo-500 bg-indigo-100 text-gray-900")
                      : (isDark 
                          ? "border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700" 
                          : "border-indigo-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50")
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      currentAnswer === option
                        ? (isDark ? "border-purple-400 bg-purple-400" : "border-indigo-600 bg-indigo-600")
                        : (isDark ? "border-gray-500" : "border-gray-400")
                    }`} />
                    <span className="font-medium">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <div>
              <input
                type="text"
                value={currentAnswer}
                onChange={(e) => handleAnswerSelect(e.target.value)}
                placeholder="Type your answer here..."
                className={`w-full p-4 rounded-lg border focus:outline-none ${
                  isDark 
                    ? 'border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500' 
                    : 'border-indigo-200 bg-white text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                }`}
              />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentQuestion === 0
                ? (isDark 
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed" 
                    : "bg-gray-200 text-gray-400 cursor-not-allowed")
                : (isDark 
                    ? "bg-gray-700 text-white hover:bg-gray-600" 
                    : "bg-white border border-indigo-200 text-gray-900 hover:bg-indigo-50")
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!currentAnswer}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
              !currentAnswer
                ? (isDark 
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed" 
                    : "bg-gray-200 text-gray-400 cursor-not-allowed")
                : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/25"
            }`}
          >
            {currentQuestion === questions.length - 1 ? "Complete Assessment" : "Next"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
