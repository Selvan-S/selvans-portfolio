document.getElementById("myform").reset();
const hamburger = document.getElementById("nav-toggle");
let navMenu = document.getElementById("nav-menu");
let navList = document.querySelectorAll(".nav__link");
let sections = document.querySelectorAll("section");

function show_menu() {
  // To close the menu using hamburger icon.
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
  // To close the menu, after clicking any link in the menu.
  navList.forEach((element) => {
    element.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      let current = document.getElementsByClassName("active");
      current[0].classList.remove("active");
      element.classList.add("active");
    });
  });

  document.addEventListener("click", function handleClickOutsideBox(event) {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove("show");
    }
  });
}
show_menu();
