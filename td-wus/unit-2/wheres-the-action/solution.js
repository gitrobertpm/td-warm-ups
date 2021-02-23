/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Where's the Action  - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons by id for event listener assignment - You can ignore these */
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');


/* Variable to store NodeList of DOM buttons - You'll use this */
const buttons = document.querySelectorAll('.control-btn');

// Helpful log statement
console.log(buttons);


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

function setAction(event) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  const button = event.target; 

  button.classList.add('active');
}


/**
 * Event listeners for buttons - Invoke your functions in the body of the callbacks in the event listneres below
 */

/* btn1 listener */
btn1.addEventListener('click', (event) => {

  // Invoke your setAction function here - Arguments: event
  setAction(event);

  // Helpful log statement to test function
  console.log('First button is working!');
});


/* btn2 listener */
btn2.addEventListener('click', (event) => {

  // Invoke your setAction function here - Arguments: event
  setAction(event);

  // Helpful log statement to test function
  console.log('Second button is working!');
});


/* btn3 listener */
btn3.addEventListener('click', (event) => {

  // Invoke your setAction function here - Arguments: event
  setAction(event);

  // Helpful log statement to test function
  console.log('Third button is working!');
});