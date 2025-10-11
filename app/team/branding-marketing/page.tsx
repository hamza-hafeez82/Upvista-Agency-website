'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Target, Star, Users, Award, ExternalLink } from 'lucide-react';

export default function BrandingMarketingTeamPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  // Team members data for this department
  const teamMembers = [
    {
      id: 'mike-rodriguez',
      name: 'Mike Rodriguez',
      role: 'Creative Director',
      title: 'Brand Strategist @ Upvista Digital',
      image: '/assets/team/mike-rodriguez.jpg',
      intro: 'Transforming brands through strategic design and marketing excellence with a focus on creative storytelling and brand identity.',
      upvistaRemarks: 'Creative visionary with proven track record in brand transformation. Mike consistently delivers campaigns that resonate with target audiences and drive measurable results.',
      socialProof: { rating: 4.8, projects: 62, clients: 45 },
      skills: ['Brand Strategy', 'Creative Direction', 'Digital Marketing', 'Adobe Creative Suite', 'Figma', 'Marketing Analytics'],
      experience: '8+ years',
      location: 'New York, NY',
      joinDate: '2020'
    }
  ];

  const departmentInfo = {
    name: 'Branding & Marketing',
    description: 'Our Branding & Marketing team creates compelling brand experiences and executes strategic marketing campaigns that drive growth. We combine creative excellence with data-driven insights to build brands that resonate with audiences and deliver measurable results.',
    focusAreas: [
      'Brand Identity & Strategy',
      'Digital Marketing Campaigns',
      'Content Creation & Strategy',
      'Social Media Management',
      'SEO & SEM Optimization',
      'Marketing Analytics & Reporting'
    ],
    technologies: [
      'Adobe Creative Suite, Figma, Canva',
      'Google Ads, Facebook Ads, LinkedIn Ads',
      'HubSpot, Mailchimp, Salesforce',
      'Google Analytics, SEMrush, Ahrefs',
      'Hootsuite, Buffer, Sprout Social',
      'WordPress, Shopify, Webflow'
    ]
  };

  return (
    <div className={`min-h-screen ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
    }`}>
      <Header />

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
                ? 'bg-white/10 border border-white/20 text-green-200'
                : 'bg-gradient-to-r from-green-600/90 to-blue-600/90 border border-green-500/70 text-white shadow-lg'
            }`}>
              <Target className="w-4 h-4 mr-2" />
              Branding & Marketing
            </div>
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${
              isDark
                ? 'bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-green-800 to-blue-700 bg-clip-text text-transparent'
            }`}>
              Creative Excellence
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
                        isDark ? 'bg-green-400' : 'bg-green-600'
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
                        ? 'bg-green-600/20 text-green-300 border border-green-500/30'
                        : 'bg-green-100 text-green-700 border border-green-200'
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
                Meet Our Creative Team
              </h2>
              <p className={`text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Creative minds driving brand growth and marketing success
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
                        isDark ? 'text-green-400' : 'text-green-600'
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
                          isDark ? 'text-green-300' : 'text-green-700'
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
                              ? 'bg-green-600/20 text-green-300'
                              : 'bg-green-100 text-green-700'
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
              ? 'bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-white/10'
              : 'bg-gradient-to-br from-green-50 to-blue-50 border border-green-200'
          }`}>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Transform Your Brand?
            </h2>
            <p className={`text-lg sm:text-xl mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Connect with our creative team to build a compelling brand and execute winning marketing campaigns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Services/designing">
                <button className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                }`}>
                  View Design Services
                </button>
              </Link>
              <Link href="/Services/marketing">
                <button className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  isDark
                    ? 'border border-white/20 text-white hover:bg-white/10'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  View Marketing Services
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
