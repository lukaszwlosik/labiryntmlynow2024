let mobileMenu = document.querySelector(".mobile-menu");
let homepageH1 = document.getElementById("h1-homepage");

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
  homepageH1.classList.toggle("hidden");
}
