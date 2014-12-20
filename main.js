var strength = 0;
var intelligence = 0;
var dexterity = 0;
var speed = 0;
var stealth = 0;
var earth = 0;
var air = 0;
var water = 0;
var fire = 0;
var explore = 0;
var stick = 0;

function strengthClick(number){									//takes the number from the html code I think
	strength = strength + number;								//this increases strength by 1 
	document.getElementById("strength").innerHTML = strength;  //this updates the game for the user
}

window.setInterval(function(){									// calls what is inside function every second

}, 1000);

