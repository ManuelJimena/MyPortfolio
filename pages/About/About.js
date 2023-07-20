import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
export const About = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="about" id="about">
        <div class="about-img">
            <img src="images/about.png" alt="Profile picture">
        </div>

        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>Hi :)!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti aut at, cupiditate, fugit
                similique illum vitae eaque voluptates consequatur ipsam doloribus eum dolor. Enim autem tempora odio
                incidunt! Ipsam hic molestias ad voluptas doloribus ratione animi alias dicta quo.</p>
            <a href="#" class="btn">Read More</a>
        </div>
    </section>`;
};
