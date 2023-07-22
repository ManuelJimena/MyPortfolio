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
          <p>
            A web development student living in Madrid, Spain. I enjoy creating
            content and learning.
          </p>
          <div class="social-media">
            <a
              class="github"
              href="https://github.com/ManuelJimena"
              target="_blank"
              ><i class="bx bxl-github"></i
            ></a>
            <a
              class="linkedin"
              href="https://github.com/ManuelJimena"
              target="_blank"
              ><i class="bx bxl-linkedin"></i
            ></a>
          </div>
          <a href="./pdf/ManuelJimenaGarcíaCV.pdf" class="btn" target="_blank">Download CV</a>
        </div>
        <div class="profession-container">
          <div class="profession-box">
            <div class="profession" style="--i: 0">
              <h3>Backend</h3>
            </div>
            <div class="profession" style="--i:1;">
            <h3>Developer</h3>
            </div>
              <div class="profession" style="--i:2;">
              <h3>Fullstack</h3>
            </div>
               <div class="profession" style="--i:3;">
               <h3>Frontend</h3>
            </div>
          <div class="circle"></div>
            </div>

            <div class="overlay"></div>
        </div>

        <div class="home-img">
            <img src="/images/home.png" alt="Profile picture">
        </div>
    </section>`;
};