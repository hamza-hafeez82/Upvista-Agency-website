"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  MessageCircle,
  Users,
  Bell,
  BookOpen,
  Briefcase,
  Handshake,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Footer from "@/components/Footer";
import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Component() {
  const communityFeatures = [
    {
      icon: Bell,
      title: "Latest Updates",
      description:
        "Stay informed about new features, product releases, and company news",
    },
    {
      icon: MessageCircle,
      title: "Announcements",
      description:
        "Get notified about important events, hackathons, and opportunities",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "Connect with like-minded professionals and work on exciting projects together",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description:
        "Access exclusive tutorials, workshops, and knowledge sharing sessions",
    },
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description:
        "Discover career opportunities and connect with potential employers",
    },
  ];

  const socialPlatforms = [
    {
      name: "WhatsApp",
      description:
        "Join our WhatsApp group for instant updates and quick discussions",
      icon: FaWhatsapp,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      members: "counting",
      link: "https://chat.whatsapp.com/FGH6blT1qXS3t7O2HGxImP",
    },
    {
      name: "Discord",
      description:
        "Connect with developers and designers in our Discord server",
      icon: FaDiscord,
      color: "from-[#5865F2] to-[#4752C4]",
      hoverColor: "hover:from-[#4752C4] hover:to-[#3C45A5]",
      members: "counting",
      link: "https://discord.gg/RfJmxZPNRR",
    },
    {
      name: "GitHub",
      description: "Contribute to open source projects and showcase your work",
      icon: FaGithub,
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-gray-900",
      members: "counting",
      link: "https://github.com/Upvista",
    },
    {
      name: "LinkedIn",
      description:
        "Get into the Professional networking and career opportunities",
      icon: FaLinkedin,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      members: "counting",
      link: "https://www.linkedin.com/in/hamza-hafeez-00937436a/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Connect with developers, designers, creators, and innovators. Get
              exclusive updates, collaborate on projects, and unlock new
              opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300"> Members</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                <Code className="w-5 h-5 text-green-400" />
                <span className="text-gray-300"> Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300"> Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You&apos;ll Get Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              What You&apos;ll Get
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join our community and unlock access to exclusive content,
              networking opportunities, and career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {communityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-white text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Platform
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join us on your preferred platform and become part of our growing
              community of innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialPlatforms.map((platform, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div
                    className={`bg-gradient-to-r ${platform.color} ${platform.hoverColor} transition-all duration-300 p-6`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <platform.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold">{platform.name}</h4>
                          <p className="text-white/80 text-sm">
                            {platform.members}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {platform.description}
                    </p>
                    <Button
                      className={`w-full bg-gradient-to-r ${platform.color} ${platform.hoverColor} border-0 text-white font-semibold py-3`}
                      onClick={() => window.open(platform.link, "_blank")}
                    >
                      Join {platform.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
