class Slingshot{
    constructor(bodyA,pointB){
        var options={
            
            bodyA :bodyA,
            pointB :pointB,
            stiffness:0.1,
            length :5
        }
        //this.image = loadImage('polygon.png');

        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA =null;

    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
    
    
    
}
