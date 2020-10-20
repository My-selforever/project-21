var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() {
  createCanvas(400,400);
  thickness = random(20,33);
  wall = createSprite(350, 200,thickness, height/2);
  bullet = createSprite(50,200,50,10);
  speed = random(53,100);
  weight = random(30,52);
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  bullet.velocityX = speed
  wall.shapeColor = "white";
  bullet.shapeColor = "white";
}

function draw() {
  background("black"); 
  if (damage>=10  &&  touch(bullet,wall))
  {
    wall.shapeColor = "red";
    bullet.velocityX = 0
  }

  if(damage<10  &&  touch(bullet,wall))
  {
    wall.shapeColor = "green";
    bullet.velocityX = 0;
  }

  drawSprites();
}

function touch(m,d)
{
 if (m.x- d.x<=d.width/2+m.width/2 &&
  d.x-m.x<=d.width/2+m.width/2 &&  m.y- d.y<=d.height/2+m.height/2 &&
  d.y-m.y<=d.height/2+m.height/2)
 {
  return true;
 }
 else
 {
   return false;
 }
}