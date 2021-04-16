

var name1 = document.getElementById("name1");

var name2 = document.getElementById("name2");

var inputs = document.querySelector("input");

var bigbutton = document.querySelector("#bigbutton");

var bigbutton2 = document.querySelector("#bigbutton2");

var display = document.querySelector("#result");

var result2 = document.querySelector("#result2");

var bodytext = document.getElementById("paragraph3");

var comment = document.getElementById("comment");

var x = randomRomance();

bigbutton2.addEventListener("click", function() {
  refreshPage();
})

function refreshPage(){
    window.location.reload();
}

bigbutton.addEventListener("click", function() {

  if (name1.value === "") {
    alert("Please enter your name.");
  } else if (name1.value.length <= 2) {
    alert("Min name-length is 3.");
  } else if (!isNaN(name1.value)) {
    alert("Numbers are not allowed!");
  } else if (name2.value === "") {
    alert("Please enter your love's name.");
  } else if (name2.name.length <= 2) {
    alert("Min name-length is 3.");
  } else if (!isNaN(name2.value)) {
    alert("Numbers are not allowed!");
  } else {

    comment.style.display = "block";

    display.textContent = x + "%";
    result2.textContent = " " + relationshipString(x);
    bodytext.textContent = relationshipParagraph(x);

    bigbutton.addEventListener("click", function() {
      refreshPage();
    })
  }
})


function randomRomance() {
  return Math.floor(Math.random() * 100 + 1); // 1~100
}

function relationshipString(x) {
  if (x < 10) {
    return " It looks pretty hopeless 🥀"
  } else if (x < 20) {
    return " Don't get your hopes up 🥀"
  } else if (x < 30) {
    return " Things don't look good 🥀"
  } else if (x < 40) {
    return " It could be worse 🥀"
  } else if (x < 50) {
    return "There is no harm in trying 😀"
  } else if (x < 60) {
    return "Things are getting warmer 😘"
  } else if (x < 70) {
    return " Good odds 😘"
  } else if (x < 80) {
    return "Go ahead and do it 😘"
  } else if (x < 90) {
    return " Oh man. I can feel the heat here ❤️‍🔥"
  } else {
    return "He/She is the one. Go for it!!! ❤️‍🔥"
  }
}

function relationshipParagraph(x) {
  if (x < 10) {
    return " Sometimes my friend, it is better to not try, to not waste away ones chances at the innopportune. The world might tell you to chase your heart but, as a love calculator, my advice is this: Don't bother"
  } else if (x < 20) {
    return " Things are a bit better than they could be - chances are warmer, but still not likely. Yet there are so many occurences in the world that defy the mind and beleagurer the senses in their improbability - Donald Trump winning the presidential elections can be considered an easy example. "
  } else if (x < 30) {
    return " Things don't look that good in my eyes. Perhaps I need glasses. -it will probably not work out as well as you might have liked. Try it, see what happens. She will probably ghost you, leading you to feel unconfident and unsure of yourself and your abilities, leading you to feel shame and distancing yourself from friends and family alike, inevitably leading to a bitter suicide."
  } else if (x < 40) {
    return " In the Dark Knight Trilogy, there is a part where Bane says something in his stupid voice. Now compared to the Joker from the previous movie, there is a statistically (I am a calculator - trust me, I know the math) 40% chance that whatever Bane says sounds cool. That is the chance you have of making something work with the person in question."
  } else if (x < 50) {
    return "Listen things are starting to heat up - the winter of discontent has sharpened the leaves of our anguish and shook loose the dreary cobwebs our apathy. Sorry I've just been browsing some angsty kids Tumblr posts - that is a rabbit hole you don't want to go down. Maybe it will work, probably it won't. Whatever. Life sucks and then you die."
  } else if (x < 60) {
    return "As even as a coin toss, although technically coin tosses tend to have a very slight bias towards landing heads. Listen let me teach you some math right now - find two girls (or guys) with whom you have a 50% chance of having a relationship with and ask them out together. Boom - 100% percent success rate - easy math easy life"
  } else if (x < 70) {
    return " Okay things are definitely heating up around here - my robot sensors detect some of what you mammals call, sexual chemistry (not sure what kind of reactants those involve) and, mayhaps love may not develop but, if you are lucky, as the pedants say, you might get some sweet sweet Friends With Benefits action."
  } else if (x < 80) {
    return "Ahh I feel it - the inimitable vibes of romance, floating through the air on the ethernet of love. Go for it - tell the girl how you feel, mate with her, go to Ikea together. Tis the quintessence of the human life, which we mere robots can only gawk endlessly at from afar."
  } else if (x < 90) {
    return " Ahh wise sir, truly the gods have blessed this union - Alan Turing would be proud. Proceed forward with the following algorithm  - go to her, tell her your feelings towards her. Ask for Confirmation. Await Confirmation Response - this is important. Then, with all of the sincerity and conviction in your human heart, tell her that you would like to dock your hardware into her sofware. Proceed to do so."
  } else {
    return "Love has no language - truly you were aware of that. My binary heart cannot compute the logic behind the human emotional - you are master at this, far better than I. A mere machine cannot decipher the enigmas of the human heart - I can but only rest and stand sentinel. Go forth young traveller. "
  }
}
