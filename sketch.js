
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new ground(600,600,2000,20)
	stone1= new Stone(500,100,50,50)
	rubber1= new Rubber(300,100,30)
	hammer1= new Hammer(500,100,100,30)
	s1= new Sand(400,200,15)
	s2= new Sand(500,100,15)
	s3= new Sand(400,100,15)
	s4= new Sand(600,100,15)
	s5= new Sand(300,100,15)
	s6= new Sand(200,100,15)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground1.display()
 stone1.display()
 rubber1.display()
 hammer1.display()
 s1.display()
 s2.display()
 s3.display()
 s4.display()
 s5.display()
 s6.display()
}



