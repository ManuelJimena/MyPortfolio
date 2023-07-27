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
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Modo oscuro
const darkModeIcon = document.querySelector('#darkMode-icon');
const body = document.body;

/* Función para cambiar los iconos/imagen y guardar en el localstorage */

const toggleDarkMode = () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('darkMode', 'enabled');
    }
};

// Lógica para cargar el modo y la imagen al cargar la página
const currentMode = localStorage.getItem('darkMode');

if (currentMode === 'enabled') {
    body.classList.add('dark-mode');
    darkModeIcon.classList.replace('bx-moon', 'bx-sun');
} else {
    body.classList.remove('dark-mode');
    darkModeIcon.classList.replace('bx-sun', 'bx-moon');
}

// Lógica para cambiar el modo y la imagen al hacer clic en el icono de modo oscuro
darkModeIcon.onclick = () => {
    toggleDarkMode();
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