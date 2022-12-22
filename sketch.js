var Doctor;
var Vaccine;
var Virus;
var backgroundImage;

function preload(){

Doctor=loadImage("Doctor.png");
Vaccine=loadImage("Vaccine.png");
Virus=loadImage("virus.png");
backgroundImage = loadImage("bg.png");

}


function setup() {
canvas = createCanvas(windowWidth, windowHeight);
game= new Game();
game.getState();
game.start();
}



function draw() {
bg(backgroundImage);
if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) 
  {
    game.play();
  }

  if (gameState === 2) 
  {
    game.showLeaderboard();
    game.end();
  }

}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}