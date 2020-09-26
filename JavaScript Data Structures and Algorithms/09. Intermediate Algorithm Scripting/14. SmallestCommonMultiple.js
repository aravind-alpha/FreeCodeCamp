// Find Smallest common multiple :

function smallestCommons(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let multiple = max;

  for (let i = max; i >= min; i--) {
    if (multiple % i !== 0) {
      multiple += max;
      i = max;
    }
  }
  return multiple;
}

smallestCommons([1, 5]);
