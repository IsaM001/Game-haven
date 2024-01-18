"use strict";

//Selecting elements//

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
//
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
//
const diceEl = document.querySelector(".dice");
//
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

//Starting conditions function//

//variables only avaialble inside the function not acccesible outside function//

const inIt = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = "0";
  current1El.textContent = "0";
  diceEl.classList.add("hidden");

  //removes winner class
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  // and and remove active class set first player to be active

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

inIt();
//Function to switch player//

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // Reset current score to 0
  currentScore = 0; // Reset currentScore to 0
  activePlayer = activePlayer === 0 ? 1 : 0; // If the active player is 0, then go to 1; if not, go to 0.

  // change background color
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

/////////////////////////////////////

// Rolling the dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`; // Assuming the dice images are in the same directory
    // changes the source of the dice element, which is the image. This is done with the .src. Whatever the ${dice} is, it will load the corresponding image.

    //3. Check if rolled 1
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // Based on the active player, the score will change
    } else {
      // If the rolled dice is equal to 1, reset current score to 0 and switch to the next player
      switchPlayer();
    }
  }
});

//Holding the current score//

btnHold.addEventListener("click", function () {
  if (playing) {
    //1. Add current score to score of active player.
    scores[activePlayer] += currentScore;
    // Above translates to scores[1] = scores[1] + currentScore.

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check score if it is >= 100. If so, finish the game; if not, switch to the next player.
    if (scores[activePlayer] >= 100) {
      //Finish Game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }

  // Switch to the next player
});

//Resetting the game//

//When new game button is clicked
btnNew.addEventListener("click", function () {
  // reset scores
  inIt();
});
