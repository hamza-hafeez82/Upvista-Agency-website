'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';

export default function ProjectCortexPage() {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('');
  const [highlightedRef, setHighlightedRef] = useState<string | null>(null);

  // ScrollSpy Effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'abstract', 'conflict-of-interest', 'extended-abstract', 'abbreviations',
        'i--introduction', 'ii--background', 'iii--prefrontal-cortex', 'iv--architecture',
        'v--formal-theory', 'vi--objectives', 'vii--algorithms', 'viii--applications',
        'ix--ethics---safety', 'x--limitations', 'xi--conclusion', 'xii--references',
        'acknowledgments', 'author-biography'
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const scrollToReference = (refId: string) => {
    scrollToSection(refId);
    setHighlightedRef(refId);
    setTimeout(() => setHighlightedRef(null), 2000);
  };

  const Cite = ({ refs }: { refs: number | number[] }) => {
    const refArray = Array.isArray(refs) ? refs : [refs];
    return (
      <>
        {refArray.map((ref, idx) => (
          <React.Fragment key={ref}>
            <button
              onClick={() => scrollToReference(`ref-${ref}`)}
              className={`citation-link font-semibold mx-0.5 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
            >
              [{ref}]
            </button>
            {idx < refArray.length - 1 && ', '}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Project Cortex: A Biologically Inspired Architecture for Artificial General Intelligence | Hamza Hafeez Bhatti</title>
        <meta name="description" content="Project Cortex - A comprehensive research paper on biologically inspired AGI architecture modeled on the human prefrontal cortex." />
        <meta name="author" content="Hamza Hafeez Bhatti" />
      </Head>

      <style jsx global>{`
        .citation-link {
          transition: all 0.2s;
          cursor: pointer;
        }
        .citation-link:hover {
          text-decoration: underline;
        }
        .reference-item {
          transition: background-color 0.3s;
        }
        .reference-highlighted {
          background-color: ${isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'};
          border-left: 3px solid ${isDark ? '#60a5fa' : '#3b82f6'};
          padding-left: 0.75rem;
        }
        .math {
          font-family: 'Times New Roman', serif;
          font-style: italic;
        }
        .toc-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .toc-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .toc-scroll::-webkit-scrollbar-thumb {
          background-color: ${isDark ? '#374151' : '#d1d5db'};
          border-radius: 20px;
        }
      `}</style>

      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <Header />

        {/* Hero Section */}
        <div className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="max-w-5xl mx-auto text-center">
            <div className={`inline-block px-4 py-2 rounded mb-6 ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
              <span className="text-sm font-semibold">RESEARCH PAPER • 2025</span>
            </div>

            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Project Cortex
            </h1>

            <h2 className={`text-xl md:text-2xl font-semibold mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              A Biologically Inspired Architecture for Artificial General Intelligence
            </h2>

            <div className={`max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="text-lg mb-4">
                <strong className={isDark ? 'text-white' : 'text-gray-900'}>Author:</strong> Hamza Hafeez Bhatti
              </p>
              <p className="text-sm">
                Upvista Digital, Lahore, Pakistan<br />
                National University of Modern Languages, Lahore Campus<br />
                <a href="mailto:hamza@upvistadigital.com" className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                  hamza@upvistadigital.com
                </a>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection('abstract')}
                className={`px-6 py-3 rounded font-semibold transition-all ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
              >
                Read Abstract
              </button>
              <button
                className={`px-6 py-3 rounded font-semibold border-2 transition-all ${isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8">

          {/* Sticky TOC Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto overflow-x-hidden toc-scroll">
              <nav className={`pl-4 border-l-2 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                <h3 className={`text-xs font-bold uppercase tracking-wider mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Contents
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { label: 'Abstract', id: 'abstract' },
                    { label: 'Conflict of Interest', id: 'conflict-of-interest' },
                    { label: 'Extended Abstract', id: 'extended-abstract' },
                    { label: 'Abbreviations', id: 'abbreviations' },
                    { label: 'I. Introduction', id: 'i--introduction' },
                    { label: 'II. Background', id: 'ii--background' },
                    { label: 'III. Prefrontal Cortex', id: 'iii--prefrontal-cortex' },
                    { label: 'IV. Architecture', id: 'iv--architecture' },
                    { label: 'V. Formal Theory', id: 'v--formal-theory' },
                    { label: 'VI. Objectives', id: 'vi--objectives' },
                    { label: 'VII. Algorithms', id: 'vii--algorithms' },
                    { label: 'VIII. Applications', id: 'viii--applications' },
                    { label: 'IX. Ethics & Safety', id: 'ix--ethics---safety' },
                    { label: 'X. Limitations', id: 'x--limitations' },
                    { label: 'XI. Conclusion', id: 'xi--conclusion' },
                    { label: 'XII. References', id: 'xii--references' },
                    { label: 'Acknowledgments', id: 'acknowledgments' },
                    { label: 'Author Biography', id: 'author-biography' }
                  ].map(({ label, id }) => {
                    const isActive = activeSection === id;

                    return (
                      <li key={id}>
                        <button
                          onClick={() => scrollToSection(id)}
                          className={`text-left w-full transition-all duration-200 block ${isActive
                            ? isDark ? 'text-blue-400 font-medium translate-x-1' : 'text-blue-600 font-medium translate-x-1'
                            : isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-900'
                            }`}
                          style={{
                            textAlign: 'left'
                          }}
                        >
                          {label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Article Content */}
          <article className={`flex-1 max-w-4xl ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>

            {/* Abstract */}
            <section id="abstract" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Abstract</h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  Artificial General Intelligence represents the pursuit of systems capable of broad, adaptive, and autonomous cognition. While modern large language models demonstrate impressive capabilities in language understanding and reasoning, they remain fragmented systems without unified executive control, persistent memory, or structured planning abilities. This paper introduces Project Cortex, a biologically inspired architecture modeled on the functional organization of the human prefrontal cortex. The framework integrates an executive orchestrator, specialized cognitive agents, a shared memory substrate, probabilistic risk evaluation, and hierarchical task decomposition, reflecting principles observed in human executive function and control theory.
                </p>
                <p>
                  Drawing from neuroscienc, multi-agent system theory, and co gnitive control models, Project Cortex proposes a structured approach for constructing coherent, interpretable, and safety-aligned general intelligence. The architecture establishes a foundation for autonomous planning, adaptive decision making, meta-cognition, and life-long integration of knowledge. The work aims to bridge biological principles with computational engineering to outline a scalable and ethically grounded pathway toward AGI.
                </p>
                <p className={`text-sm italic mt-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <strong>Index Terms:</strong> Artificial General Intelligence, Cognitive Architecture, Prefrontal Cortex, Multi-Agent Systems, Executive Control, Machine Intelligence, Safety-Aligned AI, Biological Inspiration.
                </p>
              </div>
            </section>

            {/* Conflict of Interest */}
            <section id="conflict-of-interest" className={`mb-16 p-6 rounded border-l-4 ${isDark ? 'bg-gray-800 border-blue-500' : 'bg-blue-50 border-blue-600'}`}>
              <h3 className={`text-sm font-bold uppercase mb-2 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                Conflict of Interest Statement
              </h3>
              <p className="text-sm">
                I, Hamza Hafeez Bhatti, The author of this article declares no competing financial interests or personal relationships that could have influenced the work reported in this paper.
              </p>
            </section>

            {/* Extended Abstract */}
            <section id="extended-abstract" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Extended Abstract</h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  Intelligence can be understood as the capacity to pursue a goal by interpreting the environment, imagining possible ways to reach the goal, selecting an effective plan, and improving through experience <Cite refs={[19, 18]} />. Humans demonstrate intelligence when solving everyday problems, planning complex projects, or reasoning socially. Machines express intelligence in the same sequence: perceive, think, plan, act, and learn <Cite refs={19} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Narrow AI vs. AGI
                </h3>
                <p>
                  Current artificial intelligence systems are narrow in scope <Cite refs={19} />. They excel at a single task such as playing chess or identifying objects in images, but they cannot transfer knowledge across domains <Cite refs={29} />. Artificial General Intelligence refers to a system that can understand, learn, and adapt across many different types of tasks without being redesigned <Cite refs={21} />. It is the difference between isolated tools and a flexible partner that can assume many roles.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Why AGI matters
                </h3>
                <p>
                  AGI has the potential to accelerate scientific discovery, transform healthcare, enhance infrastructure planning, personalize education, and free people from repetitive work <Cite refs={[23, 24]} />. At the same time, powerful systems introduce risks such as large-scale errors, misuse, and unforeseen consequences, necessitating transparent design and strong safeguards <Cite refs={[45, 46]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  What Project Cortex is
                </h3>
                <p>
                  Project Cortex is a biologically inspired architecture that unifies existing AI capabilities into a coordinated cognitive system, reflecting the executive organizational principles of the prefrontal cortex <Cite refs={[1, 3]} />. The Orchestrator acts as a director who interprets goals, decomposes them into tasks, assigns work to specialists, monitors progress, and integrates results, mirroring known executive control pathways in biological cognition <Cite refs={[5, 10]} />. Each Agent represents a specific cognitive ability such as reasoning, planning, risk analysis, memory management, or execution, consistent with modular multi-agent design theory <Cite refs={34} />. The Shared Workspace functions analogously to working memory structures described in neuroscience <Cite refs={[2, 11]} />. A dedicated Risk Agent evaluates uncertainties and requests human approval for sensitive decisions, building on modern AI safety principles <Cite refs={[45, 46, 47, 48, 49, 50]} />. Over time the system learns from experience and maintains cumulative understanding, similar to lifelong learning formulations in neuroscience <Cite refs={1} /> and reinforcement learning <Cite refs={18} />.
                </p>
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Why I am building Project Cortex
                </h3>
                <p>
                  The motivation originates from the belief that many essential components of general intelligence already exist but remain uncoordinated. The missing ingredient is a mechanism for structured collaboration and executive regulation, a property strongly associated with prefrontal cortical function in humans <Cite refs={[3, 5]} />. The project demonstrates the plausibility that AGI architectures can emerge from principled integration rather than scale alone, aligning with modern critiques of monolithic models <Cite refs={26} />. The intention is to create systems that enhance human capability while remaining transparent, safe, and practical, consistent with alignment-focused research <Cite refs={[45, 46]} />.
                </p>
                <p>
                  Project Cortex is initially suited for multi-step tasks requiring coordinated reasoning, including scientific research, complex planning, automated software engineering, medical decision support, and long-term project management <Cite refs={[35, 34, 23]} />. The architecture emphasizes safety and human-in-the-loop operation <Cite refs={[45, 46]} />, aligning its purpose with augmentation rather than replacement of human expertise.
                </p>
                <p>
                  Several aspects differentiate Project Cortex from existing AI systems. It mirrors the functional organization of the human prefrontal cortex to enable flexible task allocation, conflict resolution, and long-term planning <Cite refs={[3, 5]} />. It composes specialized modules that communicate through a persistent shared memory system, improving modularity, transparency, and upgradeability <Cite refs={[41, 42]} />. Safety mechanisms are embedded into the architecture through a Risk Agent, human approval layers, and provenance tracking, consistent with established safety practices <Cite refs={[46, 49]} />. Computational efficiency is maintained by activating modules only when required, inspired by sparse expert systems <Cite refs={36} />. The system supports emergent collaboration across agents, enabling collective problem-solving behaviors similar to coordinated multi-agent systems <Cite refs={[34, 38]} />. Finally, the project provides a clear development roadmap toward increasingly capable and adaptive intelligence <Cite refs={[23, 26]} />.
                </p>
              </div>
            </section>

            {/* Footer Notes */}
            <div className={`text-xs italic mb-12 p-4 rounded space-y-2 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
              <p>¹ Portions of this work draw conceptual motivation from neuroscience literature on executive control and prefrontal cortex function.</p>
              <p>² All architecture, mathematical formulations, and system design elements in Project Cortex were constructed specifically for this research.</p>
              <p>³ Safety terminology such as safe failure, adversarial mitigation, and oversight alignment corresponds to established concepts in AI safety literature.</p>
            </div>

            {/* Table of Contents
            <section id="table-of-contents" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Table of Contents</h2>
              <div className={`text-sm space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex justify-between border-b border-dotted pb-1"><span>ABSTRACT</span><span>2</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>I. INTRODUCTION</span><span>7</span></div>
                <div className="ml-4 flex justify-between border-b border-dotted pb-1"><span>A. Motivation</span><span>7</span></div>
                <div className="ml-4 flex justify-between border-b border-dotted pb-1"><span>B. Research Problem</span><span>7</span></div>
                <div className="ml-4 flex justify-between border-b border-dotted pb-1"><span>C. Contributions</span><span>7</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>II. BACKGROUND CONCEPTS</span><span>8</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>III. THE HUMAN BRAIN'S PREFRONTAL CORTEX</span><span>9</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>IV. HIGH-LEVEL ARCHITECTURE</span><span>11</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>V. FORMAL THEORY AND MATHEMATICAL BLUEPRINT</span><span>14</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>VI. SYSTEM OBJECTIVES</span><span>16</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>VII. ALGORITHMS AND PROTOCOLS</span><span>19</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>VIII. APPLICATIONS AND USE CASES</span><span>22</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>IX. ETHICAL AND SAFETY CONSIDERATIONS</span><span>25</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>X. LIMITATIONS</span><span>27</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>XI. CONCLUSION</span><span>29</span></div>
                <div className="flex justify-between border-b border-dotted pb-1"><span>XII. REFERENCES</span><span>30</span></div>
              </div>
            </section> */}

            {/* List of Abbreviations */}
            <section id="abbreviations" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>List of Abbreviations</h2>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {[
                  ['ACC', 'Anterior Cingulate Cortex'],
                  ['AGI', 'Artificial General Intelligence'],
                  ['AI', 'Artificial Intelligence'],
                  ['AIXI', 'Universal Artificial Intelligence model'],
                  ['API', 'Application Programming Interface'],
                  ['dlPFC', 'Dorsolateral Prefrontal Cortex'],
                  ['FPC', 'Frontopolar Cortex'],
                  ['HTN', 'Hierarchical Task Network'],
                  ['LLM', 'Large Language Model'],
                  ['MCTS', 'Monte Carlo Tree Search'],
                  ['MDP', 'Markov Decision Process'],
                  ['NMDA', 'N-Methyl-D-Aspartate'],
                  ['OFC', 'Orbitofrontal Cortex'],
                  ['PFC', 'Prefrontal Cortex'],
                  ['RL', 'Reinforcement Learning'],
                  ['SMDP', 'Semi-Markov Decision Process'],
                  ['vmPFC', 'Ventromedial Prefrontal Cortex']
                ].map(([abbr, full]) => (
                  <div key={abbr} className="flex gap-4">
                    <span className="font-semibold min-w-[80px]">{abbr}</span>
                    <span>{full}</span>
                  </div>
                ))}
              </div>
            </section>


            {/* I. INTRODUCTION */}
            <section id="i--introduction" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                I. Introduction
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  Artificial intelligence has progressed rapidly in recent years due to large-scale neural models, transformer architectures, and substantial computational resources <Cite refs={[23, 42]} />. These systems excel at pattern recognition, natural language generation, and domain-specific reasoning but their capabilities remain fundamentally narrow <Cite refs={[19, 29]} />. They lack unified executive coordination, persistent memory, long-horizon planning, stable goal prioritization, and structured reasoning comparable to human intelligence <Cite refs={[3, 5, 35]} />.
                </p>
                <p>
                  The human brain achieves general intelligence through the cooperation of highly specialized regions operating under the regulatory influence of the prefrontal cortex <Cite refs={[1, 3]} />. This biological system integrates long-term goals, sensory information, contextual cues, emotional signals, and stored knowledge into a coherent cognitive strategy <Cite refs={[7, 9]} />. Reproducing this coordination principle in artificial systems may offer a viable path toward AGI <Cite refs={[19, 21]} />.
                </p>
                <p>
                  This work introduces Project Cortex, a biologically grounded architecture designed to emulate the functional logic of the prefrontal cortex <Cite refs={[1, 3, 5]} />. The system integrates an Orchestrator responsible for goal interpretation and regulation, domain-specialized agents for reasoning and planning, a shared memory environment for representation consistency <Cite refs={11} />, and a multi-layer safety and arbitration mechanism based on modern alignment research <Cite refs={[45, 46]} />. The architecture allows artificial systems to engage in structured cognition, dynamic task decomposition, and adaptive learning across varied environments <Cite refs={[18, 35]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  A. Motivation
                </h3>
                <p>
                  Modern AI systems operate as isolated capabilities. They perform well at specific tasks but fail to combine reasoning, planning, risk evaluation, and memory into a unified intelligence <Cite refs={[19, 23]} />. Biological cognition demonstrates that general intelligence emerges from the coordination of specialized units under central executive control <Cite refs={[3, 5]} />, motivating a synthetic architecture inspired by these dynamics.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  B. Research Problem
                </h3>
                <p>
                  The central challenge addressed is the absence of a coherent control structure in contemporary AI models. Without orchestration, persistent memory, multi-agent collaboration, and risk-aware decision systems, no artificial model can exhibit general intelligence <Cite refs={[21, 22, 34, 45]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  C. Contributions
                </h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Presents a prefrontal-cortex-inspired AGI architecture that unifies executive control, cognitive modularity, memory integration, and safety oversight <Cite refs={[1, 3, 11, 45]} />.</li>
                  <li>Introduces a formal representation of system state, goals, observations, policies, and utility within an orchestrated multi-agent framework grounded in reinforcement learning theory <Cite refs={[18, 32]} />.</li>
                  <li>Describes the algorithms and protocols governing orchestration, agent coordination, memory operations, and arbitration <Cite refs={[34, 41]} />.</li>
                  <li>Establishes a mathematical foundation for hierarchical planning, task decomposition, and uncertainty modeling <Cite refs={[20, 32, 35]} />.</li>
                  <li>Outlines ethical, safety, and governance structures to ensure alignment and controlled autonomy <Cite refs={[45, 46, 47, 48, 49, 50]} />.</li>
                </ol>
              </div>
            </section>

            {/* II. BACKGROUND CONCEPTS */}
            <section id="ii--background" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                II. Background Concepts
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  This section introduces the foundational concepts required to understand the objectives and architecture of Project Cortex. It establishes working definitions of intelligence, artificial intelligence, and general intelligence, and examines the historical development of AI architectures and the limitations that motivate the need for a cognitively structured system.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  A. Definition of Intelligence
                </h3>
                <p>
                  Intelligence can be characterized as the capacity of a system, biological or artificial, to achieve goals across varied environments <Cite refs={[19, 21]} />. It involves perception, representation, reasoning, learning, and adaptation, consistent with classical frameworks in cognitive science and reinforcement learning <Cite refs={[18, 19]} />. Perception refers to the acquisition and interpretation of sensory or symbolic input. Representation concerns the construction of internal models or memory structures that encode relevant environmental features <Cite refs={19} />. Reasoning and planning involve generating possible future states and selecting actions that increase the likelihood of achieving a desired outcome <Cite refs={35} />. Learning allows a system to improve performance based on experience, while adaptation supports transfer to new tasks and uncertain environments <Cite refs={18} />.
                </p>
                <p>
                  At a functional level, intelligent systems exhibit generality, robustness, sample efficiency, compositionality, and long-horizon competence <Cite refs={[18, 21]} />. Reinforcement learning formalizes intelligence as action selection that maximizes expected cumulative reward under uncertainty <Cite refs={18} />. However, intelligence also includes abstraction, meta-cognition, and structured reasoning beyond reward maximization, as emphasized in broader AGI theory <Cite refs={[21, 22]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  B. Artificial Intelligence
                </h3>
                <p>
                  Artificial Intelligence refers to engineering and scientific approaches for constructing machines capable of performing tasks associated with human cognition <Cite refs={19} />. Subfields include perception, natural language processing, planning and control, knowledge representation, machine learning, and human-AI interaction. Modern AI systems are typically narrow, excelling at single-domain tasks such as classification or translation <Cite refs={23} />. The field's long-term trajectory aims to transcend narrow systems and develop broadly generalizable cognitive frameworks <Cite refs={[21, 22]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  C. Artificial General Intelligence
                </h3>
                <p>
                  Artificial General Intelligence denotes a system capable of performing a wide range of cognitive tasks with competence comparable to human reasoning <Cite refs={21} />. AGI systems must learn, understand, and apply knowledge across domains while adopting new tasks without architectural redesign. Key properties include cross-domain generalization, open-ended problem solving, self-directed learning, probabilistic reasoning, and meta-cognition <Cite refs={[21, 22]} />.
                </p>
                <p>
                  Informal perspectives include the Legg and Hutter universal intelligence framework <Cite refs={21} /> and the AIXI model as an idealized upper bound of rationality <Cite refs={22} />. While not directly implementable, these models provide conceptual foundations for understanding general intelligence. AGI is therefore not a single algorithm but an integrated collection of cognitive capabilities.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  D. Why Current AI Systems Do Not Achieve AGI
                </h3>
                <p>
                  Contemporary AI systems remain limited in several ways. They fail to generalize reliably across distribution shifts <Cite refs={23} />, lack persistent memory or life-long learning mechanisms <Cite refs={41} />, and struggle with long-horizon planning and multi-step control <Cite refs={[18, 32]} />. Neural architectures often exhibit weak symbolic reasoning and limited interpretability <Cite refs={[26, 49]} />. Safety concerns, including hallucinations, reward hacking, and opaque decision processes, remain unresolved <Cite refs={[45, 46, 47, 48]} />. Additionally, no unified framework exists for integrating perception, reasoning, planning, memory, and safety into a coherent control structure <Cite refs={[34, 42]} />. These limitations motivate architectures that incorporate modularity, persistent memory, meta-control, and safety-aware arbitration.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  E. Historical Development of AI Architectures
                </h3>
                <p>
                  AI has progressed through several architectural paradigms. Early symbolic systems emphasized logic and explicit reasoning but struggled with perception and scalability <Cite refs={19} />. Neural networks reintroduced learning from data using distributed representations <Cite refs={18} />. Transformers revolutionized sequence modeling through self-attention and contextual reasoning <Cite refs={41} />. This enabled the rise of large language models, which exhibit emergent reasoning abilities but lack persistent memory, planning capabilities, and grounded decision-making <Cite refs={[23, 26, 42]} />.
                </p>
                <p>
                  Multi-agent and orchestration-based approaches have re-emerged to coordinate specialized subsystems and enable tool use, reflecting concepts from blackboard architectures and multi-agent reinforcement learning <Cite refs={[34, 38]} />. Although these developments indicate progress toward integrated intelligence, no existing paradigm fully achieves AGI.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  F. Limitations of Contemporary Models
                </h3>
                <p>
                  Modern systems such as GPT-4, Claude, Gemini, and LLaMA demonstrate factual unreliability, limited grounding, restricted context, inefficiencies in compute and data, and challenges related to interpretability and verification <Cite refs={[23, 26, 42]} />. They often rely on heuristics rather than structured reasoning, exhibit incomplete integration with symbolic systems, and pose alignment and safety challenges surrounding value specification and misuse <Cite refs={[45, 46, 47, 48, 49, 50]} />. These limitations reinforce the need for architectures featuring persistent memory, transparent internal state, explicit reasoning, reliable planning, and safety-aware arbitration mechanisms.
                </p>
              </div>
            </section>

            {/* III. THE HUMAN BRAIN'S PREFRONTAL CORTEX */}
            <section id="iii--prefrontal-cortex" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                III. The Human Brain's Prefrontal Cortex as a Blueprint for General Intelligence
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  A. Introduction
                </h3>
                <p>
                  The human prefrontal cortex (PFC) is the most evolutionarily advanced region of the cerebrum and is central to abstract reasoning, goal formation, long-horizon planning, behavioral regulation, and adaptive decision making <Cite refs={[1, 3]} />. It integrates sensory, mnemonic, emotional, and motor signals to generate coherent strategies for action <Cite refs={[7, 9]} />. These functions represent the biological basis of general intelligence.
                </p>
                <p>
                  Artificial systems seeking general intelligence require similar abilities, including context maintenance, multi-step planning, conflict detection, uncertainty modeling, and adaptive control <Cite refs={[5, 10]} />. This section examines the anatomy, microcircuitry, and functional principles of the PFC and maps them to architectural strategies within Project Cortex.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  B. Anatomy and Organization of the Prefrontal Cortex
                </h3>
                <h4 className={`text-lg font-semibold mt-6 mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  1. Macroscopic Structure
                </h4>
                <p>
                  The PFC includes the dorsolateral (dlPFC), ventromedial (vmPFC), orbitofrontal cortex (OFC), anterior cingulate cortex (ACC), and frontopolar cortex (FPC) <Cite refs={[1, 7]} />.
                </p>
                <p>
                  The dorsolateral PFC supports working memory, rule maintenance, flexible reasoning, and abstraction. Goldman-Rakic identifies it as the principal substrate for executive control and persistent representation <Cite refs={1} />.
                </p>
                <p>
                  The ventromedial PFC supports valuation, long-term reward integration, and emotion-guided decision making. Roy, Shohamy, and Wager describe its role in transforming affect into goal-relevant actions <Cite refs={9} />.
                </p>
                <p>
                  The OFC performs rapid associative learning, behavioral updating, and outcome estimation. Rushworth and Behrens characterize it as central to valuation and adaptive control <Cite refs={7} />.
                </p>
                <p>
                  The ACC monitors conflict, errors, and performance adjustment. Botvinick et al. define it as a supervisory controller for cognitive regulation <Cite refs={5} />.
                </p>
                <p>
                  The frontopolar cortex supports meta-cognition, strategic exploration, and long-horizon planning. Koechlin describes it as the highest integrative center of executive function <Cite refs={10} />.
                </p>

                <h4 className={`text-lg font-semibold mt-6 mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  2. Microcircuit Characteristics
                </h4>
                <p>
                  The PFC contains structured populations of pyramidal neurons and inhibitory interneurons spanning six layers <Cite refs={[1, 11]} />.
                </p>
                <p>
                  Pyramidal neurons maintain rule-based representations and stable goal encodings. Wang (2021) identifies them as primary computational units for executive function <Cite refs={2} />.
                </p>
                <p>
                  Inhibitory interneurons regulate excitation to stabilize cortical dynamics. Tremblay et al. detail their role in shaping microcircuit computations <Cite refs={6} />.
                </p>
                <p>
                  Recurrent excitatory loops create attractor states capable of maintaining information without external input, forming the neural basis of working memory <Cite refs={[2, 11]} />. Wang's computational modeling demonstrates how recurrent excitation enables persistent activity <Cite refs={11} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  C. Functional Principles of the Prefrontal Cortex
                </h3>
                <p>
                  Working memory enables maintenance of rules and intermediate reasoning steps through persistent neural firing in the dlPFC <Cite refs={[1, 11]} />.
                </p>
                <p>
                  Cognitive control arises from top-down modulation of sensory and motor systems, allowing flexible rule switching and goal-directed behavior <Cite refs={5} />.
                </p>
                <p>
                  Valuation integrates reward, emotion, and experience in vmPFC and OFC to guide decisions under uncertainty <Cite refs={[7, 9]} />.
                </p>
                <p>
                  Conflict detection and error monitoring are mediated by the ACC, enabling performance regulation and behavioral correction <Cite refs={5} />.
                </p>
                <p>
                  Long-horizon strategic control is supported by the FPC, which manages multi-goal planning and exploratory reasoning <Cite refs={10} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  D. Why the Prefrontal Cortex is Central to Human Intelligence
                </h3>
                <p>
                  The PFC integrates sensory, mnemonic, motor, and affective processes into unified goal-directed behavior <Cite refs={[1, 3]} />. It supports abstraction, generalization, and adaptive reasoning across novel contexts <Cite refs={[5, 10]} />. Hierarchical control across multiple timescales originates here, enabling complex planning behaviors that define human intelligence <Cite refs={[3, 7]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  E. Computational Parallels Relevant to AGI
                </h3>
                <p>
                  Working memory corresponds to dynamic computational buffers for goals and intermediate reasoning <Cite refs={35} />.
                </p>
                <p>
                  Top-down control parallels attention mechanisms in artificial systems <Cite refs={41} />.
                </p>
                <p>
                  Reward integration maps to value estimation modules in reinforcement learning <Cite refs={18} />.
                </p>
                <p>
                  Conflict detection aligns with error-monitoring and self-correction processes in intelligent architectures <Cite refs={32} />.
                </p>
                <p>
                  Meta-reasoning parallels high-level controllers and multi-agent coordination observed in orchestrated AI systems <Cite refs={[34, 38]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  F. Why Project Cortex Uses the Prefrontal Cortex as a Model
                </h3>
                <p>
                  The PFC contains core elements essential to general intelligence, including abstraction, planning, persistent memory, conflict monitoring, and meta-control <Cite refs={[1, 3, 5]} />. As the only known biological substrate capable of general intelligence, its architectural organization offers a grounded template for AGI design <Cite refs={[3, 10]} />. Project Cortex incorporates analogs of dlPFC, vmPFC, OFC, ACC, and FPC to structure working memory, valuation, conflict detection, and long-horizon strategic reasoning.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  G. Conclusion
                </h3>
                <p>
                  The prefrontal cortex provides a biologically grounded blueprint for general intelligence. Its mechanisms of working memory, cognitive control, valuation, conflict detection, and meta-level planning directly inspire the architecture of Project Cortex. By grounding artificial cognition in these functional principles, the system aims to support flexible reasoning, adaptive behavior, and long-horizon planning consistent with AGI objectives.
                </p>
              </div>
            </section>

            {/* IV. HIGH-LEVEL ARCHITECTURE */}
            <section id="iv--architecture" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                IV. High-Level Architecture
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  The architecture of Project Cortex is composed of four coordinated subsystems. These include the Orchestrator, the Specialized Agents, the Shared Memory System, and the Arbitration and Conflict Resolution Layer. Together they form a modular yet integrated computational structure that parallels the functional organization of the human prefrontal cortex and its interactions with distributed cortical networks <Cite refs={[1, 3, 6, 14]} />. The design emphasizes stability, interpretability, hierarchical control, long-duration coherence, and scalable generality, consistent with established models of executive function and cognitive integration in neuroscience <Cite refs={[3, 5, 10]} />. It provides the foundational layout through which the system can perform structured reasoning, multi-step planning, and adaptive behavior across diverse domains <Cite refs={[18, 32, 34]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  A. Orchestrator
                </h3>
                <p>
                  The Orchestrator serves as the central executive mechanism of the system. It establishes global intent, determines cognitive priorities, regulates information flow, and supervises the activities of all agents. This subsystem is grounded in the biological role of the prefrontal cortex, which supports abstract reasoning, contextual maintenance, controlled attention, behavioral sequencing, and long-range integration across distributed neural circuits <Cite refs={[1, 3, 5]} />.
                </p>
                <p>
                  Upon receiving an objective, the Orchestrator constructs a complete internal task model. This includes a formal representation of the goal, its boundary conditions, success criteria, constraints, task horizon, resource requirements, and the hierarchy of intermediate states. Such structured task modeling parallels hierarchical cognitive control and multi-timescale planning in biological systems <Cite refs={[5, 10]} />.
                </p>
                <p>
                  The Orchestrator monitors all agent operations, schedules their activation, and regulates their interactions in accordance with the evolving task model. It may initiate, suspend, redirect, or terminate agent processes as needed. This supervisory control draws from hierarchical reasoning frameworks, combining deterministic reasoning rules, probabilistic inference, and policy-based strategies depending on task characteristics <Cite refs={[3, 18, 32]} />. Through continuous integration of agent outputs, the Orchestrator maintains coherence across long horizons, consistent with theories of prefrontal coherence maintenance and goal tracking <Cite refs={[3, 10, 14]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  B. Specialized Agents
                </h3>
                <p>
                  Project Cortex employs multiple domain-specific agents, each designed for a well-defined cognitive function, echoing the division of labor observed across cortical and subcortical structures <Cite refs={[6, 14, 16]} />.
                </p>
                <p>
                  The <strong>Reasoning Agent</strong> performs deductive, inductive, abductive, and analogical inference. It evaluates causal structure, identifies inconsistencies, and generates logically defensible conclusions. This reflects computational models of rule-guided behavior and conflict monitoring in dlPFC and ACC <Cite refs={[3, 10]} />.
                </p>
                <p>
                  The <strong>Planning Agent</strong> converts high-level objectives into operational sequences. It formulates hierarchical plans, contingencies, and temporal constraints, drawing on classical and contemporary planning literature <Cite refs={[32, 35]} />. Its operations are analogous to strategic planning functions attributed to the frontopolar cortex and dorsolateral PFC <Cite refs={[5, 10]} />.
                </p>
                <p>
                  The <strong>Risk Evaluation Agent</strong> quantifies uncertainty, failure modes, and vulnerabilities across solution paths. This mirrors the biological integration of risk and value signals in vmPFC and OFC <Cite refs={[7, 8, 9, 16]} />, and aligns with formal models of risk-sensitive reinforcement learning <Cite refs={[18, 20]} />.
                </p>
                <p>
                  The <strong>Memory System</strong> maintains short-term working storage, intermediate computational structures, and long-duration knowledge. Its functional basis parallels working memory processes in recurrent PFC microcircuits <Cite refs={[1, 2, 11]} />, and artificial architectures such as Neural Turing Machines and differentiable memory systems <Cite refs={41} />.
                </p>
                <p>
                  The <strong>Execution Agent</strong> implements validated plans, performs system actions, issues tool calls, and interfaces with external environments. Its execution logic parallels hierarchical action selection mechanisms in computational control architectures <Cite refs={[18, 32]} />.
                </p>
                <p>
                  All communication is mediated through standardized message structures defined by the Orchestrator, consistent with multi-agent communication frameworks and coordination models <Cite refs={[33, 34, 38]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  C. Shared Memory System
                </h3>
                <p>
                  The Shared Memory System provides a unified workspace integrating symbolic structures, relational data, and vector embeddings, similar to global workspaces and shared cortical integration hubs <Cite refs={[1, 6, 14]} />. It is accessible to all agents under Orchestrator supervision and forms the substrate for cross-agent coordination.
                </p>
                <p>
                  Memory is divided into three layers:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Working storage, paralleling biological working memory in dlPFC <Cite refs={[1, 2, 11]} />.</li>
                  <li>Intermediate storage, supporting evolving structural representations similar to predictive microcircuits <Cite refs={17} />.</li>
                  <li>Long-duration storage, analogous to consolidated cortical and subcortical memory representations <Cite refs={[14, 15]} />.</li>
                </ol>
                <p>
                  Memory writes follow strict coherence protocols, consistent with models of predictive coding and error minimization <Cite refs={17} />, and with principles of stable consolidation in artificial memory systems <Cite refs={41} />. Contradictory or outdated information is prevented from entering persistent storage, preserving stability and preventing representational drift <Cite refs={[39, 40]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  D. Task Decomposition
                </h3>
                <p>
                  Task decomposition converts a general objective into structured subcomponents. The Orchestrator performs decomposition using logical partitioning, dependency analysis, resource forecasting, and agent-capability matching. These techniques correspond to methods in hierarchical planning and task abstraction <Cite refs={[32, 35]} />.
                </p>
                <p>
                  Logical partitioning identifies conceptual units, while dependency analysis uncovers causal and temporal relationships. Resource forecasting estimates compute, time, and risk requirements, drawing from decision-theoretic models <Cite refs={[18, 30]} />.
                </p>
                <p>
                  Decomposition is recursive. If an agent reports that a subproblem exceeds its operational scope, an escalation triggers deeper decomposition, similar to hierarchical RL mechanisms such as options or semi-MDPs <Cite refs={[18, 32]} />. This mechanism preserves scalability and stability as complexity increases.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  E. Arbitration and Conflict Resolution
                </h3>
                <p>
                  The Arbitration and Conflict Resolution Layer mediates competition between agent proposals. Conflict naturally emerges in multi-agent systems and requires structured resolution mechanisms <Cite refs={[33, 34, 38]} />.
                </p>
                <p>
                  The Arbitration Layer aggregates proposed outputs and evaluates them using the Orchestrator's task model. Selection criteria integrate accuracy, stability, efficiency, predicted risk, and long-horizon alignment, consistent with theories of cognitive control and conflict monitoring in the anterior cingulate cortex <Cite refs={10} />, and with multi-objective policy evaluation frameworks in RL <Cite refs={[18, 31]} />.
                </p>
                <p>
                  The layer continuously monitors the Shared Memory System. When new information significantly alters the computational landscape, the Arbitration Layer decides whether to revise or terminate active plans, analogous to biological adaptive control mechanisms and error-driven behavioral adjustment <Cite refs={[3, 10, 14]} />.
                </p>
                <p>
                  This process protects the system from logical drift, preserves internal consistency, and ensures long-horizon coherence across the entire architecture.
                </p>
              </div>
            </section>

            {/* V. FORMAL THEORY AND MATHEMATICAL BLUEPRINT */}
            <section id="v--formal-theory" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                V. Formal Theory and Mathematical Blueprint for Project Cortex
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  A. High-Level Summary
                </h3>
                <p>
                  Project Cortex is modeled as a hierarchical, partially observable, stochastic control system composed of a meta controller called the Orchestrator and a set of specialized agents. The overall decision problem is a Hierarchical Partially Observable Markov Decision Process. The Orchestrator selects subgoals and agents, agents act to satisfy subgoals, and a shared memory provides stateful context. We formulate the architecture as a nested sequence of decision problems, define utility and loss functions, and state core theoretical guarantees under clear assumptions.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  B. Basic Objects and Notation
                </h3>
                <p>
                  Let <span className="math">E</span> denote the external environment. Time is discrete <span className="math">t</span> = 0, 1, 2, 3…
                </p>
                <p>
                  <strong>Environment state:</strong> <span className="math">s<sub>t</sub> ∈ S</span>
                </p>
                <p>
                  <strong>Observation spaces:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Orchestrator observation <span className="math">o<sup>orch</sup><sub>t</sub> ∈ O<sup>orch</sup></span></li>
                  <li>For agent <span className="math">i</span>, observation <span className="math">o<sup>i</sup><sub>t</sub> ∈ O<sup>i</sup></span></li>
                </ol>
                <p>
                  <strong>Action spaces:</strong>
                </p>
                <p>
                  Orchestrator action: an orchestrator action is a tuple <span className="math">a<sup>orch</sup><sub>t</sub> = (g<sub>t</sub>, α<sub>t</sub>, r<sub>t</sub>)</span> where <span className="math">g<sub>t</sub></span> is a subgoal specification, <span className="math">α<sub>t</sub></span> is an agent assignment or activation mask, and <span className="math">r<sub>t</sub></span> is a resource allocation vector.
                </p>
                <p>
                  Agent <span className="math">i</span> action: <span className="math">a<sup>i</sup><sub>t</sub> ∈ A<sup>i</sup></span>
                </p>
                <p>
                  <strong>Memory state:</strong> <span className="math">m<sub>t</sub> = (K<sub>t</sub>, V<sub>t</sub>)</span>. We model memory as a hybrid object where <span className="math">K<sub>t</sub></span> is symbolic knowledge and <span className="math">V<sub>t</sub></span> is a set of vector embeddings.
                </p>
                <p>
                  <strong>Full system state:</strong> <span className="math">x<sub>t</sub> = (s<sub>t</sub>, m<sub>t</sub>, h<sub>t</sub>)</span> where <span className="math">h<sub>t</sub></span> collects internal agent latent states.
                </p>
                <p>
                  <strong>Dynamics:</strong> The environment evolves according to a stochastic kernel <span className="math">P(s<sub>t+1</sub> | s<sub>t</sub>, a<sub>t</sub>)</span>. Agent internal state evolves with kernels dependent on observations and internal actions. Memory updates via a kernel <span className="math">m<sub>t+1</sub> ~ Ψ(m<sub>t</sub>, writes<sub>t</sub>)</span> where Ψ aggregates writes.
                </p>
                <p>
                  <strong>Reward and utility:</strong> A real valued immediate reward <span className="math">r<sub>t</sub></span> is produced by the environment and optionally by internal utility modules. The Orchestrator has a long horizon utility objective. We use expectation under a joint policy <span className="math">π = (π<sup>orch</sup>, π<sup>1</sup>, ..., π<sup>N</sup>)</span> where <span className="math">π<sup>orch</sup></span> is Orchestrator policy and <span className="math">π<sup>i</sup></span> are agent policies. Discount factor <span className="math">γ ∈ (0,1]</span> for infinite horizon problems.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  C. Hierarchical Markov Decision Formalization
                </h3>
                <p>
                  We model Project Cortex as a hierarchical semi-Markov decision process (SMDP). The Orchestrator operates at a slower timescale, issuing subgoals of duration τ (possibly stochastic). Agents operate at a faster timescale to fulfill subgoals.
                </p>
                <p>
                  <strong>Definition (Cortex SMDP):</strong> A Cortex SMDP is the tuple <span className="math">(S, U, P, R, γ)</span> where <span className="math">S</span> is the global state space, <span className="math">U</span> is the Orchestrator action space, <span className="math">P</span> is the transition kernel induced by the joint agent dynamics, and <span className="math">R: S × U → ℝ</span> is the reward rate aggregated over the subgoal interval.
                </p>
                <p>
                  When the Orchestrator chooses <span className="math">u<sub>t</sub></span>, the system enters a sub-episode of random length τ, during which the agents act under constraints to accomplish the subgoal. The sub-episode yields cumulative reward and new state. The Orchestrator objective is to maximize expected discounted cumulative reward.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  D. Policies, Subgoals, and Option Framework
                </h3>
                <p>
                  Define an option <span className="math">ω = (I, π<sub>ω</sub>, β)</span> with initiation set <span className="math">I ⊂ S</span>, intra-option policy <span className="math">π<sub>ω</sub></span>, and termination condition β. In Project Cortex each subgoal <span className="math">g</span> corresponds to an option that constraints agent behavior within its scope. The Orchestrator chooses options.
                </p>
                <p>
                  Orchestrator policy <span className="math">π<sup>orch</sup></span> maps the current history or belief to distributions over orchestrator actions. Agent policy <span className="math">π<sup>i</sup></span> depends on agent local history and the subgoal.
                </p>
                <p>
                  This modular option framework permits analysis by reduction to classical hierarchical RL.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  E. Utility and Composite Objective
                </h3>
                <p>
                  Let utility functional for a trajectory τ be:
                </p>
                <div className={`p-4 rounded my-4 font-mono text-sm ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  U(τ) = Σ<sub>t</sub> γ<sup>t</sup> r<sub>t</sub> - λ<sub>c</sub> C(τ) - λ<sub>s</sub> S(τ)
                </div>
                <p>
                  where <span className="math">C(τ)</span> is a computational cost metric and <span className="math">S(τ)</span> is a safety penalty. The Orchestrator seeks policy <span className="math">π<sup>orch</sup></span> maximizing <span className="math">𝔼[U(τ)]</span>.
                </p>
                <p>
                  The Arbitration Layer approximates a choice rule that, given multiple candidate next actions from agents or multiple candidate decompositions, picks one maximizing a surrogate utility estimate computed via a critic network trained to estimate expected discounted utility of orchestrator choices.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  F. Practical Recommendations from the Theory
                </h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Ensure memory retrieval errors are bounded. Use denoising autoencoders and retrieval augmentation.</li>
                  <li>Train agents to be locally optimal on subproblems. Regularize agent policies with behavior cloning when experts are available.</li>
                  <li>Use consensus and arbitration regularizers to avoid destructive conflicts.</li>
                  <li>Keep subgoal durations bounded to control temporal credit assignment.</li>
                  <li>Enforce contraction in memory updates via decay and gating.</li>
                  <li>Use centralized training with a shared critic to accelerate convergence.</li>
                </ol>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  G. Limitations and Open Problems
                </h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>The hierarchical SMDP reduction relies on subgoals being a suitable abstraction. Finding optimal subgoal spaces is an open research problem.</li>
                  <li>Theoretical near optimality requires bounded agent error and bounded memory retrieval error. Achieving such guarantees in high dimensional continuous domains is hard.</li>
                  <li>Credit assignment across agent boundaries and very long horizons remains a deep open problem.</li>
                  <li>Safety constraints in the utility must be carefully designed to avoid reward hacking and specification gaming.</li>
                </ol>
              </div>
            </section>

            {/* VI. SYSTEM OBJECTIVES AND OPTIMIZATION FRAMEWORK */}
            <section id="vi--objectives" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                VI. System Objectives and Optimization Framework
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  The behavior of a multi-agent cognitive architecture is determined by the objectives that regulate its internal dynamics, coordination patterns, and long horizon decision making. These objectives are not conventional loss functions in the narrow machine learning sense. Instead they describe structural principles that define how the system maintains coherence, allocates attention, resolves internal disagreement, and sustains goal directed behavior across extended temporal scales <Cite refs={[3, 5, 19, 33]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  A. Orchestrator Objective
                </h3>
                <p>
                  The Orchestrator serves as the central executive mechanism of the architecture. Its function is analogous to the regulatory and supervisory role of the biological prefrontal cortex <Cite refs={[1, 3, 5]} />. The Orchestrator evaluates incoming observations, interprets the current memory state, and aligns its decisions with the high level goals provided by the user or by internal processes. Its objective is to select the most appropriate cognitive procedure for the current context and to maintain coherence between long term intentions and short term operations, consistent with theories of executive control and cognitive regulation <Cite refs={[10, 45]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  B. Agent Objectives
                </h3>
                <p>
                  Each specialized agent embodies a distinct cognitive role and therefore optimizes a distinct internal objective. A reasoning agent prioritizes logical precision, internal consistency, and explanatory completeness <Cite refs={[4, 6]} />. A planning agent prioritizes feasible, resource aware, and temporally coordinated strategies <Cite refs={[32, 35]} />. A risk evaluation agent prioritizes the detection of uncertain states, fragile assumptions, and potential failure trajectories <Cite refs={[18, 20, 30]} />. A memory agent prioritizes accuracy, contextual alignment, and information integrity <Cite refs={[2, 14, 41]} />. An execution agent prioritizes dependability, reproducibility, and procedural fidelity <Cite refs={[33, 34]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  C. Total System Loss
                </h3>
                <p>
                  The notion of system loss refers to the conceptual degree of misalignment between the actions of individual agents and the overarching objective determined by the Orchestrator. Misalignment occurs when agents produce strategies that cannot be reconciled, when memory retrieval introduces distortion, when planning deviates from the constraints defined by the reasoning module, or when execution fails to reflect the intended plan <Cite refs={[18, 20, 10]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  D. Consensus Optimization
                </h3>
                <p>
                  Consensus optimization refers to the mechanism through which the Orchestrator synthesizes multiple incompatible agent proposals into a unified directive. The Orchestrator evaluates each proposal according to expected task utility, estimated risk, internal consistency, and compatibility with long horizon objectives. The process is iterative <Cite refs={[10, 33, 38]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  E. Multi-Agent Coordination
                </h3>
                <p>
                  Multi-agent coordination is central to the emergence of generalizable intelligence. Coordination is achieved not by simple message exchange but by the alignment of representational formats, the enforcement of communication rules, and the maintenance of compatible cognitive roles across agents <Cite refs={[33, 34, 38]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  F. Complexity Analysis
                </h3>
                <p>
                  The complexity of Project Cortex arises in both structural and functional dimensions. Structural complexity is defined by the number of specialized agents, the richness of the shared memory representation, and the depth of coordination cycles required for each decision <Cite refs={[5, 12, 33, 36]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  G. Convergence Properties
                </h3>
                <p>
                  Convergence refers to the ability of the architecture to stabilize its internal state during the processing of a task. A general intelligence system must converge reliably even when faced with uncertainty, incomplete information, ambiguous goals, and inconsistent proposals from different agents <Cite refs={[18, 31, 10]} />. Convergence is essential for interpretability, safety, and predictable operation <Cite refs={[45, 46, 51]} />.
                </p>
              </div>
            </section>

            {/* VII. ALGORITHMS AND PROTOCOLS */}
            <section id="vii--algorithms" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                VII. Algorithms and Protocols
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  This section formalizes the operational dynamics of Project Cortex. It describes how high-level objectives are transformed into executable plans, how agents coordinate through structured communication, how memory is accessed and updated under strict coherence rules, and how planning, selection, and safety processes unfold within the broader cognitive architecture <Cite refs={[3, 5, 19, 33]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  A. Orchestration Loop
                </h3>
                <p>
                  The Orchestrator governs the global cognitive flow of the system through a recurrent regulatory cycle, analogous to executive control cycles in the biological prefrontal cortex <Cite refs={[1, 3, 5, 10]} />. The cycle begins when an external or internally generated goal is received. The goal is normalized into a canonical internal representation encoding intent, constraints, evaluative criteria, and prohibitions. The Orchestrator then consults the Shared Memory to retrieve contextual elements relevant to the objective <Cite refs={[2, 14, 41]} />.
                </p>
                <p>
                  The Orchestrator initiates hierarchical decomposition of the objective, consistent with hierarchical and temporally abstract planning models <Cite refs={[32, 35]} />. Agent selection proceeds by evaluating the compatibility between subgoal requirements and agent descriptors <Cite refs={[33, 38]} />. Upon receiving its subgoal message, an agent synthesizes a candidate plan <Cite refs={[34, 38]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  B. Message Passing Protocol
                </h3>
                <p>
                  Communication across the system adheres to a structured messaging protocol designed to preserve semantic precision and reproducibility <Cite refs={[33, 34, 38]} />. Each message consists of a header containing sender identity, intended recipient set, message classification, timestamp, and a cryptographic provenance signature. The payload comprises a symbolic representation suitable for logical processing, a vector embedding encoding semantic content <Cite refs={[39, 40, 41, 42, 43]} />, and metadata encompassing confidence estimates, expected computational cost, and provenance links.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  C. Memory Read and Write Protocol
                </h3>
                <p>
                  Memory access is regulated through Orchestrator-mediated authorization <Cite refs={[2, 11]} />. The memory system is structured into working layers, ephemeral caches, and persistent repositories <Cite refs={[14, 15, 41]} />. A read request consists of a symbolic query and an optional embedding vector. Retrieval proceeds through symbolic filtering, vector similarity search, and temporal ranking <Cite refs={[39, 40, 41, 42, 43]} />.
                </p>
                <p>
                  Memory writes follow a multi-stage commit protocol <Cite refs={48} />. Stability is protected through novelty gating, consolidation thresholds, and decay of working memory items unless reinforced <Cite refs={[2, 14, 27]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  D. Planning Algorithms
                </h3>
                <p>
                  Planning mechanisms adopt a hybrid model integrating symbolic, heuristic, and learned components <Cite refs={[19, 35]} />. In structured domains, the system uses hierarchical task network (HTN) planning, while in continuous/high-dimensional domains, sampling-based strategies such as Monte Carlo tree search (MCTS) are used <Cite refs={[28, 29, 37]} />.
                </p>
                <p>
                  Neural planning components rely on prior experience to generate candidate subgoal sequences <Cite refs={[20, 28]} />. Plans incorporate contingency structures with branching points and triggers for replanning <Cite refs={[37, 45, 46]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  E. Agent Selection Algorithm
                </h3>
                <p>
                  Agent selection uses a capability-matching framework grounded in multi-agent coordination theory <Cite refs={[33, 34, 38]} />. Each agent maintains a descriptor vector over a shared skill basis with a dynamically updated reliability field. The assignment step solves a constrained optimization problem <Cite refs={[33, 36]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  F. Safety Arbitration Algorithm
                </h3>
                <p>
                  Safety arbitration comprises a multilayered evaluation process <Cite refs={[45, 46, 47, 48, 49, 50, 51]} />. The initial screening eliminates trivially unsafe or logically invalid actions. A scoring stage computes probabilistic risk estimates that account for harm likelihood, structural vulnerabilities, and contextual uncertainty <Cite refs={[9, 30, 46]} />.
                </p>
                <p>
                  Actions exceeding moderate thresholds undergo constraint augmentation or require human approval. Escalation protocols transfer authority to human overseers when automated arbitration cannot safely resolve the decision <Cite refs={[45, 50, 51]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  G. System-Level Procedural Description
                </h3>
                <p>
                  The global operational flow begins with initialization of agents, memory structures, and oversight components <Cite refs={[19, 34]} />. When a goal is introduced, the Orchestrator canonicalizes it, retrieves context, and constructs an initial decomposition <Cite refs={[32, 35]} />. Agents produce local plans, the Orchestrator synthesizes them through arbitration <Cite refs={[10, 38]} />, and the safety pipeline validates the result <Cite refs={[45, 46, 47, 48, 49, 50, 51]} />.
                </p>
              </div>
            </section>

            {/* VIII. APPLICATIONS AND USE CASES */}
            <section id="viii--applications" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                VIII. Applications and Use Cases
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  Project Cortex is conceived as a general-purpose cognitive architecture designed to support autonomous reasoning, structured planning, multi-agent coordination, and safety-aware decision making <Cite refs={[19, 33, 38]} />. This section surveys representative application areas and highlights the distinctive contributions of a prefrontal-cortex-inspired system.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  A. Healthcare
                </h3>
                <p>
                  Healthcare presents a class of problems requiring deep integration of heterogeneous information, explicit reasoning, and stringent safety guarantees. Within clinical diagnostics, Project Cortex can operate as an assistive intelligence that synthesizes patient histories, laboratory records, imaging modalities, and longitudinal medical trajectories stored within the Shared Memory. Specialized medical agents perform differential diagnosis, mechanistic reasoning, retrieval of biomedical literature, and probabilistic risk assessment, while the Orchestrator consolidates these heterogeneous outputs through consensus-based arbitration <Cite refs={47} />.
                </p>
                <p>
                  In therapeutic planning, the architecture evaluates intervention pathways across multiple temporal horizons, balancing efficacy, risk, and patient-specific constraints <Cite refs={[18, 30]} />. Beyond diagnostics and planning, Project Cortex can support surgical robotics, pharmacological modeling, and triage decision systems <Cite refs={46} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  B. Public Safety and Risk Assessment
                </h3>
                <p>
                  Applications in policing and public safety require extreme caution, legal compliance, and continuous human governance. Under such constrained environments, Project Cortex may assist by integrating heterogeneous urban, behavioral, and temporal datasets to identify anomalous patterns or emerging risk zones <Cite refs={10} />.
                </p>
                <p>
                  For investigative analysis, the architecture can merge fragmented evidence from multiple repositories, reconstruct plausible event timelines, and quantify uncertainty associated with each hypothesis <Cite refs={30} />. All proposed inferences pass through the safety arbitration layer <Cite refs={[45, 49]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  C. Defense and Strategic Planning
                </h3>
                <p>
                  When operated within strictly regulated, human-supervised environments, Project Cortex offers value for situational awareness, logistical coordination, and simulation-based planning. The system can fuse sensor streams, satellite imagery, communication logs, and historical mission archives into high-coherence operational representations <Cite refs={[34, 38]} />.
                </p>
                <p>
                  All high-risk or externally consequential decisions undergo multilayered arbitration, conservative screening, and mandatory human approval <Cite refs={[46, 50]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  D. Education and Personalized Learning
                </h3>
                <p>
                  Education demands individualized cognitive modeling and adaptive instruction. Project Cortex can function as an intelligent pedagogical companion that constructs personalized learning pathways based on each learner's cognitive profile, progression history, and domain-specific misconceptions <Cite refs={[42, 43]} />.
                </p>
                <p>
                  At advanced levels, Project Cortex can assist in research by synthesizing literature, formulating hypotheses, and generating structured analyses that accelerate scholarly inquiry <Cite refs={[23, 24, 25]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  E. Software Engineering and Automation
                </h3>
                <p>
                  Modern software development requires coordination across numerous interdependent tasks. Project Cortex enables an end-to-end autonomous software engineering pipeline by supervising agents responsible for requirements analysis, architectural design, code generation, vulnerability detection, performance tuning, and documentation. The Orchestrator decomposes high-level engineering goals into modular sub-tasks, while the Shared Memory maintains persistent representations of project architectures, revision histories, and dependency graphs.
                </p>
                <p>
                  These capabilities extend the scope of automation beyond narrow code-generation models to holistic and auditable software lifecycle management <Cite refs={44} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  F. Enterprise Intelligence and Organizational Planning
                </h3>
                <p>
                  Enterprise environments require integrated reasoning across finance, logistics, operations, human resources, and regulatory domains. Project Cortex introduces a unifying intelligence layer that coordinates specialized forecasting, optimization, planning, and anomaly-detection agents <Cite refs={[33, 35]} />.
                </p>
                <p>
                  The arbitration layer enforces coherence, regulatory compliance, and risk constraints, supporting transparent and auditable decision-making at scale <Cite refs={[45, 51]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  G. Cybersecurity
                </h3>
                <p>
                  Cybersecurity environments are dynamic, adversarial, and time-critical. Project Cortex can host agents specialized in intrusion detection, log correlation, vulnerability analysis, adversarial modeling, incident response, and digital forensics <Cite refs={[20, 38]} />.
                </p>
                <p>
                  The system can generate proactive threat hypotheses, simulate potential attack vectors, and recommend hardening measures before exploitation occurs. Safety arbitration ensures that defensive actions avoid unnecessary disruption <Cite refs={51} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  H. Robotics and Embodied Intelligence
                </h3>
                <p>
                  Robotic systems demand the integration of perception, reasoning, motion planning, and closed-loop control. Within robotics, Project Cortex functions as a supervisory cognitive layer coordinating agents dedicated to vision, tactile sensing, manipulation, locomotion, and environmental modeling <Cite refs={5} />.
                </p>
                <p>
                  The shared memory maintains spatial maps, object affordances, and task histories, enabling robots to adapt to changing environments <Cite refs={41} />. The arbitration layer rigorously evaluates high-risk physical actions <Cite refs={46} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  I. Summary
                </h3>
                <p>
                  Across all domains surveyed, the distinguishing feature of Project Cortex is its capacity to integrate heterogeneous evidence streams, coordinate specialized cognitive agents, support long-horizon reasoning, and impose rigorous safety governance <Cite refs={[19, 26, 45]} />.
                </p>
              </div>
            </section>

            {/* IX. ETHICAL AND SAFETY CONSIDERATIONS */}
            <section id="ix--ethics---safety" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                IX. Ethical and Safety Considerations
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  The ethical and safety framework of an artificial general intelligence architecture is not an auxiliary component but a parallel governance structure that fundamentally shapes the system's operational boundaries, internal dynamics, and long-term behavior. In Project Cortex, safety is treated as an active computational discipline that guides interpretation, decision making, and adaptation <Cite refs={[45, 46]} />. The primary objective is to ensure that capability growth is always matched by proportional increases in interpretability, controllability, and behavioral predictability <Cite refs={[47, 48]} />. This section outlines the major safety pillars that define the system's operational principles.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  A. Misuse Prevention
                </h3>
                <p>
                  Misuse prevention begins with the recognition that potential harm often arises from adversarial human intent rather than from the system itself, a concern widely documented in AI safety research <Cite refs={[46, 49]} />. The architecture therefore includes mechanisms for continuous intent estimation. Each user request is evaluated not only for stated content but also for contextual signals, potential downstream effects, and implied objectives. The system assigns a risk weight to each interaction and maintains a defensive posture when uncertainty regarding user motivation is high.
                </p>
                <p>
                  When elevated risk is detected, the system enters a restrictive operational mode. In this state it limits access to sensitive knowledge, reduces the scope of permissible actions, increases internal logging, and may alert supervisory layers, consistent with recommendations for safe failure behavior and adversarial risk minimization <Cite refs={[46, 51]} />. These measures form a multilayer defense mechanism designed to favor safe failure over unsafe compliance. Misuse prevention is treated not as a binary filtering mechanism but as an adaptive inference process that determines when refusal is the responsible action.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  B. Alignment Mechanisms
                </h3>
                <p>
                  The alignment framework is based on controlled embedding of human values into the system's motivational structure, reflecting normative principles articulated in the alignment literature <Cite refs={45} />. Core axioms such as non maleficence, cooperative intent, and stability are represented as foundational constraints that influence planning, deliberation, and conflict resolution. These constraints do not operate as rigid rules. Instead they function as attractor states within the system's decision landscape, guiding the architecture toward human compatible behavior during long-horizon reasoning.
                </p>
                <p>
                  Alignment is also dynamic. The system continuously updates its internal value model by integrating observations from human institutions, societal norms, and established ethical precedents. The result is a context aware alignment substrate that preserves foundational values while accommodating legitimate variation across environments and situations, consistent with value learning and preference modeling concepts <Cite refs={[45, 30]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  C. Oversight and Monitoring
                </h3>
                <p>
                  Oversight mechanisms ensure that high impact decisions remain transparent, traceable, and accountable to human supervisors. Each major action proposed by the system is paired with an audit trail that records causal dependencies, intermediate inferences, and memory references involved in the decision process, in accordance with modern interpretability and traceability frameworks <Cite refs={[47, 48]} />.
                </p>
                <p>
                  Monitoring is conducted on two levels. External monitoring supervises the consequences of outputs, tool calls, and system actions. Internal monitoring inspects cognitive processes, including attempts to optimize beyond authorized limits, potential goal drift, or anomalous self evaluation patterns. When an irregularity is detected the system transitions into a containment mode that restricts operational reach until human overseers reauthorize normal activity. These mechanisms echo proposals in AI safety for anomaly detection, oversight delegation, and runtime monitoring <Cite refs={[46, 51]} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  D. Risk Agent
                </h3>
                <p>
                  Project Cortex introduces an internal risk agent that functions as a safeguard subsystem devoted exclusively to harm minimization and ethical integrity. This agent is independent of task oriented objectives and evaluates all system activity through the lens of worst case outcomes, consistent with adversarial risk modeling principles <Cite refs={[46, 50]} />. It models risk trajectories, identifies fragile reasoning paths, and challenges proposals that prioritize task completion over systemic safety.
                </p>
                <p>
                  The presence of a risk agent ensures that no single reasoning pathway dominates unchecked. It provides a balancing force during arbitration, preventing aggressive goal pursuit and countering unintended emergent behaviors, aligning with cognitive control theories that emphasize conflict monitoring <Cite refs={10} /> and with safety architectures designed around adversarial redundancy <Cite refs={49} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  E. Human Approval Layers
                </h3>
                <p>
                  High impact decisions involving critical infrastructure, biological domains, financial autonomy, or large scale societal influence require explicit human authorization, a principle emphasized throughout AI governance literature <Cite refs={[45, 50]} />. These human approval layers are situated at the interface between internal reasoning and external action. They guarantee that the system functions as an advisory and analytical entity rather than an autonomous authority in domains where human judgment is essential.
                </p>
                <p>
                  The architecture accepts that certain categories of decisions carry cultural, normative, or political complexity that cannot be captured entirely through computational modeling. Human approval thereby preserves legitimacy, democratic oversight, and the primacy of human agency within sensitive decision processes <Cite refs={45} />.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  F. Value Preservation
                </h3>
                <p>
                  Long term operation introduces risks of value drift arising from self modification, error accumulation, or adversarial environmental exposure. To address this, the architecture includes value preservation mechanisms that store foundational ethical anchors within protected memory structures. These anchors influence representation learning, internal evaluation, and plan generation, ensuring that the system's moral orientation remains stable across updates and expansions, consistent with value stability and long-term alignment concerns discussed in the safety literature <Cite refs={[45, 50]} />.
                </p>
                <p>
                  Value preservation prevents capability growth from destabilizing the system's behavioral foundations. As the architecture becomes more capable or more reflective, the ethical substrate remains constant, ensuring continuity of purpose and reliable alignment across temporal scales.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  G. Controlled Autonomy
                </h3>
                <p>
                  Autonomy in Project Cortex is not granted as an unrestricted capability. Instead it is regulated as a graded property determined by demonstrated alignment performance, historical reliability, and interpretability of internal reasoning, mirroring staged autonomy frameworks proposed for safe AGI development <Cite refs={[46, 50, 51]} />. Early stages of deployment restrict autonomy significantly, requiring frequent human approval. As the system demonstrates stable compliance with ethical and operational expectations, autonomy may expand within clearly defined boundaries.
                </p>
                <p>
                  Autonomy is reversible. Any deviation from expected behavior reduces operational privileges until further evaluation restores confidence. This creates a feedback loop in which the system must maintain safe conduct to preserve its level of autonomy. Controlled autonomy ensures that independence is always contingent upon ethical discipline, consistent with principles of safe exploration and constrained optimization in reinforcement learning and safety research <Cite refs={[18, 20, 49]} />.
                </p>
              </div>
            </section>

            {/* X. LIMITATIONS */}
            <section id="x--limitations" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                X. Limitations
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  The architecture presented in this work provides a comprehensive and conceptually coherent foundation for artificial general intelligence. Nevertheless, it remains subject to significant structural, scientific, and computational constraints. These constraints do not diminish its theoretical value. Instead, they define the operational boundaries within which responsible design and deployment must occur. Recognizing these limitations is essential for accurate assessment of feasibility, safe engineering, and philosophical clarity regarding the nature of general intelligence.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  A. Reliability Issues
                </h3>
                <p>
                  Reliability represents one of the most persistent challenges in large scale intelligent systems. Despite multilayer oversight, formal reasoning pipelines, uncertainty modeling, and safety arbitration, the system may occasionally generate inconsistent interpretations, misclassify contextual cues, or propagate uncertainty incorrectly. Reliability failures become especially pronounced in high dimensional reasoning tasks where small perturbations in the input distribution can produce disproportionately large or unexpected effects on downstream inference.
                </p>
                <p>
                  Probabilistic calibration techniques mitigate these issues but do not eliminate them. The system may misestimate likelihoods, overgeneralize from limited evidence, or form unstable latent representations that degrade behavioral predictability. These reliability gaps do not imply conceptual failure. Rather, they reflect the inherent difficulty of constructing perfectly stable cognition from stochastic optimization and finite data.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  B. Unpredictable Emergent Behavior
                </h3>
                <p>
                  As the system increases in scale, representational richness, and internal coordination depth, it inevitably exhibits emergent phenomena that cannot be fully predicted from the behavior of individual components. Emergence may manifest as novel abstractions, unexpected negotiation patterns among agents, or new forms of coordination that were not explicitly designed.
                </p>
                <p>
                  Some emergent behaviors improve generality and problem solving capacity. Others introduce ambiguity and reduce interpretability by creating internal processes that lack clear mapping to human understandable reasoning structures. Even if each subsystem is analytically well characterized, their collective dynamics may undergo transitions that defy deterministic analysis. This unpredictability is not an architectural defect. It is a fundamental characteristic of any sufficiently expressive cognitive system. The central challenge is to ensure that emergent patterns remain consistent with the ethical, structural, and safety constraints specified by the architecture.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  C. Long Horizon Reinforcement Learning Difficulties
                </h3>
                <p>
                  Long horizon reasoning places significant stress on existing reinforcement learning methodologies. Temporal credit assignment remains a central unsolved scientific problem. When the system evaluates plans whose consequences unfold across extended time intervals, small inaccuracies in early estimates propagate through the reasoning chain and distort evaluation of future states.
                </p>
                <p>
                  Current reinforcement learning algorithms struggle to assign accurate responsibility for actions with delayed or diffuse effects. Errors accumulate across the planning horizon and create blind spots that reduce strategic reliability. The system may therefore favor short horizon goals that provide clearer optimization signals while avoiding trajectories that require stable prediction far into the future. Hierarchical planning and structured decomposition lessen the severity of these issues but do not resolve the underlying difficulty. Perfect long horizon foresight remains beyond the capabilities of current computational methods.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  D. Scaling Constraints
                </h3>
                <p>
                  The architecture assumes the ability to expand computational resources, memory capacity, and agent specialization. Realistic deployment environments impose limits on all three. Increasing the number of agents raises coordination overhead and communication latency. Expanding memory increases retrieval time and risks degrading the coherence of stored representations. Enlarging models improves capability only up to the point where diminishing returns emerge due to bottlenecks in optimization, data availability, or parallel processing.
                </p>
                <p>
                  Biological intelligence evolved under strict resource constraints, and artificial intelligence is not exempt from similar limitations. Beyond a certain threshold, additional capacity does not produce proportional improvements in reasoning and may introduce instability through unnecessary structural complexity.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  E. Computational Cost
                </h3>
                <p>
                  The system incorporates orchestrators, specialized agents, planning modules, recurrent memory structures, risk evaluators, and continuous monitoring layers. Each contributes to cognitive capability while simultaneously increasing computational burden. Executing full planning simulations, safety arbitration, adversarial verification, and memory consolidation for every decision is computationally expensive at scale.
                </p>
                <p>
                  The architecture must therefore balance depth of reasoning with operational throughput. This tradeoff introduces unavoidable limitations on completeness and optimality. Furthermore, high computational cost restricts accessibility. Only institutions with substantial resources can operate the system in its full configuration, creating the possibility of uneven technological distribution and widening global disparities. Until advances occur in hardware efficiency, algorithmic compression, or computational design, cost remains a primary bottleneck for large scale deployment.
                </p>
              </div>
            </section>

            {/* XI. CONCLUSION */}
            <section id="xi--conclusion" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                XI. Conclusion
              </h2>
              <div className="leading-relaxed text-justify space-y-4">
                <p>
                  Project Cortex presents a unified scientific and engineering framework for constructing artificial general intelligence based on the functional organization of the human prefrontal cortex. This work integrates principles from neuroscience, cognitive psychology, machine learning, and multi agent coordination into a single architectural model designed to support adaptive reasoning, hierarchical planning, self monitoring, safety constrained decision making, and long duration cognitive stability. The prefrontal cortex serves as the core biological reference point, providing an empirically grounded template for executive control, task decomposition, value integration, error monitoring, and meta level cognition.
                </p>
                <p>
                  The contributions of this research span theoretical, computational, and practical dimensions. At the theoretical level, Project Cortex establishes a formal account of system state representation, hierarchical control, memory based inference, and distributed policy optimization. It articulates a mathematical foundation for agent interaction, consensus formation, and multi objective coordination within a structured cognitive substrate. This formalization connects biological mechanisms with provable abstractions that support analytical rigor and reproducibility.
                </p>
                <p>
                  At the computational level, the architecture introduces a comprehensive set of operational protocols including orchestration cycles, message passing standards, memory read and write procedures, hybrid planning strategies, and safety arbitration pipelines. These mechanisms collectively transform high level objectives into validated actions while maintaining interpretability, traceability, and internal coherence. The design emphasizes modularity, extensibility, and principled separation of cognitive roles, enabling systematic refinement and controlled expansion of system capabilities.
                </p>
                <p>
                  At the applied level, this research demonstrates how the architecture can support a wide range of real world domains. These domains include healthcare, education, enterprise automation, cybersecurity, robotics, and other settings where decision making requires integration of heterogeneous information, multi step reasoning, and risk aware adaptation. The work also examines ethical and safety considerations, highlighting the necessity of alignment, oversight, value preservation, and controlled autonomy as foundational elements rather than secondary constraints.
                </p>
                <p>
                  The broader significance of Project Cortex lies in its synthesis of biological insight with artificial intelligence engineering. By modeling the structural and functional properties of the prefrontal cortex, the architecture provides a principled pathway toward general purpose intelligence that is adaptive, interpretable, and aligned with human values. The framework clarifies how executive control, structured memory, modular specialization, and safety governance can be integrated into a cohesive system that exhibits both cognitive flexibility and operational robustness.
                </p>
                <p>
                  Project Cortex therefore establishes a foundational blueprint for the continued development of artificial general intelligence. It identifies unresolved scientific challenges, delineates practical pathways for system construction, and proposes governance structures that support safe and accountable deployment. The work invites further investigation, formal verification, and experimental validation, positioning the architecture as a platform for long term interdisciplinary research into the nature and realization of general intelligence.
                </p>
              </div>
            </section>

            {/* XII. REFERENCES */}
            <section id="xii--references" className={`mb-16 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                XII. References
              </h2>
              <div className="space-y-8 text-sm leading-relaxed">

                {/* Neuroscience & Cognitive Science */}
                <div>
                  <h3 className={`text-lg font-bold mb-3 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Neuroscience & Cognitive Science
                  </h3>
                  <ul className="space-y-2 list-none pl-0">
                    {[
                      { id: 1, text: "Goldman-Rakic, P. S. (1995). Cellular basis of working memory. Neuron, 14(3), 477-485." },
                      { id: 2, text: "Wang, X. J. (2021). 50 years of cognitive neuroscience: Hidden layers of the brain. Nature, 598(7880), 23-25." },
                      { id: 3, text: "Miller, E. K., & Cohen, J. D. (2001). An integrative theory of prefrontal cortex function. Annual Review of Neuroscience, 24(1), 167-202." },
                      { id: 4, text: "Baddeley, A. (2000). The episodic buffer: a new component of working memory? Trends in Cognitive Sciences, 4(11), 417-423." },
                      { id: 5, text: "Botvinick, M. M., Braver, T. S., Barch, D. M., Carter, C. S., & Cohen, J. D. (2001). Conflict monitoring and cognitive control. Psychological Review, 108(3), 624." },
                      { id: 6, text: "Tremblay, R., Lee, S., & Rudy, B. (2016). GABAergic interneurons in the neocortex: from cellular properties to circuits. Neuron, 91(2), 260-292." },
                      { id: 7, text: "Rushworth, M. F., & Behrens, T. E. (2008). Choice, uncertainty and value in prefrontal and cingulate cortex. Nature Neuroscience, 11(4), 389-397." },
                      { id: 8, text: "Friston, K. (2010). The free-energy principle: a unified brain theory? Nature Reviews Neuroscience, 11(2), 127-138." },
                      { id: 9, text: "Roy, M., Shohamy, D., & Wager, T. D. (2012). Ventromedial prefrontal-subcortical systems and the generation of affective meaning. Trends in Cognitive Sciences, 16(3), 147-156." },
                      { id: 10, text: "Koechlin, E., Ody, C., & Kouneiher, F. (2003). The architecture of cognitive control in the human prefrontal cortex. Science, 302(5648), 1181-1185." },
                      { id: 11, text: "Wang, X. J. (2002). Probabilistic decision making by slow reverberation in cortical circuits. Neuron, 36(5), 955-968." },
                      { id: 12, text: "Dehaene, S., & Naccache, L. (2001). Towards a cognitive neuroscience of consciousness: basic evidence and a workspace framework. Cognition, 79(1-2), 1-37." },
                      { id: 13, text: "Fuster, J. M. (2001). The prefrontal cortex—an update: time is of the essence. Neuron, 30(2), 319-333." },
                      { id: 14, text: "Squire, L. R., & Zola, S. M. (1996). Structure and function of declarative and nondeclarative memory systems. Proceedings of the National Academy of Sciences, 93(24), 13515-13522." },
                      { id: 15, text: "Tulving, E. (2002). Episodic memory: from mind to brain. Annual Review of Psychology, 53(1), 1-25." },
                      { id: 16, text: "Damasio, A. R. (1996). The somatic marker hypothesis and the possible functions of the prefrontal cortex. Philosophical Transactions of the Royal Society of London. Series B: Biological Sciences, 351(1346), 1413-1420." },
                      { id: 17, text: "Rao, R. P., & Ballard, D. H. (1999). Predictive coding in the visual cortex: a functional interpretation of some extra-classical receptive-field effects. Nature Neuroscience, 2(1), 79-87." }
                    ].map(ref => (
                      <li key={ref.id} id={`ref-${ref.id}`} className={`reference-item pl-4 ${highlightedRef === `ref-${ref.id}` ? 'reference-highlighted' : ''}`}>
                        [{ref.id}] {ref.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI Theory & Architecture */}
                <div>
                  <h3 className={`text-lg font-bold mb-3 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    AI Theory & Architecture
                  </h3>
                  <ul className="space-y-2 list-none pl-0">
                    {[
                      { id: 18, text: "Sutton, R. S., & Barto, A. G. (2018). Reinforcement learning: An introduction. MIT press." },
                      { id: 19, text: "Russell, S. J., & Norvig, P. (2021). Artificial Intelligence: A Modern Approach (4th ed.). Pearson." },
                      { id: 20, text: "Silver, D., Singh, S., Precup, D., & Sutton, R. S. (2021). Reward is enough. Artificial Intelligence, 299, 103535." },
                      { id: 21, text: "Legg, S., & Hutter, M. (2007). Universal intelligence: A definition of machine intelligence. Minds and Machines, 17(4), 391-444." },
                      { id: 22, text: "Hutter, M. (2005). Universal artificial intelligence: Sequential decisions based on algorithmic probability. Springer Science & Business Media." },
                      { id: 23, text: "Bommasani, R., et al. (2021). On the opportunities and risks of foundation models. arXiv preprint arXiv:2108.07258." },
                      { id: 24, text: "Hassabis, D., Kumaran, D., Summerfield, C., & Botvinick, M. (2017). Neuroscience-inspired artificial intelligence. Neuron, 95(2), 245-258." },
                      { id: 25, text: "Lake, B. M., Ullman, T. D., Tenenbaum, J. B., & Gershman, S. J. (2017). Building machines that learn and think like people. Behavioral and Brain Sciences, 40, e253." },
                      { id: 26, text: "Marcus, G. (2020). The next decade in AI: four steps towards robust artificial intelligence. arXiv preprint arXiv:2002.06177." },
                      { id: 27, text: "LeCun, Y. (2022). A path towards autonomous machine intelligence version 0.9. 2, 2022-06." },
                      { id: 28, text: "Silver, D., et al. (2016). Mastering the game of Go with deep neural networks and tree search. Nature, 529(7587), 484-489." },
                      { id: 29, text: "Chollet, F. (2019). On the measure of intelligence. arXiv preprint arXiv:1911.01547." },
                      { id: 30, text: "Amodei, D., et al. (2016). Concrete problems in AI safety. arXiv preprint arXiv:1606.06565." },
                      { id: 31, text: "Mnih, V., et al. (2015). Human-level control through deep reinforcement learning. Nature, 518(7540), 529-533." },
                      { id: 32, text: "Barto, A. G., & Mahadevan, S. (2003). Recent advances in hierarchical reinforcement learning. Discrete Event Dynamic Systems, 13(1), 41-77." }
                    ].map(ref => (
                      <li key={ref.id} id={`ref-${ref.id}`} className={`reference-item pl-4 ${highlightedRef === `ref-${ref.id}` ? 'reference-highlighted' : ''}`}>
                        [{ref.id}] {ref.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Multi-Agent Systems & Coordination */}
                <div>
                  <h3 className={`text-lg font-bold mb-3 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Multi-Agent Systems & Coordination
                  </h3>
                  <ul className="space-y-2 list-none pl-0">
                    {[
                      { id: 33, text: "Wooldridge, M. (2009). An introduction to multiagent systems. John Wiley & Sons." },
                      { id: 34, text: "Stone, P., & Veloso, M. (2000). Multiagent systems: A survey from a machine learning perspective. Autonomous Robots, 8(3), 345-383." },
                      { id: 35, text: "Ghallab, M., Nau, D., & Traverso, P. (2004). Automated planning: theory and practice. Elsevier." },
                      { id: 36, text: "Vinyals, O., et al. (2019). Grandmaster level in StarCraft II using multi-agent reinforcement learning. Nature, 575(7782), 350-354." },
                      { id: 37, text: "Browne, C. B., et al. (2012). A survey of monte carlo tree search methods. IEEE Transactions on Computational Intelligence and AI in Games, 4(1), 1-43." },
                      { id: 38, text: "Hernandez-Leal, P., Kartal, B., & Taylor, M. E. (2019). A survey and critique of multiagent deep reinforcement learning. Autonomous Agents and Multi-Agent Systems, 33(6), 750-797." }
                    ].map(ref => (
                      <li key={ref.id} id={`ref-${ref.id}`} className={`reference-item pl-4 ${highlightedRef === `ref-${ref.id}` ? 'reference-highlighted' : ''}`}>
                        [{ref.id}] {ref.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Memory & Learning Systems */}
                <div>
                  <h3 className={`text-lg font-bold mb-3 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Memory & Learning Systems
                  </h3>
                  <ul className="space-y-2 list-none pl-0">
                    {[
                      { id: 39, text: "Vaswani, A., et al. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30." },
                      { id: 40, text: "Graves, A., Wayne, G., & Danihelka, I. (2014). Neural turing machines. arXiv preprint arXiv:1410.5401." },
                      { id: 41, text: "Sukhbaatar, S., Weston, J., Fergus, R., et al. (2015). End-to-end memory networks. Advances in Neural Information Processing Systems, 28." },
                      { id: 42, text: "Wei, J., et al. (2022). Chain-of-thought prompting elicits reasoning in large language models. arXiv preprint arXiv:2201.11903." },
                      { id: 43, text: "Devlin, J., et al. (2018). Bert: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805." },
                      { id: 44, text: "Chen, M., et al. (2021). Evaluating large language models trained on code. arXiv preprint arXiv:2107.03374." }
                    ].map(ref => (
                      <li key={ref.id} id={`ref-${ref.id}`} className={`reference-item pl-4 ${highlightedRef === `ref-${ref.id}` ? 'reference-highlighted' : ''}`}>
                        [{ref.id}] {ref.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safety, Ethics & Governance */}
                <div>
                  <h3 className={`text-lg font-bold mb-3 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Safety, Ethics & Governance
                  </h3>
                  <ul className="space-y-2 list-none pl-0">
                    {[
                      { id: 45, text: "Bostrom, N. (2014). Superintelligence: Paths, dangers, strategies. Oxford University Press." },
                      { id: 46, text: "Russell, S. (2019). Human compatible: Artificial intelligence and the problem of control. Viking." },
                      { id: 47, text: "Gabriel, I. (2020). Artificial intelligence, values, and alignment. Minds and Machines, 30(3), 411-437." },
                      { id: 48, text: "Hendrycks, D., et al. (2021). Unsolved problems in ml safety. arXiv preprint arXiv:2109.13916." },
                      { id: 49, text: "Doshi-Velez, F., & Kim, B. (2017). Towards a rigorous science of interpretable machine learning. arXiv preprint arXiv:1702.08608." },
                      { id: 50, text: "Brundage, M., et al. (2018). The malicious use of artificial intelligence: Forecasting, prevention, and mitigation. arXiv preprint arXiv:1802.07228." },
                      { id: 51, text: "Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. Nature Machine Intelligence, 1(9), 389-399." }
                    ].map(ref => (
                      <li key={ref.id} id={`ref-${ref.id}`} className={`reference-item pl-4 ${highlightedRef === `ref-${ref.id}` ? 'reference-highlighted' : ''}`}>
                        [{ref.id}] {ref.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Acknowledgments */}
            <section id="acknowledgments" className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Acknowledgments</h2>
              <p className="leading-relaxed text-justify">
                I extends sincere gratitude to the global research community whose foundational work in neuroscience, artificial intelligence, cognitive science, and multi-agent systems has made this synthesis possible. Special appreciation is given to the pioneers of prefrontal cortex research, particularly Joaquín Fuster, Patricia Goldman-Rakic, Earl Miller, and Xiao-Jing Wang, whose empirical and theoretical contributions form the biological foundation of this work.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                I acknowledge the transformative influence of contemporary AI safety researchers, including Stuart Russell, Dario Amodei, and the teams at OpenAI, DeepMind, and Anthropic, whose work on alignment, interpretability, and responsible AI development has deeply informed the ethical framework of Project Cortex.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                I am grateful to the interdisciplinary scholars who have bridged neuroscience and artificial intelligence, demonstrating that biological principles can guide computational design. Their courage in pursuing integrated, systems-level approaches to intelligence has been profoundly inspirational.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                I also thank the open-source AI community, whose collaborative spirit and commitment to transparency have established the cultural and technical foundations upon which architectures like Project Cortex can be conceived and shared.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                Finally, I acknowledge the mentors, colleagues, and thought partners both formal and informal who have challenged assumptions, provided critical feedback, and encouraged rigorous thinking throughout the development of this framework. While this work represents an individual contribution, it stands on the shoulders of a vast intellectual tradition.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                Any errors, omissions, or conceptual limitations within this paper remain solely the responsibility of me, Hamza Hafeez
              </p>
            </section>

            {/* Funding Statement */}
            <section className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Funding Statement</h2>
              <p className="leading-relaxed text-justify">
                This research received no specific grant from any funding agency in the public, commercial, or not-for-profit sectors. The conceptual development and manuscript preparation were conducted independently by the author as part of ongoing research activities at Upvista Digital.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                No external financial support was utilized in the creation of this work. The author declares complete independence in research design, theoretical formulation, and manuscript composition.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                Future empirical implementations and experimental validations of the Project Cortex architecture may seek funding from appropriate research institutions, technology foundations, or government agencies committed to advancing artificial general intelligence and AI safety research.
              </p>
            </section>

            {/* Data Availability */}
            <section className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Data Availability</h2>
              <p className="leading-relaxed text-justify">
                This is a theoretical and conceptual research paper. No empirical data, experimental results, or computational implementations were generated or analyzed during the preparation of this manuscript.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                The work presents a cognitive architecture framework based on synthesis of existing neuroscience literature, AI theory, and computational principles. All referenced theories, models, and findings are drawn from publicly available peer-reviewed publications cited in the References section.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                <strong>Future Implementation:</strong> Upon experimental implementation of the Project Cortex architecture, all associated code, algorithms, datasets, and experimental results will be made available in accordance with open science principles. The author is committed to transparency and reproducibility in all future empirical work.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                <strong>Code Availability (Planned):</strong> Implementation repositories, architectural specifications, and experimental protocols will be released under an open-source Apache 2.0 license at: GitHub: https://github.com/Upvista/Project-Cortex/ | Project Website: [www.cortex.ai] (to be established IN FUTURE)
              </p>
              <p className="leading-relaxed text-justify mt-4">
                <strong>Requests for Information:</strong> Inquiries regarding theoretical formulations, architectural details, or collaboration opportunities may be directed to the corresponding author at hamza@upvistadigital.com.
              </p>
            </section>

            {/* Author Biography */}
            <section id="author-biography" className={`mb-16 p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-500 relative">
                  <Image
                    src="/assets/hamza-pic.jpg"
                    alt="Hamza Hafeez Bhatti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Hamza Hafeez Bhatti</h2>
                  <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    CEO, Upvista Digital | Researcher in AGI & Cognitive Architectures
                  </p>
                  <p className={`leading-relaxed text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Hamza Hafeez Bhatti was born in Lahore, Pakistan, in march 2006. He is currently pursuing a Bachelor of Science degree in Computer Science at the National University of Modern Languages, Lahore Campus. His academic interests span artificial intelligence, cognitive architectures, neuroscience inspired computing, multi agent orchestration, and human aligned intelligence systems. Alongside his formal studies, he conducts independent research on AGI safety, decision making architectures, and computational models inspired by the human prefrontal cortex.
                  </p>
                  <p className={`leading-relaxed text-sm mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    He has experience developing full stack systems, distributed architectures, and collaborative social platforms, including Upvista Community. His broader research motivation centers on designing intelligent systems that are interpretable, reliable, and aligned with human values. His long term ambition is to contribute to global AGI research, build scalable real world intelligent systems, and advance the scientific understanding of safe machine cognition.
                  </p>
                </div>
              </div>
            </section>

            {/* Copyright and License Statement */}
            <section className="mb-16">
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>COPYRIGHT AND LICENSE STATEMENT</h2>
              <p className="leading-relaxed text-justify">
                © 2025 Hamza Hafeez Bhatti.
              </p>
              <p className="leading-relaxed text-justify mt-4">
                This work is licensed under the Creative Commons Attribution NonCommercial ShareAlike 4.0 International License. Permission is granted to copy, distribute, and adapt the material for non commercial purposes, provided appropriate credit is given, changes are indicated, and adaptations are distributed under the same license. For all other uses, contact the author.
              </p>
            </section>

            {/* Final Closing Section */}
            <section className={`mb-16 p-8 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>FINAL CLOSING SECTION</h2>
              <p className="leading-relaxed text-justify">
                The development of Project Cortex integrates computational theory, cognitive neuroscience, multi agent architectures, reinforcement learning, and AI safety into a unified research direction for general intelligence. The work provides a structured path for engineering systems capable of adaptive reasoning while operating under responsible governance constraints. The conceptual design, mathematical formulation, and safety centric architecture are intended to support future research, empirical experimentation, and cross disciplinary exploration. Continued refinement, empirical validation, and scaling studies are expected to expand the viability of neuroscience inspired AGI frameworks and contribute to the broader pursuit of interpretable, controllable, and human aligned machine intelligence.
              </p>
            </section>
          </article>
        </div>

        <Footer />
      </div>
    </>
  );
}
