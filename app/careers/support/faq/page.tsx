"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How do I apply for a position at Upvista Digital?",
      answer: "You can apply for positions by visiting our job openings page, selecting the role that interests you, and completing our online application process which includes a personality assessment, technical assessment, and application form.",
      category: "application"
    },
    {
      id: 2,
      question: "What is the assessment process like?",
      answer: "Our assessment process includes a 15-question personality assessment (10 MCQs, 5 fill-in-the-blanks) followed by a 15-question technical assessment specific to your chosen position. There&apos;s no time limit, but you must complete assessments in one continuous session without switching tabs.",
      category: "assessment"
    },
    {
      id: 3,
      question: "How long does the recruitment process take?",
      answer: "The recruitment process typically takes 2-4 weeks from application submission to final decision. This includes assessment review, interviews, and reference checks. We'll keep you updated throughout the process.",
      category: "timeline"
    },
    {
      id: 4,
      question: "What are the working hours at Upvista Digital?",
      answer: "Our core collaboration hours are 9 AM - 6 PM PKT (Pakistan Standard Time). We offer flexible work arrangements including remote work options and flexible scheduling for many positions.",
      category: "work"
    },
    {
      id: 5,
      question: "Do you offer remote work opportunities?",
      answer: "Yes, we offer flexible work arrangements including full remote, hybrid, and office-based options depending on the role and team requirements. Remote work policies vary by position and department.",
      category: "work"
    },
    {
      id: 6,
      question: "What benefits do you offer to employees?",
      answer: "We offer competitive benefits including health insurance, paid time off, professional development opportunities, flexible work arrangements, team building activities, and opportunities for career growth within the organization.",
      category: "benefits"
    },
    {
      id: 7,
      question: "Can I apply for multiple positions?",
      answer: "Yes, you can apply for multiple positions that match your qualifications. However, we recommend focusing on roles that best align with your skills and career goals for the best chance of success.",
      category: "application"
    },
    {
      id: 8,
      question: "What happens if I fail the technical assessment?",
      answer: "If you don't meet the technical requirements for a specific role, our recruitment team may suggest alternative positions that better match your skills, or provide feedback for future applications.",
      category: "assessment"
    },
    {
      id: 9,
      question: "Do you hire interns and entry-level candidates?",
      answer: "Yes, we actively recruit interns and entry-level candidates through our internship programs and junior positions. We provide mentorship and training opportunities to help you grow in your career.",
      category: "opportunities"
    },
    {
      id: 10,
      question: "How can I check my application status?",
      answer: "You can check your application status by contacting our recruitment team at careers@upvistadigital.com. We also send regular updates via email throughout the recruitment process.",
      category: "application"
    },
    {
      id: 11,
      question: "What technologies do you work with?",
      answer: "We work with a wide range of technologies including React, Node.js, Python, Java, cloud platforms (AWS, Azure), databases, and various enterprise systems. Specific technologies vary by role and project requirements.",
      category: "technology"
    },
    {
      id: 12,
      question: "Do you provide visa sponsorship?",
      answer: "Visa sponsorship is considered on a case-by-case basis for exceptional candidates in specialized roles. Please contact our HR department for specific information about visa sponsorship policies.",
      category: "visa"
    }
  ];

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "application", name: "Application Process" },
    { id: "assessment", name: "Assessment" },
    { id: "work", name: "Work Environment" },
    { id: "benefits", name: "Benefits" },
    { id: "opportunities", name: "Opportunities" },
    { id: "technology", name: "Technology" },
    { id: "timeline", name: "Timeline" },
    { id: "visa", name: "Visa & Immigration" }
  ];

  const filteredItems = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <CareersHeader />
      
      <div className="fixed top-20 left-4 z-50">
        <Link href="/careers">
          <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </button>
        </Link>
      </div>

      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              FAQ
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about working at Upvista Digital and our recruitment process.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pt-8 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-gray-800 p-8 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
                  Search Questions
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600  text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Search for questions..."
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                  Filter by Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600  text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-gray-400">
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            )}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30  p-8 mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 mb-6">
              Can't find the answer you&apos;re looking for? Our recruitment team is here to help.
            </p>
            <p className="text-gray-300">
              Email us at: <a href="mailto:careers@upvistadigital.com" className="text-purple-400 hover:text-purple-300 underline">careers@upvistadigital.com</a>
            </p>
          </motion.div>

        </div>
      </section>

      <CareersFooter />
    </div>
  );
}
