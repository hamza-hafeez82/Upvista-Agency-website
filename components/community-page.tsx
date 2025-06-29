"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home, 
  Globe, 
  Users,
  Calendar, 
  Award, 
  Bell,
  MessageCircle, 
  Handshake, 
  BookOpen,
  Briefcase,
  Rocket, 
  Code, 
  X,
  Star,
  Clock,
  MessageSquare,
  Eye,
  Share2,
  ThumbsUp,
  ArrowRight,
  Github,
  Linkedin,
  TrendingUp,
  Heart,
  Zap,
  CheckCircle,
  ExternalLink,
  Users2,
  Activity,
  Trophy,
  Lightbulb,
  MapPin,
  Phone,
  Mail,
  Globe2,
  Video,
  FileText,
  FileCheck2,
  FileOutput,
  Wrench
} from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CountUp from "react-countup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ULogo from "@/assets/u.png";
import { motion } from "framer-motion";

// Community Statistics Variables - Easy to update
const COMMUNITY_STATS = {
  totalMembers: 11,
  totalProjects: 1,
  totalEvents: 3,
  totalDiscussions: 2
};

// Add custom CSS for scrollbar hiding and snap scrolling
const customStyles = `
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .snap-scroll {
    scroll-snap-type: x mandatory;
  }
  .snap-item {
    scroll-snap-align: start;
  }
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: rgba(17, 24, 39, 0.95);
    border-top: 1px solid rgba(139, 92, 246, 0.2);
    padding: 0.5rem 0;
  }
  body.mobile-menu-open .bottom-nav {
    display: none !important;
  }
  .bottom-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.375rem 0.25rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    min-width: 3.5rem;
    flex: 1 1 0%; /* Evenly distribute icons */
  }
  .bottom-nav-item.active {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
    border: 1px solid rgba(139, 92, 246, 0.3);
  }
  .bottom-nav-item:hover {
    background: rgba(139, 92, 246, 0.1);
    transform: translateY(-1px);
  }
  .bottom-nav-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-bottom: 0.125rem;
  }
  .bottom-nav-label {
    font-size: 0.625rem;
    font-weight: 500;
    text-align: center;
  }
  @media (min-width: 768px) {
    .bottom-nav {
      position: static;
      background: none;
      border-top: none;
      padding: 0;
    }
    .sticky {
      position: sticky;
      top: 72px;
      z-index: 40;
      background: transparent;
    }
    .bottom-nav-item {
      flex-direction: row;
      padding: 0.75rem 1.5rem;
      min-width: auto;
    }
    .bottom-nav-icon {
      margin-bottom: 0;
      margin-right: 0.5rem;
      width: 1.25rem;
      height: 1.25rem;
    }
    .bottom-nav-label {
      font-size: 0.875rem;
    }
  }
  .content-wrapper {
    padding-bottom: 8rem;
  }
  @media (min-width: 768px) {
    .content-wrapper {
      padding-bottom: 8rem;
    }
  }
  
  /* Enhanced animations for section transitions */
  .section-transition {
    animation: sectionFadeIn 0.6s ease-out forwards;
  }
  
  @keyframes sectionFadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px) scale(0.98);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  .section-slide-in {
    animation: slideInFromRight 0.5s ease-out forwards;
  }
  
  @keyframes slideInFromRight {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .section-slide-out {
    animation: slideOutToLeft 0.3s ease-in forwards;
  }
  
  @keyframes slideOutToLeft {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-30px);
    }
  }
  
  .stagger-animation > * {
    animation: staggerFadeIn 0.6s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }
  
  .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
  .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
  .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
  .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
  .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
  .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }
  
  @keyframes staggerFadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  .floating-animation {
    animation: floating 3s ease-in-out infinite;
  }
  
  @keyframes floating {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .pulse-glow {
    animation: pulseGlow 2s ease-in-out infinite alternate;
  }
  
  @keyframes pulseGlow {
    0% {
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
    }
    100% {
      box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
    }
  }
  
  .scale-in {
    animation: scaleIn 0.4s ease-out forwards;
  }
  
  @keyframes scaleIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .bounce-in {
    animation: bounceIn 0.6s ease-out forwards;
  }
  
  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3) translateY(-50px);
    }
    50% {
      opacity: 1;
      transform: scale(1.05) translateY(0);
    }
    70% {
      transform: scale(0.9) translateY(0);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  .fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .rotate-in {
    animation: rotateIn 0.6s ease-out forwards;
  }
  
  @keyframes rotateIn {
    0% {
      opacity: 0;
      transform: rotate(-180deg) scale(0.3);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg) scale(1);
    }
  }
`;

// TypeScript interfaces
interface Member {
  name: string;
  role: string;
  company: string;
  avatar: string;
  contributions: number;
  badges: string[];
  platform: string;
  specialty: string;
  joinDate: string;
  projects: number;
  skills: string[];
  bio: string;
  achievements: string[];
  contact: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
    behance?: string;
    dribbble?: string;
    blog?: string;
  };
}

interface Event {
  title: string;
  date: string;
  time: string;
  platform: string;
  attendees: number;
  type: string;
  description: string;
  details: {
    duration: string;
    level?: string;
    topics: string[];
    instructor?: string;
    prerequisites?: string[];
    materials?: string[];
    maxAttendees?: number;
    cost?: string;
    certificate?: string;
    format?: string;
    panelists?: string[];
    companies?: string[];
    networking?: string;
    followUp?: string;
    activities?: string[];
  };
}

