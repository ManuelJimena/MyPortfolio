import "./style.css";

import { linkPage } from "./utils/linkPage";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";
const header = document.querySelector("header");
header.innerHTML = Header();
linkPage("#homelink", Home);
linkPage("#aboutlink", About);
linkPage("#projectslink", Projects);
linkPage("#contactlink", Contact);
Home();

window.onscroll = () => {
    let header = document.querySelector('.header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
    };

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

const button = document.querySelector('#menu-icon')
const nav = document.querySelector('.navbar')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})