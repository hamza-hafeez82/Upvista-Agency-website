"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";

export default function ITInfrastructurePage() {
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
                IT Infrastructure
              </h1>
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Build and maintain robust, scalable infrastructure that powers our digital solutions and supports business growth.
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
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>About IT Infrastructure</h2>
                <div className={`w-24 h-1 mx-auto mb-8 ${isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}></div>
              </div>
              
              <div className={`space-y-8 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  The IT Infrastructure team at Upvista Digital is responsible for designing, implementing, and maintaining the foundational technology systems that power our business operations and client solutions. We ensure that our infrastructure is secure, scalable, and reliable, providing the backbone for all our digital services and applications.
                </p>
                <p>
                  Our team manages cloud infrastructure, network systems, security protocols, data storage, and disaster recovery solutions. We work closely with development teams to provide the technical foundation needed for successful project delivery, while maintaining the highest standards of security and performance.
                </p>
                <p>
                  We believe that robust infrastructure is the foundation of digital success. Our team is passionate about implementing best practices, adopting cutting-edge technologies, and ensuring that our systems can scale to meet growing demands while maintaining optimal performance and security.
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
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Cloud Infrastructure Management</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We design and manage cloud infrastructure solutions using AWS, Azure, and Google Cloud platforms. Our work includes server provisioning, container orchestration, load balancing, and auto-scaling to ensure optimal performance and cost efficiency for all our applications and services.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Network & Security</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We implement and maintain network infrastructure, security protocols, and monitoring systems to protect our systems and data. Our security approach includes firewalls, intrusion detection, encryption, access controls, and regular security audits to ensure compliance and protection.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>DevOps & Automation</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We implement DevOps practices and automation tools to streamline deployment processes, improve system reliability, and enable continuous integration and delivery. Our automation efforts include infrastructure as code, automated testing, and monitoring systems.
                  </p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>System Monitoring & Support</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We provide 24/7 monitoring and support for all infrastructure systems, ensuring high availability and quick response to any issues. Our monitoring includes performance metrics, system health checks, and proactive maintenance to prevent downtime and optimize system performance.
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
                    title: "Senior DevOps Engineer",
                    description: "Lead infrastructure initiatives, design system architectures, and mentor team members. 5+ years experience required."
                  },
                  {
                    title: "Cloud Engineer",
                    description: "Manage cloud infrastructure, implement cloud solutions, and optimize cloud costs and performance."
                  },
                  {
                    title: "Network Engineer",
                    description: "Design and maintain network infrastructure, implement security protocols, and ensure network reliability."
                  },
                  {
                    title: "Security Engineer",
                    description: "Implement security measures, conduct security audits, and ensure compliance with security standards."
                  },
                  {
                    title: "System Administrator",
                    description: "Manage server systems, maintain system health, and provide technical support for infrastructure issues."
                  },
                  {
                    title: "Database Administrator",
                    description: "Manage database systems, optimize performance, and ensure data integrity and security."
                  },
                  {
                    title: "Infrastructure Architect",
                    description: "Design system architectures, plan infrastructure roadmaps, and ensure scalability and reliability."
                  },
                  {
                    title: "Site Reliability Engineer",
                    description: "Focus on system reliability, performance optimization, and incident response and prevention."
                  },
                  {
                    title: "Infrastructure Manager",
                    description: "Lead infrastructure teams, manage projects, and ensure operational excellence and strategic alignment."
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
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Remote-First Technical Environment</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our infrastructure team operates in a remote-first environment that supports technical excellence and system reliability. We provide access to cloud platforms, monitoring tools, and development environments. Our communication emphasizes technical documentation, incident reporting, and collaborative problem-solving.
                  </p>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We have flexible working hours to accommodate different time zones and system maintenance schedules. Core collaboration hours are 10 AM - 3 PM EST, but we understand that infrastructure issues can occur at any time and require immediate attention.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Reliability-Focused Culture</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We foster a reliability-focused culture where system uptime, performance optimization, and proactive maintenance are prioritized. Regular system reviews, capacity planning, and disaster recovery testing ensure that our infrastructure remains robust and dependable.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Continuous Improvement</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We emphasize continuous improvement through automation, monitoring, and process optimization. Our team regularly evaluates new technologies, implements best practices, and shares knowledge to enhance our infrastructure capabilities and efficiency.
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
                    We invest heavily in our infrastructure team's growth through access to cloud certifications (AWS, Azure, Google Cloud), technical conferences (re:Invent, KubeCon, DevOpsDays), and advanced training programs. Each team member has a personal development budget for courses, tools, and certification fees.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Career Paths</h3>
                  <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We offer multiple career paths: Individual Contributor (Engineer → Senior Engineer → Principal Engineer → Distinguished Engineer) and Leadership (Team Lead → Manager → Director of Infrastructure → CTO). We support both paths equally and help you develop the skills needed for your chosen direction.
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Onboarding Process</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    New infrastructure team members go through a comprehensive 6-week onboarding program that includes system overview, security training, and tool familiarization. You'll be paired with a senior engineer mentor who will guide you through your first infrastructure projects and help you understand our operational procedures.
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
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Excellence</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong technical skills in cloud platforms, networking, security, and system administration with ability to troubleshoot complex infrastructure issues and implement robust solutions.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>System Thinking</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Ability to understand complex systems, identify dependencies, and design infrastructure solutions that are scalable, reliable, and maintainable for long-term success.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Security Awareness</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong understanding of security principles, compliance requirements, and ability to implement security measures that protect systems and data from threats and vulnerabilities.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Problem-Solving Skills</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Excellent analytical and problem-solving skills to diagnose issues, implement solutions, and work under pressure to resolve critical infrastructure problems quickly and effectively.</p>
                </div>
                
                <div className={`border-l-4 pl-6 ${isDark ? 'border-purple-500' : 'border-purple-400'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Continuous Learning</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Commitment to staying updated with latest technologies, best practices, and industry trends while continuously improving skills and knowledge in infrastructure and DevOps practices.</p>
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
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ready to Build Robust Infrastructure?</h3>
                <p className={`text-xl mb-10 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Be part of a team that&apos;s building the foundation for digital success. Join us and help maintain the infrastructure that powers our solutions.
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
