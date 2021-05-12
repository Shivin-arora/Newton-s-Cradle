class Chain{

    constructor(BodyA,BodyB,offsetX,offsetY){
this.offsetX=offsetX;
this.offsetY=offsetY;

        var options={
    bodyA:BodyA,
    bodyB:BodyB,
    pointB:{x:this.offsetX, y:this.offsetY}

   

}      
        this.body= Constraint.create(options);
        World.add(world,this.body);

    }

display(){ 
    var pos1 = this.body.bodyA.position;
    var pos2 = this.body.bodyB.position;

    var shiv1 = pos2.x+this.offsetX;
    var shiv2 = pos2.y+this.offsetY;

    var pos1x = pos1.x;
    var pos1y = pos1.y;
    

    strokeWeight(4);
    line(pos1x,pos1y,shiv1,shiv2);
   
}

}