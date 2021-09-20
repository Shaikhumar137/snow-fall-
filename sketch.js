const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world 
var engine
var snowbg 
var snow=[]
function preload() 

{
  snowbg=loadImage("snow2.jpg")
  
}






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine=Engine.create()
  world=engine.world
  
}

function draw() {
  background(snowbg);  
  Engine.update(engine)
 if(frameCount%10===0){

 
    snow.push (new Snow(random(0,400),random(0,50),50,50))
  }
  for(var i=0;i<snow.length;i++){
    snow[i].display()
  }
 
  drawSprites();

}