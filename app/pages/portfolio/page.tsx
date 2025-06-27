"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image'; // Import StaticImageData type
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle } from 'lucide-react';
import Header from "@/components/Header";

// Import images using the original format
import project1 from "@/assets/websites/project1.jpg";
import project2 from "@/assets/websites/project2.jpg";
import project3 from "@/assets/websites/project3.jpg";
import project4 from "@/assets/websites/project4.jpg";
import project5 from "@/assets/websites/project5.jpg";
import project7 from "@/assets/websites/project7.jpg";
import project8 from "@/assets/websites/project8.jpg";
import project9 from "@/assets/websites/project9.jpg";
import project10 from "@/assets/websites/project10.jpg";
import project11 from "@/assets/websites/project11.jpg";
import project12 from "@/assets/websites/project12.jpg";
import project13 from "@/assets/websites/project13.jpg";
import project14 from "@/assets/websites/project14.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData; // Use StaticImageData for the image type
  category: string;
  link: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, type: 'spring' } })
};

const PortfolioPage = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with seamless payment integration and responsive design.",
      image: project1,
      category: "Websites",
      link: "#"
    },
    {
      id: 2,
      title: "Corporate Landing Page",
      description: "Professional landing page designed for maximum conversion and brand identity.",
      image: project2,
      category: "Landing Page",
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Creative portfolio website showcasing artistic work with elegant animations.",
      image: project3,
      category: "Websites",
      link: "#"
    },
    {
      id: 4,
      title: "Restaurant Booking System",
      description: "Interactive booking platform with real-time availability and user-friendly interface.",
      image: project4,
      category: "Websites",
      link: "#"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      description: "Comprehensive dashboard with analytics and user management features.",
      image: project5,
      category: "Websites",
      link: "#"
    },
    {
      id: 6,
      title: "serum product landing page",
      description: "serum product landing page with a focus on user engagement and lead generation.",
      image: project7,
      category: "Landing Page",
      link: "#"
    },
      {
      id: 7,
      title: "Natural Skincare Product Landing Page", 
      description: "Natural skincare product landing page with a focus on user engagement and lead generation.",
      image: project8,
      category: "Landing Page",
      link: "#"
    },
      {
      id: 8,
      title: "IT agency landing page",
      description: "IT agency landing page with a focus on user engagement and lead generation.", 
      image: project9,
      category: "Landing Page",
      link: "#"
    },
      {
      id: 9,
      title: "designer portfolio",
      description: "designer portfolio with a focus on user engagement and lead generation.",
      image: project10,
      category: "Portfolio",
      link: "#"
    },
    {
      id: 10,
      title: "designer portfolio",
      description: "designer portfolio with a focus on user engagement and lead generation.",
      image: project11,
      category: "Portfolio",
      link: "#"
    },
    {
      id: 11,
      title: "UI/UX Designer portfolio",
      description: "UI/UX Designer portfolio with a focus on user engagement and lead generation.",
      image: project12,
      category: "Portfolio",
      link: "#"
    },
     {
      id: 12,
      title: "freelance web portfolio",
      description: "freelance web portfolio with a focus on user engagement and lead generation.",
      image: project13,
      category: "Portfolio",
      link: "#"
    },
     {
      id: 13,
      title: "travel agency website",
      description: "travel agency website with a focus on user engagement and lead generation.",
      image: project14,
      category: "Websites",
      link: "#"
    },
  ];

  const [filter, setFilter] = useState('All');
  // For modal functionality
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Function to handle opening the modal
  const openProjectModal = (project: Project, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Header />
      <div className="bg-black min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 relative pt-32">
        {/* VR Experience Section */}
        <motion.section initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-5xl mx-auto mb-16 rounded-3xl bg-gradient-to-br from-cyan-900/60 via-violet-900/60 to-emerald-900/40 p-8 sm:p-14 shadow-2xl flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_12px_rgba(0,255,208,0.15)]">Experience a Virtual Reality Project</h2>
          <p className="text-lg text-cyan-100 mb-6 max-w-2xl mx-auto">
            Step into a virtual journey and see what it&apos;s like to build a real project with Upvista—from consultation and planning to development, deployment, and ongoing maintenance. Discover our transparent, collaborative, and innovative process in an immersive way.
          </p>
          <Link href="/vr" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 text-black font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg">
            Experience VR
          </Link>
        </motion.section>

        <div className="max-w-7xl mx-auto">
          {/* Animated Section Header */}
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">Our Portfolio</h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg text-cyan-100 max-w-2xl mx-auto">
              Explore our collection of websites and landing pages that showcase our expertise in creating stunning digital experiences.
            </motion.p>
          </motion.div>
          {/* Filter Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-wrap justify-center mb-12 gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-semibold border transition-all duration-300 ${filter === cat ? 'bg-gradient-to-r from-cyan-400 to-violet-400 text-black border-cyan-400 shadow-lg' : 'bg-black/30 text-cyan-100 border-cyan-900 hover:bg-cyan-900/30'}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
          {/* Animated Project Grid */}
          <motion.div initial="hidden" animate="visible" variants={{}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,255,208,0.10)' }}
                  className="relative rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-cyan-900/10 border-2 border-transparent hover:border-cyan-400 transition-all duration-300 shadow-xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image src={project.image} alt={project.title + ' preview'} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-cyan-400 to-violet-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">{project.category}</span>
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-cyan-100 mb-1 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
                    <p className="text-cyan-200 text-base mb-2 line-clamp-3">{project.description}</p>
                    <button
                      onClick={(e) => openProjectModal(project, e)}
                      className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold shadow hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {/* Project Modal */}
          <AnimatePresence>
            {isModalOpen && selectedProject && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.2 }} className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-cyan-900/20 rounded-3xl shadow-2xl p-4 sm:p-10 w-full max-w-2xl border border-cyan-900 relative overflow-y-auto max-h-[90vh]">
                  <button onClick={closeModal} className="absolute top-4 right-4 text-cyan-300 hover:text-emerald-400 text-3xl font-bold"><XCircle className="w-8 h-8" /></button>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-full md:w-1/2 h-56 md:h-72 rounded-xl overflow-hidden">
                      <Image src={selectedProject.image} alt={selectedProject.title + ' preview'} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <h2 className="text-2xl font-extrabold text-cyan-100 mb-1">{selectedProject.title}</h2>
                      <span className="inline-block bg-gradient-to-r from-cyan-400 to-violet-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow mb-2">{selectedProject.category}</span>
                      <p className="text-cyan-200 text-base mb-2">{selectedProject.description}</p>
                      {/* Placeholder for tech stack and links */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-cyan-900/40 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold">React</span>
                        <span className="bg-cyan-900/40 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold">Next.js</span>
                        <span className="bg-cyan-900/40 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold">Tailwind</span>
                      </div>
                      <div className="flex gap-4 mt-4">
                        <a href="#" className="text-cyan-300 hover:text-emerald-400 underline font-semibold">Live Demo</a>
                        <a href="#" className="text-cyan-300 hover:text-emerald-400 underline font-semibold">GitHub</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* CTA Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">Ready to create your dream website?</h2>
            <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to build a stunning website that perfectly represents your brand and drives results.
            </p>
            <Link href="/pages/contactPage" className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-colors duration-300 inline-block">
              Book a Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;