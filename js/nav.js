/**
 * Koko Bakehouse — Accessible Navigation Controller
 *
 * Author: Stephen Bassey (SB)
 * Copyright (c) 2026 Stephen Bassey. All rights reserved.
 */

(function () {
  const toggle = document.querySelector(".sb-nav-toggle");
  const mobileNav = document.getElementById("sb-mobile-nav");

  if (!toggle || !mobileNav) return;

  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      closeNav();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeNav();
      toggle.focus();
    }
  });

  function openNav() {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    mobileNav.removeAttribute("hidden");
  }

  function closeNav() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    mobileNav.setAttribute("hidden", "");
  }
})();
