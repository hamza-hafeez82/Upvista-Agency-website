"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Video, MessageSquare, Globe, Calendar, Mail, MessageCircle, Users, Target, Zap, Rocket } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaFacebook, FaDiscord, FaXTwitter, FaFacebookMessenger } from "react-icons/fa6";
import Head from "next/head";
import Link from "next/link";

const consultMethods = [
  { label: "Chat", icon: <MessageSquare className="w-5 h-5" />, value: "chat" },
  { label: "Schedule Call", icon: <Phone className="w-5 h-5" />, value: "schedule" },
  { label: "Video Meeting", icon: <Video className="w-5 h-5" />, value: "video" },
  { label: "Social Media", icon: <Globe className="w-5 h-5" />, value: "social" },
];

const consultationProcess = [
  {
    step: "01",
    title: "Discovery & Connect",
    description: "We start by understanding your vision, challenges, and goals through our initial consultation.",
    icon: <Users className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Our experts craft a comprehensive strategy and detailed project roadmap tailored to your needs.",
    icon: <Target className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: "03",
    title: "Development & Execution",
    description: "We bring your vision to life with cutting-edge technology and agile development methodologies.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We ensure seamless deployment and provide ongoing support to keep your solution performing optimally.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-orange-500 to-red-500"
  }
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
];

export default function ConsultPage() {
  const [selectedMethod, setSelectedMethod] = useState("chat");

  const renderConsultMethod = () => {
    switch (selectedMethod) {
      case "chat":
  return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chatLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300 mb-4">
                  {link.icon}
            </div>
                <h3 className="text-white font-semibold text-lg">{link.name}</h3>
              </motion.a>
                ))}
              </div>
        );
      case "schedule":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scheduleOptions.map((option, index) => (
              <motion.a
                key={option.name}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300 mb-4">
                  {option.icon}
              </div>
                <h3 className="text-white font-semibold text-lg mb-2">{option.name}</h3>
                <p className="text-gray-400 text-sm text-center">{option.desc}</p>
              </motion.a>
            ))}
          </div>
        );
      case "video":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300 mr-4">
                  {option.icon}
                </div>
                    <div>
                  <h3 className="text-white font-semibold text-lg">{option.name}</h3>
                  <p className="text-gray-400 text-sm">{option.desc}</p>
                    </div>
              </motion.div>
                ))}
          </div>
        );
      case "social":
        return (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {socialMediaLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300 mb-4">
                  {link.icon}
        </div>
                <h3 className="text-white font-semibold text-sm">{link.name}</h3>
              </motion.a>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Consultation | Upvista Digital | Let&apos;s Build Together</title>
        <meta name="description" content="Connect with Upvista Digital for expert consultation. Choose your preferred method - chat, schedule call, video meeting, or social media." />
        <meta name="keywords" content="Upvista, Upvista Digital, Consultation, Business Talk, Digital Solutions, Expert Advice" />
        <meta property="og:title" content="Consultation | Upvista Digital | Let&apos;s Build Together" />
        <meta property="og:description" content="Connect with Upvista Digital for expert consultation. Choose your preferred method - chat, schedule call, video meeting, or social media." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upvistadigital.com/pages/consult" />
        <meta property="og:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consultation | Upvista Digital | Let&apos;s Build Together" />
        <meta name="twitter:description" content="Connect with Upvista Digital for expert consultation. Choose your preferred method - chat, schedule call, video meeting, or social media." />
        <meta name="twitter:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <link rel="canonical" href="https://upvistadigital.com/pages/consult" />
      </Head>

      <div className="min-h-screen bg-black text-white pt-20 relative overflow-hidden">
        {/* 3D Background with Purple Wave */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Animated Purple Wave SVG */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
              fill="url(#waveGradient)"
              className="animate-pulse"
            />
            <path
              d="M0,500 Q300,400 600,500 T1200,500 L1200,800 L0,800 Z"
              fill="url(#waveGradient)"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="container mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Let&apos;s Talk Business
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to connect with us and start building your digital future.
              </p>
            </motion.div>

            {/* Consult Methods Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">How would you like to connect?</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {consultMethods.map((method) => (
                    <button
                      key={method.value}
                      onClick={() => setSelectedMethod(method.value)}
                      className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center ${
                        selectedMethod === method.value
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                          : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="mb-2">{method.icon}</div>
                      <span className="text-sm font-medium">{method.label}</span>
                    </button>
                  ))}
            </div>
            
                <div className="mt-8">
                  {renderConsultMethod()}
              </div>
              </div>
            </motion.div>

            {/* Consultation Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-6xl mx-auto mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Consultation Process
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  A simple, transparent pathway from your vision to digital reality.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {consultationProcess.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="relative group"
                  >
                    {/* Connection Line */}
                    {index < consultationProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent transform -translate-y-1/2 z-0"></div>
                    )}
                    
                    <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group-hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {step.icon}
              </div>
            </div>
            
                      <div className="text-center">
                        <div className="text-purple-400 text-sm font-bold mb-2">STEP {step.step}</div>
                        <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-300 mb-6">
                  Let&apos;s transform your ideas into powerful digital solutions together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                    onClick={() => setSelectedMethod("chat")}
                    className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 font-semibold"
                  >
                    Start Consultation
                  </button>
                  <Link href="/pages/contactPage">
                    <button className="px-8 py-3 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors duration-300 font-semibold">
                      Learn More
              </button>
                  </Link>
                </div>
            </div>
            </motion.div>
          </div>
        </div>
    </div>
      
      <Footer />
    </>
  );
} 