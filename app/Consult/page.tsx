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
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { isDark } = useTheme();

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
        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 backdrop-blur-sm text-left flex items-center justify-between ${
          isDark 
            ? 'bg-gradient-to-r from-white/5 to-white/10 border-white/20 text-white focus:border-purple-400 focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15 focus:ring-purple-500/30 focus:shadow-lg focus:shadow-purple-500/10 hover:border-white/30 hover:bg-gradient-to-r hover:from-white/8 hover:to-white/12'
            : 'bg-gradient-to-r from-white/80 to-white/90 border-gray-300/50 text-gray-900 focus:border-blue-500 focus:bg-gradient-to-r focus:from-white/90 focus:to-white/95 focus:ring-blue-500/30 focus:shadow-lg focus:shadow-blue-500/10 hover:border-gray-400/70 hover:bg-gradient-to-r hover:from-white/85 hover:to-white/95'
        }`}
      >
        <span className={value ? (isDark ? "text-white" : "text-gray-900") : (isDark ? "text-gray-400" : "text-gray-500")}>
          {value || placeholder}
        </span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? (isDark ? 'rotate-180 text-purple-400' : 'rotate-180 text-blue-500') : (isDark ? 'text-gray-300' : 'text-gray-600')}`} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 w-full mt-2 backdrop-blur-xl border rounded-xl shadow-2xl overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-b from-gray-900/95 to-gray-800/95 border-white/20 shadow-purple-500/10'
                : 'bg-gradient-to-b from-white/95 to-gray-50/95 border-gray-300/50 shadow-blue-500/10'
            }`}
          >
            {options.map((option) => (
              <motion.button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-3 text-left transition-all duration-200 border-b last:border-b-0 group ${
                  isDark 
                    ? 'text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-indigo-600/20 border-white/5'
                    : 'text-gray-900 hover:bg-gradient-to-r hover:from-blue-100/50 hover:to-indigo-100/50 border-gray-200/50'
                }`}
                whileHover={{ x: 4 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
              >
                <span className={`transition-colors duration-200 ${
                  isDark ? 'group-hover:text-purple-300' : 'group-hover:text-blue-600'
                }`}>
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

const getConsultMethods = (t: (key: string) => string) => [
  { label: t('contact.consultMethod.chat'), icon: <MessageSquare className="w-5 h-5" />, value: "chat" },
  { label: t('contact.consultMethod.schedule'), icon: <Phone className="w-5 h-5" />, value: "schedule" },
  { label: t('contact.consultMethod.video'), icon: <Video className="w-5 h-5" />, value: "video" },
  { label: t('contact.consultMethod.social'), icon: <Globe className="w-5 h-5" />, value: "social" },
];

// Consultation form data
const getConsultationForm = (t: (key: string) => string) => ({
  title: t('consultation.formTitle'),
  subtitle: t('consultation.formSubtitle'),
  fields: [
    { name: "name", label: t('consultation.name'), type: "text", required: true },
    { name: "email", label: t('consultation.email'), type: "email", required: true },
    { name: "company", label: t('consultation.company'), type: "text", required: false },
    { name: "phone", label: t('consultation.phone'), type: "tel", required: false },
    { name: "website", label: t('consultation.website'), type: "url", required: false, placeholder: t('consultation.websitePlaceholder') },
    { name: "projectType", label: t('consultation.projectType'), type: "select", required: true, options: [
      t('consultation.projectTypes.webDev'), t('consultation.projectTypes.mobileApp'), 
      t('consultation.projectTypes.uiux'), t('consultation.projectTypes.marketing'), 
      t('consultation.projectTypes.ai'), t('consultation.projectTypes.ecommerce'), 
      t('consultation.projectTypes.software'), t('consultation.projectTypes.consulting'), 
      t('consultation.projectTypes.other')
    ] },
    { name: "budget", label: t('consultation.budget'), type: "select", required: true, options: [
      t('consultation.budgetOptions.under5k'), t('consultation.budgetOptions.5k10k'), 
      t('consultation.budgetOptions.10k25k'), t('consultation.budgetOptions.25k50k'), 
      t('consultation.budgetOptions.50k100k'), t('consultation.budgetOptions.over100k'), 
      t('consultation.budgetOptions.notSure')
    ] },
    { name: "timeline", label: t('consultation.timeline'), type: "select", required: true, options: [
      t('consultation.timelineOptions.asap'), t('consultation.timelineOptions.1-2months'), 
      t('consultation.timelineOptions.2-3months'), t('consultation.timelineOptions.3-6months'), 
      t('consultation.timelineOptions.6+months'), t('consultation.timelineOptions.flexible')
    ] },
    { name: "urgency", label: t('consultation.urgency'), type: "select", required: false, options: [
      t('consultation.urgencyOptions.low'), t('consultation.urgencyOptions.medium'), 
      t('consultation.urgencyOptions.high'), t('consultation.urgencyOptions.critical')
    ] },
    { name: "teamSize", label: t('consultation.teamSize'), type: "select", required: false, options: [
      t('consultation.teamSizeOptions.solo'), t('consultation.teamSizeOptions.2-5'), 
      t('consultation.teamSizeOptions.6-20'), t('consultation.teamSizeOptions.20+'), 
      t('consultation.teamSizeOptions.enterprise')
    ] },
    { name: "experience", label: t('consultation.experience'), type: "select", required: false, options: [
      t('consultation.experienceOptions.none'), t('consultation.experienceOptions.some'), 
      t('consultation.experienceOptions.moderate'), t('consultation.experienceOptions.advanced')
    ] },
    { name: "message", label: t('consultation.message'), type: "textarea", required: true, placeholder: t('consultation.messagePlaceholder') }
  ]
});

const getValueProps = (t: (key: string) => string) => [
  {
    title: t('consultation.freeConsultation'),
    description: t('consultation.freeConsultationDesc')
  },
  {
    title: t('consultation.response24h'),
    description: t('consultation.response24hDesc')
  },
  {
    title: t('consultation.customProposal'),
    description: t('consultation.customProposalDesc')
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

const getScheduleOptions = (t: (key: string) => string) => [
  { 
    name: "Calendly", 
    icon: <Calendar className="w-8 h-8" />, 
    href: "https://calendly.com/upvistadigital/30min", 
    desc: t('consultation.schedule.calendlyDesc')
  },
  { 
    name: "WhatsApp", 
    icon: <MessageCircle className="w-8 h-8" />, 
    href: "https://wa.me/923320486955?text=Hi! I'd like to schedule a consultation call.", 
    desc: t('consultation.schedule.whatsappDesc')
  },
  { 
    name: "Email", 
    icon: <Mail className="w-8 h-8" />, 
    href: "mailto:support@upvistadigital.com?subject=Consultation Request&body=Hi! I'd like to schedule a consultation call. Please let me know your available times.", 
    desc: t('consultation.schedule.emailDesc')
  },
];

const getVideoOptions = (t: (key: string) => string) => [
  { 
    name: "Zoom Meeting", 
    icon: <Video className="w-8 h-8" />, 
    desc: t('consultation.video.zoomDesc')
  },
  { 
    name: "Google Meet", 
    icon: <Video className="w-8 h-8" />, 
    desc: t('consultation.video.googleMeetDesc')
  },
];

export default function ConsultPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
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
                className={`flex flex-col items-center p-6 backdrop-blur-sm border rounded-xl transition-all duration-300 group ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/30'
                    : 'bg-white/80 border-gray-200/50 hover:bg-white/90 hover:border-blue-500/30'
                }`}
              >
                <div className={`group-hover:scale-110 transition-transform duration-300 mb-4 ${
                  isDark ? 'text-purple-400' : 'text-blue-500'
                }`}>
                  {link.icon}
            </div>
                <h3 className={`font-semibold text-lg ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{link.name}</h3>
              </motion.a>
                ))}
              </div>
        );
      case "schedule":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getScheduleOptions(t).map((option) => (
              <motion.a
                key={option.name}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col items-center p-6 backdrop-blur-sm border rounded-xl transition-all duration-300 group ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/30'
                    : 'bg-white/80 border-gray-200/50 hover:bg-white/90 hover:border-blue-500/30'
                }`}
              >
                <div className={`group-hover:scale-110 transition-transform duration-300 mb-4 ${
                  isDark ? 'text-purple-400' : 'text-blue-500'
                }`}>
                  {option.icon}
              </div>
                <h3 className={`font-semibold text-lg mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{option.name}</h3>
                <p className={`text-sm text-center ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{option.desc}</p>
              </motion.a>
            ))}
          </div>
        );
      case "video":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getVideoOptions(t).map((option) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`flex items-center p-6 backdrop-blur-sm border rounded-xl transition-all duration-300 group ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/30'
                    : 'bg-white/80 border-gray-200/50 hover:bg-white/90 hover:border-blue-500/30'
                }`}
              >
                <div className={`group-hover:scale-110 transition-transform duration-300 mr-4 ${
                  isDark ? 'text-purple-400' : 'text-blue-500'
                }`}>
                  {option.icon}
                </div>
                    <div>
                  <h3 className={`font-semibold text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{option.name}</h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{option.desc}</p>
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
                className={`flex flex-col items-center p-6 backdrop-blur-sm border rounded-xl transition-all duration-300 group ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/30'
                    : 'bg-white/80 border-gray-200/50 hover:bg-white/90 hover:border-blue-500/30'
                }`}
              >
                <div className={`group-hover:scale-110 transition-transform duration-300 mb-4 ${
                  isDark ? 'text-purple-400' : 'text-blue-500'
                }`}>
                  {link.icon}
        </div>
                <h3 className={`font-semibold text-sm ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{link.name}</h3>
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
      <div className={`min-h-screen pt-20 relative overflow-hidden ${
        isDark 
          ? 'bg-black text-white' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-gray-900'
      }`}>
        {/* 3D Background with Purple Wave */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-black via-gray-900 to-black'
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
        }`}>
          {/* Animated Purple Wave SVG */}
          <svg className={`absolute top-0 left-0 w-full h-full ${isDark ? 'opacity-20' : 'opacity-10'}`} viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={isDark ? "#8B5CF6" : "#3B82F6"} stopOpacity={isDark ? "0.3" : "0.2"} />
                <stop offset="50%" stopColor={isDark ? "#A855F7" : "#6366F1"} stopOpacity={isDark ? "0.5" : "0.3"} />
                <stop offset="100%" stopColor={isDark ? "#7C3AED" : "#8B5CF6"} stopOpacity={isDark ? "0.3" : "0.2"} />
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
          <div className={`absolute top-20 left-20 w-32 h-32 rounded-full blur-xl animate-pulse ${
            isDark ? 'bg-purple-500/10' : 'bg-gradient-to-br from-blue-400/25 to-purple-500/20'
          }`}></div>
          <div className={`absolute top-40 right-32 w-24 h-24 rounded-full blur-xl animate-pulse ${
            isDark ? 'bg-blue-500/10' : 'bg-gradient-to-br from-indigo-500/25 to-violet-600/20'
          }`} style={{ animationDelay: '2s' }}></div>
          <div className={`absolute bottom-32 left-1/3 w-40 h-40 rounded-full blur-xl animate-pulse ${
            isDark ? 'bg-pink-500/10' : 'bg-gradient-to-br from-purple-400/20 to-pink-400/15'
          }`} style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="container mx-auto px-4 py-8 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
                isDark ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'
              }`}>
                {t('consultation.title')}
              </h1>
              <p className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('consultation.subtitle')}
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
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t('consultation.readyToStart')}
                    </h2>
                    <p className={`text-xl ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('consultation.getConsultation')}
                    </p>
                  </div>
                  
                  {getValueProps(t).map((prop) => (
                    <motion.div
                      key={prop.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className={`backdrop-blur-sm border rounded-xl p-6 ${
                        isDark 
                          ? 'bg-white/5 border-white/10'
                          : 'bg-white/80 border-gray-200/50'
                      }`}
                    >
                      <h3 className={`font-semibold text-lg mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{prop.title}</h3>
                      <p className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{prop.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Consultation Form */}
                <div className="lg:col-span-2">
                  <div className={`backdrop-blur-sm border rounded-2xl p-8 ${
                    isDark 
                      ? 'bg-white/5 border-white/10'
                      : 'bg-white/80 border-gray-200/50'
                  }`}>
                    <div className="text-center mb-8">
                      <h3 className={`text-2xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{getConsultationForm(t).title}</h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{getConsultationForm(t).subtitle}</p>
                    </div>

                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{t('consultation.thankYou')}</h3>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{t('consultation.thankYouDesc')}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Basic Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {getConsultationForm(t).fields.slice(0, 5).map((field) => (
                            <div key={field.name} className={field.name === "website" ? "md:col-span-2" : ""}>
                              <label className={`block text-sm font-medium mb-2 ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>
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
                                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none backdrop-blur-sm ${
                                    isDark 
                                      ? 'bg-gradient-to-r from-white/5 to-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15 focus:ring-purple-500/30 focus:shadow-lg focus:shadow-purple-500/10 hover:border-white/30 hover:bg-gradient-to-r hover:from-white/8 hover:to-white/12'
                                      : 'bg-gradient-to-r from-white/80 to-white/90 border-gray-300/50 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-gradient-to-r focus:from-white/90 focus:to-white/95 focus:ring-blue-500/30 focus:shadow-lg focus:shadow-blue-500/10 hover:border-gray-400/70 hover:bg-gradient-to-r hover:from-white/85 hover:to-white/95'
                                  }`}
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
                                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 backdrop-blur-sm ${
                                    isDark 
                                      ? 'bg-gradient-to-r from-white/5 to-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15 focus:ring-purple-500/30 focus:shadow-lg focus:shadow-purple-500/10 hover:border-white/30 hover:bg-gradient-to-r hover:from-white/8 hover:to-white/12'
                                      : 'bg-gradient-to-r from-white/80 to-white/90 border-gray-300/50 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-gradient-to-r focus:from-white/90 focus:to-white/95 focus:ring-blue-500/30 focus:shadow-lg focus:shadow-blue-500/10 hover:border-gray-400/70 hover:bg-gradient-to-r hover:from-white/85 hover:to-white/95'
                                  }`}
                                />
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Project Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {getConsultationForm(t).fields.slice(5, 9).map((field) => (
                            <div key={field.name}>
                              <label className={`block text-sm font-medium mb-2 ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>
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
                          {getConsultationForm(t).fields.slice(9, 11).map((field) => (
                            <div key={field.name}>
                              <label className={`block text-sm font-medium mb-2 ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>
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
                          <label className={`block text-sm font-medium mb-2 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {getConsultationForm(t).fields[11].label}
                            <span className="text-red-400 ml-1">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={getConsultationForm(t).fields[11].placeholder}
                            required
                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none backdrop-blur-sm ${
                              isDark 
                                ? 'bg-gradient-to-r from-white/5 to-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15 focus:ring-purple-500/30 focus:shadow-lg focus:shadow-purple-500/10 hover:border-white/30 hover:bg-gradient-to-r hover:from-white/8 hover:to-white/12'
                                : 'bg-gradient-to-r from-white/80 to-white/90 border-gray-300/50 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-gradient-to-r focus:from-white/90 focus:to-white/95 focus:ring-blue-500/30 focus:shadow-lg focus:shadow-blue-500/10 hover:border-gray-400/70 hover:bg-gradient-to-r hover:from-white/85 hover:to-white/95'
                            }`}
                            rows={6}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] ${
                            isDark 
                              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/25'
                              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25'
                          }`}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>{t('consultation.submitting')}</span>
                            </div>
                          ) : (
                            t('consultation.submitButton')
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
              <div className={`backdrop-blur-sm border rounded-2xl p-8 ${
                isDark 
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white/80 border-gray-200/50'
              }`}>
                <h2 className={`text-2xl font-bold mb-6 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{t('consultation.howToConnect')}</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {getConsultMethods(t).map((method) => (
                    <button
                      key={method.value}
                      onClick={() => setSelectedMethod(method.value)}
                      className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center ${
                        selectedMethod === method.value
                          ? isDark 
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                            : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                          : isDark
                            ? "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                            : "bg-white/60 text-gray-700 hover:bg-white/80 hover:text-gray-900"
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
              <div className={`backdrop-blur-sm border rounded-2xl p-8 max-w-2xl mx-auto ${
                isDark 
                  ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30'
                  : 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30'
              }`}>
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {t('consultation.readyToStartJourney')}
                </h3>
                <p className={`mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('consultation.transformIdeas')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                    onClick={() => setSelectedMethod("chat")}
                    className={`px-8 py-3 text-white rounded-lg transition-colors duration-300 font-semibold ${
                      isDark 
                        ? 'bg-purple-600 hover:bg-purple-700'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    {t('consultation.startConsultation')}
                  </button>
                  <Link href="/contactPage">
                    <button className={`px-8 py-3 border rounded-lg transition-colors duration-300 font-semibold ${
                      isDark 
                        ? 'border-purple-500/30 text-purple-400 hover:bg-purple-500/10'
                        : 'border-blue-500/30 text-blue-600 hover:bg-blue-500/10'
                    }`}>
                      {t('consultation.learnMore')}
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