interface Achievement {
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  details: {
    requirements: string;
    rewards: string[];
    tips: string;
    examples?: string[];
    ways?: string[];
    events?: string[];
    mentees?: number;
    successRate?: string;
    specialties?: string[];
    testimonials?: number;
    averageRating?: number;
    contribution?: string;
  };
}

interface Activity {
  type: string;
  title: string;
  user: string;
  time: string;
  platform: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
  details: {
    technologies?: string[];
    contributors?: number;
    stars?: number;
    forks?: number;
    status?: string;
    timeline?: string;
    impact?: string;
    participants?: number;
    duration?: string;
    topics?: string[];
    resources?: string[];
    outcome?: string;
    attendees?: number;
    sessions?: number;
    mentors?: number;
    projects?: number;
    certificates?: string;
    cost?: string;
  };
}

interface Highlight {
  title: string;
  description: string;
  image: string;
  stats: {
    participants?: number;
    projects?: number;
    contributors?: number;
    contributions?: number;
    followers?: number;
  };
  badge: string;
  details: {
    projectName?: string;
    team?: string[];
    technologies?: string[];
    description?: string;
    impact?: string;
    nextSteps?: string;
    timeline?: string;
    memberName?: string;
    role?: string;
    joinDate?: string;
    achievements?: string[];
    specialties?: string[];
    contributions?: string;
    prize?: string;
  };
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  platform: string;
  joinDate: string;
  projects: number;
  contributions: number;
  skills: string[];
  story: string;
}

