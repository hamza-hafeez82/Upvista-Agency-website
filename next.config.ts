/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  images: {
    domains: ['i.pinimg.com', 'randomuser.me' , 'thumbs.dreamstime.com'], // Correctly formatted array
  },
});

module.exports = nextConfig;