// Using arrays, create a list of words for the computer to choose from.
var computerChoices = ["max", "charlie", "daisy", "belly"];

var wins = 0;
var losses = 0;
var guesses = 5;
var guessesSoFar = [];

// Computer chooses a random word from the array and locks that word until we win or lose and start over.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// alert(computerGuess);
var dashRef = document.getElementById("dashes");

    for (i=0; i < computerGuess.length; i++){
    	computerGuess[i] 
    	// console.log(computerGuess[i]);

    } // Main for loop

document.onkeyup = function(event){
// User presses a key to guess the word chosen by the computer.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// Convert computer word choices into the same amount of dashes.





    // alert(computerGuess);
    // guessesSoFar.push(userGuess);


   var html = "<p>Press any key to get started!</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Current Word</p>" +
	"<p>" + computerGuess + "</p>" +
	"<p>Number of Guesses Remaining</p>" +
	"<p>" + guesses + "</p>" +
	"<p>Letters Already Guessed</p>" +
	"<p>" + guessesSoFar + "</p>";

	document.querySelector(".hangman").innerHTML = html;
}
// Compare the user key guess to the computer word and see if anything matches.
// If there's a match, the number of guesses goes down, and replaces the dashes with the user guess. Also, the # of guesses goes down and the guess shows up in guesses so far.
// 
// 
// 
// 
// 
// 
