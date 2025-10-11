'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Users, Code, Cloud, Brain, Palette, Target, Award, Star, ExternalLink } from 'lucide-react';

export default function TeamPage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  // Department data
  const departments = [
    {
      id: 'web-software',
      name: 'Web & Software Development',
      icon: Code,
      description: 'Expert developers crafting cutting-edge web applications and software solutions',
      memberCount: 8,
      color: 'blue',
      members: [
        {
          id: 'alex-chen',
          name: 'Alex Chen',
          role: 'Senior Full-Stack Developer',
          title: 'Web Developer @ Upvista Digital',
          image: '/assets/team/alex-chen.jpg',
          intro: 'Passionate about creating scalable web solutions with modern technologies.',
          upvistaRemarks: 'Exceptional problem-solving skills and commitment to code quality.',
          socialProof: { rating: 4.9, projects: 45, clients: 32 }
        }
      ]
    },
    {
      id: 'ai-cloud',
      name: 'AI & Cloud Solutions',
      icon: Cloud,
      description: 'Innovators in artificial intelligence and cloud infrastructure',
      memberCount: 6,
      color: 'purple',
      members: [
        {
          id: 'sarah-johnson',
          name: 'Sarah Johnson',
          role: 'AI Solutions Architect',
          title: 'AI Specialist @ Upvista Digital',
          image: '/assets/team/sarah-johnson.jpg',
          intro: 'Leading AI implementation strategies for enterprise clients.',
          upvistaRemarks: 'Outstanding expertise in machine learning and cloud architecture.',
          socialProof: { rating: 5.0, projects: 28, clients: 18 }
        }
      ]
    },
    {
      id: 'branding-marketing',
      name: 'Branding & Marketing',
      icon: Target,
      description: 'Creative minds driving brand growth and digital marketing success',
      memberCount: 5,
      color: 'green',
      members: [
        {
          id: 'mike-rodriguez',
          name: 'Mike Rodriguez',
          role: 'Creative Director',
          title: 'Brand Strategist @ Upvista Digital',
          image: '/assets/team/mike-rodriguez.jpg',
          intro: 'Transforming brands through strategic design and marketing excellence.',
          upvistaRemarks: 'Creative visionary with proven track record in brand transformation.',
          socialProof: { rating: 4.8, projects: 62, clients: 45 }
        }
      ]
    }
  ];

  // All team members for horizontal slider
  const allMembers = departments.flatMap(dept => 
    dept.members.map(member => ({ ...member, department: dept.name, departmentId: dept.id }))
  );

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: isDark ? 'from-blue-500/20 to-blue-600/30' : 'from-blue-500/20 to-blue-600/30',
        text: isDark ? 'text-blue-400' : 'text-blue-600',
        border: isDark ? 'border-blue-400/30' : 'border-blue-400/30',
        icon: isDark ? 'text-blue-400' : 'text-blue-600'
      },
      purple: {
        bg: isDark ? 'from-purple-500/20 to-purple-600/30' : 'from-purple-500/20 to-purple-600/30',
        text: isDark ? 'text-purple-400' : 'text-purple-600',
        border: isDark ? 'border-purple-400/30' : 'border-purple-400/30',
        icon: isDark ? 'text-purple-400' : 'text-purple-600'
      },
      green: {
        bg: isDark ? 'from-green-500/20 to-green-600/30' : 'from-green-500/20 to-green-600/30',
        text: isDark ? 'text-green-400' : 'text-green-600',
        border: isDark ? 'border-green-400/30' : 'border-green-400/30',
        icon: isDark ? 'text-green-400' : 'text-green-600'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
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
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${
              isDark
                ? 'bg-white/10 border border-white/20 text-indigo-200'
                : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-blue-500/70 text-white shadow-lg'
            }`}>
              <Users className="w-4 h-4 mr-2" />
              Meet Our Expert Team
            </div>
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${
              isDark
                ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
            }`}>
              Our Talented Professionals
            </h1>
            
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Discover the brilliant minds behind Upvista Digital's success. Our diverse team of experts brings years of experience and innovation to every project.
            </p>
          </div>

          {/* Department Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {departments.map((department) => {
              const IconComponent = department.icon;
              const colors = getColorClasses(department.color);
              
              return (
                <Link key={department.id} href={`/team/${department.id}`}>
                  <div className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer h-full ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      : 'bg-white/70 border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
                  }`}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    
                    <h3 className={`text-xl font-semibold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {department.name}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {department.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className={`text-sm font-medium ${colors.text}`}>
                        {department.memberCount} Team Members
                      </div>
                      <ArrowRight className={`w-4 h-4 ${colors.icon} group-hover:translate-x-1 transition-transform`} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Horizontal Team Member Slider */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Featured Team Members
              </h2>
              <p className={`text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Get to know our talented professionals
              </p>
            </div>

            <div className="relative">
              <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                {allMembers.map((member) => (
                  <Link key={member.id} href={`/team/member/${member.id}`}>
                    <div className={`group flex-shrink-0 w-80 p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
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
                        
                        <h3 className={`text-lg font-semibold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {member.name}
                        </h3>
                        
                        <p className={`text-sm font-medium mb-2 ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {member.title}
                        </p>
                        
                        <p className={`text-xs leading-relaxed mb-4 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {member.intro}
                        </p>
                        
                        <div className="flex items-center justify-center gap-4 text-xs">
                          <div className="flex items-center gap-1">
                            <Star className={`w-3 h-3 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                              {member.socialProof.rating}
                            </span>
                          </div>
                          <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {member.socialProof.projects} projects
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About Our Team */}
          <div className={`rounded-3xl p-8 sm:p-12 ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
          }`}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Why Our Team Stands Out
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                  }`}>
                    <Award className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Verified Excellence
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Each team member is carefully vetted and verified for their expertise and professionalism.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? 'bg-purple-600/20' : 'bg-purple-100'
                  }`}>
                    <Users className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Collaborative Spirit
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Our team works together seamlessly to deliver exceptional results for every client.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? 'bg-green-600/20' : 'bg-green-100'
                  }`}>
                    <ExternalLink className={`w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Continuous Growth
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    We invest in our team's professional development to stay ahead of industry trends.
                  </p>
                </div>
              </div>
              
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                At Upvista Digital, we believe that great work comes from great people. Our team consists of carefully selected professionals who share our commitment to excellence, innovation, and client success. Each member brings unique skills and perspectives that contribute to our collective ability to deliver outstanding results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
