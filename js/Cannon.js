class Cannon{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height

    }
    display(){
        fill("#676e6a")
        push ();
        translate(this.x,this.y)
        rotate (this.angle)

        rect(-10,-20,this.width,this.height)
        pop ();
        arc(this.x-30,this.y+90,160,200,PI,TWO_PI)
        noFill();


    }


}
