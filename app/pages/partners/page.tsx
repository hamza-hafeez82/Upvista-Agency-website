'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Handshake, Calendar, ArrowRight, PartyPopper, Sparkles, Network, UserPlus } from "lucide-react";
import { FaWhatsapp, FaFacebookMessenger, FaEnvelope } from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const partners = [
  { name: "Partner One", logo: "/assets/logoSliders/AI.png" },
  { name: "Partner Two", logo: "/assets/logoSliders/aws.png" },
  { name: "Partner Three", logo: "/assets/logoSliders/figma.png" },
  { name: "Partner Four", logo: "/assets/logoSliders/react.png" },
  { name: "Partner Five", logo: "/assets/logoSliders/mern.png" },
];

const valueProps = [
  { icon: <Network className="w-8 h-8 text-cyan-300" />, title: "Expand Your Reach", desc: "Tap into new markets and audiences through our network." },
  { icon: <PartyPopper className="w-8 h-8 text-purple-300" />, title: "Co-Host Events", desc: "Collaborate on events, webinars, and workshops for greater impact." },
  { icon: <Sparkles className="w-8 h-8 text-violet-300" />, title: "Innovate Together", desc: "Work on cutting-edge projects and share resources." },
  { icon: <Users className="w-8 h-8 text-cyan-200" />, title: "Community Access", desc: "Engage with a vibrant, supportive digital community." },
];

const steps = [
  { icon: <UserPlus className="w-7 h-7 text-cyan-300" />, title: "Apply", desc: "Submit your interest to become a partner." },
  { icon: <Handshake className="w-7 h-7 text-purple-300" />, title: "Meet & Align", desc: "We connect to discuss goals and collaboration models." },
  { icon: <Calendar className="w-7 h-7 text-violet-300" />, title: "Collaborate", desc: "Start working together on events, projects, or campaigns." },
  { icon: <Sparkles className="w-7 h-7 text-cyan-200" />, title: "Grow Together", desc: "Celebrate shared success and scale new heights." },
];

const contactLinks = [
  { name: "WhatsApp", icon: <FaWhatsapp className="w-7 h-7 text-green-400" />, href: "https://wa.me/923320486955" },
  { name: "Messenger", icon: <FaFacebookMessenger className="w-7 h-7 text-blue-400" />, href: "https://m.me/61576935582300?source=qr_link_share" },
  { name: "Email", icon: <FaEnvelope className="w-7 h-7 text-cyan-300" />, href: "mailto:upvistadigital@gmail.com?subject=Partnership Inquiry" },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f051d] via-[#1a1333] to-[#2d1e4f] text-white overflow-x-hidden flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-purple-700/60 to-indigo-700/60 shadow-lg mb-6 animate-pulse">
            <Handshake className="w-6 h-6 text-cyan-300 animate-bounce" />
            <span className="font-semibold text-lg tracking-wide text-cyan-100">Upvista&apos;s 3rd Pillar: Partnership & Collaboration</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-400 to-violet-500 bg-clip-text text-transparent mb-6 drop-shadow-lg leading-snug md:leading-[1.25]">
            Building the Future, Together
          </h1>
          <p className="text-lg md:text-2xl text-cyan-100/90 font-medium mb-8 max-w-2xl mx-auto">
            At Upvista, we believe in the power of partnership. Collaboration is at the heart of everything we do—whether it&apos;s co-creating with visionary brands, empowering communities, or hosting events that spark innovation.
          </p>
        </motion.div>
        {/* Animated Divider */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="absolute left-0 right-0 -bottom-8 flex justify-center pointer-events-none">
          <svg width="100%" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 40C360 0 1080 0 1440 40V0H0V40Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#06b6d4"/></linearGradient></defs></svg>
        </motion.div>
      </section>
      {/* Apply to Become a Partner (Google Form) */}
      <section className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-cyan-900/60 via-purple-900/60 to-violet-900/60 rounded-3xl shadow-2xl p-10 md:p-16 max-w-xl w-full border border-purple-400/20 backdrop-blur-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-cyan-400 bg-clip-text text-transparent">Apply to Become a Partner</h2>
          <p className="text-lg text-cyan-100/90 mb-6">Ready to join our partnership program? Fill out our application form and our team will get in touch with you soon.</p>
          <a href="https://forms.gle/rQmD4hGNwE1vnb899" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">Apply via Google Form</a>
        </motion.div>
      </section>
      {/* Why Partner With Us */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
          Why Partner With Upvista?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, idx) => (
            <motion.div key={prop.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border border-purple-500/20">
              <span className="mb-4">{prop.icon}</span>
              <span className="text-xl font-semibold text-cyan-100 mb-2">{prop.title}</span>
              <span className="text-cyan-100/80 text-base">{prop.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Partnership Model Timeline */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
          Our Partnership Model
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }} className="flex flex-col items-center text-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-56 border border-cyan-400/20 relative">
              <div className="mb-3">{step.icon}</div>
              <span className="text-lg font-semibold text-cyan-100 mb-1">{step.title}</span>
              <span className="text-cyan-100/80 text-sm mb-2">{step.desc}</span>
              {idx < steps.length - 1 && (
                <span className="hidden md:block absolute right-[-32px] top-1/2 -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-purple-400 animate-pulse" />
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>
      {/* Partners Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
          Our Partners
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, idx) => (
            <motion.div key={partner.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col items-center w-40 h-40 hover:scale-105 transition-transform duration-300 border border-purple-500/20">
              <Image src={partner.logo} alt={partner.name} width={64} height={64} className="rounded-xl mb-3" />
              <span className="text-lg font-semibold text-cyan-100 text-center">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Events Gallery */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
          Events Gallery
        </motion.h2>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-700/60 scrollbar-track-transparent">
          <div className="flex gap-8 min-w-max pb-4 items-center justify-center">
            {/* No events yet */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="min-w-[320px] max-w-xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-cyan-400/20 flex flex-col items-center justify-center py-16">
              <span className="text-xl font-semibold text-cyan-100 mb-2">No events yet.</span>
              <span className="text-cyan-100/70">Stay tuned for our upcoming collaborations and event highlights!</span>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Become Our Partner Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center relative">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gradient-to-br from-purple-800/60 via-cyan-800/60 to-violet-800/60 rounded-3xl shadow-2xl p-10 md:p-16 max-w-2xl w-full border border-cyan-400/20 backdrop-blur-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Become Our Partner</h2>
          <p className="text-lg text-cyan-100/90 mb-6">Unlock exclusive benefits, co-create impactful projects, and join a network of forward-thinking brands and innovators.</p>
          <ul className="text-left text-cyan-100/80 mb-8 space-y-3 mx-auto max-w-md">
            <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-purple-700/80" /> Featured on our website &amp; events</li>
            <li className="flex items-center gap-3"><Network className="w-5 h-5 text-cyan-700/80" /> Access to our partner network</li>
            <li className="flex items-center gap-3"><PartyPopper className="w-5 h-5 text-violet-700/80" /> Co-host and promote events</li>
            <li className="flex items-center gap-3"><Handshake className="w-5 h-5 text-cyan-800/80" /> Joint marketing &amp; growth opportunities</li>
          </ul>
          <div className="flex flex-wrap gap-6 justify-center">
            {contactLinks.map(link => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <span className="bg-gradient-to-br from-gray-700 to-gray-900 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                <span className="text-cyan-100 font-medium text-sm group-hover:text-purple-300 transition-colors">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
} 