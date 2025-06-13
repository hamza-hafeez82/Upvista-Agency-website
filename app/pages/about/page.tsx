"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import Logoimg from "../../../assets/u.png";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Back to Home Arrow */}
      <Link href="/" className="absolute left-6 top-6 z-20 group">
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-600 p-0.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/40 group-hover:scale-110">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-violet-400 transition-transform duration-300 group-hover:-translate-x-0.5"
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
          <span className="text-sm font-medium text-violet-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Back to Home
          </span>
        </div>
      </Link>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative h-44 w-44">
              <Image
                src={Logoimg}
                alt="Upvista Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Upvista Digital
          </h1>
          <p className="text-gray-300 text-lg">
            Empowering businesses with innovative digital solutions
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-gray-300">
            At Upvista Digital, we&apos;re dedicated to transforming businesses
            through innovative digital solutions. We combine technical expertise
            with creative thinking to deliver exceptional results that drive
            growth and success for our clients.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Web Development
              </h3>
              <p className="text-gray-300">
                Custom websites and web applications built with cutting-edge
                technologies to meet your specific needs.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">
                UI/UX Design
              </h3>
              <p className="text-gray-300">
                User-centered design solutions that create engaging and
                intuitive digital experiences.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Branding
              </h3>
              <p className="text-gray-300">
                Comprehensive branding strategies that help establish and
                strengthen your brand identity.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">
                AI Automation
              </h3>
              <p className="text-gray-300">
                Intelligent automation solutions that streamline processes and
                enhance efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Expertise
              </h3>
              <p className="text-gray-300">
                Our team consists of skilled professionals with extensive
                experience in their respective fields.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Innovation
              </h3>
              <p className="text-gray-300">
                We stay ahead of the curve by embracing the latest technologies
                and industry trends.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Client Focus
              </h3>
              <p className="text-gray-300">
                We prioritize your success and work closely with you to achieve
                your business goals.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6">
            Let&apos;s discuss how we can help transform your digital presence
            and drive your business forward.
          </p>
          <Link href="/pages/contactPage">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
