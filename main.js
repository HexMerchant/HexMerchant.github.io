var strength = 0;
var intelligence = 0;
var defence = 0;
var speed = 0;
var earth = 0;
var air = 0;
var water = 0;
var fire = 0;
var stick = 0;
var rock = 0;

var learnAir = 0;
var learnWater = 0;
var learnEarth = 0;
var learnFire = 0;

var current = 0;
var person;
var story = ["-You wake up lying on the ground. You feel a large deposit of 
    energy inside you.", "-You go to the right.", "-The path is blocked."];

function exploreFunction() {
	if (current == 0) {
		person = prompt("What is your name", "");
	}
	if (person != null) {
		document.getElementById("story1").innerHTML = story[current];
		current += 1;
	}
}

window.setInterval(function(){									// calls what is inside function every second

}, 1000);

