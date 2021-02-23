/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Fizz Buzz - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variable to store submit button by id for event listener assignment below - You can ignore this */
const submitBtn = document.querySelector('#submit-btn');


/* Variable to target UL in index.html - You can ignore this */
const list = document.querySelector('.fizz-buzz-list');

/* Loop to programmatically generate 100 LI elements - You can ignore this */
for (let i = 1, j = 100; i <= j; i++) {
  const li = document.createElement('LI');
  li.setAttribute('class', 'item');
  list.appendChild(li);
}


/* Function for printing fizz buzz - called in event listener below */
const fizzBuzz = () => {

  // Variable for HTML collection of 100 LI items on the page - You can use this below to print your values to the page
  const items = document.querySelectorAll('.fizz-buzz-list li');


  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

  // Print the numbers 1 - 100 to the console and/or the page
  // If a number is a multiple of 3, print 'Fizz' instead
  // If a number is a multiple of 5, print 'Buzz' instead
  // If a number is a multiple of 3 and 5, print 'Fizz-Buzz' instead

  // PRO TIPS:
    // The Modulo or Modulus operator, `%`, can be helpful here.  Try Googling it if you're unfamiliar with this operator.
    // When looping and printing values, remember, indexes start at zero.  But you want the numbers 1 - 100.
    // Make good use of local variables for storing values you want to keep track of in a loop, and for values that you're going to be using multiple times.
}


/* submit btn listener */
submitBtn.addEventListener('click', () => {

  // Calling the fizzBuzz function
  fizzBuzz();

  // Helpful log statement to test function - You can comment out this if you like
  console.log('Submit button is functional!');

});