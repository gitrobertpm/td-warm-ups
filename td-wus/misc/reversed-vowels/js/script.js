/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Reversed Vowels - Script
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";

/* Function for reversing the vowels in a string */
const reverseVowelsOfString = string => {

  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

  // Take the input string, reverse all the vowels in it, and return the new string
  // So the first vowel in the input string becomes the last vowel in the returned string
  // And the last vowel becomes the first, etc.
  // You don't have to worry about spaces or uppercase letters

  // EXAMPLE: reverseVowelsOfString('FizzBuzz') === 'FuzzBizz';

  // PRO TIP: Remember, strings are immutable, so you can't actually change the vowels in the string
  //          Instead, you need to get the vowels from the input string and reverse them
  //          And then build and return a new string with the reversed vowels
  //          Converting strings to arrays and back to strings can be powerful technique for string manipulation
  //          Log out the string parameter in this function and click Test to see what you're working with
  // First, extract all the vowels from the string

}


/* btn listener */
document.querySelector('#btn').addEventListener('click', () => {

  // Test your reverseVowelsOfString function
  displayResults(reverseVowelsOfString);

  // Helpful log statement to test function - You can comment out this if you like
  console.log('Test button is functional!');
});