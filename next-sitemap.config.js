/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.upvistadigital.com',
  generateRobotsTxt: false, // We'll create robots.txt manually
  generateIndexSitemap: true,
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
    '/auth/*',
    '/pages/auth/*',
    '/pages/stand-with-palestine',
    '*.json',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://www.upvistadigital.com/sitemap-company.xml',
      'https://www.upvistadigital.com/sitemap-careers.xml',
      'https://www.upvistadigital.com/sitemap-researches.xml',
      'https://www.upvistadigital.com/sitemap-community.xml',
      'https://www.upvistadigital.com/sitemap-consult.xml',
      'https://www.upvistadigital.com/sitemap-services.xml',
      'https://www.upvistadigital.com/sitemap-insights.xml',
    ],
  },
  transform: async (config, path) => {
    // Priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    // Homepage - highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Key sitelink pages - very high priority
    else if (
      path === '/company/profile' ||
      path === '/careers' ||
      path === '/Researches' ||
      path === '/community' ||
      path === '/Consult' ||
      path === '/Services'
    ) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Company section
    else if (path.startsWith('/company/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // Careers section
    else if (path.startsWith('/careers/')) {
      priority = 0.8;
      changefreq = 'weekly'; // Jobs change frequently
    }
    // Researches section
    else if (path.startsWith('/Researches/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // Community section
    else if (path.startsWith('/community/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // Services section
    else if (path.startsWith('/Services/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // Insights section
    else if (path.startsWith('/Insights/')) {
      priority = 0.6;
      changefreq = 'weekly';
    }
    // Contact and other important pages
    else if (path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // Add all static routes explicitly for better control
    const staticRoutes = [
      // Key sitelink pages
      '/',
      '/company/profile',
      '/careers',
      '/Researches',
      '/community',
      '/Consult',
      '/Services',
      '/contact',
      
      // Company pages
      '/company/leadership',
      '/company/investors',
      '/company/partners',
      '/company/sustainability',
      
      // Careers pages
      '/careers/basics',
      '/careers/business',
      '/careers/jobs',
      '/careers/apply',
      
      // Researches pages
      '/Researches/GCDF',
      '/Researches/AGI',
      '/Researches/project-cortex',
      
      // Community pages
      '/community/about',
      '/community/join',
      
      // Services pages
      '/Services/software-development',
      '/Services/web-development',
      '/Services/ai-automation',
      '/Services/cloud',
      '/Services/designing',
      '/Services/marketing',
    ];

    staticRoutes.forEach((route) => {
      result.push({
        loc: route,
        changefreq: route === '/' ? 'daily' : 'weekly',
        priority: route === '/' ? 1.0 : 
                 ['/company/profile', '/careers', '/Researches', '/community', '/Consult', '/Services'].includes(route) ? 0.9 : 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};

