const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    navToggle.setAttribute("aria-expanded", isOpen);
});

const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    siteHeader.classList.toggle("site-header--scrolled", window.scrollY > 50);
});