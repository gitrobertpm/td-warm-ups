/* Script for demoing my project warm ups */

"use strict";

const infoBtn = document.querySelector('#info-btn');
const introBox = document.querySelector('.intro-box');
const menuBtn = document.querySelector('#menu-btn');
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
      <h2>${wuSubs[i]}</h2>
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
let infoOpen = false;
let menuOpen = false;

// Program drop down menus to open and close accordingly
wuListContainers.forEach((div, i) => {
  div.addEventListener('click', e => {
    wuListContainers.forEach(el => {
      el.style.width = '135px';
      el.style.overflow = 'hidden';
      wuContainer.style.overflow = 'hidden';
    });
    clicked = i;

    if (clicked !== wuOpen) {
      div.style.width = '100%';
      div.style.overflow = 'visible';
      wuContainer.style.overflow = 'visible';
      wuOpen = i;
    } else {
      wuOpen = '';
    }
  });
});

// More of above
addEventListener('click', e => { 
  if ([...e.target.parentElement.classList].includes('wu') || 
      [...e.target.classList].includes('wu')) {
        wuListContainers.forEach(el => {
          el.style.width = '135px';
          el.style.overflow = 'hidden';
        });
        wuOpen = '';

        menuOpen = !menuOpen;
        wuContainer.style.overflow = 'hidden';
        wuContainer.style.width = '70px';
      
  }
});

// Program buttons to update the iframe src value so it will display a new warm up
document.querySelectorAll('.wu button').forEach(btn => {
  btn.addEventListener('click', e => {
    wuFrame.setAttribute('src', btn.getAttribute('data-src'));
  });
});

infoBtn.addEventListener('click', (e) => {
  infoOpen = !infoOpen;
  if (infoOpen) {
    introBox.style.overflow = 'auto';
    return introBox.style.height = '355px';
  }
  introBox.style.overflow = 'hidden';
  return introBox.style.height = '0';
});

menuBtn.addEventListener('click', (e) => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    wuContainer.style.overflow = 'auto';
    return wuContainer.style.width = '100%';
  }
  wuContainer.style.overflow = 'hidden';
  return wuContainer.style.width = '70px';
});