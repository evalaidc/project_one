var playButton = $("#playButton");
var alphaButton = $(".alphaButton");
var guessLetter;
var solution;
var count;
var values = {};
var solutionArray;

var alphaButton = $(".alphaButton");

playButton.on("click", beginGame);

function beginGame() {
	solution = prompt("Hello Hangman, Please enter your desired word below.");
	solutionUpper = solution.toUpperCase();
	solutionArray = solutionUpper.split("");

	for (i in solutionArray) {
		$("#solution").append('<div class="letterhidden" id=l' + i + '></div>');
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

function print() {
	console.log(this.innerHTML);
}

//Get the inner HTML of the button clicked and compare it to items in the solutionArray//
function guess() {
	for (i in solutionArray) {
	guessLetter = (this.innerHTML)
		if (guessLetter = i) {
			$("id")
		}

	}

}



