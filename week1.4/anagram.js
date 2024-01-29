/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.sort == str2.sort) {
    return true;
  }
  else {
    return false;
  }
}


let ans = isAnagram('spar', 'rasp');
console.log(ans);
module.exports = isAnagram;


// sorting a string in js

console.log('spar'.split('').sort().join(''));
console.log('spar'.sort()); // this will not work as sort is a method of array not string


// Checking new email address for commits
