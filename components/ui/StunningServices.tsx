"use client";
import React, { useState } from "react";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder SVGs for each service (replace with custom SVGs or Lottie animations)
const ServiceSVG = ({ name }: { name: string }) => {
  const initial = typeof name === 'string' && name.length > 0 ? name[0] : '?';
  return (
    <div className="w-16 h-16 flex items-center justify-center mb-4">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" stroke="#00FFD0" strokeWidth="4" fill="#0F172A" />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="16" fill="#00FFD0">{initial}</text>
      </svg>
    </div>
  );
};

interface ServicePhase {
  title: string;
  description: string;
}
interface Service {
  name: string;
  title: string;
  summary: string;
  phases: ServicePhase[];
}
interface Module {
  name: string;
  accent: string;
  description: string;
  services: Service[];
}

const modules: Module[] = [
  {
    name: "Digital Transformation Suite",
    accent: "from-cyan-900 via-emerald-800 to-blue-950",
    description: "The complete suite for digital transformation: software, web, apps, AI, cloud, and data.",
    services: [
      {
        name: "Custom Software",
        title: "End-to-End Custom Software Development",
        summary: "Enterprise-grade software tailored to your business needs.",
        phases: [
          { title: "Discovery & Consultation", description: "We start by deeply understanding your business, goals, and challenges through in-depth consultation. Our team conducts stakeholder interviews, market research, and competitive analysis to ensure we grasp your unique needs. We identify pain points and opportunities for innovation. This phase sets the foundation for a solution that truly fits your vision." },
          { title: "Planning & Strategy", description: "We create a detailed project roadmap, define milestones, and set clear expectations for deliverables and timelines. Our strategists collaborate with you to prioritize features and align the project with your business objectives. We assess technical requirements, risks, and dependencies. Transparent planning ensures everyone is on the same page from day one." },
          { title: "Design & Prototyping", description: "Our designers craft wireframes and interactive prototypes for your feedback and approval. We focus on user experience, accessibility, and visual appeal. Multiple iterations and collaborative reviews ensure the design meets your brand standards and user needs. You see and interact with your solution before development begins." },
          { title: "Development", description: "Our engineers build your solution using best practices, agile methods, and regular updates. We use modern frameworks and scalable architectures. Frequent demos and sprint reviews keep you involved and confident in progress. Code quality, security, and performance are top priorities throughout this phase." },
          { title: "QA & Testing", description: "We rigorously test for quality, security, and performance using automated and manual methods. Our QA team covers functional, integration, and user acceptance testing. We address bugs and optimize for speed and reliability. Only thoroughly vetted solutions move to launch." },
          { title: "Deployment & Support", description: "We launch your product with zero-downtime strategies and provide ongoing support and maintenance. Our team monitors performance, applies updates, and is available 24/7 for any issues. We ensure your solution remains secure, up-to-date, and continues to deliver value as your business grows." },
        ],
      },
      {
        name: "Web",
        title: "Website Design & Development",
        summary: "Stunning, responsive websites that convert.",
        phases: [
          { title: "Strategy & Research", description: "We analyze your market, audience, and goals to inform design and content. Our team reviews analytics, benchmarks competitors, and identifies opportunities for differentiation. We define user personas and map out key journeys. This research ensures your website is built for impact and engagement." },
          { title: "Wireframing & UI/UX", description: "We create wireframes and design beautiful, user-friendly interfaces. Our process includes mood boards, style guides, and interactive prototypes. We focus on usability, accessibility, and brand consistency. You review and approve every step before development begins." },
          { title: "Development", description: "We build your site with modern tech, ensuring speed, SEO, and accessibility. Our developers use responsive frameworks and optimize for all devices. We integrate CMS, analytics, and any required third-party tools. Rigorous testing ensures a flawless launch." },
          { title: "Launch & Optimization", description: "We launch, monitor, and optimize your site for ongoing success. Our team tracks performance, user behavior, and conversion rates. We provide training, documentation, and ongoing support. Continuous improvements keep your site ahead of the competition." },
        ],
      },
      {
        name: "App",
        title: "Mobile App Development",
        summary: "iOS & Android apps for modern businesses.",
        phases: [
          { title: "Ideation & Planning", description: "We define your app&apos;s purpose, features, and user flows through collaborative workshops. Our team researches user needs, market trends, and platform guidelines. We create detailed specifications and wireframes. This phase ensures your app is set up for success from the start." },
          { title: "Design & Prototyping", description: "We design intuitive, engaging app interfaces and interactive prototypes. Our designers focus on usability, accessibility, and platform best practices. You review and test prototypes to ensure the app meets your vision and user expectations." },
          { title: "Development", description: "We develop your app for iOS/Android with regular demos and feedback cycles. Our engineers use agile sprints, automated testing, and code reviews. We ensure performance, security, and scalability are built in from day one." },
          { title: "Testing & Launch", description: "We test thoroughly and launch your app to the stores. Our QA team covers functional, device, and user acceptance testing. We handle app store submissions, compliance, and launch marketing. Your app goes live with confidence and support." },
          { title: "Support & Updates", description: "We provide ongoing support, updates, and feature enhancements. Our team monitors analytics, user feedback, and platform changes. We proactively address issues and help your app evolve with your business." },
        ],
      },
      {
        name: "AI",
        title: "AI & Automation Solutions",
        summary: "Leverage AI to automate and innovate.",
        phases: [
          { title: "Needs Assessment", description: "We evaluate your business for AI and automation opportunities. Our experts analyze workflows, data sources, and pain points. We identify high-impact areas for automation and innovation. This phase ensures AI is applied where it delivers real value." },
          { title: "Solution Design", description: "We architect AI workflows and automation strategies tailored to your needs. Our team selects the right models, tools, and platforms. We design for scalability, security, and ethical use. You review and approve the solution before implementation." },
          { title: "Implementation", description: "We build and integrate AI solutions into your business processes. Our engineers handle data integration, model training, and deployment. We ensure seamless adoption and minimal disruption to your operations." },
          { title: "Monitoring & Optimization", description: "We monitor, optimize, and support your AI systems post-launch. Our team tracks performance, retrains models, and addresses issues proactively. Continuous improvement ensures your AI delivers ongoing value." },
        ],
      },
      {
        name: "Cloud",
        title: "Cloud & DevOps",
        summary: "Scale with secure, modern infrastructure.",
        phases: [
          { title: "Assessment & Planning", description: "We assess your infrastructure and plan migration or optimization. Our team reviews current systems, identifies bottlenecks, and sets clear goals. We design a cloud strategy that aligns with your business needs and budget." },
          { title: "Migration & Setup", description: "We migrate, set up, and configure your cloud environment. Our engineers ensure data integrity, security, and minimal downtime. We handle all technical details, so you can focus on your business." },
          { title: "Automation & Monitoring", description: "We implement DevOps practices and monitor systems for performance and security. Automated pipelines, alerts, and dashboards keep your infrastructure running smoothly. We proactively address issues before they impact your business." },
          { title: "Optimization & Support", description: "We optimize for cost, performance, and provide ongoing support. Our team reviews usage, recommends improvements, and ensures your cloud environment evolves with your needs." },
        ],
      },
      {
        name: "Data",
        title: "Data Analytics & BI",
        summary: "Unlock insights, drive smarter decisions.",
        phases: [
          { title: "Data Audit", description: "We audit your data sources and quality to ensure accuracy and reliability. Our team maps data flows, identifies gaps, and recommends improvements. Clean, trustworthy data is the foundation for actionable insights." },
          { title: "Dashboard Design", description: "We design insightful dashboards and reports tailored to your KPIs. Our designers focus on clarity, usability, and real-time data visualization. You get the information you need, when you need it." },
          { title: "Implementation", description: "We build and integrate analytics solutions with your existing systems. Our engineers ensure secure data pipelines, scalable storage, and seamless access. We train your team to use and interpret the tools effectively." },
          { title: "Insights & Support", description: "We deliver actionable insights and ongoing support. Our analysts help you interpret results, identify trends, and make data-driven decisions. Continuous support ensures your analytics evolve with your business." },
        ],
      },
    ],
  },
  {
    name: "Brand & Experience",
    accent: "from-pink-600 via-fuchsia-700 to-violet-900",
    description: "Branding, design, and marketing to elevate your business experience.",
    services: [
      {
        name: "Branding",
        title: "Branding & Identity Design",
        summary: "Crafting memorable brands that stand out.",
        phases: [
          { title: "Brand Discovery", description: "We explore your story, values, and audience to build a strong foundation." },
          { title: "Concept & Strategy", description: "We develop creative concepts and a brand strategy tailored to your goals." },
          { title: "Visual Identity Design", description: "We design logos, color palettes, and brand assets for a cohesive identity." },
          { title: "Guidelines & Delivery", description: "We deliver brand guidelines and assets for consistent application." },
        ],
      },
      {
        name: "Design",
        title: "Graphics & UI/UX Design",
        summary: "Beautiful, intuitive designs for web and mobile.",
        phases: [
          { title: "Research & Inspiration", description: "We gather inspiration and analyze user needs for effective design." },
          { title: "Wireframing", description: "We create wireframes to map out user flows and layouts." },
          { title: "Visual Design", description: "We craft stunning, user-friendly interfaces and graphics." },
          { title: "Prototyping & Handoff", description: "We build interactive prototypes and hand off assets to development." },
        ],
      },
      {
        name: "Marketing",
        title: "Digital Marketing",
        summary: "Grow your reach with data-driven marketing.",
        phases: [
          { title: "Market Research", description: "We analyze your audience and competitors." },
          { title: "Campaign Planning", description: "We plan creative, data-driven marketing campaigns." },
          { title: "Execution", description: "We launch and manage campaigns across channels." },
          { title: "Analytics & Optimization", description: "We track results and optimize for growth." },
        ],
      },
    ],
  },
  {
    name: "Business Operations",
    accent: "from-teal-600 via-cyan-700 to-blue-900",
    description: "Consultation, management, billing, support, and assistance for seamless business operations.",
    services: [
      {
        name: "Consult",
        title: "Business Consultation & Strategy",
        summary: "Expert guidance for digital transformation.",
        phases: [
          { title: "Business Analysis", description: "We analyze your business, market, and goals." },
          { title: "Opportunity Mapping", description: "We identify digital opportunities and growth areas." },
          { title: "Strategy Development", description: "We craft a tailored digital transformation strategy." },
          { title: "Implementation Roadmap", description: "We provide a clear, actionable roadmap for success." },
        ],
      },
      {
        name: "Manage",
        title: "Project Management",
        summary: "Seamless execution from start to finish.",
        phases: [
          { title: "Planning & Kickoff", description: "We define scope, timelines, and deliverables." },
          { title: "Execution & Tracking", description: "We manage tasks, teams, and progress transparently." },
          { title: "Quality Control", description: "We ensure deliverables meet the highest standards." },
          { title: "Delivery & Review", description: "We deliver, review, and optimize project outcomes." },
        ],
      },
      {
        name: "Billing",
        title: "Billing & Invoicing Solutions",
        summary: "Streamlined, secure billing for your business.",
        phases: [
          { title: "Requirements Gathering", description: "We understand your billing needs and compliance requirements." },
          { title: "System Setup", description: "We configure and integrate billing systems." },
          { title: "Testing & Training", description: "We test the system and train your team." },
          { title: "Go Live & Support", description: "We launch and provide ongoing support." },
        ],
      },
      {
        name: "Support",
        title: "Maintenance & Support",
        summary: "Ongoing care for your digital assets.",
        phases: [
          { title: "Onboarding & Audit", description: "We audit your systems and onboard you to our support platform." },
          { title: "Proactive Maintenance", description: "We provide regular updates and preventive care." },
          { title: "24/7 Support", description: "We offer round-the-clock support for any issues." },
          { title: "Reporting & Optimization", description: "We deliver regular reports and optimize performance." },
        ],
      },
      {
        name: "Assist",
        title: "Virtual Assistance",
        summary: "Delegate tasks, focus on growth.",
        phases: [
          { title: "Needs Assessment", description: "We identify tasks and areas for virtual assistance." },
          { title: "Onboarding", description: "We onboard you and set up communication channels." },
          { title: "Task Execution", description: "We handle your tasks efficiently and confidentially." },
          { title: "Feedback & Optimization", description: "We gather feedback and optimize our service." },
        ],
      },
    ],
  },
  {
    name: "Security & Compliance",
    accent: "from-amber-700 via-yellow-700 to-yellow-900",
    description: "Protect your business with top-tier security and compliance services.",
    services: [
      {
        name: "Security",
        title: "Cybersecurity & Compliance",
        summary: "Protect your business with top-tier security.",
        phases: [
          { title: "Risk Assessment", description: "We audit your systems and identify vulnerabilities." },
          { title: "Implementation", description: "We deploy security measures and ensure compliance." },
          { title: "Monitoring", description: "We monitor your systems for threats and respond proactively." },
          { title: "Ongoing Compliance", description: "We provide regular updates and compliance checks." },
        ],
      },
    ],
  },
];

