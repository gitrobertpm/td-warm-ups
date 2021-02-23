/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Checkboxes - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

const checkboxes = document.querySelectorAll('.super-stats input');

document.querySelector('.super-stats').addEventListener('change', (e) => {
  const clicked = e.target;
  const clickedType = clicked.getAttribute('data-type');

  for (let i = 0; i < checkboxes.length; i++) {
    const checkboxType = checkboxes[i].getAttribute('data-type');
    if (clickedType === checkboxType && clicked !== checkboxes[i]) {
      clicked.checked ? checkboxes[i].disabled = true : checkboxes[i].disabled = false;
    }
  }

  [...checkboxes].forEach(cb => (cb.disabled) ? cb.parentElement.classList.add('disabled') : cb.parentElement.classList.remove('disabled'));
});


[...checkboxes].forEach((cb) => {
  cb.addEventListener('focus', e => cb.parentElement.classList.add('focus'));

  cb.addEventListener('blur', e => {
    const active = document.querySelector('.focus');
    if (active) active.classList.remove('focus');
  })
});