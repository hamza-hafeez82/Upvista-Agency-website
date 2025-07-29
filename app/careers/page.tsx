"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Building2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CareersPage() {
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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/10"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Briefcase className="w-12 h-12 text-purple-400 mr-3" />
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Careers
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join our team of innovators and creators building the future of digital technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* No Jobs Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-purple-400" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                No Open Positions
              </h2>
              
              <p className="text-gray-400 text-lg mb-8">
                We currently don&apos;t have any open positions yet
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-500 text-sm">
                  Interested in working with us? Send us your resume and a cover letter explaining why you&apos;d be a great fit at careers@upvistadigital.com.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Link href="mailto:info@upvistadigital.com">
                    <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300">
                      Send Resume
                    </button>
                  </Link> */}
                  
                  <Link href="/pages/contactPage">
                    <button className="px-6 py-3 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors duration-300">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Back to Home */}
        <section className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/">
              <button className="inline-flex items-center px-6 py-3 text-gray-400 hover:text-white transition-colors duration-300">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </button>
            </Link>
          </motion.div>
        </section>
      </div>
      
      <Footer />
    </>
  );
} 