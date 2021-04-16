

var randomNumber1 = Math.floor(Math.random() * 6 + 1); // random number from 1 to 6;
var randomDiceImage = "dice" + randomNumber1 + ".png"; // (concatenation) "dice1.png" to "dice6.png";
var randomDiceSource = "images/" + randomDiceImage; //(concatenation) "images/dice1.png" to "images/dice6.png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource);



var randomNumber2 = Math.floor(Math.random() * 6 + 1); // random number from 1 to 6;
var randomDiceImage02 = "dice" + randomNumber1 + ".png"; // (concatenation) "dice1.png" to "dice6.png";
var randomDiceSource02 = "images/" + randomDiceImage; //(concatenation) "images/dice1.png" to "images/dice6.png";

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceSource02);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML="It's a Draw!";
}
