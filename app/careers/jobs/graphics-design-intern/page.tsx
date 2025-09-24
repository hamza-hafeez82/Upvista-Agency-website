"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import AssessmentPopup from "../../components/AssessmentPopup";
import Link from "next/link";

export default function GraphicsDesignInternPage() {
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
              <span className="text-purple-300 text-sm font-medium">Internship Program</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Graphics Design Intern
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unleash your creativity and develop professional design skills while working on real client projects with our experienced design team.
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
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personality Assessment</h3>
                  <p className="text-gray-300">Complete our personality assessment to help us understand your creative style, communication preferences, and cultural fit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Creative Portfolio Review</h3>
                  <p className="text-gray-300">Submit your creative portfolio showcasing your design work, artistic skills, and creative thinking process.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Application Form</h3>
                  <p className="text-gray-300">Submit your application with academic records, portfolio, and responses to design-specific questions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Evaluation & Selection</h3>
                  <p className="text-gray-300">We will evaluate your application and portfolio. Selected candidates will be notified about the next steps.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Interview Process</h3>
                  <p className="text-gray-300">Selected candidates will be called for a creative interview to discuss your design philosophy and goals.</p>
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
              Our Graphics Design Internship program is perfect for creative individuals who want to develop professional design skills and build a strong portfolio. You will work on real client projects under the guidance of experienced designers, learn industry-standard tools and processes, and contribute to actual design deliverables. This is an excellent opportunity to gain practical experience and kickstart your career in graphic design.
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
                <li className="text-gray-300">Master industry-standard design tools (Adobe Creative Suite, Figma, Sketch)</li>
                <li className="text-gray-300">Develop skills in branding, logo design, and visual identity creation</li>
                <li className="text-gray-300">Learn web design principles and user interface design</li>
                <li className="text-gray-300">Understand print design and production processes</li>
                <li className="text-gray-300">Learn about design thinking and creative problem-solving</li>
                <li className="text-gray-300">Experience the complete design workflow from concept to delivery</li>
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Your Responsibilities</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Assist in creating visual designs for various client projects</li>
                <li className="text-gray-300">Participate in design brainstorming sessions and creative meetings</li>
                <li className="text-gray-300">Help with brand development and visual identity projects</li>
                <li className="text-gray-300">Contribute to web and mobile interface designs</li>
                <li className="text-gray-300">Learn and apply design best practices and principles</li>
                <li className="text-gray-300">Build a professional portfolio of design work</li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Requirements</h3>
              <ul className="space-y-4">
                <li className="text-gray-300">Currently enrolled in or recently graduated from high school/university</li>
                <li className="text-gray-300">Basic knowledge of design principles and visual communication</li>
                <li className="text-gray-300">Familiarity with design software (Adobe Creative Suite, Figma, or similar)</li>
                <li className="text-gray-300">Strong creative thinking and artistic abilities</li>
                <li className="text-gray-300">Good communication skills and ability to work in a team</li>
                <li className="text-gray-300">Portfolio showcasing creative work and design projects</li>
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
                    <li>Virtual design reviews and feedback</li>
                    <li>Regular video meetings with mentors</li>
                    <li>Digital collaboration tools access</li>
                    <li>Flexible creative working hours</li>
                  </ul>
                </div>
              </div>

              {/* Stipend */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Stipend</h3>
                <p className="text-gray-300 mb-4">Competitive stipend based on performance and creative contribution.</p>
                <div className="text-sm text-gray-400">
                  <p className="mb-2">Stipend factors:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Creative quality and innovation</li>
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
                  <li>• Mentorship from experienced designers</li>
                  <li>• Real client project experience</li>
                  <li>• Professional portfolio building</li>
                  <li>• Certificate of completion</li>
                  <li>• Potential job offer</li>
                  <li>• Creative networking opportunities</li>
                </ul>
              </div>
            </div>

            {/* Schedule */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Schedule</h3>
              <p className="text-gray-300">
                Flexible 20-30 hours per week. Core collaboration hours are 9 AM - 6 PM PKT. Perfect for students balancing academics and creative work.
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
              Apply for Graphics Design Internship
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-gray-400 mt-4">Ready to unleash your creativity? Apply for our graphics design internship today.</p>
          </motion.div>
        </div>
      </section>

      <CareersFooter />

      {/* Assessment Popup */}
      <AssessmentPopup
        isOpen={showAssessmentPopup}
        onClose={() => setShowAssessmentPopup(false)}
        
        position="Graphics Design Intern"
      />
    </div>
  );
}
