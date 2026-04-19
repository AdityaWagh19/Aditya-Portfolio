import { motion } from 'framer-motion';
import { Film, ArrowUpRight } from 'lucide-react';
import { FAVORITE_FILMS, PERSONAL } from '../data/portfolio';

export default function CinemaSection() {
  return (
    <div>
      <blockquote className="cinema-quote">
        Exploring storytelling, genres, and patterns in cinema. This interest inspired my movie recommendation system — Binged — where machine learning meets the art of film curation.
      </blockquote>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: '1.25rem' }}>
          Favorite Films
        </div>
        <div className="cinema-films">
          {FAVORITE_FILMS.map((film, i) => (
            <motion.div
              key={film.title}
              className="cinema-film-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.04 }}
            >
              {/* Gradient bg to simulate poster */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: [
                  'linear-gradient(135deg, #0a1a3a, #1a2a4a)',
                  'linear-gradient(135deg, #1a0a2a, #2a1a3a)',
                  'linear-gradient(135deg, #0a2a1a, #1a3a2a)',
                  'linear-gradient(135deg, #2a1a0a, #3a2a1a)',
                  'linear-gradient(135deg, #1a0a0a, #2a1a1a)',
                  'linear-gradient(135deg, #0a0a2a, #1a1a3a)',
                ][i],
              }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', zIndex: 1 }} />
              <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                <Film size={20} color="rgba(255,255,255,0.3)" style={{ marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em', lineHeight: 1.1 }}>{film.title}</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--muted-2)', marginTop: '0.2rem' }}>{film.year} · {film.dir}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Letterboxd link */}
      <motion.a
        href={PERSONAL.letterboxd}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 2rem',
          background: 'rgba(0, 200, 100, 0.06)',
          border: '1px solid rgba(0, 200, 100, 0.2)',
          color: 'var(--text)',
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: 500,
          letterSpacing: '0.05em',
          transition: 'var(--transition-smooth)',
        }}
        whileHover={{ backgroundColor: 'rgba(0, 200, 100, 0.1)', borderColor: 'rgba(0, 200, 100, 0.4)' }}
      >
        <Film size={18} color="rgb(0,200,100)" />
        View Film Diary on Letterboxd
        <ArrowUpRight size={14} />
      </motion.a>
    </div>
  );
}
