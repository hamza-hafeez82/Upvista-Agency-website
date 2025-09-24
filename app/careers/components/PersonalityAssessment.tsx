"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface PersonalityAssessmentProps {
  onComplete: (answers: number[]) => void;
}

const personalityQuestions = [
  {
    id: 1,
    question: "When working on a complex project, I prefer to:",
    options: [
      "Break it down into smaller tasks and work systematically",
      "Start with the most interesting parts first",
      "Collaborate with team members from the beginning",
      "Research thoroughly before making any decisions"
    ]
  },
  {
    id: 2,
    question: "In team meetings, I typically:",
    options: [
      "Listen carefully and contribute when I have valuable input",
      "Take initiative to lead the discussion",
      "Ask clarifying questions to ensure understanding",
      "Focus on practical solutions and next steps"
    ]
  },
  {
    id: 3,
    question: "When facing a difficult problem, I:",
    options: [
      "Analyze the problem from multiple angles",
      "Seek input from experienced colleagues",
      "Try different approaches until something works",
      "Research similar problems and solutions online"
    ]
  },
  {
    id: 4,
    question: "I work best when:",
    options: [
      "I have clear deadlines and structured tasks",
      "I have flexibility and autonomy in my approach",
      "I'm working closely with a supportive team",
      "I have access to learning resources and mentorship"
    ]
  },
  {
    id: 5,
    question: "When learning new technologies, I prefer to:",
    options: [
      "Follow structured tutorials and documentation",
      "Experiment hands-on and learn through trial and error",
      "Discuss concepts with peers and mentors",
      "Focus on understanding the underlying principles first"
    ]
  },
  {
    id: 6,
    question: "In stressful situations, I tend to:",
    options: [
      "Stay calm and focus on finding solutions",
      "Communicate openly about challenges with the team",
      "Take breaks to clear my mind and return refreshed",
      "Prioritize tasks and tackle them one by one"
    ]
  },
  {
    id: 7,
    question: "I'm most motivated when:",
    options: [
      "I can see the direct impact of my work",
      "I'm solving challenging technical problems",
      "I'm collaborating with talented colleagues",
      "I'm learning and growing in my role"
    ]
  },
  {
    id: 8,
    question: "When giving feedback to colleagues, I:",
    options: [
      "Focus on specific, actionable improvements",
      "Balance constructive criticism with positive reinforcement",
      "Ask questions to understand their perspective first",
      "Provide examples and suggest alternative approaches"
    ]
  },
  {
    id: 9,
    question: "My ideal work environment includes:",
    options: [
      "Quiet spaces for deep focus work",
      "Collaborative areas for team discussions",
      "Flexible schedules and remote work options",
      "Access to latest tools and technologies"
    ]
  },
  {
    id: 10,
    question: "When prioritizing tasks, I typically:",
    options: [
      "Focus on high-impact, high-urgency items first",
      "Consider dependencies and team coordination needs",
      "Balance technical debt with new feature development",
      "Align with business objectives and user needs"
    ]
  },
  {
    id: 11,
    question: "I prefer to communicate through:",
    options: [
      "Written documentation and detailed emails",
      "Face-to-face conversations and video calls",
      "Instant messaging for quick updates",
      "Structured meetings with clear agendas"
    ]
  },
  {
    id: 12,
    question: "When making decisions, I value:",
    options: [
      "Data-driven insights and evidence",
      "Team consensus and collaborative input",
      "Long-term strategic thinking and planning",
      "Practical implementation and feasibility"
    ]
  },
  {
    id: 13,
    question: "I'm most energized by:",
    options: [
      "Solving complex technical challenges",
      "Mentoring and helping others grow",
      "Learning new technologies and methodologies",
      "Delivering high-quality products to users"
    ]
  },
  {
    id: 14,
    question: "When working with ambiguity, I:",
    options: [
      "Ask clarifying questions to reduce uncertainty",
      "Make reasonable assumptions and iterate",
      "Seek guidance from experienced team members",
      "Research and gather more information first"
    ]
  },
  {
    id: 15,
    question: "I measure success by:",
    options: [
      "Meeting project deadlines and deliverables",
      "Team satisfaction and collaboration quality",
      "Personal growth and skill development",
      "User feedback and product impact"
    ]
  }
];

export default function PersonalityAssessment({ onComplete }: PersonalityAssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(15).fill(-1));

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < 14) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentAnswer = answers[currentQuestion];

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
            <h2 className="text-lg md:text-xl font-semibold text-white">Personality Assessment</h2>
            <span className="text-gray-400 text-sm md:text-base">
              Question {currentQuestion + 1} of 15
            </span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-2 md:h-3">
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 md:h-3 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / 15) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-lg md:text-2xl font-bold text-white mb-6 md:mb-8 leading-relaxed">
            {personalityQuestions[currentQuestion].question}
          </h3>

          {/* Answer Options */}
          <div className="space-y-4">
            {personalityQuestions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  currentAnswer === index
                    ? "border-purple-500 bg-purple-500/20 text-white"
                    : "border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    currentAnswer === index
                      ? "border-purple-400 bg-purple-400"
                      : "border-gray-500"
                  }`} />
                  <span className="font-medium">{option}</span>
                </div>
              </motion.button>
            ))}
          </div>
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
            disabled={currentAnswer === -1}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentAnswer === -1
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/25"
            }`}
          >
            {currentQuestion === 14 ? "Complete Assessment" : "Next"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
