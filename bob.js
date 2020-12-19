class bobs {
    constructor(x,y)
    {
        var bob_options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8,
        }
        this.x=x;
        this.y=y;
          this.r
    

        this.body=Bodies.circle(x,y,25,bob_options)
        World.add(world,this.body);


    }
    display()
    {
        push();
            fill(254,0,255);
        var pos=this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,25,25);
        pop();

    }
}