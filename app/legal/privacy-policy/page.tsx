'use client';

import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';

export default function PrivacyPolicyPage() {
  const { isDark } = useTheme();

  return (
    <>
      <Head>
        <title>Privacy Policy | Upvista Digital</title>
        <meta
          name="description"
          content="Privacy Policy describing how Upvista Digital collects, processes, protects, and shares personal data across global software, AI, cloud, web, and design services."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.upvistadigital.com/legal/privacy-policy" />
      </Head>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <Header />

        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
          <div className={isDark ? 'text-gray-100' : 'text-gray-900'}>

            <div className="mb-12 border-b pb-8">
              <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Privacy Policy
              </h1>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Version 1.0
              </p>
            </div>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                1. SCOPE AND PURPOSE
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  This Privacy Policy (“Policy”) explains how Upvista Digital (“we”, “us”, “our”) collects, processes,
                  stores, protects, and shares personal data in connection with our global software development, artificial
                  intelligence systems, cloud integration, web development, graphics design, and related consulting services
                  (collectively, “Services”). The Policy applies to individuals interacting with our websites, digital
                  platforms, communications, and Service delivery.
                </p>
                <p>
                  By accessing our Services or providing personal data, you acknowledge that you have read and understood
                  this Policy and agree to the practices described herein.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                2. DATA CONTROLLER
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Upvista Digital is the data controller for personal data collected through our Services unless otherwise
                  specified in a Statement of Work (“SOW”) or Data Processing Agreement (“DPA”). For certain engagements,
                  Upvista Digital may act as a data processor on behalf of its Clients. When we act as a processor, we
                  process data strictly in accordance with the Client’s documented instructions.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                3. PERSONAL DATA WE COLLECT
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  We may collect the following categories of personal data depending on your interaction with our Services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Identification data (full name, job title, employer, country).</li>
                  <li>Contact information (email address, phone number, communication preferences).</li>
                  <li>Account and authentication data (usernames, hashed passwords, security tokens).</li>
                  <li>Service-specific data (project requirements, technical specifications, design assets).</li>
                  <li>Financial data (billing information, transaction history, tax identifiers as required).</li>
                  <li>Usage data (log files, device identifiers, browser information, IP addresses, geolocation).</li>
                  <li>Marketing data (preferences, engagement metrics, survey responses).</li>
                </ul>
                <p>
                  We do not intentionally collect sensitive personal data unless explicitly required by an engagement and
                  accompanied by appropriate safeguards and client instructions.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                4. HOW WE USE PERSONAL DATA
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>We process personal data for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Delivering and managing our Services, projects, and client engagements.</li>
                  <li>Responding to inquiries, proposals, and support requests.</li>
                  <li>Authenticating users and securing accounts.</li>
                  <li>Improving our platforms, user experience, and Service quality.</li>
                  <li>Conducting research, analytics, and performance monitoring.</li>
                  <li>Meeting contractual commitments and regulatory obligations.</li>
                  <li>Marketing our Services, subject to your communication preferences.</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                5. LEGAL BASES FOR PROCESSING
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>We rely on the following legal bases for processing personal data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Performance of a contract or to take steps at your request prior to entering a contract.</li>
                  <li>Legitimate interests in operating and expanding our Services.</li>
                  <li>Compliance with legal or regulatory obligations.</li>
                  <li>Consent, where required by applicable law.</li>
                  <li>Protection of vital interests in exceptional circumstances.</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                6. DATA SHARING AND INTERNATIONAL TRANSFERS
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  We may share personal data with trusted third parties, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers assisting with hosting, analytics, communications, payments, or security.</li>
                  <li>Professional advisors (legal, tax, auditing) under confidentiality obligations.</li>
                  <li>Regulators or authorities when required by law.</li>
                  <li>Business partners and affiliates for client engagements with your consent.</li>
                </ul>
                <p>
                  Personal data may be transferred to jurisdictions outside of your country of residence. When transferring
                  data internationally, we implement appropriate safeguards such as Standard Contractual Clauses, data
                  transfer impact assessments, and encryption controls.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                7. DATA RETENTION
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  We retain personal data only for as long as necessary to fulfill the purposes outlined in this Policy,
                  comply with legal obligations, resolve disputes, and enforce agreements. Retention periods differ based on
                  data type, engagement context, and regulatory requirements.
                </p>
                <p>
                  Upon request or contract termination, we will delete or anonymize personal data unless retention is required
                  by law or legitimate business purposes (e.g., accounting, legal defense).
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                8. DATA SUBJECT RIGHTS
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data and obtain a copy.</li>
                  <li>Rectify inaccurate or incomplete data.</li>
                  <li>Request deletion (“right to be forgotten”).</li>
                  <li>Restrict or object to processing under certain circumstances.</li>
                  <li>Receive data in a portable format.</li>
                  <li>Withdraw consent where processing is based on consent.</li>
                  <li>Lodge a complaint with a supervisory authority.</li>
                </ul>
                <p>
                  Requests can be submitted via the contact information in Section 11. We will respond within applicable legal
                  timelines and may require verification of your identity.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                9. SECURITY MEASURES
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  We implement administrative, technical, and physical safeguards aligned with industry standards and
                  certifications (including ISO/IEC 27001 practices) to protect personal data. Measures include encryption,
                  access controls, network monitoring, vulnerability management, employee training, and incident response
                  protocols.
                </p>
                <p>
                  Despite our efforts, no system can guarantee absolute security. We encourage clients and users to implement
                  complementary security measures on their systems and platforms.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                10. COOKIES AND TRACKING TECHNOLOGIES
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Our websites and applications may use cookies, analytics scripts, and similar technologies to enhance user
                  experience, analyze performance, and personalize content. You can control cookie preferences through your
                  browser settings or via the consent tools available on our platforms.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                11. CHILDREN'S PRIVACY
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Our Services are not directed to children under sixteen (16) years of age, and we do not knowingly collect
                  personal data from children. If we learn that we have collected data from a child without appropriate
                  consent, we will promptly delete such data.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                12. POLICY UPDATES
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  We may update this Policy from time to time to reflect changes in legal requirements, industry practices, or
                  our operational needs. Material changes will be communicated via email or posted on our website with an
                  updated “Last Updated” date. Continued use of our Services constitutes acceptance of the revised Policy.
                </p>
              </div>
            </section>

            <section className="mb-12 border-t pt-8">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                13. CONTACT INFORMATION
              </h2>
              <div className={`space-y-2 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  If you have questions regarding this Privacy Policy or wish to exercise your data protection rights, please
                  contact:
                </p>
                <p className="mt-4">
                  <strong>Upvista Digital</strong><br />
                  Email: info@upvistadigital.com<br />
                  Phone: +92-332-0486955<br />
                  Website: www.upvistadigital.com
                </p>
              </div>
            </section>

            <div className={`mt-12 p-6 border ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                By continuing to engage with Upvista Digital, you acknowledge that you have read, understood, and agree to
                this Privacy Policy. If you do not agree with the practices described herein, please discontinue use of our
                Services.
              </p>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

