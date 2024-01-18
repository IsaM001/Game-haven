"use strict";

const learnButtons = document.querySelectorAll(".learn-more-btn");
const closeButtons = document.querySelectorAll(".close-modal");
const popUps = document.querySelectorAll(".pop-up");
const overlays = document.querySelectorAll(".overlay");

const openPopUp = function (index) {
  popUps[index].classList.remove("hidden");
  overlays[index].classList.remove("hidden");
};

const closePopUp = function (index) {
  popUps[index].classList.add("hidden");
  overlays[index].classList.add("hidden");
};

// Event listeners for Learn More buttons
learnButtons.forEach((button, index) => {
  button.addEventListener("click", () => openPopUp(index));
});

// Event listeners for Close buttons
closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => closePopUp(index));
});

// Event listeners for overlay click
overlays.forEach((overlay, index) => {
  overlay.addEventListener("click", () => closePopUp(index));
});

// Event listener for Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    popUps.forEach((popup, index) => {
      if (!popup.classList.contains("hidden")) {
        closePopUp(index);
      }
    });
  }
});
