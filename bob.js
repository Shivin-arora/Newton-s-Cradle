class Bob{

    constructor(x,y,r){
    
        var option={
           isStatic : false,
            restitution : 1,
            density : 0.8,
            friction : 0
        }
        this.x=x;
        this.y=y;
        this.radius=r;
        this.paper = Bodies.circle(this.x,this.y,(this.radius)/2,option);
      
        World.add(world, this.paper);
    
    }
    
    
   display(){
    
   
   var pos = this.paper.position; 
    //var angle = this.paper.angle;
    push();
    translate(pos.x,pos.y);
    //rotate(angle);
    fill("pink");
    ellipseMode(CENTER);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
   
    
    }