class Box {
    constructor(x,y,w,h){
        var options ={
            isStatic : false ,
            restitution : 0.8 ,
            friction : 1 ,
            density : 0.01
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;

        World.add(YatharthWorld,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        strokeWeight(4);
        stroke("green");
        rect(0,0,this.w,this.h);
        pop()
        }
}