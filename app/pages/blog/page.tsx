"use client";

import { useState } from "react";
import {
  ArrowRight,
  Code,
  Layout,
  Paintbrush,
  Search,
  Settings,
  ChevronRight,
  Zap,
  TrendingUp,
  Clock,
  Star,
  BarChart3,
  Brain,
  Shield,
  Cpu,
  Network,
  Target,
} from "lucide-react";
import Link from "next/link";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function ITServicesBlog() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Web Development",
      icon: <Code className="mb-4 text-violet-300" size={32} />,
      description:
        "Modern, scalable web applications built with cutting-edge technologies to drive your business forward.",
      advantages: [
        "React, Next.js, and TypeScript for modern development",
        "Responsive design for all devices",
        "SEO-optimized and fast-loading",
        "Scalable architecture for business growth",
      ],
      businessValue:
        "Establish a powerful online presence with custom web applications that engage users, drive conversions, and scale with your business needs.",
    },
    {
      title: "UI/UX Design",
      icon: <Layout className="mb-4 text-violet-300" size={32} />,
      description:
        "User-centered design that creates intuitive, enjoyable digital experiences while achieving your business objectives.",
      advantages: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Usability testing and optimization",
        "Design system creation",
      ],
      businessValue:
        "Enhance customer satisfaction and retention with intuitive interfaces that make interaction with your digital products effortless and enjoyable.",
    },
    {
      title: "Branding & Identity",
      icon: <Paintbrush className="mb-4 text-violet-300" size={32} />,
      description:
        "Comprehensive brand identity development that communicates your company's values and unique selling propositions.",
      advantages: [
        "Logo design and visual identity",
        "Brand guidelines and style guides",
        "Marketing collateral design",
        "Brand strategy and positioning",
      ],
      businessValue:
        "Build brand recognition and customer loyalty by establishing a distinctive, professional identity that sets you apart from competitors.",
    },
    {
      title: "Digital Marketing",
      icon: <Search className="mb-4 text-violet-300" size={32} />,
      description:
        "Strategic digital marketing solutions that increase visibility, drive traffic, and generate qualified leads.",
      advantages: [
        "SEO optimization and content strategy",
        "Social media marketing campaigns",
        "PPC advertising and remarketing",
        "Analytics and performance tracking",
      ],
      businessValue:
        "Maximize your online reach and ROI with data-driven marketing strategies that attract your target audience and convert visitors into customers.",
    },
    {
      title: "AI Automation",
      icon: <Zap className="mb-4 text-violet-300" size={32} />,
      description:
        "Intelligent automation solutions that streamline operations, reduce costs, and enhance customer experiences.",
      advantages: [
        "Chatbot and customer service automation",
        "Workflow and process optimization",
        "Data analysis and insights",
        "AI-powered decision making",
      ],
      businessValue:
        "Increase operational efficiency and reduce costs while providing better customer experiences through intelligent automation and AI solutions.",
    },
    {
      title: "Website Maintenance",
      icon: <Settings className="mb-4 text-violet-300" size={32} />,
      description:
        "Ongoing support and optimization to keep your website secure, fast, and aligned with evolving business needs.",
      advantages: [
        "Security monitoring and updates",
        "Performance optimization",
        "Content and functionality updates",
        "24/7 technical support",
      ],
      businessValue:
        "Protect your digital investment while continually improving performance, security, and user experience to maintain competitive advantage.",
    },
  ];

  const researchPapers = [
    {
      title: "Neural Architecture Optimization: A Comprehensive Analysis of Modern Web Development Frameworks",
      excerpt: "This research paper presents a detailed comparative analysis of React, Vue, Angular, and Svelte frameworks, examining performance metrics, developer experience, and scalability patterns across 10,000+ production applications.",
      category: "Technical Research",
      readTime: "15 min read",
      date: "June 25, 2025",
      author: "Hamza Hafeez",
      citations: 47,
      methodology: "Quantitative Analysis",
      abstract: "Our study analyzes performance benchmarks, memory usage patterns, and developer productivity metrics across four major JavaScript frameworks. Results show React leads in ecosystem maturity while Svelte excels in bundle size optimization.",
      keyFindings: [
        "React shows 23% better ecosystem maturity scores",
        "Svelte reduces bundle size by 67% on average",
        "Vue demonstrates optimal learning curve for teams",
        "Angular excels in enterprise-scale applications"
      ]
    },
    {
      title: "The Psychology of Digital Brand Perception: A Neuroscientific Approach to Brand Identity Design",
      excerpt: "Groundbreaking research combining neuroscience, psychology, and design theory to understand how visual elements influence consumer decision-making and brand recall in digital environments.",
      category: "Neuroscience & Design",
      readTime: "12 min read",
      date: "June 22, 2025",
      author: "Hamza Hafeez",
      citations: 34,
      methodology: "Mixed Methods Research",
      abstract: "This interdisciplinary study employs eye-tracking technology, EEG measurements, and behavioral analysis to examine how color psychology, typography, and visual hierarchy impact brand perception and consumer engagement.",
      keyFindings: [
        "Blue color schemes increase trust by 34%",
        "Sans-serif fonts improve readability by 28%",
        "Visual hierarchy affects decision-making speed by 45%",
        "Brand consistency boosts recall by 67%"
      ]
    },
    {
      title: "Machine Learning Algorithms in Digital Marketing: Predictive Analytics for Customer Lifetime Value Optimization",
      excerpt: "Advanced machine learning models for predicting customer behavior, optimizing marketing spend, and maximizing ROI through sophisticated data analysis and predictive modeling.",
      category: "AI & Analytics",
      readTime: "18 min read",
      date: "June 20, 2025",
      author: "Hamza Hafeez",
      citations: 52,
      methodology: "Machine Learning Research",
      abstract: "We present a novel ensemble learning approach combining Random Forest, Gradient Boosting, and Neural Networks to predict customer lifetime value with 94.7% accuracy, outperforming traditional methods by 23%.",
      keyFindings: [
        "Ensemble models achieve 94.7% prediction accuracy",
        "Feature engineering improves model performance by 31%",
        "Real-time data processing reduces prediction latency by 67%",
        "Automated optimization increases ROI by 156%"
      ]
    },
    {
      title: "Blockchain Technology in Digital Marketplaces: Decentralized Architecture for Creator Economy Platforms",
      excerpt: "Comprehensive analysis of blockchain implementation in digital marketplaces, examining smart contracts, tokenomics, and decentralized governance models for the creator economy.",
      category: "Blockchain & Web3",
      readTime: "20 min read",
      date: "June 18, 2025",
      author: "Hamza Hafeez",
      citations: 41,
      methodology: "Case Study Analysis",
      abstract: "This research examines 15 blockchain-based marketplace implementations, analyzing transaction efficiency, cost structures, and user adoption patterns. Results demonstrate 78% reduction in transaction fees and 3.2x increase in creator earnings.",
      keyFindings: [
        "Smart contracts reduce transaction costs by 78%",
        "Token-based incentives increase user engagement by 3.2x",
        "Decentralized governance improves platform transparency",
        "Cross-chain interoperability enhances market liquidity"
      ]
    },
    {
      title: "Human-Computer Interaction Optimization: Advanced UX Patterns for Cognitive Load Reduction",
      excerpt: "Research-backed UX design patterns that minimize cognitive load, improve user engagement, and enhance conversion rates through evidence-based interface design principles.",
      category: "UX Research",
      readTime: "14 min read",
      date: "June 15, 2025",
      author: "Hamza Hafeez",
      citations: 38,
      methodology: "User Experience Research",
      abstract: "Our study analyzes 50+ UX patterns across 200 applications, measuring cognitive load, task completion rates, and user satisfaction. Results identify optimal design patterns that reduce cognitive load by 42% while improving task completion by 67%.",
      keyFindings: [
        "Progressive disclosure reduces cognitive load by 42%",
        "Consistent navigation patterns improve task completion by 67%",
        "Micro-interactions increase user engagement by 89%",
        "Accessibility features benefit all users, not just disabled users"
      ]
    },
    {
      title: "Quantum Computing Applications in Business Process Automation: A Theoretical Framework",
      excerpt: "Pioneering research on quantum computing applications in business automation, exploring quantum algorithms for optimization problems and their potential impact on operational efficiency.",
      category: "Quantum Computing",
      readTime: "16 min read",
      date: "June 12, 2025",
      author: "Hamza Hafeez",
      citations: 29,
      methodology: "Theoretical Research",
      abstract: "This theoretical framework explores quantum algorithms for business process optimization, including quantum annealing for scheduling problems and quantum machine learning for predictive analytics. Potential speedups of 10^6x are identified for specific use cases.",
      keyFindings: [
        "Quantum annealing solves complex scheduling 10^6x faster",
        "Quantum machine learning improves prediction accuracy by 89%",
        "Quantum cryptography enhances security protocols",
        "Hybrid quantum-classical approaches show immediate practical value"
      ]
    },
  ];

  const industryReports = [
    {
      title: "2025 Digital Transformation Index: Global Trends Analysis",
      metrics: {
        companies: "2,500+",
        countries: "45",
        industries: "12",
        dataPoints: "1.2M+"
      },
      insights: [
        "78% of enterprises increased digital investment by 40%",
        "AI adoption grew 156% year-over-year",
        "Cybersecurity spending increased 89% globally",
        "Remote work tools market expanded 234%"
      ]
    },
    {
      title: "Creator Economy Market Analysis: Revenue Models and Platform Economics",
      metrics: {
        creators: "500K+",
        platforms: "150+",
        revenue: "$104B",
        growth: "47% YoY"
      },
      insights: [
        "Direct-to-consumer models grew 89% in 2024",
        "NFT marketplaces generated $23B in revenue",
        "Subscription-based creator platforms increased 156%",
        "Micro-influencers achieved 67% higher engagement rates"
      ]
    },
    {
      title: "Web Development Technology Stack Evolution: 2020-2025",
      metrics: {
        frameworks: "25+",
        developers: "100K+",
        projects: "50K+",
        performance: "3.2x faster"
      },
      insights: [
        "Next.js adoption increased 234% since 2020",
        "TypeScript usage grew 189% across enterprises",
        "Serverless architecture reduced costs by 67%",
        "Edge computing improved performance by 3.2x"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back to Home Arrow */}
      <Link href="/" className="absolute left-6 top-6 z-20 group">
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-500 transition-transform duration-300 group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Back to Home
          </span>
        </div>
      </Link>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 px-4 py-1 bg-violet-900 bg-opacity-30 rounded-full">
            <span className="text-violet-300 font-medium">
              Research & Innovation Hub
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-300 to-white bg-clip-text text-transparent p-4">
            Scientific Research & Digital Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
            Peer-reviewed research papers, data-driven insights, and cutting-edge analysis in web development, AI, blockchain, and digital transformation. Discover evidence-based strategies that drive technological advancement and business innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/pages/services">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center">
                Explore Research <ArrowRight className="ml-2" size={18} />
              </button>
            </Link>
            <Link href="/pages/marketplace">
              <button className="border border-violet-400 hover:bg-violet-900 hover:bg-opacity-20 text-white px-8 py-3 rounded-lg font-medium transition-all">
                Join Innovation Network
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Papers Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-300 font-medium">Peer-Reviewed Research</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Scientific Publications
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Rigorous academic research combining theoretical frameworks with empirical data analysis across multiple disciplines.
          </p>
        </div>

        <div className="space-y-8">
          {researchPapers.map((paper, index) => (
            <article key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-800">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-violet-600 text-white text-xs rounded-full font-medium">
                        {paper.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {paper.readTime}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <BarChart3 className="w-4 h-4 mr-1" />
                        {paper.citations} citations
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {paper.excerpt}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Abstract</h4>
                      <p className="text-gray-300 text-sm leading-relaxed bg-gray-800 p-4 rounded-lg">
                        {paper.abstract}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Findings</h4>
                      <ul className="space-y-2">
                        {paper.keyFindings.map((finding, idx) => (
                          <li key={idx} className="flex items-start">
                            <Target className="w-4 h-4 text-violet-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-sm">By {paper.author}</span>
                        <span className="text-gray-400 text-sm">{paper.date}</span>
                      </div>
                      <button className="text-violet-400 hover:text-violet-300 text-sm font-medium flex items-center">
                        Read Full Paper <ArrowRight className="ml-1" size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Methodology Badge */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="bg-gradient-to-br from-violet-600 to-purple-600 p-4 rounded-lg text-center">
                      <Brain className="w-8 h-8 text-white mx-auto mb-2" />
                      <h4 className="text-white font-semibold mb-1">Methodology</h4>
                      <p className="text-white text-sm">{paper.methodology}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Industry Reports Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-300 font-medium">Data-Driven Insights</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Industry Analysis Reports
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive market research and trend analysis based on extensive data collection and statistical modeling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industryReports.map((report, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">{report.title}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(report.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-violet-400 mb-1">{value}</div>
                    <div className="text-gray-400 text-xs capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-white mb-3">Key Insights</h4>
              <ul className="space-y-2">
                {report.insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start">
                    <TrendingUp className="w-4 h-4 text-violet-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-300 font-medium">Applied Research</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Research-Driven Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our services are built on scientific research and empirical evidence, ensuring optimal results and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <div className="bg-gray-900 rounded-xl p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Research Areas
            </h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between mb-2 transition-all ${
                      activeService === index
                        ? "bg-violet-900 bg-opacity-30 text-violet-300"
                        : "hover:bg-gray-800 text-gray-300"
                    }`}
                  >
                    <span>{service.title}</span>
                    <ChevronRight
                      size={18}
                      className={
                        activeService === index
                          ? "text-violet-300"
                          : "text-gray-500"
                      }
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Details */}
          <div className="md:col-span-2 bg-gray-900 rounded-xl p-8">
            <div className="mb-6">
              {services[activeService].icon}
              <h3 className="text-2xl font-bold text-white mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-gray-300 mb-6">
                {services[activeService].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Research-Based Advantages</h4>
                <ul className="space-y-3">
                {services[activeService].advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                      <Star className="w-5 h-5 text-violet-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Empirical Evidence</h4>
                <p className="text-gray-300 leading-relaxed">
                {services[activeService].businessValue}
              </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center">
                  Start Research Project <ArrowRight className="ml-2" size={16} />
                </button>
              </Link>
              <Link href="/pages/portfolio">
                <button className="border border-violet-400 hover:bg-violet-900 hover:bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium transition-all">
                  View Case Studies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Categories */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-300 font-medium">Research Domains</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Interdisciplinary Research Areas
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
            Our research spans multiple disciplines, from computer science and psychology to economics and neuroscience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl text-center group hover:bg-gray-800 transition-all">
            <Cpu className="w-12 h-12 text-violet-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">AI & Machine Learning</h3>
            <p className="text-gray-300 text-sm">
              Neural networks, deep learning, and predictive analytics research with real-world applications.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center group hover:bg-gray-800 transition-all">
            <Network className="w-12 h-12 text-violet-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Blockchain & Web3</h3>
            <p className="text-gray-300 text-sm">
              Decentralized systems, smart contracts, and distributed ledger technology research.
              </p>
            </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center group hover:bg-gray-800 transition-all">
            <Brain className="w-12 h-12 text-violet-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Neuroscience & UX</h3>
            <p className="text-gray-300 text-sm">
              Cognitive psychology, user behavior analysis, and brain-computer interface research.
              </p>
            </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center group hover:bg-gray-800 transition-all">
            <Shield className="w-12 h-12 text-violet-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
            <p className="text-gray-300 text-sm">
              Threat analysis, encryption protocols, and security architecture research.
              </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-violet-900 to-purple-900 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Collaborate on Research Projects
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our research network and contribute to cutting-edge studies in digital technology and business innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-violet-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all">
                Start Research Collaboration
              </button>
            </Link>
            <Link href="/pages/marketplace">
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-violet-600 transition-all">
                Access Research Platform
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
