"use client";

import React from "react";
import Link from "next/link";
import { FaHeart, FaHandsHelping, FaGlobe, FaPeace } from "react-icons/fa";

const StandWithPalestinePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-white/10 to-green-600/20"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              🇵🇸 We Stand with Palestine
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Upvista believes in justice, human rights, and the power of unity. 
              We stand in solidarity with the Palestinian people and their right to freedom, dignity, and peace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold">
                ✊ Solidarity
              </div>
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold">
                🕊️ Peace
              </div>
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold">
                ⚖️ Justice
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="py-16 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Commitment
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Solidarity</h3>
                <p className="text-gray-400">
                  We stand united with the Palestinian people in their struggle for justice and freedom.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandsHelping className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
                <p className="text-gray-400">
                  Through our platform and community, we amplify Palestinian voices and stories.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGlobe className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Awareness</h3>
                <p className="text-gray-400">
                  We use our digital presence to raise awareness about Palestinian rights and struggles.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPeace className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Peace</h3>
                <p className="text-gray-400">
                  We advocate for a peaceful resolution that respects the rights of all people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-8 leading-relaxed">
              &apos;&apos; Injustice anywhere is a threat to justice everywhere. We cannot be silent in the face of oppression.&apos;&apos;
            </blockquote>
            <p className="text-lg text-gray-300 mb-8">
              As a technology company, we believe in the power of connection, communication, and community. 
              We stand with Palestine because we stand for human rights, dignity, and the belief that 
              every person deserves to live freely and peacefully.
            </p>
          </div>
        </div>
      </div>

      {/* Palestine Flag Colors Section */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-600 via-white to-green-600 h-8 rounded-lg mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🇵🇸 Free Palestine</h3>
              <p className="text-gray-300 text-lg">
                Until justice rolls down like waters and righteousness like a mighty stream.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="py-8 text-center">
        <Link 
          href="/"
          className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default StandWithPalestinePage;
