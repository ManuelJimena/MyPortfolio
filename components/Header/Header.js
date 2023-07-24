import "./Header.css";
export const Header = () => `
<a href="#" class="logo">Portfolio</a>
<nav class="navbar" id="navbar">
    <ul>
        <li><a href="#" class="active" id="homelink">Home</a></li>
        <li><a href="#" id="aboutlink">About</a></li>
        <li><a href="#" id="projectslink">Projects</a></li>
        <li><a href="#" id="contactlink">Contact</a></li>
    </ul>
</nav>
<div class="bx bx-moon" id="darkMode-icon"></div>
<div class="bx bx-menu" id="menu-icon"></div>
`;
