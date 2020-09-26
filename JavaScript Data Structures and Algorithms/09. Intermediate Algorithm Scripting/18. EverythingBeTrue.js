// Everything be true :

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre]);
}
