import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
export const About = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="about">
<p>m</p>
</section>`;
};