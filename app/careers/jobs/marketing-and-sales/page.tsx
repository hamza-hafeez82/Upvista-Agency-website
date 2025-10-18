"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";

export default function MarketingSalesPage() {
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
                Marketing & Sales
              </h1>
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Drive business growth through strategic marketing campaigns and build lasting relationships with clients worldwide.
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>About Marketing & Sales</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
              </div>
              
              <div className={`space-y-8 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  The Marketing & Sales team at Upvista Digital is responsible for driving business growth, building brand awareness, and creating meaningful relationships with clients and partners. We combine strategic thinking with creative execution to position Upvista as a leader in the digital transformation space.
                </p>
                <p>
                  Our team works across multiple channels including digital marketing, content creation, lead generation, client acquisition, and relationship management. We leverage data-driven insights, market research, and customer feedback to develop campaigns and strategies that resonate with our target audience and drive measurable business results.
                </p>
                <p>
                  We believe that successful marketing and sales are built on trust, value creation, and genuine relationships. Our team is passionate about understanding client needs, delivering exceptional service, and contributing to Upvista's continued growth and success in the global market.
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
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Digital Marketing Strategy</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We develop and execute comprehensive digital marketing strategies including SEO, SEM, social media marketing, email campaigns, and content marketing. Our approach is data-driven and focused on generating qualified leads and building brand awareness across multiple digital channels.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Lead Generation & Nurturing</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We implement lead generation strategies that attract potential clients through valuable content, targeted campaigns, and strategic partnerships. Our lead nurturing processes guide prospects through the sales funnel with personalized communication and relevant content.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Client Acquisition & Sales</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our sales team builds relationships with potential clients, understands their business needs, and demonstrates how Upvista's solutions can address their challenges. We focus on consultative selling and long-term partnerships rather than transactional relationships.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Brand Building & Content</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We develop and maintain Upvista's brand identity across all touchpoints, create compelling content that showcases our expertise, and build thought leadership in the digital transformation space through blogs, whitepapers, case studies, and speaking engagements.
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
                    title: "Senior Sales Manager",
                    description: "Lead sales strategy, manage key accounts, and mentor sales team members. 5+ years B2B sales experience required."
                  },
                  {
                    title: "Digital Marketing Manager",
                    description: "Develop and execute digital marketing campaigns, manage marketing tools, and analyze campaign performance."
                  },
                  {
                    title: "Content Marketing Specialist",
                    description: "Create compelling content including blogs, whitepapers, case studies, and social media content."
                  },
                  {
                    title: "Business Development Representative",
                    description: "Generate new business opportunities, qualify leads, and support the sales team with prospect research."
                  },
                  {
                    title: "SEO/SEM Specialist",
                    description: "Optimize website content, manage paid advertising campaigns, and improve search engine visibility."
                  },
                  {
                    title: "Social Media Manager",
                    description: "Manage social media presence, create engaging content, and build community across social platforms."
                  },
                  {
                    title: "Account Manager",
                    description: "Manage existing client relationships, identify upselling opportunities, and ensure client satisfaction."
                  },
                  {
                    title: "Marketing Analyst",
                    description: "Analyze marketing data, track campaign performance, and provide insights to optimize marketing efforts."
                  },
                  {
                    title: "Sales Operations Manager",
                    description: "Optimize sales processes, manage CRM systems, and support sales team with tools and reporting."
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
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Remote-First Dynamic Environment</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our marketing and sales team operates in a remote-first environment that supports collaboration and relationship building. We provide access to premium marketing and sales tools including HubSpot, Salesforce, Google Analytics, and social media management platforms. Our communication emphasizes transparency, regular check-ins, and collaborative planning sessions.
                  </p>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We have flexible working hours to accommodate different time zones and client schedules. Core collaboration hours are 10 AM - 3 PM EST, but we understand that client relationships and campaign optimization often happen outside traditional hours.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Results-Driven Culture</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We foster a results-driven culture where success is measured by meaningful metrics including lead generation, client acquisition, revenue growth, and client satisfaction. Regular performance reviews, goal setting, and recognition programs ensure that achievements are celebrated and challenges are addressed proactively.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Creative Collaboration</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We emphasize creative collaboration where marketing and sales teams work together to develop integrated campaigns and strategies. Regular brainstorming sessions, cross-functional projects, and shared goals ensure that our marketing efforts directly support our sales objectives.
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
                    We invest heavily in our marketing and sales team's growth through access to industry conferences (MarketingProfs, Sales Hacker, Content Marketing World), certification programs (Google Analytics, HubSpot, Salesforce), and executive coaching. Each team member has a personal development budget for courses, books, tools, and conference tickets.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Career Paths</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We offer multiple career paths: Individual Contributor (Specialist → Senior Specialist → Principal Specialist) and Leadership (Manager → Director → VP of Marketing/Sales → CMO/CSO). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Onboarding Process</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    New team members go through a comprehensive 4-week onboarding program that includes product training, market overview, tool training, and shadowing sessions. You'll be paired with a senior team member mentor who will guide you through your first campaigns and help you understand our client relationships and market positioning.
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
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Strategic Thinking</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Ability to think strategically about market opportunities, client needs, and campaign effectiveness while balancing short-term goals with long-term business growth.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Relationship Building</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong interpersonal skills to build and maintain relationships with clients, partners, and internal teams while representing Upvista professionally.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Data-Driven Approach</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong analytical skills to interpret marketing data, track campaign performance, and make data-driven decisions about marketing strategies and sales approaches.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Communication Excellence</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Exceptional communication skills to create compelling content, present proposals, and articulate value propositions to diverse audiences including technical and business stakeholders.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Results Orientation</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong focus on achieving measurable results including lead generation, client acquisition, revenue growth, and client satisfaction while maintaining high ethical standards.</p>
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
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ready to Drive Our Business Growth?</h3>
                <p className={`text-xl mb-10 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Be part of a team that&apos;s building relationships and driving growth. Join us and contribute to Upvista's continued success in the global market.
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
