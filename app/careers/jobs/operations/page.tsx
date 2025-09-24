"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function OperationsPage() {
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
                Operations
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
                Optimize business processes and ensure operational excellence that drives efficiency and supports organizational growth.
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Operations</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  The Operations team at Upvista Digital is responsible for optimizing business processes, ensuring operational excellence, and supporting the smooth execution of all organizational activities. We focus on improving efficiency, reducing costs, and enhancing productivity across all departments and functions.
                </p>
                <p>
                  Our team manages day-to-day operations, process improvement initiatives, vendor relationships, and administrative functions that keep the organization running smoothly. We work closely with all departments to identify opportunities for improvement, implement best practices, and ensure that our operations support business objectives and client delivery.
                </p>
                <p>
                  We believe that operational excellence is the foundation of sustainable business success. Our team is passionate about continuous improvement, process optimization, and creating efficient systems that enable our teams to focus on delivering exceptional value to our clients while maintaining high standards of operational performance.
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Process Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We analyze and optimize business processes across all departments to improve efficiency, reduce waste, and enhance productivity. Our process improvement initiatives include workflow analysis, automation implementation, and best practice adoption to ensure optimal operational performance.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Vendor Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We manage relationships with vendors and suppliers, negotiate contracts, and ensure that all external partnerships support our operational needs and business objectives. Our vendor management includes performance monitoring, cost optimization, and quality assurance.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Administrative Operations</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We handle administrative functions that support organizational operations including office management, facilities coordination, and administrative support services. Our administrative operations ensure that all teams have the resources and support they need to perform effectively.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Performance Monitoring</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We monitor operational performance, track key metrics, and provide regular reporting on operational efficiency and effectiveness. Our performance monitoring includes KPI tracking, operational dashboards, and regular reviews to ensure continuous improvement and operational excellence.
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
                    title: "Senior Operations Manager",
                    description: "Lead operations initiatives, manage operational teams, and drive process improvements. 5+ years operations experience required."
                  },
                  {
                    title: "Operations Analyst",
                    description: "Analyze operational processes, identify improvement opportunities, and support operational decision-making."
                  },
                  {
                    title: "Process Improvement Specialist",
                    description: "Design and implement process improvements, manage change initiatives, and ensure operational efficiency."
                  },
                  {
                    title: "Vendor Management Specialist",
                    description: "Manage vendor relationships, negotiate contracts, and ensure vendor performance and compliance."
                  },
                  {
                    title: "Administrative Coordinator",
                    description: "Handle administrative tasks, coordinate office operations, and provide support to various departments."
                  },
                  {
                    title: "Operations Coordinator",
                    description: "Support operational activities, coordinate cross-functional initiatives, and ensure smooth operations."
                  },
                  {
                    title: "Quality Assurance Manager",
                    description: "Ensure operational quality standards, manage quality processes, and implement quality improvements."
                  },
                  {
                    title: "Business Process Analyst",
                    description: "Analyze business processes, document procedures, and recommend process improvements and optimizations."
                  },
                  {
                    title: "Operations Director",
                    description: "Lead operations strategy, manage operations teams, and ensure operational alignment with business goals."
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Remote-First Operational Environment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our operations team operates in a remote-first environment that supports operational efficiency and cross-functional collaboration. We provide access to operational tools, project management systems, and collaboration platforms. Our communication emphasizes process documentation, clear procedures, and efficient coordination.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We have flexible working hours to accommodate different time zones and operational needs. Core collaboration hours are 10 AM - 3 PM EST, but we understand that operational support often requires availability during various business hours.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Efficiency-Focused Culture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We foster an efficiency-focused culture where continuous improvement, process optimization, and operational excellence are prioritized. Regular process reviews, efficiency assessments, and improvement initiatives ensure that our operations remain effective and support business objectives.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Cross-Functional Collaboration</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We emphasize cross-functional collaboration where operations works closely with all departments to support organizational efficiency. Regular coordination meetings, process reviews, and improvement initiatives ensure that our operations align with departmental needs and business objectives.
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
                    We invest heavily in our operations team's growth through access to operations conferences (APICS, Lean Six Sigma), certification programs (PMP, Lean Six Sigma, Operations Management), and advanced training programs. Each team member has a personal development budget for courses, books, tools, and conference attendance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Career Paths</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We offer multiple career paths: Individual Contributor (Specialist → Senior Specialist → Principal Specialist → Distinguished Specialist) and Leadership (Team Lead → Manager → Director of Operations → COO). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Onboarding Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    New operations team members go through a comprehensive 4-week onboarding program that includes operational procedures, system training, and cross-functional introductions. You'll be paired with a senior operations team member mentor who will guide you through your first operational projects and help you understand our efficiency-focused approach.
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
                  <h3 className="text-xl font-semibold text-white mb-2">Process Orientation</h3>
                  <p className="text-gray-300">Strong understanding of business processes, operational procedures, and ability to identify improvement opportunities while implementing efficient solutions that enhance organizational performance and productivity.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Analytical Skills</h3>
                  <p className="text-gray-300">Strong analytical and problem-solving skills to analyze operational data, identify inefficiencies, and develop solutions that improve processes, reduce costs, and enhance operational effectiveness.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Organizational Skills</h3>
                  <p className="text-gray-300">Excellent organizational and coordination skills to manage multiple operational activities, coordinate cross-functional initiatives, and ensure that all operational processes run smoothly and efficiently.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Communication Skills</h3>
                  <p className="text-gray-300">Clear communication skills to coordinate with various departments, document processes, and present operational insights to stakeholders while ensuring effective collaboration and information sharing.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Improvement Mindset</h3>
                  <p className="text-gray-300">Commitment to continuous improvement, process optimization, and operational excellence while staying updated with best practices and industry trends that can enhance organizational efficiency.</p>
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Our Operations?</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Be part of a team that&apos;s driving operational excellence. Join us and help optimize our processes for maximum efficiency and growth.
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
