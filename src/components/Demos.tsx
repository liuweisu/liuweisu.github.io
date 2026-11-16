import React, { useState } from "react";
import { demos } from '../data/portfolio';
import '../assets/styles/Demos.scss';

// Each project publishes an interactive page on GitHub Pages; this section embeds them.
// Only the selected demo is loaded, so the portfolio itself stays fast.
function Demos() {
  const [active, setActive] = useState(0);
  if (!demos.length) return null;
  const demo = demos[active];
  return (
    <div className="demos-container" id="demos">
      <h1>Try it</h1>
      <p className="demos-lead">Every demo below runs the project's own code in your browser. Nothing is uploaded.</p>
      <div className="demo-tabs" role="tablist">
        {demos.map((d, i) => (
          <button key={d.url} role="tab" aria-selected={i === active} className={i === active ? 'active' : ''} onClick={() => setActive(i)}>
            {d.title}
          </button>
        ))}
      </div>
      <div className="demo-frame">
        <iframe key={demo.url} src={demo.url} title={`${demo.title} demo`} loading="lazy" />
      </div>
      <a className="demo-open" href={demo.url} target="_blank" rel="noreferrer">Open {demo.title} in a new tab ↗</a>
    </div>
  );
}

export default Demos;
