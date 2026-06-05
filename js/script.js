// Bloom — hamburger menu toggle (mobile)
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("main-nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Chiude il menu al click su un link (mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
// Cambia colore header dopo scroll
const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 150);
});
