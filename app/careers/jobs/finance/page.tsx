"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function FinancePage() {
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
                Finance
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
                Drive financial excellence and strategic growth through comprehensive financial management and business intelligence.
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Finance</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  The Finance team at Upvista Digital is responsible for managing the financial health and strategic growth of our organization. We provide comprehensive financial management, analysis, and strategic guidance that enables informed decision-making and supports sustainable business growth.
                </p>
                <p>
                  Our team handles all aspects of financial operations including accounting, budgeting, financial planning, risk management, and compliance. We work closely with leadership and all departments to ensure that financial resources are allocated effectively and that our business operations remain financially sound and profitable.
                </p>
                <p>
                  We believe that strong financial management is the foundation of business success. Our team is passionate about providing accurate financial insights, implementing sound financial practices, and contributing to Upvista's continued growth and financial stability in the competitive digital transformation market.
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Financial Planning & Analysis</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We develop comprehensive financial plans, budgets, and forecasts that guide strategic decision-making and resource allocation. Our analysis includes revenue projections, cost management, profitability analysis, and scenario planning to support business growth and financial stability.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Accounting & Compliance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We maintain accurate financial records, ensure compliance with accounting standards and regulations, and provide timely financial reporting. Our accounting processes include general ledger management, accounts payable and receivable, and financial statement preparation.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Risk Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We identify, assess, and manage financial risks including market risks, credit risks, and operational risks. Our risk management approach includes insurance coverage, hedging strategies, and internal controls to protect the organization's financial assets and ensure business continuity.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Business Intelligence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We provide financial insights and business intelligence that support strategic decision-making and operational efficiency. Our analysis includes KPI tracking, performance metrics, cost analysis, and financial modeling to help leadership understand business performance and identify opportunities for improvement.
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
                    title: "Senior Financial Analyst",
                    description: "Lead financial analysis, develop financial models, and provide strategic insights. 5+ years finance experience required."
                  },
                  {
                    title: "Financial Controller",
                    description: "Oversee accounting operations, ensure compliance, and manage financial reporting processes."
                  },
                  {
                    title: "Budget Analyst",
                    description: "Develop budgets, monitor spending, and provide variance analysis to support financial planning."
                  },
                  {
                    title: "Accounts Payable Specialist",
                    description: "Process vendor payments, manage accounts payable, and ensure timely and accurate payment processing."
                  },
                  {
                    title: "Accounts Receivable Specialist",
                    description: "Manage customer billing, track receivables, and ensure timely collection of payments."
                  },
                  {
                    title: "Financial Planning Manager",
                    description: "Lead financial planning initiatives, develop forecasts, and support strategic decision-making."
                  },
                  {
                    title: "Risk Management Analyst",
                    description: "Assess financial risks, develop risk mitigation strategies, and ensure compliance with risk policies."
                  },
                  {
                    title: "Treasury Analyst",
                    description: "Manage cash flow, banking relationships, and investment strategies to optimize financial resources."
                  },
                  {
                    title: "Finance Director",
                    description: "Lead finance strategy, manage finance teams, and ensure alignment with organizational goals."
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Remote-First Analytical Environment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our finance team operates in a remote-first environment that supports analytical work and financial management. We provide access to financial software, accounting systems, and analytical tools. Our communication emphasizes accuracy, transparency, and detailed financial reporting.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We have flexible working hours to accommodate different time zones and financial reporting cycles. Core collaboration hours are 10 AM - 3 PM EST, but we understand that financial analysis often requires extended periods of focused attention.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Accuracy-Focused Culture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We foster an accuracy-focused culture where precision, attention to detail, and compliance are prioritized. Regular financial reviews, audit preparations, and quality control processes ensure that our financial data is accurate and reliable for decision-making.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Strategic Partnership</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We emphasize strategic partnership where finance works closely with leadership and all departments to support business objectives. Regular financial planning sessions, budget reviews, and strategic discussions ensure that our financial management aligns with organizational goals and supports growth.
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
                    We invest heavily in our finance team's growth through access to finance conferences (CFO Summit, Financial Planning Conference), certification programs (CPA, CFA, CMA), and advanced training programs. Each team member has a personal development budget for courses, books, tools, and certification fees.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Career Paths</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We offer multiple career paths: Individual Contributor (Analyst → Senior Analyst → Principal Analyst → Distinguished Analyst) and Leadership (Team Lead → Manager → Director of Finance → CFO). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Onboarding Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    New finance team members go through a comprehensive 6-week onboarding program that includes financial systems training, accounting procedures, and compliance requirements. You'll be paired with a senior finance team member mentor who will guide you through your first financial projects and help you understand our financial processes.
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
                  <h3 className="text-xl font-semibold text-white mb-2">Financial Expertise</h3>
                  <p className="text-gray-300">Strong financial knowledge, analytical skills, and understanding of accounting principles, financial modeling, and business analysis with ability to provide accurate and insightful financial information.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Attention to Detail</h3>
                  <p className="text-gray-300">Exceptional attention to detail and accuracy in financial calculations, reporting, and analysis with commitment to maintaining high standards of precision and compliance in all financial activities.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Strategic Thinking</h3>
                  <p className="text-gray-300">Ability to think strategically about financial implications, understand business objectives, and provide financial insights that support strategic decision-making and organizational growth.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Communication Skills</h3>
                  <p className="text-gray-300">Clear communication skills to present complex financial information to non-financial stakeholders, explain financial concepts clearly, and collaborate effectively with cross-functional teams.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Ethical Standards</h3>
                  <p className="text-gray-300">High ethical standards and integrity in handling financial information, maintaining confidentiality, and ensuring compliance with financial regulations and organizational policies.</p>
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Drive Financial Excellence?</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Be part of a team that&apos;s building the financial foundation for growth. Join us and help ensure our continued financial success and stability.
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
