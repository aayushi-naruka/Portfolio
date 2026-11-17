import React from 'react';
import { skills } from '../data/portfolioData.jsx';

export default function Toolkit() {
  return (
    <section className="toolkit section page-wrap reveal">
      <div className="section-heading">
        <span className="section-kicker">04 / MY TOOLKIT</span>
        <span className="section-caption">TOOLS CHANGE. CURIOSITY DOESN’T.</span>
      </div>
      <div className="skill-list">{skills.map((skill, index) => <span className="skill-chip" key={skill} style={{ '--delay': `${index * 35}ms` }}>{skill}</span>)}</div>
    </section>
  );
}
