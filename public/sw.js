// Service Worker for Upvista Digital
// SEO-friendly: Does not block crawlers, only caches assets for performance

const CACHE_NAME = 'upvista-digital-v1';
const RUNTIME_CACHE = 'upvista-runtime-v1';

// Assets to cache immediately
const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/assets/u.png',
  '/assets/upvista.png',
  '/favicon.ico',
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Precaching assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map((name) => caches.delete(name))
      );
    })
    .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
// IMPORTANT: HTML pages are NOT cached to allow crawlers to see fresh content
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip caching for:
  // - API routes
  // - HTML pages (for SEO - crawlers need fresh content)
  // - External domains
  // - Admin routes
  if (
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/_next/') ||
    url.pathname.startsWith('/admin/') ||
    request.method !== 'GET' ||
    !url.origin.includes('upvistadigital.com')
  ) {
    return; // Let browser handle normally
  }

  // For HTML pages, always fetch from network (stale-while-revalidate for performance)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Don't cache HTML - let crawlers see fresh content
          return response;
        })
        .catch(() => {
          // Fallback to cache only if network fails
          return caches.match(request);
        })
    );
    return;
  }

  // For static assets (images, fonts, CSS, JS), use cache-first strategy
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then((response) => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache static assets only
            if (
              request.url.match(/\.(jpg|jpeg|png|gif|svg|webp|ico|woff|woff2|ttf|eot|css|js)$/i)
            ) {
              caches.open(RUNTIME_CACHE).then((cache) => {
                cache.put(request, responseToCache);
              });
            }

            return response;
          })
          .catch(() => {
            // Return offline fallback if available
            if (request.destination === 'image') {
              return caches.match('/assets/u.png');
            }
          });
      })
  );
});

// Background sync for offline form submissions (optional)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      Promise.resolve()
    );
  }
});

// Push notifications (optional - for future use)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/assets/u.png',
      badge: '/assets/u.png',
      vibrate: [200, 100, 200],
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

