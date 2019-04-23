// choose player: X & O
// select location on bord
// apend x or o to location
// change player

var player;
var prevPlayer;

function selectX() {
  player = "X";
  console.log("player:", player);
}

function selectO() {
  player = "O";
}

function setValue(el) {
  if (!player) {
    alert("select a player");
  } else if (prevPlayer === player) {
    alert("You are cheating! Select different player!");
  } else {
    el.innerText = player;
    prevPlayer = player;
  }
}
