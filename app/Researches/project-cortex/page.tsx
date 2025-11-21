import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectCortexPage() {
  return (
    <>
      <Head>
        <title>Project Cortex | Flagship AI Research Initiative | Upvista Digital</title>
        <meta name="description" content="Project Cortex is Upvista Digital's flagship research initiative exploring the future of artificial intelligence and machine learning. Discover our research in neural networks, NLP, computer vision, reinforcement learning, and ethical AI." />
        <meta name="keywords" content="Project Cortex, AI Research, Machine Learning Research, Neural Networks, Natural Language Processing, Computer Vision, Reinforcement Learning, Ethical AI, AI Innovation, Artificial Intelligence Research" />
        <meta property="og:title" content="Project Cortex | Flagship AI Research Initiative | Upvista Digital" />
        <meta property="og:description" content="Project Cortex is Upvista Digital's flagship research initiative exploring the future of artificial intelligence and machine learning." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.upvistadigital.com/Researches/project-cortex" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Project Cortex | Flagship AI Research Initiative" />
        <meta name="twitter:description" content="Project Cortex is Upvista Digital's flagship research initiative exploring the future of AI and machine learning." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/Researches/project-cortex" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ScholarlyArticle',
          'headline': 'Project Cortex - Flagship AI Research Initiative',
          'description': 'Project Cortex is Upvista Digital\'s flagship research initiative exploring the future of artificial intelligence and machine learning. Research areas include neural networks, natural language processing, computer vision, reinforcement learning, and ethical AI.',
          'url': 'https://www.upvistadigital.com/Researches/project-cortex',
          'author': {
            '@type': 'Person',
            'name': 'Hamza Hafeez',
            'jobTitle': 'Founder & CEO',
            'worksFor': {
              '@type': 'Organization',
              'name': 'Upvista Digital',
              'url': 'https://www.upvistadigital.com'
            }
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Upvista Digital',
            'url': 'https://www.upvistadigital.com',
            'logo': 'https://www.upvistadigital.com/assets/icon.PNG'
          },
          'about': [
            {
              '@type': 'Thing',
              'name': 'Artificial Intelligence',
              'description': 'Advanced AI research and development'
            },
            {
              '@type': 'Thing',
              'name': 'Machine Learning',
              'description': 'ML algorithms and methodologies'
            },
            {
              '@type': 'Thing',
              'name': 'Neural Networks',
              'description': 'Advanced neural network architectures'
            },
            {
              '@type': 'Thing',
              'name': 'Natural Language Processing',
              'description': 'NLP research and applications'
            },
            {
              '@type': 'Thing',
              'name': 'Computer Vision',
              'description': 'Image and video analysis technologies'
            },
            {
              '@type': 'Thing',
              'name': 'Reinforcement Learning',
              'description': 'AI systems that learn through interaction'
            },
            {
              '@type': 'Thing',
              'name': 'Ethical AI',
              'description': 'Responsible AI development and deployment'
            }
          ],
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
                'name': 'Researches',
                'item': 'https://www.upvistadigital.com/Researches'
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Project Cortex',
                'item': 'https://www.upvistadigital.com/Researches/project-cortex'
              }
            ]
          }
        }) }} />
      </Head>
      <div className="min-h-screen bg-black">
        <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Project Cortex
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship research initiative exploring the future of artificial intelligence and machine learning.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Research Overview</h2>
            <p className="text-gray-300 mb-6">
              Project Cortex represents our commitment to advancing artificial intelligence research and developing 
              cutting-edge solutions that can transform industries and improve human lives.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Research Areas</h2>
            <ul className="text-gray-300 space-y-4">
              <li><strong className="text-white">Neural Networks:</strong> Advanced architectures and training methodologies.</li>
              <li><strong className="text-white">Natural Language Processing:</strong> Understanding and generating human language.</li>
              <li><strong className="text-white">Computer Vision:</strong> Image and video analysis technologies.</li>
              <li><strong className="text-white">Reinforcement Learning:</strong> AI systems that learn through interaction.</li>
              <li><strong className="text-white">Ethical AI:</strong> Responsible development and deployment of AI systems.</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Impact & Applications</h2>
            <p className="text-gray-300 mb-6">
              Our research findings are applied across various domains, from healthcare and finance to 
              autonomous systems and creative industries.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Collaboration</h2>
            <p className="text-gray-300 mb-6">
              We collaborate with leading academic institutions, research organizations, and industry 
              partners to advance the field of artificial intelligence.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </>
  );
}
