"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import Logoimg from "../../../assets/u.png";
import HamzaPic from "../../../assets/hamza pic.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

// Typewriter effect for hero tagline
function Typewriter({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{displayed}</span>;
}

// Pillars with icons
const pillars = [
  {
    title: "Agency",
    icon: <svg className="w-8 h-8 mx-auto mb-2 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z" /></svg>,
    description: "We deliver premium, end-to-end digital transformation—web, mobile, AI, branding, and beyond. Our work is not just service; it's a signature of excellence.",
  },
  {
    title: "Community",
    icon: <svg className="w-8 h-8 mx-auto mb-2 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 15s1.5-2 4-2 4 2 4 2" /><circle cx="9" cy="10" r="1" /><circle cx="15" cy="10" r="1" /></svg>,
    description: "A thriving collective of developers, designers, and forward-thinkers. Here, collaboration fuels growth, open-source projects flourish, and every member is empowered to lead and innovate.",
  },
  {
    title: "Partnerships",
    icon: <svg className="w-8 h-8 mx-auto mb-2 text-pink-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87" /><path d="M9 20H4v-2a4 4 0 013-3.87" /><circle cx="12" cy="7" r="4" /></svg>,
    description: "We believe in growing together. Through strategic alliances, we combine strengths, share opportunities, and create impact that transcends boundaries.",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Upvista Digital transformed our business. Their vision and execution are unmatched!",
  },
  {
    quote: "The community at Upvista is inspiring. I found collaborators and friends for life!",
  },
  {
    quote: "Our partnership with Upvista led to incredible growth. Highly recommended!",
  },
];

export default function AboutUs() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((idx) => (idx + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-950 text-white">
        {/* Animated Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 bg-transparent overflow-hidden">
          <div className="flex justify-center mb-6">
            <div className="relative h-32 w-32">
              <Image src={Logoimg} alt="Upvista Logo" fill style={{objectFit: 'contain'}} />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg leading-[1.35] inline-block">
              Upvista Digital
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-6 font-medium">
              <Typewriter text="Where Visionaries Build the Future" speed={40} />
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              We are not just a software company—we are a movement. We inspire, empower, and elevate brands to legendary status.
            </p>
          </motion.div>
        </section>

        {/* Founder Highlight */}
        <section className="container mx-auto px-4 py-12 max-w-3xl flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 relative"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 blur-lg opacity-60 z-0"
            />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg z-10">
              <Image src={HamzaPic} alt="Hamza Hafeez - Founder" fill style={{objectFit: 'cover'}} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-2xl font-bold mb-2 text-white">Meet the Founder</h2>
            <p className="text-lg text-purple-200 font-semibold mb-2">Hamza Hafeez</p>
            <blockquote className="italic text-gray-300 border-l-4 border-purple-500 pl-4 mb-2">
              &quot;At Upvista, we don&apos;t just deliver projects—we create movements. Our mission is to inspire, to innovate, and to set new standards of digital greatness. Join us, and let&apos;s build a legacy together.&quot;
            </blockquote>
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/hamza-hafeez-00937436a/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow hover:scale-105 transition-transform">
                Connect with Hamza
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </a>
              <span className="font-[var(--font-herr-von)] text-2xl italic text-[#a78bfa] ml-2" style={{letterSpacing: '2px', fontWeight: 400, lineHeight: 1, textShadow: '0 2px 8px rgba(80,0,120,0.15)'}}>
                Hamza Hafeez
              </span>
            </div>
          </motion.div>
        </section>
        {/* SVG Wave Divider */}
        <svg className="w-full" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="url(#wave2)" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,32C960,21,1056,11,1152,10.7C1248,11,1344,21,1392,26.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" /><defs><linearGradient id="wave2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#a21caf" /><stop offset="100%" stopColor="#6366f1" /></linearGradient></defs></svg>

        {/* Timeline Section */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">The Upvista Journey</h2>
          <div className="relative border-l-2 border-purple-700 pl-8">
            {[{
              title: "The Vision",
              icon: <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z" /></svg>,
              desc: "Upvista was born from a desire to break boundaries and redefine what a digital agency can be—where creativity, technology, and community converge.",
            }, {
              title: "Building the Movement",
              icon: <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 15s1.5-2 4-2 4 2 4 2" /><circle cx="9" cy="10" r="1" /><circle cx="15" cy="10" r="1" /></svg>,
              desc: "From our first project to our growing community, every step has been about empowering others and creating a ripple of positive change in the digital world.",
            }, {
              title: "A Brand, A Mindset",
              icon: <svg className="w-8 h-8 text-pink-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87" /><path d="M9 20H4v-2a4 4 0 013-3.87" /><circle cx="12" cy="7" r="4" /></svg>,
              desc: "Today, Upvista is more than a company—it's a mindset. We are a symbol of trust, innovation, and limitless potential for clients and collaborators worldwide.",
            }].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 top-0 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-1" style={{ color: i === 0 ? '#c084fc' : i === 1 ? '#60a5fa' : '#f472b6' }}>{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      
        {/* Pillars Section */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Our Three Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.2)" }}
                className="bg-gray-900/50 p-6 rounded-lg text-center shadow-lg cursor-pointer transition-transform"
              >
                {pillar.icon}
                <h3 className="text-xl font-semibold mb-2" style={{ color: i === 0 ? '#c084fc' : i === 1 ? '#60a5fa' : '#f472b6' }}>{pillar.title}</h3>
                <p className="text-gray-300">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Testimonial Slider */}
        <section className="container mx-auto px-4 py-12 max-w-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">What Our Clients Say</h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/70 rounded-lg p-8 shadow-lg text-center"
              >
                <p className="text-xl italic text-gray-200 mb-4">&quot;{testimonials[testimonialIdx].quote}&quot;</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
       
        {/* Sticky/Floating CTA for Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
          <Link href="/pages/contactPage">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl shadow-2xl text-xl hover:scale-105 transition-transform">
              Let&apos;s Build Something Legendary
            </button>
          </Link>
        </motion.div>

        {/* Full-width CTA for Mobile */}
        <div className="block md:hidden px-4 pb-6">
          <Link href="/pages/contactPage">
            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg text-lg">
              Let&apos;s Build Something Legendary
            </button>
          </Link>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

