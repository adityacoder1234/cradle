class roofs{
    constructor(x,y,w,h)
    {
        var roof_options={
            isStatic : true
    }
   
    this.w = w;
    this.h = height;
        this.body=Bodies.rectangle(x,y,w,h,roof_options);
        World.add(world,this.body)
    }
    display()
    {
       push();
       rectMode(CENTER);
       fill(128,128,128);
       rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}