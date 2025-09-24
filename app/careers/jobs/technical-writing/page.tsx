"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function TechnicalWritingPage() {
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
                Technical Writing
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
                Create clear, comprehensive documentation and technical content that empowers users and supports product success.
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Technical Writing</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  The Technical Writing team at Upvista Digital is responsible for creating clear, comprehensive, and user-friendly documentation that helps our clients and users understand and effectively use our products and services. We bridge the gap between complex technical concepts and practical user needs through well-crafted content and documentation.
                </p>
                <p>
                  Our team creates a wide range of technical content including user guides, API documentation, system manuals, troubleshooting guides, and training materials. We work closely with development, product, and support teams to ensure that our documentation is accurate, up-to-date, and provides the information users need to succeed with our solutions.
                </p>
                <p>
                  We believe that excellent documentation is essential for user success and product adoption. Our team is passionate about creating content that is not only technically accurate but also accessible, engaging, and helpful to users of all technical backgrounds, contributing to overall user satisfaction and product success.
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
                  <h3 className="text-2xl font-semibold text-white mb-4">User Documentation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We create comprehensive user guides, tutorials, and help documentation that enable users to understand and effectively use our products. Our user documentation includes step-by-step instructions, screenshots, examples, and troubleshooting information to support user success and reduce support requests.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">API Documentation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We develop detailed API documentation including endpoint descriptions, parameter specifications, code examples, and integration guides. Our API documentation helps developers understand how to integrate with our services and build applications that leverage our platform capabilities.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Technical Content Creation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We create various forms of technical content including blog posts, whitepapers, case studies, and knowledge base articles. Our content helps users understand technical concepts, learn best practices, and stay informed about product updates and new features.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Documentation Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We maintain and update existing documentation to ensure accuracy and relevance. Our documentation management includes version control, content review processes, and collaboration with development teams to keep documentation synchronized with product changes and updates.
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
                    title: "Senior Technical Writer",
                    description: "Lead documentation projects, mentor junior writers, and define content standards. 5+ years technical writing experience required."
                  },
                  {
                    title: "Technical Writer",
                    description: "Create user guides, API documentation, and technical content. 2-5 years writing experience preferred."
                  },
                  {
                    title: "API Documentation Specialist",
                    description: "Specialize in API documentation, developer guides, and integration tutorials for technical audiences."
                  },
                  {
                    title: "User Experience Writer",
                    description: "Focus on user-facing documentation, help content, and materials that support user onboarding and success."
                  },
                  {
                    title: "Content Developer",
                    description: "Create technical blog posts, whitepapers, and marketing content that explains technical concepts to various audiences."
                  },
                  {
                    title: "Documentation Manager",
                    description: "Manage documentation projects, coordinate with development teams, and ensure content quality and consistency."
                  },
                  {
                    title: "Knowledge Base Specialist",
                    description: "Maintain knowledge bases, create troubleshooting guides, and organize information for easy user access."
                  },
                  {
                    title: "Technical Editor",
                    description: "Review and edit technical content for accuracy, clarity, and consistency across all documentation and materials."
                  },
                  {
                    title: "Technical Writing Lead",
                    description: "Lead technical writing strategy, manage writing teams, and ensure documentation excellence across all products."
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Remote-First Writing Environment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our technical writing team operates in a remote-first environment that supports focused writing and collaborative content creation. We provide access to documentation tools, content management systems, and collaboration platforms. Our communication emphasizes clear writing, content review processes, and knowledge sharing.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We have flexible working hours to accommodate different writing rhythms and time zones. Core collaboration hours are 10 AM - 3 PM EST, but we understand that great writing often happens during periods of focused concentration.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Clarity-Focused Culture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We foster a clarity-focused culture where clear communication, user-centered writing, and content quality are prioritized. Regular content reviews, user feedback sessions, and writing workshops ensure that our documentation remains clear, helpful, and accessible to all users.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Collaborative Writing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We emphasize collaborative writing where technical writers work closely with developers, product managers, and support teams to create accurate and helpful documentation. Regular content planning sessions, review processes, and feedback loops ensure that our documentation meets user needs and technical accuracy.
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
                    We invest heavily in our technical writing team's growth through access to writing conferences (STC, Write the Docs, Content Strategy), certification programs (CPTC, STC), and advanced training programs. Each team member has a personal development budget for courses, books, tools, and conference attendance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Career Paths</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We offer multiple career paths: Individual Contributor (Writer → Senior Writer → Principal Writer → Distinguished Writer) and Leadership (Team Lead → Manager → Director of Technical Writing). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Onboarding Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    New technical writing team members go through a comprehensive 4-week onboarding program that includes product training, writing style guidelines, and tool familiarization. You'll be paired with a senior technical writer mentor who will guide you through your first documentation projects and help you understand our content standards.
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
                  <h3 className="text-xl font-semibold text-white mb-2">Writing Excellence</h3>
                  <p className="text-gray-300">Strong writing skills, attention to detail, and ability to create clear, concise, and engaging content that effectively communicates complex technical concepts to various audiences with different technical backgrounds.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Technical Understanding</h3>
                  <p className="text-gray-300">Ability to understand technical concepts, learn new technologies quickly, and translate complex information into accessible content that helps users understand and effectively use our products and services.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">User-Centered Approach</h3>
                  <p className="text-gray-300">Strong focus on user needs and experience with ability to create content that addresses user questions, provides helpful guidance, and supports user success with our products and services.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Collaboration Skills</h3>
                  <p className="text-gray-300">Ability to work effectively with technical teams, gather information from subject matter experts, and incorporate feedback to create accurate and comprehensive documentation that meets user needs.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
                  <p className="text-gray-300">Commitment to staying updated with writing best practices, documentation trends, and new technologies while continuously improving writing skills and content quality to better serve users.</p>
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Exceptional Documentation?</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Be part of a team that&apos;s dedicated to clear communication and user success. Join us and help create documentation that empowers our users.
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
