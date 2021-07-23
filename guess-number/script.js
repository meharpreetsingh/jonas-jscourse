'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 3;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (score > 1) {
    // WHen user wins the game
    if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🎉 Correct Number!';
      displayMessage('🎉 Correct Number!');

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highScore) {
        // Change High Score if high score is low
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

    }

    // When guess is wrong
    else if (guess !== secretNumber) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📉 Too low';
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    }

    // // When Guess is too hight
    // else if (guess > secretNumber) {
    //   document.querySelector('.message').textContent = '📈 Too High';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // }

    // // WHen guess is too low
    // else if (guess < secretNumber) {
    //   document.querySelector('.message').textContent = '📉 Too low';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // }
  }

  // When score is 0
  else {
    // document.querySelector('.message').textContent = '😑 You lost the game!';
    displayMessage('😑 You lost the game!')
    score = 0;
    document.querySelector('.score').textContent = score;
  }

});

// AGAIN? Button Functionality
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});