/* Script for demoing my project warm ups */

"use strict";

const wuContainer = document.querySelector('#wu-container');
const wuFrame = document.querySelector('#wu-frame');

// Set the iframe width
wuFrame.width = wuContainer.offsetWidth;


// Generate names and file paths for all the warms 
const wuRoot = 'td-wus';
const wuSubs = ['unit-1', 'unit-2', 'unit-3', 'unit-5', 'misc'];
const wus = [
  ['logging-values-and-types', 'random-array-index', 'conditional-string'],
  ['fun-dom-manipulation', 'list-section-selection', 'wheres-the-action', 'simple-search'],
  ['selects-and-options', 'checkboxes', 'input-validation-errors'],
  ['modals', 'end-of-the-list'],
  ['anagram', 'fizz-buzz', 'polygons', 'random-radlibs', 'reversed-vowels', 'whats-on-the-other-side']
];

// Remove dashes from names
const txtStripper = txt => txt.replaceAll('-', ' ');


// Create the ULs for the custom drop down
wus.forEach((wuArr, i) => {
  wuContainer.insertAdjacentHTML('beforeend', `
    <div class="wu-list-container">
      <h2>${wuSubs[i]} <span class="caret">&#9660;</span></h2>
      <ul id="list-${i}" class="list list-${i}"></ul>
    </div>
  `);

  // Create the lis and btns for individual warm ups
  wuArr.forEach((wu, ii) => {
    document.querySelector(`#list-${i}`).insertAdjacentHTML('beforeend', `
      <li class="wu wu-${i}-${ii}">
        <button type=button data-src="./${wuRoot}/${wuSubs[i]}/${wus[i][ii]}/index.html">${txtStripper(wus[i][ii])}</button>
      </li>
    `);
  });
});

const wuListContainers = document.querySelectorAll('.wu-list-container');

// Tracker values
let clicked;
let wuOpen;


// Program drop down menus to open and close accordingly
wuListContainers.forEach((ul, i) => {
  ul.addEventListener('click', e => {
    wuListContainers.forEach(el => el.style.height = '42px');
    clicked = i;

    if (clicked !== wuOpen) {
      ul.style.height = 'auto';
      wuOpen = i;
    } else {
      wuOpen = '';
    }
  });
});

// More of above
addEventListener('click', e => { 
  if (![...e.target.parentElement.classList].includes('wu-list-container')) {
    wuListContainers.forEach(el => el.style.height = '42px');
    wuOpen = '';
  }
});

// Program buttons to update the iframe src value so it will display a new warm up
document.querySelectorAll('.wu button').forEach(btn => {
  btn.addEventListener('click', e => {
    wuFrame.setAttribute('src', btn.getAttribute('data-src'));
  });
});
