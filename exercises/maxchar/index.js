// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let times = {};

  for (let char of str) {
    if (times[char] === undefined) {
      times[char] = 1;
    } else {
      times[char]++;
    }
  }

  let maxChar = "";

  for (let char in times) {
    if (maxChar < times[char]) {
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
