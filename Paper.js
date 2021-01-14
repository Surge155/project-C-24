class paper{
    constructor(){
        var options = {
            isStatic: false,
            restitution:  0.3,
            friction: 0.5,
            density:1.2
          }
          this.Body = Bodies.circle(100,660,20,options);
          this.radius = 20;
          World.add(world,this.Body);
    }

    display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(100,600,this.radius,this.radius);
    }
}

