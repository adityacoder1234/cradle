
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var ball,ob1;
var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new bobs(300,200,50);
	bob2 = new bobs(350,200,50);
	bob3= new  bobs(400,200,50);
	bob4= new  bobs(450,200,50);
	bob5= new  bobs(500,200,50);
	ob1 = new roofs(200,0,300,20);

	
	

	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  keyPressed();
         
  drawSprites();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ob1.display();
  string1.display();
   string2.display();
   string3.display();
   string4.display();
   string5.display();
}

function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:400 , y:400});
	}
}

 
