
const burger = document.querySelector(".burger");

const navMobile = document.querySelector(".header_nav_navigation");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMobile.classList.toggle("active");
});