// Using spread operators
function frankenSplice(arr1, arr2, n) {
  let duplicateArray = arr2.slice(arr1);
  duplicateArray.splice(n, 0, ...arr1);
  return duplicateArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Using For loop :
function frankenSplice(arr1, arr2, n) {
  let duplicateArray = arr2.slice(arr1);
  for (let i = 0; i < arr1.length; i++) {
    duplicateArray.splice(n, 0, arr1[i]);
    n++;
  }
  return duplicateArray;
}
