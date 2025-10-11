'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { ArrowLeft, Calendar, Users, Award, Star, Quote, Globe } from 'lucide-react';

export default function AonCorporateCaseStudyPage() {
  const { isDark } = useTheme();

  const caseStudy = {
    title: 'AON Corporate Website Development',
    client: 'AON Corporation',
    category: 'Web Development',
    subcategory: 'Corporate Website',
    complexity: 'Enterprise',
    duration: '3 months',
    team: '5 members',
    image: '/assets/case-studies/aon-corporate.jpg',
    logo: '/assets/clients/aon-logo.png',
    heroImage: '/assets/case-studies/aon-hero.jpg',
    
    overview: 'A comprehensive corporate website development using Webflow for AON Corporation, featuring advanced animations, multi-language support, and seamless integration with their existing systems.',
    
    challenge: 'AON Corporation, a leading global professional services firm, needed a complete digital transformation of their corporate website. The existing website was outdated, slow, and lacked the modern functionality required to engage their global audience. Key challenges included:\n\n• Outdated design that didn\'t reflect their premium brand positioning\n• Poor mobile experience affecting user engagement\n• Slow loading times impacting SEO and user experience\n• No multi-language support for their international operations\n• Limited integration capabilities with their CRM and analytics systems\n• Complex content management requirements across multiple departments',
    
    solution: 'We developed a sophisticated Webflow-based solution that addressed all of AON\'s requirements while providing a scalable foundation for future growth:\n\n**Design & User Experience:**\n• Created a modern, premium design that reflects AON\'s corporate identity\n• Implemented responsive design ensuring perfect experience across all devices\n• Developed intuitive navigation and user journey optimization\n\n**Technical Implementation:**\n• Built using Webflow with custom code integration for advanced functionality\n• Implemented advanced animations and micro-interactions for enhanced user engagement\n• Created a robust content management system for easy updates\n\n**Multi-language Support:**\n• Developed comprehensive multi-language architecture supporting 12 languages\n• Implemented automatic language detection based on user location\n• Created language-specific content management workflows\n\n**Performance Optimization:**\n• Achieved 300% improvement in page load speeds\n• Implemented advanced caching strategies and CDN optimization\n• Optimized images and assets for maximum performance\n\n**Integration & Analytics:**\n• Seamless integration with existing CRM systems\n• Advanced Google Analytics and tracking implementation\n• Custom reporting dashboard for marketing teams',
    
    results: [
      {
        metric: 'Page Load Speed',
        improvement: '300%',
        description: 'Faster loading times across all pages'
      },
      {
        metric: 'User Engagement',
        improvement: '40%',
        description: 'Increase in average session duration'
      },
      {
        metric: 'Mobile Traffic',
        improvement: '85%',
        description: 'Improvement in mobile user experience scores'
      },
      {
        metric: 'SEO Rankings',
        improvement: '60%',
        description: 'Better search engine visibility'
      }
    ],
    
    technologies: [
      { name: 'Webflow', category: 'CMS', description: 'Primary development platform' },
      { name: 'JavaScript', category: 'Frontend', description: 'Custom interactions and animations' },
      { name: 'CSS3', category: 'Styling', description: 'Advanced styling and responsive design' },
      { name: 'Figma', category: 'Design', description: 'UI/UX design and prototyping' },
      { name: 'Google Analytics', category: 'Analytics', description: 'Advanced tracking and reporting' },
      { name: 'Webflow CMS', category: 'Content', description: 'Content management system' },
      { name: 'Custom APIs', category: 'Integration', description: 'CRM and third-party integrations' }
    ],
    
    projectDetails: {
      startDate: 'January 2024',
      endDate: 'April 2024',
      budget: '$50,000+',
      industry: 'Professional Services',
      teamSize: '5 members',
      languages: '12 languages supported',
      pages: '50+ pages',
      features: 'Advanced animations, Multi-language, CRM integration'
    },
    
    testimonial: {
      text: "The new website perfectly represents our brand and has significantly improved our online presence. The team's attention to detail and technical expertise was outstanding. We've seen remarkable improvements in user engagement and our digital marketing performance has been transformed.",
      author: "Sarah Mitchell",
      position: "Digital Marketing Director",
      company: "AON Corporation",
      image: "/assets/testimonials/sarah-mitchell.jpg",
      rating: 5
    },
    
    gallery: [
      {
        image: '/assets/case-studies/aon-homepage.jpg',
        caption: 'Modern homepage with hero section and key messaging'
      },
      {
        image: '/assets/case-studies/aon-services.jpg',
        caption: 'Services page with interactive elements'
      },
      {
        image: '/assets/case-studies/aon-mobile.jpg',
        caption: 'Mobile-responsive design across all devices'
      },
      {
        image: '/assets/case-studies/aon-animations.jpg',
        caption: 'Advanced animations and micro-interactions'
      }
    ],
    
    process: [
      {
        phase: 'Discovery & Strategy',
        duration: '2 weeks',
        description: 'Comprehensive analysis of requirements, user research, and strategic planning',
        deliverables: ['Requirements document', 'User personas', 'Technical architecture']
      },
      {
        phase: 'Design & Prototyping',
        duration: '4 weeks',
        description: 'UI/UX design, wireframing, and interactive prototyping',
        deliverables: ['Wireframes', 'High-fidelity designs', 'Interactive prototype']
      },
      {
        phase: 'Development',
        duration: '6 weeks',
        description: 'Webflow development with custom code integration',
        deliverables: ['Fully functional website', 'CMS setup', 'Integration testing']
      },
      {
        phase: 'Testing & Optimization',
        duration: '2 weeks',
        description: 'Quality assurance, performance optimization, and user testing',
        deliverables: ['Bug fixes', 'Performance optimization', 'User testing report']
      },
      {
        phase: 'Launch & Support',
        duration: 'Ongoing',
        description: 'Deployment, training, and ongoing support',
        deliverables: ['Live website', 'Training materials', 'Support documentation']
      }
    ]
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Enterprise': return isDark ? 'bg-red-600/20 text-red-300 border-red-500/30' : 'bg-red-100 text-red-700 border-red-200';
      default: return isDark ? 'bg-gray-600/20 text-gray-300 border-gray-500/30' : 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development': return isDark ? 'bg-blue-600/20 text-blue-300 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-200';
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
          {/* Back Button */}
          <Link href="/insights/case-studies" className="inline-flex items-center text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className={isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              Back to Case Studies
            </span>
          </Link>

          {/* Hero Section */}
          <div className="mb-16">
            <div className="relative h-96 rounded-3xl overflow-hidden mb-8">
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(caseStudy.category)}`}>
                    {caseStudy.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getComplexityColor(caseStudy.complexity)}`}>
                    {caseStudy.complexity}
                  </span>
                </div>
                <h1 className={`text-4xl sm:text-5xl font-bold text-white mb-2`}>
                  {caseStudy.title}
                </h1>
                <p className={`text-xl text-gray-200`}>
                  {caseStudy.client}
                </p>
              </div>
            </div>

            {/* Project Overview */}
            <div className={`rounded-2xl p-8 mb-8 ${
              isDark
                ? 'bg-white/5 border border-white/10'
                : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Project Overview
              </h2>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {caseStudy.overview}
              </p>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className={`rounded-xl p-6 ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
              }`}>
                <Calendar className={`w-8 h-8 mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h3 className={`font-semibold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Duration
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {caseStudy.duration}
                </p>
              </div>

              <div className={`rounded-xl p-6 ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
              }`}>
                <Users className={`w-8 h-8 mb-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                <h3 className={`font-semibold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Team Size
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {caseStudy.team}
                </p>
              </div>

              <div className={`rounded-xl p-6 ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
              }`}>
                <Award className={`w-8 h-8 mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <h3 className={`font-semibold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Budget
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {caseStudy.projectDetails.budget}
                </p>
              </div>

              <div className={`rounded-xl p-6 ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
              }`}>
                <Globe className={`w-8 h-8 mb-3 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
                <h3 className={`font-semibold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Languages
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {caseStudy.projectDetails.languages}
                </p>
              </div>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className={`rounded-2xl p-8 ${
              isDark
                ? 'bg-white/5 border border-white/10'
                : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                The Challenge
              </h2>
              <div className={`text-sm leading-relaxed whitespace-pre-line ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {caseStudy.challenge}
              </div>
            </div>

            <div className={`rounded-2xl p-8 ${
              isDark
                ? 'bg-white/5 border border-white/10'
                : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Our Solution
              </h2>
              <div className={`text-sm leading-relaxed whitespace-pre-line ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {caseStudy.solution}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className={`rounded-2xl p-8 mb-16 ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
          }`}>
            <h2 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Key Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {result.improvement}
                  </div>
                  <h3 className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {result.metric}
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className={`rounded-2xl p-8 mb-16 ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
          }`}>
            <h2 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Technologies Used
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.technologies.map((tech, index) => (
                <div key={index} className={`p-4 rounded-xl ${
                  isDark ? 'bg-white/5' : 'bg-gray-50'
                }`}>
                  <h3 className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {tech.name}
                  </h3>
                  <p className={`text-xs mb-2 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {tech.category}
                  </p>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Gallery */}
          <div className={`rounded-2xl p-8 mb-16 ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
          }`}>
            <h2 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.gallery.map((item, index) => (
                <div key={index} className="relative">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-3">
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className={`rounded-2xl p-8 mb-16 ${
            isDark
              ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10'
              : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
          }`}>
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={caseStudy.testimonial.image}
                  alt={caseStudy.testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(caseStudy.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className={`w-8 h-8 mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <p className={`text-lg mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{caseStudy.testimonial.text}"
                </p>
                <div>
                  <h4 className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {caseStudy.testimonial.author}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {caseStudy.testimonial.position}
                  </p>
                  <p className={`text-sm ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {caseStudy.testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Process */}
          <div className={`rounded-2xl p-8 ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
          }`}>
            <h2 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Project Process
            </h2>
            <div className="space-y-6">
              {caseStudy.process.map((phase, index) => (
                <div key={index} className="flex gap-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className={`text-lg font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {phase.phase}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark ? 'bg-gray-600/20 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {phase.duration}
                      </span>
                    </div>
                    <p className={`text-sm mb-3 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {phase.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <span key={idx} className={`px-2 py-1 rounded text-xs ${
                          isDark
                            ? 'bg-blue-600/20 text-blue-300'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}








