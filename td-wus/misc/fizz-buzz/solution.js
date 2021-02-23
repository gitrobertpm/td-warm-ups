/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Fizz Buzz - Solution
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

  // Long one liner
  // [...items].forEach((item, i) => item.textContent = (i + 1) % 3 === 0 && (i + 1) % 5 === 0 ? 'Fizz-Buzz' : (i + 1) % 3 === 0 ? 'Fizz' : (i + 1) % 5 === 0 ? 'Buzz' : (i + 1));

  // Short one liner
  // for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)

  for (let i = 0, j = items.length; i < j; i++) {
    const n = i + 1;
    const fizz = n % 3 === 0;
    const buzz = n % 5 === 0;
    let print;

    fizz && buzz ? print = 'Fizz-Buzz' : 
    fizz ? print = 'Fizz' : 
    buzz ? print = 'Buzz' : 
    print = n;

    items[i].textContent = print;
  }
}


/* submit btn listener */
submitBtn.addEventListener('click', () => {

  // Calling the fizzBuzz function
  fizzBuzz();

  // Helpful log statement to test function - You can comment out this if you like
  console.log('Submit button is functional!');

});