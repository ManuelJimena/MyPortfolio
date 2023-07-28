import "./Header.css";
export const Header = () => `
<h2 class="logo">Portfolio</h2>
<button class="bx bx-menu" id="menu-icon"></button>
<nav class="navbar" id="navbar">
    <ul>
        <li><a href="/" class="active" id="homelink">Home</a></li>
        <li><a href="/about" id="aboutlink">About</a></li>
        <li><a href="/skills" id="skillslink">Skills</a></li>
        <li><a href="/projects" id="projectslink">Projects</a></li>
        <li><a href="/contact" id="contactlink">Contact</a></li>
    </ul>
</nav>
<div class="bx bx-moon" id="darkMode-icon"></div>
`;