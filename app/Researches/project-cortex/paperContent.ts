// Project Cortex Research Paper Content
// This file contains all the academic content for the research paper

export const paperContent = {
    extendedAbstract: {
        intro: `Intelligence can be understood as the capacity to pursue a goal by interpreting the environment, imagining possible ways to reach the goal, selecting an effective plan, and improving through experience. Humans demonstrate intelligence when solving everyday problems, planning complex projects, or reasoning socially. Machines express intelligence in the same sequence: perceive, think, plan, act, and learn.`,

        sections: [
            {
                title: "Narrow AI vs. AGI",
                content: `Current artificial intelligence systems are narrow in scope. They excel at a single task such as playing chess or identifying objects in images, but they cannot transfer knowledge across domains. Artificial General Intelligence refers to a system that can understand, learn, and adapt across many different types of tasks without being redesigned. It is the difference between isolated tools and a flexible partner that can assume many roles.`,
                citations: [19, 29, 21]
            },
            {
                title: "Why AGI matters",
                content: `AGI has the potential to accelerate scientific discovery, transform healthcare, enhance infrastructure planning, personalize education, and free people from repetitive work. At the same time, powerful systems introduce risks such as large-scale errors, misuse, and unforeseen consequences, necessitating transparent design and strong safeguards.`,
                citations: [23, 24, 45, 46]
            },
            {
                title: "What Project Cortex is",
                content: `Project Cortex is a biologically inspired architecture that unifies existing AI capabilities into a coordinated cognitive system, reflecting the executive organizational principles of the prefrontal cortex. The Orchestrator acts as a director who interprets goals, decomposes them into tasks, assigns work to specialists, monitors progress, and integrates results, mirroring known executive control pathways in biological cognition. Each Agent represents a specific cognitive ability such as reasoning, planning, risk analysis, memory management, or execution, consistent with modular multi-agent design theory. The Shared Workspace functions analogously to working memory structures described in neuroscience. A dedicated Risk Agent evaluates uncertainties and requests human approval for sensitive decisions, building on modern AI safety principles. Over time the system learns from experience and maintains cumulative understanding, similar to lifelong learning formulations in neuroscience and reinforcement learning.`,
                citations: [1, 3, 5, 10, 34, 2, 11, 45, 46, 47, 48, 49, 50, 18]
            }
        ]
    },

    tableOfContents: [
        { section: "ABSTRACT", page: 2 },
        {
            section: "I. INTRODUCTION", page: 7, subsections: [
                { title: "A. Motivation", page: 7 },
                { title: "B. Research Problem", page: 7 },
                { title: "C. Contributions", page: 7 }
            ]
        },
        {
            section: "II. BACKGROUND CONCEPTS", page: 8, subsections: [
                { title: "A. Definition of Intelligence", page: 8 },
                { title: "B. Artificial Intelligence", page: 8 },
                { title: "C. Artificial General Intelligence", page: 8 },
                { title: "D. Why Current AI Systems Do Not Achieve AGI", page: 8 },
                { title: "E. Historical Development of AI Architectures", page: 9 },
                { title: "F. Limitations of Contemporary Models", page: 9 }
            ]
        },
        // ... more sections
    ],

    abbreviations: [
        { acronym: "ACC", fullForm: "Anterior Cingulate Cortex" },
        { acronym: "AGI", fullForm: "Artificial General Intelligence" },
        { acronym: "AI", fullForm: "Artificial Intelligence" },
        { acronym: "AIXI", fullForm: "Universal Artificial Intelligence model" },
        { acronym: "API", fullForm: "Application Programming Interface" },
        { acronym: "dlPFC", fullForm: "Dorsolateral Prefrontal Cortex" },
        { acronym: "FPC", fullForm: "Frontopolar Cortex" },
        { acronym: "HTN", fullForm: "Hierarchical Task Network" },
        { acronym: "LLM", fullForm: "Large Language Model" },
        { acronym: "MCTS", fullForm: "Monte Carlo Tree Search" },
        { acronym: "MDP", fullForm: "Markov Decision Process" },
        { acronym: "NMDA", fullForm: "N-Methyl-D-Aspartate" },
        { acronym: "OFC", fullForm: "Orbitofrontal Cortex" },
        { acronym: "PFC", fullForm: "Prefrontal Cortex" },
        { acronym: "RL", fullForm: "Reinforcement Learning" },
        { acronym: "SMDP", fullForm: "Semi-Markov Decision Process" },
        { acronym: "vmPFC", fullForm: "Ventromedial Prefrontal Cortex" }
    ],

    references: [
        {
            id: 1,
            category: "Neuroscience and Prefrontal Cortex",
            citation: 'J. M. Fuster, The Prefrontal Cortex, 5th ed. London, U.K: Academic Press, 2015.'
        },
        {
            id: 2,
            category: "Neuroscience and Prefrontal Cortex",
            citation: 'P. S. Goldman-Rakic, "Cellular basis of working memory," Neuron, vol. 14, no. 3, pp. 477–485, 1995.'
        },
        // ... all 51 references
    ]
};
