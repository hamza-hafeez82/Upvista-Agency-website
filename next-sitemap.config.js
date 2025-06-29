/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://upvistadigital.com',
  generateRobotsTxt: true, // generates robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*', '/api/*', '/404', '/500'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://upvistadigital.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/*', '/api/*', '/_next/*'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/*', '/api/*', '/_next/*'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/*', '/api/*', '/_next/*'],
      },
    ],
  },
  // Custom priority for important pages
  transform: async (config, path) => {
    // Set higher priority for important pages
    let priority = 0.7;
    let changefreq = 'daily';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/pages/services') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/pages/about') {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/pages/contactPage') {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/pages/portfolio') {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/pages/seo-content') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/pages/blog') {
      priority = 0.8;
      changefreq = 'daily';
    } else if (path === '/pages/marketplace') {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
} 