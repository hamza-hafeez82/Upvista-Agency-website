"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";

export default function UIDesignPage() {
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
                UI/UX Design
              </h1>
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Create compelling user experiences and beautiful digital interfaces that engage and inspire users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers/apply"
                  className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg ${isDark ? 'bg-white text-slate-900 hover:bg-gray-100' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'}`}
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/careers/jobs"
                  className={`inline-flex items-center px-8 py-4 bg-transparent font-semibold rounded-lg transition-all duration-200 border ${isDark ? 'text-white hover:bg-white/10 border-white/30' : 'text-gray-900 hover:bg-purple-100 border-purple-400'}`}
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>About UI/UX Design</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
              </div>
              
              <div className={`space-y-8 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>What We Do</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
              </div>
              
              <div className="space-y-8">
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>User Research & Analysis</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We conduct comprehensive user research including interviews, surveys, usability testing, and analytics analysis to understand user behavior, needs, and pain points. This research informs all our design decisions and ensures we&apos;re solving real problems.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Interface Design</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We create beautiful, functional user interfaces for web applications, mobile apps, and digital products. Our designs focus on usability, accessibility, and visual hierarchy while maintaining brand consistency and modern aesthetic standards.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Experience Design</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We design complete user journeys and experiences, considering every touchpoint from initial discovery to long-term engagement. Our work includes information architecture, user flows, and interaction design that creates meaningful connections with users.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Design Systems</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Team Structure & Roles</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
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
                  <div key={role.title} className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10' : 'bg-white/60 border-purple-300/50 hover:border-purple-500/60 hover:bg-white/80'}`}>
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
                <div className={`w-24 h-1 mx-auto mb-8 ${isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Remote-First Creative Environment</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our design team thrives in a remote-first environment that encourages creativity and collaboration. We provide high-end design equipment including Wacom tablets, high-resolution monitors, and access to premium design software. Our communication is primarily through Figma, Slack, and video calls, with regular design critiques and brainstorming sessions.
                  </p>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We have flexible working hours to accommodate different creative rhythms and time zones. Core collaboration hours are 10 AM - 3 PM EST, but we understand that inspiration can strike at any time.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Design-Focused Culture</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We foster a design-focused culture where creativity and innovation are celebrated. Regular design critiques, inspiration sharing sessions, and creative challenges keep our team engaged and growing. We encourage experimentation with new tools, techniques, and design trends.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Cross-Functional Collaboration</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Career Development</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Learning & Development</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We invest heavily in our designers' growth through access to design conferences (Adobe MAX, Figma Config, UX Week), online learning platforms (Skillshare, MasterClass, LinkedIn Learning), and design mentorship programs. Each designer has a personal development budget for courses, books, tools, and conference tickets.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Career Paths</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We offer multiple career paths: Individual Contributor (Designer → Senior Designer → Principal Designer → Distinguished Designer) and Leadership (Design Lead → Design Manager → Director of Design). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Onboarding Process</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>What We Expect</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
              </div>
              
              <div className="space-y-6">
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Design Excellence</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong portfolio demonstrating user-centered design thinking, visual design skills, and understanding of design principles and best practices.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>User-Centered Thinking</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Ability to conduct user research, analyze user needs, and create designs that solve real problems while providing delightful experiences.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Proficiency</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Proficiency in design tools (Figma, Adobe Creative Suite, Sketch) and understanding of front-end development principles and constraints.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Collaboration Skills</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Ability to work effectively with cross-functional teams, communicate design decisions clearly, and incorporate feedback constructively.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Continuous Learning</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Passion for staying updated with design trends, new tools, and emerging technologies while maintaining focus on user needs.</p>
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
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-12 ${isDark ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' : 'from-purple-600/10 to-pink-600/10 border-purple-500/20 bg-white/30'}`}>
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ready to Join Our Design Team?</h3>
                <p className={`text-xl mb-10 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                    className={`inline-flex items-center px-10 py-4 font-semibold rounded-lg transition-all duration-200 border ${isDark ? 'bg-white/10 text-white hover:bg-white/20 border-white/20' : 'bg-white/30 text-gray-900 hover:bg-white/50 border-purple-400'}`}
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
