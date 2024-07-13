"use strict";
// Homepage
const homepageLandscape = document.querySelector(".homepage-landscape");
const homepageMain = document.querySelector(".homepage-main");
const asideGallery = document.querySelector(".wrapper-gallery");
const smallTextGallery = document.getElementById("small-text-gallery");
const recommendContainer = document.querySelector(".recommend");
const goTopBtn = document.querySelector(".goTopBtn");

// Index 1

function callbackFunction(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "homepage-landscape") {
        entry.target.classList.add("loaded");
        goTopBtn.classList.remove("fade-in");
      } else if (entry.target.id === "homepage-main") {
        entry.target.classList.add("fade-in");
        goTopBtn.classList.add("fade-in");
      } else if (entry.target.id === "index-gallery") {
        entry.target.classList.add("fade-in");
        smallTextGallery.classList.add("fade-in");
      } else if (entry.target.id === "recommend-box") {
        entry.target.classList.add("fade-in");
      }
      observer.unobserve("homepage-landscape");
      observer.unobserve("homepage-main");
      observer.unobserve("index-gallery");
      observer.unobserve("recommend-box");
    }
  });
}
const options = {
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver(callbackFunction, options);
observer.observe(homepageLandscape);
observer.observe(homepageMain);
observer.observe(asideGallery);
observer.observe(recommendContainer);
