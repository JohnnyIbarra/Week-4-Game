// array of words
var words = [
	"Pokemon",
	"Charmander",
	"Bulbasaur",
	"Pikachu",
	"Squirtle",
	"Weedle",
	"Pidgey",
	"Zubat"
];
var winCount = 0;
var lettersGuessed = [];
var guessesRemaining = 10;
var newWord = "";
var underscoredWord = "";
var underscoreArray = [];


function resetGame() {
	// Select a random word
	newWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
	console.log(newWord);
	newWord = newWord.split("");
	console.log(newWord);
	// Change the letters into underscores
	for (var i = 0; i < newWord.length; i++) {
		underscoreArray.push("_");
	}
	// Change the array into a string
	underscoredWord = underscoreArray.join(" ");
	// Display the unsolved word
	document.querySelector("#currentWord").innerHTML = underscoredWord;
	// put guesses remaining = 10;
	document.querySelector("#remainingGuesses").innerHTML = 10;
	// make letters guessed a blank array;
	document.querySelector("#guessedLetters").innerHTML = lettersGuessed;
};
resetGame();

function gamePlay() {
	//when user presses a key
	document.onkeyup = function (event) {
		userGuess = event.key;
		//that key is placed into the lettersGuessed Array
		lettersGuessed.push(userGuess);
		document.querySelector("#guessedLetters").innerHTML = lettersGuessed;
		// if the key has alredy been pressed,
		// do nothing
		// if the key has not already been pressed, and 
		if (newWord.indexOf(userGuess) > -1) {
			// change the _ to the key
			var index = newWord.indexOf(userGuess);
			underscoredWord[index] = userGuess;

			underscoredWord = underscoreArray.join(" ");
			document.querySelector("#currentWord").innerHTML = underscoredWord;
		}
		// if the key is not in the word,
		else {
			// minus one from the guesses remaining
			guessesRemaining--;
			document.querySelector("#remainingGuesses").innerHTML = guessesRemaining;
		}
		if (guessesRemaining === 0) {
			document.querySelector("#image").src = '../HangmanGame/assets/images/gameover.jpg';
		};
	};
	//once the remainingGuesses = 0, GAME OVER
};
gamePlay();