import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Software Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom software solutions built with cutting-edge technologies to drive your business forward.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Our Expertise</h2>
            <p className="text-gray-300 mb-6">
              We specialize in developing scalable, secure, and high-performance software applications 
              tailored to your specific business needs.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Technologies We Use</h2>
            <ul className="text-gray-300 space-y-4">
              <li><strong className="text-white">Frontend:</strong> React, Next.js, Vue.js, Angular</li>
              <li><strong className="text-white">Backend:</strong> Node.js, Python, Java, .NET</li>
              <li><strong className="text-white">Databases:</strong> PostgreSQL, MongoDB, MySQL</li>
              <li><strong className="text-white">Cloud:</strong> AWS, Azure, Google Cloud</li>
              <li><strong className="text-white">Mobile:</strong> React Native, Flutter, iOS, Android</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Development Process</h2>
            <p className="text-gray-300 mb-6">
              Our agile development process ensures timely delivery, quality assurance, and continuous 
              improvement throughout the project lifecycle.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Why Choose Us</h2>
            <ul className="text-gray-300 space-y-4">
              <li><strong className="text-white">Experienced Team:</strong> Skilled developers with years of experience.</li>
              <li><strong className="text-white">Quality Assurance:</strong> Rigorous testing and code review processes.</li>
              <li><strong className="text-white">Scalability:</strong> Solutions that grow with your business.</li>
              <li><strong className="text-white">Support:</strong> Ongoing maintenance and support services.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
