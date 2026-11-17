import React from 'react';
import Arrow from './Arrow.jsx';

export default function Projects() {
  return (
    <section className="projects section page-wrap" id="projects">
      <div className="section-heading reveal">
        <span className="section-kicker">03 / IN THE WORKSHOP</span>
        <span className="section-caption">EXPERIMENTS & IDEAS</span>
      </div>
      <article className="project-card reveal">
        <div className="project-visual">
          <div className="project-window">
            <div className="window-top"><span /><span /><span /><small>agent-workflow / playground</small></div>
            <div className="code-lines" aria-hidden="true">
              <p><i>01</i><span className="code-purple">async def</span> <b>answer_question</b>(query):</p>
              <p><i>02</i> &nbsp; context = <span className="code-green">await</span> retriever.search(query)</p>
              <p><i>03</i> &nbsp; response = <span className="code-green">await</span> agent.invoke(</p>
              <p><i>04</i> &nbsp; &nbsp; {`{"context": context, "query": query}`}</p>
              <p><i>05</i> &nbsp; )</p>
              <p><i>06</i> &nbsp; <span className="code-purple">return</span> response.with_sources</p>
              <p className="cursor-line"><i>07</i><span className="typing-cursor" /></p>
            </div>
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" /><div className="visual-core">AI<span>✳</span></div>
          </div>
          <span className="project-visual-label">A SMALL STEP TOWARD SMARTER SOFTWARE</span>
        </div>
        <div className="project-info">
          <div className="project-number">PERSONAL PROJECT / 2025—NOW</div>
          <h3>RAG & Agent<br /><span className="serif-word">Workflow</span></h3>
          <p>A hands-on exploration of grounded answers and multi-step AI reasoning. Ask questions over your own documents, follow the agent’s process, and see the sources behind each response.</p>
          <div className="project-tags"><span>LANGCHAIN</span><span>LANGGRAPH</span><span>FASTAPI</span><span>REACT</span></div>
          <a className="text-link project-link" href="mailto:narukaayushi02@gmail.com?subject=Tell%20me%20about%20your%20RAG%20project">Ask me about it <Arrow diagonal /></a>
        </div>
      </article>
    </section>
  );
}
