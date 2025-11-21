"use client";
import Head from 'next/head';
import { Hero } from "@/components/ui/animated-hero"
import { StunningServices } from "@/components/ui/StunningServices"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ServicesPage = ()=> {
  return (
    <>
      <Head>
        <title>Services | Digital Solutions & Technology Services | Upvista Digital</title>
        <meta name="description" content="Explore Upvista Digital's comprehensive digital services including web development, software development, AI automation, cloud solutions, digital marketing, and UI/UX design. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="Digital Services, Web Development Services, Software Development, AI Automation, Cloud Solutions, Digital Marketing, UI/UX Design, Technology Services, Digital Solutions" />
        <meta property="og:title" content="Services | Digital Solutions & Technology Services | Upvista Digital" />
        <meta property="og:description" content="Explore Upvista Digital's comprehensive digital services including web development, software development, AI automation, cloud solutions, and digital marketing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/Services" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Digital Solutions | Upvista Digital" />
        <meta name="twitter:description" content="Explore Upvista Digital's comprehensive digital services." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/Services" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Digital Services - Upvista Digital',
          'description': 'Comprehensive digital services including web development, software development, AI automation, cloud solutions, digital marketing, and UI/UX design.',
          'url': 'https://www.upvistadigital.com/Services',
          'provider': {
            '@type': 'Organization',
            'name': 'Upvista Digital',
            'url': 'https://www.upvistadigital.com',
            'logo': 'https://www.upvistadigital.com/assets/icon.PNG'
          },
          'serviceType': [
            'Web Development',
            'Software Development',
            'AI Automation',
            'Cloud Solutions',
            'Digital Marketing',
            'UI/UX Design'
          ],
          'areaServed': 'Worldwide',
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Digital Services Catalog',
            'itemListElement': [
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Web Development',
                  'url': 'https://www.upvistadigital.com/Services/web-development'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Software Development',
                  'url': 'https://www.upvistadigital.com/Services/software-development'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'AI Automation',
                  'url': 'https://www.upvistadigital.com/Services/ai-automation'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Cloud Solutions',
                  'url': 'https://www.upvistadigital.com/Services/cloud'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Digital Marketing',
                  'url': 'https://www.upvistadigital.com/Services/marketing'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'UI/UX Design',
                  'url': 'https://www.upvistadigital.com/Services/designing'
                }
              }
            ]
          },
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.upvistadigital.com'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Services',
                'item': 'https://www.upvistadigital.com/Services'
              }
            ]
          }
        }) }} />
      </Head>
      <Header />
      <div className="block">
        <Hero />
        <StunningServices/>
        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;