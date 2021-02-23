/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * warm_up_name - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variable to store play button by id for event listener assignment below - You can ignore this */
const btn = document.querySelector('#btn');


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

const createAndAppendMarkup = () => {
  const list = document.querySelector('#list');
  const div = document.createElement('DIV');
  div.classList.add('item');
  list.appendChild(div);

  return div;
}

const getData = async (url) => {
  const res = await fetch(url);
  const resJson = await res.json();

  return resJson; 
}


// RICK AND MORTY

const rickAndMorty = async () => {
  const url = 'https://rickandmortyapi.com/api/character/';
  const data = await getData(url);
  const div = createAndAppendMarkup();
  let markup = '<h1>Rick and Morty</h1>';
  console.log(data)
  data.results.forEach((res) => {
    markup += `
      <h3>${res.name}</h3>
      <img src ="${res.image}" alt="Image of ${res.name}"/>
      <ul>
        <li><strong>Status:</strong> ${res.status}</li>
        <li><strong>Species:</strong> ${res.species}</li>
      </ul>
      <br><hr><br>
    `;
  });
  
  return div.innerHTML = markup;
};

rickAndMorty();





// MAGIC

const mtg = async () => {
  const url = 'https://api.magicthegathering.io/v1/cards/?pageSize=20&rarity=rare';
  const data = await getData(url);
  const div = createAndAppendMarkup();
  let markup = '<h1>Magic the Gathering</h1>';
  console.log(data)
  data.cards.forEach((res) => {
    markup += `
      <h3>${res.name}</h3>
      <img src ="${res.imageUrl}" alt="Image of ${res.name}"/>
      <ul>
        <li><strong>Colors:</strong> ${res.colors}</li>
        <li><strong>Type:</strong> ${res.type}</li>
        <li><strong>Text:</strong> ${res.text}</li>
      </ul>
      <br><hr><br>
    `;
  });
  
  return div.innerHTML = markup;
};

mtg();


// Trivia
const trivia = async () => {
  const url = 'https://opentdb.com/api.php?amount=10';
  const data = await getData(url);
  const div = createAndAppendMarkup();
  let markup = '<h1>Trivia</h1>';
  console.log(data)
  data.results.forEach((res) => {
    markup += `
    <h3>${res.category}</h3>
    <ul>
        <li><strong>Difficulty:</strong> ${res.difficulty}</li>
        <li><strong>Question:</strong> ${res.question}</li>
        <li><strong>Answer:</strong> ${res.correct_answer}</li>
    </ul>
    <br><hr><br>
  `;
  });
  
  return div.innerHTML = markup;
};

trivia();