const button = document.getElementById("colorButton");
const colors = ["#f8b400", "#009688", "#3f51b5", "#e91e63", "#4caf50", "#ff5722"];
let index = 0;

button.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
});
