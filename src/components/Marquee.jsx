import React from 'react';

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Full stack engineer, cloud native, AI curious">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-set" key={copy} aria-hidden={copy === 1}>
            <span>FULL-STACK ENGINEER</span><i>✳</i><span>CLOUD NATIVE</span><i>✳</i>
            <span>AI CURIOUS</span><i>✳</i><span>PRODUCT MINDED</span><i>✳</i>
          </div>
        ))}
      </div>
    </div>
  );
}
