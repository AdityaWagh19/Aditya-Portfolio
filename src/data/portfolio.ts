// Portfolio Data — Aditya Wagh

export const PERSONAL = {
  name: 'Aditya Wagh',
  title: 'A Portfolio Film',
  subtitle: 'Machine Learning • Web Development • Creative Systems',
  initials: 'AW',
  email: 'awagh5368@gmail.com',
  github: 'https://github.com/AdityaWagh19/',
  linkedin: 'https://www.linkedin.com/in/adityawaghcse',
  leetcode: 'https://leetcode.com/u/Adityaftw/',
  letterboxd: 'https://boxd.it/bs56f',
  instagram: 'https://www.instagram.com/adrockftw?igsh=cWg2eHhhZGFtbzZ0',
  resume: '/resume.pdf',
};

export interface Project {
  id: string;
  title: string;
  genre: string;
  plot: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'cadencia',
    title: 'Cadencia',
    genre: 'AI-Native B2B Platform',
    plot: 'An AI-native agentic B2B trade platform for Indian MSMEs that automates RFQ parsing, seller discovery, AI negotiation, blockchain escrow, settlement, and compliance in one closed-loop workflow.',
    tech: ['FastAPI', 'Next.js 15', 'Algorand', 'pgvector', 'JWT', 'Prometheus'],
    github: 'https://github.com/AdityaWagh19/Cadencia-A2A-Platform',
    live: 'https://cadencia.duckdns.org/',
    featured: true,
  },
  {
    id: 'fanforge',
    title: 'FanForge',
    genre: 'Creator Economy · Web3',
    plot: 'A full-stack creator economy platform on Algorand where fans tip creators with ALGO and earn collectible NFT stickers, backed by smart contracts, wallet integration, and a token-aware storefront.',
    tech: ['React', 'FastAPI', 'Algorand TestNet', 'SQLAlchemy', 'IPFS'],
    github: 'https://github.com/AdityaWagh19/FanForge-Platform',
  },
  {
    id: 'binged',
    title: 'Binged',
    genre: 'AI / ML · Recommendation System',
    plot: 'A full-stack movie recommendation system built on the TMDB dataset, where recommendations are precomputed offline using TF-IDF cosine similarity and an IMDb-style Bayesian popularity score, then served through a React app.',
    tech: ['Python', 'React', 'Vite', 'TF-IDF', 'Cosine Similarity', 'TMDB Dataset'],
    github: 'https://github.com/AdityaWagh19/Aditya-Watches-Movies',
    live: 'https://adityawagh19.github.io/Aditya-Watches-Movies/',
    featured: true,
  },
  {
    id: 'offline-rag',
    title: 'Offline Multimodal RAG',
    genre: 'Generative AI · RAG',
    plot: 'A multimodal retrieval-augmented generation system that runs completely offline, allowing organizations to ingest, index, and query text, images, and audio with semantic search, hybrid retrieval, and local LLM inference.',
    tech: ['Python 3.11+', 'FAISS', 'CLIP', 'Whisper', 'Ollama', 'Mistral 7B'],
    github: 'https://github.com/AdityaWagh19/Offline-MultiModal-RAG-System',
  },
  {
    id: 'eclyra',
    title: 'Eclyra',
    genre: 'AI · Music Tool',
    plot: 'An AI-powered playlist storyteller that transforms Spotify playlists into emotional journeys through narrative generation, smart song ordering, lyrics integration, and custom cover art creation.',
    tech: ['Python', 'Spotify API', 'Google Gemini', 'Genius API'],
    github: 'https://github.com/AdityaWagh19/Eclyra',
  },
];

export interface SkillCategory {
  label: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    label: 'Languages',
    skills: ['Python', 'C++', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'scikit-learn', 'pandas', 'NumPy', 'Framer Motion'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'MongoDB', 'AWS', 'VS Code', 'Vite', 'Linux'],
  },
  {
    label: 'Core Concepts',
    skills: ['Machine Learning', 'DSA', 'REST APIs', 'DBMS', 'NLP', 'System Design', 'OOP'],
  },
];

