"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/messaging/thread/new/",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/3320486955",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/direct/t/17842162812514678",
      color: "bg-pink-700",
      hoverColor: "hover:bg-pink-800",
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "upvistadigital@gmail.com",
      href: "mailto:upvistadigital@gmail.com",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+92 (0) 3294 022494",
      href: "tel:+923294022494",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      value: "Lahore, Pakistan",
    },
  ];

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg">
            Get in touch with us to discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </span>
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-gray-800/50 group-hover:bg-purple-500/20 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-purple-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Connect With Us
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} ${link.hoverColor} p-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 group`}
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="text-white font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
