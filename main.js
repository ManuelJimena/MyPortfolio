import "./style.css";
import { Header } from "./components/Header/Header";
import { router, addLinkListeners } from './router/router';

// Función del router
const header = document.querySelector("header");
header.innerHTML = Header();
router();
addLinkListeners();

// Navbar fijo al hacer scroll
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Modo dark
let darkModeIcon = document.querySelector('#darkMode-icon');
const body = document.body;

/* Función para cambiar los iconos/imagen y guardar en el localstorage */
const changeImage = (imageName) => {
    const imageElement = document.querySelector('#image-element');
    if (imageElement) {
        imageElement.src = imageName;
    }
};

const enableDarkMode = () => {
    darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    changeImage('./images/2.png');
};

const disableDarkMode = () => {
    darkModeIcon.classList.replace('bx-sun', 'bx-moon');
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
    changeImage('./images/1.png');
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

// Hamburguesa
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

