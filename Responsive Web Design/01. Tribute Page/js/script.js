// Saving User's choice of Theme in Local storage

var setTheme = localStorage.getItem("theme");

if (setTheme == null) {
  swapStyle("css/light.css");
} else {
  swapStyle(setTheme);
}

function swapStyle(sheet) {
  document.getElementById("mystylesheet").href = sheet;
  localStorage.setItem("theme", sheet);
}
