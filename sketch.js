const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
   world = engine.world;

  ground = new Ground(600,height,800,20);
  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
ground.display();

  drawSprites();
}