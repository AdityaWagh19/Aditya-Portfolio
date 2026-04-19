import { motion } from 'framer-motion';
import { Camera, ArrowUpRight } from 'lucide-react';
import { WRITING_SNIPPETS, PERSONAL } from '../../data/portfolio';

export default function WritingSection() {
  return (
    <div>
      <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
        Between lines of code, there are lines of thought. Here are fragments — reflections on cinema, technology, and the curious intersections in between.
      </p>

      <div className="writing-grid">
        {WRITING_SNIPPETS.map((snippet, i) => (
          <motion.div
            key={i}
            className="writing-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <p className="writing-card-text">{snippet.text}</p>
            <div className="writing-card-tag">— {snippet.tag}</div>
          </motion.div>
        ))}
      </div>

      {/* Instagram link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ marginTop: '2rem' }}
      >
        <a
          href={PERSONAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 2rem',
            background: 'rgba(180,100,255,0.06)',
            border: '1px solid rgba(180,100,255,0.2)',
            color: 'var(--text)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            transition: 'var(--transition-smooth)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(180,100,255,0.12)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(180,100,255,0.4)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(180,100,255,0.06)';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(180,100,255,0.2)';
          }}
        >
          <Camera size={18} />
          View on Instagram
          <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </div>
  );
}
