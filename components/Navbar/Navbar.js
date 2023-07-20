import "./Navbar.css";
export const changeTheme = () => {
const themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click", () => {
document.body.classList.toggle("light");
changeText();
});
};
export const changeText = () => {
const themeBtn = document.querySelector("#themeBtn");
if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
} else {
themeBtn.innerText = "☀";
}
};
export const Navbar = () => `
<nav class="navbar">
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