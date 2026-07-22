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
      var href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      event.preventDefault();
      var targetId = href.substring(1);
      if (!targetId) return;

      // Drive Reveal (and the URL) through the hash so bookmarks stay in sync
      var target = document.getElementById(targetId);
      if (target) {
        var page =
          target.closest(".scroll-page") ||
          target.closest(".slides section") ||
          target;
        var vp =
          typeof Reveal !== "undefined" && Reveal.getViewportElement
            ? Reveal.getViewportElement()
            : null;
        if (vp && vp.classList.contains("reveal-scroll")) {
          vp.scrollTop = page.offsetTop;
          vp.dispatchEvent(new Event("scroll"));
        } else {
          page.scrollIntoView({ block: "start" });
        }
      }
      if (location.hash !== "#" + targetId) {
        location.hash = targetId;
      }

      navLinks.forEach(function (navLink) {
        navLink.classList.remove("down-nav-active");
      });
      link.classList.add("down-nav-active");
    });
  });

  function shuffleNodes(nodes) {
    var items = Array.prototype.slice.call(nodes);
    for (var i = items.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = items[i];
      items[i] = items[j];
      items[j] = tmp;
    }
    return items;
  }

  // Homepage thesis: randomly sample N principles from the collection
  document.querySelectorAll(".principles-sample").forEach(function (list) {
    var count = parseInt(list.getAttribute("data-sample-count") || "4", 10);
    var items = shuffleNodes(list.querySelectorAll(".principle-candidate"));
    if (items.length <= count) {
      items.forEach(function (item) {
        item.classList.remove("is-sampled-out");
      });
      return;
    }
    items.forEach(function (item, index) {
      if (index < count) {
        item.classList.remove("is-sampled-out");
        list.appendChild(item);
      } else {
        item.classList.add("is-sampled-out");
      }
    });
  });

  // Partnership logos: reshuffle order on every page load
  document.querySelectorAll(".images-container.partners").forEach(function (grid) {
    shuffleNodes(grid.querySelectorAll(".image-item")).forEach(function (item) {
      grid.appendChild(item);
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
// var map = new jsVectorMap({
// labels: {
//   markers: {
//     // Render the marker name or fallback to 'Not available'
//     render(marker, index) {
//       return marker.name || marker.labelName || 'Not available';
//     },
//     // Add label offset from the marker object
//     offsets: function(marker) {
//       return places[marker].offsets || [0,0] // Default offset [0, 0] if not provided
//     }
//   }
// },
// selector: "#contact-map",
// map: "world",
// markers: places
// });

