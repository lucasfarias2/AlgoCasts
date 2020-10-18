// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  const arr = n.toString().split('');
  let str = '';

  arr.forEach(number => {
    if (number !== 0) {
      str = `${number}${str}`;
    }
  })

  if (sign < 0) {
    str = parseInt(`-${str}`);
  } else {
    str = parseInt(str);
  }

  return str;
}

module.exports = reverseInt;
