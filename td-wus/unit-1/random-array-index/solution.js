/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Random Array Index - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/* Variable to store play button by id for event listener assignment below - You can ignore this */
const playBtn = document.querySelector('#play-btn');

/* Variables to store DOM elements that display player's scores - You'll use these variables in the event listener below */
const scoreOneElement = document.querySelector('#score-1');
const scoreTwoElement = document.querySelector('#score-2');


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

const twelveSidedDie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function diceRoll(array) {
  const randomNumber = Math.ceil(Math.random() * array.length);
  return randomNumber;
}


/**
 * Event listeners for playBtn - Write code in the body of the callback in the event listener below to complete this exercise
 */
playBtn.addEventListener('click', () => {

  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge
  const playerOneScore = diceRoll(twelveSidedDie);
  const playerTwoScore = diceRoll(twelveSidedDie);

  console.log(playerOneScore);
  console.log(playerTwoScore);

  scoreOneElement.innerHTML = playerOneScore;
  scoreTwoElement.innerHTML = playerTwoScore;


  // Helpful log statement to test function - You can comment out this if you like
  console.log('Play button is functional!');

  // Calling helper function from color-changer.js to set the color of the results
  updateColors(scoreOneElement, scoreTwoElement);
});