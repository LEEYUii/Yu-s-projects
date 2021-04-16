
var btn = document.getElementById("change");
var text = document.getElementById("color");

function randomColor() {

  newColor =  (Math.random() * 0xFFFFFF << 0).toString(16);

  if (newColor.length < 6) {
    return newColor = "#0" + newColor;
  }
  else {
    return newColor = "#" + newColor;
  }
}

btn.addEventListener("click", function() {

  randomColor();

  document.body.style.background = newColor;
  btn.style.color = newColor;
  text.innerText = newColor;
})
