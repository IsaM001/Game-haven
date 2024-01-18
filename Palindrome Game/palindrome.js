// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
  // Select the form element using querySelector
  var form = document.querySelector("form");

  // Add an event listener for the form's submit event
  form.addEventListener("submit", function (event) {
    // Check if the form is valid using the form's checkValidity() method
    if (form.checkValidity()) {
      // Remove existing result element if it exists
      var existingResultElement = document.querySelector("p");
      if (existingResultElement) {
        existingResultElement.remove();
      }

      // Get the value from the input field with the ID "name"
      var inputValue = document.getElementById("name").value;

      // Check if the input value is a palindrome
      const isPalindrome = checkIfPalindrome(inputValue);

      // Display the result on the screen
      displayResult(inputValue, isPalindrome);

      // Log the result to the console
      console.log(`Is ${inputValue} a palindrome? ${isPalindrome}`);
    }

    // Prevent the default form submission behavior
    event.preventDefault();
  });

  // Add an event listener for the "Try Again" button
  var tryAgainButton = document.getElementById("tryAgainBtn");
  tryAgainButton.addEventListener("click", function () {
    // Remove existing result element if it exists
    var existingResultElement = document.querySelector("p");
    if (existingResultElement) {
      existingResultElement.remove();
    }

    // Reset background color
    document.body.style.backgroundColor = "";

    // Clear the input field with the ID "name"
    document.getElementById("name").value = "";
  });

  // Function to check if a word is a palindrome
  function checkIfPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();
    const reverseWord = lowerCaseWord.split("").reverse().join("");
    return lowerCaseWord === reverseWord;
  }

  // Function to display the result on the screen
  function displayResult(word, isPalindrome) {
    // Create a new paragraph element
    var resultElement = document.createElement("p");

    // Set the content and styling based on whether it's a palindrome or not
    if (isPalindrome) {
      document.body.style.backgroundColor = "lightgreen";
      resultElement.textContent = "Success!!! " + word + " is a Palindrome 😊.";
    } else {
      resultElement.textContent =
        "Oh no! " + word + " is not a Palindrome 😔, click try again.";
      document.body.style.backgroundColor = "lightcoral";
    }

    // Add CSS styles to center the result element
    resultElement.style.marginTop = "20px"; // Adjust the margin-top as needed
    resultElement.style.textAlign = "center";
    resultElement.style.fontWeight = "bold";

    // Append the result element to the body
    document.body.appendChild(resultElement);
  }
});
