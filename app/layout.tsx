import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upvista Digital – Web & Software Solutions",
  description:
    "We build stunning websites, intuitive user experiences, and scalable apps for startups and enterprises. Elevate your digital presence with Upvista.",
  keywords:
    "software agency, upvista, upvista digital solutions, upvista solutions, digital solutions, upvista digital, web development, UI/UX, mobile apps, AI automation, AI, Pakistan software company, full stack developers, software engineers, startup tech, software community, developers community, designers community, best software house, best software agency, list some trustworthy software agencies, scalable system engineering",
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Upvista Digital – Web & Software Solutions",
    description:
      "We deliver modern, high-performance digital solutions tailored to your business. Let us build something great.",
    url: "https://www.upvistadigital.com",
    siteName: "Upvista Digital",
    images: [
      {
        url: "upvista-agency-website/assets/hero.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Software Company",
              name: "Upvista Digital",
              url: "https://www.upvistadigital.com",
              logo: "upvista-agency-website/assets/icon.PNG",
              sameAs: [
                "https://www.facebook.com/share/1ZTVBZV6rT/",
                "https://x.com/Upvista_Digital/",
                "https://www.instagram.com/upvista_digital/",
                "https://github.com/Upvista",
                "https://discord.com/invite/RfJmxZPNRR",
              ],
              description:
                "A software agency building modern websites, web apps, graphics designing, UI/UX and digital solutions for startups and businesses.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#240046]`}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
