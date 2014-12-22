var stick = 0;
var current = 0;
var person;
var story = ["-You wake up lying on the ground. You feel a large deposit \
of energy inside you.", "-You look around only to see a thicket of trees.", "-You begin to walk around looking for anything that may help."];

var search = 0;


function exploreFunction() {
	if (current == 0) {
		person = prompt("What is your name", "");
	}
	if (person != null && current < story.length) {
		document.getElementById("story1").innerHTML = story[current];
	current += 1;
  }
}

function gatherStick(){
	stick = stick + 1;
	document.getElementById("stick").innerHTML = stick;
}



window.setInterval(function() {

}, 1000);

//Make a fuction that gathers material
// search = stick + 
//
//	if (
//	document.getElementById().innerHTML = ;
//
//
//
