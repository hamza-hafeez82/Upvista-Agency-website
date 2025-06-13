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
              Welcome to Upvista Digital. These terms and conditions outline the
              rules and regulations for the use of our services and website. By
              accessing our services, you accept these terms and conditions in
              full.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Services
            </h2>
            <p className="leading-relaxed">
              Upvista Digital provides various digital services including web
              development, UI/UX design, branding, and AI automation solutions.
              All services are subject to these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All content, designs, and materials created by Upvista Digital
              remain our intellectual property until full payment is received.
              Clients are granted usage rights for the final deliverables as
              specified in the project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Payment Terms
            </h2>
            <p className="leading-relaxed">
              Payment terms are specified in individual project agreements. We
              require a deposit before commencing work, with the remaining
              balance due upon project completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Project Timeline
            </h2>
            <p className="leading-relaxed">
              Project timelines are estimates and may vary based on project
              complexity and client feedback. We commit to keeping clients
              informed of any significant changes to the timeline.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Client Responsibilities
            </h2>
            <p className="leading-relaxed">
              Clients are responsible for providing necessary information,
              content, and feedback in a timely manner. Delays in providing
              required materials may affect project timelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Confidentiality
            </h2>
            <p className="leading-relaxed">
              We maintain strict confidentiality regarding client information
              and project details. All client data is handled in accordance with
              our privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              Upvista Digital is not liable for any indirect, incidental, or
              consequential damages arising from the use of our services or
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms and conditions at any
              time. Changes will be effective immediately upon posting to our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Contact Information
            </h2>
            <p className="leading-relaxed">
              For any questions regarding these terms and conditions, please
              contact us at upvistadigital@gmail.com or through our contact
              page.
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
