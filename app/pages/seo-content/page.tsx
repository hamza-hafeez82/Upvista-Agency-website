"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Users, Code, Globe, Zap, Shield, Target, TrendingUp } from "lucide-react";

export default function SEOContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-300 to-white bg-clip-text text-transparent">
            Upvista Digital - Pakistan&apos;s Leading Software Agency
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Upvista Digital is Pakistan&apos;s premier software agency specializing in web development, UI/UX design, AI automation, and digital marketing. We transform businesses with innovative digital solutions.
          </p>
        </div>
      </section>

      {/* About Upvista Digital */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">About Upvista Digital Agency</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-violet-300">Who We Are</h3>
              <p className="text-gray-300 mb-4">
                Upvista Digital is a leading software agency based in Lahore, Pakistan, dedicated to delivering exceptional digital solutions. Our team of expert developers, designers, and digital marketers work together to create innovative web applications, stunning UI/UX designs, and powerful digital marketing strategies.
              </p>
              <p className="text-gray-300">
                As one of Pakistan&apos;s most trusted software companies, we&apos;ve successfully completed over 500 projects for clients worldwide, earning a 4.8/5 rating for our quality and reliability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-violet-300">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                At Upvista Digital, our mission is to empower businesses with cutting-edge technology solutions that drive growth and success. We believe in creating digital experiences that not only look great but also deliver measurable results.
              </p>
              <p className="text-gray-300">
                Whether you&apos;re a startup looking to establish your digital presence or an enterprise seeking digital transformation, Upvista Digital has the expertise to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Upvista Digital Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl">
            <Code className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-300 mb-4">
              Upvista Digital offers comprehensive web development services including custom websites, web applications, e-commerce platforms, and progressive web apps. Our development team uses modern technologies like React, Next.js, and Node.js to create scalable, high-performance solutions.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Custom Website Development
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Web Application Development
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                E-commerce Solutions
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <Users className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-gray-300 mb-4">
              Our UI/UX design team at Upvista Digital creates intuitive, user-friendly interfaces that enhance user experience and drive engagement. We follow user-centered design principles to ensure your digital products are both beautiful and functional.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                User Interface Design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                User Experience Design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Prototyping & Wireframing
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <Globe className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
            <p className="text-gray-300 mb-4">
              Upvista Digital&apos;s digital marketing services help businesses increase their online visibility and reach their target audience effectively. Our comprehensive marketing strategies include SEO, social media marketing, content marketing, and PPC advertising.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Search Engine Optimization (SEO)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Social Media Marketing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Content Marketing
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <Zap className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">AI Automation</h3>
            <p className="text-gray-300 mb-4">
              Upvista Digital leverages artificial intelligence and automation to streamline business processes and improve efficiency. Our AI solutions include chatbots, process automation, and intelligent data analysis.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                AI-Powered Chatbots
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Process Automation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Data Analysis & Insights
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <Shield className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Website Maintenance</h3>
            <p className="text-gray-300 mb-4">
              Upvista Digital provides ongoing website maintenance and support services to ensure your digital assets remain secure, up-to-date, and perform optimally. Our maintenance packages include security updates, performance optimization, and 24/7 support.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Security Updates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Performance Optimization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                24/7 Technical Support
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <Target className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Branding & Identity</h3>
            <p className="text-gray-300 mb-4">
              Upvista Digital helps businesses establish strong brand identities through comprehensive branding services. From logo design to brand guidelines, we create cohesive brand experiences that resonate with your target audience.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Logo Design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Brand Guidelines
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                Visual Identity Design
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Upvista Digital */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Upvista Digital Agency?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
            <p className="text-gray-300 text-sm">
              Over 500 successful projects completed with a 4.8/5 client satisfaction rating
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-300 text-sm">
              Skilled developers, designers, and marketers with years of industry experience
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Results-Driven</h3>
            <p className="text-gray-300 text-sm">
              Focus on delivering measurable business outcomes and ROI for our clients
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pakistan Based</h3>
            <p className="text-gray-300 text-sm">
              Local expertise with global standards, serving clients worldwide from Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Upvista Digital Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-violet-300">Frontend Technologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React.js & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Vue.js</li>
                <li>• Angular</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-violet-300">Backend Technologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js</li>
                <li>• Python (Django, Flask)</li>
                <li>• PHP (Laravel)</li>
                <li>• Java (Spring Boot)</li>
                <li>• .NET Core</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-violet-300">Tools & Platforms</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS & Google Cloud</li>
                <li>• Docker & Kubernetes</li>
                <li>• Git & GitHub</li>
                <li>• Figma & Adobe Creative Suite</li>
                <li>• Google Analytics & SEO Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-violet-900 to-purple-900 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with Upvista Digital?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have chosen Upvista Digital for their software development, web design, and digital marketing needs. Let&apos;s discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/contactPage">
              <button className="bg-white text-violet-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center">
                Contact Upvista Digital <ArrowRight className="ml-2" size={18} />
              </button>
            </Link>
            <Link href="/pages/portfolio">
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-violet-600 transition-all">
                View Our Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 