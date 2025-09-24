"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function HumanResourcesPage() {
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
                Human Resources
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
                Build and nurture our most valuable asset - our people - through strategic HR initiatives and employee development programs.
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Human Resources</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  The Human Resources team at Upvista Digital is responsible for attracting, developing, and retaining the exceptional talent that drives our success. We create an environment where our people can thrive, grow, and contribute to our mission of delivering innovative digital solutions to clients worldwide.
                </p>
                <p>
                  Our team manages all aspects of the employee lifecycle from recruitment and onboarding to performance management and career development. We work closely with leadership and all departments to ensure that our people policies, programs, and practices support both individual growth and organizational success.
                </p>
                <p>
                  We believe that our people are our greatest competitive advantage. Our team is passionate about creating an inclusive, supportive, and dynamic workplace where every team member can reach their full potential and contribute to Upvista's continued growth and success.
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Talent Acquisition</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We identify, attract, and hire top talent from around the world to join our team. Our recruitment process includes sourcing, screening, interviewing, and onboarding to ensure we bring in the right people who align with our values and can contribute to our success.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Employee Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We design and implement comprehensive learning and development programs that help our team members grow their skills and advance their careers. This includes training programs, mentorship opportunities, and career development planning.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Performance Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We implement performance management systems that help employees understand their goals, receive regular feedback, and achieve their full potential. Our approach includes goal setting, regular check-ins, and performance reviews that support both individual and organizational success.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Culture & Engagement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We foster a positive, inclusive, and engaging workplace culture that makes Upvista a great place to work. This includes organizing team events, recognition programs, wellness initiatives, and creating policies that support work-life balance and employee well-being.
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
                    title: "Senior HR Manager",
                    description: "Lead HR strategy, manage HR operations, and mentor team members. 5+ years HR experience required."
                  },
                  {
                    title: "Talent Acquisition Specialist",
                    description: "Source and recruit top talent, manage hiring processes, and build relationships with potential candidates."
                  },
                  {
                    title: "HR Business Partner",
                    description: "Partner with departments to provide HR support, handle employee relations, and implement HR initiatives."
                  },
                  {
                    title: "Learning & Development Specialist",
                    description: "Design and implement training programs, manage employee development, and coordinate learning initiatives."
                  },
                  {
                    title: "Compensation & Benefits Specialist",
                    description: "Manage compensation structures, benefits programs, and ensure competitive total rewards packages."
                  },
                  {
                    title: "Employee Relations Specialist",
                    description: "Handle employee relations, conflict resolution, and ensure positive workplace relationships."
                  },
                  {
                    title: "HR Operations Specialist",
                    description: "Manage HR systems, processes, and administrative tasks to support HR operations and compliance."
                  },
                  {
                    title: "Culture & Engagement Coordinator",
                    description: "Organize team events, manage recognition programs, and foster positive workplace culture."
                  },
                  {
                    title: "HR Director",
                    description: "Lead HR strategy, manage HR teams, and ensure alignment with organizational goals and objectives."
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Remote-First People-Focused Environment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our HR team operates in a remote-first environment that supports people-focused initiatives and collaboration. We provide access to HR management systems, communication tools, and collaboration platforms. Our communication emphasizes empathy, confidentiality, and supportive relationships with all team members.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We have flexible working hours to accommodate different time zones and personal schedules. Core collaboration hours are 10 AM - 3 PM EST, but we understand that supporting people often requires availability during their preferred working hours.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">People-Centric Culture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We foster a people-centric culture where employee well-being, growth, and satisfaction are prioritized. Regular team check-ins, employee feedback sessions, and culture-building activities ensure that our workplace remains positive, inclusive, and supportive for all team members.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Collaborative Partnership</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We emphasize collaborative partnership where HR works closely with all departments and leadership to support organizational goals. Regular meetings, feedback sessions, and strategic planning ensure that our HR initiatives align with business objectives and support overall success.
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
                    We invest heavily in our HR team's growth through access to HR conferences (SHRM, CIPD, HR Technology Conference), certification programs (PHR, SHRM-CP, CIPD), and advanced training programs. Each team member has a personal development budget for courses, books, tools, and conference attendance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Career Paths</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We offer multiple career paths: Individual Contributor (Specialist → Senior Specialist → Principal Specialist) and Leadership (Team Lead → Manager → Director of HR → CHRO). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Onboarding Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    New HR team members go through a comprehensive 4-week onboarding program that includes company culture training, HR systems familiarization, and policy overview. You'll be paired with a senior HR team member mentor who will guide you through your first HR initiatives and help you understand our people-focused approach.
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
                  <h3 className="text-xl font-semibold text-white mb-2">People-First Mindset</h3>
                  <p className="text-gray-300">Strong commitment to employee well-being, growth, and success with ability to understand people's needs, provide support, and create positive workplace experiences that drive engagement and retention.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Communication Excellence</h3>
                  <p className="text-gray-300">Exceptional communication skills to interact effectively with employees, managers, and leadership while maintaining confidentiality, empathy, and professionalism in all interactions.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Strategic Thinking</h3>
                  <p className="text-gray-300">Ability to think strategically about people initiatives, understand business objectives, and align HR programs with organizational goals to drive both employee satisfaction and business success.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Problem-Solving Skills</h3>
                  <p className="text-gray-300">Strong analytical and problem-solving abilities to address employee relations issues, resolve conflicts, and implement solutions that support positive workplace relationships and organizational effectiveness.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
                  <p className="text-gray-300">Commitment to staying updated with HR best practices, employment law, and industry trends while continuously improving skills and knowledge in human resources and people management.</p>
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Our People-First Culture?</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Be part of a team that&apos;s dedicated to nurturing talent and building a great workplace. Join us and help create an environment where everyone can thrive.
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
