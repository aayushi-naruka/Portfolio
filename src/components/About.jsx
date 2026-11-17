import React from 'react';

export default function About() {
  return (
    <section className="about section page-wrap reveal" id="about">
      <div className="section-heading">
        <span className="section-kicker">01 / A LITTLE ABOUT ME</span>
        <span className="section-caption">THE PERSON BEHIND THE PULL REQUESTS</span>
      </div>
      <div className="about-grid">
        <h2>Curious mind.<br /><span className="serif-word">Engineer’s</span> hands.</h2>
        <div className="about-copy">
          <p className="about-lede">I like making complicated things feel simple.</p>
          <p>For 4.5+ years, I’ve worked across the stack—from responsive interfaces to event-driven systems—building software that’s dependable, useful, and ready to scale.</p>
          <p>Lately, I’ve been exploring how generative AI, retrieval-augmented generation, and agentic workflows can make products more capable. I learn by building, and I care about the details all the way from architecture to the final interaction.</p>
          <div className="education"><span className="education-icon">✳</span><span><b>B.Tech, Computer Science</b><small>Rajasthan Technical University · 2019—2023</small></span></div>
        </div>
      </div>
      <div className="stats-row">
        <div className="stat"><strong>4.5<span>+</span></strong><small>YEARS BUILDING</small></div>
        <div className="stat"><strong>30<span>%</span></strong><small>LOWER OPERATING COSTS</small></div>
        <div className="stat"><strong>3<span>×</span></strong><small>PROCESSING SCALE</small></div>
        <div className="stat"><strong>75<span>%</span></strong><small>FEWER API CALLS</small></div>
      </div>
    </section>
  );
}
