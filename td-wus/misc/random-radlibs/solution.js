/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Random Radlibs - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

  // Variable to store the radlib diplay DOM element - you'll use this variable later
  const radlibEl = document.querySelector('#radlib');

/**
 * @description A sort of random Mad Lib generator
 *              Takes in a sentence with word form placeholders in square brackets 
 *              and replace them with random words from local arrays
 *              You won't ever call this function, as it's called for you in the custom tests in the `js/tests.js` file
 * @param radlibSentence - String
 * @returns String - updated radlibSentence
 */

function radlib(radlibSentence) {

  console.log(radlibSentence)

  const nounArr = ['chicken', 'manhole-cover', 'monkey', 'slinky', 'battleship'];
  const pluralNounArr = ['eggs', 'airheads', 'skittles', 'disasters', 'clowns'];
  const pastTenseVerbArr = ['jackknifed', 'decimated', 'frazzled', 'bamboozled', 'brainwashed'];
  
  const randomWord = arr => arr[Math.ceil(Math.random() * arr.length) - 1];

  const radlibSentenceArray = radlibSentence.split('*');
  console.log(radlibSentenceArray)
  for (let i = 0; i < radlibSentenceArray.length; i++) {
    if (radlibSentenceArray[i] === 'noun') radlibSentenceArray[i] = randomWord(nounArr);

    if (radlibSentenceArray[i] === 'plural_noun') radlibSentenceArray[i] = randomWord(pluralNounArr);

    if (radlibSentenceArray[i] === 'past_tense_verb') radlibSentenceArray[i] = randomWord(pastTenseVerbArr);
  }

  const rejoinedSentence = radlibSentenceArray.join('');

  console.log(rejoinedSentence)

  // radlibEl.innerHTML = rejoinedSentence;
  
  return rejoinedSentence; 
}