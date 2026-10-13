"use strict";

// The real screens fan onto a place setting once. Further depth follows the
// visitor's pointer; there is no idle loop, video download, or playback UI.
const hero = document.querySelector(".hero");
if (hero && "IntersectionObserver" in window) {
  const stage = hero.querySelector(".hero-stage");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  const connection = navigator.connection;
  let inView = false;
  let introduced = false;
  let pointerFrame = 0;
  let tiltX = 0;
  let tiltY = 0;

  function resetDepth() {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    stage.style.removeProperty("--tilt-x");
    stage.style.removeProperty("--tilt-y");
  }

  function syncMotion() {
    const still = reduceMotion.matches || connection?.saveData;
    const paused = !inView || document.hidden;
    hero.classList.toggle("is-motion-paused", paused);
    if (still) hero.classList.remove("is-arriving");
    else if (!paused && !introduced) {
      introduced = true;
      hero.classList.add("is-arriving");
    }
    if (still || paused || !finePointer.matches) resetDepth();
  }

  stage.addEventListener("pointermove", (event) => {
    if (
      !inView ||
      document.hidden ||
      reduceMotion.matches ||
      connection?.saveData ||
      !finePointer.matches
    )
      return;
    const bounds = stage.getBoundingClientRect();
    const x = Math.max(
      -0.5,
      Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5),
    );
    const y = Math.max(
      -0.5,
      Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5),
    );
    tiltX = -y * 10;
    tiltY = x * 12;
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      stage.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
      stage.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
      pointerFrame = 0;
    });
  });
  stage.addEventListener("pointerleave", resetDepth);
  const observer = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.08;
      syncMotion();
    },
    { threshold: 0.08 },
  );
  observer.observe(stage);
  reduceMotion.addEventListener("change", syncMotion);
  finePointer.addEventListener("change", syncMotion);
  connection?.addEventListener("change", syncMotion);
  document.addEventListener("visibilitychange", syncMotion);
}

// A single cream-to-sage sweep puts the final invitation in the action color.
const invitation = document.querySelector(".pilot-section");
if (invitation && "IntersectionObserver" in window) {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const connection = navigator.connection;
  let introduced = false;
  let inView = false;
  function syncInvitation() {
    const still = reduceMotion.matches || connection?.saveData;
    if (still) invitation.classList.remove("is-arriving");
    else if (inView && !document.hidden && !introduced) {
      introduced = true;
      invitation.classList.add("is-arriving");
    }
    invitation.classList.toggle("is-motion-paused", !inView || document.hidden);
  }
  const observer = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.25;
      syncInvitation();
    },
    { threshold: 0.25 },
  );
  observer.observe(invitation);
  reduceMotion.addEventListener("change", syncInvitation);
  connection?.addEventListener("change", syncInvitation);
  document.addEventListener("visibilitychange", syncInvitation);
}

// Native anchor navigation, with a useful keyboard destination.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    const heading = target.querySelector("[data-anchor-focus]") || target;
    const hadTabindex = heading.hasAttribute("tabindex");
    if (!hadTabindex) heading.setAttribute("tabindex", "-1");
    heading.addEventListener(
      "blur",
      () => {
        if (!hadTabindex) heading.removeAttribute("tabindex");
      },
      { once: true },
    );
    requestAnimationFrame(() => heading.focus({ preventScroll: true }));
  });
});

// The authored document is the complete, static walkthrough. Only enhance
// it when a roomy viewport and the visitor's motion preference allow it.
const walkthrough = document.querySelector(".walkthrough");
if (walkthrough && "IntersectionObserver" in window) {
  const stages = [...walkthrough.querySelectorAll(".story-stage")];
  const screens = [...walkthrough.querySelectorAll(".scene")];
  const frame = walkthrough.querySelector(".sticky-preview");
  const chapterLinks = [...walkthrough.querySelectorAll(".chapter-nav a")];
  const layout = walkthrough.querySelector(".story-layout");
  const roomy = matchMedia("(min-width: 960px) and (min-height: 740px)");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const connection = navigator.connection;
  let observer;
  let activeId;
  let pendingFrame = false;

  // Clones are decorative: the chapter copy and original image descriptions
  // contain the accessible information. No controls are cloned.
  screens.forEach((scene) => {
    const clone = scene.cloneNode(true);
    clone.removeAttribute("id");
    clone.className = "stage-preview";
    clone.dataset.preview = scene.closest(".story-stage").id;
    clone
      .querySelectorAll("[id]")
      .forEach((item) => item.removeAttribute("id"));
    clone.querySelectorAll("img").forEach((img) => {
      img.alt = "";
    });
    frame.append(clone);
  });
  const previews = [...frame.querySelectorAll(".stage-preview")];

  function selectStage(stage) {
    if (!stage || activeId === stage.id) return;
    activeId = stage.id;
    const index = stages.indexOf(stage);
    previews.forEach((preview, previewIndex) => {
      preview.classList.toggle(
        "is-active",
        preview.dataset.preview === activeId,
      );
      preview.classList.toggle("is-past", previewIndex < index);
    });
    const chapter = stage.closest(".chapter").id;
    walkthrough.dataset.chapter = chapter;
    walkthrough.style.setProperty("--plate-turn", `${index * 62 - 25}deg`);
    chapterLinks.forEach((link) => {
      if (link.hash === `#${chapter}`)
        link.setAttribute("aria-current", "step");
      else link.removeAttribute("aria-current");
    });
  }

  function updateStage() {
    pendingFrame = false;
    if (!walkthrough.classList.contains("is-enhanced") || document.hidden)
      return;
    const layoutBounds = layout.getBoundingClientRect();
    if (layoutBounds.bottom < 0 || layoutBounds.top > window.innerHeight)
      return;
    const line = window.innerHeight * 0.5;
    const progress = Math.max(
      0,
      Math.min(1, (line - layoutBounds.top) / layoutBounds.height),
    );
    walkthrough.style.setProperty("--journey-progress", progress.toFixed(4));
    const current = stages.find((stage) => {
      const bounds = stage.getBoundingClientRect();
      return bounds.top <= line && bounds.bottom > line;
    });
    if (current) selectStage(current);
    else {
      const closest = stages.reduce(
        (best, stage) =>
          Math.abs(stage.getBoundingClientRect().top - line) <
          Math.abs(best.getBoundingClientRect().top - line)
            ? stage
            : best,
        stages[0],
      );
      selectStage(closest);
    }
  }

  function scheduleUpdate() {
    if (!pendingFrame) {
      pendingFrame = true;
      requestAnimationFrame(updateStage);
    }
  }

  function configure() {
    observer?.disconnect();
    const enhanced =
      roomy.matches && !reduceMotion.matches && !connection?.saveData;
    walkthrough.classList.toggle("is-enhanced", enhanced);
    if (!enhanced) {
      chapterLinks.forEach((link) => link.removeAttribute("aria-current"));
      delete walkthrough.dataset.chapter;
      walkthrough.style.removeProperty("--journey-progress");
      activeId = null;
      return;
    }
    observer = new IntersectionObserver(scheduleUpdate, {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    });
    stages.forEach((stage) => observer.observe(stage));
    updateStage();
  }
  roomy.addEventListener("change", configure);
  reduceMotion.addEventListener("change", configure);
  connection?.addEventListener("change", configure);
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate, { passive: true });
  window.addEventListener("hashchange", scheduleUpdate);
  document.addEventListener("visibilitychange", scheduleUpdate);
  configure();
}
