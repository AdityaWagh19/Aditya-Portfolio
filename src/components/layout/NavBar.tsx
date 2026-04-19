import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download } from 'lucide-react';
import { PERSONAL } from '../data/portfolio';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['About', 'Projects', 'Skills', 'Education', 'Hobbies', 'Contact'];

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="navbar-logo">
          ADITYA<span className="accent-text">.</span>WAGH
        </a>
        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>
        <a
          href={PERSONAL.resume}
          download="Resume_Aditya_Wagh.pdf"
          className="nav-cta"
        >
          <Download size={12} style={{ display: 'inline', marginRight: '0.3rem' }} />
          Resume
        </a>
      </nav>
    </>
  );
}
