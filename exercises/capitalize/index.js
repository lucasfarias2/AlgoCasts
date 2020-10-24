// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const regex = new RegExp(/^\s$/);
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let charToConcatenate = str[i];

    if (regex.test(str[i - 1]) || i === 0) {
      charToConcatenate = charToConcatenate.toUpperCase();
    }

    newStr = newStr + charToConcatenate;
  }

  return newStr;
}

module.exports = capitalize;
