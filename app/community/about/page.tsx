import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CommunityAboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Our Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A vibrant community of developers, designers, and technology enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              We foster a collaborative environment where technology professionals can learn, share, 
              and grow together while advancing the digital transformation landscape.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Community Values</h2>
            <ul className="text-gray-300 space-y-4">
              <li><strong className="text-white">Collaboration:</strong> Working together to achieve common goals.</li>
              <li><strong className="text-white">Learning:</strong> Continuous education and skill development.</li>
              <li><strong className="text-white">Innovation:</strong> Embracing new ideas and technologies.</li>
              <li><strong className="text-white">Inclusivity:</strong> Welcoming members from all backgrounds.</li>
              <li><strong className="text-white">Support:</strong> Helping each other succeed and grow.</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Join Our Community</h2>
            <p className="text-gray-300 mb-6">
              Become part of our growing community and connect with like-minded professionals 
              who are passionate about technology and innovation.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
