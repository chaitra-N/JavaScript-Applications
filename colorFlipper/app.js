const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomColor = getRandonNumber();
  document.body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
});

function getRandonNumber() {
  //Math.floor is used to round down to the closest integer.
  return Math.floor(Math.random() * colors.length);
}
