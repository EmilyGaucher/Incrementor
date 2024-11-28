// INCREMENTING VARIABLES & RANDOM VALUES
var counter = 0;
var displayEl = document.getElementById("display");

// Minus 50 Button
var minus50Btn = document.getElementById("minus50");
minus50Btn.addEventListener("click", minus50fcn);

function minus50fcn() {
  counter = counter - 50;

  displayEl.innerHTML = counter;
}
// Minus 10 Button
var minus10Btn = document.getElementById("minus10");
minus10Btn.addEventListener("click", minus10fcn);

function minus10fcn() {
  counter = counter - 10;

  displayEl.innerHTML = counter;
}

// minus 1 Button
var minus1Btn = document.getElementById("minus1");
minus1Btn.addEventListener("click", minus1fcn);

function minus1fcn() {
  counter = counter - 1;

  displayEl.innerHTML = counter;
}

// Plus 1 Button
var plus1Btn = document.getElementById("plus1");
plus1Btn.addEventListener("click", plus1fcn);

function plus1fcn() {
  counter = counter + 1;

  displayEl.innerHTML = counter;
}

// Plus 10 Button
var plus10Btn = document.getElementById("plus10");
plus10Btn.addEventListener("click", plus10fcn);

function plus10fcn() {
  counter = counter + 10;

  displayEl.innerHTML = counter;
}

// Plus 50 Button
var plus50Btn = document.getElementById("plus50");
plus50Btn.addEventListener("click", plus50fcn);

function plus50fcn() {
  counter = counter + 50;

  displayEl.innerHTML = counter;
}

// Incrementing Strings
var stringInEl = document.getElementById("strIn");
stringInEl.addEventListener("change", updateStory);
var story = "once upon a time, ";
var storyEl = document.getElementById("strOut");

// Update Story
function updateStory() {
  var word = stringInEl.value;

  story += word + " ";
  stringInEl.value = " ";
  storyEl.innerHTML = story;
}

// Random Button
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");

// Random 0 - 1
roundBtn1.addEventListener("click", round1);

function round1() {
  let rand = Math.random();
  rand = rand.toFixed(3);
  document.getElementById("rand1-out").innerHTML = rand;
}

// random 10 - 100
roundBtn2.addEventListener("click", round2);

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

// random -5 - 5
// Random # from x to y:
// Math.random() * (y - x) + x
// E.g. If i want a random number from 1-3:
// var rand = Math.random() * (3 - 1) + 1
// rand = Math.round(rand);

roundBtn3.addEventListener("click", round3);

function round3() {
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

//random

roundBtn4.addEventListener("click", round4);

function round4() {
  let in1 = document.getElementById("rand-in1");
  let in2 = document.getElementById("rand-in2");

  let round = Math.random() * (in2 - in1) + in1;
  round = Math.round(round);

  document.getElementById("rand4-out").innerHTML = round;
}
