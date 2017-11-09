var num = Math.floor(Math.random()*11);
var guessedNum = prompt("Guess a number between 0 and 10, please.");
var regex = /([^0-9])/g;

function guess(guessedNum) {
  if(/([^0-9])\w+/g.test(guessedNum)) {
    console.log('regex text matched');
    guessedNum = prompt("No letters, periods, or special characters. Just positive, whole numbers. C'mon. Try again please.");
    guess(guessedNum);
  }

  else if(guessedNum == num){
    num = Math.floor(Math.random()*11);
    guessedNum = prompt("Holy moly! You got it! Congratulations!!! I'm thinking of a new number. Try to guess it.");
    guess(guessedNum);
  }

  else if (guessedNum < num) {
    guessedNum = prompt("I'm sorry. You guessed to low. Try again please.");
    guess(guessedNum);
  }

  else if (guessedNum > num) {
    guessedNum = prompt("I'm sorry. You guessed to high. Try again please.");
    guess(guessedNum);
  }
}

guess(guessedNum);
