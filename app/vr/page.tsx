'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, Phone, Video, CheckCircle, Clock, Bot, FileText, DollarSign } from 'lucide-react';
import Link from 'next/link';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  type: 'text' | 'typing' | 'system' | 'invoice' | 'document';
}

// Custom SVG Components
const InvoiceSVG = () => (
  <div className="bg-white rounded-lg p-4 border border-gray-200 max-w-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <DollarSign className="w-5 h-5 text-green-600" />
        <span className="font-semibold text-gray-800">INVOICE</span>
      </div>
      <span className="text-sm text-gray-500">#UPV-2024-001</span>
    </div>
    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">Client:</span>
        <span className="text-gray-800">Fitness Coach</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Service:</span>
        <span className="text-gray-800">Project Consultation</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Amount:</span>
        <span className="font-semibold text-green-600">$50.00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Status:</span>
        <span className="text-orange-500">Pending</span>
      </div>
    </div>
    <div className="mt-4 pt-3 border-t border-gray-200">
      <div className="text-xs text-gray-500">
        *This is a refundable token payment
      </div>
    </div>
  </div>
);

const DocumentSVG = () => (
  <div className="bg-white rounded-lg p-4 border border-gray-200 max-w-sm">
    <div className="flex items-center space-x-3 mb-3">
      <FileText className="w-6 h-6 text-blue-600" />
      <div>
        <div className="font-semibold text-gray-800">Project Module</div>
        <div className="text-xs text-gray-500">15 pages • DOCX</div>
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-700">Feature Specifications</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-700">Tech Stack Analysis</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-700">Timeline & Milestones</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-700">Cost Breakdown</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-700">Design Mockups</span>
      </div>
    </div>
    <div className="mt-3 pt-2 border-t border-gray-200">
      <div className="text-xs text-gray-500">
        📧 Sent to your email
      </div>
    </div>
  </div>
);

const VRPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [chatStarted, setChatStarted] = useState(false);
  const [showEndChat, setShowEndChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Memoize conversationFlow to prevent re-creation on every render
  const conversationFlow = useMemo(() => [
    {
      sender: 'agent',
      text: "Hi! I'm Agent from Upvista Agency. Welcome to our Virtual Reality Project Experience! 🚀",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "This is a simulated consultation to show you how we work with clients. No real data will be saved - it's just for demonstration!",
      delay: 3000
    },
    {
      sender: 'agent',
      text: "What type of project are you looking to build today?",
      delay: 2200
    },
    {
      sender: 'user',
      text: "I want to build a simple coaching booking website",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "Great choice! A coaching booking website is a smart way to streamline your business. Tell me more about your coaching services.",
      delay: 2600
    },
    {
      sender: 'user',
      text: "I'm a fitness coach and I want clients to book sessions online",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "Perfect! An online booking system will save you tons of time. Let me understand your business better.",
      delay: 2600
    },
    {
      sender: 'agent',
      text: "What types of fitness coaching do you offer? (Personal training, group classes, nutrition coaching, etc.)",
      delay: 2600
    },
    {
      sender: 'user',
      text: "I offer personal training, group fitness classes, and nutrition coaching",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "Excellent! How many clients do you typically work with per week?",
      delay: 2200
    },
    {
      sender: 'user',
      text: "Around 15-20 clients per week",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "That's a good client base! What's your current booking process like?",
      delay: 2200
    },
    {
      sender: 'user',
      text: "Right now I use WhatsApp and phone calls, but it's getting chaotic",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "I understand! A proper booking system will definitely help. What features are most important to you?",
      delay: 2600
    },
    {
      sender: 'user',
      text: "I need a booking calendar, contact form, about page, and maybe a blog section",
      delay: 2600
    },
    {
      sender: 'agent',
      text: "Perfect! Let me ask about your target audience and branding preferences.",
      delay: 2200
    },
    {
      sender: 'agent',
      text: "Who are your ideal clients? (Age group, fitness level, goals)",
      delay: 2200
    },
    {
      sender: 'user',
      text: "Mostly busy professionals, 25-45 years old, looking to get fit and healthy",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "Great target market! Do you have any brand colors or design preferences?",
      delay: 2200
    },
    {
      sender: 'user',
      text: "I want something modern and energetic, maybe blue and orange colors",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "Perfect! Blue and orange will give a professional yet energetic feel.",
      delay: 2200
    },
    {
      sender: 'agent',
      text: "What's your timeline for this project?",
      delay: 1800
    },
    {
      sender: 'user',
      text: "I need it within 3-4 weeks",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "3-4 weeks is perfect! What's your budget range?",
      delay: 1800
    },
    {
      sender: 'user',
      text: "Around $2,000 - $3,500",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "That's a great budget for a professional booking website! 💰",
      delay: 2200
    },
    {
      sender: 'agent',
      text: "Based on your requirements, I'll create a comprehensive project module with complete technical specifications.",
      delay: 3000
    },
    {
      sender: 'agent',
      text: "This includes detailed feature breakdown, tech stack recommendations, timeline, and cost analysis.",
      delay: 2600
    },
    {
      sender: 'agent',
      text: "The project module takes 24-48 hours to prepare. To get started, we require a $50 refundable token.",
      delay: 3200
    },
    {
      sender: 'agent',
      text: "This token is completely refundable and covers the initial consultation and project documentation.",
      delay: 2600
    },
    {
      sender: 'user',
      text: "That sounds fair. How do I pay the token?",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "Perfect! I'll send you an invoice right now. You can pay via PayPal, credit card, or bank transfer.",
      delay: 2600
    },
    {
      sender: 'agent',
      text: "📄 Invoice sent! Check your email for payment details.",
      delay: 1800,
      type: 'invoice'
    },
    {
      sender: 'user',
      text: "Got it! I'll make the payment now.",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "Great! Once payment is confirmed, our team will start working on your project module.",
      delay: 2600
    },
    {
      sender: 'agent',
      text: "You'll receive the complete documentation within 24-48 hours.",
      delay: 2200
    },
    {
      sender: 'agent',
      text: "📋 Project Module Delivered!",
      delay: 1800,
      type: 'document'
    },
    {
      sender: 'agent',
      text: "I've sent you a comprehensive 15-page project document with:",
      delay: 2600
    },
    {
      sender: 'agent',
      text: "• Detailed feature specifications\n• Recommended tech stack\n• Project timeline & milestones\n• Cost breakdown\n• Design mockups\n• Technical architecture",
      delay: 4000
    },
    {
      sender: 'agent',
      text: "The document is in your email. Please review it and let me know if you have any questions!",
      delay: 2600
    },
    {
      sender: 'user',
      text: "Thanks! I've reviewed the document. It looks comprehensive and professional.",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "Excellent! I'm glad you're satisfied with the project module.",
      delay: 2200
    },
    {
      sender: 'agent',
      text: "The next step is to schedule a call with our team lead to discuss the project in detail.",
      delay: 2600
    },
    {
      sender: 'agent',
      text: "What's your preferred time for the call? We're available weekdays 9 AM - 6 PM PST.",
      delay: 3000
    },
    {
      sender: 'user',
      text: "How about tomorrow at 2 PM PST?",
      delay: 1800
    },
    {
      sender: 'agent',
      text: "Perfect! I've scheduled your call with our team lead for tomorrow at 2 PM PST.",
      delay: 2600
    },
    {
      sender: 'agent',
      text: "📅 Calendar invite sent! You'll receive a Zoom link 15 minutes before the call.",
      delay: 2600
    },
    {
      sender: 'agent',
      text: "Thank you for experiencing our VR consultation! This is exactly how we work with real clients.",
      delay: 3200
    },
    {
      sender: 'agent',
      text: "Ready to start your real project? Let's get your fitness coaching business online! 💪",
      delay: 2600
    }
  ], []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (chatStarted && currentStep < conversationFlow.length) {
      const message = conversationFlow[currentStep];
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: Date.now(),
          text: message.text,
          sender: message.sender as 'user' | 'agent',
          timestamp: new Date(),
          type: (message.type as 'text' | 'typing' | 'system' | 'invoice' | 'document') || 'text'
        }]);
        setCurrentStep(prev => prev + 1);
      }, message.delay);
      // Cleanup: clear timeout if effect re-runs or component unmounts
      return () => clearTimeout(timeout);
    }
  }, [currentStep, chatStarted, conversationFlow]);

  const handleStartChat = () => {
    setShowInstructions(false);
    setChatStarted(true);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Instructions Modal */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Bot className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">VR Project Experience</h2>
                <p className="text-gray-300">Welcome to our interactive consultation simulation!</p>
              </div>
              
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p>This is a <strong>demonstration only</strong> - not a real chat</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p>Your actual consultation will be different from this demo</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p>Experience how we work with clients in real consultations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p>Watch the conversation flow naturally with realistic delays</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p>See our professional approach and attention to detail</p>
                </div>
              </div>
              
              <button
                onClick={handleStartChat}
                className="w-full mt-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Start Experience
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* End Chat Popup */}
      <AnimatePresence>
        {showEndChat && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Experience Complete! 🎉</h2>
                <p className="text-gray-300">You&apos;ve just experienced our professional consultation process. Ready to start your real project?</p>
              </div>
              
              <div className="space-y-3">
                <Link 
                  href="/pages/services"
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>🚀</span>
                  <span>Start Your Project</span>
                </Link>
                <Link 
                  href="/pages/consult"
                  className="w-full py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>💬</span>
                  <span>Get Free Consultation</span>
                </Link>
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowEndChat(false)}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Continue exploring
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Link href="/pages/portfolio" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Agent - Upvista Agent</span>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Video className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={`max-w-xs lg:max-w-md ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                {message.sender === 'agent' && (
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span className="text-xs text-gray-400">Agent</span>
                  </div>
                )}
                
                <div className={`rounded-2xl px-4 py-2 ${
                  message.sender === 'user' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-700 text-white'
                }`}>
                  {message.type === 'invoice' ? (
                    <InvoiceSVG />
                  ) : message.type === 'document' ? (
                    <DocumentSVG />
                  ) : (
                    <>
                      <div className="whitespace-pre-line">{message.text}</div>
                      <div className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-green-100' : 'text-gray-400'
                      }`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-xs lg:max-w-md">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <span className="text-xs text-gray-400">Agent</span>
                </div>
                <div className="bg-gray-700 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-700 p-4">
          {currentStep >= conversationFlow.length ? (
            <div className="flex justify-center">
              <button
                onClick={() => setShowEndChat(true)}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>🎉</span>
                <span>End Chat</span>
              </button>
            </div>
          ) : (
            <div className="flex items-end space-x-3">
              <div className="flex-1 bg-gray-700 rounded-2xl px-4 py-2">
                <textarea
                  placeholder="Type a message..."
                  className="w-full bg-transparent text-white placeholder-gray-400 resize-none outline-none"
                  rows={1}
                  disabled={true}
                />
              </div>
              <button
                disabled={true}
                className="p-3 bg-gray-600 text-gray-400 rounded-full cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-4 right-4 bg-gray-800 rounded-lg p-3 border border-gray-700">
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <Clock className="w-4 h-4" />
          <span>Step {currentStep + 1} of {conversationFlow.length}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / conversationFlow.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default VRPage; 