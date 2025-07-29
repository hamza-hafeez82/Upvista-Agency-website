"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Video, MessageSquare, Globe, FileText, FileCheck2, FileOutput, Rocket, Wrench, ArrowLeft, Calendar, Mail, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaFacebook, FaDiscord, FaXTwitter, FaFacebookMessenger } from "react-icons/fa6";

const consultMethods = [
  { label: "Chat", icon: <MessageSquare className="w-5 h-5" />, value: "chat" },
  { label: "Schedule Call", icon: <Phone className="w-5 h-5" />, value: "schedule" },
  { label: "Video Meeting", icon: <Video className="w-5 h-5" />, value: "video" },
  { label: "Social Media", icon: <Globe className="w-5 h-5" />, value: "social" },
];

const timeline = [
  {
    title: "Consultation",
    icon: <MessageSquare className="w-6 h-6 text-cyan-300" />,
    desc: "Connect with us via chat, scheduling, video, or your favorite platform. We listen, understand, and guide you from the very first conversation.",
  },
  {
    title: "Planning & Docs",
    icon: <FileText className="w-6 h-6 text-violet-300" />,
    desc: (
      <span>
        We craft and document every detail:<br/>
        <b>Project Explanation Docx</b>, <b>Requirement Gathering Docx</b>, <b>Development Process Docx</b>, <b>Budget & Resources Analysis Docx</b>, <b>End Product Estimation Docx</b>.<br/>
        All combined in a <b>Project Module PDF</b> for your review.
      </span>
    ),
  },
  {
    title: "Approval",
    icon: <FileCheck2 className="w-6 h-6 text-emerald-300" />,
    desc: "The Project Module PDF is submitted to stakeholders and you for approval. We iterate until you are fully satisfied and ready to proceed.",
  },
  {
    title: "Development",
    icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    desc: "Our team brings your vision to life with agile, transparent, and high-quality development. You get regular updates and demos.",
  },
  {
    title: "Deployment",
    icon: <FileOutput className="w-6 h-6 text-violet-400" />,
    desc: "We launch your solution with zero-downtime strategies, ensuring everything is secure, optimized, and ready for users.",
  },
  {
    title: "Maintenance",
    icon: <Wrench className="w-6 h-6 text-emerald-400" />,
    desc: "Ongoing support, updates, and optimization to keep your digital assets performing at their best.",
  },
];

const socialMediaLinks = [
  { name: "Instagram", icon: <FaInstagram className="w-8 h-8" />, href: "https://www.instagram.com/direct/t/17842162812514678/#" },
  { name: "Facebook", icon: <FaFacebook className="w-8 h-8" />, href: "https://www.facebook.com/share/1Mw8RxcNx2/" },
  { name: "LinkedIn", icon: <FaLinkedin className="w-8 h-8" />, href: "https://www.linkedin.com/groups/13302224" },
  { name: "X", icon: <FaXTwitter className="w-8 h-8" />, href: "https://x.com/Upvista_Digital?s=09" },
  { name: "Discord", icon: <FaDiscord className="w-8 h-8" />, href: "https://discord.gg/wYgrpdYh" },
];

const chatLinks = [
  { name: "WhatsApp", icon: <FaWhatsapp className="w-8 h-8" />, href: "https://wa.me/923320486955" },
  { name: "Messenger", icon: <FaFacebookMessenger className="w-8 h-8" />, href: "https://m.me/61576935582300?source=qr_link_share" },
  { name: "Email", icon: <FaEnvelope className="w-8 h-8" />, href: "mailto:info@upvistadigital.com" },
];

const scheduleOptions = [
  { 
    name: "Calendly", 
    icon: <Calendar className="w-8 h-8" />, 
    href: "https://calendly.com/upvistadigital/30min", 
    desc: "Professional scheduling system" 
  },
  { 
    name: "WhatsApp", 
    icon: <MessageCircle className="w-8 h-8" />, 
    href: "https://wa.me/923320486955?text=Hi! I'd like to schedule a consultation call.", 
    desc: "Quick scheduling via chat" 
  },
  { 
    name: "Email", 
    icon: <Mail className="w-8 h-8" />, 
    href: "mailto:support@upvistadigital.com?subject=Consultation Request&body=Hi! I'd like to schedule a consultation call. Please let me know your available times.", 
    desc: "Traditional email scheduling" 
  },
];

const videoOptions = [
  { 
    name: "Zoom Meeting", 
    icon: <Video className="w-8 h-8" />, 
    desc: "Professional video consultation via Zoom" 
  },
  { 
    name: "Google Meet", 
    icon: <Video className="w-8 h-8" />, 
    desc: "Easy browser-based meeting via Google Meet" 
  },
  { 
    name: "WhatsApp Video", 
    icon: <MessageCircle className="w-8 h-8" />, 
    desc: "Quick video call setup via WhatsApp" 
  },
];

