"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";

export default function CustomerServicePage() {
  const { isDark } = useTheme();
  
  return (
    <>
      <CareersHeader />
      
      <div className={`min-h-screen pt-20 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 text-gray-900'}`}>
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
                Customer Service
              </h1>
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Deliver exceptional customer experiences and build lasting relationships that drive client success and satisfaction.
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>About Customer Service</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
              </div>
              
              <div className={`space-y-8 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  The Customer Service team at Upvista Digital is the front line of client success, responsible for ensuring that every client interaction is positive, helpful, and valuable. We are dedicated to understanding client needs, resolving issues quickly, and providing ongoing support that helps our clients achieve their business goals.
                </p>
                <p>
                  Our team handles a wide range of client interactions including technical support, account management, onboarding assistance, and general inquiries. We work closely with development, sales, and other teams to ensure that client concerns are addressed comprehensively and that our services continue to meet evolving client needs.
                </p>
                <p>
                  We believe that exceptional customer service is the foundation of long-term client relationships and business success. Our team is passionate about helping clients succeed, building trust through consistent and reliable support, and contributing to Upvista's reputation for outstanding client service.
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
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Support</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We provide comprehensive technical support to help clients resolve issues, understand product features, and optimize their use of our services. Our support includes troubleshooting, configuration assistance, and guidance on best practices to ensure clients get maximum value from our solutions.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Client Onboarding</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We guide new clients through the onboarding process, ensuring they understand how to use our services effectively and can start seeing value quickly. Our onboarding includes training sessions, resource sharing, and ongoing check-ins to ensure successful implementation.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Account Management</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We maintain ongoing relationships with clients, monitoring their satisfaction, identifying opportunities for growth, and ensuring that their needs are being met. Our account management includes regular check-ins, performance reviews, and proactive communication about updates and improvements.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Issue Resolution</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We respond quickly and effectively to client issues, working with internal teams to resolve problems and prevent future occurrences. Our issue resolution process includes thorough investigation, clear communication, and follow-up to ensure client satisfaction and continuous improvement.
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
                    title: "Senior Customer Success Manager",
                    description: "Lead client relationships, manage key accounts, and mentor team members. 5+ years experience required."
                  },
                  {
                    title: "Customer Support Specialist",
                    description: "Provide technical support, resolve client issues, and ensure client satisfaction across multiple channels."
                  },
                  {
                    title: "Client Onboarding Specialist",
                    description: "Guide new clients through onboarding process, provide training, and ensure successful implementation."
                  },
                  {
                    title: "Account Manager",
                    description: "Manage ongoing client relationships, monitor satisfaction, and identify growth opportunities."
                  },
                  {
                    title: "Technical Support Engineer",
                    description: "Provide advanced technical support, troubleshoot complex issues, and work with development teams."
                  },
                  {
                    title: "Customer Success Coordinator",
                    description: "Support customer success initiatives, coordinate client communications, and maintain client databases."
                  },
                  {
                    title: "Support Team Lead",
                    description: "Lead support teams, manage workflows, and ensure consistent quality of client interactions."
                  },
                  {
                    title: "Client Relations Manager",
                    description: "Manage strategic client relationships, handle escalations, and ensure client retention and satisfaction."
                  },
                  {
                    title: "Customer Service Manager",
                    description: "Oversee customer service operations, manage team performance, and ensure service excellence."
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
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Remote-First Client-Focused Environment</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our customer service team operates in a remote-first environment that supports client success and relationship building. We provide access to customer relationship management tools, communication platforms, and support systems. Our communication emphasizes client satisfaction, team collaboration, and continuous improvement.
                  </p>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We have flexible working hours to accommodate different time zones and client schedules. Core collaboration hours are 10 AM - 3 PM EST, but we understand that client support often requires availability during their business hours.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Client-Success Culture</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We foster a client-success culture where every team member is focused on helping clients achieve their goals. Regular client feedback reviews, success story sharing, and collaborative problem-solving ensure that we continuously improve our service delivery and client satisfaction.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Collaborative Support</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We emphasize collaborative support where team members work together to resolve complex issues and share knowledge. Regular team meetings, knowledge sharing sessions, and cross-training ensure that our team can provide comprehensive support to all clients.
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
                    We invest heavily in our customer service team's growth through access to customer service conferences (Customer Success Summit, Support Driven), training programs, and certification courses. Each team member has a personal development budget for courses, books, tools, and conference attendance.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Career Paths</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We offer multiple career paths: Individual Contributor (Specialist → Senior Specialist → Principal Specialist) and Leadership (Team Lead → Manager → Director of Customer Success). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Onboarding Process</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    New customer service team members go through a comprehensive 4-week onboarding program that includes product training, client communication guidelines, and support tool familiarization. You'll be paired with a senior team member mentor who will guide you through your first client interactions and help you understand our service standards.
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
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Client-First Mindset</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong commitment to client success with ability to understand client needs, provide helpful solutions, and build positive relationships that drive long-term satisfaction and loyalty.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Communication Excellence</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Exceptional communication skills to interact professionally with clients, explain complex concepts clearly, and maintain positive relationships through various communication channels.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Problem-Solving Skills</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong analytical and problem-solving abilities to quickly understand issues, identify solutions, and work with internal teams to resolve client concerns effectively and efficiently.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Understanding</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Basic understanding of technical concepts and ability to learn about our products and services to provide accurate support and guidance to clients with varying technical backgrounds.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Empathy & Patience</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong empathy and patience to understand client frustrations, provide compassionate support, and maintain professionalism even in challenging situations while focusing on positive outcomes.</p>
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
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ready to Deliver Exceptional Service?</h3>
                <p className={`text-xl mb-10 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Be part of a team that&apos;s committed to client success. Join us and help build lasting relationships that drive business growth.
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
