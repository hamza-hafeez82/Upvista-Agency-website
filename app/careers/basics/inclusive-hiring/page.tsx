"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";

export default function InclusiveHiringPage() {
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
              Inclusive Hiring for People with Disabilities
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Our comprehensive commitment to hiring, supporting, and empowering people with disabilities through inclusive practices, accommodations, and development opportunities.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Our Commitment */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Our Commitment to Inclusion</h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  At Upvista Digital, we believe that diversity drives innovation and inclusion creates excellence. We are committed to hiring and supporting people with disabilities, recognizing that they bring unique perspectives, skills, and talents that strengthen our team and enhance our solutions.
                </p>
                <p>
                  Our inclusive hiring practices go beyond compliance to create genuine opportunities for people with disabilities to thrive in their careers. We understand that disability is not a barrier to success, but rather a source of unique strengths and perspectives that benefit our entire organization.
                </p>
                <p className="italic text-purple-300">
                  "We don't just hire people with disabilities—we actively seek them out because we know they make us better."
                </p>
              </div>
            </motion.section>

            {/* Disability Categories We Support */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Disability Categories We Support</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Physical Disabilities */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Physical Disabilities</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• Mild mobility impairments</p>
                    <p>• Controlled chronic pain conditions</p>
                    <p>• Limb differences</p>
                    <p>• Mild arthritis and joint conditions</p>
                    <p>• Repetitive strain injuries</p>
                  </div>
                </div>

                {/* Sensory Disabilities */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Sensory Disabilities</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• Mild visual impairments</p>
                    <p>• Hearing impairments with assistive technology</p>
                    <p>• Speech differences</p>
                    <p>• Tinnitus and mild auditory conditions</p>
                    <p>• Color vision deficiency</p>
                  </div>
                </div>

                {/* Cognitive and Learning Disabilities */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Learning Differences</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• Dyslexia and reading differences</p>
                    <p>• ADHD and attention differences</p>
                    <p>• High-functioning autism spectrum</p>
                    <p>• Dyscalculia and math differences</p>
                    <p>• Processing speed differences</p>
                  </div>
                </div>

                {/* Mental Health Conditions */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Mental Health Conditions</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• Well-managed depression and anxiety</p>
                    <p>• Stable bipolar disorder</p>
                    <p>• Managed PTSD and trauma recovery</p>
                    <p>• Controlled obsessive-compulsive tendencies</p>
                    <p>• Stress-related conditions</p>
                  </div>
                </div>

                {/* Chronic Health Conditions */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Chronic Health Conditions</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• Well-controlled diabetes</p>
                    <p>• Stable multiple sclerosis</p>
                    <p>• Controlled epilepsy</p>
                    <p>• Managed autoimmune disorders</p>
                    <p>• Cancer survivors in remission</p>
                  </div>
                </div>

                {/* Invisible Disabilities */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Invisible Conditions</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• Managed fibromyalgia</p>
                    <p>• Controlled migraine disorders</p>
                    <p>• Managed sleep disorders</p>
                    <p>• Controlled digestive conditions</p>
                    <p>• Mild respiratory conditions</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Incentives and Benefits */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Incentives and Benefits</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Financial Incentives */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Financial Incentives</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Competitive Compensation</h4>
                      <p>• Equal pay for equal work, regardless of disability status</p>
                      <p>• Performance-based bonuses and incentives</p>
                      <p>• Market-competitive salary packages</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Tax Benefits</h4>
                      <p>• Assistance with disability tax credits</p>
                      <p>• Information on work opportunity tax credits</p>
                      <p>• Financial planning and benefits consultation</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Equipment and Technology</h4>
                      <p>• Assistive technology and equipment provided</p>
                      <p>• Software and hardware accommodations</p>
                      <p>• Home office setup for remote work</p>
                    </div>
                  </div>
                </div>

                {/* Health and Wellness Benefits */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Health and Wellness Benefits</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Comprehensive Health Coverage</h4>
                      <p>• Medical, dental, and vision insurance</p>
                      <p>• Mental health coverage and counseling</p>
                      <p>• Prescription drug coverage</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Disability-Specific Benefits</h4>
                      <p>• Coverage for assistive devices</p>
                      <p>• Therapy and rehabilitation services</p>
                      <p>• Specialized medical equipment</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Wellness Programs</h4>
                      <p>• Flexible sick leave and medical appointments</p>
                      <p>• Wellness stipends and health incentives</p>
                      <p>• Access to fitness and wellness programs</p>
                    </div>
                  </div>
                </div>

                {/* Work-Life Balance */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Work-Life Balance</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Flexible Work Arrangements</h4>
                      <p>• Remote work and hybrid options</p>
                      <p>• Flexible scheduling and hours</p>
                      <p>• Part-time and job-sharing opportunities</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Time Off and Leave</h4>
                      <p>• Generous vacation and personal days</p>
                      <p>• Medical and disability leave</p>
                      <p>• Family and caregiver leave</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Support Services</h4>
                      <p>• Employee assistance programs</p>
                      <p>• Caregiver support resources</p>
                      <p>• Transportation assistance</p>
                    </div>
                  </div>
                </div>

                {/* Career Development */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Career Development</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Professional Growth</h4>
                      <p>• Mentorship and coaching programs</p>
                      <p>• Leadership development opportunities</p>
                      <p>• Internal promotion pathways</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Learning and Training</h4>
                      <p>• Professional development budgets</p>
                      <p>• Conference and workshop attendance</p>
                      <p>• Online learning platform access</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Skill Building</h4>
                      <p>• Technical skill development</p>
                      <p>• Soft skills training</p>
                      <p>• Certification and credential support</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Care and Support Systems */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Care and Support Systems</h2>
              
              <div className="space-y-8">
                {/* Accommodation Support */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Accommodation Support</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Application Process</h4>
                      <div className="space-y-2 text-gray-300">
                        <p>• Alternative application formats (audio, video, written)</p>
                        <p>• Extended application deadlines when needed</p>
                        <p>• Assistance with application completion</p>
                        <p>• Accessible online application system</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Interview Process</h4>
                      <div className="space-y-2 text-gray-300">
                        <p>• Flexible interview formats and locations</p>
                        <p>• Sign language interpreters available</p>
                        <p>• Assistive technology support</p>
                        <p>• Extended time for assessments when needed</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Workplace Support</h4>
                      <div className="space-y-2 text-gray-300">
                        <p>• Accessible office spaces and facilities</p>
                        <p>• Assistive technology and equipment</p>
                        <p>• Flexible work arrangements</p>
                        <p>• Ongoing support and accommodations</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Ongoing Support</h4>
                      <div className="space-y-2 text-gray-300">
                        <p>• Regular check-ins and support meetings</p>
                        <p>• Accommodation adjustment and updates</p>
                        <p>• Peer support and mentoring</p>
                        <p>• Access to disability resource groups</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accessibility and Technology */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Accessibility and Technology</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Assistive Technology</h4>
                      <div className="space-y-2 text-gray-300">
                        <p>• Screen readers and magnification software</p>
                        <p>• Voice recognition software</p>
                        <p>• Alternative input devices</p>
                        <p>• Hearing assistance technology</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Digital Accessibility</h4>
                      <div className="space-y-2 text-gray-300">
                        <p>• WCAG compliant websites and applications</p>
                        <p>• Accessible document formats</p>
                        <p>• Captioning and transcription services</p>
                        <p>• Alternative text and descriptions</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Physical Accessibility</h4>
                      <div className="space-y-2 text-gray-300">
                        <p>• Wheelchair accessible facilities</p>
                        <p>• Adjustable workstations and furniture</p>
                        <p>• Accessible parking and transportation</p>
                        <p>• Clear signage and wayfinding</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Development Opportunities */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Development and Growth Opportunities</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Professional Development */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Professional Development</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Training Programs</h4>
                      <p>• Accessible training and development programs</p>
                      <p>• Technical skill enhancement courses</p>
                      <p>• Leadership and management training</p>
                      <p>• Industry certification programs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Mentorship</h4>
                      <p>• One-on-one mentorship programs</p>
                      <p>• Peer mentoring and support</p>
                      <p>• Cross-functional collaboration</p>
                      <p>• Career guidance and planning</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Networking</h4>
                      <p>• Industry conference attendance</p>
                      <p>• Professional association memberships</p>
                      <p>• Internal networking events</p>
                      <p>• Community involvement opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Career Advancement */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6">Career Advancement</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Growth Pathways</h4>
                      <p>• Clear promotion and advancement criteria</p>
                      <p>• Internal job posting and transfers</p>
                      <p>• Lateral movement opportunities</p>
                      <p>• Special project assignments</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Leadership Development</h4>
                      <p>• Leadership training programs</p>
                      <p>• Management development tracks</p>
                      <p>• Team leadership opportunities</p>
                      <p>• Executive coaching and support</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Recognition</h4>
                      <p>• Performance recognition programs</p>
                      <p>• Achievement awards and incentives</p>
                      <p>• Peer recognition systems</p>
                      <p>• Professional milestone celebrations</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Our Success Stories */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Impact of Inclusive Hiring</h2>
                <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                  <p>
                    Our inclusive hiring practices have transformed our organization. Team members with disabilities have brought unique perspectives that led to breakthrough innovations in accessibility features across our products and services.
                  </p>
                  <p>
                    By including diverse voices in our design and development process, we've created more user-friendly and accessible solutions that benefit all our clients. Our inclusive team has strengthened collaboration and improved outcomes across all departments.
                  </p>
                  <p className="italic text-purple-300">
                    "The best innovations come from diverse teams. Our colleagues with disabilities don't just bring their skills—they bring perspectives that make our entire team better."
                  </p>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Join Our Inclusive Team?</h3>
                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                  If you&apos;re a person with a disability and interested in joining our team, we encourage you to apply. We're committed to providing the support and accommodations you need to succeed. Don&apos;t hesitate to reach out if you have any questions about our inclusive hiring process or need assistance with your application.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/careers"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Apply Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                  >
                    Contact Us for Support
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