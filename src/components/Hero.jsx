import React from 'react';
import Arrow from './Arrow.jsx';

export default function Hero() {
  return (
    <section className="hero page-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> OPEN TO WHAT’S NEXT <span className="eyebrow-line" /></div>
        <h1>Building things<br />that <span className="serif-word">move</span><span className="accent">.</span></h1>
        <p className="hero-description">
          I’m Aayushi — a software engineer who turns complex problems into
          reliable systems and thoughtful digital experiences.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#experience">Explore my work <Arrow /></a>
          <a className="text-link" href="/AAYUSHI_NARUKA_RESUME.pdf" target="_blank" rel="noreferrer">View résumé <Arrow diagonal /></a>
        </div>
        <div className="hero-meta"><span>BASED IN BENGALURU, INDIA</span><span>AVAILABLE WORLDWIDE <i>↗</i></span></div>
      </div>
      <div className="hero-art" aria-label="Abstract animated orbital illustration" role="img">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="orbit-center"><span>AN</span><i /></div>
        <div className="orbit-label label-top">SYSTEMS<br />THINKER</div>
        <div className="orbit-label label-bottom">BUILDER<br />BY NATURE</div>
        <span className="orbit-star star-one">✳</span>
        <span className="orbit-star star-two">✳</span>
        <span className="orbit-cross">+</span>
      </div>
      <div className="hero-index"><span>01</span><span className="index-rule" /><span>SCROLL TO EXPLORE</span></div>
    </section>
  );
}
