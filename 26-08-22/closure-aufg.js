// Aufgabe 1

// Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

// Examples:
// specialMultiply(3,4); // 12 specialMultiply(3)(4); // 12 specialMultiply(3); // function(){}.... 

function specialMultiply(a, b) {
    if (arguments.length === 2) return a * b;
    else {
        return function (b) {
           return a * b;
        };
    }
}
    
console.log(specialMultiply(4, 5));
console.log(specialMultiply(4)(3)); 



// Aufgabe 2

// Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

// In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

// You will have to make use of closure to solve this problem.

// Examples (yours might not be like this, since the answer is random every time): var game = guessingGame(5) game(1) // "You're too low!" game(8) // "You're too high!" game(5) // "You're too low!" game(7) / 

function guessingGame(amount){
    let answer = Math.floor(Math.random()*10);
    console.log(`---${(answer)}---`);
    let guesses=0;
    return function (guess){
    // debugger;
        if(guesses<amount){
            guesses++
            console.log(guesses);
            if(guess === answer) return "You got it!";
            if(guess>answer) return "Too high!";
            else return "Too low!";
          
        }
        else return "Start a new Game";
    }
}

let game1 = guessingGame(6);
console.log(game1(2));
console.log(game1(3));
console.log(game1(4));
console.log(game1(5));
console.log(game1(6));
console.log(game1(7));
console.log(game1(8));