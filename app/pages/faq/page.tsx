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
          {/* General Services Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              General Services
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What services does Upvista Digital offer?
                </h3>
                <p className="text-gray-300">
                  We offer comprehensive digital solutions including web development, UI/UX design, branding, AI automation, digital marketing, website maintenance, landing page development, and consultation services. We also have an upcoming digital marketplace for creators and businesses.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How do you handle project pricing?
                </h3>
                <p className="text-gray-300">
                  We provide transparent, detailed quotes based on project scope and requirements. We require a 50% deposit before starting work, with the remaining balance due upon completion. Our pricing is competitive and we offer various packages to suit different budgets.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What is your communication process?
                </h3>
                <p className="text-gray-300">
                  We maintain regular communication through email, video calls, and project management tools. You&apos;ll have a dedicated project manager who ensures smooth communication throughout the project. We provide regular updates and are always available for questions.
                </p>
              </div>
            </div>
          </section>

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
                  We use modern, cutting-edge technologies including React, Next.js, Node.js, TypeScript, and various other frameworks. Our tech stack is chosen based on your specific project requirements to ensure optimal performance, scalability, and maintainability.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How long does it take to develop a website?
                </h3>
                <p className="text-gray-300">
                  Project timelines vary based on complexity: Basic websites (2-4 weeks), Medium complexity (1-2 months), Complex projects (2-3 months). We provide detailed timelines during our initial consultation and keep you updated throughout the process.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Do you provide website maintenance after launch?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer comprehensive website maintenance packages that include security updates, performance optimization, content updates, and technical support. This ensures your website remains secure, fast, and up-to-date.
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
                  Our design process includes user research, wireframing, prototyping, user testing, and final design implementation. We focus on creating intuitive, user-friendly interfaces that align with your brand and meet your business objectives.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Do you provide design revisions?
                </h3>
                <p className="text-gray-300">
                  Yes, we include a set number of revisions in our design packages to ensure complete satisfaction. We work collaboratively with you to refine designs until they perfectly match your vision and requirements.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Do you create responsive designs?
                </h3>
                <p className="text-gray-300">
                  Absolutely! All our designs are fully responsive and optimized for all devices including desktops, tablets, and mobile phones. We ensure your website looks and functions perfectly across all screen sizes.
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
                  Our branding packages include logo design, color palette, typography, brand guidelines, business cards, social media templates, and basic marketing materials. We can customize packages based on your specific needs and budget.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How do you ensure brand consistency?
                </h3>
                <p className="text-gray-300">
                  We create comprehensive brand guidelines that cover all aspects of your brand identity including logo usage, color specifications, typography, and design principles. This ensures consistency across all platforms and materials.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Can you help with rebranding existing businesses?
                </h3>
                <p className="text-gray-300">
                  Yes, we specialize in rebranding existing businesses. We start by analyzing your current brand, understanding your goals, and then create a new brand identity that better represents your business and appeals to your target audience.
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
                  We offer various AI automation solutions including chatbots, workflow automation, data processing, AI-powered analytics, customer service automation, and process optimization. We customize solutions based on your specific business needs.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How can AI automation benefit my business?
                </h3>
                <p className="text-gray-300">
                  AI automation can significantly improve efficiency, reduce operational costs, enhance customer service, provide valuable insights through data analysis, and streamline business processes. We help identify the most beneficial automation opportunities for your specific business.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Is AI automation expensive to implement?
                </h3>
                <p className="text-gray-300">
                  AI automation costs vary based on complexity and scope. We offer scalable solutions that can start small and grow with your business. The ROI typically justifies the investment through increased efficiency and cost savings.
                </p>
              </div>
            </div>
          </section>

          {/* Digital Marketing Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Digital Marketing
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What digital marketing services do you provide?
                </h3>
                <p className="text-gray-300">
                  We offer comprehensive digital marketing services including SEO optimization, social media marketing, content marketing, email campaigns, PPC advertising, and marketing strategy development. We create customized marketing plans to achieve your business goals.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How long does it take to see results from SEO?
                </h3>
                <p className="text-gray-300">
                  SEO is a long-term strategy that typically shows results within 3-6 months. However, we provide regular reports and analytics to track progress and make adjustments to improve performance continuously.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Do you provide marketing analytics and reporting?
                </h3>
                <p className="text-gray-300">
                  Yes, we provide comprehensive analytics and regular reporting on all marketing campaigns. This includes performance metrics, ROI analysis, and recommendations for optimization to ensure maximum effectiveness.
                </p>
              </div>
            </div>
          </section>

          {/* Marketplace Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Upvista Marketplace
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What is the Upvista Marketplace?
                </h3>
                <p className="text-gray-300">
                  The Upvista Marketplace is our upcoming digital platform that will connect creators, designers, developers, and businesses. It will offer digital products, templates, services, and tools for the digital community.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  When will the marketplace launch?
                </h3>
                <p className="text-gray-300">
                  Our marketplace is scheduled to launch in July 2025. You can join our waitlist to be notified when we go live and get early access to exclusive features and products.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What types of products will be available?
                </h3>
                <p className="text-gray-300">
                  The marketplace will feature design templates, code components, marketing tools, website templates, AI tools, and expert services from verified creators and agencies.
                </p>
              </div>
            </div>
          </section>

          {/* Project Management Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Project Management
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How do you manage projects?
                </h3>
                <p className="text-gray-300">
                  We use modern project management tools and methodologies to ensure efficient delivery. Each project has a dedicated project manager who coordinates with our team and keeps you updated on progress, milestones, and any issues.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What happens if I need changes during development?
                </h3>
                <p className="text-gray-300">
                  We understand that requirements can evolve. We include a reasonable number of revisions in our packages. For significant changes, we&apos;ll discuss the impact on timeline and budget to ensure transparency.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Do you provide training and support after launch?
                </h3>
                <p className="text-gray-300">
                  Yes, we provide comprehensive training and documentation for your team. We also offer ongoing support packages to ensure your website or application continues to perform optimally.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Support Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Technical Support
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  What kind of support do you provide?
                </h3>
                <p className="text-gray-300">
                  We provide comprehensive technical support including bug fixes, performance optimization, security updates, content updates, and emergency support. Our support packages are designed to keep your digital assets running smoothly.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  How quickly do you respond to support requests?
                </h3>
                <p className="text-gray-300">
                  We typically respond to support requests within 24 hours for standard issues and within 4 hours for urgent matters. Our priority is to ensure your business operations are not disrupted.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Do you provide hosting and domain services?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer reliable hosting solutions and can help with domain registration and management. We recommend hosting options that provide optimal performance, security, and scalability for your specific needs.
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
            We&apos;re here to help! Contact us for more information about our services, pricing, or to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Contact Us
            </button>
          </Link>
            <Link href="/pages/marketplace">
              <button className="px-8 py-3 border border-purple-400 text-white rounded-lg hover:bg-purple-900 hover:bg-opacity-20 transition-colors">
                Join Marketplace Waitlist
              </button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
