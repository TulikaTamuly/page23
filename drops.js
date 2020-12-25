class drop{
    constructor(x,y){
        var options={
            restitution:0.8,
            gravity:10
        }
        this.body=Bodies.circle(x,y,4,options)
        World.add(world,this.body)

    }
    display(){
        fill("blue")
        var angle=this.body.angle
        ellipseMode(CENTER)
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipse(0,0,random(5,8),8)
        pop ()
    }
}