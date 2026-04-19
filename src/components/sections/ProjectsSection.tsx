import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GitBranch } from 'lucide-react';
import { PROJECTS } from '../../data/portfolio';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          style={{ position: 'relative', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-num">02</div>
          <div className="section-eyebrow">Work</div>
          <h2 className="section-big-title">
            SELECTED<br />
            <span className="accent-text">PROJECTS</span>
          </h2>
        </motion.div>

        {/* Project rows */}
        <div>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Number */}
              <div className="project-row-num">0{i + 1}</div>

              {/* Body */}
              <div className="project-row-body">
                {project.featured && (
                  <div className="project-featured-badge">
                    <Star size={9} fill="currentColor" /> Featured Project
                  </div>
                )}
                <div className="project-row-genre">{project.genre}</div>
                <h3 className="project-row-title">{project.title}</h3>
                <p className="project-row-desc">{project.plot}</p>
                <div className="project-tech-list">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="project-row-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-outline"
                  >
                    <GitBranch size={12} /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-dark"
                  >
                    <ExternalLink size={12} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
