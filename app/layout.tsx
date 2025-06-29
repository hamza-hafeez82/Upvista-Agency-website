import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import "./globals.css";
import { Dancing_Script } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Upvista Digital - A cutting edge software Agency",
  description:
    "Upvista Digital is a visionary digital innovation powerhouse that transcends traditional software development. We architect the future by merging cutting-edge AI, quantum-ready technologies, and human-centric design to create digital experiences that don't just solve problems—they redefine possibilities. From blockchain ecosystems to AI-driven transformations, we're building tomorrow's digital landscape today.",
  keywords:
    "upvista, upvista digital, upvista digital agency,Upvista Digital, Upvista, upvista software company, upvista web development, upvista pakistan, upvista digital solutions, upvista digital services, upvista digital agency pakistan, upvista software house, upvista digital marketing, upvista ui ux design, upvista ai automation, upvista branding, upvista website development, upvista mobile apps, upvista digital transformation, upvista tech solutions, upvista digital innovation, upvista software development, upvista digital agency lahore, upvista digital company, upvista digital studio, upvista digital experts, upvista digital consultants, upvista digital partners, upvista digital marketplace, upvista digital community, upvista digital blog, upvista digital portfolio, upvista digital testimonials, software agency pakistan, web development company pakistan, ui ux design pakistan, digital marketing pakistan, software house lahore, tech agency pakistan, digital solutions pakistan, software development pakistan, website development pakistan, mobile app development pakistan, ai automation pakistan, branding agency pakistan, digital transformation pakistan, tech solutions pakistan, software engineers pakistan, full stack developers pakistan, startup tech pakistan, software community pakistan, developers community pakistan, designers community pakistan, best software house pakistan, best software agency pakistan, trustworthy software agencies pakistan, scalable system engineering pakistan",
  authors: [{ name: "Hamza Hafeez" }],
  creator: "Hamza Hafeez",
  publisher: "Hamza Hafeez",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://upvistadigital.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Upvista Digital - A cutting edge software Agency",
    description:
      "Upvista Digital is a visionary digital innovation powerhouse that transcends traditional software development. We architect the future by merging cutting-edge AI, quantum-ready technologies, and human-centric design to create digital experiences that don't just solve problems—they redefine possibilities. From blockchain ecosystems to AI-driven transformations, we're building tomorrow's digital landscape today.",
    url: "https://upvistadigital.com",
    siteName: "Upvista Digital",
    images: [
      {
        url: "/assets/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Upvista Digital - Web Development & Software Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upvista Digital - A cutting edge software Agency",
    description: "Upvista Digital is a visionary digital innovation powerhouse that transcends traditional software development. We architect the future by merging cutting-edge AI, quantum-ready technologies, and human-centric design.",
    images: ["/assets/hero.jpeg"],
    creator: "@Hamza_Hafeez",
    site: "@Upvista_Digital",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#240046" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.upvistadigital.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Upvista Digital – Web & Software Solutions" />
        <meta name="twitter:description" content="We build stunning websites, intuitive user experiences, and scalable apps for startups and enterprises. Elevate your digital presence with Upvista." />
        <meta name="twitter:image" content="/assets/hero.jpeg" />
        <meta name="twitter:site" content="@Upvista_Digital" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Upvista Digital",
              "alternateName": ["Upvista", "Upvista Digital Agency", "Upvista Software Company"],
              "url": "https://upvistadigital.com",
              "logo": "https://upvistadigital.com/assets/icon.PNG",
              "image": "https://upvistadigital.com/assets/hero.jpeg",
              "description": "Upvista Digital is Pakistan's premier software agency specializing in web development, UI/UX design, AI automation, and digital marketing. We transform businesses with innovative digital solutions.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "provider": {
                "@type": "Organization",
                "name": "Upvista Digital",
                "url": "https://upvistadigital.com",
                "logo": "https://upvistadigital.com/assets/icon.PNG",
                "sameAs": [
                  "https://www.facebook.com/share/1ZTVBZV6rT/",
                  "https://x.com/Upvista_Digital/",
                  "https://www.instagram.com/upvista_digital/",
                  "https://github.com/Upvista",
                  "https://discord.com/invite/RfJmxZPNRR",
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Japanese", "Urdu"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lahore",
                  "addressRegion": "Punjab",
                  "addressCountry": "PK",
                  "postalCode": "54000"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "31.5204",
                  "longitude": "74.3587"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Pakistan"
                },
                "serviceArea": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": "31.5204",
                    "longitude": "74.3587"
                  },
                  "geoRadius": "50000"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Custom website development and web applications"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "UI/UX Design",
                      "description": "User interface and user experience design"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing",
                      "description": "SEO, social media marketing, and digital advertising"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Automation",
                      "description": "Artificial intelligence and automation solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Branding",
                      "description": "Brand identity and visual design services"
                    }
                  }
                ]
              }
            }),
          }}
        />
        
        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Upvista Digital",
              "alternateName": ["Upvista", "Upvista Digital Agency"],
              "description": "Leading software agency in Pakistan specializing in web development, UI/UX design, and digital marketing",
              "url": "https://upvistadigital.com",
              "telephone": "+92-332-0486955",
              "email": "upvistadigital@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lahore, Pakistan",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "postalCode": "54000",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "31.5204",
                "longitude": "74.3587"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "priceRange": "$$",
              "currenciesAccepted": "PKR, USD",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "areaServed": "Pakistan",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "31.5204",
                  "longitude": "74.3587"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development Services",
                      "description": "Custom website and web application development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "UI/UX Design Services",
                      "description": "User interface and experience design"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing Services",
                      "description": "SEO, social media, and digital advertising"
                    }
                  }
                ]
              }
            }),
          }}
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-FNDXWSLW30`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FNDXWSLW30');
          `}
        </Script>
        {/* Enhanced Organization Schema for Knowledge Panel */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Upvista Digital",
              "alternateName": ["Upvista", "Upvista Digital Agency", "Upvista Software Company"],
              "url": "https://upvistadigital.com",
              "logo": "https://upvistadigital.com/assets/icon.PNG",
              "image": "https://upvistadigital.com/assets/hero.jpeg",
              "description": "Upvista Digital is a visionary digital innovation powerhouse that transcends traditional software development. We architect the future by merging cutting-edge AI, quantum-ready technologies, and human-centric design to create digital experiences that don't just solve problems—they redefine possibilities. From blockchain ecosystems to AI-driven transformations, we're building tomorrow's digital landscape today.",
              "foundingDate": "2023",
              "foundingLocation": {
                "@type": "Place",
                "name": "Lahore, Pakistan",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lahore",
                  "addressRegion": "Punjab",
                  "addressCountry": "PK"
                }
              },
              "founder": {
                "@type": "Person",
                "name": "Hamza Hafeez",
                "jobTitle": "Founder & CEO",
                "description": "Founder and CEO of Upvista Digital, a visionary digital innovation powerhouse that transcends traditional software development. Hamza leads the company's mission to architect the future through cutting-edge AI, quantum-ready technologies, and human-centric design.",
                "image": "https://upvistadigital.com/assets/hamza pic.jpg",
                "sameAs": [
                  "https://linkedin.com/in/hamza-hafeez-upvista",
                  "https://twitter.com/HamzaHafeez_",
                  "https://github.com/hamzahafeez"
                ]
              },
              "founders": [
                {
                  "@type": "Person",
                  "name": "Hamza Hafeez",
                  "jobTitle": "Founder & CEO",
                  "description": "Founder and CEO of Upvista Digital"
                }
              ],
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "25",
                "unitText": "employees"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lahore, Pakistan",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "postalCode": "54000",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "31.5204",
                "longitude": "74.3587"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "telephone": "+92-332-0486955",
                  "email": "upvistadigital@gmail.com",
                  "availableLanguage": ["English", "Japanese", "Urdu"],
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "telephone": "+92-332-0486955",
                  "email": "upvistadigital@gmail.com"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/share/1ZTVBZV6rT/",
                "https://x.com/Upvista_Digital/",
                "https://www.instagram.com/upvista_digital/",
                "https://github.com/Upvista",
                "https://discord.com/invite/RfJmxZPNRR",
                "https://linkedin.com/company/upvista-digital",
                "https://youtube.com/@upvistadigital"
              ],
              "knowsAbout": [
                "Web Development",
                "UI/UX Design",
                "Digital Marketing",
                "AI Automation",
                "Software Development",
                "Mobile App Development",
                "E-commerce Solutions",
                "Cloud Computing",
                "DevOps",
                "Blockchain Technology"
              ],
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Pakistan"
                },
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Country",
                  "name": "Canada"
                },
                {
                  "@type": "Country",
                  "name": "Australia"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "31.5204",
                  "longitude": "74.3587"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Custom website development and web applications using modern technologies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "UI/UX Design",
                      "description": "User interface and user experience design for digital products"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing",
                      "description": "SEO, social media marketing, and digital advertising services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Automation",
                      "description": "Artificial intelligence and automation solutions for businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile App Development",
                      "description": "iOS and Android mobile application development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Solutions",
                      "description": "Online store development and e-commerce platforms"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "0"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Ahmed Khan"
                  },
                  "reviewBody": "Upvista Digital delivered an exceptional website that exceeded our expectations. Their team is professional and highly skilled."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Ahmed"
                  },
                  "reviewBody": "Outstanding digital marketing services. Our online presence has improved significantly since working with Upvista Digital."
                }
              ],
              "employee": [
                {
                  "@type": "Person",
                  "name": "Hamza Hafeez",
                  "jobTitle": "Founder & CEO",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Upvista Digital"
                  }
                },
                {
                  "@type": "Person",
                  "name": "Development Team",
                  "jobTitle": "Software Engineers",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Upvista Digital"
                  }
                },
                {
                  "@type": "Person",
                  "name": "Design Team",
                  "jobTitle": "UI/UX Designers",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Upvista Digital"
                  }
                }
              ],
              "department": [
                {
                  "@type": "Organization",
                  "name": "Development Department",
                  "description": "Web and mobile application development team"
                },
                {
                  "@type": "Organization",
                  "name": "Design Department",
                  "description": "UI/UX design and creative services team"
                },
                {
                  "@type": "Organization",
                  "name": "Marketing Department",
                  "description": "Digital marketing and SEO services team"
                }
              ],
              "alumni": [
                {
                  "@type": "Person",
                  "name": "Former Team Members",
                  "description": "Alumni who have contributed to Upvista Digital's success"
                }
              ],
              "event": [
                {
                  "@type": "Event",
                  "name": "Upvista Digital Community Meetup",
                  "description": "Monthly community meetup for developers and designers",
                  "startDate": "2025-07-01",
                  "endDate": "2026-12-01",
                  "location": {
                    "@type": "Place",
                    "name": "Lahore, Pakistan"
                  }
                }
              ],
              "brand": {
                "@type": "Brand",
                "name": "Upvista Digital",
                "description": "Leading software agency brand in Pakistan",
                "logo": "https://upvistadigital.com/assets/icon.PNG"
              },
              "parentOrganization": {
                "@type": "Organization",
                "name": "Upvista Group"
              },
              "subOrganization": [
                {
                  "@type": "Organization",
                  "name": "Upvista Digital Studio",
                  "description": "Creative design and development studio"
                },
                {
                  "@type": "Organization",
                  "name": "Upvista Digital Academy",
                  "description": "Training and education division"
                }
              ]
            }),
          }}
        />
        {/* Person Schema for Founder/CEO */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hamza Hafeez",
              "alternateName": ["Hamza Hafeez Upvista", "Hamza Hafeez Digital"],
              "jobTitle": "Founder & CEO",
              "worksFor": {
                "@type": "Organization",
                "name": "Upvista Digital",
                "url": "https://upvistadigital.com"
              },
              "description": "Founder and CEO of Upvista Digital, a visionary digital innovation powerhouse that transcends traditional software development. Hamza leads the company's mission to architect the future through cutting-edge AI, quantum-ready technologies, and human-centric design.",
              "image": "https://upvistadigital.com/assets/hamza pic.jpg",
              "url": "https://upvistadigital.com",
              "birthDate": "2006",
              "birthPlace": {
                "@type": "Place",
                "name": "Lahore, Pakistan"
              },
              "nationality": "Pakistani",
              "alumniOf": {
                "@type": "Organization",
                "name": "National University of Modern Languages"
              },
              "knowsAbout": [
                "Web Development",
                "Software Engineering",
                "Digital Marketing",
                "AI & Machine Learning",
                "UI/UX Design",
                "Business Strategy",
                "Team Leadership",
                "Project Management"
              ],
              "sameAs": [
                "https://linkedin.com/in/hamza-hafeez-upvista",
                "https://twitter.com/HamzaHafeez_",
                "https://github.com/hamzahafeez",
                "https://facebook.com/hamza.hafeez.upvista",
                "https://instagram.com/hamza_hafeez_upvista"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "addressCountry": "PK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "business",
                "email": "hmza.hb82@gmail.com",
                "telephone": "+92-329-4022494"
              },
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Engineer",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "Lahore, Pakistan"
                }
              },
              "memberOf": [
                {
                  "@type": "Organization",
                  "name": "Upvista Digital",
                    "url": "https://upvistadigital.com"
                  },
               
              ],
              "funder": [
                {
                  "@type": "Organization",
                  "name": "Upvista Digital",
                  "url": "https://upvistadigital.com"
                }
              ],
              "publisher": {
                "@type": "Organization",
                "name": "Upvista Digital"
              },
              "author": [
                {
                  "@type": "Article",
                  "name": "The Future of Digital Transformation in Pakistan",
                  "url": "https://upvistadigital.com/blog/digital-transformation-pakistan"
                },
                {
                  "@type": "Article",
                  "name": "Building Successful Software Teams",
                  "url": "https://upvistadigital.com/blog/building-software-teams"
                }
              ],
              
            }),
          }}
        />
        {/* FAQ Schema for Knowledge Panel */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Upvista Digital provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upvista Digital provides comprehensive digital services including web development, UI/UX design, digital marketing, AI automation, mobile app development, and e-commerce solutions. We specialize in creating innovative digital solutions for businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Upvista Digital located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upvista Digital is headquartered in Lahore, Pakistan. We serve clients globally with our main office located in Lahore, Punjab, Pakistan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is the founder of Upvista Digital?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hamza Hafeez is the Founder and CEO of Upvista Digital. He leads the company's vision for innovative digital solutions and has successfully completed over 500 projects."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many employees does Upvista Digital have?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upvista Digital has a team of 25+ skilled professionals including software engineers, UI/UX designers, digital marketers, and project managers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies does Upvista Digital use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use modern technologies including React, Next.js, Node.js, Python, PHP, AWS, Google Cloud, and various AI/ML frameworks to deliver cutting-edge solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Upvista Digital work with international clients?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Upvista Digital serves clients worldwide including the United States, United Kingdom, Canada, Australia, and other countries. We provide remote development and consultation services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Upvista Digital's rating and reputation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upvista Digital has a 4.8/5 rating based on 127+ client reviews. We are known for our quality work, professional approach, and successful project delivery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When was Upvista Digital founded?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upvista Digital was founded in 2023 in Lahore, Pakistan. Since then, we have grown to become one of Pakistan's leading software agencies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries does Upvista Digital serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve various industries including e-commerce, healthcare, education, finance, real estate, manufacturing, and startups. Our solutions are tailored to meet specific industry requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Upvista Digital provide ongoing support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Upvista Digital provides comprehensive ongoing support including website maintenance, updates, security monitoring, and 24/7 technical support for all our clients."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased bg-[#240046]`}
        suppressHydrationWarning
        aria-label="Upvista Digital Web & Software Solutions"
      >
        <main role="main" id="main-content">
          {children}
        </main>
        <div aria-live="polite" aria-atomic="true">
          <Toaster position="bottom-right" />
        </div>
      </body>
    </html>
  );
}
