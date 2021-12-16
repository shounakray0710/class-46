var bg,bgImg;
var player;
var coin;
var coingroup;
var score =0;

function preload(){
  bgImg = loadImage("assets/background.gif")
  playerImg = loadImage("assets/aeroplane.png")
  coinImg = loadImage("assets/goldCoin.png")
}

function setup() {
  createCanvas(1200,600);

  bg = createSprite(width/2,height/2,width,height);
  bg.addImage(bgImg)
  bg.scale=1.5
  bg.velocityX=-1

  player = createSprite(140,80);
  player.addImage(playerImg)
  player.scale = 0.5

  coingroup = new Group();
}

function draw() {
  background(0); 

  if(bg.x<width/2-85){
   bg.x=width/2
  }
  if (keyDown("up")) {
    player.y=player.y-1;
  }
  if (keyDown("down")) {
    player.y=player.y+1;
  }
  coins()
  
    for(var i=0;i<coingroup.length;i++){
      if(coingroup.isTouching(player)){
       coingroup.get(i).destroy()
       score=score+5
      }
    }
   
    
       
drawSprites();
textSize(25)
fill("white")
text("Score:"+score,900,50)
}
function coins(){
  if(frameCount%80===0){
    coin = createSprite(1200,random(100,height/2))
    coin.addImage(coinImg)
    coin.scale =0.1
    coin.velocityX = -7
    coin.lifetime = 600
    coingroup.add(coin);
  }
}