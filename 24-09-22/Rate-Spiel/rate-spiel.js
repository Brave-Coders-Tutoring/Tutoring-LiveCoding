let counter = 0;
const number = Math.floor(Math.random() * 10 + 1);

console.log(number);

for (let guessRight = 4; guessRight > 0; guessRight--) {
  counter++;
  var guess;
  if (guessRight === 4) {
    guess = prompt("Guess a number between 1 - 10:");
  } else if (guessRight === 1) {
    alert("Unfortunately, your guess right is over! The Number is " + number);
  } else {
    if (isNaN(guess)) guess = prompt("You should type a Number!");
    else if (guess === "") guess = prompt("You didn't type any Number!");
    else guess = prompt("Wrong!!! Try Again.");
  }

  if (number === +guess) {
    alert(
      `Congratulations, your guess is correct! You found it ${counter} times.`
    );
    break;
  }
}

// let counter = 0;
// const number = Math.floor(Math.random() * 10 + 1);

// console.log(number);

// let guess = prompt("Guess a number between 1 - 10:");

// for (let guessRight = 3; guessRight > 0; guessRight--) {
//   counter++;

//   if (guessRight === 1) {
//     if (number === +guess) {
//       alert(
//         `Congratulations, your guess is correct! You found it ${counter} times.`
//       );
//       break;
//     } else {
//       alert("Unfortunately, your guess right is over! The Number is " + number);
//     }
//   } else {
//     if (number === +guess) {
//       alert(
//         `Congratulations, your guess is correct! You found it ${counter} times.`
//       );
//       break;
//     }

//     if (isNaN(guess)) guess = prompt("You should type a Number!");
//     else if (guess === "") guess = prompt("You didn't type any Number!");
//     else guess = prompt("Wrong!!! Try Again.");
//   }
// }
