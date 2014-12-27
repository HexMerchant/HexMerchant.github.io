/*
Elemental Bound

TODO :
Make a text to appear when you hover an object. [50% complete]
Work more on the progress bar.
Make a research function						[10% complete]
Make an Action function
Make an achievement
Make a profession
Add a single stat "how many sticks have you gathered"

*/
var stick = 0;
var rock = 0;
var wood = 0;
var health = 50;
var strength = 0;
var intelligence = 0;
var poise= 0;
var reflex = 0;
var fire = 0;
var water = 0;
var earth = 0;
var air = 0;

var Timer = window.setInterval(function(){tick()}, 1000);

var current = 0;
var person;
var story = ["-You wake up lying on the ground. You feel a large deposit \
of energy inside you.", "-You look around only to see a thicket of trees.", "-You begin to walk around looking for anything that may help."];

var stamina = 100;

var crafting1Name = "Craft Wood";
var crafting1Cost = 10;

var research1Progress = 0;

function saveGame() {
var save = {
stick: stick,
rock: rock,
wood: wood,
stamina: stamina,
current: current,
person: person,
story: story
	}
localStorage.setItem("save",JSON.stringify(save));
}

window.onload = function loadGame() {
var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.stick !== "undefined") stick = savegame.stick;
if (typeof savegame.rock !== "undefined") rock = savegame.rock;
if (typeof savegame.wood !== "undefined") wood = savegame.wood;
if (typeof savegame.stamina !== "undefined") stamina = savegame.stamina;
document.getElementById("stick").innerHTML = stick;
document.getElementById("rock").innerHTML = rock;
document.getElementById("wood").innerHTML = wood;
document.getElementById("stamina").innerHTML = stamina;
}

function deleteSave() {
localStorage.removeItem("save")
}

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
	document.getElementById("stick").innerHTML = stick;
	}
}
// Crafting
function craftWood() {
	if (stick >= crafting1Cost) {
	stick = stick - crafting1Cost;
	wood = wood + 1;
	document.getElementById("stick").innerHTML = stick;
	document.getElementById("wood").innerHTML = wood;
	}
}

function tick() {
 if (stamina < 100)
	stamina = stamina + 1;
 document.getElementById("stamina").innerHTML = stamina;
}

//Hide and Show Divs

//Hide and Show Divs

function researchStick() {
	if (stick > 1 && research1Progress < 100)
	stick = stick - 1;										// each time you click me I want to use 1 stick
	research1Progress = research1Progress + 5;				// each stick brings research progress up 5
	document.getElementById("stick").innerHTML = stick;
	
//Want to be able to show progress
// when research hits 100 unlocks blunt object for crafting
// this clickable button should hide after completion
// add achievement for first research project
}
		

window.setInterval(function() {

}, 1000);
