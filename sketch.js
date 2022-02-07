var bg,bgImg;

var player, shooterImg, shooter_shooting;

var zombie;

var zombieImg;

var dead_zombieimg, dying_zombie, dying_zombie2, dying_zombie3;
var dying_zombieimg, dying_zombie2img, dying_zombie3img;
var score = 0;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

  dying_zombieimg = loadImage("assets/zombie.png");

  dying_zombie2img = loadImage("assets/zombie.png");
  
  dying_zombie3img = loadImage("assets/zombie.png");

  dead_zombieimg = loadImage("assets/dying_zombie.png");
}

function setup() {
  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1555;
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-450, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.setCollider("rectangle",0,0,300,300)

 dying_zombie = createSprite(displayWidth-50, displayHeight-400, 50, 50);
  dying_zombie.shapeColor = "black";
  dying_zombie.setAnimation("dying_zombieimg");
  dying_zombie.scale = 0.2;

  dying_zombie2 = createSprite(displayWidth-500, displayHeight-500, 50, 50);
   dying_zombie2.shapeColor = "black";
   dying_zombie2.setAnimation("dying_zombie2img");
    dying_zombie2.scale = 0.2;

  dying_zombie3 = createSprite(displayWidth-250, displayHeight-300, 50, 50);
    dying_zombie3.shapeColor = "black";
    dying_zombie3.setAnimation("dying_zombie3img");
    dying_zombie3.scale = 0.2;
}

if(keyWentDown("space")) {
  rand = Math.round(random (1,3));
  
  switch(rand) {
   case 1: die_zombie.destroy();
   case 2: dying_zombie2.destroy();
   case 3: dying_zombie3.destroy();
  }
}

function draw() {

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("UP_ARROW")){
  player.velocityY = -20;
}

player.velocityY = player.velocityY + 0.8;

  player.addImage(shooter_shooting)

  dying_zombie.x = dying_zombie.x-4;

  dying_zombie2.x = dying_zombie2.x-1;

  dying_zombie3.x = dying_zombie3.x-2;

 if(keyWentDown("space")) {
    //dying_zombie.setAnimation("dead_zombieimg");
    dying_zombie2.addImage("died", dying_zombieIMG);
    //dying_zombie3.addImage("died", dying_zombieIMG);
  }

  if(dying_zombie.isTouching(player)) {
    player.destroy();
  }

  if(dying_zombie2.isTouching(player)) {
    player.destroy();
  }

  if(dying_zombie3.isTouching(player)) {
    player.destroy();
  }


//player goes back to original standing image once we stop pressing the space bar
/*else if(keyWentUp("space")){
  player.addImage(shooterImg)
}*/

drawSprites();

textSize(20);
fill(255);
text("Death Count: "+ score, width-180, 30);
}