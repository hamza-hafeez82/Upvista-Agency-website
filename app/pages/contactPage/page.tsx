"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaFacebook, FaXTwitter, FaDiscord, FaFacebookMessenger } from "react-icons/fa6";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Phone, Video, MessageSquare, Globe, Calendar, Mail, MessageCircle } from "lucide-react";
import Header from "@/components/Header";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const consultMethods = [
  { label: "Chat", icon: <MessageSquare className="w-5 h-5" />, value: "chat" },
  { label: "Schedule Call", icon: <Phone className="w-5 h-5" />, value: "schedule" },
  { label: "Video Meeting", icon: <Video className="w-5 h-5" />, value: "video" },
  { label: "Social Media", icon: <Globe className="w-5 h-5" />, value: "social" },
];

const socialMediaLinks = [
  { name: "Instagram", icon: <FaInstagram className="w-8 h-8" />, href: "https://www.instagram.com/direct/t/17842162812514678/#" },
  { name: "Facebook", icon: <FaFacebook className="w-8 h-8" />, href: "https://www.facebook.com/share/1Mw8RxcNx2/" },
  { name: "LinkedIn", icon: <FaLinkedin className="w-8 h-8" />, href: "https://www.linkedin.com/in/hamza-hafeez-00937436a" },
  { name: "X", icon: <FaXTwitter className="w-8 h-8" />, href: "https://x.com/Upvista_Digital?s=09" },
  { name: "Discord", icon: <FaDiscord className="w-8 h-8" />, href: "https://discord.gg/wYgrpdYh" },
];

const chatLinks = [
  { name: "WhatsApp", icon: <FaWhatsapp className="w-8 h-8" />, href: "https://wa.me/923320486955" },
  { name: "Messenger", icon: <FaFacebookMessenger className="w-8 h-8" />, href: "https://m.me/61576935582300?source=qr_link_share" },
  { name: "Email", icon: <FaEnvelope className="w-8 h-8" />, href: "mailto:upvistadigital@gmail.com" },
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
    href: "mailto:upvistadigital@gmail.com?subject=Consultation Request&body=Hi! I'd like to schedule a consultation call. Please let me know your available times.", 
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

export default function ContactPage() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/messaging/thread/new/",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/3320486955",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/direct/t/17842162812514678",
      color: "bg-pink-700",
      hoverColor: "hover:bg-pink-800",
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "upvistadigital@gmail.com",
      href: "mailto:upvistadigital@gmail.com",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+92 (0) 3320 486955",
      href: "tel:+923320486955",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      value: "Lahore, Pakistan",
      href: "https://maps.google.com/?q=Lahore,Pakistan",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [method, setMethod] = useState<string | null>(null);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-950 text-white relative pt-32">
        {/* Consultation Button */}
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-6 right-6 z-50 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 text-black font-bold shadow-xl border-2 border-cyan-900 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 backdrop-blur-xl text-lg flex items-center gap-2"
        >
          Book a Free Consultation
        </button>

        {/* Consultation Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.2 }} className="bg-gray-900 rounded-3xl shadow-2xl p-4 sm:p-8 w-full max-w-lg border border-cyan-900 relative overflow-y-auto max-h-[90vh]">
                <button onClick={() => { setShowModal(false); setMethod(null); }} className="absolute top-4 right-4 text-cyan-300 hover:text-emerald-400 text-2xl font-bold">&times;</button>
                <h3 className="text-2xl font-bold text-cyan-200 mb-6 text-center">Book a Free Consultation</h3>
                <div className="flex flex-wrap gap-4 justify-center mb-6">
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                  href="mailto:upvistadigital@gmail.com?subject=Premium Video Consultation Request&body=Hi! I'd like to schedule a premium video consultation. Please let me know the details and pricing."
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg">
            Get in touch with us to discuss your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </span>
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 group"
                  whileHover={{ scale: 1.03, backgroundColor: '#2d1e4f' }}
                >
                  <div className="p-3 rounded-lg bg-gray-800/50 group-hover:bg-purple-500/20 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-400">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.title === "Location" ? "_blank" : undefined}
                        rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer group/link"
                      >
                        <span className="group-hover/link:underline">{info.value}</span>
                        {info.title === "Location" && (
                          <span className="ml-2 text-xs text-purple-400 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300">
                            (Open Map)
                          </span>
                        )}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Connect With Us
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: '#2d1e4f' }}
                  className={`${link.color} ${link.hoverColor} p-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 group`}
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="text-white font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

        {/* VR Experience Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20 rounded-3xl p-8 md:p-12 border border-purple-500/30 shadow-2xl">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent"
              >
                Experience Our VR Consultation
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 max-w-2xl mx-auto"
              >
                Step into the future of project consultation with our immersive Virtual Reality experience. 
                See how we work with clients in real-time through an interactive simulation.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Interactive Chat</h3>
                <p className="text-gray-300">Experience a realistic consultation conversation with our AI agent</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Project Process</h3>
                <p className="text-gray-300">See our complete workflow from consultation to project delivery</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                  <Video className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-time Demo</h3>
                <p className="text-gray-300">Watch as we create project documentation and proposals live</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <Link 
                href="/vr"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 text-white font-bold rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg"
              >
                <Video className="w-6 h-6" />
                Start VR Experience
              </Link>
            </motion.div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Founder Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg shadow-purple-500/20">
              <Image
                src="/assets/hamza-pic.jpg"
                alt="Hamza Hafeez Bhatti"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Founder Message */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Hamza Hafeez
              </h2>
              <p className="text-lg font-medium text-purple-300 mb-4">
                Founder & CEO, Upvista Digital
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                &ldquo;At Upvista Digital, we believe in transforming ideas into
                digital excellence. Our mission is to empower businesses with
                innovative solutions that drive growth and success in the
                digital landscape. With a team of passionate experts and
                cutting-edge technology, we&apos;re committed to delivering
                exceptional results that exceed expectations. Let&apos;s build
                something extraordinary together.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}
