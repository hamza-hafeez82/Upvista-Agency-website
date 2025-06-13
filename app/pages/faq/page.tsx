"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function FAQ() {
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
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">
          {/* Web Development Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Web Development
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What technologies do you use for web development?
                </h3>
                <p className="text-gray-300">
                  We use modern technologies including React, Next.js, Node.js,
                  and various other frameworks and tools depending on your
                  project requirements. Our stack is chosen to ensure optimal
                  performance, scalability, and maintainability.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How long does it take to develop a website?
                </h3>
                <p className="text-gray-300">
                  Project timelines vary based on complexity and requirements. A
                  basic website might take 2-4 weeks, while more complex
                  projects could take 2-3 months. We'll provide a detailed
                  timeline during our initial consultation.
                </p>
              </div>
            </div>
          </section>

          {/* UI/UX Design Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              UI/UX Design
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What is your design process?
                </h3>
                <p className="text-gray-300">
                  Our design process includes research, wireframing,
                  prototyping, and user testing. We focus on creating intuitive,
                  user-friendly interfaces that align with your brand and meet
                  your user needs.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Do you provide design revisions?
                </h3>
                <p className="text-gray-300">
                  Yes, we include a set number of revisions in our design
                  packages to ensure you are completely satisfied with the final
                  result. Additional revisions can be accommodated if needed.
                </p>
              </div>
            </div>
          </section>

          {/* Branding Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Branding</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What does a branding package include?
                </h3>
                <p className="text-gray-300">
                  Our branding packages typically include logo design, color
                  palette, typography, brand guidelines, and basic marketing
                  materials. We can customize packages based on your specific
                  needs.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How do you ensure brand consistency?
                </h3>
                <p className="text-gray-300">
                  We create comprehensive brand guidelines that cover all
                  aspects of your brand identity, ensuring consistency across
                  all platforms and materials.
                </p>
              </div>
            </div>
          </section>

          {/* AI Automation Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              AI Automation
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What types of automation solutions do you offer?
                </h3>
                <p className="text-gray-300">
                  We offer various automation solutions including chatbots,
                  workflow automation, data processing, and AI-powered
                  analytics. We can customize solutions based on your specific
                  business needs.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How can AI automation benefit my business?
                </h3>
                <p className="text-gray-300">
                  AI automation can improve efficiency, reduce costs, enhance
                  customer service, and provide valuable insights through data
                  analysis. We will help you identify the most beneficial
                  automation opportunities for your business.
                </p>
              </div>
            </div>
          </section>

          {/* General Questions Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              General Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How do you handle project pricing?
                </h3>
                <p className="text-gray-300">
                  We provide detailed quotes based on project scope and
                  requirements. Our pricing is transparent, and we offer various
                  packages to suit different budgets and needs.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What is your communication process?
                </h3>
                <p className="text-gray-300">
                  We maintain regular communication through email, video calls,
                  and project management tools. You will have a dedicated project
                  manager to ensure smooth communication throughout the project.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Contact CTA Section */}
        <section className="mt-12 text-center bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-6">
            We are here to help! Contact us for more information about our
            services.
          </p>
          <Link href="/pages/contactPage">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Contact Us
            </button>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}
