
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, paperImg;
var ground;
var box1, box2, box3, dustbin, dustbinImg;

function preload()
{
	dustbinImg = loadImage("pics/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(170, 620, 50, 50);
	ground = new Ground(400, 630, 1600, 30);
	box1 = new Box(500, 605, 100, 20);
	box2 = new Box(450, 565, 20, 100);
	box3 = new Box(550, 565, 20, 100);
	dustbin = createSprite(500, 535, 20, 5);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.5;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
	

  paper1.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:70,y:-150})
	}
}



