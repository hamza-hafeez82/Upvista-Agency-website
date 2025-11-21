'use client';

import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';

export default function TrademarkCopyrightPage() {
  const { isDark } = useTheme();

  return (
    <>
      <Head>
        <title>Trademark and Copyright Notice | Intellectual Property Rights | Upvista Digital</title>
        <meta
          name="description"
          content="Trademark and Copyright Notice for Upvista Digital. Comprehensive information about intellectual property rights, trademark usage guidelines, copyright protection, DMCA compliance, licensing terms, and IP enforcement policies."
        />
        <meta name="keywords" content="Trademark Notice, Copyright Notice, Intellectual Property Rights, Trademark Usage, Copyright Protection, DMCA Compliance, IP Rights, Trademark Guidelines, Copyright Policy, Intellectual Property Policy" />
        <meta property="og:title" content="Trademark and Copyright Notice | Intellectual Property Rights | Upvista Digital" />
        <meta property="og:description" content="Trademark and Copyright Notice for Upvista Digital. Information about intellectual property rights, trademark usage, and copyright protection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/legal/trademark-copyright" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trademark and Copyright Notice | Upvista Digital" />
        <meta name="twitter:description" content="Trademark and Copyright Notice for Upvista Digital. Information about intellectual property rights." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/legal/trademark-copyright" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Trademark and Copyright Notice - Upvista Digital',
          'description': 'Trademark and Copyright Notice for Upvista Digital. Information about intellectual property rights, trademark usage, copyright protection, and licensing terms.',
          'url': 'https://www.upvistadigital.com/legal/trademark-copyright',
          'about': {
            '@type': 'Thing',
            'name': 'Trademark and Copyright',
            'description': 'Intellectual property rights and protection'
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
                'name': 'Legal',
                'item': 'https://www.upvistadigital.com/legal'
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Trademark and Copyright',
                'item': 'https://www.upvistadigital.com/legal/trademark-copyright'
              }
            ]
          }
        }) }} />
      </Head>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <Header />

        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
          <div className={isDark ? 'text-gray-100' : 'text-gray-900'}>
            
            <div className="mb-12 border-b pb-8">
              <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Trademark and Copyright Notice
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
                1. COPYRIGHT OWNERSHIP
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  All content, materials, designs, software, documentation, graphics, images, text, logos, icons, audio, video, and other intellectual property displayed on or accessible through Upvista Digital's websites, platforms, services, and deliverables (collectively, "Content") are the exclusive property of Upvista Digital or its licensors and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  Unless expressly stated otherwise, all Content is © {new Date().getFullYear()} Upvista Digital. All rights reserved.
                </p>
                <p>
                  No portion of the Content may be reproduced, distributed, transmitted, displayed, published, broadcast, or otherwise exploited in any form or by any means, whether electronic, mechanical, or otherwise, without the prior written permission of Upvista Digital, except as expressly permitted by applicable law or as set forth in this Notice.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                2. TRADEMARK RIGHTS
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">2.1 Upvista Digital Trademarks</p>
                <p>
                  The name "Upvista Digital," the Upvista Digital logo, and all related names, logos, product names, service names, slogans, and designs (collectively, "Trademarks") are trademarks, service marks, or registered trademarks of Upvista Digital or its affiliates in various jurisdictions worldwide.
                </p>
                <p className="font-semibold mt-4 mb-2">2.2 Third-Party Trademarks</p>
                <p>
                  All other trademarks, service marks, trade names, logos, and brand names displayed on our platforms are the property of their respective owners. The use of any third-party trademarks does not imply endorsement, sponsorship, or affiliation with such third parties, and Upvista Digital disclaims any association with such marks except as expressly stated.
                </p>
                <p className="font-semibold mt-4 mb-2">2.3 Prohibited Use</p>
                <p>
                  You may not use, reproduce, or display any Trademarks without the prior written consent of Upvista Digital, except as permitted by applicable law or as set forth in this Notice. Prohibited uses include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Using Trademarks in a manner that suggests endorsement, sponsorship, or affiliation with Upvista Digital without authorization.</li>
                  <li>Using Trademarks in connection with any product or service that is not provided or authorized by Upvista Digital.</li>
                  <li>Using Trademarks in a manner that is likely to cause confusion, mistake, or deception.</li>
                  <li>Using Trademarks in a manner that disparages, tarnishes, or dilutes the value of Upvista Digital's brand.</li>
                  <li>Registering or attempting to register any Trademarks or confusingly similar marks as domain names, social media handles, or in any other capacity.</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                3. PERMITTED USES
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">3.1 Limited License</p>
                <p>
                  Subject to your compliance with this Notice and all applicable terms and conditions, Upvista Digital grants you a limited, non-exclusive, non-transferable, revocable license to access and view Content solely for your personal, non-commercial use, provided that you retain all copyright and proprietary notices.
                </p>
                <p className="font-semibold mt-4 mb-2">3.2 Fair Use and Fair Dealing</p>
                <p>
                  You may use Content in accordance with applicable fair use, fair dealing, or similar exceptions under copyright law, such as for purposes of criticism, comment, news reporting, teaching, scholarship, or research, provided that such use does not infringe upon Upvista Digital's rights or violate this Notice.
                </p>
                <p className="font-semibold mt-4 mb-2">3.3 Client Deliverables</p>
                <p>
                  With respect to deliverables created specifically for clients pursuant to a written agreement, ownership and usage rights shall be governed by the terms of such agreement. Upon full payment and satisfaction of all obligations, clients typically receive ownership or license rights to deliverables as specified in the applicable Statement of Work or Service Agreement.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                4. INTELLECTUAL PROPERTY INFRINGEMENT
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">4.1 Respect for Intellectual Property</p>
                <p>
                  Upvista Digital respects the intellectual property rights of others and expects all users of its platforms and services to do the same. We prohibit the use of our platforms or services in any manner that infringes upon the intellectual property rights of Upvista Digital or any third party.
                </p>
                <p className="font-semibold mt-4 mb-2">4.2 Infringement Claims</p>
                <p>
                  If you believe that any Content or activity on our platforms infringes upon your intellectual property rights, please provide written notice to Upvista Digital containing:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>A description of the copyrighted work or trademark that you claim has been infringed.</li>
                  <li>Identification of the allegedly infringing material, including its location on our platforms.</li>
                  <li>Your contact information, including name, address, telephone number, and email address.</li>
                  <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright or trademark owner, its agent, or the law.</li>
                  <li>A statement that the information in your notice is accurate and that you are the owner or authorized to act on behalf of the owner of the allegedly infringed right.</li>
                  <li>Your physical or electronic signature.</li>
                </ul>
                <p className="font-semibold mt-4 mb-2">4.3 Counter-Notification</p>
                <p>
                  If you believe that Content you submitted was removed or disabled as a result of mistake or misidentification, you may submit a counter-notification to Upvista Digital in accordance with applicable law.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                5. USER-GENERATED CONTENT
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  When you submit, post, upload, or otherwise provide content to Upvista Digital's platforms or services ("User Content"), you retain ownership of any intellectual property rights you hold in such User Content. However, by submitting User Content, you grant Upvista Digital a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your User Content in connection with Upvista Digital's business operations, marketing, and service delivery.
                </p>
                <p>
                  You represent and warrant that: (a) you own or have the necessary rights to grant the license described above; (b) your User Content does not infringe upon the rights of any third party; and (c) your User Content complies with all applicable laws and regulations.
                </p>
                <p>
                  Upvista Digital reserves the right to remove, edit, or refuse to publish any User Content that violates this Notice, applicable laws, or Upvista Digital's policies, in its sole discretion.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                6. THIRD-PARTY CONTENT AND OPEN SOURCE
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">6.1 Third-Party Content</p>
                <p>
                  Our platforms and services may incorporate or link to content, software, libraries, frameworks, or other materials owned by third parties. Such third-party content remains the property of its respective owners and is subject to the terms and conditions, licenses, and restrictions imposed by such owners.
                </p>
                <p className="font-semibold mt-4 mb-2">6.2 Open Source Software</p>
                <p>
                  Upvista Digital may use open-source software in the development of its services and deliverables. Open-source components are subject to their respective open-source licenses, which may include requirements for attribution, disclosure of source code, or other obligations. Information regarding open-source components and their licenses will be disclosed to clients as required by applicable licenses or agreements.
                </p>
                <p className="font-semibold mt-4 mb-2">6.3 License Compliance</p>
                <p>
                  Users and clients are responsible for ensuring compliance with all applicable third-party licenses when using, modifying, or distributing any content, software, or deliverables that incorporate third-party or open-source components.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                7. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA)
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Upvista Digital complies with the Digital Millennium Copyright Act (DMCA) and similar copyright laws in other jurisdictions. If you are a copyright owner or authorized agent and believe that Content on our platforms infringes your copyright, you may submit a DMCA takedown notice to our designated copyright agent.
                </p>
                <p>
                  Our designated copyright agent for DMCA notices is:
                </p>
                <p className="mt-4 ml-4">
                  <strong>Copyright Agent</strong><br />
                  Upvista Digital<br />
                  Email: info@upvistadigital.com<br />
                  Subject Line: "DMCA Takedown Notice"
                </p>
                <p className="mt-4">
                  Upon receipt of a valid DMCA notice, Upvista Digital will promptly investigate and, if appropriate, remove or disable access to the allegedly infringing material in accordance with applicable law.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                8. ENFORCEMENT AND REMEDIES
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Upvista Digital takes intellectual property rights seriously and will vigorously enforce its rights against any unauthorized use, reproduction, distribution, or exploitation of its Content or Trademarks. Violation of this Notice may result in:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Immediate termination of access to our platforms and services.</li>
                  <li>Legal action seeking injunctive relief, damages, and recovery of attorneys' fees and costs.</li>
                  <li>Criminal prosecution where applicable under intellectual property laws.</li>
                  <li>Reporting to relevant authorities and industry organizations.</li>
                </ul>
                <p className="mt-4">
                  Nothing in this Notice shall be construed as a waiver of any rights or remedies available to Upvista Digital under applicable law, including the right to seek monetary damages, injunctive relief, or other remedies.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                9. MODIFICATIONS TO THIS NOTICE
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Upvista Digital reserves the right to modify, update, or amend this Trademark and Copyright Notice at any time without prior notice. Material changes will be posted on this page with an updated "Last Updated" date. Your continued use of our platforms or services after such modifications constitutes acceptance of the revised Notice.
                </p>
                <p>
                  It is your responsibility to review this Notice periodically to stay informed of any changes. If you do not agree with any modifications to this Notice, you must immediately discontinue use of our platforms and services.
                </p>
              </div>
            </section>

            <section className="mb-12 border-t pt-8">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                10. CONTACT INFORMATION
              </h2>
              <div className={`space-y-2 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  For questions regarding this Trademark and Copyright Notice, intellectual property licensing, or to report potential infringement, please contact:
                </p>
                <p className="mt-4">
                  <strong>Upvista Digital</strong><br />
                  Email: info@upvistadigital.com<br />
                  Phone: +92-332-0486955<br />
                  Website: www.upvistadigital.com
                </p>
                <p className="mt-4">
                  For DMCA takedown notices, please use the contact information provided in Section 7 above.
                </p>
              </div>
            </section>

            <div className={`mt-12 p-6 border ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                By accessing or using Upvista Digital's platforms, services, or Content, you acknowledge that you have read, understood, and agree to be bound by this Trademark and Copyright Notice. If you do not agree with any provision of this Notice, you must immediately discontinue use of our platforms and services.
              </p>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

