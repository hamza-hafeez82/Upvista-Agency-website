"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Users, 
  ArrowLeft, 
  MapPin, 
  DollarSign,
  Target,
  Code,
  Brain,
  TrendingUp,
  Filter,
  CheckCircle,
  UserCheck,
  MessageCircle,
  Award,
  Coffee,
  Heart,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Palette
} from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface JobPosition {
  id: number;
  title: string;
  category: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

interface JobCategory {
  id: string;
  label: string;
  count: number;
}

interface WorkingBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const jobCategories: JobCategory[] = [
  { id: "all", label: "All Jobs", count: 6 },
  { id: "fresh", label: "Fresh Graduate", count: 2 },
  { id: "experienced", label: "Experienced Professional", count: 2 },
  { id: "internee", label: "Internee", count: 2 }
];

const openPositions: JobPosition[] = [
  {
    id: 1,
    title: "Marketing & Sales Manager",
    category: "experienced",
    type: "Full-time Remote",
    location: "Remote",
    salary: "Project-based",
    description: "Drive business growth by acquiring new projects and managing client relationships for our software development services.",
    requirements: [
      "3+ years experience in B2B sales and marketing",
      "Proven track record in software/IT services sales",
      "Strong communication and negotiation skills",
      "Experience with CRM systems and lead generation",
      "Knowledge of digital marketing strategies"
    ],
    responsibilities: [
      "Generate leads and convert them into projects",
      "Build and maintain client relationships",
      "Develop marketing strategies for software services",
      "Negotiate project contracts and pricing",
      "Collaborate with development team on project requirements"
    ]
  },
  {
    id: 6,
    title: "Graphic Designer (Internee)",
    category: "internee",
    type: "Internship Remote",
    location: "Remote",
    salary: "Project-based",
    description: "Create stunning and astonishing graphics, posters, video content, and advanced visual designs that captivate audiences and elevate brand presence.",
    requirements: [
      "Currently pursuing or recently completed degree in Graphic Design/Visual Arts",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro)",
      "Strong portfolio showcasing creative design work",
      "Knowledge of typography, color theory, and composition",
      "Basic understanding of motion graphics and video editing"
    ],
    responsibilities: [
      "Design stunning graphics, posters, and promotional materials",
      "Create engaging social media visuals and digital content",
      "Edit and produce compelling video content and animations",
      "Develop brand-consistent visual assets and marketing materials",
      "Collaborate with marketing team on creative campaigns",
      "Learn advanced design techniques and industry best practices"
    ]
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    category: "experienced",
    type: "Full-time Remote",
    location: "Remote",
    salary: "Project-based",
    description: "Lead complex software development projects and mentor junior developers in building scalable solutions.",
    requirements: [
      "5+ years of software development experience",
      "Expertise in multiple programming languages",
      "Strong system design and architecture skills",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Leadership and mentoring experience"
    ],
    responsibilities: [
      "Lead end-to-end software development projects",
      "Design scalable and maintainable architectures",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with clients on technical requirements",
      "Ensure code quality and best practices"
    ]
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    category: "fresh",
    type: "Full-time Remote",
    location: "Remote",
    salary: "Project-based",
    description: "Build modern web applications using MongoDB, Express.js, React, and Node.js technologies.",
    requirements: [
      "Strong proficiency in JavaScript and TypeScript",
      "Experience with React.js and its ecosystem",
      "Knowledge of Node.js and Express.js",
      "Familiarity with MongoDB and database design",
      "Understanding of RESTful APIs and GraphQL"
    ],
    responsibilities: [
      "Develop responsive web applications using MERN stack",
      "Create and consume RESTful APIs",
      "Implement user interfaces with React.js",
      "Work with databases and optimize queries",
      "Collaborate with design and backend teams"
    ]
  },
  {
    id: 4,
    title: "Senior AI Engineer",
    category: "experienced",
    type: "Full-time Remote",
    location: "Remote",
    salary: "Project-based",
    description: "Develop cutting-edge AI solutions and machine learning models to solve complex business problems.",
    requirements: [
      "Master's degree in AI, ML, or related field",
      "3+ years experience in machine learning",
      "Proficiency in Python, TensorFlow, PyTorch",
      "Experience with NLP, computer vision, or deep learning",
      "Strong mathematical and statistical background"
    ],
    responsibilities: [
      "Design and implement AI/ML solutions",
      "Develop and train machine learning models",
      "Research and implement latest AI technologies",
      "Optimize model performance and scalability",
      "Collaborate with clients on AI strategy"
    ]
  },
  {
    id: 5,
    title: "Full Stack Web Developer (Internee)",
    category: "internee",
    type: "Internship Remote",
    location: "Remote",
    salary: "Project-based",
    description: "Learn and contribute to full-stack web development projects while gaining hands-on experience with modern technologies.",
    requirements: [
      "Currently pursuing or recently completed degree in CS/IT",
      "Basic knowledge of HTML, CSS, JavaScript",
      "Familiarity with at least one frontend framework (React, Vue, Angular)",
      "Understanding of basic backend concepts",
      "Eager to learn and grow in web development"
    ],
    responsibilities: [
      "Assist in developing web applications under supervision",
      "Learn and implement best coding practices",
      "Participate in code reviews and team meetings",
      "Work on assigned features and bug fixes",
      "Document learning progress and project contributions"
    ]
  }
];

