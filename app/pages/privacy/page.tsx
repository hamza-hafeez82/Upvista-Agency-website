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
              1. Information We Collect
            </h2>
            <p className="leading-relaxed">
              We collect information that you provide directly to us, including
              but not limited to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Name and contact information</li>
              <li>Project requirements and specifications</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="leading-relaxed">
              We use the collected information for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Providing and improving our services</li>
              <li>Processing payments and transactions</li>
              <li>Communicating about your projects</li>
              <li>
                Sending updates and marketing materials (with your consent)
              </li>
              <li>Analyzing and improving our website performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Information Sharing
            </h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors and consultants</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Cookies and Tracking
            </h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to improve your
              browsing experience and analyze website traffic. You can control
              cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Your Rights
            </h2>
            <p className="leading-relaxed">You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Children's Privacy
            </h2>
            <p className="leading-relaxed">
              Our services are not intended for individuals under 18 years of
              age. We do not knowingly collect personal information from
              children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. International Data Transfers
            </h2>
            <p className="leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your country of residence. We ensure appropriate
              safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Changes to Privacy Policy
            </h2>
            <p className="leading-relaxed">
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this privacy policy or our data
              practices, please contact us at upvistadigital@gmail.com.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">Last updated: June 2025</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
