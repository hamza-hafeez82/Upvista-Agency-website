"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Video, MessageSquare, Globe, Calendar, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaFacebook, FaDiscord, FaXTwitter, FaFacebookMessenger } from "react-icons/fa6";
import Head from "next/head";
import Link from "next/link";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Custom Premium Dropdown Component
interface CustomDropdownProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
  label: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ name, value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    const syntheticEvent = {
      target: { name, value: option }
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(syntheticEvent);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15 focus:ring-2 focus:ring-purple-500/30 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-300 hover:border-white/30 hover:bg-gradient-to-r hover:from-white/8 hover:to-white/12 backdrop-blur-sm text-left flex items-center justify-between"
      >
        <span className={value ? "text-white" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-400' : ''}`} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl shadow-purple-500/10 overflow-hidden"
          >
            {options.map((option) => (
              <motion.button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className="w-full px-4 py-3 text-left text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-indigo-600/20 transition-all duration-200 border-b border-white/5 last:border-b-0 group"
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
              >
                <span className="group-hover:text-purple-300 transition-colors duration-200">
                  {option}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const consultMethods = [
  { label: "Chat", icon: <MessageSquare className="w-5 h-5" />, value: "chat" },
  { label: "Schedule Call", icon: <Phone className="w-5 h-5" />, value: "schedule" },
  { label: "Video Meeting", icon: <Video className="w-5 h-5" />, value: "video" },
  { label: "Social Media", icon: <Globe className="w-5 h-5" />, value: "social" },
];

// Consultation form data
const consultationForm = {
  title: "Schedule Your Free Consultation",
  subtitle: "Tell us about your project and we'll get back to you within 24 hours",
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "company", label: "Company/Organization Name", type: "text", required: false },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    { name: "website", label: "Current Website (if any)", type: "url", required: false, placeholder: "https://yourwebsite.com" },
    { name: "projectType", label: "Project Type", type: "select", required: true, options: ["Web Development", "Mobile App Development", "UI/UX Design", "Digital Marketing", "AI Solutions", "E-commerce", "Software Development", "Consulting", "Other"] },
    { name: "budget", label: "Project Budget", type: "select", required: true, options: ["Under $5K", "$5K - $10K", "$10K - $25K", "$25K - $50K", "$50K - $100K", "Over $100K", "Not Sure"] },
    { name: "timeline", label: "Project Timeline", type: "select", required: true, options: ["ASAP (Rush Project)", "1-2 months", "2-3 months", "3-6 months", "6+ months", "Flexible"] },
    { name: "urgency", label: "Project Urgency", type: "select", required: false, options: ["Low - Just exploring options", "Medium - Planning for next quarter", "High - Need to start soon", "Critical - Must launch ASAP"] },
    { name: "teamSize", label: "Your Team Size", type: "select", required: false, options: ["Solo Entrepreneur", "2-5 people", "6-20 people", "20+ people", "Enterprise"] },
    { name: "experience", label: "Previous Tech Experience", type: "select", required: false, options: ["None - Complete beginner", "Some - Basic understanding", "Moderate - Some technical background", "Advanced - Very technical"] },
    { name: "message", label: "Project Description & Goals", type: "textarea", required: true, placeholder: "Please describe your project in detail:\n• What are your main goals?\n• What challenges are you facing?\n• What features do you need?\n• Any specific requirements or preferences?\n• What would success look like for you?" }
  ]
};

const valueProps = [
  {
    title: "Free Initial Consultation",
    description: "No cost, no commitment. Just a conversation about your goals and how we can help."
  },
  {
    title: "24-Hour Response",
    description: "We respond to all consultation requests within 24 hours, often much sooner."
  },
  {
    title: "Custom Proposal",
    description: "Every project gets a tailored proposal with timeline, deliverables, and investment."
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    projectType: "",
    budget: "",
    timeline: "",
    urgency: "",
    teamSize: "",
    experience: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Debug: Log environment variables (remove this after testing)
  console.log('Environment check:', {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing',
    supabaseClient: supabase ? 'Initialized' : 'Not initialized'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if Supabase is available
      if (!supabase) {
        alert('Database connection not available. Please make sure your environment variables are set correctly and restart the development server.');
        setIsSubmitting(false);
        return;
      }

      // Test Supabase connection
      console.log('Testing Supabase connection...');
      const { error: testError } = await supabase
        .from('consultations')
        .select('count')
        .limit(1);
      
      if (testError) {
        console.error('Supabase connection test failed:', testError);
        alert(`Database connection failed: ${testError.message}. Please check your Supabase setup.`);
        setIsSubmitting(false);
        return;
      }
      
      console.log('Supabase connection successful');

      // Prepare data for insertion
      const consultationData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        phone: formData.phone || null,
        website: formData.website || null,
        project_type: formData.projectType,
        budget: formData.budget || null,
        timeline: formData.timeline || null,
        urgency: formData.urgency || null,
        team_size: formData.teamSize || null,
        experience: formData.experience || null,
        message: formData.message,
        status: 'pending'
      };
      
      console.log('Inserting data:', consultationData);

      // Insert consultation into Supabase
      const { data, error } = await supabase
        .from('consultations')
        .insert(consultationData)
        .select()
        .single();

      if (error) {
        console.error('Error submitting consultation:', error);
        console.error('Error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        alert(`Database error: ${error.message || 'Unknown error'}. Please check your Supabase configuration.`);
        setIsSubmitting(false);
        return;
      }

      // Trigger email notification (Edge Function)
      try {
        const response = await fetch('/api/send-consultation-notification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            consultation: data
          }),
        });

        if (!response.ok) {
          console.error('Failed to send email notification');
        }
      } catch (emailError) {
        console.error('Email notification error:', emailError);
        // Don&apos;t fail the form submission if email fails
      }

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form data
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        website: "",
        projectType: "",
        budget: "",
        timeline: "",
        urgency: "",
        teamSize: "",
        experience: "",
        message: ""
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      alert('There was an unexpected error. Please try again.');
      setIsSubmitting(false);
    }
  };

  const renderConsultMethod = () => {
    switch (selectedMethod) {
      case "chat":
  return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chatLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
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
            {scheduleOptions.map((option) => (
              <motion.a
                key={option.name}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
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
            {videoOptions.map((option) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
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
            {socialMediaLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
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
        <meta property="og:url" content="https://upvistadigital.com/Consult" />
        <meta property="og:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consultation | Upvista Digital | Let&apos;s Build Together" />
        <meta name="twitter:description" content="Connect with Upvista Digital for expert consultation. Choose your preferred method - chat, schedule call, video meeting, or social media." />
        <meta name="twitter:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <link rel="canonical" href="https://upvistadigital.com/Consult" />
      </Head>

      <Header />
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
          <div className="container mx-auto px-4 py-8 mt-20">
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

            {/* Professional Consultation Form - Moved to top */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-6xl mx-auto mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Value Propositions */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="text-center lg:text-left mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Ready to Start?
                    </h2>
                    <p className="text-xl text-gray-300">
                      Get a free consultation tailored to your specific needs.
                    </p>
                  </div>
                  
                  {valueProps.map((prop) => (
                    <motion.div
                      key={prop.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                    >
                      <h3 className="text-white font-semibold text-lg mb-2">{prop.title}</h3>
                      <p className="text-gray-400 text-sm">{prop.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Consultation Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{consultationForm.title}</h3>
                      <p className="text-gray-400">{consultationForm.subtitle}</p>
                    </div>

                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                        <p className="text-gray-400">We'll be in touch within 24 hours.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Basic Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {consultationForm.fields.slice(0, 5).map((field) => (
                            <div key={field.name} className={field.name === "website" ? "md:col-span-2" : ""}>
                              <label className="block text-white text-sm font-medium mb-2">
                                {field.label}
                                {field.required && <span className="text-red-400 ml-1">*</span>}
                              </label>
                              {field.type === "textarea" ? (
                                <textarea
                                  name={field.name}
                                  value={formData[field.name as keyof typeof formData]}
                                  onChange={handleInputChange}
                                  placeholder={field.placeholder}
                                  required={field.required}
                                  className="w-full px-4 py-3 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15 focus:ring-2 focus:ring-purple-500/30 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-300 resize-none hover:border-white/30 hover:bg-gradient-to-r hover:from-white/8 hover:to-white/12 backdrop-blur-sm"
                                  rows={4}
                                />
                              ) : field.type === "select" ? (
                                <CustomDropdown
                                  name={field.name}
                                  value={formData[field.name as keyof typeof formData]}
                                  onChange={handleInputChange}
                                  options={field.options || []}
                                  placeholder={`Select ${field.label}`}
                                  required={field.required}
                                  label={field.label}
                                />
                              ) : (
                                <input
                                  type={field.type}
                                  name={field.name}
                                  value={formData[field.name as keyof typeof formData]}
                                  onChange={handleInputChange}
                                  placeholder={field.placeholder}
                                  required={field.required}
                                  className="w-full px-4 py-3 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15 focus:ring-2 focus:ring-purple-500/30 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-300 hover:border-white/30 hover:bg-gradient-to-r hover:from-white/8 hover:to-white/12 backdrop-blur-sm"
                                />
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Project Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {consultationForm.fields.slice(5, 9).map((field) => (
                            <div key={field.name}>
                              <label className="block text-white text-sm font-medium mb-2">
                                {field.label}
                                {field.required && <span className="text-red-400 ml-1">*</span>}
                              </label>
                              <CustomDropdown
                                name={field.name}
                                value={formData[field.name as keyof typeof formData]}
                                onChange={handleInputChange}
                                options={field.options || []}
                                placeholder={`Select ${field.label}`}
                                required={field.required}
                                label={field.label}
                              />
                            </div>
                          ))}
                        </div>

                        {/* Additional Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {consultationForm.fields.slice(9, 11).map((field) => (
                            <div key={field.name}>
                              <label className="block text-white text-sm font-medium mb-2">
                                {field.label}
                                {field.required && <span className="text-red-400 ml-1">*</span>}
                              </label>
                              <CustomDropdown
                                name={field.name}
                                value={formData[field.name as keyof typeof formData]}
                                onChange={handleInputChange}
                                options={field.options || []}
                                placeholder={`Select ${field.label}`}
                                required={field.required}
                                label={field.label}
                              />
                            </div>
                          ))}
                        </div>

                        {/* Message field */}
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            {consultationForm.fields[11].label}
                            <span className="text-red-400 ml-1">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={consultationForm.fields[11].placeholder}
                            required
                            className="w-full px-4 py-3 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15 focus:ring-2 focus:ring-purple-500/30 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-300 resize-none hover:border-white/30 hover:bg-gradient-to-r hover:from-white/8 hover:to-white/12 backdrop-blur-sm"
                            rows={6}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Submitting...</span>
                            </div>
                          ) : (
                            "Send Consultation Request"
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Consult Methods Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
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


            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
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
                  <Link href="/contactPage">
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
