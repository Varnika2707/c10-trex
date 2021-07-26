
var trex ,trex_running;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png")
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50)
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5
  trex.x = 50

  //create ground sprite
  ground = createSprite(200,180,400,20)
  ground.addImage(groundImage)

  //edges are stored in an array => edges[0]=> left, edges[1]=>right, edges[2]=> top, edges[3]=> bottom
  edges = createEdgeSprites();

 





}

function draw(){
  background("skyblue");

  ground.velocityX = -2

  //infinite ground, resetting the ground
  if(ground.x < 0){
    ground.x = ground.width /2
  }

  console.log(ground.x)
  //press the space key to make the trex jump
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //add gravity so the trex comes down
  trex.velocityY = trex.velocityY + 0.5;

  //so that the trex doesnt go below the bottom edge
  //trex.collide(edges[3])
  trex.collide(ground)
  drawSprites()
}
