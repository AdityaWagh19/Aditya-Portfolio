import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const UP = {
  hidden: { opacity: 0, y: 30 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const RotatingBadge = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      style={{
        position: 'relative',
        width: '140px',
        height: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        style={{ position: 'absolute', inset: 0, overflow: 'visible' }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text
          fontSize="9.5"
          fontWeight="600"
          fill="var(--text)"
          letterSpacing="0.1em"
          style={{ textTransform: 'uppercase', fontFamily: 'var(--body)' }}
        >
          <textPath href="#circlePath" startOffset="0%">
            ADITYA WAGH • CREATIVE BUILDER • 
          </textPath>
        </text>
      </svg>
      <div style={{ fontFamily: 'var(--display)', fontSize: '2.5rem', lineHeight: 1 }}>AW</div>
    </motion.div>
  );
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="home" ref={ref} className="hero">
      <motion.div className="hero-inner" style={{ opacity }}>
        {/* ── Top row: name + monogram */}
        <motion.div
          className="hero-top-row"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Left — name */}
          <div className="hero-title-block" style={{ display: 'flex', flexDirection: 'column' }}>
            <motion.span className="hero-eyebrow" variants={UP} custom={0}>
              cse student & builder ✦
            </motion.span>
            <div className="hero-name-container">
              <div className="hero-name">
                <div style={{ display: 'flex' }}>
                  <motion.span 
                    variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 }}}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="accent-text"
                  >
                    A
                  </motion.span>
                  {Array.from("DITYA").map((char, i) => (
                    <motion.span 
                      key={i} 
                      variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 }}}
                      transition={{ duration: 0.6, delay: 0.25 + i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                
                <div style={{ display: 'flex' }}>
                  <motion.span 
                    variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 }}}
                    transition={{ duration: 0.6, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="accent-text"
                  >
                    W
                  </motion.span>
                  {Array.from("AGH").map((char, i) => (
                    <motion.span 
                      key={i} 
                      variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 }}}
                      transition={{ duration: 0.6, delay: 0.7 + i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — badge + tags */}
          <motion.div
            className="hero-right"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2rem' }}
          >
            <motion.div variants={UP} custom={0.3}>
              <RotatingBadge />
            </motion.div>
            
            <div className="hero-tags" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'flex-end', marginTop: 0 }}>
              {['Machine Learning', 'Web Dev', 'Pune, India'].map((t, i) => (
                <motion.span
                  key={t}
                  variants={UP}
                  custom={0.4 + i * 0.1}
                  whileHover={{ y: -2, scale: 1.05 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    border: '1px solid var(--border)',
                    borderRadius: '50px',
                    padding: '0.6rem 1.2rem',
                    background: 'var(--surface)',
                    color: 'var(--text)',
                    cursor: 'default'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Divider */}
        <motion.div
          className="hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformOrigin: 'left', background: 'linear-gradient(to right, var(--accent), var(--border))' }}
        />

        {/* ── Bottom: subtitle + CTA */}
        <motion.div
          className="hero-bottom-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <p className="hero-subtitle">
            "I build thoughtful digital products, from intelligent systems to<br />
            <em>simple, well-crafted web experiences.</em>"
          </p>
          <div className="hero-actions">
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -4, boxShadow: '0 10px 20px -10px var(--accent)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              View Work →
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -4, background: 'var(--text)', color: 'white' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Say Hello
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.span
           animate={{ y: [0, 5, 0] }}
           transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll
        </motion.span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
