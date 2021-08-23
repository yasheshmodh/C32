var ball,blower,blowermouth;
var world,engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

function setup() {
  createCanvas(800,400);
  engine = Matter.Engine.create()
  world = engine.world
  ball = new Ball(400,0,40,40)
  blower = new Blower(350,250,150,50)
  blowermouth = new Blowermouth(470,220,100,50)
  button = createButton("Click To Blow")
  button.position(400,300,)
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  Matter.Engine.update(engine)
  drawSprites();
  ball.display();
  blower.display();
  blowermouth.display();
}
function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}

