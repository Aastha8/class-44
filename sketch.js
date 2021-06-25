var sTrack
var mainCharacter


function preload (){
sTrack = loadImage ("swimming track.jpg")
}






function setup() {
  createCanvas(1400,600);
 mainCharacter =  createSprite(1300, 225, 25, 25);
}

function draw() {
  background(sTrack);  
  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    mainCharacter.velocityX = -2
  console.log("Pressed")
}
  }
 
