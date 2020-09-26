// Sorted Union

/* 
* Function that takes two or more arrays and returns a new array of unique values in the order 
  of the original provided arrays. */

function uniteUnique(...arrays) {
  let newArr = [].concat(...arrays);
  return [...new Set(newArr)];
}
