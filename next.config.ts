/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development for better Turbopack compatibility
});

const nextConfig = withPWA({
  images: {
    domains: ['i.pinimg.com', 'randomuser.me' , 'thumbs.dreamstime.com'], // Correctly formatted array
  },
  // Turbopack-specific optimizations
  experimental: {
    // Enable Turbopack optimizations
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
      resolveAlias: {
        // Optimize react-icons imports
        'react-icons': 'react-icons',
      },
    },
  },
  // Webpack configuration for better chunk handling
  webpack: (config: any, { dev, isServer }: { dev: boolean; isServer: boolean }) => {
    if (dev && !isServer) {
      // Optimize chunk splitting for development
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            reactIcons: {
              test: /[\\/]node_modules[\\/]react-icons[\\/]/,
              name: 'react-icons',
              chunks: 'all',
              priority: 10,
            },
          },
        },
      };
    }
    return config;
  },
});

module.exports = nextConfig;