

var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {

  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
})

$(".btn").click(function() {  //user-side
  var userChosenColour = $(this).attr("id");  //stored the "id" inside the click function;
  userClickedPattern.push(userChosenColour); //push "blue/green/red/yellow" to the "userClickedPattern" array;

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);  //length-1 means the last index of the []array of "userClickedPattern";
})

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {  //"userClickedPattern === gamePattern" means the user answer all correct;
        setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {

    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout (function() {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").html("<p>Game Over😥<br>Press Any Key to Restart</p>");

    startOver();
  }

}

function nextSequence() {  //computer-side

  userClickedPattern = []; //once the "nextSequence" function has been triggered, set the "userClickedPattern" array to empty;

  level ++;
  $("#level-title").text("Level "+ level);

  var randomNumber = Math.floor(Math.random() * 4); //0,1,2,3
  var randomChosenColour = buttonColors[randomNumber]; //buttonColors[0],buttonColors[2],buttonColors[3].buttonColors[4];
  gamePattern.push(randomChosenColour); //random-gamePattern ["red", "blue", "green", "yellow"];

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // "#" + randomChosenColour： id="green"/id="red"/id="blue"/id="yellow"

  playSound(randomChosenColour);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function playSound(name) {

  var audio = new Audio("sounds/"+name+".mp3"); //concatenate the button with specific sounds;
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass(".pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass(".pressed")
  }, 100);
}




// pop-up window
