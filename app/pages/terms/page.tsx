"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
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
          Terms and Conditions
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to Upvista Digital (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our website, services, and the upcoming Upvista Marketplace. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Services Overview
            </h2>
            <p className="leading-relaxed mb-4">
              Upvista Digital provides comprehensive digital solutions including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Web Development & Design Services</li>
              <li>UI/UX Design & Branding</li>
              <li>AI Automation Solutions</li>
              <li>Digital Marketing & SEO</li>
              <li>Website Maintenance & Management</li>
              <li>Landing Page Development</li>
              <li>Consultation Services</li>
            </ul>
            <p className="leading-relaxed">
              <strong>Upvista Marketplace:</strong> Our upcoming digital marketplace will connect creators, designers, developers, and businesses to buy, sell, and discover premium digital products and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. User Accounts and Registration
            </h2>
            <p className="leading-relaxed">
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Intellectual Property Rights
            </h2>
            <p className="leading-relaxed mb-4">
              <strong>Our Content:</strong> All content on this website, including text, graphics, logos, images, and software, is the property of Upvista Digital and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Client Deliverables:</strong> Upon full payment, clients receive usage rights to final deliverables as specified in individual project agreements. Source files and development materials remain our intellectual property unless explicitly stated otherwise.
            </p>
            <p className="leading-relaxed">
              <strong>Marketplace Content:</strong> Users retain ownership of content they upload to the marketplace, but grant us a license to display, distribute, and promote their content within our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Payment Terms and Refunds
            </h2>
            <p className="leading-relaxed mb-4">
              <strong>Service Payments:</strong> We require a 50% deposit before commencing work, with the remaining balance due upon project completion. All payments are non-refundable unless otherwise specified in writing.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Marketplace Transactions:</strong> Payment processing will be handled through secure third-party providers. Refund policies will be determined by individual sellers and our marketplace policies.
            </p>
            <p className="leading-relaxed">
              <strong>Late Payments:</strong> Late payments may result in project suspension and additional fees. We reserve the right to withhold deliverables until payment is received in full.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Project Terms and Deliverables
            </h2>
            <p className="leading-relaxed mb-4">
              <strong>Timeline:</strong> Project timelines are estimates and may vary based on complexity, scope changes, and client feedback. We commit to regular communication about project progress.
            </p>
            <p className="leading-relaxed mb-4">
              <strong>Revisions:</strong> We include reasonable revisions in our service packages. Additional revisions may incur additional charges.
            </p>
            <p className="leading-relaxed">
              <strong>Acceptance:</strong> Clients have 14 days from delivery to request revisions. After this period, the project is considered accepted and final payment is due.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. User Conduct and Prohibited Activities
            </h2>
            <p className="leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Use automated tools to access our services</li>
            </ul>
            <p className="leading-relaxed">
              Violation of these terms may result in account suspension or termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Privacy and Data Protection
            </h2>
            <p className="leading-relaxed">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to our collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Limitation of Liability
            </h2>
            <p className="leading-relaxed mb-4">
              To the maximum extent permitted by law, Upvista Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising from your use of our services.
            </p>
            <p className="leading-relaxed">
              Our total liability to you for any claims arising from these Terms or your use of our services shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Indemnification
            </h2>
            <p className="leading-relaxed">
              You agree to indemnify and hold harmless Upvista Digital, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Termination
            </h2>
            <p className="leading-relaxed mb-4">
              We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including breach of these Terms.
            </p>
            <p className="leading-relaxed">
              Upon termination, your right to use our services will cease immediately, and we may delete your account and data in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              12. Governing Law and Dispute Resolution
            </h2>
            <p className="leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
            </p>
            <p className="leading-relaxed">
              Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the relevant arbitration authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              13. Changes to Terms
            </h2>
            <p className="leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date.
            </p>
            <p className="leading-relaxed">
              Your continued use of our services after changes become effective constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              14. Severability
            </h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              15. Contact Information
            </h2>
            <p className="leading-relaxed">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email:</strong> upvistadigital@gmail.com</p>
              <p><strong>Phone:</strong> +92 332 0486955</p>
              <p><strong>Website:</strong> <Link href="/pages/contactPage" className="text-purple-400 hover:text-purple-300">Contact Page</Link></p>
            </div>
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
