var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter=50;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	bob3=new bob(400,675);
	bob4=new bob(450,675);
	bob5=new bob(500,675);
	bob2=new bob(350,675);
	bob1=new bob(300,675);
	roof1=new roof(400,400,300,20)
	rope1=new rope(bob1.body,roof1.body,-bobDiameter*2,0);
	rope2=new rope(bob2.body,roof1.body,-bobDiameter*1,0);
	rope3=new rope(bob3.body,roof1.body,0,0);
	rope4=new rope(bob4.body,roof1.body,bobDiameter,0);
	rope5=new rope(bob5.body,roof1.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope5.display();
  rope3.display();
  rope4.display();
  keyPressed();
  drawSprites();
  //console.log(bob1)
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}