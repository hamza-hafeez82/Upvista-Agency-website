"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  Code, 
  Megaphone, 
  Globe, 
  Zap,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Clock,
  Bell,
  Share2,
  Heart
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const features = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design Templates",
    description: "Premium UI/UX templates, logos, and design assets",
    category: "Design"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Code Components",
    description: "Reusable React, Next.js, and web components",
    category: "Development"
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Marketing Tools",
    description: "SEO tools, social media templates, and analytics",
    category: "Marketing"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Website Templates",
    description: "Complete website templates for various industries",
    category: "Websites"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI Tools",
    description: "AI-powered design and development tools",
    category: "AI"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Services",
    description: "Connect with verified freelancers and agencies",
    category: "Services"
  }
];

const stats = [
  { number: "500+", label: "Digital Products" },
  { number: "50+", label: "Expert Creators" },
  { number: "10K+", label: "Happy Customers" },
  { number: "24/7", label: "Support" }
];

export default function MarketplacePage() {
  const launchDate = useMemo(() => new Date("2025-07-29T00:00:00"), []);
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLiked, setIsLiked] = useState(false);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  const handleShare = async () => {
    // Check if native sharing is available
    if (navigator.share && navigator.canShare) {
      try {
        const shareData = {
          title: 'Upvista Marketplace - Coming Soon!',
          text: 'Check out the upcoming digital marketplace for designers and developers!',
          url: window.location.href
        };
        
        // Check if the data can be shared
        if (navigator.canShare(shareData)) {
          await navigator.share(shareData);
        } else {
          // Fallback to modal if data can't be shared
          setShowShare(true);
        }
      } catch (error) {
        // Handle any errors (including user cancellation)
        console.log('Share was cancelled or failed:', error);
        // Fallback to modal
        setShowShare(true);
      }
    } else {
      // Fallback for browsers that don't support native sharing
      setShowShare(true);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // Show a brief success message
      const button = document.querySelector('[data-copy-button]');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
      setShowShare(false);
    } catch (error) {
      console.error('Failed to copy:', error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowShare(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-16">
            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 text-sm font-medium backdrop-blur-sm border border-purple-500/20">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                Coming Soon
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-center mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Upvista
              </span>{" "}
              <span className="text-white">Marketplace</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 text-center mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              We&apos;re building the ultimate digital marketplace for creators, developers, and businesses. Get ready to discover, buy, and sell premium digital products and services.
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">Launching In</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                        {value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-gray-400 text-sm capitalize">
                        {unit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLike}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    isLiked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShare}
                  className="flex items-center px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </motion.button>

                <Link href="/pages/contactPage">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    <Bell className="w-5 h-5 mr-2" />
                    Get Notified
                  </motion.button>
                </Link>
              </div>

              {/* Share URL Modal */}
              {showShare && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                  onClick={() => setShowShare(false)}
                >
                  <div 
                    className="bg-gray-900 border border-purple-500/30 rounded-xl p-6 max-w-md mx-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Share Marketplace</h3>
                    <p className="text-gray-400 text-sm mb-4">Share this page with your friends and colleagues!</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={window.location.href}
                        readOnly
                        className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
                      />
                      <button
                        onClick={copyToClipboard}
                        data-copy-button
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap"
                      >
                        Copy Link
                      </button>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out the upcoming Upvista Marketplace!')}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        Share on Twitter
                      </button>
                      <button
                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                        className="flex-1 px-3 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors text-sm"
                      >
                        Share on Facebook
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            What You&apos;ll Find in Our Marketplace
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className="ml-3 px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                    {feature.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Upvista Marketplace?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quality, security, and community - everything you need to succeed in the digital world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Curated Quality</h3>
              <p className="text-gray-400">
                Every product is hand-picked and quality-tested by our expert team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Growth Platform</h3>
              <p className="text-gray-400">
                Built-in tools to help creators grow their business and reach more customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community Driven</h3>
              <p className="text-gray-400">
                Connect with fellow creators, share knowledge, and build lasting relationships.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the Future of Digital Commerce?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be among the first to experience the next generation of digital marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pages/contactPage">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link href="/pages/services">
                <button className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                  Explore Our Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
} 