export default function Component() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [radialOpen, setRadialOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Animation state for section transitions
  const [sectionAnimation, setSectionAnimation] = useState<'entering' | 'entered' | 'exiting'>('entered');

  // Handle section change with animation
  const handleSectionChange = (newSection: string) => {
    if (newSection === activeSection) return;
    
    setIsAnimating(true);
    setSectionAnimation('exiting');
    
    setTimeout(() => {
      setActiveSection(newSection);
      setAnimationKey(prev => prev + 1);
      setSectionAnimation('entering');
      
      setTimeout(() => {
        setSectionAnimation('entered');
        setIsAnimating(false);
      }, 300);
    }, 200);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const closeModal = () => {
    setSelectedMember(null);
    setSelectedEvent(null);
    setSelectedAchievement(null);
    setSelectedActivity(null);
    setSelectedHighlight(null);
    setSelectedTestimonial(null);
  };

  const navSections = [
    { id: "overview", label: "", icon: Home },
    { id: "platforms", label: "", icon: Globe },
    { id: "members", label: "", icon: Users },
    { id: "events", label: "", icon: Calendar },
    { id: "achievements", label: "", icon: Award },
  ];

  const communityFeatures = [
    {
      icon: Bell,
      title: "Latest Updates",
      description: "Stay informed about new features, product releases, and company news",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "Announcements",
      description: "Get notified about important events, hackathons, and opportunities",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Connect with like-minded professionals and work on exciting projects together",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Access exclusive tutorials, workshops, and knowledge sharing sessions",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description: "Discover career opportunities and connect with potential employers",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Innovation Hub",
      description: "Share ideas, get feedback, and collaborate on cutting-edge projects",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const recentActivities = [
    
    {
      type: "event",
      title: "Inauguration ceremony of Upvista",
      user: "Community Team",
      time: "July, 1st  ",
      platform: "Google meet",
      icon: Calendar,
      color: "text-purple-400",
      description: "Hosted a ceremony to launch the Upvista community",
      details: {
        attendees: 8,
        sessions: 1,
        topics: ["Upvista", "Community", "Launch", "Launching"],
        mentors: 2,
        projects: 1,
        certificates: "yes",
        cost: "Free for members"
      }
    }
  ];

  const testimonials = [
    {
      name: "Dawar Shaheer",
      role: "Full Stack Developer",
      company: "TechCorp Inc.",
      avatar: "/assets/community/dawar.jpeg",
      content: "The Upvista community has been amazing for my growth. I have learned so much from fellow developers and even led our first collaborative project. The support here is incredible.",
      rating: 5,
      platform: "Discord",
      joinDate: "June 2025",
      projects: 1,
      contributions: 2,
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      story: "Started as a regular member and now actively helps others. The community collaborative spirit is what makes it special."
    },
    
  ];

  const communityHighlights = [
    {
      title: "First Community Project Started",
      description: "Xpertaide is a platform inspired by preply, which will help coaches to deal with the clients via call, video or chat, and can manage their schedule for the clients. The client will choose the coach, will pay his fee and will start taking coachings",
      image: "/assets/community/xpertaide.png",
      stats: { participants: 2, projects: 1, contributors: 2 },
      badge: "Ongoing",
      details: {
        projectName: "Xpertaide",
        team: ["Hamza Hafeez", "Dawar Shaheer"],
        technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "MySQL"],
        description: "A collaborative project to help coaches and trainers to manage their clients and their progress.",
        impact: "Showcasing community talent and fostering collaboration",
        nextSteps: "Adding more members and features",
        timeline: "2 months of development"
      }
    },
  ];

  const socialPlatforms = [
    {
      name: "WhatsApp",
      description: "Join our WhatsApp group for instant updates and quick discussions",
      icon: FaWhatsapp,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      members: "counting",
      link: "https://chat.whatsapp.com/FGH6blT1qXS3t7O2HGxImP",
      features: ["Instant messaging", "Voice notes", "File sharing", "Group calls"],
      activity: "Very Active",
    },
    {
      name: "Discord",
      description: "Connect with developers and designers in our Discord server",
      icon: FaDiscord,
      color: "from-[#5865F2] to-[#4752C4]",
      hoverColor: "hover:from-[#4752C4] hover:to-[#3C45A5]",
      members: "counting",
      link: "https://discord.gg/RfJmxZPNRR",
      features: ["Voice channels", "Screen sharing", "Bot integrations", "Role management"],
      activity: "International",
    },
    {
      name: "GitHub",
      description: "Contribute to open source projects and showcase your work",
      icon: FaGithub,
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-gray-900",
      members: "counting",
      link: "https://github.com/Upvista",
      features: ["Code collaboration", "Issue tracking", "Pull requests", "Project management"],
      activity: "Growing",
    },
    {
      name: "LinkedIn",
      description: "Get into the Professional networking and career opportunities",
      icon: FaLinkedin,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      members: "counting",
      link: "https://www.linkedin.com/in/hamza-hafeez-00937436a/",
      features: ["Professional networking", "Job postings", "Industry insights", "Skill endorsements"],
      activity: "Professional",
    },
  ];

  const featuredMembers = [
    {
      name: "Dawar Shaheer",
      role: "AI Automation",
      company: "TechCorp Inc.",
      avatar: "/assets/community/dawar.jpeg",
      contributions: 2,
      badges: ["Contributor"],
      platform: "Discord",
      specialty: "React & Node.js",
      joinDate: "June 2025",
      projects: 1,
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      bio: "Passionate developer who loves building scalable web applications and helping others learn.",
      achievements: ["First Community Project", "Active Helper"],
      contact: {
        github: "https://github.com/dawarshaheer",
        linkedin: "https://linkedin.com/in/dawarshaheer",
        portfolio: "https://dawarshaheer.dev"
      }
    }
  ];

  const upcomingEvents = [
    {
      title: "Orientation Session",
      date: "July 07, 2025",
      time: "will be announced soon in the community",
      platform: "Google Meet",
      attendees: 8,
      type: "Session",
      description: "introduce each other and have a chit chat",
      details: {
        duration: "1 hours",
        level: "Beginner",
        topics: ["introducing Upvista Digital", "introducing community", "introducing members", "introducing projects", "introducing events", "introducing achievements", "introducing guidelines"],
        instructor: "Hamza Hafeez",
        prerequisites: ["none"],
        materials: ["Slides", "Recording"],
        maxAttendees: 100,
        cost: "Free for members",
        certificate: "No"
      }
    },
    {
      title: "System Design Workshop",
      date: "to be decided",
      time: "to be decided",
      platform: "Google Meet",
      attendees: 3,
      type: "Workshop",
      description: "Learn how to create and maintain design systems for consistent Large scalable systems",
      details: {
        duration: "2.5 hours",
        level: "Intermediate",
        topics: ["System Designing principles", "Software Development Lifecycle", "Component Libraries", "Documentation", "Implementation", "Designing System design of any sample project"],
        instructor: "Hamza Hafeez",
        prerequisites: ["Basic design knowledge", "Figma experience"],
        materials: ["Powerpoint slides", "Documentation templates", "Best practices guide"],
        maxAttendees: 100,
        cost: "Free for members",
        certificate: "Yes"
      }
    },
    {
      title: "Community Meetup",
      date: "To be decided",
      time: "to be decided",
      platform: "Google meet",
      attendees: 3,
      type: "Networking",
      description: "Monthly community meetup to connect, share experiences, and plan future activities.",
      details: {
        duration: "1.5 hours",
        format: "Open discussion + networking",
        topics: ["Member introductions", "Project updates", "Community feedback", "Future planning"],
        activities: ["Ice breakers", "Project showcases", "Q&A session"],
        networking: "Breakout rooms available",
        followUp: "Discord, whatsapp, linkedin channels + resource sharing"
      }
    },
  ];

  const achievements = [
    { 
      name: "First Project", 
      description: "Complete your first community project", 
      icon: "🎯", 
      unlocked: true, 
      progress: 10,
      details: {
        requirements: "Submit a project to the community",
        rewards: ["Profile badge", "Community recognition"],
        tips: "Start with a small project and get feedback from others",
        examples: ["Portfolio website", "Simple app", "Design mockup"]
      }
    },
    { 
      name: "Helpful Hand", 
      description: "Help 10 other community members", 
      icon: "🤝", 
      unlocked: true, 
      progress: 10,
      details: {
        requirements: "Provide helpful answers or assistance to 10 members",
        rewards: ["Helper badge", "Priority support access"],
        tips: "Be patient and thorough in your responses",
        ways: ["Answer questions", "Code reviews", "Mentoring"]
      }
    },
    { 
      name: "Knowledge Seeker", 
      description: "Attend 5 workshops or events", 
      icon: "📚", 
      unlocked: true, 
      progress: 25,
      details: {
        requirements: "Participate in 5 community events",
        rewards: ["Learning badge", "Early access to events"],
        tips: "Take notes and apply what you learn",
        events: ["Workshops", "Hackathons", "Networking sessions"]
      }
    },
    { 
      name: "Innovation Leader", 
      description: "Lead a successful project", 
      icon: "🚀", 
      unlocked: false, 
      progress: 60,
      details: {
        requirements: "Lead a project with 3+ team members to completion",
        rewards: ["Leader badge", "Mentorship opportunities"],
        tips: "Focus on communication and project management",
        examples: ["Open source project", "Community tool", "Workshop series"]
      }
    },
    { 
      name: "Community Pillar", 
      description: "Be active for 6 months", 
      icon: "🏛️", 
      unlocked: false, 
      progress: 20,
      details: {
        requirements: "Consistently participate for 6 months",
        rewards: ["Pillar badge", "Community leadership role"],
        tips: "Stay engaged and contribute regularly",
        activities: ["Regular posts", "Event participation", "Helping others"]
      }
    },
    { 
      name: "Mentor", 
      description: "Mentor 5 new members", 
      icon: "👨‍🏫", 
      unlocked: false, 
      progress: 40,
      details: {
        requirements: "Successfully mentor 5 community members",
        rewards: ["Mentor badge", "Exclusive mentor network"],
        tips: "Be patient and adapt your teaching style",
        support: ["Mentor training", "Resources", "Community backing"]
      }
    },
  ];

  // Modal Components
  const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode; }) => {
    if (!isOpen) return null;

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Static close button at top-right */}
              <button
                onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-gray-800/80 rounded-full p-1"
            aria-label="Close modal"
              >
                <X className="w-6 h-6" />
          </button>
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const MemberModal = ({ member, isOpen, onClose }: { member: Member | null; isOpen: boolean; onClose: () => void }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src={member?.avatar}
            alt={member?.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h4 className="text-xl font-bold text-white">{member?.name}</h4>
            <p className="text-gray-400">{member?.role} at {member?.company}</p>
            <p className="text-purple-400 text-sm">Member since {member?.joinDate}</p>
          </div>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
          <h5 className="text-lg font-semibold text-white mb-3">About</h5>
          <p className="text-gray-300 leading-relaxed">{member?.bio}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Skills</h5>
            <div className="flex flex-wrap gap-2">
              {member?.skills?.map((skill: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Badges</h5>
            <div className="flex flex-wrap gap-2">
              {member?.badges?.map((badge: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Community Stats</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Contributions:</span>
                <span className="text-white">{member?.contributions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Projects:</span>
                <span className="text-white">{member?.projects}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Platform:</span>
                <span className="text-white">{member?.platform}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Specialty:</span>
                <span className="text-white">{member?.specialty}</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Achievements</h5>
            <ul className="space-y-1">
              {member?.achievements?.map((achievement: string, index: number) => (
                <li key={index} className="flex items-center space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {member?.contact && (
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Contact</h5>
            <div className="flex space-x-4">
              {member.contact.github && (
                <a href={`https://github.com/${member.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              )}
              {member.contact.linkedin && (
                <a href={`https://linkedin.com/in/${member.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              )}
              {member.contact.portfolio && (
                <a href={`https://${member.contact.portfolio}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                  <Globe className="w-5 h-5" />
                  <span>Portfolio</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );

  const EventModal = ({ event, isOpen, onClose }: { event: Event | null; isOpen: boolean; onClose: () => void }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-2">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              event?.type === 'Workshop' ? 'bg-blue-500/20 text-blue-300' :
              event?.type === 'Hackathon' ? 'bg-green-500/20 text-green-300' :
              'bg-purple-500/20 text-purple-300'
            }`}>
              {event?.type}
            </span>
            <span className="text-gray-400 text-sm">{event?.attendees} attending</span>
          </div>
          <p className="text-gray-300 leading-relaxed">{event?.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Event Details</h5>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>{event?.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span>{event?.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <span>{event?.platform}</span>
              </div>
              {event?.details?.duration && (
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>Duration: {event.details.duration}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Additional Info</h5>
            <div className="space-y-2 text-gray-300">
              {event?.details?.level && (
                <p><span className="text-white">Level:</span> {event.details.level}</p>
              )}
              {event?.details?.instructor && (
                <p><span className="text-white">Instructor:</span> {event.details.instructor}</p>
              )}
              {event?.details?.cost && (
                <p><span className="text-white">Cost:</span> {event.details.cost}</p>
              )}
              {event?.details?.certificate && (
                <p><span className="text-white">Certificate:</span> {event.details.certificate}</p>
              )}
            </div>
          </div>
        </div>

        {event?.details?.topics && (
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Topics Covered</h5>
            <div className="flex flex-wrap gap-2">
              {event.details.topics.map((topic: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {event?.details?.prerequisites && (
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Prerequisites</h5>
            <ul className="space-y-1">
              {event.details.prerequisites.map((prereq: string, index: number) => (
                <li key={index} className="flex items-center space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>{prereq}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-center pt-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Register for Event
          </Button>
        </div>
      </div>
    </Modal>
  );

  const AchievementModal = ({ achievement, isOpen, onClose }: { achievement: Achievement | null; isOpen: boolean; onClose: () => void }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <div className="text-center">
          <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
            achievement?.unlocked 
              ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
              : 'bg-gray-700'
          }`}>
            <span className="text-3xl">{achievement?.icon}</span>
          </div>
          <h4 className="text-2xl font-bold text-white mb-2">{achievement?.name}</h4>
          <p className="text-gray-400">{achievement?.description}</p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
          <h5 className="text-lg font-semibold text-white mb-3">Progress</h5>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${
                achievement?.unlocked ? 'bg-green-500' : 'bg-purple-500'
              }`}
              style={{ width: `${achievement?.progress || 0}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">{achievement?.progress || 0}% Complete</span>
            {achievement?.unlocked && (
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
                Unlocked
              </span>
            )}
          </div>
        </div>

        {achievement?.details && (
          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Requirements</h5>
              <p className="text-gray-300">{achievement.details.requirements}</p>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Rewards</h5>
              <ul className="space-y-1">
                {achievement.details.rewards.map((reward: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>{reward}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Tips</h5>
              <p className="text-gray-300">{achievement.details.tips}</p>
            </div>

            {achievement.details.examples && (
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Examples</h5>
                <div className="flex flex-wrap gap-2">
                  {achievement.details.examples.map((example: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );

  const ActivityModal = ({ activity, isOpen, onClose }: { activity: Activity | null; isOpen: boolean; onClose: () => void }) => {
    const IconComponent = activity?.icon;
    
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center`}>
              {IconComponent && <IconComponent className={`w-6 h-6 ${activity?.color}`} />}
            </div>
            <div>
              <p className="text-white font-semibold">{activity?.user}</p>
              <p className="text-gray-400 text-sm">{activity?.time}</p>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Description</h5>
            <p className="text-gray-300 leading-relaxed">{activity?.description}</p>
          </div>

          {activity?.details && (
            <div className="space-y-4">
              {activity.details.technologies && (
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {activity.details.technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activity.details.contributors && (
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Contributors</h5>
                    <p className="text-gray-300">{activity.details.contributors} people</p>
                  </div>
                )}
                {activity.details.stars && (
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Stars</h5>
                    <p className="text-gray-300">{activity.details.stars}</p>
                  </div>
                )}
                {activity.details.forks && (
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Forks</h5>
                    <p className="text-gray-300">{activity.details.forks}</p>
                  </div>
                )}
                {activity.details.status && (
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Status</h5>
                    <p className="text-gray-300">{activity.details.status}</p>
                  </div>
                )}
              </div>

              {activity.details.timeline && (
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Timeline</h5>
                  <p className="text-gray-300">{activity.details.timeline}</p>
                </div>
              )}

              {activity.details.impact && (
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Impact</h5>
                  <p className="text-gray-300">{activity.details.impact}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </Modal>
    );
  };

  const HighlightModal = ({ highlight, isOpen, onClose }: { highlight: Highlight | null; isOpen: boolean; onClose: () => void }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <div className="relative">
          <img
            src={highlight?.image}
            alt={highlight?.title}
            className="w-full h-48 object-cover rounded-xl"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold border border-yellow-500/30">
              {highlight?.badge}
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-white mb-3">{highlight?.title}</h4>
          <p className="text-gray-300 leading-relaxed">{highlight?.description}</p>
        </div>

        {highlight?.stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(highlight.stats).map(([key, value]) => (
              <div key={key} className="text-center bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <p className="text-gray-400 text-sm capitalize">{key}</p>
              </div>
            ))}
          </div>
        )}

        {highlight?.details && (
          <div className="space-y-4">
            {highlight.details.projectName && (
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Project Details</h5>
                <div className="space-y-2">
                  <p className="text-gray-300"><span className="text-white">Project:</span> {highlight.details.projectName}</p>
                  {highlight.details.team && (
                    <p className="text-gray-300"><span className="text-white">Team:</span> {highlight.details.team.join(', ')}</p>
                  )}
                  {highlight.details.technologies && (
                    <div>
                      <span className="text-white">Technologies:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {highlight.details.technologies.map((tech: string, index: number) => (
                          <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {highlight.details.description && (
                    <p className="text-gray-300 mt-2">{highlight.details.description}</p>
                  )}
                  {highlight.details.impact && (
                    <p className="text-gray-300"><span className="text-white">Impact:</span> {highlight.details.impact}</p>
                  )}
                  {highlight.details.prize && (
                    <p className="text-gray-300"><span className="text-white">Prize:</span> {highlight.details.prize}</p>
                  )}
                  {highlight.details.nextSteps && (
                    <p className="text-gray-300"><span className="text-white">Next Steps:</span> {highlight.details.nextSteps}</p>
                  )}
                </div>
              </div>
            )}

            {highlight.details.memberName && (
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Member Details</h5>
                <div className="space-y-2">
                  <p className="text-gray-300"><span className="text-white">Name:</span> {highlight.details.memberName}</p>
                  <p className="text-gray-300"><span className="text-white">Role:</span> {highlight.details.role}</p>
                  <p className="text-gray-300"><span className="text-white">Join Date:</span> {highlight.details.joinDate}</p>
                  {highlight.details.achievements && (
                    <div>
                      <span className="text-white">Achievements:</span>
                      <ul className="mt-2 space-y-1">
                        {highlight.details.achievements.map((achievement: string, index: number) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {highlight.details.specialties && (
                    <div>
                      <span className="text-white">Specialties:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {highlight.details.specialties.map((specialty: string, index: number) => (
                          <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {highlight.details.contributions && (
                    <p className="text-gray-300"><span className="text-white">Contributions:</span> {highlight.details.contributions}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );

  const TestimonialModal = ({ testimonial, isOpen, onClose }: { testimonial: Testimonial | null; isOpen: boolean; onClose: () => void }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src={testimonial?.avatar}
            alt={testimonial?.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h4 className="text-xl font-bold text-white">{testimonial?.name}</h4>
            <p className="text-gray-400">{testimonial?.role} at {testimonial?.company}</p>
            <p className="text-purple-400 text-sm">Member since {testimonial?.joinDate}</p>
          </div>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
          <div className="flex items-center space-x-1 mb-3">
            {[...Array(testimonial?.rating || 0)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed italic">&quot;{testimonial?.content}&quot;</p>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Their Story</h5>
          <p className="text-gray-300 leading-relaxed">{testimonial?.story}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Skills</h5>
            <div className="flex flex-wrap gap-2">
              {testimonial?.skills?.map((skill: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Community Stats</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Projects:</span>
                <span className="text-white">{testimonial?.projects}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contributions:</span>
                <span className="text-white">{testimonial?.contributions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Platform:</span>
                <span className="text-white">{testimonial?.platform}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );

  const renderSection = () => {
    const animationClass = sectionAnimation === 'entering' ? 'section-transition' : 
                          sectionAnimation === 'exiting' ? 'section-slide-out' : '';
    
    switch (activeSection) {
      case "overview":
        return (
          <div className={`space-y-16 ${animationClass}`} key={animationKey}>
            {/* Statistics Dashboard */}
            <section className="py-8 md:py-12">
              <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                    Community Growth
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Watch our community flourish with real-time statistics and achievements
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      <CountUp end={COMMUNITY_STATS.totalMembers} duration={2} />
                    </div>
                    <div className="text-sm md:text-base text-gray-300">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      <CountUp end={COMMUNITY_STATS.totalProjects} duration={2} />
                    </div>
                    <div className="text-sm md:text-base text-gray-300">Ongoing Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      <CountUp end={COMMUNITY_STATS.totalEvents} duration={2} />
                    </div>
                    <div className="text-sm md:text-base text-gray-300">Events This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      <CountUp end={COMMUNITY_STATS.totalDiscussions} duration={2} />
                    </div>
                    <div className="text-sm md:text-base text-gray-300">Active Discussions</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Activities - Horizontal Slider */}
            <section className="py-8 md:py-12 bg-gray-900/30">
              <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                    Recent Activities
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Stay updated with the latest happenings in our community
                  </p>
                </div>

                <div className="relative">
                  <div className="flex space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide pb-4">
                    {recentActivities.map((activity, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group hover:scale-105 flex-shrink-0 w-72 md:w-80 cursor-pointer"
                        onClick={() => setSelectedActivity(activity)}
                      >
                        <CardContent className="p-4 md:p-6">
                          <div className="flex items-center space-x-3 mb-3 md:mb-4">
                            <div className={`w-8 h-8 md:w-10 md:h-10 bg-gray-700 rounded-full flex items-center justify-center`}>
                              <activity.icon className={`w-4 h-4 md:w-5 md:h-5 ${activity.color}`} />
                            </div>
                            <div>
                              <p className="text-white font-semibold text-xs md:text-sm">{activity.user}</p>
                              <p className="text-gray-400 text-xs">{activity.time}</p>
                            </div>
                          </div>
                          <h4 className="text-white font-semibold mb-2 leading-tight text-sm md:text-base">{activity.title}</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-xs md:text-sm">{activity.platform}</span>
                            <div className="flex space-x-1">
                              <Eye className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                              <Share2 className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Community Highlights - Horizontal Slider */}
            <section className="py-8 md:py-12">
              <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                    Community Highlights
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Celebrating our community&apos;s achievements and milestones
                  </p>
                </div>

                <div className="relative">
                  <div className="flex space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide pb-4">
                    {communityHighlights.map((highlight, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group overflow-hidden hover:scale-105 flex-shrink-0 w-80 md:w-96 cursor-pointer"
                        onClick={() => setSelectedHighlight(highlight)}
                      >
                        <div className="relative">
                          <img
                            src={highlight.image}
                            alt={highlight.title}
                            className="w-full h-32 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-2 right-2 md:top-4 md:right-4">
                            <span className="px-2 py-1 md:px-3 md:py-1 bg-purple-600/80 backdrop-blur-sm text-white text-xs rounded-full">
                              {highlight.badge}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-4 md:p-6">
                          <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight">{highlight.title}</h4>
                          <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">{highlight.description}</p>
                          <div className="flex justify-between items-center text-xs md:text-sm text-gray-400">
                            <span>{highlight.stats.participants} participants</span>
                            <span>{highlight.stats.projects} projects</span>
                            <span>{highlight.stats.contributors} contributors</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials - Horizontal Slider */}
            <section className="py-8 md:py-12 bg-gray-900/30">
              <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                    What Our Members Say
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Hear from our community members about their experience
                  </p>
                </div>

                <div className="relative">
                  <div className="flex space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide pb-4">
                    {testimonials.map((testimonial, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group hover:scale-105 flex-shrink-0 w-72 md:w-80 cursor-pointer"
                        onClick={() => setSelectedTestimonial(testimonial)}
                      >
                        <CardContent className="p-4 md:p-6">
                          <div className="flex items-center space-x-3 mb-3 md:mb-4">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                            />
                            <div>
                              <h4 className="text-white font-semibold leading-tight text-sm md:text-base">{testimonial.name}</h4>
                              <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 mb-3 md:mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-300 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">&quot;{testimonial.content}&quot;</p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-xs md:text-sm">{testimonial.platform}</span>
                            <ThumbsUp className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case "platforms":
        return (
          <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Choose Your Platform
            </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Join us on your preferred platform and become part of our growing
              community of innovators.
            </p>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {socialPlatforms.map((platform, index) => (
              <Card
                key={index}
                    className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group overflow-hidden backdrop-blur-sm hover:scale-105"
              >
                <CardContent className="p-0">
                  <div
                        className={`bg-gradient-to-r ${platform.color} ${platform.hoverColor} transition-all duration-300 p-4 md:p-6`}
                  >
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                              <platform.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div>
                              <h4 className="text-lg md:text-xl font-bold text-white leading-tight">{platform.name}</h4>
                              <p className="text-white/80 text-xs md:text-sm">
                                {platform.members.toLocaleString()} members
                          </p>
                        </div>
                      </div>
                          <div className="text-right">
                            <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                              {platform.activity}
                            </span>
                    </div>
                  </div>
                      </div>
                      <div className="p-4 md:p-6">
                        <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      {platform.description}
                    </p>
                        <div className="mb-4 md:mb-6">
                          <h5 className="text-white font-semibold mb-2 md:mb-3 leading-tight text-sm md:text-base">Key Features:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {platform.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                    <Button
                          className={`w-full bg-gradient-to-r ${platform.color} ${platform.hoverColor} border-0 text-white font-semibold py-2 md:py-3 hover:scale-105 transition-transform duration-300 text-sm md:text-base`}
                      onClick={() => window.open(platform.link, "_blank")}
                    >
                      Join {platform.name}
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
        );

      case "members":
        return (
          <section className={`py-8 md:py-12 ${animationClass}`} key={animationKey}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-12 fade-in-up">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                  Community Members
                </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Meet the talented individuals who make our community thrive
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                {featuredMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group hover:scale-105 cursor-pointer scale-in"
                    onClick={() => setSelectedMember(member)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-lg md:text-xl font-bold text-white leading-tight">{member.name}</h4>
                          <p className="text-gray-400 text-sm md:text-base">{member.role}</p>
                          <p className="text-gray-500 text-xs md:text-sm">{member.specialty}</p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-xs md:text-sm">
                          <span className="text-gray-400">Contributions:</span>
                          <span className="text-white font-semibold">{member.contributions}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs md:text-sm">
                          <span className="text-gray-400">Projects:</span>
                          <span className="text-white font-semibold">{member.projects}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {member.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-600/20 text-gray-300 text-xs rounded-full">
                            +{member.skills.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs md:text-sm">{member.platform}</span>
                        <div className="flex space-x-1">
                          {member.badges.slice(0, 2).map((badge, badgeIndex) => (
                            <span
                              key={badgeIndex}
                              className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );

      case "events":
        return (
          <section className={`py-8 md:py-12 ${animationClass}`} key={animationKey}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-12 fade-in-up">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                  Upcoming Events
                </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Join our exciting events and connect with fellow community members
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                {upcomingEvents.map((event, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group hover:scale-105 cursor-pointer scale-in"
                    onClick={() => setSelectedEvent(event)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                          {event.type}
                        </span>
                        <span className="text-gray-400 text-xs">{event.platform}</span>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">{event.title}</h4>
                      <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">{event.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-xs md:text-sm">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs md:text-sm">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{event.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs md:text-sm">
                          {event.attendees} attending
                        </span>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm py-1 md:py-2">
                          Register
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );

      case "achievements":
        return (
          <section className={`py-8 md:py-12 ${animationClass}`} key={animationKey}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-12 fade-in-up">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                  Community Achievements
                </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Unlock badges and achievements as you contribute to our community
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto stagger-animation">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className={`bg-gray-800/50 border-gray-700 transition-all duration-300 backdrop-blur-sm group hover:scale-105 cursor-pointer scale-in ${
                      achievement.unlocked 
                        ? 'hover:border-green-500/50' 
                        : 'hover:border-gray-600/50 opacity-60'
                    }`}
                    onClick={() => setSelectedAchievement(achievement)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-3 md:p-6 text-center">
                      <div className={`w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full flex items-center justify-center ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                          : 'bg-gray-700'
                      }`}>
                        <span className="text-lg md:text-2xl">{achievement.icon}</span>
                      </div>
                      <h4 className="text-sm md:text-xl font-bold text-white mb-2 leading-tight">{achievement.name}</h4>
                      <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{achievement.description}</p>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2 md:mb-3">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            achievement.unlocked ? 'bg-green-500' : 'bg-purple-500'
                          }`}
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-gray-400">{achievement.progress}%</span>
                        {achievement.unlocked && (
                          <span className="px-1 py-0.5 md:px-3 md:py-1 bg-green-500/20 text-green-300 rounded-full border border-green-500/30 text-xs">
                            Unlocked
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );

      default:
        return (
          <div className={`text-center py-12 ${animationClass}`} key={animationKey}>
            <h1 className="text-4xl font-bold text-white fade-in-up">Coming Soon</h1>
            <p className="text-gray-400 mt-4 fade-in-up">This section is under development</p>
    </div>
  );
}
  };

  // Downward-facing D (semi-circle) arrangement for radial menu icons
  const radialAngles = [185, 95, 48, 140, -5];
  const radialIcons = navSections.map((section, i) => {
    const angleDeg = radialAngles[i];
    const angle = (angleDeg * Math.PI) / 180;
    const radius = radialOpen ? 90 : 0; // px
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return (
      <button
        key={section.id}
        onClick={() => {
          handleSectionChange(section.id);
          setRadialOpen(false);
        }}
        className={`absolute transition-all duration-500 ease-out bg-gray-900/90 border border-purple-500/30 rounded-full p-3 shadow-lg flex flex-col items-center justify-center ${activeSection === section.id ? 'ring-2 ring-purple-400' : ''}`}
        style={{
          left: `calc(50% + ${x}px - 24px)`,
          top: `calc(50% + ${y}px - 64px)`,
          opacity: radialOpen ? 1 : 0,
          pointerEvents: radialOpen ? 'auto' : 'none',
          transform: `scale(${radialOpen ? 1 : 0.5}) rotate(${radialOpen ? 0 : 30}deg)`
        }}
      >
        <section.icon className="w-6 h-6 text-purple-300" />
      </button>
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f051d] via-[#1a1333] to-[#2d1e4f] text-white overflow-x-hidden flex flex-col">
      <style jsx global>{customStyles}</style>
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-purple-700/60 to-indigo-700/60 shadow-lg mb-6 animate-pulse">
            <Users className="w-6 h-6 text-cyan-300 animate-bounce" />
            <span className="font-semibold text-lg tracking-wide text-cyan-100">Upvista&apos;s 2nd Pillar: Community & Collaboration</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-400 to-violet-500 bg-clip-text text-transparent mb-6 drop-shadow-lg leading-snug md:leading-[1.25]">
            Join Our Thriving Community
          </h1>
          <p className="text-lg md:text-2xl text-cyan-100/90 font-medium mb-8 max-w-2xl mx-auto">
            Connect with like-minded developers, designers, and innovators. Share knowledge, collaborate on projects, and grow together in our supportive digital ecosystem.
          </p>
        </motion.div>
        {/* Animated Divider */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="absolute left-0 right-0 -bottom-8 flex justify-center pointer-events-none">
          <svg width="100%" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 40C360 0 1080 0 1440 40V0H0V40Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#06b6d4"/></linearGradient></defs></svg>
        </motion.div>
      </section>
      
      {/* Desktop: sticky top-center radial menu */}
      <div className="hidden md:block sticky z-40" style={{top: '72px'}}>
        <div className="relative flex justify-center items-center h-32">
          {/* Main trigger icon */}
          <button
            className={`absolute left-1/2 top-10 -translate-x-1/2 bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-full p-4 shadow-xl z-20 transition-all duration-300 ${radialOpen ? 'scale-110 pulse-glow' : 'scale-100'} floating-animation`}
            onClick={() => setRadialOpen((v) => !v)}
            aria-label="Open menu"
            style={{ boxShadow: radialOpen ? '0 0 0 10px rgba(99,102,241,0.18)' : undefined }}
          >
            <img src={ULogo.src} alt="Upvista Logo" className="w-8 h-8 object-contain" />
          </button>
          {/* Radial icons */}
          <div className="absolute left-1/2 top-10 -translate-x-1/2 w-48 h-48 pointer-events-none">
            {radialIcons}
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="container mx-auto px-4">
          {/* Mobile: classic bar */}
          <div className="flex items-center justify-around md:hidden">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`bottom-nav-item ${activeSection === section.id ? 'active' : ''}`}
              >
                <section.icon className={`bottom-nav-icon ${activeSection === section.id ? 'text-white' : 'text-gray-400'}`} />
                <span className={`bottom-nav-label ${activeSection === section.id ? 'text-white' : 'text-gray-400'}`}>{section.label}</span>
              </button>
            ))}
          </div>
          {/* Desktop: do not render the secondary navbar, only the sticky radial menu is shown above */}
        </div>
      </nav>

      <div className="content-wrapper">
        <main className="pt-20 md:pt-24">
          {/* Loading indicator for section transitions */}
          {isAnimating && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <div className="flex items-center space-x-2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
                <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-purple-300 text-sm">Loading...</span>
              </div>
            </div>
          )}
          {renderSection()}
        </main>
      </div>
      
      <Footer />
      
      {/* Modals */}
      <MemberModal 
        member={selectedMember} 
        isOpen={!!selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
      <EventModal 
        event={selectedEvent} 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
      <AchievementModal 
        achievement={selectedAchievement} 
        isOpen={!!selectedAchievement} 
        onClose={() => setSelectedAchievement(null)} 
      />
      <ActivityModal 
        activity={selectedActivity} 
        isOpen={!!selectedActivity} 
        onClose={() => setSelectedActivity(null)} 
      />
      <HighlightModal 
        highlight={selectedHighlight} 
        isOpen={!!selectedHighlight} 
        onClose={() => setSelectedHighlight(null)} 
      />
      <TestimonialModal 
        testimonial={selectedTestimonial} 
        isOpen={!!selectedTestimonial} 
        onClose={() => setSelectedTestimonial(null)} 
      />
    </div>
  );
} 