// Remove Array Elements using "Slice" instead of "splice"

function nonMutatingSplice(cities) {
  // return cities.splice(3);
  return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
