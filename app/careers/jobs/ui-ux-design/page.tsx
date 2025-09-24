"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function UIDesignPage() {
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
                UI/UX Design
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
                Create compelling user experiences and beautiful digital interfaces that engage and inspire users.
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About UI/UX Design</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  The UI/UX Design team at Upvista Digital is responsible for creating intuitive, beautiful, and user-centered digital experiences. We combine creativity with strategic thinking to design interfaces that not only look stunning but also provide exceptional user experiences across all platforms and devices.
                </p>
                <p>
                  Our team works closely with product managers, developers, and stakeholders to understand user needs and business goals. We conduct user research, create wireframes and prototypes, and develop design systems that ensure consistency and scalability across all our products and services.
                </p>
                <p>
                  We believe that great design is invisible - it guides users seamlessly through their journey while solving real problems and creating emotional connections with our brands and products.
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
                  <h3 className="text-2xl font-semibold text-white mb-4">User Research & Analysis</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We conduct comprehensive user research including interviews, surveys, usability testing, and analytics analysis to understand user behavior, needs, and pain points. This research informs all our design decisions and ensures we&apos;re solving real problems.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Interface Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We create beautiful, functional user interfaces for web applications, mobile apps, and digital products. Our designs focus on usability, accessibility, and visual hierarchy while maintaining brand consistency and modern aesthetic standards.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Experience Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We design complete user journeys and experiences, considering every touchpoint from initial discovery to long-term engagement. Our work includes information architecture, user flows, and interaction design that creates meaningful connections with users.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Design Systems</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We develop and maintain comprehensive design systems that ensure consistency across all products and platforms. This includes component libraries, style guides, and design tokens that enable efficient development and scalable design practices.
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
                    title: "Senior UX Designer",
                    description: "Lead complex UX projects, conduct user research, and mentor junior designers. 5+ years experience required."
                  },
                  {
                    title: "UI Designer",
                    description: "Create beautiful, functional interfaces and maintain design systems. Strong visual design skills essential."
                  },
                  {
                    title: "UX Researcher",
                    description: "Conduct user research, usability testing, and analyze user behavior to inform design decisions."
                  },
                  {
                    title: "Product Designer",
                    description: "Work across the entire product design process from research to implementation and iteration."
                  },
                  {
                    title: "Visual Designer",
                    description: "Focus on brand identity, visual communication, and creating compelling visual experiences."
                  },
                  {
                    title: "Motion Graphics Designer",
                    description: "Create animations, micro-interactions, and motion graphics that enhance user experience."
                  },
                  {
                    title: "Design System Lead",
                    description: "Develop and maintain design systems, component libraries, and design standards across products."
                  },
                  {
                    title: "User Researcher",
                    description: "Specialize in user research methods, usability testing, and data analysis to guide design decisions."
                  },
                  {
                    title: "Creative Director",
                    description: "Provide creative leadership, establish design vision, and guide overall design strategy."
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Remote-First Creative Environment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our design team thrives in a remote-first environment that encourages creativity and collaboration. We provide high-end design equipment including Wacom tablets, high-resolution monitors, and access to premium design software. Our communication is primarily through Figma, Slack, and video calls, with regular design critiques and brainstorming sessions.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We have flexible working hours to accommodate different creative rhythms and time zones. Core collaboration hours are 10 AM - 3 PM EST, but we understand that inspiration can strike at any time.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Design-Focused Culture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We foster a design-focused culture where creativity and innovation are celebrated. Regular design critiques, inspiration sharing sessions, and creative challenges keep our team engaged and growing. We encourage experimentation with new tools, techniques, and design trends.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Cross-Functional Collaboration</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We work closely with product managers, developers, and other stakeholders in an agile environment. Our designers participate in sprint planning, user story mapping, and product strategy discussions to ensure design is integral to the product development process.
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
                    We invest heavily in our designers' growth through access to design conferences (Adobe MAX, Figma Config, UX Week), online learning platforms (Skillshare, MasterClass, LinkedIn Learning), and design mentorship programs. Each designer has a personal development budget for courses, books, tools, and conference tickets.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Career Paths</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We offer multiple career paths: Individual Contributor (Designer → Senior Designer → Principal Designer → Distinguished Designer) and Leadership (Design Lead → Design Manager → Director of Design). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Onboarding Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    New designers go through a comprehensive 4-week onboarding program that includes design system overview, brand guidelines, design processes, and team introductions. You'll be paired with a senior designer mentor who will guide you through your first projects and help you integrate into the team culture.
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
                  <h3 className="text-xl font-semibold text-white mb-2">Design Excellence</h3>
                  <p className="text-gray-300">Strong portfolio demonstrating user-centered design thinking, visual design skills, and understanding of design principles and best practices.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">User-Centered Thinking</h3>
                  <p className="text-gray-300">Ability to conduct user research, analyze user needs, and create designs that solve real problems while providing delightful experiences.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Technical Proficiency</h3>
                  <p className="text-gray-300">Proficiency in design tools (Figma, Adobe Creative Suite, Sketch) and understanding of front-end development principles and constraints.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Collaboration Skills</h3>
                  <p className="text-gray-300">Ability to work effectively with cross-functional teams, communicate design decisions clearly, and incorporate feedback constructively.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
                  <p className="text-gray-300">Passion for staying updated with design trends, new tools, and emerging technologies while maintaining focus on user needs.</p>
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Design Team?</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Be part of a team that&apos;s creating beautiful, functional experiences that users love. Join us and contribute to innovative design projects.
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
