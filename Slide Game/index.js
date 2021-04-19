

// step 1 : use for loop to create multiple sliders <div>;

for (var i=25; i>0; i--) {
  let slider = document.createElement("div") // create a <div> element;
  slider.setAttribute("class", "slider animate")  //give the <div> element two classes: class="slider" & class="animate";
  slider.setAttribute("id", "slider" + i);  //give the <div> element a id with its number;
  document.getElementById("game").append(slider);  // put the <div> element inside the #game element;
}


// step 2 : use a function to make the slider stop.



function stopSliding(slider) {

  var slideWidth = 400;

  var sliderCurrent = document.getElementById("slider".concat(slider)) ;

  var sliderAbove = document.getElementById("slider".concat(slider + 1));

  if (slider == 1) {
    var sliderBelow = sliderCurrent;
  }
  else {
    var sliderBelow = document.getElementById("slider".concat(slider - 1));
  }

  var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left"); // value need perenthesis;

  sliderCurrent.classList.remove("animate"); //remove the animation, and make the slider'left value go back to 0;

  sliderCurrent.style.left = left;

  var width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue("width"));  // change a string to a number;
  var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"));

  left = parseInt(left);  // turn the string into number and redefine the "left" variable;

  var difference = left - leftBelow;
  var absDifference = Math.abs(difference)
  // whatever the number is negative or not, will change that number into an integer; "abs": absolute value;

  if (difference > width || difference < - width) {
    var score = "Score: ".concat(slider - 1);
    alert(score);
    location.reload();  // reload the website;
  }

  if (difference < 0) {
    left += absDifference;
  }
  else {
    sliderCurrent.style.left = left.toString().concat("px");
  }

  var offset = (width - absDifference).toString().concat("px");

  sliderCurrent.style.width = offset;
  sliderAbove.style.width = offset;

  sliderAbove.style.visibility = "visible";

  var onclick = "stopSliding("+ (slider + 1) +")";  // start from "stopSliding(2)";

  document.getElementById("btn").setAttribute("onclick", onclick);

  // slideWidth = slideWidth + absDifference;
  // document.documentElement.style.setProperty( "--width", slideWidth);
}
