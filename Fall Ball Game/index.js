
var character = document.getElementById("character");
var game = document.getElementById("game");

var interval;

var both = 0;

var counter = 0; // create a 计数器；

var currentBlocks = []; // create an array;




// step 1: set the ball's moving rules;

function moveLeft() {

  var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    // getComputedStyle(var = character): get "character"'s css style;
    // getPropertyValue("left"): fron the "character"'s css style to get the "left" property.
    // parseIn: turn the css property style(a "string") into the number datatype.

  if (left > 0) {
    character.style.left = left - 2 + "px";
      // move 2px to the left;
  }
}

function moveRight() {

  var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));

  if (left < 380) {  // left<380: full width(400px) - ball's circumference(20px)
    character.style.left = left + 2 + "px";
    // move 2px to the right;
  }
}




// step 2: how to make the ball move; (use "addEventListener" and the "setInterval() method")

document.addEventListener("keydown", event => {

  if (both == 0) {
    both ++;  // both will cumulate.
    if (event.key === "ArrowLeft") {
      interval = setInterval(moveLeft, 1);
    }
    if (event.key === "ArrowRight") {
      interval = setInterval(moveRight, 1);
    }
  }
})

document.addEventListener("keyup", event => {   // event => means: function(event) {...};
  clearInterval(interval);
  both=0;
})




// step 3: create the blocks and random holes, as well as make them move;

var blocks = setInterval(function() {

  var blockLast = document.getElementById("block" + (counter - 1));
  var holeLast = document.getElementById("hole" + (counter - 1));

  if (counter > 0) {
    var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top")); // get last time the block's top value;
    var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));  // get last time the hole's top value;
  }
  // "if" statement is for in case when the counter=0, it will still go and parse the "top" value, which will give us a negative number;

  if (blockLastTop < 400 || counter === 0) {  // "||" means "or"

    var block = document.createElement("div");
    var hole = document.createElement("div");

    block.setAttribute("class", "block"); // create a html attribute: class="block";
    hole.setAttribute("class", "hole");  // create a html attribute: class="hole";

    block.setAttribute("id", "block" + counter);  // create a html attribute: id="block"; "count" for count how many divs would be create;
    hole.setAttribute("id", "hole" + counter);  // create a html attribute: id="hole"; "count" for count how many divs would be create;

    game.appendChild(block);
    game.appendChild(hole);
    // put the {<div id="block" class="block"></div>} & {<div id="hole" class="hole"></div>} both inside the #game div.

    var random = Math.floor(Math.random() * 360); // o ~ 356;
    hole.style.left = random + "px"; // give the hole a css style with random value: .hole { left: 0~356 px;};

    block.style.top = blockLastTop + 80 + "px"; // add 100px to the new "block";
    hole.style.top = holeLastTop + 80 + "px"; // add 100px to the new "hole";

    currentBlocks.push(counter);

    counter ++; // count every interval function; we can know how many <div id="block"> and <div id="hole"> has been created;
  }




   // step 4: add some limitations, when the ball touch the holes, it will drop down;


  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));  // 400px;
  var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));  // 190px;

  var drop = 0;

  if (characterTop <= 0 || characterTop >= 480) {
    alert("Game Over! Your score is " + (counter - 9)); // why is (counter-9): 2 for loop (8) + origin block （1）;
    clearInterval(blocks);
    location.reload();  // refresh the page;
  }


// for loop make the blocks move;

  for (var i = 0; i < currentBlocks.length; i++ ) {  // length = 4;

    let current = currentBlocks[i]; // current's value: 1, 2, 3， 4；

    let iblock = document.getElementById("block" + current); // current value = counter value;
    let ihole = document.getElementById("hole" + current);  // current value = counter value;

    let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top")); // parseFloat will keep the decimal number;
    let iholeLeft = parseInt(window.getComputedStyle(ihole).getPropertyValue("left"));

    iblock.style.top = iblockTop - 0.5 + "px";
    ihole.style.top = iblockTop - 0.5 + "px";

    if (iblockTop < -20) {
      currentBlocks.shift();  // take off the first (the top) one;
      iblock.remove();
      ihole.remove();
    }

    if (iblockTop - 20 < characterTop && iblockTop > characterTop) {
      drop++;
      if (iholeLeft <= characterLeft && iholeLeft + 20 > characterLeft) {
        drop = 0;
      }
    }
    if (drop == 0) {   // create the drop;

      if (characterTop < 480) {
        character.style.top = characterTop + 2 + "px";
      }  // 500px(#game's height) - 20px(character's height);

    }
    else {
      character.style.top = characterTop - 0.5 + "px";
    }
  }
}, 1);
