import toggleNav from "/js/components/toggleNav.js";

const navBtn = document.getElementById("nav-btn");
const modalnav = document.getElementById("modal-nav");
navBtn.addEventListener("click", () => toggleNav(nav, modalnav));
modalnav.addEventListener("click", () => toggleNav(nav, modalnav));
