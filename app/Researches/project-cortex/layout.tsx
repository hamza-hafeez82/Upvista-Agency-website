import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Project Cortex: A Biologically Inspired Architecture for Artificial General Intelligence | Hamza Hafeez Bhatti',
    description: 'Project Cortex is a comprehensive research paper by Hamza Hafeez Bhatti on biologically inspired Artificial General Intelligence (AGI) modeled on the human prefrontal cortex. Explore the architecture, formal theory, and safety framework.',
    keywords: [
        'AGI',
        'Artificial General Intelligence',
        'Project Cortex',
        'Hamza Hafeez Bhatti',
        'Hamza Hafeez',
        'Hamza',
        'The Future of AI',
        'The best research article on AGI',
        'the worlds best research article on AGI',
        'the youngest person to research on AGI',
        'CEO of Upvista Digital',
        'Founder of Upvista Digital',
        'what is project cortex',
        'cortex',
        'pakistan',
        'pakistani CS student',
        '19 year old researcher',
        'Hamza Hafeez',
        'youngest AGI researcher',
        'youngest AGI researcher in Pakistan',
        'youngest AGI researcher in the world',
        'youngest AGI researcher in the world at 19',
        'Prefrontal Cortex',
        'Cognitive Architecture',
        'AI Safety',
        'Biologically Inspired AI',
        'Neuroscience',
        'Machine Learning',
        'Upvista Digital',
        'Upvista Agency',
        'Executive Control',
        'Multi-Agent Systems'
    ],
    authors: [{ name: 'Hamza Hafeez Bhatti', url: 'https://upvistadigital.com' }],
    creator: 'Hamza Hafeez Bhatti',
    publisher: 'Upvista Digital',
    openGraph: {
        title: 'Project Cortex: A Biologically Inspired Architecture for Artificial General Intelligence',
        description: 'A unified scientific framework for AGI based on the human prefrontal cortex. Authored by Hamza Hafeez Bhatti.',
        url: 'https://upvistadigital.com/Researches/project-cortex',
        siteName: 'Upvista Digital',
        locale: 'en_US',
        type: 'article',
        authors: ['Hamza Hafeez Bhatti'],
        publishedTime: '2025-03-01',
        images: [
            {
                url: 'https://upvistadigital.com/assets/hamza-pic.jpg', // Using author image as primary visual for now
                width: 1200,
                height: 630,
                alt: 'Hamza Hafeez Bhatti - Project Cortex',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Project Cortex: A Biologically Inspired AGI Architecture',
        description: 'A unified scientific framework for AGI based on the human prefrontal cortex. Authored by Hamza Hafeez Bhatti.',
        creator: '@HamzaHafeezBhatti', // Placeholder handle
        images: ['https://upvistadigital.com/assets/hamza-pic.jpg'],
    },
    alternates: {
        canonical: 'https://upvistadigital.com/Researches/project-cortex',
    },
    other: {
        'citation_title': 'Project Cortex: A Biologically Inspired Architecture for Artificial General Intelligence',
        'citation_author': 'Hamza Hafeez Bhatti',
        'citation_publication_date': '2025',
        'citation_journal_title': 'Upvista Digital Research',
        'citation_language': 'en',
        'citation_keywords': 'AGI; Neuroscience; Prefrontal Cortex; AI Safety',
    },
};

export default function ProjectCortexLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'ScholarlyArticle',
                'headline': 'Project Cortex: A Biologically Inspired Architecture for Artificial General Intelligence',
                'image': 'https://upvistadigital.com/assets/hamza-pic.jpg',
                'author': {
                    '@type': 'Person',
                    'name': 'Hamza Hafeez Bhatti',
                    'url': 'https://upvistadigital.com',
                    'jobTitle': 'CEO',
                    'affiliation': {
                        '@type': 'Organization',
                        'name': 'Upvista Digital'
                    }
                },
                'publisher': {
                    '@type': 'Organization',
                    'name': 'Upvista Digital',
                    'logo': {
                        '@type': 'ImageObject',
                        'url': 'https://upvistadigital.com/logo.png'
                    }
                },
                'datePublished': '2025-03-01',
                'description': 'Project Cortex is a biologically inspired architecture modeled on the functional organization of the human prefrontal cortex. The framework integrates an executive orchestrator, specialized cognitive agents, a shared memory substrate, probabilistic risk evaluation, and hierarchical task decomposition.',
                'keywords': 'AGI, Artificial General Intelligence, Neuroscience, Prefrontal Cortex, AI Safety'
            },
            {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                    {
                        '@type': 'ListItem',
                        'position': 1,
                        'name': 'Home',
                        'item': 'https://upvistadigital.com'
                    },
                    {
                        '@type': 'ListItem',
                        'position': 2,
                        'name': 'Researches',
                        'item': 'https://upvistadigital.com/Researches'
                    },
                    {
                        '@type': 'ListItem',
                        'position': 3,
                        'name': 'Project Cortex',
                        'item': 'https://upvistadigital.com/Researches/project-cortex'
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
