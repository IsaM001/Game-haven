"use strict";

// defining selectors
const body = document.querySelector("body");
const checkButton = document.getElementById("check-btn");
const restartButton = document.getElementById("restart");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const attemptsLeft = document.querySelector(".score");
const inputField = document.getElementById("input");
const userHighScore = document.querySelector(".highscore");

// set function to make it more DRY
const displayMessage = function (Message) {
  message.textContent = Message;
};

let attempts = 10; // Starting attempts is 10
let theHighScore = 0; // Starting highscore is 0

// define the random number between 1 - 50.
let randomNumber = Math.trunc(Math.random() * 50) + 1;

// Function to disable or enable buttons
const toggleButtons = function (check, restart) {
  checkButton.disabled = check;
  restartButton.disabled = restart;
};

// when check button clicked
checkButton.addEventListener("click", function () {
  const guess = Number(document.querySelector("input").value); // value entered in the input field

  // if-else that controls what message shows up and the score decreases
  if (!guess) {
    displayMessage("No number has been inputted 😮");
    // when the player wins
  } else if (guess === randomNumber) {
    displayMessage("SUCCESS 🥳");
    body.style.backgroundColor = "#70e000";
    number.textContent = randomNumber;
    if (attempts > theHighScore) {
      theHighScore = attempts;
      userHighScore.textContent = theHighScore;
    }
    toggleButtons(true, false); // Disable check, enable restart

    // when guess is wrong
  } else if (attempts > 1) {
    displayMessage(
      guess > randomNumber
        ? "Guess is too high 📈. Try a lower number!"
        : "Guess is too low 📉. Try a higher number!"
    );
    attempts--;
    attemptsLeft.textContent = attempts;
  } else {
    displayMessage("🚨GAME OVER!🚨 Click restart and have another go!");
    attemptsLeft.textContent = 0;
    body.style.backgroundColor = "#ba1f33";
    toggleButtons(true, false); // Disable check, enable restart
  }
});

//when enter is clicked//
const handleKeyPress = function (event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.key === "Enter") {
    // Trigger the click event on the check button
    checkButton.click();
  }
};

// Add event listener for keypress on the input field
inputField.addEventListener("keypress", handleKeyPress);

// when restart button is clicked it defaults back to start
restartButton.addEventListener("click", function () {
  attempts = 10;
  randomNumber = Math.trunc(Math.random() * 50) + 1;

  displayMessage("Time for you to guess.");
  attemptsLeft.textContent = attempts;
  number.textContent = "❔";

  inputField.value = "";

  body.style.backgroundColor = "#2ec4b6";
  toggleButtons(false, true); // Enable check, disable restart
});
