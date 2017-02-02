var playButton = $("#playButton");
var alphaButton = $(".alphaButton");
var guessLetter;
var guesses = [];
var solution;
var values = {};
var solutionArray;
wrongGuess = 0;
correctGuess = 0;

// // declared variable twice?
var alphaButton = $(".alphaButton");

playButton.on("click", beginGame);
// Prompt Player 1 for a word and split that word into an array. Make each letter in the string Uppercase
function beginGame() {
	solution = prompt("Hello Hangman, Please enter your desired word below.").toUpperCase();
	solutionArray = solution.split("");
	// For each letter in the array, create an div with specified class, id and innerHTML values
	for (i in solutionArray) {
		$("#solution").append('<div class="letterHidden" id='+  solutionArray[i] +'> '+  solutionArray[i] +'</div>').innerHTML =  solutionArray[i];
	}
}
// Once a button is clicked, extract the innerHTML value of the button and assign it to variable guessletter
alphaButton.on("click", function() {
	guessLetter = (this.innerHTML);
	$(this).hide();
	// // extra code -- not used
	var $this = $(this);
	guess();
});


///// Get the inner HTML of the button clicked
function guess() {
	console.log(solutionArray);
	console.log("guessLetter: ", guessLetter);
	// Check if selected letter exists in the array
	if (solutionArray.indexOf(guessLetter)!= -1) {
			// Count and compare the number of correct guesses against the lenght of the solution. Still doesn't account for double letters.
			correctGuess ++;
			if (correctGuess == solutionArray.length){
				alert("CONGRATULATIONS!! You have won and will be released.")
			}
			// Standard for loop
   		for (var i = 0; i < solutionArray.length; i++) {
     		// iterating through the array
     		// console.log(solutionArray.indexOf(guessLetter,i));
     		console.log(solutionArray[i]);
     		// console.log(guessLetter);
   			if (solutionArray.indexOf(guessLetter,i))  {
       			$('#' + guessLetter).css('color','rgba(0, 0, 0, 1)'); // Currently only able to reveal the first instance of the letter in the solution and not all.
   			}
		}
	}

			else {
				// Each time the guess does not match, the picure will change revealing another body part added.
				wrongGuess ++;
				console.log(guessLetter);
				console.log('wrong');

// // this website helps with condensing and adding mutliple attr to help shorten it a little bit more.
// //  http://stackoverflow.com/questions/16422675/is-it-possible-to-set-multiple-data-attributes-using-the-jquery-attr-function
					if (wrongGuess == 1) {
						$('#hangman').attr('src', "img/hangmanparts/hangmanhead01.png");
						$('#hangman').attr('alt', "Gallows with hangman head");
					}

					else if (wrongGuess == 2) {
						$('#hangman').attr('src', "img/hangmanparts/hangmanbody02.png");
						$('#hangman').attr('alt', "Gallows with hangman head and torso");
					}

					else if (wrongGuess == 3) {
						$('#hangman').attr('src', "img/hangmanparts/hangmanleftarm03.png");
						$('#hangman').attr('alt', "Gallows with hangman head, torso and one arm");
					}

					else if (wrongGuess == 4) {
						$('#hangman').attr('src', "img/hangmanparts/hangmanrightarm04.png");
						$('#hangman').attr('alt', "Gallows with hangman head, torso and both arms");
					}

					else if (wrongGuess == 5) {
						$('#hangman').attr('src', "img/hangmanparts/hangmanleftleg05.png");
						$('#hangman').attr('alt', "Gallows with hangman head, torso, both arms and one leg");
					}

					else if (wrongGuess == 6) {
						$('#hangman').attr('src', "img/hangmanparts/hangmanrightleg06.png");
						$('#hangman').attr('alt', "Gallows with full hangman");
						if (wrongGuess == 6) {
						alert("Sorry. You have been hung. GAME OVER");
					}
					}
			}
}

// // for the possibility of using an object and a for loop
// hangman = {
// 	one:$('#hangman').attr({
//
// 	}),
// 	two:$('#hangman').attr({
// 		img/attr
// 	})
// }
//
// for (var i=0; i< 5;i++) {
// 	array img/alt
// }
