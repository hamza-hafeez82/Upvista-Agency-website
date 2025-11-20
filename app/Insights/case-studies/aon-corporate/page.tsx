'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';

export default function AonCorporateCaseStudySimple() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
    }`}>
      <Header />

      <main className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className={`mb-12 rounded-2xl p-8 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDark
                  ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
              }`}>
                AON Corporate Website Case Study
              </h1>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                AON is a Japanese agency specializing in Webflow website development, SEO optimization, and AI automation using n8n and Zapier. They required a corporate website that reflected a reliable, precise, and scalable brand presence. From the client perspective, the website was to be implemented in Webflow for speed, maintainability, and CMS-driven content operations.
              </p>
              <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Live site: <a href="https://www.a-o-n.net/" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-blue-300 underline' : 'text-blue-700 underline'}`}>a-o-n.net</a>
              </p>
            </header>

            <section className={`mb-8 rounded-2xl p-8 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Objectives</h2>
              <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc pl-6 space-y-2`}>
                <li>Deliver a corporate website with clear structure, authoritative tone, and frictionless navigation.</li>
                <li>Implement Webflow CMS for non-technical content management.</li>
                <li>Establish SEO fundamentals: information architecture, technical hygiene, and performance.</li>
                <li>Integrate marketing and operations automation via n8n and Zapier.</li>
                <li>Provide a maintainable system with straightforward governance and release cadence.</li>
              </ul>
            </section>

            <section className={`mb-8 rounded-2xl p-8 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Approach and Platform</h2>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                The site was delivered in Webflow using a component-driven methodology. We defined a reusable design system (typography, spacing, grids, and modular sections), then instantiated these components across pages. Webflow CMS collections were used for case studies, blog posts, services, and team profiles. Where required, custom code blocks extended Webflow interactions for controlled behavior while preserving editorial flexibility.
              </p>
            </section>

            <section className={`mb-8 rounded-2xl p-8 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Team and Collaboration</h2>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
                The internal delivery team operated as a compact cross-functional unit:
              </p>
              <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc pl-6 space-y-2`}>
                <li>Engagement Lead: scope, timeline, governance, and stakeholder alignment.</li>
                <li>UX Designer: information architecture, wireframes, content hierarchy.</li>
                <li>UI Designer: design system, component library, responsive specifications.</li>
                <li>Webflow Developer: template engineering, CMS modeling, interactions.</li>
                <li>Automation Engineer: n8n and Zapier workflows, lead routing, notifications.</li>
                <li>SEO Specialist: technical SEO, schema, content formatting, search console setup.</li>
                <li>QA Engineer: accessibility, responsiveness, and regression testing.</li>
              </ul>
            </section>

            <section className={`mb-8 rounded-2xl p-8 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Process and Sprints</h2>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
                The delivery was structured into time-boxed sprints with clear stage gates and review rituals. Each sprint ended with a working increment, a stakeholder review, and an integrated QA pass.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sprint 0: Discovery and Foundations (1 week)</h3>
                  <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc pl-6 space-y-2`}>
                    <li>Stakeholder interviews and requirements consolidation.</li>
                    <li>Competitive scan and content inventory.</li>
                    <li>Information architecture, sitemap, and URL strategy.</li>
                    <li>Definition of success metrics and analytics plan.</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sprint 1: IA, Wireframes, and CMS Model (2 weeks)</h3>
                  <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc pl-6 space-y-2`}>
                    <li>Low-fidelity wireframes for all primary templates.</li>
                    <li>Webflow CMS collections designed for posts, case studies, services, and team.</li>
                    <li>Content types, fields, relationships, and slugs defined for SEO.</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sprint 2: Design System and Templates (2 weeks)</h3>
                  <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc pl-6 space-y-2`}>
                    <li>Typography scale, spacing units, grid, and components documented.</li>
                    <li>Page templates implemented in Webflow with reusable sections.</li>
                    <li>Accessibility checks on color contrast, semantics, and focus states.</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sprint 3: Build, Interactions, and Content (2 weeks)</h3>
                  <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc pl-6 space-y-2`}>
                    <li>Template population through CMS collections and content migration.</li>
                    <li>Controlled interactions using Webflow interactions and custom code blocks where necessary.</li>
                    <li>Localization readiness and content formatting for search.</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sprint 4: SEO, Automation, and QA (1–2 weeks)</h3>
                  <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc pl-6 space-y-2`}>
                    <li>Technical SEO: metadata, schema.org, canonical tags, and sitemap submission.</li>
                    <li>Performance tuning: image strategy, lazy loading, and asset hygiene.</li>
                    <li>n8n and Zapier: lead capture routing, notifications, and CRM handoffs.</li>
                    <li>Comprehensive QA: functional, responsive, and regression testing.</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Launch and Handover</h3>
                  <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc pl-6 space-y-2`}>
                    <li>Staging review, content freeze, and production cutover.</li>
                    <li>Analytics, goals, and Search Console verification.</li>
                    <li>Editorial training on CMS workflows and governance checklist.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={`mb-8 rounded-2xl p-8 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Details</h2>
              <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc pl-6 space-y-2`}>
                <li>Platform: Webflow with CMS collections for structured content.</li>
                <li>Design: Component library with documented usage and responsive breakpoints.</li>
                <li>Automation: n8n and Zapier workflows for lead routing, notifications, and enrichment.</li>
                <li>Analytics: GA4 events, Search Console integration, and UTM tracking standards.</li>
                <li>SEO: XML sitemap, robots directives, schema, canonical and hreflang readiness.</li>
                <li>Performance: media optimization, caching strategy, and controlled third-party scripts.</li>
              </ul>
            </section>

            <section className={`mb-8 rounded-2xl p-8 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Outcomes</h2>
              <ul className={`${isDark ? 'text-gray-300' : 'text-gray-700'} list-disc pl-6 space-y-2`}>
                <li>Clean, authoritative corporate presence aligned with AON’s positioning.</li>
                <li>Editorial independence through CMS with consistent component usage.</li>
                <li>Improved crawlability, metadata hygiene, and baseline search performance.</li>
                <li>Streamlined lead handling through automation, reducing manual follow-ups.</li>
                <li>Operational clarity through governance, release cadence, and training.</li>
              </ul>
            </section>

            <section className={`rounded-2xl p-8 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Visit</h2>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                The corporate website is available at{' '}
                <a href="https://www.a-o-n.net/" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-blue-300 underline' : 'text-blue-700 underline'}`}>
                  a-o-n.net
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


