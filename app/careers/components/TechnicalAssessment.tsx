"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { technicalQuestions } from "../data/technicalQuestions";

interface TechnicalAssessmentProps {
  onComplete: (answers: { [key: number]: string }, position: string) => void;
}

const positionOptions = [
  "Software Engineer",
  "QA Engineer", 
  "Full Stack Developer",
  "DevOps & Cloud Engineer",
  "Full Stack Web Development Intern",
  "Graphics Design Intern"
];


export default function TechnicalAssessment({ onComplete }: TechnicalAssessmentProps) {
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
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Select Your Position</h2>
          <p className="text-gray-300 mb-8">
            Please select the position you&apos;re applying for to receive relevant technical questions.
          </p>
          
          <div className="space-y-4">
            {positionOptions.map((position) => (
              <motion.button
                key={position}
                onClick={() => handlePositionSelect(position)}
                className="w-full text-left p-4 rounded-lg border border-gray-600 bg-gray-700/50 text-gray-300 hover:border-purple-500 hover:bg-purple-500/20 hover:text-white transition-all duration-200"
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
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 md:p-8">
        {/* Question Progress */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <h2 className="text-lg md:text-xl font-semibold text-white">Technical Assessment</h2>
            <span className="text-gray-400 text-sm md:text-base">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-2 md:h-3">
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
          <h3 className="text-lg md:text-2xl font-bold text-white mb-6 md:mb-8 leading-relaxed">
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
                      ? "border-purple-500 bg-purple-500/20 text-white"
                      : "border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      currentAnswer === option
                        ? "border-purple-400 bg-purple-400"
                        : "border-gray-500"
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
                className="w-full p-4 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
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
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!currentAnswer}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
              !currentAnswer
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
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
