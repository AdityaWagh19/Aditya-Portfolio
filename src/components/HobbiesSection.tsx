import { motion } from 'framer-motion';
import { ArrowUpRight, Film, PenTool } from 'lucide-react';
import { PERSONAL, FAVORITE_FILMS } from '../data/portfolio';

const hobbies = [
  {
    icon: <Film strokeWidth={1.5} size={36} />,
    title: 'Cinema',
    sub: 'Film Diary',
    desc: 'A deep obsession with storytelling, genre, and visual language. Watching films taught me how to think in patterns — which led directly to building a ML-powered recommendation system.',
    link: PERSONAL.letterboxd,
    linkLabel: 'Letterboxd Diary',
    extra: FAVORITE_FILMS.slice(0, 5).map(f => f.title),
    extraLabel: 'Favourites:',
  },
  {
    icon: <PenTool strokeWidth={1.5} size={36} />,
    title: 'Writing',
    sub: 'Short Stories & Reflections',
    desc: 'I write short stories, journal entries, and fragments of thought that sit at the edge of technology and feeling. Posted occasionally on Instagram.',
    link: PERSONAL.instagram,
    linkLabel: 'View on Instagram',
    extra: [
      '"Between frames, we find the truths that dialogue cannot carry."',
      '"Every algorithm is a story — inputs as characters, output as resolution."',
    ],
    extraLabel: 'Snippets:',
    isQuotes: true,
  },
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="section">
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          style={{ position: 'relative', marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-num">05</div>
          <div className="section-eyebrow">Interests & Hobbies</div>
          <h2 className="section-big-title">
            BEYOND THE<br />
            <span className="accent-text">CODE</span>
          </h2>
        </motion.div>

        <div className="hobbies-grid">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.title}
              className="hobby-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="hobby-icon">{h.icon}</span>
              <h3 className="hobby-title">{h.title}</h3>
              <div className="hobby-sub">{h.sub}</div>
              <p className="hobby-desc">{h.desc}</p>

              {/* Extra content */}
              {h.extra && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: '0.75rem',
                  }}>
                    {h.extraLabel}
                  </div>
                  {"isQuotes" in h && h.isQuotes ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {h.extra.map((q: string) => (
                        <p key={q} style={{
                          fontFamily: 'var(--serif)',
                          fontStyle: 'italic',
                          fontSize: '0.8rem',
                          lineHeight: 1.6,
                          color: 'var(--muted)',
                          borderLeft: '2px solid var(--border)',
                          paddingLeft: '0.75rem',
                        }}>
                          {q}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="hobby-films">
                      {h.extra.map((f: string) => (
                        <span key={f} className="hobby-film-pill">{f}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <a
                href={h.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hobby-link"
              >
                {h.linkLabel}
                <ArrowUpRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
