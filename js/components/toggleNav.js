let navIsVisible = false;
function toggleNav(nav, modalnav) {
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
