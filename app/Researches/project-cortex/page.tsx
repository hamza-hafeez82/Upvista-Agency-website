import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectCortexPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Project Cortex
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship research initiative exploring the future of artificial intelligence and machine learning.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Research Overview</h2>
            <p className="text-gray-300 mb-6">
              Project Cortex represents our commitment to advancing artificial intelligence research and developing 
              cutting-edge solutions that can transform industries and improve human lives.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Research Areas</h2>
            <ul className="text-gray-300 space-y-4">
              <li><strong className="text-white">Neural Networks:</strong> Advanced architectures and training methodologies.</li>
              <li><strong className="text-white">Natural Language Processing:</strong> Understanding and generating human language.</li>
              <li><strong className="text-white">Computer Vision:</strong> Image and video analysis technologies.</li>
              <li><strong className="text-white">Reinforcement Learning:</strong> AI systems that learn through interaction.</li>
              <li><strong className="text-white">Ethical AI:</strong> Responsible development and deployment of AI systems.</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Impact & Applications</h2>
            <p className="text-gray-300 mb-6">
              Our research findings are applied across various domains, from healthcare and finance to 
              autonomous systems and creative industries.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Collaboration</h2>
            <p className="text-gray-300 mb-6">
              We collaborate with leading academic institutions, research organizations, and industry 
              partners to advance the field of artificial intelligence.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
