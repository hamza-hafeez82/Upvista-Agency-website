"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import AssessmentPopup from "../../components/AssessmentPopup";
import Link from "next/link";

export default function FullStackDeveloperPage() {
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  const handleApplyClick = () => {
    setShowAssessmentPopup(true);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <CareersHeader />
      
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <Link href="/careers/apply">
          <button className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Job Openings
          </button>
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span className="text-purple-300 text-sm font-medium">Development Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Full Stack Developer
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build end-to-end solutions that power our clients' digital transformation with expertise across the entire technology stack.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <span>Remote</span>
              <span>Full-time</span>
              <span>3+ years experience</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Application Process</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personality Impression</h3>
                  <p className="text-gray-300">Complete our personality assessment to help us understand your work style, communication preferences, and cultural fit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Assessment</h3>
                  <p className="text-gray-300">Demonstrate your full-stack development skills through our comprehensive technical challenges covering frontend, backend, and database technologies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Application Form</h3>
                  <p className="text-gray-300">Submit your detailed application with resume, portfolio, and responses to position-specific questions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Evaluation & Screening</h3>
                  <p className="text-gray-300">We will evaluate your application and assessment results. If selected, we'll inform you about the next steps in our screening process.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Interview Process</h3>
                  <p className="text-gray-300">Selected candidates will be called for interviews with our technical and HR teams.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Background Check</h3>
                  <p className="text-gray-300">If required for the position, we will conduct a background verification process.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Position Overview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Position Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are seeking an experienced Full Stack Developer to join our development team. You will be responsible for building complete web applications from frontend to backend, working with modern technologies and frameworks. This role offers the opportunity to work on diverse projects, collaborate with cross-functional teams, and contribute to creating scalable, high-performance solutions that drive our clients' business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Position Description */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Position Description</h2>
            
            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Key Responsibilities</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Develop and maintain full-stack web applications using modern frameworks and technologies</li>
                <li className="text-gray-300">Design and implement responsive user interfaces with optimal user experience</li>
                <li className="text-gray-300">Build robust backend APIs and database architectures</li>
                <li className="text-gray-300">Collaborate with designers, product managers, and other developers</li>
                <li className="text-gray-300">Optimize applications for maximum speed and scalability</li>
                <li className="text-gray-300">Implement security and data protection measures</li>
                <li className="text-gray-300">Participate in code reviews and contribute to technical documentation</li>
              </ul>
            </div>

            {/* Expected Knowledge/Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Required Skills & Knowledge</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Proficiency in frontend technologies (React, Vue, Angular, HTML5, CSS3, JavaScript/TypeScript)</li>
                <li className="text-gray-300">Strong backend development skills (Node.js, Python, Java, or .NET)</li>
                <li className="text-gray-300">Experience with databases (PostgreSQL, MySQL, MongoDB, Redis)</li>
                <li className="text-gray-300">Knowledge of RESTful APIs, GraphQL, and microservices architecture</li>
                <li className="text-gray-300">Experience with version control systems (Git) and collaborative development</li>
                <li className="text-gray-300">Understanding of web security principles and best practices</li>
              </ul>
            </div>

            {/* Additional Knowledge/Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Preferred Skills</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Experience with cloud platforms (AWS, Azure, Google Cloud)</li>
                <li className="text-gray-300">Knowledge of containerization and orchestration (Docker, Kubernetes)</li>
                <li className="text-gray-300">Experience with testing frameworks and CI/CD pipelines</li>
                <li className="text-gray-300">Understanding of DevOps practices and infrastructure as code</li>
                <li className="text-gray-300">Experience with mobile app development (React Native, Flutter)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Work Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Hours */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Work Hours</h3>
                <p className="text-gray-300">Full-time position with flexible working hours. Core collaboration hours are 9 AM - 6 PM PKT.</p>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
                <p className="text-gray-300 mb-4">Fully remote position with occasional team meetups.</p>
                <div className="text-sm text-gray-400">
                  <p className="mb-2">Remote work includes:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Home office setup support</li>
                    <li>Flexible schedule within team hours</li>
                    <li>Digital collaboration tools</li>
                    <li>Quarterly team gatherings</li>
                  </ul>
                </div>
              </div>

              {/* Salary */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Salary</h3>
                <p className="text-gray-300 mb-4">Competitive salary to be determined during the interview process.</p>
                <div className="text-sm text-gray-400">
                  <p className="mb-2">Salary depends on:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Technical expertise and experience</li>
                    <li>Full-stack portfolio and projects</li>
                    <li>Interview performance</li>
                    <li>Market rates and location</li>
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Health insurance coverage</li>
                  <li>• Professional development budget</li>
                  <li>• Latest technology equipment</li>
                  <li>• Flexible working arrangements</li>
                  <li>• Performance-based bonuses</li>
                  <li>• Team building activities</li>
                </ul>
              </div>
            </div>

            {/* Vacations */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Vacation Policy</h3>
              <p className="text-gray-300">
                20 paid vacation days per year, plus national holidays. Flexible vacation scheduling with team coordination.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Button */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button 
              onClick={handleApplyClick}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              Apply for Full Stack Developer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-gray-400 mt-4">Ready to join our team? Start your application process today.</p>
          </motion.div>
        </div>
      </section>

      <CareersFooter />

      {/* Assessment Popup */}
      <AssessmentPopup
        isOpen={showAssessmentPopup}
        onClose={() => setShowAssessmentPopup(false)}
        
        position="Full Stack Developer"
      />
    </div>
  );
}
