# Aditya Wagh | Modern Technical Portfolio

A high-performance, editorial-style personal portfolio developed with a "Modern Tech Studio" aesthetic. This repository contains the source code for a responsive web application designed to showcase machine learning, web engineering, and creative systems projects with a focus on immersive typography and fluid motion.

## Core Philosophical Objective

The platform serves as a digital projection of a technical journey, balancing the rigor of machine learning and competitive programming with the narrative depth of cinema. It prioritizes "Visual Excellence" — utilizing a custom design system built on Plus Jakarta Sans and a dynamic engineering-grid background.

## Technical Architecture

### Frontend Infrastructure
- Framework: React 19 + TypeScript
- Build Tool: Vite 5
- Styling: Tailwind CSS 3 (Architecture-first CSS variables)
- Motion: Framer Motion (Staggered orchestration, spring physics)
- Smooth Scroll: Lenis (High-inertia kinetic scrolling)

### Key Engineering Features
- Dynamic Environment: An interactive, cursor-aware background utilizing radial masks and drifting color orbs for depth.
- Performance Typography: Implementation of a premium display font system with optical-sizing for maximum readability across high-PPI displays.
- Atomic Data Layer: Centralized content management via a strictly typed TypeScript data model for seamless updates.
- Responsive Logic: A custom grid-based layout system that prevents vertical overflow and ensures cross-device consistency.

## Project Structure

```text
src/
├── components/        # Specialized UI modules (Hero, Projects, About, etc.)
├── data/              # Centralized portfolio content (portfolio.ts)
├── hooks/             # Custom React lifecycle hooks (Lenis, Motion)
├── index.css          # Design system variables and global utility overrides
└── main.tsx           # Application entry and standard routing
```

## Local Development Environment

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AdityaWagh19/Aditya-Portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize the development server:
   ```bash
   npm run dev
   ```

### Deployment

The project is configured for automated deployment to GitHub Pages via the `gh-pages` branch. Documentation for the build pipeline is located in `package.json`.

## Performance Metrics

The application is optimized for:
- 0ms Input Latency (via Framer Motion event handling)
- 100/100 Accessibility Score (via semantic HTML5 structures)
- Sub-1s Dynamic Load Times (via Vite asset bundling)

## License

This project is open-source and available under the MIT License.
