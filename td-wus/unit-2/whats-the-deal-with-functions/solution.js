/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * What's the Deal with Functions? - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons */
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');


/* Variable to store DOM elements */
const element1 = document.querySelectorAll('.item')[0];
const element2 = document.querySelectorAll('.item')[1];
const element3 = document.querySelectorAll('.item')[2];
const element4 = document.querySelectorAll('.item')[3];


// Helpful log statements
console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);


/* Variables to use as `arguments` when invoking your functions */
const value1 = 42;
const value2 = 'Treehouse Rocks!';
const value3 = btn3.tagName;
const value4 = [value1, value2, value3]


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

function func1(number) {
  element1.style.color = 'green';
  element1.innerHTML = number;
}

function func2(string) {
  element2.style.color = 'green';
  element2.innerHTML = string;
}

function func3(element) {
  element3.style.color = 'green';
  element3.innerHTML = element;
}

function func4(array) {
  element4.style.color = 'green';
  let printValue = '';
  for(let i = 0, j = array.length; i < j; i++) {
    printValue += array[i] + ' ';
  }
  element4.innerHTML = printValue;
}


/**
 * Event listeners for buttons - Invoke your functions in the body of the callback
 */

/* btn1 listener */
btn1.addEventListener('click', () => {

  func1(value1);

  // Helpful log statement to test function
  console.log('First button is functional!');
});


/* btn2 listener */
btn2.addEventListener('click', () => {

  func2(value2);

  // Helpful log statement to test function
  console.log('Second button is functional!');
});


/* btn3 listener */
btn3.addEventListener('click', () => {

  func3(value3);

  // Helpful log statement to test function
  console.log('Third button is functional!');
});


/* btn4 listener */
btn4.addEventListener('click', () => {

  func4(value4);

  // Helpful log statement to test function
  console.log('Fourth button is functional!');
});