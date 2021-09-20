class Snow{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        var options={
            frictionAir:0.2
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.image=loadImage('snow4.webp')
    }
    display(){
        var pos=this.body.position;
        imageMode (CENTER)
        image(this.image,this.x,this.y,this.w,this.h)


    }

}