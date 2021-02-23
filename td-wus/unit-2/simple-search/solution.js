/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Simple Search - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to reference the `input` and search `button` elements */
const search = document.querySelector('#search-input');
const submit = document.querySelector('#submit');


/* Variable to store HTMLCollection of `table` cells */
const tableCells = document.querySelectorAll('td');

// Helpful log statements
console.log(search);
console.log(submit);
console.log(tableCells);


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

function simpleSearch(searchInput, names) {
  for (let i = 0, j = names.length; i < j; i++) {
    names[i].classList.remove('match');
    if (searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
      names[i].classList.add('match');
    }
  }
}


/**
 * Event listeners for buttons - Invoke your functions in the body of the callbacks in the event listneres below
 */

/* submit listener */
submit.addEventListener('click', (event) => {
  event.preventDefault();

  // Invoke your search function here - Arguments: event
  simpleSearch(search, tableCells);

  // Helpful log statement to test function
  console.log('Submit button is functional!');
});

/* submit listener */
search.addEventListener('keyup', () => {

  // Invoke your search function here - Arguments: event
  simpleSearch(search, tableCells);

  // Helpful log statement to test function
  console.log('Keyup event on the Search input is functional!');
});