var body = document.querySelector("body");
var menuTrigger = document.querySelector("#toggle-main-menu-mobile");
var menuContainer = document.querySelector("#main-menu-mobile");

menuTrigger.onclick = function () {
  menuContainer.classList.toggle("open");
  menuTrigger.classList.toggle("is-active");
  body.classList.toggle("lock-scroll");
};

document.addEventListener("DOMContentLoaded", function () {
  function goToSlideHash(targetId) {
    if (!targetId) return;
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
  }

  // Get all navigation links
  var navLinks = document.querySelectorAll(".down-panel div > ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      event.preventDefault();
      goToSlideHash(href.substring(1));

      navLinks.forEach(function (navLink) {
        navLink.classList.remove("down-nav-active");
      });
      link.classList.add("down-nav-active");
    });
  });

  // In-slide hash CTAs (e.g. hero "Learn more") need the same Reveal scroll path
  document.querySelectorAll(".hero-cta-btn[href^='#'], .section-cta-btn[href^='#']").forEach(function (link) {
    link.addEventListener("click", function (event) {
      var href = link.getAttribute("href") || "";
      if (!href.startsWith("#") || href.length < 2) return;
      event.preventDefault();
      goToSlideHash(href.substring(1));
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

  // Partnership + expertise logos: reshuffle order on every page load
  document.querySelectorAll(".images-container.partners, .images-container.expertise").forEach(function (grid) {
    var fixed = Array.prototype.slice.call(grid.querySelectorAll(".image-item--underpin"));
    var movable = Array.prototype.slice.call(grid.querySelectorAll(".image-item:not(.image-item--underpin)"));
    shuffleNodes(movable).forEach(function (item) {
      grid.appendChild(item);
    });
    fixed.forEach(function (item) {
      grid.appendChild(item);
    });
  });

  // Principle detail: float title bar once sticky engages
  document.querySelectorAll("[data-principle-title-float]").forEach(function (header) {
    var sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:relative;height:1px;margin:0;pointer-events:none;";
    header.parentNode.insertBefore(sentinel, header);
    if (!("IntersectionObserver" in window)) return;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          header.classList.toggle("is-floating", !entry.isIntersecting);
        });
      },
      { rootMargin: "-76px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(sentinel);
  });

  // Case studies: reshuffle card order on every page load
  document.querySelectorAll("[data-case-studies-grid]").forEach(function (grid) {
    shuffleNodes(grid.querySelectorAll(".case-study-card")).forEach(function (card) {
      grid.appendChild(card);
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

