class rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}

        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posA=this.chain.bodyA.position;
        strokeWeight(4);
        line(posA.x,posA.y,this.chain.bodyB.position.x+this.offsetX,this.chain.bodyB.position.y+this.offsetY);
    }

}