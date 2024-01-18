// Get elements from the HTML document
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const confirmButton = document.querySelector(".confirm-button");
const resultContainer = document.querySelector(".result");
const playerScoreElement = document.querySelector(".player-score");
const compScoreElement = document.querySelector(".comp-score");
const restartButton = document.querySelector(".restart-button");

// Initialize scores
let playerScore = 0;
let compScore = 0;

// Event listeners for user's choice. the make choice is a function.
rockButton.addEventListener("click", () => makeChoice("rock"));
paperButton.addEventListener("click", () => makeChoice("paper"));
scissorsButton.addEventListener("click", () => makeChoice("scissors"));

// Event listener for confirming choice
confirmButton.addEventListener("click", playGame);

// Function to handle user's choice
let userChoice = "";
function makeChoice(choice) {
  userChoice = choice;
  console.log("User selected:", userChoice);
}

// Function to generate computer's choice
function getComputerChoice() {
  // Array of possible choices for the computer
  const choices = ["rock", "paper", "scissors"];
  // Generate a random index to pick a choice from the array
  const randomNumber = Math.floor(Math.random() * 3);
  // Return the computer's choice
  return choices[randomNumber];
}

// Function to play the game and determine the winner
function playGame() {
  // Check if the user has selected an option
  if (!userChoice) {
    alert("Please select an option before confirming.");
    return;
  }

  // Get the computer's choice
  const computerChoice = getComputerChoice();
  console.log("Computer selected:", computerChoice);

  // Compare choices and determine the winner
  const result = determineWinner(userChoice, computerChoice);

  // Update scores only if userChoice is not empty
  if (userChoice) {
    updateScores(result);
  }

  // Display the result
  displayResult(result, computerChoice);
}

// Function to determine the winner
function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    // Player wins
    playerScore++; // increases score for the player
    return "You win!";
  } else {
    // Computer wins
    compScore++;
    return "Computer wins!"; //increases score for the computer
  }
}

// Function to display the result
function displayResult(result, computerChoice) {
  // Create an image element for the computer's choice
  const computerChoiceImage = document.createElement("img");
  // Set the source and alt attributes for the image
  computerChoiceImage.src = `${computerChoice}.png`;
  computerChoiceImage.alt = computerChoice;
  // Add a class for styling the image
  computerChoiceImage.classList.add("choice-image");

  // Create a paragraph element for the game result message
  const resultMessage = document.createElement("p");
  resultMessage.textContent = result;
  // Add a class for styling the result text
  resultMessage.classList.add("result-text");

  // Create a paragraph element for the computer's choice message
  const computerChoiceMessage = document.createElement("p");
  computerChoiceMessage.textContent = `The computer has chosen ${computerChoice}`;

  // Clear previous content in the result container
  resultContainer.innerHTML = "";
  // Append the image, computer choice message, and result message to the result container
  resultContainer.appendChild(computerChoiceImage);
  resultContainer.appendChild(computerChoiceMessage);
  resultContainer.appendChild(resultMessage);

  // Remove the "hidden" class to display the result container
  resultContainer.classList.remove("hidden");

  // Change body background color based on the result
  document.body.style.transition = "background-color 1s";

  if (result === "It's a tie!") {
    document.body.style.backgroundColor = "#E8D7FF";
  } else if (result === "You win!") {
    document.body.style.backgroundColor = "#7FB069";
  } else {
    document.body.style.backgroundColor = "#FFD3E8";
  }
}

// Function to update and display the scores
function updateScores(result) {
  // Display the updated scores in the HTML
  playerScoreElement.textContent = `Your score: ${playerScore}`;
  compScoreElement.textContent = `Computer score: ${compScore}`;
}

restartButton.addEventListener("click", function () {
  // Reload the current page
  location.reload();
});
