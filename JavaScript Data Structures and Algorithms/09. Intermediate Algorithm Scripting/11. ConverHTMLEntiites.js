// Convert HTML Entities

/* 
* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their 
  corresponding HTML entities. */

function convertHTML(str) {
  let entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((entity) => entities[entity] || entity)
    .join("");
}

convertHTML("Dolce & Gabbana");
