/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Reversed Vowels - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";

const reverseVowelsOfString = string => {
  const vowels = 'aeiou';
  const vowelIndexes = [];
  const vowelsArray = [];
  [...string].forEach((letter, i) => {
      if (vowels.includes(letter.toLowerCase())) {
          vowelIndexes.push(i);
          vowelsArray.push(letter);
      }
  });

  const stringArray = string.split('');
  const reversedVowels = vowelsArray.reverse();
  vowelIndexes.forEach((vowelIndex, i) => stringArray[vowelIndex] = reversedVowels[i]);
  return stringArray.join('');


  /**
   * Don't remember who did this
   */
  // const vowels = 'AaEeIiOoUu',
  // collected = string.match(new RegExp(`[${vowels}]`, 'g'));
  // let newString = '';
  // for (let char of string) {
  // if (vowels.includes(char)) newString += collected.pop();
  // else newString += char;
  // }
  // return newString;


  /**
   * Kaylen's
   */
  // const regex = new RegExp(/[aeiou]/i);

  // const stringArray = string.split("");
  // const stringVowels = string.replace(/[^aeiou]/gi, "").split("");
  // for (let i = 0; i < stringArray.length; i += 1) {
  //   regex.test(stringArray[i]) ? (stringArray[i] = stringVowels.pop()) : false;
  // }
  // return stringArray.join("");


  /**
   * Scotty's
   */
  // let vowels = 'AaEeIiOoUu',
  //     stringSplit = [...string],
  //     vowelsInString = stringSplit.filter(c => vowels.includes(c));
  // return stringSplit.reduce((a, c) => vowels.includes(c) ?  a + vowelsInString.pop() : a + c, '');
}


/* btn listener */
document.querySelector('#btn').addEventListener('click', () => {

  // Test your reverseVowelsOfString function
  displayResults(reverseVowelsOfString);

  // Helpful log statement to test function - You can comment out this if you like
  console.log('Play button is functional!');
});
