/*
  HTML 5 Tutorial Section
*/

// Generic anonymous function declaration?.. not sure what this really means.
$(function(){

  // Select the image with class 'data-img'
  // When it's clicked, run the inline function:
  $('.data-img').on('click', function(){

    // $(this) refers to the image we just clicked
    // Grab the value of its 'data-hidden-message' attribute
    // Alert the content to the page.
    var message = $(this).attr('data-hidden-message');
    alert(message);

  });

  $('.game-button').on('click', function(){
    var game = $(this).attr('game');
    playGame(game);
  });
});


/*
  Javascript Tutorial Section
*/

// In production sites, there are tools to help minify my JS.
// For example, there is something called "Code Kit" that will do it.

// alert("Hello world! :)");

// set up a string.  We can use this to format console logs nicely! Sweet.
var prefix = "[TEST] ";

// When you add two strings together, they get concatonated.
console.log(prefix + "Hello console!");

// Arithmetic operators mean do math when you're talking numbers.
var bondNumber = 1217;
console.log("Adding Numbers: 1217 + 4")
console.log(bondNumber + 4);

// JS has booleans too.
// ! is the 'not' operator
var good = true;
var bad = false;
console.log("Not good: " + !good);

// We can also use comparison operators to check stuff
/*
  == : equal to?
  === : equal values and equal types?
  != : not equal to?
  !== : not equal values OR not equal types?
  > : greater than?
  < : less than?
  >= : Greater than or equal to?
  <= : Less than or equal to?
*/
console.log("bad equal to true?: " + (bad == true));

// If statements work like this:
// Use === when doing this, for reasons currently unexplained
if (good === true) {
  console.log("If Good is true!");
} else if (good === false) {
  console.log("If Good is false!");
} else {
  console.log("Good is something else entirely. :|");
}

// Switch statements are an easier, cleaner way to write big if-else statements.
// Switch statements work like this:
var switchOption = 3;
switch (switchOption) {
  case 0:
    console.log("We have nothing. :()");
    break;
  case 1:
    console.log("We have an item.");
    break;
  case 2:
    console.log("We have a couple items! :)");
    break;
  default:
    console.log("I have no idea how many items you have... D:");
}

/*
  Arrays work the same way as basically every other language.
  They can hold basically any data type you want, including numbers, strings,
  booleans, and more arrays.
*/
var tinyArray = [1, "Ryan Allen", [true, false]];
console.log("My name from this array is: " + tinyArray[1]);
console.log("There is a sub-array inside of it, and the second value is: " + tinyArray[2][1]);

/*
  Loops are fun too!
  For and while loops work exactly like Java.
*/
/*
  Start with an array definition or something to loop over.
  For loops are nice when there is a definite end, of finite length of the loop,
  like when you're counting or listing something.
*/
console.log("Let's use a for loop.");

var loopArray = ["one", "two", "three", "potato", tinyArray];

// for (initialization, continue?, iteration)
for (var i = 0; i < loopArray.length; i++) {
  console.log("Standard for says [" + i + "]:" + loopArray[i]);
}

/*
  The exact same thing can be accomplished a little more cleanly by
  slightly changing the continuation check. Now, the loop just checks if there
  is a value in the array for the given index.
*/
console.log("Not let's do it a little differently...");
for (var i = 0; loopArray[i]; i++) {
  console.log("Modified for says [" + i + "]:" + loopArray[i]);
}

/*
  While loops are best when we aren't sure when the loop will end, or if the condition
  for it to stop is based on some kind of user interaction or object state change.

  It's important to note that while loops don't have the counter init and incrementing
  built into the loop syntax, so we have to be careful to set them up ourselves or we
  risk starting an infinite loop and crashing the browser.
  Like I literally just did... god damn it.
*/
console.log("Now lets try a while loop...");
var i = 0;
while (loopArray[i]) {
  console.log("While says [" + i + "]: " + loopArray[i]);
  i++;
}

/*
  Play a game!
  Pass in the name of a game, and this function will run it!
*/
function playGame(game) {

  switch (game) {

    case "guessANumber":
      guessANumber();
      break;

    default:
      console.log("Couldn't find a game called " + game + ", sorry!");
  }

}

/*
  Games
*/

/*
  Guess a number
  This game picks a random number between the thresholds and gives the player some
  number of chances to guess the right one.
*/
function guessANumber() {
  // Set up the thresholds
  var min = 1;
  var max = 10;
  var maxAttempts = 10;

  // Generate a random number as the answer
  var answer = getRandomInt(min, max);
  console.log("Answer is: " + answer);

  // Initial prompt for answer
  // This counts as the first guess, so init the counter to 1, not 0
  var guess = prompt("Guess a number between " + min + " and " + max);

  var i = 1;
  while(i < maxAttempts) {

    if(guess == answer) {
      alert("You guessed it!");
      break;
    } else {
      prompt("Nope, guess again!");
    }
    i++;
  }

  // If the player ran out of attempts, they lose
  if(i >= maxAttempts) {
    alert("You lose!");
  }

}

/*
  Game Utilities
  This takes the pain out of generating a random integer
*/
function getRandomInt(min, max) {

  var delta = (max + 1) - min;
  return Math.floor(Math.random() * delta) + min;

}
