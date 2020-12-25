const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
drops=[]
function preload(){
    bruceImage=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    t1=loadImage("1.png")
    t2=loadImage("2.png")
    t3=loadImage("3.png")
    t4=loadImage("4.png")
}

function setup(){
    createCanvas(800,1200)
   engine=Engine.create()
   world=engine.world
  // man=createSprite(200,200)
   //man.addAnimation("man",bruceImage)
   //d1=new drop(200,200)
   bruce=new man(400,700)
}

function draw(){
    background("darkblue")
    Engine.update(engine)
   // animation(bruceImage,200,200)
   
  // d1.display()
  if(frameCount%60===0){
    Lightning=createSprite(400,0)
    Lightning.lifetime=30
    
var r=round(random(1,4))
switch(r){
    case 1:Lightning.addImage(t1);
    break;
    case 2:Lightning.addImage(t2);
    break;
    case 3:Lightning.addImage(t3);
    break;
    case 4:Lightning.addImage(t4);
    break;
}}
    if(frameCount%0.5===0){
        drops.push(new drop(random(0,800),-400))
    }
    if(frameCount%0.5===0){
        drops.push(new drop(random(0,800),-400))
    }
    if(frameCount%0.5===0){
        drops.push(new drop(random(0,800),-400))
    }
    for(i=0;i<drops.length;i++){
        drops[i].display()
    }
    bruce.display()
    
    drawSprites()
}   

