'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Code, Star, Users, Award, ExternalLink } from 'lucide-react';

export default function WebSoftwareTeamPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  // Team members data for this department
  const teamMembers = [
    {
      id: 'alex-chen',
      name: 'Alex Chen',
      role: 'Senior Full-Stack Developer',
      title: 'Web Developer @ Upvista Digital',
      image: '/assets/team/alex-chen.jpg',
      intro: 'Passionate about creating scalable web solutions with modern technologies. Alex specializes in React, Node.js, and cloud architecture.',
      upvistaRemarks: 'Exceptional problem-solving skills and commitment to code quality. Alex consistently delivers projects that exceed client expectations.',
      socialProof: { rating: 4.9, projects: 45, clients: 32 },
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'],
      experience: '5+ years',
      location: 'Remote',
      joinDate: '2022'
    }
    // More members can be easily added here
  ];

  const departmentInfo = {
    name: 'Web & Software Development',
    description: 'Our Web & Software Development team consists of expert developers who specialize in creating cutting-edge web applications, mobile apps, and software solutions. We combine creativity with technical expertise to deliver products that not only meet but exceed client expectations.',
    focusAreas: [
      'Custom Web Application Development',
      'E-commerce Solutions',
      'Mobile App Development',
      'API Development & Integration',
      'Database Design & Optimization',
      'Cloud Infrastructure & Deployment'
    ],
    technologies: [
      'React, Vue.js, Angular',
      'Node.js, Python, PHP',
      'AWS, Azure, Google Cloud',
      'MongoDB, PostgreSQL, MySQL',
      'Docker, Kubernetes',
      'CI/CD Pipelines'
    ]
  };

  return (
    <div className={`min-h-screen ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
    }`}>
      <Header />

      {/* Hero Section */}
      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/team" className="inline-flex items-center text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className={isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              Back to Team
            </span>
          </Link>

          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
              isDark
                ? 'bg-white/10 border border-white/20 text-blue-200'
                : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-blue-500/70 text-white shadow-lg'
            }`}>
              <Code className="w-4 h-4 mr-2" />
              Web & Software Development
            </div>
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${
              isDark
                ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
            }`}>
              Development Excellence
            </h1>
            
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {departmentInfo.description}
            </p>
          </div>

          {/* Department Overview */}
          <div className={`rounded-3xl p-8 sm:p-12 mb-16 ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Our Focus Areas
                </h2>
                <div className="space-y-4">
                  {departmentInfo.focusAreas.map((area, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        isDark ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></div>
                      <p className={`text-base ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {area}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Technologies We Master
                </h2>
                <div className="flex flex-wrap gap-2">
                  {departmentInfo.technologies.map((tech, index) => (
                    <span key={index} className={`px-3 py-2 rounded-full text-sm font-medium ${
                      isDark
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Meet Our Developers
              </h2>
              <p className={`text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Skilled professionals dedicated to delivering exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Link key={member.id} href={`/team/member/${member.id}`}>
                  <div className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer h-full ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      : 'bg-white/70 border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
                  }`}>
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      
                      <h3 className={`text-xl font-semibold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {member.name}
                      </h3>
                      
                      <p className={`text-sm font-medium mb-2 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {member.title}
                      </p>
                      
                      <p className={`text-sm leading-relaxed mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {member.intro}
                      </p>
                      
                      <div className={`p-3 rounded-lg mb-4 ${
                        isDark ? 'bg-white/5' : 'bg-gray-50'
                      }`}>
                        <p className={`text-xs italic ${
                          isDark ? 'text-blue-300' : 'text-blue-700'
                        }`}>
                          "Upvista Remarks: {member.upvistaRemarks}"
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs mb-4">
                        <div className="flex items-center gap-1">
                          <Star className={`w-3 h-3 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                            {member.socialProof.rating}
                          </span>
                        </div>
                        <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {member.socialProof.projects} projects
                        </div>
                        <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {member.socialProof.clients} clients
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 justify-center mb-4">
                        {member.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className={`px-2 py-1 rounded text-xs ${
                            isDark
                              ? 'bg-blue-600/20 text-blue-300'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className={`px-2 py-1 rounded text-xs ${
                            isDark
                              ? 'bg-gray-600/20 text-gray-300'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            +{member.skills.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-center text-xs">
                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {member.experience} • {member.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`rounded-3xl p-8 sm:p-12 text-center ${
            isDark
              ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10'
              : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
          }`}>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Work With Our Developers?
            </h2>
            <p className={`text-lg sm:text-xl mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Connect with our expert development team and bring your ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Services/web-development">
                <button className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                }`}>
                  View Our Services
                </button>
              </Link>
              <Link href="/contact">
                <button className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  isDark
                    ? 'border border-white/20 text-white hover:bg-white/10'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
