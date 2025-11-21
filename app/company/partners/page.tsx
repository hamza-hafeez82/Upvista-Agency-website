'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PartnersPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const featuredPartners = [
    {
      name: 'Dravion Technologies',
      summary: t('partners.featured.dravion.summary'),
      logo: '/assets/company/dravion-logo2.PNG',
      tagline: t('partners.featured.dravion.tagline'),
      focusAreas: [
        t('partners.featured.dravion.strength1'),
        t('partners.featured.dravion.strength2'),
        t('partners.featured.dravion.strength3'),
        t('partners.featured.dravion.strength4'),
        t('partners.featured.dravion.strength5'),
      ],
      value: t('partners.featured.dravion.value'),
      link: '/company/partners/dravion-technologies',
    },
  ];

  return (
    <>
      <Head>
        <title>Partnerships | Strategic Partners | Upvista Digital</title>
        <meta name="description" content="Discover Upvista Digital's strategic partnerships. Learn about our technology partners including Dravion Technologies and how we collaborate to deliver innovative digital solutions." />
        <meta name="keywords" content="Upvista Digital Partners, Strategic Partnerships, Technology Partners, Dravion Technologies, Business Partnerships, Digital Solutions Partners" />
        <meta property="og:title" content="Partnerships | Strategic Partners | Upvista Digital" />
        <meta property="og:description" content="Discover Upvista Digital's strategic partnerships and how we collaborate to deliver innovative digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/company/partners" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partnerships | Strategic Partners | Upvista Digital" />
        <meta name="twitter:description" content="Discover Upvista Digital's strategic partnerships." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/company/partners" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Partnerships - Upvista Digital',
          'description': 'Discover Upvista Digital\'s strategic partnerships and how we collaborate to deliver innovative digital solutions.',
          'url': 'https://www.upvistadigital.com/company/partners',
          'about': {
            '@type': 'Organization',
            'name': 'Upvista Digital',
            'description': 'Global digital innovation company with strategic technology partnerships.'
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
                'name': 'Partnerships',
                'item': 'https://www.upvistadigital.com/company/partners'
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
              isDark
                ? 'bg-white/10 border border-white/20 text-indigo-200'
                : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-blue-500/70 text-white shadow-lg'
            }`}>
              <span className={`w-2 h-2 rounded-full mr-3 ${
                isDark ? 'bg-blue-400' : 'bg-white'
              }`}></span>
              {t('partners.badge')}
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight ${
              isDark
                ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
            }`}>
              {t('partners.title')}
            </h1>
            <p className={`text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed px-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Partners */}
      <div className="pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-2 text-center">
              <span className={`text-xs sm:text-sm font-semibold tracking-widest uppercase ${
                isDark ? 'text-blue-300' : 'text-blue-700'
              }`}>
                {t('partners.featured.badge')}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('partners.featured.title')}
              </h2>
              <p className={`text-base sm:text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t('partners.featured.subtitle')}
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8">
              {featuredPartners.map((partner) => (
                <Link
                  key={partner.name}
                  href={partner.link}
                  className={`group rounded-3xl border transition-all duration-300 ${
                    isDark
                      ? 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30'
                      : 'border-gray-200/70 bg-white/80 hover:bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1'
                  }`}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className={`absolute inset-0 rounded-full blur-3xl opacity-70 ${
                              isDark
                                ? 'bg-gradient-to-br from-blue-500/50 via-indigo-500/40 to-violet-500/40'
                                : 'bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200'
                            }`}></div>
                            <div className={`relative h-[4.25rem] w-[4.25rem] sm:h-[5rem] sm:w-[5rem] rounded-full border-2 shadow-xl overflow-hidden ${
                              isDark
                                ? 'border-white/30 bg-gradient-to-br from-white/10 via-blue-900/30 to-white/5'
                                : 'border-blue-200 bg-white'
                            }`}>
                              <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                fill
                                sizes="(max-width: 640px) 64px, 80px"
                                className="object-cover rounded-full"
                                priority
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className={`text-xl sm:text-2xl font-bold ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {partner.name}
                            </h3>
                            <p className={`text-sm sm:text-base ${
                              isDark ? 'text-blue-200' : 'text-blue-700'
                            }`}>
                              {partner.tagline}
                            </p>
                          </div>
                        </div>
                        <p className={`text-base sm:text-lg leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {partner.summary}
                        </p>
                      </div>

                      <div className="grid gap-4">
                        <div>
                          <p className={`text-xs uppercase tracking-widest font-semibold mb-2 ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {t('partners.featured.strengthsLabel')}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {partner.focusAreas.map((area) => (
                              <span
                                key={area}
                                className={`text-xs sm:text-sm px-3 py-1 rounded-full ${
                                  isDark
                                    ? 'bg-white/10 text-white/90'
                                    : 'bg-blue-50 text-blue-800'
                                }`}
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className={`text-sm sm:text-base leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {partner.value}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span className={`${
                          isDark ? 'text-blue-300' : 'text-blue-700'
                        }`}>
                          {t('partners.featured.cta')}
                        </span>
                        <span className={`transform transition-transform group-hover:translate-x-1 ${
                          isDark ? 'text-blue-300' : 'text-blue-700'
                        }`}>
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`prose prose-lg max-w-none ${
            isDark ? 'prose-invert' : 'prose-gray'
          }`}>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.philosophy.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.philosophy.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.philosophy.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.ecosystem.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.ecosystem.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.ecosystem.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.value.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.value.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.value.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.opportunities.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.opportunities.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.opportunities.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.success.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.success.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.success.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.support.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.support.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.support.content2')}
            </p>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 mt-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('partners.contact.title')}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.contact.content1')}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('partners.contact.content2')}
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}
