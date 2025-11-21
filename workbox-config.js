// Workbox configuration for Upvista Digital
// This file configures Workbox for PWA functionality
// SEO-friendly: Ensures crawlers can access fresh content

module.exports = {
  globDirectory: 'public/',
  globPatterns: [
    '**/*.{js,css,png,jpg,jpeg,svg,gif,webp,ico,woff,woff2,ttf,eot,json}',
  ],
  // Exclude HTML files from precaching - they should be fetched fresh for SEO
  globIgnores: [
    '**/*.html',
    '**/sitemap*.xml',
    '**/robots.txt',
  ],
  swDest: 'public/sw.js',
  swSrc: 'public/sw.js', // Use our custom service worker
  injectionPoint: 'self.__WB_MANIFEST',
  
  // Runtime caching strategies
  runtimeCaching: [
    // Images - cache first, network fallback
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    // Fonts - cache first
    {
      urlPattern: /\.(?:woff|woff2|ttf|eot)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'fonts-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
      },
    },
    // CSS and JS - stale while revalidate
    {
      urlPattern: /\.(?:css|js)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-resources',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        },
      },
    },
    // API calls - network first (for fresh data)
    {
      urlPattern: /\/api\//,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 5 * 60, // 5 minutes
        },
      },
    },
    // HTML pages - network only (for SEO)
    {
      urlPattern: /\.(?:html)$/,
      handler: 'NetworkOnly',
      options: {
        cacheName: 'html-cache',
      },
    },
    // Next.js static files
    {
      urlPattern: /\/_next\/static\//,
      handler: 'CacheFirst',
      options: {
        cacheName: 'next-static',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
      },
    },
  ],

  // Skip waiting and claim clients immediately
  skipWaiting: true,
  clientsClaim: true,

  // Don't precache HTML - important for SEO
  dontCacheBustURLsMatching: /\.\w{8}\./,
  
  // Ignore URL parameters for caching
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/, /^gclid$/],
};

