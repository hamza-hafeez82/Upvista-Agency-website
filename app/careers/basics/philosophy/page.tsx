"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function PhilosophyPage() {
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
              Corporate Philosophy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Discover the values, principles, and cultures that define who we are and guide everything we do at Upvista Digital.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Core Purpose */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Purpose</h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  To create a world where technology serves humanity, empowering businesses and individuals to achieve their fullest potential through innovative digital solutions that make a meaningful impact on society.
                </p>
              </div>
            </motion.section>

            {/* Our Five Cultures */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-7xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Our Five Cultures</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {/* Human-Centered */}
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Human-Centered</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We prioritize people over technology. Every solution we create is designed with the human experience at its core, ensuring our innovations truly serve and enhance human life.
                    </p>
                  </div>

                  {/* Innovation-Driven */}
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Innovation-Driven</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We embrace change and continuously seek new ways to solve problems. Our culture encourages experimentation, creativity, and thinking beyond conventional boundaries.
                    </p>
                  </div>

                  {/* Collaborative */}
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Collaborative</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We believe that the best solutions emerge from diverse perspectives working together. We foster an environment where every voice is heard and valued.
                    </p>
                  </div>

                  {/* Ethical */}
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Ethical</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We conduct our business with the highest standards of integrity, transparency, and responsibility. We're committed to creating technology that benefits society.
                    </p>
                  </div>

                  {/* Excellence-Focused */}
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Excellence-Focused</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We strive for excellence in everything we do, from the smallest detail to the grandest vision. Quality is not just a goal—it&apos;s our standard.
                    </p>
                  </div>

                  {/* Growth-Oriented */}
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Growth-Oriented</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We believe in continuous learning and personal development. Every challenge is an opportunity to grow, both individually and as an organization.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Guiding Principles */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Guiding Principles</h2>
                
                <div className="space-y-8">
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Growth Mindset</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      We believe that abilities and intelligence can be developed through dedication and hard work. Every challenge is an opportunity to learn and improve, and we encourage our team to embrace this mindset in all aspects of their work.
                    </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Sustainable Innovation</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Our innovations are designed for long-term impact. We consider environmental, social, and economic sustainability in all our solutions, ensuring that our work creates positive change for future generations.
                    </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Customer Success</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Our success is measured by our clients' success. We are committed to understanding their needs and delivering solutions that exceed expectations, building lasting partnerships based on mutual trust and achievement.
                    </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Continuous Learning</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      In the rapidly evolving tech landscape, we maintain our competitive edge through continuous learning, skill development, and knowledge sharing. We invest in our team's growth and encourage curiosity and exploration.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Our Vision */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Vision</h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto italic">
                  "To be the global leader in creating technology solutions that not only solve today's challenges but anticipate tomorrow's opportunities, building a more connected, efficient, and prosperous world for all."
                </p>
              </div>
            </motion.section>

            {/* Values in Action */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Values in Action</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Workplace Culture</h3>
                    <div className="space-y-3 text-gray-300">
                      <p>• Open communication and transparency</p>
                      <p>• Flexible work arrangements</p>
                      <p>• Regular team building activities</p>
                      <p>• Mental health and wellness support</p>
                      <p>• Recognition and reward programs</p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Community Impact</h3>
                    <div className="space-y-3 text-gray-300">
                      <p>• Pro bono technology consulting</p>
                      <p>• Educational outreach programs</p>
                      <p>• Environmental sustainability initiatives</p>
                      <p>• Diversity and inclusion efforts</p>
                      <p>• Technology accessibility advocacy</p>
                    </div>
                  </div>
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
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Join Our Mission?</h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Be part of a team that lives by these values and principles. Explore exciting career opportunities at Upvista Digital.
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Join Our Team
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