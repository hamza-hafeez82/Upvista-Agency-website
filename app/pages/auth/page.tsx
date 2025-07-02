"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import heroImg from "@/assets/pvista Digital.jpeg";
import { Vortex } from "@/components/ui/vortex";

const quotes = [
  "Join Upvista and shape the future of digital innovation.",
  "Start your journey with us, where ideas become reality.",
  "Let's create something extraordinary together at Upvista.",
  "Empowering your digital dreams, one step at a time.",
  "Be part of Pakistan's premier software agency!"
];

const AuthPage = () => {
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [quote, setQuote] = useState(quotes[0]); // Always use first quote for SSR

  // Change quote every 6 seconds, but only after mount
  React.useEffect(() => {
    // On mount, pick a random quote (not the first)
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    const interval = setInterval(() => setQuote(quotes[Math.floor(Math.random() * quotes.length)]), 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupSuccess(true); // Show modal immediately
    setLoading(true);
    setError("");
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: Math.random().toString(36).slice(-8) + Date.now(),
    });
    if (error) {
      setSignupSuccess(false); // Hide modal if error
      setError(error.message);
    } else if (data.user) {
      const { error: updateError } = await supabase.auth.updateUser({ data: { name: form.name, role: form.role } });
      if (updateError) {
        setSignupSuccess(false); // Hide modal if error
        setError(updateError.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Hero Image & Quote */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center overflow-hidden bg-black">
        <Image
          src={heroImg}
          alt="Upvista Digital Hero"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 w-full h-full object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-indigo-900/80 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-8 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-6">
            Register for Upvista
          </h2>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={quote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="text-lg md:text-2xl text-purple-100 font-medium max-w-xl mx-auto mb-8"
            >
              {quote}
            </motion.p>
          </AnimatePresence>
          <div className="hidden md:block mt-8">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-purple-200 text-sm font-semibold backdrop-blur border border-white/10">
              Upvista Digital - Pakistan&apos;s Premier Software Agency
            </span>
          </div>
        </div>
      </div>
      {/* Right: Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen relative overflow-hidden">
        <Vortex containerClassName="absolute inset-0 z-0" />
        <div className="relative z-10 w-full max-w-md bg-gradient-to-br from-[#232946]/90 via-[#393053]/80 to-[#18122B]/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-purple-400/40 ring-2 ring-fuchsia-700/20">
          <AnimatePresence mode="wait" initial={false}>
            {signupSuccess ? (
              <motion.div
                key="signup-success"
                className="space-y-6 flex flex-col items-center justify-center text-center relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                {/* Animated envelope */}
                <motion.div
                  initial={{ scale: 0.7, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="mb-2"
                >
                  <span className="text-6xl drop-shadow-lg">📨</span>
                </motion.div>
                {/* Gradient headline */}
                <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2 drop-shadow">
                  Registration Successful!
                </h3>
                {/* Subtext */}
                <p className="text-lg md:text-xl text-purple-100 font-medium max-w-md mx-auto">
                  We&apos;ve sent a verification email to <span className="font-bold text-pink-300">{form.email}</span>.<br />
                  Please check your inbox and click the link to get started.
                </p>
                <p className="text-sm text-purple-300 mt-2">
                  Didn&apos;t get the email? Check your spam folder or
                  <button className="underline hover:text-pink-400 ml-1" onClick={() => setSignupSuccess(false)}>try again</button>.
                </p>
                {/* Soft glowing background */}
                <div className="absolute -inset-4 z-[-1] rounded-3xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-2xl opacity-80 animate-pulse" />
              </motion.div>
            ) : (
              <motion.form
                key="register"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-purple-950/60 border border-purple-800 text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-purple-950/60 border border-purple-800 text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1">Role</label>
                  <input
                    type="text"
                    required
                    value={form.role}
                    onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-purple-950/60 border border-purple-800 text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Role (e.g. Founder, Designer)"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold hover:from-pink-500 hover:to-purple-600 transition-colors duration-200"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
                {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Registration Success Modal Overlay */}
      <AnimatePresence>
        {signupSuccess && (
          <motion.div
            key="modal-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring' }}
              className="relative bg-gradient-to-br from-[#232946]/90 via-[#393053]/80 to-[#18122B]/90 rounded-3xl shadow-2xl p-8 max-w-md w-full border border-purple-400/40 ring-2 ring-fuchsia-700/20 flex flex-col items-center text-center"
            >
              <button
                onClick={() => setSignupSuccess(false)}
                className="absolute top-4 right-4 text-purple-300 hover:text-pink-400 text-2xl font-bold focus:outline-none"
                aria-label="Close"
              >
                &times;
              </button>
              <motion.div
                initial={{ scale: 0.7, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="mb-2 mt-4"
              >
                <span className="text-6xl drop-shadow-lg">🎉</span>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2 drop-shadow">
                Registration Successful!
              </h3>
              <p className="text-lg md:text-xl text-purple-100 font-medium max-w-md mx-auto">
                Welcome to Upvista, <span className="font-bold text-pink-300">{form.name}</span>!<br />
                Your account has been created successfully.
              </p>
              <p className="text-sm text-purple-300 mt-2">
                You would be sent an email from our team soon.
              </p>
              <div className="absolute -inset-4 z-[-1] rounded-3xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-2xl opacity-80 animate-pulse" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthPage; 