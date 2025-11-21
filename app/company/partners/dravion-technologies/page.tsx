'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DravionTechnologiesPartnerPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const snapshot = [
    { label: t('dravion.snapshot.headquarters.label'), value: t('dravion.snapshot.headquarters.value') },
    { label: t('dravion.snapshot.engagement.label'), value: t('dravion.snapshot.engagement.value') },
    { label: t('dravion.snapshot.disciplines.label'), value: t('dravion.snapshot.disciplines.value') },
    { label: t('dravion.snapshot.tools.label'), value: t('dravion.snapshot.tools.value') },
  ];

  const expertise = [
    {
      title: t('dravion.expertise.3d.title'),
      detail: t('dravion.expertise.3d.detail'),
    },
    {
      title: t('dravion.expertise.game.title'),
      detail: t('dravion.expertise.game.detail'),
    },
    {
      title: t('dravion.expertise.ai.title'),
      detail: t('dravion.expertise.ai.detail'),
    },
    {
      title: t('dravion.expertise.web.title'),
      detail: t('dravion.expertise.web.detail'),
    },
    {
      title: t('dravion.expertise.engineering.title'),
      detail: t('dravion.expertise.engineering.detail'),
    },
  ];

  const partnershipModel = [
    {
      heading: t('dravion.partnership.model1.heading'),
      points: [
        t('dravion.partnership.model1.point1'),
        t('dravion.partnership.model1.point2'),
        t('dravion.partnership.model1.point3'),
      ],
    },
    {
      heading: t('dravion.partnership.model2.heading'),
      points: [
        t('dravion.partnership.model2.point1'),
        t('dravion.partnership.model2.point2'),
        t('dravion.partnership.model2.point3'),
      ],
    },
    {
      heading: t('dravion.partnership.model3.heading'),
      points: [
        t('dravion.partnership.model3.point1'),
        t('dravion.partnership.model3.point2'),
        t('dravion.partnership.model3.point3'),
      ],
    },
  ];

  const collaborationStreams = [
    { title: t('dravion.collaboration.stream1.title'), desc: t('dravion.collaboration.stream1.desc') },
    { title: t('dravion.collaboration.stream2.title'), desc: t('dravion.collaboration.stream2.desc') },
    { title: t('dravion.collaboration.stream3.title'), desc: t('dravion.collaboration.stream3.desc') },
    { title: t('dravion.collaboration.stream4.title'), desc: t('dravion.collaboration.stream4.desc') },
  ];

  return (
    <>
      <Head>
        <title>Dravion Technologies | Strategic Partner | Upvista Digital</title>
        <meta name="description" content="Learn about Dravion Technologies, Upvista Digital's strategic technology partner specializing in 3D modeling, game development, AI solutions, web development, and software engineering." />
        <meta name="keywords" content="Dravion Technologies, Technology Partner, Strategic Partnership, 3D Modeling, Game Development, AI Solutions, Software Engineering Partner" />
        <meta property="og:title" content="Dravion Technologies | Strategic Partner | Upvista Digital" />
        <meta property="og:description" content="Learn about Dravion Technologies, Upvista Digital's strategic technology partner specializing in 3D modeling, game development, and AI solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/company/partners/dravion-technologies" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dravion Technologies | Strategic Partner | Upvista Digital" />
        <meta name="twitter:description" content="Learn about Dravion Technologies, Upvista Digital's strategic technology partner." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/company/partners/dravion-technologies" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Dravion Technologies - Strategic Partner',
          'description': 'Learn about Dravion Technologies, Upvista Digital\'s strategic technology partner specializing in 3D modeling, game development, AI solutions, and software engineering.',
          'url': 'https://www.upvistadigital.com/company/partners/dravion-technologies',
          'about': {
            '@type': 'Organization',
            'name': 'Dravion Technologies',
            'description': 'Technology partner specializing in 3D modeling, game development, AI solutions, and software engineering.'
          },
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.upvistadigital.com' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Company', 'item': 'https://www.upvistadigital.com/company' },
              { '@type': 'ListItem', 'position': 3, 'name': 'Partnerships', 'item': 'https://www.upvistadigital.com/company/partners' },
              { '@type': 'ListItem', 'position': 4, 'name': 'Dravion Technologies', 'item': 'https://www.upvistadigital.com/company/partners/dravion-technologies' }
            ]
          }
        }) }} />
      </Head>
      <div
      className={`min-h-screen ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
      }`}
    >
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6 ${
                isDark
                  ? 'bg-white/10 border border-white/15 text-blue-100'
                  : 'bg-white border border-blue-200 text-blue-700 shadow'
              }`}
            >
              {t('dravion.hero.badge')}
            </div>
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-relaxed ${
                isDark
                  ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
              }`}
            >
              {t('dravion.hero.title')}
            </h1>
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('dravion.hero.description')}
            </p>
          </div>
        </section>

        {/* Snapshot */}
        <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto rounded-3xl border overflow-hidden shadow-lg backdrop-blur">
            <div
              className={`p-6 sm:p-8 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('dravion.snapshot.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {snapshot.map((item) => (
                  <div key={item.label}>
                    <p className={`text-xs uppercase tracking-widest font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {item.label}
                    </p>
                    <p className={`text-base sm:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('dravion.expertise.title')}</h2>
              <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('dravion.expertise.subtitle')}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-6 ${
                    isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
                  }`}
                >
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership model */}
        <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto rounded-3xl border">
            <div className={`p-6 sm:p-10 ${isDark ? 'border-white/10 bg-gradient-to-br from-white/5 to-transparent' : 'border-gray-200 bg-white'}`}>
              <div className="mb-8 text-center">
                <span className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>
                  {t('dravion.partnership.badge')}
                </span>
                <h2 className={`text-2xl sm:text-3xl font-bold mt-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('dravion.partnership.title')}
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {partnershipModel.map((model) => (
                  <div key={model.heading} className="flex flex-col gap-4">
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{model.heading}</h3>
                    <ul className="space-y-3 text-sm sm:text-base">
                      {model.points.map((point) => (
                        <li
                          key={point}
                          className={`leading-relaxed ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration streams */}
        <section className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('dravion.collaboration.title')}
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('dravion.collaboration.subtitle')}
            </p>
          </div>
          <div className="max-w-6xl mx-auto mt-10 grid gap-6 md:grid-cols-2">
            {collaborationStreams.map((stream) => (
              <div
                key={stream.title}
                className={`rounded-2xl border p-6 flex flex-col gap-2 ${
                  isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
                }`}
              >
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stream.title}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{stream.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-4xl mx-auto rounded-3xl border p-8 sm:p-10 text-center ${
              isDark ? 'border-white/15 bg-white/5' : 'border-blue-100 bg-gradient-to-br from-white via-blue-50 to-purple-50'
            }`}
          >
            <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>
              {t('dravion.cta.badge')}
            </p>
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('dravion.cta.title')}
            </h2>
            <p className={`text-base sm:text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('dravion.cta.description')}
            </p>
            <Link
              href="https://www.draviontechnologies.com"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold ${
                isDark ? 'bg-blue-500/80 text-white hover:bg-blue-400/90' : 'bg-blue-600 text-white hover:bg-blue-500'
              }`}
            >
              {t('dravion.cta.button')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}

