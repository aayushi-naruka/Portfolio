import React, { useState } from 'react';
import Arrow from './Arrow.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Aayushi Naruka home">
        AN<span className="wordmark-dot">.</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span />
      </button>
      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <Arrow diagonal /></a>
      </nav>
    </header>
  );
}
