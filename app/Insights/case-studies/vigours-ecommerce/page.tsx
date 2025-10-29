'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function VigoursEcommerce() {
  const { t, currentLanguage } = useLanguage();
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {t('vigoursEcommerce.title')}
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigoursEcommerce.subtitle')}
            </p>
            <div className={`flex flex-wrap justify-center gap-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <span><strong>{t('vigoursEcommerce.duration')}:</strong> 4 {t('vigoursEcommerce.months')}</span>
              <span><strong>{t('vigoursEcommerce.methodology')}:</strong> {t('vigoursEcommerce.agile')}</span>
              <span><strong>{t('vigoursEcommerce.industry')}:</strong> {t('vigoursEcommerce.ecommerce')}</span>
            </div>
            <div className="mt-8">
              <Link 
                href="mailto:vigoursorganic@gmail.com" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('vigoursEcommerce.contactUs')}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
              {t('vigoursEcommerce.overview.title')}
            </h2>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigoursEcommerce.overview.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-green-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.overview.mission.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.overview.mission.description')}
                </p>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-emerald-50'}`}>
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

            <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
              <Image
                src="/assets/case-studies/vigours-ecommerce-hero.jpg"
                alt="Vigours Organic E-commerce Platform"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.challenge.title')}
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigoursEcommerce.challenge.description')}
            </p>

            <div className="space-y-6">
              <div className={`p-6 rounded-lg border-l-4 border-red-500 ${isDark ? 'bg-gray-800' : 'bg-red-50'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.challenge.problem1.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.challenge.problem1.description')}
                </p>
              </div>

              <div className={`p-6 rounded-lg border-l-4 border-orange-500 ${isDark ? 'bg-gray-800' : 'bg-orange-50'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.challenge.problem2.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.challenge.problem2.description')}
                </p>
              </div>

              <div className={`p-6 rounded-lg border-l-4 border-yellow-500 ${isDark ? 'bg-gray-800' : 'bg-yellow-50'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.challenge.problem3.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.challenge.problem3.description')}
                </p>
              </div>

              <div className={`p-6 rounded-lg border-l-4 border-purple-500 ${isDark ? 'bg-gray-800' : 'bg-purple-50'}`}>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.solution.title')}
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigoursEcommerce.solution.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-green-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.solution.frontend.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.solution.frontend.description')}
                </p>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.solution.backend.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.solution.backend.description')}
                </p>
              </div>
            </div>

            <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
              <Image
                src="/assets/case-studies/vigours-ecommerce-solution.jpg"
                alt="Vigours Organic E-commerce Solution"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.features.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
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

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
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

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
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

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.process.title')}
            </h2>

            <div className="space-y-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
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

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-green-50'}`}>
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

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-purple-50'}`}>
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

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-emerald-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigoursEcommerce.process.phase4.title')}
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigoursEcommerce.process.phase4.description')}
                </p>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigoursEcommerce.process.phase4.deliverable1')}</li>
                  <li>• {t('vigoursEcommerce.process.phase4.deliverable2')}</li>
                  <li>• {t('vigoursEcommerce.process.phase4.deliverable3')}</li>
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
              {t('vigoursEcommerce.results.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-green-50'}`}>
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

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
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

            <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
              <Image
                src="/assets/case-studies/vigours-ecommerce-results.jpg"
                alt="Vigours Organic E-commerce Results"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.technologies.title')}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
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

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
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

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigoursEcommerce.cta.title')}
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigoursEcommerce.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/Services/e-commerce-development" 
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                {t('vigoursEcommerce.cta.button1')}
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
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
