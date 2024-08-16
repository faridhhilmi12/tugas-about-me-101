const navbarNav = document.querySelector(".navbar-nav");
// pas diklik humberger
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
