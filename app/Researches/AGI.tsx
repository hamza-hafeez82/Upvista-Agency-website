"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';
import { Brain, Lightbulb, Zap, Network, Eye, Moon, Sun, ArrowRight, Cpu, GitBranch, Shield, BarChart3, Code, Calendar, Users, Mail, Github, ExternalLink, ChevronDown } from 'lucide-react';
import GlowingCubesBackground from "@/components/ui/GlowingCubesBackground";
import Head from 'next/head';
import Image from 'next/image';
import { X } from "lucide-react";

export default function AGIResearchPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('intro');
  const [, setScrollY] = useState(0);
  const [] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['intro', 'problem', 'biology', 'architecture', 'advantages', 'implementation', 'vision', 'team'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const theme = {
    bg: darkMode ? 'from-slate-900 via-purple-900 to-slate-900' : 'from-blue-50 via-indigo-50 to-purple-50',
    cardBg: darkMode ? 'from-slate-800/60 via-purple-900/40 to-slate-800/60' : 'from-white/80 via-blue-50/60 to-white/80',
    glassBg: darkMode ? 'bg-slate-900/20 backdrop-blur-xl' : 'bg-white/40 backdrop-blur-xl',
    text: darkMode ? 'text-slate-100' : 'text-slate-800',
    accent: darkMode ? 'text-violet-300' : 'text-indigo-600',
    border: darkMode ? 'border-violet-400/20' : 'border-indigo-300/30',
    glow: darkMode ? 'shadow-[0_0_50px_rgba(139,92,246,0.3)]' : 'shadow-[0_0_50px_rgba(99,102,241,0.2)]'
  };

  const BrainNetworkDiagram = () => {
    const nodes = [
      { id: 'pfc', x: 400, y: 150, label: 'Prefrontal\nController', size: 60, color: '#fbbf24' },
      { id: 'reasoning', x: 200, y: 250, label: 'Reasoning', size: 45, color: '#ef4444' },
      { id: 'risk', x: 300, y: 320, label: 'Risk', size: 40, color: '#f97316' },
      { id: 'planning', x: 500, y: 320, label: 'Planning', size: 40, color: '#eab308' },
      { id: 'research', x: 600, y: 250, label: 'Research', size: 45, color: '#22c55e' },
      { id: 'execution', x: 650, y: 350, label: 'Execution', size: 40, color: '#3b82f6' },
      { id: 'memory', x: 400, y: 400, label: 'Memory', size: 50, color: '#a855f7' }
    ];

    const connections = [
      { from: 'pfc', to: 'reasoning' },
      { from: 'pfc', to: 'risk' },
      { from: 'pfc', to: 'planning' },
      { from: 'pfc', to: 'research' },
      { from: 'pfc', to: 'execution' },
      { from: 'pfc', to: 'memory' },
      { from: 'reasoning', to: 'risk' },
      { from: 'planning', to: 'execution' },
      { from: 'research', to: 'memory' },
      { from: 'risk', to: 'planning' }
    ];

    return (
      <div className="relative w-full max-w-4xl mx-auto h-96 mb-8">
        <svg viewBox="0 0 800 500" className="w-full h-full">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={darkMode ? "#8b5cf6" : "#6366f1"} stopOpacity="0.8"/>
              <stop offset="100%" stopColor={darkMode ? "#a855f7" : "#8b5cf6"} stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          
          {/* Neural connections */}
          <g stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.7">
            {connections.map((conn, idx) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;
              
              return (
                <line
                  key={idx}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  className="animate-pulse"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                />
              );
            })}
          </g>
          
          {/* Nodes */}
          {nodes.map((node, idx) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size / 2}
                fill={node.color}
                opacity="0.9"
                filter="url(#glow)"
                className="animate-pulse"
                style={{ animationDelay: `${idx * 0.3}s`, animationDuration: '3s' }}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size / 3}
                fill="white"
                opacity="0.3"
              />
              <text
                x={node.x}
                y={node.y + node.size + 20}
                textAnchor="middle"
                fill={darkMode ? "#e5e7eb" : "#374151"}
                fontSize="12"
                fontWeight="bold"
              >
                {node.label.split('\n').map((line, lineIdx) => (
                  <tspan key={lineIdx} x={node.x} dy={lineIdx === 0 ? 0 : 14}>{line}</tspan>
                ))}
              </text>
            </g>
          ))}
        </svg>
      </div>
    );
  };

  const ArchitectureFlowDiagram = () => (
    <div className="w-full max-w-6xl mx-auto mb-12">
      <svg viewBox="0 0 1200 800" className="w-full h-auto">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={darkMode ? "#312e81" : "#e0e7ff"} />
            <stop offset="100%" stopColor={darkMode ? "#1e1b4b" : "#c7d2fe"} />
          </linearGradient>
          <filter id="dropShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={darkMode ? "#000" : "#64748b"} floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Background Grid */}
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke={darkMode ? "#475569" : "#cbd5e1"} strokeWidth="1" opacity="0.2"/>
        </pattern>
        <rect width="1200" height="800" fill="url(#grid)" />
        
        {/* Main Flow Components */}
        <g filter="url(#dropShadow)">
          {/* Human Input */}
          <rect x="50" y="100" width="150" height="80" rx="20" fill="url(#flowGradient)" stroke={darkMode ? "#64748b" : "#94a3b8"} strokeWidth="2" />
          <text x="125" y="135" textAnchor="middle" fill={darkMode ? "#e2e8f0" : "#1e293b"} fontSize="14" fontWeight="bold">Human Input</text>
          <text x="125" y="155" textAnchor="middle" fill={darkMode ? "#94a3b8" : "#64748b"} fontSize="12">Goal Definition</text>
          
          {/* Orchestrator */}
          <rect x="300" y="50" width="200" height="120" rx="25" fill={darkMode ? "#7c3aed" : "#8b5cf6"} stroke={darkMode ? "#a855f7" : "#7c3aed"} strokeWidth="3" />
          <text x="400" y="95" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Cognitive Orchestrator</text>
          <text x="400" y="115" textAnchor="middle" fill="white" fontSize="14">(Prefrontal Controller)</text>
          <text x="400" y="135" textAnchor="middle" fill="white" fontSize="12">Task Decomposition</text>
          <text x="400" y="150" textAnchor="middle" fill="white" fontSize="12">Agent Coordination</text>
          
          {/* Agent Layer */}
          {[
            { x: 100, y: 300, name: "Reasoning", desc: "Logic & Strategy", color: "#dc2626" },
            { x: 250, y: 300, name: "Risk", desc: "Safety Analysis", color: "#ea580c" },
            { x: 400, y: 300, name: "Planning", desc: "Decision Trees", color: "#ca8a04" },
            { x: 550, y: 300, name: "Research", desc: "Data Retrieval", color: "#16a34a" },
            { x: 700, y: 300, name: "Execution", desc: "Action & Code", color: "#2563eb" },
          ].map((agent, idx) => (
            <g key={idx}>
              <rect x={agent.x} y={agent.y} width="120" height="100" rx="15" fill={agent.color} opacity="0.9" />
              <rect x={agent.x + 10} y={agent.y + 10} width="100" height="80" rx="10" fill="white" opacity="0.15" />
              <text x={agent.x + 60} y={agent.y + 40} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{agent.name}</text>
              <text x={agent.x + 60} y={agent.y + 55} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Agent</text>
              <text x={agent.x + 60} y={agent.y + 75} textAnchor="middle" fill="white" fontSize="11">{agent.desc}</text>
            </g>
          ))}
          
          {/* Memory Agent - Central */}
          <rect x="350" y="500" width="140" height="100" rx="20" fill="#9333ea" opacity="0.9" />
          <rect x="360" y="510" width="120" height="80" rx="15" fill="white" opacity="0.15" />
          <text x="420" y="540" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Memory Agent</text>
          <text x="420" y="560" textAnchor="middle" fill="white" fontSize="12">Episodic & Semantic</text>
          <text x="420" y="575" textAnchor="middle" fill="white" fontSize="12">Vector Storage</text>
          
          {/* Shared Workspace */}
          <rect x="850" y="250" width="250" height="150" rx="20" fill={darkMode ? "#1e293b" : "#f1f5f9"} stroke={darkMode ? "#475569" : "#64748b"} strokeWidth="2" strokeDasharray="8,4" />
          <text x="975" y="285" textAnchor="middle" fill={darkMode ? "#e2e8f0" : "#334155"} fontSize="16" fontWeight="bold">Shared Workspace</text>
          <text x="975" y="305" textAnchor="middle" fill={darkMode ? "#94a3b8" : "#64748b"} fontSize="13">(Blackboard System)</text>
          <text x="975" y="330" textAnchor="middle" fill={darkMode ? "#94a3b8" : "#64748b"} fontSize="12">• JSON Communication</text>
          <text x="975" y="350" textAnchor="middle" fill={darkMode ? "#94a3b8" : "#64748b"} fontSize="12">• Embedding Exchange</text>
          <text x="975" y="370" textAnchor="middle" fill={darkMode ? "#94a3b8" : "#64748b"} fontSize="12">• State Persistence</text>
        </g>
        
        {/* Flow Arrows */}
        <g stroke={darkMode ? "#64748b" : "#475569"} strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.8">
          <path d="M200 140 L300 110" className="animate-pulse" />
          <path d="M400 170 L160 300" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <path d="M400 170 L310 300" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <path d="M400 170 L460 300" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <path d="M400 170 L610 300" className="animate-pulse" style={{ animationDelay: '2s' }} />
          <path d="M400 170 L760 300" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
          <path d="M420 170 L420 500" className="animate-pulse" style={{ animationDelay: '3s' }} />
          
          {/* To workspace connections */}
          <path d="M220 350 Q600 400 850 320" strokeDasharray="6,6" className="animate-pulse" style={{ animationDelay: '3.5s' }} />
          <path d="M370 350 Q650 450 850 340" strokeDasharray="6,6" className="animate-pulse" style={{ animationDelay: '4s' }} />
          <path d="M520 350 Q700 420 850 360" strokeDasharray="6,6" className="animate-pulse" style={{ animationDelay: '4.5s' }} />
        </g>
        
        <defs>
          <marker id="arrowhead" markerWidth="12" markerHeight="8" refX="11" refY="4" orient="auto">
            <polygon points="0 0, 12 4, 0 8" fill={darkMode ? "#64748b" : "#475569"} />
          </marker>
        </defs>
      </svg>
    </div>
  );

  const DataFlowDiagram = () => (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <svg viewBox="0 0 1000 400" className="w-full h-auto">
        <defs>
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={darkMode ? "#8b5cf6" : "#6366f1"} />
            <stop offset="50%" stopColor={darkMode ? "#a855f7" : "#8b5cf6"} />
            <stop offset="100%" stopColor={darkMode ? "#c084fc" : "#a78bfa"} />
          </linearGradient>
        </defs>
        
        {/* Data Flow Layers */}
        <rect x="50" y="50" width="900" height="60" rx="30" fill="url(#dataFlow)" opacity="0.3" />
        <text x="500" y="85" textAnchor="middle" fill={darkMode ? "#e5e7eb" : "#374151"} fontSize="14" fontWeight="bold">Input Processing Layer</text>
        
        <rect x="50" y="150" width="900" height="60" rx="30" fill="url(#dataFlow)" opacity="0.5" />
        <text x="500" y="185" textAnchor="middle" fill={darkMode ? "#e5e7eb" : "#374151"} fontSize="14" fontWeight="bold">Agent Coordination Layer</text>
        
        <rect x="50" y="250" width="900" height="60" rx="30" fill="url(#dataFlow)" opacity="0.7" />
        <text x="500" y="285" textAnchor="middle" fill={darkMode ? "#e5e7eb" : "#374151"} fontSize="14" fontWeight="bold">Decision Integration Layer</text>
        
        <rect x="50" y="320" width="900" height="60" rx="30" fill="url(#dataFlow)" opacity="0.9" />
        <text x="500" y="355" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Output Generation Layer</text>
        
        {/* Flow indicators */}
        {[0, 1, 2, 3].map(i => (
          <circle
            key={i}
            cx={100 + i * 200}
            cy={80 + i * 100}
            r="8"
            fill={darkMode ? "#fbbf24" : "#f59e0b"}
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );

  const BrainRegionTable = () => (
    <div className={`overflow-hidden rounded-3xl border ${theme.border} ${theme.glow} mb-12`}>
      <div className={`${theme.glassBg} p-8 border-b ${theme.border}`}>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Biological Intelligence Mapping</h3>
        <p className="text-violet-100/90 text-lg">How nature&apos;s cognitive architecture inspires artificial general intelligence</p>
      </div>
      <div className={`${theme.glassBg}`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${theme.border} bg-gradient-to-r ${darkMode ? 'from-violet-600/20 to-purple-600/20' : 'from-indigo-100 to-purple-100'}`}>
                <th className={`p-6 text-left font-bold ${theme.accent} text-lg`}>Brain Region</th>
                <th className={`p-6 text-left font-bold ${theme.accent} text-lg`}>Biological Function</th>
                <th className={`p-6 text-left font-bold ${theme.accent} text-lg`}>AGI Implementation</th>
                <th className={`p-6 text-left font-bold ${theme.accent} text-lg`}>Technology Stack</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Cerebrum", "Higher-order thinking, abstract reasoning, language processing", "Large Language Models (GPT/Claude)", "Transformer Networks, Attention Mechanisms"],
                ["Cerebellum", "Motor control, skill learning, procedural memory", "Code Generation & Task Execution", "Code LLMs, API Integration, RPA"],
                ["Hippocampus", "Memory formation, spatial navigation, learning", "Vector Databases & Episodic Memory", "ChromaDB, Pinecone, FAISS"],
                ["Thalamus", "Sensory relay, attention gating, consciousness", "Central Message Dispatcher", "Event-Driven Architecture, Message Queues"],
                ["Hypothalamus", "Homeostasis, resource regulation, survival", "Resource & Load Management", "Auto-scaling, Health Monitoring"],
                ["Amygdala", "Threat detection, emotional processing, risk assessment", "Risk Evaluation & Safety Systems", "Bayesian Networks, Monte Carlo"],
                ["Prefrontal Cortex", "Executive control, planning, decision-making", "Cognitive Orchestrator", "Multi-Agent Coordination, Goal Planning"]
              ].map(([region, func, equiv, tech], idx) => (
                <tr key={idx} className={`border-b ${theme.border} hover:bg-gradient-to-r ${darkMode ? 'hover:from-violet-500/10 hover:to-purple-500/10' : 'hover:from-indigo-50 hover:to-purple-50'} transition-all duration-300`}>
                  <td className={`p-6 font-bold ${theme.text} text-base`}>{region}</td>
                  <td className={`p-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'} text-sm leading-relaxed`}>{func}</td>
                  <td className={`p-6 ${theme.accent} font-semibold text-sm`}>{equiv}</td>
                  <td className={`p-6 ${darkMode ? 'text-violet-200/80' : 'text-slate-600'} text-sm`}>{tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const PhaseTimeline = () => (
    <div className="relative w-full max-w-5xl mx-auto mb-12">
      <div className={`absolute left-8 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b ${darkMode ? 'from-violet-600 via-purple-600 to-pink-600' : 'from-indigo-500 via-purple-600 to-pink-500'} rounded-full ${theme.glow}`}></div>
      
      <div className="space-y-12">
        {[
          { 
            phase: "Phase I", 
            title: "Cortex MVP Prototype", 
            desc: "Foundation layer with basic agent coordination using existing frameworks and models.",
            details: "Building the core orchestration engine with Python and LangChain, integrating open surce/cheap AI models as the primary reasoning agent, implementing Monte Carlo risk assessment, and creating a simple vector-based memory system.",
            tech: ["Python", "LangChain", "OpenAI", "DeepSeek", "Grok", "ChromaDB", "Streamlit", "Supervised Fine Tuning", "Retrival Augmented Generation", "MCP"],
            timeline: "Q2 2025-26",
            status: "current"
          },
          { 
            phase: "Phase II", 
            title: "Modular Intelligence Expansion", 
            desc: "Advanced agent specialization with symbolic reasoning and enhanced communication protocols.",
            details: "Developing symbolic logic planning systems, integrating web-based research capabilities, implementing robust JSON-based inter-agent communication, and creating the blackboard architecture for shared cognitive workspace.",
            tech: ["Symbolic AI", "Web APIs", "JSON Schema", "Message Queues", "Event System"],
            timeline: "Q4 2026",
            status: "planned"
          },
          { 
            phase: "Phase III", 
            title: "Cognitive Sophistication", 
            desc: "Self-reflection, meta-learning, and homeostatic resource management for optimized performance.",
            details: "Implementing dynamic load balancing, enabling agent self-reflection and improvement, experimenting with fine-tuned open-source models, and developing sophisticated failure recovery mechanisms.",
            tech: ["Load Balancing", "Meta-Learning", "Fine-tuning", "Llama", "Self-Reflection"],
            timeline: "Q2 2026-27",
            status: "research"
          },
          { 
            phase: "Phase IV", 
            title: "Autonomous General Intelligence", 
            desc: "Multimodal reasoning, autonomous goal formation, and true general-purpose cognitive capabilities.",
            details: "Creating a fully autonomous prefrontal controller, expanding to multimodal inputs (vision, audio, sensors), enabling independent goal setting and long-term planning, and achieving human-level cognitive flexibility.",
            tech: ["Multimodal AI", "Computer Vision", "Goal Formation", "AGI Architecture", "Consciousness Modeling"],
            timeline: "2027+",
            status: "vision"
          }
        ].map((item, idx) => (
          <div key={idx} className="relative flex items-start space-x-8 group">
            <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${
              item.status === 'current' ? 'from-green-500 to-emerald-600' :
              item.status === 'planned' ? 'from-yellow-500 to-orange-600' :
              item.status === 'research' ? `from-violet-600 to-purple-700` :
              'from-pink-500 to-rose-600'
            } flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 ${theme.glow}`}>
              <span className="text-white font-bold text-lg">{idx + 1}</span>
            </div>
            
            <div className={`flex-1 p-8 rounded-3xl bg-gradient-to-br ${theme.cardBg} backdrop-blur-xl border ${theme.border} shadow-2xl group-hover:shadow-3xl transform group-hover:-translate-y-2 transition-all duration-500`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <h4 className={`text-xl md:text-2xl font-bold ${theme.accent}`}>{item.phase}</h4>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      item.status === 'current' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                      item.status === 'planned' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30' :
                      item.status === 'research' ? `${darkMode ? 'bg-violet-500/20 text-violet-400 border border-violet-400/30' : 'bg-indigo-500/20 text-indigo-600 border border-indigo-400/30'}` :
                      'bg-pink-500/20 text-pink-400 border border-pink-400/30'
                    }`}>{item.timeline}</span>
                  </div>
                  <h5 className={`text-lg md:text-xl font-bold ${theme.text} mb-3`}>{item.title}</h5>
                  <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed mb-4`}>{item.desc}</p>
                  <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} text-sm leading-relaxed`}>{item.details}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, techIdx) => (
                  <span key={techIdx} className={`px-3 py-1 rounded-xl text-xs font-semibold ${darkMode ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30' : 'bg-indigo-100 text-indigo-700 border border-indigo-300'} backdrop-blur-sm`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AdvantagesGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
      {[
        { 
          title: "Modular Architecture", 
          desc: "Mimicing Humans prefrontal cortax into distributed intelligence with specialized cognitive modules that can be independently developed, tested, and optimized.",
          icon: <Brain className="w-10 h-10" />, 
          gradient: "from-pink-500 via-rose-500 to-orange-500",
          stats: "6 Specialized Agents"
        },
        { 
          title: "Unified Coordination", 
          desc: "Seamless inter-agent communication through shared workspace protocols, eliminating the fragmentation of current AI systems. Just like a Team of trained and self learning agents, working together under the command, supervision and control of their Boss, the Cortex.",
          icon: <Network className="w-10 h-10" />, 
          gradient: "from-blue-500 via-cyan-500 to-teal-500",
          stats: "Real-time Sync"
        },
        { 
          title: "Adaptive Risk Management", 
          desc: "It would understand and think through every possibility, will detect risk and will calculate probabilities. With integrated probabilistic risk assessment ensuring safety-first decision making across all cognitive operations.",
          icon: <Shield className="w-10 h-10" />, 
          gradient: "from-emerald-500 via-green-500 to-lime-500",
          stats: "Bayesian Networks"
        },
        { 
          title: "Dynamic Scalability", 
          desc: "Plug-and-play architecture allowing new cognitive capabilities to be added seamlessly as brain-like regions.",
          icon: <Zap className="w-10 h-10" />, 
          gradient: "from-yellow-500 via-amber-500 to-orange-500",
          stats: "Infinite Expandability"
        },
        { 
          title: "Resource Optimization", 
          desc: "Homeostatic load management that activates only necessary modules, dramatically reducing computational overhead.",
          icon: <Cpu className="w-10 h-10" />, 
          gradient: "from-green-500 via-emerald-500 to-cyan-500",
          stats: "70% Energy Savings"
        },
        { 
          title: "Emergent Intelligence", 
          desc: "Collective cognitive capabilities that emerge from agent interactions, creating intelligence greater than individual components.",
          icon: <Eye className="w-10 h-10" />, 
          gradient: "from-purple-500 via-violet-500 to-indigo-500",
          stats: "Synergistic Effects"
        }
      ].map((advantage, idx) => (
        <div key={idx} className={`group relative p-8 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
          
          <div className="relative z-10">
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
              <div className="text-white">{advantage.icon}</div>
            </div>
            
            <div className="mb-4">
              <h4 className={`text-xl font-bold ${theme.text} mb-2 group-hover:${theme.accent} transition-colors duration-300`}>{advantage.title}</h4>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${darkMode ? 'bg-violet-500/20 text-violet-300' : 'bg-indigo-100 text-indigo-700'} border ${theme.border}`}>
                {advantage.stats}
              </div>
            </div>
            
            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{advantage.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const sections = [
    { id: 'intro', title: 'Introduction', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'problem', title: 'The Problem', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'biology', title: 'Bio Inspiration', icon: <Brain className="w-5 h-5" /> },
    { id: 'architecture', title: 'Architecture', icon: <Network className="w-5 h-5" /> },
    { id: 'advantages', title: 'Advantages', icon: <Zap className="w-5 h-5" /> },
    { id: 'implementation', title: 'Roadmap', icon: <Code className="w-5 h-5" /> },
    { id: 'vision', title: 'Vision', icon: <Eye className="w-5 h-5" /> },
    { id: 'team', title: 'Join Us', icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <>
      <Head>
        <title>Project Cortex: An AGI Research Mimiking Human Brain&apos;s Prefrontal Cortex | Upvista Digital</title>
        <meta name="description" content="Revolutionary brain-inspired AGI architecture by Hamza Hafeez at Upvista Digital. Discover Project Cortex - a distributed cognitive system uniting specialized AI agents through orchestrated coordination toward true artificial general intelligence." />
        <meta name="keywords" content="Project Cortex, AGI, Artificial General Intelligence, Brain-Inspired AI, Hamza Hafeez, Upvista Digital, Cognitive Architecture, Multi-Agent Systems, AI Research, Neural Networks, Machine Learning, Deep Learning, AI Orchestration, Pakistan AI, Lahore Tech, AI Innovation" />
        <meta name="author" content="Hamza Hafeez, Upvista Digital" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Project Cortex: Our AGI Architecture Research and Development" />
        <meta property="og:description" content="Discover Project Cortex by Hamza Hafeez. A groundbreaking approach to AGI through distributed cognitive architectures. Join our research team building the future of artificial general intelligence." />
        <meta property="og:url" content="https://upvistadigital.com/researches/agi" />
        <meta property="og:site_name" content="Upvista Digital" />
        <meta property="og:image" content="https://upvistadigital.com/public/assets/u.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Hamza Hafeez" />
        <meta property="article:publisher" content="Upvista Digital" />
        <meta property="article:section" content="AI Research" />
        <meta property="article:tag" content="AGI, Artificial Intelligence, Cortex-Inspired AI, Cognitive Architecture" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@UpvistaDigital" />
        <meta name="twitter:creator" content="@HamzaHafeez" />
        <meta name="twitter:title" content="Project Cortex:An AGI Research Project Led by Hamza Hafeez at Upvista Digital" />
        <meta name="twitter:description" content="AGI will not emerge from a single model growing infinitely large. It will emerge from integration... the orchestration of specialized intelligences into a synthetic cognitive system. Project Cortex provides that integration: A modular, brain-inspired, orchestrated cognitive system capable of uniting fragmented AI models into a coordinated intelligence greater than the sum of its parts. Help us Build it!" />
        <meta name="twitter:image" content="https://upvistadigital.com/assets/project-cortex-twitter.png" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <link rel="canonical" href="https://upvistadigital.com/researches/agi" />
        
        {/* Structured Data - Research Project */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@type": "ResearchProject",
          "name": "Project Cortex: Brain-Inspired AGI System",
          "description": "A revolutionary approach to Artificial General Intelligence through distributed cognitive architectures and emergent intelligence coordination",
          "url": "https://upvistadigital.com/researches/agi",
          "author": {
            "@type": "Person",
            "name": "Hamza Hafeez",
            "jobTitle": "CEO",
            "worksFor": {
              "@type": "Organization",
              "name": "Upvista Digital",
              "url": "https://upvistadigital.com"
            }
          },
          "publisher": {
            "@type": "Organization",
            "name": "Upvista Digital",
            "url": "https://upvistadigital.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://upvistadigital.com/public/assets/u.png"
            }
          },
          "keywords": ["AGI", "Artificial General Intelligence", "Brain-Inspired AI", "Cognitive Architecture", "Multi-Agent Systems"],
          "datePublished": "2025-08-31",
          "dateModified": "2025-08-31",
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Upvista Digital Research",
            "url": "https://upvistadigital.com"
          }
        }) }} />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@type": "Organization",
          "name": "Upvista Digital",
          "url": "https://upvistadigital.com",
          "description": "Leading AI research and development company specializing in artificial general intelligence and cognitive architectures",
          "founder": {
            "@type": "Person",
            "name": "Hamza Hafeez"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lahore",
            "addressRegion": "Punjab",
            "addressCountry": "Pakistan"
          },
          "sameAs": [
            "https://www.linkedin.com/in/hamza-hafeez-b0233731a",
            "https://www.instagram.com/upvista_digital?igsh=aTJ1dDFqMXdlMTBk",
            "https://www.facebook.com/share/1AAjzK33pz/",
            "https://x.com/Upvista_Digital/",
            "https://github.com/upvista"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "info@upvistadigital.com",
            "contactType": "inquiry"
          }
        }) }} />
      </Head>

      {/* Background with proper layering */}
      <div className="fixed inset-0 z-0">
        <GlowingCubesBackground />
      </div>

      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Main Content */}
      <main className={`relative z-10 min-h-screen bg-gradient-to-br ${theme.bg} transition-all duration-500`}>
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${darkMode ? 'bg-violet-400' : 'bg-indigo-400'} rounded-full opacity-20`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Page Header - Non-sticky, properly spaced (default header removed) */}
        <div className={`sticky top-0 w-full ${theme.glassBg} backdrop-blur-xl border-b ${theme.border} transition-all duration-300 z-50`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">

    {/* Left: Logo & Project Info */}
    <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto justify-center sm:justify-start">
      <Brain className={`w-8 h-8 ${theme.accent}`} />
      <div className="text-center sm:text-left">
        <h1 className={`text-lg sm:text-xl md:text-2xl font-bold ${theme.text}`}>Project Cortex</h1>
        <p className={`text-xs sm:text-sm ${darkMode ? 'text-violet-300' : 'text-indigo-600'}`}>AGI Research Initiative</p>
      </div>
      <span className={`hidden sm:block px-2 py-0.5 rounded-full text-xs font-bold ${darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'} border border-red-400/30`}>
        In Development
      </span>
    </div>

    {/* Right: Actions */}
    <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center sm:justify-end">

      {/* Exit Screen */}
      <button
        onClick={() => window.history.back()}
        aria-label="Exit screen"
        className={`p-2 rounded-lg ${theme.glassBg} border ${theme.border} transition-all duration-300 hover:scale-105`}
      >
        <X className={`w-5 h-5 ${theme.accent}`} />
      </button>

      {/* Navigate Dropdown */}
      <div className="relative group w-full sm:w-auto">
        <button className={`flex items-center justify-center sm:justify-between space-x-2 px-4 py-2 w-full sm:w-auto rounded-xl ${theme.glassBg} border ${theme.border} transition-all duration-300 hover:scale-105`}>
          <span className={`font-medium ${theme.text} text-sm md:text-base`}>Navigate</span>
          <ChevronDown className={`w-4 h-4 ${theme.accent} group-hover:rotate-180 transition-transform duration-300`} />
        </button>

        <div
          className={`absolute right-0 top-full mt-2 w-full sm:w-64 ${theme.glassBg} backdrop-blur-2xl ${darkMode ? "bg-slate-900/70" : "bg-white/70"} border ${theme.border} rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50`}
        >
          <div className="p-4">
            <p className={`text-xs font-bold ${theme.accent} uppercase tracking-wider mb-3`}>Page Sections</p>
            <div className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(section.id);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl transition-all duration-200 text-left ${
                    activeSection === section.id
                      ? `bg-gradient-to-r ${
                          darkMode ? "from-violet-600 to-purple-700" : "from-indigo-600 to-purple-700"
                        } text-white`
                      : `${theme.text} hover:bg-white/10`
                  }`}
                >
                  <div className={activeSection === section.id ? "text-white" : theme.accent}>{section.icon}</div>
                  <span className="font-medium text-sm">{section.title}</span>
                  <ArrowRight
                    className={`w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transform translate-x-2 group-hover/item:translate-x-0 transition-all duration-200 ${
                      activeSection === section.id ? "text-white" : theme.accent
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`p-2 rounded-lg ${theme.glassBg} border ${theme.border} transition-all duration-300 hover:scale-105`}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
      </button>
    </div>
  </div>
</div>


        {/* Hero Section */}
        <section className="relative pt-8 pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="relative mb-8">
              <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[15vw] md:text-[10vw] font-extrabold ${darkMode ? 'text-violet-200/5' : 'text-indigo-200/10'} tracking-tight whitespace-nowrap z-0 leading-none`} style={{letterSpacing: '-0.04em'}}>
                CORTEX
              </span>
              <h1 className={`relative z-10 text-4xl sm:text-6xl md:text-7xl font-extrabold ${theme.text} mb-6 leading-tight animate-fade-in-up drop-shadow-glow`}>
                Project Cortex
              </h1>
            </div>
            
            <p className={`text-xl md:text-3xl ${darkMode ? 'text-violet-100/90' : 'text-slate-700'} mb-4 max-w-5xl mx-auto animate-fade-in-up delay-100 leading-relaxed font-light`}>
              Human Brain&apos;s prefrontal cortex-Inspired Orchestrated AGI System
            </p>
            
            <p className={`text-lg md:text-xl ${darkMode ? 'text-violet-200/70' : 'text-slate-600'} max-w-4xl mx-auto animate-fade-in-up delay-200 leading-relaxed mb-8`}>
              Revolutionary approach to Artificial General Intelligence through distributed cognitive architectures and emergent intelligence coordination
            </p>
            
            <div className={`inline-flex items-center space-x-4 px-6 py-3 rounded-2xl ${theme.glassBg} border ${theme.border} shadow-lg animate-fade-in-up delay-300 mb-8`}>
              <div className="flex items-center space-x-2">
                {/* Profile Image */}
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/assets/hamza-pic.jpg" 
                    alt="Hamza Hafeez"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />

                {/* Text Info */}
                <div className="text-left">
                  <p className={`font-bold ${theme.text} text-sm`}>Led by Hamza Hafeez</p>
                  <p className={`${darkMode ? 'text-violet-300' : 'text-indigo-600'} text-xs`}>CEO, Upvista Digital</p>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <button 
                onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-4 bg-gradient-to-r ${darkMode ? 'from-violet-600 to-purple-700' : 'from-indigo-600 to-purple-700'} text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 glow-btn`}
              >
                Explore Architecture
              </button>
              <button 
                onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-4 ${theme.glassBg} ${theme.text} font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${theme.border} backdrop-blur-xl`}
              >
                Join Research Team
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Abstract */}
          <section id="intro" className="mb-20">
            <div className={`p-8 md:p-12 rounded-3xl ${theme.glassBg} border ${theme.border} ${theme.glow} relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-violet-600/10 to-purple-600/5' : 'from-indigo-100/50 to-purple-100/30'}`}></div>
              
              <div className="relative z-10">
                <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-8 flex items-center flex-wrap`}>
                  <Lightbulb className="w-8 h-8 mr-4 flex-shrink-0" />
                  <span>Research Abstract</span>
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className={`text-xl font-bold ${theme.text} mb-4`}>The Challenge</h3>
                    <p className={`text-base md:text-lg ${theme.text} leading-relaxed mb-6`}>
                      Artificial General Intelligence represents the ambition to create machines capable of human-like intelligence: 
                      <br></br><br></br>  1. Take an objective or a Goal.
                      <br></br>  2. Understands and thinks through every possibility.
                      <br></br>  3. Do research and synthesize a large amount of data.
                      <br></br>  4. detect risks and calculate probabilities.
                      <br></br>  5. Simulate alternative options and chooses the best one.
                      <br></br>  6. Make a plan with solid decision making.
                      <br></br>  7. Assign the detailed tasks to it&apos;s specific agent.
                      <br></br>  8. Record process, Guide&apos;s the agent, review it&apos;s work and create a funnel that the agents can communicate with each other.
                      <br></br>  9. Self-optimize and improves by the process.
                      <br></br><br></br>Current AI systems, despite their impressive capabilities, operate in isolation without the unifying coordination required for true general intelligence.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`text-xl font-bold ${theme.text} mb-4`}>Our Solution</h3>
                    <p className={`text-base md:text-lg ${theme.text} leading-relaxed`}>
                      <strong>Project Cortex</strong> introduces an architectural framework that mimics human cortex, conceptualizes intelligence as a team of specialized agents governed by a central orchestrator (the BOSS):
                      <br></br>It would:
                      <br></br><br></br>1. Intercepts the problem.
                      <br></br>2. Break it into subtasks.
                      <br></br>3. Assign subtasks to specialized models.
                      <br></br>4. Monitor results.
                      <br></br>5. Choose between and adapt a plan.
                      <br></br>6. shut-down idle models.
                      <br></br>7. Maintain shared memory.
                      <br></br><br></br>This approach transforms existing narrow AI models into a coordinated cognitive system, mimicking the modular but unified nature of human cognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section id="problem" className="mb-20">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-8 flex items-center flex-wrap`}>
              <BarChart3 className="w-8 h-8 mr-4 flex-shrink-0" />
              <span>The Fragmentation Crisis</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className={`p-8 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5`}></div>
                <div className="relative z-10">
                  <h3 className={`text-xl md:text-2xl font-bold ${theme.text} mb-6 flex items-center`}>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                    Current AI Capabilities
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Large Language Models for natural language understanding and generation",
                      "Symbolic AI systems for logical reasoning and risk assessment",
                      "Decision Transformers for reinforcement learning and action planning",
                      "Vector databases for semantic memory and information retrieval",
                      "Autonomous frameworks for task execution and workflow management"
                    ].map((capability, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-green-500/5 transition-colors duration-200">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                        <span className={`text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={`p-8 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/5`}></div>
                <div className="relative z-10">
                  <h3 className={`text-xl md:text-2xl font-bold ${theme.text} mb-6 flex items-center`}>
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                    Critical Limitations
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Incompatible communication protocols between different AI systems",
                      "Lack of unified decision-making and conflict resolution mechanisms",
                      "Inability to share context and learning across cognitive domains",
                      "No persistent memory integration or experience accumulation",
                      "Absence of meta-cognitive awareness and self-improvement capabilities"
                    ].map((limitation, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-red-500/5 transition-colors duration-200">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <span className={`text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{limitation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-8 md:p-12 rounded-3xl bg-gradient-to-r ${darkMode ? 'from-red-900/40 via-orange-900/30 to-yellow-900/40' : 'from-red-50 via-orange-50 to-yellow-50'} border ${darkMode ? 'border-red-400/30' : 'border-red-300/50'} shadow-2xl ${theme.glassBg} backdrop-blur-xl`}>
              <div className="text-center">
                <h3 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-red-300' : 'text-red-700'} mb-6`}>The Intelligence Paradox</h3>
                <p className={`text-lg md:text-xl ${darkMode ? 'text-red-200/90' : 'text-red-800'} leading-relaxed max-w-4xl mx-auto`}>
                  We possess all the individual components necessary for AGI, yet they remain isolated islands of intelligence. 
                  <span className="font-bold"> The tools for AGI exist, but without orchestration, they are merely fragments waiting to be unified.</span>
                </p>
              </div>
            </div>
          </section>

          {/* Biological Inspiration */}
          <section id="biology" className="mb-20">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-8 flex items-center flex-wrap`}>
              <Brain className="w-8 h-8 mr-4 flex-shrink-0" />
              <span>Biological Cognitive Architecture</span>
            </h2>
            
            <div className={`p-8 md:p-12 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl mb-12 relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-violet-600/5 to-purple-600/10' : 'from-indigo-100/30 to-purple-100/50'}`}></div>
              
              <div className="relative z-10">
                <p className={`text-lg md:text-xl ${theme.text} leading-relaxed mb-8 text-center max-w-4xl mx-auto`}>
                  The human brain achieves extraordinary general intelligence through <span className={`font-bold ${theme.accent}`}>specialized regions working in perfect harmony</span>. 
                  Each area contributes unique cognitive capabilities while being orchestrated by executive centers, primarily the Prefrontal Cortex.
                </p>
                
                <BrainNetworkDiagram />
                
                <div className="text-center">
                  <p className={`text-base md:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed max-w-3xl mx-auto`}>
                    This distributed yet unified architecture serves as the blueprint for Project Cortex, 
                    where artificial agents mirror biological cognitive specialization.
                  </p>
                </div>
              </div>
            </div>
            
            <BrainRegionTable />
          </section>

          {/* Architecture */}
          <section id="architecture" className="mb-20">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-8 flex items-center flex-wrap`}>
              <Network className="w-8 h-8 mr-4 flex-shrink-0" />
              <span>Cortex Architecture</span>
            </h2>
            
            <div className={`p-8 md:p-12 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl mb-12`}>
              <h3 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-8 text-center`}>System Architecture Overview</h3>
              <ArchitectureFlowDiagram />
            </div>
            
            <div className={`p-8 md:p-12 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl mb-12`}>
              <h3 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-8 text-center`}>Data Flow Architecture</h3>
              <DataFlowDiagram />
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Agent Specialization",
                  content: [
                    "Reasoning Agent: Advanced logical inference and strategic thinking",
                    "Risk Agent: Probabilistic modeling with uncertainty quantification",
                    "Planning Agent: Hierarchical task decomposition and scheduling",
                    "Research Agent: Dynamic knowledge acquisition and fact verification",
                    "Execution Agent: Code generation, testing, and deployment automation",
                    "Memory Agent: Episodic and semantic memory with contextual retrieval"
                  ],
                  icon: <Network className="w-8 h-8" />,
                  gradient: "from-blue-500 to-cyan-600"
                },
                {
                  title: "Communication Protocol",
                  content: [
                    "JSON-schema based structured data exchange between agents",
                    "Vector embedding communication for semantic understanding",
                    "Blackboard architecture for persistent shared cognitive state",
                    "Event-driven messaging system for real-time coordination",
                    "Conflict resolution algorithms for competing agent outputs",
                    "Version control system for collaborative decision histories"
                  ],
                  icon: <GitBranch className="w-8 h-8" />,
                  gradient: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Orchestration Intelligence",
                  content: [
                    "Dynamic task complexity analysis and decomposition strategies",
                    "Intelligent agent selection based on capability-requirement matching",
                    "Adaptive load balancing across distributed computational resources",
                    "Real-time performance monitoring with automatic optimization",
                    "Failure detection, diagnosis, and recovery mechanisms",
                    "Meta-learning for continuous coordination improvement"
                  ],
                  icon: <Cpu className="w-8 h-8" />,
                  gradient: "from-purple-500 to-pink-600"
                }
              ].map((section, idx) => (
                <div key={idx} className={`p-8 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${section.gradient} shadow-lg`}>
                        <div className="text-white">{section.icon}</div>
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold ${theme.text}`}>{section.title}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {section.content.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${section.gradient} mt-2 flex-shrink-0`}></div>
                          <span className={`text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages */}
          <section id="advantages" className="mb-20">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-8 flex items-center flex-wrap`}>
              <Zap className="w-8 h-8 mr-4 flex-shrink-0" />
              <span>Cortex Advantages</span>
            </h2>
            <AdvantagesGrid />
          </section>

          {/* Implementation Timeline */}
          <section id="implementation" className="mb-20">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-8 flex items-center flex-wrap`}>
              <Code className="w-8 h-8 mr-4 flex-shrink-0" />
              <span>Development Roadmap</span>
            </h2>
            <PhaseTimeline />
          </section>

          {/* Evolution Timeline */}
          <section className="mb-20">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-8 flex items-center flex-wrap`}>
              <Calendar className="w-8 h-8 mr-4 flex-shrink-0" />
              <span>AI Evolution Trajectory</span>
            </h2>
            
            <div className="relative">
              <div className={`absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b ${darkMode ? 'from-violet-600 to-purple-600' : 'from-indigo-500 to-purple-600'} rounded-full`}></div>
              
              {[
                { era: "Era I", title: "Narrow AI", desc: "Specialized systems excelling in single domains with limited adaptability", year: "1990s-2010s", examples: "Expert systems, chess engines, image classifiers", status: "complete" },
                { era: "Era II", title: "Foundation Models", desc: "Large-scale pre-trained models with broad but siloed capabilities", year: "2020-2023", examples: "GPT, BERT, DALL-E, foundation transformers", status: "complete" },
                { era: "Era III", title: "Autonomous Agents", desc: "Self-directed systems capable of task chaining and basic reasoning", year: "2023-2024", examples: "Auto-GPT, BabyAGI, OpenDevin, agent frameworks", status: "current" },
                { era: "Era IV", title: "Project Cortex", desc: "Brain-inspired orchestrated intelligence with specialized agent coordination", year: "2025-2027", examples: "Cortex Mini, modular expansion, cognitive refinement", status: "development" },
                { era: "Era V", title: "Artificial General Intelligence", desc: "Human-level cognitive capabilities across all intellectual domains", year: "2027+", examples: "Autonomous goal formation, multimodal reasoning, consciousness", status: "vision" }
              ].map((phase, idx) => (
                <div key={idx} className="relative flex items-start space-x-6 md:space-x-8 mb-12 group">
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${
                    phase.status === 'complete' ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                    phase.status === 'current' ? 'bg-gradient-to-br from-yellow-500 to-orange-600' :
                    phase.status === 'development' ? `bg-gradient-to-br ${darkMode ? 'from-violet-600 to-purple-700' : 'from-indigo-500 to-purple-600'}` :
                    'bg-gradient-to-br from-pink-500 to-rose-600'
                  } shadow-lg transform group-hover:scale-110 transition-all duration-300 ${theme.glow}`}>
                    <span className="text-white font-bold text-lg">{idx + 1}</span>
                  </div>
                  
                  <div className={`flex-1 p-6 md:p-8 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl group-hover:shadow-3xl transform group-hover:-translate-y-1 transition-all duration-500 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      phase.status === 'complete' ? 'from-green-500/5 to-emerald-500/10' :
                      phase.status === 'current' ? 'from-yellow-500/5 to-orange-500/10' :
                      phase.status === 'development' ? `${darkMode ? 'from-violet-500/5 to-purple-500/10' : 'from-indigo-500/5 to-purple-500/10'}` :
                      'from-pink-500/5 to-rose-500/10'
                    }`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className={`text-lg md:text-xl font-bold ${theme.accent}`}>{phase.era}</h4>
                            <span className={`px-3 py-1 rounded-full text-xs md:text-sm font-bold ${
                              phase.status === 'complete' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                              phase.status === 'current' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30' :
                              phase.status === 'development' ? `${darkMode ? 'bg-violet-500/20 text-violet-400 border border-violet-400/30' : 'bg-indigo-500/20 text-indigo-600 border border-indigo-400/30'}` :
                              'bg-pink-500/20 text-pink-400 border border-pink-400/30'
                            }`}>{phase.year}</span>
                          </div>
                          <h5 className={`text-xl md:text-2xl font-bold ${theme.text} mb-3`}>{phase.title}</h5>
                          <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed mb-4 text-sm md:text-base`}>{phase.desc}</p>
                          <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} text-xs md:text-sm leading-relaxed italic`}>
                            Examples: {phase.examples}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Vision */}
          <section id="vision" className="mb-20">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-8 flex items-center flex-wrap`}>
              <Eye className="w-8 h-8 mr-4 flex-shrink-0" />
              <span>Vision: Cognitive Strategy Engine</span>
            </h2>
            
            <div className={`p-8 md:p-12 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl text-center relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-violet-600/10 to-purple-600/5' : 'from-indigo-100/50 to-purple-100/30'}`}></div>
              
              <div className="relative z-10">
                <h3 className={`text-2xl md:text-4xl font-bold ${theme.text} mb-8 leading-tight`}>
                  Project Cortex transcends traditional AI boundaries
                </h3>
                <p className={`text-lg md:text-xl ${theme.text} mb-12 leading-relaxed max-w-4xl mx-auto`}>
                  This is not another chatbot or narrow AI system. Cortex represents the blueprint of a true cognitive partner:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {[
                    { text: "Strategic Reasoning", desc: "Deep analytical thinking with multi-step logical chains", gradient: "from-blue-500 to-cyan-600" },
                    { text: "Scientific Risk Analysis", desc: "Probabilistic modeling with uncertainty quantification", gradient: "from-green-500 to-emerald-600" },
                    { text: "Engineering Execution", desc: "Precise implementation with quality assurance", gradient: "from-orange-500 to-red-600" },
                    { text: "Mentorship Guidance", desc: "Adaptive teaching with personalized learning paths", gradient: "from-purple-500 to-pink-600" }
                  ].map((item, idx) => (
                    <div key={idx} className={`p-6 rounded-3xl bg-gradient-to-br ${item.gradient} shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 text-white relative overflow-hidden group`}>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <h4 className="font-bold text-lg mb-3 leading-tight">{item.text}</h4>
                        <p className="text-sm leading-relaxed opacity-90">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={`p-8 rounded-3xl bg-gradient-to-r ${darkMode ? 'from-violet-900/50 to-purple-900/50' : 'from-indigo-100 to-purple-100'} border ${theme.border} backdrop-blur-sm`}>
                  <p className={`text-lg md:text-xl ${theme.text} leading-relaxed font-medium italic`}>
                    &ldquo;Project Cortex represents a paradigm shift from reactive AI to proactive artificial general intelligence.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Research Status & Team */}
          <section id="team" className="mb-20">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-8 flex items-center flex-wrap`}>
              <Users className="w-8 h-8 mr-4 flex-shrink-0" />
              <span>Research Status & Team</span>
            </h2>
            
            {/* Current Status */}
            <div className={`p-8 md:p-12 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl mb-12 relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-amber-600/10 to-orange-600/5' : 'from-amber-100/50 to-orange-100/30'}`}></div>
              
              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-2xl ${darkMode ? 'bg-amber-500/20 border-amber-400/30' : 'bg-amber-100 border-amber-300'} border mb-8`}>
                  <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></div>
                  <span className={`font-bold ${darkMode ? 'text-amber-300' : 'text-amber-700'} text-lg`}>
                    ACTIVE RESEARCH PROJECT
                  </span>
                </div>
                
                <h3 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-6`}>
                  Project Cortex is the Heart of Upvista Digital
                </h3>
                <p className={`text-lg md:text-xl ${theme.text} leading-relaxed max-w-4xl mx-auto mb-8`}>
                  This groundbreaking research represents our core mission to democratize artificial general intelligence. 
                  We&apos;re not just building another AI system – we&apos;re architecting the future of human-AI collaboration.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {[
                    { metric: "Research Phase", value: "Phase I", desc: "Core Architecture Development" },
                    { metric: "Development Status", value: "35%", desc: "Orchestrator & Agent Framework" },
                    { metric: "Team Size", value: "Growing", desc: "Seeking Researchers & Engineers" }
                  ].map((stat, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl ${theme.glassBg} border ${theme.border} shadow-lg`}>
                      <h4 className={`text-2xl md:text-3xl font-bold ${theme.accent} mb-2`}>{stat.value}</h4>
                      <p className={`font-semibold ${theme.text} mb-1`}>{stat.metric}</p>
                      <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Leadership */}
<div className={`p-8 md:p-12 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl mb-12 relative overflow-hidden`}>
  <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-violet-600/5 to-purple-600/10' : 'from-indigo-100/30 to-purple-100/50'}`}></div>
  
  <div className="relative z-10">
    <h3 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-8 text-center`}>Research Leadership</h3>
    
    <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl mb-4">
          <Image
                        src="/assets/hamza-pic.jpg" 
                        alt="Hamza Hafeez"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
        </div>
      </div>
      
      {/* Text Info */}
      <div className="flex-1 text-center lg:text-left">
        <h4 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-2`}>Hamza Hafeez</h4>
        <p className={`text-lg md:text-xl ${theme.accent} font-semibold mb-4`}>Chief Executive Officer, Upvista Digital</p>
        <p className={`text-base md:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed mb-6 max-w-2xl`}>
        &ldquo;I started Project Cortex to challenge myself and the whole AI community.  
        It&apos;s about building something bigger than anything existed today, a system that dares to rethink how machines can learn, reason,  
        and work alongside us not as tools, but as partners in progress. I know this road is long, full of failures, doubts, and sleepless nights that test your patience,  
        but that&apos;s exactly why it matters. This journey isn&apos;t about chasing recognition or empty numbers… it&apos;s about building
        a foundation strong enough to inspire the next generation of builders, dreamers, and thinkers.<br></br> To me, research is the heart of everything. Whatever we pursue in life, we must constantly seek knowledge,
        because without knowledge we stop growing and without growth, we lose our purpose.&rdquo;
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          {/* Contact Email */}
          <a
            href="mailto:hamza@upvistadigital.com"
            className={`px-6 py-3 bg-gradient-to-r ${darkMode ? 'from-violet-600 to-purple-700' : 'from-indigo-600 to-purple-700'} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2`}
          >
            <Mail className="w-5 h-5" />
            <span>Contact Research Lead</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hamza-hafeez-b0233731a/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 ${theme.glassBg} ${theme.text} font-bold rounded-xl shadow-lg transition-all duration-300 border ${theme.border} flex items-center space-x-2`}
          >
            <ExternalLink className="w-5 h-5" />
            <span>View LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

            
            {/* Call for Researchers */}
<div className={`p-8 md:p-12 rounded-3xl bg-gradient-to-r ${darkMode ? 'from-violet-600 to-purple-700' : 'from-indigo-600 to-purple-700'} shadow-2xl text-white relative overflow-hidden`}>
  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
  
  <div className="relative z-10 text-center">
    <h3 className="text-2xl md:text-4xl font-bold mb-6">Join the Cortex Research Initiative</h3>
    <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
      Project Cortex is actively seeking brilliant minds to join our research team. 
      We need AI researchers, cognitive scientists, software engineers, and visionary thinkers 
      to help us build the future of artificial general intelligence.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {[
        { role: "AI Researchers", desc: "PhD/Masters in AI, ML, or Cognitive Science", needs: "Algorithm design, model architecture, cognitive modeling" },
        { role: "Software Engineers", desc: "Expert in Python, distributed systems, cloud", needs: "System architecture, agent frameworks, scalability" },
        { role: "Cognitive Scientists", desc: "Background in neuroscience or psychology", needs: "Brain-computer mapping, cognitive architecture design" }
      ].map((position, idx) => (
        <div key={idx} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h4 className="text-xl font-bold mb-3">{position.role}</h4>
          <p className="text-violet-100/80 mb-3 text-sm">{position.desc}</p>
          <p className="text-violet-100/60 text-xs leading-relaxed">{position.needs}</p>
        </div>
      ))}
    </div>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Apply to Join Research */}
      <a
        href="mailto:careers@upvistadigital.com"
        className="px-8 py-4 bg-white text-violet-700 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <Mail className="w-5 h-5" />
        <span>Apply to Join Research</span>
      </a>

      {/* View Open Source */}
      <a
        href="https://github.com/upvista" // replace with your actual GitHub
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-violet-800/50 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2"
      >
        <Github className="w-5 h-5" />
        <span>View Open Source</span>
      </a>

      {/* Join Discord */}
      <a
        href="#" // replace with your actual Discord invite
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-violet-800/50 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2"
      >
        <Network className="w-5 h-5" />
        <span>Join Discord</span>
      </a>
    </div>
  </div>
</div>

          </section>

          {/* Research Collaboration */}
          <section className="mb-20">
            <div className={`p-8 md:p-12 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-blue-600/5 to-cyan-600/10' : 'from-blue-100/30 to-cyan-100/50'}`}></div>
              
              <div className="relative z-10">
                <h3 className={`text-2xl md:text-3xl font-bold ${theme.text} mb-8 text-center`}>
                  Open Research & Collaboration
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className={`text-xl font-bold ${theme.text} mb-4`}>Research Opportunities</h4>
                    <div className="space-y-4">
                      {[
                        "Cognitive architecture design and optimization",
                        "Inter-agent communication protocol development",
                        "Risk assessment and safety mechanism research",
                        "Memory integration and knowledge representation",
                        "Meta-learning and self-improvement algorithms",
                        "Multimodal integration and sensory processing"
                      ].map((opportunity, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-blue-500'} mt-2 flex-shrink-0`}></div>
                          <span className={`text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{opportunity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className={`text-xl font-bold ${theme.text} mb-4`}>Collaboration Benefits</h4>
                    <div className="space-y-4">
                      {[
                        "Access to cutting-edge AGI research and development",
                        "Collaboration with leading AI researchers and engineers",
                        "Contribution to open-source cognitive architecture project",
                        "Publication opportunities in top-tier AI conferences",
                        "Professional development in emerging AGI technologies",
                        "Impact on the future direction of artificial intelligence"
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-green-400' : 'bg-emerald-500'} mt-2 flex-shrink-0`}></div>
                          <span className={`text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-20">
            <div className={`p-8 md:p-12 rounded-3xl ${theme.glassBg} border ${theme.border} shadow-2xl text-center relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-violet-600/10 to-purple-600/5' : 'from-indigo-100/50 to-purple-100/30'}`}></div>
              
              <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                <h2 className={`text-3xl md:text-4xl font-bold ${theme.accent} mb-8`}>The Path Forward</h2>
                
                <p className={`text-xl md:text-2xl ${theme.text} leading-relaxed font-medium`}>
                  AGI will not emerge from a single model growing infinitely large.
                </p>
                
                <p className={`text-xl md:text-2xl ${theme.text} leading-relaxed`}>
                  It will emerge from <span className={`${theme.accent} font-bold`}>integration</span>, 
                  the orchestration of specialized intelligences into a synthetic cognitive system.
                </p>
                
                <div className={`p-8 rounded-3xl ${darkMode ? 'bg-violet-800/20' : 'bg-indigo-50'} border ${theme.border} backdrop-blur-sm`}>
                  <p className={`text-lg md:text-xl ${theme.text} leading-relaxed mb-4`}>
                    <strong>Project Cortex provides that integration:</strong>
                  </p>
                  <p className={`text-lg md:text-xl ${theme.text} leading-relaxed`}>
                    A modular, brain-inspired, orchestrated cognitive system capable of uniting 
                    fragmented AI models into a coordinated intelligence greater than the sum of its parts.
                  </p>
                </div>
                
                <div className="pt-8">
                  <p className={`text-2xl md:text-3xl font-bold ${theme.accent} mb-4`}>
                    Project Cortex is not just a framework.
                  </p>
                  <p className={`text-2xl md:text-3xl font-bold ${theme.accent}`}>
                    It is humanity&apos;s next step toward synthetic general intelligence.
                  </p>
                </div>
                
                <div className="pt-8">
                  <button className={`px-8 py-4 bg-gradient-to-r ${darkMode ? 'from-violet-600 to-purple-700' : 'from-indigo-600 to-purple-700'} text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 glow-btn`}>
                    Be Part of the Future
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer with proper styling integration */}
        <div className="relative z-10">
          <Footer />
        </div>
      </main>

      <style jsx global>{`
        .glow-btn {
          box-shadow: 0 0 20px 0 #a78bfa55, 0 4px 12px 0 #0006;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 12px #a78bfa88) drop-shadow(0 0 4px #fff2);
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(1deg); }
          66% { transform: translateY(4px) rotate(-0.5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
        @media (max-width: 1024px) {
          .lg\\:flex-row-reverse:nth-child(even) {
            flex-direction: column;
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${darkMode ? '#1e293b' : '#f1f5f9'};
        }
        ::-webkit-scrollbar-thumb {
          background: ${darkMode ? '#6366f1' : '#8b5cf6'};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? '#8b5cf6' : '#6366f1'};
        }
      `}</style>
    </>
  );
}
