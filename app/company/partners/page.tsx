import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Partnerships
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic partnerships that enhance our capabilities and deliver greater value to our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Technology Partners</h2>
            <p className="text-gray-300 mb-6">
              We collaborate with leading technology providers to bring you the best solutions. Our partnerships 
              with industry leaders ensure access to cutting-edge tools and platforms.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Strategic Alliances</h2>
            <p className="text-gray-300 mb-6">
              Our strategic alliances enable us to offer comprehensive solutions that span multiple domains, 
              from cloud infrastructure to AI-powered applications.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Partner Benefits</h2>
            <ul className="text-gray-300 space-y-4">
              <li><strong className="text-white">Access to Expertise:</strong> Leverage our specialized knowledge and experience.</li>
              <li><strong className="text-white">Scalable Solutions:</strong> Solutions that grow with your business.</li>
              <li><strong className="text-white">Innovation:</strong> Stay ahead with the latest technologies and methodologies.</li>
              <li><strong className="text-white">Support:</strong> Dedicated support and maintenance services.</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Become a Partner</h2>
            <p className="text-gray-300 mb-6">
              Interested in partnering with us? We're always looking for organizations that share our commitment 
              to excellence and innovation. Contact us at 
              <span className="text-white"> partnerships@upvistadigital.com</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
