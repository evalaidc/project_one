
///////// Technologies used in this application /////////
This Hangman game was developed using html with flex, css, javascript and jquery.


//////// Development Approach /////////
The approach to the development game was to split the submitted word into an array. It would then create a div with a bottom border, innerHTML, and specified classes or ID's for each letter in the array.

Player two would then click a button representing their letter guess. The array would be inspected to verify if the selected letter exists. If the letter does exist, the application will iterate through the array to identify the appropriate boxes that contain the corresponding value and expose the letter to the user in the correct position in the word.

A counter will increment every time the letter guessed appears in the array. When the counter equals the number of letters in the solution the player wins.

A second counter will increment each time an incorrect guess is made. A new hangman picture will display each time this counter increments. Each successive picture displays a more complete "hangman". A "game over" alert is called when the allowable number of incorrect guesses have been made and the picture is completed.

///////// Unsolved Issues /////////
At this time the game cannot accomodate solutions with repeated letters. It cannot identify all divs with the same id or class and change the properties of them.

The development timelines did not allow for the refinement of presentation and style.

This application is not yet completely responsive.


////////// User Stories //////////

1. Users need to know how many letters are in the word.
2. The user needs to know which letters have been selected and which are still available.
3. The user will want to play on devices with different screen sizes.
4. The user will want instructions available
5. The user may want to track the number of wins for player 1 vs. player 2.

