// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNumbers = function(numbersArray){
  var numberPlusNumber = [];
  for (var i = 0; i < numbersArray.length; i++){
    if(numbersArray[i] + numbersArray[i]){
      numbersArray[i].push(numberPlusNumber);
      }
    }
};
return numberPlusNumber;

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10

var arrayOfNumbers = [20, 30, 1, 2, 3];
function numbersGreaterThanTen (numsArray) {
  var numbersGreaterThanTen = [];

  for (var i = 0; i < numsArray.length; i++){
    var numbersToCheck = numsArray[i];
    //if the number is greater than ten
    if(numbersToCheck > 10){
    //then add it to the new array
    numbersGreaterThanTen.push(numbersToCheck);
      }
    }
  return numbersGreaterThanTen;
}

numbersGreaterThanTen(arrayOfNumbers);
};

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var arrayOfNumbers = [11,29,11,13,4];
var allGreaterThanTen = function(numbersArray){
  for(var i = 0; i < numbersArray.length; i++){
    if(numbersArray[i] > 10){
      return true;
    }
   return false;
  }
};
allGreaterThanTen(arrayOfNumbers);

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words){
  var fiveOrMoreLetters = [];
  for(var i =0; i < words.length; i++)
    if(words.length >= 5){
      words.push(fiveOrMoreLetters);
    }
};

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  for(var i = 0; i < words.length; i++){
     str.toLowerCase(words);
     if(words[i].slice(0,1) === 'a')
    return true;
  }
  return flase;
};

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words){
  for(var i = 0; i < words.length; i++){
    if(words[i].slice(0,1) === 'b' || words[i].slice(0,1) === 'B')
      return true;
  }
  return false;
};

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n){
  if (n < 0){
    return null;
  }
  if(var i = 0; i < word.length; i++){
    //if(words[i].slice(0, words.length - 1) === 'a')
    if (words.charAt([i]) === 'A' || words.charAt([i]) === 'a' ||
        words.charAt([i]) === 'E' || words.charAt([i]) === 'e' ||
        words.charAt([i]) === 'I' || words.charAt([i]) === 'i' ||
        words.charAt([i]) === 'O' || words.charAt([i]) === 'o' ||
        words.charAt([i]) === 'U' || words.charAt([i]) === 'u')
      return true;
  }
  return false;
};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words){
  // Your Code Here
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  // Your Code Here
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  // Your Code Here
};

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
  // Your Code Here
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words){
  // Your Code Here
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
