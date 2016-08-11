// Using arrays, create a list of words for the computer to choose from.
var computerChoices = ["max", "lexi", "daisy", "heyhey"];

var wins = 0;
var losses = 0;
var guesses = 5; //Change to 20 in the future
var guessesSoFar = [];
var dashAry= [];

// Computer chooses a random word from the array and locks that word until we win or lose and start over.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// alert(computerGuess);
var dashRef = document.getElementById("dashes");


	// for (i =0; i < computerGuess.length; i++){
	// 	dashAry[i] = "_";
	// }

    for (i=0; i < computerGuess.length; i++){
    	dashRef.innerHTML = dashRef.innerHTML + "_" + " ";

    	// console.log(computerGuess[i]);
    } // Main for loop

    	dashAry.push(dashRef.innerHTML);
    	console.log(dashAry);
    	
document.onkeyup = function(event){
// User presses a key to guess the word chosen by the computer.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesSoFar.push(userGuess);

// Compare userGuess letter to computerGuess word.
	for (i=0; i < computerGuess.length; i++){
			if (userGuess == computerGuess[i]){
				alert(userGuess);
			}
	}




   var html = "<p>Press any key to get started!</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Current Word</p>" +
	"<p>" + dashAry + "</p>" +
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
