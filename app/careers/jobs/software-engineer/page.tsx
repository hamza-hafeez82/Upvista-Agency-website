"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import AssessmentPopup from "../../components/AssessmentPopup";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function SoftwareEngineerPage() {
  const { isDark } = useTheme();
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  const handleApplyClick = () => {
    setShowAssessmentPopup(true);
  };


  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100'}`}>
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
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Software Engineer
            </h1>
            
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Join our engineering team to architect and build enterprise-grade software systems including ERP, CRM, BI platforms, and scalable backend infrastructure that powers digital transformation across multiple industries.
            </p>
            
            <div className={`flex flex-wrap justify-center gap-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Remote</span>
              <span>Full-time</span>
              <span>2+ years experience</span>
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
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Application Process</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Personality Impression</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Complete our personality assessment to help us understand your work style, communication preferences, and cultural fit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Assessment</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Demonstrate your coding skills through our technical challenges designed to evaluate your problem-solving abilities and technical expertise.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Application Form</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Submit your detailed application with resume, portfolio, and responses to position-specific questions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Evaluation & Screening</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>We will evaluate your application and assessment results. If selected, we'll inform you about the next steps in our screening process.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Interview Process</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Selected candidates will be called for interviews with our technical and HR teams.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Background Check</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>If required for the position, we will conduct a background verification process.</p>
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
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Position Overview</h2>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              We are seeking a Software Engineer with strong foundation in system architecture, software engineering principles, and enterprise software development. You will design and build scalable backend systems, database architectures, and enterprise applications including ERP, CRM, accounting systems, BI platforms, e-commerce solutions, and specialized industry systems. This role requires understanding of SDLC methodologies, distributed systems, and the ability to work across multiple business domains.
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
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Position Description</h2>
            
            {/* Core Engineering Responsibilities */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Core Engineering Responsibilities</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Design and implement scalable system architectures for enterprise applications</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Develop backend systems for business-critical applications including ERP, CRM, and BI platforms</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Build and optimize database systems for accounting, inventory management, and analytics</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Implement robust API architectures and microservices for distributed systems</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Follow SDLC best practices including requirements analysis, system design, and testing</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Design data models and database schemas for complex business processes</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Implement security measures and compliance requirements for enterprise systems</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Optimize system performance and ensure high availability and scalability</li>
              </ul>
            </div>

            {/* Technical Skills & System Knowledge */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Skills & System Knowledge</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong foundation in software engineering principles, algorithms, and data structures</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Proficiency in backend development (Node.js, Python, Java, C#, or similar)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Expert knowledge of database systems (PostgreSQL, MySQL, MongoDB, Redis)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Understanding of system architecture patterns and distributed systems design</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Experience with API design, microservices, and service-oriented architecture</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Knowledge of enterprise software domains and business process automation</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Familiarity with SDLC methodologies (Agile, Scrum, Waterfall)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Understanding of software testing principles and quality assurance</li>
              </ul>
            </div>

            {/* Business Domain Knowledge */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Business Domain Knowledge</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Understanding of enterprise systems: ERP (Enterprise Resource Planning), CRM (Customer Relationship Management)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Knowledge of business applications: Accounting systems, SCM (Supply Chain Management), KHRM/HCM (Human Resources Management)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Familiarity with analytics platforms: BI (Business Intelligence), data warehousing, and reporting systems</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Experience with content management: CMS (Content Management Systems), e-commerce platforms, retail systems</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Knowledge of specialized systems: LMS (Learning Management), HIS (Healthcare Information Systems), inventory management</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Understanding of integration patterns and enterprise application integration (EAI)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Familiarity with compliance and security standards for enterprise software</li>
              </ul>
            </div>
            
            {/* Advanced Technical Skills */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Advanced Technical Skills</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Experience with cloud platforms (AWS, Azure, Google Cloud) and serverless architectures</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Knowledge of containerization (Docker, Kubernetes) and orchestration</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Understanding of DevOps practices, CI/CD pipelines, and infrastructure as code</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Experience with message queues, event-driven architecture, and real-time systems</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Knowledge of caching strategies, performance optimization, and scalability patterns</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Understanding of data modeling, ETL processes, and data pipeline architecture</li>
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
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Work Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Hours */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Work Hours</h3>
                <p className="text-gray-300">Full-time position with flexible working hours. Core collaboration hours are 9 AM - 6 PM PKT.</p>
              </div>

              {/* Location */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Location</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Fully remote position with occasional team meetups.</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Salary</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Competitive salary to be determined during the interview process.</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className="mb-2">Salary depends on:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Technical expertise and experience</li>
                    <li>Previous project portfolio</li>
                    <li>Interview performance</li>
                    <li>Market rates and location</li>
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Benefits</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
              Apply for Software Engineer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Ready to join our team? Start your application process today.</p>
          </motion.div>
        </div>
      </section>

      <CareersFooter />

      {/* Assessment Popup */}
      <AssessmentPopup
        isOpen={showAssessmentPopup}
        onClose={() => setShowAssessmentPopup(false)}
        
        position="Software Engineer"
      />
    </div>
  );
}
