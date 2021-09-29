'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeNumberWidth = function (size) {
  document.querySelector('.number').style.width = size;
};

const changeScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayNumber(secretNumber);
    changeBackgroundColor('#60b347');
    changeNumberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      changeScore(score);
    } else {
      displayMessage('You lost the game!');
      changeScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  changeScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  changeBackgroundColor('#222');
  changeNumberWidth('15rem');
});
