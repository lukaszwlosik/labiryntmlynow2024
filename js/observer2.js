"use strict";
const firstBoxAboutUsText = document.querySelector(".first-box-about-us-text");
const firstBoxAboutUsImg = document.querySelector(".first-box-about-us-img");
const secondBoxAboutUsImg = document.querySelector(".second-box-about-us-img");
const secondBoxAboutUsText = document.querySelector(
  ".second-box-about-us-text"
);

const thirdBoxAboutUsText = document.querySelector(".third-box-about-us-text");
const thirdBoxAboutUsImg = document.querySelector(".third-box-about-us-img");
const fourthBoxAboutUsText = document.querySelector(
  ".fourth-box-about-us-text"
);
const fourthBoxAboutUsImg = document.querySelector(".fourth-box-about-us-img");
const fifthBoxAboutUsText = document.querySelector(".fifth-box-about-us-text");
const fifthBoxAboutUsImg = document.querySelector(".fifth-box-about-us-img");
const goTopBtn = document.querySelector(".goTopBtn");

function callbackFunction(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "first-box-about-us") {
        firstBoxAboutUsText.classList.add("fade-in");
        firstBoxAboutUsImg.classList.add("fade-in");
        secondBoxAboutUsText.classList.add("fade-in");
        secondBoxAboutUsImg.classList.add("fade-in");
        goTopBtn.classList.remove("fade-in");
      } else if (entry.target.id === "third-box-about-us") {
        thirdBoxAboutUsText.classList.add("fade-in");
        thirdBoxAboutUsImg.classList.add("fade-in");
        goTopBtn.classList.add("fade-in");
      } else if (entry.target.id === "fourth-box-about-us") {
        fourthBoxAboutUsText.classList.add("fade-in");
        fourthBoxAboutUsImg.classList.add("fade-in");
        console.log(`x`);
      } else if (entry.target.id === "fifth-box-about-us") {
        fifthBoxAboutUsText.classList.add("fade-in");
        fifthBoxAboutUsImg.classList.add("fade-in");
      }
      observer.unobserve(entry);
    }
  });
}

const options = {
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver(callbackFunction, options);
observer.observe(firstBoxAboutUsText);
observer.observe(secondBoxAboutUsText);
observer.observe(thirdBoxAboutUsText);
observer.observe(fourthBoxAboutUsText);
observer.observe(fifthBoxAboutUsText);
