
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof1;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 650);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1=new Roof(400,100,450,50);
//bobDiameter=75;
//startBobPositionX=width/2;
//startBobPositionY=height/4+350;

/*bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
bob5=new Bob(startBobPositionX+bobDiameter/2,startBobPositionY,bobDiameter);*/

bob1=new Bob(250,530,75);
bob2=new Bob(325,530,75);
bob3=new Bob(400,530,75);
bob4=new Bob(475,530,75);
bob5=new Bob(550,530,75);


/*var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 700,
    wireframes: false
  }
});*/


/*rope1=new Chain(bob1.paper,roof1.roof,-bobDiameter*2,0);
rope2=new Chain(bob2.paper,roof1.roof,-bobDiameter*1,0);
rope3=new Chain(bob3.paper,roof1.roof,0,0);
rope4=new Chain(bob4.paper,roof1.roof,bobDiameter*2,0);
rope5=new Chain(bob5.paper,roof1.roof,bobDiameter*1,0);*/

rope1=new Chain(bob1.paper,roof1.roof,-150,0);
rope2=new Chain(bob2.paper,roof1.roof,-75,0);
rope3=new Chain(bob3.paper,roof1.roof,0,0);
rope4=new Chain(bob4.paper,roof1.roof,75,0);
rope5=new Chain(bob5.paper,roof1.roof,150,0);



Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
  background(80,80,80);
 
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.show();


  drawSprites();
 
}

function keyPressed(){
	if( keyCode===32){
    Matter.Body.applyForce(bob1.paper,bob1.paper.position,{x:-200,y:-190});

	}
}


