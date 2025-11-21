'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';

export default function MarketingServicesPage() {
  const { isDark } = useTheme();
  const [expandedProcess, setExpandedProcess] = useState<string | null>('digital-marketing');
  const [expandedProjectTypes, setExpandedProjectTypes] = useState<boolean>(true);
  const [expandedTechStack, setExpandedTechStack] = useState<boolean>(true);
  const [currentTechIndex, setCurrentTechIndex] = useState<number>(0);

  const toggleProcess = (processType: string) => {
    setExpandedProcess(expandedProcess === processType ? null : processType);
  };

  const toggleProjectTypes = () => {
    setExpandedProjectTypes(!expandedProjectTypes);
  };

  const toggleTechStack = () => {
    setExpandedTechStack(!expandedTechStack);
  };

  const caseStudies = [
    {
      id: 1,
      image: '/assets/services/software/97.jpeg',
      title: 'E-commerce Growth Campaign',
      description: 'Comprehensive digital marketing campaign that increased online sales by 300% and improved brand visibility across multiple channels.',
      tag: 'Digital Marketing',
      href: '/case-studies/ecommerce-growth-campaign'
    },
    {
      id: 2,
      image: '/assets/services/software/98.jpeg',
      title: 'SaaS Product Launch',
      description: 'Strategic product launch campaign that achieved 50,000 signups in the first month and established strong market presence.',
      tag: 'Product Launch',
      href: '/case-studies/saas-product-launch'
    },
    {
      id: 3,
      image: '/assets/services/software/99.jpeg',
      title: 'Healthcare Brand Awareness',
      description: 'Healthcare brand awareness campaign that improved patient engagement and increased appointment bookings by 250%.',
      tag: 'Brand Awareness',
      href: '/case-studies/healthcare-brand-awareness'
    }
  ];

  const techStackItems = [
    { name: 'Google Ads', image: '/assets/services/software/100.jpeg', logo: '/assets/logos/google-ads.svg', description: 'Search & Display Advertising' },
    { name: 'Facebook Ads', image: '/assets/services/software/101.jpeg', logo: '/assets/logos/facebook-ads.svg', description: 'Social Media Advertising' },
    { name: 'HubSpot', image: '/assets/services/software/102.jpeg', logo: '/assets/logos/hubspot.svg', description: 'Marketing Automation' },
    { name: 'Mailchimp', image: '/assets/services/software/103.jpeg', logo: '/assets/logos/mailchimp.svg', description: 'Email Marketing' },
    { name: 'Google Analytics', image: '/assets/services/software/104.jpeg', logo: '/assets/logos/google-analytics.svg', description: 'Web Analytics' },
    { name: 'Hootsuite', image: '/assets/services/software/105.jpeg', logo: '/assets/logos/hootsuite.svg', description: 'Social Media Management' },
    { name: 'Canva', image: '/assets/services/software/106.jpeg', logo: '/assets/logos/canva.svg', description: 'Graphic Design' },
    { name: 'Buffer', image: '/assets/services/software/107.jpeg', logo: '/assets/logos/buffer.svg', description: 'Content Scheduling' },
    { name: 'SEMrush', image: '/assets/services/software/108.jpeg', logo: '/assets/logos/semrush.svg', description: 'SEO & Competitor Analysis' },
    { name: 'Ahrefs', image: '/assets/services/software/109.jpeg', logo: '/assets/logos/ahrefs.svg', description: 'SEO Tools' },
    { name: 'LinkedIn Ads', image: '/assets/services/software/110.jpeg', logo: '/assets/logos/linkedin-ads.svg', description: 'B2B Advertising' },
    { name: 'TikTok Ads', image: '/assets/services/software/111.jpeg', logo: '/assets/logos/tiktok-ads.svg', description: 'Video Advertising' }
  ];

  // Infinite carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => 
        prevIndex === techStackItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [techStackItems.length]);

  const developmentProcesses = [
    {
      type: 'digital-marketing',
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive digital marketing campaigns that drive growth and maximize ROI',
      platforms: ['Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp'],
      services: [
        'Campaign Strategy & Planning',
        'Audience Research & Targeting',
        'Ad Creative Development',
        'Landing Page Optimization',
        'Performance Tracking & Analytics',
        'A/B Testing & Optimization'
      ],
      roadmap: [
        { 
          step: 1, 
          title: 'Market Research & Analysis', 
          description: 'Comprehensive market research to understand your audience, competitors, and market opportunities.',
          details: 'We conduct thorough market analysis, competitor research, and audience profiling to create data-driven marketing strategies.',
          image: '/assets/services/process/consultation.jpeg'
        },
        { 
          step: 2, 
          title: 'Strategy Development', 
          description: 'Creating comprehensive marketing strategies tailored to your business goals and target audience.',
          details: 'Our team develops multi-channel marketing strategies that align with your business objectives and maximize ROI.',
          image: '/assets/services/process/proposal.jpeg'
        },
        { 
          step: 3, 
          title: 'Campaign Creation', 
          description: 'Designing and developing high-converting marketing campaigns across multiple platforms.',
          details: 'We create compelling ad creatives, landing pages, and marketing materials that drive engagement and conversions.',
          image: '/assets/services/process/uiux.jpeg'
        },
        { 
          step: 4, 
          title: 'Launch & Optimization', 
          description: 'Launching campaigns and continuously optimizing for maximum performance and ROI.',
          details: 'We monitor campaign performance in real-time and make data-driven optimizations to improve results.',
          image: '/assets/services/process/launch.jpeg'
        },
        { 
          step: 5, 
          title: 'Analytics & Reporting', 
          description: 'Comprehensive tracking and reporting of campaign performance and business impact.',
          details: 'We provide detailed analytics and regular reports on campaign performance, ROI, and business growth metrics.',
          image: '/assets/services/process/qa.jpeg'
        },
        { 
          step: 6, 
          title: 'Scaling & Growth', 
          description: 'Scaling successful campaigns and expanding marketing efforts for sustained growth.',
          details: 'We identify successful strategies and scale them while exploring new opportunities for continued growth.',
          image: '/assets/services/process/maintenance.jpeg'
        }
      ]
    },
    {
      type: 'content-marketing',
      title: 'Content Marketing',
      description: 'Strategic content creation that engages audiences and drives business results',
      platforms: ['HubSpot', 'Canva', 'Hootsuite', 'Buffer'],
      services: [
        'Content Strategy',
        'Blog Writing',
        'Social Media Content',
        'Video Production',
        'Email Marketing',
        'Content Distribution'
      ],
      roadmap: [
        { step: 1, title: 'Content Strategy', description: 'Developing comprehensive content strategies that align with business goals.' },
        { step: 2, title: 'Content Creation', description: 'Creating high-quality, engaging content across multiple formats.' },
        { step: 3, title: 'Content Distribution', description: 'Distributing content across relevant channels and platforms.' },
        { step: 4, title: 'Performance Tracking', description: 'Monitoring content performance and engagement metrics.' },
        { step: 5, title: 'Optimization', description: 'Optimizing content based on performance data and feedback.' },
        { step: 6, title: 'Scaling', description: 'Scaling successful content strategies for continued growth.' }
      ]
    },
    {
      type: 'seo-optimization',
      title: 'SEO & Organic Growth',
      description: 'Search engine optimization strategies that improve visibility and drive organic traffic',
      platforms: ['SEMrush', 'Ahrefs', 'Google Analytics', 'Google Search Console'],
      services: [
        'SEO Audit & Analysis',
        'Keyword Research',
        'On-Page Optimization',
        'Technical SEO',
        'Link Building',
        'Local SEO'
      ],
      roadmap: [
        { step: 1, title: 'SEO Audit', description: 'Comprehensive analysis of current SEO performance and opportunities.' },
        { step: 2, title: 'Keyword Strategy', description: 'Research and strategy development for target keywords.' },
        { step: 3, title: 'On-Page Optimization', description: 'Optimizing website content and structure for search engines.' },
        { step: 4, title: 'Technical SEO', description: 'Improving website technical aspects for better search performance.' },
        { step: 5, title: 'Link Building', description: 'Building high-quality backlinks to improve domain authority.' },
        { step: 6, title: 'Monitoring & Growth', description: 'Continuous monitoring and optimization for sustained growth.' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Digital Marketing Services | SEO, Social Media & PPC | Upvista Digital</title>
        <meta name="description" content="Comprehensive digital marketing services by Upvista Digital. SEO, social media marketing, PPC advertising, content marketing, email marketing, and marketing automation to grow your business." />
        <meta name="keywords" content="Digital Marketing Services, SEO Services, Social Media Marketing, PPC Advertising, Content Marketing, Email Marketing, Marketing Automation, Google Ads, Facebook Ads" />
        <meta property="og:title" content="Digital Marketing Services | SEO, Social Media & PPC | Upvista Digital" />
        <meta property="og:description" content="Comprehensive digital marketing services including SEO, social media marketing, PPC advertising, and marketing automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/Services/marketing" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Services | Upvista Digital" />
        <meta name="twitter:description" content="Comprehensive digital marketing services including SEO, social media, and PPC." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/Services/marketing" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Digital Marketing Services',
          'description': 'Comprehensive digital marketing services including SEO, social media marketing, PPC advertising, content marketing, email marketing, and marketing automation.',
          'url': 'https://www.upvistadigital.com/Services/marketing',
          'provider': {
            '@type': 'Organization',
            'name': 'Upvista Digital',
            'url': 'https://www.upvistadigital.com'
          },
          'serviceType': 'Digital Marketing',
          'areaServed': 'Worldwide',
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.upvistadigital.com' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.upvistadigital.com/Services' },
              { '@type': 'ListItem', 'position': 3, 'name': 'Digital Marketing', 'item': 'https://www.upvistadigital.com/Services/marketing' }
            ]
          }
        }) }} />
      </Head>
      <div className={`min-h-screen ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
    }`}>
        <Header />

      {/* Hero Section */}
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
                isDark
                  ? 'bg-white/10 border border-white/20 text-indigo-200'
                  : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-blue-500/70 text-white shadow-lg'
              }`}>
                <span className={`w-2 h-2 rounded-full mr-3 ${
                  isDark ? 'bg-blue-400' : 'bg-white'
                }`}></span>
                Marketing Excellence
              </div>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight ${
                isDark
                  ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
              }`}>
                Marketing Services
              </h1>
              <p className={`text-lg sm:text-xl leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Accelerate your business growth with data-driven marketing strategies that reach the right audience, drive engagement, and deliver measurable results.
              </p>
            </div>
            
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden transform hover:rotate-2 transition-transform duration-500 shadow-2xl hover:shadow-3xl">
              <Image
                src="/assets/services/software/96.jpeg"
                alt="Marketing Services"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Types Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Types of Marketing Services
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We provide comprehensive marketing solutions tailored to your business goals and target audience
            </p>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${
            isDark
              ? 'bg-white/5 border-white/10'
              : 'bg-white/70 border-gray-200 shadow-lg'
          }`}>
            <button
              onClick={toggleProjectTypes}
              className={`w-full p-6 text-left transition-colors ${
                isDark
                  ? 'hover:bg-white/10'
                  : 'hover:bg-white/90'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Types of Marketing Services
                  </h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    We provide comprehensive marketing solutions tailored to your business goals and target audience
                  </p>
                </div>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    expandedProjectTypes ? 'rotate-180' : ''
                  } ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {expandedProjectTypes && (
              <div className={`px-6 pb-6 border-t ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}>
                <div className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Digital Marketing
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Comprehensive digital marketing campaigns including PPC, social media advertising, email marketing, and conversion optimization.
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Content Marketing
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Strategic content creation including blog writing, social media content, video production, and content distribution.
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        SEO & Organic Growth
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Search engine optimization strategies that improve visibility, drive organic traffic, and build long-term online presence.
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Brand Development
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Comprehensive brand development including brand strategy, identity design, messaging, and brand awareness campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Marketing Technology Stack
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Leading marketing tools and platforms for data-driven campaigns and measurable results
            </p>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${
            isDark
              ? 'bg-white/5 border-white/10'
              : 'bg-white/70 border-gray-200 shadow-lg'
          }`}>
            <button
              onClick={toggleTechStack}
              className={`w-full p-6 text-left transition-colors ${
                isDark
                  ? 'hover:bg-white/10'
                  : 'hover:bg-white/90'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Our Marketing Technology Stack
                  </h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Leading marketing tools and platforms for data-driven campaigns and measurable results
                  </p>
                </div>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    expandedTechStack ? 'rotate-180' : ''
                  } ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {expandedTechStack && (
              <div className={`px-6 pb-6 border-t ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}>
                <div className="pt-6">
                  {/* Tech Stack Carousel */}
                  <div className="mb-12">
                    <div className="relative overflow-hidden rounded-2xl">
                      <div className="flex transition-transform duration-500 ease-in-out"
                           style={{ transform: `translateX(-${currentTechIndex * 100}%)` }}>
                        {techStackItems.map((tech, index) => (
                          <div key={index} className="w-full flex-shrink-0">
                            <div className={`p-6 rounded-2xl ${
                              isDark
                                ? 'bg-white/5 border border-white/10'
                                : 'bg-white/70 border border-gray-200 shadow-lg'
                            }`}>
                              <div className="flex flex-col lg:flex-row items-center gap-8">
                                <div className="flex-shrink-0 w-full lg:w-80 h-48 rounded-xl overflow-hidden relative">
                                  <Image
                                    src={tech.image}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                
                                <div className="flex-1 text-center lg:text-left">
                                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md">
                                      <Image
                                        src={tech.logo}
                                        alt={`${tech.name} logo`}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain p-1 bg-white/90"
                                      />
                                    </div>
                                    <h3 className={`text-3xl font-bold ${
                                      isDark ? 'text-white' : 'text-gray-900'
                                    }`}>
                                      {tech.name}
                                    </h3>
                                  </div>
                                  <p className={`text-lg mb-6 ${
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                  }`}>
                                    {tech.description}
                                  </p>
                                  <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${
                                    isDark
                                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                                  }`}>
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse"></span>
                                    In Our Marketing Stack
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-center mt-6 space-x-2">
                        {techStackItems.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTechIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentTechIndex
                                ? isDark
                                  ? 'bg-blue-500 scale-125'
                                  : 'bg-blue-600 scale-125'
                                : isDark
                                  ? 'bg-white/30 hover:bg-white/50'
                                  : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Categories */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Advertising Platforms
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        We manage campaigns across Google Ads, Facebook Ads, LinkedIn Ads, and TikTok Ads to reach your target audience effectively.
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Our expertise includes audience targeting, ad creative optimization, and bid management for maximum ROI.
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Marketing Automation
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        We use HubSpot and Mailchimp for email marketing automation, lead nurturing, and customer relationship management.
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Our automation strategies include lead scoring, behavioral triggers, and personalized customer journeys.
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Analytics & SEO Tools
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        We leverage Google Analytics, SEMrush, and Ahrefs for comprehensive performance tracking and SEO optimization.
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Our data-driven approach includes competitor analysis, keyword research, and performance optimization.
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Content & Social Media
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        We use Hootsuite, Buffer, and Canva for social media management, content creation, and brand consistency.
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Our content strategy includes visual design, social media scheduling, and community engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Marketing Services Case Studies
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore our successful marketing campaigns and growth strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className={`group rounded-2xl overflow-hidden border ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : 'bg-white/70 border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDark
                        ? 'bg-blue-600/80 text-white'
                        : 'bg-blue-600 text-white'
                    }`}>
                      {study.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {study.title}
                  </h3>
                  <p className={`mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {study.description}
                  </p>
                  <a
                    href={study.href}
                    className={`inline-flex items-center text-sm font-medium ${
                      isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    } transition-colors`}
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Marketing Services Process
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our proven methodology ensures successful marketing campaigns with measurable results
            </p>
          </div>

          <div className="space-y-4">
            {developmentProcesses.map((process) => (
              <div
                key={process.type}
                className={`rounded-2xl border ${
                  isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/70 border-gray-200 shadow-lg'
                } overflow-hidden`}
              >
                <button
                  onClick={() => toggleProcess(process.type)}
                  className={`w-full p-6 text-left transition-colors ${
                    isDark
                      ? 'hover:bg-white/10'
                      : 'hover:bg-white/90'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {process.title}
                      </h3>
                      <p className={`${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {process.description}
                      </p>
                    </div>
                    <svg
                      className={`w-6 h-6 transition-transform ${
                        expandedProcess === process.type ? 'rotate-180' : ''
                      } ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {expandedProcess === process.type && (
                  <div className={`px-6 pb-6 border-t ${
                    isDark ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <div className="pt-6">
                      <div className="mb-8">
                        <h4 className={`text-lg font-semibold mb-6 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          Marketing Process Roadmap
                        </h4>
                        <div className="space-y-12">
                          {process.roadmap.map((step, index) => (
                            <div key={index} className={`flex flex-col ${
                              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } items-center gap-8`}>
                              <div className={`flex-1 ${
                                index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                              }`}>
                                <div className="flex items-start space-x-4">
                                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                                    isDark
                                      ? 'bg-blue-600 text-white'
                                      : 'bg-blue-600 text-white'
                                  }`}>
                                    {step.step}
                                  </div>
                                  <div className="flex-1">
                                    <h5 className={`text-xl font-semibold mb-3 ${
                                      isDark ? 'text-white' : 'text-gray-900'
                                    }`}>
                                      {step.title}
                                    </h5>
                                    <p className={`text-base leading-relaxed mb-4 ${
                                      isDark ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                      {step.description}
                                    </p>
                                    {(step as {details: string}).details && (
                                      <div className={`p-4 rounded-lg ${
                                        isDark
                                          ? 'bg-white/5 border border-white/10'
                                          : 'bg-gray-50 border border-gray-200'
                                      }`}>
                                        <p className={`text-sm ${
                                          isDark ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                          {(step as {details: string}).details}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex-shrink-0 w-full max-w-sm lg:w-80">
                                <div className={`relative h-48 rounded-xl overflow-hidden ${
                                  isDark
                                    ? 'bg-white/5 border border-white/10'
                                    : 'bg-gray-100 border border-gray-200'
                                }`}>
                                  <Image
                                    src={(step as {image: string}).image || '/assets/services/marketing-process.jpg'}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/20"></div>
                                  <div className="absolute bottom-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                      isDark
                                        ? 'bg-blue-600/80 text-white'
                                        : 'bg-blue-600 text-white'
                                    }`}>
                                      Step {step.step}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className={`font-semibold mb-3 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            Tools & Platforms
                          </h4>
                          <div className={`space-y-2 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {process.platforms.map((platform, index) => (
                              <div key={index} className="flex items-center">
                                <span className={`w-2 h-2 rounded-full mr-3 ${
                                  isDark ? 'bg-blue-400' : 'bg-blue-600'
                                }`}></span>
                                {platform}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className={`font-semibold mb-3 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            Services Included
                          </h4>
                          <div className={`space-y-2 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {process.services.map((service, index) => (
                              <div key={index} className="flex items-center">
                                <span className={`w-2 h-2 rounded-full mr-3 ${
                                  isDark ? 'bg-green-400' : 'bg-green-600'
                                }`}></span>
                                {service}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consultation Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center p-8 sm:p-12 rounded-3xl ${
            isDark
              ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10'
              : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
          }`}>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Free Marketing Consultation
            </h2>
            <p className={`text-lg sm:text-xl mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get expert marketing advice and growth strategy with our complimentary consultation and marketing audit.
            </p>
            
            <div className={`mb-8 p-6 rounded-2xl ${
              isDark
                ? 'bg-white/5 border border-white/10'
                : 'bg-white/70 border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Additional Services Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>Marketing Audit</strong>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Comprehensive analysis of your current marketing efforts</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>Growth Strategy</strong>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Custom growth strategy tailored to your business goals</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>Competitor Analysis</strong>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Detailed competitor research and market positioning</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
              }`}>
                Start Free Consultation
              </button>
              <a
                href="/assets/sample-operation-manual.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isDark
                    ? 'border border-white/20 text-white hover:bg-white/10'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-600 underline hover:text-blue-700 transition-colors">
                  Sample Operation Manual (PDF)
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Mission
            </h2>
            <p className={`text-lg sm:text-xl leading-relaxed mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We are committed to accelerating business growth through data-driven marketing strategies that connect brands with their ideal customers. Our mission is to deliver measurable results that drive sustainable business success.
            </p>
          </div>

          <div className="mb-12">
            <h3 className={`text-2xl font-semibold mb-8 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Industries We Serve
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: 'E-commerce', 
                  image: '/assets/services/software/112.jpeg',
                  description: 'Conversion-optimized marketing campaigns, product launches, and customer acquisition strategies for online retailers.'
                },
                { 
                  name: 'SaaS & Technology', 
                  image: '/assets/services/software/113.jpeg',
                  description: 'Product-led growth strategies, user acquisition campaigns, and retention marketing for software companies.'
                },
                { 
                  name: 'Healthcare', 
                  image: '/assets/services/software/114.jpeg',
                  description: 'Compliance-focused marketing, patient acquisition, and healthcare brand awareness campaigns.'
                },
                { 
                  name: 'Education', 
                  image: '/assets/services/software/115.jpeg',
                  description: 'Student recruitment, course promotion, and educational content marketing strategies.'
                },
                { 
                  name: 'Finance & FinTech', 
                  image: '/assets/services/software/116.jpeg',
                  description: 'Trust-building marketing campaigns, financial product promotion, and regulatory-compliant strategies.'
                },
                { 
                  name: 'Manufacturing', 
                  image: '/assets/services/software/117.jpeg',
                  description: 'B2B marketing strategies, industrial lead generation, and supply chain marketing solutions.'
                }
              ].map((industry, index) => (
                <div
                  key={index}
                  className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90'
                      : 'bg-gradient-to-t from-white/95 via-white/60 to-transparent opacity-80 group-hover:opacity-90'
                  }`}></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                      <h4 className={`text-xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {industry.name}
                      </h4>
                    </div>
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <h4 className={`text-2xl font-bold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {industry.name}
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {industry.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 pointer-events-none ${
                    isDark 
                      ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                      : 'bg-gradient-to-t from-white/70 via-transparent to-transparent'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>

          <div className={`text-center p-6 rounded-2xl ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
          }`}>
            <p className={`text-lg font-medium ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to accelerate your business growth with strategic marketing? Let's create campaigns that drive results and build lasting customer relationships.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}
