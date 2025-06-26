"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaFacebook, FaXTwitter, FaDiscord, FaFacebookMessenger, FaGlobe } from "react-icons/fa6";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import hamzaPic from "../../../assets/hamza pic.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const consultMethods = [
  { label: "Chat", icon: <FaWhatsapp className="w-5 h-5" />, value: "chat" },
  { label: "Call", icon: <FaPhone className="w-5 h-5" />, value: "call" },
  { label: "Video Conferencing", icon: <FaEnvelope className="w-5 h-5" />, value: "video" },
  { label: "Social Media", icon: <FaGlobe className="w-5 h-5" />, value: "social" },
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
const callPlatforms = [
  { label: "WhatsApp", value: "whatsapp" },
  { label: "Phone", value: "phone" },
  { label: "Messenger", value: "messenger" },
];
const videoPlatforms = [
  { label: "Zoom", value: "zoom" },
  { label: "Google Meet", value: "meet" },
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
      value: "+92 (0) 3294 022494",
      href: "tel:+923294022494",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      value: "Lahore, Pakistan",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [method, setMethod] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", platform: "", date: "", time: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      {/* Consultation Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed top-8 right-8 z-50 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 text-black font-bold shadow-xl border-2 border-cyan-900 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 backdrop-blur-xl text-lg flex items-center gap-2"
      >
        Book a Free Consultation
      </button>
      {/* Consultation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.2 }} className="bg-gray-900 rounded-3xl shadow-2xl p-4 sm:p-8 w-full max-w-lg border border-cyan-900 relative overflow-y-auto max-h-[90vh]">
              <button onClick={() => { setShowModal(false); setMethod(null); setForm({ name: "", email: "", phone: "", platform: "", date: "", time: "", message: "" }); setSubmitted(false); }} className="absolute top-4 right-4 text-cyan-300 hover:text-emerald-400 text-2xl font-bold">&times;</button>
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
              {method === "call" && (
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 mt-4">
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 placeholder:text-cyan-300 placeholder:italic" required />
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 placeholder:text-cyan-300 placeholder:italic" required />
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number (optional)" className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 placeholder:text-cyan-300 placeholder:italic" />
                  <select name="platform" value={form.platform} onChange={handleSelectChange} className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100" required>
                    <option value="" disabled>Select your platform</option>
                    {callPlatforms.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                  </select>
                  <input type="date" name="date" value={form.date} onChange={handleChange} placeholder="Choose any date" className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 placeholder:text-cyan-300 placeholder:italic" required min={new Date().toISOString().split('T')[0]} />
                  <input type="time" name="time" value={form.time} onChange={handleChange} placeholder="Choose the time" className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 placeholder:text-cyan-300 placeholder:italic" required min="08:00" max="18:00" />
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message..." className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 min-h-[80px] placeholder:text-cyan-300 placeholder:italic" required />
                  <button type="submit" className="mt-2 px-8 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Book Now
                  </button>
                  {submitted && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
                      <CheckCircle className="w-8 h-8 mx-auto text-emerald-400 mb-2 animate-bounce" />
                      <p className="text-lg text-emerald-200 font-bold">Thank you! We&apos;ll be in touch soon.</p>
                    </motion.div>
                  )}
                </form>
              )}
              {method === "video" && (
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 mt-4">
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 placeholder:text-cyan-300 placeholder:italic" required />
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 placeholder:text-cyan-300 placeholder:italic" required />
                  <select name="platform" value={form.platform} onChange={handleSelectChange} className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100" required>
                    <option value="" disabled>Select your platform</option>
                    {videoPlatforms.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                  </select>
                  <input type="date" name="date" value={form.date} onChange={handleChange} placeholder="Choose any date" className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 placeholder:text-cyan-300 placeholder:italic" required min={new Date().toISOString().split('T')[0]} />
                  <input type="time" name="time" value={form.time} onChange={handleChange} placeholder="Choose the time" className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 placeholder:text-cyan-300 placeholder:italic" required min="14:00" max="18:00" />
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message..." className="rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 min-h-[80px] placeholder:text-cyan-300 placeholder:italic" required />
                  <button type="submit" className="mt-2 px-8 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Book Now
                  </button>
                  {submitted && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-center">
                      <CheckCircle className="w-8 h-8 mx-auto text-emerald-400 mb-2 animate-bounce" />
                      <p className="text-lg text-emerald-200 font-bold">Thank you! We&apos;ll be in touch soon.</p>
                    </motion.div>
                  )}
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Home Arrow */}
      <Link href="/" className="absolute left-6 top-6 z-20 group">
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-600 p-0.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/40 group-hover:scale-110">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-violet-400 transition-transform duration-300 group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium text-violet-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Back to Home
          </span>
        </div>
      </Link>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg">
            Get in touch with us to discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </span>
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-gray-800/50 group-hover:bg-purple-500/20 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-purple-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Connect With Us
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} ${link.hoverColor} p-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 group`}
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="text-white font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Founder Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg shadow-purple-500/20">
              <Image
                src={hamzaPic}
                alt="Hamza Hafeez Bhatti"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Founder Message */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Hamza Hafeez Bhatti
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
  );
}
