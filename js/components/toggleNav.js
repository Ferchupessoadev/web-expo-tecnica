let navIsVisible = false;
function toggleNav() {
  const nav = document.getElementById("nav");
  if (!navIsVisible) {
    nav.classList.remove("translate-x-[-100%]");
  } else {
    nav.classList.add("translate-x-[-100%]");
  }
  navIsVisible = !navIsVisible;
}

export default toggleNav;
