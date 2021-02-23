/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Anagrams - Script
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 * Solution by: Zack Mowrer
 */

"use strict";

/**
 * This regex matches any positive number of characters that are not whitespace.
 */
const nonWhitespaceRegex = /\S+/g;

/**
 * Courtesy of https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex.
 *
 * Escapes a string for use in a regex.
 * @param {string} str The string to escape.
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/**
 * Returns the given string without whitespace (space, tab, newline, etc.) characters.
 * @param {string} str The string to remove whitespace from.
 */
const removeWhitespace = (str) => {
  // Find all non-whitespace matches within string
  const match = str.match(nonWhitespaceRegex);

  // If no matches were found, return an empty string
  if (!match) return "";

  // Otherwise, join match results together and return resulting string
  return match.join("");
};

/**
 * Returns all the distinct characters in a string, accounting for case.
 * @param {string} str The string to return distinct characters for.
 */
const getDistinctChars = (str) => {
  // Split string into its characters
  const chars = str.split("");

  // Create set of characters to remove duplicates
  const charSet = new Set(chars);

  // Return set as array
  return [...charSet];
};

/**
 * Determines whether two strings are anagrams, ignoring case.
 * @param {string} str1 The first string.
 * @param {string} str2 The second string.
 */
const anagramTest = (str1, str2) => {
  // First, remove spaces from both strings
  const string1WithoutSpaces = removeWhitespace(str1);
  const string2WithoutSpaces = removeWhitespace(str2);

  // Then, verify that both strings are of the same length
  if (string1WithoutSpaces.length !== string2WithoutSpaces.length) return false;

  // Next, normalize casing of both strings
  const normalizedString1 = string1WithoutSpaces.toLowerCase();
  const normalizedString2 = string2WithoutSpaces.toLowerCase();

  // Afterwards, get all distinct characters in first string
  const distinctChars = getDistinctChars(normalizedString1);

  // The two strings are anagrams if the following callback returns true for each character:
  return distinctChars.every((char) => {
    // Escape character for use in regex
    const escapedChar = escapeRegExp(char);

    // Construct regex from character
    const charRegex = new RegExp(escapedChar, "g");

    // Match both strings against regex
    const match1 = normalizedString1.match(charRegex);
    const match2 = normalizedString2.match(charRegex);

    // Ensure neither match is empty and that both returned the same number of results
    return match1 && match2 && match1.length === match2.length;
  });
};

/* btn listener */
document.querySelector("#btn").addEventListener("click", () => {
  // Test the anagramTest function
  displayResults(anagramTest);
});
