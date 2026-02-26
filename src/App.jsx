import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-subtle)', marginTop: '4rem' }}>
        <p className="text-muted">Built by Omkar Tilekar</p>
      </footer>
    </div>
  );
}

export default App;
