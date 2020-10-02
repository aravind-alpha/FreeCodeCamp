function darkModeToggle() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function swapStyle(sheet) {
  document.getElementById("mystylesheet").href = sheet;
}
