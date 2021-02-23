/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Conditional String - Solution
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

  const myChar = createRanCharObj();
  console.log(myChar);

  let htmlString = '';
  htmlString += `<p>My ${myChar.icon} character has:</p>`;

  if (myChar.experience) {
    htmlString += `<p>An experience level of ${myChar.experience}</p>`;
  }

  if (myChar.strength) {
    htmlString += `<p>A strength level of ${myChar.strength}</p>`;
  }

  if (myChar.wisdom) {
    htmlString += `<p>A wisdom level of ${myChar.wisdom}</p>`;
  }

  if (myChar.endurance) {
    htmlString += `<p>An endurance level of ${myChar.endurance}</p>`;
  }

  if (myChar.charisma) {
    htmlString += `<p>A charisma level of ${myChar.charisma}</p>`;
  }

  statString.innerHTML = htmlString;


  // Helpful log statement to test function - You can comment out this if you like
  console.log('Print button is functional!');

  // Calling the helper function from the ` js/object.js` file to print the objects stats to compare with your string
  printStats(myChar);
});