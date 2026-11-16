import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { profile } from '../data/portfolio';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>}
      </div>
      <p>Built on the <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">react-portfolio-template</a> by Yuji Sato.</p>
    </footer>
  );
}

export default Footer;
