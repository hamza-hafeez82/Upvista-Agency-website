"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CareersHeader from "../components/CareersHeader";
import CareersFooter from "../components/CareersFooter";

export default function BusinessPage() {
  return (
    <>
      <CareersHeader />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white">
        {/* Hero Section with Video Background */}
        <div className="relative h-[20vh] sm:h-[25vh] md:h-screen w-full overflow-hidden">
          {/* Video Background - Hidden on mobile, visible on md+ screens */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
            >
              <source src="/assets/careers/company-video3.mp4" type="video/mp4" />
            </video>
          </div>
          
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          {/* Content Sections */}
          <div className="space-y-24">
            {/* Company Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Upvista Digital</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  Upvista Digital is a visionary digital innovation powerhouse that transcends traditional software development. We architect the future by merging cutting-edge AI, quantum-ready technologies, and human-centric design to create digital experiences that don't just solve problems, they redefine possibilities.
                </p>
                <p>
                  From blockchain ecosystems to AI-driven transformations, we&apos;re building tomorrow's digital landscape today. Our approach combines strategic consulting with hands-on technical expertise, delivering solutions that empower organizations to achieve their most ambitious goals.
                </p>
                <p>
                  We believe that technology should serve humanity and enhance human potential. Every project we undertake is an opportunity to push the boundaries of what&apos;s possible, creating digital experiences that inspire, engage, and transform the way people interact with technology.
                </p>
              </div>
            </motion.section>

            {/* Business Strategy */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Business Strategy</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Strategic Focus Areas</h3>
                  <div className="space-y-6 text-gray-300">
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">Technology Leadership</h4>
                      <p>We maintain our position at the forefront of technological innovation through continuous research and development. Our Upvista Technologies Lab serves as the cornerstone of our innovation strategy, exploring emerging technologies such as artificial general intelligence, quantum computing, and advanced automation systems that will shape the future.</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">Client-Centric Approach</h4>
                      <p>Our business model is built on long-term partnerships rather than transactional relationships. We invest time in understanding our clients' industries, challenges, and growth objectives, enabling us to deliver solutions that provide sustained value and competitive advantage in an ever-evolving digital landscape.</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">Global Market Expansion</h4>
                      <p>We are strategically expanding our presence in key international markets, establishing partnerships with local technology leaders and adapting our solutions to meet regional requirements while maintaining our global standards of excellence and innovation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Service Portfolio */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Service Portfolio</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Core Service Lines</h3>
                  <div className="space-y-8">
                    <div className="border-l-4 border-white/30 pl-6">
                      <h4 className="text-xl font-medium text-white mb-3">Enterprise Software Development</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We develop custom enterprise applications that streamline business processes, enhance operational efficiency, and provide scalable solutions for growing organizations. Our expertise spans across ERP systems, CRM platforms, business intelligence tools, and workflow automation solutions.
                      </p>
                    </div>
                    <div className="border-l-4 border-white/30 pl-6">
                      <h4 className="text-xl font-medium text-white mb-3">Web Development and Digital Platforms</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Our web development services focus on creating modern, responsive, and scalable web applications that deliver exceptional user experiences. We specialize in progressive web applications, e-commerce platforms, content management systems, and web portals.
                      </p>
                    </div>
                    <div className="border-l-4 border-white/30 pl-6">
                      <h4 className="text-xl font-medium text-white mb-3">Artificial Intelligence and Automation</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We harness the power of AI to create intelligent solutions that automate complex processes, enhance decision-making, and unlock new opportunities for business growth. Our AI services include machine learning model development, natural language processing, computer vision, and robotic process automation.
                      </p>
                    </div>
                    <div className="border-l-4 border-white/30 pl-6">
                      <h4 className="text-xl font-medium text-white mb-3">Cloud Solutions and Infrastructure</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Our cloud services enable organizations to leverage scalable, secure, and cost-effective infrastructure solutions. We provide cloud migration services, multi-cloud strategies, DevOps implementation, container orchestration, and cloud security solutions.
                      </p>
                    </div>
                    <div className="border-l-4 border-white/30 pl-6">
                      <h4 className="text-xl font-medium text-white mb-3">Graphics and Digital Design</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Our design services focus on creating compelling visual experiences that enhance brand presence and user engagement. We provide user experience design, brand identity development, digital marketing materials, and motion graphics services.
                      </p>
                    </div>
                    <div className="border-l-4 border-white/30 pl-6">
                      <h4 className="text-xl font-medium text-white mb-3">Technology Consulting and Strategy</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We offer strategic consulting services to help organizations navigate digital transformation, assess technology investments, optimize business processes, and develop comprehensive technology roadmaps aligned with business objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Global Strategy */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Global Strategy</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">International Expansion</h3>
                  <div className="space-y-6 text-gray-300">
                    <p>
                      Our global strategy focuses on establishing strategic partnerships with technology leaders in key markets while maintaining our commitment to quality and innovation. We have developed a network of delivery centers across multiple regions, enabling us to provide localized support while leveraging global expertise.
                    </p>
                    <p>
                      We serve clients across various industries including healthcare, financial services, e-commerce, education, and manufacturing. Our industry-specific solutions are designed to address unique sector challenges while incorporating best practices and regulatory requirements.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Quality and Standards</h3>
                  <div className="space-y-6 text-gray-300">
                    <p>
                      We maintain the highest standards of quality through our ISO 9001 certified quality management systems, SOC 2 Type II compliance, and adherence to industry-specific security standards. Our development processes follow Agile methodologies and DevOps practices to ensure efficient delivery and continuous improvement.
                    </p>
                    <p>
                      Our commitment to security and compliance extends to GDPR compliance, data privacy regulations, and industry-specific requirements. We implement comprehensive security measures to protect client data and ensure regulatory compliance across all our services.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Business Impact */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Business Impact</h2>
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  Since our establishment, Upvista Digital has successfully delivered innovative solutions across multiple industries, helping organizations achieve their digital transformation goals and drive meaningful business outcomes. Our solutions have enabled clients to enhance operational efficiency, accelerate time-to-market, and improve customer satisfaction through strategic technology implementations.
                </p>
                <p>
                  We maintain high client satisfaction ratings and consistently deliver projects on time and within budget. Our strong client retention rate reflects the value we provide through long-term partnerships and continuous support. We take pride in being more than just a technology provider - we are strategic partners in our clients' success stories.
                </p>
                <p className="text-center text-xl text-white italic mt-12">
                  "Our business success is measured not just by our growth, but by the success of our clients and the positive impact we create in the communities we serve."
                </p>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Business Journey</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Be part of a team that&apos;s transforming industries and shaping the future of technology. Join Upvista Digital and contribute to innovative projects that redefine what&apos;s possible in the digital world.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/careers"
                    className="inline-flex items-center px-10 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Explore Careers
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/careers/jobs"
                    className="inline-flex items-center px-10 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 border border-white/30"
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