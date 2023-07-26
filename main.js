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
const body = document.body;

const enableDarkMode = () => {
    darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  };

const disableDarkMode = () => {
    darkModeIcon.classList.replace('bx-sun', 'bx-moon');
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  };

const currentMode = localStorage.getItem('darkMode');
  if (currentMode === 'enabled') {
    enableDarkMode();
    } else {
    disableDarkMode();
  }

darkModeIcon.onclick = () => {
  if (body.classList.contains('dark-mode')) {
    disableDarkMode();
    } else {
    enableDarkMode();
    }
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