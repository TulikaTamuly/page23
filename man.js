class man{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,175,options)
        World.add(world,this.body)
        this.animation=loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png")
        
    }
    display(){
        fill("blue")
        var pos=this.body.position
        imageMode(CENTER)
      
        //ellipseMode(CENTER)
       // ellipse(pos.x,pos.y,400,350)
        
        animation(this.animation,pos.x-35,pos.y+140,10,10)
    }
}