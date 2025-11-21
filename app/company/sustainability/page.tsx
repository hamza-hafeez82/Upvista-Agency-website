'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SustainabilityPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const sustainabilityCards = [
    {
      id: 'policy',
      title: t('sustainability.policy.title'),
      description: t('sustainability.policy.description'),
      href: '/company/sustainability/policy',
      image: '/assets/company/sustainability-policy.jpeg'
    },
    {
      id: 'values',
      title: t('sustainability.values.title'),
      description: t('sustainability.values.description'),
      href: '/company/sustainability/values',
      image: '/assets/company/values.jpeg'
    },
    {
      id: 'humanRights',
      title: t('sustainability.humanRights.title'),
      description: t('sustainability.humanRights.description'),
      href: '/company/sustainability/human-rights',
      image: '/assets/company/human-rights.jpeg'
    },
    {
      id: 'humanCapital',
      title: t('sustainability.humanCapital.title'),
      description: t('sustainability.humanCapital.description'),
      href: '/company/sustainability/human-capital',
      image: '/assets/company/capital.jpeg'
    },
    {
      id: 'environmental',
      title: t('sustainability.environmental.title'),
      description: t('sustainability.environmental.description'),
      href: '/company/sustainability/environmental',
      image: '/assets/company/environmental.jpeg'
    },
    {
      id: 'social',
      title: t('sustainability.social.title'),
      description: t('sustainability.social.description'),
      href: '/company/sustainability/social',
      image: '/assets/company/social.jpeg'
    },
    {
      id: 'governance',
      title: t('sustainability.governance.title'),
      description: t('sustainability.governance.description'),
      href: '/company/sustainability/governance',
      image: '/assets/company/governance.jpeg'
    },
    {
      id: 'research',
      title: t('sustainability.research.title'),
      description: t('sustainability.research.description'),
      href: '/company/sustainability/research',
      image: '/assets/company/research.jpeg'
    }
  ];

  return (
    <>
      <Head>
        <title>Sustainability | Corporate Responsibility | Upvista Digital</title>
        <meta name="description" content="Learn about Upvista Digital's commitment to sustainability, corporate responsibility, environmental stewardship, social impact, and ethical governance practices." />
        <meta name="keywords" content="Upvista Digital Sustainability, Corporate Responsibility, Environmental Stewardship, Social Impact, Ethical Governance, Sustainable Business Practices" />
        <meta property="og:title" content="Sustainability | Corporate Responsibility | Upvista Digital" />
        <meta property="og:description" content="Learn about Upvista Digital's commitment to sustainability, corporate responsibility, and ethical governance practices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/company/sustainability" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sustainability | Corporate Responsibility | Upvista Digital" />
        <meta name="twitter:description" content="Learn about Upvista Digital's commitment to sustainability and corporate responsibility." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/company/sustainability" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Sustainability - Upvista Digital',
          'description': 'Learn about Upvista Digital\'s commitment to sustainability, corporate responsibility, environmental stewardship, social impact, and ethical governance practices.',
          'url': 'https://www.upvistadigital.com/company/sustainability',
          'about': {
            '@type': 'Organization',
            'name': 'Upvista Digital',
            'description': 'Global digital innovation company committed to sustainability and corporate responsibility.'
          },
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.upvistadigital.com'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Company',
                'item': 'https://www.upvistadigital.com/company'
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Sustainability',
                'item': 'https://www.upvistadigital.com/company/sustainability'
              }
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
              isDark 
                ? 'bg-white/10 border border-white/20 text-indigo-200'
                : 'bg-gradient-to-r from-green-600/90 to-blue-600/90 border border-green-500/70 text-white shadow-lg'
            }`}>
              <span className={`w-2 h-2 rounded-full mr-3 ${
                isDark ? 'bg-green-400' : 'bg-white'
              }`}></span>
              {t('sustainability.badge')}
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight ${
              isDark 
                ? 'bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-green-800 to-blue-700 bg-clip-text text-transparent'
            }`}>
              {t('sustainability.title')}
            </h1>
            <p className={`text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed px-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('sustainability.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Sustainability Cards Grid */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {sustainabilityCards.map((card) => (
              <Link key={card.id} href={card.href} className="group h-full">
                <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col ${
                  isDark 
                    ? 'bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm' 
                    : 'bg-white/80 border border-gray-200/60 backdrop-blur-sm shadow-lg'
                }`}>
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {isDark && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className={`text-lg sm:text-xl font-bold mb-3 leading-tight ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed mb-4 flex-1 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {card.description}
                    </p>
                    
                    {/* Learn More Button */}
                    <div className={`inline-flex items-center text-sm font-medium transition-colors duration-200 mt-auto ${
                      isDark 
                        ? 'text-green-400 hover:text-green-300' 
                        : 'text-blue-600 hover:text-blue-500'
                    }`}>
                      {t('sustainability.learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}