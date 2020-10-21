// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const arr = [];
  
  let currentArr = [];

  for (let i = 0; i < array.length; i++) {
    if (currentArr.length + 1 === size) {
      currentArr.push(array[i]);
      arr.push(currentArr);
      currentArr = [];
    } else {
      currentArr.push(array[i]);

      if (array.length === i + 1) {
        arr.push(currentArr);
      }
    }
  }

  return arr;
}

module.exports = chunk;
