import React from 'react';
import Arrow from './Arrow.jsx';

export default function Contact() {
  return (
    <footer className="contact section page-wrap" id="contact">
      <div className="section-heading reveal">
        <span className="section-kicker">05 / YOUR TURN</span>
        <span className="section-caption">GOOD THINGS START WITH A HELLO</span>
      </div>
      <div className="contact-content reveal">
        <p className="contact-pretitle">HAVE A GOOD ONE IN MIND?</p>
        <h2>Let’s make<br /><span className="serif-word">it matter</span><span className="accent">.</span></h2>
        <a className="contact-email" href="mailto:narukaayushi02@gmail.com">narukaayushi02@gmail.com <Arrow diagonal /></a>
        <div className="contact-bottom">
          <p>From a big idea to a tricky system—<br />I’m always up for a thoughtful conversation.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/aayushi-naruka" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a>
            <a href="https://github.com/aayushi-naruka" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a>
            <a href="https://drive.google.com/file/d/13MqZKgkZrL5IclwoQ9o9ABfam9Q4fJdq/view?usp=sharing" target="_blank" rel="noopener noreferrer">RÉSUMÉ <Arrow diagonal /></a>
          </div>
        </div>
      </div>
      <div className="footer-line"><a className="wordmark" href="#home">AN<span className="wordmark-dot">.</span></a><span>DESIGNED WITH INTENTION · © {new Date().getFullYear()} AAYUSHI NARUKA</span><a href="#home">BACK TO TOP ↑</a></div>
    </footer>
  );
}
