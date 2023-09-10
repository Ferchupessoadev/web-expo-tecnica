let navIsVisible = false;
function toggleNav() {
  const nav = document.getElementById("nav");
  const modalnav = document.getElementById("modal-nav");
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

export default toggleNav;
