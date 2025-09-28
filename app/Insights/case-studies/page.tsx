import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore real-world examples of how we've helped businesses achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Success Stories</h2>
            <p className="text-gray-300 mb-6">
              Our case studies showcase the tangible results we've delivered for our clients across 
              various industries and use cases.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Featured Projects</h2>
            <ul className="text-gray-300 space-y-4">
              <li><strong className="text-white">E-commerce Platform:</strong> 300% increase in online sales for retail client.</li>
              <li><strong className="text-white">Healthcare System:</strong> Streamlined patient management with 50% efficiency gain.</li>
              <li><strong className="text-white">Financial Services:</strong> Secure mobile banking app with 99.9% uptime.</li>
              <li><strong className="text-white">Manufacturing:</strong> IoT integration reducing operational costs by 25%.</li>
              <li><strong className="text-white">Education:</strong> Learning management system serving 100,000+ students.</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Methodology</h2>
            <p className="text-gray-300 mb-6">
              Each case study demonstrates our systematic approach to problem-solving, from initial 
              analysis to final implementation and ongoing support.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Results</h2>
            <p className="text-gray-300 mb-6">
              We measure success not just by technical metrics, but by the real business impact 
              and value delivered to our clients.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