export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    date: 'Aug 2023 – May 2027',
    title: 'M.E.S. Wadia College of Engineering',
    subtitle: 'B.E. Computer Engineering · Pune',
    description: 'CGPA: 9.0/10. Enrolled in Minor in Artificial Intelligence and Machine Learning (Aug 2025 – May 2027).',
  },
  {
    date: '2021 – 2023',
    title: 'Sarosh Junior College of Science',
    subtitle: 'HSC (Science) · Chhatrapati Sambhajinagar',
    description: 'Completed Higher Secondary Certificate with a score of 93.66%.',
  },
  {
    date: 'May 2021',
    title: 'Sanskar Madhyamik Vidyalaya',
    subtitle: 'SSC · Chhatrapati Sambhajinagar',
    description: 'Completed Secondary School Certificate with a score of 98.4%.',
  },
];

export const WRITING_SNIPPETS = [
  {
    text: 'Between frames, we find the truths that dialogue cannot carry.',
    tag: 'On Cinema',
  },
  {
    text: 'Every algorithm is a story waiting to be told — inputs as characters, output as resolution.',
    tag: 'On Code',
  },
  {
    text: 'Not all paths are straight. Some are recursive.',
    tag: 'Reflection',
  },
  {
    text: 'The best recommendation systems don\'t just predict what you\'ll like — they discover what you didn\'t know you needed.',
    tag: 'On ML',
  },
];

export const FAVORITE_FILMS = [
  { title: 'Interstellar', year: '2014', dir: 'Nolan' },
  { title: 'Parasite', year: '2019', dir: 'Bong' },
  { title: 'Blade Runner 2049', year: '2017', dir: 'Villeneuve' },
  { title: 'The Social Network', year: '2010', dir: 'Fincher' },
  { title: 'Drive', year: '2011', dir: 'Refn' },
  { title: 'Arrival', year: '2016', dir: 'Villeneuve' },
];

export interface PosterConfig {
  id: string;
  title: string;
  subtitle: string;
  number: string;
  gradient: string;
  section: string;
}

export const POSTERS: PosterConfig[] = [
  {
    id: 'projects',
    title: 'Projects',
    subtitle: 'Featured Film Collection',
    number: '01',
    gradient: 'linear-gradient(135deg, #1a0505 0%, #2d0a0a 40%, #0B0B0B 100%)',
    section: 'projects',
  },
  {
    id: 'skills',
    title: 'Skills',
    subtitle: 'My Arsenal',
    number: '02',
    gradient: 'linear-gradient(135deg, #050d1a 0%, #0a1a2d 40%, #0B0B0B 100%)',
    section: 'skills',
  },
  {
    id: 'background',
    title: 'Background',
    subtitle: 'My Journey',
    number: '03',
    gradient: 'linear-gradient(135deg, #0d0d05 0%, #1a1a08 40%, #0B0B0B 100%)',
    section: 'background',
  },
  {
    id: 'writing',
    title: 'Writing',
    subtitle: 'Short Stories & Reflections',
    number: '04',
    gradient: 'linear-gradient(135deg, #0d0510 0%, #1a0a20 40%, #0B0B0B 100%)',
    section: 'writing',
  },
  {
    id: 'cinema',
    title: 'Cinema',
    subtitle: 'Film Diary',
    number: '05',
    gradient: 'linear-gradient(135deg, #05100d 0%, #0a201a 40%, #0B0B0B 100%)',
    section: 'cinema',
  },
  {
    id: 'contact',
    title: 'Contact',
    subtitle: 'Get in Touch',
    number: '06',
    gradient: 'linear-gradient(135deg, #100505 0%, #200a0a 40%, #0B0B0B 100%)',
    section: 'contact',
  },
];

export const ACCOLADES = [
  { type: 'Achievement', text: '3rd Prize, Innovatexpo 2025 — Inter-college prototype exhibition.' },
  { type: 'Job Simulation', text: 'J.P. Morgan — Software Engineering' },
  { type: 'Job Simulation', text: 'Boston Consulting Group (BCG) — Data Science' },
  { type: 'Coding', text: 'LeetCode 400+ Problems Solved (C++ & Python)' },
];
