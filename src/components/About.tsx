import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={reveal}
          style={{ position: 'relative', marginBottom: '4rem' }}
        >
          <div className="section-num">01</div>
          <div className="section-eyebrow">About</div>
          <h2 className="section-big-title">
            WHO<br />
            AM I?
          </h2>
        </motion.div>

        <div className="about-grid">
          {/* Photo */}
          <motion.div
            className="about-photo-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="about-photo" style={{ overflow: 'hidden', background: 'white' }}>
              <img 
                src="/about_doodle_color_final.png" 
                alt="Aditya with cats colored doodle" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <blockquote className="about-quote" style={{ fontStyle: 'normal', fontWeight: 500, color: 'var(--text)' }}>
              I build thoughtful digital products, from intelligent systems to simple, well-crafted web experiences.
            </blockquote>
            <p className="about-text">
              I’m a Computer Science student at Wadia College of Engineering in Pune, and I spend most of my time somewhere between machine learning and web development. I enjoy figuring out how things work under the hood, but I care just as much about how they feel to the person using them.
            </p>
            <p className="about-text">
              Outside of coding, I’m really into cinema and storytelling. I write short pieces, think a lot about narratives, and tend to notice patterns everywhere, in movies, in data, and even in everyday life.
            </p>

            <motion.div 
              className="about-stats"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '2rem',
                borderTop: '1px solid var(--border)',
                paddingTop: '2rem',
                marginTop: '3rem',
                alignItems: 'start'
              }}
            >
              {/* Wadia Badge as first grid item */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="about-wadia-card"
              >
                Wadia<br />College ✦<br />CS '27
              </motion.div>

              {[
                { num: '400+', label: 'LeetCode Problems' },
                { num: '5+', label: 'Projects Shipped' },
                { num: '∞', label: 'Pattern Seeking' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="about-stat-num" style={{ fontSize: '3.5rem', fontWeight: 800 }}>{stat.num}</div>
                  <div className="about-stat-label" style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--muted)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
