var playButton = $("#playButton");
var alphaButton = $(".alphaButton");
var guessLetter;
var guesses = [];
var solution;
var count;
var values = {};
var solutionArray;
wrongGuess = 0;

var alphaButton = $(".alphaButton");

playButton.on("click", beginGame);

function beginGame() {
	solution = prompt("Hello Hangman, Please enter your desired word below.").toUpperCase();
	// solutionUpper = solution.toUpperCase();
	solutionArray = solution.split("");

	for (i in solutionArray) {
		$("#solution").append('<div class="letterHidden" id=' + [i] + '> '+  solutionArray[i] +'</div>').innerHTML =  solutionArray[i];
	}

	// var count = solutionArray.reduce(function(values, v) {
 //  		if (!values.set[v]) {
 //    		values.set[v] = 1;
 //    		values.count++;
 //  		}
 //  		return values;
	// 	}, { set: {}, count: 0 }).count;

}

alphaButton.on("click", guess);
alphaButton.on("click", print);

// function print() {
// 	console.log(this.innerHTML);
// }

//Get the inner HTML of the button clicked and compare it to items in the solutionArray//
function guess() {
	guessLetter = (this.innerHTML)
	$(this).hide();
	console.log (guessLetter);
	if (solutionArray.indexOf(guessLetter)!= -1) {

		for (var i = 0; i < solution.length; i ++) {
			console.log('success');
			break;
		}

	// for (i in solutionArray) {
	// 	if (guessLetter = solutionArray[i]) {
	// 		return [i]
			// console.log([i])
			// $('div[id =' + [i] +']').attr('class', 'letterReveal');
		}

		else { 
			
			wrongGuess ++;
			console.log('wrong');

				if (wrongGuess == 1) {
					$('#hangman').attr('src', "img/hangmanparts/hangmanhead01.png");
				}

				else if (wrongGuess == 2) {
					$('#hangman').attr('src', "img/hangmanparts/hangmanbody02.png");
				}

				else if (wrongGuess == 3) {
					$('#hangman').attr('src', "img/hangmanparts/hangmanleftarm03.png");
				}

				else if (wrongGuess == 4) {
					$('#hangman').attr('src', "img/hangmanparts/hangmanrightarm04.png");
				}

				else if (wrongGuess == 5) {
					$('#hangman').attr('src', "img/hangmanparts/hangmanleftleg05.png");
				}

				else if (wrongGuess == 6) {
					$('#hangman').attr('src', "img/hangmanparts/hangmanrightleg06.png");
					alert("I'm sorry. You did not guess correctly. GAME OVER");
				}
	
		}
}




