var current = 0;
var person;
var story = ["-You wake up lying on the ground. You feel a large deposit \
of energy inside you.", "-You go to the right.", "-The path is blocked."];

function exploreFunction() {
  if (current == 0) {
    person = prompt("What is your name", "");
  }
  if (person != null && current < story.length) {
    document.getElementById("story1").innerHTML = story[current];
    current += 1;
  }
}

window.setInterval(function() {

}, 1000);
