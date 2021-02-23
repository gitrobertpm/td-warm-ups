/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Fun DOM Manipulation - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/* Variables to target the `body` element */
const body = document.querySelector('body');


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

const headingHtml = `<h1 id='main-heading'>Fun DOM Manipulation</h1>`;
const boatContHtml = `<div id="boat-container" class="boat-container"></div>`;
const boatHtml = `<img src="img/boat.png" alt="Tugboat" id="boat-img">`;
const mikeHtml = `<img src="img/mike.png" alt="Mike The Frog" id="mike" class="mike"></img>`;

const headingEl = document.createRange().createContextualFragment(headingHtml).querySelector(`h1`);
const boatContEl = document.createRange().createContextualFragment(boatContHtml).querySelector(`#boat-container`);
const boatEl = document.createRange().createContextualFragment(boatHtml).querySelector(`#boat-img`);
const mikeEl = document.createRange().createContextualFragment(mikeHtml).querySelector(`#mike`);

body.appendChild(headingEl);
body.appendChild(boatContEl);
boatContEl.appendChild(boatEl);
body.appendChild(mikeEl);