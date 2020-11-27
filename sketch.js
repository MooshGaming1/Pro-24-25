
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var bin1,paper1,ground1
var world,engine
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

paper1=new paper(200,450,70)
ground1=new ground(width/2,670,width,20)
bin1=new Bin(1200,650)
var render = Render.create({
	element:document.body,
	engine:engine,
	options:{
		widht:1600,
		height:700,
		wireframes:false
	}
})
	
	//Create the Bodies Here.


	Engine.run(engine);
	Render.run(render)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper1.display()
  bin1.display()
  ground1.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145})
	}
}


