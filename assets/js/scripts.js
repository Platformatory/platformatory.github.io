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

  // Principles studio: randomize index + left/right selection
  document.querySelectorAll("[data-principles-index]").forEach(function (indexList) {
    var studio = indexList.closest(".principles-studio");
    if (!studio) return;
    var buttons = shuffleNodes(indexList.querySelectorAll(".principles-index-item"));
    buttons.forEach(function (btn, i) {
      indexList.appendChild(btn);
      var num = btn.querySelector("[data-principle-num]");
      if (num) {
        num.textContent = i + 1 < 10 ? "0" + (i + 1) : String(i + 1);
      }
    });

    function selectPrinciple(slug, pushHash) {
      if (!slug) return;
      var panels = studio.querySelectorAll("[data-principle-panel]");
      var items = indexList.querySelectorAll(".principles-index-item");
      var matched = false;
      items.forEach(function (btn) {
        var active = btn.getAttribute("data-principle") === slug;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
        if (active) matched = true;
      });
      panels.forEach(function (panel) {
        var active = panel.getAttribute("data-principle-panel") === slug;
        panel.classList.toggle("is-active", active);
        if (active) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "");
        }
      });
      if (!matched && buttons[0]) {
        selectPrinciple(buttons[0].getAttribute("data-principle"), false);
        return;
      }
      if (pushHash && location.hash !== "#" + slug) {
        history.replaceState(null, "", "#" + slug);
      }
    }

    indexList.addEventListener("click", function (event) {
      var btn = event.target.closest(".principles-index-item");
      if (!btn || !indexList.contains(btn)) return;
      selectPrinciple(btn.getAttribute("data-principle"), true);
    });

    var initial = (location.hash || "").replace(/^#/, "");
    if (initial) {
      selectPrinciple(initial, false);
    } else if (buttons[0]) {
      selectPrinciple(buttons[0].getAttribute("data-principle"), false);
    }
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

