import { motion } from 'framer-motion';
import { TIMELINE, ACCOLADES } from '../../data/portfolio';



export default function BackgroundSection() {
  return (
    <section id="education" className="section">
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          style={{ position: 'relative', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-num">04</div>
          <div className="section-eyebrow">Education & Experience</div>
          <h2 className="section-big-title">
            THE<br />
            <span className="accent-text">JOURNEY</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Timeline */}
          <div>
            <div className="timeline">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  className="tl-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                >
                  <div className="tl-dot" />
                  <div className="tl-date">{item.date}</div>
                  <h3 className="tl-title">{item.title}</h3>
                  <p className="tl-sub">{item.subtitle}</p>
                  <p className="tl-desc">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Accolades - Static Staggered List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ width: '100%', maxWidth: '500px' }}
          >
            <div style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '2rem',
            }}>
              Certifications & Achievements
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ACCOLADES.map((acc, i) => (
                <motion.div 
                  key={i} 
                  className="accolade-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.15), duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  style={{
                    padding: '1.25rem 1.5rem',
                    background: 'white',
                    border: '1px solid var(--border)',
                    borderLeft: '3px solid var(--accent)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    cursor: 'default'
                  }}
                >
                  <div style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}>
                    {acc.type}
                  </div>
                  <div style={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: 'var(--text)',
                    lineHeight: 1.4,
                  }}>
                    {acc.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
