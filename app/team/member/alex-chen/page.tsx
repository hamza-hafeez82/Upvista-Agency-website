'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Star, Users, Award, ExternalLink, Code, Calendar, MapPin, Mail, Linkedin, Github, Twitter, Download, ChevronRight } from 'lucide-react';

export default function AlexChenProfilePage() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  // Member data
  const member = {
    id: 'alex-chen',
    name: 'Alex Chen',
    role: 'Senior Full-Stack Developer',
    title: 'Web Developer @ Upvista Digital',
    image: '/assets/team/alex-chen.jpg',
    message: "I'm passionate about creating scalable web solutions that make a real impact. With over 5 years of experience in full-stack development, I specialize in building modern web applications using cutting-edge technologies. My goal is to help businesses transform their digital presence through innovative and efficient solutions.",
    
    // Personal Info
    personalInfo: {
      experience: '5+ years',
      location: 'San Francisco, CA',
      joinDate: 'March 2022',
      availability: 'Available for new projects',
      languages: ['English', 'Mandarin'],
      timezone: 'PST (UTC-8)'
    },
    
    // Skills Matrix
    skills: [
      { name: 'React', level: 95, category: 'Frontend' },
      { name: 'Node.js', level: 90, category: 'Backend' },
      { name: 'TypeScript', level: 88, category: 'Languages' },
      { name: 'AWS', level: 85, category: 'Cloud' },
      { name: 'MongoDB', level: 82, category: 'Database' },
      { name: 'Docker', level: 80, category: 'DevOps' },
      { name: 'Python', level: 75, category: 'Languages' },
      { name: 'GraphQL', level: 70, category: 'Backend' }
    ],
    
    // Portfolio Projects
    portfolio: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory management',
        image: '/assets/portfolio/ecommerce-platform.jpg',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
        link: 'https://demo-ecommerce.com',
        featured: true
      },
      {
        id: 2,
        title: 'SaaS Dashboard',
        description: 'Analytics dashboard for SaaS companies with real-time data visualization',
        image: '/assets/portfolio/saas-dashboard.jpg',
        technologies: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
        link: 'https://demo-dashboard.com',
        featured: true
      },
      {
        id: 3,
        title: 'Mobile Banking App',
        description: 'Secure mobile banking application with biometric authentication',
        image: '/assets/portfolio/banking-app.jpg',
        technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
        link: 'https://demo-banking.com',
        featured: false
      }
    ],
    
    // Case Studies
    caseStudies: [
      {
        id: 1,
        title: 'Scaling a Startup from 0 to 100K Users',
        client: 'TechStart Inc.',
        challenge: 'Building a scalable platform that could handle rapid user growth',
        solution: 'Implemented microservices architecture with AWS and containerization',
        results: 'Achieved 99.9% uptime and reduced server costs by 40%',
        image: '/assets/case-studies/startup-scaling.jpg',
        duration: '6 months'
      },
      {
        id: 2,
        title: 'Legacy System Modernization',
        client: 'Enterprise Corp',
        challenge: 'Modernizing a 10-year-old monolithic application',
        solution: 'Gradual migration to microservices with zero downtime',
        results: 'Improved performance by 300% and reduced maintenance costs',
        image: '/assets/case-studies/legacy-modernization.jpg',
        duration: '8 months'
      }
    ],
    
    // Client Testimonials
    testimonials: [
      {
        id: 1,
        client: 'Sarah Johnson',
        company: 'TechStart Inc.',
        role: 'CTO',
        image: '/assets/testimonials/sarah-johnson.jpg',
        rating: 5,
        text: "Alex is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He helped us scale our platform to handle 100K+ users without any issues.",
        project: 'E-commerce Platform'
      },
      {
        id: 2,
        client: 'Michael Rodriguez',
        company: 'Enterprise Corp',
        role: 'Technical Director',
        image: '/assets/testimonials/michael-rodriguez.jpg',
        rating: 5,
        text: "Working with Alex was a game-changer for our company. He modernized our legacy system with minimal disruption and incredible results. His expertise in cloud architecture saved us thousands in infrastructure costs.",
        project: 'System Modernization'
      }
    ],
    
    // Certifications & Awards
    certifications: [
      {
        name: 'AWS Solutions Architect',
        issuer: 'Amazon Web Services',
        date: '2023',
        image: '/assets/certifications/aws-solutions-architect.png'
      },
      {
        name: 'React Developer Certification',
        issuer: 'Meta',
        date: '2022',
        image: '/assets/certifications/react-developer.png'
      },
      {
        name: 'MongoDB Certified Developer',
        issuer: 'MongoDB Inc.',
        date: '2022',
        image: '/assets/certifications/mongodb-developer.png'
      }
    ],
    
    awards: [
      {
        name: 'Developer of the Year',
        organization: 'Upvista Digital',
        date: '2023',
        description: 'Recognized for exceptional contribution to client projects'
      },
      {
        name: 'Innovation Award',
        organization: 'Tech Community SF',
        date: '2022',
        description: 'For innovative approach to scalable web architecture'
      }
    ],
    
    // Social Links
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alexchen',
      github: 'https://github.com/alexchen',
      twitter: 'https://twitter.com/alexchen_dev',
      portfolio: 'https://alexchen.dev'
    },
    
    // Stats
    stats: {
      projectsCompleted: 45,
      clientsServed: 32,
      averageRating: 4.9,
      yearsExperience: 5,
      technologiesMastered: 15
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'certifications', label: 'Certifications' }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Personal Message */}
      <div className={`rounded-2xl p-8 ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
      }`}>
        <h3 className={`text-2xl font-bold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          A Message from Alex
        </h3>
        <p className={`text-lg leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {member.message}
        </p>
      </div>

      {/* Skills Matrix */}
      <div className={`rounded-2xl p-8 ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Skills & Expertise
        </h3>
        <div className="space-y-4">
          {member.skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className={`font-medium ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </span>
                <span className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {skill.level}%
                </span>
              </div>
              <div className={`w-full h-2 rounded-full ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div 
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`rounded-2xl p-8 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
        }`}>
          <h3 className={`text-xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Experience & Stats
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Calendar className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {member.personalInfo.experience} in development
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {member.personalInfo.location}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                Joined Upvista in {member.personalInfo.joinDate}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Star className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {member.stats.averageRating}/5 average rating
              </span>
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-8 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
        }`}>
          <h3 className={`text-xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Achievement Highlights
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className={`text-3xl font-bold mb-1 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {member.stats.projectsCompleted}
              </div>
              <div className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-1 ${
                isDark ? 'text-purple-400' : 'text-purple-600'
              }`}>
                {member.stats.clientsServed}
              </div>
              <div className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-1 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                {member.stats.technologiesMastered}
              </div>
              <div className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-1 ${
                isDark ? 'text-yellow-400' : 'text-yellow-600'
              }`}>
                {member.stats.yearsExperience}+
              </div>
              <div className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {member.portfolio.map((project) => (
          <div key={project.id} className={`rounded-2xl overflow-hidden border ${
            isDark
              ? 'bg-white/5 border-white/10 hover:bg-white/10'
              : 'bg-white/70 border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
          } transition-all duration-300`}>
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {project.featured && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className={`px-2 py-1 rounded text-xs ${
                    isDark
                      ? 'bg-blue-600/20 text-blue-300'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center text-sm font-medium ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                } transition-colors`}
              >
                View Project
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCaseStudies = () => (
    <div className="space-y-8">
      {member.caseStudies.map((study) => (
        <div key={study.id} className={`rounded-2xl p-8 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {study.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className={`font-semibold mb-2 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Client: {study.client}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                </div>
                <div>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <strong>Solution:</strong> {study.solution}
                  </p>
                </div>
                <div>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <strong>Results:</strong> {study.results}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className={`px-3 py-1 rounded-full ${
                    isDark ? 'bg-green-600/20 text-green-300' : 'bg-green-100 text-green-700'
                  }`}>
                    Duration: {study.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTestimonials = () => (
    <div className="space-y-8">
      {member.testimonials.map((testimonial) => (
        <div key={testimonial.id} className={`rounded-2xl p-8 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
        }`}>
          <div className="flex items-start gap-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={testimonial.image}
                alt={testimonial.client}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className={`text-lg mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "{testimonial.text}"
              </p>
              <div>
                <h4 className={`font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {testimonial.client}
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {testimonial.role} at {testimonial.company}
                </p>
                <p className={`text-xs mt-1 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Project: {testimonial.project}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertifications = () => (
    <div className="space-y-8">
      {/* Certifications */}
      <div className={`rounded-2xl p-8 ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Professional Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {member.certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className={`font-semibold mb-1 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {cert.name}
              </h4>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {cert.issuer}
              </p>
              <p className={`text-xs ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className={`rounded-2xl p-8 ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200 shadow-lg'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Awards & Recognition
        </h3>
        <div className="space-y-4">
          {member.awards.map((award, index) => (
            <div key={index} className="flex items-start gap-4">
              <Award className={`w-6 h-6 mt-1 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
              <div>
                <h4 className={`font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {award.name}
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {award.organization} • {award.date}
                </p>
                <p className={`text-sm mt-1 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
          <Link href="/team/web-software" className="inline-flex items-center text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className={isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              Back to Web & Software Team
            </span>
          </Link>

          {/* Profile Header */}
          <div className={`rounded-3xl p-8 sm:p-12 mb-8 ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white/70 border border-gray-200 shadow-lg'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 text-center lg:text-left">
                <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {member.name}
                </h1>
                
                <p className={`text-lg font-medium mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {member.title}
                </p>
                
                <p className={`text-sm mb-6 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {member.personalInfo.location} • {member.personalInfo.experience}
                </p>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-4 mb-6">
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
                  }`}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
                  }`}>
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
                  }`}>
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>

                {/* Contact Button */}
                <button className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}>
                  Contact Alex
                </button>
              </div>
              
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-1 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {member.stats.projectsCompleted}
                    </div>
                    <div className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-1 ${
                      isDark ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      {member.stats.clientsServed}
                    </div>
                    <div className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-1 ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`}>
                      {member.stats.averageRating}
                    </div>
                    <div className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Rating
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-1 ${
                      isDark ? 'text-yellow-400' : 'text-yellow-600'
                    }`}>
                      {member.stats.yearsExperience}+
                    </div>
                    <div className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Years
                    </div>
                  </div>
                </div>
                
                <div className={`p-4 rounded-xl ${
                  isDark ? 'bg-green-600/20 border border-green-500/30' : 'bg-green-100 border border-green-200'
                }`}>
                  <p className={`text-sm ${
                    isDark ? 'text-green-300' : 'text-green-700'
                  }`}>
                    ✓ {member.personalInfo.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className={`flex flex-wrap gap-2 p-2 rounded-2xl ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-gray-200'
            }`}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? isDark
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-600 text-white'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'portfolio' && renderPortfolio()}
            {activeTab === 'case-studies' && renderCaseStudies()}
            {activeTab === 'testimonials' && renderTestimonials()}
            {activeTab === 'certifications' && renderCertifications()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
