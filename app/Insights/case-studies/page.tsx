'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { ArrowRight, Clock, Users, Building } from 'lucide-react';

export default function CaseStudiesPage() {
  const { isDark } = useTheme();

  // Simplified case studies data
  const caseStudies = [
    {
      id: 'aon-corporate-website',
      title: 'AON Corporate Website',
      client: 'AON Corporation',
      category: 'Web Development',
      image: '/assets/case-studies/aon-corporate.jpg',
      description: 'Modern corporate website with advanced animations and multi-language support.',
      duration: '3 months',
      team: '5 members',
      technologies: ['Webflow', 'JavaScript', 'CSS3'],
      results: ['300% faster loading', '40% more engagement', '12 languages'],
      link: '/insights/case-studies/aon-corporate-website'
    },
    {
      id: 'celtis-ngo-website',
      title: 'Celtis NGO Platform',
      client: 'Celtis Foundation',
      category: 'Web Development',
      image: '/assets/case-studies/celtis-ngo.jpg',
      description: 'Accessible NGO website with donation integration and volunteer management.',
      duration: '2 months',
      team: '3 members',
      technologies: ['React', 'Node.js', 'Stripe'],
      results: ['150% more donations', '80% more volunteers', 'WCAG compliant'],
      link: '/insights/case-studies/celtis-ngo-website'
    },
    {
      id: 'vigours-ecommerce',
      title: 'Vigours E-commerce',
      client: 'Vigours Organic',
      category: 'E-commerce',
      image: '/assets/case-studies/vigours-ecommerce.jpg',
      description: 'Organic e-commerce platform with subscription management and inventory tracking.',
      duration: '4 months',
      team: '6 members',
      technologies: ['Next.js', 'Shopify', 'Stripe'],
      results: ['200% sales increase', '60% faster inventory', '99.9% uptime'],
      link: '/insights/case-studies/vigours-ecommerce'
    },
    {
      id: 'retail-system-supermarket',
      title: 'FreshMart Retail System',
      client: 'FreshMart Supermarket',
      category: 'Software',
      image: '/assets/case-studies/retail-system.jpg',
      description: 'Complete retail management system with POS integration and customer analytics.',
      duration: '6 months',
      team: '8 members',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      results: ['45% cost reduction', '30% efficiency gain', 'Real-time tracking'],
      link: '/insights/case-studies/retail-system-supermarket'
    },
    {
      id: 'recommendation-engine',
      title: 'TechShop AI Engine',
      client: 'TechShop Pro',
      category: 'AI/ML',
      image: '/assets/case-studies/recommendation-engine.jpg',
      description: 'AI-powered recommendation engine for personalized product suggestions.',
      duration: '5 months',
      team: '7 members',
      technologies: ['Python', 'TensorFlow', 'Kafka'],
      results: ['35% higher orders', '25% conversion boost', '40% engagement'],
      link: '/insights/case-studies/recommendation-engine'
    },
    {
      id: 'n8n-workflow-aon',
      title: 'AON Workflow Automation',
      client: 'AON Corporation',
      category: 'Automation',
      image: '/assets/case-studies/n8n-workflow.jpg',
      description: 'N8N-based workflow automation for streamlined business processes.',
      duration: '2 months',
      team: '4 members',
      technologies: ['N8N', 'APIs', 'JavaScript'],
      results: ['70% less manual work', '50% faster processing', '99.5% accuracy'],
      link: '/insights/case-studies/n8n-workflow-aon'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development': return isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700';
      case 'E-commerce': return isDark ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700';
      case 'Software': return isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700';
      case 'AI/ML': return isDark ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700';
      case 'Automation': return isDark ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-700';
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
              <Building className="w-4 h-4 mr-2" />
              Our Success Stories
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Case Studies
            </h1>

            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className={`group relative rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  : 'bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl'
              }`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(study.category)}`}>
                      {study.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {study.title}
                  </h3>

                  <p className={`text-sm font-medium mb-3 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {study.client}
                  </p>

                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {study.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {study.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {study.team}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className={`px-2 py-1 rounded text-xs ${
                        isDark
                          ? 'bg-white/10 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className={`px-2 py-1 rounded text-xs ${
                        isDark
                          ? 'bg-gray-600/20 text-gray-400'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        +{study.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Case Study Button */}
                  <Link href={study.link}>
                    <button className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isDark
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30'
                        : 'bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200'
                    }`}>
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
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