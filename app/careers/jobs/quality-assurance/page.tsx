"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function QualityAssurancePage() {
  return (
    <>
      <CareersHeader />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white pt-20">
        {/* Hero Section with Vortex Background */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Vortex Background - Only behind hero */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <Vortex
              backgroundColor="transparent"
              className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full opacity-50"
            >
            </Vortex>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pt-8 pb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl">
                Quality Assurance
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
                Ensure excellence and reliability in every product through comprehensive testing and quality standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers/apply"
                  className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/careers/jobs"
                  className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 border border-white/30"
                >
                  Back to Departments
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          {/* Content Sections */}
          <div className="space-y-24">
            {/* About the Department */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Quality Assurance</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  The Quality Assurance team at Upvista Digital is responsible for ensuring that all our products and services meet the highest standards of quality, reliability, and user experience. We are the guardians of excellence, working closely with development teams to identify issues early and prevent problems from reaching our clients.
                </p>
                <p>
                  Our team employs comprehensive testing methodologies including automated testing, manual testing, performance testing, security testing, and user acceptance testing. We work across all stages of the development lifecycle, from initial planning through deployment and maintenance, to ensure consistent quality delivery.
                </p>
                <p>
                  We believe that quality is not just about finding bugs, but about building confidence in our products and ensuring that they deliver exceptional value to our clients. Our team is passionate about continuous improvement, process optimization, and maintaining the highest standards of excellence in everything we do.
                </p>
              </div>
            </motion.section>

            {/* What We Do */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What We Do</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Test Planning & Strategy</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We develop comprehensive test strategies and plans that cover functional testing, performance testing, security testing, and user acceptance testing. Our planning process includes risk assessment, test case design, and resource allocation to ensure thorough coverage of all product features and requirements.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Automated Testing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We develop and maintain automated test suites using industry-standard tools and frameworks. Our automation efforts include unit testing, integration testing, end-to-end testing, and regression testing to ensure consistent quality and faster delivery cycles.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Manual Testing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We conduct thorough manual testing including exploratory testing, usability testing, and edge case testing. Our manual testing approach focuses on user experience, accessibility, and real-world usage scenarios to identify issues that automated testing might miss.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Quality Process Improvement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We continuously improve our testing processes, methodologies, and tools to enhance efficiency and effectiveness. Our process improvement efforts include metrics analysis, best practice implementation, and knowledge sharing across teams.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Team Structure & Roles */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Team Structure & Roles</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Senior QA Engineer",
                    description: "Lead testing initiatives, mentor junior testers, and define quality standards. 5+ years QA experience required."
                  },
                  {
                    title: "QA Engineer",
                    description: "Execute test plans, identify defects, and ensure product quality. 2-5 years testing experience preferred."
                  },
                  {
                    title: "Test Automation Engineer",
                    description: "Develop and maintain automated test suites, implement testing frameworks, and optimize test execution."
                  },
                  {
                    title: "Performance Test Engineer",
                    description: "Conduct performance testing, load testing, and scalability testing to ensure optimal system performance."
                  },
                  {
                    title: "Security Test Engineer",
                    description: "Perform security testing, vulnerability assessments, and ensure compliance with security standards."
                  },
                  {
                    title: "Mobile Test Engineer",
                    description: "Specialize in mobile application testing across different platforms, devices, and operating systems."
                  },
                  {
                    title: "QA Lead",
                    description: "Manage QA teams, coordinate testing activities, and ensure quality standards across multiple projects."
                  },
                  {
                    title: "Test Analyst",
                    description: "Analyze requirements, design test cases, and provide quality insights to development teams."
                  },
                  {
                    title: "QA Manager",
                    description: "Oversee QA operations, manage quality processes, and ensure organizational quality standards."
                  }
                ].map((role) => (
                  <div key={role.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">{role.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{role.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Work Culture & Environment */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Work Culture & Environment</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Remote-First Quality Environment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our QA team operates in a remote-first environment that supports focused testing and collaborative quality assurance. We provide access to comprehensive testing tools, cloud testing environments, and collaboration platforms. Our communication emphasizes clear documentation, detailed bug reporting, and regular quality reviews.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We have flexible working hours to accommodate different testing schedules and time zones. Core collaboration hours are 10 AM - 3 PM EST, but we understand that thorough testing often requires extended periods of focused attention.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Quality-Focused Culture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We foster a quality-focused culture where attention to detail, thoroughness, and continuous improvement are valued. Regular quality reviews, process improvements, and knowledge sharing sessions ensure that our testing practices remain effective and up-to-date.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Collaborative Testing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We emphasize collaborative testing where QA engineers work closely with developers, product managers, and other stakeholders to ensure quality throughout the development process. Our approach includes early involvement in planning, continuous feedback, and shared responsibility for product quality.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Career Development */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Career Development</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Learning & Development</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We invest heavily in our QA team's growth through access to testing conferences (STPCon, EuroSTAR, QA&Testing), certification programs (ISTQB, CSTE, CSTP), and advanced training programs. Each team member has a personal development budget for courses, tools, and conference attendance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Career Paths</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We offer multiple career paths: Individual Contributor (QA Engineer → Senior QA Engineer → Principal QA Engineer → Distinguished QA Engineer) and Leadership (QA Lead → QA Manager → Director of Quality Assurance). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Onboarding Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    New QA team members go through a comprehensive 4-week onboarding program that includes testing methodology training, tool familiarization, and project introductions. You'll be paired with a senior QA engineer mentor who will guide you through your first testing projects and help you understand our quality standards.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* What We Expect */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What We Expect</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Attention to Detail</h3>
                  <p className="text-gray-300">Strong attention to detail and ability to identify subtle issues, edge cases, and potential problems that could impact user experience or system reliability.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Technical Proficiency</h3>
                  <p className="text-gray-300">Understanding of software development processes, testing methodologies, and ability to work with various testing tools and frameworks effectively.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Problem-Solving Skills</h3>
                  <p className="text-gray-300">Strong analytical and problem-solving skills to investigate issues, reproduce bugs, and work with development teams to resolve quality problems.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Communication Skills</h3>
                  <p className="text-gray-300">Clear communication skills to document issues, provide feedback, and collaborate effectively with cross-functional teams including developers, designers, and product managers.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Quality Mindset</h3>
                  <p className="text-gray-300">Commitment to maintaining high quality standards, continuous improvement of testing processes, and proactive approach to preventing quality issues.</p>
                </div>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ensure Excellence?</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Be part of a team that&apos;s committed to delivering exceptional quality. Join us and help ensure that every product meets our high standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/careers/apply"
                    className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/careers/jobs"
                    className="inline-flex items-center px-10 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                  >
                    View All Departments
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CareersFooter />
    </>
  );
}
