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

var learnAir = 0;
var learnWater = 0;
var learnEarth = 0;
var learnFire = 0;

function strengthClick(number){									//takes the number from the html code I think
	strength = strength + number;								//this increases strength by 1 
	document.getElementById("strength").innerHTML = strength;  //this updates the game for the user
}

function buyExplore(){
    var exploreCost =  Math.floor(10 * Math.pow(1.0,explore)); 	 //works out the cost of this cursor
    if(strength >= exploreCost){                                   //checks that the player can afford the cursor
        explore = explore + 1;                                   //increases number of cursors
    	strength = strength - exploreCost;                          //removes the cookies spent
        document.getElementById('explore').innerHTML = explore;  //updates the number of cursors for the user
        document.getElementById('strength').innerHTML = strength;  //updates the number of cookies for the user
    };
};

window.setInterval(function(){									// calls what is inside function every second

}, 1000);

