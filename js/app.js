"use strict";
const navBtn = document.getElementById("nav-btn");
const modalnav = document.getElementById("modal-nav");
let navIsVisible = false;
function toggleNav() {
  if (!navIsVisible) {
    nav.classList.remove("translate-x-[-100%]");
    modalnav.classList.remove("hidden");
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("header").style.background =
      "rgb(153 27 27 / 0.95)";
    document.getElementById("header").style.opacity = "1";
  } else {
    nav.classList.add("translate-x-[-100%]");
    modalnav.classList.add("hidden");
    document.getElementById("body").style.overflowY = "auto";
    if (window.scrollY > 0) {
      document.getElementById("header").style.background = "rgb(0 0 0 / 0.7)";
    } else {
      document.getElementById("header").style.background = "transparent";
    }
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
  threshold: 0.5,
};
const optionsHome = {
  threshold: 0.3,
};
const sectionHome = document.getElementById("section-inicio");
const sectionDron = document.getElementById("section-dron");
const sectionRobobloq = document.getElementById("section-robobloq");
const sectionBrazo = document.getElementById("section-brazo");
const setionSmartLed = document.getElementById("section-smart-led");
function removeBtnActive() {
  document.getElementById("home-link").classList.remove("active");
  document.getElementById("dron-link").classList.remove("active");
  document.getElementById("robobloq-link").classList.remove("active");
  document.getElementById("brazo-link").classList.remove("active");
  document.getElementById("smart-led-link").classList.remove("active");
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
      } else if (seccion == "section-smart-led") {
        document.getElementById("smart-led-link").classList.add("active");
      }
    }
  });
};

const callbackObserverHome = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      removeBtnActive();
      let seccion = entry.target.getAttribute("id");
      if (seccion == "section-inicio")
        document.getElementById("home-link").classList.add("active");
    }
  });
};

let observer = new IntersectionObserver(callbackObserver, options);
let observerHome = new IntersectionObserver(callbackObserverHome, optionsHome);

observer.observe(sectionDron);
observerHome.observe(sectionHome);
observer.observe(sectionRobobloq);
observer.observe(sectionBrazo);
observer.observe(setionSmartLed);

ScrollReveal().reveal(".img-secciones", { delay: 500 });

const linksMobile = document.getElementsByClassName("link-mobile");

for (const linkMobile of linksMobile) {
  linkMobile.addEventListener("click", () => {
    toggleNav();
  });
}
