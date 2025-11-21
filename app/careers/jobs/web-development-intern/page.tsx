"use client";

import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import AssessmentPopup from "../../components/AssessmentPopup";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function WebDevelopmentInternPage() {
  const { isDark } = useTheme();
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  const handleApplyClick = () => {
    setShowAssessmentPopup(true);
  };


  return (
    <>
      <Head>
        <title>Web Development Intern | Upvista Digital Careers - Internship Opportunity</title>
        <meta name="description" content="Apply for Web Development Internship at Upvista Digital. Gain hands-on experience in modern web technologies, work on real projects, and kickstart your career in software development." />
        <meta name="keywords" content="Web Development Internship, Web Developer Intern, Frontend Intern, Web Development Training, Software Internship, Tech Internship, Web Dev Intern Position" />
        <meta property="og:title" content="Web Development Intern | Upvista Digital Careers" />
        <meta property="og:description" content="Apply for Web Development Internship at Upvista Digital. Gain hands-on experience in modern web technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/careers/jobs/web-development-intern" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/careers/jobs/dev.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Intern | Upvista Digital Careers" />
        <meta name="twitter:description" content="Apply for Web Development Internship at Upvista Digital." />
        <link rel="canonical" href="https://www.upvistadigital.com/careers/jobs/web-development-intern" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          'title': 'Web Development Intern',
          'description': 'Apply for Web Development Internship at Upvista Digital. Gain hands-on experience in modern web technologies, work on real projects, and kickstart your career in software development.',
          'identifier': {
            '@type': 'PropertyValue',
            'name': 'Upvista Digital',
            'value': 'WEB_DEV_INTERN_001'
          },
          'datePosted': '2024-01-01',
          'validThrough': '2025-12-31',
          'employmentType': 'INTERN',
          'hiringOrganization': {
            '@type': 'Organization',
            'name': 'Upvista Digital',
            'sameAs': 'https://www.upvistadigital.com'
          },
          'jobLocation': {
            '@type': 'Place',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Lahore',
              'addressRegion': 'Punjab',
              'addressCountry': 'PK'
            }
          },
          'url': 'https://www.upvistadigital.com/careers/jobs/web-development-intern'
        }) }} />
      </Head>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100'}`}>
        <CareersHeader />
      
      {/* Back Button */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/careers/apply">
            <button className={`inline-flex items-center gap-2 transition-colors mb-8 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
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
            <div className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Internship Program
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Full Stack Web Development Intern
            </h1>
            
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Develop comprehensive full-stack web development skills with hands-on experience in both frontend and backend technologies while working on real projects.
            </p>
            
            <div className={`flex flex-wrap justify-center gap-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Application Process</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 border rounded-full flex items-center justify-center ${isDark ? 'border-gray-600' : 'border-purple-400'}`}>
                  <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-purple-600'}`}>1</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Personality Assessment</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Complete our personality assessment to help us understand your learning style, communication preferences, and cultural fit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 border rounded-full flex items-center justify-center ${isDark ? 'border-gray-600' : 'border-purple-400'}`}>
                  <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-purple-600'}`}>2</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Full Stack Technical Assessment</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Complete a comprehensive coding assessment covering both frontend and backend development to demonstrate your programming knowledge and problem-solving skills.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 border rounded-full flex items-center justify-center ${isDark ? 'border-gray-600' : 'border-purple-400'}`}>
                  <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-purple-600'}`}>3</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Application Form</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Submit your application with academic records, any relevant projects, and responses to internship-specific questions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 border rounded-full flex items-center justify-center ${isDark ? 'border-gray-600' : 'border-purple-400'}`}>
                  <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-purple-600'}`}>4</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Evaluation & Selection</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>We will evaluate your application and assessment results. Selected candidates will be notified about the next steps.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-8 h-8 border rounded-full flex items-center justify-center ${isDark ? 'border-gray-600' : 'border-purple-400'}`}>
                  <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-purple-600'}`}>5</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Interview Process</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Selected candidates will be called for a friendly interview to discuss your goals and expectations.</p>
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
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Internship Overview</h2>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>What You'll Learn</h2>
            
            {/* Learning Objectives */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Learning Objectives</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Develop responsive websites using HTML5, CSS3, and JavaScript</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Work with modern frontend frameworks like React, Vue.js, or Angular</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Learn backend development with Node.js, Python, or similar technologies</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Understand database design and implementation with SQL and NoSQL databases</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Build RESTful APIs and understand microservices architecture</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Learn version control with Git and collaborative development workflows</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Experience the complete software development lifecycle</li>
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Responsibilities</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Assist in developing and maintaining full-stack web applications</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Work on both frontend user interfaces and backend server logic</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Participate in code reviews and team meetings</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Contribute to documentation and testing</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Learn and apply industry best practices</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Complete assigned projects and tasks on time</li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Requirements</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Currently enrolled in or recently graduated from computer science or related field</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Basic knowledge of HTML, CSS, and JavaScript</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Understanding of programming concepts and logic</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Familiarity with at least one programming language</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong desire to learn full-stack web development</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Good communication skills and teamwork attitude</li>
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
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Internship Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Duration */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Duration</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>3-6 months internship program with flexible start dates.</p>
              </div>

              {/* Location */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Location</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Fully remote internship with virtual mentorship.</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Stipend</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Competitive stipend based on performance and contribution.</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Benefits</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
              <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Schedule</h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
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
            <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Ready to start your web development journey? Apply for our internship program today.</p>
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
    </>
  );
}
