var body = document.querySelector("body");
var menuTrigger = document.querySelector("#toggle-main-menu-mobile");
var menuContainer = document.querySelector("#main-menu-mobile");

menuTrigger.onclick = function () {
  menuContainer.classList.toggle("open");
  menuTrigger.classList.toggle("is-active");
  body.classList.toggle("lock-scroll");
};

document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  var navLinks = document.querySelectorAll(".down-panel div > ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Get the target section's ID from the link's href
      var targetId = link.getAttribute("href").substring(1);

      var targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth",
      });

      navLinks.forEach(function (navLink) {
        navLink.classList.remove("down-nav-active");
      });

      link.classList.add("down-nav-active");
    });
  });
});
