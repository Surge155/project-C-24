class ground{
    constructor(){
       /* var options = {
            isStatic: false,
            restitution:  0.3,
            friction: 0.5,
            density:1.2
          }*/
          this.Body = Bodies.rectangle(350,690,20,200);
          this.width = 900;
          this.height = 20;
          World.add(world,this.Body);
    }

    display(){
        fill("yellow");
        rectMode(CENTER);
        rect(350,630,this.width,this.height);
    }
}