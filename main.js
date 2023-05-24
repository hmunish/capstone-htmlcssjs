// DOM Elements
const mobileMenu = document.querySelector('.mobile.menu');
const hamburgerIcon = document.querySelector('.hamburger_icon');
const closeIcon = document.querySelector('.close_icon');

// Functions

// Toggling Menu Function

function toggleMenu() {
  hamburgerIcon.classList.toggle('dsp_none');
  mobileMenu.classList.toggle('dsp_none');
}

// Event Listeners
hamburgerIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);