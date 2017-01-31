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
		$("#solution").append('<div class="letterHidden" "class='+  solutionArray[i] +'> '+  solutionArray[i] +'</div>').innerHTML =  solutionArray[i];
	}
}

alphaButton.on("click", guess);
alphaButton.on("click", print);


//Get the inner HTML of the button clicked and compare it to items in the solutionArray//
function guess() {
	guessLetter = (this.innerHTML)
	$(this).hide();
	var $this = $(this);
	console.log (guessLetter);

	// solutionArray.forEach(function(letter) {
	console.log($this)

if ($.inArray(guessLetter, solutionArray) != -1) {

			console.log('success')
			console.log(guessLetter)
			// document.querySelectorAll(div# + guessLetter).css('class', 'letterReveal');
			$('.' + guessLetter).css('color', 'rgba(0,0,0,1)');
			}

			else { 
				
				wrongGuess ++;
				console.log(guessLetter);
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
					}

					else if (wrongGuess == 6) {
						alert("I'm sorry. You did not guess correctly. GAME OVER");
					}
		
			}
	}







