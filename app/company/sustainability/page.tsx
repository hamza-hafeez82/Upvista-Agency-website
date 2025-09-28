import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sustainability & Values
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to sustainable practices and core values that guide everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Environmental Responsibility</h2>
            <p className="text-gray-300 mb-6">
              At Upvista Digital, we recognize our responsibility to the environment. We implement sustainable practices 
              in our operations and help our clients reduce their carbon footprint through efficient digital solutions.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Social Impact</h2>
            <p className="text-gray-300 mb-6">
              We believe in using technology for social good. Our initiatives focus on digital inclusion, education, 
              and supporting communities through technology-driven solutions.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Ethical Business Practices</h2>
            <p className="text-gray-300 mb-6">
              Integrity and transparency are at the core of our business operations. We maintain ethical standards 
              in all our client relationships and business practices.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Community Engagement</h2>
            <p className="text-gray-300 mb-6">
              We actively engage with our community through educational programs, mentorship, and supporting 
              local technology initiatives.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
