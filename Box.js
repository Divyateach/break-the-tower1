class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4
            
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle=this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height)
  fill ("aqua")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
      }
}
  