import React from 'react';
import { experience } from '../data/portfolioData.jsx';

export default function Experience() {
  return (
    <section className="experience section page-wrap" id="experience">
      <div className="section-heading reveal">
        <span className="section-kicker">02 / WHERE I’VE BEEN</span>
        <span className="section-caption">A FEW CHAPTERS SO FAR</span>
      </div>
      <div className="experience-list">
        {experience.map((job, index) => (
          <article className="experience-item reveal" key={job.company}>
            <div className="experience-index">0{index + 1}</div>
            <div className="experience-main">
              <div className="experience-title">
                <div><h3>{job.company}<span className="accent">.</span></h3><p>{job.role} <span>·</span> {job.place}</p></div>
                <span className="period">{job.period}</span>
              </div>
              <p className="job-summary">{job.summary}</p>
              <ul>{job.points.map((point, pointIndex) => <li key={pointIndex}>{point}</li>)}</ul>
              <p className="stack-line"><span>BUILT WITH</span>{job.stack}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
