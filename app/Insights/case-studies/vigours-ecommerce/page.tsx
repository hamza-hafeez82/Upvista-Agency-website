'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function VigoursEcommerce() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
      }`}>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center rounded-2xl p-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 py-2 ${isDark
                ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
              }`}>
              {t('vigoursEcommerce.title')}
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigoursEcommerce.subtitle')}
            </p>
            <div className={`flex flex-wrap justify-center gap-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span><strong>{t('vigoursEcommerce.duration')}:</strong> 4 {t('vigoursEcommerce.months')}</span>
              <span><strong>{t('vigoursEcommerce.methodology')}:</strong> {t('vigoursEcommerce.agile')}</span>
              <span><strong>{t('vigoursEcommerce.industry')}:</strong> {t('vigoursEcommerce.ecommerce')}</span>
            </div>
            <div className="mt-6">
              <Link
                href="http://vigoursorganic.store/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDark ? 'text-blue-300 underline' : 'text-blue-700 underline'} font-medium`}
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto rounded-2xl p-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.overview.title')}
            </h2>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigoursEcommerce.overview.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.overview.mission.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.overview.mission.description')}
                </p>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.overview.values.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.overview.values.purity')}</li>
                  <li>• {t('vigoursEcommerce.overview.values.health')}</li>
                  <li>• {t('vigoursEcommerce.overview.values.sustainability')}</li>
                  <li>• {t('vigoursEcommerce.overview.values.community')}</li>
                  <li>• {t('vigoursEcommerce.overview.values.transparency')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto rounded-2xl p-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.challenge.title')}
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigoursEcommerce.challenge.description')}
            </p>

            <div className="space-y-6">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.challenge.problem1.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.challenge.problem1.description')}
                </p>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.challenge.problem2.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.challenge.problem2.description')}
                </p>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.challenge.problem3.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.challenge.problem3.description')}
                </p>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.challenge.problem4.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.challenge.problem4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto rounded-2xl p-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.solution.title')}
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigoursEcommerce.solution.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.solution.frontend.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.solution.frontend.description')}
                </p>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.solution.backend.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.solution.backend.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto rounded-2xl p-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.features.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.features.product.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.features.product.catalog')}</li>
                  <li>• {t('vigoursEcommerce.features.product.search')}</li>
                  <li>• {t('vigoursEcommerce.features.product.filtering')}</li>
                  <li>• {t('vigoursEcommerce.features.product.reviews')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.features.cart.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.features.cart.add')}</li>
                  <li>• {t('vigoursEcommerce.features.cart.update')}</li>
                  <li>• {t('vigoursEcommerce.features.cart.save')}</li>
                  <li>• {t('vigoursEcommerce.features.cart.wishlist')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.features.payment.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.features.payment.secure')}</li>
                  <li>• {t('vigoursEcommerce.features.payment.multiple')}</li>
                  <li>• {t('vigoursEcommerce.features.payment.subscription')}</li>
                  <li>• {t('vigoursEcommerce.features.payment.invoice')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.features.admin.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.features.admin.dashboard')}</li>
                  <li>• {t('vigoursEcommerce.features.admin.inventory')}</li>
                  <li>• {t('vigoursEcommerce.features.admin.orders')}</li>
                  <li>• {t('vigoursEcommerce.features.admin.analytics')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto rounded-2xl p-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.process.title')}
            </h2>

            <div className="space-y-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.process.phase1.title')}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.process.phase1.description')}
                </p>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.process.phase1.deliverable1')}</li>
                  <li>• {t('vigoursEcommerce.process.phase1.deliverable2')}</li>
                  <li>• {t('vigoursEcommerce.process.phase1.deliverable3')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.process.phase2.title')}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.process.phase2.description')}
                </p>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.process.phase2.deliverable1')}</li>
                  <li>• {t('vigoursEcommerce.process.phase2.deliverable2')}</li>
                  <li>• {t('vigoursEcommerce.process.phase2.deliverable3')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.process.phase3.title')}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.process.phase3.description')}
                </p>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.process.phase3.deliverable1')}</li>
                  <li>• {t('vigoursEcommerce.process.phase3.deliverable2')}</li>
                  <li>• {t('vigoursEcommerce.process.phase3.deliverable3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto rounded-2xl p-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.results.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.results.business.title')}
                </h3>
                <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.results.business.sales')}</li>
                  <li>• {t('vigoursEcommerce.results.business.customers')}</li>
                  <li>• {t('vigoursEcommerce.results.business.reach')}</li>
                  <li>• {t('vigoursEcommerce.results.business.efficiency')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.results.technical.title')}
                </h3>
                <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.results.technical.performance')}</li>
                  <li>• {t('vigoursEcommerce.results.technical.scalability')}</li>
                  <li>• {t('vigoursEcommerce.results.technical.security')}</li>
                  <li>• {t('vigoursEcommerce.results.technical.maintenance')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto rounded-2xl p-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.technologies.title')}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.tech.frontend.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>Next.js:</strong> {t('vigoursEcommerce.tech.frontend.nextjs')}</li>
                  <li>• <strong>React:</strong> {t('vigoursEcommerce.tech.frontend.react')}</li>
                  <li>• <strong>TypeScript:</strong> {t('vigoursEcommerce.tech.frontend.typescript')}</li>
                  <li>• <strong>Tailwind CSS:</strong> {t('vigoursEcommerce.tech.frontend.tailwind')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.tech.backend.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>Node.js:</strong> {t('vigoursEcommerce.tech.backend.nodejs')}</li>
                  <li>• <strong>Express.js:</strong> {t('vigoursEcommerce.tech.backend.express')}</li>
                  <li>• <strong>JWT:</strong> {t('vigoursEcommerce.tech.backend.jwt')}</li>
                  <li>• <strong>REST API:</strong> {t('vigoursEcommerce.tech.backend.api')}</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.tech.database.title')}
                </h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>MongoDB:</strong> {t('vigoursEcommerce.tech.database.mongodb')}</li>
                  <li>• <strong>Redis:</strong> {t('vigoursEcommerce.tech.database.redis')}</li>
                  <li>• <strong>Cloudinary:</strong> {t('vigoursEcommerce.tech.database.cloudinary')}</li>
                  <li>• <strong>Stripe:</strong> {t('vigoursEcommerce.tech.database.stripe')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center rounded-2xl p-8 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.cta.title')}
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigoursEcommerce.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/Services/e-commerce-development"
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${isDark
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  }`}
              >
                {t('vigoursEcommerce.cta.button1')}
              </Link>
              <Link
                href="/contact"
                className={`px-8 py-3 border rounded-xl font-semibold transition-all duration-300 ${isDark
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {t('vigoursEcommerce.cta.button2')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
