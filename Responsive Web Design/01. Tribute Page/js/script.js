var setTheme = localStorage.getItem("theme");
function swapStyle(e) {
  (document.getElementById("mystylesheet").href = e),
    localStorage.setItem("theme", e);
}
swapStyle(null == setTheme ? "css/light.css" : setTheme);
