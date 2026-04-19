import { useState } from 'react';
import { motion } from 'framer-motion';
import { POSTERS } from '../data/portfolio';
import PosterCard from './PosterCard';
import SectionModal from './SectionModal';
import type { PosterConfig } from '../data/portfolio';

export default function PosterWall() {
  const [activeSection, setActiveSection] = useState<PosterConfig | null>(null);

  return (
    <section id="poster-wall" style={{ padding: '8rem 2rem 6rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">Select a Title</div>
        <h2 className="section-title">
          Now<br />
          <span className="text-accent">Showing</span>
        </h2>
      </motion.div>

      {/* Poster grid */}
      <div className="poster-grid">
        {POSTERS.map((poster, index) => (
          <PosterCard
            key={poster.id}
            poster={poster}
            index={index}
            onClick={() => setActiveSection(poster)}
          />
        ))}
      </div>

      {/* Section modal */}
      {activeSection && (
        <SectionModal
          poster={activeSection}
          onClose={() => setActiveSection(null)}
        />
      )}
    </section>
  );
}
