/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * List Section Selection - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons */
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');


/* Variable to store NodeList of DOM elements */
const listItems = document.querySelectorAll('.item');

// Helpful log statement
console.log(listItems);


/* Variable to store the number of items to show at any given time */
const perPage = 2;


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

function sectionSelection(list, section) {
  [...list].forEach(item => item.style.color = 'whitesmoke');
  
  const startIndex = (section * perPage) - perPage;
  const endIndex = (section * perPage);

  console.log(startIndex, endIndex);

  [...list].forEach((item, indy) => {
    console.log(startIndex);

    if (indy >= startIndex && indy < endIndex) {
      item.style.color = 'green';
    }
  });
}


/**
 * Event listeners for buttons - Invoke your function in the body of the callback
 */

/* btn1 listener */
btn1.addEventListener('click', () => {

  // Invoke your sectionSelection function here - Arguments: listItems, 1
  sectionSelection(listItems, 1);

  // Helpful log statement to test function
  console.log('First button is functional!');
});


/* btn2 listener */
btn2.addEventListener('click', () => {

  // Invoke your sectionSelection function here - Arguments: listItems, 2
  sectionSelection(listItems, 2);

  // Helpful log statement to test function
  console.log('Second button is functional!');
});


/* btn3 listener */
btn3.addEventListener('click', () => {

  // Invoke your sectionSelection function here - Arguments: listItems, 3
  sectionSelection(listItems, 3);

  // Helpful log statement to test function
  console.log('Third button is functional!');
});