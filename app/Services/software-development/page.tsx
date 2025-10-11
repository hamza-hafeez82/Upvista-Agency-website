'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SoftwareDevelopmentPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [expandedProcess, setExpandedProcess] = useState<string | null>('custom-software');
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
      image: '/assets/services/ecommerce.jpeg',
      title: t('softdev.caseStudies.enterprise.title'),
      description: t('softdev.caseStudies.enterprise.description'),
      tag: t('softdev.caseStudies.enterprise.tag'),
      href: '/case-studies/enterprise-crm'
    },
    {
      id: 2,
      image: '/assets/services/health.jpeg',
      title: t('softdev.caseStudies.healthcare.title'),
      description: t('softdev.caseStudies.healthcare.description'),
      tag: t('softdev.caseStudies.healthcare.tag'),
      href: '/case-studies/healthcare-platform'
    },
    {
      id: 3,
      image: '/assets/services/edutech.jpeg',
      title: t('softdev.caseStudies.lms.title'),
      description: t('softdev.caseStudies.lms.description'),
      tag: t('softdev.caseStudies.lms.tag'),
      href: '/case-studies/lms-platform'
    }
  ];

  const techStackItems = [
    { name: 'React Native', image: '/assets/tech/react-native.jpg', logo: '/assets/logos/react.svg', description: 'Cross-Platform Mobile' },
    { name: 'Flutter', image: '/assets/tech/flutter.jpg', logo: '/assets/logos/flutter.svg', description: 'Mobile Development' },
    { name: 'Python', image: '/assets/tech/python.jpg', logo: '/assets/logos/python.svg', description: 'Backend & AI' },
    { name: 'Java', image: '/assets/tech/java.jpg', logo: '/assets/logos/java.svg', description: 'Enterprise Solutions' },
    { name: 'C#', image: '/assets/tech/csharp.jpg', logo: '/assets/logos/csharp.svg', description: '.NET Development' },
    { name: 'Go', image: '/assets/tech/golang.jpg', logo: '/assets/logos/golang.svg', description: 'Microservices' },
    { name: 'Kubernetes', image: '/assets/tech/kubernetes.jpg', logo: '/assets/logos/kubernetes.svg', description: 'Container Orchestration' },
    { name: 'AWS', image: '/assets/tech/aws.jpg', logo: '/assets/logos/aws.svg', description: 'Cloud Platform' },
    { name: 'Docker', image: '/assets/tech/docker.jpg', logo: '/assets/logos/docker.svg', description: 'Containerization' },
    { name: 'PostgreSQL', image: '/assets/tech/postgresql.jpg', logo: '/assets/logos/postgresql.svg', description: 'Advanced Database' },
    { name: 'Redis', image: '/assets/tech/redis.jpg', logo: '/assets/logos/redis.svg', description: 'Caching & Sessions' },
    { name: 'Elasticsearch', image: '/assets/tech/elasticsearch.jpg', logo: '/assets/logos/elasticsearch.svg', description: 'Search & Analytics' }
  ];

  // Infinite carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => 
        prevIndex === techStackItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [techStackItems.length]);

  const developmentProcesses = [
    {
      type: 'custom-software',
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from scratch to meet your specific business requirements',
      platforms: ['React Native', 'Flutter', 'Python', 'Java', 'C#', 'Go'],
      services: [
        'Requirements Analysis & Planning',
        'Architecture Design',
        'Frontend Development',
        'Backend Development',
        'Database Design',
        'API Integration',
        'Testing & Quality Assurance',
        'Deployment & DevOps'
      ],
      roadmap: [
        { 
          step: 1, 
          title: 'Discovery & Analysis', 
          description: 'Deep dive into your business processes, requirements, and technical constraints to create a comprehensive project blueprint.',
          details: 'We conduct extensive stakeholder interviews, workflow analysis, and technical feasibility studies to understand your unique challenges and opportunities.',
          image: '/assets/services/consultation.jpg'
        },
        { 
          step: 2, 
          title: 'System Architecture', 
          description: 'Design scalable, maintainable system architecture with security, performance, and future growth in mind.',
          details: 'Our architects create detailed technical specifications, database schemas, API designs, and deployment strategies for optimal system performance.',
          image: '/assets/services/architecture.jpg'
        },
        { 
          step: 3, 
          title: 'UI/UX Design', 
          description: 'Intuitive user interface design focused on user experience, accessibility, and business workflow optimization.',
          details: 'We create wireframes, interactive prototypes, and design systems that align with your brand while ensuring exceptional user experience.',
          image: '/assets/services/design.jpg'
        },
        { 
          step: 4, 
          title: 'Development Phase', 
          description: 'Agile development with regular iterations, code reviews, and continuous integration for quality assurance.',
          details: 'Our development team follows industry best practices with automated testing, version control, and regular client updates throughout the process.',
          image: '/assets/services/development.jpg'
        },
        { 
          step: 5, 
          title: 'Quality Assurance', 
          description: 'Comprehensive testing including unit tests, integration tests, performance testing, and security audits.',
          details: 'We perform thorough testing across multiple scenarios, devices, and environments to ensure reliability and performance standards.',
          image: '/assets/services/testing.jpg'
        },
        { 
          step: 6, 
          title: 'Deployment & Launch', 
          description: 'Professional deployment with monitoring, backup systems, and performance optimization for production.',
          details: 'Smooth deployment with zero downtime, automated monitoring, backup systems, and comprehensive documentation for long-term success.',
          image: '/assets/services/deployment.jpg'
        },
        { 
          step: 7, 
          title: 'Support & Maintenance', 
          description: 'Ongoing support, updates, and maintenance with detailed documentation and training provided.',
          details: 'Comprehensive support plan including bug fixes, feature updates, performance monitoring, and user training for sustained success.',
          image: '/assets/services/support.jpg'
        }
      ]
    },
    {
      type: 'mobile-apps',
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience',
      platforms: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
      services: [
        'Cross-Platform Development',
        'Native iOS Development',
        'Native Android Development',
        'UI/UX Design',
        'API Integration',
        'Push Notifications',
        'App Store Optimization',
        'Performance Optimization'
      ],
      roadmap: [
        { step: 1, title: 'Mobile Strategy', description: 'Defining mobile strategy, platform selection, and technical approach for optimal user engagement.' },
        { step: 2, title: 'Wireframing', description: 'Creating detailed wireframes and user flow diagrams for intuitive mobile experience.' },
        { step: 3, title: 'Design System', description: 'Developing consistent design system with mobile-first approach and platform guidelines.' },
        { step: 4, title: 'Development', description: 'Agile development with regular testing on multiple devices and screen sizes.' },
        { step: 5, title: 'Testing', description: 'Comprehensive testing including device compatibility, performance, and user acceptance testing.' },
        { step: 6, title: 'App Store Submission', description: 'Preparing app store submissions with optimized metadata and compliance requirements.' },
        { step: 7, title: 'Launch & Marketing', description: 'App launch with marketing support and ongoing updates based on user feedback.' }
      ]
    },
    {
      type: 'enterprise-solutions',
      title: 'Enterprise Software Solutions',
      description: 'Large-scale enterprise applications with advanced features, security, and integration capabilities',
      platforms: ['Java', 'C#', 'Python', 'Microservices', 'Cloud Platforms'],
      services: [
        'Enterprise Architecture',
        'Microservices Development',
        'API Gateway Implementation',
        'Security & Compliance',
        'Data Integration',
        'Scalability Solutions',
        'Legacy System Integration',
        'Cloud Migration'
      ],
      roadmap: [
        { step: 1, title: 'Enterprise Analysis', description: 'Comprehensive analysis of enterprise requirements, existing systems, and integration needs.' },
        { step: 2, title: 'Architecture Planning', description: 'Designing enterprise-grade architecture with scalability, security, and performance considerations.' },
        { step: 3, title: 'Security Framework', description: 'Implementing enterprise security standards, compliance requirements, and access controls.' },
        { step: 4, title: 'Development', description: 'Enterprise development with microservices architecture and continuous integration practices.' },
        { step: 5, title: 'Integration Testing', description: 'Testing integration with existing systems, third-party services, and data migration.' },
        { step: 6, title: 'Deployment', description: 'Enterprise deployment with monitoring, backup, and disaster recovery systems.' },
        { step: 7, title: 'Training & Support', description: 'Comprehensive user training and ongoing enterprise support with documentation.' }
      ]
    },
    {
      type: 'cloud-solutions',
      title: 'Cloud-Based Solutions',
      description: 'Scalable cloud applications with modern DevOps practices and infrastructure automation',
      platforms: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      services: [
        'Cloud Architecture Design',
        'Containerization',
        'DevOps Implementation',
        'Auto-scaling Solutions',
        'Cloud Security',
        'Monitoring & Analytics',
        'Cost Optimization',
        'Disaster Recovery'
      ],
      roadmap: [
        { step: 1, title: 'Cloud Assessment', description: 'Evaluating current infrastructure and determining optimal cloud migration strategy.' },
        { step: 2, title: 'Cloud Architecture', description: 'Designing scalable cloud architecture with security, performance, and cost optimization.' },
        { step: 3, title: 'Migration Planning', description: 'Planning migration strategy with minimal downtime and data integrity preservation.' },
        { step: 4, title: 'Implementation', description: 'Implementing cloud solutions with automation, monitoring, and security best practices.' },
        { step: 5, title: 'Testing', description: 'Comprehensive testing of cloud infrastructure, applications, and disaster recovery procedures.' },
        { step: 6, title: 'Go-Live', description: 'Smooth migration with monitoring and immediate support for any issues.' },
        { step: 7, title: 'Optimization', description: 'Continuous optimization of cloud resources, costs, and performance monitoring.' }
      ]
    },
    {
      type: 'integration-services',
      title: 'System Integration Services',
      description: 'Seamless integration of disparate systems with APIs, middleware, and data synchronization',
      platforms: ['REST APIs', 'GraphQL', 'Message Queues', 'ETL Tools', 'Middleware'],
      services: [
        'API Development',
        'Legacy System Integration',
        'Data Migration',
        'Real-time Synchronization',
        'Workflow Automation',
        'Third-party Integrations',
        'Data Transformation',
        'Monitoring & Alerts'
      ],
      roadmap: [
        { step: 1, title: 'Integration Assessment', description: 'Analyzing existing systems, data formats, and integration requirements.' },
        { step: 2, title: 'Integration Design', description: 'Designing integration architecture with APIs, middleware, and data flow optimization.' },
        { step: 3, title: 'API Development', description: 'Developing robust APIs with proper documentation, versioning, and security.' },
        { step: 4, title: 'Data Mapping', description: 'Creating data transformation rules and mapping between different system formats.' },
        { step: 5, title: 'Integration Testing', description: 'Testing integration flows, data accuracy, and error handling mechanisms.' },
        { step: 6, title: 'Deployment', description: 'Deploying integration solutions with monitoring and rollback capabilities.' },
        { step: 7, title: 'Monitoring', description: 'Continuous monitoring of integration health, performance, and data quality.' }
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
    }`}>
      <Header />

      {/* Hero Section */}
      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
                isDark
                  ? 'bg-white/10 border border-white/20 text-indigo-200'
                  : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-blue-500/70 text-white shadow-lg'
              }`}>
                <span className={`w-2 h-2 rounded-full mr-3 ${
                  isDark ? 'bg-blue-400' : 'bg-white'
                }`}></span>
{t('softdev.badge')}
              </div>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight ${
                isDark
                  ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
              }`}>
{t('softdev.title')}
              </h1>
              <p className={`text-lg sm:text-xl leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
{t('softdev.subtitle')}
              </p>
            </div>
            
            {/* Right Side - Hero Image */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden transform hover:rotate-2 transition-transform duration-500 shadow-2xl hover:shadow-3xl">
              <Image
                src="/assets/services/software-dev-banner.jpeg"
                alt="Software Development Services"
                fill
                className="object-cover rounded-3xl"
              />
              {isDark && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
              )}
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
              {t('softdev.projectTypes.title')}
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
{t('softdev.projectTypes.subtitle')}
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
                    Types of Software Solutions
                  </h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
      {t('softdev.projectTypes.subtitle')}
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
{t('softdev.projectTypes.custom.title')}
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.projectTypes.custom.description')}
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
{t('softdev.projectTypes.mobile.title')}
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.projectTypes.mobile.description')}
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
{t('softdev.projectTypes.enterprise.title')}
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.projectTypes.enterprise.description')}
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
{t('softdev.projectTypes.integration.title')}
                      </h4>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.projectTypes.integration.description')}
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
              {t('softdev.techStack.title')}
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
{t('softdev.techStack.subtitle')}
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
                    Our Technology Stack
                  </h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
      {t('softdev.techStack.subtitle')}
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
                                {/* Tech Image */}
                                <div className="flex-shrink-0 w-full lg:w-80 h-48 rounded-xl overflow-hidden relative">
                                  <Image
                                    src={tech.image}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                  />
                                  {/* Logo Overlay */}
                                  <div className="absolute top-3 right-3 w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                      src={tech.logo}
                                      alt={`${tech.name} logo`}
                                      fill
                                      className="object-contain p-1 bg-white/90"
                                    />
                                  </div>
                                </div>
                                
                                {/* Tech Info */}
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
                                    In Our Tech Stack
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Navigation Dots */}
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
                        {t('softdev.techStack.mobile')}
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.techStack.mobile.desc1')}
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.techStack.mobile.desc2')}
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
                        {t('softdev.techStack.backend')}
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.techStack.backend.desc1')}
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.techStack.backend.desc2')}
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
                        {t('softdev.techStack.cloud')}
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.techStack.cloud.desc1')}
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.techStack.cloud.desc2')}
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
                        {t('softdev.techStack.database')}
                      </h4>
                      <p className={`text-base leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.techStack.database.desc1')}
                      </p>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
{t('softdev.techStack.database.desc2')}
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
              {t('softdev.caseStudies.title')}
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
{t('softdev.caseStudies.subtitle')}
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
                    {t('softdev.caseStudies.readMore')}
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
              {t('softdev.process.title')}
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
{t('softdev.process.subtitle')}
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
                      {/* Enhanced Roadmap with Zig-Zag Layout */}
                      <div className="mb-8">
                        <h4 className={`text-lg font-semibold mb-6 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          Development Roadmap
                        </h4>
                        <div className="space-y-12">
                          {process.roadmap.map((step, index) => (
                            <div key={index} className={`flex flex-col ${
                              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } items-center gap-8`}>
                              {/* Content */}
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
                                    {(step as any).details && (
                                      <div className={`p-4 rounded-lg ${
                                        isDark
                                          ? 'bg-white/5 border border-white/10'
                                          : 'bg-gray-50 border border-gray-200'
                                      }`}>
                                        <p className={`text-sm ${
                                          isDark ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                          {(step as any).details}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Image */}
                              <div className="flex-shrink-0 w-full max-w-sm lg:w-80">
                                <div className={`relative h-48 rounded-xl overflow-hidden ${
                                  isDark
                                    ? 'bg-white/5 border border-white/10'
                                    : 'bg-gray-100 border border-gray-200'
                                }`}>
                                  <Image
                                    src={(step as any).image || '/assets/services/process-step.jpg'}
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
                                      Step {step.step}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Services Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className={`font-semibold mb-3 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            Technologies & Platforms
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
                            Services Included
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
              {t('softdev.consultation.title')}
            </h2>
            <p className={`text-lg sm:text-xl mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
{t('softdev.consultation.content')}
            </p>
            
            {/* Additional Services */}
            <div className={`mb-8 p-6 rounded-2xl ${
              isDark
                ? 'bg-white/5 border border-white/10'
                : 'bg-white/70 border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Additional Services Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>Code Documentation</strong>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Comprehensive technical documentation</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>Deployment Support</strong>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Complete deployment and setup assistance</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <strong className={isDark ? 'text-blue-400' : 'text-blue-600'}>Training & Support</strong>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>User training and ongoing support</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
              }`}>
                {t('softdev.consultation.button')}
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
                  Sample Operation Manual (PDF)
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
              {t('softdev.mission.title')}
            </h2>
            <p className={`text-lg sm:text-xl leading-relaxed mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
{t('softdev.mission.content')}
            </p>
          </div>

          <div className="mb-12">
            <h3 className={`text-2xl font-semibold mb-8 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
{t('softdev.mission.industries')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: 'Healthcare', 
                  image: '/assets/services/health.jpeg',
                  description: 'HIPAA-compliant healthcare software, patient management systems, telemedicine platforms, and secure medical data management solutions.'
                },
                { 
                  name: 'FinTech', 
                  image: '/assets/services/fintech.jpeg',
                  description: 'Secure financial applications, payment gateways, digital banking solutions, cryptocurrency platforms, and compliance management systems.'
                },
                { 
                  name: 'E-commerce', 
                  image: '/assets/services/ecommerce.jpeg',
                  description: 'Custom e-commerce platforms, inventory management systems, payment processing solutions, and customer relationship management tools.'
                },
                { 
                  name: 'EdTech', 
                  image: '/assets/services/edutech.jpeg',
                  description: 'Learning management systems, online education platforms, student information systems, and interactive educational applications.'
                },
                { 
                  name: 'SaaS Platforms', 
                  image: '/assets/services/saas.jpeg',
                  description: 'Scalable software-as-a-service solutions, multi-tenant applications, subscription management, and cloud-based business tools.'
                },
                { 
                  name: 'Manufacturing', 
                  image: '/assets/services/manufacturing.jpeg',
                  description: 'Enterprise resource planning systems, supply chain management, production monitoring, and industrial automation software.'
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
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Default State */}
                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                      <h4 className={`text-xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {industry.name}
                      </h4>
                    </div>
                    
                    {/* Hover State */}
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
                  
                  {/* Overlay Gradient for Better Text Readability */}
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
{t('softdev.mission.ending')}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}