'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AIAutomationPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [expandedProcess, setExpandedProcess] = useState<string | null>('ai-development');
  const [expandedProjectTypes, setExpandedProjectTypes] = useState<boolean>(true);
  const [expandedTechStack, setExpandedTechStack] = useState<boolean>(true);
  const [currentTechIndex, setCurrentTechIndex] = useState<number>(0);

  const toggleProcess = (processType: string) => {
    setExpandedProcess(expandedProcess === processType ? null : processType);
  };

  const toggleProjectTypes = () => {
    setExpandedProjectTypes(!expandedProjectTypes);
  };

  const toggleTechStack = () => {
    setExpandedTechStack(!expandedTechStack);
  };

  const caseStudies = [
    {
      id: 1,
      image: '/assets/services/software/48.jpeg',
      title: t('ai.caseStudy1.title'),
      description: t('ai.caseStudy1.description'),
      tag: t('ai.caseStudy1.tag'),
      href: '/case-studies/ai-healthcare-assistant'
    },
    {
      id: 2,
      image: '/assets/services/software/49.jpeg',
      title: t('ai.caseStudy2.title'),
      description: t('ai.caseStudy2.description'),
      tag: t('ai.caseStudy2.tag'),
      href: '/case-studies/smart-ecommerce'
    },
    {
      id: 3,
      image: '/assets/services/software/50.jpeg',
      title: t('ai.caseStudy3.title'),
      description: t('ai.caseStudy3.description'),
      tag: t('ai.caseStudy3.tag'),
      href: '/case-studies/document-ai'
    }
  ];

  const techStackItems = [
    { name: 'Python', image: '/assets/services/software/51.jpeg', logo: '/assets/logos/python.svg', description: t('ai.tech.python') },
    { name: 'TensorFlow', image: '/assets/services/software/52.jpeg', logo: '/assets/logos/tensorflow.svg', description: t('ai.tech.tensorflow') },
    { name: 'PyTorch', image: '/assets/services/software/53.jpeg', logo: '/assets/logos/pytorch.svg', description: t('ai.tech.pytorch') },
    { name: 'OpenAI GPT', image: '/assets/services/software/54.jpeg', logo: '/assets/logos/openai.svg', description: t('ai.tech.openai') },
    { name: 'Hugging Face', image: '/assets/services/software/55.jpeg', logo: '/assets/logos/huggingface.svg', description: t('ai.tech.huggingface') },
    { name: 'LangChain', image: '/assets/services/software/56.jpeg', logo: '/assets/logos/langchain.svg', description: t('ai.tech.langchain') },
    { name: 'RAG Systems', image: '/assets/services/software/57.jpeg', logo: '/assets/logos/rag.svg', description: t('ai.tech.rag') },
    { name: 'Vector DB', image: '/assets/services/software/58.jpeg', logo: '/assets/logos/vector.svg', description: t('ai.tech.vectordb') },
    { name: 'AWS AI', image: '/assets/services/software/59.jpeg', logo: '/assets/logos/aws.svg', description: t('ai.tech.aws') },
    { name: 'Azure AI', image: '/assets/services/software/60.jpeg', logo: '/assets/logos/azure.svg', description: t('ai.tech.azure') },
    { name: 'Google AI', image: '/assets/services/software/61.jpeg', logo: '/assets/logos/google.svg', description: t('ai.tech.google') },
    { name: 'Computer Vision', image: '/assets/services/software/62.jpeg', logo: '/assets/logos/cv.svg', description: t('ai.tech.cv') }
  ];

  // Infinite carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => 
        prevIndex === techStackItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [techStackItems.length]);

  const developmentProcesses = [
    {
      type: 'ai-development',
      title: t('ai.processes.aidev.title'),
      description: t('ai.processes.aidev.description'),
      platforms: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain'],
      services: [
        t('ai.processes.aidev.service1'),
        t('ai.processes.aidev.service2'),
        t('ai.processes.aidev.service3'),
        t('ai.processes.aidev.service4'),
        t('ai.processes.aidev.service5'),
        t('ai.processes.aidev.service6'),
        t('ai.processes.aidev.service7'),
        t('ai.processes.aidev.service8')
      ],
      roadmap: [
        { 
          step: 1, 
          title: t('ai.processes.aidev.roadmap1.title'), 
          description: t('ai.processes.aidev.roadmap1.description'),
          details: t('ai.processes.aidev.roadmap1.details'),
          image: '/assets/services/process/consultation.jpeg'
        },
        { 
          step: 2, 
          title: t('ai.processes.aidev.roadmap2.title'), 
          description: t('ai.processes.aidev.roadmap2.description'),
          details: t('ai.processes.aidev.roadmap2.details'),
          image: '/assets/services/software/63.jpeg'
        },
        { 
          step: 3, 
          title: t('ai.processes.aidev.roadmap3.title'), 
          description: t('ai.processes.aidev.roadmap3.description'),
          details: t('ai.processes.aidev.roadmap3.details'),
          image: '/assets/services/software/64.jpeg'
        },
        { 
          step: 4, 
          title: t('ai.processes.aidev.roadmap4.title'), 
          description: t('ai.processes.aidev.roadmap4.description'),
          details: t('ai.processes.aidev.roadmap4.details'),
          image: '/assets/services/software/65.jpeg'
        },
        { 
          step: 5, 
          title: t('ai.processes.aidev.roadmap5.title'), 
          description: t('ai.processes.aidev.roadmap5.description'),
          details: t('ai.processes.aidev.roadmap5.details'),
          image: '/assets/services/process/launch.jpeg'
        },
        { 
          step: 6, 
          title: t('ai.processes.aidev.roadmap6.title'), 
          description: t('ai.processes.aidev.roadmap6.description'),
          details: t('ai.processes.aidev.roadmap6.details'),
          image: '/assets/services/process/training.jpeg'
        }
      ]
    },
    {
      type: 'automation-workflows',
      title: t('ai.processes.automation.title'),
      description: t('ai.processes.automation.description'),
      platforms: ['Zapier', 'Microsoft Power Automate', 'UiPath', 'Python', 'Node.js'],
      services: [
        t('ai.processes.automation.service1'),
        t('ai.processes.automation.service2'),
        t('ai.processes.automation.service3'),
        t('ai.processes.automation.service4'),
        t('ai.processes.automation.service5'),
        t('ai.processes.automation.service6')
      ],
      roadmap: [
        { step: 1, title: t('ai.processes.automation.roadmap1.title'), description: t('ai.processes.automation.roadmap1.description') },
        { step: 2, title: t('ai.processes.automation.roadmap2.title'), description: t('ai.processes.automation.roadmap2.description') },
        { step: 3, title: t('ai.processes.automation.roadmap3.title'), description: t('ai.processes.automation.roadmap3.description') },
        { step: 4, title: t('ai.processes.automation.roadmap4.title'), description: t('ai.processes.automation.roadmap4.description') },
        { step: 5, title: t('ai.processes.automation.roadmap5.title'), description: t('ai.processes.automation.roadmap5.description') },
        { step: 6, title: t('ai.processes.automation.roadmap6.title'), description: t('ai.processes.automation.roadmap6.description') }
      ]
    },
    {
      type: 'chatbots-voice',
      title: t('ai.processes.chatbot.title'),
      description: t('ai.processes.chatbot.description'),
      platforms: ['OpenAI GPT', 'Google Dialogflow', 'Amazon Lex', 'Microsoft Bot Framework'],
      services: [
        t('ai.processes.chatbot.service1'),
        t('ai.processes.chatbot.service2'),
        t('ai.processes.chatbot.service3'),
        t('ai.processes.chatbot.service4'),
        t('ai.processes.chatbot.service5'),
        t('ai.processes.chatbot.service6')
      ],
      roadmap: [
        { step: 1, title: t('ai.processes.chatbot.roadmap1.title'), description: t('ai.processes.chatbot.roadmap1.description') },
        { step: 2, title: t('ai.processes.chatbot.roadmap2.title'), description: t('ai.processes.chatbot.roadmap2.description') },
        { step: 3, title: t('ai.processes.chatbot.roadmap3.title'), description: t('ai.processes.chatbot.roadmap3.description') },
        { step: 4, title: t('ai.processes.chatbot.roadmap4.title'), description: t('ai.processes.chatbot.roadmap4.description') },
        { step: 5, title: t('ai.processes.chatbot.roadmap5.title'), description: t('ai.processes.chatbot.roadmap5.description') },
        { step: 6, title: t('ai.processes.chatbot.roadmap6.title'), description: t('ai.processes.chatbot.roadmap6.description') }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>AI Automation Services | Machine Learning & AI Solutions | Upvista Digital</title>
        <meta name="description" content="Advanced AI automation services by Upvista Digital. Machine learning solutions, AI development, natural language processing, computer vision, chatbot development using Python, TensorFlow, PyTorch, OpenAI, and LangChain." />
        <meta name="keywords" content="AI Automation Services, Machine Learning Services, AI Development, Natural Language Processing, Computer Vision, Chatbot Development, TensorFlow, PyTorch, OpenAI, LangChain, AI Solutions" />
        <meta property="og:title" content="AI Automation Services | Machine Learning & AI Solutions | Upvista Digital" />
        <meta property="og:description" content="Advanced AI automation services including machine learning solutions, AI development, and natural language processing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.upvistadigital.com/Services/ai-automation" />
        <meta property="og:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Services | Upvista Digital" />
        <meta name="twitter:description" content="Advanced AI automation services including machine learning and AI development." />
        <meta name="twitter:image" content="https://www.upvistadigital.com/assets/icon.PNG" />
        <link rel="canonical" href="https://www.upvistadigital.com/Services/ai-automation" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'AI Automation Services',
          'description': 'Advanced AI automation services including machine learning solutions, AI development, natural language processing, computer vision, and chatbot development using Python, TensorFlow, PyTorch, OpenAI, and LangChain.',
          'url': 'https://www.upvistadigital.com/Services/ai-automation',
          'provider': {
            '@type': 'Organization',
            'name': 'Upvista Digital',
            'url': 'https://www.upvistadigital.com'
          },
          'serviceType': 'AI Automation',
          'areaServed': 'Worldwide',
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.upvistadigital.com' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.upvistadigital.com/Services' },
              { '@type': 'ListItem', 'position': 3, 'name': 'AI Automation', 'item': 'https://www.upvistadigital.com/Services/ai-automation' }
            ]
          }
        }) }} />
      </Head>
      <div className={`min-h-screen ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
    }`}>
        <Header />

      {/* Hero Section */}
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
                isDark
                  ? 'bg-white/10 border border-white/20 text-indigo-200'
                  : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-blue-500/70 text-white shadow-lg'
              }`}>
                <span className={`w-2 h-2 rounded-full mr-3 ${
                  isDark ? 'bg-blue-400' : 'bg-white'
                }`}></span>
                {t('ai.hero.badge')}
              </div>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight ${
                isDark
                  ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
              }`}>
                {t('ai.hero.title')}
              </h1>
              <p className={`text-lg sm:text-xl leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('ai.hero.description')}
              </p>
            </div>
            
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden transform hover:rotate-2 transition-transform duration-500 shadow-2xl hover:shadow-3xl">
              <Image
                src="/assets/services/software/47.jpeg"
                alt="AI & Automation Services"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Types Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('ai.projectTypes.heading')}
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('ai.projectTypes.subtitle')}
            </p>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${
            isDark
              ? 'bg-white/5 border-white/10'
              : 'bg-white/70 border-gray-200 shadow-lg'
          }`}>
            <button
              onClick={toggleProjectTypes}
              className={`w-full p-6 text-left transition-colors ${
                isDark
                  ? 'hover:bg-white/10'
                  : 'hover:bg-white/90'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('ai.projectTypes.heading')}
                  </h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {t('ai.projectTypes.subtitle')}
                  </p>
                </div>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    expandedProjectTypes ? 'rotate-180' : ''
                  } ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {expandedProjectTypes && (
              <div className={`px-6 pb-6 border-t ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}>
                <div className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {t('ai.projectTypes.aiPowered.title')}
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.projectTypes.aiPowered.description')}
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {t('ai.projectTypes.automation.title')}
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.projectTypes.automation.description')}
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {t('ai.projectTypes.conversational.title')}
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.projectTypes.conversational.description')}
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {t('ai.projectTypes.document.title')}
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.projectTypes.document.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('ai.techStack.heading')}
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('ai.techStack.subtitle')}
            </p>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${
            isDark
              ? 'bg-white/5 border-white/10'
              : 'bg-white/70 border-gray-200 shadow-lg'
          }`}>
            <button
              onClick={toggleTechStack}
              className={`w-full p-6 text-left transition-colors ${
                isDark
                  ? 'hover:bg-white/10'
                  : 'hover:bg-white/90'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('ai.techStack.heading')}
                  </h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {t('ai.techStack.subtitle')}
                  </p>
                </div>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    expandedTechStack ? 'rotate-180' : ''
                  } ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {expandedTechStack && (
              <div className={`px-6 pb-6 border-t ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}>
                <div className="pt-6">
                  {/* Tech Stack Carousel */}
                  <div className="mb-12">
                    <div className="relative overflow-hidden rounded-2xl">
                      <div className="flex transition-transform duration-500 ease-in-out"
                           style={{ transform: `translateX(-${currentTechIndex * 100}%)` }}>
                        {techStackItems.map((tech, index) => (
                          <div key={index} className="w-full flex-shrink-0">
                            <div className={`p-6 rounded-2xl ${
                              isDark
                                ? 'bg-white/5 border border-white/10'
                                : 'bg-white/70 border border-gray-200 shadow-lg'
                            }`}>
                              <div className="flex flex-col lg:flex-row items-center gap-8">
                                <div className="flex-shrink-0 w-full lg:w-80 h-48 rounded-xl overflow-hidden relative">
                                  <Image
                                    src={tech.image}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                
                                <div className="flex-1 text-center lg:text-left">
                                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md">
                                      <Image
                                        src={tech.logo}
                                        alt={`${tech.name} logo`}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain p-1 bg-white/90"
                                      />
                                    </div>
                                    <h3 className={`text-3xl font-bold ${
                                      isDark ? 'text-white' : 'text-gray-900'
                                    }`}>
                                      {tech.name}
                                    </h3>
                                  </div>
                                  <p className={`text-lg mb-6 ${
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                  }`}>
                                    {tech.description}
                                  </p>
                                  <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium ${
                                    isDark
                                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                                      : 'bg-blue-100 text-blue-700 border border-blue-200'
                                  }`}>
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse"></span>
                                    {t('ai.techStack.badge')}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-center mt-6 space-x-2">
                        {techStackItems.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTechIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentTechIndex
                                ? isDark
                                  ? 'bg-blue-500 scale-125'
                                  : 'bg-blue-600 scale-125'
                                : isDark
                                  ? 'bg-white/30 hover:bg-white/50'
                                  : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Categories */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {t('ai.techStack.ml.title')}
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.techStack.ml.description1')}
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.techStack.ml.description2')}
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {t('ai.techStack.llm.title')}
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.techStack.llm.description1')}
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.techStack.llm.description2')}
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {t('ai.techStack.platforms.title')}
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.techStack.platforms.description1')}
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.techStack.platforms.description2')}
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-white/50 border border-gray-200'
                    }`}>
                      <h4 className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {t('ai.techStack.cloud.title')}
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.techStack.cloud.description1')}
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {t('ai.techStack.cloud.description2')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('ai.caseStudies.heading')}
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('ai.caseStudies.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className={`group rounded-2xl overflow-hidden border ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : 'bg-white/70 border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDark
                        ? 'bg-blue-600/80 text-white'
                        : 'bg-blue-600 text-white'
                    }`}>
                      {study.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {study.title}
                  </h3>
                  <p className={`mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {study.description}
                  </p>
                  <a
                    href={study.href}
                    className={`inline-flex items-center text-sm font-medium ${
                      isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    } transition-colors`}
                  >
                    {t('ai.caseStudies.readMore')}
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('ai.processes.heading')}
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('ai.processes.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {developmentProcesses.map((process) => (
              <div
                key={process.type}
                className={`rounded-2xl border ${
                  isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/70 border-gray-200 shadow-lg'
                } overflow-hidden`}
              >
                <button
                  onClick={() => toggleProcess(process.type)}
                  className={`w-full p-6 text-left transition-colors ${
                    isDark
                      ? 'hover:bg-white/10'
                      : 'hover:bg-white/90'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {process.title}
                      </h3>
                      <p className={`${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {process.description}
                      </p>
                    </div>
                    <svg
                      className={`w-6 h-6 transition-transform ${
                        expandedProcess === process.type ? 'rotate-180' : ''
                      } ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {expandedProcess === process.type && (
                  <div className={`px-6 pb-6 border-t ${
                    isDark ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <div className="pt-6">
                      <div className="mb-8">
                        <h4 className={`text-lg font-semibold mb-6 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {t('ai.processes.roadmapHeading')}
                        </h4>
                        <div className="space-y-12">
                          {process.roadmap.map((step, index) => (
                            <div key={index} className={`flex flex-col ${
                              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } items-center gap-8`}>
                              <div className={`flex-1 ${
                                index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                              }`}>
                                <div className="flex items-start space-x-4">
                                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                                    isDark
                                      ? 'bg-blue-600 text-white'
                                      : 'bg-blue-600 text-white'
                                  }`}>
                                    {step.step}
                                  </div>
                                  <div className="flex-1">
                                    <h5 className={`text-xl font-semibold mb-3 ${
                                      isDark ? 'text-white' : 'text-gray-900'
                                    }`}>
                                      {step.title}
                                    </h5>
                                    <p className={`text-base leading-relaxed mb-4 ${
                                      isDark ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                      {step.description}
                                    </p>
                                    {(step as {details: string}).details && (
                                      <div className={`p-4 rounded-lg ${
                                        isDark
                                          ? 'bg-white/5 border border-white/10'
                                          : 'bg-gray-50 border border-gray-200'
                                      }`}>
                                        <p className={`text-sm ${
                                          isDark ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                          {(step as {details: string}).details}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex-shrink-0 w-full max-w-sm lg:w-80">
                                <div className={`relative h-48 rounded-xl overflow-hidden ${
                                  isDark
                                    ? 'bg-white/5 border border-white/10'
                                    : 'bg-gray-100 border border-gray-200'
                                }`}>
                                  <Image
                                    src={(step as {image: string}).image || '/assets/services/process-step.jpg'}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/20"></div>
                                  <div className="absolute bottom-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                      isDark
                                        ? 'bg-blue-600/80 text-white'
                                        : 'bg-blue-600 text-white'
                                    }`}>
                                      {t('ai.processes.step')} {step.step}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className={`font-semibold mb-3 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {t('ai.processes.platformsHeading')}
                          </h4>
                          <div className={`space-y-2 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {process.platforms.map((platform, index) => (
                              <div key={index} className="flex items-center">
                                <span className={`w-2 h-2 rounded-full mr-3 ${
                                  isDark ? 'bg-blue-400' : 'bg-blue-600'
                                }`}></span>
                                {platform}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className={`font-semibold mb-3 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {t('ai.processes.servicesHeading')}
                          </h4>
                          <div className={`space-y-2 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {process.services.map((service, index) => (
                              <div key={index} className="flex items-center">
                                <span className={`w-2 h-2 rounded-full mr-3 ${
                                  isDark ? 'bg-green-400' : 'bg-green-600'
                                }`}></span>
                                {service}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consultation Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center p-8 sm:p-12 rounded-3xl ${
            isDark
              ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10'
              : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
          }`}>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('ai.consultation.title')}
            </h2>
            <p className={`text-lg sm:text-xl mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('ai.consultation.description')}
            </p>
            
            <div className={`mb-8 p-6 rounded-2xl ${
              isDark
                ? 'bg-white/5 border border-white/10'
                : 'bg-white/70 border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t('ai.consultation.additionalServices')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>{t('ai.consultation.service1.title')}</strong>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{t('ai.consultation.service1.description')}</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>{t('ai.consultation.service2.title')}</strong>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{t('ai.consultation.service2.description')}</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>{t('ai.consultation.service3.title')}</strong>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{t('ai.consultation.service3.description')}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
              }`}>
                {t('ai.consultation.button')}
              </button>
              <a
                href="/assets/sample-operation-manual.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isDark
                    ? 'border border-white/20 text-white hover:bg-white/10'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-600 underline hover:text-blue-700 transition-colors">
                  {t('ai.consultation.manualLink')}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('ai.mission.title')}
            </h2>
            <p className={`text-lg sm:text-xl leading-relaxed mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('ai.mission.description')}
            </p>
          </div>

          <div className="mb-12">
            <h3 className={`text-2xl font-semibold mb-8 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('ai.mission.industriesHeading')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: t('ai.mission.industry1.name'), 
                  image: '/assets/services/software/66.jpeg',
                  description: t('ai.mission.industry1.description')
                },
                { 
                  name: t('ai.mission.industry2.name'), 
                  image: '/assets/services/software/67.jpeg',
                  description: t('ai.mission.industry2.description')
                },
                { 
                  name: t('ai.mission.industry3.name'), 
                  image: '/assets/services/software/68.jpeg',
                  description: t('ai.mission.industry3.description')
                },
                { 
                  name: t('ai.mission.industry4.name'), 
                  image: '/assets/services/software/69.jpeg',
                  description: t('ai.mission.industry4.description')
                },
                { 
                  name: t('ai.mission.industry5.name'), 
                  image: '/assets/services/software/70.jpeg',
                  description: t('ai.mission.industry5.description')
                },
                { 
                  name: t('ai.mission.industry6.name'), 
                  image: '/assets/services/software/71.jpeg',
                  description: t('ai.mission.industry6.description')
                }
              ].map((industry, index) => (
                <div
                  key={index}
                  className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90'
                      : 'bg-gradient-to-t from-white/95 via-white/60 to-transparent opacity-80 group-hover:opacity-90'
                  }`}></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                      <h4 className={`text-xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {industry.name}
                      </h4>
                    </div>
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <h4 className={`text-2xl font-bold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {industry.name}
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {industry.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 pointer-events-none ${
                    isDark 
                      ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                      : 'bg-gradient-to-t from-white/70 via-transparent to-transparent'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>

          <div className={`text-center p-6 rounded-2xl ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
          }`}>
            <p className={`text-lg font-medium ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('ai.mission.ending')}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}
