class Boxes {
    constructor(x, y, width, height) {
      var options = {
       // isStatic: true
          'restitution':0.1,
          'friction' : 0.1,
          'density':0.1
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
       
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed <3.9){
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      rect(0,0, this.width, this.height);
      pop();
      }
       else{
        World.remove(world, this.body);
        push();
            this.Visiblity = this.Visiblity - 10;
            fill(this.Visiblity);
            pop();
        }
      }
      
    
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
    
  };