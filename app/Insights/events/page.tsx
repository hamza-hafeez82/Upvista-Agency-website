'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';
import { Search, Filter, Calendar, Clock, TrendingUp, ArrowRight, Mail, Video, Globe, Building } from 'lucide-react';

// Events data
const events = [
  {
    id: 'ai-automation-summit-2024',
    title: 'AI Automation Summit 2024',
    subtitle: 'Revolutionizing Business Through Intelligent Automation',
    description: 'Join industry leaders and innovators as we explore the transformative power of AI automation across enterprise operations.',
    category: 'Technology',
    type: 'Conference',
    format: 'In-Person',
    location: 'San Francisco, CA',
    venue: 'Moscone Center',
    date: '2024-12-20',
    startTime: '09:00',
    endTime: '17:00',
    timezone: 'PST',
    speakers: [
      { name: 'Dr. Sarah Chen', role: 'Chief Technology Officer, Upvista Digital', image: '/assets/team/sarah-chen.jpg' },
      { name: 'Michael Rodriguez', role: 'Head of Cybersecurity, Upvista Digital', image: '/assets/team/michael-rodriguez.jpg' },
      { name: 'Jennifer Liu', role: 'VP of Global Operations, Upvista Digital', image: '/assets/team/jennifer-liu.jpg' }
    ],
    image: '/assets/events/ai-summit-hero.jpg',
    thumbnail: '/assets/events/ai-summit-thumb.jpg',
    capacity: 500,
    registered: 347,
    price: '$299',
    earlyBirdPrice: '$199',
    featured: true,
    tags: ['AI', 'Automation', 'Enterprise', 'Innovation', 'Technology'],
    agenda: [
      { time: '09:00 - 09:30', title: 'Registration & Networking', type: 'general' },
      { time: '09:30 - 10:00', title: 'Opening Keynote: The Future of AI Automation', type: 'keynote' },
      { time: '10:00 - 11:00', title: 'Panel Discussion: Enterprise AI Implementation', type: 'panel' },
      { time: '11:00 - 11:30', title: 'Coffee Break & Networking', type: 'break' },
      { time: '11:30 - 12:30', title: 'Technical Deep Dive: Automation Frameworks', type: 'workshop' },
      { time: '12:30 - 13:30', title: 'Lunch & Sponsor Showcase', type: 'lunch' },
      { time: '13:30 - 14:30', title: 'Case Studies: Real-World AI Success Stories', type: 'case-study' },
      { time: '14:30 - 15:30', title: 'Interactive Workshop: Building Your First AI Automation', type: 'workshop' },
      { time: '15:30 - 16:00', title: 'Coffee Break', type: 'break' },
      { time: '16:00 - 17:00', title: 'Closing Panel: The Road Ahead', type: 'panel' }
    ],
    registrationUrl: '/events/ai-automation-summit-2024/register',
    virtualLink: null,
    status: 'upcoming'
  },
  {
    id: 'cloud-security-webinar',
    title: 'Securing the Cloud: Zero-Trust Architecture in Practice',
    subtitle: 'Live webinar on implementing zero-trust security in modern cloud environments',
    description: 'Learn practical strategies for implementing zero-trust security architecture in your cloud infrastructure with real-world examples and best practices.',
    category: 'Security',
    type: 'Webinar',
    format: 'Virtual',
    location: 'Online',
    venue: null,
    date: '2024-12-18',
    startTime: '14:00',
    endTime: '15:30',
    timezone: 'EST',
    speakers: [
      { name: 'Robert Johnson', role: 'Security Solutions Architect, Upvista Digital', image: '/assets/team/robert-johnson.jpg' },
      { name: 'Lisa Zhang', role: 'Cloud Security Specialist, Upvista Digital', image: '/assets/team/lisa-zhang.jpg' }
    ],
    image: '/assets/events/cloud-security-hero.jpg',
    thumbnail: '/assets/events/cloud-security-thumb.jpg',
    capacity: 1000,
    registered: 678,
    price: 'Free',
    earlyBirdPrice: null,
    featured: true,
    tags: ['Cloud Security', 'Zero Trust', 'Webinar', 'Cybersecurity', 'Architecture'],
    agenda: [
      { time: '14:00 - 14:15', title: 'Welcome & Introductions', type: 'general' },
      { time: '14:15 - 14:45', title: 'Zero-Trust Security Fundamentals', type: 'presentation' },
      { time: '14:45 - 15:15', title: 'Cloud-Specific Implementation Strategies', type: 'presentation' },
      { time: '15:15 - 15:30', title: 'Q&A Session', type: 'qa' }
    ],
    registrationUrl: '/events/cloud-security-webinar/register',
    virtualLink: 'https://zoom.us/j/example',
    status: 'upcoming'
  },
  {
    id: 'devops-masterclass-workshop',
    title: 'DevOps Masterclass: Building High-Performance Development Teams',
    subtitle: 'Intensive workshop on implementing DevOps practices for accelerated software delivery',
    description: 'Hands-on workshop covering CI/CD pipelines, infrastructure as code, monitoring, and team collaboration strategies.',
    category: 'DevOps',
    type: 'Workshop',
    format: 'Hybrid',
    location: 'New York, NY & Online',
    venue: 'TechHub NYC',
    date: '2024-12-16',
    startTime: '10:00',
    endTime: '16:00',
    timezone: 'EST',
    speakers: [
      { name: 'Sarah Williams', role: 'DevOps Practice Lead, Upvista Digital', image: '/assets/team/sarah-williams.jpg' },
      { name: 'David Kim', role: 'Cloud Solutions Architect, Upvista Digital', image: '/assets/team/david-kim.jpg' }
    ],
    image: '/assets/events/devops-workshop-hero.jpg',
    thumbnail: '/assets/events/devops-workshop-thumb.jpg',
    capacity: 150,
    registered: 89,
    price: '$149',
    earlyBirdPrice: '$99',
    featured: false,
    tags: ['DevOps', 'CI/CD', 'Workshop', 'Team Building', 'Automation'],
    agenda: [
      { time: '10:00 - 10:30', title: 'Workshop Overview & Introductions', type: 'general' },
      { time: '10:30 - 12:00', title: 'CI/CD Pipeline Design & Implementation', type: 'workshop' },
      { time: '12:00 - 13:00', title: 'Lunch Break', type: 'lunch' },
      { time: '13:00 - 14:30', title: 'Infrastructure as Code with Terraform', type: 'workshop' },
      { time: '14:30 - 15:00', title: 'Coffee Break', type: 'break' },
      { time: '15:00 - 16:00', title: 'Monitoring & Observability Strategies', type: 'workshop' }
    ],
    registrationUrl: '/events/devops-masterclass-workshop/register',
    virtualLink: 'https://zoom.us/j/devops-workshop',
    status: 'upcoming'
  },
  {
    id: 'blockchain-enterprise-forum',
    title: 'Blockchain in Enterprise: Transforming Business Operations',
    subtitle: 'Exploring blockchain applications beyond cryptocurrency in enterprise environments',
    description: 'Comprehensive forum discussing blockchain use cases in supply chain, finance, healthcare, and digital identity management.',
    category: 'Technology',
    type: 'Forum',
    format: 'In-Person',
    location: 'Austin, TX',
    venue: 'Austin Convention Center',
    date: '2024-12-14',
    startTime: '08:30',
    endTime: '18:00',
    timezone: 'CST',
    speakers: [
      { name: 'Carlos Rodriguez', role: 'Senior Data Engineer, Upvista Digital', image: '/assets/team/carlos-rodriguez.jpg' },
      { name: 'Dr. Priya Patel', role: 'AI Research Director, Upvista Digital', image: '/assets/team/priya-patel.jpg' }
    ],
    image: '/assets/events/blockchain-forum-hero.jpg',
    thumbnail: '/assets/events/blockchain-forum-thumb.jpg',
    capacity: 300,
    registered: 234,
    price: '$199',
    earlyBirdPrice: '$149',
    featured: false,
    tags: ['Blockchain', 'Enterprise', 'Supply Chain', 'Finance', 'Innovation'],
    agenda: [
      { time: '08:30 - 09:00', title: 'Registration & Breakfast', type: 'general' },
      { time: '09:00 - 09:30', title: 'Opening Keynote: Blockchain Revolution', type: 'keynote' },
      { time: '09:30 - 10:30', title: 'Supply Chain Transformation with Blockchain', type: 'panel' },
      { time: '10:30 - 11:00', title: 'Coffee Break', type: 'break' },
      { time: '11:00 - 12:00', title: 'Financial Services & DeFi Applications', type: 'presentation' },
      { time: '12:00 - 13:00', title: 'Lunch & Networking', type: 'lunch' },
      { time: '13:00 - 14:00', title: 'Healthcare & Digital Identity', type: 'case-study' },
      { time: '14:00 - 15:00', title: 'Regulatory Considerations & Compliance', type: 'panel' },
      { time: '15:00 - 15:30', title: 'Coffee Break', type: 'break' },
      { time: '15:30 - 17:00', title: 'Interactive Workshop: Building Your First dApp', type: 'workshop' },
      { time: '17:00 - 18:00', title: 'Closing Reception & Networking', type: 'networking' }
    ],
    registrationUrl: '/events/blockchain-enterprise-forum/register',
    virtualLink: null,
    status: 'upcoming'
  },
  {
    id: 'sustainable-tech-panel',
    title: 'Sustainable Technology: Building a Greener Digital Future',
    subtitle: 'Panel discussion on environmental responsibility in technology development and operations',
    description: 'Expert panel exploring how the tech industry can reduce its environmental impact while maintaining innovation and growth.',
    category: 'Sustainability',
    type: 'Panel Discussion',
    format: 'Virtual',
    location: 'Online',
    venue: null,
    date: '2024-12-12',
    startTime: '15:00',
    endTime: '16:30',
    timezone: 'GMT',
    speakers: [
      { name: 'Dr. Amanda Foster', role: 'Sustainability Director, Upvista Digital', image: '/assets/team/amanda-foster.jpg' },
      { name: 'Alexandra Martinez', role: 'Senior Frontend Architect, Upvista Digital', image: '/assets/team/alexandra-martinez.jpg' }
    ],
    image: '/assets/events/sustainable-tech-hero.jpg',
    thumbnail: '/assets/events/sustainable-tech-thumb.jpg',
    capacity: 800,
    registered: 456,
    price: 'Free',
    earlyBirdPrice: null,
    featured: false,
    tags: ['Sustainability', 'Green Technology', 'Environment', 'Innovation', 'Corporate Responsibility'],
    agenda: [
      { time: '15:00 - 15:10', title: 'Welcome & Panel Introductions', type: 'general' },
      { time: '15:10 - 15:40', title: 'The Environmental Impact of Technology', type: 'presentation' },
      { time: '15:40 - 16:10', title: 'Sustainable Development Practices', type: 'discussion' },
      { time: '16:10 - 16:30', title: 'Q&A with Audience', type: 'qa' }
    ],
    registrationUrl: '/events/sustainable-tech-panel/register',
    virtualLink: 'https://zoom.us/j/sustainable-tech',
    status: 'upcoming'
  },
  {
    id: 'data-engineering-bootcamp',
    title: 'Data Engineering Bootcamp: From Raw Data to Business Insights',
    subtitle: 'Comprehensive training program for building robust data pipelines and analytics solutions',
    description: 'Intensive 3-day bootcamp covering data pipeline architecture, ETL processes, data warehousing, and real-time analytics.',
    category: 'Data Engineering',
    type: 'Bootcamp',
    format: 'Hybrid',
    location: 'Seattle, WA & Online',
    venue: 'Amazon Conference Center',
    date: '2024-12-10',
    startTime: '09:00',
    endTime: '17:00',
    timezone: 'PST',
    speakers: [
      { name: 'Carlos Rodriguez', role: 'Senior Data Engineer, Upvista Digital', image: '/assets/team/carlos-rodriguez.jpg' },
      { name: 'Dr. James Wilson', role: 'Quantum Research Lead, Upvista Digital', image: '/assets/team/james-wilson.jpg' }
    ],
    image: '/assets/events/data-bootcamp-hero.jpg',
    thumbnail: '/assets/events/data-bootcamp-thumb.jpg',
    capacity: 200,
    registered: 145,
    price: '$399',
    earlyBirdPrice: '$299',
    featured: false,
    tags: ['Data Engineering', 'ETL', 'Data Pipeline', 'Analytics', 'Big Data'],
    agenda: [
      { time: '09:00 - 10:00', title: 'Day 1: Data Pipeline Fundamentals', type: 'workshop' },
      { time: '10:00 - 11:00', title: 'ETL Process Design & Implementation', type: 'workshop' },
      { time: '11:00 - 12:00', title: 'Data Warehousing Strategies', type: 'presentation' },
      { time: '12:00 - 13:00', title: 'Lunch Break', type: 'lunch' },
      { time: '13:00 - 15:00', title: 'Hands-on Lab: Building Your First Pipeline', type: 'lab' },
      { time: '15:00 - 16:00', title: 'Real-time Analytics & Streaming Data', type: 'workshop' },
      { time: '16:00 - 17:00', title: 'Best Practices & Q&A', type: 'qa' }
    ],
    registrationUrl: '/events/data-engineering-bootcamp/register',
    virtualLink: 'https://zoom.us/j/data-bootcamp',
    status: 'upcoming'
  }
];

