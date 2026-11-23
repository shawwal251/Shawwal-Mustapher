(() => {
  "use strict";
  const b = document.querySelector(".toggle"),
    n = document.querySelector("#links"),
    y = document.querySelector("#year");
  if (y) y.textContent = String(new Date().getFullYear());
  if (b && n) {
    const close = () => {
      b.setAttribute("aria-expanded", "false");
      b.setAttribute("aria-label", "Open menu");
      n.classList.remove("open");
    };
    b.addEventListener("click", () => {
      const open = b.getAttribute("aria-expanded") === "true";
      b.setAttribute("aria-expanded", String(!open));
      b.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      n.classList.toggle("open", !open);
    });
    n.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        close();
        b.focus();
      }
    });
    document.addEventListener("click", (e) => {
      if (!n.contains(e.target) && !b.contains(e.target)) close();
    });
  }
  const items = document.querySelectorAll(".reveal");
  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const io = new IntersectionObserver(
      (es, o) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            o.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    items.forEach((x) => io.observe(x));
  } else items.forEach((x) => x.classList.add("visible"));
})();

document.addEventListener("DOMContentLoaded", () => {
  const portrait = document.querySelector(".portrait-frame img");
  const placeholder = portrait?.nextElementSibling;

  if (portrait && placeholder) {
    portrait.addEventListener("error", () => {
      portrait.hidden = true;
      placeholder.hidden = false;
    });
  }
});