import "./Header.css";
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {

  const [navbar, setNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    window.addEventListener('scroll', () => {
      header.classList.toggle('sticky', window.scrollY > 100);
    });
    
    const darkModeLocalStorageKey = 'darkMode';
    const currentMode = localStorage.getItem(darkModeLocalStorageKey);

    if (currentMode === 'enabled') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }

  }, []);

  const handleClick = () => {
    setNavbar(!navbar);
  }

  const handleLinkClick = () => {
    setNavbar(false);
  }

  const handleDarkMode = () => {
    const body = document.body;
    const darkModeIcon = document.querySelector('#darkMode-icon');
    const imageElement = document.querySelector('#image-element');
    const darkModeLogoUrl = "https://res.cloudinary.com/dhjmt9vvq/image/upload/v1697300018/Portfolio/logodeveloper_dark_j3j2cy.webp";
    const defaultLogoUrl = "https://res.cloudinary.com/dhjmt9vvq/image/upload/v1697297300/Portfolio/logodeveloper_ppqmat.webp";

    if (darkMode) {
      darkModeIcon.classList.replace('bx-sun', 'bx-moon');
      body.classList.remove('dark-mode');
      imageElement.setAttribute('src', defaultLogoUrl);
      setDarkMode(false);
      localStorage.setItem('darkMode', 'disabled');
    } else {
      darkModeIcon.classList.replace('bx-moon', 'bx-sun');
      body.classList.add('dark-mode');
      imageElement.setAttribute('src', darkModeLogoUrl);
      setDarkMode(true);
      localStorage.setItem('darkMode', 'enabled');
    }
  }

  return (
    <header className="header" translate="no">
      <Link to="/"><h2 className="logo">Portfolio</h2></Link>
      <button className="bx bx-menu" id="menu-icon" onClick={handleClick}></button>
      <nav className={`navbar ${navbar ? 'activo' : ''}`} id="navbar">
        <ul>
          <li><NavLink to="" className="active" id="homelink" onClick={handleLinkClick}>Home</NavLink></li>
          <li><NavLink to="about" id="aboutlink" onClick={handleLinkClick}>About</NavLink></li>
          <li><NavLink to="skills" id="skillslink" onClick={handleLinkClick}>Skills</NavLink></li>
          <li><NavLink to="projects" id="projectslink" onClick={handleLinkClick}>Projects</NavLink></li>
          <li><NavLink to="contact" id="contactlink" onClick={handleLinkClick}>Contact</NavLink></li>
        </ul>
      </nav>
      <div className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`} id="darkMode-icon" onClick={handleDarkMode}></div>
    </header>
  );
};

export default Header;