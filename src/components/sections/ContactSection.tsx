import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Link2, GitBranch, Code2 } from 'lucide-react';
import { PERSONAL } from '../data/portfolio';

const socials = [
  { label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, icon: Mail },
  { label: 'GitHub', value: 'github.com/AdityaWagh19', href: PERSONAL.github, icon: GitBranch },
  { label: 'LinkedIn', value: 'linkedin.com/in/adityawaghcse', href: PERSONAL.linkedin, icon: Link2 },
  { label: 'LeetCode', value: 'leetcode.com/u/Adityaftw', href: PERSONAL.leetcode, icon: Code2 },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          style={{ position: 'relative', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-num">06</div>
          <div className="section-eyebrow">Contact</div>
          <h2 className="section-big-title">
            LET'S<br />
            <span className="accent-text">CONNECT</span>
          </h2>
        </motion.div>

        <div className="contact-layout">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="contact-text">
              Whether you have a project in mind, a collaboration opportunity, 
              or just want to talk about films and code — I'm always open to 
              interesting conversations.
            </p>

            <div className="contact-socials">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="contact-social"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <Icon size={24} color="var(--muted)" />
                      <div>
                        <div className="contact-social-label">{s.label}</div>
                        <div className="contact-social-value">{s.value}</div>
                      </div>
                    </div>
                    <ArrowUpRight size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="contact-form-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="contact-form-title">Send a Quick Note</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const msg = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                window.open(`mailto:${PERSONAL.email}?subject=Hi from ${name}&body=${encodeURIComponent(msg)}`);
              }}
            >
              <div className="form-field">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <input
                  name="email"
                  type="email"
                  placeholder="Your email (optional)"
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <textarea
                  name="message"
                  placeholder="Your message..."
                  required
                  className="form-textarea"
                  style={{ minHeight: '150px' }}
                />
              </div>
              <button type="submit" className="nav-cta" style={{ border: 'none', cursor: 'pointer', padding: '1rem 2rem' }}>
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
