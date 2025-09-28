import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Information for current and potential investors about Upvista Digital's financial performance and growth strategy.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Financial Overview</h2>
            <p className="text-gray-300 mb-6">
              Upvista Digital has demonstrated consistent growth and profitability. Our financial performance reflects 
              our commitment to delivering value to our clients and stakeholders.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Growth Strategy</h2>
            <p className="text-gray-300 mb-6">
              Our strategic focus includes expanding our service portfolio, entering new markets, and investing in 
              cutting-edge technologies to maintain our competitive advantage.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Investment Opportunities</h2>
            <p className="text-gray-300 mb-6">
              We welcome discussions with potential investors who share our vision for transforming businesses 
              through innovative digital solutions.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Contact Information</h2>
            <p className="text-gray-300 mb-6">
              For investor relations inquiries, please contact our investor relations team at 
              <span className="text-white"> investors@upvistadigital.com</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
