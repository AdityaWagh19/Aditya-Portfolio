import { motion } from 'framer-motion';
import { SKILLS } from '../../data/portfolio';

export default function SkillsSection() {
  // Flatten all skills into one array
  const allSkills = SKILLS.flatMap(cat => cat.skills);
  // Duplicate it so we have a seamless infinite scroll loop
  const marqueeSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="section" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          style={{ position: 'relative', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-num">03</div>
          <div className="section-eyebrow">Skills</div>
          <h2 className="section-big-title">
            THE<br />
            <span className="accent-text">TOOLKIT</span>
          </h2>
        </motion.div>

        {/* Sticky intro */}
        <motion.div
          className="skills-intro"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p style={{ marginBottom: '1.5rem', maxWidth: '600px' }}>
            From writing elegant algorithms in C++ to building full-stack web apps and 
            training ML models — here are the technologies I use to bring ideas to life.
          </p>
        </motion.div>
      </div>

      <div className="marquee-container" style={{ marginTop: '4rem' }}>
        <div className="marquee-content">
          {marqueeSkills.map((skill, index) => (
            <div key={index} className="marquee-item">
              {skill}
              <div className="dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
