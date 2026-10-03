/* Minimal portfolio interactions */
(() => {
  "use strict";

  const body = document.body;
  const toggle = document.querySelector(".menu-toggle");
  const drawer = document.querySelector(".nav-drawer");
  const backdrop = document.querySelector(".nav-backdrop");
  const links = document.querySelectorAll("[data-page-link]");
  const currentPage = body.dataset.page;

  const setMenu = (open) => {
    if (!toggle || !drawer || !backdrop) return;
    toggle.classList.toggle("is-open", open);
    drawer.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-visible", open);
    toggle.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
    body.classList.toggle("nav-open", open);
  };

  toggle?.addEventListener("click", () => {
    setMenu(!drawer.classList.contains("is-open"));
  });

  backdrop?.addEventListener("click", () => setMenu(false));

  links.forEach((link) => {
    if (link.dataset.pageLink === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  // Lightweight reveal animation using IntersectionObserver.
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    items.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
      observer.observe(item);
    });
  } else {
    items.forEach((item) => item.classList.add("visible"));
  }
})();
