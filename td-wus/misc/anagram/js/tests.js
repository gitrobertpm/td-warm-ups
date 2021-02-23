/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Anagrams - Tests
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";

/**
 * Array of strings to compare for anagram tests
 */
const stringPairs = [
  ['Treehouse', 'Rocks'], 
  ['Jim Morrison', 'Mr Mojo Risin'], 
  ['Test One', 'Test Two'], 
  ['Elvis', 'Lives'], 
  ['Not', 'Anagram'], 
  ['Listen', 'Silent'], 
  ['Foo', 'Bar'], 
  ['Clint Eastwood', 'Old West Action']
];

/**
 * Check if running your anagramTest function on the stringPairs returns true or false
 * Display results
 */ 
const displayResults = (anagramTest) => {
  const testElements = document.querySelectorAll('.test');

  [...testElements].forEach((testElement, i) => {
    testElement.firstElementChild.textContent = '';
    const areAnagrams = anagramTest(stringPairs[i][0], stringPairs[i][1]);
    testElement.firstElementChild.innerHTML = `<span class="code">${areAnagrams}</span>`;

    if (i % 2 !== 0) {
      if (areAnagrams === true) {
        testElement.querySelector('.code').style.borderColor = 'rgb(95, 207, 128)';
      } else {
        testElement.querySelector('.code').style.borderColor = 'red';
      } 
    } else {
      if (areAnagrams === false) {
        testElement.querySelector('.code').style.borderColor = 'rgb(95, 207, 128)';
      } else {
        testElement.querySelector('.code').style.borderColor = 'red';
      }
    }
  });
}
