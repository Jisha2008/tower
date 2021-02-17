
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,ground3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(width/2,485,width,20);
ground2 = new Ground(430+162,370,280,15);
ground3 = new Ground(850+200,250,220,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  ground2.display();
  ground3.display();
  
  drawSprites();
 
}