export default function ConsultPage() {
  const router = useRouter();
  const [method, setMethod] = useState<string | null>(null);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#00ffd0]/10">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 text-black font-bold shadow-xl border-2 border-cyan-900 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 backdrop-blur-xl"
        style={{boxShadow: '0 4px 24px 0 rgba(0,255,208,0.12)'}}
        aria-label="Go Back"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back</span>
      </button>
      {/* Hero Section */}
      <section className="w-full py-20 flex flex-col items-center justify-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400 text-center mb-6 tracking-tight">
          Start Your Consulting Journey
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-2xl text-cyan-100 text-center max-w-2xl mb-8">
          Unlock your business&apos;s full potential with Upvista&apos;s expert digital consulting. Let&apos;s build your roadmap to success—together.
        </motion.p>
      </section>
      {/* Main Content: Left Timeline & Booking, Right Process/Benefits */}
      <section className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto w-full px-4 mb-24">
        {/* Left: Timeline & Booking */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Consulting Methods */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-cyan-900 flex flex-col items-center mb-4">
            <h3 className="text-xl font-bold text-cyan-200 mb-4">Consult via</h3>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              {consultMethods.map((m) => (
                <button
                  key={m.value}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold border transition-all duration-300 ${method === m.value ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-black border-cyan-400" : "bg-black/30 text-cyan-100 border-cyan-900 hover:bg-cyan-900/30"}`}
                  onClick={() => setMethod(m.value)}
                  type="button"
                >
                  {m.icon} {m.label}
                </button>
              ))}
            </div>
            {/* Dynamic Booking UI */}
            {method === "social" && (
              <div className="flex flex-wrap gap-6 justify-center mt-4">
                {socialMediaLinks.map(link => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                    <span className="bg-gradient-to-br from-cyan-400 to-violet-400 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                    <span className="text-cyan-100 font-medium text-sm group-hover:text-emerald-300 transition-colors">{link.name}</span>
                  </a>
                ))}
              </div>
            )}
            {method === "chat" && (
              <div className="flex flex-wrap gap-6 justify-center mt-4">
                {chatLinks.map(link => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                    <span className="bg-gradient-to-br from-cyan-400 to-emerald-400 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                    <span className="text-cyan-100 font-medium text-sm group-hover:text-violet-300 transition-colors">{link.name}</span>
                  </a>
                ))}
              </div>
            )}
            {method === "schedule" && (
              <div className="flex flex-wrap gap-6 justify-center mt-4">
                {scheduleOptions.map(option => (
                  <a key={option.name} href={option.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                    <span className="bg-gradient-to-br from-cyan-400 to-violet-400 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">{option.icon}</span>
                    <span className="text-cyan-100 font-medium text-sm group-hover:text-emerald-300 transition-colors">{option.name}</span>
                  </a>
                ))}
              </div>
            )}
            {method === "video" && (
              <div className="flex flex-wrap gap-6 justify-center mt-4">
                {videoOptions.map(option => (
                  <button key={option.name} onClick={() => setShowVideoPopup(true)} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <span className="bg-gradient-to-br from-cyan-400 to-violet-400 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">{option.icon}</span>
                    <span className="text-cyan-100 font-medium text-sm group-hover:text-emerald-300 transition-colors">{option.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Vertical Timeline */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-cyan-900 flex flex-col gap-8">
            <h3 className="text-xl font-bold text-cyan-200 mb-4">How We Work</h3>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-violet-400 to-emerald-400 rounded-full" />
              <ul className="space-y-10">
                {timeline.map((phase, i) => (
                  <li key={phase.title} className="relative flex gap-4 items-start">
                    <div className="absolute -left-7 top-0">{phase.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-cyan-100 mb-1">{i + 1}. {phase.title}</h4>
                      <div className="text-cyan-200 text-base" style={{lineHeight: '1.7'}}>{phase.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Right: Process & Benefits */}
        <div className="flex-1 flex flex-col gap-12 justify-center">
          <div className="rounded-3xl bg-gradient-to-br from-[#0f172a]/80 via-[#312e81]/70 to-[#00ffd0]/10 backdrop-blur-xl shadow-2xl p-10 md:p-16 border border-cyan-900">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400 mb-4">Our Consulting Process</h2>
            <ul className="space-y-4 text-cyan-100 text-lg">
              <li className="flex items-start gap-3"><CheckCircle className="text-emerald-400 mt-1" /> <span><b>Discovery:</b> We listen, learn, and analyze your business, goals, and challenges.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-emerald-400 mt-1" /> <span><b>Strategy:</b> We craft a tailored roadmap and actionable plan for your digital growth.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-emerald-400 mt-1" /> <span><b>Execution:</b> We guide you through implementation, ensuring clarity and confidence at every step.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-emerald-400 mt-1" /> <span><b>Support:</b> We provide ongoing advice, optimization, and partnership for lasting success.</span></li>
            </ul>
          </div>
          <div className="rounded-3xl bg-black/40 backdrop-blur-xl shadow-2xl p-10 md:p-16 border border-cyan-900">
            <h3 className="text-2xl font-bold text-cyan-200 mb-2">Why Consult with Upvista?</h3>
            <ul className="space-y-3 text-cyan-100 text-lg">
              <li className="flex items-center gap-2"><CheckCircle className="text-cyan-400" /> 100% tailored, actionable advice</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-cyan-400" /> Proven digital transformation expertise</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-cyan-400" /> Transparent, collaborative process</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-cyan-400" /> Ongoing partnership & support</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />

      {/* Video Consultation Popup */}
      {showVideoPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-full flex items-center justify-center">
                <Video className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Video Consultation</h2>
              <p className="text-gray-300">Video consultations are available for premium clients. Please contact us to schedule a video call.</p>
            </div>
            
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p>Professional video consultation via Zoom or Google Meet</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p>Screen sharing and presentation capabilities</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p>High-quality audio and video</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p>Recording option available</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <a 
                href="https://wa.me/923320486955?text=Hi! I'd like to schedule a premium video consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-violet-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact via WhatsApp</span>
              </a>
              <a 
                href="mailto:support@upvistadigital.com?subject=Premium Video Consultation Request&body=Hi! I'd like to schedule a premium video consultation. Please let me know the details and pricing."
                className="w-full py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact via Email</span>
              </a>
              <button
                onClick={() => setShowVideoPopup(false)}
                className="w-full py-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 