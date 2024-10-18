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

var places= [
  { name: "Bangaluru", coords: [12.971599, 77.594566],style: {
      initial: {
        fill: 'green'
      }
    }
},  // No offset
  { name: 'Austin', coords: [30.2672, -97.7431],style: {
      initial: {
        fill: 'green'
      }
    } },        // No offset
  { name: "Mangalore", coords: [13.0108, 74.7943], offsets: [-75, 0],style: {
      initial: {
        fill: 'green'
      }
    } } // Custom offset
];
var map = new jsVectorMap({
labels: {
  markers: {
    // Render the marker name or fallback to 'Not available'
    render(marker, index) {
      return marker.name || marker.labelName || 'Not available';
    },
    // Add label offset from the marker object
    offsets: function(marker) {
      return places[marker].offsets || [0,0] // Default offset [0, 0] if not provided
    }
  }
},
selector: "#contact-map",
map: "world",
markers: places
});



