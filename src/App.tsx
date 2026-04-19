import { useLenis } from './hooks/useLenis';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import BackgroundSection from './components/BackgroundSection';
import HobbiesSection from './components/HobbiesSection';
import ContactSection from './components/ContactSection';
import { Download, ArrowUp } from 'lucide-react';
import { PERSONAL } from './data/portfolio';

import DynamicBackground from './components/DynamicBackground';

function App() {
  useLenis();

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative' }}>
      <DynamicBackground />
      <NavBar />
      <Hero />
      <main>
        <About />
        <ProjectsSection />
        <SkillsSection />
        <BackgroundSection />
        <HobbiesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className="footer-logo">ADITYA.WAGH</div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Aditya Wagh · Pune, India
          </p>
          <button
            className="footer-back"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top <ArrowUp size={12} />
          </button>
        </div>
      </footer>

      {/* Floating resume btn */}
      <a
        href={PERSONAL.resume}
        download="Resume_Aditya_Wagh.pdf"
        className="float-resume"
        id="download-resume-btn"
        aria-label="Download Resume"
      >
        <Download size={12} />
        Resume
      </a>
    </div>
  );
}

export default App;
