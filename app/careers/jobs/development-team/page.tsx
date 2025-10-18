"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";

export default function DevelopmentTeamPage() {
  const { isDark } = useTheme();
  
  return (
    <>
      <CareersHeader />
      
      <div className={`min-h-screen pt-20 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white' 
          : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 text-gray-900'
      }`}>
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
              <h1 className={`text-5xl md:text-7xl font-bold mb-8 drop-shadow-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Development Team
              </h1>
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12 ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Build innovative software solutions and cutting-edge applications that shape the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers/apply"
                  className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg ${
                    isDark 
                      ? 'bg-white text-slate-900 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/careers/jobs"
                  className={`inline-flex items-center px-8 py-4 bg-transparent font-semibold rounded-lg transition-all duration-200 border ${
                    isDark 
                      ? 'text-white hover:bg-white/10 border-white/30' 
                      : 'text-gray-900 hover:bg-purple-100 border-purple-400'
                  }`}
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>About the Development Team</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className={`space-y-8 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>What We Do</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className="space-y-8">
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Software Development</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We develop custom software solutions tailored to our clients' specific needs. This includes web applications, mobile apps, desktop software, and enterprise systems. Our development process follows Agile methodologies with continuous integration and deployment practices.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>System Architecture</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our architects design scalable and robust system architectures that can handle growth and adapt to changing requirements. We focus on microservices, cloud-native solutions, and distributed systems that ensure high availability and performance.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Code Quality & Standards</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We maintain high coding standards through code reviews, automated testing, and continuous integration. Our team follows best practices for clean code, documentation, and maintainability to ensure long-term success of our projects.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technology Innovation</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Team Structure & Roles</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
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
                  <div key={role.title} className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10' 
                    : 'bg-white/60 border-purple-300/50 hover:border-purple-500/60 hover:bg-white/80'
                }`}>
                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{role.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{role.description}</p>
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Work Culture & Environment</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Remote-First Culture</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our development team operates on a remote-first basis, allowing you to work from anywhere in the world. We provide all necessary tools and equipment, including high-performance laptops, monitors, and software licenses. Our communication is primarily through Slack, video calls, and collaborative development tools.
                  </p>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We have flexible working hours to accommodate different time zones and personal schedules. Core collaboration hours are typically 10 AM - 3 PM EST, but we understand that great code can be written at any time.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Collaborative Environment</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We foster a collaborative environment where knowledge sharing is encouraged. Regular code reviews, pair programming sessions, and technical discussions are part of our daily routine. We believe that the best solutions come from collective intelligence and diverse perspectives.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Innovation & Experimentation</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Career Development</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Learning & Development</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We invest heavily in our developers' growth. This includes access to online learning platforms, conference attendance, certification programs, and mentorship opportunities. Each developer has a personal development budget that can be used for courses, books, tools, or conference tickets.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Career Paths</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We offer multiple career paths: Individual Contributor (Senior Developer → Principal Engineer → Distinguished Engineer) and Leadership (Tech Lead → Engineering Manager → Director of Engineering). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Onboarding Process</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>What We Expect</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${
                  isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}></div>
              </div>
              
              <div className="space-y-6">
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Excellence</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong programming skills, understanding of software engineering principles, and commitment to writing clean, maintainable code.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Continuous Learning</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Passion for learning new technologies and staying updated with industry trends and best practices.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Collaboration Skills</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Ability to work effectively in a team, communicate clearly, and contribute to a positive team culture.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Problem-Solving Mindset</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong analytical thinking and ability to break down complex problems into manageable solutions.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${
                  isDark ? 'border-purple-500' : 'border-purple-400'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quality Focus</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Commitment to delivering high-quality software with proper testing, documentation, and performance optimization.</p>
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
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-12 ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-pink-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ready to Join Our Development Team?</h3>
                <p className={`text-xl mb-10 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                    className={`inline-flex items-center px-10 py-4 font-semibold rounded-lg transition-all duration-200 border ${
                      isDark 
                        ? 'bg-white/10 text-white hover:bg-white/20 border-white/20' 
                        : 'bg-white/30 text-gray-900 hover:bg-white/50 border-purple-400'
                    }`}
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
