"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import AssessmentPopup from "../../components/AssessmentPopup";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function DevOpsEngineerPage() {
  const { isDark } = useTheme();
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);

  const handleApplyClick = () => {
    setShowAssessmentPopup(true);
  };


  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100'}`}>
      <CareersHeader />
      
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <Link href="/careers/apply">
          <button className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Job Openings
          </button>
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span className="text-purple-300 text-sm font-medium">DevOps & Cloud</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              DevOps & Cloud Engineer
            </h1>
            
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Build and maintain robust cloud infrastructure that powers scalable applications and ensures seamless deployment pipelines.
            </p>
            
            <div className={`flex flex-wrap justify-center gap-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Remote</span>
              <span>Full-time</span>
              <span>3+ years experience</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Application Process</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Personality Impression</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Complete our personality assessment to help us understand your work style, communication preferences, and cultural fit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Assessment</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Demonstrate your DevOps and cloud engineering skills through our technical challenges covering infrastructure, automation, and deployment strategies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Application Form</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Submit your detailed application with resume, portfolio, and responses to position-specific questions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Evaluation & Screening</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>We will evaluate your application and assessment results. If selected, we'll inform you about the next steps in our screening process.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Interview Process</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Selected candidates will be called for interviews with our technical and HR teams.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Background Check</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>If required for the position, we will conduct a background verification process.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Position Overview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Position Overview</h2>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              We are seeking an experienced DevOps & Cloud Engineer to join our infrastructure team. You will be responsible for designing, implementing, and maintaining cloud infrastructure, CI/CD pipelines, and deployment automation. This role offers the opportunity to work with cutting-edge technologies, collaborate with development teams, and contribute to building scalable, reliable systems that support our clients' digital transformation initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Position Description */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Position Description</h2>
            
            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Responsibilities</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Design and implement cloud infrastructure solutions on AWS, Azure, or Google Cloud</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Build and maintain CI/CD pipelines for automated deployment and testing</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Implement infrastructure as code using tools like Terraform or CloudFormation</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Configure and manage containerization platforms (Docker, Kubernetes)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Monitor system performance and implement logging and alerting solutions</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Ensure security best practices and compliance requirements</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Collaborate with development teams to optimize application deployment and performance</li>
              </ul>
            </div>

            {/* Expected Knowledge/Skills */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Required Skills & Knowledge</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Experience with cloud platforms (AWS, Azure, or Google Cloud)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Proficiency in containerization technologies (Docker, Kubernetes)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Experience with infrastructure as code (Terraform, CloudFormation, Pulumi)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Knowledge of CI/CD tools (Jenkins, GitLab CI, GitHub Actions, Azure DevOps)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Experience with monitoring and logging tools (Prometheus, Grafana, ELK Stack)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Strong scripting skills (Bash, Python, PowerShell)</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Understanding of networking, security, and system administration</li>
              </ul>
            </div>

            {/* Additional Knowledge/Skills */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Preferred Skills</h3>
              <ul className="space-y-4">
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Experience with serverless architectures and functions</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Knowledge of database administration and optimization</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Experience with microservices architecture and service mesh</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Understanding of disaster recovery and backup strategies</li>
                <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>Certifications in cloud platforms (AWS, Azure, GCP)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Work Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Hours */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Work Hours</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Full-time position with flexible working hours. Core collaboration hours are 9 AM - 6 PM PKT.</p>
              </div>

              {/* Location */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Location</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Fully remote position with occasional team meetups.</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className="mb-2">Remote work includes:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Home office setup support</li>
                    <li>Flexible schedule within team hours</li>
                    <li>Digital collaboration tools</li>
                    <li>Quarterly team gatherings</li>
                  </ul>
                </div>
              </div>

              {/* Salary */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Salary</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Competitive salary to be determined during the interview process.</p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p className="mb-2">Salary depends on:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Technical expertise and experience</li>
                    <li>Cloud platform certifications</li>
                    <li>Interview performance</li>
                    <li>Market rates and location</li>
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Benefits</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Health insurance coverage</li>
                  <li>• Professional development budget</li>
                  <li>• Latest technology equipment</li>
                  <li>• Flexible working arrangements</li>
                  <li>• Performance-based bonuses</li>
                  <li>• Team building activities</li>
                </ul>
              </div>
            </div>

            {/* Vacations */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Vacation Policy</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                20 paid vacation days per year, plus national holidays. Flexible vacation scheduling with team coordination.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Button */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button 
              onClick={handleApplyClick}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              Apply for DevOps & Cloud Engineer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Ready to join our team? Start your application process today.</p>
          </motion.div>
        </div>
      </section>

      <CareersFooter />

      {/* Assessment Popup */}
      <AssessmentPopup
        isOpen={showAssessmentPopup}
        onClose={() => setShowAssessmentPopup(false)}
        
        position="DevOps & Cloud Engineer"
      />
    </div>
  );
}
