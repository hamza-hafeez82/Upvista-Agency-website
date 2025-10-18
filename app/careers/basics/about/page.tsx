"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";

export default function AboutPage() {
  const { isDark } = useTheme();
  
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
              About Upvista Digital
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              A technology company at the forefront of digital innovation, empowering businesses through enterprise software, web development, AI automation, cloud solutions, and cutting-edge design.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Company Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Who We Are</h2>
                <div className={`space-y-6 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    Upvista Digital is a comprehensive technology company that bridges the gap between 
                    innovation and implementation. We specialize in transforming complex business 
                    challenges into elegant digital solutions that drive growth and efficiency.
                  </p>
                  <p>
                    Our expertise spans across multiple technology domains, enabling us to provide 
                    end-to-end solutions for enterprises of all sizes. From custom software development 
                    to AI-powered automation, we help organizations navigate the digital landscape 
                    with confidence and clarity.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Our Services */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-7xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Core Services</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {/* Enterprise Software Development */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>Enterprise Software Development</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• Custom Application Development</p>
                    <p>• Enterprise Resource Planning (ERP)</p>
                    <p>• Customer Relationship Management (CRM)</p>
                    <p>• Business Process Management</p>
                    <p>• Database Design & Management</p>
                    <p>• API Development & Integration</p>
                    <p>• Legacy System Modernization</p>
                  </div>
                </div>

                {/* Web Development */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>Web Development</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• Frontend Development (React, Vue, Angular)</p>
                    <p>• Backend Development (Node.js, Python, Java)</p>
                    <p>• Full-Stack Web Applications</p>
                    <p>• E-commerce Solutions</p>
                    <p>• Progressive Web Apps (PWA)</p>
                    <p>• Content Management Systems</p>
                    <p>• Web Performance Optimization</p>
                  </div>
                </div>

                {/* AI and Automation */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>AI and Automation</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• Machine Learning Solutions</p>
                    <p>• Natural Language Processing</p>
                    <p>• Computer Vision Applications</p>
                    <p>• Robotic Process Automation (RPA)</p>
                    <p>• Predictive Analytics</p>
                    <p>• Intelligent Chatbots</p>
                    <p>• AI-powered Business Intelligence</p>
                  </div>
                </div>

                {/* Cloud Solutions */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>Cloud Solutions</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• Cloud Migration & Strategy</p>
                    <p>• AWS, Azure, Google Cloud Services</p>
                    <p>• Infrastructure as a Service (IaaS)</p>
                    <p>• Platform as a Service (PaaS)</p>
                    <p>• Software as a Service (SaaS)</p>
                    <p>• Cloud Security & Compliance</p>
                    <p>• DevOps & CI/CD Implementation</p>
                  </div>
                </div>

                {/* Graphics and Design */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>Graphics and Design</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• UI/UX Design</p>
                    <p>• Brand Identity & Logo Design</p>
                    <p>• Digital Marketing Materials</p>
                    <p>• Product Design & Prototyping</p>
                    <p>• Motion Graphics & Animation</p>
                    <p>• Web Design & Responsive Layouts</p>
                    <p>• User Experience Research</p>
                  </div>
                </div>

                {/* Additional Services */}
                <div className={`space-y-4 p-6 rounded-xl border transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-white/60 border-gray-300/50 hover:border-indigo-500/40'
                }`}>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>Additional Services</h3>
                  <div className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>• Cybersecurity Solutions</p>
                    <p>• Mobile App Development</p>
                    <p>• Blockchain Development</p>
                    <p>• IoT Solutions</p>
                    <p>• Data Analytics & Visualization</p>
                    <p>• Quality Assurance & Testing</p>
                    <p>• Technical Consulting</p>
                  </div>
                </div>
                </div>
              </div>
            </motion.section>

            {/* Community */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Community</h2>
                <div className={`space-y-8 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="text-center">
                    At Upvista Digital, we believe that the best innovations come from collaborative 
                    minds working together. Our community is a vibrant collective of engineers, 
                    designers, developers, and forward-thinking professionals who share a passion 
                    for technology and innovation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className={`p-6 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>Collaboration & Events</h3>
                      <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• Cross-functional project teams</p>
                        <p>• Regular hackathons and coding challenges</p>
                        <p>• Industry meetups and networking events</p>
                        <p>• Knowledge sharing sessions</p>
                        <p>• Open-source contributions</p>
                      </div>
                    </div>
                    
                    <div className={`p-6 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>Training & Development</h3>
                      <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• Comprehensive web development bootcamps</p>
                        <p>• Advanced software engineering courses</p>
                        <p>• AI and machine learning workshops</p>
                        <p>• Cloud computing certification programs</p>
                        <p>• Design thinking and UX methodologies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Upvista Technologies Lab */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className={`backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border-gray-300/50'
              }`}>
                <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Upvista Technologies Lab</h2>
                <div className={`space-y-8 text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="text-center">
                    Our Technologies Lab serves as the innovation engine of Upvista Digital, where 
                    we experiment with emerging technologies and push the boundaries of what&apos;s 
                    possible. This dedicated research facility allows us to stay ahead of technological 
                    trends and develop next-generation solutions.
                  </p>
                  
                  <div className="mt-12">
                    <div className={`p-6 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-300/50'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-6 text-center ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>Research Focus Areas</h3>
                      <div className={`grid md:grid-cols-2 gap-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>• Artificial General Intelligence (AGI) development</p>
                        <p>• Quantum computing applications</p>
                        <p>• Advanced neural network architectures</p>
                        <p>• Human-computer interaction innovations</p>
                        <p>• Next-generation web technologies</p>
                        <p>• Autonomous systems and robotics</p>
                        <p>• Sustainable technology solutions</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-center mt-8">
                    The lab operates as an incubator for breakthrough ideas, where our researchers 
                    and engineers collaborate with academic institutions and industry partners to 
                    explore the frontiers of technology and create solutions that will shape the 
                    future of digital innovation.
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
              <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-8 md:p-12 ${
                isDark 
                  ? 'from-purple-600/20 to-indigo-600/20 border-purple-500/30' 
                  : 'from-purple-600/10 to-indigo-600/10 border-purple-500/20 bg-white/30'
              }`}>
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ready to Join Our Mission?</h3>
                <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Be part of a team that&apos;s shaping the future of technology. Explore exciting career opportunities at Upvista Digital.
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