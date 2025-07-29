"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MarketingServices from "@/components/MarketingServices";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Reviews";
import InfiniteSliderBasic from "@/components/InfinityCarousel";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";
import ValueProposition from "@/components/ValueProposition";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Upvista Digital | Transforming Lives Through Digital Innovation</title>
        <meta name="description" content="Upvista Digital is more than an agency, we are a movement. We empower visionaries, nurture talent, and build lasting relationships. Join us to co-create the digital future." />
        <meta name="keywords" content="Upvista, Upvista Digital, upvista, upvista digital Digital Agency, Web Development, AI Training, Software Training, Community, Digital Transformation, Pakistan, Global, Innovation, Collaboration, Research, Empowerment" />
        <meta property="og:title" content="Upvista Digital | Transforming Lives Through Digital Innovation" />
        <meta property="og:description" content="Upvista Digital is more than an agency, we are a movement. We empower visionaries, nurture talent, and build lasting relationships. Join us to co-create the digital future." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upvistadigital.com/" />
        <meta property="og:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Upvista Digital | Transforming Lives Through Digital Innovation" />
        <meta name="twitter:description" content="Upvista Digital is more than an agency, we are a movement. We empower visionaries, nurture talent, and build lasting relationships. Join us to co-create the digital future." />
        <meta name="twitter:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <link rel="canonical" href="https://upvistadigital.com/" />
        {/* Organization Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Upvista Digital',
          url: 'https://upvistadigital.com/',
          logo: 'https://upvistadigital.com/assets/u.png',
          sameAs: [
            'https://www.linkedin.com/in/hamza-hafeez-b0233731a',
            'https://www.facebook.com/share/1DXUJFcwit/',
            'https://x.com/Upvista_Digital?s=09',
            'https://www.instagram.com/upvista_digital?igsh=aTJ1dDFqMXdlMTBk',
          ],
          description: 'Upvista Digital is a visionary digital powerhouse and movement, empowering visionaries, nurturing talent, and building lasting relationships through innovation, research, and collaboration.',
          contactPoint: [{
            '@type': 'ContactPoint',
            email: 'info@upvistadigital.com',
            contactType: 'customer support',
          }],
        }) }} />
      </Head>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="infiniteSlider">
        <InfiniteSliderBasic />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <MarketingServices />
      </div>
      <div id="portfolio">
        {/* HeroParallax removed for a cleaner homepage */}
      </div>
      <div
        id="callToAction"
        className="h-screen w-full overflow-hidden items-center justify-center"
      >
        <Vortex
          particleCount={700}
          baseHue={220}
          backgroundColor="#000000"
          className="text-white flex items-center justify-center"
          containerClassName="h-full w-full"
          baseSpeed={0.1}
          rangeSpeed={1.5}
          baseRadius={1}
          rangeRadius={2}
        >
          <div className="relative w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center mt-20">
            {/* Modern gradient badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm border border-indigo-500/20">
              <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
              Web Design Experts
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
              Establish Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Digital Presence
              </span>{" "}
              with Confidence
            </h1>

            {/* Description with increased readability */}
            <p className="text-gray-300 text-center text-lg max-w-2xl mb-10 leading-relaxed">
              Upvista creates powerful digital experiences that don&apos;t just look
              great — they deliver measurable growth and lasting impact.
            </p>

            {/* Modern CTA buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/pages/services">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium overflow-hidden shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    Get Started Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </Link>

              <Link href="/pages/portfolio">
                <button className="px-8 py-4 border border-indigo-500/30 rounded-full text-indigo-300 font-medium backdrop-blur-sm hover:bg-indigo-500/10 transition-all duration-300">
                  View Our Work
                </button>
              </Link>
            </div>

            {/* Stats section for social proof */}

            {/* Floating decorative elements */}
            <div className="absolute top-0 -left-20 w-40 h-40 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
            <div className="absolute -bottom-8 left-20 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
            <div className="absolute top-0 -right-20 w-40 h-40 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
          </div>
        </Vortex>
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <ValueProposition />
      <Footer />
    </>
  );
}
