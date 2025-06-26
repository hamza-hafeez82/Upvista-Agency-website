"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, User, Mail, Briefcase, Target, MessageCircle, Phone, Video, MessageSquare, Globe, FileText, FileCheck2, FileOutput, Rocket, Wrench, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const consultMethods = [
  { label: "Chat", icon: <MessageSquare className="w-5 h-5" />, value: "chat" },
  { label: "Call", icon: <Phone className="w-5 h-5" />, value: "call" },
  { label: "Video Conferencing", icon: <Video className="w-5 h-5" />, value: "video" },
  { label: "Social Media", icon: <Globe className="w-5 h-5" />, value: "social" },
];

const timeline = [
  {
    title: "Consultation",
    icon: <MessageSquare className="w-6 h-6 text-cyan-300" />,
    desc: "Connect with us via chat, call, video, or your favorite platform. We listen, understand, and guide you from the very first conversation.",
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

const steps = [
  { label: "Your Name", icon: <User className="w-5 h-5" />, name: "name", type: "text", placeholder: "Enter your full name" },
  { label: "Email Address", icon: <Mail className="w-5 h-5" />, name: "email", type: "email", placeholder: "Enter your email" },
  { label: "Business/Organization", icon: <Briefcase className="w-5 h-5" />, name: "business", type: "text", placeholder: "Your business or organization" },
  { label: "Your Goals", icon: <Target className="w-5 h-5" />, name: "goals", type: "text", placeholder: "What do you want to achieve?" },
  { label: "Message", icon: <MessageCircle className="w-5 h-5" />, name: "message", type: "textarea", placeholder: "Tell us more about your needs..." },
];

export default function ConsultPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", business: "", goals: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [method, setMethod] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

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
            {method && (
              <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-6 mt-4">
                <h4 className="text-lg font-semibold text-cyan-100 mb-2">Book a Consultation ({consultMethods.find(m => m.value === method)?.label})</h4>
                {steps.map((s) => (
                  <div key={s.name} className="flex flex-col gap-1">
                    <label className="text-cyan-200 font-medium flex items-center gap-2">{s.icon} {s.label}</label>
                    {s.type === "textarea" ? (
                      <textarea
                        name={s.name}
                        value={form[s.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={s.placeholder}
                        className="w-full rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all min-h-[80px]"
                        required
                      />
                    ) : (
                      <input
                        type={s.type}
                        name={s.name}
                        value={form[s.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={s.placeholder}
                        className="w-full rounded-xl p-3 bg-black/30 border border-cyan-800 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                        required
                      />
                    )}
                  </div>
                ))}
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
    </div>
  );
} 