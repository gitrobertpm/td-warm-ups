/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Logging Values and Types - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Click listener for test button */
document.querySelector('#btn').addEventListener('click', e => {

  // String Section
  let myString = 'Treehouse';
  console.log(myString);
  console.log(typeof myString);


  // Number Section
  let myNumber = 7;
  console.log(myNumber);
  console.log(typeof myNumber);


  // Boolean Section
  let myBoolean = true;
  console.log(myBoolean);
  myBoolean = false;
  console.log(myBoolean);
  console.log(typeof myBoolean);


  // DOM element and log variation section
  var myElement = document.querySelector('#step-1');
  console.log(myElement);
  console.table(myElement);
  console.dir(myElement);

  // Helpful log statement to test function - You can comment out this if you like
  console.log('Test button is functional!');
});
