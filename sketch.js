const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,590,1200,20);
  
  //row 1
  box1 = new Box(730,100,60,60);
  box2 = new Box(730,100,60,60);
  box3 = new Box(730,100,60,60);
  box4 = new Box(730,100,60,60);
  box5 = new Box(730,100,60,60);
  box6 = new Box(730,100,60,60);
  box7 = new Box(730,100,60,60);

  //row 2
  box8  = new Box(795,100,60,60);
  box9  = new Box(795,100,60,60);
  box10 = new Box(795,100,60,60);
  box11 = new Box(795,100,60,60);
  box12 = new Box(795,100,60,60);
  box13 = new Box(795,100,60,60);

  //row 3
  box14  = new Box(860,100,60,60);
  box15  = new Box(860,100,60,60);
  box16  = new Box(860,100,60,60);
  box17  = new Box(860,100,60,60);
  box18  = new Box(860,100,60,60);
  box19  = new Box(860,100,60,60);

  ball = new Ball(550,100,40);

  rope = new Rope(ball.body,{x:550,y:100});

}

function draw() {
  background("blue");  
  Engine.update(engine);
  
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  
  ball.display();

  rope.display();
}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}
