"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function ProductManagementPage() {
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
                Product Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
                Drive product strategy, define roadmaps, and lead cross-functional teams to deliver exceptional digital products.
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Product Management</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  The Product Management team at Upvista Digital is responsible for defining product strategy, managing roadmaps, and ensuring that our digital products meet market needs while driving business growth. We serve as the bridge between business objectives, user needs, and technical capabilities.
                </p>
                <p>
                  Our product managers work closely with engineering, design, marketing, and sales teams to deliver products that create value for our clients and users. We use data-driven approaches, market research, and user feedback to make informed decisions about product direction and feature prioritization.
                </p>
                <p>
                  We believe that great products are built through collaboration, clear communication, and a deep understanding of both market dynamics and user behavior. Our team is passionate about creating products that solve real problems and deliver exceptional user experiences.
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Product Strategy & Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We define product vision, strategy, and long-term roadmaps that align with business objectives and market opportunities. Our strategic planning includes market analysis, competitive research, and stakeholder alignment to ensure our products remain competitive and valuable.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Feature Planning & Prioritization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We gather requirements, conduct user research, and prioritize features based on user value, business impact, and technical feasibility. Our prioritization framework ensures that we&apos;re always working on the most important features that drive user engagement and business growth.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Cross-Functional Leadership</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We lead cross-functional teams including engineering, design, marketing, and sales to ensure successful product delivery. Our role involves facilitating communication, resolving conflicts, and ensuring all teams are aligned on product goals and timelines.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Data Analysis & Metrics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We analyze product metrics, user behavior data, and market trends to make data-driven decisions about product direction. Our analytics approach includes A/B testing, user feedback analysis, and performance monitoring to continuously improve our products.
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
                    title: "Senior Product Manager",
                    description: "Lead complex product initiatives, define strategy, and mentor junior PMs. 5+ years experience required."
                  },
                  {
                    title: "Product Manager",
                    description: "Own product features, manage roadmaps, and collaborate with cross-functional teams. 2-5 years experience preferred."
                  },
                  {
                    title: "Associate Product Manager",
                    description: "Support product initiatives, analyze data, and learn product management fundamentals. Entry-level position."
                  },
                  {
                    title: "Technical Product Manager",
                    description: "Focus on technical products, work closely with engineering teams, and bridge technical and business requirements."
                  },
                  {
                    title: "Growth Product Manager",
                    description: "Focus on user acquisition, retention, and growth metrics to drive product adoption and business growth."
                  },
                  {
                    title: "Platform Product Manager",
                    description: "Manage platform products, APIs, and infrastructure that enable other product teams and external developers."
                  },
                  {
                    title: "Director of Product",
                    description: "Lead product strategy across multiple products, manage PM teams, and drive organizational product vision."
                  },
                  {
                    title: "Product Marketing Manager",
                    description: "Bridge product and marketing teams, develop go-to-market strategies, and drive product adoption."
                  },
                  {
                    title: "Product Operations Manager",
                    description: "Optimize product processes, manage tools and systems, and support product team efficiency and effectiveness."
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Remote-First Strategic Environment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our product management team operates in a remote-first environment that supports strategic thinking and cross-functional collaboration. We provide access to premium product management tools including Productboard, Figma, Slack, and analytics platforms. Our communication emphasizes clarity, documentation, and structured meetings.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We have flexible working hours to accommodate different time zones and personal productivity patterns. Core collaboration hours are 10 AM - 3 PM EST, but we understand that strategic thinking often happens outside traditional hours.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Data-Driven Culture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We foster a data-driven culture where decisions are backed by research, analytics, and user feedback. Regular product reviews, metrics analysis, and user research sessions ensure that our products continuously evolve based on real insights rather than assumptions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Collaborative Leadership</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We emphasize collaborative leadership where product managers work as facilitators and coordinators rather than dictators. Our approach involves stakeholder management, conflict resolution, and building consensus across diverse teams and perspectives.
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
                    We invest heavily in our product managers' growth through access to industry conferences (ProductCon, Mind the Product, Product Management Festival), executive education programs, and mentorship opportunities. Each PM has a personal development budget for courses, books, tools, and conference tickets.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Career Paths</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We offer multiple career paths: Individual Contributor (PM → Senior PM → Principal PM → Distinguished PM) and Leadership (Group PM → Director of Product → VP of Product → Chief Product Officer). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Onboarding Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    New product managers go through a comprehensive 6-week onboarding program that includes product overview, stakeholder introductions, tool training, and shadowing sessions. You'll be paired with a senior PM mentor who will guide you through your first product initiatives and help you navigate cross-functional relationships.
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
                  <h3 className="text-xl font-semibold text-white mb-2">Strategic Thinking</h3>
                  <p className="text-gray-300">Ability to think strategically about product direction, market opportunities, and long-term business impact while balancing short-term needs and constraints.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Cross-Functional Leadership</h3>
                  <p className="text-gray-300">Strong leadership skills to guide diverse teams, facilitate collaboration, and drive consensus across engineering, design, marketing, and sales teams.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Analytical Mindset</h3>
                  <p className="text-gray-300">Strong analytical skills to interpret data, conduct market research, and make data-driven decisions about product features and priorities.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Communication Excellence</h3>
                  <p className="text-gray-300">Exceptional communication skills to articulate product vision, write clear requirements, and present complex information to diverse stakeholders.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">User-Centric Approach</h3>
                  <p className="text-gray-300">Deep understanding of user needs, behavior, and feedback with the ability to translate user insights into actionable product decisions.</p>
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Lead Our Product Strategy?</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Be part of a team that&apos;s shaping the future of digital products. Join us and drive strategic product initiatives that create real value.
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
