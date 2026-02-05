'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function VigoursOrganicCRM() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('vigours.title')}
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('vigours.subtitle')}
            </p>
            <div className={`flex flex-wrap justify-center gap-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <span><strong>{t('vigours.duration')}:</strong> 1.5 {t('vigours.months')}</span>
              <span><strong>{t('vigours.methodology')}:</strong> {t('vigours.agile')}</span>
              <span><strong>{t('vigours.industry')}:</strong> {t('vigours.ecommerce')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigours.overview.title')}
                </h2>
                <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigours.overview.description')}
                </p>
                <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigours.overview.feature1')}</li>
                  <li>• {t('vigours.overview.feature2')}</li>
                  <li>• {t('vigours.overview.feature3')}</li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/assets/services/software/system.jpeg"
                  alt="CRM System Overview"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigours.challenge.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigours.challenge.problem1.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigours.challenge.problem1.description')}
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigours.challenge.problem2.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigours.challenge.problem2.description')}
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigours.challenge.problem3.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigours.challenge.problem3.description')}
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigours.challenge.problem4.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigours.challenge.problem4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigours.solution.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigours.solution.solution1.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigours.solution.solution1.description')}
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigours.solution.solution2.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigours.solution.solution2.description')}
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigours.solution.solution3.title')}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('vigours.solution.solution3.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigours.process.title')}
            </h2>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('vigours.agile.sprint1.title')}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('vigours.agile.sprint1.duration')}
                  </p>
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• {t('vigours.agile.sprint1.deliverable1')}</li>
                    <li>• {t('vigours.agile.sprint1.deliverable2')}</li>
                    <li>• {t('vigours.agile.sprint1.deliverable3')}</li>
                    <li>• {t('vigours.agile.sprint1.deliverable4')}</li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/assets/services/software/development.jpeg"
                    alt="Discovery & Planning Phase"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('vigours.agile.sprint2.title')}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('vigours.agile.sprint2.duration')}
                  </p>
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• {t('vigours.agile.sprint2.deliverable1')}</li>
                    <li>• {t('vigours.agile.sprint2.deliverable2')}</li>
                    <li>• {t('vigours.agile.sprint2.deliverable3')}</li>
                    <li>• {t('vigours.agile.sprint2.deliverable4')}</li>
                  </ul>
                </div>
                <div className="relative md:order-1">
                  <Image
                    src="/assets/services/software/system.jpeg"
                    alt="Core Development Phase"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('vigours.agile.sprint3.title')}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('vigours.agile.sprint3.duration')}
                  </p>
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• {t('vigours.agile.sprint3.deliverable1')}</li>
                    <li>• {t('vigours.agile.sprint3.deliverable2')}</li>
                    <li>• {t('vigours.agile.sprint3.deliverable3')}</li>
                    <li>• {t('vigours.agile.sprint3.deliverable4')}</li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/assets/services/software/api.jpeg"
                    alt="Sales & Pipeline Phase"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('vigours.agile.sprint4.title')}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('vigours.agile.sprint4.duration')}
                  </p>
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• {t('vigours.agile.sprint4.deliverable1')}</li>
                    <li>• {t('vigours.agile.sprint4.deliverable2')}</li>
                    <li>• {t('vigours.agile.sprint4.deliverable3')}</li>
                    <li>• {t('vigours.agile.sprint4.deliverable4')}</li>
                  </ul>
                </div>
                <div className="relative md:order-1">
                  <Image
                    src="/assets/services/software/check.jpeg"
                    alt="Marketing Automation Phase"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('vigours.agile.sprint5.title')}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('vigours.agile.sprint5.duration')}
                  </p>
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• {t('vigours.agile.sprint5.deliverable1')}</li>
                    <li>• {t('vigours.agile.sprint5.deliverable2')}</li>
                    <li>• {t('vigours.agile.sprint5.deliverable3')}</li>
                    <li>• {t('vigours.agile.sprint5.deliverable4')}</li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/assets/services/software/cloud.jpeg"
                    alt="Advanced Features Phase"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('vigours.agile.sprint6.title')}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t('vigours.agile.sprint6.duration')}
                  </p>
                  <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• {t('vigours.agile.sprint6.deliverable1')}</li>
                    <li>• {t('vigours.agile.sprint6.deliverable2')}</li>
                    <li>• {t('vigours.agile.sprint6.deliverable3')}</li>
                    <li>• {t('vigours.agile.sprint6.deliverable4')}</li>
                  </ul>
                </div>
                <div className="relative md:order-1">
                  <Image
                    src="/assets/services/software/devops.jpeg"
                    alt="Testing & Launch Phase"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigours.results.title')}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>250%</div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.benefits.salesIncrease')}</p>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>180%</div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.benefits.customerRetention')}</p>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>65%</div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.benefits.timeReduction')}</p>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>95%</div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.benefits.automation')}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigours.results.businessImpact.title')}
                </h3>
                <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigours.results.businessImpact.point1')}</li>
                  <li>• {t('vigours.results.businessImpact.point2')}</li>
                  <li>• {t('vigours.results.businessImpact.point3')}</li>
                  <li>• {t('vigours.results.businessImpact.point4')}</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('vigours.results.operationalEfficiency.title')}
                </h3>
                <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• {t('vigours.results.operationalEfficiency.point1')}</li>
                  <li>• {t('vigours.results.operationalEfficiency.point2')}</li>
                  <li>• {t('vigours.results.operationalEfficiency.point3')}</li>
                  <li>• {t('vigours.results.operationalEfficiency.point4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('vigours.technologies.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>React.js</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>Frontend</p>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.tech.react')}</p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Node.js</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>Backend</p>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.tech.nodejs')}</p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>PostgreSQL</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>Database</p>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.tech.postgresql')}</p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Redis</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>Caching</p>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.tech.redis')}</p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>AWS</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>Cloud</p>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.tech.aws')}</p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Docker</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>DevOps</p>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.tech.docker')}</p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Stripe</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>Payment</p>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.tech.stripe')}</p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>SendGrid</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>Email</p>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('vigours.tech.sendgrid')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('vigours.cta.title')}
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('vigours.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Services/software-development"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${isDark
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
            >
              {t('vigours.cta.button1')}
            </Link>
            <Link
              href="/contact"
              className={`px-8 py-3 border-2 rounded-lg font-semibold transition-colors ${isDark
                  ? 'border-white text-white hover:bg-white hover:text-gray-900'
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
            >
              {t('vigours.cta.button2')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
