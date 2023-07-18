import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home">
<p>Hey, I'm</p>
<h1>Manuel Jimena</h1>
<p>A web development student living in Madrid, Spain. I enjoy creating content and learning.
<a href="mailto:manuel.jimena29@gmail.com">Say hi →</a>
</section>`;
};