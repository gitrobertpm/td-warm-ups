/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Async Modal - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2021
 */

"use strict";

// Answer template
const answerTemplate = `
  <div class="modal-container">
    <div class="modal">
      <button class="modal-close-btn" id="modal-close-btn">X</button>
      <p>
        <strong class="identifier">Answer:</strong> 
        <span class="answer">}</span>
      </p>
    </div>
  </div>
`;


// Creates the modal, adds it to the DOM, hides it, adds the click handler for the close button
const generateAnswerModal = () => {
    list.insertAdjacentHTML('afterend', answerTemplate);
    const answerModal = document.querySelector('.modal-container');
    answerModal.style.display = 'none';
    document.querySelector('#modal-close-btn').addEventListener('click', e => answerModal.style.display = 'none');
};


// Updates the modal text
const updateAnswer = ans => {
  const answer = document.querySelector('.answer');
  answer.innerHTML = '';
  answer.insertAdjacentHTML('afterbegin', ans);
}


// Adds handler to cards that display the modal and populates it with the correct text
const addClickToQues = data => {
  document.querySelectorAll('.que-card').forEach( (que, i) => {
    que.addEventListener('click', e => { console.log('test');
      document.querySelector('.modal-container').style.display = '';
      updateAnswer(data[i].correct_answer);
    });
  });
};


// Initiates the app - called in the click handler below.
const initTrivia = async () => {
  list.innerHTML = '';
  const data = await getData(triviaUrl); console.log(data);
  generateQuestions(data);
  cleanUpAnswerLists();
  generateAnswerModal();
  addClickToQues(data);
};


/* btn listener */
btn.addEventListener('click', e => {
  e.preventDefault();

  const categorySelection = document.querySelector('select').value;
  const dataNum = (categorySelection === 'Choose your category') ? 11 : 
    document.querySelector(`option[value=${categorySelection}]`).getAttribute('data-num');
  triviaUrl = `https://opentdb.com/api.php?amount=9&type=multiple&category=${dataNum}`;

  initTrivia();

  // Helpful log statement to test function - You can comment out this if you like
  console.log('Play button is functional!');
});
