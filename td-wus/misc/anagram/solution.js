/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Anagrams - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";

/** Scotty's solution
 * 
 * const format = s => [...s.toLowerCase()].sort().join('').replace(/\W/g, '');
 * return format(s1) === format(s2);
 */


const anagramTest = (s1, s2) => {

  if ([...s1].filter(l => l !== ' ').length !== [...s2].filter(l => l !== ' ').length) {
    return false;
  }

  for (let letter of s1) {
    const letterInS1 = [...s1].filter(l => l !== ' ' && l.toLowerCase() === letter.toLowerCase());
    const letterInS2 = [...s2].filter(l => l !== ' ' && l.toLowerCase() === letter.toLowerCase());
    if (letterInS1.length !== letterInS2.length) {
      return false;
    }
  }
  return true;
}



/* btn listener */
document.querySelector('#btn').addEventListener('click', () => {

  // Test your anagramTest function
  displayResults(anagramTest);

  // Helpful log statement to test function - You can comment out this if you like
  console.log('Play button is functional!');
});
