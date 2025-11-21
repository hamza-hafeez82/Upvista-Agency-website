'use client';

import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';

export default function TermsAndConditionsPage() {
  const { isDark } = useTheme();

  return (
    <>
      <Head>
        <title>Terms and Conditions | Service Agreement | Upvista Digital</title>
        <meta name="description" content="Read Upvista Digital's Terms and Conditions. Comprehensive service agreement covering software development, AI systems, cloud integration, web development, graphics design, intellectual property, payment terms, and legal obligations for global clients." />
        <meta name="keywords" content="Terms and Conditions, Service Agreement, Terms of Service, Legal Terms, Software Development Terms, AI Services Agreement, Cloud Services Terms, Web Development Terms, Business Terms, Contract Terms" />
        <meta property="og:title" content="Terms and Conditions | Service Agreement | Upvista Digital" />
        <meta property="og:description" content="Read Upvista Digital's Terms and Conditions covering software development, AI systems, cloud integration, and digital services for global clients." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/legal/terms-conditions" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms and Conditions | Upvista Digital" />
        <meta name="twitter:description" content="Read Upvista Digital's Terms and Conditions covering software development, AI systems, and digital services." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/legal/terms-conditions" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Terms and Conditions - Upvista Digital',
          'description': 'Terms and Conditions governing the use of Upvista Digital services including software development, AI systems, cloud integration, web development, and graphics design.',
          'url': 'https://www.upvistadigital.com/legal/terms-conditions',
          'about': {
            '@type': 'Thing',
            'name': 'Terms and Conditions',
            'description': 'Legal terms and conditions for digital services'
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
                'name': 'Terms and Conditions',
                'item': 'https://www.upvistadigital.com/legal/terms-conditions'
              }
            ]
          }
        }) }} />
      </Head>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <Header />
        
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
          <div className={`${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            
            {/* Header */}
            <div className="mb-12 border-b pb-8">
              <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Terms and Conditions
              </h1>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Version 1.0
              </p>
            </div>

            {/* Preamble */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                1. PREAMBLE AND DEFINITIONS
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  These Terms and Conditions ("Terms", "Agreement") constitute a legally binding agreement between Upvista Digital ("Company", "we", "us", "our"), a global digital innovation company, and any individual or entity ("Client", "you", "your") that accesses, uses, or engages with our services, products, or digital platforms.
                </p>
                <p>
                  By accessing our website, engaging our services, or entering into any agreement with Upvista Digital, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must immediately discontinue use of our services and exit our digital platforms.
                </p>
                <p className="font-semibold mt-6 mb-2">Definitions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>"Services"</strong> means all services provided by Upvista Digital, including but not limited to software development, artificial intelligence systems development and integration, cloud solutions and infrastructure services, web development, graphics and UI/UX design, digital marketing, and related consulting services.</li>
                  <li><strong>"Deliverables"</strong> means any work product, code, documentation, designs, reports, or other materials created, developed, or provided by Upvista Digital in connection with the Services.</li>
                  <li><strong>"Intellectual Property"</strong> means all intellectual property rights, including patents, copyrights, trademarks, trade secrets, know-how, and any other proprietary rights.</li>
                  <li><strong>"Confidential Information"</strong> means any non-public, proprietary, or confidential information disclosed by either party to the other, whether orally, in writing, or in any other form.</li>
                  <li><strong>"Client Content"</strong> means any materials, data, information, or content provided by the Client to Upvista Digital in connection with the Services.</li>
                </ul>
              </div>
            </section>

            {/* Services and Scope */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                2. SERVICES AND SCOPE OF WORK
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Upvista Digital provides comprehensive digital services on a global scale. The specific scope, deliverables, timelines, and pricing for each engagement shall be detailed in a separate Statement of Work ("SOW"), Service Agreement, or similar document executed by both parties.
                </p>
                <p className="font-semibold mt-4 mb-2">Service Categories:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Software Development:</strong> Custom software solutions, enterprise applications, mobile applications, and software integration services.</li>
                  <li><strong>Artificial Intelligence Systems:</strong> AI development, machine learning solutions, natural language processing, computer vision, and AI system integration.</li>
                  <li><strong>Cloud Solutions:</strong> Cloud infrastructure design, migration services, DevOps automation, containerization, and cloud management services.</li>
                  <li><strong>Web Development:</strong> Custom website development, web applications, e-commerce solutions, and web-based platforms.</li>
                  <li><strong>Graphics and Design:</strong> UI/UX design, brand identity development, graphic design, and visual content creation.</li>
                  <li><strong>Digital Marketing:</strong> Search engine optimization, social media marketing, pay-per-click advertising, content marketing, and marketing automation.</li>
                </ul>
                <p className="mt-4">
                  Any modifications, additions, or changes to the scope of work must be agreed upon in writing by both parties and may result in adjustments to timelines, deliverables, and fees.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                3. INTELLECTUAL PROPERTY RIGHTS
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">3.1 Pre-Existing Intellectual Property</p>
                <p>
                  Each party retains all right, title, and interest in and to its pre-existing intellectual property. Nothing in this Agreement shall be construed to transfer ownership of any pre-existing intellectual property from one party to the other.
                </p>
                <p className="font-semibold mt-4 mb-2">3.2 Work Product and Deliverables</p>
                <p>
                  Upon full payment of all fees due under the applicable SOW or Service Agreement, Upvista Digital hereby assigns to the Client all right, title, and interest in and to the Deliverables specifically created for the Client, subject to the reservation of rights set forth in Section 3.3.
                </p>
                <p className="font-semibold mt-4 mb-2">3.3 Reserved Rights</p>
                <p>
                  Upvista Digital reserves the right to use, modify, and commercialize any general knowledge, skills, methodologies, techniques, algorithms, frameworks, libraries, or other intellectual property developed or acquired in the course of providing services, provided such use does not infringe upon the Client's rights in the specific Deliverables or disclose Confidential Information.
                </p>
                <p className="font-semibold mt-4 mb-2">3.4 Client Content</p>
                <p>
                  The Client retains all right, title, and interest in and to Client Content. The Client hereby grants Upvista Digital a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display Client Content solely for the purpose of providing the Services.
                </p>
                <p className="font-semibold mt-4 mb-2">3.5 Third-Party Intellectual Property</p>
                <p>
                  Services may incorporate or utilize third-party intellectual property, including open-source software. The Client's rights to such third-party intellectual property shall be governed by the applicable third-party license terms, which shall be disclosed to the Client prior to incorporation.
                </p>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                4. PAYMENT TERMS AND FINANCIAL PROVISIONS
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">4.1 Fees and Pricing</p>
                <p>
                  All fees, pricing, and payment terms shall be specified in the applicable SOW or Service Agreement. Fees may be structured as fixed-price, time-and-materials, retainer-based, or a combination thereof, as agreed upon by the parties.
                </p>
                <p className="font-semibold mt-4 mb-2">4.2 Payment Schedule</p>
                <p>
                  Unless otherwise specified, invoices shall be due and payable within thirty (30) days of the invoice date. Payment shall be made in the currency specified in the applicable agreement, via wire transfer, credit card, or other mutually agreed payment method.
                </p>
                <p className="font-semibold mt-4 mb-2">4.3 Late Payment</p>
                <p>
                  In the event of late payment, Upvista Digital reserves the right to (a) suspend or terminate Services until payment is received; and (b) recover all costs of collection, including reasonable attorneys' fees.
                </p>
                <p className="font-semibold mt-4 mb-2">4.4 Taxes</p>
                <p>
                  All fees are exclusive of taxes, duties, levies, or similar governmental charges. The Client shall be responsible for all such charges, except for taxes based on Upvista Digital's net income. If Upvista Digital is required to collect or pay any taxes, such amounts shall be added to the fees and paid by the Client.
                </p>
                <p className="font-semibold mt-4 mb-2">4.5 Disputed Charges</p>
                <p>
                  The Client must notify Upvista Digital in writing of any disputed charges within thirty (30) days of the invoice date. Failure to provide such notice shall constitute acceptance of the charges. The parties shall work in good faith to resolve any disputes promptly.
                </p>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                5. DATA PROTECTION AND PRIVACY
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Upvista Digital is committed to protecting personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other applicable privacy regulations.
                </p>
                <p className="font-semibold mt-4 mb-2">5.1 Data Processing</p>
                <p>
                  When processing personal data on behalf of the Client, Upvista Digital acts as a data processor and shall process such data only in accordance with the Client's documented instructions and applicable data protection laws.
                </p>
                <p className="font-semibold mt-4 mb-2">5.2 Data Security</p>
                <p>
                  Upvista Digital shall implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction, in accordance with industry best practices and applicable legal requirements.
                </p>
                <p className="font-semibold mt-4 mb-2">5.3 Data Breach Notification</p>
                <p>
                  In the event of a personal data breach, Upvista Digital shall notify the Client without undue delay and in any event within seventy-two (72) hours of becoming aware of the breach, providing all information reasonably necessary to enable the Client to comply with its notification obligations.
                </p>
                <p className="font-semibold mt-4 mb-2">5.4 Data Retention and Deletion</p>
                <p>
                  Personal data shall be retained only for as long as necessary to fulfill the purposes for which it was collected or as required by applicable law. Upon termination of services or upon the Client's request, Upvista Digital shall delete or return all personal data, unless retention is required by law.
                </p>
              </div>
            </section>

            {/* Confidentiality */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                6. CONFIDENTIALITY AND NON-DISCLOSURE
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Each party acknowledges that it may receive Confidential Information from the other party. Each party agrees to: (a) hold all Confidential Information in strict confidence; (b) not disclose Confidential Information to any third party without the prior written consent of the disclosing party; and (c) use Confidential Information solely for the purpose of performing its obligations under this Agreement.
                </p>
                <p className="font-semibold mt-4 mb-2">6.1 Exceptions</p>
                <p>
                  The obligations of confidentiality shall not apply to information that: (a) is or becomes publicly available through no breach of this Agreement; (b) was rightfully known by the receiving party prior to disclosure; (c) is rightfully received from a third party without breach of any confidentiality obligation; or (d) is independently developed by the receiving party without use of or reference to the Confidential Information.
                </p>
                <p className="font-semibold mt-4 mb-2">6.2 Duration</p>
                <p>
                  The obligations of confidentiality shall survive termination of this Agreement and shall continue for a period of five (5) years from the date of disclosure, or such longer period as may be required by applicable law or as specified in a separate non-disclosure agreement.
                </p>
              </div>
            </section>

            {/* Warranties */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                7. WARRANTIES AND DISCLAIMERS
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">7.1 Service Warranties</p>
                <p>
                  Upvista Digital warrants that: (a) the Services will be performed in a professional and workmanlike manner in accordance with industry standards; (b) the Services will substantially conform to the specifications set forth in the applicable SOW; and (c) Upvista Digital has the right and authority to enter into this Agreement and perform the Services.
                </p>
                <p className="font-semibold mt-4 mb-2">7.2 Disclaimer of Implied Warranties</p>
                <p>
                  EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, UPVISTA DIGITAL MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="font-semibold mt-4 mb-2">7.3 Third-Party Services</p>
                <p>
                  Upvista Digital makes no warranties regarding third-party services, software, or components that may be incorporated into or used in connection with the Services. The Client's rights with respect to such third-party materials shall be governed solely by the applicable third-party license terms.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                8. LIMITATION OF LIABILITY
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">8.1 Limitation of Liability</p>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL UPVISTA DIGITAL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, LOSS OF DATA, LOSS OF BUSINESS OPPORTUNITIES, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR THE SERVICES, REGARDLESS OF THE THEORY OF LIABILITY.
                </p>
                <p className="font-semibold mt-4 mb-2">8.2 Liability Cap</p>
                <p>
                  UPVISTA DIGITAL'S TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR THE SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CLIENT TO UPVISTA DIGITAL UNDER THE APPLICABLE SOW OR SERVICE AGREEMENT IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
                <p className="font-semibold mt-4 mb-2">8.3 Exceptions</p>
                <p>
                  The limitations set forth in this Section 8 shall not apply to: (a) breaches of confidentiality obligations; (b) infringement of intellectual property rights; (c) fraud or willful misconduct; or (d) any liability that cannot be limited or excluded under applicable law.
                </p>
              </div>
            </section>

            {/* Term and Termination */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                9. TERM AND TERMINATION
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">9.1 Term</p>
                <p>
                  This Agreement shall commence on the date of acceptance by the Client and shall continue until terminated in accordance with this Section 9. The term of specific Services shall be as set forth in the applicable SOW or Service Agreement.
                </p>
                <p className="font-semibold mt-4 mb-2">9.2 Termination for Cause</p>
                <p>
                  Either party may terminate this Agreement or any SOW immediately upon written notice if the other party: (a) materially breaches this Agreement and fails to cure such breach within thirty (30) days after written notice; (b) becomes insolvent, files for bankruptcy, or makes an assignment for the benefit of creditors; or (c) ceases to conduct business in the ordinary course.
                </p>
                <p className="font-semibold mt-4 mb-2">9.3 Termination for Convenience</p>
                <p>
                  Either party may terminate this Agreement or any SOW for convenience upon sixty (60) days' prior written notice to the other party. Upon termination for convenience, the Client shall pay all fees due for Services performed through the effective date of termination, plus any non-cancellable commitments incurred by Upvista Digital.
                </p>
                <p className="font-semibold mt-4 mb-2">9.4 Effect of Termination</p>
                <p>
                  Upon termination, Upvista Digital shall: (a) cease providing the Services; (b) return or destroy all Client Content and Confidential Information in accordance with the Client's instructions; and (c) provide reasonable transition assistance for a period not exceeding thirty (30) days, subject to payment of Upvista Digital's then-current rates.
                </p>
                <p className="font-semibold mt-4 mb-2">9.5 Survival</p>
                <p>
                  Sections 3 (Intellectual Property Rights), 5 (Data Protection), 6 (Confidentiality), 7 (Warranties), 8 (Limitation of Liability), 10 (Dispute Resolution), and 11 (General Provisions) shall survive termination of this Agreement.
                </p>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                10. DISPUTE RESOLUTION
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">10.1 Governing Law</p>
                <p>
                  This Agreement shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of laws principles.
                </p>
                <p className="font-semibold mt-4 mb-2">10.2 Jurisdiction</p>
                <p>
                  Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of Lahore, Pakistan. The parties hereby irrevocably submit to the jurisdiction of such courts.
                </p>
                <p className="font-semibold mt-4 mb-2">10.3 Alternative Dispute Resolution</p>
                <p>
                  Prior to initiating any legal proceedings, the parties agree to attempt to resolve disputes through good faith negotiation. If such negotiation is unsuccessful, the parties may, by mutual agreement, submit the dispute to mediation or arbitration in accordance with the rules of the International Chamber of Commerce or such other arbitration body as the parties may agree.
                </p>
              </div>
            </section>

            {/* General Provisions */}
            <section className="mb-12">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                11. GENERAL PROVISIONS
              </h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="font-semibold mb-2">11.1 Entire Agreement</p>
                <p>
                  This Agreement, together with any SOWs or Service Agreements executed by the parties, constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior or contemporaneous agreements, understandings, or communications, whether oral or written.
                </p>
                <p className="font-semibold mt-4 mb-2">11.2 Amendment</p>
                <p>
                  This Agreement may be amended only by a written instrument signed by both parties. Upvista Digital reserves the right to modify these Terms at any time. Material changes will be communicated to Clients via email or through our website. Continued use of Services after such modifications constitutes acceptance of the amended Terms.
                </p>
                <p className="font-semibold mt-4 mb-2">11.3 Assignment</p>
                <p>
                  Neither party may assign this Agreement or any rights or obligations hereunder without the prior written consent of the other party, except that Upvista Digital may assign this Agreement to an affiliate or in connection with a merger, acquisition, or sale of all or substantially all of its assets.
                </p>
                <p className="font-semibold mt-4 mb-2">11.4 Subcontracting</p>
                <p>
                  Upvista Digital may subcontract any portion of the Services to third parties, provided that Upvista Digital remains responsible for the performance of such subcontracted services and compliance with the terms of this Agreement.
                </p>
                <p className="font-semibold mt-4 mb-2">11.5 Force Majeure</p>
                <p>
                  Neither party shall be liable for any failure or delay in performance under this Agreement due to circumstances beyond its reasonable control, including acts of God, war, terrorism, pandemics, government actions, or failures of third-party service providers, provided that the affected party provides prompt notice and uses reasonable efforts to mitigate the impact.
                </p>
                <p className="font-semibold mt-4 mb-2">11.6 Severability</p>
                <p>
                  If any provision of this Agreement is held to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
                </p>
                <p className="font-semibold mt-4 mb-2">11.7 Waiver</p>
                <p>
                  No waiver of any provision of this Agreement shall be effective unless in writing and signed by the waiving party. A waiver of any breach shall not constitute a waiver of any subsequent breach.
                </p>
                <p className="font-semibold mt-4 mb-2">11.8 Independent Contractors</p>
                <p>
                  The parties are independent contractors. Nothing in this Agreement shall create a partnership, joint venture, agency, or employment relationship between the parties.
                </p>
                <p className="font-semibold mt-4 mb-2">11.9 Notices</p>
                <p>
                  All notices required or permitted under this Agreement shall be in writing and delivered by email, certified mail, or overnight courier to the addresses specified in the applicable SOW or Service Agreement, or to such other addresses as may be designated in writing by either party.
                </p>
                <p className="font-semibold mt-4 mb-2">11.10 Export Compliance</p>
                <p>
                  The Client acknowledges that the Services and Deliverables may be subject to export control laws and regulations. The Client agrees to comply with all applicable export control laws and regulations and shall not export, re-export, or transfer any Services or Deliverables in violation of such laws.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12 border-t pt-8">
              <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                12. CONTACT INFORMATION
              </h2>
              <div className={`space-y-2 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  For questions regarding these Terms and Conditions, please contact:
                </p>
                <p className="mt-4">
                  <strong>Upvista Digital</strong><br />
                  Email: info@upvistadigital.com<br />
                  Phone: +92-332-0486955<br />
                  Website: www.upvistadigital.com
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <div className={`mt-12 p-6 border ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                By accessing or using Upvista Digital's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these Terms, you must immediately discontinue use of our services.
              </p>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

