/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Anagrams - Script
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";

/* Function for checking if two strings are anagrams */
const anagramTest = (s1, s2) => {

  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

  // Take the two input strings s1 and s2, and return true if they are anagrams and false if they are not
  // Two words or phrases are anagrams if they have:
    // The same length not counting spaces
    // The same letters and the same number of each letter, case insensitive 

  // EXAMPLE: anagramTest('Tired', 'Tried') === true;
  // EXAMPLE: anagramTest('one', 'two') === false;

  // PRO TIP: Here's some tips for comparing words or phrases to check if they are anagrams:
  //          If both strings don't have the same length, minus spaces, they are not anagrams
  //          Lowercase all the letters before comparing strings
  //          Every letter in each string must occur the same number of times in each string
}


/* btn listener */
document.querySelector('#btn').addEventListener('click', () => {

  // Test your anagramTest function
  displayResults(anagramTest);

  // Helpful log statement to test function - You can comment out this if you like
  console.log('Test button is functional!');
});