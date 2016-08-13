// Using arrays, create a list of words for the computer to choose from.
var computerChoices = ["max", "lexi", "daisy", "heyhey"];

var wins = 0;
var losses = 0;
var guesses = 10; //Change to 20 in the future
var guessesSoFar = [];
var dashAry= [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    for (i=0; i < computerGuess.length; i++){
    	dashAry.push(" _ ");
    	// var spaceAry = dashAry.join('');
    } // Main for loop

// Function reset upon wins/losses.
function computerGuessReset(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar = [];
    guesses = 10
    tempAry = [];
    dashAry = [];
}

// Computer chooses a random word from the array and locks that word until we win or lose and start over.
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

document.onkeyup = function(event){
// User presses a key to guess the word chosen by the computer.
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
var tempAry = [];

	// for (var k = 0; k < computerGuess.length; k++) {
 // 		if (computerGuess[k] === userGuess) {
 // 			tempAry[k] = userGuess;
 // 		}else{
 // 			tempAry[k] = dashAry[k];
 // 		}
 // 	}
	// dashAry = tempAry;

for (var k = 0; k < computerGuess.length; k++) {
	if(computerGuess.indexOf(userGuess) != -1){
		dashAry(k, 1, userGuess);
		alert("Dash array: " + dashAry);

	}else{
		alert("Dash array: " + dashAry);

		alert("testing");

	}
}

    // Makes sure the user chooses a letter between a-z.
    if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') ||
        (userGuess == 'd') || (userGuess == 'e') || (userGuess == 'f') ||
        (userGuess == 'g') || (userGuess == 'h') || (userGuess == 'i') ||
        (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') ||
        (userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') ||
        (userGuess == 'p') || (userGuess == 'q') || (userGuess == 'r') ||
        (userGuess == 's') || (userGuess == 't') || (userGuess == 'u') ||
        (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') ||
        (userGuess == 'y') || (userGuess == 'z')){

        // Wins if userGuess = to computerGuess.
        if (userGuess == computerGuess){
            wins++
            computerGuessReset();
            console.log("ComputerGuess win reset: " + computerGuessReset);
            console.log("-------------------------");
            console.log("ComputerGuess new letter after win: " + computerGuess);
            console.log("-------------------------");

        // Losses when the guess counter hits 0.        
        }else if (guesses == 1){
            losses++
            computerGuessReset();
            console.log("ComputerGuess loss reset: " + computerGuessReset);
            console.log("-------------------------");
            console.log("ComputerGuess new letter after loss: " + computerGuess);
            console.log("-------------------------");

        // Decrements guesses when userGuess != computerGuess.        
        }else{
            // Check if the userGuess is not within the guessesSoFar.
            if(guessesSoFar.indexOf(userGuess) != -1){
                alert("Duplicate letter was pressed. Please try again.")
                console.log("UserGuess within the for loop if statement: " + userGuess);
                console.log("-------------------------");
            // If userGuess is inside the guessesSoFar array, decrement guesses and push userGuess into guessesSoFar.
            }else{
                guesses--
                guessesSoFar.push(userGuess);
                console.log("UserGuess within the for loop else statement: " + userGuess);
                console.log("-------------------------");
            }
        }
    // Alerts user if a invalid letter is pressed.
    }else{
        alert("Invalid letter. Please type a letter from a-z.");
        console.log("Alerts false letter: " + userGuess);
        console.log("-------------------------");
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