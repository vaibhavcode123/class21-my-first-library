var mR, fR;
var gameObject1;
var gameObject2, gameObject3;
function setup() {
  createCanvas(800,400);
  mR = createSprite(200, 100, 50, 50);
  fR = createSprite(400, 300, 50,50);
  mR.shapeColor = "green";
  fR.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(500,100,50,50);

  gameObject2.velocityX = 5;
  gameObject3.velocityX = -5;
}

function draw() {
  background(0);
  mR.x = World.mouseX;
  mR.y = World.mouseY;  
  
  if(isTouching(mR,gameObject1))
  {
    mR.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }

  else
  {
    mR.shapeColor = "green";
      gameObject1.shapeColor = "green";
  }

  bounceOff(gameObject2, gameObject3);
  drawSprites();
}


function isTouching(ob1, ob2)
{
  if(ob1.x - ob2.x <ob1.width/2 + ob2.width /2 &&
    ob2.x - ob1.x <ob1.width/2 + ob2.width /2 &&
    ob1.y - ob2.y <ob1.height/2 + ob2.height /2 &&
    ob2.y - ob1.y <ob1.height/2 + ob2.height /2)
    {
      return true;
    }

    else
    {
      return false;
    }
}

function bounceOff(ob1, ob2)
{
  if(ob1.x - ob2.x <ob1.width/2 + ob2.width /2 &&
    ob2.x - ob1.x <ob1.width/2 + ob2.width /2 &&
    ob1.y - ob2.y <ob1.height/2 + ob2.height /2 &&
    ob2.y - ob1.y <ob1.height/2 + ob2.height /2)
    {
        ob1.velocityX = ob1.velocityX*-1;
        ob1.velocityY = ob1.velocityY*-1;

        ob2.velocityX = ob2.velocityX*-1;
        ob2.velocityY = ob2.velocityY*-1;
    }

    
}