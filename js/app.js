"use strict";
const navBtn = document.getElementById("nav-btn");
const modalnav = document.getElementById("modal-nav");
let navIsVisible = false;
function toggleNav() {
  if (!navIsVisible) {
    nav.classList.remove("translate-x-[-100%]");
    modalnav.classList.remove("hidden");
    document.getElementById("body").style.overflowY = "hidden";
  } else {
    nav.classList.add("translate-x-[-100%]");
    modalnav.classList.add("hidden");
    document.getElementById("body").style.overflowY = "auto";
  }
  navIsVisible = !navIsVisible;
}
    
navBtn.addEventListener("click", () => toggleNav());
modalnav.addEventListener("click", () => toggleNav());
