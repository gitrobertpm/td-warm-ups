/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Async Modal - Templates and helper code
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2021
 */

"use strict";

// STUDENTS WON'T NEED TO DO ANYTHING IN THIS FILE
/* Variable to store API request URL and DOM selectors */
let triviaUrl = 'https://opentdb.com/api.php?amount=9&type=multiple&category=11';
const list = document.querySelector('#list');
const btn = document.querySelector('#btn');


/* Array of RGB color values */
const colorArr = [
  'rgba(0, 191, 255, 0.8)', 
  'rgba(255, 20, 147, 0.8)', 
  'rgba(255, 99, 71, 0.8)', 
  'rgba(255, 215, 0, 0.9)',
  'rgba(0, 255, 0, 0.8)',
  'rgba(138, 43, 226, 0.8)',
  'rgba(255, 0, 0, 0.8)',
  'rgba(0, 255, 255, 0.8)',
  'rgba(0, 0, 255, 0.5)'
];


/* Helper function for setting random color value for heading of questions cards */
const getRandomColor = () => {
  const ranNum = Math.ceil(Math.random() * colorArr.length - 1);
  return colorArr[ranNum];
}


/* Question template - Randomly add correct answer to array of incorrect answers */
const questionTemplate = (que, i) => {
  const color = getRandomColor();
  const ranNum = Math.floor(Math.random() * que.incorrect_answers.length);
  que.incorrect_answers.splice(ranNum, 0, que.correct_answer);
  const answers = que.incorrect_answers;
  return `
    <div class="que-card" id="${i}">
      <p class="category" style="background-color: ${color}"><strong class="identifier">Category — </strong>${que.category}</p>
      <div class="que-box">
        <p class="identifier"><strong>Question:</strong></p>
        <p class="question"> ${que.question}</p>
      </div>
      <div class="choice-box">
        <p class="identifier"><strong>Multiple Choice:</strong></p>
        <ol type="a">
          ${answers.map(ans => `<li>${ans}</li>`)}
        </ul>
      </div>
      <p class="difficulty"><strong class="identifier">Difficulty:</strong> ${que.difficulty}</p>
    </div>
  `;
}

/* Create question cards and add them to the display */
const generateQuestions = data => 
  data.forEach( (que, i) => 
    list.insertAdjacentHTML('beforeend', questionTemplate(que, i)));


/* Remove the weird commas that showed up in the multiple choice section of the question card*/
const cleanUpAnswerLists = () => 
  document.querySelectorAll('ol').forEach(ol => 
    ol.childNodes.forEach(node => 
      node.tagName === undefined ? 
      node.remove() : 
      null));


/* Safely asynchronously fetch data and return results */
const getData = async (url) => {
  try {
    const raw = await fetch(url);
    const data = await raw.json();
    console.log(data);
    return data.results; 
  } catch (err) {
    console.log(err);
    throw err;
  }
}
