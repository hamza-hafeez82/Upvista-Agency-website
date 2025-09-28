import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Company Profile
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about Upvista Digital's journey, mission, and commitment to delivering exceptional digital solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Our Story</h2>
            <p className="text-gray-300 mb-6">
              Founded with a vision to revolutionize digital experiences, Upvista Digital has emerged as a leading provider 
              of comprehensive digital solutions. Our journey began with a simple belief: technology should empower businesses 
              to achieve their full potential.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Mission & Vision</h2>
            <p className="text-gray-300 mb-6">
              Our mission is to deliver innovative, scalable, and secure digital solutions that drive business growth and 
              enhance user experiences. We envision a future where every business has access to cutting-edge technology 
              that transforms their operations and connects them with their customers.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Core Values</h2>
            <ul className="text-gray-300 space-y-4">
              <li><strong className="text-white">Innovation:</strong> We continuously explore new technologies and methodologies to stay ahead of the curve.</li>
              <li><strong className="text-white">Quality:</strong> We maintain the highest standards in everything we deliver.</li>
              <li><strong className="text-white">Collaboration:</strong> We believe in the power of teamwork and client partnerships.</li>
              <li><strong className="text-white">Integrity:</strong> We conduct business with transparency and ethical practices.</li>
              <li><strong className="text-white">Excellence:</strong> We strive for excellence in every project and interaction.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
