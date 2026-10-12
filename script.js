"use strict";

// The hero is a poster until motion is allowed and it enters the viewport.
// User playback choices survive scrolling, preference changes and tab switches.
const heroLoop = document.querySelector(".hero-loop");
const motionToggle = document.querySelector(".motion-toggle");
const demoVideo = document.querySelector(".demo-video");
if (demoVideo) {
  const showVideoError = () => {
    document.querySelector(".demo-status").hidden = false;
  };
  demoVideo.addEventListener("error", showVideoError);
  demoVideo.querySelector("source")?.addEventListener("error", showVideoError);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) demoVideo.pause();
  });
}
if (heroLoop && motionToggle && "IntersectionObserver" in window) {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const connection = navigator.connection;
  let inView = false;
  let userWantsPlay = null;
  let blocked = false;

  function updateControl() {
    motionToggle.textContent = heroLoop.paused
      ? "Play animation"
      : "Pause animation";
  }

  function syncPlayback() {
    const automatic =
      userWantsPlay === null && !reduceMotion.matches && !connection?.saveData;
    const shouldPlay =
      inView &&
      !document.hidden &&
      (automatic || userWantsPlay === true) &&
      (!demoVideo || demoVideo.paused) &&
      !blocked;
    if (!shouldPlay) {
      heroLoop.pause();
      // Return to the still when a visitor turns reduced motion on.
      if (
        reduceMotion.matches &&
        userWantsPlay !== true &&
        heroLoop.hasAttribute("src")
      ) {
        heroLoop.removeAttribute("src");
        heroLoop.load();
      }
      updateControl();
      return;
    }
    if (!heroLoop.hasAttribute("src")) heroLoop.src = heroLoop.dataset.src;
    heroLoop.play().catch((error) => {
      if (error.name !== "AbortError") blocked = true;
      updateControl();
    });
  }

  motionToggle.hidden = false;
  motionToggle.addEventListener("click", () => {
    userWantsPlay = heroLoop.paused;
    blocked = false;
    syncPlayback();
  });
  heroLoop.addEventListener("play", updateControl);
  heroLoop.addEventListener("pause", updateControl);
  heroLoop.addEventListener("error", () => {
    blocked = true;
    heroLoop.removeAttribute("src");
    heroLoop.load();
    updateControl();
  });
  const observer = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    },
    { threshold: 0 },
  );
  observer.observe(heroLoop);
  reduceMotion.addEventListener("change", syncPlayback);
  connection?.addEventListener("change", syncPlayback);
  document.addEventListener("visibilitychange", syncPlayback);
  demoVideo?.addEventListener("play", syncPlayback);
  demoVideo?.addEventListener("pause", syncPlayback);
  demoVideo?.addEventListener("ended", syncPlayback);
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
  const roomy = matchMedia("(min-width: 960px) and (min-height: 740px)");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
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
    previews.forEach((preview) =>
      preview.classList.toggle(
        "is-active",
        preview.dataset.preview === activeId,
      ),
    );
    const chapter = stage.closest(".chapter").id;
    chapterLinks.forEach((link) => {
      if (link.hash === `#${chapter}`)
        link.setAttribute("aria-current", "step");
      else link.removeAttribute("aria-current");
    });
  }

  function updateStage() {
    pendingFrame = false;
    if (!walkthrough.classList.contains("is-enhanced")) return;
    const line = window.innerHeight * 0.5;
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
    const enhanced = roomy.matches && !reduceMotion.matches;
    walkthrough.classList.toggle("is-enhanced", enhanced);
    if (!enhanced) {
      chapterLinks.forEach((link) => link.removeAttribute("aria-current"));
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
  window.addEventListener("resize", scheduleUpdate, { passive: true });
  window.addEventListener("hashchange", scheduleUpdate);
  configure();
}
