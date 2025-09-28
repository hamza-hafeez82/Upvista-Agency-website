import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern, responsive websites and web applications that deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">Full-Stack Development</h2>
            <p className="text-gray-300 mb-6">
              We build complete web solutions from frontend interfaces to backend systems, ensuring 
              seamless integration and optimal performance.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Our Services</h2>
            <ul className="text-gray-300 space-y-4">
              <li><strong className="text-white">Responsive Design:</strong> Websites that work perfectly on all devices.</li>
              <li><strong className="text-white">E-commerce Solutions:</strong> Online stores with secure payment processing.</li>
              <li><strong className="text-white">Web Applications:</strong> Custom applications for business processes.</li>
              <li><strong className="text-white">CMS Development:</strong> Content management systems for easy updates.</li>
              <li><strong className="text-white">API Development:</strong> RESTful APIs for data integration.</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Technologies</h2>
            <p className="text-gray-300 mb-6">
              We use the latest technologies and frameworks to ensure your website is fast, secure, 
              and future-proof.
            </p>
            
            <h2 className="text-3xl font-bold text-white mb-8 mt-12">Performance Optimization</h2>
            <p className="text-gray-300 mb-6">
              Our websites are optimized for speed, SEO, and user experience, helping you achieve 
              better search rankings and higher conversion rates.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
