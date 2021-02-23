/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Form Input Validation - Solution
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";


/* Variable to store form inputs - You'll use these in the functions below' */
const form = document.querySelector("form");
const nameElement = document.querySelector("#name");
const email = document.querySelector("#email");
const languages = document.querySelector('#languages');
const languagesBox = document.querySelector('#languages-box');
const languageTotalElement = document.querySelector('#language-total');
let languageTotal = 0;

// Don't touch ↓↓↓ - Helper function for updating the total number of languages selected
document.querySelector('#languages').addEventListener('change', e => {
  (e.target.checked) ? languageTotal++ : languageTotal--;
  languageTotalElement.innerHTML = `Total: ${languageTotal}`;
});


// YOUR CODE GOES HERE!!! Do the steps in the functions below to complete this challenge

// Accessibility related form input error validation 
const validationPass = el => {
  el.parentElement.classList.add('valid');
  el.parentElement.classList.remove('not-valid');
  el.parentElement.lastElementChild.style.display= 'none';
}

const validationFail = el => {
  el.parentElement.classList.remove('valid');
  el.parentElement.classList.add('not-valid');
  el.parentElement.lastElementChild.style.display = 'block';
}



/* Helper function to validate name input */
const nameValidator = () => {
  const nameValue = nameElement.value;
  console.log("Name value is: ", `"${nameValue}"`);

  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
  console.log(`Name validation test on "${nameValue}" evaluates to ${nameIsValid}`);

  (nameIsValid) ? 
  validationPass(nameElement) : 
  validationFail(nameElement);

  return nameIsValid;
}


/* Helper function to validate email input */
const emailValidator = () => {
  const emailValue = email.value;
  console.log("Email value is: ", `"${emailValue}"`);

  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  console.log(`Email validation test on "${emailValue}" evaluates to ${emailIsValid}`);

  (emailIsValid) ? 
  validationPass(email) : 
  validationFail(email);

  return emailIsValid;
}


/* Helper function to validate language section */
const languageValidator = () => {
  const languageSectionIsValid = languageTotal > 0;
  console.log(`Language section validation test evaluates to ${languageSectionIsValid}`);

  (languageSectionIsValid) ? 
  validationPass(languagesBox) : 
  validationFail(languagesBox);

  return languageSectionIsValid;
}


/* Real time validation */
// To add real time validation, use the .addEventListener() method on the form elements/sections
// Use events like `keyup` and `change`
// As the callback, use the validation functions above, but remember, 
// Don't use parens when passing a reference to a function as a callback
// Something like: `name.addEventListener('keyup', nameValidator);`

nameElement.addEventListener('keyup', nameValidator);
email.addEventListener('keyup', emailValidator);
languages.addEventListener('change', languageValidator);


/* Submit listener on the form element */
form.addEventListener('submit', e => {

  // e.preventDefault();

  if (!nameValidator()) {
    console.log('Invalid name prevented submission');
    e.preventDefault();
  }

  if (!emailValidator()) {
    console.log('Invalid email prevented submission');
    e.preventDefault();
  }

  if (!languageValidator()) {
    console.log('Invalid language total prevented submission');
    e.preventDefault();
  }

  // Submit handler test log - Feel free to delete this or comment it out
  console.log('Submit handler is functional!');
});


// Don't touch ↓↓↓ - Handles tab index for checkbox parent labels
[...document.querySelectorAll('#languages inputs')].forEach(cb => {
  cb.addEventListener('focus', e => cb.parentElement.classList.add('focus'));

  cb.addEventListener('blur', e => {
    const active = document.querySelector('.focus');
    if (active) active.classList.remove('focus');
  })
});