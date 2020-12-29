const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,ground,stand;
var block1,polygon,polygonimg,slingshot;
function preload(){
    polygonimg=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand= new Ground(600,355,300,10)
    //base level
    block1=new Box(500,305,30,40)
    block2=new Box(530,305,30,40)
    block3=new Box(560,305,30,40)
    block4=new Box(590,305,30,40)
    block5=new Box(620,305,30,40)
    block6=new Box(650,305,30,40)
    block7=new Box(680,305,30,40)
    //second level
    bloc1=new Box(530,265,30,40)
    bloc2=new Box(560,265,30,40)
    bloc3=new Box(590,265,30,40)
    bloc4=new Box(620,265,30,40)
    bloc5=new Box(650,265,30,40)
    //third level
    bloc11=new Box(560,225,30,40)
    bloc22=new Box(590,225,30,40)
    bloc33=new Box(620,225,30,40)
    //fourth level
    bock6=new Box(590,185,30,40)
    stand1= new Ground(850,150,300,10)
    blck1=new Box(800,140,30,40)
    blck2=new Box(830,140,30,40)
    blck3=new Box(860,140,30,40)
    blck4=new Box(890,140,30,40)
    blck5=new Box(920,140,30,40)

    blc1=new Box(830,100,30,40)
    blc2=new Box(860,100,30,40)
    blc3=new Box(890,100,30,40)

    b=new Box(860,60,30,40)
   
    
    polygon=Bodies.circle(200,100,10)
    World.add(world,polygon)
    slingshot=new SlingShot(this.polygon,{x:200,y:100})

}
    function draw(){
        background("black");
        Engine.update(engine);
        strokeWeight(4);
        ground.display();
        stand.display();
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        bloc1.display();
        bloc2.display();
        bloc3.display();
        bloc4.display();
        bloc5.display();
        bloc11.display();
        bloc22.display();
        bloc33.display();
        bock6.display();
        stand1.display()
        blck1.display()
        blck2.display()
        blck3.display()
        blck4.display()
        blck5.display()
        blc1.display()
        blc2.display()
        blc3.display()
        b.display()
        imageMode(CENTER)
        image(polygonimg,polygon.position.x,polygon.position.y,30,30)
       slingshot.display()
    }
    function mouseDragged(){
        Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
    }
    function mouseReleased(){
        slingshot.fly()
    }