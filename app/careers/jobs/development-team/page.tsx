"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function DevelopmentTeamPage() {
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
                Development Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
                Build innovative software solutions and cutting-edge applications that shape the future of technology.
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About the Development Team</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  The Development Team at Upvista Digital is the backbone of our technological innovation. We are responsible for designing, building, and maintaining the software solutions that power our clients' digital transformation journeys. Our team consists of passionate developers, architects, and engineers who are committed to creating high-quality, scalable, and maintainable code.
                </p>
                <p>
                  We work across multiple technology stacks, from modern web frameworks to mobile applications, from cloud-native solutions to AI-powered systems. Our approach combines cutting-edge technologies with proven engineering practices to deliver solutions that not only meet current requirements but also adapt to future needs.
                </p>
                <p>
                  Collaboration is at the heart of our development process. We work closely with product managers, designers, QA engineers, and other stakeholders to ensure that our solutions align with business objectives and provide exceptional user experiences.
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Software Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We develop custom software solutions tailored to our clients' specific needs. This includes web applications, mobile apps, desktop software, and enterprise systems. Our development process follows Agile methodologies with continuous integration and deployment practices.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">System Architecture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our architects design scalable and robust system architectures that can handle growth and adapt to changing requirements. We focus on microservices, cloud-native solutions, and distributed systems that ensure high availability and performance.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Code Quality & Standards</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We maintain high coding standards through code reviews, automated testing, and continuous integration. Our team follows best practices for clean code, documentation, and maintainability to ensure long-term success of our projects.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Technology Innovation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We continuously explore and adopt new technologies, frameworks, and methodologies. Our team stays at the forefront of technological advancement, experimenting with emerging tools and techniques to deliver cutting-edge solutions.
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
                    title: "Senior Software Engineer",
                    description: "Lead complex projects, mentor junior developers, and drive technical decisions. 5+ years experience required."
                  },
                  {
                    title: "Software Engineer",
                    description: "Develop features, write tests, and collaborate on system design. 2-5 years experience preferred."
                  },
                  {
                    title: "Frontend Developer",
                    description: "Create responsive user interfaces and interactive experiences using modern frameworks."
                  },
                  {
                    title: "Backend Developer",
                    description: "Build robust APIs, databases, and server-side logic for scalable applications."
                  },
                  {
                    title: "Full-Stack Developer",
                    description: "Work across the entire technology stack, from frontend to backend and deployment."
                  },
                  {
                    title: "DevOps Engineer",
                    description: "Manage infrastructure, CI/CD pipelines, and ensure reliable deployments."
                  },
                  {
                    title: "Tech Lead",
                    description: "Provide technical leadership, make architectural decisions, and guide team direction."
                  },
                  {
                    title: "Mobile Developer",
                    description: "Develop native and cross-platform mobile applications for iOS and Android."
                  },
                  {
                    title: "AI/ML Engineer",
                    description: "Implement machine learning models and AI-powered features in our applications."
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Remote-First Culture</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our development team operates on a remote-first basis, allowing you to work from anywhere in the world. We provide all necessary tools and equipment, including high-performance laptops, monitors, and software licenses. Our communication is primarily through Slack, video calls, and collaborative development tools.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We have flexible working hours to accommodate different time zones and personal schedules. Core collaboration hours are typically 10 AM - 3 PM EST, but we understand that great code can be written at any time.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Collaborative Environment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We foster a collaborative environment where knowledge sharing is encouraged. Regular code reviews, pair programming sessions, and technical discussions are part of our daily routine. We believe that the best solutions come from collective intelligence and diverse perspectives.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Innovation & Experimentation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We encourage experimentation and innovation. Developers have dedicated time for learning new technologies, contributing to open-source projects, and working on innovative side projects. We regularly organize hackathons and technical workshops to explore new ideas and technologies.
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
                    We invest heavily in our developers' growth. This includes access to online learning platforms, conference attendance, certification programs, and mentorship opportunities. Each developer has a personal development budget that can be used for courses, books, tools, or conference tickets.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Career Paths</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We offer multiple career paths: Individual Contributor (Senior Developer → Principal Engineer → Distinguished Engineer) and Leadership (Tech Lead → Engineering Manager → Director of Engineering). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Onboarding Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    New developers go through a comprehensive 4-week onboarding program that includes system overviews, coding standards, development processes, and team introductions. You'll be paired with a mentor who will guide you through your first projects and help you integrate into the team culture.
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
                  <h3 className="text-xl font-semibold text-white mb-2">Technical Excellence</h3>
                  <p className="text-gray-300">Strong programming skills, understanding of software engineering principles, and commitment to writing clean, maintainable code.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
                  <p className="text-gray-300">Passion for learning new technologies and staying updated with industry trends and best practices.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Collaboration Skills</h3>
                  <p className="text-gray-300">Ability to work effectively in a team, communicate clearly, and contribute to a positive team culture.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Problem-Solving Mindset</h3>
                  <p className="text-gray-300">Strong analytical thinking and ability to break down complex problems into manageable solutions.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Quality Focus</h3>
                  <p className="text-gray-300">Commitment to delivering high-quality software with proper testing, documentation, and performance optimization.</p>
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Development Team?</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Be part of a team that&apos;s building the future of technology. Join us and contribute to innovative projects that make a real difference.
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
