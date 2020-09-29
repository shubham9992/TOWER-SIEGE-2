const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world; 
function preload(){
//  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;

  // var options={
  //   isStatic:true
  // }
  // Poly=Bodies.circle(200,200,10,options);
  // World.add(world,Poly);

  Poly=new Pol(100,250,40);

//  console.log(polygon);
  ground1 = new Ground(310,376,220,10);
  ground2 = new Ground(600,276,160,10);
  basement=new Ground(400,height,1000,20);

  // options_pol={
  //   isStatic:false
  // }
  // pol=Bodies.circle(100,200,50,options_pol);
  // World.add(world,pol);

  
  slingShot=new Slingshot(Poly.body,{x:100,y:250});

  // level ONE
  block1=new Box(220,350,30,40);
  block2=new Box(250,350,30,40);
  block3=new Box(280,350,30,40);
  block4=new Box(310,350,30,40);
  block5=new Box(340,350,30,40);
  block6=new Box(370,350,30,40);
  block7=new Box(400,350,30,40);

  // part 2
  block17=new Box(540,250,30,40);
  block18=new Box(570,250,30,40);
  block19=new Box(600,250,30,40);
  block20=new Box(630,250,30,40);
  block21=new Box(660,250,30,40);

  // level Two
  block8=new Box(250,310,30,40);
  block9=new Box(280,310,30,40);
  block10=new Box(310,310,30,40);
  block11=new Box(340,310,30,40);
  block12=new Box(370,310,30,40);

  // part 2
  block22=new Box(570,210,30,40);
  block23=new Box(600,210,30,40);
  block24=new Box(630,210,30,40);

   // level Three
   block13=new Box(280,270,30,40);
   block14=new Box(310,270,30,40);
   block15=new Box(340,270,30,40);

  // part 2
   block25=new Box(600,170,30,40);

   // level Four
   block16=new Box(310,230,30,40);
//if(gameState==="onlsing"){
      // textSize(20);
      // text("Drag the Hexagonal Stone and Release it , to launch it towards the blocks",100,100);
//  }
 // else if(gameState==="onfly"){
  //    textSize(20);
  //  text("Press space bar to reset",100,200);
 // }
  
 // createSprite(400, 200, 50, 50);
 Engine.run(engine);
}

function draw() {
   Engine.update(engine);
   background(rgb(55,43,43));
    textSize(20);
    fill("white");
    text("Drag the Hexagonal Stone and Release it , to launch it towards the blocks",100,100);
    textSize(20);
    text("Press \"Space\" bar to reset",600,450);
  // push();
  // translate(100,250);
  // rotate(Matter.Body.angle);
  //  imageMode(CENTER);
  //  image(polygon_img,0,0,40,40);
  //  pop();
  ground1.display(); 
  ground2.display(); 
  basement.display();

  
 // level ONE
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  // part 2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

// level Two
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

// part 2
  block22.display();
  block23.display();
  block24.display();

// level Three
  block13.display();
  block14.display();
  block15.display();

// part 2
   block25.display();

    // level Four
   block16.display();
   slingShot.display();
   Poly.display();
   
  drawSprites();
}

function mouseDragged(){
 // if(gameState=="onsling"){
      Matter.Body.setPosition(Poly.body,{x:mouseX,y:mouseY});
 // }
}

function mouseReleased(){
//  gameState="onfly";
  slingShot.fly();
  // if(gameState!="onfly")
  //    slingShot.attach(Poly.body);
  //   gameState="onsling";
}
function keyPressed(){
  if(keyCode===32){
 //   gameState="onsling";
    Matter.Body.setPosition(Poly.body,{x:100,y:250});
    slingShot.attach(Poly.body);
  }
}