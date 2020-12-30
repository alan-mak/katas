let prompt = require("prompt-sync")();

// code below (replace this example)
let number = Math.floor((Math.random() * 100) + 1);
console.log(number);
let guessed = new Array;
let counter = 0;
let logic;
while (!logic) {
  let answer = prompt("Guess a number: ");
  if (answer == number) {
    counter++;
    logic = true;
  }
  if (guessed.includes(answer)) {
    console.log("Already guessed!\n");
  } else if (answer < number) {
    console.log("Too low!\n");
    counter++;
    guessed.push(answer);
  } else if (answer > number) {
    console.log("Too high!\n");
    guessed.push(answer);
    counter++;
  } else {
    console.log("Not a number! Try again!\n");
  }
}
console.log("You got it! It took " + counter + " attempts!");