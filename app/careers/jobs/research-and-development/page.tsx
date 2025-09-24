"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function ResearchDevelopmentPage() {
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
                Research & Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
                Pioneer the future of technology through cutting-edge research and innovative product development.
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Research & Development</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  The Research & Development team at Upvista Digital is at the forefront of technological innovation, exploring emerging technologies and developing next-generation solutions that will shape the future of digital transformation. We combine deep technical expertise with creative problem-solving to push the boundaries of what&apos;s possible.
                </p>
                <p>
                  Our team focuses on advanced technologies including artificial intelligence, machine learning, blockchain, IoT, cloud computing, and emerging frameworks. We conduct both fundamental research and applied development, working on projects that range from proof-of-concepts to production-ready solutions that can be integrated into our client offerings.
                </p>
                <p>
                  We believe that innovation comes from curiosity, experimentation, and collaboration. Our team is passionate about exploring new technologies, solving complex problems, and contributing to Upvista's position as a technology leader in the digital transformation space.
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Technology Research</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We conduct comprehensive research on emerging technologies, industry trends, and innovative approaches to solve complex business problems. Our research includes literature reviews, proof-of-concept development, and feasibility studies to identify promising technologies for future implementation.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Prototype Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We develop prototypes and minimum viable products (MVPs) to validate new concepts and technologies. Our prototyping process includes rapid iteration, user testing, and technical validation to ensure that our innovations are both technically sound and practically applicable.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Innovation Projects</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We lead innovation projects that explore new applications of existing technologies or develop entirely new approaches to solving business challenges. These projects often involve cross-functional collaboration and may result in new products, services, or methodologies.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Technology Transfer</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We work closely with product teams to transfer research findings and innovative solutions into production-ready products and services. This includes documentation, training, and ongoing support to ensure successful implementation of new technologies.
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
                    title: "Senior Research Scientist",
                    description: "Lead research initiatives, publish findings, and mentor junior researchers. PhD or equivalent experience required."
                  },
                  {
                    title: "AI/ML Engineer",
                    description: "Develop machine learning models, AI algorithms, and intelligent systems for various applications."
                  },
                  {
                    title: "Blockchain Developer",
                    description: "Research and develop blockchain solutions, smart contracts, and decentralized applications."
                  },
                  {
                    title: "Cloud Research Engineer",
                    description: "Explore cloud-native technologies, serverless architectures, and distributed computing solutions."
                  },
                  {
                    title: "IoT Specialist",
                    description: "Develop Internet of Things solutions, sensor networks, and connected device ecosystems."
                  },
                  {
                    title: "Data Scientist",
                    description: "Analyze large datasets, develop predictive models, and extract insights from complex data."
                  },
                  {
                    title: "Technology Architect",
                    description: "Design system architectures for new technologies and ensure scalability and maintainability."
                  },
                  {
                    title: "Innovation Manager",
                    description: "Coordinate innovation projects, manage research portfolios, and facilitate technology transfer."
                  },
                  {
                    title: "Research Engineer",
                    description: "Implement research findings, develop prototypes, and conduct technical validation studies."
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
                  <h3 className="text-2xl font-semibold text-white mb-4">Remote-First Innovation Environment</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our R&D team operates in a remote-first environment that encourages deep thinking and innovation. We provide access to cutting-edge research tools, cloud computing resources, and development environments. Our communication emphasizes knowledge sharing, regular research presentations, and collaborative problem-solving sessions.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We have flexible working hours to accommodate different research rhythms and time zones. Core collaboration hours are 10 AM - 3 PM EST, but we understand that breakthrough insights often come from extended periods of focused research.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Innovation-Focused Culture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We foster an innovation-focused culture where curiosity, experimentation, and failure are embraced as learning opportunities. Regular innovation workshops, hackathons, and research presentations ensure that new ideas are shared and developed collaboratively.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Academic Collaboration</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We maintain strong relationships with academic institutions and research organizations to stay at the forefront of technological advancement. Our team participates in conferences, publishes research papers, and collaborates on joint research projects.
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
                    We invest heavily in our R&D team's growth through access to research conferences (NeurIPS, ICML, SIGCOMM), academic partnerships, and advanced training programs. Each researcher has a personal development budget for courses, research tools, conference attendance, and publication costs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Career Paths</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We offer multiple career paths: Research Track (Research Engineer → Senior Research Engineer → Principal Research Engineer → Distinguished Research Engineer) and Leadership (Research Manager → Director of R&D → Chief Technology Officer). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Onboarding Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    New R&D team members go through a comprehensive 6-week onboarding program that includes technology overview, research methodology training, and project introductions. You'll be paired with a senior researcher mentor who will guide you through your first research projects and help you integrate into our innovation culture.
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
                  <h3 className="text-xl font-semibold text-white mb-2">Research Excellence</h3>
                  <p className="text-gray-300">Strong research skills, analytical thinking, and ability to conduct thorough investigations into complex technical problems with attention to detail and scientific rigor.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Technical Expertise</h3>
                  <p className="text-gray-300">Deep technical knowledge in relevant domains, proficiency with research tools and methodologies, and ability to quickly learn and apply new technologies and frameworks.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation Mindset</h3>
                  <p className="text-gray-300">Creative problem-solving abilities, willingness to explore unconventional approaches, and passion for pushing the boundaries of what&apos;s technically possible.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Collaboration Skills</h3>
                  <p className="text-gray-300">Ability to work effectively in interdisciplinary teams, communicate complex technical concepts clearly, and contribute to collaborative research efforts.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
                  <p className="text-gray-300">Commitment to staying updated with latest research developments, learning new technologies, and contributing to the broader research community through publications and presentations.</p>
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Pioneer the Future?</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Be part of a team that&apos;s pushing the boundaries of technology. Join us and contribute to groundbreaking research and innovative solutions.
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
