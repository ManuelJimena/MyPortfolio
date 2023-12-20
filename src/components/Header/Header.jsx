import './Header.css';
import { useEffect, useState, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'enabled');

  const toggleSticky = useCallback(() => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleSticky);
    return () => window.removeEventListener('scroll', toggleSticky);
  }, [toggleSticky]);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';

    const imageElement = document.querySelector('#image-element');
    if (imageElement) {
      imageElement.src = darkMode
        ? 'https://res.cloudinary.com/dhjmt9vvq/image/upload/v1697300018/Portfolio/logodeveloper_dark_j3j2cy.webp'
        : 'https://res.cloudinary.com/dhjmt9vvq/image/upload/v1697297300/Portfolio/logodeveloper_ppqmat.webp';
    }

    localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
  }, [darkMode]);

  const handleClick = () => setNavbar(prevNavbar => !prevNavbar);
  const handleLinkClick = () => setNavbar(false);
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  const links = [
    { to: "/", id: "homelink", text: "Home" },
    { to: "/about", id: "aboutlink", text: "About" },
    { to: "/skills", id: "skillslink", text: "Skills" },
    { to: "/projects", id: "projectslink", text: "Projects" },
    { to: "/contact", id: "contactlink", text: "Contact" },
  ];

  return (
    <header className="header" translate="no">
      <Link to="/">
        <h2 className="logo">Portfolio</h2>
      </Link>
      <button className="bx bx-menu" id="menu-icon" onClick={handleClick}></button>
      <nav className={`navbar ${navbar ? 'activo' : ''}`} id="navbar">
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <NavLink to={link.to} id={link.id} onClick={handleLinkClick}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`} id="darkMode-icon" onClick={toggleDarkMode}></div>
    </header>
  );
};

export default Header;
