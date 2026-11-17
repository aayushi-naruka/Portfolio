import React, { useEffect } from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Projects from './components/Projects.jsx';
import Toolkit from './components/Toolkit.jsx';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Toolkit />
      </main>
      <Contact />
    </>
  );
}
