'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { Calendar, Clock, TrendingUp } from 'lucide-react';

export default function NewsPage() {
  const { isDark } = useTheme();

  // Simplified news data
  const newsItems = [
    {
      id: 'ai-automation-revolution-2024',
      title: 'The AI Automation Revolution: Transforming Business Operations in 2024',
      summary: 'Discover how artificial intelligence is reshaping traditional business processes and creating unprecedented efficiency gains across industries.',
      category: 'Technology',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Technology Officer',
      authorImage: '/assets/team/sarah-chen.jpg',
      date: '2024-12-15',
      readTime: '8 min read'
    },
    {
      id: 'cloud-security-breakthrough',
      title: 'Breakthrough in Cloud Security: Zero-Trust Architecture Implementation',
      summary: 'Learn about our revolutionary zero-trust security framework that\'s setting new standards for enterprise cloud protection.',
      category: 'Security',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Cybersecurity',
      authorImage: '/assets/team/michael-rodriguez.jpg',
      date: '2024-12-10',
      readTime: '6 min read'
    },
    {
      id: 'sustainable-web-development',
      title: 'Sustainable Web Development: Building for the Future',
      summary: 'How green coding practices and eco-friendly development methodologies are becoming essential for modern web applications.',
      category: 'Sustainability',
      author: 'Dr. Priya Sharma',
      authorRole: 'Sustainability Director',
      authorImage: '/assets/team/priya-sharma.jpg',
      date: '2024-12-08',
      readTime: '7 min read'
    },
    {
      id: 'company-expansion-asia',
      title: 'Upvista Digital Expands Operations to Southeast Asia',
      summary: 'Strategic expansion into key Asian markets strengthens our global presence and enhances service delivery capabilities.',
      category: 'Company',
      author: 'Jennifer Liu',
      authorRole: 'VP of Global Operations',
      authorImage: '/assets/team/jennifer-liu.jpg',
      date: '2024-12-05',
      readTime: '5 min read'
    },
    {
      id: 'blockchain-enterprise-adoption',
      title: 'Blockchain Technology: Enterprise Adoption Trends and Predictions',
      summary: 'Exploring how blockchain is revolutionizing supply chain management, financial services, and digital identity verification.',
      category: 'Technology',
      author: 'Robert Kim',
      authorRole: 'Blockchain Solutions Architect',
      authorImage: '/assets/team/robert-kim.jpg',
      date: '2024-12-03',
      readTime: '9 min read'
    },
    {
      id: 'remote-work-productivity-study',
      title: 'The Future of Remote Work: Productivity and Collaboration Insights',
      summary: 'Comprehensive study reveals how remote work models are evolving and what it means for enterprise productivity.',
      category: 'Research',
      author: 'Dr. Amanda Foster',
      authorRole: 'Head of Research',
      authorImage: '/assets/team/amanda-foster.jpg',
      date: '2024-11-28',
      readTime: '12 min read'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology': return isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700';
      case 'Security': return isDark ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-700';
      case 'Sustainability': return isDark ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-100 text-emerald-700';
      case 'Company': return isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700';
      case 'Research': return isDark ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700';
      default: return isDark ? 'bg-gray-500/20 text-gray-300' : 'bg-gray-100 text-gray-700';
    }
  };

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
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm ${
              isDark
                ? 'bg-white/10 border border-white/20 text-white'
                : 'bg-white/80 border border-gray-200 text-gray-700 shadow-lg'
            }`}>
              <TrendingUp className="w-4 h-4 mr-2" />
              Industry Insights & Company Updates
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              News & Insights
            </h1>

            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Stay ahead of the curve with our expert analysis, industry trends, and company updates.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className={`group relative rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  : 'bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl'
              }`}>
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>

                  <h3 className={`text-xl font-semibold mb-3 leading-tight ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.summary}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={item.authorImage}
                        alt={item.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {item.author}
                      </p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.authorRole}
                      </p>
                    </div>
                  </div>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                          {item.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
