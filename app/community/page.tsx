"use client";

import Component from "@/components/community-page";
import Header from "@/components/Header";
import Head from 'next/head';

export default function CommunityPage() {
  return (
    <>
      <Head>
        <title>Upvista Community | Where Innovators Belong</title>
        <meta name="description" content="Join the Upvista Community where developers, designers, and visionaries collaborate, learn, and grow together. Experience belonging, support, and shared purpose." />
        <meta name="keywords" content="Upvista, Upvista Digital, Upvista Community, Community, Collaboration, Innovation, Learning, Growth, Empowerment, Pakistan, Global" />
        <meta property="og:title" content="Upvista Community | Where Innovators Belong" />
        <meta property="og:description" content="Join the Upvista Community where developers, designers, and visionaries collaborate, learn, and grow together. Experience belonging, support, and shared purpose." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upvistadigital.com/community" />
        <meta property="og:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Upvista Community | Where Innovators Belong" />
        <meta name="twitter:description" content="Join the Upvista Community—where developers, designers, and visionaries collaborate, learn, and grow together. Experience belonging, support, and shared purpose." />
        <meta name="twitter:image" content="https://upvistadigital.com/assets/heroimg.png" />
        <link rel="canonical" href="https://upvistadigital.com/community" />
        {/* Community Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Upvista Digital Community',
          url: 'https://upvistadigital.com/community',
          logo: 'https://upvistadigital.com/assets/u.png',
          sameAs: [
            'https://www.linkedin.com/in/hamza-hafeez-b0233731a',
            'https://www.facebook.com/share/1DXUJFcwit/',
            'https://x.com/Upvista_Digital?s=09',
            'https://www.instagram.com/upvista_digital?igsh=aTJ1dDFqMXdlMTBk',
          ],
          description: 'Upvista Community is a vibrant network of creators, thinkers, and leaders. Experience belonging, support, and shared purpose as you collaborate and grow with Upvista.',
          contactPoint: [{
            '@type': 'ContactPoint',
            email: 'upvistadigital@gmail.com',
            contactType: 'customer support',
          }],
        }) }} />
      </Head>
      <Header />
      <Component />
    </>
  );
}
