import Link from 'next/link';
import React from 'react';

const ITServices = () => {
  const services = [
    {
      id: 1,
      icon: "code",
      title: "Static Websites",
      description: "We build fast, responsive, and SEO-friendly static websites tailored to your business needs.",
      learnMoreLink: "/pages/services"
    },
    {
      id: 2,
      icon: "layout",
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive sales.",
      learnMoreLink: "/pages/services"
    },
    {
      id: 3,
      icon: "design",
      title: "UI/UX Design",
      description: "Beautiful and intuitive designs that enhance user experience and engagement.",
      learnMoreLink: "/pages/services"
    },
    {
      id: 4,
      icon: "maintenance",
      title: "Maintenance",
      description: "Ongoing support and maintenance to keep your website running smoothly.",
      learnMoreLink: "/pages/services"
    },
    {
      id: 5,
      icon: "branding",
      title: "Branding & Digital",
      description: "Craft a unique brand identity and establish a strong digital presence with our expert branding and digital design services.",
      learnMoreLink: "/pages/services"
    },
    {
      id: 6,
      icon: "code",
      title: "AI automation",
      description: "Craft a unique brand identity and establish a strong digital presence with our expert branding and digital design services.",
      learnMoreLink: "/pages/services"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-black via-purple-950 to-violet-950 text-white min-h-screen p-8 relative overflow-hidden">
      {/* Floating cards decoration */}
      <div className="absolute top-8 left-10 transform -rotate-12">
        <div className="bg-black bg-opacity-60 rounded-lg p-3 shadow-lg w-16 h-16 flex items-center justify-center">
          <span className="text-violet-400 text-lg font-bold">25%</span>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-5xl mx-auto pt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Together, <br /> Let us Create Something Remarkable
        </h1>
        <p className="text-gray-300 mb-8 mx-auto max-w-2xl font-light">
        From concept to code, we turn your digital goals into powerful, high-performance results.
        </p>
        
         <Link href="/pages/services">
             <button className="bg-violet-700 hover:bg-violet-800 text-white py-2 px-4 rounded-lg flex items-center transition-colors duration-300 mx-auto">
          Get Started
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
         </Link>
        
        {/* Service cards - grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service) => (
            <div key={service.id} className="bg-black bg-opacity-30 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-50 transition-all duration-300 text-left">
              <div className="bg-violet-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {service.icon === "code" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                )}
                {service.icon === "layout" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                )}
                {service.icon === "design" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                )}
                {service.icon === "maintenance" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                )}
                {service.icon === "AI automation" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                )}
                {service.icon === "branding" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4 font-light">{service.description}</p>
              <a 
                href={service.learnMoreLink} 
                className="text-violet-400 hover:text-violet-300 inline-flex items-center text-sm font-medium"
              >
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITServices;
