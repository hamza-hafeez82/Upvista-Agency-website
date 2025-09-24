"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import AssessmentPopup from "../../components/AssessmentPopup";
import Link from "next/link";

export default function WebDevelopmentInternPage() {
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  const handleApplyClick = () => {
    setShowAssessmentPopup(true);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <CareersHeader />
      
      {/* Back Button */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/careers/apply">
            <button className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Job Openings
            </button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gray-400 text-sm mb-6">
              Internship Program
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Full Stack Web Development Intern
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Develop comprehensive full-stack web development skills with hands-on experience in both frontend and backend technologies while working on real projects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <span>Remote</span>
              <span>Internship</span>
              <span>Entry-level</span>
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
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personality Assessment</h3>
                  <p className="text-gray-300">Complete our personality assessment to help us understand your learning style, communication preferences, and cultural fit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Full Stack Technical Assessment</h3>
                  <p className="text-gray-300">Complete a comprehensive coding assessment covering both frontend and backend development to demonstrate your programming knowledge and problem-solving skills.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Application Form</h3>
                  <p className="text-gray-300">Submit your application with academic records, any relevant projects, and responses to internship-specific questions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Evaluation & Selection</h3>
                  <p className="text-gray-300">We will evaluate your application and assessment results. Selected candidates will be notified about the next steps.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Interview Process</h3>
                  <p className="text-gray-300">Selected candidates will be called for a friendly interview to discuss your goals and expectations.</p>
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
            <h2 className="text-3xl font-bold text-white mb-8">Internship Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our Full Stack Web Development Internship program is designed for students and recent graduates who want to gain comprehensive experience in modern web development. You will work on real projects under the guidance of experienced developers, learn industry best practices across both frontend and backend technologies, and contribute to actual client deliverables. This is an excellent opportunity to build your portfolio and kickstart your career as a full-stack web developer.
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
            <h2 className="text-3xl font-bold text-white mb-8">What You'll Learn</h2>
            
            {/* Learning Objectives */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Learning Objectives</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Develop responsive websites using HTML5, CSS3, and JavaScript</li>
                <li className="text-gray-300">Work with modern frontend frameworks like React, Vue.js, or Angular</li>
                <li className="text-gray-300">Learn backend development with Node.js, Python, or similar technologies</li>
                <li className="text-gray-300">Understand database design and implementation with SQL and NoSQL databases</li>
                <li className="text-gray-300">Build RESTful APIs and understand microservices architecture</li>
                <li className="text-gray-300">Learn version control with Git and collaborative development workflows</li>
                <li className="text-gray-300">Experience the complete software development lifecycle</li>
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Your Responsibilities</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Assist in developing and maintaining full-stack web applications</li>
                <li className="text-gray-300">Work on both frontend user interfaces and backend server logic</li>
                <li className="text-gray-300">Participate in code reviews and team meetings</li>
                <li className="text-gray-300">Contribute to documentation and testing</li>
                <li className="text-gray-300">Learn and apply industry best practices</li>
                <li className="text-gray-300">Complete assigned projects and tasks on time</li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Requirements</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Currently enrolled in or recently graduated from computer science or related field</li>
                <li className="text-gray-300">Basic knowledge of HTML, CSS, and JavaScript</li>
                <li className="text-gray-300">Understanding of programming concepts and logic</li>
                <li className="text-gray-300">Familiarity with at least one programming language</li>
                <li className="text-gray-300">Strong desire to learn full-stack web development</li>
                <li className="text-gray-300">Good communication skills and teamwork attitude</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internship Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Internship Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Duration */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Duration</h3>
                <p className="text-gray-300">3-6 months internship program with flexible start dates.</p>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
                <p className="text-gray-300 mb-4">Fully remote internship with virtual mentorship.</p>
                <div className="text-sm text-gray-400">
                  <p className="mb-2">Remote internship includes:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Virtual onboarding and training</li>
                    <li>Regular video meetings with mentors</li>
                    <li>Digital collaboration tools access</li>
                    <li>Flexible working hours</li>
                  </ul>
                </div>
              </div>

              {/* Stipend */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Stipend</h3>
                <p className="text-gray-300 mb-4">Competitive stipend based on performance and contribution.</p>
                <div className="text-sm text-gray-400">
                  <p className="mb-2">Stipend factors:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Performance evaluation</li>
                    <li>Project contribution</li>
                    <li>Learning progress</li>
                    <li>Team collaboration</li>
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Mentorship from experienced developers</li>
                  <li>• Real project experience</li>
                  <li>• Portfolio building opportunities</li>
                  <li>• Certificate of completion</li>
                  <li>• Potential job offer</li>
                  <li>• Networking opportunities</li>
                </ul>
              </div>
            </div>

            {/* Schedule */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Schedule</h3>
              <p className="text-gray-300">
                Flexible 20-30 hours per week. Core collaboration hours are 9 AM - 6 PM PKT. Perfect for students balancing academics and internship.
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
              Apply for Web Development Internship
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-gray-400 mt-4">Ready to start your web development journey? Apply for our internship program today.</p>
          </motion.div>
        </div>
      </section>

      <CareersFooter />

      {/* Assessment Popup */}
      <AssessmentPopup
        isOpen={showAssessmentPopup}
        onClose={() => setShowAssessmentPopup(false)}
        
        position="Full Stack Web Development Intern"
      />
    </div>
  );
}
