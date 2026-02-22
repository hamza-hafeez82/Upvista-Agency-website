import Script from "next/script";

export const JsonLd = () => {
    return (
        <>
            <Script
                id="schema-org"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Upvista Digital",
                        "alternateName": ["Upvista", "Upvista Digital Agency", "Upvista Software Company"],
                        "url": "https://www.upvistadigital.com",
                        "logo": "https://www.upvistadigital.com/assets/icon.PNG",
                        "image": "https://www.upvistadigital.com/assets/hero.jpeg",
                        "description": "Upvista Digital is a global digital innovation company specializing in software development, AI automation, research, and digital transformation. We serve clients worldwide with cutting-edge solutions.",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Web",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD",
                            "availability": "https://schema.org/InStock"
                        },
                        "provider": {
                            "@type": "Organization",
                            "name": "Upvista Digital",
                            "url": "https://www.upvistadigital.com",
                            "logo": "https://www.upvistadigital.com/assets/icon.PNG",
                            "sameAs": [
                                "https://www.facebook.com/share/1ZTVBZV6rT/",
                                "https://x.com/Upvista_Digital/",
                                "https://www.instagram.com/upvista_digital/",
                                "https://github.com/Upvista",
                                "https://discord.com/invite/RfJmxZPNRR",
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "availableLanguage": ["English", "Japanese", "Urdu"]
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Lahore",
                                "addressRegion": "Punjab",
                                "addressCountry": "PK",
                                "postalCode": "54000"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "31.5204",
                                "longitude": "74.3587"
                            },
                            "areaServed": {
                                "@type": "Place",
                                "name": "Worldwide"
                            },
                            "serviceArea": {
                                "@type": "Place",
                                "name": "Worldwide"
                            }
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "127",
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Digital Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Web Development",
                                        "description": "Custom website development and web applications"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "UI/UX Design",
                                        "description": "User interface and user experience design"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Digital Marketing",
                                        "description": "SEO, social media marketing, and digital advertising"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "AI Automation",
                                        "description": "Artificial intelligence and automation solutions"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Software Development",
                                        "description": "Custom software solutions and enterprise applications"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Cloud Solutions",
                                        "description": "Cloud infrastructure, migration, and DevOps services"
                                    }
                                }
                            ]
                        }
                    }),
                }}
            />

            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Upvista Digital",
                        "alternateName": ["Upvista", "Upvista Digital Agency"],
                        "description": "Global digital innovation company specializing in software development, AI automation, research, and digital transformation. Serving clients worldwide.",
                        "url": "https://www.upvistadigital.com",
                        "telephone": "+92-332-0486955",
                        "email": "info@upvistadigital.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Lahore, Pakistan",
                            "addressLocality": "Lahore",
                            "addressRegion": "Punjab",
                            "postalCode": "54000",
                            "addressCountry": "PK"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "31.5204",
                            "longitude": "74.3587"
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday"
                            ],
                            "opens": "09:00",
                            "closes": "18:00"
                        },
                        "priceRange": "$$",
                        "currenciesAccepted": "PKR, USD, EUR, GBP",
                        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
                        "areaServed": "Worldwide",
                        "serviceArea": {
                            "@type": "Place",
                            "name": "Worldwide"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Digital Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Web Development Services",
                                        "description": "Custom website and web application development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "UI/UX Design Services",
                                        "description": "User interface and experience design"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Digital Marketing Services",
                                        "description": "SEO, social media, and digital advertising"
                                    }
                                }
                            ]
                        }
                    }),
                }}
            />

            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Upvista Digital",
                        "alternateName": ["Upvista", "Upvista Digital Agency", "Upvista Software Company"],
                        "url": "https://www.upvistadigital.com",
                        "logo": "https://www.upvistadigital.com/assets/icon.PNG",
                        "image": "https://www.upvistadigital.com/assets/hero.jpeg",
                        "description": "Upvista Digital is a global digital innovation powerhouse that transcends traditional software development. We architect the future by merging cutting-edge AI, quantum-ready technologies, and human-centric design to create digital experiences that don't just solve problems—they redefine possibilities. From blockchain ecosystems to AI-driven transformations, we're building tomorrow's digital landscape today.",
                        "foundingDate": "2023",
                        "foundingLocation": {
                            "@type": "Place",
                            "name": "Lahore, Pakistan",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Lahore",
                                "addressRegion": "Punjab",
                                "addressCountry": "PK"
                            }
                        },
                        "founder": {
                            "@type": "Person",
                            "name": "Hamza Hafeez",
                            "jobTitle": "Founder & CEO",
                            "description": "Founder and CEO of Upvista Digital, a visionary digital innovation powerhouse that transcends traditional software development. Hamza leads the company's mission to architect the future through cutting-edge AI, quantum-ready technologies, and human-centric design.",
                            "image": "https://www.upvistadigital.com/assets/hamza pic.jpg",
                            "sameAs": [
                                "https://www.facebook.com/share/1ZTVBZV6rT/",
                                "https://x.com/Upvista_Digital/",
                                "https://www.instagram.com/upvista_digital/",
                                "https://github.com/Upvista",
                                "https://discord.com/invite/RfJmxZPNRR",
                                "https://www.linkedin.com/groups/13302224",
                                "https://youtube.com/@upvistadigital"
                            ]
                        },
                        "founders": [
                            {
                                "@type": "Person",
                                "name": "Hamza Hafeez",
                                "jobTitle": "Founder & CEO",
                                "description": "Founder and CEO of Upvista Digital"
                            }
                        ],
                        "numberOfEmployees": {
                            "@type": "QuantitativeValue",
                            "value": "25",
                            "unitText": "employees"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Lahore, Pakistan",
                            "addressLocality": "Lahore",
                            "addressRegion": "Punjab",
                            "postalCode": "54000",
                            "addressCountry": "PK"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "31.5204",
                            "longitude": "74.3587"
                        },
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "telephone": "+92-332-0486955",
                                "email": "info@upvistadigital.com",
                                "availableLanguage": ["English", "Japanese", "Korean", "Chinese", "Arabic", "Indonesian"],
                                "hoursAvailable": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                    "opens": "09:00",
                                    "closes": "18:00"
                                }
                            },
                            {
                                "@type": "ContactPoint",
                                "contactType": "sales",
                                "telephone": "+92-332-0486955",
                                "email": "info@upvistadigital.com"
                            }
                        ],
                        "sameAs": [
                            "https://www.facebook.com/share/1ZTVBZV6rT/",
                            "https://x.com/Upvista_Digital/",
                            "https://www.instagram.com/upvista_digital/",
                            "https://github.com/Upvista",
                            "https://discord.com/invite/RfJmxZPNRR",
                            "https://www.linkedin.com/groups/13302224",
                            "https://youtube.com/@upvistadigital"
                        ],
                        "knowsAbout": [
                            "Web Development",
                            "UI/UX Design",
                            "Digital Marketing",
                            "AI Automation",
                            "Software Development",
                            "Mobile App Development",
                            "E-commerce Solutions",
                            "Cloud Computing",
                            "DevOps",
                            "Blockchain Technology"
                        ],
                        "areaServed": "Worldwide",
                        "serviceArea": {
                            "@type": "Place",
                            "name": "Worldwide"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Digital Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Web Development",
                                        "description": "Custom website development and web applications using modern technologies"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "UI/UX Design",
                                        "description": "User interface and user experience design for digital products"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Digital Marketing",
                                        "description": "SEO, social media marketing, and digital advertising services"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "AI Automation",
                                        "description": "Artificial intelligence and automation solutions for businesses"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Mobile App Development",
                                        "description": "iOS and Android mobile application development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "E-commerce Solutions",
                                        "description": "Online store development and e-commerce platforms"
                                    }
                                }
                            ]
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "127",
                            "bestRating": "5",
                            "worstRating": "0"
                        },
                        "review": [
                            {
                                "@type": "Review",
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5",
                                    "bestRating": "5"
                                },
                                "author": {
                                    "@type": "Person",
                                    "name": "Ahmed Khan"
                                },
                                "reviewBody": "Upvista Digital delivered an exceptional website that exceeded our expectations. Their team is professional and highly skilled."
                            },
                            {
                                "@type": "Review",
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5",
                                    "bestRating": "5"
                                },
                                "author": {
                                    "@type": "Person",
                                    "name": "Sarah Ahmed"
                                },
                                "reviewBody": "Outstanding digital marketing services. Our online presence has improved significantly since working with Upvista Digital."
                            }
                        ],
                        "employee": [
                            {
                                "@type": "Person",
                                "name": "Hamza Hafeez",
                                "jobTitle": "Founder & CEO",
                                "worksFor": {
                                    "@type": "Organization",
                                    "name": "Upvista Digital"
                                }
                            },
                            {
                                "@type": "Person",
                                "name": "Development Team",
                                "jobTitle": "Software Engineers",
                                "worksFor": {
                                    "@type": "Organization",
                                    "name": "Upvista Digital"
                                }
                            },
                            {
                                "@type": "Person",
                                "name": "Design Team",
                                "jobTitle": "UI/UX Designers",
                                "worksFor": {
                                    "@type": "Organization",
                                    "name": "Upvista Digital"
                                }
                            }
                        ],
                        "department": [
                            {
                                "@type": "Organization",
                                "name": "Development Department",
                                "description": "Web and mobile application development team"
                            },
                            {
                                "@type": "Organization",
                                "name": "Design Department",
                                "description": "UI/UX design and creative services team"
                            },
                            {
                                "@type": "Organization",
                                "name": "Marketing Department",
                                "description": "Digital marketing and SEO services team"
                            }
                        ],
                        "alumni": [
                            {
                                "@type": "Person",
                                "name": "Former Team Members",
                                "description": "Alumni who have contributed to Upvista Digital's success"
                            }
                        ],
                        "event": [
                            {
                                "@type": "Event",
                                "name": "Upvista Digital Community Meetup",
                                "description": "Monthly community meetup for developers and designers",
                                "startDate": "2025-07-01",
                                "endDate": "2026-12-01",
                                "location": {
                                    "@type": "Place",
                                    "name": "Lahore, Pakistan"
                                }
                            }
                        ],
                        "brand": {
                            "@type": "Brand",
                            "name": "Upvista Digital",
                            "description": "Global digital innovation company providing cutting-edge software solutions worldwide",
                            "logo": "https://www.upvistadigital.com/assets/icon.PNG"
                        },
                        "parentOrganization": {
                            "@type": "Organization",
                            "name": "Upvista Group"
                        },
                        "subOrganization": [
                            {
                                "@type": "Organization",
                                "name": "Upvista Digital Studio",
                                "description": "Creative design and development studio"
                            },
                            {
                                "@type": "Organization",
                                "name": "Upvista Digital Academy",
                                "description": "Training and education division"
                            }
                        ]
                    }),
                }}
            />

            <Script
                id="person-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Hamza Hafeez",
                        "alternateName": ["Hamza Hafeez Upvista", "Hamza Hafeez Digital"],
                        "jobTitle": "Founder & CEO",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Upvista Digital",
                            "url": "https://www.upvistadigital.com"
                        },
                        "description": "Founder and CEO of Upvista Digital, a visionary digital innovation powerhouse that transcends traditional software development. Hamza leads the company's mission to architect the future through cutting-edge AI, quantum-ready technologies, and human-centric design.",
                        "image": "https://www.upvistadigital.com/assets/hamza pic.jpg",
                        "url": "https://www.upvistadigital.com",
                        "birthDate": "2006",
                        "birthPlace": {
                            "@type": "Place",
                            "name": "Lahore, Pakistan"
                        },
                        "nationality": "Pakistani",
                        "alumniOf": {
                            "@type": "Organization",
                            "name": "National University of Modern Languages"
                        },
                        "knowsAbout": [
                            "Web Development",
                            "Software Engineering",
                            "Digital Marketing",
                            "AI & Machine Learning",
                            "UI/UX Design",
                            "Business Strategy",
                            "Team Leadership",
                            "Project Management"
                        ],
                        "sameAs": [
                            "https://www.linkedin.com/groups/13302224",
                            "https://twitter.com/HamzaHafeez_",
                            "https://github.com/hamzahafeez",
                            "https://facebook.com/hamza.hafeez.upvista",
                            "https://instagram.com/hamza_hafeez_upvista"
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Lahore",
                            "addressRegion": "Punjab",
                            "addressCountry": "PK"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "business",
                            "email": "hmza.hb82@gmail.com",
                            "telephone": "+92-329-4022494"
                        },
                        "hasOccupation": {
                            "@type": "Occupation",
                            "name": "Software Engineer",
                            "occupationLocation": {
                                "@type": "Place",
                                "name": "Lahore, Pakistan"
                            }
                        },
                        "memberOf": [
                            {
                                "@type": "Organization",
                                "name": "Upvista Digital",
                                "url": "https://www.upvistadigital.com"
                            },
                        ],
                        "funder": [
                            {
                                "@type": "Organization",
                                "name": "Upvista Digital",
                                "url": "https://www.upvistadigital.com"
                            }
                        ],
                        "publisher": {
                            "@type": "Organization",
                            "name": "Upvista Digital"
                        },
                        "author": [
                            {
                                "@type": "Article",
                                "name": "The Future of Digital Transformation",
                                "url": "https://www.upvistadigital.com/blog/digital-transformation"
                            },
                            {
                                "@type": "Article",
                                "name": "Building Successful Software Teams",
                                "url": "https://www.upvistadigital.com/blog/building-software-teams"
                            }
                        ],
                    }),
                }}
            />

            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What services does Upvista Digital provide?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Upvista Digital provides comprehensive digital services including web development, UI/UX design, digital marketing, AI automation, mobile app development, and e-commerce solutions. We specialize in creating innovative digital solutions for businesses."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Where is Upvista Digital located?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Upvista Digital is headquartered in Lahore, Pakistan. We serve clients globally with our main office located in Lahore, Punjab, Pakistan."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Who is the founder of Upvista Digital?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Hamza Hafeez is the Founder and CEO of Upvista Digital. He leads the company's vision for innovative digital solutions and has successfully completed over 500 projects."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How many employees does Upvista Digital have?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Upvista Digital has a team of 25+ skilled professionals including software engineers, UI/UX designers, digital marketers, and project managers."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How can I contact Upvista Digital?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You can contact Upvista Digital via email at info@upvistadigital.com or by phone at +92-332-0486955. We are also available on various social media platforms."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What technologies does Upvista Digital use?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We use modern technologies including React, Next.js, Node.js, Python, PHP, AWS, Google Cloud, and various AI/ML frameworks to deliver cutting-edge solutions."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does Upvista Digital work with international clients?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, Upvista Digital serves clients worldwide including the United States, United Kingdom, Canada, Australia, and other countries. We provide remote development and consultation services."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is Upvista Digital's rating and reputation?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Upvista Digital has a 4.8/5 rating based on 127+ client reviews. We are known for our quality work, professional approach, and successful project delivery."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "When was Upvista Digital founded?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Upvista Digital was founded in 2023 in Lahore, Pakistan. Since then, we have grown to become one of Pakistan's leading software agencies."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What industries does Upvista Digital serve?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We serve various industries including e-commerce, healthcare, education, finance, real estate, manufacturing, and startups. Our solutions are tailored to meet specific industry requirements."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does Upvista Digital provide ongoing support?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, Upvista Digital provides comprehensive ongoing support including website maintenance, updates, security monitoring, and 24/7 technical support for all our clients."
                                }
                            }
                        ]
                    }),
                }}
            />

            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Upvista Digital",
                        "url": "https://www.upvistadigital.com",
                        "description": "Global digital innovation company providing software development, AI automation, research, and digital transformation services worldwide",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Upvista Digital",
                            "url": "https://www.upvistadigital.com",
                            "logo": "https://www.upvistadigital.com/assets/icon.PNG"
                        },
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://www.upvistadigital.com/search?q={search_term_string}"
                            },
                            "query-input": "required name=search_term_string"
                        },
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "Upvista Digital",
                            "url": "https://www.upvistadigital.com"
                        }
                    }),
                }}
            />

            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.upvistadigital.com"
                            }
                        ]
                    }),
                }}
            />
        </>
    );
};