const workingBenefits: WorkingBenefit[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "100% Remote Work",
    description: "Work from anywhere in the world with complete flexibility and work-life balance."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Project-Based Structure",
    description: "Engage in diverse projects with clear deliverables and competitive project-based compensation."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Cutting-Edge Technology",
    description: "Work with the latest technologies and tools to build innovative solutions."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Collaborative Culture",
    description: "Join a supportive team environment focused on growth and knowledge sharing."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Professional Growth",
    description: "Continuous learning opportunities and skill development programs."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Performance Bonuses",
    description: "Earn additional rewards based on project success and performance metrics."
  }
];

const processSteps: ProcessStep[] = [
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Application",
    description: "Submit your application through our Google Form with your resume and portfolio."
  },
  {
    icon: <Filter className="w-12 h-12" />,
    title: "Screening",
    description: "Our HR team reviews applications and conducts initial screening calls."
  },
  {
    icon: <MessageCircle className="w-12 h-12" />,
    title: "Interview",
    description: "Technical and cultural fit interviews with our team leads and founders."
  },
  {
    icon: <UserCheck className="w-12 h-12" />,
    title: "Onboarding",
    description: "Welcome to the team! Complete onboarding and start your first project."
  }
];

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const filteredJobs = activeCategory === "all" 
    ? openPositions 
    : openPositions.filter(job => job.category === activeCategory);

  const getJobIcon = (title: string) => {
    if (title.includes("Marketing")) return <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />;
    if (title.includes("Software Engineer")) return <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />;
    if (title.includes("MERN")) return <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />;
    if (title.includes("AI")) return <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />;
    if (title.includes("Full Stack")) return <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />;
    if (title.includes("Graphic Designer")) return <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />;
    return <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />;
  };

  return (
    <>
      <Head>
        <title>Careers | Upvista Digital | Join Our Team</title>
        <meta name="description" content="Explore career opportunities at Upvista Digital. Join our team of innovators and creators building the future of digital technology." />
        <meta name="keywords" content="Upvista, Upvista Digital, Careers, Jobs, Employment, Digital Agency, Technology, Innovation" />
        <meta property="og:title" content="Careers | Upvista Digital | Join Our Team" />
        <meta property="og:description" content="Explore career opportunities at Upvista Digital. Join our team of innovators and creators building the future of digital technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upvistadigital.com/careers" />
        <meta property="og:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | Upvista Digital | Join Our Team" />
        <meta name="twitter:description" content="Explore career opportunities at Upvista Digital. Join our team of innovators and creators building the future of digital technology." />
        <meta name="twitter:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <link rel="canonical" href="https://upvistadigital.com/careers" />
      </Head>
      <Header />
      
      <div className="min-h-screen bg-black text-white pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/10"></div>
          
          <div className="relative z-10 container mx-auto py-16 sm:py-20 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mr-3" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Join Our Team
                </h1>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 px-4">
                Shape the future of digital innovation with Upvista Digital. Work remotely on exciting projects with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>100% Remote</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span>Project-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>6 Open Positions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Categories Filter */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8"
            >
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base ${
                    activeCategory === category.id
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-500/20"
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-gray-400 text-base sm:text-lg px-4">
                Discover your next career opportunity with us
              </p>
            </motion.div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {getJobIcon(job.title)}
                        <h3 className="text-lg sm:text-xl font-bold text-white break-words">{job.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 sm:px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs sm:text-sm">
                          {job.type}
                        </span>
                        <span className="px-2 sm:px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs sm:text-sm flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="px-2 sm:px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs sm:text-sm flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 text-sm sm:text-base">{job.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="flex-1 py-3 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors duration-300 text-sm sm:text-base"
                    >
                      {selectedJob === job.id ? "Show Less" : "View Details"}
                    </button>
                    <Link href="https://forms.gle/tpXYTJ9qMqv2Pxhj6" className="flex-1">
                      <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>

                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-700/50"
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="text-gray-400 text-xs sm:text-sm flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                <span className="break-words">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="text-gray-400 text-xs sm:text-sm flex items-start gap-2">
                                <Target className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                <span className="break-words">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Working with Upvista */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Upvista?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Experience a new way of working that prioritizes flexibility, innovation, and professional growth.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {workingBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 group hover:bg-gray-900/50"
                >
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Application Process
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Our streamlined hiring process is designed to find the perfect fit for both you and our team.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="bg-purple-600/20 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-6 relative">
                    <div className="text-purple-400">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base px-2">{step.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-purple-500/30"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-purple-900/30 rounded-3xl p-8 sm:p-12 text-center border border-purple-500/20"
            >
              <Coffee className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto px-4">
                Take the first step towards an exciting career in digital innovation. Apply now and become part of our remote-first, project-driven team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#" className="inline-flex">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                    View All Positions
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </Link>
                <Link href="/pages/contactPage">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors duration-300 text-sm sm:text-base">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <Link href="/">
                <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Back to Home
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}