// Categories for filtering
const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Security', label: 'Security' },
  { value: 'DevOps', label: 'DevOps' },
  { value: 'Sustainability', label: 'Sustainability' },
  { value: 'Data Engineering', label: 'Data Engineering' }
];

const eventTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'Conference', label: 'Conference' },
  { value: 'Webinar', label: 'Webinar' },
  { value: 'Workshop', label: 'Workshop' },
  { value: 'Forum', label: 'Forum' },
  { value: 'Panel Discussion', label: 'Panel Discussion' },
  { value: 'Bootcamp', label: 'Bootcamp' }
];

const sortOptions = [
  { value: 'date', label: 'Upcoming First' },
  { value: 'date-old', label: 'Latest First' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'title', label: 'Title A-Z' }
];

export default function EventsPage() {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    const filtered = events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesType = selectedType === 'all' || event.type === selectedType;

      return matchesSearch && matchesCategory && matchesType;
    });

    // Sort filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'date-old':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'popular':
          return b.registered - a.registered;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedType, sortBy]);

  // const getCategoryColor = (category: string) => {
  //   switch (category) {
  //     case 'Technology': return isDark ? 'bg-blue-600/20 text-blue-300 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-200';
  //     case 'Security': return isDark ? 'bg-red-600/20 text-red-300 border-red-500/30' : 'bg-red-100 text-red-700 border-red-200';
  //     case 'DevOps': return isDark ? 'bg-green-600/20 text-green-300 border-green-500/30' : 'bg-green-100 text-green-700 border-green-200';
  //     case 'Sustainability': return isDark ? 'bg-emerald-600/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border-emerald-200';
  //     case 'Data Engineering': return isDark ? 'bg-purple-600/20 text-purple-300 border-purple-500/30' : 'bg-purple-100 text-purple-700 border-purple-200';
  //     default: return isDark ? 'bg-gray-600/20 text-gray-300 border-gray-500/30' : 'bg-gray-100 text-gray-700 border-gray-200';
  //   }
  // };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Conference': return isDark ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white';
      case 'Webinar': return isDark ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white' : 'bg-gradient-to-r from-green-600 to-teal-600 text-white';
      case 'Workshop': return isDark ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white' : 'bg-gradient-to-r from-orange-600 to-red-600 text-white';
      case 'Forum': return isDark ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white' : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white';
      case 'Panel Discussion': return isDark ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white' : 'bg-gradient-to-r from-pink-600 to-purple-600 text-white';
      case 'Bootcamp': return isDark ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white' : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white';
      default: return isDark ? 'bg-gray-600 text-gray-200' : 'bg-gray-600 text-white';
    }
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'In-Person': return <Building className="w-4 h-4" />;
      case 'Virtual': return <Video className="w-4 h-4" />;
      case 'Hybrid': return <Globe className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');

  return (
    <div className={`min-h-screen ${isDark
      ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
      : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
      }`}>
      <Header />

      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 ${isDark
              ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-200'
              : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-blue-500/70 text-white shadow-lg'
              }`}>
              <Calendar className="w-4 h-4 mr-2" />
              Connect, Learn & Innovate Together
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${isDark
              ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent'
              }`}>
              Events & Webinars
            </h1>

            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Join our community of innovators, thought leaders, and industry experts. Attend conferences,
              workshops, and webinars designed to accelerate your digital transformation journey.
            </p>

            {/* Newsletter Signup */}
            <div className={`max-w-md mx-auto p-6 rounded-2xl ${isDark
              ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10'
              : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 shadow-lg'
              }`}>
              <div className="flex items-center justify-center mb-4">
                <Mail className={`w-6 h-6 mr-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Get notified of upcoming events
                </span>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 px-4 py-2 rounded-lg border ${isDark
                    ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    }`}
                />
                <button className={`px-6 py-2 rounded-lg font-medium transition-colors ${isDark
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Featured Events */}
          {featuredEvents.length > 0 && (
            <div className="mb-16">
              <h2 className={`text-2xl sm:text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                Featured Events
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredEvents.map((event) => (
                  <div key={event.id} className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${isDark
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    : 'bg-white/70 border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
                    }`}>
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={event.thumbnail}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Event Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>

                      {/* Format Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-white/20 text-white border-white/30' : 'bg-gray-100 text-gray-700 border-gray-200'
                          }`}>
                          {event.format}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className={`text-xl font-semibold mb-2 leading-tight ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {event.title}
                      </h3>

                      <p className={`text-sm font-medium mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                        {event.subtitle}
                      </p>

                      <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            {new Date(event.date).toLocaleDateString()} • {event.startTime} - {event.endTime} {event.timezone}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          {getFormatIcon(event.format)}
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            {event.format === 'Virtual' ? 'Online' : `${event.location}${event.venue ? ` • ${event.venue}` : ''}`}
                          </span>
                        </div>
                      </div>

                      {/* Speakers */}
                      <div className="mb-4">
                        <p className={`text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Featured Speakers
                        </p>
                        <div className="flex items-center gap-2">
                          {event.speakers.slice(0, 3).map((speaker, index) => (
                            <div key={index} className="relative w-8 h-8 rounded-full overflow-hidden">
                              <Image
                                src={speaker.image}
                                alt={speaker.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                          {event.speakers.length > 3 && (
                            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              +{event.speakers.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {event.registered}/{event.capacity} registered
                          </span>
                        </div>

                        <Link href={event.registrationUrl}>
                          <button className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${isDark
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}>
                            Register Now
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Search and Filter Section */}
          <div className={`rounded-2xl p-6 mb-12 ${isDark
            ? 'bg-white/5 border border-white/10'
            : 'bg-white/70 border border-gray-200 shadow-lg'
            }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors ${isDark
                    ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    }`}
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors appearance-none ${isDark
                    ? 'bg-white/10 border-white/20 text-white focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    }`}
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="relative">
                <Calendar className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors appearance-none ${isDark
                    ? 'bg-white/10 border-white/20 text-white focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    }`}
                >
                  {eventTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <TrendingUp className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors appearance-none ${isDark
                    ? 'bg-white/10 border-white/20 text-white focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    }`}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Showing {filteredEvents.length} events
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                : 'bg-white/70 border-gray-200 hover:bg-white shadow-lg hover:shadow-xl'
                }`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Event Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>

                  {/* Format Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${isDark ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                      }`}>
                      {event.format}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 leading-tight ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {event.title}
                  </h3>

                  <p className={`text-sm font-medium mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                    {event.subtitle}
                  </p>

                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {event.startTime} - {event.endTime} {event.timezone}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {getFormatIcon(event.format)}
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {event.format === 'Virtual' ? 'Online' : event.location}
                      </span>
                    </div>
                  </div>

                  {/* Registration Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        Registration Progress
                      </span>
                      <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {event.registered}/{event.capacity}
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${isDark ? 'bg-blue-500' : 'bg-blue-600'
                          }`}
                        style={{ width: `${Math.min((event.registered / event.capacity) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <Link href={event.registrationUrl}>
                    <button className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${isDark
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}>
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                <Search className={`w-12 h-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                No events found
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                Try adjusting your search criteria or filters
              </p>
            </div>
          )}

          {/* Load More Button */}
          {filteredEvents.length > 0 && (
            <div className="text-center mt-12">
              <button className={`px-8 py-3 rounded-xl font-medium transition-colors ${isDark
                ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                }`}>
                Load More Events
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
