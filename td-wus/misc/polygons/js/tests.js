/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Polygons - Tests
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

/** THE TESTS ** Don't change anything below this line *********************/

"use strict";

// function to run tests
const tests = () => {

  // DOM selector to target the answer 'span' elements
  const answers = document.querySelectorAll('.answer');

  // array to store side lengths for the tests
  const testNums = [5, 6, 7, 10, 42, 123456789];

  // array to store total squares for side lengths used in the tests
  const testAns = [41, 61, 85, 181, 3445, 30483157253467464];

  // loop over answer elements
  [...answers].forEach((item, i) => {

    // call `squareCount` function from script.js
    const t = squareCount(testNums[i]);

    // set text for answer elements
    item.textContent = t;

    // display pass/fail results
    if (t === testAns[i]) {
      answers[i].style.color = 'rgba(58, 193, 98, 0.9)';
      console.log(`Test ${i+1} passed`);
    } else {
      answers[i].style.color = 'red';
      console.log(`Test ${i+1} failed`);
    }
  });
}

// Variable for form element for submit listener assignment below
const form = document.querySelector('#form');

// submit listener
form.addEventListener('submit', (e) => {

  // prevent submission of form
  e.preventDefault();

  // clear the console
  console.clear(); 

  // invoke tests
  tests();
});