var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bullet,bulletImg;
var zombie,zombieImage,zombieGroup 

var life =3
var score = 0

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  bulletImg = loadImage("assets/bullet1.png")
 zombieImage = loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1600, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   bulletGroup = createGroup(); 

  heading = createElement("h3"); 
  scoreboard = createElement("h3");
}

function draw() {
  background(0); 
  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting) 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

scoreboard.html("Score: "+score)
scoreboard.style('color:red'); 
scoreboard.position(width-200,20)

heading.html("Life: "+life)
heading.style('color:red'); 
heading.position(150,20)

drawSprites();
enemyzombie();
}

function enemyzombie(){

  if (frameCount % 50 === 0){
    zombie = createSprite(random(1000,1500),random(300,500),40,40)
    zombie.addImage(zombieImage);
    zombie.scale =0.15
    zombie .velocityX = -3
  }
}