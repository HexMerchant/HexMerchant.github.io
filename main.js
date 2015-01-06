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
var copper = 0;
var stick = 0;
var rock = 0;
var wood = 0;
var bluntObjectValue = 0;
var smellyObject = 0;
var shinyObject = 0;

var playerHealth = 70;
var strength = 0;
var intelligence = 0;
var poise= 0;
var reflex = 0;
var fire = 0;
var water = 0;
var earth = 0;
var air = 0;

var testEnemyHealth = 20;
var testCreatureAttack = 1;

var Timer = window.setInterval(function(){tick()}, 1000);
var Timer = window.setInterval(function(){tickTwo()}, 1000);

var current = 0;
var person;
var story = ["-You wake up lying on the ground. You feel a large deposit \
of energy inside you.", "-You look around only to see a thicket of trees.", "-You begin to walk around looking for anything that may help."];

var stamina = 100;
var flux = 0;
var alive = true;
var enabled = true;

var crafting1Name = "Craft Wood";
var crafting1Cost = 10;
var crafting2Cost = 13;

var upgrade1Cost = 100;
var upgrade2Cost = 100;

var research1Progress = 0;
//SAVE CONTENT
function saveGame() {
var save = {
playerHealth: playerHealth,
stick: stick,
rock: rock,
wood: wood,
stamina: stamina,
flux: flux,
bluntObjectValue: bluntObjectValue,
research1Progress: research1Progress
	}
localStorage.setItem("save",JSON.stringify(save));
}
window.onload = function loadGame() {
var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.playerHealth !== "undefined") playerHealth = savegame.playerHealth;
if (typeof savegame.stick !== "undefined") stick = savegame.stick;
if (typeof savegame.rock !== "undefined") rock = savegame.rock;
if (typeof savegame.wood !== "undefined") wood = savegame.wood;
if (typeof savegame.stamina !== "undefined") stamina = savegame.stamina;
if (typeof savegame.flux !== "undefined") flux = savegame.flux;
if (typeof savegame.bluntObjectValue !== "undefined") bluntObjectValue = savegame.bluntObjectValue;
if (typeof savegame.research1Progress !== "undefined") research1Progress = savegame.research1Progress;
document.getElementById("playerHealth").innerHTML = playerHealth;
document.getElementById("stick").innerHTML = stick;
document.getElementById("rock").innerHTML = rock;
document.getElementById("wood").innerHTML = wood;
document.getElementById("stamina").innerHTML = stamina;
document.getElementById("flux").innerHTML = flux;
document.getElementById("bluntObjectValue").innerHTML = bluntObjectValue;
showInlineContent('crafting2');
showInlineContent('bluntObjectName');
showInlineContent('bluntObjectValue');
}
function deleteSave() {
localStorage.removeItem("save")
}
//SAVE CONTENT

function regenStamina() {
	if (stamina < 100) {
	tick();
	document.getElementById("stamina").innerHTML = stamina;
	}
}
function fluxDepletion() {
	if (flux > 0) {
	tickTwo();
	document.getElementById("flux").innerHTML = flux;
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
		flux = flux + 1;
		stick = stick + 1;
		rock = rock + 1;
	document.getElementById("stamina").innerHTML = stamina;
	document.getElementById("flux").innerHTML = flux;
	document.getElementById("stick").innerHTML = stick;
	document.getElementById("rock").innerHTML = rock;
	}
	else if (stamina > 1 && num <=10) {
		stamina = stamina - 2;
		flux = flux + 1;
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
function craftBluntObject() {
	if (stick >= crafting2Cost) {
		stick = stick - crafting2Cost;
		bluntObjectValue = bluntObjectValue + 1;
	document.getElementById("stick").innerHTML = stick;
	document.getElementById("bluntObjectValue").innerHTML = bluntObjectValue;
	}
}
//CRAFTING

//TIMERS
function tick() {
	if (stamina < 100)
		stamina = stamina + 1;
	document.getElementById("stamina").innerHTML = stamina;
}
function tickTwo() {
	if (flux >= 1)
	flux = flux - 1;
	document.getElementById("flux").innerHTML = flux;
}
//TIMERS

function upgradeStamina () {
	if (stick >= upgrade1Cost && rock >= upgrade1Cost) {
		stick = stick - upgrade1Cost;
		rock = rock - upgrade1Cost;
			document.getElementById("stick").innerHTML = stick;
			document.getElementById("rock").innerHTML = rock;
			document.getElementById("stamina").innerHTML = stamina;
	}
}

//Hide and Show Divs
function hideContent(d) {
document.getElementById(d).style.display = "none";
}
function showInlineContent(d) {
document.getElementById(d).style.display = "inline";
}
function showBlockContent(d) {
document.getElementById(d).style.display = "block";
}
function reverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}
//Hide and Show Divs

function researchStick() {
	if (stick >= 1 && research1Progress < 100) {			// Want to be able to show progress
	stick = stick - 1;										// each time you click me I want to use 1 stick
	research1Progress = research1Progress + 5;				// each stick brings research progress up 5
	document.getElementById("stick").innerHTML = stick;		// Show the player the update
	}
	if (research1Progress == 100) {							// When reaches 100
	showInlineContent('crafting2');							// show crafting2
	showInlineContent('bluntObjectName');
	showInlineContent('bluntObjectValue');
	document.getElementById("researchStick").disabled=true;
	}
	// when research hits 100 unlocks blunt object for crafting
	// this clickable button should hide after completion
	// add achievement for first research project
}

//function alertPlayer() {
	//If player gets anything use this function
	//
//}

// Enemy Functions
window.setInterval(function testEnemy() {
	if (testEnemyHealth > 1) {
		playerHealth = playerHealth - testCreatureAttack;
		document.getElementById("playerHealth").innerHTML = playerHealth;
	}
}, 500);

function attackTestEnemy() {
	if (testEnemyHealth >= 1 && stick > 1) {
		stick = stick - 2;
		testEnemyHealth = testEnemyHealth - 1;
		document.getElementById("stick").innerHTML = stick;
		document.getElementById("testEnemyHealth").innerHTML = testEnemyHealth;
		}
	
	if (testEnemyHealth <= 0) {
		copper = copper + 100;
		smellyObject = smellyObject + 1;
		shinyObject = shinyObject + 1;
		document.getElementById("copper").innerHTML = copper;
		document.getElementById("smellyObject").innerHTML = smellyObject;
		document.getElementById("shinyObject").innerHTML = shinyObject;
		document.getElementById("testEnemyHealth").innerHTML = testEnemyHealth;
	}
}


window.setInterval(function() {

}, 1000);
