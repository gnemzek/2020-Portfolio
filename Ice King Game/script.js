// Global Variables

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
const iceKingDoorPath = "http://grantnemzek.com/game/images/iceKing.jpg";
const finnDoorPath = "http://grantnemzek.com/game/images/Finn.jpg";
const BMOdoorPath = "http://grantnemzek.com/game/images/BMO.jpg";
const closedDoorPath = "http://grantnemzek.com/game/images/closedDoor.jpg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const startButton = document.getElementById('start');
let currentlyPlaying = true;
let totalWins = 0;
let totalLosses = 0;
let winScore = document.getElementById('totalWins');
let loseScore = document.getElementById('totalLosses');

const isBot = (door) => {
  if(door.src === iceKingDoorPath) { 
    return true;
  } else {
    return false;
  }
}

const isClicked = (door) => {
  if(door.src === closedDoorPath){ 
    return false;
  } else {
    return true;
  }
}

const gameOver = (status) => {
  if(status === "win") {
    startButton.innerHTML = "You Win! Play again?";
    totalWins++;
    winScore.innerHTML = totalWins;
  } else {
    startButton.innerHTML = "Game over! Play again?";
    totalLosses++;
    loseScore.innerHTML = totalLosses;
  }
  currentlyPlaying = false;
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver("win");
  } else if(isBot(door)) {
    gameOver();
  }
}

const randomChoreDoorGenerator = () => {
  let kingDoor = Math.floor(Math.random() * numClosedDoors);
  if(kingDoor === 0) {
    openDoor1 = iceKingDoorPath;
    openDoor2 = finnDoorPath;
    openDoor3 = BMOdoorPath;
  } else if(kingDoor === 1) {
    openDoor1 = BMOdoorPath;
    openDoor2 = iceKingDoorPath;
    openDoor3 = finnDoorPath;
  } else {
    openDoor1 = finnDoorPath;
    openDoor2 = BMOdoorPath;
    openDoor3 = iceKingDoorPath;
  }
}

doorImage1.onclick = () => {
 if(currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
}
}

doorImage2.onclick = () => {
 if(currentlyPlaying && !isClicked(doorImage2)) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
}
}

doorImage3.onclick = () => {
 if(currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
}
}


startButton.onclick = () => {
  if(!currentlyPlaying ) {
    startRound();
}
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startRound();