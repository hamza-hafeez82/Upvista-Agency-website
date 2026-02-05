'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function RetailSystemCaseStudy() {
  useLanguage();
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <span className={`inline-block px-4 py-1.5 text-sm font-medium border ${isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700'
              }`}>
              CASE STUDY
            </span>
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Enterprise Retail Management System
          </h1>
          <p className={`text-xl md:text-2xl mb-12 max-w-4xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Comprehensive retail management software solution for inventory tracking, sales analytics, and customer management built with Spring Boot and Java.
          </p>

          {/* Project Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
            <div>
              <div className={`text-sm font-medium mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Client
              </div>
              <div className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                Multi-Location Retail Chain
              </div>
            </div>
            <div>
              <div className={`text-sm font-medium mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Industry
              </div>
              <div className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                Retail & Commerce
              </div>
            </div>
            <div>
              <div className={`text-sm font-medium mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Duration
              </div>
              <div className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                6 Months
              </div>
            </div>
            <div>
              <div className={`text-sm font-medium mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Technology
              </div>
              <div className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                Spring Boot, Java
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Executive Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                We developed a comprehensive enterprise retail management system for a growing retail chain operating 15+ locations. The client was struggling with fragmented systems, manual inventory processes, and lack of real-time visibility across their operations.
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Our solution, built with Spring Boot and Java, unified all retail operations into a single, scalable platform capable of handling millions of transactions while maintaining high performance and reliability.
              </p>
            </div>
            <div className={`p-8 border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Key Results
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
                  <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>40%</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Reduction in operational costs</div>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
                  <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>99.8%</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Inventory tracking accuracy</div>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
                  <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>25%</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Increase in overall revenue</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>8 Months</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>ROI achievement timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The Challenge
          </h2>
          <div className="space-y-8">
            <div className={`p-8 border-l-4 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-900'}`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Fragmented Systems and Data Silos
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                The client operated multiple disconnected systems for inventory, sales, and customer data, leading to inconsistent information and time-consuming manual data reconciliation across departments. This fragmentation resulted in delayed decision-making and operational inefficiencies.
              </p>
            </div>

            <div className={`p-8 border-l-4 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-900'}`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Inventory Management Inefficiencies
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Manual stock counting and lack of real-time tracking resulted in frequent stockouts, overstocking issues, and a 15% inventory shrinkage rate. The absence of automated reorder points led to poor inventory turnover and tied-up capital in excess stock.
              </p>
            </div>

            <div className={`p-8 border-l-4 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-900'}`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Limited Analytics and Reporting Capabilities
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Lack of actionable insights made it difficult to identify sales trends, optimize pricing strategies, or make data-driven decisions about purchasing and merchandising. Reporting was manual, time-intensive, and often outdated by the time it reached decision-makers.
              </p>
            </div>

            <div className={`p-8 border-l-4 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-900'}`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Suboptimal Customer Experience
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Without integrated customer data, staff couldn't provide personalized service, track purchase history effectively, or implement comprehensive loyalty programs. This resulted in missed opportunities for customer retention and upselling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The Solution
          </h2>
          <p className={`text-lg leading-relaxed mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We architected and developed a robust, scalable retail management system using Spring Boot and Java, leveraging enterprise-grade technologies to create a solution that handles millions of transactions while maintaining high performance and reliability.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Microservices Architecture
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Built with Spring Boot using a microservices architecture that allows independent scaling and deployment of different modules. RESTful APIs ensure seamless integration with existing systems and third-party services.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Enterprise Database Solution
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                PostgreSQL database with optimized queries and indexing strategies. Implemented Spring Data JPA for efficient data access and Hibernate for robust ORM capabilities ensuring data integrity and performance.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Real-Time Data Processing
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Integrated Apache Kafka for real-time event streaming, enabling instant inventory updates across all locations. Redis caching layer reduces database load and ensures lightning-fast response times for frequently accessed data.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Enterprise Security
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Implemented Spring Security with JWT authentication, role-based access control, and comprehensive audit trails. All data is encrypted at rest and in transit, meeting industry compliance standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Core Features
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Intelligent Inventory Management
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Real-time stock tracking across multiple warehouses and stores
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Automated reorder points with smart purchase suggestions
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Barcode and QR code scanning integration
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Stock transfer management between locations
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Batch and serial number tracking for compliance
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Low stock alerts and predictive inventory analytics
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Point of Sale System
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Fast checkout with multi-payment method support
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Receipt printing and email delivery
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Returns and exchange management
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Discount and promotion engine
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Cash drawer and shift management
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Split payments and partial refunds
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Customer Relationship Management
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  360-degree customer profiles with complete purchase history
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Loyalty points and rewards program management
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Personalized marketing campaign tools
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Customer segmentation and behavioral analytics
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  SMS and email notification system
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Customer feedback and satisfaction tracking
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Advanced Analytics and Reporting
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Real-time sales dashboards with customizable KPIs
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Comprehensive reporting suite (sales, inventory, P&L)
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Predictive analytics for demand forecasting
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Employee performance tracking and metrics
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Export functionality in multiple formats
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Automated scheduled report generation
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Supply Chain Management
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Vendor management and purchase order automation
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Automated procurement workflows
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Goods receiving and quality control checks
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Invoice reconciliation and payment processing
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Supplier performance analytics
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Multi-currency support for international suppliers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technical Architecture
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Backend
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Spring Boot 3.1</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Core application framework</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Java 17</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Modern LTS version</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Spring Data JPA</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Data access layer</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Hibernate</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>ORM implementation</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Spring Security</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Authentication & authorization</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Database & Caching
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>PostgreSQL 15</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Primary relational database</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Redis</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Distributed caching layer</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Elasticsearch</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Full-text search engine</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Flyway</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Database version control</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>HikariCP</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Connection pooling</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Integration
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Apache Kafka</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Event streaming platform</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>RabbitMQ</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Message queue broker</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>REST APIs</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>External system integration</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>WebSocket</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Real-time bidirectional communication</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Spring Cloud</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Microservices infrastructure</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Frontend
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>React 18</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Modern UI library</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>TypeScript</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Type-safe JavaScript</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Material-UI</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Component library</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Redux Toolkit</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>State management</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Axios</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>HTTP client library</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                DevOps
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Docker</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Application containerization</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Kubernetes</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Container orchestration</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Jenkins</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>CI/CD automation</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>AWS</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Cloud infrastructure</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Prometheus & Grafana</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Monitoring and alerting</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Testing & Quality
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>JUnit 5</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Unit testing framework</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Mockito</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Mocking framework</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>TestContainers</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Integration testing</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>SonarQube</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Code quality analysis</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>JMeter</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Performance testing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Implementation Process
          </h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <div className={`text-sm font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Phase 01
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Discovery & Analysis
                </h3>
              </div>
              <div className="md:col-span-9">
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Conducted comprehensive business process mapping and stakeholder interviews across all 15 locations. Identified pain points, documented workflows, and created detailed functional specifications.
                </p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Business process documentation • Technical feasibility study • Database schema design • Security requirements assessment • Data migration planning
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-12 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <div className="md:col-span-3">
                <div className={`text-sm font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Phase 02
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Agile Development
                </h3>
              </div>
              <div className="md:col-span-9">
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Implemented 2-week sprints with continuous delivery. Built core modules incrementally with regular client feedback and demonstrations. Maintained 95%+ code coverage throughout development.
                </p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Sprint-based development • Continuous integration • Code reviews • Unit testing • Client demonstrations • Iterative refinement
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-12 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <div className="md:col-span-3">
                <div className={`text-sm font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Phase 03
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Quality Assurance
                </h3>
              </div>
              <div className="md:col-span-9">
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Rigorous testing at every layer ensuring system reliability and performance. Conducted load testing to validate the system could handle 10,000+ concurrent users and process 1M+ daily transactions.
                </p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Unit testing • Integration testing • Performance testing • Security audits • User acceptance testing • Load testing
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-12 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <div className="md:col-span-3">
                <div className={`text-sm font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Phase 04
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Deployment & Training
                </h3>
              </div>
              <div className="md:col-span-9">
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Phased rollout starting with pilot stores, followed by comprehensive staff training and gradual migration of all locations. Provided 24/7 support during the transition period.
                </p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Pilot deployment • Staff training programs • Data migration • System cutover • Post-launch support • Documentation delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Business Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Operational Efficiency
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>40% reduction in operational costs</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Through automation of manual processes and elimination of redundant systems</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>70% faster checkout process</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Streamlined POS system improved customer experience and throughput</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>85% reduction in manual data entry</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Automated integration between systems eliminated duplicate work</p>
                </div>
                <div>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Real-time visibility across all locations</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Management gained instant access to critical business metrics</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Inventory Management
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>99.8% inventory accuracy</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Real-time tracking eliminated discrepancies and improved stock control</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>60% reduction in inventory shrinkage</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Better tracking and security measures reduced losses significantly</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>45% decrease in stockout incidents</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Automated reorder points ensured optimal stock levels</p>
                </div>
                <div>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>30% improvement in inventory turnover</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Data-driven insights optimized purchasing and merchandising</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Revenue Growth
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>25% increase in overall revenue</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Better inventory management and customer insights drove sales growth</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>35% increase in loyalty program participation</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Integrated CRM system made customer engagement seamless</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>18% improvement in profit margins</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Reduced costs and improved pricing strategies increased profitability</p>
                </div>
                <div>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>ROI achieved in 8 months</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Rapid value realization exceeded client expectations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Customer Experience
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>92% customer satisfaction rating</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Faster service and personalized experiences improved satisfaction</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>50% faster query resolution time</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Staff had immediate access to customer history and preferences</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Personalized recommendations</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Data-driven insights enabled targeted product suggestions</p>
                </div>
                <div>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Omnichannel experience</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Consistent customer experience across all touchpoints</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-8 border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              System Performance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>10,000+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Concurrent users supported</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>1M+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Daily transactions processed</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>99.9%</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>System uptime</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>&lt;100ms</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Average response time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className={`p-12 border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <p className={`text-2xl leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              "The retail management system developed by Upvista has completely transformed our operations. We now have real-time visibility across all our stores, inventory accuracy has never been better, and our staff loves how intuitive the system is. The ROI exceeded our expectations, and the team's expertise in Spring Boot and enterprise Java was evident throughout the project."
            </p>
            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
              <div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Operations Director</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Leading Retail Chain</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to Transform Your Retail Operations?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's build a custom retail management solution tailored to your business needs. Our expert team specializes in enterprise Java applications that scale.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Services/software-development"
              className={`px-8 py-4 text-center font-semibold transition-all duration-300 ${isDark
                ? 'bg-white text-gray-900 hover:bg-gray-100'
                : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className={`px-8 py-4 text-center border font-semibold transition-all duration-300 ${isDark
                ? 'border-gray-700 text-white hover:bg-gray-900'
                : 'border-gray-900 text-gray-900 hover:bg-gray-50'
                }`}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
