import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { profile } from '../data/portfolio';
import '../assets/styles/Main.scss';

function SocialIcons({ className }: { className: string }) {
  return (
    <div className={className}>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
      {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>}
    </div>
  );
}

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile.avatar} alt="Avatar" />
        </div>
        <div className="content">
          <SocialIcons className="social_icons" />
          <h1>{profile.name}</h1>
          <p>{profile.headline}</p>
          <p className="intro">{profile.intro}</p>
          <SocialIcons className="mobile_social_icons" />
        </div>
      </div>
    </div>
  );
}

export default Main;
