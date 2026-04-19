import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { PosterConfig } from '../data/portfolio';

// Cinematic SVG backgrounds per poster type
const PosterVisual = ({ id, gradient }: { id: string; gradient: string }) => {
  const visuals: Record<string, React.ReactNode> = {
    projects: (
      <svg width="100%" height="100%" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E50914" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#pg1)" />
        {/* Film reel abstraction */}
        <circle cx="200" cy="250" r="140" fill="none" stroke="rgba(229,9,20,0.15)" strokeWidth="1" />
        <circle cx="200" cy="250" r="100" fill="none" stroke="rgba(229,9,20,0.1)" strokeWidth="1" />
        <circle cx="200" cy="250" r="40" fill="rgba(229,9,20,0.08)" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <rect
            key={angle}
            x="194" y="110"
            width="12" height="30"
            fill="rgba(229,9,20,0.2)"
            transform={`rotate(${angle} 200 250)`}
          />
        ))}
        {/* Code lines */}
        {[340, 360, 380, 400, 420, 440, 460].map((y, i) => (
          <rect key={y} x="40" y={y} width={80 + i * 20} height="2" fill="rgba(229,9,20,0.1)" rx="1" />
        ))}
      </svg>
    ),
    skills: (
      <svg width="100%" height="100%" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#091a2d" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#sg1)" />
        {/* Hexagons */}
        {[[200, 180], [140, 260], [260, 260], [200, 340], [140, 380], [260, 380]].map(([cx, cy], i) => (
          <polygon
            key={i}
            points={`${cx},${cy! - 40} ${cx! + 35},${cy! - 20} ${cx! + 35},${cy! + 20} ${cx},${cy! + 40} ${cx! - 35},${cy! + 20} ${cx! - 35},${cy! - 20}`}
            fill="none"
            stroke="rgba(100,150,255,0.15)"
            strokeWidth="1"
          />
        ))}
        {[350, 380, 410, 440, 470].map((y, i) => (
          <rect key={y} x="60" y={y} width={60 + i * 30} height="3" fill="rgba(100,150,255,0.12)" rx="2" />
        ))}
      </svg>
    ),
    background: (
      <svg width="100%" height="100%" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a05" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#bg1)" />
        {/* Timeline vertical */}
        <line x1="60" y1="50" x2="60" y2="500" stroke="rgba(229,200,9,0.2)" strokeWidth="1" />
        {[120, 220, 320, 400].map((y, i) => (
          <g key={y}>
            <circle cx="60" cy={y} r="6" fill="rgba(229,200,9,0.3)" />
            <rect x="80" y={y - 6} width={80 + (i * 30 % 80)} height="12" fill="rgba(255,255,255,0.04)" rx="2" />
          </g>
        ))}
        {[460, 490, 520].map((y, i) => (
          <rect key={y} x="40" y={y} width={60 + i * 30} height="2" fill="rgba(229,200,9,0.1)" rx="1" />
        ))}
      </svg>
    ),
    writing: (
      <svg width="100%" height="100%" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a0520" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#wg1)" />
        {/* Quote marks */}
        <text x="40" y="180" fontSize="120" fill="rgba(180,100,255,0.12)" fontFamily="Georgia, serif">"</text>
        {/* Lines */}
        {[260, 280, 300, 320, 340, 360, 380].map((y, i) => (
          <rect key={y} x="50" y={y} width={[200, 160, 220, 140, 190, 170, 100][i]} height="2" fill="rgba(180,100,255,0.1)" rx="1" />
        ))}
        <text x="270" y="490" fontSize="80" fill="rgba(180,100,255,0.08)" fontFamily="Georgia, serif">"</text>
      </svg>
    ),
    cinema: (
      <svg width="100%" height="100%" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#051510" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#cg1)" />
        {/* Film strip holes */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect key={i} x="20" y={30 + i * 70} width="24" height="40" rx="3" fill="rgba(255,255,255,0.04)" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect key={i} x="356" y={30 + i * 70} width="24" height="40" rx="3" fill="rgba(255,255,255,0.04)" />
        ))}
        {/* Projector beam */}
        <polygon points="200,100 60,350 340,350" fill="rgba(255,255,200,0.03)" />
        <circle cx="200" cy="100" r="20" fill="rgba(255,255,200,0.08)" />
        {/* Movie reel */}
        <circle cx="200" cy="400" r="80" fill="none" stroke="rgba(50,200,100,0.15)" strokeWidth="2" />
        <circle cx="200" cy="400" r="20" fill="rgba(50,200,100,0.1)" />
      </svg>
    ),
    contact: (
      <svg width="100%" height="100%" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ctg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a0505" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#ctg1)" />
        {/* Signal rings */}
        {[60, 110, 160, 210].map((r) => (
          <circle key={r} cx="200" cy="250" r={r} fill="none" stroke="rgba(229,9,20,0.1)" strokeWidth="1" strokeDasharray="4 8" />
        ))}
        <circle cx="200" cy="250" r="20" fill="rgba(229,9,20,0.2)" />
        {/* Dots */}
        {[[120,180],[280,200],[150,320],[260,310]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="rgba(229,9,20,0.2)" />
        ))}
        {/* Lines toward center */}
        {[[120,180],[280,200],[150,320],[260,310]].map(([x,y], i) => (
          <line key={i} x1={x} y1={y} x2="200" y2="250" stroke="rgba(229,9,20,0.08)" strokeWidth="1" />
        ))}
      </svg>
    ),
  };

  return (
    <div style={{ position: 'absolute', inset: 0, background: gradient }}>
      {visuals[id] || null}
    </div>
  );
};

interface PosterCardProps {
  poster: PosterConfig;
  onClick: () => void;
  index: number;
}

export default function PosterCard({ poster, onClick, index }: PosterCardProps) {
  return (
    <motion.article
      className="poster-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Open ${poster.title} section`}
      id={`poster-${poster.id}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background visual */}
      <div className="poster-card-bg">
        <PosterVisual id={poster.id} gradient={poster.gradient} />
      </div>

      {/* Overlay */}
      <div className="poster-card-overlay" />
      <div className="poster-card-glow" />

      {/* Content */}
      <div className="poster-card-content">
        <div className="poster-card-number">◈ {poster.number}</div>
        <h2 className="poster-card-title">{poster.title}</h2>
        <p className="poster-card-subtitle">{poster.subtitle}</p>
        <div className="poster-card-cta">
          <span>Open</span>
          <ChevronRight size={12} />
        </div>
      </div>
    </motion.article>
  );
}
