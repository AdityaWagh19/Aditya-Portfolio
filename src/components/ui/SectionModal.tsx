import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { PosterConfig } from '../../data/portfolio';

import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import BackgroundSection from '../sections/BackgroundSection';
import WritingSection from '../sections/WritingSection';
import CinemaSection from '../sections/CinemaSection';
import ContactSection from '../sections/ContactSection';

const SECTION_MAP: Record<string, React.ComponentType> = {
  projects: ProjectsSection,
  skills: SkillsSection,
  background: BackgroundSection,
  writing: WritingSection,
  cinema: CinemaSection,
  contact: ContactSection,
};

interface SectionModalProps {
  poster: PosterConfig;
  onClose: () => void;
}

export default function SectionModal({ poster, onClose }: SectionModalProps) {
  const SectionContent = SECTION_MAP[poster.section];

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Panel */}
        <motion.div
          className="modal-panel"
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          role="dialog"
          aria-modal="true"
          aria-label={`${poster.title} section`}
        >
          {/* Close button */}
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
            id={`close-modal-${poster.id}`}
          >
            <X size={16} />
          </button>

          {/* Header */}
          <div className="modal-header">
            <div style={{ background: poster.gradient, position: 'absolute', inset: 0, opacity: 0.4 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="modal-section-number">◈ {poster.number} / 06</div>
              <h2 className="modal-title">{poster.title}</h2>
              <p className="modal-subtitle">{poster.subtitle}</p>
            </div>
          </div>

          {/* Body */}
          <div className="modal-body">
            {SectionContent && <SectionContent />}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
