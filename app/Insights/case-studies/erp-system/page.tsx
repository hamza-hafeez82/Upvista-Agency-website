'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function ERPSystemCaseStudy() {
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
            Enterprise Resource Planning System
          </h1>
          <p className={`text-xl md:text-2xl mb-12 max-w-4xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Advanced enterprise resource planning system with integrated modules for finance, HR, inventory, and business operations built with Spring Boot and Java.
          </p>

          {/* Project Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
            <div>
              <div className={`text-sm font-medium mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Client
              </div>
              <div className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                Global Manufacturing Corporation
              </div>
            </div>
            <div>
              <div className={`text-sm font-medium mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Industry
              </div>
              <div className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                Manufacturing & Enterprise
              </div>
            </div>
            <div>
              <div className={`text-sm font-medium mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Duration
              </div>
              <div className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                12 Months
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
                We developed a comprehensive enterprise resource planning (ERP) system for a global manufacturing corporation with operations spanning 25+ countries. The client needed to unify disparate legacy systems and streamline business processes across finance, human resources, supply chain, and operations.
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Our solution, built with Spring Boot and Java, delivered an integrated platform that provides end-to-end visibility, automates critical workflows, and enables data-driven decision-making across the entire organization.
              </p>
            </div>
            <div className={`p-8 border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Key Results
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
                  <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>55%</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Reduction in process cycle times</div>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
                  <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>98%</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Data accuracy across all modules</div>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
                  <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>$5M</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Annual cost savings realized</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>10 Months</div>
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
                Legacy System Complexity and Integration Challenges
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                The organization operated over 15 disparate legacy systems across different departments and regions, each with its own database and business logic. This fragmentation led to data inconsistencies, delayed reporting, and inability to get a unified view of business operations. Integration between systems was manual and error-prone.
              </p>
            </div>

            <div className={`p-8 border-l-4 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-900'}`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Inefficient Business Processes and Manual Workflows
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Critical business processes such as procurement, invoicing, and employee onboarding required multiple manual steps and approvals across different systems. This resulted in significant delays, bottlenecks, and high operational costs. Process visibility was limited, making it difficult to identify and address inefficiencies.
              </p>
            </div>

            <div className={`p-8 border-l-4 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-900'}`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Limited Real-Time Visibility and Reporting
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Management lacked real-time visibility into key business metrics. Financial reports took weeks to compile, inventory levels were outdated, and HR analytics were virtually non-existent. Decision-making was reactive rather than proactive, impacting the organization's ability to respond to market changes.
              </p>
            </div>

            <div className={`p-8 border-l-4 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-900'}`}>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Compliance and Audit Challenges
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Operating across multiple countries meant dealing with various regulatory requirements. The lack of standardized processes and audit trails made compliance difficult and costly. Preparing for audits was a resource-intensive process requiring extensive manual data gathering and validation.
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
            We architected a comprehensive ERP system using Spring Boot and Java that unifies all core business functions into a single, integrated platform. The solution provides real-time visibility, automates workflows, and ensures data consistency across the entire organization.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Modular Microservices Architecture
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Built using Spring Boot microservices architecture with clear domain boundaries for each business function. This allows independent development, deployment, and scaling of modules while maintaining system cohesion through well-defined APIs and event-driven communication.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Unified Data Platform
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Implemented a centralized data warehouse with PostgreSQL as the primary database and Elasticsearch for advanced search capabilities. Spring Data JPA with Hibernate ensures data integrity and optimized performance across all modules.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Intelligent Workflow Engine
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Developed a flexible workflow engine using Camunda BPM that automates business processes and approval chains. The system adapts to different regional requirements while maintaining standardized processes and comprehensive audit trails.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Enterprise-Grade Security
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Implemented comprehensive security using Spring Security with OAuth2 and JWT. Role-based access control (RBAC), multi-factor authentication, and complete audit logging ensure data security and regulatory compliance across all jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-20 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Core Modules
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Financial Management
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  General ledger with multi-currency and multi-entity support
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Accounts payable and receivable automation
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Fixed asset management and depreciation tracking
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Cash flow management and forecasting
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Financial reporting and consolidation
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Budget planning and variance analysis
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Human Resource Management
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Employee lifecycle management from hire to retire
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Payroll processing with tax compliance
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Time and attendance tracking
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Performance management and appraisals
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Talent acquisition and recruitment workflows
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Learning management and training programs
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Supply Chain and Inventory Management
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Real-time inventory tracking across all locations
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Procurement and purchase order management
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Supplier relationship management
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Warehouse management and logistics
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Demand planning and forecasting
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Quality control and inspection workflows
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Sales and Customer Management
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Quote-to-cash process automation
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Order management and fulfillment tracking
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Customer relationship management (CRM)
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Sales pipeline and opportunity management
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Contract management and renewals
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Customer service and support ticketing
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Manufacturing Operations
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Production planning and scheduling
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Bill of materials (BOM) management
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Work order management and tracking
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Shop floor control and monitoring
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Quality assurance and control
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Equipment maintenance management
                </p>
              </div>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Business Intelligence and Analytics
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Real-time executive dashboards and KPIs
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Advanced reporting and data visualization
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Predictive analytics and forecasting
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Custom report builder with drag-and-drop interface
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Data export in multiple formats
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Automated scheduled reporting
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
                Backend Framework
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Spring Boot 3.1</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Microservices foundation</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Java 17</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Enterprise LTS version</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Spring Data JPA</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Data persistence layer</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Hibernate</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Object-relational mapping</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Spring Security</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Security framework</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Database & Storage
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>PostgreSQL 15</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Primary RDBMS</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Redis</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Caching and session store</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Elasticsearch</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Search and analytics engine</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>MongoDB</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Document store for logs</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>MinIO</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Object storage for documents</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Integration & Messaging
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Apache Kafka</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Event streaming platform</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>RabbitMQ</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Message broker</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Camunda BPM</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Workflow engine</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>REST APIs</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Service communication</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>GraphQL</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Flexible data queries</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Frontend & UI
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>React 18</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>UI component library</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>TypeScript</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Type-safe development</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Ant Design</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Enterprise UI framework</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Redux Toolkit</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>State management</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Recharts</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Data visualization</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                DevOps & Infrastructure
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Docker</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Containerization</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Kubernetes</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Container orchestration</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Jenkins</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>CI/CD pipeline</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>AWS Cloud</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Cloud infrastructure</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Terraform</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Infrastructure as code</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Monitoring & Security
              </h3>
              <div className="space-y-3">
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Prometheus</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Metrics collection</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Grafana</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Monitoring dashboards</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>ELK Stack</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Log aggregation</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Vault</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Secrets management</div>
                </div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>SonarQube</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Code quality analysis</div>
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
                  Discovery & Planning
                </h3>
              </div>
              <div className="md:col-span-9">
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Conducted comprehensive enterprise assessment including process mapping, system inventory, and stakeholder interviews across all departments and regions. Created detailed roadmap with prioritized module rollout strategy.
                </p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Enterprise architecture design • Process re-engineering • Change management planning • Data migration strategy • Integration requirements analysis • Risk assessment
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-12 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <div className="md:col-span-3">
                <div className={`text-sm font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Phase 02
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Core Development
                </h3>
              </div>
              <div className="md:col-span-9">
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Built core ERP modules using agile methodology with 3-week sprints. Prioritized financial and HR modules first, followed by supply chain and manufacturing. Maintained continuous integration and automated testing throughout.
                </p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Microservices development • API design and implementation • Database schema optimization • Workflow automation • Integration development • Security implementation
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-12 border-t" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
              <div className="md:col-span-3">
                <div className={`text-sm font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Phase 03
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Testing & Integration
                </h3>
              </div>
              <div className="md:col-span-9">
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Comprehensive testing strategy including unit, integration, performance, and user acceptance testing. Conducted load testing to ensure system could handle 50,000+ concurrent users across global operations.
                </p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Automated testing • Load and stress testing • Security audits • Data migration validation • Integration testing • UAT coordination
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
                  Phased regional rollout starting with pilot region, followed by gradual expansion to all locations. Conducted comprehensive training for 5,000+ users across different roles and provided 24/7 hypercare support for 90 days post-launch.
                </p>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Regional deployment • User training programs • Data cutover • Legacy system decommissioning • Hypercare support • Documentation and knowledge transfer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
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
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>55% reduction in process cycle times</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Automated workflows eliminated manual handoffs and bottlenecks</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>80% faster financial close process</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Automated consolidation reduced month-end from 20 to 4 days</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>90% reduction in manual data entry</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>System integration eliminated duplicate entry across platforms</p>
                </div>
                <div>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Real-time enterprise visibility</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Executives gained instant access to KPIs across all operations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Financial Performance
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>$5M annual cost savings</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Reduced IT infrastructure and operational overhead</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>35% improvement in working capital</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Better inventory management and cash flow optimization</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>40% reduction in procurement costs</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Consolidated supplier base and negotiated better terms</p>
                </div>
                <div>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>ROI achieved in 10 months</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Faster than projected 18-month payback period</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Data Quality & Compliance
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>98% data accuracy</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Single source of truth eliminated data discrepancies</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>70% faster audit preparation</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Automated audit trails and reporting capabilities</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>100% regulatory compliance</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Built-in compliance controls for all jurisdictions</p>
                </div>
                <div>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Complete audit trails</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Every transaction tracked with comprehensive logging</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Employee Productivity
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>45% increase in employee productivity</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Streamlined processes freed up time for value-added work</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>85% user satisfaction rate</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Intuitive interface and improved workflows</p>
                </div>
                <div className="pb-4 border-b" style={{ borderColor: isDark ? '#1f2937' : '#e5e7eb' }}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>60% reduction in training time</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Consistent UX across all modules simplified onboarding</p>
                </div>
                <div>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Self-service capabilities</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Employees can access information without IT assistance</p>
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
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>50,000+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Concurrent users supported</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>5M+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Daily transactions processed</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>99.95%</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>System uptime achieved</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>&lt;200ms</div>
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
              "Implementing this ERP system has been transformational for our organization. We've unified operations across 25 countries, eliminated legacy system complexity, and gained real-time visibility we never had before. The Upvista team's expertise in enterprise Java and Spring Boot was exceptional, and their agile approach kept us on track throughout the 12-month implementation."
            </p>
            <div className="pt-8 border-t" style={{ borderColor: isDark ? '#374151' : '#e5e7eb' }}>
              <div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Chief Information Officer</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Global Manufacturing Corporation</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to Transform Your Enterprise?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's build a custom ERP solution tailored to your organization's unique needs. Our expert team specializes in enterprise-grade Java applications that scale globally.
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


