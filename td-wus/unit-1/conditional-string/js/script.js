/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Conditional String - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variable to store print button by id for event listener assignment below — You can ignore this */
const print = document.querySelector('#print');

/* Variable to store element that you'll use to print your conditional string — You'll use this below */
const statString = document.querySelector('#stat-string');


/**
 * Event listeners for print button
 */
print.addEventListener('click', () => {

  // Variable storing your random character object
  const myChar = createRanCharObj();

  // Helpful log statement so you can inspect your character object in the console
  console.log(myChar);


  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

  // 1) Use `var` or `let` to create a variable and set it equal to an empty string

  // 2) Concatenate to the above string variable the following string and value
      // '<p>My ' + myChar.icon + 'character has:</p>'
  
  // 3) `console.log()` the above string variable to check its value in the console
      // Additionally, you can complete step 5 of these instructions now to see the results of your string variable printed to the page in the browser when you click the print button

  // 4) Use simple `if` statements to conditionally concatenate strings for your characters stats.
      // Your character will have three of five possible stats — 'experience', 'strength', 'wisdom', 'endurance', 'charisma'
      // You will need a separate `if` statement for each of these five stats 
      // The `if` statements will simply check if an object property exists — `if (object.property) {do something}
      // If the object.property exists, concatenate to the above string variable something like the following string and value
        // '<p>An experience level of ' + myChar.experience + '</p>'
      // Repeat this process for all five possible character states

  // 5) Finally, set the innerHTML of the `statString` variable above equal to your conditional string variable


  // Helpful log statement to test function - You can comment this out if you like
  console.log('Print button is functional!');

  // Calling the helper function from the ` js/object.js` file to print the objects stats to compare with your string
  printStats(myChar);
});