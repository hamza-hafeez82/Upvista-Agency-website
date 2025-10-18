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
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
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
        className={`h-screen w-full overflow-hidden items-center justify-center relative ${
          isDark 
            ? 'bg-gradient-to-br from-black via-black/80 to-purple-950'
            : 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100'
        }`}
      >
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/20' : 'bg-gradient-to-br from-purple-400/25 to-pink-500/20'
          }`}></div>
          <div className={`absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl ${
            isDark ? 'bg-pink-600/20' : 'bg-gradient-to-br from-pink-500/25 to-purple-600/20'
          }`}></div>
          <div className={`absolute top-1/4 left-1/3 h-80 w-80 rounded-full blur-3xl ${
            isDark ? 'bg-violet-800/15' : 'bg-gradient-to-br from-purple-400/20 to-pink-400/15'
          }`}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className={`absolute inset-0 ${
          isDark 
            ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"
            : "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMTUsMjMsNDIsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDE1LDIzLDQyLDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10"
        }`}></div>

        <Vortex
          particleCount={700}
          baseHue={220}
          backgroundColor={isDark ? "#000000" : "transparent"}
          className={`flex items-center justify-center ${isDark ? 'text-white' : 'text-gray-900'}`}
          containerClassName="h-full w-full relative z-10"
          baseSpeed={0.1}
          rangeSpeed={1.5}
          baseRadius={1}
          rangeRadius={2}
        >
          <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center mt-16 sm:mt-20">
            {/* Modern gradient badge */}
        <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm ${
          isDark 
            ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 border border-purple-500/20'
            : 'bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white border border-purple-500/70 shadow-lg'
        }`}>
              <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                isDark ? 'bg-purple-400' : 'bg-white'
              }`}></span>
              {t('home.webDesign.title')}
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 leading-tight text-white">
              {t('home.webDesign.subtitle')}
            </h1>

            {/* Description with increased readability */}
            <p className="text-center text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed text-gray-300 px-4">
              {t('home.webDesign.description')}
            </p>

            {/* Modern CTA buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Link href="/Services/web-development">
                <button className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium overflow-hidden shadow-lg transition-all duration-300 w-full sm:w-auto ${
                  isDark 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-500/20 hover:shadow-purple-500/40'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-500/20 hover:shadow-purple-500/40'
                }`}>
                  <span className={`absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-700 to-pink-700'
                      : 'bg-gradient-to-r from-purple-700 to-pink-700'
                  }`}></span>
                  <span className="relative flex items-center justify-center">
                    {t('home.webDesign.getStarted')}
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

              <Link href="/Services/software-development">
                <button className={`px-6 sm:px-8 py-3 sm:py-4 border rounded-full font-medium backdrop-blur-sm transition-all duration-300 w-full sm:w-auto ${
                  isDark 
                    ? 'border-purple-500/30 text-purple-300 hover:bg-purple-500/10'
                    : 'border-purple-300/50 text-purple-700 hover:bg-purple-100/50'
                }`}>
                  {t('home.webDesign.viewWork')}
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
