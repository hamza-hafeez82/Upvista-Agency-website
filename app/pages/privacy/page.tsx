"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <button className="group flex items-center px-4 py-3 text-sm text-gray-200 hover:bg-purple-600/20 transition-all duration-300">
            <ArrowLeft className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" />
            <span className="font-medium">Back to Home</span>
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Upvista Digital (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our upcoming marketplace. By using our services, you consent to the data practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed mb-4">
              We collect several types of information from and about users of our website and services:
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Name, email address, and phone number</li>
              <li>Company name and job title</li>
              <li>Billing and payment information</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Technical Information</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Operating system and platform</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Marketplace Information (Future)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>User profiles and seller information</li>
              <li>Product listings and descriptions</li>
              <li>Transaction history and payment data</li>
              <li>Reviews and ratings</li>
              <li>Communication between buyers and sellers</li>
            </ul>

            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you contact us, sign up for our services, or use our website. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Service Delivery:</strong> To provide and maintain our services, process payments, and deliver project deliverables</li>
              <li><strong>Communication:</strong> To respond to inquiries, provide customer support, and send project updates</li>
              <li><strong>Marketing:</strong> To send promotional materials, newsletters, and updates about our services (with your consent)</li>
              <li><strong>Improvement:</strong> To analyze usage patterns, improve our website and services, and develop new features</li>
              <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
              <li><strong>Marketplace Operations:</strong> To facilitate transactions, manage user accounts, and maintain marketplace functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations (payment processors, hosting providers, analytics services)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users or the public</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
            <p className="leading-relaxed">
              <strong>Marketplace Sharing:</strong> In our marketplace, certain information (such as seller profiles and product listings) will be publicly visible to facilitate transactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Data Security
            </h2>
            <p className="leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure hosting and infrastructure</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Marketing Cookies:</strong> Used for targeted advertising and marketing campaigns</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="leading-relaxed">
              You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Third-Party Services
            </h2>
            <p className="leading-relaxed mb-4">
              Our website and services may contain links to third-party websites or integrate with third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Payment processors (Stripe, PayPal)</li>
              <li>Analytics services (Google Analytics)</li>
              <li>Social media platforms</li>
              <li>Email marketing services</li>
              <li>Cloud storage providers</li>
            </ul>
            <p className="leading-relaxed">
              These third-party services have their own privacy policies. We encourage you to review their policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Your Rights and Choices
            </h2>
            <p className="leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="leading-relaxed">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Data Retention
            </h2>
            <p className="leading-relaxed mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Provide our services and maintain your account</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p className="leading-relaxed">
              When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately, and we will take steps to remove such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. International Data Transfers
            </h2>
            <p className="leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country.
            </p>
            <p className="leading-relaxed">
              When we transfer your information internationally, we implement appropriate safeguards, such as standard contractual clauses, to ensure your information receives adequate protection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              12. Marketing Communications
            </h2>
            <p className="leading-relaxed mb-4">
              We may send you marketing communications about our services, updates, and promotions. You can opt-out of these communications at any time by:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Clicking the unsubscribe link in our emails</li>
              <li>Updating your communication preferences in your account</li>
              <li>Contacting us directly</li>
            </ul>
            <p className="leading-relaxed">
              Even if you opt-out of marketing communications, we may still send you important service-related messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              13. Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Posting the updated policy on our website</li>
              <li>Sending you an email notification</li>
              <li>Displaying a notice on our website</li>
            </ul>
            <p className="leading-relaxed">
              Your continued use of our services after changes become effective constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              14. Contact Us
            </h2>
            <p className="leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> info@upvistadigital.com</p>
              <p><strong>Phone:</strong> +92 332 0486955</p>
              <p><strong>Website:</strong> <Link href="/contact" className="text-purple-400 hover:text-purple-300">Contact Page</Link></p>
              <p><strong>Address:</strong> Pakistan</p>
            </div>
            <p className="leading-relaxed mt-4">
              We will respond to your inquiry within a reasonable timeframe and work to address your concerns.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">Last updated: June 29, 2025</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
