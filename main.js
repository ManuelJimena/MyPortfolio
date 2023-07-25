import "./style.css";
import { Header } from "./components/Header/Header";
import { router, addLinkListeners } from './router/router'

const header = document.querySelector("header");
header.innerHTML = Header();

router();
addLinkListeners();

window.onscroll = () => {
    let header = document.querySelector('.header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
    };

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    darkModeIcon.style.display = nav.classList.contains('activo') ? 'none' : 'block';
};



const button = document.querySelector('#menu-icon');
const nav = document.querySelector('.navbar');
const menuLinks = document.querySelectorAll('.navbar a');

button.addEventListener('click', () => {
    nav.classList.toggle('activo');

});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('activo');
  });
}); 