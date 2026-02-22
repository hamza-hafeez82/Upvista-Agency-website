import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import "./globals.css";
import { Dancing_Script } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { JsonLd } from "@/components/SEO/JsonLd";

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
    "Upvista Digital, Upvista, digital innovation company, global software development, AI automation services, cloud solutions, web development services, software development company, UI/UX design services, digital marketing agency, software engineering, technology solutions, digital transformation, custom software development, enterprise software solutions, mobile app development, e-commerce solutions, DevOps services, cloud migration, artificial intelligence solutions, machine learning services, research and development, global tech services, international software agency, cutting-edge technology, innovative digital solutions, software consulting, digital strategy, technology consulting, software outsourcing, remote development team, agile software development, full-stack development, frontend development, backend development, API development, microservices architecture, cloud infrastructure, digital agency, tech innovation, software house, software studio, digital experts, technology partners, software engineers, developers, designers, digital consultants",
  authors: [{ name: "Hamza Hafeez" }],
  creator: "Hamza Hafeez",
  publisher: "Hamza Hafeez",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://www.upvistadigital.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': 'https://www.upvistadigital.com',
      'ja': 'https://www.upvistadigital.com/ja',
      'ko': 'https://www.upvistadigital.com/ko',
      'zh': 'https://www.upvistadigital.com/zh',
      'ar': 'https://www.upvistadigital.com/ar',
      'id': 'https://www.upvistadigital.com/id',
      'x-default': 'https://www.upvistadigital.com',
    },
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
    url: "https://www.upvistadigital.com",
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
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
        <link rel="canonical" href="https://www.upvistadigital.com/" />
        {/* Hreflang tags for multi-language support */}
        <link rel="alternate" hrefLang="en" href="https://www.upvistadigital.com" />
        <link rel="alternate" hrefLang="ja" href="https://www.upvistadigital.com/ja" />
        <link rel="alternate" hrefLang="ko" href="https://www.upvistadigital.com/ko" />
        <link rel="alternate" hrefLang="zh" href="https://www.upvistadigital.com/zh" />
        <link rel="alternate" hrefLang="ar" href="https://www.upvistadigital.com/ar" />
        <link rel="alternate" hrefLang="id" href="https://www.upvistadigital.com/id" />
        <link rel="alternate" hrefLang="x-default" href="https://www.upvistadigital.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Upvista Digital – Web & Software Solutions" />
        <meta name="twitter:description" content="We build stunning websites, intuitive user experiences, and scalable apps for startups and enterprises. Elevate your digital presence with Upvista." />
        <meta name="twitter:image" content="/assets/hero.jpeg" />
        <meta name="twitter:site" content="@Upvista_Digital" />
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased bg-[#240046]`}
        suppressHydrationWarning
        aria-label="Upvista Digital Web & Software Solutions"
      >
        <ThemeProvider>
          <LanguageProvider>
            <main role="main" id="main-content">
              {children}
            </main>
            <div aria-live="polite" aria-atomic="true">
              <Toaster position="bottom-right" />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
