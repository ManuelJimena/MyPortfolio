import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home" id="home">
<div class="home-content">
<h3>Hello, I am</h3>
<h1>Manuel Jimena</h1>
<p>A web development student living in Madrid, Spain. I enjoy creating content and learning.

<div class="social-media">
<a class="github" href="https://github.com/ManuelJimena" target="_blank"><img src="./icons/github.png" alt="GitHub logo"></a>
<a class="linkedin" href="https://github.com/ManuelJimena" target="_blank"><img src="./icons/linkedin.png" alt="Linkedin logo"></a></div>

<a class="btn" href="#" target="_blank">Download CV</a></div>
</section>`;
};