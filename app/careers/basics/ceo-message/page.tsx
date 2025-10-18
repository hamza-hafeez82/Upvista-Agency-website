"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";

export default function CEOMessagePage() {
  const { isDark } = useTheme();
  const tableOfContents = [
    { id: "welcome", title: "A Personal Welcome", description: "Meet Hamza Hafeez and learn about our founding story" },
    { id: "journey", title: "Our Journey So Far", description: "From startup to global technology company" },
    { id: "vision", title: "Our Vision for the Future", description: "Where we&apos;re heading and what we&apos;re building" },
    { id: "team", title: "Building the Right Team", description: "What makes someone perfect for Upvista Digital" },
    { id: "innovation", title: "Our Innovation Strategy", description: "How we approach research and development" },
    { id: "values", title: "Our Commitment to Values", description: "The principles that guide everything we do" },
    { id: "future", title: "Looking Ahead", description: "Our growth plans and exciting opportunities" },
    { id: "join", title: "Join Our Journey", description: "How to become part of our mission" }
  ];

  return (
    <>
      <CareersHeader />
      
      <div className={`min-h-screen pt-20 relative transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
      }`}>
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
              className={`flex items-center transition-colors duration-200 ${
                isDark ? 'text-purple-400 hover:text-purple-300' : 'text-indigo-600 hover:text-indigo-700'
              }`}
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
              Message from Hamza Hafeez
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              A personal message from our CEO and founder about our vision, values, and the future we&apos;re building together at Upvista Digital.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* CEO Introduction */}
            <motion.section
              id="welcome"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>A Personal Welcome</h2>
                  <p>
                    Welcome to Upvista Digital. I'm Hamza Hafeez, the founder and CEO, and I'm excited to share our story and vision with you. 
                    When we started this company, we had one simple yet profound belief: technology should serve humanity, 
                    not the other way around.
                  </p>
                  <p>
                    Today, that belief drives everything we do. From the solutions we create to the culture we build, 
                    we&apos;re committed to making a positive impact on the world through innovation, integrity, and excellence. 
                    We believe that great technology companies are built on great people, and that&apos;s why we&apos;re always looking 
                    for exceptional individuals who share our vision.
                  </p>
                </div>
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/hamza-pic.jpg"
                    alt="Hamza Hafeez - CEO and Founder of Upvista Digital"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </motion.section>

            {/* Table of Contents */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Table of Contents</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tableOfContents.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="group cursor-pointer"
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <div className={`flex items-center p-4 rounded-xl border transition-all duration-300 ${
                        isDark 
                          ? 'border-white/10 hover:border-purple-500/30 hover:bg-white/5' 
                          : 'border-gray-300/50 hover:border-indigo-500/40 hover:bg-white/60'
                      }`}>
                        <div className="flex-1">
                          <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                            isDark ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-indigo-600'
                          }`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm transition-colors ${
                            isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className={`w-5 h-5 transition-colors ${
                          isDark ? 'text-gray-400 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-indigo-600'
                        }`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Our Journey */}
            <motion.section
              id="journey"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Journey So Far</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  In just a small time, Upvista Digital has grown from a bold vision to a thriving technology company 
                  serving clients across multiple countries. We've established ourselves as a trusted partner for digital transformation.
                </p>
                <p>
                  But our journey is just beginning. We've witnessed firsthand how the right technology can transform 
                  businesses, empower individuals, and create opportunities that didn't exist before. Every project 
                  we undertake teaches us something new, and every client relationship strengthens our understanding 
                  of what&apos;s possible when human creativity meets technological innovation.
                </p>
                <p>
                  What excites me most is that we&apos;re operating at the intersection of multiple technological revolutions: 
                  artificial intelligence, cloud computing, automation, and human-computer interaction. This convergence 
                  creates unprecedented opportunities for innovation and impact.
                </p>
              </div>
            </motion.section>

            {/* Our Vision for the Future */}
            <motion.section
              id="vision"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Vision for the Future</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  We envision a world where technology seamlessly integrates with human potential, creating opportunities 
                  that were previously unimaginable. Our goal is to be at the forefront of this transformation, not just 
                  as observers, but as active architects of the future.
                </p>
                <p>
                  In the coming years, we see ourselves expanding our impact across three key areas: artificial general 
                  intelligence research, sustainable technology solutions, and democratizing access to cutting-edge 
                  digital tools for businesses of all sizes.
                </p>
                <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                  "The future belongs to organizations that can adapt, innovate, and grow. Our mission is to help our 
                  clients become those organizations, while simultaneously building a company that embodies these 
                  principles in everything we do."
                </p>
              </div>
            </motion.section>

            {/* Building the Right Team */}
            <motion.section
              id="team"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Building the Right Team</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Success comes from having the right people in the right roles. We're committed to attracting, 
                  developing, and retaining exceptional talent who share our vision and values. But what makes someone 
                  "right" for Upvista Digital?
                </p>
                <p>
                  It's not just about technical skills, though those are important. It's about curiosity, adaptability, 
                  and a genuine desire to make a positive impact. It's about being comfortable with ambiguity and 
                  excited by the possibility of creating something that doesn&apos;t exist yet.
                </p>
                <p>
                  We look for people who are passionate learners, collaborative team players, and creative problem-solvers. 
                  We value diversity of thought, background, and experience because we know that the best solutions 
                  emerge from diverse perspectives working together toward a common goal.
                </p>
                <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                  "Every great innovation starts with a simple question: 'What if we could do better?' That's the 
                  question that drives everything we do, and it&apos;s the question we want our team members to ask 
                  every single day."
                </p>
              </div>
            </motion.section>

            {/* Our Innovation Strategy */}
            <motion.section
              id="innovation"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Innovation Strategy</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Innovation isn't just about new technology, it&apos;s about new ways of thinking, new approaches to problems, 
                  and new possibilities for growth. We foster an environment where innovation thrives through our 
                  Upvista Technologies Lab, our commitment to continuous learning, and our willingness to take calculated risks.
                </p>
                <p>
                  Our research focuses on emerging technologies like artificial general intelligence, quantum computing, 
                  and advanced human-computer interaction. But we&apos;re equally committed to finding innovative applications 
                  for existing technologies that can solve real-world problems more effectively.
                </p>
                <p>
                  We believe that the best innovations happen at the intersection of multiple disciplines. That's why 
                  we encourage cross-functional collaboration, support side projects and experimentation, and maintain 
                  partnerships with academic institutions and other forward-thinking organizations.
                </p>
              </div>
            </motion.section>

            {/* Our Commitment to Values */}
            <motion.section
              id="values"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Commitment to Values</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  As we grow, we remain committed to the core values that have guided us from day one: human-centered 
                  design, ethical business practices, collaborative teamwork, and excellence in everything we do.
                </p>
                <p>
                  We believe that technology companies have a responsibility to consider the broader impact of their 
                  work. That's why we prioritize sustainability in our operations, diversity in our hiring, and 
                  accessibility in our solutions. We're not just building products, we&apos;re building a company that 
                  we&apos;re proud to be part of.
                </p>
                <p className={`italic ${isDark ? 'text-purple-300' : 'text-indigo-600'}`}>
                  "At Upvista Digital, we don't just build technology; we build bridges between today's challenges 
                  and tomorrow's opportunities. Every line of code, every design decision, and every business 
                  relationship is guided by our commitment to creating positive change."
                </p>
              </div>
            </motion.section>

            {/* Looking Ahead */}
            <motion.section
              id="future"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Looking Ahead</h2>
              <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  The next few years will be transformative for Upvista Digital. We're planning to expand our team 
                  significantly, launch new product lines, and deepen our research capabilities. But more importantly, 
                  we&apos;re committed to maintaining the culture of innovation, collaboration, and excellence that has 
                  brought us this far.
                </p>
                <p>
                  We're looking for people who want to be part of something bigger than themselves... people who are 
                  excited by the challenge of building the future and who believe that technology can be a force 
                  for good in the world.
                </p>
                <p>
                  If you&apos;re reading this message, you&apos;re probably considering joining our team. I want you to know 
                  that we&apos;re not just looking for employees, we&apos;re looking for partners in our mission to create 
                  technology that serves humanity.
                </p>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
              id="join"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-center"
            >
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-indigo-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Join Our Journey</h3>
                <p className={`text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "We are building a movement. A movement toward a future where 
                  technology empowers every individual and organization to reach their full potential."
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/careers"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Join Our Team
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <CareersFooter />
    </>
  );
}