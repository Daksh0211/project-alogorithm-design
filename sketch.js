var mrect, frect ; 

function setup() {
  createCanvas(1200,800);
  mrect = createSprite(600, 400, 50, 80);
  mrect.shapeColor = "green" ;
  frect = createSprite(400,200,80,30);
  frect.shapeColor = "green" ;
  mrect.velocityY = -5 ;
  frect.velocityY = +5 ;
}

function draw() {
  background(0);  

 mrect.x = World.mouseX ;
 mrect.y = World.mouseY ;

 if(mrect.x - frect.x < frect.width/2 + mrect.width/2 
  && frect.x - mrect.x < frect.width/2 + mrect.width/2){
    mrect.velocityX = mrect.velocityX * (-1) ;
    frect.velocityX = frect.velocityX * (-1) ;
  }

  if (mrect.y - frect.y < frect.width/2 + mrect.width/2 
  && frect.y - mrect.y < frect.width/2 + mrect.width/2) {
    mrect.velocityY = mrect.velocityY * (-1) ;
    frect.velocityY = frect.velocityY * (-1) ;
    //mrect.shapeColor = "red" ;
    //frect.shapeColor = "red" ;
  }

  /*else{
    mrect.shapeColor = "green" ;
    frect.shapeColor = "green" ;
  } */

  drawSprites();
}