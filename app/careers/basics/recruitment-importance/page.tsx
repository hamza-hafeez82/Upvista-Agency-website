"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function RecruitmentImportancePage() {
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
              What is Important in Recruitment
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Understanding our recruitment philosophy and what makes someone the right fit for Upvista Digital.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Our Recruitment Philosophy */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Our Recruitment Philosophy</h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  At Upvista Digital, we believe that the right people make all the difference. Our recruitment process goes beyond technical skills to identify individuals who will thrive in our culture and contribute to our mission.
                </p>
                <p>
                  We look for candidates who share our values, demonstrate growth potential, and are committed to making a positive impact. The ideal candidate is someone who can not only do the job today but can grow with us as we continue to expand and evolve.
                </p>
                <p className="italic text-purple-300">
                  "The right person in the right role at the right time can transform an entire organization. That's why we invest so much care in our recruitment process."
                </p>
              </div>
            </motion.section>

            {/* What We Value Most */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">What We Value Most</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Values Alignment */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Values Alignment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We seek individuals whose personal values align with our core principles of innovation, integrity, and excellence. This alignment ensures long-term satisfaction and success for both the individual and the company.
                  </p>
                </div>

                {/* Growth Mindset */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Growth Mindset</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We value candidates who demonstrate a genuine passion for learning and growth. The ability to adapt, evolve, and continuously improve is crucial in our fast-paced industry.
                  </p>
                </div>

                {/* Collaborative Spirit */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Collaborative Spirit</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Success at Upvista Digital requires strong collaboration skills. We look for team players who can work effectively with diverse groups and contribute to a positive team dynamic.
                  </p>
                </div>

                {/* Results Orientation */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Results Orientation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    While we value the journey, we also need team members who are focused on delivering results. We seek individuals who can balance creativity with execution and drive meaningful outcomes.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Our Evaluation Framework */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Our Evaluation Framework</h2>
              
              <div className="space-y-8">
                {/* Technical Competence */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Technical Competence</h3>
                  <p className="text-lg text-gray-300 mb-4">Strong foundation in relevant technologies and the ability to learn new ones quickly.</p>
                  <div className="grid md:grid-cols-2 gap-3 text-gray-300">
                    <p>• Relevant technical skills and certifications</p>
                    <p>• Portfolio of previous work</p>
                    <p>• Problem-solving approach to challenges</p>
                    <p>• Continuous learning mindset</p>
                  </div>
                </div>

                {/* Cultural Fit */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Cultural Fit</h3>
                  <p className="text-lg text-gray-300 mb-4">Alignment with our values, mission, and collaborative work environment.</p>
                  <div className="grid md:grid-cols-2 gap-3 text-gray-300">
                    <p>• Demonstrates our core values in action</p>
                    <p>• Shows enthusiasm for our mission</p>
                    <p>• Collaborative communication style</p>
                    <p>• Positive attitude and team spirit</p>
                  </div>
                </div>

                {/* Growth Potential */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Growth Potential</h3>
                  <p className="text-lg text-gray-300 mb-4">Capacity to grow with the company and take on increasing responsibilities.</p>
                  <div className="grid md:grid-cols-2 gap-3 text-gray-300">
                    <p>• Clear career aspirations and goals</p>
                    <p>• Learning agility and adaptability</p>
                    <p>• Leadership potential</p>
                    <p>• Commitment to professional development</p>
                  </div>
                </div>

                {/* Impact Orientation */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Impact Orientation</h3>
                  <p className="text-lg text-gray-300 mb-4">Focus on creating meaningful impact for clients, colleagues, and the broader community.</p>
                  <div className="grid md:grid-cols-2 gap-3 text-gray-300">
                    <p>• Client-focused mindset</p>
                    <p>• Community involvement</p>
                    <p>• Innovation and creativity</p>
                    <p>• Results-driven approach</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Our Commitment */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Commitment to You</h2>
                <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                  <p>
                    We're committed to making our recruitment process transparent, fair, and focused on finding the right fit for both you and our team. We believe in giving every candidate a fair chance to showcase their potential.
                  </p>
                  <p className="italic text-purple-300">
                    "Our goal isn't just to fill positions—it&apos;s to build lasting relationships with people who share our vision and can help us create the future of technology."
                  </p>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Join Us?</h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  If you share our values and are excited about the opportunity to make a meaningful impact, we'd love to hear from you.
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Explore Opportunities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CareersFooter />
    </>
  );
}