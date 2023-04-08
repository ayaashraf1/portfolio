import React from 'react';
import GithubIcon from "../../assets/icons/GithubIcon.tsx";
import "./Menu.css";

function Menu() {
  return (
    <div id="menu-section" data-testid="menu-section">
      <div>
        <span>Aya&apos;s</span> portfolio
      </div>
      <div id="menu-section-right">
        <ul>
          <li><a href="#about-container">ABOUT</a></li>
          <li><a href="#work-section">WORK</a></li>
          <li><a href="#contact-container">CONTACT</a></li>
        </ul>
        <div>
          <a href="https://github.com/ayaashraf1?tab=repositories" data-testid="githubIcon">
            <GithubIcon color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
