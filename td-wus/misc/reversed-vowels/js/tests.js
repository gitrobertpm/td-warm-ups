/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Reversed Vowels - Tests
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";

/**
 * Check if a string equals one of the expected answers
 */ 
const testStrings = (testString) => {
  const answers = ['Teum Troehease', 'FuzzBizz', 'Jobberwacky', 'Fall Stuck', 'Hollo werld!', 'UoYIYeA'];
  return answers.includes(testString);
}

/**
 * Check if running your reverseVowelsOfString function succeeds at reversing the vowels in all the test strings
 * Display results
 */ 
const displayResults = (reverseVowelsOfString) => {
  const testElements = document.querySelectorAll('.test');

  [...testElements].forEach((testElement, i) => {
    testElement.firstElementChild.textContent = '';
    const reversedVowelString = reverseVowelsOfString(testElement.textContent);
    testElement.firstElementChild.innerHTML = ` — <span class="code">${reversedVowelString}</span>`;

    if (testStrings(reversedVowelString)) {
      testElement.querySelector('.code').style.borderColor = 'rgb(95, 207, 128)';
    } else {
      testElement.querySelector('.code').style.borderColor = 'red';
    }
  });
}
