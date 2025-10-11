'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Filter, SortAsc, Calendar, Tag, Users, ExternalLink, ArrowRight, Clock, Award } from 'lucide-react';

export default function CaseStudiesPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Case studies data
  const caseStudies = [
    {
      id: 'aon-corporate-website',
      title: 'AON Corporate Website Development',
      client: 'AON Corporation',
      category: 'Web Development',
      subcategory: 'Corporate Website',
      complexity: 'Enterprise',
      duration: '3 months',
      team: '5 members',
      image: '/assets/case-studies/aon-corporate.jpg',
      logo: '/assets/clients/aon-logo.png',
      description: 'A comprehensive corporate website development using Webflow for AON Corporation, featuring advanced animations, multi-language support, and seamless integration with their existing systems.',
      challenge: 'AON needed a modern, scalable corporate website that could handle multiple languages, complex animations, and integrate with their existing CRM and analytics systems.',
      solution: 'Developed a sophisticated Webflow-based solution with custom code integration, advanced animations, and seamless third-party integrations.',
      results: [
        '300% increase in page load speed',
        '40% improvement in user engagement',
        'Multi-language support for 12 languages',
        'Seamless CRM integration'
      ],
      technologies: ['Webflow', 'JavaScript', 'CSS3', 'Figma', 'Google Analytics'],
      tags: ['Corporate', 'Webflow', 'Multi-language', 'Animation', 'Integration'],
      date: '2024-01-15',
      featured: true,
      link: '/insights/case-studies/aon-corporate-website',
      industry: 'Corporate',
      budget: '$50,000+',
      testimonial: {
        text: "The new website perfectly represents our brand and has significantly improved our online presence. The team's attention to detail and technical expertise was outstanding.",
        author: "Sarah Mitchell",
        position: "Digital Marketing Director, AON Corporation"
      }
    },
    {
      id: 'celtis-ngo-website',
      title: 'Celtis.co.jp NGO Website Development',
      client: 'Celtis Foundation',
      category: 'Web Development',
      subcategory: 'NGO Website',
      complexity: 'Medium',
      duration: '2 months',
      team: '3 members',
      image: '/assets/case-studies/celtis-ngo.jpg',
      logo: '/assets/clients/celtis-logo.png',
      description: 'A modern, accessible website for Celtis Foundation, an NGO focused on environmental conservation, featuring donation integration and volunteer management systems.',
      challenge: 'Celtis Foundation needed a website that could effectively communicate their mission, handle donations, and manage volunteer registrations while maintaining accessibility standards.',
      solution: 'Created a responsive, accessible website with integrated donation system, volunteer portal, and multilingual content management.',
      results: [
        '150% increase in donations',
        '80% improvement in volunteer signups',
        'WCAG 2.1 AA compliance',
        'Mobile-first responsive design'
      ],
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      tags: ['NGO', 'Accessibility', 'Donations', 'Volunteer Management', 'React'],
      date: '2023-11-20',
      featured: true,
      link: '/insights/case-studies/celtis-ngo-website',
      industry: 'Non-Profit',
      budget: '$25,000',
      testimonial: {
        text: "The website has transformed our online presence and made it much easier for supporters to engage with our cause. We've seen a significant increase in both donations and volunteer applications.",
        author: "Dr. Yuki Tanaka",
        position: "Executive Director, Celtis Foundation"
      }
    },
    {
      id: 'vigours-ecommerce',
      title: 'Vigours Organic E-commerce Platform',
      client: 'Vigours Organic',
      category: 'E-commerce',
      subcategory: 'Online Store',
      complexity: 'High',
      duration: '4 months',
      team: '6 members',
      image: '/assets/case-studies/vigours-ecommerce.jpg',
      logo: '/assets/clients/vigours-logo.png',
      description: 'A comprehensive e-commerce platform for Vigours Organic featuring advanced inventory management, subscription services, and seamless payment processing.',
      challenge: 'Vigours Organic needed a scalable e-commerce solution that could handle subscription orders, complex inventory management, and integrate with their existing ERP system.',
      solution: 'Built a custom e-commerce platform with advanced subscription management, real-time inventory tracking, and comprehensive analytics dashboard.',
      results: [
        '200% increase in online sales',
        '60% reduction in inventory management time',
        '99.9% uptime achieved',
        'Seamless ERP integration'
      ],
      technologies: ['Next.js', 'Shopify', 'Stripe', 'PostgreSQL', 'AWS'],
      tags: ['E-commerce', 'Subscription', 'Inventory Management', 'Organic Products', 'Shopify'],
      date: '2023-09-10',
      featured: true,
      link: '/insights/case-studies/vigours-ecommerce',
      industry: 'Retail/E-commerce',
      budget: '$75,000',
      testimonial: {
        text: "The new platform has revolutionized our online business. The subscription feature alone has increased our recurring revenue by 180%. The team delivered exactly what we needed.",
        author: "Michael Chen",
        position: "CEO, Vigours Organic"
      }
    },
    {
      id: 'retail-system-supermarket',
      title: 'Retail Management System for Supermarket',
      client: 'FreshMart Supermarket',
      category: 'Software Development',
      subcategory: 'Retail System',
      complexity: 'Enterprise',
      duration: '6 months',
      team: '8 members',
      image: '/assets/case-studies/retail-system.jpg',
      logo: '/assets/clients/freshmart-logo.png',
      description: 'A comprehensive retail management system for FreshMart Supermarket featuring POS integration, inventory management, and customer analytics.',
      challenge: 'FreshMart needed a complete digital transformation of their retail operations, including POS systems, inventory management, and customer relationship management.',
      solution: 'Developed a full-stack retail management system with real-time inventory tracking, advanced analytics, and seamless POS integration.',
      results: [
        '45% reduction in inventory costs',
        '30% increase in operational efficiency',
        'Real-time inventory tracking',
        'Advanced customer analytics'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      tags: ['Retail', 'POS System', 'Inventory Management', 'Analytics', 'Enterprise'],
      date: '2023-07-15',
      featured: false,
      link: '/insights/case-studies/retail-system-supermarket',
      industry: 'Retail',
      budget: '$120,000',
      testimonial: {
        text: "The new system has completely transformed our operations. We can now track inventory in real-time and make data-driven decisions that have significantly improved our bottom line.",
        author: "Jennifer Rodriguez",
        position: "Operations Manager, FreshMart Supermarket"
      }
    },
    {
      id: 'recommendation-engine',
      title: 'AI Recommendation Engine for E-commerce',
      client: 'TechShop Pro',
      category: 'AI & Machine Learning',
      subcategory: 'Recommendation System',
      complexity: 'High',
      duration: '5 months',
      team: '7 members',
      image: '/assets/case-studies/recommendation-engine.jpg',
      logo: '/assets/clients/techshop-logo.png',
      description: 'An advanced AI-powered recommendation engine for TechShop Pro that personalizes product suggestions based on user behavior and preferences.',
      challenge: 'TechShop Pro wanted to implement AI-driven product recommendations to increase sales and improve customer experience on their e-commerce platform.',
      solution: 'Developed a machine learning recommendation engine using collaborative filtering and content-based algorithms with real-time personalization.',
      results: [
        '35% increase in average order value',
        '25% improvement in conversion rate',
        '40% increase in customer engagement',
        'Real-time personalization'
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'PostgreSQL', 'Docker'],
      tags: ['AI/ML', 'Recommendation Engine', 'Personalization', 'E-commerce', 'Machine Learning'],
      date: '2023-05-20',
      featured: false,
      link: '/insights/case-studies/recommendation-engine',
      industry: 'Technology/E-commerce',
      budget: '$90,000',
      testimonial: {
        text: "The recommendation engine has been a game-changer for our business. Our customers love the personalized experience, and we've seen a significant increase in sales and customer satisfaction.",
        author: "David Park",
        position: "CTO, TechShop Pro"
      }
    },
    {
      id: 'n8n-workflow-aon',
      title: 'N8N Workflow Automation for AON Corporation',
      client: 'AON Corporation',
      category: 'Automation',
      subcategory: 'Workflow Automation',
      complexity: 'Medium',
      duration: '2 months',
      team: '4 members',
      image: '/assets/case-studies/n8n-workflow.jpg',
      logo: '/assets/clients/aon-logo.png',
      description: 'Comprehensive workflow automation solution using N8N for AON Corporation to streamline business processes and improve operational efficiency.',
      challenge: 'AON Corporation needed to automate various business processes including lead management, data synchronization, and report generation to reduce manual work and improve accuracy.',
      solution: 'Implemented N8N-based workflow automation connecting various systems including CRM, email, and analytics platforms with custom triggers and actions.',
      results: [
        '70% reduction in manual data entry',
        '50% faster lead processing',
        '99.5% automation accuracy',
        '24/7 automated operations'
      ],
      technologies: ['N8N', 'API Integration', 'Webhooks', 'JavaScript', 'REST APIs'],
      tags: ['Automation', 'N8N', 'Workflow', 'Integration', 'Business Process'],
      date: '2023-03-10',
      featured: false,
      link: '/insights/case-studies/n8n-workflow-aon',
      industry: 'Corporate',
      budget: '$35,000',
      testimonial: {
        text: "The automation workflows have revolutionized our operations. We've eliminated countless hours of manual work and improved the accuracy of our processes significantly.",
        author: "Robert Johnson",
        position: "Operations Director, AON Corporation"
      }
    }
  ];

  // Categories for filtering
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'Software Development', label: 'Software Development' },
    { value: 'AI & Machine Learning', label: 'AI & Machine Learning' },
    { value: 'Automation', label: 'Automation' }
  ];

  const complexities = [
    { value: 'all', label: 'All Complexity' },
    { value: 'Simple', label: 'Simple' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
    { value: 'Enterprise', label: 'Enterprise' }
  ];

  const sortOptions = [
    { value: 'date', label: 'Date (Newest First)' },
    { value: 'date-old', label: 'Date (Oldest First)' },
    { value: 'title', label: 'Title (A-Z)' },
    { value: 'complexity', label: 'Complexity' },
    { value: 'budget', label: 'Budget (High to Low)' }
  ];

  // Filter and sort case studies
  const filteredCaseStudies = useMemo(() => {
    let filtered = caseStudies.filter(study => {
      const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || study.category === selectedCategory;
      const matchesComplexity = selectedComplexity === 'all' || study.complexity === selectedComplexity;
      
      return matchesSearch && matchesCategory && matchesComplexity;
    });

    // Sort filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'date-old':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'complexity':
          const complexityOrder = { 'Simple': 1, 'Medium': 2, 'High': 3, 'Enterprise': 4 } as const;
          return complexityOrder[b.complexity as keyof typeof complexityOrder] - complexityOrder[a.complexity as keyof typeof complexityOrder];
        case 'budget':
          const budgetOrder = { '$25,000': 1, '$35,000': 2, '$50,000+': 3, '$75,000': 4, '$90,000': 5, '$120,000': 6 } as const;
          return budgetOrder[b.budget as keyof typeof budgetOrder] - budgetOrder[a.budget as keyof typeof budgetOrder];
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedComplexity, sortBy]);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple': return isDark ? 'bg-green-600/20 text-green-300 border-green-500/30' : 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return isDark ? 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30' : 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'High': return isDark ? 'bg-orange-600/20 text-orange-300 border-orange-500/30' : 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Enterprise': return isDark ? 'bg-red-600/20 text-red-300 border-red-500/30' : 'bg-red-100 text-red-700 border-red-200';
      default: return isDark ? 'bg-gray-600/20 text-gray-300 border-gray-500/30' : 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development': return isDark ? 'bg-blue-600/20 text-blue-300 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-200';
      case 'E-commerce': return isDark ? 'bg-purple-600/20 text-purple-300 border-purple-500/30' : 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Software Development': return isDark ? 'bg-green-600/20 text-green-300 border-green-500/30' : 'bg-green-100 text-green-700 border-green-200';
      case 'AI & Machine Learning': return isDark ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500/30' : 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'Automation': return isDark ? 'bg-cyan-600/20 text-cyan-300 border-cyan-500/30' : 'bg-cyan-100 text-cyan-700 border-cyan-200';
      default: return isDark ? 'bg-gray-600/20 text-gray-300 border-gray-500/30' : 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className={`min-h-screen ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
    }`}>
      <Header />

      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
              isDark
                ? 'bg-white/10 border border-white/20 text-indigo-200'
                : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-blue-500/70 text-white shadow-lg'
            }`}>
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${
              isDark
                ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
            }`}>
              Case Studies
            </h1>
            
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Explore our portfolio of successful projects and discover how we've helped businesses achieve their digital transformation goals.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className={`rounded-2xl p-6 mb-12 ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors ${
                    isDark
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  }`}
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Tag className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors appearance-none ${
                    isDark
                      ? 'bg-white/10 border-white/20 text-white focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  }`}
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Complexity Filter */}
              <div className="relative">
                <Filter className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <select
                  value={selectedComplexity}
                  onChange={(e) => setSelectedComplexity(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors appearance-none ${
                    isDark
                      ? 'bg-white/10 border-white/20 text-white focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  }`}
                >
                  {complexities.map((complexity) => (
                    <option key={complexity.value} value={complexity.value}>
                      {complexity.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <SortAsc className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors appearance-none ${
                    isDark
                      ? 'bg-white/10 border-white/20 text-white focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  }`}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Showing {filteredCaseStudies.length} case studies
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  : 'bg-white/70 border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
              }`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {study.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Client Logo */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/90 p-1">
                      <Image
                        src={study.logo}
                        alt={`${study.client} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Category and Complexity Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(study.category)}`}>
                      {study.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getComplexityColor(study.complexity)}`}>
                      {study.complexity}
                    </span>
                  </div>

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

                  {/* Read More Button */}
                  <Link href={study.link}>
                    <button className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isDark
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30'
                        : 'bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200'
                    }`}>
                      Read Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
                isDark ? 'bg-white/10' : 'bg-gray-100'
              }`}>
                <Search className={`w-12 h-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                No case studies found
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Try adjusting your search criteria or filters
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}