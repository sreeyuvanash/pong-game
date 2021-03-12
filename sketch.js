var bat1,bat2,ball,canvas,boyImg,boyImg2,ballImg;
var score1=0,score2=0
var bac
var top1,bot1,left,right;
function preload() {
boyImg = loadImage("boy20.png")
boyImg2 = loadImage("bay10.png")
ballImg = loadImage("ball0.png")
bac = loadImage("bac.png")
}
function setup() {
  canvas = createCanvas(600, 600);

  bat1 = createSprite(30,300,10,100)
  bat1.addImage("boyImg",boyImg)
  bat1.scale = 0.04
  bat2 = createSprite(575,300,10,100)
  bat2.addImage("boyImg2",boyImg2)
  bat2.scale = 0.04

  top1 = createSprite(300,-5,600,10);
  bot1 = createSprite(300,605,600,10);
  left = createSprite(-5,300,10,600);
  right = createSprite(605,300,10,600);

  ball = createSprite(300,300,15,15)
  ball.velocityX = random(5,8)
  ball.velocityY = random(5,8)
  ball.addImage("ballImg",ballImg)
  ball.scale = 0.04;
}
function draw() {
  background(bac )
  textSize(30)
  fill("red")
  text("P1:"+score1,500,30)
  text("P2:"+score2,50,30)

  ball.bounceOff(bat2)
  ball.bounceOff(bat1)
  ball.bounceOff(top1)
  ball.bounceOff(bot1)

  bat2.y = mouseY;

  if (keyDown("UP_ARROW")){
    bat1.y-= random(5,8)
  }else if(keyDown("DOWN_ARROW")){
    bat1.y+=random(5,8)
  }

  if(ball.isTouching(right)){
    score2++;
    ball.x=300;
    ball.y=300;
    ball.velocityX = 0
    ball.velocityY = 0
  }

  if(ball.isTouching(left)){
    score1++;
    ball.x=300;
    ball.y=300;
    ball.velocityX = 0
    ball.velocityY = 0
  }

  if(ball.velocityX === 0 && keyDown("space")){
    ball.velocityX = random(5,8)
  ball.velocityY = random(5,8) 
  }

  if (score2===5){
    textSize(30)
    text("player2 WIN",200,300)
    ball.visible=false;
    bat1.visible=false;
    bat2.visible=false;

  }

  if (score1===5){
    textSize(30)
    text("player1 WIN",200,300)
    ball.visible=false;
    bat1.visible=false;
    bat2.visible=false;

  }
  drawSprites();
}