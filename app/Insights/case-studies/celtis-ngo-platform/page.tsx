'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function CeltisNGOPlatform() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('celtis.title')}
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('celtis.subtitle')}
            </p>
            <div className={`flex flex-wrap justify-center gap-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <span><strong>{t('celtis.duration')}:</strong> 3 {t('celtis.months')}</span>
              <span><strong>{t('celtis.methodology')}:</strong> {t('celtis.agile')}</span>
              <span><strong>{t('celtis.industry')}:</strong> {t('celtis.ngo')}</span>
            </div>
            <div className="mt-8">
              <Link
                href="https://celtis-by-upvists.vercel.app/"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('celtis.visitSite')}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('celtis.overview.title')}
            </h2>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('celtis.overview.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.overview.mission.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.overview.mission.description')}
                </p>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.overview.vision.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.overview.vision.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('celtis.challenge.title')}
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('celtis.challenge.description')}
            </p>

            <div className="space-y-6">
              <div className={`p-6 rounded-lg border-l-4 border-red-500 ${isDark ? 'bg-gray-800' : 'bg-red-50'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.challenge.problem1.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.challenge.problem1.description')}
                </p>
              </div>

              <div className={`p-6 rounded-lg border-l-4 border-orange-500 ${isDark ? 'bg-gray-800' : 'bg-orange-50'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.challenge.problem2.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.challenge.problem2.description')}
                </p>
              </div>

              <div className={`p-6 rounded-lg border-l-4 border-yellow-500 ${isDark ? 'bg-gray-800' : 'bg-yellow-50'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.challenge.problem3.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.challenge.problem3.description')}
                </p>
              </div>

              <div className={`p-6 rounded-lg border-l-4 border-purple-500 ${isDark ? 'bg-gray-800' : 'bg-purple-50'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.challenge.problem4.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.challenge.problem4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('celtis.solution.title')}
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('celtis.solution.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-green-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.solution.modern.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.solution.modern.description')}
                </p>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.solution.cms.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.solution.cms.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('celtis.features.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.features.content.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('celtis.features.content.video')}</li>
                  <li>• {t('celtis.features.content.blog')}</li>
                  <li>• {t('celtis.features.content.magazine')}</li>
                  <li>• {t('celtis.features.content.events')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.features.donation.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('celtis.features.donation.secure')}</li>
                  <li>• {t('celtis.features.donation.tracking')}</li>
                  <li>• {t('celtis.features.donation.receipts')}</li>
                  <li>• {t('celtis.features.donation.recurring')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.features.community.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('celtis.features.community.forum')}</li>
                  <li>• {t('celtis.features.community.support')}</li>
                  <li>• {t('celtis.features.community.resources')}</li>
                  <li>• {t('celtis.features.community.networking')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.features.admin.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('celtis.features.admin.dashboard')}</li>
                  <li>• {t('celtis.features.admin.analytics')}</li>
                  <li>• {t('celtis.features.admin.users')}</li>
                  <li>• {t('celtis.features.admin.content')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('celtis.process.title')}
            </h2>

            <div className="space-y-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.process.phase1.title')}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.process.phase1.description')}
                </p>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('celtis.process.phase1.deliverable1')}</li>
                  <li>• {t('celtis.process.phase1.deliverable2')}</li>
                  <li>• {t('celtis.process.phase1.deliverable3')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-green-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.process.phase2.title')}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.process.phase2.description')}
                </p>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('celtis.process.phase2.deliverable1')}</li>
                  <li>• {t('celtis.process.phase2.deliverable2')}</li>
                  <li>• {t('celtis.process.phase2.deliverable3')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-purple-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.process.phase3.title')}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('celtis.process.phase3.description')}
                </p>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('celtis.process.phase3.deliverable1')}</li>
                  <li>• {t('celtis.process.phase3.deliverable2')}</li>
                  <li>• {t('celtis.process.phase3.deliverable3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('celtis.results.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-green-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.results.impact.title')}
                </h3>
                <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('celtis.results.impact.donations')}</li>
                  <li>• {t('celtis.results.impact.content')}</li>
                  <li>• {t('celtis.results.impact.engagement')}</li>
                  <li>• {t('celtis.results.impact.reach')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.results.efficiency.title')}
                </h3>
                <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('celtis.results.efficiency.management')}</li>
                  <li>• {t('celtis.results.efficiency.automation')}</li>
                  <li>• {t('celtis.results.efficiency.scalability')}</li>
                  <li>• {t('celtis.results.efficiency.maintenance')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('celtis.technologies.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.tech.frontend.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>Next.js:</strong> {t('celtis.tech.frontend.nextjs')}</li>
                  <li>• <strong>React:</strong> {t('celtis.tech.frontend.react')}</li>
                  <li>• <strong>Tailwind CSS:</strong> {t('celtis.tech.frontend.tailwind')}</li>
                  <li>• <strong>TypeScript:</strong> {t('celtis.tech.frontend.typescript')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('celtis.tech.backend.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>Strapi CMS:</strong> {t('celtis.tech.backend.strapi')}</li>
                  <li>• <strong>Node.js:</strong> {t('celtis.tech.backend.nodejs')}</li>
                  <li>• <strong>PostgreSQL:</strong> {t('celtis.tech.backend.postgresql')}</li>
                  <li>• <strong>Vercel:</strong> {t('celtis.tech.backend.vercel')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('celtis.cta.title')}
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('celtis.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/Services/web-development"
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                {t('celtis.cta.button1')}
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                {t('celtis.cta.button2')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