export const StunningServices = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setCurrentPhase(0);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-black via-violet-950 to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-violet-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-4 tracking-tight">Transform Your Business<br/>with Upvista</h2>
          <p className="text-lg text-violet-200 max-w-2xl text-center">From custom software to AI, branding, and beyond—discover how we deliver world-class digital transformation for ambitious businesses.</p>
        </div>
        <div className="flex flex-col gap-16">
          {modules.map((module) => (
            <motion.div
              key={module.name}
              layout
              transition={{ layout: { duration: 0.5, type: "spring" } }}
              className={`rounded-3xl p-1 bg-gradient-to-br ${module.accent} shadow-2xl`}
            >
              <div className="rounded-[inherit] bg-black/80 p-8 md:p-12 flex flex-col items-center">
                <motion.h3 layout className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight flex items-center gap-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-white/80 to-violet-400 shadow-md"></span>
                  {module.name}
                </motion.h3>
                <motion.p layout className="text-lg text-cyan-200 mb-6 text-center max-w-xl">
                  {module.description}
                </motion.p>
                {expandedModule !== module.name && (
                  <motion.button
                    layout
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                    onClick={() => setExpandedModule(module.name)}
                  >
                    Explore Suite
                  </motion.button>
                )}
                <AnimatePresence initial={false}>
                  {expandedModule === module.name && (
                    <motion.div
                      key="expand"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.35 } } }}
                      exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.25 } } }}
                      style={{ overflow: "hidden" }}
                      className="w-full mt-8"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }}
                        exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-12 place-items-center">
                          {module.services.map((service) => (
                            <motion.div
                              key={service.name}
                              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(0,255,208,0.15)" }}
                              className="relative bg-gradient-to-br from-cyan-900/60 to-emerald-900/60 border border-cyan-700 rounded-3xl p-8 shadow-xl cursor-pointer flex flex-col items-center min-h-[260px] max-w-xs w-full backdrop-blur-md transition-all duration-300"
                              onClick={() => openModal(service)}
                            >
                              <ServiceSVG name={service.name} />
                              <h4 className="text-lg font-semibold text-cyan-100 mb-2 text-center">{service.title}</h4>
                              <p className="text-cyan-200 mb-2 text-center">{service.summary}</p>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex justify-center mt-8">
                          <button
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                            onClick={() => setExpandedModule(null)}
                          >
                            Collapse Suite
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
        {selectedService && (
          <ServiceModal
            open={modalOpen}
            onClose={closeModal}
            phases={selectedService.phases}
            currentPhase={currentPhase}
            setCurrentPhase={setCurrentPhase}
          />
        )}
        {/* Insights & Impact Section */}
        <section className="mt-32 mb-8">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#0f172a]/80 via-[#312e81]/70 to-[#00ffd0]/10 backdrop-blur-xl shadow-2xl p-10 md:p-16 flex flex-col items-center gap-12 border border-cyan-900">
            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400 text-center mb-4 tracking-tight flex items-center gap-3" style={{lineHeight: '1.25'}}>
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#00FFD0" fillOpacity="0.15"/><path d="M16 8v8l6 3" stroke="#00FFD0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Insights & Impact
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold text-cyan-300 animate-pulse">98%</span>
                <span className="text-lg text-cyan-100 mt-2 text-center" style={{lineHeight: '1.7'}}>Client Satisfaction Rate</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold text-violet-300 animate-pulse">1.2h</span>
                <span className="text-lg text-violet-100 mt-2 text-center" style={{lineHeight: '1.7'}}>Avg. Response Time (hrs/mins)</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold text-emerald-300 animate-pulse">4.9/5</span>
                <span className="text-lg text-emerald-100 mt-2 text-center" style={{lineHeight: '1.7'}}>Average Client Rating</span>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="flex-1 bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-900 shadow-lg flex flex-col items-center">
                <h3 className="text-2xl font-bold text-cyan-200 mb-4 tracking-tight">Our Vision</h3>
                <p className="text-lg text-cyan-100 mb-4 text-center" style={{lineHeight: '1.7'}}>
                  To ignite a digital mindset in every business, empowering them to innovate, grow, and lead in a rapidly evolving world. We envision Upvista as the catalyst for digital transformation, inspiring confidence and delivering excellence at every step.
                </p>
                <h4 className="text-xl font-semibold text-cyan-100 mb-2 mt-4 tracking-tight">Our Standards</h4>
                <ul className="text-cyan-100 text-base space-y-2 list-disc list-inside text-left max-w-md mx-auto" style={{lineHeight: '1.7'}}>
                  <li><span className="font-bold text-cyan-300">Client-Centricity:</span> Every solution is tailored to our clients&apos; unique needs and goals.</li>
                  <li><span className="font-bold text-cyan-300">Innovation:</span> We embrace the latest technologies and creative thinking in all we do.</li>
                  <li><span className="font-bold text-cyan-300">Transparency:</span> Open, honest communication and clear processes at every stage.</li>
                  <li><span className="font-bold text-cyan-300">Quality & Security:</span> Rigorous standards for code, design, and data protection.</li>
                  <li><span className="font-bold text-cyan-300">Continuous Improvement:</span> We learn, adapt, and grow with every project.</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-col items-center mt-10">
              <a href="/pages/contactPage" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-500 text-black font-bold text-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-3">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M2 12h20M12 2v20" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Start Your Transformation
              </a>
              <span className="text-cyan-200 mt-4 text-lg" style={{lineHeight: '1.7'}}>Ready to elevate your business? Let&apos;s build something extraordinary together.</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}; 