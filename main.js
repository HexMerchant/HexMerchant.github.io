var stick = 0;
var rock = 0;
var wood = 0;

var Timer = window.setInterval(function(){tick()}, 1000);

var current = 0;
var person;
var story = ["-You wake up lying on the ground. You feel a large deposit \
of energy inside you.", "-You look around only to see a thicket of trees.", "-You begin to walk around looking for anything that may help."];

var stamina = 100;

var crafting1Name = "Craft Wood";
var crafting1Cost = 10;

function regenStamina() {
	if (stamina < 100) {
	tick();
	document.getElementById("stamina").innerHTML = stamina;
	}
}

function exploreFunction() {
	if (current == 0) {
		person = prompt("What is your name", "");
	}
	if (person != null && current < story.length) {
		document.getElementById("story1").innerHTML = story[current];
	current += 1;
  }
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function wildernessForStamina(){
	var num = getRandomInt(1, 10);
	if (stamina > 1 && num <= 9) {
	stamina = stamina - 2;
	stick = stick + 1;
	rock = rock + 1;
	document.getElementById("stamina").innerHTML = stamina;
	document.getElementById("stick").innerHTML = stick;
	document.getElementById("rock").innerHTML = rock;
	}
	else if (stamina > 1 && num <=10) {
	stamina = stamina - 2;
	stick = stick + 1;
	document.getElementById("stamina").innerHTML = stamina;
	document.getElementById("stick").innerHTML = stick;
	}
}

function craftWood() {
	if (stick >= crafting1Cost) {
	stick = stick - crafting1Cost;
	wood = wood + 1;
	document.getElementById("stick").innerHTML = stick;
	document.getElementById("crafting1Cost").innerHTML = crafting1Cost;
	document.getElementById("wood").innerHTML = wood;
	}
}

function tick() {
 if (stamina < 100)
	stamina = stamina + 1;
 document.getElementById("stamina").innerHTML = stamina;
}

window.setInterval(function() {

}, 1000);

