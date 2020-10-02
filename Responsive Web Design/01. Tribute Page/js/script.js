// Light | Dark mode Saving in Local storage

var setTheme = localStorage.getItem("theme");

if (setTheme == null) {
  swapStyle("light.css");
} else {
  swapStyle(setTheme);
}

function swapStyle(sheet) {
  document.getElementById("mystylesheet").href = sheet;
  localStorage.setItem("theme", sheet);
}
