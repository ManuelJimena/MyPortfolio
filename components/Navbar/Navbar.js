import "./Navbar.css";

export const Navbar = () => `
<nav class="navbar" id="header">
<h2>Portfolio</h2>
<ul>
<li>
<a href="#" class="active" id="homelink">Home</a>
</li>
<li>
<a href="#" id="aboutlink">About</a>
</li>
<li>
<a href="#" id="projectslink">Projects</a>
</li>
<li>
<a href="#" id="contactlink">Contact</a>
</li>
<li>
<div class="bx bx-moon" id="darkMode-icon"></div>
</li>
</ul>
</nav>
`;
