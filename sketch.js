var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;




function setup() {
  createCanvas(1000,600);
car1=createSprite(100,100,20,20);
car1.shapeColor="yellow";
car2=createSprite(100,200,20,20);
car2.shapeColor="white";
car3=createSprite(100,300,20,20);
car3.shapeColor="red";
car4=createSprite(100,400,20,20);
car4.shapeColor="green";
wall1=createSprite(900,100,30,60)
wall1.shapeColor="grey";
wall2=createSprite(900,190,30 ,60);
wall2.shapeColor="grey";
wall3=createSprite(900,280,30,60);
wall3.shapeColor="grey";
wall4=createSprite(900,380,30,60);
wall4.shapeColor="grey";
speed= Math.round(random(55,90))
weight=Math.round(random(400,1000))
car1.velocityX=speed;
car2.velocityX=speed;
car3.velocityX=speed;
car4.velocityX=speed;

}

function draw() {
  background(0); 
  
  if(wall1.x-car1.x<(car1.width+wall1.width/2)){
car1.velocityX=0;
var deformation=0.5*weight*speed*speed/22509
if(deformation>180){
car1.shapeColor="yellow";
}
if (deformation<180&& deformation > 100){
car1.shapeColor="green";

}
if (deformation < 100){
car1.shapeColor="red";


}


  }

  drawSprites();
}