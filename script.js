"use strict";

gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

// ANIMATION HERO SECTION
tl.from(".hero-main-content", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Elastic.easeOut.config(0.8, 0.3),
});

// ANIMATION HERO CONTENT
tl.from(
  ".stagger1",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Elastic.easeOut.config(1, 0.3),
    duration: 2,
  },
  "-=1.8"
);

// ANIMATION HERO IMG
tl.from(
  ".hero-img",
  {
    opacity: 0,
    y: 50,
    ease: Elastic.easeOut.config(1, 0.3),
    duration: 3,
  },
  "-=2"
);

gsap.from(".square-anim", {
  stagger: 0.2,
  scale: 0.1,
  duration: 1,
  ease: Back.easeOut.config(1.7),
});

// ANIMATION SCROLL

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top center",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.6,
});
