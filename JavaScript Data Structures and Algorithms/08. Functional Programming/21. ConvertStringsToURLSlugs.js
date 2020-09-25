// Apply Functoinal Programming to convert Strings to URL slugs :

// Only change code below this line
function urlSlug(title) {
  let slug = title.toLowerCase().trim().split(/\s+/).join("-");
  return slug;
}
// Only change code above this line

console.log(urlSlug("Winter Is Coming"));
