var bomb;
var coin;
var nrg;
var road;
var power;
var runner, runner_running;

function preload(){
 
  //pre-load images
  roadImage = loadImage("path.png");
   
  bombImage = loadImage("bomb.png");

  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  road = createSprite(200, 200);
  road.addImage("road", roadImage);
  road.scale = 1.2;
  road.velocityY = 4;
 
  bomb = createSprite(200, 200);
  bomb.addImage("bomb", bombImage);
  bomb.scale = 0.10;
  bomb .velocityY = 4;

  runner = createSprite(200, 350, 30, 30);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.05



}

function draw() {
  background(0);

  if (road.y > 400){
    road.y = height/2;
  }

  if (keyDown("right")){
  runner.x += 6
  }

  if (keyDown("left")){
    runner.x -= 6
    }

  if (runner.x>351){
    runner.x = 350;
  }

  if (runner.x<55){
    runner.x = 56;
  }
  
  drawSprites();
}
