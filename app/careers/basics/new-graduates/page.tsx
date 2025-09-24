"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function NewGraduatesPage() {
  return (
    <>
      <CareersHeader />
      
      <div className="min-h-screen bg-black text-white pt-20 relative">
        {/* Vortex Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <Vortex
            backgroundColor="transparent"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full opacity-50"
          >
          </Vortex>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-20 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link 
              href="/careers/basics" 
              className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Learn the Basics
            </Link>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24 relative z-20 pt-8 pb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-12 pb-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              New Graduate Recruitment
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Start your career journey with Upvista Digital. We provide the perfect environment for recent graduates to learn, grow, and make a meaningful impact in the technology industry.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Our Commitment to New Graduates */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">To New Graduates</h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  At Upvista Digital, we believe that fresh perspectives and new ideas are the driving force behind innovation. We're committed to providing recent graduates with the tools, mentorship, and opportunities they need to thrive in their careers.
                </p>
                <p>
                  We understand that starting your first job can be both exciting and challenging. That's why we've created comprehensive programs designed specifically for new graduates, ensuring you have the support and guidance needed to succeed from day one.
                </p>
                <p className="italic text-purple-300">
                  "We don't just hire new graduates—we invest in them. Your fresh perspective and eagerness to learn are exactly what we need to build the future."
                </p>
              </div>
            </motion.section>

            {/* Programs for New Graduates */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Programs for New Graduates</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Graduate Training Program */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Graduate Training Program</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• 12-month comprehensive training program</p>
                    <p>• Rotations across different departments</p>
                    <p>• Hands-on project experience</p>
                    <p>• Technical skill development workshops</p>
                    <p>• Industry best practices training</p>
                    <p>• Professional development sessions</p>
                  </div>
                </div>

                {/* Mentorship Program */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Mentorship Program</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• Assigned senior mentor for guidance</p>
                    <p>• Regular one-on-one meetings</p>
                    <p>• Career path planning and advice</p>
                    <p>• Skill development support</p>
                    <p>• Networking opportunities</p>
                    <p>• Performance feedback and coaching</p>
                  </div>
                </div>

                {/* Leadership Development */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Leadership Development</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• Early leadership opportunities</p>
                    <p>• Team project leadership roles</p>
                    <p>• Management training courses</p>
                    <p>• Cross-functional collaboration</p>
                    <p>• Decision-making workshops</p>
                    <p>• Communication and presentation skills</p>
                  </div>
                </div>

                {/* Innovation Lab */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Innovation Lab</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• Access to cutting-edge technology</p>
                    <p>• Experimental project opportunities</p>
                    <p>• Hackathon participation</p>
                    <p>• Innovation challenge competitions</p>
                    <p>• Research and development projects</p>
                    <p>• Patent and IP development support</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Benefits and Support */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Benefits and Support</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Financial Benefits */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Financial Benefits</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Competitive Starting Salaries</h4>
                      <p>• Market-competitive compensation packages</p>
                      <p>• Performance-based bonuses and incentives</p>
                      <p>• Annual salary reviews and adjustments</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Student Loan Support</h4>
                      <p>• Student loan repayment assistance</p>
                      <p>• Financial planning and budgeting guidance</p>
                      <p>• Educational reimbursement programs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Relocation Assistance</h4>
                      <p>• Relocation package for out-of-town hires</p>
                      <p>• Temporary housing support</p>
                      <p>• Moving expense reimbursement</p>
                    </div>
                  </div>
                </div>

                {/* Professional Development */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Professional Development</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Learning Opportunities</h4>
                      <p>• Conference attendance and networking</p>
                      <p>• Online learning platform access</p>
                      <p>• Certification and credential support</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Skill Development</h4>
                      <p>• Technical skill enhancement courses</p>
                      <p>• Soft skills training programs</p>
                      <p>• Industry-specific training</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Career Growth</h4>
                      <p>• Clear promotion pathways</p>
                      <p>• Internal job posting opportunities</p>
                      <p>• Cross-functional project assignments</p>
                    </div>
                  </div>
                </div>

                {/* Work-Life Balance */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Work-Life Balance</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Flexible Work Arrangements</h4>
                      <p>• Remote and hybrid work options</p>
                      <p>• Flexible scheduling and hours</p>
                      <p>• Work-from-home setup support</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Time Off and Leave</h4>
                      <p>• Generous vacation and personal days</p>
                      <p>• Mental health days and wellness time</p>
                      <p>• Family and personal leave options</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Wellness Programs</h4>
                      <p>• Health and wellness initiatives</p>
                      <p>• Fitness and recreation programs</p>
                      <p>• Mental health support resources</p>
                    </div>
                  </div>
                </div>

                {/* Community and Culture */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Community and Culture</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Inclusive Environment</h4>
                      <p>• Diverse and inclusive workplace</p>
                      <p>• Employee resource groups</p>
                      <p>• Cultural awareness programs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Team Building</h4>
                      <p>• Regular team building activities</p>
                      <p>• Social events and celebrations</p>
                      <p>• Volunteer and community service</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Support Network</h4>
                      <p>• New graduate buddy system</p>
                      <p>• Peer support groups</p>
                      <p>• Employee assistance programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Application Process */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Application Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Step 1 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Application Submission</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Submit your resume, cover letter, and any relevant portfolio materials through our online application system.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Initial Screening</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our HR team reviews your application and conducts an initial phone or video screening.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technical Assessment</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Complete a technical assessment or coding challenge to demonstrate your skills and potential.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Interview Process</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Meet with our team for interviews covering technical skills, cultural fit, and growth potential.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    5
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Final Decision</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We make our hiring decision and extend an offer, followed by comprehensive onboarding.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Success Stories */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">New Graduate Success Stories</h2>
                <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                  <p>
                    Our new graduate program has launched countless successful careers. Recent graduates have gone on to become team leads, technical architects, and even department heads within just a few years of joining us.
                  </p>
                  <p>
                    Many of our current senior team members started as new graduates at Upvista Digital. They've brought fresh perspectives that have led to breakthrough innovations and helped shape our company culture.
                  </p>
                  <p className="italic text-purple-300">
                    "Starting my career at Upvista Digital was the best decision I made. The mentorship, training, and opportunities for growth have been incredible. I've been able to work on meaningful projects and advance my career faster than I ever imagined."
                  </p>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Start Your Career?</h3>
                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                  If you&apos;re a recent graduate looking to start your career in technology, Upvista Digital offers the perfect environment for growth and learning. Join us and be part of building the future of digital solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/careers"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Apply as New Graduate
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/careers/jobs"
                    className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                  >
                    View Open Positions
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