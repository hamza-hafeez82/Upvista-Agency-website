import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";

interface AuthModalProps {
  open: boolean;
  mode: "signin" | "signup";
  onClose: () => void;
  onModeChange: (mode: "signin" | "signup") => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, mode, onClose, onModeChange }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-purple-500/30"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <button
              className="absolute top-4 right-4 text-purple-300 hover:text-white text-2xl font-bold"
              onClick={onClose}
              aria-label="Close auth modal"
            >
              &times;
            </button>
            <div className="flex mb-8 gap-2">
              <button
                className={`flex-1 py-2 rounded-lg font-semibold transition-all duration-200 text-lg ${mode === "signin" ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow" : "bg-gray-800 text-purple-200"}`}
                onClick={() => onModeChange("signin")}
              >
                Sign In
              </button>
              <button
                className={`flex-1 py-2 rounded-lg font-semibold transition-all duration-200 text-lg ${mode === "signup" ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow" : "bg-gray-800 text-purple-200"}`}
                onClick={() => onModeChange("signup")}
              >
                Sign Up
              </button>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {mode === "signup" && (
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all peer"
                    placeholder=" "
                    required
                  />
                  <label className="absolute left-4 top-3 text-purple-300 pointer-events-none transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300 bg-gray-900 px-1">
                    Name
                  </label>
                </div>
              )}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all peer"
                  placeholder=" "
                  required
                />
                <label className="absolute left-4 top-3 text-purple-300 pointer-events-none transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300 bg-gray-900 px-1">
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all peer"
                  placeholder=" "
                  required
                />
                <label className="absolute left-4 top-3 text-purple-300 pointer-events-none transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300 bg-gray-900 px-1">
                  Password
                </label>
              </div>
              {error && <div className="text-red-400 text-sm text-center">{error}</div>}
              <Button type="submit" className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300" disabled={loading}>
                {loading ? (mode === "signin" ? "Signing In..." : "Signing Up...") : (mode === "signin" ? "Sign In" : "Sign Up")}
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-purple-200">
              {mode === "signin" ? (
                <>
                  Don&apos;t have an account?{' '}
                  <button className="underline hover:text-purple-400" onClick={() => onModeChange("signup")}>Sign Up</button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button className="underline hover:text-purple-400" onClick={() => onModeChange("signin")}>Sign In</button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal; 