'use client';

import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaCopy,
  FaWhatsapp,
  FaReddit,
  FaTelegram
} from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';

interface SocialShareProps {
  title?: string;
  description?: string;
  url?: string;
}

export default function SocialShare({
  title = 'Project Cortex: A Biologically Inspired Architecture for Artificial General Intelligence',
  url = typeof window !== 'undefined' ? window.location.href : 'https://upvistadigital.com/Researches/project-cortex'
}: SocialShareProps) {
  const { isDark } = useTheme();

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const hashtags = encodeURIComponent('ProjectCortex,AGI,ArtificialIntelligence,Neuroscience,HamzaHafeezBhatti,UpvistaDigital');

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}&hashtags=${hashtags}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    whatsapp: `https://wa.me/?text=${shareTitle}%20${shareUrl}`,
    reddit: `https://reddit.com/submit?url=${shareUrl}&title=${shareTitle}`,
    telegram: `https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Link copied to clipboard!');
    }
  };

  const handleShare = (platform: keyof typeof shareLinks, e: React.MouseEvent) => {
    e.preventDefault();
    const link = shareLinks[platform];
    if (link) {
      window.open(link, '_blank', 'width=600,height=400,menubar=no,toolbar=no,resizable=yes,scrollbars=yes');
    }
  };

  const socialButtons = [
    {
      name: 'Facebook',
      icon: <FaFacebookF className="w-5 h-5" />,
      color: 'bg-[#1877F2] hover:bg-[#166FE5]',
      onClick: (e: React.MouseEvent) => handleShare('facebook', e)
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5" />,
      color: 'bg-[#1DA1F2] hover:bg-[#1A91DA]',
      onClick: (e: React.MouseEvent) => handleShare('twitter', e)
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn className="w-5 h-5" />,
      color: 'bg-[#0077B5] hover:bg-[#006399]',
      onClick: (e: React.MouseEvent) => handleShare('linkedin', e)
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="w-5 h-5" />,
      color: 'bg-[#25D366] hover:bg-[#22C55E]',
      onClick: (e: React.MouseEvent) => handleShare('whatsapp', e)
    },
    {
      name: 'Reddit',
      icon: <FaReddit className="w-5 h-5" />,
      color: 'bg-[#FF4500] hover:bg-[#E63E00]',
      onClick: (e: React.MouseEvent) => handleShare('reddit', e)
    },
    {
      name: 'Telegram',
      icon: <FaTelegram className="w-5 h-5" />,
      color: 'bg-[#0088CC] hover:bg-[#0077B5]',
      onClick: (e: React.MouseEvent) => handleShare('telegram', e)
    },
    {
      name: 'Copy Link',
      icon: <FaCopy className="w-5 h-5" />,
      color: isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300',
      onClick: handleCopyLink
    },
  ];

  return (
    <div className={`p-6 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Share this Research
      </h3>
      <div className="flex flex-wrap gap-3">
        {socialButtons.map((button) => (
          <button
            key={button.name}
            onClick={button.onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all transform hover:scale-105 active:scale-95 ${button.color}`}
            aria-label={`Share on ${button.name}`}
            title={`Share on ${button.name}`}
          >
            {button.icon}
            <span className="hidden sm:inline">{button.name}</span>
          </button>
        ))}
      </div>
      <p className={`text-xs mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Help spread the word about Project Cortex and Hamza Hafeez Bhatti's groundbreaking research!
      </p>
    </div>
  );
}

