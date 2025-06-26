"use client";

import { useState } from "react";
import {
  ArrowRight,
  Code,
  Layout,
  Paintbrush,
  Search,
  Settings,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function ITServicesBlog() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Static/Vitrine Websites",
      icon: <Layout className="mb-4 text-violet-300" size={32} />,
      description:
        "Professional websites that showcase your brand identity and core offerings with clarity and impact.",
      advantages: [
        "Fast loading times and excellent SEO performance",
        "Cost-effective development and maintenance",
        "Secure and reliable web presence",
        "Easy to update content when needed",
      ],
      businessValue:
        "Establish a professional online presence that builds credibility and attracts new clients 24/7, effectively serving as your digital storefront.",
    },
    {
      title: "Landing Pages",
      icon: <Search className="mb-4 text-violet-300" size={32} />,
      description:
        "Conversion-focused pages designed to turn visitors into leads or customers through strategic design and compelling messaging.",
      advantages: [
        "Higher conversion rates for marketing campaigns",
        "A/B testing capabilities to optimize performance",
        "Focused messaging for specific products or services",
        "Integration with analytics and CRM systems",
      ],
      businessValue:
        "Maximize ROI on marketing campaigns by capturing and converting qualified leads with targeted, high-converting landing pages.",
    },
    {
      title: "Branding Services",
      icon: <Paintbrush className="mb-4 text-violet-300" size={32} />,
      description:
        "Comprehensive brand identity development that communicates your company&apos;s values, personality, and unique selling propositions.",
      advantages: [
        "Cohesive visual identity across all touchpoints",
        "Memorable brand assets that resonate with target audiences",
        "Strategic positioning in your competitive landscape",
        "Guidelines for consistent brand application",
      ],
      businessValue:
        "Build brand recognition and customer loyalty by establishing a distinctive, professional identity that sets you apart from competitors.",
    },
    {
      title: "UI/UX Design",
      icon: <MessageSquare className="mb-4 text-violet-300" size={32} />,
      description:
        "User-centered design that creates intuitive, enjoyable digital experiences while achieving your business objectives.",
      advantages: [
        "Higher user engagement and satisfaction rates",
        "Reduced bounce rates and increased time on site",
        "Simplified user journeys that guide visitors to conversion points",
        "Accessibility compliance and inclusive design",
      ],
      businessValue:
        "Enhance customer satisfaction and retention with intuitive interfaces that make interaction with your digital products effortless and enjoyable.",
    },
    {
      title: "Website Maintenance",
      icon: <Settings className="mb-4 text-violet-300" size={32} />,
      description:
        "Ongoing support, optimization, and updates that keep your website secure, fast, and aligned with evolving business needs.",
      advantages: [
        "Proactive security monitoring and updates",
        "Performance optimization for speed and responsiveness",
        "Regular content and functionality updates",
        "Technical support and problem resolution",
      ],
      businessValue:
        "Protect your digital investment while continually improving performance, security, and user experience to maintain competitive advantage.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back to Home Arrow */}
      <Link href="/" className="absolute left-6 top-6 z-20 group">
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-500 transition-transform duration-300 group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Back to Home
          </span>
        </div>
      </Link>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 px-4 py-1 bg-violet-900 bg-opacity-30 rounded-full">
            <span className="text-violet-300 font-medium">
              Elevate Your Digital Presence
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-300 to-white bg-clip-text text-transparent p-4 x">
            Transform Your Business Through Strategic Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
            We build powerful digital experiences that elevate your brand,
            engage your audience, and drive measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/pages/services">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center">
                Explore Our Services <ArrowRight className="ml-2" size={18} />
              </button>
            </Link>
            <Link href="/pages/portfolio">
              <button className="border border-violet-400 hover:bg-violet-900 hover:bg-opacity-20 text-white px-8 py-3 rounded-lg font-medium transition-all">
                See Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-300 font-medium">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Comprehensive Digital Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer end-to-end digital solutions designed to help businesses
            establish a strong online presence and achieve their growth
            objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <div className="bg-gray-900 rounded-xl p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Our Services
            </h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between mb-2 ${
                      activeService === index
                        ? "bg-violet-900 bg-opacity-30 text-violet-300"
                        : "hover:bg-gray-800 text-gray-300"
                    }`}
                  >
                    <span>{service.title}</span>
                    <ChevronRight
                      size={18}
                      className={
                        activeService === index
                          ? "text-violet-300"
                          : "text-gray-500"
                      }
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Details */}
          <div className="md:col-span-2 bg-gray-900 rounded-xl p-8">
            <div className="mb-6">
              {services[activeService].icon}
              <h3 className="text-2xl font-bold text-violet-300 mb-2">
                {services[activeService].title}
              </h3>
              <p className="text-gray-300 mb-6">
                {services[activeService].description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Key Advantages</h4>
              <ul className="space-y-2">
                {services[activeService].advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-violet-900 bg-opacity-30 rounded-full">
                      <div className="w-2 h-2 bg-violet-300 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">Business Value</h4>
              <p className="text-gray-300 bg-gray-800 p-4 rounded-lg border-l-4 border-violet-400">
                {services[activeService].businessValue}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 md:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-violet-300 font-medium">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              The Results We Deliver
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We translate technical excellence into tangible business outcomes
              that drive growth and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center bg-violet-900 bg-opacity-30 rounded-lg mb-4">
                <Code className="text-violet-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Technical Excellence
              </h3>
              <p className="text-gray-300">
                Cutting-edge development practices and technologies that ensure
                scalable, maintainable, and future-proof digital solutions.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center bg-violet-900 bg-opacity-30 rounded-lg mb-4">
                <Layout className="text-violet-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Approach</h3>
              <p className="text-gray-300">
                We align every digital initiative with your business objectives
                to ensure measurable ROI and meaningful impact.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center bg-violet-900 bg-opacity-30 rounded-lg mb-4">
                <MessageSquare className="text-violet-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                User-Centered Design
              </h3>
              <p className="text-gray-300">
                Exceptional user experiences that delight your customers,
                increase engagement, and drive conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-violet-900 to-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your
            business goals and stand out in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/contactPage">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center">
                Get in Touch <ArrowRight className="ml-2" size={18} />
              </button>
            </Link>
            <Link href="/pages/portfolio">
              <button className="border border-white hover:bg-white hover:text-black hover:bg-opacity-10 text-white px-8 py-3 rounded-lg font-medium transition-all">
                View Our Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Upvista Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
