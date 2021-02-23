/**
 * Treehouse FSJS Techdegree
 * End of the List - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/* Variables to store buttons */
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');


/* Variable to store NodeList of DOM elements */
const items = document.querySelectorAll('.items');

// Helpful log statement
console.log(items);

let indy = 0;

function increment() {
  items[indy].innerHTML = '';
  indy = (indy === items.length - 1) ? 0 : indy + 1;
  items[indy].innerHTML = '&#9786;';
}

function decrement() {
  items[indy].innerHTML = '';
  indy = (indy === 0) ? items.length - 1 : indy - 1;
  items[indy].innerHTML = '&#9786;';
}


/**
 * Event listeners for buttons - Invoke your functions in the body of the callback
 */

/* Next button listener */
nextBtn.addEventListener('click', () => {
  increment();

  // Helpful log statement to test function
  console.log('Next btn is functional!');
});


/* Prev button listener */
prevBtn.addEventListener('click', () => {
  decrement() ;

  // Helpful log statement to test function
  console.log('Prev btn is functional!');
});