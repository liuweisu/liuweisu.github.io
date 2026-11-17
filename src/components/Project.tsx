import React from "react";
import { projects, projectsNote } from '../data/portfolio';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <aside className="projects-note">
        <strong>{projectsNote.title}.</strong> {projectsNote.text}
      </aside>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project" key={p.title}>
            <a href={p.demo ?? p.repo} target="_blank" rel="noreferrer">
              <img src={p.image} className="zoom" alt={`${p.title} screenshot`} width="100%"/>
            </a>
            <a href={p.repo} target="_blank" rel="noreferrer"><h2>{p.title}</h2></a>
            <p>{p.description}</p>
            <div className="project-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
            <div className="project-links">
              <a href={p.repo} target="_blank" rel="noreferrer">Code</a>
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
