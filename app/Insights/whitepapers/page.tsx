'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { FileText, Download, ExternalLink, BookOpen, Lightbulb } from 'lucide-react';

export default function WhitepapersPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-blue-500' : 'bg-blue-300'
        }`} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-purple-500' : 'bg-purple-300'
        }`} />
      </div>

      <Header />

      <div className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm ${
              isDark
                ? 'bg-white/10 border border-white/20 text-white'
                : 'bg-white/80 border border-gray-200 text-gray-700 shadow-lg'
            }`}>
              <FileText className="w-4 h-4 mr-2" />
              In-Depth Research & Strategic Insights
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Whitepapers & Research
            </h1>

            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive research papers and strategic guides on emerging technologies and business transformation.
            </p>
          </div>

          {/* Project Cortex Whitepaper */}
          <div className={`relative rounded-2xl overflow-hidden border backdrop-blur-sm ${
            isDark
              ? 'bg-white/5 border-white/10'
              : 'bg-white/80 border-gray-200 shadow-xl'
          }`}>
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                  isDark
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                }`}>
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Featured Research
                </div>

                <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Project Cortex: Revolutionizing Enterprise AI Integration
                </h2>

                <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  A comprehensive framework for implementing enterprise-grade AI solutions that transform business operations,
                  enhance decision-making, and drive sustainable competitive advantage in the digital age.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className={`text-center p-6 rounded-xl ${
                  isDark ? 'bg-white/5' : 'bg-gray-50'
                }`}>
                  <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                  }`}>
                    <BookOpen className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    45-Page Comprehensive Guide
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    In-depth analysis with practical implementation strategies
                  </p>
                </div>

                <div className={`text-center p-6 rounded-xl ${
                  isDark ? 'bg-white/5' : 'bg-gray-50'
                }`}>
                  <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    isDark ? 'bg-green-600/20' : 'bg-green-100'
                  }`}>
                    <Download className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Free Download
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Immediate access to strategic insights and frameworks
                  </p>
                </div>

                <div className={`text-center p-6 rounded-xl ${
                  isDark ? 'bg-white/5' : 'bg-gray-50'
                }`}>
                  <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    isDark ? 'bg-purple-600/20' : 'bg-purple-100'
                  }`}>
                    <ExternalLink className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Interactive Preview
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Browse key sections before downloading
                  </p>
                </div>
              </div>

              {/* Abstract */}
              <div className={`p-6 rounded-xl mb-8 ${
                isDark ? 'bg-blue-600/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Abstract
                </h3>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Project Cortex represents a paradigm shift in enterprise AI integration, providing a comprehensive framework
                  for organizations to harness artificial intelligence for operational excellence, strategic decision-making,
                  and competitive advantage. This whitepaper explores the theoretical foundations, practical implementation
                  strategies, and real-world case studies that demonstrate the transformative power of enterprise AI solutions.
                </p>
              </div>

              {/* Table of Contents */}
              <div className={`p-6 rounded-xl mb-8 ${
                isDark ? 'bg-gray-600/10' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Table of Contents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        1
                      </span>
                      <span>Executive Summary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        2
                      </span>
                      <span>The AI Imperative in Enterprise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        3
                      </span>
                      <span>Cortex Framework Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        4
                      </span>
                      <span>Implementation Strategies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        5
                      </span>
                      <span>Change Management & Culture</span>
                    </div>
                  </div>
                  <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        6
                      </span>
                      <span>Measuring Success & ROI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        7
                      </span>
                      <span>Case Studies & Real-World Examples</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        8
                      </span>
                      <span>Future Trends & Predictions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        9
                      </span>
                      <span>Strategic Recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        10
                      </span>
                      <span>Conclusion & Next Steps</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Section */}
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                    isDark
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    <ExternalLink className="w-5 h-5" />
                    Preview Document
                  </button>

                  <button className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                    isDark
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}>
                    <Download className="w-5 h-5" />
                    Download PDF (2.3 MB)
                  </button>
                </div>

                <p className={`text-sm mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Published December 2024 • 45 pages • Free download
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
