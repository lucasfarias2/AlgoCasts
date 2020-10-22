// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const strA = cleanString(stringA);
  const strB = cleanString(stringB);
  const charMapA = buildCharMap(strA);
  const charMapB = buildCharMap(strB);

  if (strA.length !== strB.length) return false;

  let nonExtra = true;

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      nonExtra = false;
    }
  }

  return nonExtra;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str) {
    charMap[char] = !charMap[char] ? 1 : charMap[char]++;
  }

  return charMap;
}

function cleanString(str) {
  return str.replace(/[^\w]/gi, "").toLowerCase();
}

module.exports = anagrams;
