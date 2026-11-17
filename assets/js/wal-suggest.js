(function () {
  // "From the Write Ahead Log" — two random platformatory.io blog posts,
  // fetched from the blog index at runtime (the Ghost blog serves
  // Access-Control-Allow-Origin: *), surfaced in a corner card once per
  // session. Nothing happens if the fetch fails or the visitor already
  // dismissed the card.
  //
  // Loaded with `defer` from the shared <head> blocks, so it also runs on
  // the hand-written full-HTML layouts (home_default, talks) that don't
  // go through default.html.
  "use strict";

  var BLOG_URL = "https://platformatory.io/blog/";
  var DISMISS_KEY = "plf-wal-dismissed";
  var POST_RE = /^\/blog\/([A-Za-z0-9._-]+)\/$/;

  // Ghost paginates the index; page2..N exist as /blog/pageN/. Cap the
  // crawl so a slow blog can't hog the connection.
  var EXTRA_PAGES = 2;

  function pickRandom(arr, n) {
    var out = [];
    var pool = arr.slice();
    while (out.length < n && pool.length) {
      var i = Math.floor(Math.random() * pool.length);
      out.push(pool.splice(i, 1)[0]);
    }
    return out;
  }

  function parsePosts(html) {
    var posts = {};
    // Anchor + the card-title heading that follows it, two known layouts.
    var re = /<a[^>]+href="(\/blog\/[^"#?]+)"[^>]*>([\s\S]{0,400}?)<\/a>[\s\S]{0,400}?<h2[^>]*class="[^"]*card-title[^"]*"[^>]*>([\s\S]*?)<\/h2>/g;
    var m;
    while ((m = re.exec(html))) {
      var url = m[1];
      if (!POST_RE.test(url)) continue;
      var title = m[3]
        .replace(/<!--[\s\S]*?-->/g, "")
        .replace(/<[^>]*>/g, "")
        .replace(/\s+/g, " ")
        .trim();
      if (!title) title = url;
      posts[url] = title;
    }
    return posts;
  }

  function fetchText(url) {
    return fetch(url, { mode: "cors", credentials: "omit" })
      .then(function (r) {
        if (!r.ok) throw new Error("blog index " + r.status);
        return r.text();
      })
      .catch(function () {
        return ""; // pagination pages are best-effort
      });
  }

  function dismiss() {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch (e) {}
    var card = document.getElementById("plf-wal-card");
    if (card && card.parentNode) card.parentNode.removeChild(card);
  }

  function render(posts) {
    if (document.getElementById("plf-wal-card")) return;
    var chosen = pickRandom(posts, 2);
    if (!chosen.length) return;

    var card = document.createElement("aside");
    card.id = "plf-wal-card";
    card.setAttribute("aria-label", "From the Write Ahead Log");

    var head = document.createElement("div");
    head.className = "plf-wal-head";
    var label = document.createElement("span");
    label.className = "plf-wal-label";
    label.textContent = "From the Write Ahead Log";
    var close = document.createElement("button");
    close.type = "button";
    close.className = "plf-wal-close";
    close.setAttribute("aria-label", "Dismiss");
    close.textContent = "\u00d7";
    close.addEventListener("click", dismiss);
    head.appendChild(label);
    head.appendChild(close);
    card.appendChild(head);

    var list = document.createElement("ul");
    list.className = "plf-wal-list";
    chosen.forEach(function (post) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.className = "plf-wal-link";
      a.href = post.url;
      a.textContent = post.title;
      // opening one post is engagement enough; drop the card
      a.addEventListener("click", dismiss);
      li.appendChild(a);
      list.appendChild(li);
    });
    card.appendChild(list);

    document.body.appendChild(card);
    requestAnimationFrame(function () {
      card.classList.add("plf-wal-visible");
    });
  }

  function start() {
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch (e) {}
    fetchText(BLOG_URL)
      .then(function (html) {
        if (!html) return null; // CORS or network failure
        var posts = parsePosts(html);
        var pages = [];
        for (var p = 2; p <= 1 + EXTRA_PAGES; p++) {
          pages.push(fetchText("https://platformatory.io/blog/page" + p + "/"));
        }
        return Promise.all(pages).then(function (extras) {
          extras.forEach(function (x) {
            if (!x) return;
            var more = parsePosts(x);
            Object.keys(more).forEach(function (u) {
              if (!posts[u]) posts[u] = more[u];
            });
          });
          return Object.keys(posts).map(function (u) {
            return { url: u, title: posts[u] };
          });
        });
      })
      .then(function (posts) {
        if (posts && posts.length) render(posts);
      })
      .catch(function () {});
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
