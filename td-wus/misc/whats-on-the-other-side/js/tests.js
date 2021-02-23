/**
 * Treehouse FSJS Techdegree - Code Adventure
 * What's on the other side - Tests
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/*** 
 * IMPORTANT: The code below is for running tests and displaying results
 * Making changes in this file can break the tests
 ***/


// Variable to store test button by id for event listener assignment below
const btn = document.querySelector('#btn');


// The btn click listener
btn.addEventListener('click', () => {

  // Variables to target DOM elements for displaying test results
  const elOne = document.querySelector('#test-1');
  const elTwo = document.querySelector('#test-2');
  const elThree = document.querySelector('#test-3');
  const elFour = document.querySelector('#test-4');


  // Variables for running your code on different inputs and storing the results
  const resultOne = findTheOtherSide(6, 5);
  const resultTwo = findTheOtherSide(10, 4);
  const resultThree = findTheOtherSide(14, 7);
  const resultFour = findTheOtherSide(24, 19);


  // Function to test to check if your results are correct
  const test = (res, sol) => (res === sol) ? true : false;

  // Variables to store test results
  const testOne = test(resultOne, 2);
  const testTwo = test(resultTwo, 9);
  const testThree = test(resultThree, 0);
  const testFour = test(resultFour, 7);


  // Function for coloring result display
  const colorResult = (bool, el) => (bool) ? el.style.color = 'rgba(58, 193, 98, 0.9)' : el.style.color = 'red';

  // Printing test results
  elOne.innerHTML = resultOne;
  elTwo.innerHTML = resultTwo;
  elThree.innerHTML = resultThree;
  elFour.innerHTML = resultFour;

  // Coloring test results
  colorResult(testOne, elOne);
  colorResult(testTwo, elTwo);
  colorResult(testThree, elThree);
  colorResult(testFour, elFour);
});