import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Leadership Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving Upvista Digital's success and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Executive Leadership</h2>
            <p className="text-gray-300 mb-6">
              Our executive team brings together decades of experience in technology, business strategy, 
              and innovation. They guide our vision and ensure we deliver exceptional value to our clients.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Leadership Philosophy</h2>
            <p className="text-gray-300 mb-6">
              We believe in servant leadership, empowering our teams to excel while maintaining a focus on 
              client success and continuous innovation.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Core Leadership Principles</h2>
            <ul className="text-gray-300 space-y-4">
              <li><strong className="text-white">Vision:</strong> Clear direction and strategic thinking.</li>
              <li><strong className="text-white">Integrity:</strong> Ethical decision-making and transparency.</li>
              <li><strong className="text-white">Innovation:</strong> Embracing change and new technologies.</li>
              <li><strong className="text-white">Collaboration:</strong> Building strong teams and partnerships.</li>
              <li><strong className="text-white">Excellence:</strong> Commitment to delivering outstanding results.</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Team Development</h2>
            <p className="text-gray-300 mb-6">
              We invest heavily in developing our leadership pipeline, ensuring continuous growth and 
              succession planning for the future of Upvista Digital.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
