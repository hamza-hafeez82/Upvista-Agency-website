"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../components/CareersHeader";
import CareersFooter from "../components/CareersFooter";
import { useTheme } from "@/contexts/ThemeContext";

export default function JobsPage() {
  const { isDark } = useTheme();

  return (
    <>
      <CareersHeader />
      
      <div className={`min-h-screen pt-20 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white' 
          : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 text-gray-900'
      }`}>
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
                Learn About Jobs
              </h1>
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12 ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Discover exciting career opportunities at Upvista Digital and find your perfect role in shaping the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers/apply"
                  className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg ${
                    isDark 
                      ? 'bg-white text-slate-900 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/careers"
                  className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 border ${
                    isDark 
                      ? 'bg-transparent text-white hover:bg-white/10 border-white/30' 
                      : 'bg-transparent text-gray-900 hover:bg-purple-100 border-purple-400'
                  }`}
                >
                  View All Positions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Department Cards */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Departments</h2>
              <div className={`w-24 h-1 mx-auto mb-8 ${
                isDark ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'
              }`}></div>
              <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Explore our diverse departments and find where your skills and passions align with our mission.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                {
                  title: "Development Team",
                  description: "Build innovative software solutions and cutting-edge applications.",
                  image: "/assets/careers/jobs/dev.jpeg"
                },
                {
                  title: "UI/UX Design",
                  description: "Create compelling user experiences and beautiful digital interfaces.",
                  image: "/assets/careers/jobs/design.jpeg"
                },
                {
                  title: "Product Management",
                  description: "Drive product strategy and roadmap development for success.",
                  image: "/assets/careers/jobs/management.jpeg"
                },
                {
                  title: "Marketing & Sales",
                  description: "Amplify our brand and drive business growth through strategic initiatives.",
                  image: "/assets/careers/jobs/marketing.jpeg"
                },
                {
                  title: "Research & Development",
                  description: "Pioneer breakthrough technologies and innovative solutions.",
                  image: "/assets/careers/jobs/rnd.jpeg"
                },
                {
                  title: "Quality Assurance",
                  description: "Ensure excellence and reliability in all our products and services.",
                  image: "/assets/careers/jobs/QA.jpeg"
                },
                {
                  title: "IT Infrastructure",
                  description: "Maintain and optimize our technology infrastructure and systems.",
                  image: "/assets/careers/jobs/infra.jpeg"
                },
                {
                  title: "Customer Service",
                  description: "Deliver exceptional support and build lasting client relationships.",
                  image: "/assets/careers/jobs/service.jpeg"
                },
                {
                  title: "Human Resources",
                  description: "Foster our culture and support our team's growth and development.",
                  image: "/assets/careers/jobs/HR.jpeg"
                },
                {
                  title: "Finance",
                  description: "Manage financial strategy and ensure sustainable business growth.",
                  image: "/assets/careers/jobs/finance.jpeg"
                },
                {
                  title: "Operations",
                  description: "Streamline processes and optimize business operations for efficiency.",
                  image: "/assets/careers/jobs/operations.jpeg"
                },
                {
                  title: "Technical Writing",
                  description: "Create clear documentation and technical content for our products.",
                  image: "/assets/careers/jobs/writing.jpeg"
                }
              ].map((department) => {
                // Fix URL generation for UI/UX Design
                const getDepartmentUrl = (title: string) => {
                  if (title === "UI/UX Design") return "/careers/jobs/ui-ux-design";
                  return `/careers/jobs/${title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`;
                };

                return (
                  <Link key={department.title} href={getDepartmentUrl(department.title)} className="h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className={`h-full flex flex-col group backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                        isDark 
                          ? 'bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10' 
                          : 'bg-white/60 border-purple-300/50 hover:border-purple-500/60 hover:bg-white/80'
                      }`}
                      suppressHydrationWarning
                    >
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={department.image}
                        alt={department.title}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {isDark && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-100"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                        isDark 
                          ? 'text-white group-hover:text-purple-400' 
                          : 'text-gray-900 group-hover:text-purple-600'
                      }`}>
                        {department.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {department.description}
                      </p>
                    </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.section>

          {/* Upvista is Waiting for You */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-24"
          >
            <div className={`bg-gradient-to-r backdrop-blur-sm border rounded-2xl p-12 ${
              isDark 
                ? 'from-purple-600/20 to-pink-600/20 border-purple-500/30' 
                : 'from-purple-600/10 to-pink-600/10 border-purple-500/20 bg-white/30'
            }`}>
              <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Upvista Digital is waiting for you
              </h3>
              <p className={`text-xl mb-10 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Join Upvista Digital as a member and participate in projects that shape the future.<br className="hidden sm:block" />
                We're looking for talented individuals who share our vision and passion for innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers/apply"
                  className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  Job Openings & Applications
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/careers"
                  className={`inline-flex items-center px-10 py-4 font-semibold rounded-lg transition-all duration-200 border ${
                    isDark 
                      ? 'bg-white/10 text-white hover:bg-white/20 border-white/20' 
                      : 'bg-white/30 text-gray-900 hover:bg-white/50 border-purple-400'
                  }`}
                >
                  Learn About Jobs
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <CareersFooter />
    </>
  );
}
