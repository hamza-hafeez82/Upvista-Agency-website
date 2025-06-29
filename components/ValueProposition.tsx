"use client";

import { CheckCircle2 } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-purple-900/20 to-gray-900/50"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-0 -right-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Modern gradient badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm border border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
            Why Choose Us
          </div>

          {/* Main heading with gradient text */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-gray-200">
            We build{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              affordable, custom, and scalable
            </span>{" "}
            digital solutions for modern businesses — fast.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              "Transparent pricing",
              "Fixed deadlines",
              "Clean design",
              "Free consultation",
              "Long-term support",
              "Flexible tech stack",
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative flex items-center space-x-3 bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <CheckCircle2 className="relative w-6 h-6 text-green-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-12"></div>
        </div>
      </div>
    </section>
  );
}
