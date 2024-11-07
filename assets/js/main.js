// nav menu
const toggleMenu = document.querySelector(".toggle-menu");
const menu = document.querySelector(".main-nav>.mobile-menu");
toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('show');
    menu.classList.toggle('show');
});