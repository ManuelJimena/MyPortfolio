import "./Contact.css";
import { cleanPage } from "../../utils/cleanPage";
export const Contact = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="contact">
<p>g</p>
</section>`;
};