var bg
var player
var playerImg
var enemy1
var enemy1Img
var enemy2
var enemy2Img
function preload(){
bg=loadImage("GROUND.png")
playerImg=loadImage("Player.png")
enemy1Img=loadImage("ENEMY1.png")
enemy2Img=loadImage("ENEMY2.png")

}

function setup(){
 createCanvas(displayWidth-20,displayHeight-140)
 player=createSprite(70,displayHeight/2)
 player.addImage(playerImg)
 player.scale=0.5
 
}


function draw(){
  background(bg)
  enemy();  
drawSprites();
}
function enemy(){
  if (World.frameCount%80===0){
    enemy1=createSprite(displayWidth-100,random(20,displayHeight-150))
    var rand=Math.round(random(1,2))
    if (rand===1){
      enemy1.addImage(enemy1Img)
      enemy1.scale=0.5
      enemy1.rotation=-90
    }
    else{
      enemy1.addImage(enemy2Img)
      enemy1.scale=0.3
      enemy1.rotation=90 

    }
enemy1.velocityX=-2
    
    
     
  }
}
