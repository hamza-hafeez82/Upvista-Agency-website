"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import CareersHeader from "../../components/CareersHeader";
import CareersFooter from "../../components/CareersFooter";
import Link from "next/link";

export default function TrademarkCopyrightPage() {
  return (
    <div className="min-h-screen bg-black">
      <CareersHeader />
      
      <div className="fixed top-20 left-4 z-50">
        <Link href="/careers">
          <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </button>
        </Link>
      </div>

      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trademark and Copyright Notice
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Legal information regarding Upvista Digital's intellectual property rights and usage guidelines.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pt-8 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <p className="text-gray-300 leading-relaxed">
              All content, trademarks, and intellectual property on this website and related materials are 
              owned by Upvista Digital or used under license. Unauthorized use, reproduction, or distribution 
              of any materials is strictly prohibited and may result in legal action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Copyright Ownership</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, 
                  audio clips, video clips, digital downloads, and software, is the property of Upvista Digital 
                  or its content suppliers and is protected by international copyright laws.
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• © 2024 Upvista Digital. All rights reserved.</li>
                  <li>• Website design and content are proprietary to Upvista Digital</li>
                  <li>• Software and applications are protected by copyright law</li>
                  <li>• Documentation and training materials are copyrighted</li>
                  <li>• All derivative works require explicit written permission</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Permitted Uses</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Personal, non-commercial use for information purposes</li>
                  <li>• Temporary storage for caching and browsing purposes</li>
                  <li>• Printing of pages for personal reference only</li>
                  <li>• Sharing of links to our content (with proper attribution)</li>
                  <li>• Educational use with proper citation and permission</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Registered Trademarks</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• "Upvista Digital" - Registered trademark in multiple jurisdictions</li>
                  <li>• Company logos and brand elements are trademarked</li>
                  <li>• Product names and service marks are protected</li>
                  <li>• Taglines and slogans are trademarked</li>
                  <li>• Domain names are protected intellectual property</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Trademark Usage Guidelines</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Do not use our trademarks without written permission</li>
                  <li>• Maintain proper trademark symbols (™, ®) when referencing</li>
                  <li>• Do not modify or alter our trademarked materials</li>
                  <li>• Avoid confusion with our brand identity</li>
                  <li>• Respect our trademark rights in all jurisdictions</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Section
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Copyright Violations</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Reproduction without permission</li>
                  <li>• Distribution of copyrighted materials</li>
                  <li>• Creation of derivative works</li>
                  <li>• Commercial use without license</li>
                  <li>• Reverse engineering of software</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Trademark Violations</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Unauthorized use of our trademarks</li>
                  <li>• Confusingly similar marks or names</li>
                  <li>• Domain name squatting</li>
                  <li>• Counterfeit products or services</li>
                  <li>• False association with our brand</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Third-Party Content</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Some content on our website may include materials owned by third parties. We respect the intellectual 
              property rights of others and expect our users to do the same.
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>• Third-party trademarks are used with permission</li>
              <li>• Licensed content is used in accordance with agreements</li>
              <li>• We provide proper attribution where required</li>
              <li>• Users must respect third-party intellectual property rights</li>
              <li>• Report suspected violations to our legal department</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Legal Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For intellectual property inquiries, licensing requests, or to report violations:
            </p>
            <div className="border border-gray-700 p-6">
              <p className="text-white font-medium mb-2">Legal Department</p>
              <p className="text-gray-300">Email: legal@upvistadigital.com</p>
              <p className="text-gray-300">Phone: +92 (0) 3320 486955</p>
              <p className="text-gray-300">Address: Upvista Digital, Legal Department, 123 Tech Street, Digital City, DC 12345</p>
            </div>
          </motion.div>

        </div>
      </section>

      <CareersFooter />
    </div>
  );
}
