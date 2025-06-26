# Upvista Digital – Web & Software Solutions

## Overview
Upvista Digital builds stunning websites, intuitive user experiences, and scalable apps for startups and enterprises. Elevate your digital presence with Upvista.

## Features
- Modern Next.js 15 app directory structure
- TypeScript, TailwindCSS, Framer Motion
- SEO & accessibility best practices
- PWA support (manifest, offline, installable)
- Automated code quality (ESLint, Prettier, Husky)
- Google Analytics integration
- Dynamic, responsive UI

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Lint & Format
```bash
npm run lint
npm run format
```

## Contribution Guidelines
- Fork the repo and create a feature branch
- Use conventional commits
- Run lint and format before pushing
- Open a pull request with a clear description

## Analytics
Google Analytics is integrated for user tracking. Update the tracking ID in `layout.tsx` if needed.

## PWA
- Manifest and icons are set up in `public/manifest.json`
- Add to home screen supported
- Offline support via service worker (see below)

### Offline Support
This app uses `next-pwa` to automatically generate a service worker for offline support. No manual service worker file is needed. Build and deploy to enable full PWA features.

## Accessibility
- Semantic HTML, ARIA roles, and labels
- Color contrast and keyboard navigation

## License
MIT
