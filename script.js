"use strict";

// Move keyboard focus to the destination heading after in-page navigation.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (!target) return;
    const focusTarget = target.querySelector("[data-anchor-focus]") ?? target;
    if (focusTarget === document.activeElement) return;
    focusTarget.setAttribute("tabindex", "-1");
    focusTarget.classList.add("anchor-focus-target");
    focusTarget.addEventListener("blur", () => {
      focusTarget.removeAttribute("tabindex");
      focusTarget.classList.remove("anchor-focus-target");
    }, { once: true });
    window.setTimeout(() => focusTarget.focus({ preventScroll: true }), 0);
  });
});
