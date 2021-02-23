/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Helper Functions - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

const createEl = (el, attr = {}, text = '') => {
  const myEl = document.createElement(el);

  for (let prop in attr) {
    myEl[prop] = attr[prop];
  }

  myEl.textContent = text;

  return myEl;
}

const appendEl = (parent, child) => parent.appendChild(child);

const myParaEl = createEl('P', {id: "myParagraph", className: "myParagraph"}, "Hello World!");
const myAncEl = createEl('A', {id: "myAnchor", className: "myAnchor", href: "#"}, "Click here!");
const myImgEL = createEl('IMG', {id: "myImg", className: "myImg", src: "https://via.placeholder.com/100", alt: "placeholder image"});

  {/* 
    <div id="list-1-div-1" class="item">
    
    <h3>This Text</h3>

    <img src="https://via.placeholder.com/100" alt="" id="" class="">

    <p id="list-1-para-1" class="">Shabby chic poke man bun, VHS pour-over kinfolk chicharrones YOLO gluten-free. Semiotics flannel crucifix banjo direct trade.</p>

    </div> 
  */}

console.log(myParaEl);
console.log(myAncEl);
console.log(myImgEL);


/* Click listener for test button */
document.querySelector('#btn').addEventListener('click', e => {

  // CALL YOUR HELPER FUNCTIONS HERE!!!

  appendEl(myParaEl);
  appendEl(myAncEl);
  appendEl(myImgEL);

  // Helpful log statement to test function - You can comment out this if you like
  console.log('Test button is functional!');
});