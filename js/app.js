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

addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.getElementById("header").style.background = "rgb(0 0 0 / 0.7)";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
});

const options = {
  threshold: 0.6,
};
const sectionHome = document.getElementById("section-inicio");
const sectionDron = document.getElementById("section-dron");
const sectionRobobloq = document.getElementById("section-robobloq");
const sectionBrazo = document.getElementById("section-brazo");
function removeBtnActive() {
  document.getElementById("home-link").classList.remove("active");
  document.getElementById("dron-link").classList.remove("active");
  document.getElementById("robobloq-link").classList.remove("active");
  document.getElementById("brazo-link").classList.remove("active");
}

const callbackObserver = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.isIntersecting);
      removeBtnActive();
      let seccion = entry.target.getAttribute("id");
      if (seccion == "section-dron") {
        document.getElementById("dron-link").classList.add("active");
      } else if (seccion == "section-inicio") {
        document.getElementById("home-link").classList.add("active");
      } else if (seccion == "section-robobloq") {
        document.getElementById("robobloq-link").classList.add("active");
      } else if (seccion == "section-brazo") {
        document.getElementById("brazo-link").classList.add("active");
      }
    } else {
      document.getElementById("dron-link").classList.remove("active");
    }
  });
};

let observer = new IntersectionObserver(callbackObserver, options);

observer.observe(sectionDron);
observer.observe(sectionHome);
observer.observe(sectionRobobloq);
observer.observe(sectionBrazo);
