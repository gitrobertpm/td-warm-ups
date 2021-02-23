/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Selects and Options - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

const shirtImageElements = document.querySelectorAll('.shirt-image');
const shirtSelectElement = document.querySelector('#shirt-select-element');
const shirtOptionElements = document.querySelectorAll('#shirt-select-element option');

console.log(shirtSelectElement);  
console.log(shirtOptionElements[1]);


// shirtOptionElements[1].selected = true; 
// shirtOptionElements[1].selected = false; 
// shirtOptionElements[2].selected = true; 

shirtSelectElement.addEventListener('change', e => {
  
  const shirts = document.querySelectorAll('.shirt-image');

  shirts.forEach(img => {

    img.alt === e.target.value ?        
    img.classList.add('chosen') :
    img.classList.remove('chosen');
    
  });
});


