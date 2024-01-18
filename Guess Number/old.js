// "use strict";

// // defining selectors
// const body = document.querySelector("body");
// const checkButton = document.getElementById("check-btn");
// const restartButton = document.getElementById("restart");
// const message = document.querySelector(".message");
// const number = document.querySelector(".number");
// const attemptsLeft = document.querySelector(".score");
// const inputField = document.getElementById("input");
// const userHighScore = document.querySelector(".highscore");

// let attempts = 10; // Starting attempts is 10
// let theHighScore = 0; // Starting highscore is 0

// // define the random number between 1 - 50.
// let randomNumber = Math.trunc(Math.random() * 50) + 1;

// // when check button clicked
// checkButton.addEventListener("click", function () {
//   const guess = Number(document.querySelector("input").value); //value entered in the input field

//   // if-else that controls what message shows up and the score decreases
//   if (!guess) {
//     message.textContent = "No number has been inputted 😮";
//     // when the player wins
//   } else if (guess === randomNumber) {
//     message.textContent = "SUCCESS 🥳";
//     body.style.backgroundColor = "#80b918";
//     number.textContent = randomNumber;
//     if (attempts > theHighScore) {
//       theHighScore = attempts;
//       userHighScore.textContent = theHighScore;
//     }
//   } else if (guess > randomNumber) {
//     // Guess is too high
//     if (attempts > 1) {
//       message.textContent = "Guess is too high 📈. Try a lower number!";
//       attempts--;
//       attemptsLeft.textContent = attempts;
//     } else {
//       message.textContent =
//         "You have lost the game. Click restart and have another go";
//       attemptsLeft.textContent = 0;
//     }
//     // Guess is too low
//   } else if (guess < randomNumber) {
//     if (attempts > 1) {
//       message.textContent = "Guess is too low 📉. Try a higher number!";
//       attempts--;
//       attemptsLeft.textContent = attempts;
//     } else {
//       message.textContent = "🚨GAME OVER!🚨 Click restart and have another go";
//       attemptsLeft.textContent = 0;
//       body.style.backgroundColor = "#fc2f00";
//       number.textContent = randomNumber;
//     }
//   }
// });

// //when restart button is clicked it defaults back to start

// restartButton.addEventListener("click", function () {
//   attempts = 10;
//   randomNumber = Math.trunc(Math.random() * 50) + 1;

//   message.textContent = "Time for you to guess.";
//   attemptsLeft.textContent = attempts;
//   number.textContent = "❔";

//   inputField.value = "";

//   body.style.backgroundColor = "azure";
// });
