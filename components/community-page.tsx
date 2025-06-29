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
  Shield, 
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
  Lightbulb,
  Target,
  Zap,
  Github,
  Linkedin
} from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CountUp from "react-countup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    padding: 0.75rem 0;
  }
  .bottom-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.75rem;
    transition: all 0.2s ease;
    min-width: 4rem;
  }
  .bottom-nav-item.active {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
    border: 1px solid rgba(139, 92, 246, 0.3);
  }
  .bottom-nav-item:hover {
    background: rgba(139, 92, 246, 0.1);
    transform: translateY(-2px);
  }
  .bottom-nav-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-bottom: 0.25rem;
  }
  .bottom-nav-label {
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;
  }
  @media (min-width: 768px) {
    .bottom-nav {
      position: sticky;
      top: 70px;
      bottom: auto;
      background: none;
      border-top: none;
      padding: 1rem 0;
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
    padding-bottom: 5rem;
  }
  @media (min-width: 768px) {
    .content-wrapper {
      padding-bottom: 2rem;
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
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
    { id: "guidelines", label: "", icon: Shield },
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
      role: "Full Stack Developer",
      company: "TechCorp Inc.",
      avatar: "/assets/community/dawar.jpeg",
      contributions: 2,
      badges: ["Helper", "Contributor"],
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
  const Modal = ({ isOpen, onClose, children, title }: { isOpen: boolean; onClose: () => void; children: React.ReactNode; title: string }) => {
    if (!isOpen) return null;

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
          </button>
      </div>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const MemberModal = ({ member, isOpen, onClose }: { member: Member | null; isOpen: boolean; onClose: () => void }) => (
    <Modal isOpen={isOpen} onClose={onClose} title={`${member?.name || 'Member'} - ${member?.role || 'Role'}`}>
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
    <Modal isOpen={isOpen} onClose={onClose} title={event?.title || 'Event'}>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-4">
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
    <Modal isOpen={isOpen} onClose={onClose} title={achievement?.name || 'Achievement'}>
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
      <Modal isOpen={isOpen} onClose={onClose} title={activity?.title || 'Activity'}>
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
    <Modal isOpen={isOpen} onClose={onClose} title={highlight?.title || 'Highlight'}>
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
    <Modal isOpen={isOpen} onClose={onClose} title={`${testimonial?.name || 'Member'} - ${testimonial?.role || 'Role'}`}>
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
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-16">
      {/* Hero Section */}
            <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse leading-tight">
                    Join Our Thriving Community
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Connect with developers, designers, creators, and innovators. Get
              exclusive updates, collaborate on projects, and unlock new
              opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">{COMMUNITY_STATS.totalMembers} Members</span>
              </div>
                    <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                <Code className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{COMMUNITY_STATS.totalProjects} Projects</span>
              </div>
                    <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">{COMMUNITY_STATS.totalEvents} Events</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                      <MessageSquare className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300">{COMMUNITY_STATS.totalDiscussions} Discussions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      <CountUp end={COMMUNITY_STATS.totalMembers} duration={2} />
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      <CountUp end={COMMUNITY_STATS.totalProjects} duration={2} />
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">Ongoing Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      <CountUp end={COMMUNITY_STATS.totalEvents} duration={2} />
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">Events This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      <CountUp end={COMMUNITY_STATS.totalDiscussions} duration={2} />
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">Active Discussions</div>
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

            {/* What You'll Get Section */}
            <section className="py-8 md:py-12">
              <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                    What You&apos;ll Get
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Join our community and unlock access to exclusive content,
              networking opportunities, and career growth.
            </p>
          </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {communityFeatures.map((feature, index) => (
              <Card
                key={index}
                      className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm group"
                    >
                      <CardHeader className="text-center p-3 md:p-6">
                        <div className={`w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                        <CardTitle className="text-white text-base md:text-xl leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                      <CardContent className="p-3 md:p-6">
                        <CardDescription className="text-gray-400 text-center leading-relaxed text-xs md:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
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
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                  Featured Members
                </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Meet some of our most active and inspiring community members
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-8 max-w-6xl mx-auto">
                {featuredMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  >
                    <CardContent className="p-3 md:p-6 text-center">
                      <div className="relative mb-3 md:mb-6">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto border-2 md:border-4 border-purple-500/30 group-hover:border-purple-500/60 transition-colors duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-4 h-4 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 md:w-3 md:h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <h4 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight">{member.name}</h4>
                      <p className="text-gray-400 mb-1 text-xs md:text-base">{member.role}</p>
                      <p className="text-purple-400 text-xs mb-2 md:mb-3">{member.specialty}</p>
                      <div className="flex justify-center space-x-1 mb-2 md:mb-4">
                        {member.badges.slice(0, 1).map((badge, idx) => (
                          <span
                            key={idx}
                            className="px-1 py-0.5 md:px-3 md:py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-center space-x-1 md:space-x-4 text-xs text-gray-400">
                        <span>{member.contributions}</span>
                        <span className="hidden md:inline">•</span>
                        <span className="hidden md:inline">{member.platform}</span>
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
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                  Upcoming Events
                </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Don&apos;t miss out on our exciting community events and workshops
                </p>
              </div>

              {/* Featured Event */}
              <div className="mb-8 md:mb-12">
                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => setSelectedEvent(upcomingEvents[0])}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                        {upcomingEvents[0].type}
                      </span>
                      <Calendar className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{upcomingEvents[0].title}</h4>
                    <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">{upcomingEvents[0].description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">📅 {upcomingEvents[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">🕒 {upcomingEvents[0].time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">💻 {upcomingEvents[0].platform}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">👥 {upcomingEvents[0].attendees} attending</span>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Other Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                {upcomingEvents.slice(1).map((event, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-3 md:mb-4">
                        <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold ${
                          event.type === 'Workshop' ? 'bg-blue-500/20 text-blue-300' :
                          event.type === 'Hackathon' ? 'bg-green-500/20 text-green-300' :
                          'bg-purple-500/20 text-purple-300'
                        }`}>
                          {event.type}
                        </span>
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight">{event.title}</h4>
                      <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{event.description}</p>
                      <div className="space-y-1 md:space-y-2 text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                        <div className="flex items-center space-x-2">
                          <span>📅 {event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>🕒 {event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>💻 {event.platform}</span>
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
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                  Community Achievements
                </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Unlock badges and achievements as you contribute to our community
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className={`bg-gray-800/50 border-gray-700 transition-all duration-300 backdrop-blur-sm group hover:scale-105 cursor-pointer ${
                      achievement.unlocked 
                        ? 'hover:border-green-500/50' 
                        : 'hover:border-gray-600/50 opacity-60'
                    }`}
                    onClick={() => setSelectedAchievement(achievement)}
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

      case "guidelines":
        return (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Community Guidelines
                </h3>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Help us maintain a positive and inclusive environment for everyone
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2 leading-tight">
                      <Shield className="w-6 h-6 text-blue-400" />
                      <span>Be Respectful</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 leading-relaxed">
                      Treat all community members with respect and kindness. Harassment, 
                      discrimination, or any form of hate speech will not be tolerated.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2 leading-tight">
                      <Lightbulb className="w-6 h-6 text-yellow-400" />
                      <span>Share Knowledge</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 leading-relaxed">
                      Contribute positively by sharing your knowledge, helping others, 
                      and participating in meaningful discussions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2 leading-tight">
                      <Target className="w-6 h-6 text-green-400" />
                      <span>Stay On Topic</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 leading-relaxed">
                      Keep discussions relevant to technology, development, design, 
                      and professional growth topics.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2 leading-tight">
                      <Zap className="w-6 h-6 text-purple-400" />
                      <span>Be Active</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 leading-relaxed">
                      Participate regularly, attend events, and engage with other 
                      community members to get the most out of your experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        );

      default:
        return (
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-white">Coming Soon</h1>
            <p className="text-gray-400 mt-4">This section is under development</p>
    </div>
  );
}
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <style jsx global>{customStyles}</style>
      <Header />
      
      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around md:justify-center md:space-x-2">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`bottom-nav-item ${
                  activeSection === section.id ? 'active' : ''
                }`}
              >
                <section.icon className={`bottom-nav-icon ${
                  activeSection === section.id ? 'text-white' : 'text-gray-400'
                }`} />
                <span className={`bottom-nav-label ${
                  activeSection === section.id ? 'text-white' : 'text-gray-400'
                }`}>
                  {section.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="content-wrapper">
        <main className="pt-20 md:pt-24">
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