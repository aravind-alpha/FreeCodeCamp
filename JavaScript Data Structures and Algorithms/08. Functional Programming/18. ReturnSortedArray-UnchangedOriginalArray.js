// Return a Sorted Array without changing the original array

// = Using "slice" =
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArr = arr.slice();
  return newArr.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}

// = Using "concat" method =
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a, b) => a - b);
}
nonMutatingSort(globalArray);
