import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna, faImage, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import { skills } from '../data/portfolio';
import '../assets/styles/Expertise.scss';

const ICONS = { dna: faDna, image: faImage, robot: faRobot };

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill.title}>
              <FontAwesomeIcon icon={ICONS[skill.icon]} size="3x"/>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
              <div className="flex-chips">
                <span className="chip-title">Tools and methods:</span>
                {skill.tags.map((label) => <Chip key={label} className='chip' label={label} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
